var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '哈哈哈，一起期待下一期课程',
    'cid': 348
})
console.log(postData.length)
// 看慕课网视频完整实例 ，没有写完