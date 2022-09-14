
## Interfaces vs Types in TypeScript

stackoverflow中的讨论：https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript


接口和类型别名的选用时机：
- 在定义公共 API（如编辑一个库）时使用 interface，这样可以方便使用者继承接口；
- 在定义组件属性（Props）和状态（State）时，建议使用 type，因为 type 的约束性更强；
- type 类型不能二次编辑，而 interface 可以随时扩展。


type和interface的相同点

- 对接口定义的两种不同形式, 都是用来定义对象 或者 函数 的形状
- 它俩也支持 继承，而是可以 互相 继承，只是具体的形式稍有差别

type和interface的不同点

1. type可以定义 基本类型的别名，如 type myString = string
2. type可以通过 typeof 操作符来定义，如 type myType = typeof someObj
3. type可以申明 联合类型，如 type unionType = myType1 | myType2
4. type可以申明 元组类型，如 type yuanzu = [myType1, myType2]

5. interface可以 声明合并，type的话是 覆盖 的