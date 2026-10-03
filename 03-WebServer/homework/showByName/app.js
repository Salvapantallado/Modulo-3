var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    var doges = {
      rainbow: "arcoiris_doge.jpg",
      badboy: "badboy_doge.jpg",
      code: "code_doge.jpg",
      resaca: "resaca_doge.jpg",
      retrato: "retrato_doge.jpg",
      sexy: "sexy_doge.jpg",
    };

    if(req.url === '/arcoiris_doge'){
        var imagenes = fs.readFileSync(__dirname + `/images/${doges.rainbow}`)
        res.end(imagenes)
    }
    switch (req.url) {
      case "/arcoiris_doge":
        res.end(fs.readFileSync(__dirname + `/images/${doges.rainbow}`));
        break;
      case "/badboy_doge":
        var imagenes = fs.readFileSync(__dirname + `/images/${doges.badboy}`);
        res.end(imagenes);
        break;
      case "/code_doge":
        var imagenes = fs.readFileSync(__dirname + `/images/${doges.code}`);
        res.end(imagenes);
        break;
      case "/resaca_doge":
        var imagenes = fs.readFileSync(__dirname + `/images/${doges.resaca}`);
        res.end(imagenes);
        break;
      case "/retrato_doge":
        var imagenes = fs.readFileSync(__dirname + `/images/${doges.retrato}`);
        res.end(imagenes);
        break;
      case "/sexy_doge":
        var imagenes = fs.readFileSync(__dirname + `/images/${doges.sexy}`);
        res.end(imagenes);
        break;
    }
  })
  .listen(1337, "127.0.0.1");
