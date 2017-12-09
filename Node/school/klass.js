var student = require('./student');  //把学生模块对象赋值给一个局部变量
var teacher = require('./teacher');  //把老师模块对象赋值给一个局部变量

// 被当前脚本导入的模块，都会向当前脚本暴露一组导入的模块中的方法（公开的API）

function add(teacherName,students){  //学生是一个数组；
    teacher.add(teacherName);
    students.forEach(function(element,i) {
        student.add(element);
    });
}

//以下两种方法都是导出模板方法，有稍微的区别
exports.add = add; //想让模块成为一个传统的模块实例，支持方式
//module.exports = add; //想让模块成为一个特别的对象类型 