var fs  = require("fs")
var http  = require("http")

http.createServer( function(req, res){ 
    res.writeHead(200,{'Content-Type':'image/jpg'})
    var imagenes = fs.readFileSync(__dirname + `/images/code_doge.jpg`)
    console.log(imagenes)
    res.end(imagenes)
    

}).listen(1337, '127.0.0.1');
