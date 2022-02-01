let http = require('http');

let server = http.createServer((req, res) => {
	res.writeHead(200);
	res.end('Hello World');
});

exports.listen = (port) => {
	console.log(`Listening on port ${port}`);
	server.listen(port);
};

exports.close = () => {
	server.close();
};