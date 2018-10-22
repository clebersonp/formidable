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

/***/ "./src/app/components/UsersTable/UsersTable.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/UsersTable/UsersTable.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/UsersTable/index.js":
/*!************************************************!*\
  !*** ./src/app/components/UsersTable/index.js ***!
  \************************************************/
/*! exports provided: UsersTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTable", function() { return UsersTable; });
/* harmony import */ var _infra_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../infra/Component */ "./src/infra/Component.js");
/* harmony import */ var _UsersTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersTable.scss */ "./src/app/components/UsersTable/UsersTable.scss");
/* harmony import */ var _UsersTable_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UsersTable_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var UsersTable =
/*#__PURE__*/
function (_Component) {
  _inherits(UsersTable, _Component);

  function UsersTable(element) {
    var _this;

    _classCallCheck(this, UsersTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UsersTable).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      users: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_template", function () {
      return "\n      <table>\n        <thead>\n          <tr>\n            <td>Nome</td>\n            <td>CPF</td>\n            <td>Email</td>\n            <td>Telefone</td>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(_this.state.users.map(function (user) {
        return "\n              <tr>\n                <td>".concat(user.fullName, "</td>\n                <td>").concat(user.cpfFormated, "</td>\n                <td>").concat(user.email, "</td>\n                <td>").concat(user.phoneFormated, "</td>\n              </tr>\n            ");
      }).join(''), "\n        </tbody>\n      </table>\n    ");
    });

    _this._element = element;
    return _this;
  }

  _createClass(UsersTable, [{
    key: "render",
    value: function render() {
      this._element.innerHTML = this._template();
    }
  }]);

  return UsersTable;
}(_infra_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/app/controllers/UserControler.js":
/*!**********************************************!*\
  !*** ./src/app/controllers/UserControler.js ***!
  \**********************************************/
/*! exports provided: UserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserController", function() { return UserController; });
/* harmony import */ var _domain_entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/entities/User */ "./src/domain/entities/User.js");
/* harmony import */ var _domain_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/repositories/UsersRepository */ "./src/domain/repositories/UsersRepository.js");
/* harmony import */ var _components_UsersTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UsersTable */ "./src/app/components/UsersTable/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var $form = event.target;
      console.log('$form.invalid', $form.validator.isInvalid());
      if ($form.validator.isInvalid()) return; // const formElementsDTO = {
      //   fullName: $form.querySelector('[data-element="inputNome"]').value,
      //   cpf: $form.querySelector('[data-element="inputCPF"]').value,
      //   phone: $form.querySelector('[data-element="inputTelefone"]').value,
      //   email: $form.querySelector('[data-element="inputEmail"]').value
      // }
      // const user = new User(formElementsDTO)
      // const usersRepository = new UsersRepository()
      // usersRepository.add(user)
    }
  }, {
    key: "showAll",
    value: function showAll(event) {
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_2__["UsersTable"](document.querySelector('[data-template="UsersTable"]'));
      var users = new _domain_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["UsersRepository"]().getAll();
      usersTable.setState({
        users: users
      });
    }
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
  userController: new _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["UserController"](undefined)
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
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../valueObjects/Phone */ "./src/domain/valueObjects/Phone.js");
/* harmony import */ var _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../valueObjects/CPF */ "./src/domain/valueObjects/CPF.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var User =
/*#__PURE__*/
function () {
  function User(_ref) {
    var fullName = _ref.fullName,
        cpf = _ref.cpf,
        phone = _ref.phone,
        email = _ref.email;

    _classCallCheck(this, User);

    this._fullName = fullName;
    this._cpf = new _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_1__["CPF"]({
      cpf: cpf
    });
    this._phone = new _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_0__["Phone"]({
      number: phone
    });
    this._email = email;
    Object.freeze(this);
  }

  _createClass(User, [{
    key: "fullName",
    get: function get() {
      return this._fullName;
    }
  }, {
    key: "email",
    get: function get() {
      return this._email;
    }
  }, {
    key: "cpf",
    get: function get() {
      return this._cpf.value;
    }
  }, {
    key: "cpfFormated",
    get: function get() {
      return this._cpf.formated;
    }
  }, {
    key: "phone",
    get: function get() {
      return this._phone.number;
    }
  }, {
    key: "phoneFormated",
    get: function get() {
      return this._phone.formated;
    }
  }]);

  return User;
}();

/***/ }),

/***/ "./src/domain/repositories/UsersRepository.js":
/*!****************************************************!*\
  !*** ./src/domain/repositories/UsersRepository.js ***!
  \****************************************************/
/*! exports provided: UsersRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRepository", function() { return UsersRepository; });
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/User */ "./src/domain/entities/User.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var UsersRepository =
/*#__PURE__*/
function () {
  function UsersRepository() {
    _classCallCheck(this, UsersRepository);

    _defineProperty(this, "key", 'users');
  }

  _createClass(UsersRepository, [{
    key: "_getItem",
    value: function _getItem() {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    }
  }, {
    key: "_setItem",
    value: function _setItem(item) {
      return localStorage.setItem(this.key, JSON.stringify(item));
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this._getItem().map(function (user) {
        return new _entities_User__WEBPACK_IMPORTED_MODULE_0__["User"]({
          fullName: user._fullName,
          cpf: user._cpf,
          phone: user._phone,
          email: user._email
        });
      });
    }
  }, {
    key: "add",
    value: function add(user) {
      var listOfUsers = this.getAll();
      listOfUsers.push(user);

      this._setItem(listOfUsers);
    }
  }]);

  return UsersRepository;
}();

/***/ }),

/***/ "./src/domain/valueObjects/CPF.js":
/*!****************************************!*\
  !*** ./src/domain/valueObjects/CPF.js ***!
  \****************************************/
/*! exports provided: CPF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPF", function() { return CPF; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CPF =
/*#__PURE__*/
function () {
  function CPF(_ref) {
    var cpf = _ref.cpf;

    _classCallCheck(this, CPF);

    this._value = cpf;
    Object.freeze(this);
  }

  _createClass(CPF, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "formated",
    get: function get() {
      return this._value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function (fullMatch, partOne, partTwo, partThree, digit) {
        return "".concat(partOne, ".").concat(partTwo, ".").concat(partThree, "-").concat(digit);
      });
    }
  }]);

  return CPF;
}();

/***/ }),

/***/ "./src/domain/valueObjects/Phone.js":
/*!******************************************!*\
  !*** ./src/domain/valueObjects/Phone.js ***!
  \******************************************/
/*! exports provided: Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Phone =
/*#__PURE__*/
function () {
  function Phone(_ref) {
    var number = _ref.number;

    _classCallCheck(this, Phone);

    this._number = number;
    Object.freeze(this);
  }

  _createClass(Phone, [{
    key: "number",
    get: function get() {
      return this._number;
    }
  }, {
    key: "formated",
    get: function get() {
      return this._number.replace(/(\d{2})?(\d{4})(\d{4})/, function (fullMatch, ddd, numberPartOne, numberPartTwo) {
        if (ddd) return "".concat(ddd, "-").concat(numberPartOne, "-").concat(numberPartTwo);
        return "".concat(numberPartOne, "-").concat(numberPartTwo);
      });
    }
  }]);

  return Phone;
}();

/***/ }),

/***/ "./src/infra/Component.js":
/*!********************************!*\
  !*** ./src/infra/Component.js ***!
  \********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = function Component() {
  var _this = this;

  _classCallCheck(this, Component);

  _defineProperty(this, "setState", function (newState) {
    requestAnimationFrame(function () {
      _this.state = _objectSpread({}, _this.state, newState);

      _this.render();
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ob21lL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9DUEYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvUGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsInVzZXJzIiwic3RhdGUiLCJtYXAiLCJ1c2VyIiwiZnVsbE5hbWUiLCJjcGZGb3JtYXRlZCIsImVtYWlsIiwicGhvbmVGb3JtYXRlZCIsImpvaW4iLCJfZWxlbWVudCIsImlubmVySFRNTCIsIl90ZW1wbGF0ZSIsIkNvbXBvbmVudCIsIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsInVzZXJzVGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJVc2Vyc1JlcG9zaXRvcnkiLCJnZXRBbGwiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInBhZ2VIb21lIiwidXNlckNvbnRyb2xsZXIiLCJVc2VyIiwiY3BmIiwicGhvbmUiLCJfZnVsbE5hbWUiLCJfY3BmIiwiQ1BGIiwiX3Bob25lIiwiUGhvbmUiLCJudW1iZXIiLCJfZW1haWwiLCJPYmplY3QiLCJmcmVlemUiLCJ2YWx1ZSIsImZvcm1hdGVkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImtleSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX2dldEl0ZW0iLCJsaXN0T2ZVc2VycyIsInB1c2giLCJfc2V0SXRlbSIsIl92YWx1ZSIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiX251bWJlciIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7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LHdCQUFyQixFQUErQyxVQUFDQyxTQUFELEVBQVlNLEdBQVosRUFBaUJDLGFBQWpCLEVBQWdDQyxhQUFoQyxFQUFrRDtBQUN0RyxZQUFHRixHQUFILEVBQVEsaUJBQVVBLEdBQVYsY0FBaUJDLGFBQWpCLGNBQWtDQyxhQUFsQztBQUVSLHlCQUFVRCxhQUFWLGNBQTJCQyxhQUEzQjtBQUNELE9BSk0sQ0FBUDtBQUtEO0FBaEJIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNdkQsU0FBYjtBQUFBOztBQUFBOztBQUFBLG9DQUNhLFVBQUN3RCxRQUFELEVBQWM7QUFDdkJDLHlCQUFxQixDQUFDLFlBQU07QUFDMUIsV0FBSSxDQUFDcEUsS0FBTCxxQkFDSyxLQUFJLENBQUNBLEtBRFYsRUFFS21FLFFBRkw7O0FBSUEsV0FBSSxDQUFDRSxNQUFMO0FBQ0QsS0FOb0IsQ0FBckI7QUFPRCxHQVRIO0FBQUEsRSIsImZpbGUiOiJqcy9ob21lL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vaW5mcmEvQ29tcG9uZW50J1xuaW1wb3J0IFwiLi9Vc2Vyc1RhYmxlLnNjc3NcIlxuXG5leHBvcnQgY2xhc3MgVXNlcnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl90ZW1wbGF0ZSgpXG4gIH1cblxuICBfdGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7dGhpcy5zdGF0ZS51c2Vycy5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmZ1bGxOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5jcGZGb3JtYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLnBob25lRm9ybWF0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9KS5qb2luKCcnKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL2RvbWFpbi9lbnRpdGllcy9Vc2VyXCJcbmltcG9ydCB7IFVzZXJzUmVwb3NpdG9yeSB9IGZyb20gXCIuLi8uLi9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlcnNUYWJsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSdcblxuXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXRcblxuICAgIGNvbnNvbGUubG9nKCckZm9ybS5pbnZhbGlkJywgJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKVxuICAgIGlmKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgLy8gY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgIC8vICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAvLyAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgLy8gICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAvLyAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm1FbGVtZW50c0RUTylcblxuICAgIC8vIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKVxuICAgIC8vIHVzZXJzUmVwb3NpdG9yeS5hZGQodXNlcilcbiAgfVxuXG4gIHNob3dBbGwoZXZlbnQpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJykpXG5cbiAgICBjb25zdCB1c2VycyA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKS5nZXRBbGwoKVxuXG4gICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICB1c2Vyc1xuICAgIH0pXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJ1xuXG53aW5kb3cucGFnZUhvbWUgPSB7XG4gIHVzZXJDb250cm9sbGVyOiBuZXcgVXNlckNvbnRyb2xsZXIodGhpcylcbn1cblxuXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IFBob25lIH0gZnJvbSBcIi4uL3ZhbHVlT2JqZWN0cy9QaG9uZVwiO1xuaW1wb3J0IHsgQ1BGIH0gZnJvbSBcIi4uL3ZhbHVlT2JqZWN0cy9DUEZcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7IGZ1bGxOYW1lLCBjcGYsIHBob25lLCBlbWFpbCB9KSB7XG4gICAgdGhpcy5fZnVsbE5hbWUgPSBmdWxsTmFtZVxuICAgIHRoaXMuX2NwZiA9IG5ldyBDUEYoeyBjcGYgfSlcbiAgICB0aGlzLl9waG9uZSA9IG5ldyBQaG9uZSh7IG51bWJlcjogcGhvbmUgfSlcbiAgICB0aGlzLl9lbWFpbCA9IGVtYWlsXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgZnVsbE5hbWUoKSB7IHJldHVybiB0aGlzLl9mdWxsTmFtZSB9XG5cbiAgZ2V0IGVtYWlsKCkgeyByZXR1cm4gdGhpcy5fZW1haWwgfVxuXG4gIGdldCBjcGYoKSB7IHJldHVybiB0aGlzLl9jcGYudmFsdWUgfVxuICBnZXQgY3BmRm9ybWF0ZWQoKSB7IHJldHVybiB0aGlzLl9jcGYuZm9ybWF0ZWQgfVxuXG4gIGdldCBwaG9uZSgpIHsgcmV0dXJuIHRoaXMuX3Bob25lLm51bWJlciB9XG4gIGdldCBwaG9uZUZvcm1hdGVkKCkgeyByZXR1cm4gdGhpcy5fcGhvbmUuZm9ybWF0ZWQgfVxufVxuXG5cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vZW50aXRpZXMvVXNlclwiO1xuXG5leHBvcnQgY2xhc3MgVXNlcnNSZXBvc2l0b3J5IHtcbiAga2V5ID0gJ3VzZXJzJ1xuXG4gIF9nZXRJdGVtKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cbiAgfVxuXG4gIF9zZXRJdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtKCkubWFwKCh1c2VyKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFVzZXIoe1xuICAgICAgICBmdWxsTmFtZTogdXNlci5fZnVsbE5hbWUsXG4gICAgICAgIGNwZjogdXNlci5fY3BmLFxuICAgICAgICBwaG9uZTogdXNlci5fcGhvbmUsXG4gICAgICAgIGVtYWlsOiB1c2VyLl9lbWFpbFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkKHVzZXIpIHtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKClcbiAgICBsaXN0T2ZVc2Vycy5wdXNoKHVzZXIpXG4gICAgdGhpcy5fc2V0SXRlbShsaXN0T2ZVc2VycylcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgY3BmIH0pIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNwZlxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZVxuICB9XG5cbiAgZ2V0IGZvcm1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS8sIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IHtcbiAgICAgIHJldHVybiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWBcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5fbnVtYmVyID0gbnVtYmVyXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0IG51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyXG4gIH1cblxuICBnZXQgZm9ybWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgICBpZihkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWBcblxuICAgICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gIHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlXG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==