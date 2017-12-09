// a.EventEmitter支持多个事件监听，最大为10，也可以自定义最大数
var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)
// addListener，事件监听
function water(who){
    console.log('给' + who + '倒水')    
}
life.on('求安慰', water)

life.on('求安慰', function(who){
    console.log('给' + who + '洗衣服')
})

life.on('求安慰', function(who){
    console.log('给' + who + '交工资')
})

life.on('求安慰', function(who){
    console.log('给' + who + '做饭')
})

life.on('求安慰', function(who){
    console.log('给' + who + '揉肩')
})

life.on('求安慰', function(who){
    console.log('给' + who + '...6')
})

life.on('求安慰', function(who){
    console.log('给' + who + '...7')
})

life.on('求安慰', function(who){
    console.log('给' + who + '...8')
})

life.on('求安慰', function(who){
    console.log('给' + who + '...9')
})

life.on('求安慰', function(who){
    console.log('给' + who + '...10')
})
// 第十一个，导致内存泄露
life.on('求安慰', function(who){
    console.log('给' + who + '你想累死我')
})

life.on('求溺爱', function(who){
    console.log('给' + who + '买衣服')
})

life.on('求溺爱', function(who){
    console.log('给' + who + '交工资')
})
// 事件移除
life.removeListener('求安慰', water)  //移除单个事件需具名函数，匿名函数不行
// life.removeAllListeners('求安慰')  //移除一类事件
// life.removeAllListeners()  //移除所有事件


// 事件监听之后，需要emit(发射,发出)才会执行，才能执行事件监听函数
var hasConfortListener = life.emit('求安慰', '汉子')
var hasLovedListener =  life.emit('求溺爱', '妹子')
var hasPlayedListener =  life.emit('求玩坏', '妹子和汉子')
// 判断事件有没有监听，如果事件有监听器，则返回 true ，否则返回 false。
console.log(hasConfortListener)
console.log(hasLovedListener)
console.log(hasPlayedListener)

console.log(life.listeners('求安慰').length)
console.log(EventEmitter.listenerCount(life, '求安慰'))
console.log(life.listeners('求溺爱').length)
