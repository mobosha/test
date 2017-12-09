const querystring = require('querystring');
// 序列化
const obj = querystring.stringify({name:'scott',course:['jade','node'],from:''});
console.log(obj);
const obj1 = querystring.stringify({name:'scott',course:['jade','node'],from:''},';');
console.log(obj1);
const obj2 = querystring.stringify({name:'scott',course:['jade','node'],from:''},';',':');
console.log(obj2);


// 反序列化
const str = querystring.parse('name=scott&course=jade&course=node&from=');
console.log(str);
const str1 = querystring.parse('name=scott;course=jade;course=node;from=',';');
console.log(str1);
const str2 = querystring.parse('name:scott;course:jade;course:node;from:',';',':');
console.log(str2);

// 转义
const escape = querystring.escape('<哈哈>');
console.log(escape);

// 反转义
const unescape = querystring.unescape('%3C%E5%93%88%E5%93%88%3E');
console.log(unescape);




