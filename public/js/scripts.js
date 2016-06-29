(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
import React from "react";
import CartTotal from "./CartTotal.js";
import Items from "./Items.js";
*/

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var CartTotal = require("./CartTotal.js");
var Items = require("./Items.js");

var Cart = function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart(props) {
    _classCallCheck(this, Cart);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cart).call(this, props));

    _this.handleClickEvent = _this.handleClickEvent.bind(_this);
    _this.changeInputValue = _this.changeInputValue.bind(_this);
    _this.updateCart = _this.updateCart.bind(_this);
    _this.state = { //THIS IS GETINITIAL STATE
      cartItems: []
    };
    return _this;
  }

  _createClass(Cart, [{
    key: "handleClickEvent",
    value: function handleClickEvent(e) {
      this.setState({
        value: ++this.state.value
      });
    }
  }, {
    key: "changeInputValue",
    value: function changeInputValue(e) {
      this.setState({ inputValue: e.target.value });
    }
  }, {
    key: "updateCart",
    value: function updateCart(item) {
      console.log("getting through to top - should rerender cart");
      console.log(item);

      var oldItems = this.state.cartItems;
      console.log(oldItems);
      oldItems.push(item);
      console.log(oldItems);

      this.setState({ cartItems: oldItems });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", { onChange: this.changeInputValue, value: this.state.inputValue }),
        React.createElement(Items, { items: this.props.items, updateCart: this.updateCart }),
        React.createElement(CartTotal, { cartItems: this.state.cartItems })
      );
    }
  }]);

  return Cart;
}(React.Component);

;

module.exports = Cart;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./CartTotal.js":2,"./Items.js":4}],2:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var CartTotal = function (_React$Component) {
  _inherits(CartTotal, _React$Component);

  function CartTotal(props) {
    _classCallCheck(this, CartTotal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CartTotal).call(this, props));
  }

  _createClass(CartTotal, [{
    key: "render",
    value: function render() {

      var total = 0;
      this.props.cartItems.map(function (item) {
        console.log(item);
        total += item.total;
      });

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          " Cart Total "
        ),
        total
      );
    }
  }]);

  return CartTotal;
}(React.Component);

;

module.exports = CartTotal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var Item = function (_React$Component) {
        _inherits(Item, _React$Component);

        function Item(props) {
                _classCallCheck(this, Item);

                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));

                _this.increaseQty = _this.increaseQty.bind(_this);
                _this.decreaseQty = _this.decreaseQty.bind(_this);
                _this.updateCart = _this.updateCart.bind(_this);
                _this.calcTotal = _this.calcTotal.bind(_this);
                _this.state = { //THIS IS GETINITIAL STATE
                        quantity: 0,
                        total: 0
                };
                return _this;
        }

        _createClass(Item, [{
                key: "increaseQty",
                value: function increaseQty() {
                        this.setState({ quantity: ++this.state.quantity }, this.calcTotal());
                }
        }, {
                key: "decreaseQty",
                value: function decreaseQty() {
                        var newQty = this.state.quantity > 0 ? --this.state.quantity : 0;
                        this.setState({ quantity: newQty }, this.calcTotal());
                }
        }, {
                key: "calcTotal",
                value: function calcTotal() {
                        var total = this.state.quantity * this.props.cost;
                        this.setState({ total: total });
                }
        }, {
                key: "updateCart",
                value: function updateCart() {
                        this.props.updateCart({ total: this.state.total, name: this.props.name });
                }
        }, {
                key: "render",
                value: function render() {
                        return React.createElement(
                                "div",
                                { className: "cart-item col-sm-4 col-md-3 col-lg-3" },
                                React.createElement(
                                        "h4",
                                        null,
                                        " ",
                                        this.props.type,
                                        " "
                                ),
                                React.createElement(
                                        "p",
                                        null,
                                        " ",
                                        this.props.name,
                                        " "
                                ),
                                React.createElement(
                                        "p",
                                        null,
                                        " ",
                                        this.props.cost,
                                        " ",
                                        this.props.currency,
                                        " "
                                ),
                                React.createElement(
                                        "div",
                                        { className: "qty-controller" },
                                        React.createElement(
                                                "button",
                                                { className: "btn btn-primary", onClick: this.decreaseQty },
                                                " - "
                                        ),
                                        " ",
                                        React.createElement(
                                                "p",
                                                null,
                                                this.state.quantity
                                        ),
                                        " ",
                                        React.createElement(
                                                "button",
                                                { className: "btn btn-primary", onClick: this.increaseQty },
                                                " + "
                                        )
                                ),
                                React.createElement(
                                        "p",
                                        null,
                                        "Total: ",
                                        this.state.total,
                                        " "
                                ),
                                React.createElement(
                                        "button",
                                        { onClick: this.updateCart, className: "btn btn-secondary" },
                                        "Add To Cart"
                                )
                        );
                }
        }]);

        return Item;
}(React.Component);

;

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

module.exports = Item;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
(function (global){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Item = require("./Item.js");

var Items = function (_React$Component) {
  _inherits(Items, _React$Component);

  function Items(props) {
    _classCallCheck(this, Items);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Items).call(this, props));

    _this.handleClickEvent = _this.handleClickEvent.bind(_this);
    _this.changeInputValue = _this.changeInputValue.bind(_this);
    _this.updateCart = _this.updateCart.bind(_this);
    _this.state = { //THIS IS GETINITIAL STATE
      cartItems: []
    };
    return _this;
  }

  _createClass(Items, [{
    key: "handleClickEvent",
    value: function handleClickEvent(e) {
      this.setState({
        value: ++this.state.value
      });
    }
  }, {
    key: "changeInputValue",
    value: function changeInputValue(e) {
      this.setState({ inputValue: e.target.value });
    }
  }, {
    key: "updateCart",
    value: function updateCart(item) {
      this.props.updateCart(item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "row" },
        this.props.items.map(function (item, i) {
          return React.createElement(Item, { updateCart: _this2.updateCart, key: i, type: item.type, name: item.name, currency: item.currency, cost: item.cost });
        })
      );
    }
  }]);

  return Items;
}(React.Component);

;

module.exports = Items;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Item.js":3}],5:[function(require,module,exports){
(function (global){
"use strict";

var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var Cart = require("./Cart.js");

var items = JSON.parse(document.getElementById("items").innerHTML);
console.log(items);

ReactDOM.render(React.createElement(Cart, { items: items }), document.getElementById("react-holder"));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Cart.js":1}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudHNcXGFwcFxcY29tcG9uZW50c1xcQ2FydC5qcyIsImFwcFxcY29tcG9uZW50c1xcYXBwXFxjb21wb25lbnRzXFxDYXJ0VG90YWwuanMiLCJhcHBcXGNvbXBvbmVudHNcXGFwcFxcY29tcG9uZW50c1xcSXRlbS5qcyIsImFwcFxcY29tcG9uZW50c1xcYXBwXFxjb21wb25lbnRzXFxJdGVtcy5qcyIsImFwcFxcY29tcG9uZW50c1xcYXBwXFxjb21wb25lbnRzXFxoYW5kbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQSxJQUFNLFFBQVEsUUFBUSxPQUFSLENBQWQ7QUFDQSxJQUFNLFlBQVksUUFBUSxnQkFBUixDQUFsQjtBQUNBLElBQU0sUUFBUSxRQUFRLFlBQVIsQ0FBZDs7SUFFTSxJOzs7QUFHRSxnQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0ZBQ1gsS0FEVzs7QUFFakIsVUFBSyxnQkFBTCxHQUF3QixNQUFLLGdCQUFMLENBQXNCLElBQXRCLE9BQXhCO0FBQ0EsVUFBSyxnQkFBTCxHQUF3QixNQUFLLGdCQUFMLENBQXNCLElBQXRCLE9BQXhCO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLE1BQUssVUFBTCxDQUFnQixJQUFoQixPQUFsQjtBQUNBLFVBQUssS0FBTCxHQUFhLEU7QUFDUCxpQkFBVztBQURKLEtBQWI7QUFMaUI7QUFRbEI7Ozs7cUNBRWdCLEMsRUFBRztBQUNsQixXQUFLLFFBQUwsQ0FBYztBQUNaLGVBQU8sRUFBRSxLQUFLLEtBQUwsQ0FBVztBQURSLE9BQWQ7QUFHRDs7O3FDQUVnQixDLEVBQUc7QUFDbEIsV0FBSyxRQUFMLENBQWMsRUFBQyxZQUFZLEVBQUUsTUFBRixDQUFTLEtBQXRCLEVB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OztFQW5DVyxNQUFNLFM7O0FBb0NuQjs7QUFLUCxPQUFPLE9BQVAsR0FBaUIsS0FBakI7Ozs7Ozs7O0FDN0NBLElBQU0sV0FBVyxRQUFRLFdBQVIsQ0FBakI7O0FBRUEsSUFBTSxPQUFPLFFBQVEsV0FBUixDQUFiOztBQUlBLElBQUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUMsU0FBNUMsQ0FBWjtBQUNBLFFBQVEsR0FBUixDQUFZLEtBQVo7O0FBSUEsU0FBUyxNQUFULENBQWdCLG9CQUFDLElBQUQsSUFBTSxPQUFPLEtBQWIsR0FBaEIsRUFBdUMsU0FBUyxjQUFULENBQXdCLGNBQXhCLENBQXZDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcnRUb3RhbCBmcm9tIFwiLi9DYXJ0VG90YWwuanNcIjtcclxuaW1wb3J0IEl0ZW1zIGZyb20gXCIuL0l0ZW1zLmpzXCI7XHJcbiovXHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgQ2FydFRvdGFsID0gcmVxdWlyZShcIi4vQ2FydFRvdGFsLmpzXCIpO1xyXG5jb25zdCBJdGVtcyA9IHJlcXVpcmUoXCIuL0l0ZW1zLmpzXCIpO1xyXG5cclxuY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrRXZlbnQgPSB0aGlzLmhhbmRsZUNsaWNrRXZlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlSW5wdXRWYWx1ZSA9IHRoaXMuY2hhbmdlSW5wdXRWYWx1ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDYXJ0ID0gdGhpcy51cGRhdGVDYXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlID0geyAvL1RISVMgSVMgR0VUSU5JVElBTCBTVEFURVxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zOiBbXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZUNsaWNrRXZlbnQoZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiArK3RoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVDYXJ0KGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIHRocm91Z2ggdG8gdG9wIC0gc2hvdWxkIHJlcmVuZGVyIGNhcnRcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgb2xkSXRlbXMgPSB0aGlzLnN0YXRlLmNhcnRJdGVtcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2xkSXRlbXMpXHJcbiAgICAgICAgICAgIG9sZEl0ZW1zLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2xkSXRlbXMpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXJ0SXRlbXM6IG9sZEl0ZW1zfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSW5wdXRWYWx1ZX0gdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEl0ZW1zIGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfSB1cGRhdGVDYXJ0PXt0aGlzLnVwZGF0ZUNhcnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FydFRvdGFsIGNhcnRJdGVtcz17dGhpcy5zdGF0ZS5jYXJ0SXRlbXN9IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENhcnQ7IiwiXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5cclxuXHJcbmNsYXNzIENhcnRUb3RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSkgXHJcbiAgICAgICAgICAgICAgdG90YWwgKz0gaXRlbS50b3RhbDtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyPiBDYXJ0IFRvdGFsIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIHt0b3RhbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDYXJ0VG90YWw7IiwiXHJcblxyXG5cclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcblxyXG5cclxuY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICB0aGlzLmluY3JlYXNlUXR5ID0gdGhpcy5pbmNyZWFzZVF0eS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgdGhpcy5kZWNyZWFzZVF0eSA9IHRoaXMuZGVjcmVhc2VRdHkuYmluZCh0aGlzKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ2FydCA9IHRoaXMudXBkYXRlQ2FydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgdGhpcy5jYWxjVG90YWwgPSB0aGlzLmNhbGNUb3RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLy9USElTIElTIEdFVElOSVRJQUwgU1RBVEVcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IDBcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbmNyZWFzZVF0eSgpIHtcclxuICAgICAgICBcdHRoaXMuc2V0U3RhdGUoe3F1YW50aXR5OiArK3RoaXMuc3RhdGUucXVhbnRpdHl9LCB0aGlzLmNhbGNUb3RhbCgpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgIGRlY3JlYXNlUXR5KCkge1xyXG4gICAgICAgXHRcdGxldCBuZXdRdHkgPSB0aGlzLnN0YXRlLnF1YW50aXR5ID4gMCA/IC0tdGhpcy5zdGF0ZS5xdWFudGl0eSA6IDA7XHJcbiAgICAgICAgXHR0aGlzLnNldFN0YXRlKHtxdWFudGl0eTogbmV3UXR5fSwgdGhpcy5jYWxjVG90YWwoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWxjVG90YWwoKSB7XHJcbiAgICAgICAgXHRsZXQgdG90YWwgPSB0aGlzLnN0YXRlLnF1YW50aXR5ICogdGhpcy5wcm9wcy5jb3N0O1xyXG4gICAgICAgIFx0dGhpcy5zZXRTdGF0ZSh7dG90YWw6IHRvdGFsfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVDYXJ0KCkge1xyXG4gICAgICAgIFx0dGhpcy5wcm9wcy51cGRhdGVDYXJ0KHt0b3RhbDogdGhpcy5zdGF0ZS50b3RhbCwgbmFtZTogdGhpcy5wcm9wcy5uYW1lfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgKFxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1pdGVtIGNvbC1zbS00IGNvbC1tZC0zIGNvbC1sZy0zXCIgPlxyXG5cdFx0ICAgICAgICAgICAgPGg0PiB7dGhpcy5wcm9wcy50eXBlfSA8L2g0PlxyXG5cdFx0ICAgICAgICAgICAgPHA+IHt0aGlzLnByb3BzLm5hbWV9IDwvcD5cclxuXHRcdCAgICAgICAgICAgIDxwPiB7dGhpcy5wcm9wcy5jb3N0fSB7dGhpcy5wcm9wcy5jdXJyZW5jeX0gPC9wPlxyXG5cdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdHktY29udHJvbGxlclwiPlxyXG5cdCAgICAgICAgXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmRlY3JlYXNlUXR5fT4gLSA8L2J1dHRvbj4gPHA+e3RoaXMuc3RhdGUucXVhbnRpdHl9PC9wPiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaW5jcmVhc2VRdHl9PiArIDwvYnV0dG9uPlxyXG5cdCAgICAgICAgXHRcdDwvZGl2PlxyXG5cdCAgICAgICAgXHRcdDxwPlRvdGFsOiB7dGhpcy5zdGF0ZS50b3RhbH0gPC9wPlxyXG5cdCAgICAgICAgXHRcdDxidXR0b24gb25DbGljaz17dGhpcy51cGRhdGVDYXJ0fSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPkFkZCBUbyBDYXJ0PC9idXR0b24+XHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcbkl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNvc3Q6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIGN1cnJlbmN5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuSXRlbS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0eXBlOiBcIlVua25vd25cIixcclxuICAgIG5hbWU6IFwiVW5rbm93blwiLFxyXG4gICAgY29zdDogMCxcclxuICAgIGN1cnJlbmN5OiBcIlVua25vd25cIlxyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSXRlbTsiLCJcclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IEl0ZW0gPSByZXF1aXJlKFwiLi9JdGVtLmpzXCIpO1xyXG5cclxuY2xhc3MgSXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVDbGlja0V2ZW50ID0gdGhpcy5oYW5kbGVDbGlja0V2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZUlucHV0VmFsdWUgPSB0aGlzLmNoYW5nZUlucHV0VmFsdWUuYmluZCh0aGlzKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ2FydCA9IHRoaXMudXBkYXRlQ2FydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLy9USElTIElTIEdFVElOSVRJQUwgU1RBVEVcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtczogW11cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGVDbGlja0V2ZW50KGUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogKyt0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZUlucHV0VmFsdWUoZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlQ2FydChpdGVtKSB7XHJcbiAgICAgICAgXHR0aGlzLnByb3BzLnVwZGF0ZUNhcnQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJdGVtIHVwZGF0ZUNhcnQ9e3RoaXMudXBkYXRlQ2FydH0ga2V5PXtpfSB0eXBlPXtpdGVtLnR5cGV9IG5hbWU9e2l0ZW0ubmFtZX0gY3VycmVuY3k9e2l0ZW0uY3VycmVuY3l9IGNvc3Q9e2l0ZW0uY29zdH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJdGVtcztcclxuXHJcblxyXG4iLCJjb25zdCBSZWFjdERPTSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XHJcblxyXG5jb25zdCBDYXJ0ID0gcmVxdWlyZShcIi4vQ2FydC5qc1wiKTtcclxuXHJcblxyXG5cclxudmFyIGl0ZW1zID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zXCIpLmlubmVySFRNTCk7XHJcbmNvbnNvbGUubG9nKGl0ZW1zKVxyXG5cclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPENhcnQgaXRlbXM9e2l0ZW1zfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWN0LWhvbGRlclwiKSk7Il19
