var http = require('http'); 
// var express = require('express')
// var app = express();
// import http from 'http'
var url = 'http://www.jianshu.com/p/dcb28b582318';

http.get(url,function(res){
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
