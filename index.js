var http = require('http');
var port = 8080;
var state = 10;
var server = http.createServer(function(request,response){
	
	if (request.url === '/' || request.url === '/state' || request.url === '/reset') {
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write('<h1>State is '+(state=10)+'</h1>');
		console.log(state)
		response.end();
	}
	
	else if (request.url==='/add') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<h1>State is '+(state=state+1)+'</h1>');
		console.log(state)
		response.end()
	} 
	
	else if (request.url === '/subtract') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<h1>State is '+(state=state-1)+'</h1>');
		console.log(state)
		response.end()
	}
	
	else {
		response.writeHead(404,{'Content-Type': 'text/html'});
		response.write('404,There is an error, can\'t load the data');
	}
});

server.listen(port, function(error){
	if (error) {
		console.log(error)
	} else {console.log('listening on ', port)}
})
