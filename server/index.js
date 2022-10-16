const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 3000;
const Cows = require('../controllers/cows.controller.js');
const bodyParser  = require('body-parser');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static(path.resolve(__dirname, '../build')));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/cows', (req, res) => {
  console.log("GET /api/cows");
  Cows.findAll(req, res);
});

app.post('/api/cows', (req, res) => {
  console.log("POST /api/cows");
  console.log("req.body", req.body)
  Cows.create(req, res);
});

app.put('/api/cows::id', (req, res) => {
  console.log("PUT /api/cows");
  console.log("req.body", req.body);
  console.log("req.params.id", req.params.id);
  Cows.update(req, res);
});

app.delete('/api/cows::id', (req, res) => {
  console.log("DELETE /api/cows");
  console.log("req.params.id", req.params.id)
  Cows.delete(req, res);
});

app.get('/', (req, res) => {
 res.status(200).sendFile(path.join('index.html'));
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});