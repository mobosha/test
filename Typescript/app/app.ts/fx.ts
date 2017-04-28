/**
* 没有泛型，我们要么必须给身份功能的特定类型
*/
function identity1(arg: number): number {
return arg;

}
/**
* 或者:我们可以描述使用“任意”类型的标识功能：
*/
function identity2(arg: any): any {
<<<<<<< HEAD
    
return arg;
}
console.log("sss");
=======
return arg;
}
>>>>>>> 17f8f1e18129d401f665c2ab247d360fe1c0d381
