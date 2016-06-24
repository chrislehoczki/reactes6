(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
	function Car(loc, speed) {
		_classCallCheck(this, Car);

		this.loc = loc;
		this.speed = speed;
		this.drive = 2;
	}

	_createClass(Car, [{
		key: "move",
		value: function move() {
			this.loc = this.loc + this.speed;
		}
	}, {
		key: "render",
		value: function render() {
			var element = document.getElementById("#game");
		}
	}]);

	return Car;
}();

var ben = new Car(9, 3);

console.log(ben.loc);
ben.move();
console.log(ben.loc);
console.log(ben.drive);

var FourWheelDrive = function (_Car) {
	_inherits(FourWheelDrive, _Car);

	function FourWheelDrive(loc, speed) {
		_classCallCheck(this, FourWheelDrive);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FourWheelDrive).call(this, loc, speed));

		_this.drive = 4;
		return _this;
	}

	return FourWheelDrive;
}(Car);

var toyota = new FourWheelDrive(0, 5);
console.log(toyota.loc);
toyota.move();
console.log(toyota.loc);
console.log(toyota.drive);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudHNcXGhhbmRsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sRztBQUNMLGNBQVksR0FBWixFQUFpQixLQUFqQixFQUF3QjtBQUFBOztBQUN2QixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsT0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLE9BQUssS0FBTCxHQUFhLENBQWI7QUFDQTs7Ozt5QkFFTTtBQUNOLFFBQUssR0FBTCxHQUFXLEtBQUssR0FBTCxHQUFXLEtBQUssS0FBM0I7QUFDQTs7OzJCQUVRO0FBQ1IsT0FBSSxVQUFVLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBRUE7Ozs7OztBQUdGLElBQUksTUFBTSxJQUFJLEdBQUosQ0FBUSxDQUFSLEVBQVcsQ0FBWCxDQUFWOztBQUVBLFFBQVEsR0FBUixDQUFZLElBQUksR0FBaEI7QUFDQSxJQUFJLElBQUo7QUFDQSxRQUFRLEdBQVIsQ0FBWSxJQUFJLEdBQWhCO0FBQ0EsUUFBUSxHQUFSLENBQVksSUFBSSxLQUFoQjs7SUFDTSxjOzs7QUFDTCx5QkFBYSxHQUFiLEVBQWtCLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsZ0dBQ2xCLEdBRGtCLEVBQ2IsS0FEYTs7QUFFeEIsUUFBSyxLQUFMLEdBQWEsQ0FBYjtBQUZ3QjtBQUd4Qjs7O0VBSjJCLEc7O0FBUzdCLElBQUksU0FBUyxJQUFJLGNBQUosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBYjtBQUNBLFFBQVEsR0FBUixDQUFZLE9BQU8sR0FBbkI7QUFDQSxPQUFPLElBQVA7QUFDQSxRQUFRLEdBQVIsQ0FBWSxPQUFPLEdBQW5CO0FBQ0EsUUFBUSxHQUFSLENBQVksT0FBTyxLQUFuQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBDYXIge1xyXG5cdGNvbnN0cnVjdG9yKGxvYywgc3BlZWQpIHtcclxuXHRcdHRoaXMubG9jID0gbG9jO1xyXG5cdFx0dGhpcy5zcGVlZCA9IHNwZWVkO1xyXG5cdFx0dGhpcy5kcml2ZSA9IDI7XHJcblx0fVxyXG5cclxuXHRtb3ZlKCkge1xyXG5cdFx0dGhpcy5sb2MgPSB0aGlzLmxvYyArIHRoaXMuc3BlZWQ7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiI2dhbWVcIilcclxuXHJcblx0fVxyXG59XHJcblxyXG5sZXQgYmVuID0gbmV3IENhcig5LCAzKVxyXG5cclxuY29uc29sZS5sb2coYmVuLmxvYylcclxuYmVuLm1vdmUoKTtcclxuY29uc29sZS5sb2coYmVuLmxvYyk7XHJcbmNvbnNvbGUubG9nKGJlbi5kcml2ZSk7XHJcbmNsYXNzIEZvdXJXaGVlbERyaXZlIGV4dGVuZHMgQ2FyIHtcclxuXHRjb25zdHJ1Y3RvciAobG9jLCBzcGVlZCkge1xyXG5cdFx0c3VwZXIobG9jLCBzcGVlZClcclxuXHRcdHRoaXMuZHJpdmUgPSA0O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG52YXIgdG95b3RhID0gbmV3IEZvdXJXaGVlbERyaXZlKDAsIDUpO1xyXG5jb25zb2xlLmxvZyh0b3lvdGEubG9jKVxyXG50b3lvdGEubW92ZSgpO1xyXG5jb25zb2xlLmxvZyh0b3lvdGEubG9jKVxyXG5jb25zb2xlLmxvZyh0b3lvdGEuZHJpdmUpIl19
