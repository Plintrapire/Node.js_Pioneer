const http = require ('http');
http.createServer(function(requset, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello Nature');
}).listen(8673);