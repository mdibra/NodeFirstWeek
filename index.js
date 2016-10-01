var http = require('http');
var port = 8080;
var state = 10;

function stateNumber(response) {
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write('<h1>State is '+(state=10)+'</h1>');
	console.log(state)
	response.end();
}

function addNumber(response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>State is '+(state=state+1)+'</h1>');
	console.log(state)
	response.end()
}
function removeNumber(response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>State is '+(state=state-1)+'</h1>');
	console.log(state)
	response.end()
}
function send404(response) {
	response.writeHead(404,{'Content-Type': 'text/html'});
	response.write('404,There is an error, can\'t load the data');
}

function serverFunction(request,response){
	
	if (request.url === '/' || request.url === '/state' || request.url === '/reset') {
		stateNumber(response);
	}
	
	else if (request.url==='/add') {
		addNumber(response);
	} 
	
	else if (request.url === '/subtract') {
		removeNumber(response);
	}
	
	else {
		send404(response);
	}
}
function portFunction(error){
	if (error) {
		console.log(error)
	} else {console.log('listening on ', port)}
}
var server = http.createServer(serverFunction).listen(port, portFunction);


