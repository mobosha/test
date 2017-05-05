/*
TypeScript泛型介绍
软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(arg) {
    return arg;
}
/*或者，我们使用any类型来定义函数：*/
function identity1(arg) {
    return arg;
}
/*虽然使用any类型后这个函数已经能接收任何类型的arg参数，
但是却丢失了一些信息：传入的类型与返回的类型应该是相同的。
如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。*/
/*因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。
这里，我们使用了 类型变量，它是一种特殊的变量，
只用于表示类型而不是值。*/
function identity2(arg) {
    return arg;
}
/*
我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
之后我们再次使用T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。
不同于使用 any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。
*/
/*两种方法使用泛型函数*/
/*方法一*/
/*明确的指定T的类型，并做为一个参数传给函数，使用了<>括起来而不是()*/
var output = identity2("myString"); // type of output will be 'string'
/*方法二*/
/*利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型*/
var output1 = identity2("myString"); // type of output will be 'string'
/*我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。*/
/*如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型*/
function loggingIdentity(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
/*此处T约束参数arg*/
/*记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。*/
function loggingIdentity1(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
loggingIdentity1([1, 2, "222"]);
/*泛型函数loggingIdentity，接收类型参数T，和函数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。*/
/*这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。*/
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
loggingIdentity2([1, 2, "222"]);
/*var s:string[] = new Array();
s.push(1);*/
/*泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样*/
function identity3(arg) {
    return arg;
}
/*定义泛型函数的几种方法*/
/*方法1*/
var myIdentity = identity3;
/*定义普通函数的语法：" (arg:参数类型) = > 返回值类型" */
/*" <T>(arg: T) => T " 定义myIdentity为泛型为T的函数*/
/*我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。*/
var myIdentity1 = identity;
/*方法2*/
/*对象字面量来定义泛型函数类型*/
var myIdentity2 = identity;
/*对象字面量来定义函数类型*/
var myIdentity3;
function identity4(arg) {
    return arg;
}
var myIdentity4 = identity4;
function identity5(arg) {
    return arg;
}
var myIdentity5 = identity5;
/*声明泛型类*/
/* 泛型类使用（ <>）括起泛型类型，跟在类名后面*/
/*类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。*/
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
//myGenericNumber.zeroValue = "0";
myGenericNumber.add = function (x, y) { return x + y; };
//myGenericNumber.add(myGenericNumber.zeroValue, "test")
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
stringNumeric.add(stringNumeric.zeroValue, "test");
/*给泛型添加泛型约束*/
function loggingIdentity3(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
function loggingIdentity4(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
/*现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：*/
loggingIdentity4(3); // Error, number doesn't have a .length property
/*我们需要传入符合约束类型的值，必须包含必须的属性：*/
loggingIdentity4({ length: 10, value: 3 });
function find(n, s) {
    // ...
}
find(1, { name: 1, length: 12 });
//find (1, {name:"1", length:12});
/*在泛型里使用类类型*/
/*在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，*/
function create(c) {
    return new c();
}
/*使用原型属性推断并约束构造函数与类实例的关系。*/
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function findKeeper(a) {
    return a.prototype.keeper;
}
findKeeper(Lion).nametag;
//# sourceMappingURL=泛型.js.map