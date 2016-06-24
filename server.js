var express = require('express');
var app = express();

var bodyParser   = require('body-parser');

app.set("view engine", "ejs");
app.set('views', __dirname + '/public/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/components', express.static(process.cwd() + '/app/components'));

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});