// TypeScript现在有两个特殊的类型：Null和Undefined
// 以前类型检查器认为null和undefined赋值给一切。实际上，null和undefined是每一个类型的有效值， 并且不能明确排除它们（因此不可能检测到错误）。
// 使用--strictNullChecks参数进行编译的
// let x2: number;
// let y2: number | undefined;
// let z2: number | null | undefined;
// x2 = 1;  // 正确
// y2 = 1;  // 正确
// z2 = 1;  // 正确
// x2 = undefined;  // 错误
// y2 = undefined;  // 正确
// z2 = undefined;  // 正确
// x2 = null;  // 错误
// y2 = null;  // 错误
// z2 = null;  // 正确
// x2 = y2;  // 错误
// x2 = z2;  // 错误
// y2 = x2;  // 正确
// y2 = z2;  // 错误
// z2 = x2;  // 正确
// z2 = y2;  // 正确



// 使用前赋值检查
// 在严格空检查模式中，编译器要求未包含undefined类型的局部变量在使用之前必须先赋值。
// 使用--strictNullChecks参数进行编译
// let x3: number;
// let y3: number | null;
// let z3: number | undefined;
// x3;  // 错误，使用前未赋值
// y3;  // 错误，使用前未赋值
// z3;  // 正确
// x3 = 1;
// y3 = null;
// x3;  // 正确
// y3;  // 正确




// 可选参数和属性
// 可选参数和属性会自动把undefined添加到他们的类型中，即使他们的类型注解明确不包含undefined。例如，下面两个类型是完全相同的：
// 使用--strictNullChecks参数进行编译
// type T1 = (x?: number) => string;              // x的类型是 number | undefined
// type T2 = (x?: number | undefined) => string;  // x的类型是 number | undefined




// 非null和非undefined类型保护
// 使用--strictNullChecks参数进行编译
declare function f(x4: number): string;
let x4: number | null | undefined;
if (x4) {
    f(x4);  // 正确，这里的x类型是number
}
else {
    //f(x4);  // 错误，这里的x类型是number？
}
let a = x4 != null ? f(x4) : "";  // a的类型是string
let b = x4 && f(x4);  // b的类型是 string | 0 | null | undefined

console.log(null === undefined);





//类型保护中的点名称
// 类型保护以前仅仅支持对局部变量和参数的检查。现在类型保护支持检查由变量或参数名称后跟一个或多个访问属性组成的“点名称”。
interface Options {
    location?: {
        x?: number;
        y?: number;
    };
}

function foo(options?: Options) {
    if (options && options.location && options.location.x) {
        const x = options.location.x;  // x的类型是number
    }
}



// 表达式操作符
function sum(a: number | null, b: number | null) {
    return a + b;  // 计算的结果值类型是number
}



