const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { sumArray, pluck } = require("./utils.js");

app.use(bodyParser.json()); // for parsing application/json

app.get("/", (req, res) => {
  res.send({
    message: "hola",
  });
});

app.get("/test", (req, res) => {
  res.send({
    message: "test",
  });
});

app.post("/sum", (req, res) => {
  res.send({
    result: req.body.a + req.body.b,
  });
});

app.post("/product", (req, res) => {
  res.send({
    result: req.body.a * req.body.b,
  });
});

app.post("/sumArray", (req, res) => {
  res.send({
    result: sumArray(req.body.array, req.body.num),
  });
});

app.get("/numString", (req, res) => {
  const query = req.query.string;
  if (!query || !isNaN(parseInt(query))) {
    return res.sendStatus(400);
  }
  res.send({
    result: query.length,
  });
});

app.post("/pluck", (req, res) => {
  const { array, prop } = req.body;

  if (!Array.isArray(array) || !prop) {
    return res.sendStatus(400);
  }
  res.send({
    result: pluck(array, prop),
  });
});

app.listen(3000);

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
