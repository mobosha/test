var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//------class 与 supper 使用.----------------
var Person = (function () {
    function Person(paramVal) {
        this.userName = paramVal;
    }
    //--声明一个 getPersonInfo 方法，并在声明 age 变量
    Person.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 120; }
        return this.userName + "\n" + age;
    };
    return Person;
}());
var Student1 = (function (_super) {
    __extends(Student1, _super);
    function Student1(username) {
        return _super.call(this, username) || this;
    }
    Student1.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 100; }
        var superMsg = _super.prototype.getPersonInfo.call(this, age);
        return this.userName + "\n" + age + "岁" + "\n\t\t" + "默认信息 ：" + superMsg;
    };
    return Student1;
}(Person));
var Student2 = (function (_super) {
    __extends(Student2, _super);
    function Student2(username) {
        return _super.call(this, username) || this;
    }
    Student2.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 120; }
        var superMsg = _super.prototype.getPersonInfo.call(this, age);
        return this.userName + "\n" + age + "岁" + "\n\t\t" + "默认信息：" + superMsg;
    };
    return Student2;
}(Person));
var stu1 = new Student1("周伯通");
var stu2 = new Student2("老毒物");
var stuMsg1 = stu1.getPersonInfo();
var stuMsg2 = stu2.getPersonInfo(80); //传一个默认值给 getPersonInfo 方法
$(function () {
    $("#msg1").html("<span style='color:red;'>" + stuMsg1 + "<span>");
    $("#msg2").html("<span style='color:blue;'>" + stuMsg2 + "<span>");
});
/// <reference path="../../lib/jquery.d.ts" /> 
//# sourceMappingURL=test.js.map