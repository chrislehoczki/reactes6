import ReactDOM from "react-dom"

import Cart from "./Cart.js";

const items = [{
	type: "fruit",
	name: "banana",
	cost: 10,
	currency: "GBP"
},
{
	type: "fruit",
	name: "banana",
	cost: 10,
	currency: "GBP"
}
]

ReactDOM.render(<Cart items={items}/>, document.getElementById("react-holder"));