var file = require('../client/src/index.js').file;
parseReceipt('client/images/receipt1.jpeg');

async function parseReceipt(imagePath) {
  console.log(file);
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client
    .textDetection(imagePath)
    .then(results => {
      const detections = results[0].textAnnotations.slice(1);
      detections.forEach(function (text) {
        console.log(text.description);
      });
    })
}
