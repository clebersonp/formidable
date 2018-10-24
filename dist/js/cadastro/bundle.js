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

  function UsersTable(element, controller) {
    var _this;

    _classCallCheck(this, UsersTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UsersTable).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      users: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeUser", function (_ref) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "template", function () {
      return "\n      <table>\n        <thead>\n          <tr>\n            <td>Nome</td>\n            <td>CPF</td>\n            <td>Email</td>\n            <td>Telefone</td>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(_this.state.users.map(function (user) {
        return "\n              <tr>\n                <td data-type=\"nome\">".concat(user.getFullName(), "</td>\n                <td data-type=\"cpf\">").concat(user.getCPFFormated(), "</td>\n                <td data-type=\"email\">").concat(user.getEmail(), "</td>\n                <td data-type=\"telefone\">").concat(user.getPhoneFormated(), "</td>\n                <td><button class=\"btn-remove\">Remover</button></td>\n              </tr>\n            ");
      }).join(''), "\n          ").concat(_this.state.users.length === 0 ? '<tr><td colspan="4" align="center">Nenhum usuário encontrado :(</td></tr>' : '', "\n        </tbody>\n      </table>\n    ");
    });

    _this.controller = controller;
    _this.baseElement = element;

    _this.setupEvents();

    return _this;
  }

  _createClass(UsersTable, [{
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
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_1__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].getAllWithInitialData().then(function (users) {
        usersTable.setState({
          users: users
        });
      });
    }
  }, {
    key: "remove",
    value: function remove(user) {
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_1__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      var removableUserDTO = {
        fullName: user.nome,
        cpf: user.cpf,
        phone: user.telefone,
        email: user.email
      };
      _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUser(removableUserDTO).then(_domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll).then(function (users) {
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
};

var getAllWithInitialData = function getAllWithInitialData() {
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var hasUsersFromRepository = usersRepository.getAll().length > 0;

  if (hasUsersFromRepository) {
    return getAll();
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

function deleteUser(removableUserDTO) {
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var user = new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](removableUserDTO);
  usersRepository.remove(user);
  return new Promise(function (resolve) {
    resolve({
      message: 'removed with success'
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  addNew: addNew,
  getAll: getAll,
  deleteUser: deleteUser,
  getAllWithInitialData: getAllWithInitialData
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
        _this.formElementErrorElement.innerHTML = firstError.message || '';
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

/***/ "./src/infra/deepEqual.js":
/*!********************************!*\
  !*** ./src/infra/deepEqual.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var deepEqual = function deepEqual(a, b) {
  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
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
/* harmony import */ var _deepEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deepEqual */ "./src/infra/deepEqual.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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

    if (user.getFullName) {
      listOfUsers.push({
        name: user.getFullName(),
        cpf: user.getCPF(),
        phone: user.getPhone(),
        email: user.getEmail()
      });
    }

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

  _defineProperty(this, "remove", function (removableUser) {
    var removableUserDbObj = {
      name: removableUser.getFullName(),
      cpf: removableUser.getCPF(),
      phone: removableUser.getPhone(),
      email: removableUser.getEmail()
    };

    var listOfUsers = _this.getAll();

    var updatedListOfUsers = listOfUsers.filter(function (currentUser) {
      return !Object(_deepEqual__WEBPACK_IMPORTED_MODULE_0__["default"])(currentUser, removableUserDbObj);
    });

    _this.setItemInLocalStorage(updatedListOfUsers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ1c2VycyIsImNsaWNrVGFyZ2V0RWxlbWVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidXNlclRyIiwiY2xvc2VzdCIsInVzZXJUZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidXNlckRhdGEiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VGQiLCJjdXJyZW50RGF0YVR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsInN0YXRlIiwibWFwIiwidXNlciIsImdldEZ1bGxOYW1lIiwiZ2V0Q1BGRm9ybWF0ZWQiLCJnZXRFbWFpbCIsImdldFBob25lRm9ybWF0ZWQiLCJqb2luIiwibGVuZ3RoIiwiYmFzZUVsZW1lbnQiLCJzZXR1cEV2ZW50cyIsIm9uY2xpY2siLCJyZW1vdmVVc2VyIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImZvcm1FbGVtZW50c0RUTyIsImZ1bGxOYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJlbWFpbCIsIlVzZXJzU2VydmljZSIsImFkZE5ldyIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2Vyc1RhYmxlIiwiZG9jdW1lbnQiLCJnZXRBbGxXaXRoSW5pdGlhbERhdGEiLCJzZXRTdGF0ZSIsInJlbW92YWJsZVVzZXJEVE8iLCJub21lIiwidGVsZWZvbmUiLCJkZWxldGVVc2VyIiwiZ2V0QWxsIiwiJGZvcm1FbGVtZW50Iiwic3RhcnRCdG5TdWJtaXRMb2FkaW5nIiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3RvcEJ0blN1Ym1pdExvYWRpbmciLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJpc0NQRiIsImhhc01pbkxlbmd0aCIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwiZnJlZXplIiwidXNlcnNSZXBvc2l0b3J5IiwiVXNlcnNSZXBvc2l0b3J5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0IiwibGlzdE9mRG9tYWluVXNlcnMiLCJuYW1lIiwiaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSIsImdldEV4dGVybmFsVXNlcnMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiYWRkVXNlcnNQcm9taXNlcyIsImFsbCIsIm1lc3NhZ2UiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIlZhbGlkYXRpb25zIiwicGFyYW0iLCJjb25kaXRpb24iLCJ2YWxpZGF0aW9uTmFtZSIsInNldEVycm9yIiwicmVtb3ZlRXJyb3IiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3VtIiwiY3BmVmFsdWUiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJtb2QiLCJtaW5MZW5ndGgiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzIiwiZXJyb3JzIiwidmFsdWVzIiwiZmlyc3RWYWxpZGF0aW9uRXJyb3JIYXNFcnJvcnMiLCJzaXplIiwiaXNWYWxpZENvbnRyYWN0IiwiY3VycmVudEVycm9yIiwiaGFzQ3VycmVudFZhbGlkYXRpb25FcnJvckVycm9ycyIsInByZXZpb3VzT3JDdXJyZW50SGFzRXJyb3JzIiwidHlwZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiZ2V0IiwicGFyYW1FcnJvcnMiLCJGb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50IiwiZm9ybUZpZWxkTmFtZSIsInZhbGlkYXRpb25Db250cmFjdCIsImZpZWxkVmFsaWRhdGlvbiIsInZhbGlkYXRpb24iLCJ1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMiLCJ1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzIiwidXBkYXRlRXJyb3JzIiwiaW5pdGlhbGl6ZWQiLCJlcnJvcnNPZlRoaXNQYXJhbSIsImZpcnN0RXJyb3IiLCJmb3JtRWxlbWVudEVycm9yRWxlbWVudCIsImlzVmFsaWRQYXJhbSIsImlzVmFsaWQiLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImluaXQiLCJzZXR1cEZvcm1FbGVtZW50IiwiZm9ybUZpZWxkTmFtZXMiLCJ2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzIiwiaGFzRXJyb3JzIiwiYXJyYXlPZkZvcm1GaWVsZE5hbWVzIiwia2V5cyIsImZvckVhY2giLCJmaWVsZE5hbWUiLCIkZm9ybUZpZWxkRWxlbWVudCIsImZvcm1FbGVtZW50IiwiZm9ybUZpZWxkVmFsaWRhdG9yIiwiZm9ybUZpZWxkRWxlbWVudHMiLCJwdXNoIiwiY2xlYXIiLCJ2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQiLCJzZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzIiwiZGVlcEVxdWFsIiwiYSIsImIiLCJhS2V5cyIsImtleSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJnZXRDUEYiLCJnZXRQaG9uZSIsInJlamVjdCIsInNldEl0ZW1JbkxvY2FsU3RvcmFnZSIsImVyciIsInJlbW92YWJsZVVzZXIiLCJyZW1vdmFibGVVc2VyRGJPYmoiLCJ1cGRhdGVkTGlzdE9mVXNlcnMiLCJmaWx0ZXIiLCJjdXJyZW50VXNlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUFBVixFQUFxQjtBQUN0QyxVQUFJO0FBQ0YsYUFBSSxDQUFDQyxxQkFBTCxDQUEyQkosV0FBM0I7O0FBQ0EvRyxlQUFPLENBQUM7QUFBRWEsaUJBQU8sRUFBRTtBQUFYLFNBQUQsQ0FBUDtBQUNELE9BSEQsQ0FHRSxPQUFPdUcsR0FBUCxFQUFZO0FBQ1pGLGNBQU0sQ0FBQ0UsR0FBRCxDQUFOO0FBQ0Q7QUFDRixLQVBNLENBQVA7QUFRRCxHOztrQ0FFUSxVQUFDQyxhQUFELEVBQW1CO0FBQzFCLFFBQU1DLGtCQUFrQixHQUFHO0FBQ3pCbEgsVUFBSSxFQUFFaUgsYUFBYSxDQUFDbE0sV0FBZCxFQURtQjtBQUV6QnlCLFNBQUcsRUFBRXlLLGFBQWEsQ0FBQ0wsTUFBZCxFQUZvQjtBQUd6Qm5LLFdBQUssRUFBRXdLLGFBQWEsQ0FBQ0osUUFBZCxFQUhrQjtBQUl6Qm5LLFdBQUssRUFBRXVLLGFBQWEsQ0FBQ2hNLFFBQWQ7QUFKa0IsS0FBM0I7O0FBTUEsUUFBTTBMLFdBQVcsR0FBRyxLQUFJLENBQUNsSixNQUFMLEVBQXBCOztBQUNBLFFBQU0wSixrQkFBa0IsR0FBR1IsV0FBVyxDQUNuQ1MsTUFEd0IsQ0FDakIsVUFBQUMsV0FBVztBQUFBLGFBQUksQ0FBQ3ZCLDBEQUFTLENBQUN1QixXQUFELEVBQWNILGtCQUFkLENBQWQ7QUFBQSxLQURNLENBQTNCOztBQUdBLFNBQUksQ0FBQ0gscUJBQUwsQ0FBMkJJLGtCQUEzQjtBQUNELEciLCJmaWxlIjoianMvY2FkYXN0cm8vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2luZnJhL0NvbXBvbmVudCc7XG5pbXBvcnQgJy4vVXNlcnNUYWJsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHVzZXJzOiBbXSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRyb2xsZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5iYXNlRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG4gIH1cblxuICBzZXR1cEV2ZW50cygpIHtcbiAgICB0aGlzLmJhc2VFbGVtZW50Lm9uY2xpY2sgPSB0aGlzLnJlbW92ZVVzZXI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG4gIH1cblxuICByZW1vdmVVc2VyID0gKHsgdGFyZ2V0OiBjbGlja1RhcmdldEVsZW1lbnQgfSkgPT4ge1xuICAgIGlmIChjbGlja1RhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tcmVtb3ZlJykpIHtcbiAgICAgIGNvbnN0IHVzZXJUciA9IGNsaWNrVGFyZ2V0RWxlbWVudC5jbG9zZXN0KCd0cicpO1xuICAgICAgY29uc3QgdXNlclRkcyA9IHVzZXJUci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBBcnJheS5mcm9tKHVzZXJUZHMpLnJlZHVjZSgoYWNjLCBjdXJyZW50VGQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGFUeXBlID0gY3VycmVudFRkLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIGFjY1tjdXJyZW50RGF0YVR5cGVdID0gY3VycmVudFRkLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgICAgdGhpcy5jb250cm9sbGVyLnJlbW92ZSh1c2VyRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGUgPSAoKSA9PiBgXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+Tm9tZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+Q1BGPC90ZD5cbiAgICAgICAgICAgIDx0ZD5FbWFpbDwvdGQ+XG4gICAgICAgICAgICA8dGQ+VGVsZWZvbmU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2Vycy5tYXAodXNlciA9PiBgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwibm9tZVwiPiR7dXNlci5nZXRGdWxsTmFtZSgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cImNwZlwiPiR7dXNlci5nZXRDUEZGb3JtYXRlZCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cImVtYWlsXCI+JHt1c2VyLmdldEVtYWlsKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwidGVsZWZvbmVcIj4ke3VzZXIuZ2V0UGhvbmVGb3JtYXRlZCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCJidG4tcmVtb3ZlXCI+UmVtb3ZlcjwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKS5qb2luKCcnKVxuICAgICAgICAgIH1cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2Vycy5sZW5ndGggPT09IDAgPyAnPHRyPjx0ZCBjb2xzcGFuPVwiNFwiIGFsaWduPVwiY2VudGVyXCI+TmVuaHVtIHVzdcOhcmlvIGVuY29udHJhZG8gOig8L3RkPjwvdHI+JyA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICBgXG59XG4iLCJpbXBvcnQgVXNlcnNTZXJ2aWNlIGZyb20gJy4uLy4uL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UnO1xuaW1wb3J0IFVzZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vyc1RhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBzdGF0aWMgYWRkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkZm9ybSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICgkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpIHJldHVybjtcblxuICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkaW5nJykpO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlLFxuICAgIH07XG5cbiAgICBVc2Vyc1NlcnZpY2VcbiAgICAgIC5hZGROZXcoZm9ybUVsZW1lbnRzRFRPKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGVkJykpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSwgVXNlckNvbnRyb2xsZXIpO1xuXG4gICAgVXNlcnNTZXJ2aWNlXG4gICAgICAuZ2V0QWxsV2l0aEluaXRpYWxEYXRhKClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUodXNlcikge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogdXNlci5ub21lLFxuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIHBob25lOiB1c2VyLnRlbGVmb25lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfTtcblxuICAgIFVzZXJzU2VydmljZVxuICAgICAgLmRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTylcbiAgICAgIC50aGVuKFVzZXJzU2VydmljZS5nZXRBbGwpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uLy4uLy4uLy4uL2luZnJhL0Zvcm1WYWxpZGF0b3InO1xuaW1wb3J0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hJztcblxuY29uc3QgJGZvcm1FbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtQWRkVXN1YXJpb1wiXScpO1xuXG5mdW5jdGlvbiBzdGFydEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LmFkZCgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbn1cblxuZnVuY3Rpb24gc3RvcEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LnJlbW92ZSgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICRmb3JtRWxlbWVudC5yZXNldCgpO1xufVxuXG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGluZycsIHN0YXJ0QnRuU3VibWl0TG9hZGluZyk7XG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGVkJywgc3RvcEJ0blN1Ym1pdExvYWRpbmcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbWVudDogJGZvcm1FbGVtZW50LFxuICBmb3JtVmFsaWRhdG9yOiBuZXcgRm9ybVZhbGlkYXRvcigkZm9ybUVsZW1lbnQsIG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hKSxcbn07XG4iLCJpbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xlcic7XG5pbXBvcnQgJy4vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8nO1xuXG53aW5kb3cucGFnZUNhZGFzdHJvID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSA9IHtcbiAgbm9tZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ25vbWUnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBub21lIMOpIG9icmlnYXTDs3JpbycpLFxuICBlbWFpbDogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ2VtYWlsJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gZW1haWwgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNFbWFpbCgnSW5mb3JtZSB1bSBlLW1haWwgdsOhbGlkbycpLFxuICBjcGY6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdjcGYnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBDUEYgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNDUEYoJ1BvciBmYXZvciwgaW5mb3JtZSB1bSBDUEYgdsOhbGlkbycpLFxuICB0ZWxlZm9uZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ3RlbGVmb25lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gdGVsZWZvbmUgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaGFzTWluTGVuZ3RoKDEwLCAnSW5mb3JtZSB1bSB0ZWxlZm9uZSB2w6FsaWRvJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYTtcbiIsImltcG9ydCBQaG9uZSBmcm9tICcuLi92YWx1ZU9iamVjdHMvUGhvbmUnO1xuaW1wb3J0IENQRiBmcm9tICcuLi92YWx1ZU9iamVjdHMvQ1BGJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmdWxsTmFtZSxcbiAgICBjcGYsXG4gICAgcGhvbmUsXG4gICAgZW1haWwsXG4gIH0pIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgdGhpcy5jcGYgPSBuZXcgQ1BGKHsgQ1BGTnVtYmVyczogY3BmIH0pO1xuICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmUoeyBudW1iZXI6IHBob25lIH0pO1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lID0gKCkgPT4gdGhpcy5mdWxsTmFtZVxuXG4gIGdldEVtYWlsID0gKCkgPT4gdGhpcy5lbWFpbFxuXG4gIGdldENQRiA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlKClcblxuICBnZXRDUEZGb3JtYXRlZCA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlRm9ybWF0ZWQoKVxuXG4gIGdldFBob25lID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXIoKVxuXG4gIGdldFBob25lRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlckZvcm1hdGVkKClcbn1cbiIsIi8qIGVzbGludCBuby11c2UtYmVmb3JlLWRlZmluZTogW1wiZXJyb3JcIiwgeyBcImZ1bmN0aW9uc1wiOiBmYWxzZSB9XSAqL1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgVXNlcnNSZXBvc2l0b3J5IGZyb20gJy4uLy4uL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnknO1xuXG5jb25zdCBhZGROZXcgPSAoZm9ybUVsZW1lbnRzRFRPKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh1c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KHVzZXIpKSwgMTAwMCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWxsID0gKCkgPT4ge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mRG9tYWluVXNlcnMgPSB1c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubWFwKHVzZXIgPT4gbmV3IFVzZXIoe1xuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgIH0pKTtcbiAgICByZXNvbHZlKGxpc3RPZkRvbWFpblVzZXJzKTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRBbGxXaXRoSW5pdGlhbERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgY29uc3QgaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSA9IHVzZXJzUmVwb3NpdG9yeS5nZXRBbGwoKS5sZW5ndGggPiAwO1xuXG4gIGlmIChoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5KSB7XG4gICAgcmV0dXJuIGdldEFsbCgpO1xuICB9XG4gIHJldHVybiBnZXRFeHRlcm5hbFVzZXJzKCk7XG59O1xuXG5mdW5jdGlvbiBnZXRFeHRlcm5hbFVzZXJzKCkge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9wcml2YXRlLTIxZThkZS1yYWZhZWxsdWNpby5hcGlhcnktbW9jay5jb20vdXNlcnMnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICBjb25zdCBhZGRVc2Vyc1Byb21pc2VzID0gdXNlcnMubWFwKHVzZXIgPT4gdXNlcnNSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgIH0pKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYWRkVXNlcnNQcm9taXNlcyk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBnZXRBbGwoKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTykge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihyZW1vdmFibGVVc2VyRFRPKTtcbiAgdXNlcnNSZXBvc2l0b3J5LnJlbW92ZSh1c2VyKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdyZW1vdmVkIHdpdGggc3VjY2VzcycgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZE5ldyxcbiAgZ2V0QWxsLFxuICBkZWxldGVVc2VyLFxuICBnZXRBbGxXaXRoSW5pdGlhbERhdGEsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBDUEZOdW1iZXJzIH0pIHtcbiAgICB0aGlzLkNQRk51bWJlcnMgPSBDUEZOdW1iZXJzLnJlcGxhY2UoLy0vZywgJycpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLkNQRk51bWJlcnNcblxuICBnZXRWYWx1ZUZvcm1hdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IENQRlJlZ2V4ID0gLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLztcbiAgICByZXR1cm4gdGhpcy5DUEZOdW1iZXJzLnJlcGxhY2UoQ1BGUmVnZXgsIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob25lIHtcbiAgY29uc3RydWN0b3IoeyBudW1iZXIgfSkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoLy0vZywgJycpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXROdW1iZXIgPSAoKSA9PiB0aGlzLm51bWJlcjtcblxuICBnZXROdW1iZXJGb3JtYXRlZCA9ICgpID0+IHRoaXMubnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICBpZiAoZGRkKSByZXR1cm4gYCR7ZGRkfS0ke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuXG4gICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih7IGNvbnRyYWN0LCBwYXJhbSwgdmFsdWUgfSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgYXBwbHlWYWxpZGF0aW9uID0gKGNvbmRpdGlvbiwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbnRyYWN0LnNldEVycm9yKHRoaXMucGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cmFjdC5yZW1vdmVFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaXNSZXF1aXJlZCA9IChtZXNzYWdlID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gMDtcblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzUmVxdWlyZWQnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFbWFpbCA9IChtZXNzYWdlID0gJ0VtYWlsIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgcmVnZXhFbWFpbFZhbGlkID0gbmV3IFJlZ0V4cCgvXlxcdysoWy0rLiddXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKiQvKTtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhcmVnZXhFbWFpbFZhbGlkLnRlc3QodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNFbWFpbCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0NQRiA9IChtZXNzYWdlID0gJ0NQRiBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEoKHZhbHVlKSA9PiB7XG4gICAgICBsZXQgc3VtID0gMDtcbiAgICAgIGNvbnN0IGNwZlZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoY3BmVmFsdWUgPT09ICcwMDAwMDAwMDAwMCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gOTsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTEgLSBpKTtcbiAgICAgIH1cbiAgICAgIGxldCBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDksIDEwKSwgMTApKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHN1bSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTIgLSBpKTtcbiAgICAgIH1cbiAgICAgIG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT09IDEwKSB8fCAobW9kID09PSAxMSkpIG1vZCA9IDA7XG4gICAgICBpZiAobW9kICE9PSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoMTAsIDExKSwgMTApKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KSh0aGlzLnZhbHVlKTtcblxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNDUEYnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzTWluTGVuZ3RoID0gKG1pbkxlbmd0aCwgbWVzc2FnZSA9IGBNaW5pbWFsIGxlbmdodCBpcyAke21pbkxlbmd0aH1gKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gISh0aGlzLnZhbHVlLmxlbmd0aCA+PSBtaW5MZW5ndGgpO1xuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2hhc01pbkxlbmd0aCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBWYWxpZGF0aW9ucyBmcm9tICcuL1ZhbGlkYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkNvbnRyYWN0IHtcbiAgZXJyb3JzID0gbmV3IE1hcCgpXG5cbiAgdmFsaWRhdGUocGFyYW0sIHZhbHVlKSB7XG4gICAgdGhpcy5zZXRQYXJhbShwYXJhbSk7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9ucyh7IGNvbnRyYWN0OiB0aGlzLCBwYXJhbSwgdmFsdWUgfSk7XG4gIH1cblxuICBnZXRFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzO1xuICB9XG5cbiAgaGFzRXJyb3JzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RPZlZhbGlkYXRpb25FcnJvcnMgPSBBcnJheS5mcm9tKHRoaXMuZXJyb3JzLnZhbHVlcygpKTtcbiAgICBjb25zdCBmaXJzdFZhbGlkYXRpb25FcnJvckhhc0Vycm9ycyA9IGxpc3RPZlZhbGlkYXRpb25FcnJvcnNbMF0uc2l6ZSA+IDA7XG5cbiAgICBjb25zdCBpc1ZhbGlkQ29udHJhY3QgPSBsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzLnJlZHVjZSgoYWNjLCBjdXJyZW50RXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGhhc0N1cnJlbnRWYWxpZGF0aW9uRXJyb3JFcnJvcnMgPSBjdXJyZW50RXJyb3Iuc2l6ZSA+IDA7XG4gICAgICBjb25zdCBwcmV2aW91c09yQ3VycmVudEhhc0Vycm9ycyA9IGFjYyB8fCBoYXNDdXJyZW50VmFsaWRhdGlvbkVycm9yRXJyb3JzO1xuXG4gICAgICBpZiAocHJldmlvdXNPckN1cnJlbnRIYXNFcnJvcnMpIHJldHVybiB0cnVlO1xuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIGZpcnN0VmFsaWRhdGlvbkVycm9ySGFzRXJyb3JzKTtcblxuICAgIHJldHVybiBpc1ZhbGlkQ29udHJhY3Q7XG4gIH1cblxuICBzZXRQYXJhbShwYXJhbSkge1xuICAgIGlmICghdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKSkge1xuICAgICAgdGhpcy5lcnJvcnMuc2V0KHBhcmFtLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yID0gKHBhcmFtLCB0eXBlLCBtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgZXJyb3JPYmogPSB7XG4gICAgICBwYXJhbSxcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgIH07XG4gICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5zZXQodHlwZSwgZXJyb3JPYmopO1xuICB9XG5cbiAgcmVtb3ZlRXJyb3IgPSAocGFyYW0sIHR5cGUpID0+IHtcbiAgICBpZiAodGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSkge1xuICAgICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5kZWxldGUodHlwZSk7XG4gICAgfVxuICB9XG5cblxuICBnZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gIH1cblxuICBpc1ZhbGlkUGFyYW0ocGFyYW0pIHtcbiAgICBjb25zdCBwYXJhbUVycm9ycyA9IHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gICAgaWYgKHBhcmFtRXJyb3JzKSByZXR1cm4gcGFyYW1FcnJvcnMuc2l6ZSA9PT0gMDtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkVmFsaWRhdG9yIHtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmb3JtRmllbGRFbGVtZW50LFxuICAgIGZvcm1GaWVsZE5hbWUsXG4gICAgdmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgIGZpZWxkVmFsaWRhdGlvbixcbiAgfSkge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudCA9IGZvcm1GaWVsZEVsZW1lbnQ7XG4gICAgdGhpcy5mb3JtRmllbGROYW1lID0gZm9ybUZpZWxkTmFtZTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IHZhbGlkYXRpb25Db250cmFjdDtcbiAgICB0aGlzLmZpZWxkVmFsaWRhdGlvbiA9IGZpZWxkVmFsaWRhdGlvbjtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb24oKTtcbiAgICB0aGlzLnVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlRXJyb3JzKCk7XG4gIH1cblxuICB2YWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uKHRoaXMuZm9ybUZpZWxkRWxlbWVudC52YWx1ZSwgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QpO1xuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCkge1xuICAgIGlmICh0aGlzLmlzSW52YWxpZCgpICYmIHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdHlwZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10eXBlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUVycm9ycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgZXJyb3JzT2ZUaGlzUGFyYW0gPSB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5nZXRFcnJvcnNCeVBhcmFtKHRoaXMuZm9ybUZpZWxkTmFtZSk7XG4gICAgICBjb25zdCBlcnJvcnMgPSBBcnJheS5mcm9tKGVycm9yc09mVGhpc1BhcmFtLnZhbHVlcygpKSB8fCBbXTtcbiAgICAgIGNvbnN0IGZpcnN0RXJyb3IgPSBlcnJvcnNbMF0gfHwge307XG4gICAgICB0aGlzLmZvcm1FbGVtZW50RXJyb3JFbGVtZW50LmlubmVySFRNTCA9IGZpcnN0RXJyb3IubWVzc2FnZSB8fCAnJztcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuaXNWYWxpZFBhcmFtKHRoaXMuZm9ybUZpZWxkTmFtZSlcblxuICBpc0ludmFsaWQgPSAoKSA9PiAhdGhpcy5pc1ZhbGlkKClcblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IgPSB7XG4gICAgICB2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZSxcbiAgICB9O1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudEVycm9yRWxlbWVudCgpO1xuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudEVycm9yRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsICc8c3BhbiBjbGFzcz1cImVycm9yc1wiPjwvc3Bhbj4nKTtcbiAgICB0aGlzLmZvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gdGhpcy5mb3JtRmllbGRFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmVycm9ycycpO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbkNvbnRyYWN0IGZyb20gJy4uL0ZsdWVudFZhbGlkYXRvcic7XG5pbXBvcnQgRm9ybUZpZWxkVmFsaWRhdG9yIGZyb20gJy4vRm9ybUZpZWxkVmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGZvcm1GaWVsZEVsZW1lbnRzID0gW107XG5cbiAgY29uc3RydWN0b3IoJGZvcm1FbGVtZW50LCBmb3JtRmllbGROYW1lcykge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpO1xuXG4gICAgdGhpcy5mb3JtRWxlbWVudCA9ICRmb3JtRWxlbWVudDtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZm9ybUZpZWxkTmFtZXMgPSBmb3JtRmllbGROYW1lcztcbiAgICB0aGlzLnNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMoKTtcbiAgfVxuXG4gIGlzVmFsaWQgPSAoKSA9PiAhdGhpcy5pc0ludmFsaWQoKTtcblxuICBpc0ludmFsaWQgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0Lmhhc0Vycm9ycygpO1xuICB9XG5cbiAgc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBhcnJheU9mRm9ybUZpZWxkTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm1GaWVsZE5hbWVzKTtcblxuICAgIGFycmF5T2ZGb3JtRmllbGROYW1lcy5mb3JFYWNoKChmaWVsZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0ICRmb3JtRmllbGRFbGVtZW50ID0gdGhpcy5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7ZmllbGROYW1lfVwiXWApO1xuICAgICAgY29uc3QgZm9ybUZpZWxkVmFsaWRhdG9yID0gbmV3IEZvcm1GaWVsZFZhbGlkYXRvcih7XG4gICAgICAgIGZvcm1GaWVsZEVsZW1lbnQ6ICRmb3JtRmllbGRFbGVtZW50LFxuICAgICAgICBmb3JtRmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgIHZhbGlkYXRpb25Db250cmFjdDogdGhpcy52YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgICAgIGZpZWxkVmFsaWRhdGlvbjogdGhpcy5mb3JtRmllbGROYW1lc1tmaWVsZE5hbWVdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnRzLnB1c2goZm9ybUZpZWxkVmFsaWRhdG9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRWxlbWVudC52YWxpZGF0b3IgPSB7XG4gICAgICBpc1ZhbGlkOiB0aGlzLmlzVmFsaWQsXG4gICAgICBpc0ludmFsaWQ6IHRoaXMuaXNJbnZhbGlkLFxuICAgICAgY2xlYXI6IHRoaXMuY2xlYXIsXG4gICAgfTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCk7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIHRoaXMuY2xlYXIpO1xuICB9XG5cbiAgdmFsaWRhdGVGb3JtRmllbGRFbGVtZW50ID0gKHsgdGFyZ2V0OiBmb3JtRmllbGRFbGVtZW50IH0pID0+IHtcbiAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRvci52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnRzLmZvckVhY2goKGZvcm1GaWVsZEVsZW1lbnQpID0+IHtcbiAgICAgIGZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpO1xuICB9XG59XG4iLCJjb25zdCBkZWVwRXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHJldHVybiBhS2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkgfHwgYWNjID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVlcEVxdWFsO1xuIiwiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICcuLi9kZWVwRXF1YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cblxuICBzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UgPSBpdGVtID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcblxuICBnZXRBbGwgPSAoKSA9PiB0aGlzLmdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKClcblxuICBpbnNlcnQgPSAodXNlcikgPT4ge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBpZiAodXNlci5nZXRGdWxsTmFtZSkge1xuICAgICAgbGlzdE9mVXNlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6IHVzZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgICAgY3BmOiB1c2VyLmdldENQRigpLFxuICAgICAgICBwaG9uZTogdXNlci5nZXRQaG9uZSgpLFxuICAgICAgICBlbWFpbDogdXNlci5nZXRFbWFpbCgpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKGxpc3RPZlVzZXJzKTtcbiAgICAgICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdVc2VyIHJlZ2lzdGVyZWQgd2l0aCBzdWNjZXNzJyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZSA9IChyZW1vdmFibGVVc2VyKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZhYmxlVXNlckRiT2JqID0ge1xuICAgICAgbmFtZTogcmVtb3ZhYmxlVXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgY3BmOiByZW1vdmFibGVVc2VyLmdldENQRigpLFxuICAgICAgcGhvbmU6IHJlbW92YWJsZVVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgIGVtYWlsOiByZW1vdmFibGVVc2VyLmdldEVtYWlsKCksXG4gICAgfTtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgY29uc3QgdXBkYXRlZExpc3RPZlVzZXJzID0gbGlzdE9mVXNlcnNcbiAgICAgIC5maWx0ZXIoY3VycmVudFVzZXIgPT4gIWRlZXBFcXVhbChjdXJyZW50VXNlciwgcmVtb3ZhYmxlVXNlckRiT2JqKSk7XG5cbiAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZSh1cGRhdGVkTGlzdE9mVXNlcnMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9