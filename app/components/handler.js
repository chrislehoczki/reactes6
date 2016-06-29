const ReactDOM = require("react-dom");

const Cart = require("./Cart.js");



var items = JSON.parse(document.getElementById("items").innerHTML);
console.log(items)



ReactDOM.render(<Cart items={items}/>, document.getElementById("react-holder"));