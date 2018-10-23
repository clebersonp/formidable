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

/***/ "./src/app/pages/cadastro/elements/formAddUsuario.js":
/*!***********************************************************!*\
  !*** ./src/app/pages/cadastro/elements/formAddUsuario.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infra_FormValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/FormValidator */ "./src/infra/FormValidator/index.js");
/* harmony import */ var _validations_newUserValidationSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../validations/newUserValidationSchema */ "./src/app/validations/newUserValidationSchema.js");


var $formElement = document.querySelector('[data-element="formAddUsuario"]');

function startBtnSubmitLoading() {
  $formElement.querySelector('[data-element="btnSubmit"]').classList.add('-loading');
  $formElement.querySelector('[data-element="btnSubmit"]').setAttribute('disabled', 'true');
}

function stopBtnSubmitLoading() {
  $formElement.querySelector('[data-element="btnSubmit"]').classList.remove('-loading');
  $formElement.querySelector('[data-element="btnSubmit"]').removeAttribute('disabled');
  $formElement.reset();
}

$formElement.addEventListener('btnsubmitloading', startBtnSubmitLoading);
$formElement.addEventListener('btnsubmitloaded', stopBtnSubmitLoading);
/* harmony default export */ __webpack_exports__["default"] = ({
  element: $formElement,
  init: function init() {
    new _infra_FormValidator__WEBPACK_IMPORTED_MODULE_0__["default"]($formElement, _validations_newUserValidationSchema__WEBPACK_IMPORTED_MODULE_1__["newUserValidationSchema"]);
  }
});

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
/* harmony import */ var _elements_formAddUsuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/formAddUsuario */ "./src/app/pages/cadastro/elements/formAddUsuario.js");


_elements_formAddUsuario__WEBPACK_IMPORTED_MODULE_1__["default"].init();
window.pageCadastro = {
  userController: new _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["UserController"]()
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

/***/ "./src/infra/FluentValidator/Validations.js":
/*!**************************************************!*\
  !*** ./src/infra/FluentValidator/Validations.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validations; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Validations = function Validations(_ref) {
  var _this = this;

  var contract = _ref.contract,
      param = _ref.param,
      _value = _ref.value;

  _classCallCheck(this, Validations);

  _defineProperty(this, "applyValidation", function (condition, validationName, message) {
    if (condition) {
      _this.contract.setError(_this.param, validationName, message);
    } else {
      _this.contract.removeError(_this.param, validationName, message);
    }
  });

  _defineProperty(this, "isRequired", function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'This field is required';
    var condition = !_this.value || _this.value.length <= 0;

    _this.applyValidation(condition, 'isRequired', message);

    return _this;
  });

  _defineProperty(this, "isEmail", function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Email must to be valid';
    var regexEmailValid = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    var condition = !regexEmailValid.test(_this.value);

    _this.applyValidation(condition, 'isEmail', message);

    return _this;
  });

  _defineProperty(this, "isCPF", function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'CPF must to be valid';
    var condition = !function (value) {
      var sum = 0;
      var cpfValue = value;
      if (cpfValue === '00000000000') return false;

      for (var i = 1; i <= 9; i += 1) {
        sum += parseInt(cpfValue.substring(i - 1, i), 10) * (11 - i);
      }

      var mod = sum * 10 % 11;
      if (mod === 10 || mod === 11) mod = 0;
      if (mod !== parseInt(cpfValue.substring(9, 10), 10)) return false;
      sum = 0;

      for (var _i = 1; _i <= 10; _i += 1) {
        sum += parseInt(cpfValue.substring(_i - 1, _i), 10) * (12 - _i);
      }

      mod = sum * 10 % 11;
      if (mod === 10 || mod === 11) mod = 0;
      if (mod !== parseInt(cpfValue.substring(10, 11), 10)) return false;
      return true;
    }(_this.value);

    _this.applyValidation(condition, 'isCPF', message);

    return _this;
  });

  _defineProperty(this, "hasMinLength", function (minLength) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Minimal lenght is ".concat(minLength);
    var condition = _this.value.length < minLength;

    _this.applyValidation(condition, 'hasMinLength', message);

    return _this;
  });

  this.param = param;
  this.contract = contract;
  this.value = _value;
};



/***/ }),

/***/ "./src/infra/FluentValidator/index.js":
/*!********************************************!*\
  !*** ./src/infra/FluentValidator/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidationContract; });
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validations */ "./src/infra/FluentValidator/Validations.js");
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

    _defineProperty(this, "errors", new Map());

    _defineProperty(this, "hasErrors", function () {
      var contractIsInvalid = false;

      _this.errors.forEach(function (param) {
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
      return new _Validations__WEBPACK_IMPORTED_MODULE_0__["default"]({
        contract: this,
        param: param,
        value: value
      });
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      return this.errors;
    }
  }, {
    key: "setParam",
    value: function setParam(param) {
      if (!this.errors.get(param)) {
        this.errors.set(param, new Map());
      }
    }
  }, {
    key: "getErrorsByParam",
    value: function getErrorsByParam(param) {
      return this.errors.get(param);
    }
  }, {
    key: "isValidParam",
    value: function isValidParam(param) {
      var paramErrors = this.errors.get(param);
      if (paramErrors) return paramErrors.size === 0;
      return false;
    }
  }]);

  return ValidationContract;
}();



/***/ }),

/***/ "./src/infra/FormValidator/FormFieldValidator.js":
/*!*******************************************************!*\
  !*** ./src/infra/FormValidator/FormFieldValidator.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormFieldValidator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormFieldValidator =
/*#__PURE__*/
function () {
  function FormFieldValidator(_ref) {
    var _this = this;

    var formFieldElement = _ref.formFieldElement,
        formFieldName = _ref.formFieldName,
        validationContract = _ref.validationContract,
        fieldValidation = _ref.fieldValidation;

    _classCallCheck(this, FormFieldValidator);

    _defineProperty(this, "initialized", false);

    _defineProperty(this, "validate", function () {
      _this.validation();

      _this.updateCSSClassInvalidStatus();

      _this.updateCSSClassTypedStatus();

      _this.updateErrors();
    });

    _defineProperty(this, "validation", function () {
      _this.fieldValidation(_this.formFieldElement.value, _this.validationContract);
    });

    _defineProperty(this, "updateErrors", function () {
      if (_this.initialized) {
        var errorsOfThisParam = _this.validationContract.getErrorsByParam(_this.formFieldName);

        var errors = Array.from(errorsOfThisParam.values()) || [];
        var firstError = errors[0] || {};
        _this.formElementErrorElement.innerHTML = "".concat(firstError.message);
      }
    });

    _defineProperty(this, "isValid", function () {
      return _this.validationContract.isValidParam(_this.formFieldName);
    });

    _defineProperty(this, "isInvalid", function () {
      return !_this.isValid();
    });

    _defineProperty(this, "setupFormElement", function () {
      _this.formFieldElement.validator = {
        validate: _this.validate
      };

      _this.setupFormElementErrorElement();
    });

    _defineProperty(this, "setupFormElementErrorElement", function () {
      _this.formFieldElement.insertAdjacentHTML('afterend', '<span class="errors"></span>');

      _this.formElementErrorElement = _this.formFieldElement.parentNode.querySelector('.errors');
    });

    this.formFieldElement = formFieldElement;
    this.formFieldName = formFieldName;
    this.validationContract = validationContract;
    this.fieldValidation = fieldValidation;
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
    key: "updateCSSClassInvalidStatus",
    value: function updateCSSClassInvalidStatus() {
      if (this.isInvalid() && this.initialized) {
        this.formFieldElement.classList.add('-invalid');
      } else {
        this.formFieldElement.classList.remove('-invalid');
      }
    }
  }, {
    key: "updateCSSClassTypedStatus",
    value: function updateCSSClassTypedStatus() {
      var value = this.formFieldElement.value;

      if (value) {
        this.formFieldElement.classList.add('-typed');
      } else {
        this.formFieldElement.classList.remove('-typed');
      }
    }
  }]);

  return FormFieldValidator;
}();



/***/ }),

/***/ "./src/infra/FormValidator/index.js":
/*!******************************************!*\
  !*** ./src/infra/FormValidator/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormValidator; });
/* harmony import */ var _FluentValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FluentValidator */ "./src/infra/FluentValidator/index.js");
/* harmony import */ var _FormFieldValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFieldValidator */ "./src/infra/FormValidator/FormFieldValidator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FormValidator = function FormValidator($formElement, formFieldNames) {
  var _this = this;

  _classCallCheck(this, FormValidator);

  _defineProperty(this, "formFieldElements", []);

  _defineProperty(this, "isValid", function () {
    return !_this.isInvalid();
  });

  _defineProperty(this, "isInvalid", function () {
    _this.validateAllFormFieldElements();

    return _this.validationContract.hasErrors();
  });

  _defineProperty(this, "setupAllFormFieldElements", function () {
    var arrayOfFormFieldNames = Object.keys(_this.formFieldNames);
    arrayOfFormFieldNames.forEach(function (fieldName) {
      var $formFieldElement = _this.formElement.querySelector("[name=\"".concat(fieldName, "\"]"));

      var formFieldValidator = new _FormFieldValidator__WEBPACK_IMPORTED_MODULE_1__["default"]({
        formFieldElement: $formFieldElement,
        formFieldName: fieldName,
        validationContract: _this.validationContract,
        fieldValidation: _this.formFieldNames[fieldName]
      });

      _this.formFieldElements.push(formFieldValidator);
    });
  });

  _defineProperty(this, "setupFormElement", function () {
    _this.formElement.validator = {
      isValid: _this.isValid,
      isInvalid: _this.isInvalid,
      clear: _this.clear
    };

    _this.formElement.addEventListener('change', _this.validateFormFieldElement);

    _this.formElement.addEventListener('input', _this.validateFormFieldElement);

    _this.formElement.addEventListener('reset', _this.clear);
  });

  _defineProperty(this, "validateFormFieldElement", function (_ref) {
    var formFieldElement = _ref.target;
    formFieldElement.validator.validate();
  });

  _defineProperty(this, "validateAllFormFieldElements", function () {
    _this.formFieldElements.forEach(function (formFieldElement) {
      formFieldElement.validate();
    });
  });

  _defineProperty(this, "clear", function () {
    _this.validationContract = new _FluentValidator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  });

  this.validationContract = new _FluentValidator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.formElement = $formElement;
  this.setupFormElement();
  this.formFieldNames = formFieldNames;
  this.setupAllFormFieldElements();
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9DUEYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvUGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRmx1ZW50VmFsaWRhdG9yL1ZhbGlkYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvRm9ybUZpZWxkVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9Gb3JtVmFsaWRhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXJzVGFibGUiLCJlbGVtZW50IiwidXNlcnMiLCJzdGF0ZSIsIm1hcCIsInVzZXIiLCJmdWxsTmFtZSIsImNwZkZvcm1hdGVkIiwiZW1haWwiLCJwaG9uZUZvcm1hdGVkIiwiam9pbiIsIl9iYXNlRWxlbWVudCIsImlubmVySFRNTCIsIl90ZW1wbGF0ZSIsIkNvbXBvbmVudCIsIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidGFyZ2V0IiwidmFsaWRhdG9yIiwiaXNJbnZhbGlkIiwiZm9ybUVsZW1lbnRzRFRPIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJzZXRUaW1lb3V0IiwiVXNlciIsInVzZXJzUmVwb3NpdG9yeSIsIlVzZXJzUmVwb3NpdG9yeSIsImFkZCIsIiRmb3JtRWxlbWVudCIsImRvY3VtZW50Iiwic3RhcnRCdG5TdWJtaXRMb2FkaW5nIiwiY2xhc3NMaXN0Iiwic2V0QXR0cmlidXRlIiwic3RvcEJ0blN1Ym1pdExvYWRpbmciLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwiZm9ybUFkZFVzdWFyaW8iLCJ3aW5kb3ciLCJwYWdlQ2FkYXN0cm8iLCJ1c2VyQ29udHJvbGxlciIsImNvbnRyYWN0IiwidmFsaWRhdGUiLCJpc1JlcXVpcmVkIiwiaXNFbWFpbCIsImlzQ1BGIiwiaGFzTWluTGVuZ3RoIiwiX2Z1bGxOYW1lIiwiX2NwZiIsIkNQRiIsIl9waG9uZSIsIlBob25lIiwibnVtYmVyIiwiX2VtYWlsIiwiT2JqZWN0IiwiZnJlZXplIiwiZm9ybWF0ZWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwia2V5IiwiaXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJfZ2V0SXRlbSIsImxpc3RPZlVzZXJzIiwiZ2V0QWxsIiwicHVzaCIsIl9zZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIl92YWx1ZSIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiX251bWJlciIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJWYWxpZGF0aW9ucyIsInBhcmFtIiwiY29uZGl0aW9uIiwidmFsaWRhdGlvbk5hbWUiLCJtZXNzYWdlIiwic2V0RXJyb3IiLCJyZW1vdmVFcnJvciIsImxlbmd0aCIsImFwcGx5VmFsaWRhdGlvbiIsInJlZ2V4RW1haWxWYWxpZCIsIlJlZ0V4cCIsInRlc3QiLCJzdW0iLCJjcGZWYWx1ZSIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsIm1vZCIsIm1pbkxlbmd0aCIsIlZhbGlkYXRpb25Db250cmFjdCIsIk1hcCIsImNvbnRyYWN0SXNJbnZhbGlkIiwiZXJyb3JzIiwiZm9yRWFjaCIsInNpemUiLCJ0eXBlIiwiZXJyb3JPYmoiLCJnZXRFcnJvcnNCeVBhcmFtIiwic2V0IiwiZGVsZXRlIiwic2V0UGFyYW0iLCJnZXQiLCJwYXJhbUVycm9ycyIsIkZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRmllbGROYW1lIiwidmFsaWRhdGlvbkNvbnRyYWN0IiwiZmllbGRWYWxpZGF0aW9uIiwidmFsaWRhdGlvbiIsInVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cyIsInVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMiLCJ1cGRhdGVFcnJvcnMiLCJpbml0aWFsaXplZCIsImVycm9yc09mVGhpc1BhcmFtIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiZmlyc3RFcnJvciIsImZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaXNWYWxpZFBhcmFtIiwiaXNWYWxpZCIsInNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwYXJlbnROb2RlIiwic2V0dXBGb3JtRWxlbWVudCIsImZvcm1GaWVsZE5hbWVzIiwidmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyIsImhhc0Vycm9ycyIsImFycmF5T2ZGb3JtRmllbGROYW1lcyIsImtleXMiLCJmaWVsZE5hbWUiLCIkZm9ybUZpZWxkRWxlbWVudCIsImZvcm1FbGVtZW50IiwiZm9ybUZpZWxkVmFsaWRhdG9yIiwiZm9ybUZpZWxkRWxlbWVudHMiLCJjbGVhciIsInZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFTyxJQUFNQSxVQUFiO0FBQUE7QUFBQTtBQUFBOztBQU1FLHNC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O0FBQUEsaUNBc0RsQyxZQUFNO0FBQ1osU0FBSSxDQUFDZ0Ysa0JBQUwsR0FBMEIsSUFBSWpCLHdEQUFKLEVBQTFCO0FBQ0QsR0F4RHlDOztBQUN4QyxPQUFLaUIsa0JBQUwsR0FBMEIsSUFBSWpCLHdEQUFKLEVBQTFCO0FBRUEsT0FBSzJDLFdBQUwsR0FBbUI1SCxZQUFuQjtBQUNBLE9BQUtvSCxnQkFBTDtBQUVBLE9BQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsT0FBS1kseUJBQUw7QUFDRCxDIiwiZmlsZSI6ImpzL2NhZGFzdHJvL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9pbmZyYS9Db21wb25lbnQnXG5pbXBvcnQgXCIuL1VzZXJzVGFibGUuc2Nzc1wiXG5cbmV4cG9ydCBjbGFzcyBVc2Vyc1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW11cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5fYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fdGVtcGxhdGUoKVxuICB9XG5cbiAgX3RlbXBsYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+Tm9tZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+Q1BGPC90ZD5cbiAgICAgICAgICAgIDx0ZD5FbWFpbDwvdGQ+XG4gICAgICAgICAgICA8dGQ+VGVsZWZvbmU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAke3RoaXMuc3RhdGUudXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5mdWxsTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuY3BmRm9ybWF0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5waG9uZUZvcm1hdGVkfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfSkuam9pbignJyl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIGBcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9kb21haW4vZW50aXRpZXMvVXNlclwiXG5pbXBvcnQgeyBVc2Vyc1JlcG9zaXRvcnkgfSBmcm9tIFwiLi4vLi4vZG9tYWluL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFVzZXJzVGFibGUgfSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzVGFibGUnXG5cbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIGFkZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCAkZm9ybSA9IGV2ZW50LnRhcmdldFxuXG4gICAgaWYoJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWVcbiAgICB9XG5cbiAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGluZycpKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKVxuICAgIH0sIDIwMDApXG5cbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKVxuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpXG4gICAgdXNlcnNSZXBvc2l0b3J5LmFkZCh1c2VyKVxuICB9XG5cbiAgc2hvd0FsbChldmVudCkge1xuICAgIC8vIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSlcbiAgICAvLyBjb25zdCB1c2VycyA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKS5nZXRBbGwoKVxuICAgIC8vIHVzZXJzVGFibGUuc2V0U3RhdGUoe1xuICAgIC8vICAgdXNlcnNcbiAgICAvLyB9KVxuICB9XG59XG5cbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yICBmcm9tICcuLi8uLi8uLi8uLi9pbmZyYS9Gb3JtVmFsaWRhdG9yJ1xuaW1wb3J0IHsgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgfSBmcm9tICcuLi8uLi8uLi92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYSc7XG5cbmNvbnN0ICRmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtQWRkVXN1YXJpb1wiXScpXG5cbmZ1bmN0aW9uIHN0YXJ0QnRuU3VibWl0TG9hZGluZygpIHtcbiAgICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLmNsYXNzTGlzdC5hZGQoJy1sb2FkaW5nJylcbiAgICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpXG59XG5cbmZ1bmN0aW9uIHN0b3BCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAgICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LnJlbW92ZSgnLWxvYWRpbmcnKVxuICAgICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgJGZvcm1FbGVtZW50LnJlc2V0KClcbn1cblxuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRpbmcnLCBzdGFydEJ0blN1Ym1pdExvYWRpbmcpXG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGVkJywgc3RvcEJ0blN1Ym1pdExvYWRpbmcpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbWVudDogJGZvcm1FbGVtZW50LFxuICBpbml0OiAoKSA9PiB7XG4gICAgbmV3IEZvcm1WYWxpZGF0b3IoICRmb3JtRWxlbWVudCwgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgKVxuICB9XG59XG5cbiIsImltcG9ydCB7IFVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xlcidcbmltcG9ydCBmb3JtQWRkVXN1YXJpbyBmcm9tICcuL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvJ1xuXG5mb3JtQWRkVXN1YXJpby5pbml0KClcblxud2luZG93LnBhZ2VDYWRhc3RybyA9IHtcbiAgdXNlckNvbnRyb2xsZXI6IG5ldyBVc2VyQ29udHJvbGxlcigpXG59XG5cblxuXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBjb25zdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSA9IHtcbiAgJ25vbWUnOiAodmFsdWUsIGNvbnRyYWN0KSA9PlxuICAgIGNvbnRyYWN0XG4gICAgICAudmFsaWRhdGUoJ25vbWUnLCB2YWx1ZSlcbiAgICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIG5vbWUgw6kgb2JyaWdhdMOzcmlvJyksXG5cbiAgJ2VtYWlsJzogKHZhbHVlLCBjb250cmFjdCkgPT5cbiAgICBjb250cmFjdFxuICAgICAgLnZhbGlkYXRlKCdlbWFpbCcsIHZhbHVlKVxuICAgICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gZW1haWwgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAgIC5pc0VtYWlsKCdJbmZvcm1lIHVtIGUtbWFpbCB2w6FsaWRvJyksXG5cbiAgJ2NwZic6ICh2YWx1ZSwgY29udHJhY3QpID0+XG4gICAgY29udHJhY3QudmFsaWRhdGUoJ2NwZicsIHZhbHVlKVxuICAgICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gQ1BGIMOpIG9icmlnYXTDs3JpbycpXG4gICAgICAuaXNDUEYoJ1BvciBmYXZvciwgaW5mb3JtZSB1bSBDUEYgdsOhbGlkbycpLFxuXG4gICd0ZWxlZm9uZSc6ICh2YWx1ZSwgY29udHJhY3QpID0+XG4gICAgY29udHJhY3QudmFsaWRhdGUoJ3RlbGVmb25lJywgdmFsdWUpXG4gICAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyB0ZWxlZm9uZSDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgICAgLmhhc01pbkxlbmd0aCgxMCwgJ0luZm9ybWUgdW0gdGVsZWZvbmUgdsOhbGlkbycpLFxufVxuIiwiaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL1Bob25lXCI7XG5pbXBvcnQgeyBDUEYgfSBmcm9tIFwiLi4vdmFsdWVPYmplY3RzL0NQRlwiO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHsgZnVsbE5hbWUsIGNwZiwgcGhvbmUsIGVtYWlsIH0pIHtcbiAgICB0aGlzLl9mdWxsTmFtZSA9IGZ1bGxOYW1lXG4gICAgdGhpcy5fY3BmID0gbmV3IENQRih7IGNwZiB9KVxuICAgIHRoaXMuX3Bob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KVxuICAgIHRoaXMuX2VtYWlsID0gZW1haWxcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCBmdWxsTmFtZSgpIHsgcmV0dXJuIHRoaXMuX2Z1bGxOYW1lIH1cblxuICBnZXQgZW1haWwoKSB7IHJldHVybiB0aGlzLl9lbWFpbCB9XG5cbiAgZ2V0IGNwZigpIHsgcmV0dXJuIHRoaXMuX2NwZi52YWx1ZSB9XG4gIGdldCBjcGZGb3JtYXRlZCgpIHsgcmV0dXJuIHRoaXMuX2NwZi5mb3JtYXRlZCB9XG5cbiAgZ2V0IHBob25lKCkgeyByZXR1cm4gdGhpcy5fcGhvbmUubnVtYmVyIH1cbiAgZ2V0IHBob25lRm9ybWF0ZWQoKSB7IHJldHVybiB0aGlzLl9waG9uZS5mb3JtYXRlZCB9XG59XG5cblxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9lbnRpdGllcy9Vc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgX2dldEl0ZW0oKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuICB9XG5cbiAgX3NldEl0ZW0oaXRlbSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gIH1cblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW0oKS5tYXAoKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgIGZ1bGxOYW1lOiB1c2VyLl9mdWxsTmFtZSxcbiAgICAgICAgY3BmOiB1c2VyLl9jcGYsXG4gICAgICAgIHBob25lOiB1c2VyLl9waG9uZSxcbiAgICAgICAgZW1haWw6IHVzZXIuX2VtYWlsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGQodXNlcikge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKVxuICAgIGxpc3RPZlVzZXJzLnB1c2godXNlcilcbiAgICB0aGlzLl9zZXRJdGVtKGxpc3RPZlVzZXJzKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBjcGYgfSkge1xuICAgIGNvbnNvbGUubG9nKGNwZilcbiAgICB0aGlzLl92YWx1ZSA9IGNwZlxuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZVxuICB9XG5cbiAgZ2V0IGZvcm1hdGVkKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX3ZhbHVlKVxuICAgIHJldHVybiB0aGlzLl92YWx1ZS5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS8sIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IHtcbiAgICAgIHJldHVybiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWBcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5fbnVtYmVyID0gbnVtYmVyXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKVxuICB9XG5cbiAgZ2V0IG51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyXG4gIH1cblxuICBnZXQgZm9ybWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgICBpZihkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWBcblxuICAgICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih7IGNvbnRyYWN0LCBwYXJhbSwgdmFsdWUgfSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgYXBwbHlWYWxpZGF0aW9uID0gKGNvbmRpdGlvbiwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbnRyYWN0LnNldEVycm9yKHRoaXMucGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cmFjdC5yZW1vdmVFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaXNSZXF1aXJlZCA9IChtZXNzYWdlID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gMDtcblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzUmVxdWlyZWQnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFbWFpbCA9IChtZXNzYWdlID0gJ0VtYWlsIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgcmVnZXhFbWFpbFZhbGlkID0gbmV3IFJlZ0V4cCgvXlxcdysoWy0rLiddXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKiQvKTtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhcmVnZXhFbWFpbFZhbGlkLnRlc3QodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNFbWFpbCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0NQRiA9IChtZXNzYWdlID0gJ0NQRiBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEoKHZhbHVlKSA9PiB7XG4gICAgICBsZXQgc3VtID0gMDtcbiAgICAgIGNvbnN0IGNwZlZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoY3BmVmFsdWUgPT09ICcwMDAwMDAwMDAwMCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gOTsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTEgLSBpKTtcbiAgICAgIH1cbiAgICAgIGxldCBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDksIDEwKSwgMTApKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHN1bSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTIgLSBpKTtcbiAgICAgIH1cbiAgICAgIG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT09IDEwKSB8fCAobW9kID09PSAxMSkpIG1vZCA9IDA7XG4gICAgICBpZiAobW9kICE9PSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoMTAsIDExKSwgMTApKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KSh0aGlzLnZhbHVlKTtcblxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNDUEYnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzTWluTGVuZ3RoID0gKG1pbkxlbmd0aCwgbWVzc2FnZSA9IGBNaW5pbWFsIGxlbmdodCBpcyAke21pbkxlbmd0aH1gKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy52YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGg7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdoYXNNaW5MZW5ndGgnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbnMgZnJvbSAnLi9WYWxpZGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25Db250cmFjdCB7XG4gIGVycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0UGFyYW0ocGFyYW0pO1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGhhc0Vycm9ycyA9ICgpID0+IHtcbiAgICBsZXQgY29udHJhY3RJc0ludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9ycy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgaWYgKHBhcmFtLnNpemUgPT09IDEpIHtcbiAgICAgICAgY29udHJhY3RJc0ludmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250cmFjdElzSW52YWxpZDtcbiAgfVxuXG4gIHNldFBhcmFtKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLmVycm9ycy5nZXQocGFyYW0pKSB7XG4gICAgICB0aGlzLmVycm9ycy5zZXQocGFyYW0sIG5ldyBNYXAoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IgPSAocGFyYW0sIHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBlcnJvck9iaiA9IHtcbiAgICAgIHBhcmFtLFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLnNldCh0eXBlLCBlcnJvck9iaik7XG4gIH1cblxuICByZW1vdmVFcnJvciA9IChwYXJhbSwgdHlwZSkgPT4ge1xuICAgIGlmICh0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pKSB7XG4gICAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLmRlbGV0ZSh0eXBlKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldEVycm9yc0J5UGFyYW0ocGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgfVxuXG4gIGlzVmFsaWRQYXJhbShwYXJhbSkge1xuICAgIGNvbnN0IHBhcmFtRXJyb3JzID0gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgICBpZiAocGFyYW1FcnJvcnMpIHJldHVybiBwYXJhbUVycm9ycy5zaXplID09PSAwO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGRWYWxpZGF0b3Ige1xuICBpbml0aWFsaXplZCA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgZm9ybUZpZWxkTmFtZSxcbiAgICB2YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgZmllbGRWYWxpZGF0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50ID0gZm9ybUZpZWxkRWxlbWVudDtcbiAgICB0aGlzLmZvcm1GaWVsZE5hbWUgPSBmb3JtRmllbGROYW1lO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gdmFsaWRhdGlvbkNvbnRyYWN0O1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uID0gZmllbGRWYWxpZGF0aW9uO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbigpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcnMoKTtcbiAgfVxuXG4gIHZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24odGhpcy5mb3JtRmllbGRFbGVtZW50LnZhbHVlLCB0aGlzLnZhbGlkYXRpb25Db250cmFjdCk7XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuaXNJbnZhbGlkKCkgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5mb3JtRmllbGRFbGVtZW50O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10eXBlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXR5cGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXJyb3JzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCBlcnJvcnNPZlRoaXNQYXJhbSA9IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmdldEVycm9yc0J5UGFyYW0odGhpcy5mb3JtRmllbGROYW1lKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IEFycmF5LmZyb20oZXJyb3JzT2ZUaGlzUGFyYW0udmFsdWVzKCkpIHx8IFtdO1xuICAgICAgY29uc3QgZmlyc3RFcnJvciA9IGVycm9yc1swXSB8fCB7fTtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Zmlyc3RFcnJvci5tZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpXG5cbiAgaXNJbnZhbGlkID0gKCkgPT4gIXRoaXMuaXNWYWxpZCgpXG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGUsXG4gICAgfTtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQoKTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAnPHNwYW4gY2xhc3M9XCJlcnJvcnNcIj48L3NwYW4+Jyk7XG4gICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudCA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25Db250cmFjdCBmcm9tICcuLi9GbHVlbnRWYWxpZGF0b3InO1xuaW1wb3J0IEZvcm1GaWVsZFZhbGlkYXRvciBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBmb3JtRmllbGRFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCRmb3JtRWxlbWVudCwgZm9ybUZpZWxkTmFtZXMpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG5cbiAgICB0aGlzLmZvcm1GaWVsZE5hbWVzID0gZm9ybUZpZWxkTmFtZXM7XG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gIXRoaXMuaXNJbnZhbGlkKCk7XG5cbiAgaXNJbnZhbGlkID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIHNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXlPZkZvcm1GaWVsZE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5mb3JtRmllbGROYW1lcyk7XG5cbiAgICBhcnJheU9mRm9ybUZpZWxkTmFtZXMuZm9yRWFjaCgoZmllbGROYW1lKSA9PiB7XG4gICAgICBjb25zdCAkZm9ybUZpZWxkRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFZhbGlkYXRvciA9IG5ldyBGb3JtRmllbGRWYWxpZGF0b3Ioe1xuICAgICAgICBmb3JtRmllbGRFbGVtZW50OiAkZm9ybUZpZWxkRWxlbWVudCxcbiAgICAgICAgZm9ybUZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICB2YWxpZGF0aW9uQ29udHJhY3Q6IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgICAgICBmaWVsZFZhbGlkYXRpb246IHRoaXMuZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5wdXNoKGZvcm1GaWVsZFZhbGlkYXRvcik7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgaXNWYWxpZDogdGhpcy5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkOiB0aGlzLmlzSW52YWxpZCxcbiAgICAgIGNsZWFyOiB0aGlzLmNsZWFyLFxuICAgIH07XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==