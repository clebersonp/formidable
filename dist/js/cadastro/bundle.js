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

/***/ "./src/app/pages/cadastro/components/formAddUsuario.js":
/*!*************************************************************!*\
  !*** ./src/app/pages/cadastro/components/formAddUsuario.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infra_FormValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/FormValidator */ "./src/infra/FormValidator.js");
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
    new _infra_FormValidator__WEBPACK_IMPORTED_MODULE_0__["FormValidator"]($formElement, _validations_newUserValidationSchema__WEBPACK_IMPORTED_MODULE_1__["newUserValidationSchema"]);
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
/* harmony import */ var _components_formAddUsuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formAddUsuario */ "./src/app/pages/cadastro/components/formAddUsuario.js");


_components_formAddUsuario__WEBPACK_IMPORTED_MODULE_1__["default"].init();
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

/***/ "./src/infra/FormValidator.js":
/*!************************************!*\
  !*** ./src/infra/FormValidator.js ***!
  \************************************/
/*! exports provided: FormValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidator", function() { return FormValidator; });
/* harmony import */ var _FluentValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentValidator */ "./src/infra/FluentValidator/index.js");
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
      isInvalid: _this.isInvalid,
      clear: _this.clear
    };

    _this._$formElement.addEventListener('change', _this.validateFormFieldElement);

    _this._$formElement.addEventListener('input', _this.validateFormFieldElement);

    _this._$formElement.addEventListener('reset', _this.clear);
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

  _defineProperty(this, "clear", function () {
    _this._validationContract = new _FluentValidator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  });

  this._validationContract = new _FluentValidator__WEBPACK_IMPORTED_MODULE_0__["default"]();
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

      _this2.updateCSSClassInvalidStatus();

      _this2.updateCSSClassTypedStatus();

      _this2.updateErrors();
    });

    _defineProperty(this, "validation", function () {
      _this2._fieldValidation(_this2._formFieldElement.value, _this2._validationContract);
    });

    _defineProperty(this, "updateErrors", function () {
      if (_this2.initialized) {
        var errors = Array.from(_this2._validationContract.getErrorsByParam(_this2._formFieldName).values()) || [];
        var firstError = errors[0] || {};
        _this2._formElementErrorElement.innerHTML = "".concat(firstError.message);
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
    key: "updateCSSClassInvalidStatus",
    value: function updateCSSClassInvalidStatus() {
      if (this.isInvalid() && this.initialized) {
        this._formFieldElement.classList.add('-invalid');
      } else {
        this._formFieldElement.classList.remove('-invalid');
      }
    }
  }, {
    key: "updateCSSClassTypedStatus",
    value: function updateCSSClassTypedStatus() {
      var value = this._formFieldElement.value;

      if (value) {
        this._formFieldElement.classList.add('-typed');
      } else {
        this._formFieldElement.classList.remove('-typed');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2NvbXBvbmVudHMvZm9ybUFkZFVzdWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsInVzZXJzIiwic3RhdGUiLCJtYXAiLCJ1c2VyIiwiZnVsbE5hbWUiLCJjcGZGb3JtYXRlZCIsImVtYWlsIiwicGhvbmVGb3JtYXRlZCIsImpvaW4iLCJfYmFzZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJfdGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInRhcmdldCIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImZvcm1FbGVtZW50c0RUTyIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Iiwic2V0VGltZW91dCIsIlVzZXIiLCJ1c2Vyc1JlcG9zaXRvcnkiLCJVc2Vyc1JlcG9zaXRvcnkiLCJhZGQiLCIkZm9ybUVsZW1lbnQiLCJkb2N1bWVudCIsInN0YXJ0QnRuU3VibWl0TG9hZGluZyIsImNsYXNzTGlzdCIsInNldEF0dHJpYnV0ZSIsInN0b3BCdG5TdWJtaXRMb2FkaW5nIiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwicmVzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsIkZvcm1WYWxpZGF0b3IiLCJuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSIsImZvcm1BZGRVc3VhcmlvIiwid2luZG93IiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJpc0NQRiIsImhhc01pbkxlbmd0aCIsIl9mdWxsTmFtZSIsIl9jcGYiLCJDUEYiLCJfcGhvbmUiLCJQaG9uZSIsIm51bWJlciIsIl9lbWFpbCIsIk9iamVjdCIsImZyZWV6ZSIsImZvcm1hdGVkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImtleSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX2dldEl0ZW0iLCJsaXN0T2ZVc2VycyIsImdldEFsbCIsInB1c2giLCJfc2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJfdmFsdWUiLCJyZXBsYWNlIiwiZnVsbE1hdGNoIiwicGFydE9uZSIsInBhcnRUd28iLCJwYXJ0VGhyZWUiLCJkaWdpdCIsIl9udW1iZXIiLCJkZGQiLCJudW1iZXJQYXJ0T25lIiwibnVtYmVyUGFydFR3byIsIm5ld1N0YXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiVmFsaWRhdGlvbnMiLCJwYXJhbSIsImNvbmRpdGlvbiIsInZhbGlkYXRpb25OYW1lIiwibWVzc2FnZSIsInNldEVycm9yIiwicmVtb3ZlRXJyb3IiLCJsZW5ndGgiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3VtIiwiY3BmVmFsdWUiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJtb2QiLCJtaW5MZW5ndGgiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJjb250cmFjdElzSW52YWxpZCIsImVycm9ycyIsImZvckVhY2giLCJzaXplIiwidHlwZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiZ2V0IiwicGFyYW1FcnJvcnMiLCJmb3JtRmllbGROYW1lcyIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJfdmFsaWRhdGlvbkNvbnRyYWN0IiwiaGFzRXJyb3JzIiwiZmllbGROYW1lIiwiX2Zvcm1GaWVsZE5hbWVzIiwiJGZvcm1GaWVsZEVsZW1lbnQiLCJfJGZvcm1FbGVtZW50IiwiZm9ybUZpZWxkVmFsaWRhdG9yIiwiRm9ybUZpZWxkVmFsaWRhdG9yIiwiZm9ybUZpZWxkRWxlbWVudCIsImZvcm1GaWVsZE5hbWUiLCJ2YWxpZGF0aW9uQ29udHJhY3QiLCJmaWVsZFZhbGlkYXRpb24iLCJfZm9ybUZpZWxkRWxlbWVudHMiLCJpc1ZhbGlkIiwiY2xlYXIiLCJ2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQiLCJzZXR1cEZvcm1FbGVtZW50Iiwic2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyIsInZhbGlkYXRpb24iLCJ1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMiLCJ1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzIiwidXBkYXRlRXJyb3JzIiwiX2ZpZWxkVmFsaWRhdGlvbiIsIl9mb3JtRmllbGRFbGVtZW50IiwiaW5pdGlhbGl6ZWQiLCJBcnJheSIsImZyb20iLCJfZm9ybUZpZWxkTmFtZSIsInZhbHVlcyIsImZpcnN0RXJyb3IiLCJfZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQiLCJpc1ZhbGlkUGFyYW0iLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVPLElBQU1BLFVBQWI7QUFBQTtBQUFBO0FBQUE7O0FBTUUsc0JBQVlDLE9BQVosRUFBcUI7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QXZCLENBQWlDSixHQUFqQyxDQUFxQyxRQUFyQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUt5SCxpQkFBTCxDQUF1QnJILFNBQXZCLENBQWlDRyxNQUFqQyxDQUF3QyxRQUF4QztBQUNEO0FBQ0YiLCJmaWxlIjoianMvY2FkYXN0cm8vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2luZnJhL0NvbXBvbmVudCdcbmltcG9ydCBcIi4vVXNlcnNUYWJsZS5zY3NzXCJcblxuZXhwb3J0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIHVzZXJzOiBbXVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLl9iYXNlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl90ZW1wbGF0ZSgpXG4gIH1cblxuICBfdGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7dGhpcy5zdGF0ZS51c2Vycy5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmZ1bGxOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5jcGZGb3JtYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLnBob25lRm9ybWF0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9KS5qb2luKCcnKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL2RvbWFpbi9lbnRpdGllcy9Vc2VyXCJcbmltcG9ydCB7IFVzZXJzUmVwb3NpdG9yeSB9IGZyb20gXCIuLi8uLi9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlcnNUYWJsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSdcblxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgYWRkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0XG5cbiAgICBpZigkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGZvcm1FbGVtZW50c0RUTyA9IHtcbiAgICAgIGZ1bGxOYW1lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXROb21lXCJdJykudmFsdWUsXG4gICAgICBjcGY6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dENQRlwiXScpLnZhbHVlLFxuICAgICAgcGhvbmU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dFRlbGVmb25lXCJdJykudmFsdWUsXG4gICAgICBlbWFpbDogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0RW1haWxcIl0nKS52YWx1ZVxuICAgIH1cblxuICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkaW5nJykpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGVkJykpXG4gICAgfSwgMjAwMClcblxuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pXG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KClcbiAgICB1c2Vyc1JlcG9zaXRvcnkuYWRkKHVzZXIpXG4gIH1cblxuICBzaG93QWxsKGV2ZW50KSB7XG4gICAgLy8gY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpKVxuICAgIC8vIGNvbnN0IHVzZXJzID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpLmdldEFsbCgpXG4gICAgLy8gdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgLy8gICB1c2Vyc1xuICAgIC8vIH0pXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uL2luZnJhL0Zvcm1WYWxpZGF0b3InXG5pbXBvcnQgeyBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSB9IGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hJztcblxuY29uc3QgJGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm1BZGRVc3VhcmlvXCJdJylcblxuZnVuY3Rpb24gc3RhcnRCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAgICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LmFkZCgnLWxvYWRpbmcnKVxuICAgICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJylcbn1cblxuZnVuY3Rpb24gc3RvcEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5jbGFzc0xpc3QucmVtb3ZlKCctbG9hZGluZycpXG4gICAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAkZm9ybUVsZW1lbnQucmVzZXQoKVxufVxuXG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGluZycsIHN0YXJ0QnRuU3VibWl0TG9hZGluZylcbiRmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdidG5zdWJtaXRsb2FkZWQnLCBzdG9wQnRuU3VibWl0TG9hZGluZylcblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtZW50OiAkZm9ybUVsZW1lbnQsXG4gIGluaXQ6ICgpID0+IHtcbiAgICBuZXcgRm9ybVZhbGlkYXRvciggJGZvcm1FbGVtZW50LCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSApXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJ1xuaW1wb3J0IGZvcm1BZGRVc3VhcmlvIGZyb20gJy4vY29tcG9uZW50cy9mb3JtQWRkVXN1YXJpbydcblxuZm9ybUFkZFVzdWFyaW8uaW5pdCgpXG5cbndpbmRvdy5wYWdlQ2FkYXN0cm8gPSB7XG4gIHVzZXJDb250cm9sbGVyOiBuZXcgVXNlckNvbnRyb2xsZXIoKVxufVxuXG5cblxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgY29uc3QgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgPSB7XG4gICdub21lJzogKHZhbHVlLCBjb250cmFjdCkgPT5cbiAgICBjb250cmFjdFxuICAgICAgLnZhbGlkYXRlKCdub21lJywgdmFsdWUpXG4gICAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBub21lIMOpIG9icmlnYXTDs3JpbycpLFxuXG4gICdlbWFpbCc6ICh2YWx1ZSwgY29udHJhY3QpID0+XG4gICAgY29udHJhY3RcbiAgICAgIC52YWxpZGF0ZSgnZW1haWwnLCB2YWx1ZSlcbiAgICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIGVtYWlsIMOpIG9icmlnYXTDs3JpbycpXG4gICAgICAuaXNFbWFpbCgnSW5mb3JtZSB1bSBlLW1haWwgdsOhbGlkbycpLFxuXG4gICdjcGYnOiAodmFsdWUsIGNvbnRyYWN0KSA9PlxuICAgIGNvbnRyYWN0LnZhbGlkYXRlKCdjcGYnLCB2YWx1ZSlcbiAgICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIENQRiDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgICAgLmlzQ1BGKCdQb3IgZmF2b3IsIGluZm9ybWUgdW0gQ1BGIHbDoWxpZG8nKSxcblxuICAndGVsZWZvbmUnOiAodmFsdWUsIGNvbnRyYWN0KSA9PlxuICAgIGNvbnRyYWN0LnZhbGlkYXRlKCd0ZWxlZm9uZScsIHZhbHVlKVxuICAgICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gdGVsZWZvbmUgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAgIC5oYXNNaW5MZW5ndGgoMTAsICdJbmZvcm1lIHVtIHRlbGVmb25lIHbDoWxpZG8nKSxcbn1cbiIsImltcG9ydCB7IFBob25lIH0gZnJvbSBcIi4uL3ZhbHVlT2JqZWN0cy9QaG9uZVwiO1xuaW1wb3J0IHsgQ1BGIH0gZnJvbSBcIi4uL3ZhbHVlT2JqZWN0cy9DUEZcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7IGZ1bGxOYW1lLCBjcGYsIHBob25lLCBlbWFpbCB9KSB7XG4gICAgdGhpcy5fZnVsbE5hbWUgPSBmdWxsTmFtZVxuICAgIHRoaXMuX2NwZiA9IG5ldyBDUEYoeyBjcGYgfSlcbiAgICB0aGlzLl9waG9uZSA9IG5ldyBQaG9uZSh7IG51bWJlcjogcGhvbmUgfSlcbiAgICB0aGlzLl9lbWFpbCA9IGVtYWlsXG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXG4gIH1cblxuICBnZXQgZnVsbE5hbWUoKSB7IHJldHVybiB0aGlzLl9mdWxsTmFtZSB9XG5cbiAgZ2V0IGVtYWlsKCkgeyByZXR1cm4gdGhpcy5fZW1haWwgfVxuXG4gIGdldCBjcGYoKSB7IHJldHVybiB0aGlzLl9jcGYudmFsdWUgfVxuICBnZXQgY3BmRm9ybWF0ZWQoKSB7IHJldHVybiB0aGlzLl9jcGYuZm9ybWF0ZWQgfVxuXG4gIGdldCBwaG9uZSgpIHsgcmV0dXJuIHRoaXMuX3Bob25lLm51bWJlciB9XG4gIGdldCBwaG9uZUZvcm1hdGVkKCkgeyByZXR1cm4gdGhpcy5fcGhvbmUuZm9ybWF0ZWQgfVxufVxuXG5cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vZW50aXRpZXMvVXNlclwiO1xuXG5leHBvcnQgY2xhc3MgVXNlcnNSZXBvc2l0b3J5IHtcbiAga2V5ID0gJ3VzZXJzJ1xuXG4gIF9nZXRJdGVtKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cbiAgfVxuXG4gIF9zZXRJdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtKCkubWFwKCh1c2VyKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFVzZXIoe1xuICAgICAgICBmdWxsTmFtZTogdXNlci5fZnVsbE5hbWUsXG4gICAgICAgIGNwZjogdXNlci5fY3BmLFxuICAgICAgICBwaG9uZTogdXNlci5fcGhvbmUsXG4gICAgICAgIGVtYWlsOiB1c2VyLl9lbWFpbFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkKHVzZXIpIHtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKClcbiAgICBsaXN0T2ZVc2Vycy5wdXNoKHVzZXIpXG4gICAgdGhpcy5fc2V0SXRlbShsaXN0T2ZVc2VycylcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgY3BmIH0pIHtcbiAgICBjb25zb2xlLmxvZyhjcGYpXG4gICAgdGhpcy5fdmFsdWUgPSBjcGZcblxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVcbiAgfVxuXG4gIGdldCBmb3JtYXRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl92YWx1ZSlcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7M30pKFxcZHsyfSkvLCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiB7XG4gICAgICByZXR1cm4gYCR7cGFydE9uZX0uJHtwYXJ0VHdvfS4ke3BhcnRUaHJlZX0tJHtkaWdpdH1gXG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBob25lIHtcbiAgY29uc3RydWN0b3IoeyBudW1iZXIgfSkge1xuICAgIHRoaXMuX251bWJlciA9IG51bWJlclxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXG4gIGdldCBudW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlclxuICB9XG5cbiAgZ2V0IGZvcm1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXIucmVwbGFjZSgvKFxcZHsyfSk/KFxcZHs0fSkoXFxkezR9KS8sIChmdWxsTWF0Y2gsIGRkZCwgbnVtYmVyUGFydE9uZSwgbnVtYmVyUGFydFR3bykgPT4ge1xuICAgICAgaWYoZGRkKSByZXR1cm4gYCR7ZGRkfS0ke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gXG5cbiAgICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YFxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25zIHtcbiAgY29uc3RydWN0b3IoeyBjb250cmFjdCwgcGFyYW0sIHZhbHVlIH0pIHtcbiAgICB0aGlzLnBhcmFtID0gcGFyYW07XG4gICAgdGhpcy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFwcGx5VmFsaWRhdGlvbiA9IChjb25kaXRpb24sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKSA9PiB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgdGhpcy5jb250cmFjdC5zZXRFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJhY3QucmVtb3ZlRXJyb3IodGhpcy5wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQgPSAobWVzc2FnZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IDA7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc1JlcXVpcmVkJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRW1haWwgPSAobWVzc2FnZSA9ICdFbWFpbCBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IHJlZ2V4RW1haWxWYWxpZCA9IG5ldyBSZWdFeHAoL15cXHcrKFstKy4nXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSokLyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXJlZ2V4RW1haWxWYWxpZC50ZXN0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzRW1haWwnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNDUEYgPSAobWVzc2FnZSA9ICdDUEYgbXVzdCB0byBiZSB2YWxpZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhKCh2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICBjb25zdCBjcGZWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGNwZlZhbHVlID09PSAnMDAwMDAwMDAwMDAnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gICAgICB9XG4gICAgICBsZXQgbW9kID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gICAgICBpZiAoKG1vZCA9PT0gMTApIHx8IChtb2QgPT09IDExKSkgbW9kID0gMDtcbiAgICAgIGlmIChtb2QgIT09IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyg5LCAxMCksIDEwKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBzdW0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDEyIC0gaSk7XG4gICAgICB9XG4gICAgICBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDEwLCAxMSksIDEwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkodGhpcy52YWx1ZSk7XG5cblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzQ1BGJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc01pbkxlbmd0aCA9IChtaW5MZW5ndGgsIG1lc3NhZ2UgPSBgTWluaW1hbCBsZW5naHQgaXMgJHttaW5MZW5ndGh9YCkgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMudmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoO1xuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaGFzTWluTGVuZ3RoJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25zIGZyb20gJy4vVmFsaWRhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uQ29udHJhY3Qge1xuICBlcnJvcnMgPSBuZXcgTWFwKClcblxuICB2YWxpZGF0ZShwYXJhbSwgdmFsdWUpIHtcbiAgICB0aGlzLnNldFBhcmFtKHBhcmFtKTtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25zKHsgY29udHJhY3Q6IHRoaXMsIHBhcmFtLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnM7XG4gIH1cblxuICBoYXNFcnJvcnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRyYWN0SXNJbnZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvcnMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgIGlmIChwYXJhbS5zaXplID09PSAxKSB7XG4gICAgICAgIGNvbnRyYWN0SXNJbnZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29udHJhY3RJc0ludmFsaWQ7XG4gIH1cblxuICBzZXRQYXJhbShwYXJhbSkge1xuICAgIGlmICghdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKSkge1xuICAgICAgdGhpcy5lcnJvcnMuc2V0KHBhcmFtLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yID0gKHBhcmFtLCB0eXBlLCBtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgZXJyb3JPYmogPSB7XG4gICAgICBwYXJhbSxcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgIH07XG4gICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5zZXQodHlwZSwgZXJyb3JPYmopO1xuICB9XG5cbiAgcmVtb3ZlRXJyb3IgPSAocGFyYW0sIHR5cGUpID0+IHtcbiAgICBpZiAodGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSkge1xuICAgICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5kZWxldGUodHlwZSk7XG4gICAgfVxuICB9XG5cblxuICBnZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gIH1cblxuICBpc1ZhbGlkUGFyYW0ocGFyYW0pIHtcbiAgICBjb25zdCBwYXJhbUVycm9ycyA9IHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gICAgaWYgKHBhcmFtRXJyb3JzKSByZXR1cm4gcGFyYW1FcnJvcnMuc2l6ZSA9PT0gMDtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25Db250cmFjdCBmcm9tICcuL0ZsdWVudFZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBfZm9ybUZpZWxkRWxlbWVudHMgPSBbXVxuXG4gIGNvbnN0cnVjdG9yKCRmb3JtRWxlbWVudCwgZm9ybUZpZWxkTmFtZXMpIHtcbiAgICB0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QgPSBuZXcgVmFsaWRhdGlvbkNvbnRyYWN0KClcblxuICAgIHRoaXMuXyRmb3JtRWxlbWVudCA9ICRmb3JtRWxlbWVudFxuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpXG5cbiAgICB0aGlzLl9mb3JtRmllbGROYW1lcyA9IGZvcm1GaWVsZE5hbWVzXG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKClcbiAgfVxuXG4gIGlzVmFsaWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuICF0aGlzLmlzSW52YWxpZCgpXG4gIH1cblxuICBpc0ludmFsaWQgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzKClcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0Lmhhc0Vycm9ycygpXG4gIH1cblxuICBzZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3QgZmllbGROYW1lIGluIHRoaXMuX2Zvcm1GaWVsZE5hbWVzKSB7XG4gICAgICBjb25zdCAkZm9ybUZpZWxkRWxlbWVudCA9IHRoaXMuXyRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7ZmllbGROYW1lfVwiXWApXG4gICAgICBjb25zdCBmb3JtRmllbGRWYWxpZGF0b3IgPSBuZXcgRm9ybUZpZWxkVmFsaWRhdG9yKHtcbiAgICAgICAgZm9ybUZpZWxkRWxlbWVudDogJGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgICAgIGZvcm1GaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgdmFsaWRhdGlvbkNvbnRyYWN0OiB0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgICAgIGZpZWxkVmFsaWRhdGlvbjogdGhpcy5fZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXVxuICAgICAgfSlcbiAgICAgIHRoaXMuX2Zvcm1GaWVsZEVsZW1lbnRzLnB1c2goZm9ybUZpZWxkVmFsaWRhdG9yKVxuICAgIH1cbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5fJGZvcm1FbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIGlzVmFsaWQ6IHRoaXMuaXNWYWxpZCxcbiAgICAgIGlzSW52YWxpZDogdGhpcy5pc0ludmFsaWQsXG4gICAgICBjbGVhcjogdGhpcy5jbGVhclxuICAgIH1cbiAgICB0aGlzLl8kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpXG4gICAgdGhpcy5fJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpXG4gICAgdGhpcy5fJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5jbGVhcilcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKVxuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKClcbiAgICB9KVxuICB9XG5cbiAgY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpXG4gIH1cblxufVxuXG5jbGFzcyBGb3JtRmllbGRWYWxpZGF0b3Ige1xuICBpbml0aWFsaXplZCA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKHsgZm9ybUZpZWxkRWxlbWVudCwgZm9ybUZpZWxkTmFtZSwgdmFsaWRhdGlvbkNvbnRyYWN0LCBmaWVsZFZhbGlkYXRpb24gfSkge1xuICAgIHRoaXMuX2Zvcm1GaWVsZEVsZW1lbnQgPSBmb3JtRmllbGRFbGVtZW50XG4gICAgdGhpcy5fZm9ybUZpZWxkTmFtZSA9IGZvcm1GaWVsZE5hbWVcbiAgICB0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QgPSB2YWxpZGF0aW9uQ29udHJhY3RcbiAgICB0aGlzLl9maWVsZFZhbGlkYXRpb24gPSBmaWVsZFZhbGlkYXRpb25cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpXG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWVcbiAgfVxuXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbigpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcnMoKTtcbiAgfVxuXG4gIHZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5fZmllbGRWYWxpZGF0aW9uKHRoaXMuX2Zvcm1GaWVsZEVsZW1lbnQudmFsdWUsIHRoaXMuX3ZhbGlkYXRpb25Db250cmFjdCk7XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuaXNJbnZhbGlkKCkgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5fZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy1pbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2Zvcm1GaWVsZEVsZW1lbnQudmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10eXBlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10eXBlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUVycm9ycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gQXJyYXkuZnJvbSh0aGlzLl92YWxpZGF0aW9uQ29udHJhY3QuZ2V0RXJyb3JzQnlQYXJhbSh0aGlzLl9mb3JtRmllbGROYW1lKS52YWx1ZXMoKSkgfHwgW107XG4gICAgICBjb25zdCBmaXJzdEVycm9yID0gZXJyb3JzWzBdIHx8IHt9O1xuICAgICAgdGhpcy5fZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Zmlyc3RFcnJvci5tZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbSh0aGlzLl9mb3JtRmllbGROYW1lKTtcbiAgfVxuXG4gIGlzSW52YWxpZCA9ICgpID0+IHtcbiAgICByZXR1cm4gIXRoaXMuaXNWYWxpZCgpO1xuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLl9mb3JtRmllbGRFbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlXG4gICAgfTtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQoKTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5fZm9ybUZpZWxkRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYDxzcGFuIGNsYXNzPVwiZXJyb3JzXCI+PC9zcGFuPmApO1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==