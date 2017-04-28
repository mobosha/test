
//------class 与 supper 使用.----------------
class Person{
    userName:string;//声明一个名称//构造方法
    constructor(paramVal:string){
        this.userName=paramVal;
    }
//--声明一个 getPersonInfo 方法，并在声明 age 变量
    getPersonInfo(age:number=120):string{
        return this.userName+"\n"+age;
    }
}
class Student1 extends Person{
    constructor(username:string){
     super(username);
    }
    getPersonInfo(age=100){
     var superMsg=super.getPersonInfo(age);
     return this.userName+"\n"+age+"岁"+"\n\t\t"+"默认信息 ：" +superMsg;
    }
}
class Student2 extends Person{
    constructor(username:string){
        super(username);
    }
    getPersonInfo(age=120){
        var superMsg=super.getPersonInfo(age);
        return this.userName+"\n"+age+"岁"+"\n\t\t"+"默认信息：" +superMsg;
    }
}
var stu1=new Student1("周伯通");
var stu2=new Student2("老毒物");
var stuMsg1=stu1.getPersonInfo();
var stuMsg2=stu2.getPersonInfo(80);//传一个默认值给 getPersonInfo 方法
$(function(){
    $("#msg1").html("<span style='color:red;'>"+stuMsg1+"<span>");
    $("#msg2").html("<span style='color:blue;'>"+stuMsg2+"<span>");
});
/// <reference path="../../lib/jquery.d.ts" />