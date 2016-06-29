"use strict";


const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ReactHelper = require("../common/ReactHelper.js")
const helper = new ReactHelper();
var fs = require("fs");

module.exports = function(app) {


app.get('/', function (req, res) {

	const items = [{
	"type": "fruit",
	"name": "banana",
	"cost": 10,
	"currency": "GBP"
},
{
	"type": "fruit",
	"name": "banana",
	"cost": 10,
	"currency": "GBP"
}
];


  var Cart = React.createFactory(require("../components/Cart.js"));
  var cart = ReactDOMServer.renderToString(Cart({items: items}));

  res.render('index.ejs', {cart: cart, items: helper.safeStringify(items)});
});




}
