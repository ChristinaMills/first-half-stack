
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.json());

const teams = require('./routes/sports');
app.use('/', teams);

module.exports = app; 

