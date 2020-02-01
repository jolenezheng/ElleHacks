const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/test', (req, res) => {
    res.send({message: 'API is working!'});
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/', 'index.html'));
});

app.listen(8080, () => console.log('Server started on port 8080!'));
