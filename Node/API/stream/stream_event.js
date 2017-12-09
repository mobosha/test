var fs = require('fs');
var readStream = fs.createReadStream('baby.mp4');
var n = 0

readStream.on('data',function(chunk){
    console.log(Buffer.isBuffer(chunk))
    // console.log(chunk.toString('utf8'))
    n++
    readStream.pause()
    console.log('data pause')
    setTimeout(function() {
        console.log('data pause end')
        readStream.resume();     
    }, 10);
                                 

});
readStream.on('readable', function(){
    console.log('data readable')
});
readStream.on('end',function(){
    console.log(n);
    console.log('读取完成');
});
readStream.on('close',function(){
    console.log('data close');
});
readStream.on('error',function(){
    console.log('data read error' + e);
});

