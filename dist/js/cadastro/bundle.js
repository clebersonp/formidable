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

  _defineProperty(this, "setState", function () {
    var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    requestAnimationFrame(function () {
      _this.state = _objectSpread({}, _this.state, newState);

      _this.render();
    });
  });

  if (this.state) this.setState();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ1c2VycyIsImNsaWNrVGFyZ2V0RWxlbWVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidXNlclRyIiwiY2xvc2VzdCIsInVzZXJUZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidXNlckRhdGEiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VGQiLCJjdXJyZW50RGF0YVR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsInN0YXRlIiwibWFwIiwidXNlciIsImdldEZ1bGxOYW1lIiwiZ2V0Q1BGRm9ybWF0ZWQiLCJnZXRFbWFpbCIsImdldFBob25lRm9ybWF0ZWQiLCJqb2luIiwibGVuZ3RoIiwiYmFzZUVsZW1lbnQiLCJzZXR1cEV2ZW50cyIsIm9uY2xpY2siLCJyZW1vdmVVc2VyIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImZvcm1FbGVtZW50c0RUTyIsImZ1bGxOYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJlbWFpbCIsIlVzZXJzU2VydmljZSIsImFkZE5ldyIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2Vyc1RhYmxlIiwiZG9jdW1lbnQiLCJnZXRBbGxXaXRoSW5pdGlhbERhdGEiLCJzZXRTdGF0ZSIsInJlbW92YWJsZVVzZXJEVE8iLCJub21lIiwidGVsZWZvbmUiLCJkZWxldGVVc2VyIiwiZ2V0QWxsIiwiJGZvcm1FbGVtZW50Iiwic3RhcnRCdG5TdWJtaXRMb2FkaW5nIiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3RvcEJ0blN1Ym1pdExvYWRpbmciLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJpc0NQRiIsImhhc01pbkxlbmd0aCIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwiZnJlZXplIiwidXNlcnNSZXBvc2l0b3J5IiwiVXNlcnNSZXBvc2l0b3J5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0IiwibGlzdE9mRG9tYWluVXNlcnMiLCJuYW1lIiwiaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSIsImdldEV4dGVybmFsVXNlcnMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiYWRkVXNlcnNQcm9taXNlcyIsImFsbCIsIm1lc3NhZ2UiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIlZhbGlkYXRpb25zIiwicGFyYW0iLCJjb25kaXRpb24iLCJ2YWxpZGF0aW9uTmFtZSIsInNldEVycm9yIiwicmVtb3ZlRXJyb3IiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3VtIiwiY3BmVmFsdWUiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJtb2QiLCJtaW5MZW5ndGgiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJjb250cmFjdElzSW52YWxpZCIsImVycm9ycyIsImZvckVhY2giLCJzaXplIiwidHlwZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiZ2V0IiwicGFyYW1FcnJvcnMiLCJGb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50IiwiZm9ybUZpZWxkTmFtZSIsInZhbGlkYXRpb25Db250cmFjdCIsImZpZWxkVmFsaWRhdGlvbiIsInZhbGlkYXRpb24iLCJ1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMiLCJ1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzIiwidXBkYXRlRXJyb3JzIiwiaW5pdGlhbGl6ZWQiLCJlcnJvcnNPZlRoaXNQYXJhbSIsInZhbHVlcyIsImZpcnN0RXJyb3IiLCJmb3JtRWxlbWVudEVycm9yRWxlbWVudCIsImlzVmFsaWRQYXJhbSIsImlzVmFsaWQiLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImluaXQiLCJzZXR1cEZvcm1FbGVtZW50IiwiZm9ybUZpZWxkTmFtZXMiLCJ2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzIiwiaGFzRXJyb3JzIiwiYXJyYXlPZkZvcm1GaWVsZE5hbWVzIiwia2V5cyIsImZpZWxkTmFtZSIsIiRmb3JtRmllbGRFbGVtZW50IiwiZm9ybUVsZW1lbnQiLCJmb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50cyIsInB1c2giLCJjbGVhciIsInZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJkZWVwRXF1YWwiLCJhIiwiYiIsImFLZXlzIiwia2V5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UiLCJsaXN0T2ZVc2VycyIsImdldENQRiIsImdldFBob25lIiwicmVqZWN0Iiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwiZXJyIiwicmVtb3ZhYmxlVXNlciIsInJlbW92YWJsZVVzZXJEYk9iaiIsInVwZGF0ZWRMaXN0T2ZVc2VycyIsImZpbHRlciIsImN1cnJlbnRVc2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFLbkIsc0JBQVlDLE9BQVosRUFBcUJDLFVBQXJCLEVBQWlDO0FBQUE7O0FBQUE7O0FBQy9COztBQUQrQixvRkFKekI7QUFDTkMsV0FBSyxFQUFFO0FBREQsS0FJeUI7O0FBQUEseUZBZ0JwQixnQkFBb0M7QUFBQSxVQUF6QkMsa0JBQXlCLFFBQWpDQyxNQUFpQzs7QUFDL0MsVUFBSUQsa0JBQWtCLENBQUNFLFNBQW5CLENBQTZCQyxRQUE3QixDQUFzQyxZQUF0QyxDQUFKLEVBQXlEO0FBQ3ZELFlBQU1DLE1BQU0sR0FBR0osa0JBQWtCLENBQUNLLE9BQW5CLENBQTJCLElBQTNCLENBQWY7QUFDQSxZQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsSUFBeEIsQ0FBaEI7QUFDQSxZQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixPQUFYLEVBQW9CSyxNQUFwQixDQUEyQixVQUFDQyxHQUFELEVBQU1DLFNBQU4sRUFBb0I7QUFDOUQsY0FBTUMsZUFBZSxHQUFHRCxTQUFTLENBQUNFLFlBQVYsQ0FBdUIsV0FBdkIsQ0FBeEI7QUFDQUgsYUFBRyxDQUFDRSxlQUFELENBQUgsR0FBdUJELFNBQVMsQ0FBQ0csV0FBakM7QUFDQSxpQkFBT0osR0FBUDtBQUNELFNBSmdCLEVBSWQsRUFKYyxDQUFqQjs7QUFLQSxjQUFLZCxVQUFMLENBQWdCbUIsTUFBaEIsQ0FBdUJULFFBQXZCO0FBQ0Q7QUFDRixLQTNCZ0M7O0FBQUEsdUZBNkJ0QjtBQUFBLHVQQVlELE1BQUtVLEtBQUwsQ0FBV25CLEtBQVgsQ0FBaUJvQixHQUFqQixDQUFxQixVQUFBQyxJQUFJO0FBQUEsc0ZBRUVBLElBQUksQ0FBQ0MsV0FBTCxFQUZGLDBEQUdDRCxJQUFJLENBQUNFLGNBQUwsRUFIRCw0REFJR0YsSUFBSSxDQUFDRyxRQUFMLEVBSkgsK0RBS01ILElBQUksQ0FBQ0ksZ0JBQUwsRUFMTjtBQUFBLE9BQXpCLEVBUUdDLElBUkgsQ0FRUSxFQVJSLENBWkMseUJBdUJELE1BQUtQLEtBQUwsQ0FBV25CLEtBQVgsQ0FBaUIyQixNQUFqQixLQUE0QixDQUE1QixHQUFnQywyRUFBaEMsR0FBOEcsRUF2QjdHO0FBQUEsS0E3QnNCOztBQUUvQixVQUFLNUIsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLNkIsV0FBTCxHQUFtQjlCLE9BQW5COztBQUVBLFVBQUsrQixXQUFMOztBQUwrQjtBQU1oQzs7OztrQ0FFYTtBQUNaLFdBQUtELFdBQUwsQ0FBaUJFLE9BQWpCLEdBQTJCLEtBQUtDLFVBQWhDO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtILFdBQUwsQ0FBaUJJLFNBQWpCLEdBQTZCLEtBQUtDLFFBQUwsRUFBN0I7QUFDRDs7OztFQW5CcUNDLHdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEM7QUFDQTs7SUFFcUJDLGM7Ozs7Ozs7Ozt3QkFDUkMsSyxFQUFPO0FBQ2hCQSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ2xDLE1BQXBCO0FBR0EsVUFBSW9DLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsU0FBaEIsRUFBSixFQUFpQztBQUVqQ0YsV0FBSyxDQUFDRyxhQUFOLENBQW9CLElBQUlDLEtBQUosQ0FBVSxrQkFBVixDQUFwQjtBQUVBLFVBQU1DLGVBQWUsR0FBRztBQUN0QkMsZ0JBQVEsRUFBRU4sS0FBSyxDQUFDTyxhQUFOLENBQW9CLDRCQUFwQixFQUFrREMsS0FEdEM7QUFFdEJDLFdBQUcsRUFBRVQsS0FBSyxDQUFDTyxhQUFOLENBQW9CLDJCQUFwQixFQUFpREMsS0FGaEM7QUFHdEJFLGFBQUssRUFBRVYsS0FBSyxDQUFDTyxhQUFOLENBQW9CLGdDQUFwQixFQUFzREMsS0FIdkM7QUFJdEJHLGFBQUssRUFBRVgsS0FBSyxDQUFDTyxhQUFOLENBQW9CLDZCQUFwQixFQUFtREM7QUFKcEMsT0FBeEI7QUFPQUksMkVBQVksQ0FDVEMsTUFESCxDQUNVUixlQURWLEVBRUdTLElBRkgsQ0FFUSxZQUFNO0FBQ1ZkLGFBQUssQ0FBQ0csYUFBTixDQUFvQixJQUFJQyxLQUFKLENBQVUsaUJBQVYsQ0FBcEI7QUFDQVcsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QjtBQUNELE9BTEg7QUFNRDs7OzhCQUVnQjtBQUNmLFVBQU1DLFVBQVUsR0FBRyxJQUFJM0QsOERBQUosQ0FBZXdELE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQlosYUFBaEIsQ0FBOEIsOEJBQTlCLENBQWYsRUFBOEVWLGNBQTlFLENBQW5CO0FBRUFlLDJFQUFZLENBQ1RRLHFCQURILEdBRUdOLElBRkgsQ0FFUSxVQUFDcEQsS0FBRCxFQUFXO0FBQ2Z3RCxrQkFBVSxDQUFDRyxRQUFYLENBQW9CO0FBQ2xCM0QsZUFBSyxFQUFMQTtBQURrQixTQUFwQjtBQUdELE9BTkg7QUFPRDs7OzJCQUVhcUIsSSxFQUFNO0FBQ2xCLFVBQU1tQyxVQUFVLEdBQUcsSUFBSTNELDhEQUFKLENBQWV3RCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JaLGFBQWhCLENBQThCLDhCQUE5QixDQUFmLEVBQThFVixjQUE5RSxDQUFuQjtBQUVBLFVBQU15QixnQkFBZ0IsR0FBRztBQUN2QmhCLGdCQUFRLEVBQUV2QixJQUFJLENBQUN3QyxJQURRO0FBRXZCZCxXQUFHLEVBQUUxQixJQUFJLENBQUMwQixHQUZhO0FBR3ZCQyxhQUFLLEVBQUUzQixJQUFJLENBQUN5QyxRQUhXO0FBSXZCYixhQUFLLEVBQUU1QixJQUFJLENBQUM0QjtBQUpXLE9BQXpCO0FBT0FDLDJFQUFZLENBQ1RhLFVBREgsQ0FDY0gsZ0JBRGQsRUFFR1IsSUFGSCxDQUVRRixxRUFBWSxDQUFDYyxNQUZyQixFQUdHWixJQUhILENBR1EsVUFBQ3BELEtBQUQsRUFBVztBQUNmd0Qsa0JBQVUsQ0FBQ0csUUFBWCxDQUFvQjtBQUNsQjNELGVBQUssRUFBTEE7QUFEa0IsU0FBcEI7QUFHRCxPQVBIO0FBUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFESDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTWlFLFlBQVksR0FBR1osTUFBTSxDQUFDSSxRQUFQLENBQWdCWixhQUFoQixDQUE4QixpQ0FBOUIsQ0FBckI7O0FBRUEsU0FBU3FCLHFCQUFULEdBQWlDO0FBQy9CRCxjQUFZLENBQUNwQixhQUFiLENBQTJCLDRCQUEzQixFQUF5RDFDLFNBQXpELENBQW1FZ0UsR0FBbkUsQ0FBdUUsVUFBdkU7QUFDQUYsY0FBWSxDQUFDcEIsYUFBYixDQUEyQiw0QkFBM0IsRUFBeUR1QixZQUF6RCxDQUFzRSxVQUF0RSxFQUFrRixNQUFsRjtBQUNEOztBQUVELFNBQVNDLG9CQUFULEdBQWdDO0FBQzlCSixjQUFZLENBQUNwQixhQUFiLENBQTJCLDRCQUEzQixFQUF5RDFDLFNBQXpELENBQW1FZSxNQUFuRSxDQUEwRSxVQUExRTtBQUNBK0MsY0FBWSxDQUFDcEIsYUFBYixDQUEyQiw0QkFBM0IsRUFBeUR5QixlQUF6RCxDQUF5RSxVQUF6RTtBQUNBTCxjQUFZLENBQUNNLEtBQWI7QUFDRDs7QUFFRE4sWUFBWSxDQUFDTyxnQkFBYixDQUE4QixrQkFBOUIsRUFBa0ROLHFCQUFsRDtBQUNBRCxZQUFZLENBQUNPLGdCQUFiLENBQThCLGlCQUE5QixFQUFpREgsb0JBQWpEO0FBR2U7QUFDYnZFLFNBQU8sRUFBRW1FLFlBREk7QUFFYlEsZUFBYSxFQUFFLElBQUlDLDREQUFKLENBQWtCVCxZQUFsQixFQUFnQ1UsNEVBQWhDO0FBRkYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBdEIsTUFBTSxDQUFDdUIsWUFBUCxHQUFzQjtBQUNwQkMsZ0JBQWMsRUFBRTFDLGtFQUFjQTtBQURWLENBQXRCLEM7Ozs7Ozs7Ozs7O0FDSEEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEsSUFBTXdDLHVCQUF1QixHQUFHO0FBQzlCZCxNQUFJLEVBQUUsY0FBQ2YsS0FBRCxFQUFRZ0MsUUFBUjtBQUFBLFdBQXFCQSxRQUFRLENBQ2hDQyxRQUR3QixDQUNmLE1BRGUsRUFDUGpDLEtBRE8sRUFFeEJrQyxVQUZ3QixDQUViLDRCQUZhLENBQXJCO0FBQUEsR0FEd0I7QUFJOUIvQixPQUFLLEVBQUUsZUFBQ0gsS0FBRCxFQUFRZ0MsUUFBUjtBQUFBLFdBQXFCQSxRQUFRLENBQ2pDQyxRQUR5QixDQUNoQixPQURnQixFQUNQakMsS0FETyxFQUV6QmtDLFVBRnlCLENBRWQsNkJBRmMsRUFHekJDLE9BSHlCLENBR2pCLDBCQUhpQixDQUFyQjtBQUFBLEdBSnVCO0FBUTlCbEMsS0FBRyxFQUFFLGFBQUNELEtBQUQsRUFBUWdDLFFBQVI7QUFBQSxXQUFxQkEsUUFBUSxDQUMvQkMsUUFEdUIsQ0FDZCxLQURjLEVBQ1BqQyxLQURPLEVBRXZCa0MsVUFGdUIsQ0FFWiwyQkFGWSxFQUd2QkUsS0FIdUIsQ0FHakIsa0NBSGlCLENBQXJCO0FBQUEsR0FSeUI7QUFZOUJwQixVQUFRLEVBQUUsa0JBQUNoQixLQUFELEVBQVFnQyxRQUFSO0FBQUEsV0FBcUJBLFFBQVEsQ0FDcENDLFFBRDRCLENBQ25CLFVBRG1CLEVBQ1BqQyxLQURPLEVBRTVCa0MsVUFGNEIsQ0FFakIsZ0NBRmlCLEVBRzVCRyxZQUg0QixDQUdmLEVBSGUsRUFHWCw0QkFIVyxDQUFyQjtBQUFBO0FBWm9CLENBQWhDO0FBa0JlUixzRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOztJQUVxQlMsSSxHQUNuQixvQkFLRztBQUFBOztBQUFBLE1BSkR4QyxRQUlDLFFBSkRBLFFBSUM7QUFBQSxNQUhERyxHQUdDLFFBSERBLEdBR0M7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxLQUNDLFFBRERBLEtBQ0M7O0FBQUE7O0FBQUEsdUNBU1c7QUFBQSxXQUFNLEtBQUksQ0FBQ0wsUUFBWDtBQUFBLEdBVFg7O0FBQUEsb0NBV1E7QUFBQSxXQUFNLEtBQUksQ0FBQ0ssS0FBWDtBQUFBLEdBWFI7O0FBQUEsa0NBYU07QUFBQSxXQUFNLEtBQUksQ0FBQ0YsR0FBTCxDQUFTc0MsUUFBVCxFQUFOO0FBQUEsR0FiTjs7QUFBQSwwQ0FlYztBQUFBLFdBQU0sS0FBSSxDQUFDdEMsR0FBTCxDQUFTdUMsZ0JBQVQsRUFBTjtBQUFBLEdBZmQ7O0FBQUEsb0NBaUJRO0FBQUEsV0FBTSxLQUFJLENBQUN0QyxLQUFMLENBQVd1QyxTQUFYLEVBQU47QUFBQSxHQWpCUjs7QUFBQSw0Q0FtQmdCO0FBQUEsV0FBTSxLQUFJLENBQUN2QyxLQUFMLENBQVd3QyxpQkFBWCxFQUFOO0FBQUEsR0FuQmhCOztBQUNELE9BQUs1QyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtHLEdBQUwsR0FBVyxJQUFJMEMseURBQUosQ0FBUTtBQUFFQyxjQUFVLEVBQUUzQztBQUFkLEdBQVIsQ0FBWDtBQUNBLE9BQUtDLEtBQUwsR0FBYSxJQUFJMkMsMkRBQUosQ0FBVTtBQUFFQyxVQUFNLEVBQUU1QztBQUFWLEdBQVYsQ0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBSyxDQUFDNEMsV0FBTixFQUFiO0FBRUFDLFFBQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ2hCSDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTTVDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNSLGVBQUQsRUFBcUI7QUFDbEMsTUFBTXRCLElBQUksR0FBRyxJQUFJK0Qsc0RBQUosQ0FBU3pDLGVBQVQsQ0FBYjtBQUNBLE1BQU1xRCxlQUFlLEdBQUcsSUFBSUMsMkVBQUosRUFBeEI7QUFDQSxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUJDLGNBQVUsQ0FBQztBQUFBLGFBQU1ELE9BQU8sQ0FBQ0gsZUFBZSxDQUFDSyxNQUFoQixDQUF1QmhGLElBQXZCLENBQUQsQ0FBYjtBQUFBLEtBQUQsRUFBOEMsSUFBOUMsQ0FBVjtBQUNELEdBRk0sQ0FBUDtBQUdELENBTkQ7O0FBUUEsSUFBTTJDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsTUFBTWdDLGVBQWUsR0FBRyxJQUFJQywyRUFBSixFQUF4QjtBQUVBLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixRQUFNRyxpQkFBaUIsR0FBR04sZUFBZSxDQUFDaEMsTUFBaEIsR0FBeUI1QyxHQUF6QixDQUE2QixVQUFBQyxJQUFJO0FBQUEsYUFBSSxJQUFJK0Qsc0RBQUosQ0FBUztBQUN0RXJDLFdBQUcsRUFBRTFCLElBQUksQ0FBQzBCLEdBRDREO0FBRXRFRSxhQUFLLEVBQUU1QixJQUFJLENBQUM0QixLQUYwRDtBQUd0RUwsZ0JBQVEsRUFBRXZCLElBQUksQ0FBQ2tGLElBSHVEO0FBSXRFdkQsYUFBSyxFQUFFM0IsSUFBSSxDQUFDMkI7QUFKMEQsT0FBVCxDQUFKO0FBQUEsS0FBakMsQ0FBMUI7QUFNQW1ELFdBQU8sQ0FBQ0csaUJBQUQsQ0FBUDtBQUNELEdBUk0sQ0FBUDtBQVNELENBWkQ7O0FBY0EsSUFBTTVDLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNsQyxNQUFNc0MsZUFBZSxHQUFHLElBQUlDLDJFQUFKLEVBQXhCO0FBQ0EsTUFBTU8sc0JBQXNCLEdBQUdSLGVBQWUsQ0FBQ2hDLE1BQWhCLEdBQXlCckMsTUFBekIsR0FBa0MsQ0FBakU7O0FBRUEsTUFBSTZFLHNCQUFKLEVBQTRCO0FBQzFCLFdBQU94QyxNQUFNLEVBQWI7QUFDRDs7QUFDRCxTQUFPeUMsZ0JBQWdCLEVBQXZCO0FBQ0QsQ0FSRDs7QUFVQSxTQUFTQSxnQkFBVCxHQUE0QjtBQUMxQixNQUFNVCxlQUFlLEdBQUcsSUFBSUMsMkVBQUosRUFBeEI7QUFDQSxTQUFPUyxLQUFLLENBQUMsMERBQUQsQ0FBTCxDQUNKdEQsSUFESSxDQUNDLFVBQUN1RCxRQUFELEVBQWM7QUFDbEIsUUFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO0FBQ2pCLFdBQU9GLFFBQVA7QUFDRCxHQUpJLEVBS0p2RCxJQUxJLENBS0MsVUFBQ3BELEtBQUQsRUFBVztBQUNmLFFBQU04RyxnQkFBZ0IsR0FBRzlHLEtBQUssQ0FBQ29CLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsYUFBSTJFLGVBQWUsQ0FBQ0ssTUFBaEIsQ0FBdUIsSUFBSWpCLHNEQUFKLENBQVM7QUFDekVyQyxXQUFHLEVBQUUxQixJQUFJLENBQUMwQixHQUQrRDtBQUV6RUUsYUFBSyxFQUFFNUIsSUFBSSxDQUFDNEIsS0FGNkQ7QUFHekVMLGdCQUFRLEVBQUV2QixJQUFJLENBQUNrRixJQUgwRDtBQUl6RXZELGFBQUssRUFBRTNCLElBQUksQ0FBQzJCO0FBSjZELE9BQVQsQ0FBdkIsQ0FBSjtBQUFBLEtBQWQsQ0FBekI7QUFNQSxXQUFPa0QsT0FBTyxDQUFDYSxHQUFSLENBQVlELGdCQUFaLENBQVA7QUFDRCxHQWJJLEVBY0oxRCxJQWRJLENBY0M7QUFBQSxXQUFNWSxNQUFNLEVBQVo7QUFBQSxHQWRELENBQVA7QUFlRDs7QUFFRCxTQUFTRCxVQUFULENBQW9CSCxnQkFBcEIsRUFBc0M7QUFDcEMsTUFBTW9DLGVBQWUsR0FBRyxJQUFJQywyRUFBSixFQUF4QjtBQUNBLE1BQU01RSxJQUFJLEdBQUcsSUFBSStELHNEQUFKLENBQVN4QixnQkFBVCxDQUFiO0FBQ0FvQyxpQkFBZSxDQUFDOUUsTUFBaEIsQ0FBdUJHLElBQXZCO0FBQ0EsU0FBTyxJQUFJNkUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QkEsV0FBTyxDQUFDO0FBQUVhLGFBQU8sRUFBRTtBQUFYLEtBQUQsQ0FBUDtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVjO0FBQ2I3RCxRQUFNLEVBQU5BLE1BRGE7QUFFYmEsUUFBTSxFQUFOQSxNQUZhO0FBR2JELFlBQVUsRUFBVkEsVUFIYTtBQUliTCx1QkFBcUIsRUFBckJBO0FBSmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNoRXFCK0IsRyxHQUNuQixtQkFBNEI7QUFBQTs7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7O0FBQUE7O0FBQUEsb0NBTWpCO0FBQUEsV0FBTSxLQUFJLENBQUNBLFVBQVg7QUFBQSxHQU5pQjs7QUFBQSw0Q0FRVCxZQUFNO0FBQ3ZCLFFBQU11QixRQUFRLEdBQUcsOEJBQWpCO0FBQ0EsV0FBTyxLQUFJLENBQUN2QixVQUFMLENBQWdCd0IsT0FBaEIsQ0FBd0JELFFBQXhCLEVBQWtDLFVBQUNFLFNBQUQsRUFBWUMsT0FBWixFQUFxQkMsT0FBckIsRUFBOEJDLFNBQTlCLEVBQXlDQyxLQUF6QztBQUFBLHVCQUFzREgsT0FBdEQsY0FBaUVDLE9BQWpFLGNBQTRFQyxTQUE1RSxjQUF5RkMsS0FBekY7QUFBQSxLQUFsQyxDQUFQO0FBQ0QsR0FYMkI7O0FBQzFCLE9BQUs3QixVQUFMLEdBQWtCQSxVQUFVLENBQUN3QixPQUFYLENBQW1CLElBQW5CLEVBQXlCLEVBQXpCLEVBQTZCQSxPQUE3QixDQUFxQyxLQUFyQyxFQUE0QyxFQUE1QyxDQUFsQjtBQUVBcEIsUUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTGtCSixLLEdBQ25CLHFCQUF3QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQTs7QUFBQSxxQ0FLWjtBQUFBLFdBQU0sS0FBSSxDQUFDQSxNQUFYO0FBQUEsR0FMWTs7QUFBQSw2Q0FPSjtBQUFBLFdBQU0sS0FBSSxDQUFDQSxNQUFMLENBQVlzQixPQUFaLENBQW9CLHdCQUFwQixFQUE4QyxVQUFDQyxTQUFELEVBQVlLLEdBQVosRUFBaUJDLGFBQWpCLEVBQWdDQyxhQUFoQyxFQUFrRDtBQUN4SCxVQUFJRixHQUFKLEVBQVMsaUJBQVVBLEdBQVYsY0FBaUJDLGFBQWpCLGNBQWtDQyxhQUFsQztBQUVULHVCQUFVRCxhQUFWLGNBQTJCQyxhQUEzQjtBQUNELEtBSnlCLENBQU47QUFBQSxHQVBJOztBQUN0QixPQUFLOUIsTUFBTCxHQUFjQSxNQUFNLENBQUNzQixPQUFQLENBQWUsSUFBZixFQUFxQixFQUFyQixDQUFkO0FBQ0FwQixRQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0prQjdELFMsR0FDbkIscUJBQWM7QUFBQTs7QUFBQTs7QUFBQSxvQ0FJSCxZQUFtQjtBQUFBLFFBQWxCeUYsUUFBa0IsdUVBQVAsRUFBTztBQUM1QkMseUJBQXFCLENBQUMsWUFBTTtBQUMxQixXQUFJLENBQUN6RyxLQUFMLHFCQUNLLEtBQUksQ0FBQ0EsS0FEVixFQUVLd0csUUFGTDs7QUFJQSxXQUFJLENBQUNFLE1BQUw7QUFDRCxLQU5vQixDQUFyQjtBQU9ELEdBWmE7O0FBQ1osTUFBSSxLQUFLMUcsS0FBVCxFQUFnQixLQUFLd0MsUUFBTDtBQUNqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0hrQm1FLFcsR0FDbkIsMkJBQXdDO0FBQUE7O0FBQUEsTUFBMUJoRCxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQmlELEtBQWdCLFFBQWhCQSxLQUFnQjtBQUFBLE1BQVRqRixNQUFTLFFBQVRBLEtBQVM7O0FBQUE7O0FBQUEsMkNBTXRCLFVBQUNrRixTQUFELEVBQVlDLGNBQVosRUFBNEJqQixPQUE1QixFQUF3QztBQUN4RCxRQUFJZ0IsU0FBSixFQUFlO0FBQ2IsV0FBSSxDQUFDbEQsUUFBTCxDQUFjb0QsUUFBZCxDQUF1QixLQUFJLENBQUNILEtBQTVCLEVBQW1DRSxjQUFuQyxFQUFtRGpCLE9BQW5EO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBSSxDQUFDbEMsUUFBTCxDQUFjcUQsV0FBZCxDQUEwQixLQUFJLENBQUNKLEtBQS9CLEVBQXNDRSxjQUF0QyxFQUFzRGpCLE9BQXREO0FBQ0Q7QUFDRixHQVp1Qzs7QUFBQSxzQ0FjM0IsWUFBd0M7QUFBQSxRQUF2Q0EsT0FBdUMsdUVBQTdCLHdCQUE2QjtBQUNuRCxRQUFNZ0IsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDbEYsS0FBTixJQUFlLEtBQUksQ0FBQ0EsS0FBTCxDQUFXbkIsTUFBWCxJQUFxQixDQUF0RDs7QUFFQSxTQUFJLENBQUN5RyxlQUFMLENBQXFCSixTQUFyQixFQUFnQyxZQUFoQyxFQUE4Q2hCLE9BQTlDOztBQUVBLFdBQU8sS0FBUDtBQUNELEdBcEJ1Qzs7QUFBQSxtQ0FzQjlCLFlBQXdDO0FBQUEsUUFBdkNBLE9BQXVDLHVFQUE3Qix3QkFBNkI7QUFDaEQsUUFBTXFCLGVBQWUsR0FBRyxJQUFJQyxNQUFKLENBQVcsZ0RBQVgsQ0FBeEI7QUFDQSxRQUFNTixTQUFTLEdBQUcsQ0FBQ0ssZUFBZSxDQUFDRSxJQUFoQixDQUFxQixLQUFJLENBQUN6RixLQUExQixDQUFuQjs7QUFDQSxTQUFJLENBQUNzRixlQUFMLENBQXFCSixTQUFyQixFQUFnQyxTQUFoQyxFQUEyQ2hCLE9BQTNDOztBQUVBLFdBQU8sS0FBUDtBQUNELEdBNUJ1Qzs7QUFBQSxpQ0E4QmhDLFlBQXNDO0FBQUEsUUFBckNBLE9BQXFDLHVFQUEzQixzQkFBMkI7QUFDNUMsUUFBTWdCLFNBQVMsR0FBRyxDQUFFLFVBQUNsRixLQUFELEVBQVc7QUFDN0IsVUFBSTBGLEdBQUcsR0FBRyxDQUFWO0FBQ0EsVUFBTUMsUUFBUSxHQUFHM0YsS0FBakI7QUFDQSxVQUFJMkYsUUFBUSxLQUFLLGFBQWpCLEVBQWdDLE9BQU8sS0FBUDs7QUFFaEMsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7QUFDOUJGLFdBQUcsSUFBSUcsUUFBUSxDQUFDRixRQUFRLENBQUNHLFNBQVQsQ0FBbUJGLENBQUMsR0FBRyxDQUF2QixFQUEwQkEsQ0FBMUIsQ0FBRCxFQUErQixFQUEvQixDQUFSLElBQThDLEtBQUtBLENBQW5ELENBQVA7QUFDRDs7QUFDRCxVQUFJRyxHQUFHLEdBQUlMLEdBQUcsR0FBRyxFQUFQLEdBQWEsRUFBdkI7QUFFQSxVQUFLSyxHQUFHLEtBQUssRUFBVCxJQUFpQkEsR0FBRyxLQUFLLEVBQTdCLEVBQWtDQSxHQUFHLEdBQUcsQ0FBTjtBQUNsQyxVQUFJQSxHQUFHLEtBQUtGLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxTQUFULENBQW1CLENBQW5CLEVBQXNCLEVBQXRCLENBQUQsRUFBNEIsRUFBNUIsQ0FBcEIsRUFBcUQsT0FBTyxLQUFQO0FBRXJESixTQUFHLEdBQUcsQ0FBTjs7QUFDQSxXQUFLLElBQUlFLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLElBQUksRUFBckIsRUFBeUJBLEVBQUMsSUFBSSxDQUE5QixFQUFpQztBQUMvQkYsV0FBRyxJQUFJRyxRQUFRLENBQUNGLFFBQVEsQ0FBQ0csU0FBVCxDQUFtQkYsRUFBQyxHQUFHLENBQXZCLEVBQTBCQSxFQUExQixDQUFELEVBQStCLEVBQS9CLENBQVIsSUFBOEMsS0FBS0EsRUFBbkQsQ0FBUDtBQUNEOztBQUNERyxTQUFHLEdBQUlMLEdBQUcsR0FBRyxFQUFQLEdBQWEsRUFBbkI7QUFFQSxVQUFLSyxHQUFHLEtBQUssRUFBVCxJQUFpQkEsR0FBRyxLQUFLLEVBQTdCLEVBQWtDQSxHQUFHLEdBQUcsQ0FBTjtBQUNsQyxVQUFJQSxHQUFHLEtBQUtGLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxTQUFULENBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLENBQUQsRUFBNkIsRUFBN0IsQ0FBcEIsRUFBc0QsT0FBTyxLQUFQO0FBQ3RELGFBQU8sSUFBUDtBQUNELEtBdEJrQixDQXNCaEIsS0FBSSxDQUFDOUYsS0F0QlcsQ0FBbkI7O0FBeUJBLFNBQUksQ0FBQ3NGLGVBQUwsQ0FBcUJKLFNBQXJCLEVBQWdDLE9BQWhDLEVBQXlDaEIsT0FBekM7O0FBRUEsV0FBTyxLQUFQO0FBQ0QsR0EzRHVDOztBQUFBLHdDQTZEekIsVUFBQzhCLFNBQUQsRUFBMkQ7QUFBQSxRQUEvQzlCLE9BQStDLG1HQUFoQjhCLFNBQWdCO0FBQ3hFLFFBQU1kLFNBQVMsR0FBRyxLQUFJLENBQUNsRixLQUFMLENBQVduQixNQUFYLEdBQW9CbUgsU0FBdEM7O0FBRUEsU0FBSSxDQUFDVixlQUFMLENBQXFCSixTQUFyQixFQUFnQyxjQUFoQyxFQUFnRGhCLE9BQWhEOztBQUVBLFdBQU8sS0FBUDtBQUNELEdBbkV1Qzs7QUFDdEMsT0FBS2UsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS2pELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS2hDLEtBQUwsR0FBYUEsTUFBYjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMSDs7SUFFcUJpRyxrQjs7Ozs7Ozs7b0NBQ1YsSUFBSUMsR0FBSixFOzt1Q0FXRyxZQUFNO0FBQ2hCLFVBQUlDLGlCQUFpQixHQUFHLEtBQXhCOztBQUNBLFdBQUksQ0FBQ0MsTUFBTCxDQUFZQyxPQUFaLENBQW9CLFVBQUNwQixLQUFELEVBQVc7QUFDN0IsWUFBSUEsS0FBSyxDQUFDcUIsSUFBTixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCSCwyQkFBaUIsR0FBRyxJQUFwQjtBQUNEO0FBQ0YsT0FKRDs7QUFLQSxhQUFPQSxpQkFBUDtBQUNELEs7O3NDQVFVLFVBQUNsQixLQUFELEVBQVFzQixJQUFSLEVBQWNyQyxPQUFkLEVBQTBCO0FBQ25DLFVBQU1zQyxRQUFRLEdBQUc7QUFDZnZCLGFBQUssRUFBTEEsS0FEZTtBQUVmc0IsWUFBSSxFQUFKQSxJQUZlO0FBR2ZyQyxlQUFPLEVBQVBBO0FBSGUsT0FBakI7O0FBS0EsV0FBSSxDQUFDdUMsZ0JBQUwsQ0FBc0J4QixLQUF0QixFQUE2QnlCLEdBQTdCLENBQWlDSCxJQUFqQyxFQUF1Q0MsUUFBdkM7QUFDRCxLOzt5Q0FFYSxVQUFDdkIsS0FBRCxFQUFRc0IsSUFBUixFQUFpQjtBQUM3QixVQUFJLEtBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0J4QixLQUF0QixDQUFKLEVBQWtDO0FBQ2hDLGFBQUksQ0FBQ3dCLGdCQUFMLENBQXNCeEIsS0FBdEIsRUFBNkIwQixNQUE3QixDQUFvQ0osSUFBcEM7QUFDRDtBQUNGLEs7Ozs7OzZCQXRDUXRCLEssRUFBT2pGLEssRUFBTztBQUNyQixXQUFLNEcsUUFBTCxDQUFjM0IsS0FBZDtBQUNBLGFBQU8sSUFBSUQsb0RBQUosQ0FBZ0I7QUFBRWhELGdCQUFRLEVBQUUsSUFBWjtBQUFrQmlELGFBQUssRUFBTEEsS0FBbEI7QUFBeUJqRixhQUFLLEVBQUxBO0FBQXpCLE9BQWhCLENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLb0csTUFBWjtBQUNEOzs7NkJBWVFuQixLLEVBQU87QUFDZCxVQUFJLENBQUMsS0FBS21CLE1BQUwsQ0FBWVMsR0FBWixDQUFnQjVCLEtBQWhCLENBQUwsRUFBNkI7QUFDM0IsYUFBS21CLE1BQUwsQ0FBWU0sR0FBWixDQUFnQnpCLEtBQWhCLEVBQXVCLElBQUlpQixHQUFKLEVBQXZCO0FBQ0Q7QUFDRjs7O3FDQWtCZ0JqQixLLEVBQU87QUFDdEIsYUFBTyxLQUFLbUIsTUFBTCxDQUFZUyxHQUFaLENBQWdCNUIsS0FBaEIsQ0FBUDtBQUNEOzs7aUNBRVlBLEssRUFBTztBQUNsQixVQUFNNkIsV0FBVyxHQUFHLEtBQUtWLE1BQUwsQ0FBWVMsR0FBWixDQUFnQjVCLEtBQWhCLENBQXBCO0FBQ0EsVUFBSTZCLFdBQUosRUFBaUIsT0FBT0EsV0FBVyxDQUFDUixJQUFaLEtBQXFCLENBQTVCO0FBRWpCLGFBQU8sS0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdkRrQlMsa0I7OztBQUduQixvQ0FLRztBQUFBOztBQUFBLFFBSkRDLGdCQUlDLFFBSkRBLGdCQUlDO0FBQUEsUUFIREMsYUFHQyxRQUhEQSxhQUdDO0FBQUEsUUFGREMsa0JBRUMsUUFGREEsa0JBRUM7QUFBQSxRQUREQyxlQUNDLFFBRERBLGVBQ0M7O0FBQUE7O0FBQUEseUNBUFcsS0FPWDs7QUFBQSxzQ0FlUSxZQUFNO0FBQ2YsV0FBSSxDQUFDQyxVQUFMOztBQUNBLFdBQUksQ0FBQ0MsMkJBQUw7O0FBQ0EsV0FBSSxDQUFDQyx5QkFBTDs7QUFDQSxXQUFJLENBQUNDLFlBQUw7QUFDRCxLQXBCRTs7QUFBQSx3Q0FzQlUsWUFBTTtBQUNqQixXQUFJLENBQUNKLGVBQUwsQ0FBcUIsS0FBSSxDQUFDSCxnQkFBTCxDQUFzQmhILEtBQTNDLEVBQWtELEtBQUksQ0FBQ2tILGtCQUF2RDtBQUNELEtBeEJFOztBQUFBLDBDQTJDWSxZQUFNO0FBQ25CLFVBQUksS0FBSSxDQUFDTSxXQUFULEVBQXNCO0FBQ3BCLFlBQU1DLGlCQUFpQixHQUFHLEtBQUksQ0FBQ1Asa0JBQUwsQ0FBd0JULGdCQUF4QixDQUF5QyxLQUFJLENBQUNRLGFBQTlDLENBQTFCOztBQUNBLFlBQU1iLE1BQU0sR0FBR3hJLEtBQUssQ0FBQ0MsSUFBTixDQUFXNEosaUJBQWlCLENBQUNDLE1BQWxCLEVBQVgsS0FBMEMsRUFBekQ7QUFDQSxZQUFNQyxVQUFVLEdBQUd2QixNQUFNLENBQUMsQ0FBRCxDQUFOLElBQWEsRUFBaEM7QUFDQSxhQUFJLENBQUN3Qix1QkFBTCxDQUE2QjFJLFNBQTdCLGFBQTRDeUksVUFBVSxDQUFDekQsT0FBdkQ7QUFDRDtBQUNGLEtBbERFOztBQUFBLHFDQW9ETztBQUFBLGFBQU0sS0FBSSxDQUFDZ0Qsa0JBQUwsQ0FBd0JXLFlBQXhCLENBQXFDLEtBQUksQ0FBQ1osYUFBMUMsQ0FBTjtBQUFBLEtBcERQOztBQUFBLHVDQXNEUztBQUFBLGFBQU0sQ0FBQyxLQUFJLENBQUNhLE9BQUwsRUFBUDtBQUFBLEtBdERUOztBQUFBLDhDQXdEZ0IsWUFBTTtBQUN2QixXQUFJLENBQUNkLGdCQUFMLENBQXNCdkgsU0FBdEIsR0FBa0M7QUFDaEN3QyxnQkFBUSxFQUFFLEtBQUksQ0FBQ0E7QUFEaUIsT0FBbEM7O0FBR0EsV0FBSSxDQUFDOEYsNEJBQUw7QUFDRCxLQTdERTs7QUFBQSwwREErRDRCLFlBQU07QUFDbkMsV0FBSSxDQUFDZixnQkFBTCxDQUFzQmdCLGtCQUF0QixDQUF5QyxVQUF6QyxFQUFxRCw4QkFBckQ7O0FBQ0EsV0FBSSxDQUFDSix1QkFBTCxHQUErQixLQUFJLENBQUNaLGdCQUFMLENBQXNCaUIsVUFBdEIsQ0FBaUNsSSxhQUFqQyxDQUErQyxTQUEvQyxDQUEvQjtBQUNELEtBbEVFOztBQUNELFNBQUtpSCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFFQSxTQUFLZSxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLQyxnQkFBTDtBQUNBLFdBQUtsRyxRQUFMO0FBQ0EsV0FBS3VGLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7O2tEQWE2QjtBQUM1QixVQUFJLEtBQUs5SCxTQUFMLE1BQW9CLEtBQUs4SCxXQUE3QixFQUEwQztBQUN4QyxhQUFLUixnQkFBTCxDQUFzQjNKLFNBQXRCLENBQWdDZ0UsR0FBaEMsQ0FBb0MsVUFBcEM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLMkYsZ0JBQUwsQ0FBc0IzSixTQUF0QixDQUFnQ2UsTUFBaEMsQ0FBdUMsVUFBdkM7QUFDRDtBQUNGOzs7Z0RBRTJCO0FBQUEsVUFDbEI0QixLQURrQixHQUNSLEtBQUtnSCxnQkFERyxDQUNsQmhILEtBRGtCOztBQUUxQixVQUFJQSxLQUFKLEVBQVc7QUFDVCxhQUFLZ0gsZ0JBQUwsQ0FBc0IzSixTQUF0QixDQUFnQ2dFLEdBQWhDLENBQW9DLFFBQXBDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSzJGLGdCQUFMLENBQXNCM0osU0FBdEIsQ0FBZ0NlLE1BQWhDLENBQXVDLFFBQXZDO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREg7QUFDQTs7SUFFcUJ3RCxhLEdBR25CLHVCQUFZVCxZQUFaLEVBQTBCaUgsY0FBMUIsRUFBMEM7QUFBQTs7QUFBQTs7QUFBQSw2Q0FGdEIsRUFFc0I7O0FBQUEsbUNBVWhDO0FBQUEsV0FBTSxDQUFDLEtBQUksQ0FBQzFJLFNBQUwsRUFBUDtBQUFBLEdBVmdDOztBQUFBLHFDQVk5QixZQUFNO0FBQ2hCLFNBQUksQ0FBQzJJLDRCQUFMOztBQUNBLFdBQU8sS0FBSSxDQUFDbkIsa0JBQUwsQ0FBd0JvQixTQUF4QixFQUFQO0FBQ0QsR0FmeUM7O0FBQUEscURBaUJkLFlBQU07QUFDaEMsUUFBTUMscUJBQXFCLEdBQUd2RixNQUFNLENBQUN3RixJQUFQLENBQVksS0FBSSxDQUFDSixjQUFqQixDQUE5QjtBQUVBRyx5QkFBcUIsQ0FBQ2xDLE9BQXRCLENBQThCLFVBQUNvQyxTQUFELEVBQWU7QUFDM0MsVUFBTUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDQyxXQUFMLENBQWlCNUksYUFBakIsbUJBQXlDMEksU0FBekMsU0FBMUI7O0FBQ0EsVUFBTUcsa0JBQWtCLEdBQUcsSUFBSTdCLDJEQUFKLENBQXVCO0FBQ2hEQyx3QkFBZ0IsRUFBRTBCLGlCQUQ4QjtBQUVoRHpCLHFCQUFhLEVBQUV3QixTQUZpQztBQUdoRHZCLDBCQUFrQixFQUFFLEtBQUksQ0FBQ0Esa0JBSHVCO0FBSWhEQyx1QkFBZSxFQUFFLEtBQUksQ0FBQ2lCLGNBQUwsQ0FBb0JLLFNBQXBCO0FBSitCLE9BQXZCLENBQTNCOztBQU1BLFdBQUksQ0FBQ0ksaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCRixrQkFBNUI7QUFDRCxLQVREO0FBVUQsR0E5QnlDOztBQUFBLDRDQWdDdkIsWUFBTTtBQUN2QixTQUFJLENBQUNELFdBQUwsQ0FBaUJsSixTQUFqQixHQUE2QjtBQUMzQnFJLGFBQU8sRUFBRSxLQUFJLENBQUNBLE9BRGE7QUFFM0JwSSxlQUFTLEVBQUUsS0FBSSxDQUFDQSxTQUZXO0FBRzNCcUosV0FBSyxFQUFFLEtBQUksQ0FBQ0E7QUFIZSxLQUE3Qjs7QUFNQSxTQUFJLENBQUNKLFdBQUwsQ0FBaUJqSCxnQkFBakIsQ0FBa0MsUUFBbEMsRUFBNEMsS0FBSSxDQUFDc0gsd0JBQWpEOztBQUNBLFNBQUksQ0FBQ0wsV0FBTCxDQUFpQmpILGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxLQUFJLENBQUNzSCx3QkFBaEQ7O0FBQ0EsU0FBSSxDQUFDTCxXQUFMLENBQWlCakgsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLEtBQUksQ0FBQ3FILEtBQWhEO0FBQ0QsR0ExQ3lDOztBQUFBLG9EQTRDZixnQkFBa0M7QUFBQSxRQUF2Qi9CLGdCQUF1QixRQUEvQjVKLE1BQStCO0FBQzNENEosb0JBQWdCLENBQUN2SCxTQUFqQixDQUEyQndDLFFBQTNCO0FBQ0QsR0E5Q3lDOztBQUFBLHdEQWdEWCxZQUFNO0FBQ25DLFNBQUksQ0FBQzRHLGlCQUFMLENBQXVCeEMsT0FBdkIsQ0FBK0IsVUFBQ1csZ0JBQUQsRUFBc0I7QUFDbkRBLHNCQUFnQixDQUFDL0UsUUFBakI7QUFDRCxLQUZEO0FBR0QsR0FwRHlDOztBQUFBLGlDQXNEbEMsWUFBTTtBQUNaLFNBQUksQ0FBQ2lGLGtCQUFMLEdBQTBCLElBQUlqQix3REFBSixFQUExQjtBQUNELEdBeER5Qzs7QUFDeEMsT0FBS2lCLGtCQUFMLEdBQTBCLElBQUlqQix3REFBSixFQUExQjtBQUVBLE9BQUswQyxXQUFMLEdBQW1CeEgsWUFBbkI7QUFDQSxPQUFLZ0gsZ0JBQUw7QUFFQSxPQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLE9BQUthLHlCQUFMO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkSCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMxQixNQUFJRCxDQUFDLElBQUlDLENBQUwsSUFBVSxRQUFPRCxDQUFQLE1BQWEsUUFBdkIsSUFBbUMsUUFBT0MsQ0FBUCxNQUFhLFFBQXBELEVBQThEO0FBQzVELFFBQUlwRyxNQUFNLENBQUN3RixJQUFQLENBQVlXLENBQVosRUFBZXRLLE1BQWYsS0FBMEJtRSxNQUFNLENBQUN3RixJQUFQLENBQVlZLENBQVosRUFBZXZLLE1BQTdDLEVBQXFELE9BQU8sS0FBUDtBQUNyRCxRQUFNd0ssS0FBSyxHQUFHckcsTUFBTSxDQUFDd0YsSUFBUCxDQUFZVyxDQUFaLENBQWQ7QUFDQSxXQUFPRSxLQUFLLENBQUN2TCxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNdUwsR0FBTixFQUFjO0FBQ2hDLFVBQUksQ0FBQ0osU0FBUyxDQUFDQyxDQUFDLENBQUNHLEdBQUQsQ0FBRixFQUFTRixDQUFDLENBQUNFLEdBQUQsQ0FBVixDQUFWLElBQThCdkwsR0FBRyxLQUFLLEtBQTFDLEVBQWlELE9BQU8sS0FBUDtBQUVqRCxhQUFPLElBQVA7QUFDRCxLQUpNLEVBSUosSUFKSSxDQUFQO0FBS0Q7O0FBRUQsU0FBT29MLENBQUMsS0FBS0MsQ0FBYjtBQUNELENBWkQ7O0FBY2VGLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7SUFFcUIvRixlOzs7OzsrQkFDYixPOzttREFFb0I7QUFBQSxXQUFNb0csSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFJLENBQUNKLEdBQTFCLENBQVgsS0FBOEMsRUFBcEQ7QUFBQSxHOztpREFFRixVQUFBSyxJQUFJO0FBQUEsV0FBSUYsWUFBWSxDQUFDRyxPQUFiLENBQXFCLEtBQUksQ0FBQ04sR0FBMUIsRUFBK0JDLElBQUksQ0FBQ00sU0FBTCxDQUFlRixJQUFmLENBQS9CLENBQUo7QUFBQSxHOztrQ0FFbkI7QUFBQSxXQUFNLEtBQUksQ0FBQ0csdUJBQUwsRUFBTjtBQUFBLEc7O2tDQUVBLFVBQUN2TCxJQUFELEVBQVU7QUFDakIsUUFBTXdMLFdBQVcsR0FBRyxLQUFJLENBQUM3SSxNQUFMLEVBQXBCOztBQUNBLFFBQUkzQyxJQUFJLENBQUNDLFdBQVQsRUFBc0I7QUFDcEJ1TCxpQkFBVyxDQUFDakIsSUFBWixDQUFpQjtBQUNmckYsWUFBSSxFQUFFbEYsSUFBSSxDQUFDQyxXQUFMLEVBRFM7QUFFZnlCLFdBQUcsRUFBRTFCLElBQUksQ0FBQ3lMLE1BQUwsRUFGVTtBQUdmOUosYUFBSyxFQUFFM0IsSUFBSSxDQUFDMEwsUUFBTCxFQUhRO0FBSWY5SixhQUFLLEVBQUU1QixJQUFJLENBQUNHLFFBQUw7QUFKUSxPQUFqQjtBQU1EOztBQUVELFdBQU8sSUFBSTBFLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVU2RyxNQUFWLEVBQXFCO0FBQ3RDLFVBQUk7QUFDRixhQUFJLENBQUNDLHFCQUFMLENBQTJCSixXQUEzQjs7QUFDQTFHLGVBQU8sQ0FBQztBQUFFYSxpQkFBTyxFQUFFO0FBQVgsU0FBRCxDQUFQO0FBQ0QsT0FIRCxDQUdFLE9BQU9rRyxHQUFQLEVBQVk7QUFDWkYsY0FBTSxDQUFDRSxHQUFELENBQU47QUFDRDtBQUNGLEtBUE0sQ0FBUDtBQVFELEc7O2tDQUVRLFVBQUNDLGFBQUQsRUFBbUI7QUFDMUIsUUFBTUMsa0JBQWtCLEdBQUc7QUFDekI3RyxVQUFJLEVBQUU0RyxhQUFhLENBQUM3TCxXQUFkLEVBRG1CO0FBRXpCeUIsU0FBRyxFQUFFb0ssYUFBYSxDQUFDTCxNQUFkLEVBRm9CO0FBR3pCOUosV0FBSyxFQUFFbUssYUFBYSxDQUFDSixRQUFkLEVBSGtCO0FBSXpCOUosV0FBSyxFQUFFa0ssYUFBYSxDQUFDM0wsUUFBZDtBQUprQixLQUEzQjs7QUFNQSxRQUFNcUwsV0FBVyxHQUFHLEtBQUksQ0FBQzdJLE1BQUwsRUFBcEI7O0FBQ0EsUUFBTXFKLGtCQUFrQixHQUFHUixXQUFXLENBQ25DUyxNQUR3QixDQUNqQixVQUFBQyxXQUFXO0FBQUEsYUFBSSxDQUFDdkIsMERBQVMsQ0FBQ3VCLFdBQUQsRUFBY0gsa0JBQWQsQ0FBZDtBQUFBLEtBRE0sQ0FBM0I7O0FBR0EsU0FBSSxDQUFDSCxxQkFBTCxDQUEyQkksa0JBQTNCO0FBQ0QsRyIsImZpbGUiOiJqcy9jYWRhc3Ryby9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vaW5mcmEvQ29tcG9uZW50JztcbmltcG9ydCAnLi9Vc2Vyc1RhYmxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdLFxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udHJvbGxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLmJhc2VFbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcbiAgfVxuXG4gIHNldHVwRXZlbnRzKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQub25jbGljayA9IHRoaXMucmVtb3ZlVXNlcjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmJhc2VFbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoKTtcbiAgfVxuXG4gIHJlbW92ZVVzZXIgPSAoeyB0YXJnZXQ6IGNsaWNrVGFyZ2V0RWxlbWVudCB9KSA9PiB7XG4gICAgaWYgKGNsaWNrVGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1yZW1vdmUnKSkge1xuICAgICAgY29uc3QgdXNlclRyID0gY2xpY2tUYXJnZXRFbGVtZW50LmNsb3Nlc3QoJ3RyJyk7XG4gICAgICBjb25zdCB1c2VyVGRzID0gdXNlclRyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IEFycmF5LmZyb20odXNlclRkcykucmVkdWNlKChhY2MsIGN1cnJlbnRUZCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0YVR5cGUgPSBjdXJyZW50VGQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgYWNjW2N1cnJlbnREYXRhVHlwZV0gPSBjdXJyZW50VGQudGV4dENvbnRlbnQ7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIucmVtb3ZlKHVzZXJEYXRhKTtcbiAgICB9XG4gIH1cblxuICB0ZW1wbGF0ZSA9ICgpID0+IGBcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLm1hcCh1c2VyID0+IGBcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJub21lXCI+JHt1c2VyLmdldEZ1bGxOYW1lKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiY3BmXCI+JHt1c2VyLmdldENQRkZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiZW1haWxcIj4ke3VzZXIuZ2V0RW1haWwoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJ0ZWxlZm9uZVwiPiR7dXNlci5nZXRQaG9uZUZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0bi1yZW1vdmVcIj5SZW1vdmVyPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGApLmpvaW4oJycpXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLmxlbmd0aCA9PT0gMCA/ICc8dHI+PHRkIGNvbHNwYW49XCI0XCIgYWxpZ249XCJjZW50ZXJcIj5OZW5odW0gdXN1w6FyaW8gZW5jb250cmFkbyA6KDwvdGQ+PC90cj4nIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIGBcbn1cbiIsImltcG9ydCBVc2Vyc1NlcnZpY2UgZnJvbSAnLi4vLi4vZG9tYWluL3NlcnZpY2VzL1VzZXJzU2VydmljZSc7XG5pbXBvcnQgVXNlcnNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzVGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHN0YXRpYyBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0O1xuXG5cbiAgICBpZiAoJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKSByZXR1cm47XG5cbiAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGluZycpKTtcblxuICAgIGNvbnN0IGZvcm1FbGVtZW50c0RUTyA9IHtcbiAgICAgIGZ1bGxOYW1lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXROb21lXCJdJykudmFsdWUsXG4gICAgICBjcGY6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dENQRlwiXScpLnZhbHVlLFxuICAgICAgcGhvbmU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dFRlbGVmb25lXCJdJykudmFsdWUsXG4gICAgICBlbWFpbDogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0RW1haWxcIl0nKS52YWx1ZSxcbiAgICB9O1xuXG4gICAgVXNlcnNTZXJ2aWNlXG4gICAgICAuYWRkTmV3KGZvcm1FbGVtZW50c0RUTylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93QWxsKCkge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIFVzZXJzU2VydmljZVxuICAgICAgLmdldEFsbFdpdGhJbml0aWFsRGF0YSgpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKHVzZXIpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCByZW1vdmFibGVVc2VyRFRPID0ge1xuICAgICAgZnVsbE5hbWU6IHVzZXIubm9tZSxcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBwaG9uZTogdXNlci50ZWxlZm9uZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH07XG5cbiAgICBVc2Vyc1NlcnZpY2VcbiAgICAgIC5kZWxldGVVc2VyKHJlbW92YWJsZVVzZXJEVE8pXG4gICAgICAudGhlbihVc2Vyc1NlcnZpY2UuZ2V0QWxsKVxuICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgIHVzZXJzVGFibGUuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi8uLi8uLi8uLi9pbmZyYS9Gb3JtVmFsaWRhdG9yJztcbmltcG9ydCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSBmcm9tICcuLi8uLi8uLi92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYSc7XG5cbmNvbnN0ICRmb3JtRWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybUFkZFVzdWFyaW9cIl0nKTtcblxuZnVuY3Rpb24gc3RhcnRCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLmNsYXNzTGlzdC5hZGQoJy1sb2FkaW5nJyk7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3BCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLmNsYXNzTGlzdC5yZW1vdmUoJy1sb2FkaW5nJyk7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAkZm9ybUVsZW1lbnQucmVzZXQoKTtcbn1cblxuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRpbmcnLCBzdGFydEJ0blN1Ym1pdExvYWRpbmcpO1xuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRlZCcsIHN0b3BCdG5TdWJtaXRMb2FkaW5nKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVsZW1lbnQ6ICRmb3JtRWxlbWVudCxcbiAgZm9ybVZhbGlkYXRvcjogbmV3IEZvcm1WYWxpZGF0b3IoJGZvcm1FbGVtZW50LCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSksXG59O1xuIiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInO1xuaW1wb3J0ICcuL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvJztcblxud2luZG93LnBhZ2VDYWRhc3RybyA9IHtcbiAgdXNlckNvbnRyb2xsZXI6IFVzZXJDb250cm9sbGVyLFxufTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgPSB7XG4gIG5vbWU6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdub21lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gbm9tZSDDqSBvYnJpZ2F0w7NyaW8nKSxcbiAgZW1haWw6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdlbWFpbCcsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIGVtYWlsIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmlzRW1haWwoJ0luZm9ybWUgdW0gZS1tYWlsIHbDoWxpZG8nKSxcbiAgY3BmOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnY3BmJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gQ1BGIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmlzQ1BGKCdQb3IgZmF2b3IsIGluZm9ybWUgdW0gQ1BGIHbDoWxpZG8nKSxcbiAgdGVsZWZvbmU6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCd0ZWxlZm9uZScsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIHRlbGVmb25lIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmhhc01pbkxlbmd0aCgxMCwgJ0luZm9ybWUgdW0gdGVsZWZvbmUgdsOhbGlkbycpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3VXNlclZhbGlkYXRpb25TY2hlbWE7XG4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCIvKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFtcImVycm9yXCIsIHsgXCJmdW5jdGlvbnNcIjogZmFsc2UgfV0gKi9cbmltcG9ydCBVc2VyIGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IFVzZXJzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9pbmZyYS9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5JztcblxuY29uc3QgYWRkTmV3ID0gKGZvcm1FbGVtZW50c0RUTykgPT4ge1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKTtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodXNlcnNSZXBvc2l0b3J5Lmluc2VydCh1c2VyKSksIDEwMDApO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldEFsbCA9ICgpID0+IHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RPZkRvbWFpblVzZXJzID0gdXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLm1hcCh1c2VyID0+IG5ldyBVc2VyKHtcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShsaXN0T2ZEb21haW5Vc2Vycyk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWxsV2l0aEluaXRpYWxEYXRhID0gKCkgPT4ge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkgPSB1c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubGVuZ3RoID4gMDtcblxuICBpZiAoaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSkge1xuICAgIHJldHVybiBnZXRBbGwoKTtcbiAgfVxuICByZXR1cm4gZ2V0RXh0ZXJuYWxVc2VycygpO1xufTtcblxuZnVuY3Rpb24gZ2V0RXh0ZXJuYWxVc2VycygpIHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vcHJpdmF0ZS0yMWU4ZGUtcmFmYWVsbHVjaW8uYXBpYXJ5LW1vY2suY29tL3VzZXJzJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KVxuICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgY29uc3QgYWRkVXNlcnNQcm9taXNlcyA9IHVzZXJzLm1hcCh1c2VyID0+IHVzZXJzUmVwb3NpdG9yeS5pbnNlcnQobmV3IFVzZXIoe1xuICAgICAgICBjcGY6IHVzZXIuY3BmLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgcGhvbmU6IHVzZXIucGhvbmUsXG4gICAgICB9KSkpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFkZFVzZXJzUHJvbWlzZXMpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gZ2V0QWxsKCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVVc2VyKHJlbW92YWJsZVVzZXJEVE8pIHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIocmVtb3ZhYmxlVXNlckRUTyk7XG4gIHVzZXJzUmVwb3NpdG9yeS5yZW1vdmUodXNlcik7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmUoeyBtZXNzYWdlOiAncmVtb3ZlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGROZXcsXG4gIGdldEFsbCxcbiAgZGVsZXRlVXNlcixcbiAgZ2V0QWxsV2l0aEluaXRpYWxEYXRhLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgQ1BGTnVtYmVycyB9KSB7XG4gICAgdGhpcy5DUEZOdW1iZXJzID0gQ1BGTnVtYmVycy5yZXBsYWNlKC8tL2csICcnKS5yZXBsYWNlKC9cXC4vZywgJycpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgcmV0dXJuIHRoaXMuQ1BGTnVtYmVycy5yZXBsYWNlKENQRlJlZ2V4LCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlci5yZXBsYWNlKC8tL2csICcnKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyID0gKCkgPT4gdGhpcy5udW1iZXI7XG5cbiAgZ2V0TnVtYmVyRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLm51bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgaWYgKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcblxuICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0aGlzLnN0YXRlKSB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBzZXRTdGF0ZSA9IChuZXdTdGF0ZSA9IHt9KSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25zIHtcbiAgY29uc3RydWN0b3IoeyBjb250cmFjdCwgcGFyYW0sIHZhbHVlIH0pIHtcbiAgICB0aGlzLnBhcmFtID0gcGFyYW07XG4gICAgdGhpcy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFwcGx5VmFsaWRhdGlvbiA9IChjb25kaXRpb24sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKSA9PiB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgdGhpcy5jb250cmFjdC5zZXRFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJhY3QucmVtb3ZlRXJyb3IodGhpcy5wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQgPSAobWVzc2FnZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IDA7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc1JlcXVpcmVkJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRW1haWwgPSAobWVzc2FnZSA9ICdFbWFpbCBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IHJlZ2V4RW1haWxWYWxpZCA9IG5ldyBSZWdFeHAoL15cXHcrKFstKy4nXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSokLyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXJlZ2V4RW1haWxWYWxpZC50ZXN0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzRW1haWwnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNDUEYgPSAobWVzc2FnZSA9ICdDUEYgbXVzdCB0byBiZSB2YWxpZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhKCh2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICBjb25zdCBjcGZWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGNwZlZhbHVlID09PSAnMDAwMDAwMDAwMDAnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gICAgICB9XG4gICAgICBsZXQgbW9kID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gICAgICBpZiAoKG1vZCA9PT0gMTApIHx8IChtb2QgPT09IDExKSkgbW9kID0gMDtcbiAgICAgIGlmIChtb2QgIT09IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyg5LCAxMCksIDEwKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBzdW0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDEyIC0gaSk7XG4gICAgICB9XG4gICAgICBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDEwLCAxMSksIDEwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkodGhpcy52YWx1ZSk7XG5cblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzQ1BGJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc01pbkxlbmd0aCA9IChtaW5MZW5ndGgsIG1lc3NhZ2UgPSBgTWluaW1hbCBsZW5naHQgaXMgJHttaW5MZW5ndGh9YCkgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMudmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoO1xuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaGFzTWluTGVuZ3RoJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25zIGZyb20gJy4vVmFsaWRhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uQ29udHJhY3Qge1xuICBlcnJvcnMgPSBuZXcgTWFwKClcblxuICB2YWxpZGF0ZShwYXJhbSwgdmFsdWUpIHtcbiAgICB0aGlzLnNldFBhcmFtKHBhcmFtKTtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25zKHsgY29udHJhY3Q6IHRoaXMsIHBhcmFtLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnM7XG4gIH1cblxuICBoYXNFcnJvcnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRyYWN0SXNJbnZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvcnMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgIGlmIChwYXJhbS5zaXplID09PSAxKSB7XG4gICAgICAgIGNvbnRyYWN0SXNJbnZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29udHJhY3RJc0ludmFsaWQ7XG4gIH1cblxuICBzZXRQYXJhbShwYXJhbSkge1xuICAgIGlmICghdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKSkge1xuICAgICAgdGhpcy5lcnJvcnMuc2V0KHBhcmFtLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yID0gKHBhcmFtLCB0eXBlLCBtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgZXJyb3JPYmogPSB7XG4gICAgICBwYXJhbSxcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgIH07XG4gICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5zZXQodHlwZSwgZXJyb3JPYmopO1xuICB9XG5cbiAgcmVtb3ZlRXJyb3IgPSAocGFyYW0sIHR5cGUpID0+IHtcbiAgICBpZiAodGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSkge1xuICAgICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5kZWxldGUodHlwZSk7XG4gICAgfVxuICB9XG5cblxuICBnZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gIH1cblxuICBpc1ZhbGlkUGFyYW0ocGFyYW0pIHtcbiAgICBjb25zdCBwYXJhbUVycm9ycyA9IHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gICAgaWYgKHBhcmFtRXJyb3JzKSByZXR1cm4gcGFyYW1FcnJvcnMuc2l6ZSA9PT0gMDtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkVmFsaWRhdG9yIHtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmb3JtRmllbGRFbGVtZW50LFxuICAgIGZvcm1GaWVsZE5hbWUsXG4gICAgdmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgIGZpZWxkVmFsaWRhdGlvbixcbiAgfSkge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudCA9IGZvcm1GaWVsZEVsZW1lbnQ7XG4gICAgdGhpcy5mb3JtRmllbGROYW1lID0gZm9ybUZpZWxkTmFtZTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IHZhbGlkYXRpb25Db250cmFjdDtcbiAgICB0aGlzLmZpZWxkVmFsaWRhdGlvbiA9IGZpZWxkVmFsaWRhdGlvbjtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb24oKTtcbiAgICB0aGlzLnVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlRXJyb3JzKCk7XG4gIH1cblxuICB2YWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uKHRoaXMuZm9ybUZpZWxkRWxlbWVudC52YWx1ZSwgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QpO1xuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCkge1xuICAgIGlmICh0aGlzLmlzSW52YWxpZCgpICYmIHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdHlwZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10eXBlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUVycm9ycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgZXJyb3JzT2ZUaGlzUGFyYW0gPSB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5nZXRFcnJvcnNCeVBhcmFtKHRoaXMuZm9ybUZpZWxkTmFtZSk7XG4gICAgICBjb25zdCBlcnJvcnMgPSBBcnJheS5mcm9tKGVycm9yc09mVGhpc1BhcmFtLnZhbHVlcygpKSB8fCBbXTtcbiAgICAgIGNvbnN0IGZpcnN0RXJyb3IgPSBlcnJvcnNbMF0gfHwge307XG4gICAgICB0aGlzLmZvcm1FbGVtZW50RXJyb3JFbGVtZW50LmlubmVySFRNTCA9IGAke2ZpcnN0RXJyb3IubWVzc2FnZX1gO1xuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWQgPSAoKSA9PiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5pc1ZhbGlkUGFyYW0odGhpcy5mb3JtRmllbGROYW1lKVxuXG4gIGlzSW52YWxpZCA9ICgpID0+ICF0aGlzLmlzVmFsaWQoKVxuXG4gIHNldHVwRm9ybUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlLFxuICAgIH07XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50KCk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgJzxzcGFuIGNsYXNzPVwiZXJyb3JzXCI+PC9zcGFuPicpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSB0aGlzLmZvcm1GaWVsZEVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZXJyb3JzJyk7XG4gIH1cbn1cbiIsImltcG9ydCBWYWxpZGF0aW9uQ29udHJhY3QgZnJvbSAnLi4vRmx1ZW50VmFsaWRhdG9yJztcbmltcG9ydCBGb3JtRmllbGRWYWxpZGF0b3IgZnJvbSAnLi9Gb3JtRmllbGRWYWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgZm9ybUZpZWxkRWxlbWVudHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigkZm9ybUVsZW1lbnQsIGZvcm1GaWVsZE5hbWVzKSB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSBuZXcgVmFsaWRhdGlvbkNvbnRyYWN0KCk7XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50ID0gJGZvcm1FbGVtZW50O1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpO1xuXG4gICAgdGhpcy5mb3JtRmllbGROYW1lcyA9IGZvcm1GaWVsZE5hbWVzO1xuICAgIHRoaXMuc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+ICF0aGlzLmlzSW52YWxpZCgpO1xuXG4gIGlzSW52YWxpZCA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMoKTtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuaGFzRXJyb3JzKCk7XG4gIH1cblxuICBzZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5T2ZGb3JtRmllbGROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybUZpZWxkTmFtZXMpO1xuXG4gICAgYXJyYXlPZkZvcm1GaWVsZE5hbWVzLmZvckVhY2goKGZpZWxkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgJGZvcm1GaWVsZEVsZW1lbnQgPSB0aGlzLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYCk7XG4gICAgICBjb25zdCBmb3JtRmllbGRWYWxpZGF0b3IgPSBuZXcgRm9ybUZpZWxkVmFsaWRhdG9yKHtcbiAgICAgICAgZm9ybUZpZWxkRWxlbWVudDogJGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgICAgIGZvcm1GaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgdmFsaWRhdGlvbkNvbnRyYWN0OiB0aGlzLnZhbGlkYXRpb25Db250cmFjdCxcbiAgICAgICAgZmllbGRWYWxpZGF0aW9uOiB0aGlzLmZvcm1GaWVsZE5hbWVzW2ZpZWxkTmFtZV0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudHMucHVzaChmb3JtRmllbGRWYWxpZGF0b3IpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1FbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIGlzVmFsaWQ6IHRoaXMuaXNWYWxpZCxcbiAgICAgIGlzSW52YWxpZDogdGhpcy5pc0ludmFsaWQsXG4gICAgICBjbGVhcjogdGhpcy5jbGVhcixcbiAgICB9O1xuXG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCk7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5jbGVhcik7XG4gIH1cblxuICB2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQgPSAoeyB0YXJnZXQ6IGZvcm1GaWVsZEVsZW1lbnQgfSkgPT4ge1xuICAgIGZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudHMuZm9yRWFjaCgoZm9ybUZpZWxkRWxlbWVudCkgPT4ge1xuICAgICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSBuZXcgVmFsaWRhdGlvbkNvbnRyYWN0KCk7XG4gIH1cbn1cbiIsImNvbnN0IGRlZXBFcXVhbCA9IChhLCBiKSA9PiB7XG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgcmV0dXJuIGFLZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldKSB8fCBhY2MgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWVwRXF1YWw7XG4iLCJpbXBvcnQgZGVlcEVxdWFsIGZyb20gJy4uL2RlZXBFcXVhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzUmVwb3NpdG9yeSB7XG4gIGtleSA9ICd1c2VycydcblxuICBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuXG4gIHNldEl0ZW1JbkxvY2FsU3RvcmFnZSA9IGl0ZW0gPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuXG4gIGdldEFsbCA9ICgpID0+IHRoaXMuZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoKVxuXG4gIGluc2VydCA9ICh1c2VyKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGlmICh1c2VyLmdldEZ1bGxOYW1lKSB7XG4gICAgICBsaXN0T2ZVc2Vycy5wdXNoKHtcbiAgICAgICAgbmFtZTogdXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgICBjcGY6IHVzZXIuZ2V0Q1BGKCksXG4gICAgICAgIHBob25lOiB1c2VyLmdldFBob25lKCksXG4gICAgICAgIGVtYWlsOiB1c2VyLmdldEVtYWlsKCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UobGlzdE9mVXNlcnMpO1xuICAgICAgICByZXNvbHZlKHsgbWVzc2FnZTogJ1VzZXIgcmVnaXN0ZXJlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlID0gKHJlbW92YWJsZVVzZXIpID0+IHtcbiAgICBjb25zdCByZW1vdmFibGVVc2VyRGJPYmogPSB7XG4gICAgICBuYW1lOiByZW1vdmFibGVVc2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICBjcGY6IHJlbW92YWJsZVVzZXIuZ2V0Q1BGKCksXG4gICAgICBwaG9uZTogcmVtb3ZhYmxlVXNlci5nZXRQaG9uZSgpLFxuICAgICAgZW1haWw6IHJlbW92YWJsZVVzZXIuZ2V0RW1haWwoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBjb25zdCB1cGRhdGVkTGlzdE9mVXNlcnMgPSBsaXN0T2ZVc2Vyc1xuICAgICAgLmZpbHRlcihjdXJyZW50VXNlciA9PiAhZGVlcEVxdWFsKGN1cnJlbnRVc2VyLCByZW1vdmFibGVVc2VyRGJPYmopKTtcblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKHVwZGF0ZWRMaXN0T2ZVc2Vycyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=