var x;
//判断这个 y 的类型是{ name: string; location: string; }
var y = { name: 'Alice', location: 'Seattle' };
x = y;
var items = [1, 2, 3]; //不压迫强迫这些额外参数...
items.forEach(function (item, index, array) { return console.log(item); });
// Should be OK!
items.forEach(function (item) { return console.log(item); });
var k = function () { return ({ name: 'Alice' }); };
var z = function () { return ({ name: 'Alice', location: 'Seattle' }); };
k = z; // OK
//z = k; //这 k()方法缺少了 location 属性.所以赋给 z()方法是会报错的.
var x;
//判断这个 y 的类型是{ name: string; location: string; }
var y = { name: 'Alice', location: 'Seattle' };
x = y;
var items = [1, 2, 3];
//不压迫强迫这些额外参数...
items.forEach(function (item, index, array) { return console.log(item); });
// Should be OK!
items.forEach(function (item) { return console.log(item); });
var k = function () { return ({ name: 'Alice' }); };
var z = function () { return ({ name: 'Alice', location: 'Seattle' }); };
k = z; // OK
//z = k; //这 k()方法缺少了 location 属性.所以赋给 z()方法是会报错的. 
//# sourceMappingURL=类型比较.js.map