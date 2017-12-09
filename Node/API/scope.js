var globalVariable = 'This is global variable';

function globalFunction(){ //作用域1
    var localVariable = 'This is local variable';
    console.log('visit global/local variable');
    console.log(globalVariable);
    console.log(localVariable);
    globalVariable = 'This is changed variable';
    console.log(globalVariable);
    
    //只能在globalFunction函数内部调用
    function localFunction(){  //作用域2
        var innerLocalVariable = 'This is inner local variable';
        console.log('visit global/local/innerLocal variable');
        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLocalVariable);
    }
    localFunction();
}

globalFunction();
