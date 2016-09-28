var http = require('http');
var fs = require('fs');
var port = 8080;
var state = 10;
var server = http.createServer(function(request,response){
	
	if (request.url === '/') {
		fs.createReadStream(__dirname + '/state.html').pipe(response);
		response.write('<h1>State is '+state+'</h1>');
		response.end();
	}
	
	 else if (request.url === '/state') {
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write('<h1>State is '+state+'</h1>');
		console.log(state=10)
		response.end();
	} 
	
	else if (request.url==='/add') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<h1>State is '+(state=state+1)+'</h1>');
		console.log(state)
		response.end()
	} 
	
	else if (request.url === '/remove') {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<h1>State is '+(state=state-1)+'</h1>');
		console.log(state)
		response.end()
	}
	
	else if (request.url === '/reset') {
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.write('<h1>State is '+(state=10)+'</h1>');
		console.log(state=10)
		response.end()
	} else {
		response.writeHead(404,{'Content-Type': 'text/plain'});
		response.write('<h1>There is an error, can\'t load the data </h1>');
	}
});

server.listen(port, function(error){
	if (error) {
		console.log(error)
	} else {console.log('listening on ', port)}
})
