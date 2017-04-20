var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
//alert(colorName);
var list = [1, true, "free", 'ss'];
var notSure = 4; //notSure 这个是不确定的值，默认先给一个数字 4
notSure = "this string";
/***************创建一个对象 function.**************/
function createSquare(config) {
    //此时 newSquare 里面的参数必须与 :后面里面的参数名称一致.
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = newSquare.area * config.width;
    }
    return newSquare;
}
//--createSquare 返回的对象是 newSquare，所有只能获取 color 和 area 并获取不了 width这个属性的值..
var mySquare1 = createSquare({ color: "red" }); //与接口的变量 color 一样，此时这个值是取出是默认值 color=red
var mySquare2 = createSquare({ color: "green" }); //与接口的变量 color 不一样，此时这个值是取出是默认值 color=white
console.log(mySquare1.color + "==" + mySquare1.area); //
console.log(mySquare2.color + "==" + mySquare2.area); //
var mySquare3 = createSquare({ color: "yellow", width: 80 }); //这里给了两个变量值，一个是 color，一个是 widthconsole.log(mySquare3.color+"=="+mySquare3.area);//所以这个值必须等于 8000
console.log(mySquare3.color + "==" + mySquare3.area); //所以这个值必须等于 8000
//# sourceMappingURL=index.js.map