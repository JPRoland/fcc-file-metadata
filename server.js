const express = require('express');
const path = require('path');
const uploadController = require('./upload/upload');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); 

app.get('/upload', uploadController.showForm);

app.post('/upload', uploadController.upload, uploadController.getData);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});