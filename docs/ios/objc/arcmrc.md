# ARC MRC



## ARC

ARC(Automatic Reference Counting)

ARC主要提供了4种修饰符，他们分别是:__strong,__weak,__autoreleasing,__unsafe_unretained

#### __strong
强引用

#### __weak
弱引用

#### __autoreleasing

下面两行代码一样
```
NSString *str = [[[NSString alloc] initWithFormat:@"123"] autorelease]; // MRC
NSString *__autoreleasing str = [[NSString alloc] initWithFormat:@"123"]; // ARC
```
#### __strong

