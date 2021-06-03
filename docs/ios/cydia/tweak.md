# Tweak





## 加载图片资源

资源文件（图片等），放在项目的layout文件浩总，对应手机的根目录/ 。 layout文件会复制到手机中



tweak
```

```





## Logos

#Tweak 

- 目录结构:https://github.com/theos/theos/wiki/Structure 
- 环境变量:http://iphonedevwiki.net/index.php/Theos 
- Logos语法:http://iphonedevwiki.net/index.php/Logos


#### 新建Tweak项目

nic.pl

```sh
nic.pl
NIC 2.0 - New Instance Creator
------------------------------
  [1.] iphone/activator_event
  [2.] iphone/activator_listener
  [3.] iphone/application_modern
  [4.] iphone/application_swift
  [5.] iphone/cydget
  [6.] iphone/flipswitch_switch
  [7.] iphone/framework
  [8.] iphone/library
  [9.] iphone/notification_center_widget
  [10.] iphone/notification_center_widget-7up
  [11.] iphone/preference_bundle_modern
  [12.] iphone/theme
  [13.] iphone/tool
  [14.] iphone/tool_swift
  [15.] iphone/tweak
  [16.] iphone/tweak_with_simple_preferences
  [17.] iphone/xpc_service
Choose a Template (required): 15
Project Name (required): AwesomeIOS
Package Name [com.yourcompany.awesomeios]: com.sooxie.awesomeios
Author/Maintainer Name [zhiping xie]: 
[iphone/tweak] MobileSubstrate Bundle filter [com.apple.springboard]: com.sooxie.AwesomeIOS
[iphone/tweak] List of applications to terminate upon installation (space-separated, '-' for none) [SpringBoard]: 
Instantiating iphone/tweak in awesomeios/...
Done.

```