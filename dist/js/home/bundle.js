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

    _this._baseElement = element;
    return _this;
  }

  _createClass(UsersTable, [{
    key: "render",
    value: function render() {
      this._baseElement.innerHTML = this._template();
    }
  }]);

  return UsersTable;
}(_infra_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
      if ($form.validator.isInvalid()) return;
      var formElementsDTO = {
        fullName: $form.querySelector('[data-element="inputNome"]').value,
        cpf: $form.querySelector('[data-element="inputCPF"]').value,
        phone: $form.querySelector('[data-element="inputTelefone"]').value,
        email: $form.querySelector('[data-element="inputEmail"]').value
      };
      $form.dispatchEvent(new Event('btnsubmitloading'));
      setTimeout(function () {
        $form.dispatchEvent(new Event('btnsubmitloaded'));
      }, 2000);
      var user = new _domain_entities_User__WEBPACK_IMPORTED_MODULE_0__["User"](formElementsDTO);
      var usersRepository = new _domain_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["UsersRepository"]();
      usersRepository.add(user);
    }
  }, {
    key: "showAll",
    value: function showAll(event) {// const usersTable = new UsersTable(document.querySelector('[data-template="UsersTable"]'))
      // const users = new UsersRepository().getAll()
      // usersTable.setState({
      //   users
      // })
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

    console.log(cpf);
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
      console.log(this._value);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ob21lL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9DUEYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvUGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsInVzZXJzIiwic3RhdGUiLCJtYXAiLCJ1c2VyIiwiZnVsbE5hbWUiLCJjcGZGb3JtYXRlZCIsImVtYWlsIiwicGhvbmVGb3JtYXRlZCIsImpvaW4iLCJfYmFzZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJfdGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInRhcmdldCIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImZvcm1FbGVtZW50c0RUTyIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Iiwic2V0VGltZW91dCIsIlVzZXIiLCJ1c2Vyc1JlcG9zaXRvcnkiLCJVc2Vyc1JlcG9zaXRvcnkiLCJhZGQiLCJ3aW5kb3ciLCJwYWdlSG9tZSIsInVzZXJDb250cm9sbGVyIiwiX2Z1bGxOYW1lIiwiX2NwZiIsIkNQRiIsIl9waG9uZSIsIlBob25lIiwibnVtYmVyIiwiX2VtYWlsIiwiT2JqZWN0IiwiZnJlZXplIiwiZm9ybWF0ZWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwia2V5IiwiaXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJfZ2V0SXRlbSIsImxpc3RPZlVzZXJzIiwiZ2V0QWxsIiwicHVzaCIsIl9zZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIl92YWx1ZSIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiX251bWJlciIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hE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U0FBOUIsRUFBeUNDLEtBQXpDLEVBQW1EO0FBQzVHLHlCQUFVSCxPQUFWLGNBQXFCQyxPQUFyQixjQUFnQ0MsU0FBaEMsY0FBNkNDLEtBQTdDO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7QUFqQkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU0zQixLQUFiO0FBQUE7QUFBQTtBQUNFLHVCQUF3QjtBQUFBLFFBQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQTs7QUFDdEIsU0FBSzJCLE9BQUwsR0FBZTNCLE1BQWY7QUFDQUUsVUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZDtBQUNEOztBQUpIO0FBQUE7QUFBQSx3QkFNZTtBQUNYLGFBQU8sS0FBS3dCLE9BQVo7QUFDRDtBQVJIO0FBQUE7QUFBQSx3QkFVaUI7QUFDYixhQUFPLEtBQUtBLE9BQUwsQ0FBYU4sT0FBYixDQUFxQix3QkFBckIsRUFBK0MsVUFBQ0MsU0FBRCxFQUFZTSxHQUFaLEVBQWlCQyxhQUFqQixFQUFnQ0MsYUFBaEMsRUFBa0Q7QUFDdEcsWUFBR0YsR0FBSCxFQUFRLGlCQUFVQSxHQUFWLGNBQWlCQyxhQUFqQixjQUFrQ0MsYUFBbEM7QUFFUix5QkFBVUQsYUFBVixjQUEyQkMsYUFBM0I7QUFDRCxPQUpNLENBQVA7QUFLRDtBQWhCSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCMUQsUzs7Ozs7b0NBQ1IsVUFBQzJELFFBQUQsRUFBYztBQUN2QkMseUJBQXFCLENBQUMsWUFBTTtBQUMxQixXQUFJLENBQUN2RSxLQUFMLHFCQUNLLEtBQUksQ0FBQ0EsS0FEVixFQUVLc0UsUUFGTDs7QUFJQSxXQUFJLENBQUNFLE1BQUw7QUFDRCxLQU5vQixDQUFyQjtBQU9ELEciLCJmaWxlIjoianMvaG9tZS9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vaW5mcmEvQ29tcG9uZW50J1xuaW1wb3J0IFwiLi9Vc2Vyc1RhYmxlLnNjc3NcIlxuXG5leHBvcnQgY2xhc3MgVXNlcnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuX2Jhc2VFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX3RlbXBsYXRlKClcbiAgfVxuXG4gIF90ZW1wbGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vbWU8L3RkPlxuICAgICAgICAgICAgPHRkPkNQRjwvdGQ+XG4gICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxuICAgICAgICAgICAgPHRkPlRlbGVmb25lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHt0aGlzLnN0YXRlLnVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuZnVsbE5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmNwZkZvcm1hdGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIucGhvbmVGb3JtYXRlZH08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH0pLmpvaW4oJycpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICBgXG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vZG9tYWluL2VudGl0aWVzL1VzZXJcIlxuaW1wb3J0IHsgVXNlcnNSZXBvc2l0b3J5IH0gZnJvbSBcIi4uLy4uL2RvbWFpbi9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBVc2Vyc1RhYmxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vyc1RhYmxlJ1xuXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXRcblxuICAgIGlmKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlXG4gICAgfVxuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkZWQnKSlcbiAgICB9LCAyMDAwKVxuXG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm1FbGVtZW50c0RUTylcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKVxuICAgIHVzZXJzUmVwb3NpdG9yeS5hZGQodXNlcilcbiAgfVxuXG4gIHNob3dBbGwoZXZlbnQpIHtcbiAgICAvLyBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJykpXG4gICAgLy8gY29uc3QgdXNlcnMgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCkuZ2V0QWxsKClcbiAgICAvLyB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAvLyAgIHVzZXJzXG4gICAgLy8gfSlcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBVc2VyQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInXG5cbndpbmRvdy5wYWdlSG9tZSA9IHtcbiAgdXNlckNvbnRyb2xsZXI6IG5ldyBVc2VyQ29udHJvbGxlcih0aGlzKVxufVxuXG5cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL1Bob25lXCI7XG5pbXBvcnQgeyBDUEYgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL0NQRlwiO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHsgZnVsbE5hbWUsIGNwZiwgcGhvbmUsIGVtYWlsIH0pIHtcbiAgICB0aGlzLl9mdWxsTmFtZSA9IGZ1bGxOYW1lXG4gICAgdGhpcy5fY3BmID0gbmV3IENQRih7IGNwZiB9KVxuICAgIHRoaXMuX3Bob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KVxuICAgIHRoaXMuX2VtYWlsID0gZW1haWxcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCBmdWxsTmFtZSgpIHsgcmV0dXJuIHRoaXMuX2Z1bGxOYW1lIH1cblxuICBnZXQgZW1haWwoKSB7IHJldHVybiB0aGlzLl9lbWFpbCB9XG5cbiAgZ2V0IGNwZigpIHsgcmV0dXJuIHRoaXMuX2NwZi52YWx1ZSB9XG4gIGdldCBjcGZGb3JtYXRlZCgpIHsgcmV0dXJuIHRoaXMuX2NwZi5mb3JtYXRlZCB9XG5cbiAgZ2V0IHBob25lKCkgeyByZXR1cm4gdGhpcy5fcGhvbmUubnVtYmVyIH1cbiAgZ2V0IHBob25lRm9ybWF0ZWQoKSB7IHJldHVybiB0aGlzLl9waG9uZS5mb3JtYXRlZCB9XG59XG5cblxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9lbnRpdGllcy9Vc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgX2dldEl0ZW0oKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuICB9XG5cbiAgX3NldEl0ZW0oaXRlbSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gIH1cblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW0oKS5tYXAoKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgIGZ1bGxOYW1lOiB1c2VyLl9mdWxsTmFtZSxcbiAgICAgICAgY3BmOiB1c2VyLl9jcGYsXG4gICAgICAgIHBob25lOiB1c2VyLl9waG9uZSxcbiAgICAgICAgZW1haWw6IHVzZXIuX2VtYWlsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGQodXNlcikge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKVxuICAgIGxpc3RPZlVzZXJzLnB1c2godXNlcilcbiAgICB0aGlzLl9zZXRJdGVtKGxpc3RPZlVzZXJzKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBjcGYgfSkge1xuICAgIGNvbnNvbGUubG9nKGNwZilcbiAgICB0aGlzLl92YWx1ZSA9IGNwZlxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZVxuICB9XG5cbiAgZ2V0IGZvcm1hdGVkKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX3ZhbHVlKVxuICAgIHJldHVybiB0aGlzLl92YWx1ZS5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS8sIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IHtcbiAgICAgIHJldHVybiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWBcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5fbnVtYmVyID0gbnVtYmVyXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0IG51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyXG4gIH1cblxuICBnZXQgZm9ybWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgICBpZihkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWBcblxuICAgICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==