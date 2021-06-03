#null safety


类型系统中的可空性


由于Null不再是一个子类型，除了特殊的Null类，其他类型都不允许值为Null。默认情况下，我们让所有类型都是非空的。如果你有一个String类型的变量，它总是包含一个字符串。在这里，我们修正了所有的空引用错误。




#### 总结


Types are non-nullable by default and made nullable by adding ?.

 - Optional parameters must be nullable or have a default value. You can use required to make named parameters non-optional. Non-nullable top-level variables and static fields must have initializers. Non-nullable instance fields must be initialized before the constructor body begins.

- Method chains after null-aware operators short circuit if the receiver is null. There are new null-aware cascade (?..) and index (?[]) operators. The postfix null assertion “bang” operator (!) casts its nullable operand to the underlying non-nullable type.

- Flow analysis lets you safely turn nullable local variables and parameters into usable non-nullable ones. The new flow analysis also has smarter rules for type promotion, missing returns, unreachable code, and variable initialization.

- The late modifier lets you use non-nullable types and final in places you otherwise might not be able to, at the expense of runtime checking. It also gives you lazy-initialized fields.

- The List class is changed to prevent uninitialized elements.

---

- null-aware operators(空感知操作符：  ？)

- 类型在默认情况下是非空的，通过添加?使其为nullable(能为空）。

- Optional parameters可选参数必须为nullable(使用？修饰)或具有默认值。您可以使用required使命名参数是非可选的。非空(Non-nullable)的顶级变量和静态字段必须有初始化器。非空(Non-nullable)实例字段必须在**构造函数体**开始之前初始化。

- 当接收端为空时，零感知操作符(null-aware operators )之后的方法链会短路。有新的感知空值的级联(?..)和index(?[])操作符。后缀空断言“bang”操作符(!)将其可空操作数强制转换为底层(基类或父类)的非空类型。

- 流分析允许您安全地将可为空的局部变量和参数转换为可用的非空变量。新的流分析还为类型提升、丢失返回、不可访问代码和变量初始化提供了更智能的规则。


- late修饰符允许您在其他情况下可能无法使用的地方使用非空类型和final，以牺牲运行时检查为代价。它还提供了延迟初始化字段。

- List类被更改以防止未初始化的元素。