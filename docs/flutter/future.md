<!-- 
# Future

future(小写f)是future(大写f)类的一个实例。future表示异步操作的结果，可以有两种状态:未完成或已完成。

> 未完成是Dart术语，指的是Future尚未产生值之前的状态。

## Uncompleted

当你调用一个异步函数时，它会返回一个未完成的Future，这个Future等待函数的异步操作完成或抛出一个错误。

## Completed
如果异步操作成功，则Future会变为完成状态并带一个返回值。否则就会出现错误。

## Completing with a value

类型为**Future<T>**的future将以一个泛型的值结束。例如，类型为Future<String>将生成一个字符串值。如果Future不能产生可用值，那么未来的类型是**Future<void>**。

```dart
Future<void> fetchUserOrder() {
  // Imagine that this function is fetching user info from another service or database.
  return Future.delayed(Duration(seconds: 2), () => print('Large Latte'));
}

void main() {
  fetchUserOrder();
  print('Fetching user order...');
}
``` -->