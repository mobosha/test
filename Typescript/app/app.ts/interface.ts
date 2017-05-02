//~~~~~~~~~~~~~~~~~~~~~~用接口interface描述对象类型的数据结构，属性不可选
interface IUserInfo {
    age: any;//定义一个任何变量的 age. userName :string;//定义一个 username. 
}

//var p: IUserInfo = { age: "", name: "" }; //报错

var p: IUserInfo = { age: "" };

//~~~~~~~~~~~~~~~~~~~~~~用接口interface描述对象类型的数据结构，属性可选
interface SquareConfig { color?: string; width?: number; }

function createSquare1(config: SquareConfig): { color: string; area: number } {
    //此时 newSquare 里面的参数必须与 :后面里面的参数名称一致. 
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    } if (config.width) {
        newSquare.area = newSquare.area * config.width;
    }
    return newSquare;
}

var mySquare1 = createSquare({ color: "red" });
var mySquare1 = createSquare({ color: "red" });

//与接口的变量 color 一样，此时这个值 是取出是默认值 color=red 
//var mySquare2 = createSquare({color1: "red"}); //报错
//与接口的变量 color 不一样，此时这个值是取出是默认值 color=white

//~~~~~~~~~~~~~~~~~~~~~~用接口interface描述函数function类型的数据结构（参数和返回值类型）
interface searchFunt { //声明一个两个变量.. 
    (source: string, subString: string, other: boolean): boolean;
}

var mySearch: searchFunt;//声明一个 interface 变量接收 

mySearch = function (source: string, subString: string,/*other:boolean, other1:string*/) {//function的参数个数可以不匹配
    var result = source.search(subString);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}

//~~~~~~~~~~~~~~~~~~~~~~用接口interface描述数组Array类型的数据结构（索引和数组成员的数据类型）
interface StringArray {
    [index: number]: string;//约束索引index的数据类型为number，成员的数据类型为string
    length: number; //约束length属性为number类型
}
var myArray: StringArray;
myArray = ["Bob", "Fred"];
myArray.length = 2;
//myArray.length = "2"; //报错


//~~~~~~~~~~~~~~~~~~~~~~用接口interface约束类class的数据结构
interface IClock {
    currentTime: Date;
    setTime(d: Date);
}
//--实现 IClock 接口 
//实现一个接口的class的数据结构需要符合接口规定的数据结构
class Clock implements IClock {
    //静态的属性，属于class，并不属于class的实例
    static classname: string;
    //！需要符合接口规定，不可缺省
    currentTime: Date;
    //--构造函数方法 
    constructor(h: number, m: number) { }
    //！需要符合接口规定，不可缺省
    setTime(d: Date) {
        this.currentTime = d;
    }
}

var date = new Clock(1, 1);
Clock.classname = "xgq";
console.log("date", date);
console.log("Clock.classname", Clock.classname);

/*当使用类和接口的时候，我们需要知道类有两种类型：static(静态)部分和instance(实例)部分。
static(静态)部分->是属于class的，如构造函数、static关键字标记的属性等
instance(实例)部分->是属于class的实例的
如果尝试一个类去实现一个带有构造签名的interface，TypeScript类型检查会提示你错误。*/


interface ClockInterface {
    //构造签名,约束构造函数的数据结构
    new (hour: number, minute: number);
}
/*TypeScript类型检查会提示你错误*/
/*class Clock implements ClockInterface  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}*/
/*这是因为一个类去实现接口的时候，只有instance(实例)的部分才会被检查。而构造函数属于静态部分，所以不会被类型检查。*/


/*可以直接在类中实现这些(static)静态部分*/
interface IClock1 {
    new (hour: number, minute: number);
    // interfacename: string;
}
//此处不用implements来约束class的数据结构
class Clock1 {
    currentTime: Date;//此属性不受interface IClock1约束
    constructor(h: number, m: number) { }
}
//Clock1中必须要符合IClock1接口中规定的数据结构，同时也可以自行扩展属性，如Clock1的currentTime
var cs: IClock1 = Clock1;
var newClock = new cs(7, 30);


//接口扩展
interface IShape {
    color: string;
    
}
interface PenStroke {
    penWidth: number;
}
//--接口继承接口,用，分割开多继承. 
//interface ISquare 的成员包含继承IShape的color，PenStroke的penWidth 属性，并且自定义的sideLength属性
interface ISquare extends IShape, PenStroke {
    sideLength: number;
}

var square = <ISquare>{}; //Array<string> string[]
var square = <ISquare>{}; //Array<string> string[]
//var square3: ISquare= {color:"red",penWidth:1,sideLength:1,re:'s'}; 
var square3: ISquare = { color: "red", penWidth: 1, sideLength: 1 };
var square1: any[] = [];
var square2: Array<string> = [];
square.color = "blue";
square.sideLength = 10;
//square.penWidth = 5.0;
var s = new Array<string>();





//描述混合类型
