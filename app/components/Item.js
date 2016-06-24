


import React from "react";


class Item extends React.Component{


        constructor(props) {
          super(props);
          this.increaseQty = this.increaseQty.bind(this);
          this.decreaseQty = this.decreaseQty.bind(this);
          this.updateCart = this.updateCart.bind(this);
          this.calcTotal = this.calcTotal.bind(this);
          this.state = { //THIS IS GETINITIAL STATE
                quantity: 0,
                total: 0
          };
        }

        increaseQty() {
        	this.setState({quantity: ++this.state.quantity}, this.calcTotal());
        }


       decreaseQty() {
       		let newQty = this.state.quantity > 0 ? --this.state.quantity : 0;
        	this.setState({quantity: newQty}, this.calcTotal());
        }

        calcTotal() {
        	let total = this.state.quantity * this.props.cost;
        	this.setState({total: total});
        }

        updateCart() {
        	this.props.updateCart({total: this.state.total, name: this.props.name});
        }

        render() {
            return  (
	            <div className="cart-item col-sm-4 col-md-3 col-lg-3" >
		            <h4> {this.props.type} </h4>
		            <p> {this.props.name} </p>
		            <p> {this.props.cost} {this.props.currency} </p>
		            <div className="qty-controller">
	        			<button className="btn btn-primary" onClick={this.decreaseQty}> - </button> <p>{this.state.quantity}</p> <button className="btn btn-primary" onClick={this.increaseQty}> + </button>
	        		</div>
	        		<p>Total: {this.state.total} </p>
	        		<button onClick={this.updateCart} className="btn btn-secondary">Add To Cart</button>
	            </div>
             )
        }
      };


Item.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    cost: React.PropTypes.number.isRequired,
    currency: React.PropTypes.string.isRequired
};
Item.defaultProps = {
    type: "Unknown",
    name: "Unknown",
    cost: 0,
    currency: "Unknown"
};


export default Item;