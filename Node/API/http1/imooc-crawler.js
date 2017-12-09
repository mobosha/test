var http = require('http'); 
var url = 'http://www.imooc.com/learn/348'

http.get(url,function(res){
    var html = '';
    
    res.on('data', function(data){
        html += data
    })

    res.on('end', function(){
        console.log(typeof html);
        var mid = document.getElementById('moocHtml');
console.log(mid)
        mid.innerHTML = html;
        // alert(mid)
    })
}).on('error', function(){
    console.log("获取课程数据错误!")
})