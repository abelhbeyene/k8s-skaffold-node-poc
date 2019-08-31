// minikube/server.js 

var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200, {
    'Expires': 'now',
    // Close the connection in dev or Skaffold won't refresh your changes locally
    'Connection': 'close'
  });
  response.end(Date.now() + ' <<--- now 5');
};
var www = http.createServer(handleRequest);
www.listen(3000);

