// server.js

var http = require('http');

var server = http.createServer(function(req, res) {   
          sendSSE(req, res);        
});
server.listen(8080, function() {
    console.log('Server is running at 8080')
});


function sendSSE(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
  
    var id = (new Date()).toLocaleTimeString();
  
    // Sends a SSE every 5 seconds on a single connection.
    setInterval(function() {
      constructSSE(res, id, (new Date()).toLocaleTimeString());
    }, 5000);
  
    constructSSE(res, id, (new Date()).toLocaleTimeString());
  }
  
  function constructSSE(res, id, data) {
    res.write('id: ' + id + '\n');
    res.write("data: " + data + '\n\n');

  }
  
