/*
TypeScript泛型介绍
软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
*/

function identity(arg1: number): number {
    return arg1;
}

/*或者，我们使用any类型来定义函数：*/

function identity1(arg: any): any {
    return arg;
}
/*虽然使用any类型后这个函数已经能接收任何类型的arg参数，
但是却丢失了一些信息：传入的类型与返回的类型应该是相同的。 
如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。*/

/*因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 
这里，我们使用了 类型变量，它是一种特殊的变量，
只用于表示类型而不是值。*/

function identity2<T>(arg: T): T {
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
let output = identity2<string>("myString");  // type of output will be 'string'


/*方法二*/
/*利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型*/
let output1 = identity2("myString");  // type of output will be 'string'
/*我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。*/
/*如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型*/


function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
/*此处T约束参数arg*/
/*记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。*/

function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
loggingIdentity1([1, 2, "222"]);
/*泛型函数loggingIdentity，接收类型参数T，和函数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。*/
/*这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。*/
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
loggingIdentity2([1, 2, "222"]);
loggingIdentity2<number>([1, 2]);
 
/*var s:string[] = new Array();
s.push(1);*/

/*泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样*/
function identity3<T>(arg: T): T {
    return arg;
}

/*定义泛型函数的几种方法*/
/*方法1*/
let myIdentity: <T>(arg: T) => T = identity3;
/*定义普通函数的语法：" (arg:参数类型) = > 返回值类型" */
/*" <T>(arg: T) => T " 定义myIdentity为泛型为T的函数*/

/*我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。*/
let myIdentity1: <U>(arg: U) => U = identity3;

/*方法2*/
/*对象字面量来定义泛型函数类型*/
let myIdentity2: { <T>(arg: T): T } = identity3;
/*对象字面量来定义函数类型*/
let myIdentity32: {():any};
myIdentity32 = function(){

}
/*声明泛型接口*/
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity4<T>(arg: T): T {
    return arg;
}

let myIdentity47: GenericIdentityFn = identity4;

/*把泛型参数当作整个接口的一个参数。 这样接口里的其它成员也能知道这个参数的类型了*/
interface GenericIdentityFn1s<T> {
    /*<T>(arg: T): T;*/
    (arg: T): T;
}

function identity5<T>(arg: T): T {
    return arg;
}

let myIdentity51: GenericIdentityFn1s<number> = identity5;
myIdentity51("2");


/*声明泛型类*/
/* 泛型类使用（ <>）括起泛型类型，跟在类名后面*/
/*类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。*/
class GenericNumber1<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber1 = new GenericNumber1<number>();
myGenericNumber1.zeroValue = 0;
// myGenericNumber1.zeroValue = "0";
myGenericNumber1.add = function(x, y) { return x + y; };
// myGenericNumber1.add(myGenericNumber.zeroValue, "test")

let stringNumeric2 = new GenericNumber1<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };
stringNumeric.add(stringNumeric.zeroValue, "test");


/*给泛型添加泛型约束*/

function loggingIdentity3<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
/*编译器并不能证明每种类型都有length属性，所以就报错了*/
/*相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型*/
/*只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。*/

/*为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字还实现约束：*/
interface Lengthwise {
    length: number;
}

function loggingIdentity4<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

/*现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：*/
loggingIdentity4(3);  // Error, number doesn't have a .length property

/*我们需要传入符合约束类型的值，必须包含必须的属性：*/
loggingIdentity4({length: 10, value: 3});

/*在泛型约束中使用类型参数*/
/*你可以声明一个类型参数，且它被另一个类型参数所约束。比如，*/

interface Findable<T> {
    length: number;
    name : T;
}

function find<T, U extends Findable<T>>(n: T, s: U) {
  // ...
}
find (1, {name:1, length:12});
//find (1, {name:"1", length:12});

/*在泛型里使用类类型*/
/*在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，*/
function create<T>(c: {new(): T}): T {
    return new c();
}

function create1<T>(c: {(): T}): T {
    return c();
}

class BeeKeeper1 {
    hasMask: boolean;
}

class BeeKeeper2 {
    hasMask: boolean;
}

function xgq(){
     return "ss";
}

create(BeeKeeper1);
create(BeeKeeper2);
create1(xgq);

/*使用原型属性推断并约束构造函数与类实例的关系。*/
class BeeKeeper12 {
    hasMask: boolean;
}

class ZooKeeper1 {
    nametag: string;
}

class Animal1 {
    numLegs: number;
}

class Bee1 extends Animal1 {
    keeper: BeeKeeper12;
}

class Lion1 extends Animal1 {
    keeper: ZooKeeper1;
}

class Lion2 extends Animal1 {
    keeper: ZooKeeper1;
}

function findKeeper<A extends Animal1, K> (a: {new(): A; prototype: {keeper: K}}): K {

    return a.prototype.keeper;
}

findKeeper(Lion1).nametag; 


findKeeper<Lion2,ZooKeeper1>(Lion1).nametag; 




