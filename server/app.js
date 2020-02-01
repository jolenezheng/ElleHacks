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
            data: [{
                item: "Ground Beef",
                price: 11.32
              },
              {
                item: "Lays Chips",
                price: 5
              },
              {
                item: "Banana",
                price: 3.23
              },
              {
                item: "Lamb Loin Chops",
                price: 8.99
              },
              {
                item: "Kraft Cheddar",
                price: 7.98
              },
              {
                item: "BurnBrae Eggs L",
                price: 4.25
              },
              {
                item: "Apples 2lb Bag",
                price: 5.67
              },
              {
                item: "PC Bacon",
                price: 11.98
              },
              {
                item: "Great Value Tuna",
                price: 9.98
              },
              {
                item: "Lettuce Iceberg",
                price: 2.47
              },
              {
                item: "Quaker Granola",
                price: 9.54
              },
            ]
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
