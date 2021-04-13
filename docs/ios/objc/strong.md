
# 属性关键字



## assign
- 修饰基本数据类型，int，BOOL
- 修饰对象类型,不改变其引用计数
- 所指对象对象销毁后，会产生野指针,如果后续在分配对象到堆上的某块内存时，正好分到这块地址，程序就会crash


## weak
- 修饰对象类型,不改变其引用计数
- 所指对象对象销毁后，会自动置位nil

## retain
ARC下的strong等同于MRC下的retain都会把对象引用计数加1

## strong
ARC下的strong等同于MRC下的retain都会把对象引用计数加1


## copy
- 对象会调用copy方法
- 注意NSMutableArray等可变容器使用copy修饰符，如[NSMutableArray copy]会使其变成不可变对象。继续调用可变对象的方法会报错，如 NSMutableArray addObject

## block属性为什么需要用copy来修饰？

因为在MRC下，block在创建的时候，它的内存是分配在栈(stack)上的，而不是在堆(heap)上，可能被随时回收。他本身的作于域是属于创建时候的作用域，一旦在创建时候的作用域外面调用block将导致程序崩溃。通过copy可以把block拷贝（copy）到堆，保证block的声明域外使用。在ARC下编译器会自动对block进行copy操作。

## __block与__weak的区别

__block：在ARC和MRC下都可用，可修饰对象，也可以修饰基本数据类型。

__block对象可以在block被重新赋值，__weak不可以。

__weak：只在ARC中使用，只能修饰对象，不能修饰基本数据类型（int、bool）。
同时，在ARC下，要避免block出现循环引用，经常会：__weak typedof(self) weakSelf = self;
