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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersTable; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _infra_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../infra/Component */ "./src/infra/Component.js");
/* harmony import */ var _UsersTable_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UsersTable.scss */ "./src/app/components/UsersTable/UsersTable.scss");
/* harmony import */ var _UsersTable_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_UsersTable_scss__WEBPACK_IMPORTED_MODULE_8__);










var UsersTable =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UsersTable, _Component);

  function UsersTable(element, controller) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UsersTable);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UsersTable).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      users: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "removeUser", function (_ref) {
      var clickTargetElement = _ref.target;

      if (clickTargetElement.classList.contains('btn-remove')) {
        var userTr = clickTargetElement.closest('tr');
        var userTds = userTr.querySelectorAll('td');
        var userData = Array.from(userTds).reduce(function (acc, currentTd) {
          var currentDataType = currentTd.getAttribute('data-type');
          acc[currentDataType] = currentTd.textContent;
          return acc;
        }, {});

        _this.controller.remove(userData);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "template", function () {
      return "\n      <table>\n        <thead>\n          <tr>\n            <td>Nome</td>\n            <td>CPF</td>\n            <td>Email</td>\n            <td>Telefone</td>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(_this.state.users.map(function (user) {
        return "\n              <tr>\n                <td data-type=\"nome\">".concat(user.getFullName(), "</td>\n                <td data-type=\"cpf\">").concat(user.getCPFFormated(), "</td>\n                <td data-type=\"email\">").concat(user.getEmail(), "</td>\n                <td data-type=\"telefone\">").concat(user.getPhoneFormated(), "</td>\n                <td><button class=\"btn-remove\">Remover</button></td>\n              </tr>\n            ");
      }).join(''), "\n          ").concat(_this.state.users.length === 0 ? '<tr><td colspan="4" align="center">Nenhum usuário encontrado :(</td></tr>' : '', "\n        </tbody>\n      </table>\n    ");
    });

    _this.controller = controller;
    _this.baseElement = element;

    _this.setupEvents();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UsersTable, [{
    key: "setupEvents",
    value: function setupEvents() {
      this.baseElement.onclick = this.removeUser;
    }
  }, {
    key: "render",
    value: function render() {
      this.baseElement.innerHTML = this.template();
    }
  }]);

  return UsersTable;
}(_infra_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./src/app/controllers/UserControler.js":
/*!**********************************************!*\
  !*** ./src/app/controllers/UserControler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserController; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/services/UsersService */ "./src/domain/services/UsersService.js");
/* harmony import */ var _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../infra/repositories/UsersRepository */ "./src/infra/repositories/UsersRepository.js");
/* harmony import */ var _components_UsersTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UsersTable */ "./src/app/components/UsersTable/index.js");






var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UserController, null, [{
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var $form = event.target;
      if ($form.validator.isInvalid()) return;
      $form.dispatchEvent(new Event('btnsubmitloading'));
      var formElementsDTO = {
        fullName: $form.querySelector('[data-element="inputNome"]').value,
        cpf: $form.querySelector('[data-element="inputCPF"]').value,
        phone: $form.querySelector('[data-element="inputTelefone"]').value,
        email: $form.querySelector('[data-element="inputEmail"]').value
      };
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_3__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_2__["default"]({
        usersRepository: usersRepository
      });
      usersService.addNew(formElementsDTO).then(function () {
        setTimeout(function () {
          $form.dispatchEvent(new Event('btnsubmitloaded'));
          window.location.href = '/';
        }, 2000);
      });
    }
  }, {
    key: "showAll",
    value: function showAll() {
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_4__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_3__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_2__["default"]({
        usersRepository: usersRepository
      });
      usersService.getAllWithInitialData().then(function (users) {
        usersTable.setState({
          users: users
        });
      });
    }
  }, {
    key: "remove",
    value: function remove(user) {
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_4__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      var removableUserDTO = {
        fullName: user.nome,
        cpf: user.cpf,
        phone: user.telefone,
        email: user.email
      };
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_3__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_2__["default"]({
        usersRepository: usersRepository
      });
      usersService.deleteUser(removableUserDTO).then(usersService.getAll).then(function (users) {
        usersTable.setState({
          users: users
        });
      });
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


var $formElement = window.document.querySelector('[data-element="formAddUsuario"]');

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
  formValidator: new _infra_FormValidator__WEBPACK_IMPORTED_MODULE_0__["default"]($formElement, _validations_newUserValidationSchema__WEBPACK_IMPORTED_MODULE_1__["default"])
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


window.pageCadastro = {
  userController: _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["default"]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var newUserValidationSchema = {
  nome: function nome(value, contract) {
    return contract.validate('nome', value).isRequired('O campo nome é obrigatório');
  },
  email: function email(value, contract) {
    return contract.validate('email', value).isRequired('O campo email é obrigatório').isEmail('Informe um e-mail válido');
  },
  cpf: function cpf(value, contract) {
    return contract.validate('cpf', value).isRequired('O campo CPF é obrigatório').isCPF('Por favor, informe um CPF válido');
  },
  telefone: function telefone(value, contract) {
    return contract.validate('telefone', value).isRequired('O campo telefone é obrigatório').hasMinLength(10, 'Informe um telefone válido');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (newUserValidationSchema);

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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../valueObjects/Phone */ "./src/domain/valueObjects/Phone.js");
/* harmony import */ var _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../valueObjects/CPF */ "./src/domain/valueObjects/CPF.js");





var User = function User(_ref) {
  var _this = this;

  var fullName = _ref.fullName,
      cpf = _ref.cpf,
      phone = _ref.phone,
      email = _ref.email;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getFullName", function () {
    return _this.fullName;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getEmail", function () {
    return _this.email;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getCPF", function () {
    return _this.cpf.getValue();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getCPFFormated", function () {
    return _this.cpf.getValueFormated();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getPhone", function () {
    return _this.phone.getNumber();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getPhoneFormated", function () {
    return _this.phone.getNumberFormated();
  });

  this.fullName = fullName;
  this.cpf = new _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_3__["default"]({
    CPFNumbers: cpf
  });
  this.phone = new _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_2__["default"]({
    number: phone
  });
  this.email = email.toLowerCase();
  Object.freeze(this);
};



/***/ }),

/***/ "./src/domain/services/UsersService.js":
/*!*********************************************!*\
  !*** ./src/domain/services/UsersService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersService; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/User */ "./src/domain/entities/User.js");




var UsersService = function UsersService(_ref) {
  var _this = this;

  var usersRepository = _ref.usersRepository;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UsersService);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "addNew", function (formElementsDTO) {
    var user = new _entities_User__WEBPACK_IMPORTED_MODULE_2__["default"](formElementsDTO);
    return new Promise(function (resolve) {
      resolve(_this.usersRepository.insert(user));
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getAll", function () {
    return new Promise(function (resolve) {
      var listOfDomainUsers = _this.usersRepository.getAll().map(function (user) {
        return new _entities_User__WEBPACK_IMPORTED_MODULE_2__["default"]({
          cpf: user.cpf,
          email: user.email,
          fullName: user.name,
          phone: user.phone
        });
      });

      resolve(listOfDomainUsers);
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "deleteUser", function (removableUserDTO) {
    var user = new _entities_User__WEBPACK_IMPORTED_MODULE_2__["default"](removableUserDTO);

    _this.usersRepository.remove(user);

    return new Promise(function (resolve) {
      resolve({
        message: 'removed with success'
      });
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getExternalUsers", function () {
    return fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users').then(function (response) {
      if (response.ok) return response.json();
      return response;
    }).then(function (users) {
      var addUsersPromises = users.map(function (user) {
        return _this.usersRepository.insert(new _entities_User__WEBPACK_IMPORTED_MODULE_2__["default"]({
          cpf: user.cpf,
          email: user.email,
          fullName: user.name,
          phone: user.phone
        }));
      });
      return Promise.all(addUsersPromises);
    }).then(function () {
      return _this.getAll();
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getAllWithInitialData", function () {
    var hasUsersFromRepository = _this.usersRepository.getAll().length > 0;

    if (hasUsersFromRepository) {
      return _this.getAll();
    }

    return _this.getExternalUsers();
  });

  this.usersRepository = usersRepository;
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



var CPF = function CPF(_ref) {
  var _this = this;

  var CPFNumbers = _ref.CPFNumbers;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CPF);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getValue", function () {
    return _this.CPFNumbers;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getValueFormated", function () {
    var CPFRegex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    return _this.CPFNumbers.replace(CPFRegex, function (fullMatch, partOne, partTwo, partThree, digit) {
      return "".concat(partOne, ".").concat(partTwo, ".").concat(partThree, "-").concat(digit);
    });
  });

  this.CPFNumbers = CPFNumbers.replace(/-/g, '').replace(/\./g, '');
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



var Phone = function Phone(_ref) {
  var _this = this;

  var number = _ref.number;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Phone);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getNumber", function () {
    return _this.number;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getNumberFormated", function () {
    return _this.number.replace(/(\d{2})?(\d{4})(\d{4})/, function (fullMatch, ddd, numberPartOne, numberPartTwo) {
      if (ddd) return "".concat(ddd, "-").concat(numberPartOne, "-").concat(numberPartTwo);
      return "".concat(numberPartOne, "-").concat(numberPartTwo);
    });
  });

  this.number = number.replace(/-/g, '');
  Object.freeze(this);
};



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
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




var Component = function Component() {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Component);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "setState", function (newState) {
    requestAnimationFrame(function () {
      _this.state = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state, newState);

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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



var Validations = function Validations(_ref) {
  var _this = this;

  var contract = _ref.contract,
      param = _ref.param,
      _value = _ref.value;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Validations);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "applyValidation", function (condition, validationName, message) {
    if (condition) {
      _this.contract.setError(_this.param, validationName, message);
    } else {
      _this.contract.removeError(_this.param, validationName, message);
    }
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isRequired", function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'This field is required';
    var condition = !_this.value || _this.value.length <= 0;

    _this.applyValidation(condition, 'isRequired', message);

    return _this;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isEmail", function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Email must to be valid';
    var regexEmailValid = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    var condition = !regexEmailValid.test(_this.value);

    _this.applyValidation(condition, 'isEmail', message);

    return _this;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isCPF", function () {
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

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "hasMinLength", function (minLength) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Minimal lenght is ".concat(minLength);
    var condition = !(_this.value.length >= minLength);

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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Validations */ "./src/infra/FluentValidator/Validations.js");





var ValidationContract =
/*#__PURE__*/
function () {
  function ValidationContract() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ValidationContract);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "errors", new Map());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "hasErrors", function () {
      var listOfValidationErrors = Array.from(_this.errors.values());
      var firstValidationErrorHasErrors = listOfValidationErrors[0].size > 0;
      var isValidContract = listOfValidationErrors.reduce(function (acc, currentError) {
        var hasCurrentValidationErrorErrors = currentError.size > 0;
        var previousOrCurrentHasErrors = acc || hasCurrentValidationErrorErrors;
        if (previousOrCurrentHasErrors) return true;
        return acc;
      }, firstValidationErrorHasErrors);
      return isValidContract;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "setError", function (param, type, message) {
      var errorObj = {
        param: param,
        type: type,
        message: message
      };

      _this.getErrorsByParam(param).set(type, errorObj);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "removeError", function (param, type) {
      if (_this.getErrorsByParam(param)) {
        _this.getErrorsByParam(param).delete(type);
      }
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ValidationContract, [{
    key: "validate",
    value: function validate(param, value) {
      this.setParam(param);
      return new _Validations__WEBPACK_IMPORTED_MODULE_3__["default"]({
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




var FormFieldValidator =
/*#__PURE__*/
function () {
  function FormFieldValidator(_ref) {
    var _this = this;

    var formFieldElement = _ref.formFieldElement,
        formFieldName = _ref.formFieldName,
        validationContract = _ref.validationContract,
        fieldValidation = _ref.fieldValidation;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FormFieldValidator);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "initialized", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "validate", function () {
      _this.validation();

      _this.updateCSSClassInvalidStatus();

      _this.updateCSSClassTypedStatus();

      _this.updateErrors();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "validation", function () {
      _this.fieldValidation(_this.formFieldElement.value, _this.validationContract);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "updateErrors", function () {
      if (_this.initialized) {
        var errorsOfThisParam = _this.validationContract.getErrorsByParam(_this.formFieldName);

        var errors = Array.from(errorsOfThisParam.values()) || [];
        var firstError = errors[0] || {};
        _this.formElementErrorElement.innerHTML = firstError.message || '';
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "isValid", function () {
      return _this.validationContract.isValidParam(_this.formFieldName);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "isInvalid", function () {
      return !_this.isValid();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "setupFormElement", function () {
      _this.formFieldElement.validator = {
        validate: _this.validate
      };

      _this.setupFormElementErrorElement();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "setupFormElementErrorElement", function () {
      _this.formFieldElement.insertAdjacentHTML('afterend', '<span class="errors"></span>');

      _this.formElementErrorElement = _this.formFieldElement.parentNode.querySelector('.errors');
    });

    this.formFieldElement = formFieldElement;
    this.formFieldName = formFieldName;
    this.validationContract = validationContract;
    this.fieldValidation = fieldValidation;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FormFieldValidator, [{
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FluentValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FluentValidator */ "./src/infra/FluentValidator/index.js");
/* harmony import */ var _FormFieldValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormFieldValidator */ "./src/infra/FormValidator/FormFieldValidator.js");





var FormValidator = function FormValidator($formElement, formFieldNames) {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FormValidator);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "formFieldElements", []);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isValid", function () {
    return !_this.isInvalid();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isInvalid", function () {
    _this.validateAllFormFieldElements();

    return _this.validationContract.hasErrors();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "setupAllFormFieldElements", function () {
    var arrayOfFormFieldNames = Object.keys(_this.formFieldNames);
    arrayOfFormFieldNames.forEach(function (fieldName) {
      var $formFieldElement = _this.formElement.querySelector("[name=\"".concat(fieldName, "\"]"));

      var formFieldValidator = new _FormFieldValidator__WEBPACK_IMPORTED_MODULE_3__["default"]({
        formFieldElement: $formFieldElement,
        formFieldName: fieldName,
        validationContract: _this.validationContract,
        fieldValidation: _this.formFieldNames[fieldName]
      });

      _this.formFieldElements.push(formFieldValidator);
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "setupFormElement", function () {
    _this.formElement.validator = {
      isValid: _this.isValid,
      isInvalid: _this.isInvalid,
      clear: _this.clear
    };

    _this.formElement.addEventListener('change', _this.validateFormFieldElement);

    _this.formElement.addEventListener('input', _this.validateFormFieldElement);

    _this.formElement.addEventListener('reset', _this.clear);
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "validateFormFieldElement", function (_ref) {
    var formFieldElement = _ref.target;
    formFieldElement.validator.validate();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "validateAllFormFieldElements", function () {
    _this.formFieldElements.forEach(function (formFieldElement) {
      formFieldElement.validate();
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "clear", function () {
    _this.validationContract = new _FluentValidator__WEBPACK_IMPORTED_MODULE_2__["default"]();
  });

  this.validationContract = new _FluentValidator__WEBPACK_IMPORTED_MODULE_2__["default"]();
  this.formElement = $formElement;
  this.setupFormElement();
  this.formFieldNames = formFieldNames;
  this.setupAllFormFieldElements();
};



/***/ }),

/***/ "./src/infra/deepEqual.js":
/*!********************************!*\
  !*** ./src/infra/deepEqual.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


var deepEqual = function deepEqual(a, b) {
  if (a && b && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a) === 'object' && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(b) === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    var aKeys = Object.keys(a);
    return aKeys.reduce(function (acc, key) {
      if (!deepEqual(a[key], b[key]) || acc === false) return false;
      return true;
    }, true);
  }

  return a === b;
};

/* harmony default export */ __webpack_exports__["default"] = (deepEqual);

/***/ }),

/***/ "./src/infra/repositories/UsersRepository.js":
/*!***************************************************!*\
  !*** ./src/infra/repositories/UsersRepository.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersRepository; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deepEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deepEqual */ "./src/infra/deepEqual.js");





var UsersRepository =
/*#__PURE__*/
function () {
  function UsersRepository() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UsersRepository);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "key", 'users');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "getItemFromLocalStorage", function () {
      return JSON.parse(localStorage.getItem(_this.key)) || [];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "setItemInLocalStorage", function (item) {
      return localStorage.setItem(_this.key, JSON.stringify(item));
    });

    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UsersRepository, [{
    key: "getAll",
    value: function getAll() {
      return this.getItemFromLocalStorage();
    }
  }, {
    key: "insert",
    value: function insert(user) {
      var listOfUsers = this.getAll();
      var createdUser;

      if (user.getFullName) {
        createdUser = {
          name: user.getFullName(),
          cpf: user.getCPF(),
          phone: user.getPhone(),
          email: user.getEmail()
        };
        listOfUsers.push(createdUser);
      }

      this.setItemInLocalStorage(listOfUsers);
      return createdUser;
    }
  }, {
    key: "remove",
    value: function remove(removableUser) {
      var removableUserDbObj = {
        name: removableUser.getFullName(),
        cpf: removableUser.getCPF(),
        phone: removableUser.getPhone(),
        email: removableUser.getEmail()
      };
      var listOfUsers = this.getAll();
      var updatedListOfUsers = listOfUsers.filter(function (currentUser) {
        return !Object(_deepEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(currentUser, removableUserDbObj);
      });
      this.setItemInLocalStorage(updatedListOfUsers);
    }
  }]);

  return UsersRepository;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlcnNUYWJsZS9Vc2Vyc1RhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvQ1BGLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL1Bob25lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9WYWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRmx1ZW50VmFsaWRhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9Gb3JtVmFsaWRhdG9yL0Zvcm1GaWVsZFZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvZGVlcEVxdWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5LmpzIl0sIm5hbWVzIjpbIlVzZXJzVGFibGUiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInVzZXJzIiwiY2xpY2tUYXJnZXRFbGVtZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ1c2VyVHIiLCJjbG9zZXN0IiwidXNlclRkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1c2VyRGF0YSIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsImFjYyIsImN1cnJlbnRUZCIsImN1cnJlbnREYXRhVHlwZSIsImdldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwicmVtb3ZlIiwic3RhdGUiLCJtYXAiLCJ1c2VyIiwiZ2V0RnVsbE5hbWUiLCJnZXRDUEZGb3JtYXRlZCIsImdldEVtYWlsIiwiZ2V0UGhvbmVGb3JtYXRlZCIsImpvaW4iLCJsZW5ndGgiLCJiYXNlRWxlbWVudCIsInNldHVwRXZlbnRzIiwib25jbGljayIsInJlbW92ZVVzZXIiLCJpbm5lckhUTUwiLCJ0ZW1wbGF0ZSIsIkNvbXBvbmVudCIsIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidmFsaWRhdG9yIiwiaXNJbnZhbGlkIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZm9ybUVsZW1lbnRzRFRPIiwiZnVsbE5hbWUiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJjcGYiLCJwaG9uZSIsImVtYWlsIiwidXNlcnNSZXBvc2l0b3J5IiwiVXNlcnNSZXBvc2l0b3J5IiwidXNlcnNTZXJ2aWNlIiwiVXNlcnNTZXJ2aWNlIiwiYWRkTmV3IiwidGhlbiIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2Vyc1RhYmxlIiwiZG9jdW1lbnQiLCJnZXRBbGxXaXRoSW5pdGlhbERhdGEiLCJzZXRTdGF0ZSIsInJlbW92YWJsZVVzZXJEVE8iLCJub21lIiwidGVsZWZvbmUiLCJkZWxldGVVc2VyIiwiZ2V0QWxsIiwiJGZvcm1FbGVtZW50Iiwic3RhcnRCdG5TdWJtaXRMb2FkaW5nIiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3RvcEJ0blN1Ym1pdExvYWRpbmciLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJpc0NQRiIsImhhc01pbkxlbmd0aCIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwiZnJlZXplIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbnNlcnQiLCJsaXN0T2ZEb21haW5Vc2VycyIsIm5hbWUiLCJtZXNzYWdlIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImFkZFVzZXJzUHJvbWlzZXMiLCJhbGwiLCJoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5IiwiZ2V0RXh0ZXJuYWxVc2VycyIsIkNQRlJlZ2V4IiwicmVwbGFjZSIsImZ1bGxNYXRjaCIsInBhcnRPbmUiLCJwYXJ0VHdvIiwicGFydFRocmVlIiwiZGlnaXQiLCJkZGQiLCJudW1iZXJQYXJ0T25lIiwibnVtYmVyUGFydFR3byIsIm5ld1N0YXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiVmFsaWRhdGlvbnMiLCJwYXJhbSIsImNvbmRpdGlvbiIsInZhbGlkYXRpb25OYW1lIiwic2V0RXJyb3IiLCJyZW1vdmVFcnJvciIsImFwcGx5VmFsaWRhdGlvbiIsInJlZ2V4RW1haWxWYWxpZCIsIlJlZ0V4cCIsInRlc3QiLCJzdW0iLCJjcGZWYWx1ZSIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsIm1vZCIsIm1pbkxlbmd0aCIsIlZhbGlkYXRpb25Db250cmFjdCIsIk1hcCIsImxpc3RPZlZhbGlkYXRpb25FcnJvcnMiLCJlcnJvcnMiLCJ2YWx1ZXMiLCJmaXJzdFZhbGlkYXRpb25FcnJvckhhc0Vycm9ycyIsInNpemUiLCJpc1ZhbGlkQ29udHJhY3QiLCJjdXJyZW50RXJyb3IiLCJoYXNDdXJyZW50VmFsaWRhdGlvbkVycm9yRXJyb3JzIiwicHJldmlvdXNPckN1cnJlbnRIYXNFcnJvcnMiLCJ0eXBlIiwiZXJyb3JPYmoiLCJnZXRFcnJvcnNCeVBhcmFtIiwic2V0IiwiZGVsZXRlIiwic2V0UGFyYW0iLCJnZXQiLCJwYXJhbUVycm9ycyIsIkZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRmllbGROYW1lIiwidmFsaWRhdGlvbkNvbnRyYWN0IiwiZmllbGRWYWxpZGF0aW9uIiwidmFsaWRhdGlvbiIsInVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cyIsInVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMiLCJ1cGRhdGVFcnJvcnMiLCJpbml0aWFsaXplZCIsImVycm9yc09mVGhpc1BhcmFtIiwiZmlyc3RFcnJvciIsImZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaXNWYWxpZFBhcmFtIiwiaXNWYWxpZCIsInNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwYXJlbnROb2RlIiwiaW5pdCIsInNldHVwRm9ybUVsZW1lbnQiLCJmb3JtRmllbGROYW1lcyIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJoYXNFcnJvcnMiLCJhcnJheU9mRm9ybUZpZWxkTmFtZXMiLCJrZXlzIiwiZm9yRWFjaCIsImZpZWxkTmFtZSIsIiRmb3JtRmllbGRFbGVtZW50IiwiZm9ybUVsZW1lbnQiLCJmb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50cyIsInB1c2giLCJjbGVhciIsInZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJkZWVwRXF1YWwiLCJhIiwiYiIsImFLZXlzIiwia2V5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYmluZCIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJjcmVhdGVkVXNlciIsImdldENQRiIsImdldFBob25lIiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwicmVtb3ZhYmxlVXNlciIsInJlbW92YWJsZVVzZXJEYk9iaiIsInVwZGF0ZWRMaXN0T2ZVc2VycyIsImZpbHRlciIsImN1cnJlbnRVc2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBLFVBQUlpSixXQUFKOztBQUVBLFVBQUloTSxJQUFJLENBQUNDLFdBQVQsRUFBc0I7QUFDcEIrTCxtQkFBVyxHQUFHO0FBQ1o3RyxjQUFJLEVBQUVuRixJQUFJLENBQUNDLFdBQUwsRUFETTtBQUVaeUIsYUFBRyxFQUFFMUIsSUFBSSxDQUFDaU0sTUFBTCxFQUZPO0FBR1p0SyxlQUFLLEVBQUUzQixJQUFJLENBQUNrTSxRQUFMLEVBSEs7QUFJWnRLLGVBQUssRUFBRTVCLElBQUksQ0FBQ0csUUFBTDtBQUpLLFNBQWQ7QUFNQTRMLG1CQUFXLENBQUNsQixJQUFaLENBQWlCbUIsV0FBakI7QUFDRDs7QUFFRCxXQUFLRyxxQkFBTCxDQUEyQkosV0FBM0I7QUFDQSxhQUFPQyxXQUFQO0FBQ0Q7OzsyQkFFT0ksYSxFQUFlO0FBQ3JCLFVBQU1DLGtCQUFrQixHQUFHO0FBQ3pCbEgsWUFBSSxFQUFFaUgsYUFBYSxDQUFDbk0sV0FBZCxFQURtQjtBQUV6QnlCLFdBQUcsRUFBRTBLLGFBQWEsQ0FBQ0gsTUFBZCxFQUZvQjtBQUd6QnRLLGFBQUssRUFBRXlLLGFBQWEsQ0FBQ0YsUUFBZCxFQUhrQjtBQUl6QnRLLGFBQUssRUFBRXdLLGFBQWEsQ0FBQ2pNLFFBQWQ7QUFKa0IsT0FBM0I7QUFNQSxVQUFNNEwsV0FBVyxHQUFHLEtBQUtoSixNQUFMLEVBQXBCO0FBQ0EsVUFBTXVKLGtCQUFrQixHQUFHUCxXQUFXLENBQ25DUSxNQUR3QixDQUNqQixVQUFBQyxXQUFXO0FBQUEsZUFBSSxDQUFDdkIsMERBQVMsQ0FBQ3VCLFdBQUQsRUFBY0gsa0JBQWQsQ0FBZDtBQUFBLE9BRE0sQ0FBM0I7QUFHQSxXQUFLRixxQkFBTCxDQUEyQkcsa0JBQTNCO0FBQ0QiLCJmaWxlIjoianMvY2FkYXN0cm8vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2luZnJhL0NvbXBvbmVudCc7XG5pbXBvcnQgJy4vVXNlcnNUYWJsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHVzZXJzOiBbXSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRyb2xsZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5iYXNlRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG4gIH1cblxuICBzZXR1cEV2ZW50cygpIHtcbiAgICB0aGlzLmJhc2VFbGVtZW50Lm9uY2xpY2sgPSB0aGlzLnJlbW92ZVVzZXI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG4gIH1cblxuICByZW1vdmVVc2VyID0gKHsgdGFyZ2V0OiBjbGlja1RhcmdldEVsZW1lbnQgfSkgPT4ge1xuICAgIGlmIChjbGlja1RhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tcmVtb3ZlJykpIHtcbiAgICAgIGNvbnN0IHVzZXJUciA9IGNsaWNrVGFyZ2V0RWxlbWVudC5jbG9zZXN0KCd0cicpO1xuICAgICAgY29uc3QgdXNlclRkcyA9IHVzZXJUci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBBcnJheS5mcm9tKHVzZXJUZHMpLnJlZHVjZSgoYWNjLCBjdXJyZW50VGQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGFUeXBlID0gY3VycmVudFRkLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIGFjY1tjdXJyZW50RGF0YVR5cGVdID0gY3VycmVudFRkLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgICAgdGhpcy5jb250cm9sbGVyLnJlbW92ZSh1c2VyRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGUgPSAoKSA9PiBgXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+Tm9tZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+Q1BGPC90ZD5cbiAgICAgICAgICAgIDx0ZD5FbWFpbDwvdGQ+XG4gICAgICAgICAgICA8dGQ+VGVsZWZvbmU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2Vycy5tYXAodXNlciA9PiBgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwibm9tZVwiPiR7dXNlci5nZXRGdWxsTmFtZSgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cImNwZlwiPiR7dXNlci5nZXRDUEZGb3JtYXRlZCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cImVtYWlsXCI+JHt1c2VyLmdldEVtYWlsKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwidGVsZWZvbmVcIj4ke3VzZXIuZ2V0UGhvbmVGb3JtYXRlZCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCJidG4tcmVtb3ZlXCI+UmVtb3ZlcjwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKS5qb2luKCcnKVxuICAgICAgICAgIH1cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2Vycy5sZW5ndGggPT09IDAgPyAnPHRyPjx0ZCBjb2xzcGFuPVwiNFwiIGFsaWduPVwiY2VudGVyXCI+TmVuaHVtIHVzdcOhcmlvIGVuY29udHJhZG8gOig8L3RkPjwvdHI+JyA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICBgXG59XG4iLCJpbXBvcnQgVXNlcnNTZXJ2aWNlIGZyb20gJy4uLy4uL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UnO1xuaW1wb3J0IFVzZXJzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9pbmZyYS9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5JztcbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgc3RhdGljIGFkZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKSByZXR1cm47XG5cbiAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGluZycpKTtcblxuICAgIGNvbnN0IGZvcm1FbGVtZW50c0RUTyA9IHtcbiAgICAgIGZ1bGxOYW1lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXROb21lXCJdJykudmFsdWUsXG4gICAgICBjcGY6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dENQRlwiXScpLnZhbHVlLFxuICAgICAgcGhvbmU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dFRlbGVmb25lXCJdJykudmFsdWUsXG4gICAgICBlbWFpbDogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0RW1haWxcIl0nKS52YWx1ZSxcbiAgICB9O1xuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpXG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KVxuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuYWRkTmV3KGZvcm1FbGVtZW50c0RUTylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSwgVXNlckNvbnRyb2xsZXIpO1xuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpXG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KVxuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuZ2V0QWxsV2l0aEluaXRpYWxEYXRhKClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUodXNlcikge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogdXNlci5ub21lLFxuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIHBob25lOiB1c2VyLnRlbGVmb25lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKVxuICAgIGNvbnN0IHVzZXJzU2VydmljZSA9IG5ldyBVc2Vyc1NlcnZpY2UoeyB1c2Vyc1JlcG9zaXRvcnkgfSlcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTylcbiAgICAgIC50aGVuKHVzZXJzU2VydmljZS5nZXRBbGwpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uLy4uLy4uLy4uL2luZnJhL0Zvcm1WYWxpZGF0b3InO1xuaW1wb3J0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hJztcblxuY29uc3QgJGZvcm1FbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtQWRkVXN1YXJpb1wiXScpO1xuXG5mdW5jdGlvbiBzdGFydEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LmFkZCgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbn1cblxuZnVuY3Rpb24gc3RvcEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LnJlbW92ZSgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICRmb3JtRWxlbWVudC5yZXNldCgpO1xufVxuXG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGluZycsIHN0YXJ0QnRuU3VibWl0TG9hZGluZyk7XG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGVkJywgc3RvcEJ0blN1Ym1pdExvYWRpbmcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbWVudDogJGZvcm1FbGVtZW50LFxuICBmb3JtVmFsaWRhdG9yOiBuZXcgRm9ybVZhbGlkYXRvcigkZm9ybUVsZW1lbnQsIG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hKSxcbn07XG4iLCJpbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xlcic7XG5pbXBvcnQgJy4vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8nO1xuXG53aW5kb3cucGFnZUNhZGFzdHJvID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSA9IHtcbiAgbm9tZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ25vbWUnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBub21lIMOpIG9icmlnYXTDs3JpbycpLFxuICBlbWFpbDogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ2VtYWlsJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gZW1haWwgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNFbWFpbCgnSW5mb3JtZSB1bSBlLW1haWwgdsOhbGlkbycpLFxuICBjcGY6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdjcGYnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBDUEYgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNDUEYoJ1BvciBmYXZvciwgaW5mb3JtZSB1bSBDUEYgdsOhbGlkbycpLFxuICB0ZWxlZm9uZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ3RlbGVmb25lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gdGVsZWZvbmUgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaGFzTWluTGVuZ3RoKDEwLCAnSW5mb3JtZSB1bSB0ZWxlZm9uZSB2w6FsaWRvJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYTtcbiIsImltcG9ydCBQaG9uZSBmcm9tICcuLi92YWx1ZU9iamVjdHMvUGhvbmUnO1xuaW1wb3J0IENQRiBmcm9tICcuLi92YWx1ZU9iamVjdHMvQ1BGJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmdWxsTmFtZSxcbiAgICBjcGYsXG4gICAgcGhvbmUsXG4gICAgZW1haWwsXG4gIH0pIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgdGhpcy5jcGYgPSBuZXcgQ1BGKHsgQ1BGTnVtYmVyczogY3BmIH0pO1xuICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmUoeyBudW1iZXI6IHBob25lIH0pO1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lID0gKCkgPT4gdGhpcy5mdWxsTmFtZVxuXG4gIGdldEVtYWlsID0gKCkgPT4gdGhpcy5lbWFpbFxuXG4gIGdldENQRiA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlKClcblxuICBnZXRDUEZGb3JtYXRlZCA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlRm9ybWF0ZWQoKVxuXG4gIGdldFBob25lID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXIoKVxuXG4gIGdldFBob25lRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlckZvcm1hdGVkKClcbn1cbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdXNlcnNSZXBvc2l0b3J5IH0pIHtcbiAgICB0aGlzLnVzZXJzUmVwb3NpdG9yeSA9IHVzZXJzUmVwb3NpdG9yeVxuICB9XG5cbiAgYWRkTmV3ID0gKGZvcm1FbGVtZW50c0RUTykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh0aGlzLnVzZXJzUmVwb3NpdG9yeS5pbnNlcnQodXNlcikpXG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBsaXN0T2ZEb21haW5Vc2VycyA9IHRoaXMudXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLm1hcCh1c2VyID0+IG5ldyBVc2VyKHtcbiAgICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgICAgfSkpO1xuICAgICAgcmVzb2x2ZShsaXN0T2ZEb21haW5Vc2Vycyk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVVc2VyID0gKHJlbW92YWJsZVVzZXJEVE8pID0+IHtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIocmVtb3ZhYmxlVXNlckRUTyk7XG4gICAgdGhpcy51c2Vyc1JlcG9zaXRvcnkucmVtb3ZlKHVzZXIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdyZW1vdmVkIHdpdGggc3VjY2VzcycgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRFeHRlcm5hbFVzZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9wcml2YXRlLTIxZThkZS1yYWZhZWxsdWNpby5hcGlhcnktbW9jay5jb20vdXNlcnMnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICBjb25zdCBhZGRVc2Vyc1Byb21pc2VzID0gdXNlcnMubWFwKHVzZXIgPT4gdGhpcy51c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KG5ldyBVc2VyKHtcbiAgICAgICAgICBjcGY6IHVzZXIuY3BmLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgcGhvbmU6IHVzZXIucGhvbmUsXG4gICAgICAgIH0pKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChhZGRVc2Vyc1Byb21pc2VzKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmdldEFsbCgpKTtcbiAgfVxuXG4gIGdldEFsbFdpdGhJbml0aWFsRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5ID0gdGhpcy51c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubGVuZ3RoID4gMDtcbiAgICBpZiAoaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEV4dGVybmFsVXNlcnMoKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgQ1BGTnVtYmVycyB9KSB7XG4gICAgdGhpcy5DUEZOdW1iZXJzID0gQ1BGTnVtYmVycy5yZXBsYWNlKC8tL2csICcnKS5yZXBsYWNlKC9cXC4vZywgJycpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgcmV0dXJuIHRoaXMuQ1BGTnVtYmVycy5yZXBsYWNlKENQRlJlZ2V4LCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlci5yZXBsYWNlKC8tL2csICcnKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyID0gKCkgPT4gdGhpcy5udW1iZXI7XG5cbiAgZ2V0TnVtYmVyRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLm51bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgaWYgKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcblxuICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25zIHtcbiAgY29uc3RydWN0b3IoeyBjb250cmFjdCwgcGFyYW0sIHZhbHVlIH0pIHtcbiAgICB0aGlzLnBhcmFtID0gcGFyYW07XG4gICAgdGhpcy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFwcGx5VmFsaWRhdGlvbiA9IChjb25kaXRpb24sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKSA9PiB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgdGhpcy5jb250cmFjdC5zZXRFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJhY3QucmVtb3ZlRXJyb3IodGhpcy5wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQgPSAobWVzc2FnZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IDA7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc1JlcXVpcmVkJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRW1haWwgPSAobWVzc2FnZSA9ICdFbWFpbCBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IHJlZ2V4RW1haWxWYWxpZCA9IG5ldyBSZWdFeHAoL15cXHcrKFstKy4nXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSokLyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXJlZ2V4RW1haWxWYWxpZC50ZXN0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzRW1haWwnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNDUEYgPSAobWVzc2FnZSA9ICdDUEYgbXVzdCB0byBiZSB2YWxpZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhKCh2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICBjb25zdCBjcGZWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGNwZlZhbHVlID09PSAnMDAwMDAwMDAwMDAnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gICAgICB9XG4gICAgICBsZXQgbW9kID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gICAgICBpZiAoKG1vZCA9PT0gMTApIHx8IChtb2QgPT09IDExKSkgbW9kID0gMDtcbiAgICAgIGlmIChtb2QgIT09IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyg5LCAxMCksIDEwKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBzdW0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDEyIC0gaSk7XG4gICAgICB9XG4gICAgICBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDEwLCAxMSksIDEwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkodGhpcy52YWx1ZSk7XG5cblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzQ1BGJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc01pbkxlbmd0aCA9IChtaW5MZW5ndGgsIG1lc3NhZ2UgPSBgTWluaW1hbCBsZW5naHQgaXMgJHttaW5MZW5ndGh9YCkgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEodGhpcy52YWx1ZS5sZW5ndGggPj0gbWluTGVuZ3RoKTtcbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdoYXNNaW5MZW5ndGgnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbnMgZnJvbSAnLi9WYWxpZGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25Db250cmFjdCB7XG4gIGVycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0UGFyYW0ocGFyYW0pO1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGhhc0Vycm9ycyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzID0gQXJyYXkuZnJvbSh0aGlzLmVycm9ycy52YWx1ZXMoKSk7XG4gICAgY29uc3QgZmlyc3RWYWxpZGF0aW9uRXJyb3JIYXNFcnJvcnMgPSBsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzWzBdLnNpemUgPiAwO1xuXG4gICAgY29uc3QgaXNWYWxpZENvbnRyYWN0ID0gbGlzdE9mVmFsaWRhdGlvbkVycm9ycy5yZWR1Y2UoKGFjYywgY3VycmVudEVycm9yKSA9PiB7XG4gICAgICBjb25zdCBoYXNDdXJyZW50VmFsaWRhdGlvbkVycm9yRXJyb3JzID0gY3VycmVudEVycm9yLnNpemUgPiAwO1xuICAgICAgY29uc3QgcHJldmlvdXNPckN1cnJlbnRIYXNFcnJvcnMgPSBhY2MgfHwgaGFzQ3VycmVudFZhbGlkYXRpb25FcnJvckVycm9ycztcblxuICAgICAgaWYgKHByZXZpb3VzT3JDdXJyZW50SGFzRXJyb3JzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBmaXJzdFZhbGlkYXRpb25FcnJvckhhc0Vycm9ycyk7XG5cbiAgICByZXR1cm4gaXNWYWxpZENvbnRyYWN0O1xuICB9XG5cbiAgc2V0UGFyYW0ocGFyYW0pIHtcbiAgICBpZiAoIXRoaXMuZXJyb3JzLmdldChwYXJhbSkpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnNldChwYXJhbSwgbmV3IE1hcCgpKTtcbiAgICB9XG4gIH1cblxuICBzZXRFcnJvciA9IChwYXJhbSwgdHlwZSwgbWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGVycm9yT2JqID0ge1xuICAgICAgcGFyYW0sXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICB9O1xuICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuc2V0KHR5cGUsIGVycm9yT2JqKTtcbiAgfVxuXG4gIHJlbW92ZUVycm9yID0gKHBhcmFtLCB0eXBlKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkpIHtcbiAgICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuZGVsZXRlKHR5cGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5nZXQocGFyYW0pO1xuICB9XG5cbiAgaXNWYWxpZFBhcmFtKHBhcmFtKSB7XG4gICAgY29uc3QgcGFyYW1FcnJvcnMgPSB0aGlzLmVycm9ycy5nZXQocGFyYW0pO1xuICAgIGlmIChwYXJhbUVycm9ycykgcmV0dXJuIHBhcmFtRXJyb3JzLnNpemUgPT09IDA7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZFZhbGlkYXRvciB7XG4gIGluaXRpYWxpemVkID0gZmFsc2VcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgZm9ybUZpZWxkRWxlbWVudCxcbiAgICBmb3JtRmllbGROYW1lLFxuICAgIHZhbGlkYXRpb25Db250cmFjdCxcbiAgICBmaWVsZFZhbGlkYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQgPSBmb3JtRmllbGRFbGVtZW50O1xuICAgIHRoaXMuZm9ybUZpZWxkTmFtZSA9IGZvcm1GaWVsZE5hbWU7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSB2YWxpZGF0aW9uQ29udHJhY3Q7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24gPSBmaWVsZFZhbGlkYXRpb247XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9ycygpO1xuICB9XG5cbiAgdmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLmZpZWxkVmFsaWRhdGlvbih0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsdWUsIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cygpIHtcbiAgICBpZiAodGhpcy5pc0ludmFsaWQoKSAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLWludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy1pbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmZvcm1GaWVsZEVsZW1lbnQ7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXR5cGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdHlwZWQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFcnJvcnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yc09mVGhpc1BhcmFtID0gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuZ2V0RXJyb3JzQnlQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpO1xuICAgICAgY29uc3QgZXJyb3JzID0gQXJyYXkuZnJvbShlcnJvcnNPZlRoaXNQYXJhbS52YWx1ZXMoKSkgfHwgW107XG4gICAgICBjb25zdCBmaXJzdEVycm9yID0gZXJyb3JzWzBdIHx8IHt9O1xuICAgICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudC5pbm5lckhUTUwgPSBmaXJzdEVycm9yLm1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpXG5cbiAgaXNJbnZhbGlkID0gKCkgPT4gIXRoaXMuaXNWYWxpZCgpXG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGUsXG4gICAgfTtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQoKTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAnPHNwYW4gY2xhc3M9XCJlcnJvcnNcIj48L3NwYW4+Jyk7XG4gICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudCA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25Db250cmFjdCBmcm9tICcuLi9GbHVlbnRWYWxpZGF0b3InO1xuaW1wb3J0IEZvcm1GaWVsZFZhbGlkYXRvciBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBmb3JtRmllbGRFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCRmb3JtRWxlbWVudCwgZm9ybUZpZWxkTmFtZXMpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG5cbiAgICB0aGlzLmZvcm1GaWVsZE5hbWVzID0gZm9ybUZpZWxkTmFtZXM7XG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gIXRoaXMuaXNJbnZhbGlkKCk7XG5cbiAgaXNJbnZhbGlkID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIHNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXlPZkZvcm1GaWVsZE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5mb3JtRmllbGROYW1lcyk7XG5cbiAgICBhcnJheU9mRm9ybUZpZWxkTmFtZXMuZm9yRWFjaCgoZmllbGROYW1lKSA9PiB7XG4gICAgICBjb25zdCAkZm9ybUZpZWxkRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFZhbGlkYXRvciA9IG5ldyBGb3JtRmllbGRWYWxpZGF0b3Ioe1xuICAgICAgICBmb3JtRmllbGRFbGVtZW50OiAkZm9ybUZpZWxkRWxlbWVudCxcbiAgICAgICAgZm9ybUZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICB2YWxpZGF0aW9uQ29udHJhY3Q6IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgICAgICBmaWVsZFZhbGlkYXRpb246IHRoaXMuZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5wdXNoKGZvcm1GaWVsZFZhbGlkYXRvcik7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgaXNWYWxpZDogdGhpcy5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkOiB0aGlzLmlzSW52YWxpZCxcbiAgICAgIGNsZWFyOiB0aGlzLmNsZWFyLFxuICAgIH07XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcbiAgfVxufVxuIiwiY29uc3QgZGVlcEVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICByZXR1cm4gYUtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pIHx8IGFjYyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBFcXVhbDtcbiIsImltcG9ydCBkZWVwRXF1YWwgZnJvbSAnLi4vZGVlcEVxdWFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNSZXBvc2l0b3J5IHtcbiAga2V5ID0gJ3VzZXJzJ1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2V0QWxsID0gdGhpcy5nZXRBbGwuYmluZCh0aGlzKVxuICAgIHRoaXMuaW5zZXJ0ID0gdGhpcy5pbnNlcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVtb3ZlID0gdGhpcy5yZW1vdmUuYmluZCh0aGlzKVxuICB9XG5cbiAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cblxuICBzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UgPSBpdGVtID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcblxuICBnZXRBbGwgKCkge1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKClcbiAgfVxuXG4gIGluc2VydCAodXNlcikge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBsZXQgY3JlYXRlZFVzZXI7XG5cbiAgICBpZiAodXNlci5nZXRGdWxsTmFtZSkge1xuICAgICAgY3JlYXRlZFVzZXIgPSB7XG4gICAgICAgIG5hbWU6IHVzZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgICAgY3BmOiB1c2VyLmdldENQRigpLFxuICAgICAgICBwaG9uZTogdXNlci5nZXRQaG9uZSgpLFxuICAgICAgICBlbWFpbDogdXNlci5nZXRFbWFpbCgpLFxuICAgICAgfTtcbiAgICAgIGxpc3RPZlVzZXJzLnB1c2goY3JlYXRlZFVzZXIpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKGxpc3RPZlVzZXJzKTtcbiAgICByZXR1cm4gY3JlYXRlZFVzZXI7XG4gIH1cblxuICByZW1vdmUgKHJlbW92YWJsZVVzZXIpIHtcbiAgICBjb25zdCByZW1vdmFibGVVc2VyRGJPYmogPSB7XG4gICAgICBuYW1lOiByZW1vdmFibGVVc2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICBjcGY6IHJlbW92YWJsZVVzZXIuZ2V0Q1BGKCksXG4gICAgICBwaG9uZTogcmVtb3ZhYmxlVXNlci5nZXRQaG9uZSgpLFxuICAgICAgZW1haWw6IHJlbW92YWJsZVVzZXIuZ2V0RW1haWwoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBjb25zdCB1cGRhdGVkTGlzdE9mVXNlcnMgPSBsaXN0T2ZVc2Vyc1xuICAgICAgLmZpbHRlcihjdXJyZW50VXNlciA9PiAhZGVlcEVxdWFsKGN1cnJlbnRVc2VyLCByZW1vdmFibGVVc2VyRGJPYmopKTtcblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKHVwZGF0ZWRMaXN0T2ZVc2Vycyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=