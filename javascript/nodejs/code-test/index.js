var fs = require('fs');
var http = require('http');
// var stream = fs.createReadStream('./resource.json');

// stream.on('data', function (chuck) {
// 	console.log(chuck);
// });

// stream.on('end', function () {
// 	console.log('finished');
// });


http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'image/png'});
	fs.createReadStream('./image.png').pipe(res);
}).listen(3000);