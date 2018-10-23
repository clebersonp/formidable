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

  this.setState();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ1c2VycyIsImNsaWNrVGFyZ2V0RWxlbWVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidXNlclRyIiwiY2xvc2VzdCIsInVzZXJUZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidXNlckRhdGEiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VGQiLCJjdXJyZW50RGF0YVR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsInN0YXRlIiwibWFwIiwidXNlciIsImdldEZ1bGxOYW1lIiwiZ2V0Q1BGRm9ybWF0ZWQiLCJnZXRFbWFpbCIsImdldFBob25lRm9ybWF0ZWQiLCJqb2luIiwibGVuZ3RoIiwiYmFzZUVsZW1lbnQiLCJzZXR1cEV2ZW50cyIsIm9uY2xpY2siLCJyZW1vdmVVc2VyIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImZvcm1FbGVtZW50c0RUTyIsImZ1bGxOYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJlbWFpbCIsIlVzZXJzU2VydmljZSIsImFkZE5ldyIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2Vyc1RhYmxlIiwiZG9jdW1lbnQiLCJnZXRBbGxXaXRoSW5pdGlhbERhdGEiLCJzZXRTdGF0ZSIsInJlbW92YWJsZVVzZXJEVE8iLCJub21lIiwidGVsZWZvbmUiLCJkZWxldGVVc2VyIiwiZ2V0QWxsIiwiJGZvcm1FbGVtZW50Iiwic3RhcnRCdG5TdWJtaXRMb2FkaW5nIiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3RvcEJ0blN1Ym1pdExvYWRpbmciLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJpc0NQRiIsImhhc01pbkxlbmd0aCIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwiZnJlZXplIiwidXNlcnNSZXBvc2l0b3J5IiwiVXNlcnNSZXBvc2l0b3J5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0IiwibGlzdE9mRG9tYWluVXNlcnMiLCJuYW1lIiwiaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSIsImdldEV4dGVybmFsVXNlcnMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiYWRkVXNlcnNQcm9taXNlcyIsImFsbCIsIm1lc3NhZ2UiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIlZhbGlkYXRpb25zIiwicGFyYW0iLCJjb25kaXRpb24iLCJ2YWxpZGF0aW9uTmFtZSIsInNldEVycm9yIiwicmVtb3ZlRXJyb3IiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3VtIiwiY3BmVmFsdWUiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJtb2QiLCJtaW5MZW5ndGgiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJjb250cmFjdElzSW52YWxpZCIsImVycm9ycyIsImZvckVhY2giLCJzaXplIiwidHlwZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiZ2V0IiwicGFyYW1FcnJvcnMiLCJGb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50IiwiZm9ybUZpZWxkTmFtZSIsInZhbGlkYXRpb25Db250cmFjdCIsImZpZWxkVmFsaWRhdGlvbiIsInZhbGlkYXRpb24iLCJ1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMiLCJ1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzIiwidXBkYXRlRXJyb3JzIiwiaW5pdGlhbGl6ZWQiLCJlcnJvcnNPZlRoaXNQYXJhbSIsInZhbHVlcyIsImZpcnN0RXJyb3IiLCJmb3JtRWxlbWVudEVycm9yRWxlbWVudCIsImlzVmFsaWRQYXJhbSIsImlzVmFsaWQiLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImluaXQiLCJzZXR1cEZvcm1FbGVtZW50IiwiZm9ybUZpZWxkTmFtZXMiLCJ2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzIiwiaGFzRXJyb3JzIiwiYXJyYXlPZkZvcm1GaWVsZE5hbWVzIiwia2V5cyIsImZpZWxkTmFtZSIsIiRmb3JtRmllbGRFbGVtZW50IiwiZm9ybUVsZW1lbnQiLCJmb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50cyIsInB1c2giLCJjbGVhciIsInZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJkZWVwRXF1YWwiLCJhIiwiYiIsImFLZXlzIiwia2V5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UiLCJsaXN0T2ZVc2VycyIsImdldENQRiIsImdldFBob25lIiwicmVqZWN0Iiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwiZXJyIiwicmVtb3ZhYmxlVXNlciIsInJlbW92YWJsZVVzZXJEYk9iaiIsInVwZGF0ZWRMaXN0T2ZVc2VycyIsImZpbHRlciIsImN1cnJlbnRVc2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFLbkIsc0JBQVlDLE9BQVosRUFBcUJDLFVBQXJCLEVBQWlDO0FBQUE7O0FBQUE7O0FBQy9COztBQUQrQixvRkFKekI7QUFDTkMsV0FBSyxFQUFFO0FBREQsS0FJeUI7O0FBQUEs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SyxhQUFhLENBQUNKLFFBQWQsRUFIa0I7QUFJekI5SixXQUFLLEVBQUVrSyxhQUFhLENBQUMzTCxRQUFkO0FBSmtCLEtBQTNCOztBQU1BLFFBQU1xTCxXQUFXLEdBQUcsS0FBSSxDQUFDN0ksTUFBTCxFQUFwQjs7QUFDQSxRQUFNcUosa0JBQWtCLEdBQUdSLFdBQVcsQ0FDbkNTLE1BRHdCLENBQ2pCLFVBQUFDLFdBQVc7QUFBQSxhQUFJLENBQUN2QiwwREFBUyxDQUFDdUIsV0FBRCxFQUFjSCxrQkFBZCxDQUFkO0FBQUEsS0FETSxDQUEzQjs7QUFHQSxTQUFJLENBQUNILHFCQUFMLENBQTJCSSxrQkFBM0I7QUFDRCxHIiwiZmlsZSI6ImpzL2NhZGFzdHJvL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9pbmZyYS9Db21wb25lbnQnO1xuaW1wb3J0ICcuL1VzZXJzVGFibGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5vbmNsaWNrID0gdGhpcy5yZW1vdmVVc2VyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlVXNlciA9ICh7IHRhcmdldDogY2xpY2tUYXJnZXRFbGVtZW50IH0pID0+IHtcbiAgICBpZiAoY2xpY2tUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbW92ZScpKSB7XG4gICAgICBjb25zdCB1c2VyVHIgPSBjbGlja1RhcmdldEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgIGNvbnN0IHVzZXJUZHMgPSB1c2VyVHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gQXJyYXkuZnJvbSh1c2VyVGRzKS5yZWR1Y2UoKGFjYywgY3VycmVudFRkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhVHlwZSA9IGN1cnJlbnRUZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICBhY2NbY3VycmVudERhdGFUeXBlXSA9IGN1cnJlbnRUZC50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5yZW1vdmUodXNlckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT4gYFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vbWU8L3RkPlxuICAgICAgICAgICAgPHRkPkNQRjwvdGQ+XG4gICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxuICAgICAgICAgICAgPHRkPlRlbGVmb25lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubWFwKHVzZXIgPT4gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cIm5vbWVcIj4ke3VzZXIuZ2V0RnVsbE5hbWUoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJjcGZcIj4ke3VzZXIuZ2V0Q1BGRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJlbWFpbFwiPiR7dXNlci5nZXRFbWFpbCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cInRlbGVmb25lXCI+JHt1c2VyLmdldFBob25lRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiYnRuLXJlbW92ZVwiPlJlbW92ZXI8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYCkuam9pbignJylcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGVuZ3RoID09PSAwID8gJzx0cj48dGQgY29sc3Bhbj1cIjRcIiBhbGlnbj1cImNlbnRlclwiPk5lbmh1bSB1c3XDoXJpbyBlbmNvbnRyYWRvIDooPC90ZD48L3RyPicgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgc3RhdGljIGFkZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXQ7XG5cblxuICAgIGlmICgkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpIHJldHVybjtcblxuICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkaW5nJykpO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlLFxuICAgIH07XG5cbiAgICBVc2Vyc1NlcnZpY2VcbiAgICAgIC5hZGROZXcoZm9ybUVsZW1lbnRzRFRPKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGVkJykpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSwgVXNlckNvbnRyb2xsZXIpO1xuXG4gICAgVXNlcnNTZXJ2aWNlXG4gICAgICAuZ2V0QWxsV2l0aEluaXRpYWxEYXRhKClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUodXNlcikge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogdXNlci5ub21lLFxuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIHBob25lOiB1c2VyLnRlbGVmb25lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfTtcblxuICAgIFVzZXJzU2VydmljZVxuICAgICAgLmRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTylcbiAgICAgIC50aGVuKFVzZXJzU2VydmljZS5nZXRBbGwpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uLy4uLy4uLy4uL2luZnJhL0Zvcm1WYWxpZGF0b3InO1xuaW1wb3J0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hJztcblxuY29uc3QgJGZvcm1FbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtQWRkVXN1YXJpb1wiXScpO1xuXG5mdW5jdGlvbiBzdGFydEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LmFkZCgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbn1cblxuZnVuY3Rpb24gc3RvcEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LnJlbW92ZSgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICRmb3JtRWxlbWVudC5yZXNldCgpO1xufVxuXG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGluZycsIHN0YXJ0QnRuU3VibWl0TG9hZGluZyk7XG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGVkJywgc3RvcEJ0blN1Ym1pdExvYWRpbmcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbWVudDogJGZvcm1FbGVtZW50LFxuICBmb3JtVmFsaWRhdG9yOiBuZXcgRm9ybVZhbGlkYXRvcigkZm9ybUVsZW1lbnQsIG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hKSxcbn07XG4iLCJpbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xlcic7XG5pbXBvcnQgJy4vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8nO1xuXG53aW5kb3cucGFnZUNhZGFzdHJvID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSA9IHtcbiAgbm9tZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ25vbWUnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBub21lIMOpIG9icmlnYXTDs3JpbycpLFxuICBlbWFpbDogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ2VtYWlsJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gZW1haWwgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNFbWFpbCgnSW5mb3JtZSB1bSBlLW1haWwgdsOhbGlkbycpLFxuICBjcGY6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdjcGYnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBDUEYgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNDUEYoJ1BvciBmYXZvciwgaW5mb3JtZSB1bSBDUEYgdsOhbGlkbycpLFxuICB0ZWxlZm9uZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ3RlbGVmb25lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gdGVsZWZvbmUgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaGFzTWluTGVuZ3RoKDEwLCAnSW5mb3JtZSB1bSB0ZWxlZm9uZSB2w6FsaWRvJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYTtcbiIsImltcG9ydCBQaG9uZSBmcm9tICcuLi92YWx1ZU9iamVjdHMvUGhvbmUnO1xuaW1wb3J0IENQRiBmcm9tICcuLi92YWx1ZU9iamVjdHMvQ1BGJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmdWxsTmFtZSxcbiAgICBjcGYsXG4gICAgcGhvbmUsXG4gICAgZW1haWwsXG4gIH0pIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgdGhpcy5jcGYgPSBuZXcgQ1BGKHsgQ1BGTnVtYmVyczogY3BmIH0pO1xuICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmUoeyBudW1iZXI6IHBob25lIH0pO1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lID0gKCkgPT4gdGhpcy5mdWxsTmFtZVxuXG4gIGdldEVtYWlsID0gKCkgPT4gdGhpcy5lbWFpbFxuXG4gIGdldENQRiA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlKClcblxuICBnZXRDUEZGb3JtYXRlZCA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlRm9ybWF0ZWQoKVxuXG4gIGdldFBob25lID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXIoKVxuXG4gIGdldFBob25lRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlckZvcm1hdGVkKClcbn1cbiIsIi8qIGVzbGludCBuby11c2UtYmVmb3JlLWRlZmluZTogW1wiZXJyb3JcIiwgeyBcImZ1bmN0aW9uc1wiOiBmYWxzZSB9XSAqL1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgVXNlcnNSZXBvc2l0b3J5IGZyb20gJy4uLy4uL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnknO1xuXG5jb25zdCBhZGROZXcgPSAoZm9ybUVsZW1lbnRzRFRPKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh1c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KHVzZXIpKSwgMTAwMCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWxsID0gKCkgPT4ge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mRG9tYWluVXNlcnMgPSB1c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubWFwKHVzZXIgPT4gbmV3IFVzZXIoe1xuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgIH0pKTtcbiAgICByZXNvbHZlKGxpc3RPZkRvbWFpblVzZXJzKTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRBbGxXaXRoSW5pdGlhbERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgY29uc3QgaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSA9IHVzZXJzUmVwb3NpdG9yeS5nZXRBbGwoKS5sZW5ndGggPiAwO1xuXG4gIGlmIChoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5KSB7XG4gICAgcmV0dXJuIGdldEFsbCgpO1xuICB9XG4gIHJldHVybiBnZXRFeHRlcm5hbFVzZXJzKCk7XG59O1xuXG5mdW5jdGlvbiBnZXRFeHRlcm5hbFVzZXJzKCkge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9wcml2YXRlLTIxZThkZS1yYWZhZWxsdWNpby5hcGlhcnktbW9jay5jb20vdXNlcnMnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICBjb25zdCBhZGRVc2Vyc1Byb21pc2VzID0gdXNlcnMubWFwKHVzZXIgPT4gdXNlcnNSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgIH0pKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYWRkVXNlcnNQcm9taXNlcyk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBnZXRBbGwoKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTykge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihyZW1vdmFibGVVc2VyRFRPKTtcbiAgdXNlcnNSZXBvc2l0b3J5LnJlbW92ZSh1c2VyKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdyZW1vdmVkIHdpdGggc3VjY2VzcycgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZE5ldyxcbiAgZ2V0QWxsLFxuICBkZWxldGVVc2VyLFxuICBnZXRBbGxXaXRoSW5pdGlhbERhdGEsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBDUEZOdW1iZXJzIH0pIHtcbiAgICB0aGlzLkNQRk51bWJlcnMgPSBDUEZOdW1iZXJzLnJlcGxhY2UoLy0vZywgJycpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLkNQRk51bWJlcnNcblxuICBnZXRWYWx1ZUZvcm1hdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IENQRlJlZ2V4ID0gLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLztcbiAgICByZXR1cm4gdGhpcy5DUEZOdW1iZXJzLnJlcGxhY2UoQ1BGUmVnZXgsIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob25lIHtcbiAgY29uc3RydWN0b3IoeyBudW1iZXIgfSkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoLy0vZywgJycpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXROdW1iZXIgPSAoKSA9PiB0aGlzLm51bWJlcjtcblxuICBnZXROdW1iZXJGb3JtYXRlZCA9ICgpID0+IHRoaXMubnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICBpZiAoZGRkKSByZXR1cm4gYCR7ZGRkfS0ke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuXG4gICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih7IGNvbnRyYWN0LCBwYXJhbSwgdmFsdWUgfSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgYXBwbHlWYWxpZGF0aW9uID0gKGNvbmRpdGlvbiwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbnRyYWN0LnNldEVycm9yKHRoaXMucGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cmFjdC5yZW1vdmVFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaXNSZXF1aXJlZCA9IChtZXNzYWdlID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gMDtcblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzUmVxdWlyZWQnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFbWFpbCA9IChtZXNzYWdlID0gJ0VtYWlsIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgcmVnZXhFbWFpbFZhbGlkID0gbmV3IFJlZ0V4cCgvXlxcdysoWy0rLiddXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKiQvKTtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhcmVnZXhFbWFpbFZhbGlkLnRlc3QodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNFbWFpbCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0NQRiA9IChtZXNzYWdlID0gJ0NQRiBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEoKHZhbHVlKSA9PiB7XG4gICAgICBsZXQgc3VtID0gMDtcbiAgICAgIGNvbnN0IGNwZlZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoY3BmVmFsdWUgPT09ICcwMDAwMDAwMDAwMCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gOTsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTEgLSBpKTtcbiAgICAgIH1cbiAgICAgIGxldCBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDksIDEwKSwgMTApKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHN1bSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTIgLSBpKTtcbiAgICAgIH1cbiAgICAgIG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT09IDEwKSB8fCAobW9kID09PSAxMSkpIG1vZCA9IDA7XG4gICAgICBpZiAobW9kICE9PSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoMTAsIDExKSwgMTApKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KSh0aGlzLnZhbHVlKTtcblxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNDUEYnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzTWluTGVuZ3RoID0gKG1pbkxlbmd0aCwgbWVzc2FnZSA9IGBNaW5pbWFsIGxlbmdodCBpcyAke21pbkxlbmd0aH1gKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy52YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGg7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdoYXNNaW5MZW5ndGgnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbnMgZnJvbSAnLi9WYWxpZGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25Db250cmFjdCB7XG4gIGVycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0UGFyYW0ocGFyYW0pO1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGhhc0Vycm9ycyA9ICgpID0+IHtcbiAgICBsZXQgY29udHJhY3RJc0ludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9ycy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgaWYgKHBhcmFtLnNpemUgPT09IDEpIHtcbiAgICAgICAgY29udHJhY3RJc0ludmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250cmFjdElzSW52YWxpZDtcbiAgfVxuXG4gIHNldFBhcmFtKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLmVycm9ycy5nZXQocGFyYW0pKSB7XG4gICAgICB0aGlzLmVycm9ycy5zZXQocGFyYW0sIG5ldyBNYXAoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IgPSAocGFyYW0sIHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBlcnJvck9iaiA9IHtcbiAgICAgIHBhcmFtLFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLnNldCh0eXBlLCBlcnJvck9iaik7XG4gIH1cblxuICByZW1vdmVFcnJvciA9IChwYXJhbSwgdHlwZSkgPT4ge1xuICAgIGlmICh0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pKSB7XG4gICAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLmRlbGV0ZSh0eXBlKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldEVycm9yc0J5UGFyYW0ocGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgfVxuXG4gIGlzVmFsaWRQYXJhbShwYXJhbSkge1xuICAgIGNvbnN0IHBhcmFtRXJyb3JzID0gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgICBpZiAocGFyYW1FcnJvcnMpIHJldHVybiBwYXJhbUVycm9ycy5zaXplID09PSAwO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGRWYWxpZGF0b3Ige1xuICBpbml0aWFsaXplZCA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgZm9ybUZpZWxkTmFtZSxcbiAgICB2YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgZmllbGRWYWxpZGF0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50ID0gZm9ybUZpZWxkRWxlbWVudDtcbiAgICB0aGlzLmZvcm1GaWVsZE5hbWUgPSBmb3JtRmllbGROYW1lO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gdmFsaWRhdGlvbkNvbnRyYWN0O1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uID0gZmllbGRWYWxpZGF0aW9uO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbigpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcnMoKTtcbiAgfVxuXG4gIHZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24odGhpcy5mb3JtRmllbGRFbGVtZW50LnZhbHVlLCB0aGlzLnZhbGlkYXRpb25Db250cmFjdCk7XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuaXNJbnZhbGlkKCkgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5mb3JtRmllbGRFbGVtZW50O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10eXBlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXR5cGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXJyb3JzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCBlcnJvcnNPZlRoaXNQYXJhbSA9IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmdldEVycm9yc0J5UGFyYW0odGhpcy5mb3JtRmllbGROYW1lKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IEFycmF5LmZyb20oZXJyb3JzT2ZUaGlzUGFyYW0udmFsdWVzKCkpIHx8IFtdO1xuICAgICAgY29uc3QgZmlyc3RFcnJvciA9IGVycm9yc1swXSB8fCB7fTtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Zmlyc3RFcnJvci5tZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpXG5cbiAgaXNJbnZhbGlkID0gKCkgPT4gIXRoaXMuaXNWYWxpZCgpXG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGUsXG4gICAgfTtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQoKTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAnPHNwYW4gY2xhc3M9XCJlcnJvcnNcIj48L3NwYW4+Jyk7XG4gICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudCA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25Db250cmFjdCBmcm9tICcuLi9GbHVlbnRWYWxpZGF0b3InO1xuaW1wb3J0IEZvcm1GaWVsZFZhbGlkYXRvciBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBmb3JtRmllbGRFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCRmb3JtRWxlbWVudCwgZm9ybUZpZWxkTmFtZXMpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG5cbiAgICB0aGlzLmZvcm1GaWVsZE5hbWVzID0gZm9ybUZpZWxkTmFtZXM7XG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gIXRoaXMuaXNJbnZhbGlkKCk7XG5cbiAgaXNJbnZhbGlkID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIHNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXlPZkZvcm1GaWVsZE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5mb3JtRmllbGROYW1lcyk7XG5cbiAgICBhcnJheU9mRm9ybUZpZWxkTmFtZXMuZm9yRWFjaCgoZmllbGROYW1lKSA9PiB7XG4gICAgICBjb25zdCAkZm9ybUZpZWxkRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFZhbGlkYXRvciA9IG5ldyBGb3JtRmllbGRWYWxpZGF0b3Ioe1xuICAgICAgICBmb3JtRmllbGRFbGVtZW50OiAkZm9ybUZpZWxkRWxlbWVudCxcbiAgICAgICAgZm9ybUZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICB2YWxpZGF0aW9uQ29udHJhY3Q6IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgICAgICBmaWVsZFZhbGlkYXRpb246IHRoaXMuZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5wdXNoKGZvcm1GaWVsZFZhbGlkYXRvcik7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgaXNWYWxpZDogdGhpcy5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkOiB0aGlzLmlzSW52YWxpZCxcbiAgICAgIGNsZWFyOiB0aGlzLmNsZWFyLFxuICAgIH07XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcbiAgfVxufVxuIiwiY29uc3QgZGVlcEVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICByZXR1cm4gYUtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pIHx8IGFjYyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVlcEVxdWFsXG4iLCJpbXBvcnQgZGVlcEVxdWFsIGZyb20gJy4uL2RlZXBFcXVhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzUmVwb3NpdG9yeSB7XG4gIGtleSA9ICd1c2VycydcblxuICBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuXG4gIHNldEl0ZW1JbkxvY2FsU3RvcmFnZSA9IGl0ZW0gPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuXG4gIGdldEFsbCA9ICgpID0+IHRoaXMuZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoKVxuXG4gIGluc2VydCA9ICh1c2VyKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGlmICh1c2VyLmdldEZ1bGxOYW1lKSB7XG4gICAgICBsaXN0T2ZVc2Vycy5wdXNoKHtcbiAgICAgICAgbmFtZTogdXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgICBjcGY6IHVzZXIuZ2V0Q1BGKCksXG4gICAgICAgIHBob25lOiB1c2VyLmdldFBob25lKCksXG4gICAgICAgIGVtYWlsOiB1c2VyLmdldEVtYWlsKCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UobGlzdE9mVXNlcnMpO1xuICAgICAgICByZXNvbHZlKHsgbWVzc2FnZTogJ1VzZXIgcmVnaXN0ZXJlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlID0gKHJlbW92YWJsZVVzZXIpID0+IHtcbiAgICBjb25zdCByZW1vdmFibGVVc2VyRGJPYmogPSB7XG4gICAgICBuYW1lOiByZW1vdmFibGVVc2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICBjcGY6IHJlbW92YWJsZVVzZXIuZ2V0Q1BGKCksXG4gICAgICBwaG9uZTogcmVtb3ZhYmxlVXNlci5nZXRQaG9uZSgpLFxuICAgICAgZW1haWw6IHJlbW92YWJsZVVzZXIuZ2V0RW1haWwoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBjb25zdCB1cGRhdGVkTGlzdE9mVXNlcnMgPSBsaXN0T2ZVc2Vyc1xuICAgICAgLmZpbHRlcihjdXJyZW50VXNlciA9PiAhZGVlcEVxdWFsKGN1cnJlbnRVc2VyLCByZW1vdmFibGVVc2VyRGJPYmopKTtcblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKHVwZGF0ZWRMaXN0T2ZVc2Vycyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=