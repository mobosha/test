/**import、require、export 关键的使用..***********/
//--导入--ValidationUtils3.ts 文件---
import validation = require('./ValidationUtils3');
// 匹配 email 正则表达式
var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export class EmailValidator implements validation.StringValidator {
    
isAcceptable(s: string) {
return emailReg.test(s);
}
}