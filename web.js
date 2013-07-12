var fs = require('fs');
var index_file = fs.readFileSync('index.html').toString();
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index_file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
