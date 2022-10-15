const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const db = require('../models/cows.model.js').db;
const bodyParser  = require('body-parser');

app.use(express.static(path.resolve(__dirname, '../build')));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/api/cows', (req, res) => {
  console.log("GET /api/cows");
  res.redirect('../');
});

app.post('/api/cows', (req, res) => {
  console.log("POST /api/cows");
  console.log("req", req)
  console.log("req.body", req.body)
  res.redirect('../');
});

app.get('/', (req, res) => {
 res.status(200).sendFile(path.join('index.html'));
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});