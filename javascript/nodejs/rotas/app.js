var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/html;charset:utf-8'});
	console.log('URL: ', req.url);

	var route = req.url
	  , msg = 'end: ' + route;
	  ;

	if(route === '/exemple-url'){
		res.write('<h1>Success Exemple Url</h1>');
		res.write('<a href="/">Home</a> <br>');
		res.end(msg);
	}
	else if(route === '/'){
		res.write('<h1>Home Page Url</h1>');
		res.write('<a href="/exemple-url">exemple-url</a> <br>');
		res.end(msg);
	}else{
		res.end('Router not found');
	}

}).listen(3000);

console.log('Server running at http://localhost:3000');