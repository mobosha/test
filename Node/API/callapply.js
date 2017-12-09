var pet = {
    words: '...',
    speak: function(say){
        console.log(say + ' ' + this.words)
    }
}
// pet.speak('Speak');  //当前 this 指的是 pet， this是调用方法的对象

var dog = {
    words: 'Wang'
}
pet.speak.call(dog, 'Speak');  //把 pet.speak 的 this 指向给了dog , 第二个参数Speak 是向方法传递参数