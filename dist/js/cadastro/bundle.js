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
    return contract.validate('nome', value).isRequired('O campo nome é obrigatório');
  },
  'email': function email(value, contract) {
    return contract.validate('email', value).isRequired('O campo email é obrigatório').isEmail('Informe um e-mail válido');
  },
  'cpf': function cpf(value, contract) {
    return contract.validate('cpf', value).isRequired('O campo CPF é obrigatório').isCPF('Por favor, informe um CPF válido');
  },
  'telefone': function telefone(value, contract) {
    return contract.validate('telefone', value).isRequired('O campo telefone é obrigatório').hasMinLength(10, 'Informe um telefone válido');
  }
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
      var errorObj = {
        param: param,
        type: type,
        message: message
      };

      _this.getErrorsByParam(param).set(type, errorObj);
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
      this.setParam(param);
      return new Validations({
        contract: this,
        param: param,
        value: value
      });
    }
  }, {
    key: "setParam",
    value: function setParam(param) {
      if (!this._errors.get(param)) {
        this._errors.set(param, new Map());
      }
    }
  }, {
    key: "getErrorsByParam",
    value: function getErrorsByParam(param) {
      return this._errors.get(param);
    }
  }, {
    key: "isValidParam",
    value: function isValidParam(param) {
      var paramErrors = this._errors.get(param);

      if (paramErrors) return paramErrors.size === 0;
      return false;
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
      _value = _ref.value;

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

  _defineProperty(this, "isCPF", function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'CPF must to be valid';
    var condition = !function (value) {
      var sum = 0;
      var cpfValue = value;
      if (cpfValue == "00000000000") return false;

      for (var i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpfValue.substring(i - 1, i)) * (11 - i);
      }

      var mod = sum * 10 % 11;
      if (mod == 10 || mod == 11) mod = 0;
      if (mod != parseInt(cpfValue.substring(9, 10))) return false;
      sum = 0;

      for (var _i = 1; _i <= 10; _i++) {
        sum = sum + parseInt(cpfValue.substring(_i - 1, _i)) * (12 - _i);
      }

      mod = sum * 10 % 11;
      if (mod == 10 || mod == 11) mod = 0;
      if (mod != parseInt(cpfValue.substring(10, 11))) return false;
      return true;
    }(_this2._value);

    _this2.applyValidation(condition, 'isRequired', message);

    return _this2;
  });

  _defineProperty(this, "hasMinLength", function (minLength) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Minimal lenght is ".concat(minLength);
    var condition = _this2._value.length < minLength;

    _this2.applyValidation(condition, 'isRequired', message);

    return _this2;
  });

  this._param = param;
  this._contract = contract;
  this._value = _value;
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

  _defineProperty(this, "_formFieldElements", []);

  _defineProperty(this, "isValid", function () {
    return !_this.isInvalid();
  });

  _defineProperty(this, "isInvalid", function () {
    _this.validateAllFormFieldElements();

    return _this._validationContract.hasErrors();
  });

  _defineProperty(this, "setupAllFormFieldElements", function () {
    for (var fieldName in _this._formFieldNames) {
      var $formFieldElement = _this._$formElement.querySelector("[name=\"".concat(fieldName, "\"]"));

      var formFieldValidator = new FormFieldValidator({
        formFieldElement: $formFieldElement,
        formFieldName: fieldName,
        validationContract: _this._validationContract,
        fieldValidation: _this._formFieldNames[fieldName]
      });

      _this._formFieldElements.push(formFieldValidator);
    }
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
    formFieldElement.validator.validate();
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
  function FormFieldValidator(_ref2) {
    var _this2 = this;

    var formFieldElement = _ref2.formFieldElement,
        formFieldName = _ref2.formFieldName,
        validationContract = _ref2.validationContract,
        fieldValidation = _ref2.fieldValidation;

    _classCallCheck(this, FormFieldValidator);

    _defineProperty(this, "initialized", false);

    _defineProperty(this, "validate", function () {
      _this2.validation();

      _this2.updateCSSClassStatus();

      _this2.updateErrors();
    });

    _defineProperty(this, "validation", function () {
      _this2._fieldValidation(_this2._formFieldElement.value, _this2._validationContract);
    });

    _defineProperty(this, "updateErrors", function () {
      if (_this2.initialized) {
        _this2._formElementErrorElement.innerHTML = "".concat(Array.from(_this2._validationContract.getErrorsByParam(_this2._formFieldName).values()).map(function (error) {
          return error.message;
        }));
      }
    });

    _defineProperty(this, "isValid", function () {
      return _this2._validationContract.isValidParam(_this2._formFieldName);
    });

    _defineProperty(this, "isInvalid", function () {
      return !_this2.isValid();
    });

    _defineProperty(this, "setupFormElement", function () {
      _this2._formFieldElement.validator = {
        validate: _this2.validate
      };

      _this2.setupFormElementErrorElement();
    });

    _defineProperty(this, "setupFormElementErrorElement", function () {
      _this2._formFieldElement.insertAdjacentHTML('afterend', "<span class=\"errors\"></span>");

      _this2._formElementErrorElement = _this2._formFieldElement.parentNode.querySelector('.errors');
    });

    this._formFieldElement = formFieldElement;
    this._formFieldName = formFieldName;
    this._validationContract = validationContract;
    this._fieldValidation = fieldValidation;
    this.init();
  }

  _createClass(FormFieldValidator, [{
    key: "init",
    value: function init() {
      this.setupFormElement();
      this.validate();
      this.initialized = true;
    }
  }, {
    key: "updateCSSClassStatus",
    value: function updateCSSClassStatus() {
      if (this.isInvalid()) {
        this._formFieldElement.classList.add('-invalid');
      } else {
        this._formFieldElement.classList.remove('-invalid');
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vZW50aXRpZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvQ1BGLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL1Bob25lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsInVzZXJzIiwic3RhdGUiLCJtYXAiLCJ1c2VyIiwiZnVsbE5hbWUiLCJjcGZGb3JtYXRlZCIsImVtYWlsIiwicGhvbmVGb3JtYXRlZCIsImpvaW4iLCJfZWxlbWVudCIsImlubmVySFRNTCIsIl90ZW1wbGF0ZSIsIkNvbXBvbmVudCIsIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsInVzZXJzVGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJVc2Vyc1JlcG9zaXRvcnkiLCJnZXRBbGwiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInBhZ2VDYWRhc3RybyIsInVzZXJDb250cm9sbGVyIiwiZm9ybUFkZFVzdWFyaW8iLCJGb3JtVmFsaWRhdG9yIiwibmV3VXNlclZhbGlkYXRpb25TY2hlbWEiLCJ2YWx1ZSIsImNvbnRyYWN0IiwidmFsaWRhdGUiLCJpc1JlcXVpcmVkIiwiaXNFbWFpbCIsImlzQ1BGIiwiaGFzTWluTGVuZ3RoIiwiVXNlciIsImNwZiIsInBob25lIiwiX2Z1bGxOYW1lIiwiX2NwZiIsIkNQRiIsIl9waG9uZSIsIlBob25lIiwibnVtYmVyIiwiX2VtYWlsIiwiT2JqZWN0IiwiZnJlZXplIiwiZm9ybWF0ZWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwia2V5IiwiaXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJfZ2V0SXRlbSIsImxpc3RPZlVzZXJzIiwicHVzaCIsIl9zZXRJdGVtIiwiX3ZhbHVlIiwicmVwbGFjZSIsImZ1bGxNYXRjaCIsInBhcnRPbmUiLCJwYXJ0VHdvIiwicGFydFRocmVlIiwiZGlnaXQiLCJfbnVtYmVyIiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIlZhbGlkYXRpb25Db250cmFjdCIsIk1hcCIsImNvbnRyYWN0SXNJbnZhbGlkIiwiX2Vycm9ycyIsImZvckVhY2giLCJwYXJhbSIsInNpemUiLCJ0eXBlIiwibWVzc2FnZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiVmFsaWRhdGlvbnMiLCJnZXQiLCJwYXJhbUVycm9ycyIsImNvbmRpdGlvbiIsInZhbGlkYXRpb25OYW1lIiwiX2NvbnRyYWN0Iiwic2V0RXJyb3IiLCJfcGFyYW0iLCJyZW1vdmVFcnJvciIsImxlbmd0aCIsImFwcGx5VmFsaWRhdGlvbiIsInJlZ2V4RW1haWxWYWxpZCIsIlJlZ0V4cCIsInRlc3QiLCJzdW0iLCJjcGZWYWx1ZSIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsIm1vZCIsIm1pbkxlbmd0aCIsIiRmb3JtRWxlbWVudCIsImZvcm1GaWVsZE5hbWVzIiwidmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyIsIl92YWxpZGF0aW9uQ29udHJhY3QiLCJoYXNFcnJvcnMiLCJmaWVsZE5hbWUiLCJfZm9ybUZpZWxkTmFtZXMiLCIkZm9ybUZpZWxkRWxlbWVudCIsIl8kZm9ybUVsZW1lbnQiLCJmb3JtRmllbGRWYWxpZGF0b3IiLCJGb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50IiwiZm9ybUZpZWxkTmFtZSIsInZhbGlkYXRpb25Db250cmFjdCIsImZpZWxkVmFsaWRhdGlvbiIsIl9mb3JtRmllbGRFbGVtZW50cyIsImlzVmFsaWQiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsaWRhdGVGb3JtRmllbGRFbGVtZW50Iiwic2V0dXBGb3JtRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJ2YWxpZGF0aW9uIiwidXBkYXRlQ1NTQ2xhc3NTdGF0dXMiLCJ1cGRhdGVFcnJvcnMiLCJfZmllbGRWYWxpZGF0aW9uIiwiX2Zvcm1GaWVsZEVsZW1lbnQiLCJpbml0aWFsaXplZCIsIl9mb3JtRWxlbWVudEVycm9yRWxlbWVudCIsIkFycmF5IiwiZnJvbSIsIl9mb3JtRmllbGROYW1lIiwidmFsdWVzIiwiZXJyb3IiLCJpc1ZhbGlkUGFyYW0iLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImluaXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGlu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QixJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLbEIsZ0JBQUw7QUFDQSxXQUFLbEcsUUFBTDtBQUNBLFdBQUt5RyxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7OzsyQ0FZc0I7QUFDckIsVUFBSSxLQUFLeEgsU0FBTCxFQUFKLEVBQXNCO0FBQ3BCLGFBQUt1SCxpQkFBTCxDQUF1QmEsU0FBdkIsQ0FBaUNDLEdBQWpDLENBQXFDLFVBQXJDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2QsaUJBQUwsQ0FBdUJhLFNBQXZCLENBQWlDRSxNQUFqQyxDQUF3QyxVQUF4QztBQUNEO0FBQ0YiLCJmaWxlIjoianMvY2FkYXN0cm8vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9pbmZyYS9Db21wb25lbnQnXG5pbXBvcnQgXCIuL1VzZXJzVGFibGUuc2Nzc1wiXG5cbmV4cG9ydCBjbGFzcyBVc2Vyc1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW11cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLl9lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX3RlbXBsYXRlKClcbiAgfVxuXG4gIF90ZW1wbGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vbWU8L3RkPlxuICAgICAgICAgICAgPHRkPkNQRjwvdGQ+XG4gICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxuICAgICAgICAgICAgPHRkPlRlbGVmb25lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHt0aGlzLnN0YXRlLnVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuZnVsbE5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmNwZkZvcm1hdGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIucGhvbmVGb3JtYXRlZH08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH0pLmpvaW4oJycpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICBgXG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vZG9tYWluL2VudGl0aWVzL1VzZXJcIlxuaW1wb3J0IHsgVXNlcnNSZXBvc2l0b3J5IH0gZnJvbSBcIi4uLy4uL2RvbWFpbi9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBVc2Vyc1RhYmxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vyc1RhYmxlJ1xuXG5cbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIGFkZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCAkZm9ybSA9IGV2ZW50LnRhcmdldFxuXG4gICAgY29uc29sZS5sb2coJyRmb3JtLmludmFsaWQnLCAkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpXG4gICAgaWYoJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKSByZXR1cm47XG5cbiAgICAvLyBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgLy8gICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgIC8vICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAvLyAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgIC8vICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWVcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKVxuXG4gICAgLy8gY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpXG4gICAgLy8gdXNlcnNSZXBvc2l0b3J5LmFkZCh1c2VyKVxuICB9XG5cbiAgc2hvd0FsbChldmVudCkge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSlcblxuICAgIGNvbnN0IHVzZXJzID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpLmdldEFsbCgpXG5cbiAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgIHVzZXJzXG4gICAgfSlcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBVc2VyQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInXG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vLi4vaW5mcmEvRm9ybVZhbGlkYXRvcidcbmltcG9ydCB7IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIH0gZnJvbSAnLi4vLi4vdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEnO1xuXG53aW5kb3cucGFnZUNhZGFzdHJvID0ge1xuICB1c2VyQ29udHJvbGxlcjogbmV3IFVzZXJDb250cm9sbGVyKCksXG4gIGZvcm1BZGRVc3VhcmlvOiBuZXcgRm9ybVZhbGlkYXRvcihcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybUFkZFVzdWFyaW9cIl0nKSxcbiAgICBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYVxuICApXG59XG5cblxuXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBjb25zdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSA9IHtcbiAgJ25vbWUnOiAodmFsdWUsIGNvbnRyYWN0KSA9PlxuICAgIGNvbnRyYWN0XG4gICAgICAudmFsaWRhdGUoJ25vbWUnLCB2YWx1ZSlcbiAgICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIG5vbWUgw6kgb2JyaWdhdMOzcmlvJyksXG4gICdlbWFpbCc6ICh2YWx1ZSwgY29udHJhY3QpID0+XG4gICAgY29udHJhY3RcbiAgICAgIC52YWxpZGF0ZSgnZW1haWwnLCB2YWx1ZSlcbiAgICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIGVtYWlsIMOpIG9icmlnYXTDs3JpbycpXG4gICAgICAuaXNFbWFpbCgnSW5mb3JtZSB1bSBlLW1haWwgdsOhbGlkbycpLFxuICAnY3BmJzogKHZhbHVlLCBjb250cmFjdCkgPT5cbiAgICBjb250cmFjdC52YWxpZGF0ZSgnY3BmJywgdmFsdWUpXG4gICAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBDUEYgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAgIC5pc0NQRignUG9yIGZhdm9yLCBpbmZvcm1lIHVtIENQRiB2w6FsaWRvJyksXG4gICd0ZWxlZm9uZSc6ICh2YWx1ZSwgY29udHJhY3QpID0+XG4gICAgY29udHJhY3QudmFsaWRhdGUoJ3RlbGVmb25lJywgdmFsdWUpXG4gICAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyB0ZWxlZm9uZSDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgICAgLmhhc01pbkxlbmd0aCgxMCwgJ0luZm9ybWUgdW0gdGVsZWZvbmUgdsOhbGlkbycpLFxufVxuIiwiaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL1Bob25lXCI7XG5pbXBvcnQgeyBDUEYgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL0NQRlwiO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHsgZnVsbE5hbWUsIGNwZiwgcGhvbmUsIGVtYWlsIH0pIHtcbiAgICB0aGlzLl9mdWxsTmFtZSA9IGZ1bGxOYW1lXG4gICAgdGhpcy5fY3BmID0gbmV3IENQRih7IGNwZiB9KVxuICAgIHRoaXMuX3Bob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KVxuICAgIHRoaXMuX2VtYWlsID0gZW1haWxcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCBmdWxsTmFtZSgpIHsgcmV0dXJuIHRoaXMuX2Z1bGxOYW1lIH1cblxuICBnZXQgZW1haWwoKSB7IHJldHVybiB0aGlzLl9lbWFpbCB9XG5cbiAgZ2V0IGNwZigpIHsgcmV0dXJuIHRoaXMuX2NwZi52YWx1ZSB9XG4gIGdldCBjcGZGb3JtYXRlZCgpIHsgcmV0dXJuIHRoaXMuX2NwZi5mb3JtYXRlZCB9XG5cbiAgZ2V0IHBob25lKCkgeyByZXR1cm4gdGhpcy5fcGhvbmUubnVtYmVyIH1cbiAgZ2V0IHBob25lRm9ybWF0ZWQoKSB7IHJldHVybiB0aGlzLl9waG9uZS5mb3JtYXRlZCB9XG59XG5cblxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9lbnRpdGllcy9Vc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgX2dldEl0ZW0oKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuICB9XG5cbiAgX3NldEl0ZW0oaXRlbSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gIH1cblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW0oKS5tYXAoKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgIGZ1bGxOYW1lOiB1c2VyLl9mdWxsTmFtZSxcbiAgICAgICAgY3BmOiB1c2VyLl9jcGYsXG4gICAgICAgIHBob25lOiB1c2VyLl9waG9uZSxcbiAgICAgICAgZW1haWw6IHVzZXIuX2VtYWlsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGQodXNlcikge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKVxuICAgIGxpc3RPZlVzZXJzLnB1c2godXNlcilcbiAgICB0aGlzLl9zZXRJdGVtKGxpc3RPZlVzZXJzKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBjcGYgfSkge1xuICAgIHRoaXMuX3ZhbHVlID0gY3BmXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlXG4gIH1cblxuICBnZXQgZm9ybWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLywgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4ge1xuICAgICAgcmV0dXJuIGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YFxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLl9udW1iZXIgPSBudW1iZXJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgbnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJcbiAgfVxuXG4gIGdldCBmb3JtYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICAgIGlmKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YFxuXG4gICAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWBcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGVcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmFsaWRhdGlvbkNvbnRyYWN0IHtcbiAgX2Vycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0UGFyYW0ocGFyYW0pXG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9ucyh7IGNvbnRyYWN0OiB0aGlzLCBwYXJhbSwgdmFsdWUgfSlcbiAgfVxuXG5cbiAgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzXG4gIH1cblxuICBoYXNFcnJvcnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRyYWN0SXNJbnZhbGlkID0gZmFsc2VcbiAgICB0aGlzLl9lcnJvcnMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgIGlmIChwYXJhbS5zaXplID09PSAxKSB7XG4gICAgICAgIGNvbnRyYWN0SXNJbnZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNvbnRyYWN0SXNJbnZhbGlkXG4gIH1cblxuICBzZXRQYXJhbShwYXJhbSkge1xuICAgIGlmICghdGhpcy5fZXJyb3JzLmdldChwYXJhbSkpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5zZXQocGFyYW0sIG5ldyBNYXAoKSlcbiAgICB9XG4gIH1cblxuICBzZXRFcnJvciA9IChwYXJhbSwgdHlwZSwgbWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGVycm9yT2JqID0ge1xuICAgICAgcGFyYW0sXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLnNldCh0eXBlLCBlcnJvck9iailcbiAgfVxuXG4gIHJlbW92ZUVycm9yID0gKHBhcmFtLCB0eXBlKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkpIHtcbiAgICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuZGVsZXRlKHR5cGUpXG4gICAgfVxuICB9XG5cblxuICBnZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSB7XG5cbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzLmdldChwYXJhbSlcbiAgfVxuXG4gIGlzVmFsaWRQYXJhbShwYXJhbSkge1xuICAgIGNvbnN0IHBhcmFtRXJyb3JzID0gdGhpcy5fZXJyb3JzLmdldChwYXJhbSlcbiAgICBpZiAocGFyYW1FcnJvcnMpIHJldHVybiBwYXJhbUVycm9ycy5zaXplID09PSAwXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jbGFzcyBWYWxpZGF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHsgY29udHJhY3QsIHBhcmFtLCB2YWx1ZSB9KSB7XG4gICAgdGhpcy5fcGFyYW0gPSBwYXJhbVxuICAgIHRoaXMuX2NvbnRyYWN0ID0gY29udHJhY3RcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBhcHBseVZhbGlkYXRpb24gPSAoY29uZGl0aW9uLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHRoaXMuX2NvbnRyYWN0LnNldEVycm9yKHRoaXMuX3BhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udHJhY3QucmVtb3ZlRXJyb3IodGhpcy5fcGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQgPSAobWVzc2FnZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICF0aGlzLl92YWx1ZSB8fCB0aGlzLl92YWx1ZS5sZW5ndGggPD0gMFxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNSZXF1aXJlZCcsIG1lc3NhZ2UpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaXNFbWFpbCA9IChtZXNzYWdlID0gJ0VtYWlsIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgdmFyIHJlZ2V4RW1haWxWYWxpZCA9IG5ldyBSZWdFeHAoL15cXHcrKFstKy4nXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSokLyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXJlZ2V4RW1haWxWYWxpZC50ZXN0KHRoaXMuX3ZhbHVlKVxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzRW1haWwnLCBtZXNzYWdlKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGlzQ1BGID0gKG1lc3NhZ2UgPSAnQ1BGIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gISgodmFsdWUpID0+IHtcbiAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgbGV0IGNwZlZhbHVlID0gdmFsdWVcbiAgICAgIGlmIChjcGZWYWx1ZSA9PSBcIjAwMDAwMDAwMDAwXCIpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gOTsgaSsrKSBzdW0gPSBzdW0gKyBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpKSAqICgxMSAtIGkpO1xuICAgICAgbGV0IG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT0gMTApIHx8IChtb2QgPT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoOSwgMTApKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBzdW0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykgc3VtID0gc3VtICsgcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSkgKiAoMTIgLSBpKTtcbiAgICAgIG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT0gMTApIHx8IChtb2QgPT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoMTAsIDExKSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pKHRoaXMuX3ZhbHVlKVxuXG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc1JlcXVpcmVkJywgbWVzc2FnZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIGhhc01pbkxlbmd0aCA9IChtaW5MZW5ndGgsIG1lc3NhZ2UgPSBgTWluaW1hbCBsZW5naHQgaXMgJHttaW5MZW5ndGh9YCkgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuX3ZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aFxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNSZXF1aXJlZCcsIG1lc3NhZ2UpXG5cbiAgICByZXR1cm4gdGhpc1xuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyYWN0IH0gZnJvbSAnLi9GbHVlbnRWYWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgX2Zvcm1GaWVsZEVsZW1lbnRzID0gW11cblxuICBjb25zdHJ1Y3RvcigkZm9ybUVsZW1lbnQsIGZvcm1GaWVsZE5hbWVzKSB7XG4gICAgdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpXG5cbiAgICB0aGlzLl8kZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnRcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKVxuXG4gICAgdGhpcy5fZm9ybUZpZWxkTmFtZXMgPSBmb3JtRmllbGROYW1lc1xuICAgIHRoaXMuc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cygpXG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4ge1xuICAgIHJldHVybiAhdGhpcy5pc0ludmFsaWQoKVxuICB9XG5cbiAgaXNJbnZhbGlkID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKVxuICB9XG5cbiAgc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGZpZWxkTmFtZSBpbiB0aGlzLl9mb3JtRmllbGROYW1lcykge1xuICAgICAgY29uc3QgJGZvcm1GaWVsZEVsZW1lbnQgPSB0aGlzLl8kZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKVxuICAgICAgY29uc3QgZm9ybUZpZWxkVmFsaWRhdG9yID0gbmV3IEZvcm1GaWVsZFZhbGlkYXRvcih7XG4gICAgICAgIGZvcm1GaWVsZEVsZW1lbnQ6ICRmb3JtRmllbGRFbGVtZW50LFxuICAgICAgICBmb3JtRmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgIHZhbGlkYXRpb25Db250cmFjdDogdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgICAgICBmaWVsZFZhbGlkYXRpb246IHRoaXMuX2Zvcm1GaWVsZE5hbWVzW2ZpZWxkTmFtZV1cbiAgICAgIH0pXG4gICAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50cy5wdXNoKGZvcm1GaWVsZFZhbGlkYXRvcilcbiAgICB9XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuXyRmb3JtRWxlbWVudC52YWxpZGF0b3IgPSB7XG4gICAgICBpc1ZhbGlkOiB0aGlzLmlzVmFsaWQsXG4gICAgICBpc0ludmFsaWQ6IHRoaXMuaXNJbnZhbGlkXG4gICAgfVxuICAgIHRoaXMuXyRmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudClcbiAgICB0aGlzLl8kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudClcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKVxuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKClcbiAgICB9KVxuICB9XG5cbn1cblxuY2xhc3MgRm9ybUZpZWxkVmFsaWRhdG9yIHtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuICBjb25zdHJ1Y3Rvcih7IGZvcm1GaWVsZEVsZW1lbnQsIGZvcm1GaWVsZE5hbWUsIHZhbGlkYXRpb25Db250cmFjdCwgZmllbGRWYWxpZGF0aW9uIH0pIHtcbiAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50ID0gZm9ybUZpZWxkRWxlbWVudFxuICAgIHRoaXMuX2Zvcm1GaWVsZE5hbWUgPSBmb3JtRmllbGROYW1lXG4gICAgdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0ID0gdmFsaWRhdGlvbkNvbnRyYWN0XG4gICAgdGhpcy5fZmllbGRWYWxpZGF0aW9uID0gZmllbGRWYWxpZGF0aW9uXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKVxuICAgIHRoaXMudmFsaWRhdGUoKVxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlXG4gIH1cblxuICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb24oKVxuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NTdGF0dXMoKVxuICAgIHRoaXMudXBkYXRlRXJyb3JzKClcbiAgfVxuXG4gIHZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5fZmllbGRWYWxpZGF0aW9uKHRoaXMuX2Zvcm1GaWVsZEVsZW1lbnQudmFsdWUsIHRoaXMuX3ZhbGlkYXRpb25Db250cmFjdClcbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzU3RhdHVzKCkge1xuICAgIGlmICh0aGlzLmlzSW52YWxpZCgpKSB7XG4gICAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy1pbnZhbGlkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctaW52YWxpZCcpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXJyb3JzID0gKCkgPT4ge1xuICAgIGlmKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50RXJyb3JFbGVtZW50LmlubmVySFRNTCA9IGAke1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMuX3ZhbGlkYXRpb25Db250cmFjdC5nZXRFcnJvcnNCeVBhcmFtKHRoaXMuX2Zvcm1GaWVsZE5hbWUpLnZhbHVlcygpKS5tYXAoKGVycm9yKSA9PiBlcnJvci5tZXNzYWdlKVxuICAgICAgfWBcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QuaXNWYWxpZFBhcmFtKHRoaXMuX2Zvcm1GaWVsZE5hbWUpXG4gIH1cblxuICBpc0ludmFsaWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuICF0aGlzLmlzVmFsaWQoKVxuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlXG4gICAgfVxuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudEVycm9yRWxlbWVudCgpXG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuX2Zvcm1GaWVsZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGA8c3BhbiBjbGFzcz1cImVycm9yc1wiPjwvc3Bhbj5gKVxuICAgIHRoaXMuX2Zvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9