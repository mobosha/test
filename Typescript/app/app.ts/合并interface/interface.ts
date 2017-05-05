/**
* Merging Interfaces
* 合并接口..
* 最简单的，也许是最常见的，类型声明合并是合并接口。将两个相同的接口合并在一块.
*/
// interface Box {
//     height: number;
//     width: number;
// }
// interface Box {
//     scale: number;
// }
// var box: Box = { height: 5, width: 6, scale: 10 };
interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: string): HTMLElement;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}
/**
* Merging Interfaces
* 合并接口..
*/
// var box = { height: 5, width: 6, scale: 10 };


// interface Box1 {
//     height: number;
//     width: number;
// }

// interface Box1 {
//     scale: number;
// }

// let box1: Box1 = {height: 5, width: 6, scale: 10};



/*TypeScript声明合并，对本文件来讲，“声明合并”是指编译器将针对同一个名字的两个独立声明合并为单一声明。 合并后的声明同时拥有原先两个声明的特性。 任何数量的声明都可被合并；不局限于两个声明。*/
// 接口合并，非函数成员
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}
// 以上合并完成
let box: Box = {height: 5, width: 6, scale: 10};


// 接口合并函数成员
// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。 同时需要注意，当接口 A与后来的接口A合并时，后面的接口具有更高的优先级。
interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}
// 以上合并完成
interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
}


// 这个规则有一个例外是当出现特殊的函数签名时。 如果签名里有一个参数的类型是 单一的字符串字面量（比如，不是字符串字面量的联合类型），那么它将会被提升到重载列表的最顶端。
interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
// 以上合并完成
interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}


// 合并命名空间
// 对于命名空间的合并，模块导出的同名接口进行合并，构成单一命名空间内含合并后的接口，对于命名空间里值的合并，如果当前已经存在给定名字的命名空间，那么后来的命名空间的导出成员会被加到已经存在的那个模块里
namespace Animals1 {
    export class Zebra { }
}

namespace Animals1 {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}
// 以上合并完成
// namespace Animals1 {
//     export interface Legged { numberOfLegs: number; }

//     export class Zebra { }
//     export class Dog { }
// }


// 除了这些合并外，你还需要了解非导出成员是如何处理的。 非导出成员仅在其原有的（合并前的）命名空间内可见。这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员。
namespace Animal {
    let haveMuscles = true;

    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}
namespace Animal {
    export function doAnimalsHaveMuscles() {
        return haveMuscles;  // <-- error, haveMuscles is not visible here
    }
}
// 以上合并完成
// 因为haveMuscles并没有导出，只有animalsHaveMuscles函数共享了原始未合并的命名空间可以访问这个变量。 doAnimalsHaveMuscles函数虽是合并命名空间的一部分，但是访问不了未导出的成员。



/*命名空间与类和函数和枚举类型合并*/
//1.合并命名空间和类
class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { }
}
// 合并规则与上面合并命名空间小节里讲的规则一致，我们必须导出AlbumLabel类，好让合并的类能访问。 合并结果是一个类并带有一个内部类。 你也可以使用命名空间为类增加一些静态属性。



//2.合并命名空间和函数
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel { //命名空间用来扩展函数，给它增加一些属性
    export let suffix = "";
    export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));
// 除了内部类的模式，你在JavaScript里，创建一个函数稍后扩展它增加一些属性也是很常见的。 Typescript使用声明合并来达到这个目的并保证类型安全



//3.命名空间可以用来扩展枚举型
enum Color {
    red = 1,
    green = 2,
    blue = 4
}
namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}
var c1 = Color.mixColor('magenta');
console.log(c1);



// 非法的合并
// TypeScript并非允许所有的合并。 目前，类不能与其它类或变量合并。 想要了解如何模仿类的合并，请参考TypeScript的混入。



// 模块扩展
// observable.js
export class Observable<T> {
    // ... implementation left as an exercise for the reader ...
}

// map.js
import { Observable } from "./observable";
Observable.prototype.map = function (f) {
    // ... another exercise for the reader
}