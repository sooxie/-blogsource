# ffplay命令







## 1、播放

#### 播放YUV
```
ffplay -video_size 1280x720 -pixel_format yuv420p -i video.yuv

```
- -video_size 视频尺寸
- -pixel_format 视频格式（yuv420p , nv12）



#### 播放YUV中的 Y平面
```
ffplay -pix_fmt nv21 -s 640x480 -vf extractplanes='y' 1.yuv
```


#### 播放PCM

```
ffplay -ar 44100 -ac 1 -f s16le -i ./audio.pcm

-ar 表示采样率

-ac 表示音频通道数


-f 表示 pcm 格式，sample_fmts + le(小端)或者 be(大端)
	sample_fmts可以通过ffplay -sample_fmts来查询

-i 表示输入文件，这里就是 pcm 文件

```



## 2、裁剪和合并命令

#### 裁剪
- -ss 开始时间
- -t 裁剪长度
```
ffmpeg -i in.flv -ss 00:00:00 -t 10 out.flv
```

#### 视频合并
- -f concat 对文件拼接
```
ffmpeg -i in.flv -ss 00:00:00 -t 10 out.flv
```


## 3、录制命令


## 4、图片/视频互转命令

#### 视频转图片
-r 帧率
-f 转换格式


## 5、分解/复用命令


## 6、直播命令

-re


## 7、处理原始数据命令




### 提取原始YUV

```sh
ffmpeg -i 
```

### 提取原始PCM

```sh
ffmpeg -i 
```

## 8、滤镜命令

#### 尺寸裁剪





# ffmpeg命令
