// Dependencies 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const port = 3000;

app.use(morgan('dev'));
app.use(express.static('./client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/firstRoute', (req, res) => {
  
});

app.listen(port, (err) => {
  console.log(`Listening on port ${port}`);
});