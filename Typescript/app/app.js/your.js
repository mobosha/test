/**
*声明一个 ValidationUtils 工具块 module
*推荐使用.
*/
var ValidationUtils;
(function (ValidationUtils) {
    // 匹配 email 正则表达式
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var EmailValidator = (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isAcceptable = function (s) {
            return emailReg.test(s);
        };
        return EmailValidator;
    }());
    ValidationUtils.EmailValidator = EmailValidator;
    //匹配移动电话号码
    var telReg = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
    var TelValidator = (function () {
        function TelValidator() {
        }
        TelValidator.prototype.isAcceptable = function (s) {
            return telReg.test(s);
        };
        return TelValidator;
    }());
    ValidationUtils.TelValidator = TelValidator;
})(ValidationUtils || (ValidationUtils = {}));
/// <reference path="jquery.d.ts" />
/// <reference path="module.ts" />
var strs = ["13697811800", "jilongliang@sina.com"];
var validators1 = {};
validators1["Tel"] = new ValidationUtils.TelValidator; //验证码 QQ
validators1["Email"] = new ValidationUtils.EmailValidator; //验证 Email
//-------显示信息 1----------------------------
function showMsg1() {
    strs.forEach(function (s) {
        for (var name in validators1) {
            console.log('"' + s + '" ' + (validators1[name].isAcceptable(s) ? '匹配 ' : ' 不匹配 ') + name);
        }
    });
}
//-------------------显示信息 2---------------------
function showMsg2() {
    //--方法一---
    var telObj;
    telObj = new ValidationUtils.TelValidator;
    //--方法二---
    //var telObj=new ValidationUtils.TelValidator;
    var tel = "13697811809";
    var flag = telObj.isAcceptable(tel); //调用 TelValidator 类的isAcceptable 方法
    console.log(flag ? tel + " 匹配 " : tel + "\t 不匹配 ");
    $("#msg2").html(flag ? "<span style='color:red;'>" + tel + " 匹配</span> " :
        "<span>" + tel + "\t 不匹配</span>");
}
$(function () {
    showMsg1();
    showMsg2();
});
