var http = require('http')
var fs = require('fs')

var request = require('request')

http
	.createServer(function(req, res){
		// fs.readFile('./buffer/logo.png',function(err,data){
		// 	if(err){
		// 		res.end('file no exist')
		// 	}else{
				// res.writeHeader(200, {'Content-Type': 'text/html'})
				// res.end(data)
		// 	}

		// })
		
		// fs.createReadStream('../buffer/logo.png').pipe(res)
		 
		request('https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1193127659,1556957455&fm=85&s=31FC7F8658F3D9EF21AB9A6C0300D06C')
		.pipe(res)
	})
	.listen(8090)