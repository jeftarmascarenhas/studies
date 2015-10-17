'use strict';

const http = require('http');
let fs = require('fs');
const = HTML_PATH = './index.html';
const = SIZE_INDEX = fs.statSync(HTML_PATH).size;

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Length': SIZE_INDEX, 'Content-Type': 'text/html'});
});

fs.createReadStream(HTML_PATH).pipe(res);

}).listen(3000);