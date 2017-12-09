// 事件回调进阶
function learn(something){
    console.log(something);
}

function we(callback, something){
    something += ' is cool';
    callback(something);
}

we(learn, 'Nodejs');

we(function(something){
    console.log(something)
}, 'jade');