# AVAudioSession

音频会话充当应用程序和操作系统之间的中介——反过来，也充当底层音频硬件之间的中介。你使用音频会话向操作系统传达应用音频的一般性质，而无需详细说明特定行为或与音频硬件的必要交互。您将这些细节的管理委托给音频会话，这可以确保操作系统能够最好地管理用户的音频体验。

所有iOS、tvOS和watchOS应用程序都有一个默认的音频会话，它预先配置了以下行为:

- 它支持音频回放，但禁止音频录制(tvOS不支持音频录制)。
- 在iOS中，将铃声/静音开关设置为静音模式，应用正在播放的任何音频都会被静音。
- 在iOS系统中，锁定设备会让应用的音频静音。
- 当应用程序播放音频时，它会静音任何其他背景音频。

虽然默认音频会话提供了有用的行为，但它通常不提供媒体应用所需的音频行为。要改变默认行为，你需要配置应用程序的音频会话类别。

有7个类别你可以使用(见音频会话类别和模式)，但[AVAudioSessionCategoryPlayback](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/AudioSessionCategoriesandModes/AudioSessionCategoriesandModes.html#//apple_ref/doc/uid/TP40007875-CH10)是回放应用程序最常用的。这个类别表明音频播放是你的应用程序的一个中心功能。当你指定这个类别时，你的应用程序的音频继续播放即使铃声/静音开关设置为静音模式(仅适用于iOS)。使用这个类别，你也可以播放背景音频，如果你正在使用音频，AirPlay和图片背景模式。有关更多信息，请参见启用背景音频[Enabling Background Audio.](https://developer.apple.com/documentation/avfaudio/avaudiosessioncategoryplayback?language=objc)。


你使用AVAudioSession对象来配置应用的音频会话。该类是一个单例对象，用于设置音频会话的类别、模式和其他配置。你可以在应用的整个生命周期中与音频会话进行交互，但在应用启动时执行此配置通常是有用的，如下面的例子所示。

```
func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    
    // Get the singleton instance.
    let audioSession = AVAudioSession.sharedInstance()
    do {
        // Set the audio session category, mode, and options.
        try audioSession.setCategory(.playback, mode: .moviePlayback, options: [])
    } catch {
        print("Failed to set audio session category.")
    }
    
    // Other post-launch configuration.
    return true
}
```

当您使用setActive:error:或setActive:withOptions:error:方法激活会话时，音频会话将使用此配置。

> 你可以在设置类别后的任何时候激活音频会话，但通常最好推迟这个调用，直到你的应用程序开始音频回放。延迟通话可以确保您不会过早地中断任何其他可能正在进行的背景音频。