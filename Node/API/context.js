// this指向当前函数拥有者，this只能在函数内部使用， 对于函数的上下文执行对象需要依据当前的运行环境定，因为上下文执行对象在程序运行的时候来确定，也可以动态的来改变，
// 在全局运行的上下文this指向的是全局对象，在函数内部的话取决于函数被调用的方式，被调用的方式如下

// 1. 作为对象的方法，当前的this指的上下文执行对象就是pet 
// var pet = {
//     words: '...',
//     speak: function(){
//         console.log(this.words)
//         console.log(this === pet)  //this 指的是 当前的pet
//     }
// }
// pet.speak();

// 2.直接函数的调用，现在函数内部的this默认指代就是全局对象 global
// function pet(words){
//     this.words = words
//     console.log(this.words)
//     console.log(this === global)  //  this 指的是 当前的全局作用域  ,nodejs 里边的全局对象就是global，JS里边的全局对象就是window
// }
// pet('...');  //调用  pet 的当前对象是 global 

// 3.构造函数里边this指向新构建好的实对象 var cat = new Pet('Miao');
// function Pet(words){
//     this.words = words;
//     this.speak = function(){
//         console.log(this.words);
//         console.log(this);
//     }
// }

// var cat = new Pet('Miao');
// cat.speak();

 




