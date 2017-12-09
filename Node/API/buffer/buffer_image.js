var fs = require('fs');

fs.readFile('logo.png', function (err, origin_buffer) {
	console.log(Buffer.isBuffer(origin_buffer))//判断是否为缓冲区

	fs.writeFile('logo_buffer.png', origin_buffer, function (err) {//将开始的buffer得到一个新的new——image
		if (err) console.log(err);
	})

	var base64Image = origin_buffer.toString('base64');

	console.log(base64Image);

	var decodeImage = new Buffer(base64Image, 'base64');

	console.log(Buffer.compare(decodeImage, origin_buffer));

	fs.writeFile('logo_decode.png', decodeImage, function (err) {
		if (err) console.log(err);
	})


})