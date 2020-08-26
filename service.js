var http = require('http')

http.createServer(function(req,res){
    res.writeHead(404,{'content-Type':'text/html'})
  
    res.end()
}).listen(8080);