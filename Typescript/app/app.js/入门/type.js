// 类型参数判断
// function greeter(person: string) {
//     return "Hello, " + person;
// }
// var user = "Jane User";
// document.body.innerHTML = greeter(user);
//类型注解
// function greeter(person: string) {
//     return "Hello, " + person;
// }
// var user = [0, 1, 2];
// document.body.innerHTML = greeter(user);
//类
var Student1 = (function () {
    function Student1(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student1;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student1("Jane", "M.", "User");
console.log(user);
console.log(greeter(user));
//document.body.innerHTML = greeter(user);
//# sourceMappingURL=type.js.map