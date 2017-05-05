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
class Student1 {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student1("Jane", "M.", "User");
console.log(user);
console.log( greeter(user));
//document.body.innerHTML = greeter(user);




