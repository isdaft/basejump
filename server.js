var http = require('http');
var url = require('url');
var port = process.env.PORT || 8080;
var express = require('express');

var app = express();
app.get('/:query', function (req, res) {
var parsedUrl = req.params.query;  
	//parsed URL contains whats in the url passed /
	res.send(parsedUrl);
})
app.get('/', function(req, res){
	//
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Enter date in UNIX or TIME format in URL to return json');
})
app.listen(port, function() {
console.log('listening on port ' + port)
});
