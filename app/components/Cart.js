
import React from "react";
import CartTotal from "./CartTotal.js";
import Items from "./Items.js";

class Cart extends React.Component{


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
            console.log("getting through to top - should rerender cart")
            console.log(item)
          
            var oldItems = this.state.cartItems;
            console.log(oldItems)
            oldItems.push(item)
            console.log(oldItems)

            this.setState({cartItems: oldItems})

        }

        render() {
            return  (
              <div>
                <input onChange={this.changeInputValue} value={this.state.inputValue} />
                
                <Items items={this.props.items} updateCart={this.updateCart} />
                <CartTotal cartItems={this.state.cartItems} />
                
              </div>
             )
        }
      };




export default Cart;