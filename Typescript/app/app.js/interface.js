//var p: IUserInfo = { age: "", name: "" }; //报错
var p = { age: "" };
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
var mySquare1 = createSquare({ color: "red" });
var mySearch; //声明一个 interface 变量接收 
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
myArray = ["Bob", "Fred"];
myArray.length = 2;
//--实现 IClock 接口 
//实现一个接口的class的数据结构需要符合接口规定的数据结构
var Clock = (function () {
    //--构造函数方法 
    function Clock(h, m) {
    }
    //！需要符合接口规定，不可缺省
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var date = new Clock(1, 1);
Clock.classname = "xgq";
console.log("date", date);
console.log("Clock.classname", Clock.classname);
//此处不用implements来约束class的数据结构
var Clock1 = (function () {
    function Clock1(h, m) {
    }
    return Clock1;
}());
//Clock1中必须要符合IClock1接口中规定的数据结构，同时也可以自行扩展属性，如Clock1的currentTime
var cs = Clock1;
var newClock = new cs(7, 30);
var s = "ss";
var square = {}; //Array<string> string[]
var square3 = { color: "red", penWidth: 1, sideLength: 1, re: 's' };
var square1 = [];
var square2 = [];
square.color = "blue";
square.sideLength = 10;
//square.penWidth = 5.0;
var s = new Array();
s.push(2);
//描述混合类型
//# sourceMappingURL=interface.js.map