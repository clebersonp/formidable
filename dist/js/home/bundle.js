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
      console.log('$form.valid', $form.validator.valid); // const formElementsDTO = {
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
      return this._cpf.cpf;
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

    this._cpf = cpf;
    Object.freeze(this);
  }

  _createClass(CPF, [{
    key: "cpf",
    get: function get() {
      return this._cpf;
    }
  }, {
    key: "formated",
    get: function get() {
      return this._cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function (fullMatch, partOne, partTwo, partThree, digit) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ob21lL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9DUEYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvUGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsInVzZXJzIiwic3RhdGUiLCJtYXAiLCJ1c2VyIiwiZnVsbE5hbWUiLCJjcGZGb3JtYXRlZCIsImVtYWlsIiwicGhvbmVGb3JtYXRlZCIsImpvaW4iLCJfZWxlbWVudCIsImlubmVySFRNTCIsIl90ZW1wbGF0ZSIsIkNvbXBvbmVudCIsIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRvciIsInZhbGlkIiwidXNlcnNUYWJsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlVzZXJzUmVwb3NpdG9yeSIsImdldEFsbCIsInNldFN0YXRlIiwid2luZG93IiwicGFnZUhvbWUiLCJ1c2VyQ29udHJvbGxlciIsIlVzZXIiLCJjcGYiLCJwaG9uZSIsIl9mdWxsTmFtZSIsIl9jcGYiLCJDUEYiLCJfcGhvbmUiLCJQaG9uZSIsIm51bWJlciIsIl9lbWFpbCIsIk9iamVjdCIsImZyZWV6ZSIsImZvcm1hdGVkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImtleSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX2dldEl0ZW0iLCJsaXN0T2ZVc2VycyIsInB1c2giLCJfc2V0SXRlbSIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiX251bWJlciIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7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R0FBSCxFQUFRLGlCQUFVQSxHQUFWLGNBQWlCQyxhQUFqQixjQUFrQ0MsYUFBbEM7QUFFUix5QkFBVUQsYUFBVixjQUEyQkMsYUFBM0I7QUFDRCxPQUpNLENBQVA7QUFLRDtBQWhCSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTXJELFNBQWI7QUFBQTs7QUFBQTs7QUFBQSxvQ0FDYSxVQUFDc0QsUUFBRCxFQUFjO0FBQ3ZCQyx5QkFBcUIsQ0FBQyxZQUFNO0FBQzFCLFdBQUksQ0FBQ2xFLEtBQUwscUJBQ0ssS0FBSSxDQUFDQSxLQURWLEVBRUtpRSxRQUZMOztBQUlBLFdBQUksQ0FBQ0UsTUFBTDtBQUNELEtBTm9CLENBQXJCO0FBT0QsR0FUSDtBQUFBLEUiLCJmaWxlIjoianMvaG9tZS9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2luZnJhL0NvbXBvbmVudCdcbmltcG9ydCBcIi4vVXNlcnNUYWJsZS5zY3NzXCJcblxuZXhwb3J0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIHVzZXJzOiBbXVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fdGVtcGxhdGUoKVxuICB9XG5cbiAgX3RlbXBsYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+Tm9tZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+Q1BGPC90ZD5cbiAgICAgICAgICAgIDx0ZD5FbWFpbDwvdGQ+XG4gICAgICAgICAgICA8dGQ+VGVsZWZvbmU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAke3RoaXMuc3RhdGUudXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5mdWxsTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuY3BmRm9ybWF0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5waG9uZUZvcm1hdGVkfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfSkuam9pbignJyl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIGBcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9kb21haW4vZW50aXRpZXMvVXNlclwiXG5pbXBvcnQgeyBVc2Vyc1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vLi4vZG9tYWluL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFVzZXJzVGFibGUgfSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzVGFibGUnXG5cblxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgYWRkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0XG5cbiAgICBjb25zb2xlLmxvZygnJGZvcm0udmFsaWQnLCRmb3JtLnZhbGlkYXRvci52YWxpZClcblxuICAgIC8vIGNvbnN0IGZvcm1FbGVtZW50c0RUTyA9IHtcbiAgICAvLyAgIGZ1bGxOYW1lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXROb21lXCJdJykudmFsdWUsXG4gICAgLy8gICBjcGY6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dENQRlwiXScpLnZhbHVlLFxuICAgIC8vICAgcGhvbmU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dFRlbGVmb25lXCJdJykudmFsdWUsXG4gICAgLy8gICBlbWFpbDogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0RW1haWxcIl0nKS52YWx1ZVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pXG5cbiAgICAvLyBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KClcbiAgICAvLyB1c2Vyc1JlcG9zaXRvcnkuYWRkKHVzZXIpXG4gIH1cblxuICBzaG93QWxsKGV2ZW50KSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpKVxuXG4gICAgY29uc3QgdXNlcnMgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCkuZ2V0QWxsKClcblxuICAgIHVzZXJzVGFibGUuc2V0U3RhdGUoe1xuICAgICAgdXNlcnNcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInXG5cbndpbmRvdy5wYWdlSG9tZSA9IHtcbiAgdXNlckNvbnRyb2xsZXI6IG5ldyBVc2VyQ29udHJvbGxlcih0aGlzKVxufVxuXG5cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL1Bob25lXCI7XG5pbXBvcnQgeyBDUEYgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL0NQRlwiO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHsgZnVsbE5hbWUsIGNwZiwgcGhvbmUsIGVtYWlsIH0pIHtcbiAgICB0aGlzLl9mdWxsTmFtZSA9IGZ1bGxOYW1lXG4gICAgdGhpcy5fY3BmID0gbmV3IENQRih7IGNwZiB9KVxuICAgIHRoaXMuX3Bob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KVxuICAgIHRoaXMuX2VtYWlsID0gZW1haWxcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCBmdWxsTmFtZSgpIHsgcmV0dXJuIHRoaXMuX2Z1bGxOYW1lIH1cblxuICBnZXQgZW1haWwoKSB7IHJldHVybiB0aGlzLl9lbWFpbCB9XG5cbiAgZ2V0IGNwZigpIHsgcmV0dXJuIHRoaXMuX2NwZi5jcGYgfVxuICBnZXQgY3BmRm9ybWF0ZWQoKSB7IHJldHVybiB0aGlzLl9jcGYuZm9ybWF0ZWQgfVxuXG4gIGdldCBwaG9uZSgpIHsgcmV0dXJuIHRoaXMuX3Bob25lLm51bWJlciB9XG4gIGdldCBwaG9uZUZvcm1hdGVkKCkgeyByZXR1cm4gdGhpcy5fcGhvbmUuZm9ybWF0ZWQgfVxufVxuXG5cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vZW50aXRpZXMvVXNlclwiO1xuXG5leHBvcnQgY2xhc3MgVXNlcnNSZXBvc2l0b3J5IHtcbiAga2V5ID0gJ3VzZXJzJ1xuXG4gIF9nZXRJdGVtKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cbiAgfVxuXG4gIF9zZXRJdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtKCkubWFwKCh1c2VyKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFVzZXIoe1xuICAgICAgICBmdWxsTmFtZTogdXNlci5fZnVsbE5hbWUsXG4gICAgICAgIGNwZjogdXNlci5fY3BmLFxuICAgICAgICBwaG9uZTogdXNlci5fcGhvbmUsXG4gICAgICAgIGVtYWlsOiB1c2VyLl9lbWFpbFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkKHVzZXIpIHtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKClcbiAgICBsaXN0T2ZVc2Vycy5wdXNoKHVzZXIpXG4gICAgdGhpcy5fc2V0SXRlbShsaXN0T2ZVc2VycylcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgY3BmIH0pIHtcbiAgICB0aGlzLl9jcGYgPSBjcGZcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCBjcGYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwZlxuICB9XG5cbiAgZ2V0IGZvcm1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jcGYucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7M30pKFxcZHsyfSkvLCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiB7XG4gICAgICByZXR1cm4gYCR7cGFydE9uZX0uJHtwYXJ0VHdvfS4ke3BhcnRUaHJlZX0tJHtkaWdpdH1gXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBob25lIHtcbiAgY29uc3RydWN0b3IoeyBudW1iZXIgfSkge1xuICAgIHRoaXMuX251bWJlciA9IG51bWJlclxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCBudW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlclxuICB9XG5cbiAgZ2V0IGZvcm1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXIucmVwbGFjZSgvKFxcZHsyfSk/KFxcZHs0fSkoXFxkezR9KS8sIChmdWxsTWF0Y2gsIGRkZCwgbnVtYmVyUGFydE9uZSwgbnVtYmVyUGFydFR3bykgPT4ge1xuICAgICAgaWYoZGRkKSByZXR1cm4gYCR7ZGRkfS0ke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gXG5cbiAgICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YFxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICBzZXRTdGF0ZSA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAuLi5uZXdTdGF0ZVxuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=