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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvY29uZmlncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9DUEYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvUGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRmx1ZW50VmFsaWRhdG9yL1ZhbGlkYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvRm9ybUZpZWxkVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9Gb3JtVmFsaWRhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9kZWVwRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlcnNUYWJsZSIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXNlcnMiLCJjbGlja1RhcmdldEVsZW1lbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVzZXJUciIsImNsb3Nlc3QiLCJ1c2VyVGRzIiwicXVlcnlTZWxlY3RvckFsbCIsInVzZXJEYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudFRkIiwiY3VycmVudERhdGFUeXBlIiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJzdGF0ZSIsIm1hcCIsInVzZXIiLCJnZXRGdWxsTmFtZSIsImdldENQRkZvcm1hdGVkIiwiZ2V0RW1haWwiLCJnZXRQaG9uZUZvcm1hdGVkIiwiam9pbiIsImxlbmd0aCIsImJhc2VFbGVtZW50Iiwic2V0dXBFdmVudHMiLCJvbmNsaWNrIiwicmVtb3ZlVXNlciIsImlubmVySFRNTCIsInRlbXBsYXRlIiwiQ29tcG9uZW50IiwiVXNlckNvbnRyb2xsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGZvcm0iLCJ2YWxpZGF0b3IiLCJpc0ludmFsaWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmb3JtRWxlbWVudHNEVE8iLCJmdWxsTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZW1haWwiLCJ1c2Vyc1JlcG9zaXRvcnkiLCJVc2Vyc1JlcG9zaXRvcnkiLCJ1c2Vyc1NlcnZpY2UiLCJVc2Vyc1NlcnZpY2UiLCJhZGROZXciLCJ0aGVuIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVzZXJzVGFibGUiLCJkb2N1bWVudCIsImdldEFsbFdpdGhJbml0aWFsRGF0YSIsInNldFN0YXRlIiwicmVtb3ZhYmxlVXNlckRUTyIsIm5vbWUiLCJ0ZWxlZm9uZSIsImRlbGV0ZVVzZXIiLCJnZXRBbGwiLCIkZm9ybUVsZW1lbnQiLCJzdGFydEJ0blN1Ym1pdExvYWRpbmciLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzdG9wQnRuU3VibWl0TG9hZGluZyIsInJlbW92ZUF0dHJpYnV0ZSIsInJlc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1WYWxpZGF0b3IiLCJGb3JtVmFsaWRhdG9yIiwibmV3VXNlclZhbGlkYXRpb25TY2hlbWEiLCJwYWdlQ2FkYXN0cm8iLCJ1c2VyQ29udHJvbGxlciIsImNvbnRyYWN0IiwidmFsaWRhdGUiLCJpc1JlcXVpcmVkIiwiaXNFbWFpbCIsImlzQ1BGIiwiaGFzTWluTGVuZ3RoIiwiVXNlciIsImdldFZhbHVlIiwiZ2V0VmFsdWVGb3JtYXRlZCIsImdldE51bWJlciIsImdldE51bWJlckZvcm1hdGVkIiwiQ1BGIiwiQ1BGTnVtYmVycyIsIlBob25lIiwibnVtYmVyIiwidG9Mb3dlckNhc2UiLCJPYmplY3QiLCJmcmVlemUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImluc2VydCIsImxpc3RPZkRvbWFpblVzZXJzIiwibmFtZSIsIm1lc3NhZ2UiLCJmZXRjaCIsIkVYVEVSTkFMX1NFUlZJQ0VfVVJMIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJmb3JFYWNoIiwiaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSIsImluc2VydEV4dGVybmFsVXNlcnMiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIlZhbGlkYXRpb25zIiwicGFyYW0iLCJjb25kaXRpb24iLCJ2YWxpZGF0aW9uTmFtZSIsInNldEVycm9yIiwicmVtb3ZlRXJyb3IiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3VtIiwiY3BmVmFsdWUiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJtb2QiLCJtaW5MZW5ndGgiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzIiwiZXJyb3JzIiwidmFsdWVzIiwiZmlyc3RWYWxpZGF0aW9uRXJyb3JIYXNFcnJvcnMiLCJzaXplIiwiaXNWYWxpZENvbnRyYWN0IiwiY3VycmVudEVycm9yIiwiaGFzQ3VycmVudFZhbGlkYXRpb25FcnJvckVycm9ycyIsInByZXZpb3VzT3JDdXJyZW50SGFzRXJyb3JzIiwidHlwZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiZ2V0IiwicGFyYW1FcnJvcnMiLCJGb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50IiwiZm9ybUZpZWxkTmFtZSIsInZhbGlkYXRpb25Db250cmFjdCIsImZpZWxkVmFsaWRhdGlvbiIsInZhbGlkYXRpb24iLCJ1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMiLCJ1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzIiwidXBkYXRlRXJyb3JzIiwiaW5pdGlhbGl6ZWQiLCJlcnJvcnNPZlRoaXNQYXJhbSIsImZpcnN0RXJyb3IiLCJmb3JtRWxlbWVudEVycm9yRWxlbWVudCIsImlzVmFsaWRQYXJhbSIsImlzVmFsaWQiLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImluaXQiLCJzZXR1cEZvcm1FbGVtZW50IiwiZm9ybUZpZWxkTmFtZXMiLCJ2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzIiwiaGFzRXJyb3JzIiwiYXJyYXlPZkZvcm1GaWVsZE5hbWVzIiwia2V5cyIsImZpZWxkTmFtZSIsIiRmb3JtRmllbGRFbGVtZW50IiwiZm9ybUVsZW1lbnQiLCJmb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50cyIsInB1c2giLCJjbGVhciIsInZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJkZWVwRXF1YWwiLCJhIiwiYiIsImFLZXlzIiwia2V5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYmluZCIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJjcmVhdGVkVXNlciIsImdldENQRiIsImdldFBob25lIiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwicmVtb3ZhYmxlVXNlciIsInJlbW92YWJsZVVzZXJEYk9iaiIsInVwZGF0ZWRMaXN0T2ZVc2VycyIsImZpbHRlciIsImN1cnJlbnRVc2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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cUJBQUwsQ0FBMkJHLGtCQUEzQjtBQUNEIiwiZmlsZSI6ImpzL2NhZGFzdHJvL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9pbmZyYS9Db21wb25lbnQnO1xuaW1wb3J0ICcuL1VzZXJzVGFibGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5vbmNsaWNrID0gdGhpcy5yZW1vdmVVc2VyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlVXNlciA9ICh7IHRhcmdldDogY2xpY2tUYXJnZXRFbGVtZW50IH0pID0+IHtcbiAgICBpZiAoY2xpY2tUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbW92ZScpKSB7XG4gICAgICBjb25zdCB1c2VyVHIgPSBjbGlja1RhcmdldEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgIGNvbnN0IHVzZXJUZHMgPSB1c2VyVHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gQXJyYXkuZnJvbSh1c2VyVGRzKS5yZWR1Y2UoKGFjYywgY3VycmVudFRkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhVHlwZSA9IGN1cnJlbnRUZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICBhY2NbY3VycmVudERhdGFUeXBlXSA9IGN1cnJlbnRUZC50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5yZW1vdmUodXNlckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT4gYFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vbWU8L3RkPlxuICAgICAgICAgICAgPHRkPkNQRjwvdGQ+XG4gICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxuICAgICAgICAgICAgPHRkPlRlbGVmb25lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubWFwKHVzZXIgPT4gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cIm5vbWVcIj4ke3VzZXIuZ2V0RnVsbE5hbWUoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJjcGZcIj4ke3VzZXIuZ2V0Q1BGRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJlbWFpbFwiPiR7dXNlci5nZXRFbWFpbCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cInRlbGVmb25lXCI+JHt1c2VyLmdldFBob25lRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiYnRuLXJlbW92ZVwiPlJlbW92ZXI8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYCkuam9pbignJylcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGVuZ3RoID09PSAwID8gJzx0cj48dGQgY29sc3Bhbj1cIjRcIiBhbGlnbj1cImNlbnRlclwiPk5lbmh1bSB1c3XDoXJpbyBlbmNvbnRyYWRvIDooPC90ZD48L3RyPicgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcbmltcG9ydCBVc2Vyc1JlcG9zaXRvcnkgZnJvbSAnLi4vLi4vaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeSc7XG5pbXBvcnQgVXNlcnNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzVGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHN0YXRpYyBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSk7XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWUsXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2Vyc1NlcnZpY2UgPSBuZXcgVXNlcnNTZXJ2aWNlKHsgdXNlcnNSZXBvc2l0b3J5IH0pO1xuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuYWRkTmV3KGZvcm1FbGVtZW50c0RUTylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93QWxsKCkge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2Vyc1NlcnZpY2UgPSBuZXcgVXNlcnNTZXJ2aWNlKHsgdXNlcnNSZXBvc2l0b3J5IH0pO1xuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuZ2V0QWxsV2l0aEluaXRpYWxEYXRhKClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUodXNlcikge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogdXNlci5ub21lLFxuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIHBob25lOiB1c2VyLnRlbGVmb25lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2Vyc1NlcnZpY2UgPSBuZXcgVXNlcnNTZXJ2aWNlKHsgdXNlcnNSZXBvc2l0b3J5IH0pO1xuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuZGVsZXRlVXNlcihyZW1vdmFibGVVc2VyRFRPKVxuICAgICAgLnRoZW4odXNlcnNTZXJ2aWNlLmdldEFsbClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmEvRm9ybVZhbGlkYXRvcic7XG5pbXBvcnQgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgZnJvbSAnLi4vLi4vLi4vdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEnO1xuXG5jb25zdCAkZm9ybUVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm1BZGRVc3VhcmlvXCJdJyk7XG5cbmZ1bmN0aW9uIHN0YXJ0QnRuU3VibWl0TG9hZGluZygpIHtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5jbGFzc0xpc3QuYWRkKCctbG9hZGluZycpO1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xufVxuXG5mdW5jdGlvbiBzdG9wQnRuU3VibWl0TG9hZGluZygpIHtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5jbGFzc0xpc3QucmVtb3ZlKCctbG9hZGluZycpO1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgJGZvcm1FbGVtZW50LnJlc2V0KCk7XG59XG5cbiRmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdidG5zdWJtaXRsb2FkaW5nJywgc3RhcnRCdG5TdWJtaXRMb2FkaW5nKTtcbiRmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdidG5zdWJtaXRsb2FkZWQnLCBzdG9wQnRuU3VibWl0TG9hZGluZyk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtZW50OiAkZm9ybUVsZW1lbnQsXG4gIGZvcm1WYWxpZGF0b3I6IG5ldyBGb3JtVmFsaWRhdG9yKCRmb3JtRWxlbWVudCwgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEpLFxufTtcbiIsImltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJztcbmltcG9ydCAnLi9lbGVtZW50cy9mb3JtQWRkVXN1YXJpbyc7XG5cbndpbmRvdy5wYWdlQ2FkYXN0cm8gPSB7XG4gIHVzZXJDb250cm9sbGVyOiBVc2VyQ29udHJvbGxlcixcbn07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hID0ge1xuICBub21lOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnbm9tZScsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIG5vbWUgw6kgb2JyaWdhdMOzcmlvJyksXG4gIGVtYWlsOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnZW1haWwnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBlbWFpbCDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5pc0VtYWlsKCdJbmZvcm1lIHVtIGUtbWFpbCB2w6FsaWRvJyksXG4gIGNwZjogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ2NwZicsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIENQRiDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5pc0NQRignUG9yIGZhdm9yLCBpbmZvcm1lIHVtIENQRiB2w6FsaWRvJyksXG4gIHRlbGVmb25lOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgndGVsZWZvbmUnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyB0ZWxlZm9uZSDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5oYXNNaW5MZW5ndGgoMTAsICdJbmZvcm1lIHVtIHRlbGVmb25lIHbDoWxpZG8nKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hO1xuIiwiaW1wb3J0IFBob25lIGZyb20gJy4uL3ZhbHVlT2JqZWN0cy9QaG9uZSc7XG5pbXBvcnQgQ1BGIGZyb20gJy4uL3ZhbHVlT2JqZWN0cy9DUEYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGZ1bGxOYW1lLFxuICAgIGNwZixcbiAgICBwaG9uZSxcbiAgICBlbWFpbCxcbiAgfSkge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcbiAgICB0aGlzLmNwZiA9IG5ldyBDUEYoeyBDUEZOdW1iZXJzOiBjcGYgfSk7XG4gICAgdGhpcy5waG9uZSA9IG5ldyBQaG9uZSh7IG51bWJlcjogcGhvbmUgfSk7XG4gICAgdGhpcy5lbWFpbCA9IGVtYWlsLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0RnVsbE5hbWUgPSAoKSA9PiB0aGlzLmZ1bGxOYW1lXG5cbiAgZ2V0RW1haWwgPSAoKSA9PiB0aGlzLmVtYWlsXG5cbiAgZ2V0Q1BGID0gKCkgPT4gdGhpcy5jcGYuZ2V0VmFsdWUoKVxuXG4gIGdldENQRkZvcm1hdGVkID0gKCkgPT4gdGhpcy5jcGYuZ2V0VmFsdWVGb3JtYXRlZCgpXG5cbiAgZ2V0UGhvbmUgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlcigpXG5cbiAgZ2V0UGhvbmVGb3JtYXRlZCA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyRm9ybWF0ZWQoKVxufVxuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyBFWFRFUk5BTF9TRVJWSUNFX1VSTCB9IGZyb20gJy4vY29uZmlncyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHsgdXNlcnNSZXBvc2l0b3J5IH0pIHtcbiAgICB0aGlzLnVzZXJzUmVwb3NpdG9yeSA9IHVzZXJzUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFkZE5ldyA9IChmb3JtRWxlbWVudHNEVE8pID0+IHtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUodGhpcy51c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KHVzZXIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsbCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mRG9tYWluVXNlcnMgPSB0aGlzLnVzZXJzUmVwb3NpdG9yeS5nZXRBbGwoKS5tYXAodXNlciA9PiBuZXcgVXNlcih7XG4gICAgICBjcGY6IHVzZXIuY3BmLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgcGhvbmU6IHVzZXIucGhvbmUsXG4gICAgfSkpO1xuICAgIHJlc29sdmUobGlzdE9mRG9tYWluVXNlcnMpO1xuICB9KTtcblxuICBkZWxldGVVc2VyID0gKHJlbW92YWJsZVVzZXJEVE8pID0+IHtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIocmVtb3ZhYmxlVXNlckRUTyk7XG4gICAgdGhpcy51c2Vyc1JlcG9zaXRvcnkucmVtb3ZlKHVzZXIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdyZW1vdmVkIHdpdGggc3VjY2VzcycgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpbnNlcnRFeHRlcm5hbFVzZXJzID0gKCkgPT4gZmV0Y2goRVhURVJOQUxfU0VSVklDRV9VUkwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSlcbiAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB0aGlzLnVzZXJzUmVwb3NpdG9yeS5pbnNlcnQobmV3IFVzZXIoe1xuICAgICAgICBjcGY6IHVzZXIuY3BmLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgcGhvbmU6IHVzZXIucGhvbmUsXG4gICAgICB9KSkpO1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKTtcbiAgICB9KVxuXG4gIGdldEFsbFdpdGhJbml0aWFsRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5ID0gdGhpcy51c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubGVuZ3RoID4gMDtcbiAgICBpZiAoaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc2VydEV4dGVybmFsVXNlcnMoKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBFWFRFUk5BTF9TRVJWSUNFX1VSTCA9ICdodHRwczovL3ByaXZhdGUtMjFlOGRlLXJhZmFlbGx1Y2lvLmFwaWFyeS1tb2NrLmNvbS91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRVhURVJOQUxfU0VSVklDRV9VUkwsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBDUEZOdW1iZXJzIH0pIHtcbiAgICB0aGlzLkNQRk51bWJlcnMgPSBDUEZOdW1iZXJzLnJlcGxhY2UoLy0vZywgJycpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLkNQRk51bWJlcnNcblxuICBnZXRWYWx1ZUZvcm1hdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IENQRlJlZ2V4ID0gLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLztcbiAgICByZXR1cm4gdGhpcy5DUEZOdW1iZXJzLnJlcGxhY2UoQ1BGUmVnZXgsIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob25lIHtcbiAgY29uc3RydWN0b3IoeyBudW1iZXIgfSkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoLy0vZywgJycpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXROdW1iZXIgPSAoKSA9PiB0aGlzLm51bWJlcjtcblxuICBnZXROdW1iZXJGb3JtYXRlZCA9ICgpID0+IHRoaXMubnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICBpZiAoZGRkKSByZXR1cm4gYCR7ZGRkfS0ke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuXG4gICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih7IGNvbnRyYWN0LCBwYXJhbSwgdmFsdWUgfSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgYXBwbHlWYWxpZGF0aW9uID0gKGNvbmRpdGlvbiwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbnRyYWN0LnNldEVycm9yKHRoaXMucGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cmFjdC5yZW1vdmVFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaXNSZXF1aXJlZCA9IChtZXNzYWdlID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gMDtcblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzUmVxdWlyZWQnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFbWFpbCA9IChtZXNzYWdlID0gJ0VtYWlsIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgcmVnZXhFbWFpbFZhbGlkID0gbmV3IFJlZ0V4cCgvXlxcdysoWy0rLiddXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKiQvKTtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhcmVnZXhFbWFpbFZhbGlkLnRlc3QodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNFbWFpbCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0NQRiA9IChtZXNzYWdlID0gJ0NQRiBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEoKHZhbHVlKSA9PiB7XG4gICAgICBsZXQgc3VtID0gMDtcbiAgICAgIGNvbnN0IGNwZlZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoY3BmVmFsdWUgPT09ICcwMDAwMDAwMDAwMCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gOTsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTEgLSBpKTtcbiAgICAgIH1cbiAgICAgIGxldCBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDksIDEwKSwgMTApKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHN1bSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTIgLSBpKTtcbiAgICAgIH1cbiAgICAgIG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT09IDEwKSB8fCAobW9kID09PSAxMSkpIG1vZCA9IDA7XG4gICAgICBpZiAobW9kICE9PSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoMTAsIDExKSwgMTApKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KSh0aGlzLnZhbHVlKTtcblxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNDUEYnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzTWluTGVuZ3RoID0gKG1pbkxlbmd0aCwgbWVzc2FnZSA9IGBNaW5pbWFsIGxlbmdodCBpcyAke21pbkxlbmd0aH1gKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gISh0aGlzLnZhbHVlLmxlbmd0aCA+PSBtaW5MZW5ndGgpO1xuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2hhc01pbkxlbmd0aCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBWYWxpZGF0aW9ucyBmcm9tICcuL1ZhbGlkYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkNvbnRyYWN0IHtcbiAgZXJyb3JzID0gbmV3IE1hcCgpXG5cbiAgdmFsaWRhdGUocGFyYW0sIHZhbHVlKSB7XG4gICAgdGhpcy5zZXRQYXJhbShwYXJhbSk7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9ucyh7IGNvbnRyYWN0OiB0aGlzLCBwYXJhbSwgdmFsdWUgfSk7XG4gIH1cblxuICBnZXRFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzO1xuICB9XG5cbiAgaGFzRXJyb3JzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RPZlZhbGlkYXRpb25FcnJvcnMgPSBBcnJheS5mcm9tKHRoaXMuZXJyb3JzLnZhbHVlcygpKTtcbiAgICBjb25zdCBmaXJzdFZhbGlkYXRpb25FcnJvckhhc0Vycm9ycyA9IGxpc3RPZlZhbGlkYXRpb25FcnJvcnNbMF0uc2l6ZSA+IDA7XG5cbiAgICBjb25zdCBpc1ZhbGlkQ29udHJhY3QgPSBsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzLnJlZHVjZSgoYWNjLCBjdXJyZW50RXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGhhc0N1cnJlbnRWYWxpZGF0aW9uRXJyb3JFcnJvcnMgPSBjdXJyZW50RXJyb3Iuc2l6ZSA+IDA7XG4gICAgICBjb25zdCBwcmV2aW91c09yQ3VycmVudEhhc0Vycm9ycyA9IGFjYyB8fCBoYXNDdXJyZW50VmFsaWRhdGlvbkVycm9yRXJyb3JzO1xuXG4gICAgICBpZiAocHJldmlvdXNPckN1cnJlbnRIYXNFcnJvcnMpIHJldHVybiB0cnVlO1xuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIGZpcnN0VmFsaWRhdGlvbkVycm9ySGFzRXJyb3JzKTtcblxuICAgIHJldHVybiBpc1ZhbGlkQ29udHJhY3Q7XG4gIH1cblxuICBzZXRQYXJhbShwYXJhbSkge1xuICAgIGlmICghdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKSkge1xuICAgICAgdGhpcy5lcnJvcnMuc2V0KHBhcmFtLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVycm9yID0gKHBhcmFtLCB0eXBlLCBtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgZXJyb3JPYmogPSB7XG4gICAgICBwYXJhbSxcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgIH07XG4gICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5zZXQodHlwZSwgZXJyb3JPYmopO1xuICB9XG5cbiAgcmVtb3ZlRXJyb3IgPSAocGFyYW0sIHR5cGUpID0+IHtcbiAgICBpZiAodGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSkge1xuICAgICAgdGhpcy5nZXRFcnJvcnNCeVBhcmFtKHBhcmFtKS5kZWxldGUodHlwZSk7XG4gICAgfVxuICB9XG5cblxuICBnZXRFcnJvcnNCeVBhcmFtKHBhcmFtKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gIH1cblxuICBpc1ZhbGlkUGFyYW0ocGFyYW0pIHtcbiAgICBjb25zdCBwYXJhbUVycm9ycyA9IHRoaXMuZXJyb3JzLmdldChwYXJhbSk7XG4gICAgaWYgKHBhcmFtRXJyb3JzKSByZXR1cm4gcGFyYW1FcnJvcnMuc2l6ZSA9PT0gMDtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkVmFsaWRhdG9yIHtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmb3JtRmllbGRFbGVtZW50LFxuICAgIGZvcm1GaWVsZE5hbWUsXG4gICAgdmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgIGZpZWxkVmFsaWRhdGlvbixcbiAgfSkge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudCA9IGZvcm1GaWVsZEVsZW1lbnQ7XG4gICAgdGhpcy5mb3JtRmllbGROYW1lID0gZm9ybUZpZWxkTmFtZTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IHZhbGlkYXRpb25Db250cmFjdDtcbiAgICB0aGlzLmZpZWxkVmFsaWRhdGlvbiA9IGZpZWxkVmFsaWRhdGlvbjtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb24oKTtcbiAgICB0aGlzLnVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlRXJyb3JzKCk7XG4gIH1cblxuICB2YWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uKHRoaXMuZm9ybUZpZWxkRWxlbWVudC52YWx1ZSwgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QpO1xuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCkge1xuICAgIGlmICh0aGlzLmlzSW52YWxpZCgpICYmIHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdHlwZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10eXBlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUVycm9ycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgZXJyb3JzT2ZUaGlzUGFyYW0gPSB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5nZXRFcnJvcnNCeVBhcmFtKHRoaXMuZm9ybUZpZWxkTmFtZSk7XG4gICAgICBjb25zdCBlcnJvcnMgPSBBcnJheS5mcm9tKGVycm9yc09mVGhpc1BhcmFtLnZhbHVlcygpKSB8fCBbXTtcbiAgICAgIGNvbnN0IGZpcnN0RXJyb3IgPSBlcnJvcnNbMF0gfHwge307XG4gICAgICB0aGlzLmZvcm1FbGVtZW50RXJyb3JFbGVtZW50LmlubmVySFRNTCA9IGZpcnN0RXJyb3IubWVzc2FnZSB8fCAnJztcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuaXNWYWxpZFBhcmFtKHRoaXMuZm9ybUZpZWxkTmFtZSlcblxuICBpc0ludmFsaWQgPSAoKSA9PiAhdGhpcy5pc1ZhbGlkKClcblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IgPSB7XG4gICAgICB2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZSxcbiAgICB9O1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudEVycm9yRWxlbWVudCgpO1xuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudEVycm9yRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsICc8c3BhbiBjbGFzcz1cImVycm9yc1wiPjwvc3Bhbj4nKTtcbiAgICB0aGlzLmZvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gdGhpcy5mb3JtRmllbGRFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmVycm9ycycpO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbkNvbnRyYWN0IGZyb20gJy4uL0ZsdWVudFZhbGlkYXRvcic7XG5pbXBvcnQgRm9ybUZpZWxkVmFsaWRhdG9yIGZyb20gJy4vRm9ybUZpZWxkVmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGZvcm1GaWVsZEVsZW1lbnRzID0gW107XG5cbiAgY29uc3RydWN0b3IoJGZvcm1FbGVtZW50LCBmb3JtRmllbGROYW1lcykge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpO1xuXG4gICAgdGhpcy5mb3JtRWxlbWVudCA9ICRmb3JtRWxlbWVudDtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZm9ybUZpZWxkTmFtZXMgPSBmb3JtRmllbGROYW1lcztcbiAgICB0aGlzLnNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMoKTtcbiAgfVxuXG4gIGlzVmFsaWQgPSAoKSA9PiAhdGhpcy5pc0ludmFsaWQoKTtcblxuICBpc0ludmFsaWQgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0Lmhhc0Vycm9ycygpO1xuICB9XG5cbiAgc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBhcnJheU9mRm9ybUZpZWxkTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm1GaWVsZE5hbWVzKTtcblxuICAgIGFycmF5T2ZGb3JtRmllbGROYW1lcy5mb3JFYWNoKChmaWVsZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0ICRmb3JtRmllbGRFbGVtZW50ID0gdGhpcy5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7ZmllbGROYW1lfVwiXWApO1xuICAgICAgY29uc3QgZm9ybUZpZWxkVmFsaWRhdG9yID0gbmV3IEZvcm1GaWVsZFZhbGlkYXRvcih7XG4gICAgICAgIGZvcm1GaWVsZEVsZW1lbnQ6ICRmb3JtRmllbGRFbGVtZW50LFxuICAgICAgICBmb3JtRmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgIHZhbGlkYXRpb25Db250cmFjdDogdGhpcy52YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgICAgIGZpZWxkVmFsaWRhdGlvbjogdGhpcy5mb3JtRmllbGROYW1lc1tmaWVsZE5hbWVdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnRzLnB1c2goZm9ybUZpZWxkVmFsaWRhdG9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRWxlbWVudC52YWxpZGF0b3IgPSB7XG4gICAgICBpc1ZhbGlkOiB0aGlzLmlzVmFsaWQsXG4gICAgICBpc0ludmFsaWQ6IHRoaXMuaXNJbnZhbGlkLFxuICAgICAgY2xlYXI6IHRoaXMuY2xlYXIsXG4gICAgfTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCk7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIHRoaXMuY2xlYXIpO1xuICB9XG5cbiAgdmFsaWRhdGVGb3JtRmllbGRFbGVtZW50ID0gKHsgdGFyZ2V0OiBmb3JtRmllbGRFbGVtZW50IH0pID0+IHtcbiAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRvci52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnRzLmZvckVhY2goKGZvcm1GaWVsZEVsZW1lbnQpID0+IHtcbiAgICAgIGZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpO1xuICB9XG59XG4iLCJjb25zdCBkZWVwRXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHJldHVybiBhS2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkgfHwgYWNjID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVlcEVxdWFsO1xuIiwiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICcuLi9kZWVwRXF1YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2V0QWxsID0gdGhpcy5nZXRBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluc2VydCA9IHRoaXMuaW5zZXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cblxuICBzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UgPSBpdGVtID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGluc2VydCh1c2VyKSB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGxldCBjcmVhdGVkVXNlcjtcblxuICAgIGlmICh1c2VyLmdldEZ1bGxOYW1lKSB7XG4gICAgICBjcmVhdGVkVXNlciA9IHtcbiAgICAgICAgbmFtZTogdXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgICBjcGY6IHVzZXIuZ2V0Q1BGKCksXG4gICAgICAgIHBob25lOiB1c2VyLmdldFBob25lKCksXG4gICAgICAgIGVtYWlsOiB1c2VyLmdldEVtYWlsKCksXG4gICAgICB9O1xuICAgICAgbGlzdE9mVXNlcnMucHVzaChjcmVhdGVkVXNlcik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UobGlzdE9mVXNlcnMpO1xuICAgIHJldHVybiBjcmVhdGVkVXNlcjtcbiAgfVxuXG4gIHJlbW92ZShyZW1vdmFibGVVc2VyKSB7XG4gICAgY29uc3QgcmVtb3ZhYmxlVXNlckRiT2JqID0ge1xuICAgICAgbmFtZTogcmVtb3ZhYmxlVXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgY3BmOiByZW1vdmFibGVVc2VyLmdldENQRigpLFxuICAgICAgcGhvbmU6IHJlbW92YWJsZVVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgIGVtYWlsOiByZW1vdmFibGVVc2VyLmdldEVtYWlsKCksXG4gICAgfTtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgY29uc3QgdXBkYXRlZExpc3RPZlVzZXJzID0gbGlzdE9mVXNlcnNcbiAgICAgIC5maWx0ZXIoY3VycmVudFVzZXIgPT4gIWRlZXBFcXVhbChjdXJyZW50VXNlciwgcmVtb3ZhYmxlVXNlckRiT2JqKSk7XG5cbiAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZSh1cGRhdGVkTGlzdE9mVXNlcnMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9