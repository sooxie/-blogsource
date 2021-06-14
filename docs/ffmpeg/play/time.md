# 音视频同步



## 时间基
#### tbr
tbr: 帧率
如每秒25帧，每帧的时间间隔 1/25秒

#### tbn
tbn: time base of stream(流的时间基)


#### tbc
tbc: time base of codec(解码的时间基)



## 计算当前帧PTS

- 转换为秒
PTS = PTS * av_q2d(video_stream->time_base)

## 计算下一帧PTS

- video_clock:预测的下一睁

- frmae_delay: 1/tbr

- audio_clock:音频当前播放的时间戳



## 音视频同步方式

#### 1、视频同步到音频



#### 2、音频同步到视频

#### 3、音频和视频同步到系统时钟


