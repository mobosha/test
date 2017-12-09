// var http = require('http'); 
var http = require('http'); 
var url = 'http://nodejs.cn/api/http.html#http_http_request_options_callback'

http.request(url,function(res){
    var html = '';
    
    res.on('data', function(data){
        html += data
    })

    res.on('end', function(){
        console.log(html);
        var mid = document.getElementById('moocHtml');
        console.log(mid)
        mid.innerHTML = html;
        // alert(mid)
    })
    console.log(res)
}).on('error', function(){
    console.log("获取课程数据错误!")
})

console.log(http)