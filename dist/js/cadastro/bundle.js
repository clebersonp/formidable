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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./src/app/pages/cadastro/index.js":
/*!*****************************************!*\
  !*** ./src/app/pages/cadastro/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/UserControler */ "./src/app/controllers/UserControler.js");
/* harmony import */ var _infra_FormValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../infra/FormValidator */ "./src/infra/FormValidator.js");


window.pageCadastro = {
  userController: new _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["UserController"](),
  formAddUsuario: new _infra_FormValidator__WEBPACK_IMPORTED_MODULE_1__["FormValidator"](document.querySelector('[data-element="formAddUsuario"]'), {
    'nome': function nome(value, contract) {
      return contract.validate('nome', value).isRequired();
    },
    // 'cpf': (value, contract) => contract.validate('cpf', value).isRequired().isCPF(),
    // 'telefone': (value, contract) => contract.validate('telefone', value).isRequired().isPhoneOrCellPhone(),
    'email': function email(value, contract) {
      return contract.validate('email', value).isRequired().isEmail();
    }
  })
};

/***/ }),

/***/ "./src/app/pages/cadastro/index.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cadastro/index.scss ***!
  \*******************************************/
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

/***/ "./src/infra/FluentValidator.js":
/*!**************************************!*\
  !*** ./src/infra/FluentValidator.js ***!
  \**************************************/
/*! exports provided: ValidationContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationContract", function() { return ValidationContract; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidationContract =
/*#__PURE__*/
function () {
  function ValidationContract() {
    var _this = this;

    _classCallCheck(this, ValidationContract);

    _defineProperty(this, "_errors", new Map());

    _defineProperty(this, "hasErrors", function () {
      var contractIsInvalid = false;

      _this._errors.forEach(function (param) {
        if (param.size === 1) {
          contractIsInvalid = true;
        }
      });

      return contractIsInvalid;
    });

    _defineProperty(this, "setError", function (param, type, message) {
      var currentParamErrors = _this.getErrorsByParam(param);

      var errorObj = {
        param: param,
        type: type,
        message: message
      };

      if (currentParamErrors) {
        currentParamErrors.set(type, errorObj);
      } else {
        _this._errors.set(param, new Map());

        _this.getErrorsByParam(param).set(type, errorObj);
      }
    });

    _defineProperty(this, "removeError", function (param, type) {
      if (_this.getErrorsByParam(param)) {
        _this.getErrorsByParam(param).delete(type);
      }
    });
  }

  _createClass(ValidationContract, [{
    key: "validate",
    value: function validate(param, value) {
      return new Validations({
        contract: this,
        param: param,
        value: value
      });
    }
  }, {
    key: "getErrorsByParam",
    value: function getErrorsByParam(param) {
      return this._errors.get(param);
    }
  }, {
    key: "isValidParam",
    value: function isValidParam(param) {
      return this._errors.get(param).size === 0;
    }
  }, {
    key: "errors",
    get: function get() {
      return this._errors;
    }
  }]);

  return ValidationContract;
}();

var Validations = function Validations(_ref) {
  var _this2 = this;

  var contract = _ref.contract,
      param = _ref.param,
      value = _ref.value;

  _classCallCheck(this, Validations);

  _defineProperty(this, "applyValidation", function (condition, validationName, message) {
    if (condition) {
      _this2._contract.setError(_this2._param, validationName, message);
    } else {
      _this2._contract.removeError(_this2._param, validationName, message);
    }
  });

  _defineProperty(this, "isRequired", function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'This field is required';
    var condition = !_this2._value || _this2._value.length <= 0;

    _this2.applyValidation(condition, 'isRequired', message);

    return _this2;
  });

  _defineProperty(this, "isEmail", function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Email must to be valid';
    var regexEmailValid = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    var condition = !regexEmailValid.test(_this2._value);

    _this2.applyValidation(condition, 'isEmail', message);

    return _this2;
  });

  this._param = param;
  this._contract = contract;
  this._value = value;
};

/***/ }),

/***/ "./src/infra/FormValidator.js":
/*!************************************!*\
  !*** ./src/infra/FormValidator.js ***!
  \************************************/
/*! exports provided: FormValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidator", function() { return FormValidator; });
/* harmony import */ var _FluentValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentValidator */ "./src/infra/FluentValidator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var FormValidator =
/*#__PURE__*/
function () {
  function FormValidator($formElement, formFieldNames) {
    var _this = this;

    _classCallCheck(this, FormValidator);

    _defineProperty(this, "setupAllFormFieldElements", function () {
      var formFieldElements = [];

      var _loop = function _loop(fieldName) {
        var $formFieldElement = _this._$formElement.querySelector("[name=\"".concat(fieldName, "\"]"));

        $formFieldElement.insertAdjacentHTML('afterend', "<span class=\"errors\"></span>");
        var $formFieldErrorsElement = $formFieldElement.nextElementSibling;

        $formFieldElement.validate = function () {
          _this._formFieldNames[fieldName]($formFieldElement.value, _this._validationContract); // console.log('Erros deste campo:', this._validationContract.getErrorsByParam(fieldName))


          console.log(_this._validationContract.isValidParam(fieldName));

          if (!_this._validationContract.isValidParam(fieldName)) {
            $formFieldElement.classList.add('-invalid');
          } else {
            $formFieldElement.classList.remove('-invalid');
          }

          $formFieldErrorsElement.innerHTML = "".concat(Array.from(_this._validationContract.getErrorsByParam(fieldName).values()).map(function (error) {
            return error.message;
          }));
        };

        formFieldElements.push($formFieldElement);
      };

      for (var fieldName in _this._formFieldNames) {
        _loop(fieldName);
      }

      _this._formFieldElements = formFieldElements;
    });

    _defineProperty(this, "validateFormFieldElement", function (_ref) {
      var formFieldElement = _ref.target;
      formFieldElement.validate();
    });

    _defineProperty(this, "validateAllFormFieldElements", function () {
      _this._formFieldElements.forEach(function (formFieldElement) {
        formFieldElement.validate();
      });
    });

    this._validationContract = new _FluentValidator__WEBPACK_IMPORTED_MODULE_0__["ValidationContract"]();
    this._$formElement = $formElement;
    this._formFieldNames = formFieldNames;
    this.setupAllFormFieldElements();
    $formElement.validator = this;
    $formElement.addEventListener('change', this.validateFormFieldElement);
    $formElement.addEventListener('input', this.validateFormFieldElement);
  }

  _createClass(FormValidator, [{
    key: "valid",
    get: function get() {
      return !this.invalid;
    }
  }, {
    key: "invalid",
    get: function get() {
      this.validateAllFormFieldElements();
      return this._validationContract.hasErrors();
    }
  }]);

  return FormValidator;
}();

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./src/app/pages/cadastro/index.js ./src/app/pages/cadastro/index.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/app/pages/cadastro/index.js */"./src/app/pages/cadastro/index.js");
module.exports = __webpack_require__(/*! ./src/app/pages/cadastro/index.scss */"./src/app/pages/cadastro/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IuanMiXSwibmFtZXMiOlsiVXNlcnNUYWJsZSIsImVsZW1lbnQiLCJ1c2VycyIsInN0YXRlIiwibWFwIiwidXNlciIsImZ1bGxOYW1lIiwiY3BmRm9ybWF0ZWQiLCJlbWFpbCIsInBob25lRm9ybWF0ZWQiLCJqb2luIiwiX2VsZW1lbnQiLCJpbm5lckhUTUwiLCJfdGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0b3IiLCJ2YWxpZCIsInVzZXJzVGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJVc2Vyc1JlcG9zaXRvcnkiLCJnZXRBbGwiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInBhZ2VDYWRhc3RybyIsInVzZXJDb250cm9sbGVyIiwiZm9ybUFkZFVzdWFyaW8iLCJGb3JtVmFsaWRhdG9yIiwidmFsdWUiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJVc2VyIiwiY3BmIiwicGhvbmUiLCJfZnVsbE5hbWUiLCJfY3BmIiwiQ1BGIiwiX3Bob25lIiwiUGhvbmUiLCJudW1iZXIiLCJfZW1haWwiLCJPYmplY3QiLCJmcmVlemUiLCJmb3JtYXRlZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJrZXkiLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIl9nZXRJdGVtIiwibGlzdE9mVXNlcnMiLCJwdXNoIiwiX3NldEl0ZW0iLCJyZXBsYWNlIiwiZnVsbE1hdGNoIiwicGFydE9uZSIsInBhcnRUd28iLCJwYXJ0VGhyZWUiLCJkaWdpdCIsIl9udW1iZXIiLCJkZGQiLCJudW1iZXJQYXJ0T25lIiwibnVtYmVyUGFydFR3byIsIm5ld1N0YXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiVmFsaWRhdGlvbkNvbnRyYWN0IiwiTWFwIiwiY29udHJhY3RJc0ludmFsaWQiLCJfZXJyb3JzIiwiZm9yRWFjaCIsInBhcmFtIiwic2l6ZSIsInR5cGUiLCJtZXNzYWdlIiwiY3VycmVudFBhcmFtRXJyb3JzIiwiZ2V0RXJyb3JzQnlQYXJhbSIsImVycm9yT2JqIiwic2V0IiwiZGVsZXRlIiwiVmFsaWRhdGlvbnMiLCJnZXQiLCJjb25kaXRpb24iLCJ2YWxpZGF0aW9uTmFtZSIsIl9jb250cmFjdCIsInNldEVycm9yIiwiX3BhcmFtIiwicmVtb3ZlRXJyb3IiLCJfdmFsdWUiLCJsZW5ndGgiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0IiwiJGZvcm1FbGVtZW50IiwiZm9ybUZpZWxkTmFtZXMiLCJmb3JtRmllbGRFbGVtZW50cyIsImZpZWxkTmFtZSIsIiRmb3JtRmllbGRFbGVtZW50IiwiXyRmb3JtRWxlbWVudCIsImluc2VydEFkamFjZW50SFRNTCIsIiRmb3JtRmllbGRFcnJvcnNFbGVtZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX2Zvcm1GaWVsZE5hbWVzIiwiX3ZhbGlkYXRpb25Db250cmFjdCIsImlzVmFsaWRQYXJhbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImVycm9yIiwiX2Zvcm1GaWVsZEVsZW1lbnRzIiwiZm9ybUZpZWxkRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGVGb3JtRmllbGRFbGVtZW50IiwiaW52YWxpZCIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJoYXNFcnJvcnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7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QXFCTCxZQUFyQjtBQUVBLFNBQUtTLGVBQUwsR0FBdUJSLGNBQXZCO0FBQ0EsU0FBS29CLHlCQUFMO0FBRUFyQixnQkFBWSxDQUFDcEYsU0FBYixHQUF5QixJQUF6QjtBQUNBb0YsZ0JBQVksQ0FBQ3NCLGdCQUFiLENBQThCLFFBQTlCLEVBQXdDLEtBQUtDLHdCQUE3QztBQUNBdkIsZ0JBQVksQ0FBQ3NCLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLEtBQUtDLHdCQUE1QztBQUNEOztBQVpIO0FBQUE7QUFBQSx3QkFjZTtBQUNYLGFBQU8sQ0FBQyxLQUFLQyxPQUFiO0FBQ0Q7QUFoQkg7QUFBQTtBQUFBLHdCQWtCaUI7QUFDYixXQUFLQyw0QkFBTDtBQUNBLGFBQU8sS0FBS2YsbUJBQUwsQ0FBeUJnQixTQUF6QixFQUFQO0FBQ0Q7QUFyQkg7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2NhZGFzdHJvL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vaW5mcmEvQ29tcG9uZW50J1xuaW1wb3J0IFwiLi9Vc2Vyc1RhYmxlLnNjc3NcIlxuXG5leHBvcnQgY2xhc3MgVXNlcnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl90ZW1wbGF0ZSgpXG4gIH1cblxuICBfdGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7dGhpcy5zdGF0ZS51c2Vycy5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmZ1bGxOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5jcGZGb3JtYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLnBob25lRm9ybWF0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9KS5qb2luKCcnKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL2RvbWFpbi9lbnRpdGllcy9Vc2VyXCJcbmltcG9ydCB7IFVzZXJzUmVwb3NpdG9yeSB9IGZyb20gXCIuLi8uLi9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlcnNUYWJsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSdcblxuXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXRcblxuICAgIGNvbnNvbGUubG9nKCckZm9ybS52YWxpZCcsJGZvcm0udmFsaWRhdG9yLnZhbGlkKVxuXG4gICAgLy8gY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgIC8vICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAvLyAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgLy8gICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAvLyAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm1FbGVtZW50c0RUTylcblxuICAgIC8vIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKVxuICAgIC8vIHVzZXJzUmVwb3NpdG9yeS5hZGQodXNlcilcbiAgfVxuXG4gIHNob3dBbGwoZXZlbnQpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJykpXG5cbiAgICBjb25zdCB1c2VycyA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKS5nZXRBbGwoKVxuXG4gICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICB1c2Vyc1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xlcidcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tICcuLi8uLi8uLi9pbmZyYS9Gb3JtVmFsaWRhdG9yJ1xuXG53aW5kb3cucGFnZUNhZGFzdHJvID0ge1xuICB1c2VyQ29udHJvbGxlcjogbmV3IFVzZXJDb250cm9sbGVyKCksXG4gIGZvcm1BZGRVc3VhcmlvOiBuZXcgRm9ybVZhbGlkYXRvcihcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybUFkZFVzdWFyaW9cIl0nKSxcbiAgICB7XG4gICAgICAnbm9tZSc6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0LnZhbGlkYXRlKCdub21lJywgdmFsdWUpLmlzUmVxdWlyZWQoKSxcbiAgICAgIC8vICdjcGYnOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdC52YWxpZGF0ZSgnY3BmJywgdmFsdWUpLmlzUmVxdWlyZWQoKS5pc0NQRigpLFxuICAgICAgLy8gJ3RlbGVmb25lJzogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3QudmFsaWRhdGUoJ3RlbGVmb25lJywgdmFsdWUpLmlzUmVxdWlyZWQoKS5pc1Bob25lT3JDZWxsUGhvbmUoKSxcbiAgICAgICdlbWFpbCc6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0LnZhbGlkYXRlKCdlbWFpbCcsIHZhbHVlKS5pc1JlcXVpcmVkKCkuaXNFbWFpbCgpXG4gICAgfVxuICApXG59XG5cblxuXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IFBob25lIH0gZnJvbSBcIi4uL3ZhbHVlT2JqZWN0cy9QaG9uZVwiO1xuaW1wb3J0IHsgQ1BGIH0gZnJvbSBcIi4uL3ZhbHVlT2JqZWN0cy9DUEZcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7IGZ1bGxOYW1lLCBjcGYsIHBob25lLCBlbWFpbCB9KSB7XG4gICAgdGhpcy5fZnVsbE5hbWUgPSBmdWxsTmFtZVxuICAgIHRoaXMuX2NwZiA9IG5ldyBDUEYoeyBjcGYgfSlcbiAgICB0aGlzLl9waG9uZSA9IG5ldyBQaG9uZSh7IG51bWJlcjogcGhvbmUgfSlcbiAgICB0aGlzLl9lbWFpbCA9IGVtYWlsXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgZnVsbE5hbWUoKSB7IHJldHVybiB0aGlzLl9mdWxsTmFtZSB9XG5cbiAgZ2V0IGVtYWlsKCkgeyByZXR1cm4gdGhpcy5fZW1haWwgfVxuXG4gIGdldCBjcGYoKSB7IHJldHVybiB0aGlzLl9jcGYuY3BmIH1cbiAgZ2V0IGNwZkZvcm1hdGVkKCkgeyByZXR1cm4gdGhpcy5fY3BmLmZvcm1hdGVkIH1cblxuICBnZXQgcGhvbmUoKSB7IHJldHVybiB0aGlzLl9waG9uZS5udW1iZXIgfVxuICBnZXQgcGhvbmVGb3JtYXRlZCgpIHsgcmV0dXJuIHRoaXMuX3Bob25lLmZvcm1hdGVkIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL2VudGl0aWVzL1VzZXJcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJzUmVwb3NpdG9yeSB7XG4gIGtleSA9ICd1c2VycydcblxuICBfZ2V0SXRlbSgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpIHx8IFtdXG4gIH1cblxuICBfc2V0SXRlbShpdGVtKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcbiAgfVxuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbSgpLm1hcCgodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyKHtcbiAgICAgICAgZnVsbE5hbWU6IHVzZXIuX2Z1bGxOYW1lLFxuICAgICAgICBjcGY6IHVzZXIuX2NwZixcbiAgICAgICAgcGhvbmU6IHVzZXIuX3Bob25lLFxuICAgICAgICBlbWFpbDogdXNlci5fZW1haWxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZCh1c2VyKSB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpXG4gICAgbGlzdE9mVXNlcnMucHVzaCh1c2VyKVxuICAgIHRoaXMuX3NldEl0ZW0obGlzdE9mVXNlcnMpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDUEYge1xuICBjb25zdHJ1Y3Rvcih7IGNwZiB9KSB7XG4gICAgdGhpcy5fY3BmID0gY3BmXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgY3BmKCkge1xuICAgIHJldHVybiB0aGlzLl9jcGZcbiAgfVxuXG4gIGdldCBmb3JtYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3BmLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLywgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4ge1xuICAgICAgcmV0dXJuIGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YFxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLl9udW1iZXIgPSBudW1iZXJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgbnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJcbiAgfVxuXG4gIGdldCBmb3JtYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICAgIGlmKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YFxuXG4gICAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWBcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGVcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmFsaWRhdGlvbkNvbnRyYWN0IHtcbiAgX2Vycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pXG4gIH1cblxuICBoYXNFcnJvcnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRyYWN0SXNJbnZhbGlkID0gZmFsc2VcbiAgICB0aGlzLl9lcnJvcnMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgIGlmKHBhcmFtLnNpemUgPT09IDEpIHtcbiAgICAgICAgY29udHJhY3RJc0ludmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gY29udHJhY3RJc0ludmFsaWRcbiAgfVxuXG4gIHNldEVycm9yID0gKHBhcmFtLCB0eXBlLCBtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhcmFtRXJyb3JzID0gdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKVxuICAgIGNvbnN0IGVycm9yT2JqID0ge1xuICAgICAgcGFyYW0sXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICBpZihjdXJyZW50UGFyYW1FcnJvcnMpIHtcbiAgICAgIGN1cnJlbnRQYXJhbUVycm9ycy5zZXQodHlwZSwgZXJyb3JPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5zZXQocGFyYW0sIG5ldyBNYXAoKSlcbiAgICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuc2V0KHR5cGUsIGVycm9yT2JqKVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVycm9yID0gKHBhcmFtLCB0eXBlKSA9PiB7XG4gICAgaWYodGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSkge1xuICAgICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5kZWxldGUodHlwZSlcbiAgICB9XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNcbiAgfVxuXG4gIGdldEVycm9yc0J5UGFyYW0ocGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzLmdldChwYXJhbSlcbiAgfVxuXG4gIGlzVmFsaWRQYXJhbShwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnMuZ2V0KHBhcmFtKS5zaXplID09PSAwXG4gIH1cbn1cblxuY2xhc3MgVmFsaWRhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih7IGNvbnRyYWN0LCBwYXJhbSwgdmFsdWUgfSkge1xuICAgIHRoaXMuX3BhcmFtID0gcGFyYW1cbiAgICB0aGlzLl9jb250cmFjdCA9IGNvbnRyYWN0XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgYXBwbHlWYWxpZGF0aW9uID0gKGNvbmRpdGlvbiwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLl9jb250cmFjdC5zZXRFcnJvcih0aGlzLl9wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRyYWN0LnJlbW92ZUVycm9yKHRoaXMuX3BhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBpc1JlcXVpcmVkID0gKG1lc3NhZ2UgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhdGhpcy5fdmFsdWUgfHwgdGhpcy5fdmFsdWUubGVuZ3RoIDw9IDBcblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzUmVxdWlyZWQnLCBtZXNzYWdlKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGlzRW1haWwgPSAobWVzc2FnZSA9ICdFbWFpbCBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIHZhciByZWdleEVtYWlsVmFsaWQgPSBuZXcgUmVnRXhwKC9eXFx3KyhbLSsuJ11cXHcrKSpAXFx3KyhbLS5dXFx3KykqXFwuXFx3KyhbLS5dXFx3KykqJC8pO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICFyZWdleEVtYWlsVmFsaWQudGVzdCh0aGlzLl92YWx1ZSlcbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc0VtYWlsJywgbWVzc2FnZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyYWN0IH0gZnJvbSAnLi9GbHVlbnRWYWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoJGZvcm1FbGVtZW50LCBmb3JtRmllbGROYW1lcykge1xuICAgIHRoaXMuX3ZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKVxuXG4gICAgdGhpcy5fJGZvcm1FbGVtZW50ID0gJGZvcm1FbGVtZW50XG5cbiAgICB0aGlzLl9mb3JtRmllbGROYW1lcyA9IGZvcm1GaWVsZE5hbWVzXG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKClcblxuICAgICRmb3JtRWxlbWVudC52YWxpZGF0b3IgPSB0aGlzXG4gICAgJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KVxuICAgICRmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KVxuICB9XG5cbiAgZ2V0IHZhbGlkICgpIHtcbiAgICByZXR1cm4gIXRoaXMuaW52YWxpZFxuICB9XG5cbiAgZ2V0IGludmFsaWQgKCkge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKVxuICB9XG5cbiAgc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtRmllbGRFbGVtZW50cyA9IFtdXG4gICAgZm9yKGNvbnN0IGZpZWxkTmFtZSBpbiB0aGlzLl9mb3JtRmllbGROYW1lcykge1xuICAgICAgY29uc3QgJGZvcm1GaWVsZEVsZW1lbnQgPSB0aGlzLl8kZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKVxuXG4gICAgICAkZm9ybUZpZWxkRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYDxzcGFuIGNsYXNzPVwiZXJyb3JzXCI+PC9zcGFuPmApXG5cbiAgICAgIGNvbnN0ICRmb3JtRmllbGRFcnJvcnNFbGVtZW50ID0gJGZvcm1GaWVsZEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICAgICRmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9mb3JtRmllbGROYW1lc1tmaWVsZE5hbWVdKCRmb3JtRmllbGRFbGVtZW50LnZhbHVlLCB0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFcnJvcyBkZXN0ZSBjYW1wbzonLCB0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QuZ2V0RXJyb3JzQnlQYXJhbShmaWVsZE5hbWUpKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QuaXNWYWxpZFBhcmFtKGZpZWxkTmFtZSkpXG4gICAgICAgIGlmKCF0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QuaXNWYWxpZFBhcmFtKGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAkZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctaW52YWxpZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWludmFsaWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgJGZvcm1GaWVsZEVycm9yc0VsZW1lbnQuaW5uZXJIVE1MID0gYCR7XG4gICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QuZ2V0RXJyb3JzQnlQYXJhbShmaWVsZE5hbWUpLnZhbHVlcygpKS5tYXAoKGVycm9yKSA9PiBlcnJvci5tZXNzYWdlKVxuICAgICAgICB9YFxuICAgICAgfVxuXG4gICAgICBmb3JtRmllbGRFbGVtZW50cy5wdXNoKCRmb3JtRmllbGRFbGVtZW50KVxuICAgIH1cbiAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50cyA9IGZvcm1GaWVsZEVsZW1lbnRzXG4gIH1cblxuICB2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQgPSAoeyB0YXJnZXQ6IGZvcm1GaWVsZEVsZW1lbnQgfSkgPT4ge1xuICAgIGZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdGUoKVxuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKClcbiAgICB9KVxuICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==