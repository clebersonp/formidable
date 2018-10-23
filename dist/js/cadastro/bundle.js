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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersTable; });
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "template", function () {
      return "\n      <table>\n        <thead>\n          <tr>\n            <td>Nome</td>\n            <td>CPF</td>\n            <td>Email</td>\n            <td>Telefone</td>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(_this.state.users.map(function (user) {
        return "\n              <tr>\n                <td>".concat(user.fullName, "</td>\n                <td>").concat(user.getCPFFormated(), "</td>\n                <td>").concat(user.email, "</td>\n                <td>").concat(user.getPhoneFormated(), "</td>\n              </tr>\n            ");
      }).join(''), "\n        </tbody>\n      </table>\n    ");
    });

    _this.baseElement = element;
    return _this;
  }

  _createClass(UsersTable, [{
    key: "render",
    value: function render() {
      this.baseElement.innerHTML = this.template();
    }
  }]);

  return UsersTable;
}(_infra_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
/* harmony import */ var _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/services/UsersService */ "./src/domain/services/UsersService.js");
/* harmony import */ var _components_UsersTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UsersTable */ "./src/app/components/UsersTable/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




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
      $form.dispatchEvent(new Event('btnsubmitloading'));
      var formElementsDTO = {
        fullName: $form.querySelector('[data-element="inputNome"]').value,
        cpf: $form.querySelector('[data-element="inputCPF"]').value,
        phone: $form.querySelector('[data-element="inputTelefone"]').value,
        email: $form.querySelector('[data-element="inputEmail"]').value
      };
      _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].addNew(formElementsDTO).then(function () {
        $form.dispatchEvent(new Event('btnsubmitloaded'));
        window.location.href = '/';
      });
    }
  }, {
    key: "showAll",
    value: function showAll() {
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_1__["default"](window.document.querySelector('[data-template="UsersTable"]'));
      _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll().then(function (users) {
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
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/User */ "./src/domain/entities/User.js");
/* harmony import */ var _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infra/repositories/UsersRepository */ "./src/infra/repositories/UsersRepository.js");
/* eslint no-use-before-define: ["error", { "functions": false }] */



var addNew = function addNew(formElementsDTO) {
  var user = new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](formElementsDTO);
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(usersRepository.insert(user));
    }, 1000);
  });
};

var getAll = function getAll() {
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var hasUsersFromRepository = usersRepository.getAll().length > 0;

  if (hasUsersFromRepository) {
    return new Promise(function (resolve) {
      var listOfDomainUsers = usersRepository.getAll().map(function (user) {
        return new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"]({
          cpf: user.cpf,
          email: user.email,
          fullName: user.name,
          phone: user.phone
        });
      });
      resolve(listOfDomainUsers);
    });
  }

  return getExternalUsers();
};

function getExternalUsers() {
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users').then(function (response) {
    if (response.ok) return response.json();
    return response;
  }).then(function (users) {
    var addUsersPromises = users.map(function (user) {
      return usersRepository.insert(new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"]({
        cpf: user.cpf,
        email: user.email,
        fullName: user.name,
        phone: user.phone
      }));
    });
    return Promise.all(addUsersPromises);
  }).then(function () {
    return getAll();
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  addNew: addNew,
  getAll: getAll
});

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
    return _this.CPFNumbers.replace(CPFRegex, function (fullMatch, partOne, partTwo, partThree, digit) {
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

/***/ "./src/infra/repositories/UsersRepository.js":
/*!***************************************************!*\
  !*** ./src/infra/repositories/UsersRepository.js ***!
  \***************************************************/
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

  _defineProperty(this, "getAll", function () {
    return _this.getItemFromLocalStorage();
  });

  _defineProperty(this, "insert", function (user) {
    var listOfUsers = _this.getAll();

    listOfUsers.push({
      name: user.getFullName(),
      cpf: user.getCPF(),
      phone: user.getPhone(),
      email: user.getEmail()
    });
    return new Promise(function (resolve, reject) {
      try {
        _this.setItemInLocalStorage(listOfUsers);

        resolve({
          message: 'User registered with success'
        });
      } catch (err) {
        reject(err);
      }
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlcnNUYWJsZSIsImVsZW1lbnQiLCJ1c2VycyIsInN0YXRlIiwibWFwIiwidXNlciIsImZ1bGxOYW1lIiwiZ2V0Q1BGRm9ybWF0ZWQiLCJlbWFpbCIsImdldFBob25lRm9ybWF0ZWQiLCJqb2luIiwiYmFzZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0ZW1wbGF0ZSIsIkNvbXBvbmVudCIsIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidGFyZ2V0IiwidmFsaWRhdG9yIiwiaXNJbnZhbGlkIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZm9ybUVsZW1lbnRzRFRPIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJVc2Vyc1NlcnZpY2UiLCJhZGROZXciLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXNlcnNUYWJsZSIsImRvY3VtZW50IiwiZ2V0QWxsIiwic2V0U3RhdGUiLCIkZm9ybUVsZW1lbnQiLCJzdGFydEJ0blN1Ym1pdExvYWRpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzdG9wQnRuU3VibWl0TG9hZGluZyIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1WYWxpZGF0b3IiLCJGb3JtVmFsaWRhdG9yIiwibmV3VXNlclZhbGlkYXRpb25TY2hlbWEiLCJwYWdlQ2FkYXN0cm8iLCJ1c2VyQ29udHJvbGxlciIsIm5vbWUiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJpc0NQRiIsInRlbGVmb25lIiwiaGFzTWluTGVuZ3RoIiwiVXNlciIsImdldFZhbHVlIiwiZ2V0VmFsdWVGb3JtYXRlZCIsImdldE51bWJlciIsImdldE51bWJlckZvcm1hdGVkIiwiQ1BGIiwiQ1BGTnVtYmVycyIsIlBob25lIiwibnVtYmVyIiwidG9Mb3dlckNhc2UiLCJPYmplY3QiLCJmcmVlemUiLCJ1c2Vyc1JlcG9zaXRvcnkiLCJVc2Vyc1JlcG9zaXRvcnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpbnNlcnQiLCJoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5IiwibGVuZ3RoIiwibGlzdE9mRG9tYWluVXNlcnMiLCJuYW1lIiwiZ2V0RXh0ZXJuYWxVc2VycyIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJhZGRVc2Vyc1Byb21pc2VzIiwiYWxsIiwiQ1BGUmVnZXgiLCJyZXBsYWNlIiwiZnVsbE1hdGNoIiwicGFydE9uZSIsInBhcnRUd28iLCJwYXJ0VGhyZWUiLCJkaWdpdCIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJWYWxpZGF0aW9ucyIsInBhcmFtIiwiY29uZGl0aW9uIiwidmFsaWRhdGlvbk5hbWUiLCJtZXNzYWdlIiwic2V0RXJyb3IiLCJyZW1vdmVFcnJvciIsImFwcGx5VmFsaWRhdGlvbiIsInJlZ2V4RW1haWxWYWxpZCIsIlJlZ0V4cCIsInRlc3QiLCJzdW0iLCJjcGZWYWx1ZSIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsIm1vZCIsIm1pbkxlbmd0aCIsIlZhbGlkYXRpb25Db250cmFjdCIsIk1hcCIsImNvbnRyYWN0SXNJbnZhbGlkIiwiZXJyb3JzIiwiZm9yRWFjaCIsInNpemUiLCJ0eXBlIiwiZXJyb3JPYmoiLCJnZXRFcnJvcnNCeVBhcmFtIiwic2V0IiwiZGVsZXRlIiwic2V0UGFyYW0iLCJnZXQiLCJwYXJhbUVycm9ycyIsIkZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRmllbGROYW1lIiwidmFsaWRhdGlvbkNvbnRyYWN0IiwiZmllbGRWYWxpZGF0aW9uIiwidmFsaWRhdGlvbiIsInVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cyIsInVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMiLCJ1cGRhdGVFcnJvcnMiLCJpbml0aWFsaXplZCIsImVycm9yc09mVGhpc1BhcmFtIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiZmlyc3RFcnJvciIsImZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaXNWYWxpZFBhcmFtIiwiaXNWYWxpZCIsInNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwYXJlbnROb2RlIiwiaW5pdCIsInNldHVwRm9ybUVsZW1lbnQiLCJmb3JtRmllbGROYW1lcyIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJoYXNFcnJvcnMiLCJhcnJheU9mRm9ybUZpZWxkTmFtZXMiLCJrZXlzIiwiZmllbGROYW1lIiwiJGZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRWxlbWVudCIsImZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnRzIiwicHVzaCIsImNsZWFyIiwidmFsaWRhdGVGb3JtRmllbGRFbGVtZW50Iiwic2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJrZXkiLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJnZXRGdWxsTmFtZSIsImdldENQRiIsImdldFBob25lIiwiZ2V0RW1haWwiLCJyZWplY3QiLCJzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UiLCJlcnIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFD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QUcsS0FBSSxDQUFDakosTUFBTCxFQUFwQjs7QUFFQWlKLGVBQVcsQ0FBQ2IsSUFBWixDQUFpQjtBQUNmdEYsVUFBSSxFQUFFOUUsSUFBSSxDQUFDa0wsV0FBTCxFQURTO0FBRWY1SixTQUFHLEVBQUV0QixJQUFJLENBQUNtTCxNQUFMLEVBRlU7QUFHZjVKLFdBQUssRUFBRXZCLElBQUksQ0FBQ29MLFFBQUwsRUFIUTtBQUlmakwsV0FBSyxFQUFFSCxJQUFJLENBQUNxTCxRQUFMO0FBSlEsS0FBakI7QUFPQSxXQUFPLElBQUk5RyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVOEcsTUFBVixFQUFxQjtBQUN0QyxVQUFJO0FBQ0YsYUFBSSxDQUFDQyxxQkFBTCxDQUEyQk4sV0FBM0I7O0FBQ0F6RyxlQUFPLENBQUM7QUFBRStCLGlCQUFPLEVBQUU7QUFBWCxTQUFELENBQVA7QUFDRCxPQUhELENBR0UsT0FBT2lGLEdBQVAsRUFBWTtBQUNaRixjQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNEO0FBQ0YsS0FQTSxDQUFQO0FBUUQsRyIsImZpbGUiOiJqcy9jYWRhc3Ryby9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vaW5mcmEvQ29tcG9uZW50JztcbmltcG9ydCAnLi9Vc2Vyc1RhYmxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdLFxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5iYXNlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG4gIH1cblxuICB0ZW1wbGF0ZSA9ICgpID0+IGBcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7dGhpcy5zdGF0ZS51c2Vycy5tYXAodXNlciA9PiBgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmZ1bGxOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5nZXRDUEZGb3JtYXRlZCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dXNlci5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3VzZXIuZ2V0UGhvbmVGb3JtYXRlZCgpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKS5qb2luKCcnKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgc3RhdGljIGFkZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXQ7XG5cblxuICAgIGlmICgkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpIHJldHVybjtcblxuICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkaW5nJykpO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlLFxuICAgIH07XG5cbiAgICBVc2Vyc1NlcnZpY2VcbiAgICAgIC5hZGROZXcoZm9ybUVsZW1lbnRzRFRPKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGVkJykpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSk7XG5cbiAgICBVc2Vyc1NlcnZpY2VcbiAgICAgIC5nZXRBbGwoKVxuICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgIHVzZXJzVGFibGUuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi8uLi8uLi8uLi9pbmZyYS9Gb3JtVmFsaWRhdG9yJztcbmltcG9ydCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSBmcm9tICcuLi8uLi8uLi92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYSc7XG5cbmNvbnN0ICRmb3JtRWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybUFkZFVzdWFyaW9cIl0nKTtcblxuZnVuY3Rpb24gc3RhcnRCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLmNsYXNzTGlzdC5hZGQoJy1sb2FkaW5nJyk7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3BCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLmNsYXNzTGlzdC5yZW1vdmUoJy1sb2FkaW5nJyk7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAkZm9ybUVsZW1lbnQucmVzZXQoKTtcbn1cblxuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRpbmcnLCBzdGFydEJ0blN1Ym1pdExvYWRpbmcpO1xuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRlZCcsIHN0b3BCdG5TdWJtaXRMb2FkaW5nKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVsZW1lbnQ6ICRmb3JtRWxlbWVudCxcbiAgZm9ybVZhbGlkYXRvcjogbmV3IEZvcm1WYWxpZGF0b3IoJGZvcm1FbGVtZW50LCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSksXG59O1xuIiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInO1xuaW1wb3J0ICcuL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvJztcblxud2luZG93LnBhZ2VDYWRhc3RybyA9IHtcbiAgdXNlckNvbnRyb2xsZXI6IFVzZXJDb250cm9sbGVyLFxufTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgPSB7XG4gIG5vbWU6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdub21lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gbm9tZSDDqSBvYnJpZ2F0w7NyaW8nKSxcbiAgZW1haWw6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdlbWFpbCcsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIGVtYWlsIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmlzRW1haWwoJ0luZm9ybWUgdW0gZS1tYWlsIHbDoWxpZG8nKSxcbiAgY3BmOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnY3BmJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gQ1BGIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmlzQ1BGKCdQb3IgZmF2b3IsIGluZm9ybWUgdW0gQ1BGIHbDoWxpZG8nKSxcbiAgdGVsZWZvbmU6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCd0ZWxlZm9uZScsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIHRlbGVmb25lIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmhhc01pbkxlbmd0aCgxMCwgJ0luZm9ybWUgdW0gdGVsZWZvbmUgdsOhbGlkbycpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3VXNlclZhbGlkYXRpb25TY2hlbWE7XG4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCIvKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFtcImVycm9yXCIsIHsgXCJmdW5jdGlvbnNcIjogZmFsc2UgfV0gKi9cbmltcG9ydCBVc2VyIGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IFVzZXJzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9pbmZyYS9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5JztcblxuY29uc3QgYWRkTmV3ID0gKGZvcm1FbGVtZW50c0RUTykgPT4ge1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKTtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodXNlcnNSZXBvc2l0b3J5Lmluc2VydCh1c2VyKSksIDEwMDApO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldEFsbCA9ICgpID0+IHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICBjb25zdCBoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5ID0gdXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLmxlbmd0aCA+IDA7XG5cbiAgaWYgKGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RPZkRvbWFpblVzZXJzID0gdXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLm1hcCh1c2VyID0+IG5ldyBVc2VyKHtcbiAgICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgICAgfSkpO1xuICAgICAgcmVzb2x2ZShsaXN0T2ZEb21haW5Vc2Vycyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGdldEV4dGVybmFsVXNlcnMoKTtcbn07XG5cbmZ1bmN0aW9uIGdldEV4dGVybmFsVXNlcnMoKSB7XG4gIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcblxuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vcHJpdmF0ZS0yMWU4ZGUtcmFmYWVsbHVjaW8uYXBpYXJ5LW1vY2suY29tL3VzZXJzJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICBjb25zdCBhZGRVc2Vyc1Byb21pc2VzID0gdXNlcnMubWFwKHVzZXIgPT4gdXNlcnNSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgIH0pKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYWRkVXNlcnNQcm9taXNlcyk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBnZXRBbGwoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkTmV3LFxuICBnZXRBbGwsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBDUEZOdW1iZXJzIH0pIHtcbiAgICB0aGlzLkNQRk51bWJlcnMgPSBDUEZOdW1iZXJzO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgcmV0dXJuIHRoaXMuQ1BGTnVtYmVycy5yZXBsYWNlKENQRlJlZ2V4LCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyID0gKCkgPT4gdGhpcy5udW1iZXI7XG5cbiAgZ2V0TnVtYmVyRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLm51bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgaWYgKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcblxuICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25zIHtcbiAgY29uc3RydWN0b3IoeyBjb250cmFjdCwgcGFyYW0sIHZhbHVlIH0pIHtcbiAgICB0aGlzLnBhcmFtID0gcGFyYW07XG4gICAgdGhpcy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFwcGx5VmFsaWRhdGlvbiA9IChjb25kaXRpb24sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKSA9PiB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgdGhpcy5jb250cmFjdC5zZXRFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJhY3QucmVtb3ZlRXJyb3IodGhpcy5wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQgPSAobWVzc2FnZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IDA7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc1JlcXVpcmVkJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRW1haWwgPSAobWVzc2FnZSA9ICdFbWFpbCBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IHJlZ2V4RW1haWxWYWxpZCA9IG5ldyBSZWdFeHAoL15cXHcrKFstKy4nXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSokLyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXJlZ2V4RW1haWxWYWxpZC50ZXN0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzRW1haWwnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNDUEYgPSAobWVzc2FnZSA9ICdDUEYgbXVzdCB0byBiZSB2YWxpZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhKCh2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICBjb25zdCBjcGZWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGNwZlZhbHVlID09PSAnMDAwMDAwMDAwMDAnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gICAgICB9XG4gICAgICBsZXQgbW9kID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gICAgICBpZiAoKG1vZCA9PT0gMTApIHx8IChtb2QgPT09IDExKSkgbW9kID0gMDtcbiAgICAgIGlmIChtb2QgIT09IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyg5LCAxMCksIDEwKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBzdW0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDEyIC0gaSk7XG4gICAgICB9XG4gICAgICBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDEwLCAxMSksIDEwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkodGhpcy52YWx1ZSk7XG5cblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzQ1BGJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc01pbkxlbmd0aCA9IChtaW5MZW5ndGgsIG1lc3NhZ2UgPSBgTWluaW1hbCBsZW5naHQgaXMgJHttaW5MZW5ndGh9YCkgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMudmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoO1xuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaGFzTWluTGVuZ3RoJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25zIGZyb20gJy4vVmFsaWRhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uQ29udHJhY3Qge1xuICBlcnJvcnMgPSBuZXcgTWFwKClcblxuICB2YWxpZGF0ZShwYXJhbSwgdmFsdWUpIHtcbiAgICB0aGlzLnNldFBhcmFtKHBhcmFtKTtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25zKHsgY29udHJhY3Q6IHRoaXMsIHBhcmFtLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnM7XG4gIH1cblxuICBoYXNFcnJvcnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRyYWN0SXNJbnZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvcnMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgIGlmIChwYXJhbS5zaXplID09PSAxKSB7XG4gICAgICAgIGNvbnRyYWN0SXNJbnZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29udHJhY3RJc0ludmFsaWQ7XG4gIH1cblxuICBzZXRQYXJhbShwYXJhbSkge1xuICAgIGlmICghdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKSkge1xuICAgICAgdGhpcy5lcnJvcnMuc2V0KHBhcmFtLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yID0gKHBhcmFtLCB0eXBlLCBtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgZXJyb3JPYmogPSB7XG4gICAgICBwYXJhbSxcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgIH07XG4gICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5zZXQodHlwZSwgZXJyb3JPYmopO1xuICB9XG5cbiAgcmVtb3ZlRXJyb3IgPSAocGFyYW0sIHR5cGUpID0+IHtcbiAgICBpZiAodGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSkge1xuICAgICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5kZWxldGUodHlwZSk7XG4gICAgfVxuICB9XG5cblxuICBnZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gIH1cblxuICBpc1ZhbGlkUGFyYW0ocGFyYW0pIHtcbiAgICBjb25zdCBwYXJhbUVycm9ycyA9IHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gICAgaWYgKHBhcmFtRXJyb3JzKSByZXR1cm4gcGFyYW1FcnJvcnMuc2l6ZSA9PT0gMDtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkVmFsaWRhdG9yIHtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmb3JtRmllbGRFbGVtZW50LFxuICAgIGZvcm1GaWVsZE5hbWUsXG4gICAgdmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgIGZpZWxkVmFsaWRhdGlvbixcbiAgfSkge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudCA9IGZvcm1GaWVsZEVsZW1lbnQ7XG4gICAgdGhpcy5mb3JtRmllbGROYW1lID0gZm9ybUZpZWxkTmFtZTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IHZhbGlkYXRpb25Db250cmFjdDtcbiAgICB0aGlzLmZpZWxkVmFsaWRhdGlvbiA9IGZpZWxkVmFsaWRhdGlvbjtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb24oKTtcbiAgICB0aGlzLnVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlRXJyb3JzKCk7XG4gIH1cblxuICB2YWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uKHRoaXMuZm9ybUZpZWxkRWxlbWVudC52YWx1ZSwgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QpO1xuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCkge1xuICAgIGlmICh0aGlzLmlzSW52YWxpZCgpICYmIHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdHlwZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10eXBlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUVycm9ycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgZXJyb3JzT2ZUaGlzUGFyYW0gPSB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5nZXRFcnJvcnNCeVBhcmFtKHRoaXMuZm9ybUZpZWxkTmFtZSk7XG4gICAgICBjb25zdCBlcnJvcnMgPSBBcnJheS5mcm9tKGVycm9yc09mVGhpc1BhcmFtLnZhbHVlcygpKSB8fCBbXTtcbiAgICAgIGNvbnN0IGZpcnN0RXJyb3IgPSBlcnJvcnNbMF0gfHwge307XG4gICAgICB0aGlzLmZvcm1FbGVtZW50RXJyb3JFbGVtZW50LmlubmVySFRNTCA9IGAke2ZpcnN0RXJyb3IubWVzc2FnZX1gO1xuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWQgPSAoKSA9PiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5pc1ZhbGlkUGFyYW0odGhpcy5mb3JtRmllbGROYW1lKVxuXG4gIGlzSW52YWxpZCA9ICgpID0+ICF0aGlzLmlzVmFsaWQoKVxuXG4gIHNldHVwRm9ybUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlLFxuICAgIH07XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50KCk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgJzxzcGFuIGNsYXNzPVwiZXJyb3JzXCI+PC9zcGFuPicpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSB0aGlzLmZvcm1GaWVsZEVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZXJyb3JzJyk7XG4gIH1cbn1cbiIsImltcG9ydCBWYWxpZGF0aW9uQ29udHJhY3QgZnJvbSAnLi4vRmx1ZW50VmFsaWRhdG9yJztcbmltcG9ydCBGb3JtRmllbGRWYWxpZGF0b3IgZnJvbSAnLi9Gb3JtRmllbGRWYWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgZm9ybUZpZWxkRWxlbWVudHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigkZm9ybUVsZW1lbnQsIGZvcm1GaWVsZE5hbWVzKSB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSBuZXcgVmFsaWRhdGlvbkNvbnRyYWN0KCk7XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50ID0gJGZvcm1FbGVtZW50O1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpO1xuXG4gICAgdGhpcy5mb3JtRmllbGROYW1lcyA9IGZvcm1GaWVsZE5hbWVzO1xuICAgIHRoaXMuc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+ICF0aGlzLmlzSW52YWxpZCgpO1xuXG4gIGlzSW52YWxpZCA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMoKTtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuaGFzRXJyb3JzKCk7XG4gIH1cblxuICBzZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5T2ZGb3JtRmllbGROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybUZpZWxkTmFtZXMpO1xuXG4gICAgYXJyYXlPZkZvcm1GaWVsZE5hbWVzLmZvckVhY2goKGZpZWxkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgJGZvcm1GaWVsZEVsZW1lbnQgPSB0aGlzLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYCk7XG4gICAgICBjb25zdCBmb3JtRmllbGRWYWxpZGF0b3IgPSBuZXcgRm9ybUZpZWxkVmFsaWRhdG9yKHtcbiAgICAgICAgZm9ybUZpZWxkRWxlbWVudDogJGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgICAgIGZvcm1GaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgdmFsaWRhdGlvbkNvbnRyYWN0OiB0aGlzLnZhbGlkYXRpb25Db250cmFjdCxcbiAgICAgICAgZmllbGRWYWxpZGF0aW9uOiB0aGlzLmZvcm1GaWVsZE5hbWVzW2ZpZWxkTmFtZV0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudHMucHVzaChmb3JtRmllbGRWYWxpZGF0b3IpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1FbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIGlzVmFsaWQ6IHRoaXMuaXNWYWxpZCxcbiAgICAgIGlzSW52YWxpZDogdGhpcy5pc0ludmFsaWQsXG4gICAgICBjbGVhcjogdGhpcy5jbGVhcixcbiAgICB9O1xuXG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCk7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5jbGVhcik7XG4gIH1cblxuICB2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQgPSAoeyB0YXJnZXQ6IGZvcm1GaWVsZEVsZW1lbnQgfSkgPT4ge1xuICAgIGZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudHMuZm9yRWFjaCgoZm9ybUZpZWxkRWxlbWVudCkgPT4ge1xuICAgICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSBuZXcgVmFsaWRhdGlvbkNvbnRyYWN0KCk7XG4gIH1cbn1cbiIsIi8vIGltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vZW50aXRpZXMvVXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cblxuICBzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UgPSBpdGVtID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcblxuICBnZXRBbGwgPSAoKSA9PiB0aGlzLmdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKClcblxuICBpbnNlcnQgPSAodXNlcikgPT4ge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcblxuICAgIGxpc3RPZlVzZXJzLnB1c2goe1xuICAgICAgbmFtZTogdXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgY3BmOiB1c2VyLmdldENQRigpLFxuICAgICAgcGhvbmU6IHVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgIGVtYWlsOiB1c2VyLmdldEVtYWlsKCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UobGlzdE9mVXNlcnMpO1xuICAgICAgICByZXNvbHZlKHsgbWVzc2FnZTogJ1VzZXIgcmVnaXN0ZXJlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9