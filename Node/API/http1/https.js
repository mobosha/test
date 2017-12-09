var https = require('https')
var fs = require('fs')

var options = {
    key: fs.readFileSync('ssh_key.pem'),  //options.key是私钥文件
    cert: fs.readFileSync('ssh_cert.pem')  //options.cert是证书文件
}

https
    .createServer(options, function(req, res){  //创建https服务器
        res.writeHead(200)
        res.end("Hello imooc")
    })
    .listen(8090)
