"use strict";

require('dotenv').load();
require('node-jsx').install()
//require('babel/register');
const express = require('express');
const app = express();

const bodyParser   = require('body-parser');
const mongoose = require('mongoose');

const React = require("react");
const ReactDOMServer = require("react-dom/server");

const routes = require('./app/routes/index.js');


app.set("view engine", "ejs");
app.set('views', __dirname + '/public/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/components', express.static(process.cwd() + '/app/components'));


//MONGOOSE CONNECT
mongoose.connect(process.env.MONGO_URI);


routes(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});