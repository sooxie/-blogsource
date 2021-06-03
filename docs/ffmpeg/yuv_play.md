# YUV


CMSampleBufferRef介绍
这个结构在iOS中表示一帧音频/视频数据。
它里面包含了这一帧数据的内容和格式。
我们可以把它的内容取出来，提取出/转换成 我们想要的数据。


代表视频的CMSampleBufferRef中保存的数据是yuv420格式的视频帧(因为我们在视频输出设置中将输出格式设为：kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange)。


代表音频的CMSampleBufferRef中保存的数据是PCM格式的音频帧。


yuv是什么？NV12又是什么？
视频是由一帧一帧的数据连接而成，而一帧视频数据其实就是一张图片。
yuv是一种图片储存格式，跟RGB格式类似。
RGB格式的图片很好理解，计算机中的大多数图片，都是以RGB格式存储的。
yuv中，y表示亮度，单独只有y数据就可以形成一张图片，只不过这张图片是灰色的。u和v表示色差(u和v也被称为：Cb－蓝色差，Cr－红色差)，
为什么要yuv？
有一定历史原因，最早的电视信号，为了兼容黑白电视，采用的就是yuv格式。
一张yuv的图像，去掉uv，只保留y，这张图片就是黑白的。
而且yuv可以通过抛弃色差来进行带宽优化。
比如yuv420格式图像相比RGB来说，要节省一半的字节大小，抛弃相邻的色差对于人眼来说，差别不大。
一张yuv格式的图像，占用字节数为 (width * height + (width * height) / 4 + (width * height) / 4) = (width * height) * 3 / 2
一张RGB格式的图像，占用字节数为（width * height） * 3
在传输上，yuv格式的视频也更灵活(yuv3种数据可分别传输)。
很多视频编码器最初是不支持rgb格式的。但是所有的视频编码器都支持yuv格式。
综合来讲，我们选择使用yuv格式，所以我们编码之前，首先将视频数据转成yuv格式。
我们这里使用的就是yuv420格式的视频。
yuv420也包含不同的数据排列格式：I420，NV12，NV21.
其格式分别如下，
I420格式：y,u,v 3个部分分别存储：Y0,Y1...Yn,U0,U1...Un/2,V0,V1...Vn/2
NV12格式：y和uv 2个部分分别存储：Y0,Y1...Yn,U0,V0,U1,V1...Un/2,Vn/2
NV21格式：同NV12，只是U和V的顺序相反。
综合来说，除了存储顺序不同之外，上述格式对于显示来说没有任何区别。
使用哪种视频的格式，取决于初始化相机时设置的视频输出格式。



从CMSampleBufferRef中提取yuv数据
在前面的文章(使用系统接口捕获视频)中，初始化输出设备时，我们将输出的数据设置为kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange。
因此在CMSampleBufferRef中保存的是yuv420(NV12)格式数据。
通过下面的方法将CMSampleBufferRef转为yuv420(NV12)。



```

// AWVideoEncoder.m文件
-(NSData *) convertVideoSmapleBufferToYuvData:(CMSampleBufferRef) videoSample{
    // 获取yuv数据
    // 通过CMSampleBufferGetImageBuffer方法，获得CVImageBufferRef。
    // 这里面就包含了yuv420(NV12)数据的指针
    CVImageBufferRef pixelBuffer = CMSampleBufferGetImageBuffer(videoSample);
    
    //表示开始操作数据
    CVPixelBufferLockBaseAddress(pixelBuffer, 0);
    
    //图像宽度（像素）
    size_t pixelWidth = CVPixelBufferGetWidth(pixelBuffer);
    //图像高度（像素）
    size_t pixelHeight = CVPixelBufferGetHeight(pixelBuffer);
    //yuv中的y所占字节数
    size_t y_size = pixelWidth * pixelHeight;
    //yuv中的uv所占的字节数
    size_t uv_size = y_size / 2;
    
    uint8_t *yuv_frame = aw_alloc(uv_size + y_size);
    
    //获取CVImageBufferRef中的y数据
    uint8_t *y_frame = CVPixelBufferGetBaseAddressOfPlane(pixelBuffer, 0);
    memcpy(yuv_frame, y_frame, y_size);
    
    //获取CMVImageBufferRef中的uv数据
    uint8_t *uv_frame = CVPixelBufferGetBaseAddressOfPlane(pixelBuffer, 1);
    memcpy(yuv_frame + y_size, uv_frame, uv_size);
    
    CVPixelBufferUnlockBaseAddress(pixelBuffer, 0);
    
    //返回数据
    return [NSData dataWithBytesNoCopy:yuv_frame length:y_size + uv_size];
}



```


将GPUImage获取到的BGRA格式的图片转成yuv(NV12)格式



```
//AWGPUImageAVCapture.m文件
-(void)newFrameReadyAtTime:(CMTime)frameTime atIndex:(NSInteger)textureIndex{
    [super newFrameReadyAtTime:frameTime atIndex:textureIndex];
    if(!self.capture || !self.capture.isCapturing){
        return;
    }
    //将bgra转为yuv
    //图像宽度
    int width = imageSize.width;
    //图像高度
    int height = imageSize.height;
    //宽*高
    int w_x_h = width * height;
    //yuv数据长度 = (宽 * 高) * 3 / 2
    int yuv_len = w_x_h * 3 / 2;
    
    //yuv数据
    uint8_t *yuv_bytes = malloc(yuv_len);
    
    //ARGBToNV12这个函数是libyuv这个第三方库提供的一个将bgra图片转为yuv420格式的一个函数。
    //libyuv是google提供的高性能的图片转码操作。支持大量关于图片的各种高效操作，是视频推流不可缺少的重要组件，你值得拥有。
    [self lockFramebufferForReading];
    ARGBToNV12(self.rawBytesForImage, width * 4, yuv_bytes, width, yuv_bytes + w_x_h, width, width, height);
    [self unlockFramebufferAfterReading];
    
    NSData *yuvData = [NSData dataWithBytesNoCopy:yuv_bytes length:yuv_len];
    
    [self.capture sendVideoYuvData:yuvData];
}


```


从CMSampleBufferRef中提取PCM数据

```
// AWAudioEncoder.m 文件
-(NSData *) convertAudioSmapleBufferToPcmData:(CMSampleBufferRef) audioSample{
    //获取pcm数据大小
    NSInteger audioDataSize = CMSampleBufferGetTotalSampleSize(audioSample);
    
    //分配空间
    int8_t *audio_data = aw_alloc((int32_t)audioDataSize);
    
    //获取CMBlockBufferRef
    //这个结构里面就保存了 PCM数据
    CMBlockBufferRef dataBuffer = CMSampleBufferGetDataBuffer(audioSample);
    //直接将数据copy至我们自己分配的内存中
    CMBlockBufferCopyDataBytes(dataBuffer, 0, audioDataSize, audio_data);
    
    //返回数据
    return [NSData dataWithBytesNoCopy:audio_data length:audioDataSize];
}


```