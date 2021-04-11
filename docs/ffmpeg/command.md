# ffmpeg命令


##

-vf  视频滤镜

-c:v 视频编码器

-c:a 音频编码器


## 1、基本信息查询命令

#### 格式转变换
```
ffmpeg -i infile.mp4 -vcodec copy -acodec copy outfile.flv
```

ffmpeg -i out.flv -vcodec copy -acodec copy cai.mp4

ffmpeg -i out.flv -c copy -c:s mov_text output.mp4 -y

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





