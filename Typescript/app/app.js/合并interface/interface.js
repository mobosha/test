"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 以上合并完成
var box = { height: 5, width: 6, scale: 10 };
// 合并命名空间
// 对于命名空间的合并，模块导出的同名接口进行合并，构成单一命名空间内含合并后的接口，对于命名空间里值的合并，如果当前已经存在给定名字的命名空间，那么后来的命名空间的导出成员会被加到已经存在的那个模块里
var Animals1;
(function (Animals1) {
    var Zebra = (function () {
        function Zebra() {
        }
        return Zebra;
    }());
    Animals1.Zebra = Zebra;
})(Animals1 || (Animals1 = {}));
(function (Animals1) {
    var Dog = (function () {
        function Dog() {
        }
        return Dog;
    }());
    Animals1.Dog = Dog;
})(Animals1 || (Animals1 = {}));
// 以上合并完成
// namespace Animals1 {
//     export interface Legged { numberOfLegs: number; }
//     export class Zebra { }
//     export class Dog { }
// }
// 除了这些合并外，你还需要了解非导出成员是如何处理的。 非导出成员仅在其原有的（合并前的）命名空间内可见。这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员。
var Animal;
(function (Animal) {
    var haveMuscles = true;
    function animalsHaveMuscles() {
        return haveMuscles;
    }
    Animal.animalsHaveMuscles = animalsHaveMuscles;
})(Animal || (Animal = {}));
(function (Animal) {
    function doAnimalsHaveMuscles() {
        return haveMuscles; // <-- error, haveMuscles is not visible here
    }
    Animal.doAnimalsHaveMuscles = doAnimalsHaveMuscles;
})(Animal || (Animal = {}));
// 以上合并完成
// 因为haveMuscles并没有导出，只有animalsHaveMuscles函数共享了原始未合并的命名空间可以访问这个变量。 doAnimalsHaveMuscles函数虽是合并命名空间的一部分，但是访问不了未导出的成员。
/*命名空间与类和函数和枚举类型合并*/
//1.合并命名空间和类
var Album = (function () {
    function Album() {
    }
    return Album;
}());
(function (Album) {
    var AlbumLabel = (function () {
        function AlbumLabel() {
        }
        return AlbumLabel;
    }());
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
// 合并规则与上面合并命名空间小节里讲的规则一致，我们必须导出AlbumLabel类，好让合并的类能访问。 合并结果是一个类并带有一个内部类。 你也可以使用命名空间为类增加一些静态属性。
//2.合并命名空间和函数
function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
(function (buildLabel) {
    buildLabel.suffix = "";
    buildLabel.prefix = "Hello, ";
})(buildLabel || (buildLabel = {}));
console.log(buildLabel("Sam Smith"));
// 除了内部类的模式，你在JavaScript里，创建一个函数稍后扩展它增加一些属性也是很常见的。 Typescript使用声明合并来达到这个目的并保证类型安全
//3.命名空间可以用来扩展枚举型
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    function mixColor(colorName) {
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
    Color.mixColor = mixColor;
})(Color || (Color = {}));
var c1 = Color.mixColor('magenta');
console.log(c1);
// 非法的合并
// TypeScript并非允许所有的合并。 目前，类不能与其它类或变量合并。 想要了解如何模仿类的合并，请参考TypeScript的混入。
// 模块扩展
// observable.js
var Observable = (function () {
    function Observable() {
    }
    return Observable;
}());
exports.Observable = Observable;
// map.js
var observable_1 = require("./observable");
exports.Observable = observable_1.Observable;
observable_1.Observable.prototype.map = function (f) {
    // ... another exercise for the reader
};
//# sourceMappingURL=interface.js.map