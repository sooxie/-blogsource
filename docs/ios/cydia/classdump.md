# clutch 


## clutch

```
Usage: clutch [OPTIONS]
-b --binary-dump <value> Only dump binary files from specified bundleID 
-d --dump <value>        Dump specified bundleID into .ipa file 
-i --print-installed     Print installed applications 
   --clean               Clean /var/tmp/clutch directory 
   --version             Display version and exit 
-? --help                Display this help and exit 
-n --no-color            Print with colors disabled 

DONE: /private/var/mobile/Documents/Dumped/
```


## DYLD_INSERT_LIBRARIES
DYLD_INSERT_LIBRARIES=dumpdecrypted.dylib   可执行文件路径


DYLD_INSERT_LIBRARIES=dumpdecrypted.dylib /private/var/containers/Bundle/Application/BEEBE24E-9CCA-41C8-8516-F28EB041843C/Aweme.app/Aweme



## apptool 


## class-dump

```
Usage: clutch [OPTIONS]
-b --binary-dump <value> Only dump binary files from specified bundleID 
-d --dump <value>        Dump specified bundleID into .ipa file 
-i --print-installed     Print installed applications 
   --clean               Clean /var/tmp/clutch directory 
   --version             Display version and exit 
-? --help                Display this help and exit 
-n --no-color            Print with colors disabled 
```


#### 导出头文件
```
class-dump -H 可执行文件 -o /Users/xx/Desktop/header
```