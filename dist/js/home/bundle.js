/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/controllers/UserControler.js":
/*!**********************************************!*\
  !*** ./src/app/controllers/UserControler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserController; });
/* harmony import */ var _domain_entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/entities/User */ "./src/domain/entities/User.js");
/* harmony import */ var _domain_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/repositories/UsersRepository */ "./src/domain/repositories/UsersRepository.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // import { UsersTable } from '../components/UsersTable'

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var $form = event.target;
      if ($form.validator.isInvalid()) return;
      var formElementsDTO = {
        fullName: $form.querySelector('[data-element="inputNome"]').value,
        cpf: $form.querySelector('[data-element="inputCPF"]').value,
        phone: $form.querySelector('[data-element="inputTelefone"]').value,
        email: $form.querySelector('[data-element="inputEmail"]').value
      };
      $form.dispatchEvent(new Event('btnsubmitloading'));
      setTimeout(function () {
        return $form.dispatchEvent(new Event('btnsubmitloaded'));
      }, 2000);
      var user = new _domain_entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](formElementsDTO);
      var usersRepository = new _domain_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
      usersRepository.add(user);
    } // showAll(event) {
    //   // const usersTable = new UsersTable(document.querySelector('[data-template="UsersTable"]'))
    //   // const users = new UsersRepository().getAll()
    //   // usersTable.setState({
    //   //   users
    //   // })
    // }

  }]);

  return UserController;
}();



/***/ }),

/***/ "./src/app/pages/home/index.js":
/*!*************************************!*\
  !*** ./src/app/pages/home/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/UserControler */ "./src/app/controllers/UserControler.js");

window.pageHome = {
  userController: new _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["default"](undefined)
};

/***/ }),

/***/ "./src/app/pages/home/index.scss":
/*!***************************************!*\
  !*** ./src/app/pages/home/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/domain/entities/User.js":
/*!*************************************!*\
  !*** ./src/domain/entities/User.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../valueObjects/Phone */ "./src/domain/valueObjects/Phone.js");
/* harmony import */ var _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../valueObjects/CPF */ "./src/domain/valueObjects/CPF.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var User = function User(_ref) {
  var _this = this;

  var fullName = _ref.fullName,
      cpf = _ref.cpf,
      phone = _ref.phone,
      email = _ref.email;

  _classCallCheck(this, User);

  _defineProperty(this, "getFullName", function () {
    return _this.fullName;
  });

  _defineProperty(this, "getEmail", function () {
    return _this.email;
  });

  _defineProperty(this, "getCPF", function () {
    return _this.cpf.getValue();
  });

  _defineProperty(this, "getCPFFormated", function () {
    return _this.cpf.getValueFormated();
  });

  _defineProperty(this, "getPhone", function () {
    return _this.phone.getNumber();
  });

  _defineProperty(this, "getPhoneFormated", function () {
    return _this.phone.getNumberFormated();
  });

  this.fullName = fullName;
  this.cpf = new _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_1__["default"]({
    CPFNumbers: cpf
  });
  this.phone = new _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_0__["default"]({
    number: phone
  });
  this.email = email;
  Object.freeze(this);
};



/***/ }),

/***/ "./src/domain/repositories/UsersRepository.js":
/*!****************************************************!*\
  !*** ./src/domain/repositories/UsersRepository.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersRepository; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { User } from "../entities/User";
var UsersRepository = function UsersRepository() {
  var _this = this;

  _classCallCheck(this, UsersRepository);

  _defineProperty(this, "key", 'users');

  _defineProperty(this, "getItemFromLocalStorage", function () {
    return JSON.parse(localStorage.getItem(_this.key)) || [];
  });

  _defineProperty(this, "setItemInLocalStorage", function (item) {
    return localStorage.setItem(_this.key, JSON.stringify(item));
  });

  _defineProperty(this, "getAll", function () {// return this.getItemFromLocalStorage().map((user) => {
    //   return new User({
    //     fullName: user._fullName,
    //     cpf: user._cpf,
    //     phone: user._phone,
    //     email: user._email
    //   })
    // })
  });

  _defineProperty(this, "add", function (user) {
    var listOfUsers = _this.getAll();

    listOfUsers.push(user);

    _this.setItemInLocalStorage(listOfUsers);
  });
};



/***/ }),

/***/ "./src/domain/valueObjects/CPF.js":
/*!****************************************!*\
  !*** ./src/domain/valueObjects/CPF.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CPF; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CPF = function CPF(_ref) {
  var _this = this;

  var CPFNumbers = _ref.CPFNumbers;

  _classCallCheck(this, CPF);

  _defineProperty(this, "getValue", function () {
    return _this.CPFNumbers;
  });

  _defineProperty(this, "getValueFormated", function () {
    var CPFRegex = /(\d{3})(\d{3})(\d{3})(\d{2})/;

    _this.CPFNumbers.replace(CPFRegex, function (fullMatch, partOne, partTwo, partThree, digit) {
      return "".concat(partOne, ".").concat(partTwo, ".").concat(partThree, "-").concat(digit);
    });
  });

  this.CPFNumbers = CPFNumbers;
  Object.freeze(this);
};



/***/ }),

/***/ "./src/domain/valueObjects/Phone.js":
/*!******************************************!*\
  !*** ./src/domain/valueObjects/Phone.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Phone; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Phone = function Phone(_ref) {
  var _this = this;

  var number = _ref.number;

  _classCallCheck(this, Phone);

  _defineProperty(this, "getNumber", function () {
    return _this.number;
  });

  _defineProperty(this, "getNumberFormated", function () {
    return _this.number.replace(/(\d{2})?(\d{4})(\d{4})/, function (fullMatch, ddd, numberPartOne, numberPartTwo) {
      if (ddd) return "".concat(ddd, "-").concat(numberPartOne, "-").concat(numberPartTwo);
      return "".concat(numberPartOne, "-").concat(numberPartTwo);
    });
  });

  this.number = number;
  Object.freeze(this);
};



/***/ }),

/***/ 1:
/*!***************************************************************************!*\
  !*** multi ./src/app/pages/home/index.js ./src/app/pages/home/index.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/app/pages/home/index.js */"./src/app/pages/home/index.js");
module.exports = __webpack_require__(/*! ./src/app/pages/home/index.scss */"./src/app/pages/home/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyJdLCJuYW1lcyI6WyJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInRhcmdldCIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImZvcm1FbGVtZW50c0RUTyIsImZ1bGxOYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJlbWFpbCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInNldFRpbWVvdXQiLCJ1c2VyIiwiVXNlciIsInVzZXJzUmVwb3NpdG9yeSIsIlVzZXJzUmVwb3NpdG9yeSIsImFkZCIsIndpbmRvdyIsInBhZ2VIb21lIiwidXNlckNvbnRyb2xsZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsIk9iamVjdCIsImZyZWV6ZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJrZXkiLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxpc3RPZlVzZXJzIiwiZ2V0QWxsIiwicHVzaCIsInNldEl0ZW1JbkxvY2FsU3RvcmFnZSIsIkNQRlJlZ2V4IiwicmVwbGFjZSIsImZ1bGxNYXRjaCIsInBhcnRPbmUiLCJwYXJ0VHdvIiwicGFydFRocmVlIiwiZGlnaXQiLCJkZGQiLCJudW1iZXJQYXJ0T25lIiwibnVtYmVyUGFydFR3byJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Q0FFQTs7SUFFcUJBLGM7Ozs7Ozs7Ozt3QkFDUkMsSyxFQUFPO0FBQ2hCQSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csTUFBcEI7QUFFQSxVQUFHRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLFNBQWhCLEVBQUgsRUFBZ0M7QUFFaEMsVUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxnQkFBUSxFQUFFTCxLQUFLLENBQUNNLGFBQU4sQ0FBb0IsNEJBQXBCLEVBQWtEQyxLQUR0QztBQUV0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SnlCLENBQU47QUFBQSxHQVBJOztBQUN0QixPQUFLeEIsTUFBTCxHQUFjQSxNQUFkO0FBQ0FDLFFBQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQ7QUFDRCxDIiwiZmlsZSI6ImpzL2hvbWUvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vZG9tYWluL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IFVzZXJzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeSc7XG4vLyBpbXBvcnQgeyBVc2Vyc1RhYmxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vyc1RhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHN0YXRpYyBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYoJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWUsXG4gICAgfVxuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGVkJykpLCAyMDAwKTtcblxuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICAgIHVzZXJzUmVwb3NpdG9yeS5hZGQodXNlcik7XG4gIH1cblxuICAvLyBzaG93QWxsKGV2ZW50KSB7XG4gIC8vICAgLy8gY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpKVxuICAvLyAgIC8vIGNvbnN0IHVzZXJzID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpLmdldEFsbCgpXG4gIC8vICAgLy8gdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gIC8vICAgLy8gICB1c2Vyc1xuICAvLyAgIC8vIH0pXG4gIC8vIH1cbn1cblxuIiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInO1xuXG53aW5kb3cucGFnZUhvbWUgPSB7XG4gIHVzZXJDb250cm9sbGVyOiBuZXcgVXNlckNvbnRyb2xsZXIodGhpcyksXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWw7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0RnVsbE5hbWUgPSAoKSA9PiB0aGlzLmZ1bGxOYW1lXG5cbiAgZ2V0RW1haWwgPSAoKSA9PiB0aGlzLmVtYWlsXG5cbiAgZ2V0Q1BGID0gKCkgPT4gdGhpcy5jcGYuZ2V0VmFsdWUoKVxuXG4gIGdldENQRkZvcm1hdGVkID0gKCkgPT4gdGhpcy5jcGYuZ2V0VmFsdWVGb3JtYXRlZCgpXG5cbiAgZ2V0UGhvbmUgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlcigpXG5cbiAgZ2V0UGhvbmVGb3JtYXRlZCA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyRm9ybWF0ZWQoKVxufVxuIiwiLy8gaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9lbnRpdGllcy9Vc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzUmVwb3NpdG9yeSB7XG4gIGtleSA9ICd1c2VycydcblxuICBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuXG4gIHNldEl0ZW1JbkxvY2FsU3RvcmFnZSA9IGl0ZW0gPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuXG4gIGdldEFsbCA9ICgpID0+IHtcbiAgICAvLyByZXR1cm4gdGhpcy5nZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgpLm1hcCgodXNlcikgPT4ge1xuICAgIC8vICAgcmV0dXJuIG5ldyBVc2VyKHtcbiAgICAvLyAgICAgZnVsbE5hbWU6IHVzZXIuX2Z1bGxOYW1lLFxuICAgIC8vICAgICBjcGY6IHVzZXIuX2NwZixcbiAgICAvLyAgICAgcGhvbmU6IHVzZXIuX3Bob25lLFxuICAgIC8vICAgICBlbWFpbDogdXNlci5fZW1haWxcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgfVxuXG4gIGFkZCA9ICh1c2VyKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGxpc3RPZlVzZXJzLnB1c2godXNlcik7XG4gICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UobGlzdE9mVXNlcnMpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDUEYge1xuICBjb25zdHJ1Y3Rvcih7IENQRk51bWJlcnMgfSkge1xuICAgIHRoaXMuQ1BGTnVtYmVycyA9IENQRk51bWJlcnM7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLkNQRk51bWJlcnNcblxuICBnZXRWYWx1ZUZvcm1hdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IENQRlJlZ2V4ID0gLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLztcbiAgICB0aGlzLkNQRk51bWJlcnMucmVwbGFjZShDUEZSZWdleCwgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4gYCR7cGFydE9uZX0uJHtwYXJ0VHdvfS4ke3BhcnRUaHJlZX0tJHtkaWdpdH1gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldE51bWJlciA9ICgpID0+IHRoaXMubnVtYmVyO1xuXG4gIGdldE51bWJlckZvcm1hdGVkID0gKCkgPT4gdGhpcy5udW1iZXIucmVwbGFjZSgvKFxcZHsyfSk/KFxcZHs0fSkoXFxkezR9KS8sIChmdWxsTWF0Y2gsIGRkZCwgbnVtYmVyUGFydE9uZSwgbnVtYmVyUGFydFR3bykgPT4ge1xuICAgIGlmIChkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG5cbiAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9