# 程序的装入和链接

## 装入过程
程序在系统中运行，必须装入内存，然后将其转变成可执行的程序，主要步骤
- 1、编译， 由编译程序（Compiler）对用户的源程序进行编译，形成若干个**目标模块（Object Moudule）**
- 2、链接，由链接程序(Linker)将编译后形成的一组目标模块以及它们所需要的库函数链接在一起，形成一个完整的**装入模块(Load Module)**
- 3、装入，由装入程序（Loader）将装入模块装入内存


## 1、绝对装入
绝对装入（Absolute Loading Mode）
