const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.get('/test', (req, res) => {
  res.send({
    message: 'test',
  });
});

app.post(`/sum`, (req, res) => {
  const {a, b} = req.body;
  const result = a + b;
  res.send({
    result: result
  })
})

app.post('/product', (req, res) => {
  res.send({
    result: req.body.a * req.body.b,
  });
});

app.post('/sumArray', (req, res) => {
  const {array, num} = req.body;
  const result = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) {
        result = true;
      }
    }
  }
  res.send({
    message: 'sum',
  })
})

app.listen(3000);

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar