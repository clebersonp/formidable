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
      return "\n      <table class=\"users-table -striped\">\n        <thead>\n          <tr>\n            <td>Nome</td>\n            <td>CPF</td>\n            <td>Email</td>\n            <td>Telefone</td>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(_this.state.users.map(function (user) {
        return "\n              <tr>\n                <td data-type=\"nome\">".concat(user.getFullName(), "</td>\n                <td data-type=\"cpf\">").concat(user.getCPFFormated(), "</td>\n                <td data-type=\"email\">").concat(user.getEmail(), "</td>\n                <td data-type=\"telefone\">").concat(user.getPhoneFormated(), "</td>\n                <td><button class=\"btn-remove btn-generic -red -small\">Remover</button></td>\n              </tr>\n            ");
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
/* harmony import */ var _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infra/repositories/UsersRepository */ "./src/infra/repositories/UsersRepository.js");
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
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_2__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_2__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      var removableUserDTO = {
        fullName: user.nome,
        cpf: user.cpf,
        phone: user.telefone,
        email: user.email
      };
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersService; });
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/User */ "./src/domain/entities/User.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ "./src/domain/services/configs.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var UsersService = function UsersService(_ref) {
  var _this = this;

  var usersRepository = _ref.usersRepository;

  _classCallCheck(this, UsersService);

  _defineProperty(this, "addNew", function (formElementsDTO) {
    var user = new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](formElementsDTO);
    return new Promise(function (resolve) {
      resolve(_this.usersRepository.insert(user));
    });
  });

  _defineProperty(this, "getAll", function () {
    return new Promise(function (resolve) {
      var listOfDomainUsers = _this.usersRepository.getAll().map(function (user) {
        return new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"]({
          cpf: user.cpf,
          email: user.email,
          fullName: user.name,
          phone: user.phone
        });
      });

      resolve(listOfDomainUsers);
    });
  });

  _defineProperty(this, "deleteUser", function (removableUserDTO) {
    var user = new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](removableUserDTO);

    _this.usersRepository.remove(user);

    return new Promise(function (resolve) {
      resolve({
        message: 'removed with success'
      });
    });
  });

  _defineProperty(this, "insertExternalUsers", function () {
    return fetch(_configs__WEBPACK_IMPORTED_MODULE_1__["EXTERNAL_SERVICE_URL"]).then(function (response) {
      if (response.ok) return response.json();
      return response;
    }).then(function (users) {
      users.forEach(function (user) {
        return _this.usersRepository.insert(new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"]({
          cpf: user.cpf,
          email: user.email,
          fullName: user.name,
          phone: user.phone
        }));
      });
      return _this.getAll();
    });
  });

  _defineProperty(this, "getAllWithInitialData", function () {
    var hasUsersFromRepository = _this.usersRepository.getAll().length > 0;

    if (hasUsersFromRepository) {
      return _this.getAll();
    }

    return _this.insertExternalUsers();
  });

  this.usersRepository = usersRepository;
};



/***/ }),

/***/ "./src/domain/services/configs.js":
/*!****************************************!*\
  !*** ./src/domain/services/configs.js ***!
  \****************************************/
/*! exports provided: EXTERNAL_SERVICE_URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTERNAL_SERVICE_URL", function() { return EXTERNAL_SERVICE_URL; });
var EXTERNAL_SERVICE_URL = 'https://private-21e8de-rafaellucio.apiary-mock.com/users';
/* harmony default export */ __webpack_exports__["default"] = ({
  EXTERNAL_SERVICE_URL: EXTERNAL_SERVICE_URL
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var UsersRepository =
/*#__PURE__*/
function () {
  function UsersRepository() {
    var _this = this;

    _classCallCheck(this, UsersRepository);

    _defineProperty(this, "key", 'users');

    _defineProperty(this, "getItemFromLocalStorage", function () {
      return JSON.parse(localStorage.getItem(_this.key)) || [];
    });

    _defineProperty(this, "setItemInLocalStorage", function (item) {
      return localStorage.setItem(_this.key, JSON.stringify(item));
    });

    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
  }

  _createClass(UsersRepository, [{
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
        return !Object(_deepEqual__WEBPACK_IMPORTED_MODULE_0__["default"])(currentUser, removableUserDbObj);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9jb25maWdzLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ1c2VycyIsImNsaWNrVGFyZ2V0RWxlbWVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidXNlclRyIiwiY2xvc2VzdCIsInVzZXJUZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidXNlckRhdGEiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VGQiLCJjdXJyZW50RGF0YVR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsInN0YXRlIiwibWFwIiwidXNlciIsImdldEZ1bGxOYW1lIiwiZ2V0Q1BGRm9ybWF0ZWQiLCJnZXRFbWFpbCIsImdldFBob25lRm9ybWF0ZWQiLCJqb2luIiwibGVuZ3RoIiwiYmFzZUVsZW1lbnQiLCJzZXR1cEV2ZW50cyIsIm9uY2xpY2siLCJyZW1vdmVVc2VyIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImZvcm1FbGVtZW50c0RUTyIsImZ1bGxOYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJlbWFpbCIsInVzZXJzUmVwb3NpdG9yeSIsIlVzZXJzUmVwb3NpdG9yeSIsInVzZXJzU2VydmljZSIsIlVzZXJzU2VydmljZSIsImFkZE5ldyIsInRoZW4iLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXNlcnNUYWJsZSIsImRvY3VtZW50IiwiZ2V0QWxsV2l0aEluaXRpYWxEYXRhIiwic2V0U3RhdGUiLCJyZW1vdmFibGVVc2VyRFRPIiwibm9tZSIsInRlbGVmb25lIiwiZGVsZXRlVXNlciIsImdldEFsbCIsIiRmb3JtRWxlbWVudCIsInN0YXJ0QnRuU3VibWl0TG9hZGluZyIsImFkZCIsInNldEF0dHJpYnV0ZSIsInN0b3BCdG5TdWJtaXRMb2FkaW5nIiwicmVtb3ZlQXR0cmlidXRlIiwicmVzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybVZhbGlkYXRvciIsIkZvcm1WYWxpZGF0b3IiLCJuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSIsInBhZ2VDYWRhc3RybyIsInVzZXJDb250cm9sbGVyIiwiY29udHJhY3QiLCJ2YWxpZGF0ZSIsImlzUmVxdWlyZWQiLCJpc0VtYWlsIiwiaXNDUEYiLCJoYXNNaW5MZW5ndGgiLCJVc2VyIiwiZ2V0VmFsdWUiLCJnZXRWYWx1ZUZvcm1hdGVkIiwiZ2V0TnVtYmVyIiwiZ2V0TnVtYmVyRm9ybWF0ZWQiLCJDUEYiLCJDUEZOdW1iZXJzIiwiUGhvbmUiLCJudW1iZXIiLCJ0b0xvd2VyQ2FzZSIsIk9iamVjdCIsImZyZWV6ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW5zZXJ0IiwibGlzdE9mRG9tYWluVXNlcnMiLCJuYW1lIiwibWVzc2FnZSIsImZldGNoIiwiRVhURVJOQUxfU0VSVklDRV9VUkwiLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImZvckVhY2giLCJoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5IiwiaW5zZXJ0RXh0ZXJuYWxVc2VycyIsIkNQRlJlZ2V4IiwicmVwbGFjZSIsImZ1bGxNYXRjaCIsInBhcnRPbmUiLCJwYXJ0VHdvIiwicGFydFRocmVlIiwiZGlnaXQiLCJkZGQiLCJudW1iZXJQYXJ0T25lIiwibnVtYmVyUGFydFR3byIsIm5ld1N0YXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiVmFsaWRhdGlvbnMiLCJwYXJhbSIsImNvbmRpdGlvbiIsInZhbGlkYXRpb25OYW1lIiwic2V0RXJyb3IiLCJyZW1vdmVFcnJvciIsImFwcGx5VmFsaWRhdGlvbiIsInJlZ2V4RW1haWxWYWxpZCIsIlJlZ0V4cCIsInRlc3QiLCJzdW0iLCJjcGZWYWx1ZSIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsIm1vZCIsIm1pbkxlbmd0aCIsIlZhbGlkYXRpb25Db250cmFjdCIsIk1hcCIsImxpc3RPZlZhbGlkYXRpb25FcnJvcnMiLCJlcnJvcnMiLCJ2YWx1ZXMiLCJmaXJzdFZhbGlkYXRpb25FcnJvckhhc0Vycm9ycyIsInNpemUiLCJpc1ZhbGlkQ29udHJhY3QiLCJjdXJyZW50RXJyb3IiLCJoYXNDdXJyZW50VmFsaWRhdGlvbkVycm9yRXJyb3JzIiwicHJldmlvdXNPckN1cnJlbnRIYXNFcnJvcnMiLCJ0eXBlIiwiZXJyb3JPYmoiLCJnZXRFcnJvcnNCeVBhcmFtIiwic2V0IiwiZGVsZXRlIiwic2V0UGFyYW0iLCJnZXQiLCJwYXJhbUVycm9ycyIsIkZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRmllbGROYW1lIiwidmFsaWRhdGlvbkNvbnRyYWN0IiwiZmllbGRWYWxpZGF0aW9uIiwidmFsaWRhdGlvbiIsInVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cyIsInVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMiLCJ1cGRhdGVFcnJvcnMiLCJpbml0aWFsaXplZCIsImVycm9yc09mVGhpc1BhcmFtIiwiZmlyc3RFcnJvciIsImZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaXNWYWxpZFBhcmFtIiwiaXNWYWxpZCIsInNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwYXJlbnROb2RlIiwiaW5pdCIsInNldHVwRm9ybUVsZW1lbnQiLCJmb3JtRmllbGROYW1lcyIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJoYXNFcnJvcnMiLCJhcnJheU9mRm9ybUZpZWxkTmFtZXMiLCJrZXlzIiwiZmllbGROYW1lIiwiJGZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRWxlbWVudCIsImZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnRzIiwicHVzaCIsImNsZWFyIiwidmFsaWRhdGVGb3JtRmllbGRFbGVtZW50Iiwic2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyIsImRlZXBFcXVhbCIsImEiLCJiIiwiYUtleXMiLCJrZXkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJiaW5kIiwiZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UiLCJsaXN0T2ZVc2VycyIsImNyZWF0ZWRVc2VyIiwiZ2V0Q1BGIiwiZ2V0UGhvbmUiLCJzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UiLCJyZW1vdmFibGVVc2VyIiwicmVtb3ZhYmxlVXNlckRiT2JqIiwidXBkYXRlZExpc3RPZlVzZXJzIiwiZmlsdGVyIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7SUFFcUJBLFU7Ozs7O0FBS25CLHNCQUFZQyxPQUFaLEVBQXFCQyxVQUFyQixFQUFpQztBQUFBOztBQUFBOztBQUMvQjs7QUFEK0Isb0ZBSnpCO0FBQ05DLFdBQUssRUFBRTtBQURELEtBSXlCOztBQUFBLHlGQWdCcEIsZ0JBQW9DO0FBQUEsVUFBekJDLGtCQUF5QixRQUFqQ0MsTUFBaUM7O0FBQy9DLFVBQUlELGtCQUFrQixDQUFDRSxTQUFuQixDQUE2QkMsUUFBN0IsQ0FBc0MsWUFBdEMsQ0FBSixFQUF5RDtBQUN2RCxZQUFNQyxNQUFNLEdBQUdKLGtCQUFrQixDQUFDSyxPQUFuQixDQUEyQixJQUEzQixDQUFmO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLGdCQUFQLENBQXdCLElBQXhCLENBQWhCO0FBQ0EsWUFBTUMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0osT0FBWCxFQUFvQkssTUFBcEIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFNQyxTQUFOLEVBQW9CO0FBQzlELGNBQU1DLGVBQWUsR0FBR0QsU0FBUyxDQUFDRSxZQUFWLENBQXVCLFdBQXZCLENBQXhCO0FBQ0FILGFBQUcsQ0FBQ0UsZUFBRCxDQUFILEdBQXVCRCxTQUFTLENBQUNHLFdBQWpDO0FBQ0EsaUJBQU9KLEdBQVA7QUFDRCxTQUpnQixFQUlkLEVBSmMsQ0FBakI7O0FBS0EsY0FBS2QsVUFBTCxDQUFnQm1CLE1BQWhCLENBQXVCVCxRQUF2QjtBQUNEO0FBQ0YsS0EzQmdDOztBQUFBLHVGQTZCdEI7QUFBQSxzUkFZRCxNQUFLVSxLQUFMLENBQVduQixLQUFYLENBQWlCb0IsR0FBakIsQ0FBcUIsVUFBQUMsSUFBSTtBQUFBLHNGQUVFQSxJQUFJLENBQUNDLFdBQUwsRUFGRiwwREFHQ0QsSUFBSSxDQUFDRSxjQUFMLEVBSEQsNERBSUdGLElBQUksQ0FBQ0csUUFBTCxFQUpILCtEQUtNSCxJQUFJLENBQUNJLGdCQUFMLEVBTE47QUFBQSxPQUF6QixFQVFHQyxJQVJILENBUVEsRUFSUixDQVpDLHlCQXVCRCxNQUFLUCxLQUFMLENBQVduQixLQUFYLENBQWlCMkIsTUFBakIsS0FBNEIsQ0FBNUIsR0FBZ0MsMkVBQWhDLEdBQThHLEVBdkI3RztBQUFBLEtBN0JzQjs7QUFFL0IsVUFBSzVCLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsVUFBSzZCLFdBQUwsR0FBbUI5QixPQUFuQjs7QUFFQSxVQUFLK0IsV0FBTDs7QUFMK0I7QUFNaEM7Ozs7a0NBRWE7QUFDWixXQUFLRCxXQUFMLENBQWlCRSxPQUFqQixHQUEyQixLQUFLQyxVQUFoQztBQUNEOzs7NkJBRVE7QUFDUCxXQUFLSCxXQUFMLENBQWlCSSxTQUFqQixHQUE2QixLQUFLQyxRQUFMLEVBQTdCO0FBQ0Q7Ozs7RUFuQnFDQyx3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4QztBQUNBO0FBQ0E7O0lBRXFCQyxjOzs7Ozs7Ozs7d0JBQ1JDLEssRUFBTztBQUNoQkEsV0FBSyxDQUFDQyxjQUFOO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNsQyxNQUFwQjtBQUVBLFVBQUlvQyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLFNBQWhCLEVBQUosRUFBaUM7QUFFakNGLFdBQUssQ0FBQ0csYUFBTixDQUFvQixJQUFJQyxLQUFKLENBQVUsa0JBQVYsQ0FBcEI7QUFFQSxVQUFNQyxlQUFlLEdBQUc7QUFDdEJDLGdCQUFRLEVBQUVOLEtBQUssQ0FBQ08sYUFBTixDQUFvQiw0QkFBcEIsRUFBa0RDLEtBRHRDO0FBRXRCQyxXQUFHLEVBQUVULEtBQUssQ0FBQ08sYUFBTixDQUFvQiwyQkFBcEIsRUFBaURDLEtBRmhDO0FBR3RCRSxhQUFLLEVBQUVWLEtBQUssQ0FBQ08sYUFBTixDQUFvQixnQ0FBcEIsRUFBc0RDLEtBSHZDO0FBSXRCRyxhQUFLLEVBQUVYLEtBQUssQ0FBQ08sYUFBTixDQUFvQiw2QkFBcEIsRUFBbURDO0FBSnBDLE9BQXhCO0FBT0EsVUFBTUksZUFBZSxHQUFHLElBQUlDLDJFQUFKLEVBQXhCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLElBQUlDLHFFQUFKLENBQWlCO0FBQUVILHVCQUFlLEVBQWZBO0FBQUYsT0FBakIsQ0FBckI7QUFFQUUsa0JBQVksQ0FDVEUsTUFESCxDQUNVWCxlQURWLEVBRUdZLElBRkgsQ0FFUSxZQUFNO0FBQ1ZDLGtCQUFVLENBQUMsWUFBTTtBQUNmbEIsZUFBSyxDQUFDRyxhQUFOLENBQW9CLElBQUlDLEtBQUosQ0FBVSxpQkFBVixDQUFwQjtBQUNBZSxnQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QjtBQUNELFNBSFMsRUFHUCxJQUhPLENBQVY7QUFJRCxPQVBIO0FBUUQ7Ozs4QkFFZ0I7QUFDZixVQUFNQyxVQUFVLEdBQUcsSUFBSS9ELDhEQUFKLENBQWU0RCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JoQixhQUFoQixDQUE4Qiw4QkFBOUIsQ0FBZixFQUE4RVYsY0FBOUUsQ0FBbkI7QUFFQSxVQUFNZSxlQUFlLEdBQUcsSUFBSUMsMkVBQUosRUFBeEI7QUFDQSxVQUFNQyxZQUFZLEdBQUcsSUFBSUMscUVBQUosQ0FBaUI7QUFBRUgsdUJBQWUsRUFBZkE7QUFBRixPQUFqQixDQUFyQjtBQUVBRSxrQkFBWSxDQUNUVSxxQkFESCxHQUVHUCxJQUZILENBRVEsVUFBQ3ZELEtBQUQsRUFBVztBQUNmNEQsa0JBQVUsQ0FBQ0csUUFBWCxDQUFvQjtBQUNsQi9ELGVBQUssRUFBTEE7QUFEa0IsU0FBcEI7QUFHRCxPQU5IO0FBT0Q7OzsyQkFFYXFCLEksRUFBTTtBQUNsQixVQUFNdUMsVUFBVSxHQUFHLElBQUkvRCw4REFBSixDQUFlNEQsTUFBTSxDQUFDSSxRQUFQLENBQWdCaEIsYUFBaEIsQ0FBOEIsOEJBQTlCLENBQWYsRUFBOEVWLGNBQTlFLENBQW5CO0FBRUEsVUFBTTZCLGdCQUFnQixHQUFHO0FBQ3ZCcEIsZ0JBQVEsRUFBRXZCLElBQUksQ0FBQzRDLElBRFE7QUFFdkJsQixXQUFHLEVBQUUxQixJQUFJLENBQUMwQixHQUZhO0FBR3ZCQyxhQUFLLEVBQUUzQixJQUFJLENBQUM2QyxRQUhXO0FBSXZCakIsYUFBSyxFQUFFNUIsSUFBSSxDQUFDNEI7QUFKVyxPQUF6QjtBQU9BLFVBQU1DLGVBQWUsR0FBRyxJQUFJQywyRUFBSixFQUF4QjtBQUNBLFVBQU1DLFlBQVksR0FBRyxJQUFJQyxxRUFBSixDQUFpQjtBQUFFSCx1QkFBZSxFQUFmQTtBQUFGLE9BQWpCLENBQXJCO0FBRUFFLGtCQUFZLENBQ1RlLFVBREgsQ0FDY0gsZ0JBRGQsRUFFR1QsSUFGSCxDQUVRSCxZQUFZLENBQUNnQixNQUZyQixFQUdHYixJQUhILENBR1EsVUFBQ3ZELEtBQUQsRUFBVztBQUNmNEQsa0JBQVUsQ0FBQ0csUUFBWCxDQUFvQjtBQUNsQi9ELGVBQUssRUFBTEE7QUFEa0IsU0FBcEI7QUFHRCxPQVBIO0FBUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFSDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTXFFLFlBQVksR0FBR1osTUFBTSxDQUFDSSxRQUFQLENBQWdCaEIsYUFBaEIsQ0FBOEIsaUNBQTlCLENBQXJCOztBQUVBLFNBQVN5QixxQkFBVCxHQUFpQztBQUMvQkQsY0FBWSxDQUFDeEIsYUFBYixDQUEyQiw0QkFBM0IsRUFBeUQxQyxTQUF6RCxDQUFtRW9FLEdBQW5FLENBQXVFLFVBQXZFO0FBQ0FGLGNBQVksQ0FBQ3hCLGFBQWIsQ0FBMkIsNEJBQTNCLEVBQXlEMkIsWUFBekQsQ0FBc0UsVUFBdEUsRUFBa0YsTUFBbEY7QUFDRDs7QUFFRCxTQUFTQyxvQkFBVCxHQUFnQztBQUM5QkosY0FBWSxDQUFDeEIsYUFBYixDQUEyQiw0QkFBM0IsRUFBeUQxQyxTQUF6RCxDQUFtRWUsTUFBbkUsQ0FBMEUsVUFBMUU7QUFDQW1ELGNBQVksQ0FBQ3hCLGFBQWIsQ0FBMkIsNEJBQTNCLEVBQXlENkIsZUFBekQsQ0FBeUUsVUFBekU7QUFDQUwsY0FBWSxDQUFDTSxLQUFiO0FBQ0Q7O0FBRUROLFlBQVksQ0FBQ08sZ0JBQWIsQ0FBOEIsa0JBQTlCLEVBQWtETixxQkFBbEQ7QUFDQUQsWUFBWSxDQUFDTyxnQkFBYixDQUE4QixpQkFBOUIsRUFBaURILG9CQUFqRDtBQUdlO0FBQ2IzRSxTQUFPLEVBQUV1RSxZQURJO0FBRWJRLGVBQWEsRUFBRSxJQUFJQyw0REFBSixDQUFrQlQsWUFBbEIsRUFBZ0NVLDRFQUFoQztBQUZGLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQXRCLE1BQU0sQ0FBQ3VCLFlBQVAsR0FBc0I7QUFDcEJDLGdCQUFjLEVBQUU5QyxrRUFBY0E7QUFEVixDQUF0QixDOzs7Ozs7Ozs7OztBQ0hBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBLElBQU00Qyx1QkFBdUIsR0FBRztBQUM5QmQsTUFBSSxFQUFFLGNBQUNuQixLQUFELEVBQVFvQyxRQUFSO0FBQUEsV0FBcUJBLFFBQVEsQ0FDaENDLFFBRHdCLENBQ2YsTUFEZSxFQUNQckMsS0FETyxFQUV4QnNDLFVBRndCLENBRWIsNEJBRmEsQ0FBckI7QUFBQSxHQUR3QjtBQUk5Qm5DLE9BQUssRUFBRSxlQUFDSCxLQUFELEVBQVFvQyxRQUFSO0FBQUEsV0FBcUJBLFFBQVEsQ0FDakNDLFFBRHlCLENBQ2hCLE9BRGdCLEVBQ1ByQyxLQURPLEVBRXpCc0MsVUFGeUIsQ0FFZCw2QkFGYyxFQUd6QkMsT0FIeUIsQ0FHakIsMEJBSGlCLENBQXJCO0FBQUEsR0FKdUI7QUFROUJ0QyxLQUFHLEVBQUUsYUFBQ0QsS0FBRCxFQUFRb0MsUUFBUjtBQUFBLFdBQXFCQSxRQUFRLENBQy9CQyxRQUR1QixDQUNkLEtBRGMsRUFDUHJDLEtBRE8sRUFFdkJzQyxVQUZ1QixDQUVaLDJCQUZZLEVBR3ZCRSxLQUh1QixDQUdqQixrQ0FIaUIsQ0FBckI7QUFBQSxHQVJ5QjtBQVk5QnBCLFVBQVEsRUFBRSxrQkFBQ3BCLEtBQUQsRUFBUW9DLFFBQVI7QUFBQSxXQUFxQkEsUUFBUSxDQUNwQ0MsUUFENEIsQ0FDbkIsVUFEbUIsRUFDUHJDLEtBRE8sRUFFNUJzQyxVQUY0QixDQUVqQixnQ0FGaUIsRUFHNUJHLFlBSDRCLENBR2YsRUFIZSxFQUdYLDRCQUhXLENBQXJCO0FBQUE7QUFab0IsQ0FBaEM7QUFrQmVSLHNGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7O0lBRXFCUyxJLEdBQ25CLG9CQUtHO0FBQUE7O0FBQUEsTUFKRDVDLFFBSUMsUUFKREEsUUFJQztBQUFBLE1BSERHLEdBR0MsUUFIREEsR0FHQztBQUFBLE1BRkRDLEtBRUMsUUFGREEsS0FFQztBQUFBLE1BRERDLEtBQ0MsUUFEREEsS0FDQzs7QUFBQTs7QUFBQSx1Q0FTVztBQUFBLFdBQU0sS0FBSSxDQUFDTCxRQUFYO0FBQUEsR0FUWDs7QUFBQSxvQ0FXUTtBQUFBLFdBQU0sS0FBSSxDQUFDSyxLQUFYO0FBQUEsR0FYUjs7QUFBQSxrQ0FhTTtBQUFBLFdBQU0sS0FBSSxDQUFDRixHQUFMLENBQVMwQyxRQUFULEVBQU47QUFBQSxHQWJOOztBQUFBLDBDQWVjO0FBQUEsV0FBTSxLQUFJLENBQUMxQyxHQUFMLENBQVMyQyxnQkFBVCxFQUFOO0FBQUEsR0FmZDs7QUFBQSxvQ0FpQlE7QUFBQSxXQUFNLEtBQUksQ0FBQzFDLEtBQUwsQ0FBVzJDLFNBQVgsRUFBTjtBQUFBLEdBakJSOztBQUFBLDRDQW1CZ0I7QUFBQSxXQUFNLEtBQUksQ0FBQzNDLEtBQUwsQ0FBVzRDLGlCQUFYLEVBQU47QUFBQSxHQW5CaEI7O0FBQ0QsT0FBS2hELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0csR0FBTCxHQUFXLElBQUk4Qyx5REFBSixDQUFRO0FBQUVDLGNBQVUsRUFBRS9DO0FBQWQsR0FBUixDQUFYO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLElBQUkrQywyREFBSixDQUFVO0FBQUVDLFVBQU0sRUFBRWhEO0FBQVYsR0FBVixDQUFiO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFLLENBQUNnRCxXQUFOLEVBQWI7QUFFQUMsUUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkg7QUFDQTs7SUFFcUI5QyxZLEdBQ25CLDRCQUFpQztBQUFBOztBQUFBLE1BQW5CSCxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsa0NBSXhCLFVBQUNQLGVBQUQsRUFBcUI7QUFDNUIsUUFBTXRCLElBQUksR0FBRyxJQUFJbUUsc0RBQUosQ0FBUzdDLGVBQVQsQ0FBYjtBQUNBLFdBQU8sSUFBSXlELE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUJBLGFBQU8sQ0FBQyxLQUFJLENBQUNuRCxlQUFMLENBQXFCb0QsTUFBckIsQ0FBNEJqRixJQUE1QixDQUFELENBQVA7QUFDRCxLQUZNLENBQVA7QUFHRCxHQVRnQzs7QUFBQSxrQ0FXeEI7QUFBQSxXQUFNLElBQUkrRSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3RDLFVBQU1FLGlCQUFpQixHQUFHLEtBQUksQ0FBQ3JELGVBQUwsQ0FBcUJrQixNQUFyQixHQUE4QmhELEdBQTlCLENBQWtDLFVBQUFDLElBQUk7QUFBQSxlQUFJLElBQUltRSxzREFBSixDQUFTO0FBQzNFekMsYUFBRyxFQUFFMUIsSUFBSSxDQUFDMEIsR0FEaUU7QUFFM0VFLGVBQUssRUFBRTVCLElBQUksQ0FBQzRCLEtBRitEO0FBRzNFTCxrQkFBUSxFQUFFdkIsSUFBSSxDQUFDbUYsSUFINEQ7QUFJM0V4RCxlQUFLLEVBQUUzQixJQUFJLENBQUMyQjtBQUorRCxTQUFULENBQUo7QUFBQSxPQUF0QyxDQUExQjs7QUFNQXFELGFBQU8sQ0FBQ0UsaUJBQUQsQ0FBUDtBQUNELEtBUmMsQ0FBTjtBQUFBLEdBWHdCOztBQUFBLHNDQXFCcEIsVUFBQ3ZDLGdCQUFELEVBQXNCO0FBQ2pDLFFBQU0zQyxJQUFJLEdBQUcsSUFBSW1FLHNEQUFKLENBQVN4QixnQkFBVCxDQUFiOztBQUNBLFNBQUksQ0FBQ2QsZUFBTCxDQUFxQmhDLE1BQXJCLENBQTRCRyxJQUE1Qjs7QUFDQSxXQUFPLElBQUkrRSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCQSxhQUFPLENBQUM7QUFBRUksZUFBTyxFQUFFO0FBQVgsT0FBRCxDQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0EzQmdDOztBQUFBLCtDQTZCWDtBQUFBLFdBQU1DLEtBQUssQ0FBQ0MsNkRBQUQsQ0FBTCxDQUN6QnBELElBRHlCLENBQ3BCLFVBQUNxRCxRQUFELEVBQWM7QUFDbEIsVUFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBVCxFQUFQO0FBQ2pCLGFBQU9GLFFBQVA7QUFDRCxLQUp5QixFQUt6QnJELElBTHlCLENBS3BCLFVBQUN2RCxLQUFELEVBQVc7QUFDZkEsV0FBSyxDQUFDK0csT0FBTixDQUFjLFVBQUExRixJQUFJO0FBQUEsZUFBSSxLQUFJLENBQUM2QixlQUFMLENBQXFCb0QsTUFBckIsQ0FBNEIsSUFBSWQsc0RBQUosQ0FBUztBQUN6RHpDLGFBQUcsRUFBRTFCLElBQUksQ0FBQzBCLEdBRCtDO0FBRXpERSxlQUFLLEVBQUU1QixJQUFJLENBQUM0QixLQUY2QztBQUd6REwsa0JBQVEsRUFBRXZCLElBQUksQ0FBQ21GLElBSDBDO0FBSXpEeEQsZUFBSyxFQUFFM0IsSUFBSSxDQUFDMkI7QUFKNkMsU0FBVCxDQUE1QixDQUFKO0FBQUEsT0FBbEI7QUFPQSxhQUFPLEtBQUksQ0FBQ29CLE1BQUwsRUFBUDtBQUNELEtBZHlCLENBQU47QUFBQSxHQTdCVzs7QUFBQSxpREE2Q1QsWUFBTTtBQUM1QixRQUFNNEMsc0JBQXNCLEdBQUcsS0FBSSxDQUFDOUQsZUFBTCxDQUFxQmtCLE1BQXJCLEdBQThCekMsTUFBOUIsR0FBdUMsQ0FBdEU7O0FBQ0EsUUFBSXFGLHNCQUFKLEVBQTRCO0FBQzFCLGFBQU8sS0FBSSxDQUFDNUMsTUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFJLENBQUM2QyxtQkFBTCxFQUFQO0FBQ0QsR0FuRGdDOztBQUMvQixPQUFLL0QsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ05IO0FBQUE7QUFBTyxJQUFNeUQsb0JBQW9CLEdBQUcsMERBQTdCO0FBRVE7QUFDYkEsc0JBQW9CLEVBQXBCQTtBQURhLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRnFCZCxHLEdBQ25CLG1CQUE0QjtBQUFBOztBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFBQTs7QUFBQSxvQ0FNakI7QUFBQSxXQUFNLEtBQUksQ0FBQ0EsVUFBWDtBQUFBLEdBTmlCOztBQUFBLDRDQVFULFlBQU07QUFDdkIsUUFBTW9CLFFBQVEsR0FBRyw4QkFBakI7QUFDQSxXQUFPLEtBQUksQ0FBQ3BCLFVBQUwsQ0FBZ0JxQixPQUFoQixDQUF3QkQsUUFBeEIsRUFBa0MsVUFBQ0UsU0FBRCxFQUFZQyxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QkMsU0FBOUIsRUFBeUNDLEtBQXpDO0FBQUEsdUJBQXNESCxPQUF0RCxjQUFpRUMsT0FBakUsY0FBNEVDLFNBQTVFLGNBQXlGQyxLQUF6RjtBQUFBLEtBQWxDLENBQVA7QUFDRCxHQVgyQjs7QUFDMUIsT0FBSzFCLFVBQUwsR0FBa0JBLFVBQVUsQ0FBQ3FCLE9BQVgsQ0FBbUIsSUFBbkIsRUFBeUIsRUFBekIsRUFBNkJBLE9BQTdCLENBQXFDLEtBQXJDLEVBQTRDLEVBQTVDLENBQWxCO0FBRUFqQixRQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNMa0JKLEssR0FDbkIscUJBQXdCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBOztBQUFBLHFDQUtaO0FBQUEsV0FBTSxLQUFJLENBQUNBLE1BQVg7QUFBQSxHQUxZOztBQUFBLDZDQU9KO0FBQUEsV0FBTSxLQUFJLENBQUNBLE1BQUwsQ0FBWW1CLE9BQVosQ0FBb0Isd0JBQXBCLEVBQThDLFVBQUNDLFNBQUQsRUFBWUssR0FBWixFQUFpQkMsYUFBakIsRUFBZ0NDLGFBQWhDLEVBQWtEO0FBQ3hILFVBQUlGLEdBQUosRUFBUyxpQkFBVUEsR0FBVixjQUFpQkMsYUFBakIsY0FBa0NDLGFBQWxDO0FBRVQsdUJBQVVELGFBQVYsY0FBMkJDLGFBQTNCO0FBQ0QsS0FKeUIsQ0FBTjtBQUFBLEdBUEk7O0FBQ3RCLE9BQUszQixNQUFMLEdBQWNBLE1BQU0sQ0FBQ21CLE9BQVAsQ0FBZSxJQUFmLEVBQXFCLEVBQXJCLENBQWQ7QUFDQWpCLFFBQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSmtCakUsUzs7Ozs7b0NBQ1IsVUFBQzBGLFFBQUQsRUFBYztBQUN2QkMseUJBQXFCLENBQUMsWUFBTTtBQUMxQixXQUFJLENBQUMxRyxLQUFMLHFCQUNLLEtBQUksQ0FBQ0EsS0FEVixFQUVLeUcsUUFGTDs7QUFJQSxXQUFJLENBQUNFLE1BQUw7QUFDRCxLQU5vQixDQUFyQjtBQU9ELEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1RrQkMsVyxHQUNuQiwyQkFBd0M7QUFBQTs7QUFBQSxNQUExQjdDLFFBQTBCLFFBQTFCQSxRQUEwQjtBQUFBLE1BQWhCOEMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsTUFBVGxGLE1BQVMsUUFBVEEsS0FBUzs7QUFBQTs7QUFBQSwyQ0FNdEIsVUFBQ21GLFNBQUQsRUFBWUMsY0FBWixFQUE0QnpCLE9BQTVCLEVBQXdDO0FBQ3hELFFBQUl3QixTQUFKLEVBQWU7QUFDYixXQUFJLENBQUMvQyxRQUFMLENBQWNpRCxRQUFkLENBQXVCLEtBQUksQ0FBQ0gsS0FBNUIsRUFBbUNFLGNBQW5DLEVBQW1EekIsT0FBbkQ7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFJLENBQUN2QixRQUFMLENBQWNrRCxXQUFkLENBQTBCLEtBQUksQ0FBQ0osS0FBL0IsRUFBc0NFLGNBQXRDLEVBQXNEekIsT0FBdEQ7QUFDRDtBQUNGLEdBWnVDOztBQUFBLHNDQWMzQixZQUF3QztBQUFBLFFBQXZDQSxPQUF1Qyx1RUFBN0Isd0JBQTZCO0FBQ25ELFFBQU13QixTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUNuRixLQUFOLElBQWUsS0FBSSxDQUFDQSxLQUFMLENBQVduQixNQUFYLElBQXFCLENBQXREOztBQUVBLFNBQUksQ0FBQzBHLGVBQUwsQ0FBcUJKLFNBQXJCLEVBQWdDLFlBQWhDLEVBQThDeEIsT0FBOUM7O0FBRUEsV0FBTyxLQUFQO0FBQ0QsR0FwQnVDOztBQUFBLG1DQXNCOUIsWUFBd0M7QUFBQSxRQUF2Q0EsT0FBdUMsdUVBQTdCLHdCQUE2QjtBQUNoRCxRQUFNNkIsZUFBZSxHQUFHLElBQUlDLE1BQUosQ0FBVyxnREFBWCxDQUF4QjtBQUNBLFFBQU1OLFNBQVMsR0FBRyxDQUFDSyxlQUFlLENBQUNFLElBQWhCLENBQXFCLEtBQUksQ0FBQzFGLEtBQTFCLENBQW5COztBQUNBLFNBQUksQ0FBQ3VGLGVBQUwsQ0FBcUJKLFNBQXJCLEVBQWdDLFNBQWhDLEVBQTJDeEIsT0FBM0M7O0FBRUEsV0FBTyxLQUFQO0FBQ0QsR0E1QnVDOztBQUFBLGlDQThCaEMsWUFBc0M7QUFBQSxRQUFyQ0EsT0FBcUMsdUVBQTNCLHNCQUEyQjtBQUM1QyxRQUFNd0IsU0FBUyxHQUFHLENBQUUsVUFBQ25GLEtBQUQsRUFBVztBQUM3QixVQUFJMkYsR0FBRyxHQUFHLENBQVY7QUFDQSxVQUFNQyxRQUFRLEdBQUc1RixLQUFqQjtBQUNBLFVBQUk0RixRQUFRLEtBQUssYUFBakIsRUFBZ0MsT0FBTyxLQUFQOztBQUVoQyxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksQ0FBckIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQztBQUM5QkYsV0FBRyxJQUFJRyxRQUFRLENBQUNGLFFBQVEsQ0FBQ0csU0FBVCxDQUFtQkYsQ0FBQyxHQUFHLENBQXZCLEVBQTBCQSxDQUExQixDQUFELEVBQStCLEVBQS9CLENBQVIsSUFBOEMsS0FBS0EsQ0FBbkQsQ0FBUDtBQUNEOztBQUNELFVBQUlHLEdBQUcsR0FBSUwsR0FBRyxHQUFHLEVBQVAsR0FBYSxFQUF2QjtBQUVBLFVBQUtLLEdBQUcsS0FBSyxFQUFULElBQWlCQSxHQUFHLEtBQUssRUFBN0IsRUFBa0NBLEdBQUcsR0FBRyxDQUFOO0FBQ2xDLFVBQUlBLEdBQUcsS0FBS0YsUUFBUSxDQUFDRixRQUFRLENBQUNHLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsQ0FBRCxFQUE0QixFQUE1QixDQUFwQixFQUFxRCxPQUFPLEtBQVA7QUFFckRKLFNBQUcsR0FBRyxDQUFOOztBQUNBLFdBQUssSUFBSUUsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsSUFBSSxFQUFyQixFQUF5QkEsRUFBQyxJQUFJLENBQTlCLEVBQWlDO0FBQy9CRixXQUFHLElBQUlHLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDRyxTQUFULENBQW1CRixFQUFDLEdBQUcsQ0FBdkIsRUFBMEJBLEVBQTFCLENBQUQsRUFBK0IsRUFBL0IsQ0FBUixJQUE4QyxLQUFLQSxFQUFuRCxDQUFQO0FBQ0Q7O0FBQ0RHLFNBQUcsR0FBSUwsR0FBRyxHQUFHLEVBQVAsR0FBYSxFQUFuQjtBQUVBLFVBQUtLLEdBQUcsS0FBSyxFQUFULElBQWlCQSxHQUFHLEtBQUssRUFBN0IsRUFBa0NBLEdBQUcsR0FBRyxDQUFOO0FBQ2xDLFVBQUlBLEdBQUcsS0FBS0YsUUFBUSxDQUFDRixRQUFRLENBQUNHLFNBQVQsQ0FBbUIsRUFBbkIsRUFBdUIsRUFBdkIsQ0FBRCxFQUE2QixFQUE3QixDQUFwQixFQUFzRCxPQUFPLEtBQVA7QUFDdEQsYUFBTyxJQUFQO0FBQ0QsS0F0QmtCLENBc0JoQixLQUFJLENBQUMvRixLQXRCVyxDQUFuQjs7QUF5QkEsU0FBSSxDQUFDdUYsZUFBTCxDQUFxQkosU0FBckIsRUFBZ0MsT0FBaEMsRUFBeUN4QixPQUF6Qzs7QUFFQSxXQUFPLEtBQVA7QUFDRCxHQTNEdUM7O0FBQUEsd0NBNkR6QixVQUFDc0MsU0FBRCxFQUEyRDtBQUFBLFFBQS9DdEMsT0FBK0MsbUdBQWhCc0MsU0FBZ0I7QUFDeEUsUUFBTWQsU0FBUyxHQUFHLEVBQUUsS0FBSSxDQUFDbkYsS0FBTCxDQUFXbkIsTUFBWCxJQUFxQm9ILFNBQXZCLENBQWxCOztBQUNBLFNBQUksQ0FBQ1YsZUFBTCxDQUFxQkosU0FBckIsRUFBZ0MsY0FBaEMsRUFBZ0R4QixPQUFoRDs7QUFFQSxXQUFPLEtBQVA7QUFDRCxHQWxFdUM7O0FBQ3RDLE9BQUt1QixLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLOUMsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLcEMsS0FBTCxHQUFhQSxNQUFiO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xIOztJQUVxQmtHLGtCOzs7Ozs7OztvQ0FDVixJQUFJQyxHQUFKLEU7O3VDQVdHLFlBQU07QUFDaEIsVUFBTUMsc0JBQXNCLEdBQUd4SSxLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFJLENBQUN3SSxNQUFMLENBQVlDLE1BQVosRUFBWCxDQUEvQjtBQUNBLFVBQU1DLDZCQUE2QixHQUFHSCxzQkFBc0IsQ0FBQyxDQUFELENBQXRCLENBQTBCSSxJQUExQixHQUFpQyxDQUF2RTtBQUVBLFVBQU1DLGVBQWUsR0FBR0wsc0JBQXNCLENBQUN0SSxNQUF2QixDQUE4QixVQUFDQyxHQUFELEVBQU0ySSxZQUFOLEVBQXVCO0FBQzNFLFlBQU1DLCtCQUErQixHQUFHRCxZQUFZLENBQUNGLElBQWIsR0FBb0IsQ0FBNUQ7QUFDQSxZQUFNSSwwQkFBMEIsR0FBRzdJLEdBQUcsSUFBSTRJLCtCQUExQztBQUVBLFlBQUlDLDBCQUFKLEVBQWdDLE9BQU8sSUFBUDtBQUVoQyxlQUFPN0ksR0FBUDtBQUNELE9BUHVCLEVBT3JCd0ksNkJBUHFCLENBQXhCO0FBU0EsYUFBT0UsZUFBUDtBQUNELEs7O3NDQVFVLFVBQUN2QixLQUFELEVBQVEyQixJQUFSLEVBQWNsRCxPQUFkLEVBQTBCO0FBQ25DLFVBQU1tRCxRQUFRLEdBQUc7QUFDZjVCLGFBQUssRUFBTEEsS0FEZTtBQUVmMkIsWUFBSSxFQUFKQSxJQUZlO0FBR2ZsRCxlQUFPLEVBQVBBO0FBSGUsT0FBakI7O0FBS0EsV0FBSSxDQUFDb0QsZ0JBQUwsQ0FBc0I3QixLQUF0QixFQUE2QjhCLEdBQTdCLENBQWlDSCxJQUFqQyxFQUF1Q0MsUUFBdkM7QUFDRCxLOzt5Q0FFYSxVQUFDNUIsS0FBRCxFQUFRMkIsSUFBUixFQUFpQjtBQUM3QixVQUFJLEtBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0I3QixLQUF0QixDQUFKLEVBQWtDO0FBQ2hDLGFBQUksQ0FBQzZCLGdCQUFMLENBQXNCN0IsS0FBdEIsRUFBNkIrQixNQUE3QixDQUFvQ0osSUFBcEM7QUFDRDtBQUNGLEs7Ozs7OzZCQTVDUTNCLEssRUFBT2xGLEssRUFBTztBQUNyQixXQUFLa0gsUUFBTCxDQUFjaEMsS0FBZDtBQUNBLGFBQU8sSUFBSUQsb0RBQUosQ0FBZ0I7QUFBRTdDLGdCQUFRLEVBQUUsSUFBWjtBQUFrQjhDLGFBQUssRUFBTEEsS0FBbEI7QUFBeUJsRixhQUFLLEVBQUxBO0FBQXpCLE9BQWhCLENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLcUcsTUFBWjtBQUNEOzs7NkJBa0JRbkIsSyxFQUFPO0FBQ2QsVUFBSSxDQUFDLEtBQUttQixNQUFMLENBQVljLEdBQVosQ0FBZ0JqQyxLQUFoQixDQUFMLEVBQTZCO0FBQzNCLGFBQUttQixNQUFMLENBQVlXLEdBQVosQ0FBZ0I5QixLQUFoQixFQUF1QixJQUFJaUIsR0FBSixFQUF2QjtBQUNEO0FBQ0Y7OztxQ0FrQmdCakIsSyxFQUFPO0FBQ3RCLGFBQU8sS0FBS21CLE1BQUwsQ0FBWWMsR0FBWixDQUFnQmpDLEtBQWhCLENBQVA7QUFDRDs7O2lDQUVZQSxLLEVBQU87QUFDbEIsVUFBTWtDLFdBQVcsR0FBRyxLQUFLZixNQUFMLENBQVljLEdBQVosQ0FBZ0JqQyxLQUFoQixDQUFwQjtBQUNBLFVBQUlrQyxXQUFKLEVBQWlCLE9BQU9BLFdBQVcsQ0FBQ1osSUFBWixLQUFxQixDQUE1QjtBQUVqQixhQUFPLEtBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdEa0JhLGtCOzs7QUFHbkIsb0NBS0c7QUFBQTs7QUFBQSxRQUpEQyxnQkFJQyxRQUpEQSxnQkFJQztBQUFBLFFBSERDLGFBR0MsUUFIREEsYUFHQztBQUFBLFFBRkRDLGtCQUVDLFFBRkRBLGtCQUVDO0FBQUEsUUFEREMsZUFDQyxRQUREQSxlQUNDOztBQUFBOztBQUFBLHlDQVBXLEtBT1g7O0FBQUEsc0NBZVEsWUFBTTtBQUNmLFdBQUksQ0FBQ0MsVUFBTDs7QUFDQSxXQUFJLENBQUNDLDJCQUFMOztBQUNBLFdBQUksQ0FBQ0MseUJBQUw7O0FBQ0EsV0FBSSxDQUFDQyxZQUFMO0FBQ0QsS0FwQkU7O0FBQUEsd0NBc0JVLFlBQU07QUFDakIsV0FBSSxDQUFDSixlQUFMLENBQXFCLEtBQUksQ0FBQ0gsZ0JBQUwsQ0FBc0J0SCxLQUEzQyxFQUFrRCxLQUFJLENBQUN3SCxrQkFBdkQ7QUFDRCxLQXhCRTs7QUFBQSwwQ0EyQ1ksWUFBTTtBQUNuQixVQUFJLEtBQUksQ0FBQ00sV0FBVCxFQUFzQjtBQUNwQixZQUFNQyxpQkFBaUIsR0FBRyxLQUFJLENBQUNQLGtCQUFMLENBQXdCVCxnQkFBeEIsQ0FBeUMsS0FBSSxDQUFDUSxhQUE5QyxDQUExQjs7QUFDQSxZQUFNbEIsTUFBTSxHQUFHekksS0FBSyxDQUFDQyxJQUFOLENBQVdrSyxpQkFBaUIsQ0FBQ3pCLE1BQWxCLEVBQVgsS0FBMEMsRUFBekQ7QUFDQSxZQUFNMEIsVUFBVSxHQUFHM0IsTUFBTSxDQUFDLENBQUQsQ0FBTixJQUFhLEVBQWhDO0FBQ0EsYUFBSSxDQUFDNEIsdUJBQUwsQ0FBNkIvSSxTQUE3QixHQUF5QzhJLFVBQVUsQ0FBQ3JFLE9BQVgsSUFBc0IsRUFBL0Q7QUFDRDtBQUNGLEtBbERFOztBQUFBLHFDQW9ETztBQUFBLGFBQU0sS0FBSSxDQUFDNkQsa0JBQUwsQ0FBd0JVLFlBQXhCLENBQXFDLEtBQUksQ0FBQ1gsYUFBMUMsQ0FBTjtBQUFBLEtBcERQOztBQUFBLHVDQXNEUztBQUFBLGFBQU0sQ0FBQyxLQUFJLENBQUNZLE9BQUwsRUFBUDtBQUFBLEtBdERUOztBQUFBLDhDQXdEZ0IsWUFBTTtBQUN2QixXQUFJLENBQUNiLGdCQUFMLENBQXNCN0gsU0FBdEIsR0FBa0M7QUFDaEM0QyxnQkFBUSxFQUFFLEtBQUksQ0FBQ0E7QUFEaUIsT0FBbEM7O0FBR0EsV0FBSSxDQUFDK0YsNEJBQUw7QUFDRCxLQTdERTs7QUFBQSwwREErRDRCLFlBQU07QUFDbkMsV0FBSSxDQUFDZCxnQkFBTCxDQUFzQmUsa0JBQXRCLENBQXlDLFVBQXpDLEVBQXFELDhCQUFyRDs7QUFDQSxXQUFJLENBQUNKLHVCQUFMLEdBQStCLEtBQUksQ0FBQ1gsZ0JBQUwsQ0FBc0JnQixVQUF0QixDQUFpQ3ZJLGFBQWpDLENBQStDLFNBQS9DLENBQS9CO0FBQ0QsS0FsRUU7O0FBQ0QsU0FBS3VILGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUVBLFNBQUtjLElBQUw7QUFDRDs7OzsyQkFFTTtBQUNMLFdBQUtDLGdCQUFMO0FBQ0EsV0FBS25HLFFBQUw7QUFDQSxXQUFLeUYsV0FBTCxHQUFtQixJQUFuQjtBQUNEOzs7a0RBYTZCO0FBQzVCLFVBQUksS0FBS3BJLFNBQUwsTUFBb0IsS0FBS29JLFdBQTdCLEVBQTBDO0FBQ3hDLGFBQUtSLGdCQUFMLENBQXNCakssU0FBdEIsQ0FBZ0NvRSxHQUFoQyxDQUFvQyxVQUFwQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUs2RixnQkFBTCxDQUFzQmpLLFNBQXRCLENBQWdDZSxNQUFoQyxDQUF1QyxVQUF2QztBQUNEO0FBQ0Y7OztnREFFMkI7QUFBQSxVQUNsQjRCLEtBRGtCLEdBQ1IsS0FBS3NILGdCQURHLENBQ2xCdEgsS0FEa0I7O0FBRTFCLFVBQUlBLEtBQUosRUFBVztBQUNULGFBQUtzSCxnQkFBTCxDQUFzQmpLLFNBQXRCLENBQWdDb0UsR0FBaEMsQ0FBb0MsUUFBcEM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLNkYsZ0JBQUwsQ0FBc0JqSyxTQUF0QixDQUFnQ2UsTUFBaEMsQ0FBdUMsUUFBdkM7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pESDtBQUNBOztJQUVxQjRELGEsR0FHbkIsdUJBQVlULFlBQVosRUFBMEJrSCxjQUExQixFQUEwQztBQUFBOztBQUFBOztBQUFBLDZDQUZ0QixFQUVzQjs7QUFBQSxtQ0FVaEM7QUFBQSxXQUFNLENBQUMsS0FBSSxDQUFDL0ksU0FBTCxFQUFQO0FBQUEsR0FWZ0M7O0FBQUEscUNBWTlCLFlBQU07QUFDaEIsU0FBSSxDQUFDZ0osNEJBQUw7O0FBQ0EsV0FBTyxLQUFJLENBQUNsQixrQkFBTCxDQUF3Qm1CLFNBQXhCLEVBQVA7QUFDRCxHQWZ5Qzs7QUFBQSxxREFpQmQsWUFBTTtBQUNoQyxRQUFNQyxxQkFBcUIsR0FBR3hGLE1BQU0sQ0FBQ3lGLElBQVAsQ0FBWSxLQUFJLENBQUNKLGNBQWpCLENBQTlCO0FBRUFHLHlCQUFxQixDQUFDM0UsT0FBdEIsQ0FBOEIsVUFBQzZFLFNBQUQsRUFBZTtBQUMzQyxVQUFNQyxpQkFBaUIsR0FBRyxLQUFJLENBQUNDLFdBQUwsQ0FBaUJqSixhQUFqQixtQkFBeUMrSSxTQUF6QyxTQUExQjs7QUFDQSxVQUFNRyxrQkFBa0IsR0FBRyxJQUFJNUIsMkRBQUosQ0FBdUI7QUFDaERDLHdCQUFnQixFQUFFeUIsaUJBRDhCO0FBRWhEeEIscUJBQWEsRUFBRXVCLFNBRmlDO0FBR2hEdEIsMEJBQWtCLEVBQUUsS0FBSSxDQUFDQSxrQkFIdUI7QUFJaERDLHVCQUFlLEVBQUUsS0FBSSxDQUFDZ0IsY0FBTCxDQUFvQkssU0FBcEI7QUFKK0IsT0FBdkIsQ0FBM0I7O0FBTUEsV0FBSSxDQUFDSSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEJGLGtCQUE1QjtBQUNELEtBVEQ7QUFVRCxHQTlCeUM7O0FBQUEsNENBZ0N2QixZQUFNO0FBQ3ZCLFNBQUksQ0FBQ0QsV0FBTCxDQUFpQnZKLFNBQWpCLEdBQTZCO0FBQzNCMEksYUFBTyxFQUFFLEtBQUksQ0FBQ0EsT0FEYTtBQUUzQnpJLGVBQVMsRUFBRSxLQUFJLENBQUNBLFNBRlc7QUFHM0IwSixXQUFLLEVBQUUsS0FBSSxDQUFDQTtBQUhlLEtBQTdCOztBQU1BLFNBQUksQ0FBQ0osV0FBTCxDQUFpQmxILGdCQUFqQixDQUFrQyxRQUFsQyxFQUE0QyxLQUFJLENBQUN1SCx3QkFBakQ7O0FBQ0EsU0FBSSxDQUFDTCxXQUFMLENBQWlCbEgsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLEtBQUksQ0FBQ3VILHdCQUFoRDs7QUFDQSxTQUFJLENBQUNMLFdBQUwsQ0FBaUJsSCxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsS0FBSSxDQUFDc0gsS0FBaEQ7QUFDRCxHQTFDeUM7O0FBQUEsb0RBNENmLGdCQUFrQztBQUFBLFFBQXZCOUIsZ0JBQXVCLFFBQS9CbEssTUFBK0I7QUFDM0RrSyxvQkFBZ0IsQ0FBQzdILFNBQWpCLENBQTJCNEMsUUFBM0I7QUFDRCxHQTlDeUM7O0FBQUEsd0RBZ0RYLFlBQU07QUFDbkMsU0FBSSxDQUFDNkcsaUJBQUwsQ0FBdUJqRixPQUF2QixDQUErQixVQUFDcUQsZ0JBQUQsRUFBc0I7QUFDbkRBLHNCQUFnQixDQUFDakYsUUFBakI7QUFDRCxLQUZEO0FBR0QsR0FwRHlDOztBQUFBLGlDQXNEbEMsWUFBTTtBQUNaLFNBQUksQ0FBQ21GLGtCQUFMLEdBQTBCLElBQUl0Qix3REFBSixFQUExQjtBQUNELEdBeER5Qzs7QUFDeEMsT0FBS3NCLGtCQUFMLEdBQTBCLElBQUl0Qix3REFBSixFQUExQjtBQUVBLE9BQUs4QyxXQUFMLEdBQW1CekgsWUFBbkI7QUFDQSxPQUFLaUgsZ0JBQUw7QUFFQSxPQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLE9BQUthLHlCQUFMO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkSCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMxQixNQUFJRCxDQUFDLElBQUlDLENBQUwsSUFBVSxRQUFPRCxDQUFQLE1BQWEsUUFBdkIsSUFBbUMsUUFBT0MsQ0FBUCxNQUFhLFFBQXBELEVBQThEO0FBQzVELFFBQUlyRyxNQUFNLENBQUN5RixJQUFQLENBQVlXLENBQVosRUFBZTNLLE1BQWYsS0FBMEJ1RSxNQUFNLENBQUN5RixJQUFQLENBQVlZLENBQVosRUFBZTVLLE1BQTdDLEVBQXFELE9BQU8sS0FBUDtBQUNyRCxRQUFNNkssS0FBSyxHQUFHdEcsTUFBTSxDQUFDeUYsSUFBUCxDQUFZVyxDQUFaLENBQWQ7QUFDQSxXQUFPRSxLQUFLLENBQUM1TCxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNNEwsR0FBTixFQUFjO0FBQ2hDLFVBQUksQ0FBQ0osU0FBUyxDQUFDQyxDQUFDLENBQUNHLEdBQUQsQ0FBRixFQUFTRixDQUFDLENBQUNFLEdBQUQsQ0FBVixDQUFWLElBQThCNUwsR0FBRyxLQUFLLEtBQTFDLEVBQWlELE9BQU8sS0FBUDtBQUVqRCxhQUFPLElBQVA7QUFDRCxLQUpNLEVBSUosSUFKSSxDQUFQO0FBS0Q7O0FBRUQsU0FBT3lMLENBQUMsS0FBS0MsQ0FBYjtBQUNELENBWkQ7O0FBY2VGLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7O0lBRXFCbEosZTs7O0FBR25CLDZCQUFjO0FBQUE7O0FBQUE7O0FBQUEsaUNBRlIsT0FFUTs7QUFBQSxxREFNWTtBQUFBLGFBQU11SixJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQUksQ0FBQ0osR0FBMUIsQ0FBWCxLQUE4QyxFQUFwRDtBQUFBLEtBTlo7O0FBQUEsbURBUVUsVUFBQUssSUFBSTtBQUFBLGFBQUlGLFlBQVksQ0FBQ0csT0FBYixDQUFxQixLQUFJLENBQUNOLEdBQTFCLEVBQStCQyxJQUFJLENBQUNNLFNBQUwsQ0FBZUYsSUFBZixDQUEvQixDQUFKO0FBQUEsS0FSZDs7QUFDWixTQUFLMUksTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWTZJLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLFNBQUszRyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZMkcsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsU0FBSy9MLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVkrTCxJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDRDs7Ozs2QkFNUTtBQUNQLGFBQU8sS0FBS0MsdUJBQUwsRUFBUDtBQUNEOzs7MkJBRU03TCxJLEVBQU07QUFDWCxVQUFNOEwsV0FBVyxHQUFHLEtBQUsvSSxNQUFMLEVBQXBCO0FBQ0EsVUFBSWdKLFdBQUo7O0FBRUEsVUFBSS9MLElBQUksQ0FBQ0MsV0FBVCxFQUFzQjtBQUNwQjhMLG1CQUFXLEdBQUc7QUFDWjVHLGNBQUksRUFBRW5GLElBQUksQ0FBQ0MsV0FBTCxFQURNO0FBRVp5QixhQUFHLEVBQUUxQixJQUFJLENBQUNnTSxNQUFMLEVBRk87QUFHWnJLLGVBQUssRUFBRTNCLElBQUksQ0FBQ2lNLFFBQUwsRUFISztBQUlackssZUFBSyxFQUFFNUIsSUFBSSxDQUFDRyxRQUFMO0FBSkssU0FBZDtBQU1BMkwsbUJBQVcsQ0FBQ2xCLElBQVosQ0FBaUJtQixXQUFqQjtBQUNEOztBQUVELFdBQUtHLHFCQUFMLENBQTJCSixXQUEzQjtBQUNBLGFBQU9DLFdBQVA7QUFDRDs7OzJCQUVNSSxhLEVBQWU7QUFDcEIsVUFBTUMsa0JBQWtCLEdBQUc7QUFDekJqSCxZQUFJLEVBQUVnSCxhQUFhLENBQUNsTSxXQUFkLEVBRG1CO0FBRXpCeUIsV0FBRyxFQUFFeUssYUFBYSxDQUFDSCxNQUFkLEVBRm9CO0FBR3pCckssYUFBSyxFQUFFd0ssYUFBYSxDQUFDRixRQUFkLEVBSGtCO0FBSXpCckssYUFBSyxFQUFFdUssYUFBYSxDQUFDaE0sUUFBZDtBQUprQixPQUEzQjtBQU1BLFVBQU0yTCxXQUFXLEdBQUcsS0FBSy9JLE1BQUwsRUFBcEI7QUFDQSxVQUFNc0osa0JBQWtCLEdBQUdQLFdBQVcsQ0FDbkNRLE1BRHdCLENBQ2pCLFVBQUFDLFdBQVc7QUFBQSxlQUFJLENBQUN2QiwwREFBUyxDQUFDdUIsV0FBRCxFQUFjSCxrQkFBZCxDQUFkO0FBQUEsT0FETSxDQUEzQjtBQUdBLFdBQUtGLHFCQUFMLENBQTJCRyxrQkFBM0I7QUFDRCIsImZpbGUiOiJqcy9jYWRhc3Ryby9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2luZnJhL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5vbmNsaWNrID0gdGhpcy5yZW1vdmVVc2VyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlVXNlciA9ICh7IHRhcmdldDogY2xpY2tUYXJnZXRFbGVtZW50IH0pID0+IHtcbiAgICBpZiAoY2xpY2tUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbW92ZScpKSB7XG4gICAgICBjb25zdCB1c2VyVHIgPSBjbGlja1RhcmdldEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgIGNvbnN0IHVzZXJUZHMgPSB1c2VyVHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gQXJyYXkuZnJvbSh1c2VyVGRzKS5yZWR1Y2UoKGFjYywgY3VycmVudFRkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhVHlwZSA9IGN1cnJlbnRUZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICBhY2NbY3VycmVudERhdGFUeXBlXSA9IGN1cnJlbnRUZC50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5yZW1vdmUodXNlckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT4gYFxuICAgICAgPHRhYmxlIGNsYXNzPVwidXNlcnMtdGFibGUgLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLm1hcCh1c2VyID0+IGBcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJub21lXCI+JHt1c2VyLmdldEZ1bGxOYW1lKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiY3BmXCI+JHt1c2VyLmdldENQRkZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiZW1haWxcIj4ke3VzZXIuZ2V0RW1haWwoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJ0ZWxlZm9uZVwiPiR7dXNlci5nZXRQaG9uZUZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0bi1yZW1vdmUgYnRuLWdlbmVyaWMgLXJlZCAtc21hbGxcIj5SZW1vdmVyPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGApLmpvaW4oJycpXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLmxlbmd0aCA9PT0gMCA/ICc8dHI+PHRkIGNvbHNwYW49XCI0XCIgYWxpZ249XCJjZW50ZXJcIj5OZW5odW0gdXN1w6FyaW8gZW5jb250cmFkbyA6KDwvdGQ+PC90cj4nIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIGBcbn1cbiIsImltcG9ydCBVc2Vyc1NlcnZpY2UgZnJvbSAnLi4vLi4vZG9tYWluL3NlcnZpY2VzL1VzZXJzU2VydmljZSc7XG5pbXBvcnQgVXNlcnNSZXBvc2l0b3J5IGZyb20gJy4uLy4uL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnknO1xuaW1wb3J0IFVzZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vyc1RhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBzdGF0aWMgYWRkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkZm9ybSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICgkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpIHJldHVybjtcblxuICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkaW5nJykpO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlLFxuICAgIH07XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmFkZE5ldyhmb3JtRWxlbWVudHNEVE8pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkZWQnKSk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0FsbCgpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmdldEFsbFdpdGhJbml0aWFsRGF0YSgpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKHVzZXIpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCByZW1vdmFibGVVc2VyRFRPID0ge1xuICAgICAgZnVsbE5hbWU6IHVzZXIubm9tZSxcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBwaG9uZTogdXNlci50ZWxlZm9uZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH07XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTylcbiAgICAgIC50aGVuKHVzZXJzU2VydmljZS5nZXRBbGwpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uLy4uLy4uLy4uL2luZnJhL0Zvcm1WYWxpZGF0b3InO1xuaW1wb3J0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hJztcblxuY29uc3QgJGZvcm1FbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtQWRkVXN1YXJpb1wiXScpO1xuXG5mdW5jdGlvbiBzdGFydEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LmFkZCgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbn1cblxuZnVuY3Rpb24gc3RvcEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LnJlbW92ZSgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICRmb3JtRWxlbWVudC5yZXNldCgpO1xufVxuXG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGluZycsIHN0YXJ0QnRuU3VibWl0TG9hZGluZyk7XG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGVkJywgc3RvcEJ0blN1Ym1pdExvYWRpbmcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbWVudDogJGZvcm1FbGVtZW50LFxuICBmb3JtVmFsaWRhdG9yOiBuZXcgRm9ybVZhbGlkYXRvcigkZm9ybUVsZW1lbnQsIG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hKSxcbn07XG4iLCJpbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xlcic7XG5pbXBvcnQgJy4vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8nO1xuXG53aW5kb3cucGFnZUNhZGFzdHJvID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSA9IHtcbiAgbm9tZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ25vbWUnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBub21lIMOpIG9icmlnYXTDs3JpbycpLFxuICBlbWFpbDogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ2VtYWlsJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gZW1haWwgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNFbWFpbCgnSW5mb3JtZSB1bSBlLW1haWwgdsOhbGlkbycpLFxuICBjcGY6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdjcGYnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBDUEYgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNDUEYoJ1BvciBmYXZvciwgaW5mb3JtZSB1bSBDUEYgdsOhbGlkbycpLFxuICB0ZWxlZm9uZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ3RlbGVmb25lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gdGVsZWZvbmUgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaGFzTWluTGVuZ3RoKDEwLCAnSW5mb3JtZSB1bSB0ZWxlZm9uZSB2w6FsaWRvJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYTtcbiIsImltcG9ydCBQaG9uZSBmcm9tICcuLi92YWx1ZU9iamVjdHMvUGhvbmUnO1xuaW1wb3J0IENQRiBmcm9tICcuLi92YWx1ZU9iamVjdHMvQ1BGJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmdWxsTmFtZSxcbiAgICBjcGYsXG4gICAgcGhvbmUsXG4gICAgZW1haWwsXG4gIH0pIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgdGhpcy5jcGYgPSBuZXcgQ1BGKHsgQ1BGTnVtYmVyczogY3BmIH0pO1xuICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmUoeyBudW1iZXI6IHBob25lIH0pO1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lID0gKCkgPT4gdGhpcy5mdWxsTmFtZVxuXG4gIGdldEVtYWlsID0gKCkgPT4gdGhpcy5lbWFpbFxuXG4gIGdldENQRiA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlKClcblxuICBnZXRDUEZGb3JtYXRlZCA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlRm9ybWF0ZWQoKVxuXG4gIGdldFBob25lID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXIoKVxuXG4gIGdldFBob25lRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlckZvcm1hdGVkKClcbn1cbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IHsgRVhURVJOQUxfU0VSVklDRV9VUkwgfSBmcm9tICcuL2NvbmZpZ3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih7IHVzZXJzUmVwb3NpdG9yeSB9KSB7XG4gICAgdGhpcy51c2Vyc1JlcG9zaXRvcnkgPSB1c2Vyc1JlcG9zaXRvcnk7XG4gIH1cblxuICBhZGROZXcgPSAoZm9ybUVsZW1lbnRzRFRPKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm1FbGVtZW50c0RUTyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHRoaXMudXNlcnNSZXBvc2l0b3J5Lmluc2VydCh1c2VyKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGwgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RPZkRvbWFpblVzZXJzID0gdGhpcy51c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubWFwKHVzZXIgPT4gbmV3IFVzZXIoe1xuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgIH0pKTtcbiAgICByZXNvbHZlKGxpc3RPZkRvbWFpblVzZXJzKTtcbiAgfSk7XG5cbiAgZGVsZXRlVXNlciA9IChyZW1vdmFibGVVc2VyRFRPKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHJlbW92YWJsZVVzZXJEVE8pO1xuICAgIHRoaXMudXNlcnNSZXBvc2l0b3J5LnJlbW92ZSh1c2VyKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUoeyBtZXNzYWdlOiAncmVtb3ZlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5zZXJ0RXh0ZXJuYWxVc2VycyA9ICgpID0+IGZldGNoKEVYVEVSTkFMX1NFUlZJQ0VfVVJMKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4gdGhpcy51c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KG5ldyBVc2VyKHtcbiAgICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgICAgfSkpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKCk7XG4gICAgfSlcblxuICBnZXRBbGxXaXRoSW5pdGlhbERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSA9IHRoaXMudXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnNlcnRFeHRlcm5hbFVzZXJzKCk7XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgRVhURVJOQUxfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9wcml2YXRlLTIxZThkZS1yYWZhZWxsdWNpby5hcGlhcnktbW9jay5jb20vdXNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEVYVEVSTkFMX1NFUlZJQ0VfVVJMLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgQ1BGTnVtYmVycyB9KSB7XG4gICAgdGhpcy5DUEZOdW1iZXJzID0gQ1BGTnVtYmVycy5yZXBsYWNlKC8tL2csICcnKS5yZXBsYWNlKC9cXC4vZywgJycpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgcmV0dXJuIHRoaXMuQ1BGTnVtYmVycy5yZXBsYWNlKENQRlJlZ2V4LCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlci5yZXBsYWNlKC8tL2csICcnKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyID0gKCkgPT4gdGhpcy5udW1iZXI7XG5cbiAgZ2V0TnVtYmVyRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLm51bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgaWYgKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcblxuICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25zIHtcbiAgY29uc3RydWN0b3IoeyBjb250cmFjdCwgcGFyYW0sIHZhbHVlIH0pIHtcbiAgICB0aGlzLnBhcmFtID0gcGFyYW07XG4gICAgdGhpcy5jb250cmFjdCA9IGNvbnRyYWN0O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGFwcGx5VmFsaWRhdGlvbiA9IChjb25kaXRpb24sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKSA9PiB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgdGhpcy5jb250cmFjdC5zZXRFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJhY3QucmVtb3ZlRXJyb3IodGhpcy5wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQgPSAobWVzc2FnZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IDA7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc1JlcXVpcmVkJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzRW1haWwgPSAobWVzc2FnZSA9ICdFbWFpbCBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IHJlZ2V4RW1haWxWYWxpZCA9IG5ldyBSZWdFeHAoL15cXHcrKFstKy4nXVxcdyspKkBcXHcrKFstLl1cXHcrKSpcXC5cXHcrKFstLl1cXHcrKSokLyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXJlZ2V4RW1haWxWYWxpZC50ZXN0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzRW1haWwnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNDUEYgPSAobWVzc2FnZSA9ICdDUEYgbXVzdCB0byBiZSB2YWxpZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhKCh2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICBjb25zdCBjcGZWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGNwZlZhbHVlID09PSAnMDAwMDAwMDAwMDAnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gICAgICB9XG4gICAgICBsZXQgbW9kID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gICAgICBpZiAoKG1vZCA9PT0gMTApIHx8IChtb2QgPT09IDExKSkgbW9kID0gMDtcbiAgICAgIGlmIChtb2QgIT09IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyg5LCAxMCksIDEwKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBzdW0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDEyIC0gaSk7XG4gICAgICB9XG4gICAgICBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDEwLCAxMSksIDEwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkodGhpcy52YWx1ZSk7XG5cblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzQ1BGJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc01pbkxlbmd0aCA9IChtaW5MZW5ndGgsIG1lc3NhZ2UgPSBgTWluaW1hbCBsZW5naHQgaXMgJHttaW5MZW5ndGh9YCkgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEodGhpcy52YWx1ZS5sZW5ndGggPj0gbWluTGVuZ3RoKTtcbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdoYXNNaW5MZW5ndGgnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbnMgZnJvbSAnLi9WYWxpZGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25Db250cmFjdCB7XG4gIGVycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0UGFyYW0ocGFyYW0pO1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGhhc0Vycm9ycyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzID0gQXJyYXkuZnJvbSh0aGlzLmVycm9ycy52YWx1ZXMoKSk7XG4gICAgY29uc3QgZmlyc3RWYWxpZGF0aW9uRXJyb3JIYXNFcnJvcnMgPSBsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzWzBdLnNpemUgPiAwO1xuXG4gICAgY29uc3QgaXNWYWxpZENvbnRyYWN0ID0gbGlzdE9mVmFsaWRhdGlvbkVycm9ycy5yZWR1Y2UoKGFjYywgY3VycmVudEVycm9yKSA9PiB7XG4gICAgICBjb25zdCBoYXNDdXJyZW50VmFsaWRhdGlvbkVycm9yRXJyb3JzID0gY3VycmVudEVycm9yLnNpemUgPiAwO1xuICAgICAgY29uc3QgcHJldmlvdXNPckN1cnJlbnRIYXNFcnJvcnMgPSBhY2MgfHwgaGFzQ3VycmVudFZhbGlkYXRpb25FcnJvckVycm9ycztcblxuICAgICAgaWYgKHByZXZpb3VzT3JDdXJyZW50SGFzRXJyb3JzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBmaXJzdFZhbGlkYXRpb25FcnJvckhhc0Vycm9ycyk7XG5cbiAgICByZXR1cm4gaXNWYWxpZENvbnRyYWN0O1xuICB9XG5cbiAgc2V0UGFyYW0ocGFyYW0pIHtcbiAgICBpZiAoIXRoaXMuZXJyb3JzLmdldChwYXJhbSkpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnNldChwYXJhbSwgbmV3IE1hcCgpKTtcbiAgICB9XG4gIH1cblxuICBzZXRFcnJvciA9IChwYXJhbSwgdHlwZSwgbWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGVycm9yT2JqID0ge1xuICAgICAgcGFyYW0sXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICB9O1xuICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuc2V0KHR5cGUsIGVycm9yT2JqKTtcbiAgfVxuXG4gIHJlbW92ZUVycm9yID0gKHBhcmFtLCB0eXBlKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkpIHtcbiAgICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuZGVsZXRlKHR5cGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5nZXQocGFyYW0pO1xuICB9XG5cbiAgaXNWYWxpZFBhcmFtKHBhcmFtKSB7XG4gICAgY29uc3QgcGFyYW1FcnJvcnMgPSB0aGlzLmVycm9ycy5nZXQocGFyYW0pO1xuICAgIGlmIChwYXJhbUVycm9ycykgcmV0dXJuIHBhcmFtRXJyb3JzLnNpemUgPT09IDA7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZFZhbGlkYXRvciB7XG4gIGluaXRpYWxpemVkID0gZmFsc2VcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgZm9ybUZpZWxkRWxlbWVudCxcbiAgICBmb3JtRmllbGROYW1lLFxuICAgIHZhbGlkYXRpb25Db250cmFjdCxcbiAgICBmaWVsZFZhbGlkYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQgPSBmb3JtRmllbGRFbGVtZW50O1xuICAgIHRoaXMuZm9ybUZpZWxkTmFtZSA9IGZvcm1GaWVsZE5hbWU7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSB2YWxpZGF0aW9uQ29udHJhY3Q7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24gPSBmaWVsZFZhbGlkYXRpb247XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9ycygpO1xuICB9XG5cbiAgdmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLmZpZWxkVmFsaWRhdGlvbih0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsdWUsIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cygpIHtcbiAgICBpZiAodGhpcy5pc0ludmFsaWQoKSAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLWludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy1pbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmZvcm1GaWVsZEVsZW1lbnQ7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXR5cGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdHlwZWQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFcnJvcnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yc09mVGhpc1BhcmFtID0gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuZ2V0RXJyb3JzQnlQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpO1xuICAgICAgY29uc3QgZXJyb3JzID0gQXJyYXkuZnJvbShlcnJvcnNPZlRoaXNQYXJhbS52YWx1ZXMoKSkgfHwgW107XG4gICAgICBjb25zdCBmaXJzdEVycm9yID0gZXJyb3JzWzBdIHx8IHt9O1xuICAgICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudC5pbm5lckhUTUwgPSBmaXJzdEVycm9yLm1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpXG5cbiAgaXNJbnZhbGlkID0gKCkgPT4gIXRoaXMuaXNWYWxpZCgpXG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGUsXG4gICAgfTtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQoKTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAnPHNwYW4gY2xhc3M9XCJlcnJvcnNcIj48L3NwYW4+Jyk7XG4gICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudCA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25Db250cmFjdCBmcm9tICcuLi9GbHVlbnRWYWxpZGF0b3InO1xuaW1wb3J0IEZvcm1GaWVsZFZhbGlkYXRvciBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBmb3JtRmllbGRFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCRmb3JtRWxlbWVudCwgZm9ybUZpZWxkTmFtZXMpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG5cbiAgICB0aGlzLmZvcm1GaWVsZE5hbWVzID0gZm9ybUZpZWxkTmFtZXM7XG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gIXRoaXMuaXNJbnZhbGlkKCk7XG5cbiAgaXNJbnZhbGlkID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIHNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXlPZkZvcm1GaWVsZE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5mb3JtRmllbGROYW1lcyk7XG5cbiAgICBhcnJheU9mRm9ybUZpZWxkTmFtZXMuZm9yRWFjaCgoZmllbGROYW1lKSA9PiB7XG4gICAgICBjb25zdCAkZm9ybUZpZWxkRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFZhbGlkYXRvciA9IG5ldyBGb3JtRmllbGRWYWxpZGF0b3Ioe1xuICAgICAgICBmb3JtRmllbGRFbGVtZW50OiAkZm9ybUZpZWxkRWxlbWVudCxcbiAgICAgICAgZm9ybUZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICB2YWxpZGF0aW9uQ29udHJhY3Q6IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgICAgICBmaWVsZFZhbGlkYXRpb246IHRoaXMuZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5wdXNoKGZvcm1GaWVsZFZhbGlkYXRvcik7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgaXNWYWxpZDogdGhpcy5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkOiB0aGlzLmlzSW52YWxpZCxcbiAgICAgIGNsZWFyOiB0aGlzLmNsZWFyLFxuICAgIH07XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcbiAgfVxufVxuIiwiY29uc3QgZGVlcEVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICByZXR1cm4gYUtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pIHx8IGFjYyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBFcXVhbDtcbiIsImltcG9ydCBkZWVwRXF1YWwgZnJvbSAnLi4vZGVlcEVxdWFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNSZXBvc2l0b3J5IHtcbiAga2V5ID0gJ3VzZXJzJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdldEFsbCA9IHRoaXMuZ2V0QWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnNlcnQgPSB0aGlzLmluc2VydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlID0gdGhpcy5yZW1vdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpIHx8IFtdXG5cbiAgc2V0SXRlbUluTG9jYWxTdG9yYWdlID0gaXRlbSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICBpbnNlcnQodXNlcikge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBsZXQgY3JlYXRlZFVzZXI7XG5cbiAgICBpZiAodXNlci5nZXRGdWxsTmFtZSkge1xuICAgICAgY3JlYXRlZFVzZXIgPSB7XG4gICAgICAgIG5hbWU6IHVzZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgICAgY3BmOiB1c2VyLmdldENQRigpLFxuICAgICAgICBwaG9uZTogdXNlci5nZXRQaG9uZSgpLFxuICAgICAgICBlbWFpbDogdXNlci5nZXRFbWFpbCgpLFxuICAgICAgfTtcbiAgICAgIGxpc3RPZlVzZXJzLnB1c2goY3JlYXRlZFVzZXIpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKGxpc3RPZlVzZXJzKTtcbiAgICByZXR1cm4gY3JlYXRlZFVzZXI7XG4gIH1cblxuICByZW1vdmUocmVtb3ZhYmxlVXNlcikge1xuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEYk9iaiA9IHtcbiAgICAgIG5hbWU6IHJlbW92YWJsZVVzZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgIGNwZjogcmVtb3ZhYmxlVXNlci5nZXRDUEYoKSxcbiAgICAgIHBob25lOiByZW1vdmFibGVVc2VyLmdldFBob25lKCksXG4gICAgICBlbWFpbDogcmVtb3ZhYmxlVXNlci5nZXRFbWFpbCgpLFxuICAgIH07XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRMaXN0T2ZVc2VycyA9IGxpc3RPZlVzZXJzXG4gICAgICAuZmlsdGVyKGN1cnJlbnRVc2VyID0+ICFkZWVwRXF1YWwoY3VycmVudFVzZXIsIHJlbW92YWJsZVVzZXJEYk9iaikpO1xuXG4gICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UodXBkYXRlZExpc3RPZlVzZXJzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==