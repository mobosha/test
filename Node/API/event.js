// 当某个事件发生才调用回调函数叫做事件驱动
function clickIt(e){
    window.alert('Button is clicked');
}
var button = document.getElementById('#button');
button.addEventListener('click', clickIt);

// EventEmitter


 