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

    _this.setItemInLocalStorage(listOfUsers);

    return createdUser;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ1c2VycyIsImNsaWNrVGFyZ2V0RWxlbWVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidXNlclRyIiwiY2xvc2VzdCIsInVzZXJUZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidXNlckRhdGEiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VGQiLCJjdXJyZW50RGF0YVR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsInN0YXRlIiwibWFwIiwidXNlciIsImdldEZ1bGxOYW1lIiwiZ2V0Q1BGRm9ybWF0ZWQiLCJnZXRFbWFpbCIsImdldFBob25lRm9ybWF0ZWQiLCJqb2luIiwibGVuZ3RoIiwiYmFzZUVsZW1lbnQiLCJzZXR1cEV2ZW50cyIsIm9uY2xpY2siLCJyZW1vdmVVc2VyIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImZvcm1FbGVtZW50c0RUTyIsImZ1bGxOYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJlbWFpbCIsIlVzZXJzU2VydmljZSIsImFkZE5ldyIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2Vyc1RhYmxlIiwiZG9jdW1lbnQiLCJnZXRBbGxXaXRoSW5pdGlhbERhdGEiLCJzZXRTdGF0ZSIsInJlbW92YWJsZVVzZXJEVE8iLCJub21lIiwidGVsZWZvbmUiLCJkZWxldGVVc2VyIiwiZ2V0QWxsIiwiJGZvcm1FbGVtZW50Iiwic3RhcnRCdG5TdWJtaXRMb2FkaW5nIiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3RvcEJ0blN1Ym1pdExvYWRpbmciLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJpc0NQRiIsImhhc01pbkxlbmd0aCIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwiZnJlZXplIiwidXNlcnNSZXBvc2l0b3J5IiwiVXNlcnNSZXBvc2l0b3J5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0IiwibGlzdE9mRG9tYWluVXNlcnMiLCJuYW1lIiwiaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSIsImdldEV4dGVybmFsVXNlcnMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiYWRkVXNlcnNQcm9taXNlcyIsImFsbCIsIm1lc3NhZ2UiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIlZhbGlkYXRpb25zIiwicGFyYW0iLCJjb25kaXRpb24iLCJ2YWxpZGF0aW9uTmFtZSIsInNldEVycm9yIiwicmVtb3ZlRXJyb3IiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3VtIiwiY3BmVmFsdWUiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJtb2QiLCJtaW5MZW5ndGgiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzIiwiZXJyb3JzIiwidmFsdWVzIiwiZmlyc3RWYWxpZGF0aW9uRXJyb3JIYXNFcnJvcnMiLCJzaXplIiwiaXNWYWxpZENvbnRyYWN0IiwiY3VycmVudEVycm9yIiwiaGFzQ3VycmVudFZhbGlkYXRpb25FcnJvckVycm9ycyIsInByZXZpb3VzT3JDdXJyZW50SGFzRXJyb3JzIiwidHlwZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiZ2V0IiwicGFyYW1FcnJvcnMiLCJGb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50IiwiZm9ybUZpZWxkTmFtZSIsInZhbGlkYXRpb25Db250cmFjdCIsImZpZWxkVmFsaWRhdGlvbiIsInZhbGlkYXRpb24iLCJ1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMiLCJ1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzIiwidXBkYXRlRXJyb3JzIiwiaW5pdGlhbGl6ZWQiLCJlcnJvcnNPZlRoaXNQYXJhbSIsImZpcnN0RXJyb3IiLCJmb3JtRWxlbWVudEVycm9yRWxlbWVudCIsImlzVmFsaWRQYXJhbSIsImlzVmFsaWQiLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImluaXQiLCJzZXR1cEZvcm1FbGVtZW50IiwiZm9ybUZpZWxkTmFtZXMiLCJ2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzIiwiaGFzRXJyb3JzIiwiYXJyYXlPZkZvcm1GaWVsZE5hbWVzIiwia2V5cyIsImZvckVhY2giLCJmaWVsZE5hbWUiLCIkZm9ybUZpZWxkRWxlbWVudCIsImZvcm1FbGVtZW50IiwiZm9ybUZpZWxkVmFsaWRhdG9yIiwiZm9ybUZpZWxkRWxlbWVudHMiLCJwdXNoIiwiY2xlYXIiLCJ2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQiLCJzZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzIiwiZGVlcEVxdWFsIiwiYSIsImIiLCJhS2V5cyIsImtleSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJjcmVhdGVkVXNlciIsImdldENQRiIsImdldFBob25lIiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwicmVtb3ZhYmxlVXNlciIsInJlbW92YWJsZVVzZXJEYk9iaiIsInVwZGF0ZWRMaXN0T2ZVc2VycyIsImZpbHRlciIsImN1cnJlbnRVc2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RCxTQUFJLENBQUNHLHFCQUFMLENBQTJCSixXQUEzQjs7QUFDQSxXQUFPQyxXQUFQO0FBQ0QsRzs7a0NBRVEsVUFBQ0ksYUFBRCxFQUFtQjtBQUMxQixRQUFNQyxrQkFBa0IsR0FBRztBQUN6QmpILFVBQUksRUFBRWdILGFBQWEsQ0FBQ2pNLFdBQWQsRUFEbUI7QUFFekJ5QixTQUFHLEVBQUV3SyxhQUFhLENBQUNILE1BQWQsRUFGb0I7QUFHekJwSyxXQUFLLEVBQUV1SyxhQUFhLENBQUNGLFFBQWQsRUFIa0I7QUFJekJwSyxXQUFLLEVBQUVzSyxhQUFhLENBQUMvTCxRQUFkO0FBSmtCLEtBQTNCOztBQU1BLFFBQU0wTCxXQUFXLEdBQUcsS0FBSSxDQUFDbEosTUFBTCxFQUFwQjs7QUFDQSxRQUFNeUosa0JBQWtCLEdBQUdQLFdBQVcsQ0FDbkNRLE1BRHdCLENBQ2pCLFVBQUFDLFdBQVc7QUFBQSxhQUFJLENBQUN0QiwwREFBUyxDQUFDc0IsV0FBRCxFQUFjSCxrQkFBZCxDQUFkO0FBQUEsS0FETSxDQUEzQjs7QUFHQSxTQUFJLENBQUNGLHFCQUFMLENBQTJCRyxrQkFBM0I7QUFDRCxHIiwiZmlsZSI6ImpzL2NhZGFzdHJvL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9pbmZyYS9Db21wb25lbnQnO1xuaW1wb3J0ICcuL1VzZXJzVGFibGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5vbmNsaWNrID0gdGhpcy5yZW1vdmVVc2VyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlVXNlciA9ICh7IHRhcmdldDogY2xpY2tUYXJnZXRFbGVtZW50IH0pID0+IHtcbiAgICBpZiAoY2xpY2tUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbW92ZScpKSB7XG4gICAgICBjb25zdCB1c2VyVHIgPSBjbGlja1RhcmdldEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgIGNvbnN0IHVzZXJUZHMgPSB1c2VyVHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gQXJyYXkuZnJvbSh1c2VyVGRzKS5yZWR1Y2UoKGFjYywgY3VycmVudFRkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhVHlwZSA9IGN1cnJlbnRUZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICBhY2NbY3VycmVudERhdGFUeXBlXSA9IGN1cnJlbnRUZC50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5yZW1vdmUodXNlckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT4gYFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vbWU8L3RkPlxuICAgICAgICAgICAgPHRkPkNQRjwvdGQ+XG4gICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxuICAgICAgICAgICAgPHRkPlRlbGVmb25lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubWFwKHVzZXIgPT4gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cIm5vbWVcIj4ke3VzZXIuZ2V0RnVsbE5hbWUoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJjcGZcIj4ke3VzZXIuZ2V0Q1BGRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJlbWFpbFwiPiR7dXNlci5nZXRFbWFpbCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cInRlbGVmb25lXCI+JHt1c2VyLmdldFBob25lRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiYnRuLXJlbW92ZVwiPlJlbW92ZXI8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYCkuam9pbignJylcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGVuZ3RoID09PSAwID8gJzx0cj48dGQgY29sc3Bhbj1cIjRcIiBhbGlnbj1cImNlbnRlclwiPk5lbmh1bSB1c3XDoXJpbyBlbmNvbnRyYWRvIDooPC90ZD48L3RyPicgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgc3RhdGljIGFkZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKSByZXR1cm47XG5cbiAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGluZycpKTtcblxuICAgIGNvbnN0IGZvcm1FbGVtZW50c0RUTyA9IHtcbiAgICAgIGZ1bGxOYW1lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXROb21lXCJdJykudmFsdWUsXG4gICAgICBjcGY6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dENQRlwiXScpLnZhbHVlLFxuICAgICAgcGhvbmU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dFRlbGVmb25lXCJdJykudmFsdWUsXG4gICAgICBlbWFpbDogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0RW1haWxcIl0nKS52YWx1ZSxcbiAgICB9O1xuXG4gICAgVXNlcnNTZXJ2aWNlXG4gICAgICAuYWRkTmV3KGZvcm1FbGVtZW50c0RUTylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93QWxsKCkge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIFVzZXJzU2VydmljZVxuICAgICAgLmdldEFsbFdpdGhJbml0aWFsRGF0YSgpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKHVzZXIpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCByZW1vdmFibGVVc2VyRFRPID0ge1xuICAgICAgZnVsbE5hbWU6IHVzZXIubm9tZSxcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBwaG9uZTogdXNlci50ZWxlZm9uZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH07XG5cbiAgICBVc2Vyc1NlcnZpY2VcbiAgICAgIC5kZWxldGVVc2VyKHJlbW92YWJsZVVzZXJEVE8pXG4gICAgICAudGhlbihVc2Vyc1NlcnZpY2UuZ2V0QWxsKVxuICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgIHVzZXJzVGFibGUuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi8uLi8uLi8uLi9pbmZyYS9Gb3JtVmFsaWRhdG9yJztcbmltcG9ydCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSBmcm9tICcuLi8uLi8uLi92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYSc7XG5cbmNvbnN0ICRmb3JtRWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybUFkZFVzdWFyaW9cIl0nKTtcblxuZnVuY3Rpb24gc3RhcnRCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLmNsYXNzTGlzdC5hZGQoJy1sb2FkaW5nJyk7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3BCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLmNsYXNzTGlzdC5yZW1vdmUoJy1sb2FkaW5nJyk7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAkZm9ybUVsZW1lbnQucmVzZXQoKTtcbn1cblxuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRpbmcnLCBzdGFydEJ0blN1Ym1pdExvYWRpbmcpO1xuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRlZCcsIHN0b3BCdG5TdWJtaXRMb2FkaW5nKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVsZW1lbnQ6ICRmb3JtRWxlbWVudCxcbiAgZm9ybVZhbGlkYXRvcjogbmV3IEZvcm1WYWxpZGF0b3IoJGZvcm1FbGVtZW50LCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSksXG59O1xuIiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInO1xuaW1wb3J0ICcuL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvJztcblxud2luZG93LnBhZ2VDYWRhc3RybyA9IHtcbiAgdXNlckNvbnRyb2xsZXI6IFVzZXJDb250cm9sbGVyLFxufTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgPSB7XG4gIG5vbWU6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdub21lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gbm9tZSDDqSBvYnJpZ2F0w7NyaW8nKSxcbiAgZW1haWw6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdlbWFpbCcsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIGVtYWlsIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmlzRW1haWwoJ0luZm9ybWUgdW0gZS1tYWlsIHbDoWxpZG8nKSxcbiAgY3BmOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnY3BmJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gQ1BGIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmlzQ1BGKCdQb3IgZmF2b3IsIGluZm9ybWUgdW0gQ1BGIHbDoWxpZG8nKSxcbiAgdGVsZWZvbmU6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCd0ZWxlZm9uZScsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIHRlbGVmb25lIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmhhc01pbkxlbmd0aCgxMCwgJ0luZm9ybWUgdW0gdGVsZWZvbmUgdsOhbGlkbycpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3VXNlclZhbGlkYXRpb25TY2hlbWE7XG4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCIvKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFtcImVycm9yXCIsIHsgXCJmdW5jdGlvbnNcIjogZmFsc2UgfV0gKi9cbmltcG9ydCBVc2VyIGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IFVzZXJzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9pbmZyYS9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5JztcblxuY29uc3QgYWRkTmV3ID0gKGZvcm1FbGVtZW50c0RUTykgPT4ge1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKTtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodXNlcnNSZXBvc2l0b3J5Lmluc2VydCh1c2VyKSksIDEwMDApO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldEFsbCA9ICgpID0+IHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RPZkRvbWFpblVzZXJzID0gdXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLm1hcCh1c2VyID0+IG5ldyBVc2VyKHtcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShsaXN0T2ZEb21haW5Vc2Vycyk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWxsV2l0aEluaXRpYWxEYXRhID0gKCkgPT4ge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkgPSB1c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubGVuZ3RoID4gMDtcblxuICBpZiAoaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSkge1xuICAgIHJldHVybiBnZXRBbGwoKTtcbiAgfVxuICByZXR1cm4gZ2V0RXh0ZXJuYWxVc2VycygpO1xufTtcblxuZnVuY3Rpb24gZ2V0RXh0ZXJuYWxVc2VycygpIHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vcHJpdmF0ZS0yMWU4ZGUtcmFmYWVsbHVjaW8uYXBpYXJ5LW1vY2suY29tL3VzZXJzJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KVxuICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgY29uc3QgYWRkVXNlcnNQcm9taXNlcyA9IHVzZXJzLm1hcCh1c2VyID0+IHVzZXJzUmVwb3NpdG9yeS5pbnNlcnQobmV3IFVzZXIoe1xuICAgICAgICBjcGY6IHVzZXIuY3BmLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgcGhvbmU6IHVzZXIucGhvbmUsXG4gICAgICB9KSkpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFkZFVzZXJzUHJvbWlzZXMpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gZ2V0QWxsKCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVVc2VyKHJlbW92YWJsZVVzZXJEVE8pIHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIocmVtb3ZhYmxlVXNlckRUTyk7XG4gIHVzZXJzUmVwb3NpdG9yeS5yZW1vdmUodXNlcik7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmUoeyBtZXNzYWdlOiAncmVtb3ZlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGROZXcsXG4gIGdldEFsbCxcbiAgZGVsZXRlVXNlcixcbiAgZ2V0QWxsV2l0aEluaXRpYWxEYXRhLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgQ1BGTnVtYmVycyB9KSB7XG4gICAgdGhpcy5DUEZOdW1iZXJzID0gQ1BGTnVtYmVycy5yZXBsYWNlKC8tL2csICcnKS5yZXBsYWNlKC9cXC4vZywgJycpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgcmV0dXJuIHRoaXMuQ1BGTnVtYmVycy5yZXBsYWNlKENQRlJlZ2V4LCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlci5yZXBsYWNlKC8tL2csICcnKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyID0gKCkgPT4gdGhpcy5udW1iZXI7XG5cbiAgZ2V0TnVtYmVyRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLm51bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgaWYgKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcblxuICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25zIHtcbiAgY29uc3RydWN0b3IoeyBjb250cmFjdCwgcGFyYW0sIHZhbHVlIH0pIHtcbiAgICB0aGlzLnBhcmFtID0gcGFyYW07XG4gICAgdGhpcy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFwcGx5VmFsaWRhdGlvbiA9IChjb25kaXRpb24sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKSA9PiB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgdGhpcy5jb250cmFjdC5zZXRFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJhY3QucmVtb3ZlRXJyb3IodGhpcy5wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQgPSAobWVzc2FnZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IDA7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc1JlcXVpcmVkJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRW1haWwgPSAobWVzc2FnZSA9ICdFbWFpbCBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IHJlZ2V4RW1haWxWYWxpZCA9IG5ldyBSZWdFeHAoL15cXHcrKFstKy4nXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSokLyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXJlZ2V4RW1haWxWYWxpZC50ZXN0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzRW1haWwnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNDUEYgPSAobWVzc2FnZSA9ICdDUEYgbXVzdCB0byBiZSB2YWxpZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhKCh2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICBjb25zdCBjcGZWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGNwZlZhbHVlID09PSAnMDAwMDAwMDAwMDAnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gICAgICB9XG4gICAgICBsZXQgbW9kID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gICAgICBpZiAoKG1vZCA9PT0gMTApIHx8IChtb2QgPT09IDExKSkgbW9kID0gMDtcbiAgICAgIGlmIChtb2QgIT09IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyg5LCAxMCksIDEwKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBzdW0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDEyIC0gaSk7XG4gICAgICB9XG4gICAgICBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDEwLCAxMSksIDEwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkodGhpcy52YWx1ZSk7XG5cblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzQ1BGJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc01pbkxlbmd0aCA9IChtaW5MZW5ndGgsIG1lc3NhZ2UgPSBgTWluaW1hbCBsZW5naHQgaXMgJHttaW5MZW5ndGh9YCkgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEodGhpcy52YWx1ZS5sZW5ndGggPj0gbWluTGVuZ3RoKTtcbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdoYXNNaW5MZW5ndGgnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbnMgZnJvbSAnLi9WYWxpZGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25Db250cmFjdCB7XG4gIGVycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0UGFyYW0ocGFyYW0pO1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGhhc0Vycm9ycyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzID0gQXJyYXkuZnJvbSh0aGlzLmVycm9ycy52YWx1ZXMoKSk7XG4gICAgY29uc3QgZmlyc3RWYWxpZGF0aW9uRXJyb3JIYXNFcnJvcnMgPSBsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzWzBdLnNpemUgPiAwO1xuXG4gICAgY29uc3QgaXNWYWxpZENvbnRyYWN0ID0gbGlzdE9mVmFsaWRhdGlvbkVycm9ycy5yZWR1Y2UoKGFjYywgY3VycmVudEVycm9yKSA9PiB7XG4gICAgICBjb25zdCBoYXNDdXJyZW50VmFsaWRhdGlvbkVycm9yRXJyb3JzID0gY3VycmVudEVycm9yLnNpemUgPiAwO1xuICAgICAgY29uc3QgcHJldmlvdXNPckN1cnJlbnRIYXNFcnJvcnMgPSBhY2MgfHwgaGFzQ3VycmVudFZhbGlkYXRpb25FcnJvckVycm9ycztcblxuICAgICAgaWYgKHByZXZpb3VzT3JDdXJyZW50SGFzRXJyb3JzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBmaXJzdFZhbGlkYXRpb25FcnJvckhhc0Vycm9ycyk7XG5cbiAgICByZXR1cm4gaXNWYWxpZENvbnRyYWN0O1xuICB9XG5cbiAgc2V0UGFyYW0ocGFyYW0pIHtcbiAgICBpZiAoIXRoaXMuZXJyb3JzLmdldChwYXJhbSkpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnNldChwYXJhbSwgbmV3IE1hcCgpKTtcbiAgICB9XG4gIH1cblxuICBzZXRFcnJvciA9IChwYXJhbSwgdHlwZSwgbWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGVycm9yT2JqID0ge1xuICAgICAgcGFyYW0sXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICB9O1xuICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuc2V0KHR5cGUsIGVycm9yT2JqKTtcbiAgfVxuXG4gIHJlbW92ZUVycm9yID0gKHBhcmFtLCB0eXBlKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkpIHtcbiAgICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuZGVsZXRlKHR5cGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5nZXQocGFyYW0pO1xuICB9XG5cbiAgaXNWYWxpZFBhcmFtKHBhcmFtKSB7XG4gICAgY29uc3QgcGFyYW1FcnJvcnMgPSB0aGlzLmVycm9ycy5nZXQocGFyYW0pO1xuICAgIGlmIChwYXJhbUVycm9ycykgcmV0dXJuIHBhcmFtRXJyb3JzLnNpemUgPT09IDA7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZFZhbGlkYXRvciB7XG4gIGluaXRpYWxpemVkID0gZmFsc2VcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgZm9ybUZpZWxkRWxlbWVudCxcbiAgICBmb3JtRmllbGROYW1lLFxuICAgIHZhbGlkYXRpb25Db250cmFjdCxcbiAgICBmaWVsZFZhbGlkYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQgPSBmb3JtRmllbGRFbGVtZW50O1xuICAgIHRoaXMuZm9ybUZpZWxkTmFtZSA9IGZvcm1GaWVsZE5hbWU7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSB2YWxpZGF0aW9uQ29udHJhY3Q7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24gPSBmaWVsZFZhbGlkYXRpb247XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9ycygpO1xuICB9XG5cbiAgdmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLmZpZWxkVmFsaWRhdGlvbih0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsdWUsIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cygpIHtcbiAgICBpZiAodGhpcy5pc0ludmFsaWQoKSAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLWludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy1pbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmZvcm1GaWVsZEVsZW1lbnQ7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXR5cGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdHlwZWQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFcnJvcnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yc09mVGhpc1BhcmFtID0gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuZ2V0RXJyb3JzQnlQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpO1xuICAgICAgY29uc3QgZXJyb3JzID0gQXJyYXkuZnJvbShlcnJvcnNPZlRoaXNQYXJhbS52YWx1ZXMoKSkgfHwgW107XG4gICAgICBjb25zdCBmaXJzdEVycm9yID0gZXJyb3JzWzBdIHx8IHt9O1xuICAgICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudC5pbm5lckhUTUwgPSBmaXJzdEVycm9yLm1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpXG5cbiAgaXNJbnZhbGlkID0gKCkgPT4gIXRoaXMuaXNWYWxpZCgpXG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGUsXG4gICAgfTtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQoKTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAnPHNwYW4gY2xhc3M9XCJlcnJvcnNcIj48L3NwYW4+Jyk7XG4gICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudCA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25Db250cmFjdCBmcm9tICcuLi9GbHVlbnRWYWxpZGF0b3InO1xuaW1wb3J0IEZvcm1GaWVsZFZhbGlkYXRvciBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBmb3JtRmllbGRFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCRmb3JtRWxlbWVudCwgZm9ybUZpZWxkTmFtZXMpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG5cbiAgICB0aGlzLmZvcm1GaWVsZE5hbWVzID0gZm9ybUZpZWxkTmFtZXM7XG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gIXRoaXMuaXNJbnZhbGlkKCk7XG5cbiAgaXNJbnZhbGlkID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIHNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXlPZkZvcm1GaWVsZE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5mb3JtRmllbGROYW1lcyk7XG5cbiAgICBhcnJheU9mRm9ybUZpZWxkTmFtZXMuZm9yRWFjaCgoZmllbGROYW1lKSA9PiB7XG4gICAgICBjb25zdCAkZm9ybUZpZWxkRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFZhbGlkYXRvciA9IG5ldyBGb3JtRmllbGRWYWxpZGF0b3Ioe1xuICAgICAgICBmb3JtRmllbGRFbGVtZW50OiAkZm9ybUZpZWxkRWxlbWVudCxcbiAgICAgICAgZm9ybUZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICB2YWxpZGF0aW9uQ29udHJhY3Q6IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgICAgICBmaWVsZFZhbGlkYXRpb246IHRoaXMuZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5wdXNoKGZvcm1GaWVsZFZhbGlkYXRvcik7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgaXNWYWxpZDogdGhpcy5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkOiB0aGlzLmlzSW52YWxpZCxcbiAgICAgIGNsZWFyOiB0aGlzLmNsZWFyLFxuICAgIH07XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcbiAgfVxufVxuIiwiY29uc3QgZGVlcEVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICByZXR1cm4gYUtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pIHx8IGFjYyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBFcXVhbDtcbiIsImltcG9ydCBkZWVwRXF1YWwgZnJvbSAnLi4vZGVlcEVxdWFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNSZXBvc2l0b3J5IHtcbiAga2V5ID0gJ3VzZXJzJ1xuXG4gIGdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpIHx8IFtdXG5cbiAgc2V0SXRlbUluTG9jYWxTdG9yYWdlID0gaXRlbSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG5cbiAgZ2V0QWxsID0gKCkgPT4gdGhpcy5nZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgpXG5cbiAgaW5zZXJ0ID0gKHVzZXIpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgbGV0IGNyZWF0ZWRVc2VyO1xuXG4gICAgaWYgKHVzZXIuZ2V0RnVsbE5hbWUpIHtcbiAgICAgIGNyZWF0ZWRVc2VyID0ge1xuICAgICAgICBuYW1lOiB1c2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICAgIGNwZjogdXNlci5nZXRDUEYoKSxcbiAgICAgICAgcGhvbmU6IHVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgICAgZW1haWw6IHVzZXIuZ2V0RW1haWwoKSxcbiAgICAgIH1cbiAgICAgIGxpc3RPZlVzZXJzLnB1c2goY3JlYXRlZFVzZXIpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKGxpc3RPZlVzZXJzKTtcbiAgICByZXR1cm4gY3JlYXRlZFVzZXJcbiAgfVxuXG4gIHJlbW92ZSA9IChyZW1vdmFibGVVc2VyKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZhYmxlVXNlckRiT2JqID0ge1xuICAgICAgbmFtZTogcmVtb3ZhYmxlVXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgY3BmOiByZW1vdmFibGVVc2VyLmdldENQRigpLFxuICAgICAgcGhvbmU6IHJlbW92YWJsZVVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgIGVtYWlsOiByZW1vdmFibGVVc2VyLmdldEVtYWlsKCksXG4gICAgfTtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgY29uc3QgdXBkYXRlZExpc3RPZlVzZXJzID0gbGlzdE9mVXNlcnNcbiAgICAgIC5maWx0ZXIoY3VycmVudFVzZXIgPT4gIWRlZXBFcXVhbChjdXJyZW50VXNlciwgcmVtb3ZhYmxlVXNlckRiT2JqKSk7XG5cbiAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZSh1cGRhdGVkTGlzdE9mVXNlcnMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9