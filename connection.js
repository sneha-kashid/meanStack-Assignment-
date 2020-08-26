var http = require('http')

http.createServer(function(req,res){
   
    res.write("welcome ")
    res.end()
}).listen(8080);