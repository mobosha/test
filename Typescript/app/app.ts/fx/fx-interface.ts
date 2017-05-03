/**
* Working with Generic Type Variables
* 与泛型类型变量
*/
function _identity1<T>(arg: T): T {
    return arg;
}
/**
* 如果还想记录的说法“arg”与每个调用控制台的长度。我们也许会这样写
*/
function loggingIdentity1<T>(arg: T): T {
    // console.log(arg.length); // Error: T doesn't have .length
    return arg;
}


/**
*当我们这样做时，编译器会给出我们，我们使用的是“ARG”的“.length”成员的错误，但远不具
备，我们说，“ARG”有这样的成员。请记住，我们在前面说，这些类型变量站在任何和所有类型的，
所以有人使用此功能可以通过在一个'数'，而不是，它没有一个“.length”成员。
*比方说，我们实际上已经预期该功能直接对 T 的阵列，而那件 T 的工作。由于我们正在使用的阵
列，对象.length 成员应该可用。我们可以这样描述这就像我们将创建其他类型的数组：
*/
function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

/**
*我们还可以写成这样的模式 ，一个数组.length,这样避免更多的错误
*/
function loggingIdentity3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}



//ts 代码二
/**
*在前面的章节中，我们创建了工作的范围内的类型的通用身份的功能。在本节中，我们将探讨的
功能类型本身,
*以及如何创建通用接口.通用函数的类型就像那些非通用功能，具有类型参数首家上市，类似于
函数声明
*/
function identity3<T>(arg: T): T {
    return arg;
}
var myIdentity3: <T>(arg: T) => T = identity3;
/**
* 我们也可以用不同的名称在类型一般类型参数，所以只要类型变量的数量和如何类型变量用于
排队
*/
function identity4<T>(arg: T): T {
    return arg;
}
var myIdentity4: <U>(arg: U) => U = identity4;
/**
* 我们也可以写泛型类型为对象文本类型的调用签名
*/
function identity5<T>(arg: T): T {
    return arg;
}
var myIdentity5: { <T>(arg: T): T } = identity5;
/**
* 这使我们写我们的第一个通用 interface 接口。让我们以字面对象从以前的例子，它移动到一
个界面：
*/
interface GenericIdentityFn1 {
    <T>(arg: T): T;
}
function identity6<T>(arg: T): T {
    return arg;
}
var myIdentity6: GenericIdentityFn1 = identity6;
/**
* 在一个类似的例子，我们可能要移动的通用参数是整个接口的参数。这让我们看到什么类型，
我们是在通用
* （如：Dictionary<String>而不仅仅是字典）。这使得该类型参数可见的接口的所有其他成
员。
*/
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
function identity7<T>(arg: T): T {
    return arg;
}
var myIdentity7: GenericIdentityFn2<number> = identity7;



//ts代码 泛型类型与类
//泛型类也有类似形状的通用接口。泛型类在尖括号泛型类型参数列表
//--T
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

/*------number 数字类型-----*/
var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
/*------string 字符串类型-----*/
var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
alert(stringNumeric.add(stringNumeric.zeroValue, "test"));
//-----------------Generic Constraints----
/*****声明一个接口,来约束**********/
interface ILength {
    length: number;//声明一个 number 类型
}
//-function 用 extends 关键继承这个 ILength 接口约束。。
function loggingIdentity<T extends ILength>(arg: T): T {
    console.log(arg.length); //获取这个 length 值
    return arg;
}
//调用这个 loggingIdentity 方法
var object = loggingIdentity({ length: 10, value: 3 });
/**
*在使用泛型类的类型
*当我们用 typescript 去创建工厂的时候，因此有必要通过其构造函数来引用类类型
*/
function create<T>(c: { new (): T; }): T {
    return new c();
}
/***使用:一个更高级的示例使用原型属性来推断和约束的构造函数和类类型的实例侧之间的关系
*/
//养蜂人
class BeeKeeper {
    hasMask: boolean;
}
//动物管理人.
class ZooKeeper {
    nametag: string;
}
//动物
class Animals {
    numLegs: number;
}
//蜜蜂
class Bee extends Animals {
    keeper: BeeKeeper;
}
//狮子
class Lion extends Animals {
    keeper: ZooKeeper;
}
//管理人.
function findKeeper<A extends Animals, K>(a: {
    new (): A;
    prototype: { keeper: K }
}): K {
    return a.prototype.keeper;
}
//findKeeper(Lion).nametag; // 检查类型!
/**
*jQuery----
*
*/
$(function () {
    var len = $(object).attr("length");//获取这个 length 值
    var value = $(object).attr("value");//获取这个 value 值
    //alert(len);
    //alert(value);
    //var obj1:Animals=Lion;
    //console.log( findKeeper(Lion).nametag);//检查类型!
});