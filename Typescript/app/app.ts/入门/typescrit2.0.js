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
var x4;
if (x4) {
    f(x4); // 正确，这里的x类型是number
}
else {
    f(x4); // 错误，这里的x类型是number？
}
var a = x4 != null ? f(x4) : ""; // a的类型是string
var b = x4 && f(x4); // b的类型是 string | 0 | null | undefined
