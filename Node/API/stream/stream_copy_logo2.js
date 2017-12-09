var fs = require('fs');
var readStream = fs.createReadStream('baby.mp4');
var writeStream = fs.createWriteStream('1-stream.mp4');
//读得快 写得慢 数据流内部的缓存可能会被爆仓，判断writeStream.write(chunk)
readStream.on('data',function(chunk){
    //writeStream.write(chunk) //将数据写入缓存区
   if(writeStream.write(chunk)===false){//判断是否将数据写出缓存区，如果是false暂停读取，防爆仓写法
       console.log('still cached')
        readStream.pause();                                  
   }

});

readStream.on('end',function(){
    console.log('读取完成');
    writeStream.end();
});

writeStream.on('drain',function(){  //缓存中的数据已经消费完啦，数据已经写入目标啦 //流将在适当的时机触发 'drain' 事件，这时才可以继续向流中写入数据
   readStream.resume();//开始读 ，resume恢复
});