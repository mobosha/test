const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//创建http请求 req请求体(rq) res响应体(rs)
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}); //内部函数是匿名回调函数

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});