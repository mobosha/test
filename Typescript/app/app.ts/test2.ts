/// <reference path="jquery.d.ts" />
/// <reference path="module.ts" />
var strs: Array<any> = ["13697811800", "jilongliang@sina.com"];
var validators1: { [s: string]: ValidationUtils.StringValidator; } = {};
validators1["Tel"] = new ValidationUtils.TelValidator;//验证码 QQ
validators1["Email"] = new ValidationUtils.EmailValidator;//验证 Email
//-------显示信息 1----------------------------
function showMsg1(): void {
    strs.forEach
        (s => {
            for (var name in validators1) {
                console.log('"' + s + '" ' + (validators1[name].isAcceptable(s) ? '匹配 ' : ' 不匹配 ') + name);
            }
        }
        );
}
//-------------------显示信息 2---------------------
function showMsg2(): void {
    //--方法一---
    var telObj: ValidationUtils.TelValidator;
    telObj = new ValidationUtils.TelValidator;
    //--方法二---
    //var telObj=new ValidationUtils.TelValidator;
    var tel: string = "13697811809";
    var flag: boolean = telObj.isAcceptable(tel);//调用 TelValidator 类的isAcceptable 方法
    console.log(flag ? tel + " 匹配 " : tel + "\t 不匹配 ");
    $("#msg2").html(flag ? "<span style='color:red;'>" + tel + " 匹配</span> " :
        "<span>" + tel + "\t 不匹配</span>");
}
$(function () {
    showMsg1();
    showMsg2();
});