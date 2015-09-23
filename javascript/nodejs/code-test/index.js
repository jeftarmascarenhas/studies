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
	
	fs.createReadStream('./image-teste.png').pipe(res);
	var stream = fs.createReadStream('./image-teste.png');
	
	stream.on('data', function (chuck) {
		console.log(chuck);
	});

}).listen(3000, function () {
	console.log('Server running 3000');
});