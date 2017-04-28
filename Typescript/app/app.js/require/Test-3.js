"use strict";
exports.__esModule = true;
var telValidator = require("./TelValidator");
var emailValidator = require("./EmailValidator");
//-------------------显示信息 1---------------------
function showMsgs1() {
    //--方法一---
    var telObj = new emailValidator.EmailValidator(); //
    var tel = "13697811809";
    var flag = telObj.isAcceptable(tel); //调用 TelValidator 类的isAcceptable 方法
    console.log(flag ? tel + " 匹配 " : tel + "\t 不匹配 ");
    $("#msg1").html(flag ? "<span style='color:red;'>" + tel + " 匹配</span> " :
        "<span>" + tel + "\t 不匹配</span>");
}
$(function () {
    //showMsgs1();
    var strings = ['13697811809', 'jilongliang@sina.com'];
    var validators = {};
    validators['email'] = new emailValidator.EmailValidator();
    validators['tel'] = new telValidator.TelValidator();
    strings.forEach(function (s) {
        for (var name in validators) {
            console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches' : ' does not match ') + name);
        }
    });
});
//# sourceMappingURL=Test-3.js.map