const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const axios = require('axios')
const vision = require('@google-cloud/vision');
var file = require('../client/src/index.js').file;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/receipt', (res, req) => {

  const client = new vision.ImageAnnotatorClient();
  const items = [];
  const regex = /\d/g;
  // Performs label detection on the image file
  client
    .textDetection('client/images/' + file)
    .then(results => {
      const detections = results[0].textAnnotations.slice(1);
      detections.forEach(function (text) {
        if (!regex.test(text.description)) {
          console.log(text.description);
          items.push(text.description);
        }
      });
      axios.post('https://d96bb644.ngrok.io/receiptData', {
          parameters: {
            data: items
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    })
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/', 'index.html'));
});

app.listen(8080, () => console.log('Server started on port 8080!'));
