

// setTimeout, setInterval js异步执行实现
var c = 0;
function printIt () {
    console.log(c)
}
function plus (callback) {
    setTimeout(function() {
        c++
        callback()
    }, 1000);
}
plus(printIt);


// 单线程，就是同步；多线程，就是异步