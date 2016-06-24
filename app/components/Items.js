
import React from "react";
import Item from "./Item.js";

class Items extends React.Component{


        constructor(props) {
          super(props);
          this.handleClickEvent = this.handleClickEvent.bind(this);
          this.changeInputValue = this.changeInputValue.bind(this);
          this.updateCart = this.updateCart.bind(this);
          this.state = { //THIS IS GETINITIAL STATE
                cartItems: []
          };
        }

        handleClickEvent(e) {
          this.setState({
            value: ++this.state.value
          });
        }

        changeInputValue(e) {
          this.setState({inputValue: e.target.value})
        }

        updateCart(item) {
        	this.props.updateCart(item);
        }

        render() {
            return  (
                <div className="row">
                  {this.props.items.map((item, i) => {
                    return <Item updateCart={this.updateCart} key={i} type={item.type} name={item.name} currency={item.currency} cost={item.cost}  />
                  })}
                </div>
             )
        }
      };




export default Items;


