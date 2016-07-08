(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _myclass = require('./myclass');

var _myclass2 = _interopRequireDefault(_myclass);

var _myfunction = require('./myfunction');

var _myfunction2 = _interopRequireDefault(_myfunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myObject = new _myclass2.default('World');
myObject.sayHello();

//Loop function
(0, _myfunction2.default)(10);

},{"./myclass":2,"./myfunction":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyClass = function () {
  function MyClass(word) {
    _classCallCheck(this, MyClass);

    this.word = word;
  }

  _createClass(MyClass, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("Hello " + this.word);
    }
  }]);

  return MyClass;
}();

exports.default = MyClass;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (n) {
  console.log(n + " Loop ...");

  for (var i = 0; i < n; i++) {
    console.log(i + 1);
  }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiLCJzcmMvc2NyaXB0cy9teWNsYXNzLmpzIiwic3JjL3NjcmlwdHMvbXlmdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxXQUFXLHNCQUFZLE9BQVosQ0FBZjtBQUNBLFNBQVMsUUFBVDs7O0FBR0EsMEJBQVcsRUFBWDs7Ozs7Ozs7Ozs7OztJQ1BNLE87QUFDSixtQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDRDs7OzsrQkFFUztBQUNSLGNBQVEsR0FBUixZQUFxQixLQUFLLElBQTFCO0FBQ0Q7Ozs7OztrQkFHWSxPOzs7Ozs7Ozs7a0JDVkEsVUFBVSxDQUFWLEVBQWE7QUFDMUIsVUFBUSxHQUFSLENBQWUsQ0FBZjs7QUFFQSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEI7QUFDMUIsWUFBUSxHQUFSLENBQVksSUFBRSxDQUFkO0FBQ0Q7QUFDRixDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBNeUNsYXNzIGZyb20gJy4vbXljbGFzcyc7XG5pbXBvcnQgbXlGdW5jdGlvbiBmcm9tICcuL215ZnVuY3Rpb24nO1xuXG52YXIgbXlPYmplY3QgPSBuZXcgTXlDbGFzcygnV29ybGQnKTtcbm15T2JqZWN0LnNheUhlbGxvKCk7XG5cbi8vTG9vcCBmdW5jdGlvblxubXlGdW5jdGlvbigxMCk7XG4iLCJjbGFzcyBNeUNsYXNzIHtcbiAgY29uc3RydWN0b3Iod29yZCkge1xuICAgIHRoaXMud29yZCA9IHdvcmQ7XG4gIH1cblxuICBzYXlIZWxsbygpe1xuICAgIGNvbnNvbGUubG9nKGBIZWxsbyAke3RoaXMud29yZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUNsYXNzO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG4pIHtcbiAgY29uc29sZS5sb2coYCR7bn0gTG9vcCAuLi5gKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnNvbGUubG9nKGkrMSk7XG4gIH1cbn1cbiJdfQ==
