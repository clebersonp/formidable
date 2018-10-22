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
/* harmony import */ var _validations_newUserValidationSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validations/newUserValidationSchema */ "./src/app/validations/newUserValidationSchema.js");



window.pageCadastro = {
  userController: new _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["UserController"](),
  formAddUsuario: new _infra_FormValidator__WEBPACK_IMPORTED_MODULE_1__["FormValidator"](document.querySelector('[data-element="formAddUsuario"]'), _validations_newUserValidationSchema__WEBPACK_IMPORTED_MODULE_2__["newUserValidationSchema"])
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

/***/ "./src/app/validations/newUserValidationSchema.js":
/*!********************************************************!*\
  !*** ./src/app/validations/newUserValidationSchema.js ***!
  \********************************************************/
/*! exports provided: newUserValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newUserValidationSchema", function() { return newUserValidationSchema; });
var newUserValidationSchema = {
  'nome': function nome(value, contract) {
    return contract.validate('nome', value).isRequired();
  },
  'email': function email(value, contract) {
    return contract.validate('email', value).isRequired('O campo email é obrigatório').isEmail('Informe um e-mail válido');
  } // 'cpf': (value, contract) => contract.validate('cpf', value).isRequired().isCPF(),
  // 'telefone': (value, contract) => contract.validate('telefone', value).isRequired('O campo telefone é obrigatório').hasMinLength(10, 'Informe um telefone válido'),

};

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
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var FormValidator = function FormValidator($formElement, formFieldNames) {
  var _this = this;

  _classCallCheck(this, FormValidator);

  _defineProperty(this, "isValid", function () {
    console.log('a');
    return !_this.isInvalid();
  });

  _defineProperty(this, "isInvalid", function () {
    _this.validateAllFormFieldElements();

    return _this._validationContract.hasErrors();
  });

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

  _defineProperty(this, "setupFormElement", function () {
    _this._$formElement.validator = {
      isValid: _this.isValid,
      isInvalid: _this.isInvalid
    };

    _this._$formElement.addEventListener('change', _this.validateFormFieldElement);

    _this._$formElement.addEventListener('input', _this.validateFormFieldElement);
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
  this.setupFormElement();
  this._formFieldNames = formFieldNames;
  this.setupAllFormFieldElements();
};

var FormFieldValidator =
/*#__PURE__*/
function () {
  function FormFieldValidator() {
    _classCallCheck(this, FormFieldValidator);

    _defineProperty(this, "isValid", void 0);
  }

  _createClass(FormFieldValidator, [{
    key: "validate",
    value: function validate() {}
  }]);

  return FormFieldValidator;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vZW50aXRpZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvQ1BGLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL1Bob25lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsInVzZXJzIiwic3RhdGUiLCJtYXAiLCJ1c2VyIiwiZnVsbE5hbWUiLCJjcGZGb3JtYXRlZCIsImVtYWlsIiwicGhvbmVGb3JtYXRlZCIsImpvaW4iLCJfZWxlbWVudCIsImlubmVySFRNTCIsIl90ZW1wbGF0ZSIsIkNvbXBvbmVudCIsIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsInVzZXJzVGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJVc2Vyc1JlcG9zaXRvcnkiLCJnZXRBbGwiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInBhZ2VDYWRhc3RybyIsInVzZXJDb250cm9sbGVyIiwiZm9ybUFkZFVzdWFyaW8iLCJGb3JtVmFsaWRhdG9yIiwibmV3VXNlclZhbGlkYXRpb25TY2hlbWEiLCJ2YWx1ZSIsImNvbnRyYWN0IiwidmFsaWRhdGUiLCJpc1JlcXVpcmVkIiwiaXNFbWFpbCIsIlVzZXIiLCJjcGYiLCJwaG9uZSIsIl9mdWxsTmFtZSIsIl9jcGYiLCJDUEYiLCJfcGhvbmUiLCJQaG9uZSIsIm51bWJlciIsIl9lbWFpbCIsIk9iamVjdCIsImZyZWV6ZSIsImZvcm1hdGVkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImtleSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX2dldEl0ZW0iLCJsaXN0T2ZVc2VycyIsInB1c2giLCJfc2V0SXRlbSIsIl92YWx1ZSIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiX251bWJlciIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJjb250cmFjdElzSW52YWxpZCIsIl9lcnJvcnMiLCJmb3JFYWNoIiwicGFyYW0iLCJzaXplIiwidHlwZSIsIm1lc3NhZ2UiLCJjdXJyZW50UGFyYW1FcnJvcnMiLCJnZXRFcnJvcnNCeVBhcmFtIiwiZXJyb3JPYmoiLCJzZXQiLCJkZWxldGUiLCJWYWxpZGF0aW9ucyIsImdldCIsImNvbmRpdGlvbiIsInZhbGlkYXRpb25OYW1lIiwiX2NvbnRyYWN0Iiwic2V0RXJyb3IiLCJfcGFyYW0iLCJyZW1vdmVFcnJvciIsImxlbmd0aCIsImFwcGx5VmFsaWRhdGlvbiIsInJlZ2V4RW1haWxWYWxpZCIsIlJlZ0V4cCIsInRlc3QiLCIkZm9ybUVsZW1lbnQiLCJmb3JtRmllbGROYW1lcyIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJfdmFsaWRhdGlvbkNvbnRyYWN0IiwiaGFzRXJyb3JzIiwiZm9ybUZpZWxkRWxlbWVudHMiLCJmaWVsZE5hbWUiLCIkZm9ybUZpZWxkRWxlbWVudCIsIl8kZm9ybUVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCIkZm9ybUZpZWxkRXJyb3JzRWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsIl9mb3JtRmllbGROYW1lcyIsImlzVmFsaWRQYXJhbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImVycm9yIiwiX2Zvcm1GaWVsZEVsZW1lbnRzIiwiaXNWYWxpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRmllbGRFbGVtZW50Iiwic2V0dXBGb3JtRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJGb3JtRmllbGRWYWxpZGF0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vaW5mcmEvQ29tcG9uZW50J1xuaW1wb3J0IFwiLi9Vc2Vyc1RhYmxlLnNjc3NcIlxuXG5leHBvcnQgY2xhc3MgVXNlcnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl90ZW1wbGF0ZSgpXG4gIH1cblxuICBfdGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7dGhpcy5zdGF0ZS51c2Vycy5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmZ1bGxOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5jcGZGb3JtYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLnBob25lRm9ybWF0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9KS5qb2luKCcnKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL2RvbWFpbi9lbnRpdGllcy9Vc2VyXCJcbmltcG9ydCB7IFVzZXJzUmVwb3NpdG9yeSB9IGZyb20gXCIuLi8uLi9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlcnNUYWJsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSdcblxuXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXRcblxuICAgIGNvbnNvbGUubG9nKCckZm9ybS5pbnZhbGlkJywgJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKVxuICAgIGlmKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgLy8gY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgIC8vICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAvLyAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgLy8gICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAvLyAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm1FbGVtZW50c0RUTylcblxuICAgIC8vIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKVxuICAgIC8vIHVzZXJzUmVwb3NpdG9yeS5hZGQodXNlcilcbiAgfVxuXG4gIHNob3dBbGwoZXZlbnQpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJykpXG5cbiAgICBjb25zdCB1c2VycyA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKS5nZXRBbGwoKVxuXG4gICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICB1c2Vyc1xuICAgIH0pXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJ1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gJy4uLy4uLy4uL2luZnJhL0Zvcm1WYWxpZGF0b3InXG5pbXBvcnQgeyBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSB9IGZyb20gJy4uLy4uL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hJztcblxud2luZG93LnBhZ2VDYWRhc3RybyA9IHtcbiAgdXNlckNvbnRyb2xsZXI6IG5ldyBVc2VyQ29udHJvbGxlcigpLFxuICBmb3JtQWRkVXN1YXJpbzogbmV3IEZvcm1WYWxpZGF0b3IoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm1BZGRVc3VhcmlvXCJdJyksXG4gICAgbmV3VXNlclZhbGlkYXRpb25TY2hlbWFcbiAgKVxufVxuXG5cblxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgY29uc3QgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgPSB7XG4gICdub21lJzogKHZhbHVlLCBjb250cmFjdCkgPT5cbiAgICBjb250cmFjdFxuICAgICAgLnZhbGlkYXRlKCdub21lJywgdmFsdWUpXG4gICAgICAuaXNSZXF1aXJlZCgpLFxuICAnZW1haWwnOiAodmFsdWUsIGNvbnRyYWN0KSA9PlxuICAgIGNvbnRyYWN0XG4gICAgICAudmFsaWRhdGUoJ2VtYWlsJywgdmFsdWUpXG4gICAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBlbWFpbCDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgICAgLmlzRW1haWwoJ0luZm9ybWUgdW0gZS1tYWlsIHbDoWxpZG8nKSxcbiAgLy8gJ2NwZic6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0LnZhbGlkYXRlKCdjcGYnLCB2YWx1ZSkuaXNSZXF1aXJlZCgpLmlzQ1BGKCksXG4gIC8vICd0ZWxlZm9uZSc6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0LnZhbGlkYXRlKCd0ZWxlZm9uZScsIHZhbHVlKS5pc1JlcXVpcmVkKCdPIGNhbXBvIHRlbGVmb25lIMOpIG9icmlnYXTDs3JpbycpLmhhc01pbkxlbmd0aCgxMCwgJ0luZm9ybWUgdW0gdGVsZWZvbmUgdsOhbGlkbycpLFxufVxuIiwiaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL1Bob25lXCI7XG5pbXBvcnQgeyBDUEYgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL0NQRlwiO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHsgZnVsbE5hbWUsIGNwZiwgcGhvbmUsIGVtYWlsIH0pIHtcbiAgICB0aGlzLl9mdWxsTmFtZSA9IGZ1bGxOYW1lXG4gICAgdGhpcy5fY3BmID0gbmV3IENQRih7IGNwZiB9KVxuICAgIHRoaXMuX3Bob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KVxuICAgIHRoaXMuX2VtYWlsID0gZW1haWxcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCBmdWxsTmFtZSgpIHsgcmV0dXJuIHRoaXMuX2Z1bGxOYW1lIH1cblxuICBnZXQgZW1haWwoKSB7IHJldHVybiB0aGlzLl9lbWFpbCB9XG5cbiAgZ2V0IGNwZigpIHsgcmV0dXJuIHRoaXMuX2NwZi52YWx1ZSB9XG4gIGdldCBjcGZGb3JtYXRlZCgpIHsgcmV0dXJuIHRoaXMuX2NwZi5mb3JtYXRlZCB9XG5cbiAgZ2V0IHBob25lKCkgeyByZXR1cm4gdGhpcy5fcGhvbmUubnVtYmVyIH1cbiAgZ2V0IHBob25lRm9ybWF0ZWQoKSB7IHJldHVybiB0aGlzLl9waG9uZS5mb3JtYXRlZCB9XG59XG5cblxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9lbnRpdGllcy9Vc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgX2dldEl0ZW0oKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuICB9XG5cbiAgX3NldEl0ZW0oaXRlbSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gIH1cblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW0oKS5tYXAoKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgIGZ1bGxOYW1lOiB1c2VyLl9mdWxsTmFtZSxcbiAgICAgICAgY3BmOiB1c2VyLl9jcGYsXG4gICAgICAgIHBob25lOiB1c2VyLl9waG9uZSxcbiAgICAgICAgZW1haWw6IHVzZXIuX2VtYWlsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGQodXNlcikge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKVxuICAgIGxpc3RPZlVzZXJzLnB1c2godXNlcilcbiAgICB0aGlzLl9zZXRJdGVtKGxpc3RPZlVzZXJzKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBjcGYgfSkge1xuICAgIHRoaXMuX3ZhbHVlID0gY3BmXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlXG4gIH1cblxuICBnZXQgZm9ybWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLywgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4ge1xuICAgICAgcmV0dXJuIGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YFxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLl9udW1iZXIgPSBudW1iZXJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgbnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJcbiAgfVxuXG4gIGdldCBmb3JtYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICAgIGlmKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YFxuXG4gICAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWBcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGVcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmFsaWRhdGlvbkNvbnRyYWN0IHtcbiAgX2Vycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pXG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNcbiAgfVxuXG4gIGhhc0Vycm9ycyA9ICgpID0+IHtcbiAgICBsZXQgY29udHJhY3RJc0ludmFsaWQgPSBmYWxzZVxuICAgIHRoaXMuX2Vycm9ycy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgaWYocGFyYW0uc2l6ZSA9PT0gMSkge1xuICAgICAgICBjb250cmFjdElzSW52YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBjb250cmFjdElzSW52YWxpZFxuICB9XG5cbiAgc2V0RXJyb3IgPSAocGFyYW0sIHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UGFyYW1FcnJvcnMgPSB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pXG4gICAgY29uc3QgZXJyb3JPYmogPSB7XG4gICAgICBwYXJhbSxcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIGlmKGN1cnJlbnRQYXJhbUVycm9ycykge1xuICAgICAgY3VycmVudFBhcmFtRXJyb3JzLnNldCh0eXBlLCBlcnJvck9iailcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXJyb3JzLnNldChwYXJhbSwgbmV3IE1hcCgpKVxuICAgICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5zZXQodHlwZSwgZXJyb3JPYmopXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRXJyb3IgPSAocGFyYW0sIHR5cGUpID0+IHtcbiAgICBpZih0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pKSB7XG4gICAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLmRlbGV0ZSh0eXBlKVxuICAgIH1cbiAgfVxuXG5cbiAgZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnMuZ2V0KHBhcmFtKVxuICB9XG5cbiAgaXNWYWxpZFBhcmFtKHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycy5nZXQocGFyYW0pLnNpemUgPT09IDBcbiAgfVxufVxuXG5jbGFzcyBWYWxpZGF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHsgY29udHJhY3QsIHBhcmFtLCB2YWx1ZSB9KSB7XG4gICAgdGhpcy5fcGFyYW0gPSBwYXJhbVxuICAgIHRoaXMuX2NvbnRyYWN0ID0gY29udHJhY3RcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBhcHBseVZhbGlkYXRpb24gPSAoY29uZGl0aW9uLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHRoaXMuX2NvbnRyYWN0LnNldEVycm9yKHRoaXMuX3BhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udHJhY3QucmVtb3ZlRXJyb3IodGhpcy5fcGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQgPSAobWVzc2FnZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICF0aGlzLl92YWx1ZSB8fCB0aGlzLl92YWx1ZS5sZW5ndGggPD0gMFxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNSZXF1aXJlZCcsIG1lc3NhZ2UpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaXNFbWFpbCA9IChtZXNzYWdlID0gJ0VtYWlsIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgdmFyIHJlZ2V4RW1haWxWYWxpZCA9IG5ldyBSZWdFeHAoL15cXHcrKFstKy4nXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSokLyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXJlZ2V4RW1haWxWYWxpZC50ZXN0KHRoaXMuX3ZhbHVlKVxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzRW1haWwnLCBtZXNzYWdlKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJhY3QgfSBmcm9tICcuL0ZsdWVudFZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcigkZm9ybUVsZW1lbnQsIGZvcm1GaWVsZE5hbWVzKSB7XG4gICAgdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpXG5cbiAgICB0aGlzLl8kZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnRcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKVxuXG4gICAgdGhpcy5fZm9ybUZpZWxkTmFtZXMgPSBmb3JtRmllbGROYW1lc1xuICAgIHRoaXMuc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cygpXG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhJylcbiAgICByZXR1cm4gIXRoaXMuaXNJbnZhbGlkKClcbiAgfVxuXG4gIGlzSW52YWxpZCA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMoKVxuICAgIHJldHVybiB0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QuaGFzRXJyb3JzKClcbiAgfVxuXG4gIC8vIFtSRUZBVE9SQVJdXG4gIHNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUZpZWxkRWxlbWVudHMgPSBbXVxuICAgIGZvcihjb25zdCBmaWVsZE5hbWUgaW4gdGhpcy5fZm9ybUZpZWxkTmFtZXMpIHtcbiAgICAgIGNvbnN0ICRmb3JtRmllbGRFbGVtZW50ID0gdGhpcy5fJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYClcblxuICAgICAgJGZvcm1GaWVsZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGA8c3BhbiBjbGFzcz1cImVycm9yc1wiPjwvc3Bhbj5gKVxuXG4gICAgICBjb25zdCAkZm9ybUZpZWxkRXJyb3JzRWxlbWVudCA9ICRmb3JtRmllbGRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgICAkZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXSgkZm9ybUZpZWxkRWxlbWVudC52YWx1ZSwgdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0KVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRXJyb3MgZGVzdGUgY2FtcG86JywgdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0LmdldEVycm9yc0J5UGFyYW0oZmllbGROYW1lKSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbShmaWVsZE5hbWUpKVxuICAgICAgICBpZighdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbShmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgJGZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLWludmFsaWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRmb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy1pbnZhbGlkJylcbiAgICAgICAgfVxuXG4gICAgICAgICRmb3JtRmllbGRFcnJvcnNFbGVtZW50LmlubmVySFRNTCA9IGAke1xuICAgICAgICAgIEFycmF5LmZyb20odGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0LmdldEVycm9yc0J5UGFyYW0oZmllbGROYW1lKS52YWx1ZXMoKSkubWFwKChlcnJvcikgPT4gZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfWBcbiAgICAgIH1cblxuICAgICAgZm9ybUZpZWxkRWxlbWVudHMucHVzaCgkZm9ybUZpZWxkRWxlbWVudClcbiAgICB9XG4gICAgdGhpcy5fZm9ybUZpZWxkRWxlbWVudHMgPSBmb3JtRmllbGRFbGVtZW50c1xuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLl8kZm9ybUVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgaXNWYWxpZDogdGhpcy5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkOiB0aGlzLmlzSW52YWxpZFxuICAgIH1cbiAgICB0aGlzLl8kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpXG4gICAgdGhpcy5fJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpXG4gIH1cblxuICB2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQgPSAoeyB0YXJnZXQ6IGZvcm1GaWVsZEVsZW1lbnQgfSkgPT4ge1xuICAgIGZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdGUoKVxuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKClcbiAgICB9KVxuICB9XG5cbn1cblxuY2xhc3MgRm9ybUZpZWxkVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoKSB7XG5cbiAgfVxuXG4gIGlzVmFsaWRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=