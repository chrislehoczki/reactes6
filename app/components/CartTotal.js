
const React = require("react");


class CartTotal extends React.Component{


        constructor(props) {
          super(props);
      
        }

        render() {

            let total = 0;
            this.props.cartItems.map((item) => {
              console.log(item) 
              total += item.total;
            })

            return  (
              <div>
              <h2> Cart Total </h2>
                  {total}
                
                
              </div>
             )
        }
      };




module.exports = CartTotal;