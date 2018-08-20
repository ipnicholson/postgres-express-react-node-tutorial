const express = require('express');
const logger = require ('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


// Set up the express app

const app = express();

// Load environment variables from .env to process.env

dotenv.config();


// Log requests to the console

app.use(logger('dev'));


// Parse incoming requests data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// Set up a default catch-all route that sends back a welcome message in JSON

app.get('*', (req, res) => res.status(200).send({
  message: 'Every story has a beginning',
}))

module.exports = app;