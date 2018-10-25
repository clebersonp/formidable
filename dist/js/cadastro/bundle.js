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
      setTimeout(function () {
        usersService.addNew(formElementsDTO).then(function () {
          $form.dispatchEvent(new Event('btnsubmitloaded'));
          window.location.href = '/';
        }).catch(function (err) {
          /* eslint no-alert: "error" */
          if (err.message === 'User already exists') $form.updateFormError('Usuário já existe :(');
          $form.dispatchEvent(new Event('stoploading'));
        });
      }, 2000);
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

function stopBtnSubmitStopLoading() {
  $formElement.querySelector('[data-element="btnSubmit"]').classList.remove('-loading');
  $formElement.querySelector('[data-element="btnSubmit"]').removeAttribute('disabled');
}

function stopBtnSubmitLoaded() {
  $formElement.updateFormError();
  $formElement.dispatchEvent(new Event('stoploading'));
  $formElement.reset();
}

$formElement.addEventListener('btnsubmitloading', startBtnSubmitLoading);
$formElement.addEventListener('stoploading', stopBtnSubmitStopLoading);
$formElement.addEventListener('btnsubmitloaded', stopBtnSubmitLoaded);

$formElement.updateFormError = function () {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  $formElement.querySelector('[data-element="formError"]').innerHTML = message;
};

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
    return new Promise(function (resolve, reject) {
      var insertUserResult = _this.usersRepository.insert(user);

      if (insertUserResult instanceof Error) reject(insertUserResult);
      resolve(insertUserResult);
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

        for (var i = 0; i < listOfUsers.length; i += 1) {
          if (Object(_deepEqual__WEBPACK_IMPORTED_MODULE_0__["default"])(listOfUsers[i], createdUser)) {
            return new Error('User already exists');
          }
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9jb25maWdzLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ1c2VycyIsImNsaWNrVGFyZ2V0RWxlbWVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidXNlclRyIiwiY2xvc2VzdCIsInVzZXJUZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidXNlckRhdGEiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VGQiLCJjdXJyZW50RGF0YVR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsInN0YXRlIiwibWFwIiwidXNlciIsImdldEZ1bGxOYW1lIiwiZ2V0Q1BGRm9ybWF0ZWQiLCJnZXRFbWFpbCIsImdldFBob25lRm9ybWF0ZWQiLCJqb2luIiwibGVuZ3RoIiwiYmFzZUVsZW1lbnQiLCJzZXR1cEV2ZW50cyIsIm9uY2xpY2siLCJyZW1vdmVVc2VyIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImZvcm1FbGVtZW50c0RUTyIsImZ1bGxOYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJlbWFpbCIsInVzZXJzUmVwb3NpdG9yeSIsIlVzZXJzUmVwb3NpdG9yeSIsInVzZXJzU2VydmljZSIsIlVzZXJzU2VydmljZSIsInNldFRpbWVvdXQiLCJhZGROZXciLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwidXBkYXRlRm9ybUVycm9yIiwidXNlcnNUYWJsZSIsImRvY3VtZW50IiwiZ2V0QWxsV2l0aEluaXRpYWxEYXRhIiwic2V0U3RhdGUiLCJyZW1vdmFibGVVc2VyRFRPIiwibm9tZSIsInRlbGVmb25lIiwiZGVsZXRlVXNlciIsImdldEFsbCIsIiRmb3JtRWxlbWVudCIsInN0YXJ0QnRuU3VibWl0TG9hZGluZyIsImFkZCIsInNldEF0dHJpYnV0ZSIsInN0b3BCdG5TdWJtaXRTdG9wTG9hZGluZyIsInJlbW92ZUF0dHJpYnV0ZSIsInN0b3BCdG5TdWJtaXRMb2FkZWQiLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJjb250cmFjdCIsInZhbGlkYXRlIiwiaXNSZXF1aXJlZCIsImlzRW1haWwiLCJpc0NQRiIsImhhc01pbkxlbmd0aCIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwiZnJlZXplIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbnNlcnRVc2VyUmVzdWx0IiwiaW5zZXJ0IiwiRXJyb3IiLCJsaXN0T2ZEb21haW5Vc2VycyIsIm5hbWUiLCJmZXRjaCIsIkVYVEVSTkFMX1NFUlZJQ0VfVVJMIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJmb3JFYWNoIiwiaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSIsImluc2VydEV4dGVybmFsVXNlcnMiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIlZhbGlkYXRpb25zIiwicGFyYW0iLCJjb25kaXRpb24iLCJ2YWxpZGF0aW9uTmFtZSIsInNldEVycm9yIiwicmVtb3ZlRXJyb3IiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3VtIiwiY3BmVmFsdWUiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJtb2QiLCJtaW5MZW5ndGgiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJsaXN0T2ZWYWxpZGF0aW9uRXJyb3JzIiwiZXJyb3JzIiwidmFsdWVzIiwiZmlyc3RWYWxpZGF0aW9uRXJyb3JIYXNFcnJvcnMiLCJzaXplIiwiaXNWYWxpZENvbnRyYWN0IiwiY3VycmVudEVycm9yIiwiaGFzQ3VycmVudFZhbGlkYXRpb25FcnJvckVycm9ycyIsInByZXZpb3VzT3JDdXJyZW50SGFzRXJyb3JzIiwidHlwZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiZ2V0IiwicGFyYW1FcnJvcnMiLCJGb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50IiwiZm9ybUZpZWxkTmFtZSIsInZhbGlkYXRpb25Db250cmFjdCIsImZpZWxkVmFsaWRhdGlvbiIsInZhbGlkYXRpb24iLCJ1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMiLCJ1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzIiwidXBkYXRlRXJyb3JzIiwiaW5pdGlhbGl6ZWQiLCJlcnJvcnNPZlRoaXNQYXJhbSIsImZpcnN0RXJyb3IiLCJmb3JtRWxlbWVudEVycm9yRWxlbWVudCIsImlzVmFsaWRQYXJhbSIsImlzVmFsaWQiLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImluaXQiLCJzZXR1cEZvcm1FbGVtZW50IiwiZm9ybUZpZWxkTmFtZXMiLCJ2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzIiwiaGFzRXJyb3JzIiwiYXJyYXlPZkZvcm1GaWVsZE5hbWVzIiwia2V5cyIsImZpZWxkTmFtZSIsIiRmb3JtRmllbGRFbGVtZW50IiwiZm9ybUVsZW1lbnQiLCJmb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50cyIsInB1c2giLCJjbGVhciIsInZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCIsInNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJkZWVwRXF1YWwiLCJhIiwiYiIsImFLZXlzIiwia2V5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYmluZCIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJjcmVhdGVkVXNlciIsImdldENQRiIsImdldFBob25lIiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwicmVtb3ZhYmxlVXNlciIsInJlbW92YWJsZVVzZXJEYk9iaiIsInVwZGF0ZWRMaXN0T2ZVc2VycyIsImZpbHRlciIsImN1cnJlbnRVc2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FB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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2luZnJhL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5vbmNsaWNrID0gdGhpcy5yZW1vdmVVc2VyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlVXNlciA9ICh7IHRhcmdldDogY2xpY2tUYXJnZXRFbGVtZW50IH0pID0+IHtcbiAgICBpZiAoY2xpY2tUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbW92ZScpKSB7XG4gICAgICBjb25zdCB1c2VyVHIgPSBjbGlja1RhcmdldEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgIGNvbnN0IHVzZXJUZHMgPSB1c2VyVHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gQXJyYXkuZnJvbSh1c2VyVGRzKS5yZWR1Y2UoKGFjYywgY3VycmVudFRkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhVHlwZSA9IGN1cnJlbnRUZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICBhY2NbY3VycmVudERhdGFUeXBlXSA9IGN1cnJlbnRUZC50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5yZW1vdmUodXNlckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT4gYFxuICAgICAgPHRhYmxlIGNsYXNzPVwidXNlcnMtdGFibGUgLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLm1hcCh1c2VyID0+IGBcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJub21lXCI+JHt1c2VyLmdldEZ1bGxOYW1lKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiY3BmXCI+JHt1c2VyLmdldENQRkZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiZW1haWxcIj4ke3VzZXIuZ2V0RW1haWwoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJ0ZWxlZm9uZVwiPiR7dXNlci5nZXRQaG9uZUZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0bi1yZW1vdmUgYnRuLWdlbmVyaWMgLXJlZCAtc21hbGxcIj5SZW1vdmVyPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGApLmpvaW4oJycpXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLmxlbmd0aCA9PT0gMCA/ICc8dHI+PHRkIGNvbHNwYW49XCI0XCIgYWxpZ249XCJjZW50ZXJcIj5OZW5odW0gdXN1w6FyaW8gZW5jb250cmFkbyA6KDwvdGQ+PC90cj4nIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIGBcbn1cbiIsImltcG9ydCBVc2Vyc1NlcnZpY2UgZnJvbSAnLi4vLi4vZG9tYWluL3NlcnZpY2VzL1VzZXJzU2VydmljZSc7XG5pbXBvcnQgVXNlcnNSZXBvc2l0b3J5IGZyb20gJy4uLy4uL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnknO1xuaW1wb3J0IFVzZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vyc1RhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBzdGF0aWMgYWRkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkZm9ybSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICgkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpIHJldHVybjtcblxuICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkaW5nJykpO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlLFxuICAgIH07XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdXNlcnNTZXJ2aWNlXG4gICAgICAgIC5hZGROZXcoZm9ybUVsZW1lbnRzRFRPKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAvKiBlc2xpbnQgbm8tYWxlcnQ6IFwiZXJyb3JcIiAqL1xuICAgICAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gJ1VzZXIgYWxyZWFkeSBleGlzdHMnKSAkZm9ybS51cGRhdGVGb3JtRXJyb3IoJ1VzdcOhcmlvIGrDoSBleGlzdGUgOignKTtcbiAgICAgICAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc3RvcGxvYWRpbmcnKSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSwgVXNlckNvbnRyb2xsZXIpO1xuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICAgIGNvbnN0IHVzZXJzU2VydmljZSA9IG5ldyBVc2Vyc1NlcnZpY2UoeyB1c2Vyc1JlcG9zaXRvcnkgfSk7XG5cbiAgICB1c2Vyc1NlcnZpY2VcbiAgICAgIC5nZXRBbGxXaXRoSW5pdGlhbERhdGEoKVxuICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgIHVzZXJzVGFibGUuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZSh1c2VyKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSwgVXNlckNvbnRyb2xsZXIpO1xuXG4gICAgY29uc3QgcmVtb3ZhYmxlVXNlckRUTyA9IHtcbiAgICAgIGZ1bGxOYW1lOiB1c2VyLm5vbWUsXG4gICAgICBjcGY6IHVzZXIuY3BmLFxuICAgICAgcGhvbmU6IHVzZXIudGVsZWZvbmUsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICB9O1xuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICAgIGNvbnN0IHVzZXJzU2VydmljZSA9IG5ldyBVc2Vyc1NlcnZpY2UoeyB1c2Vyc1JlcG9zaXRvcnkgfSk7XG5cbiAgICB1c2Vyc1NlcnZpY2VcbiAgICAgIC5kZWxldGVVc2VyKHJlbW92YWJsZVVzZXJEVE8pXG4gICAgICAudGhlbih1c2Vyc1NlcnZpY2UuZ2V0QWxsKVxuICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgIHVzZXJzVGFibGUuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi8uLi8uLi8uLi9pbmZyYS9Gb3JtVmFsaWRhdG9yJztcbmltcG9ydCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSBmcm9tICcuLi8uLi8uLi92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYSc7XG5cbmNvbnN0ICRmb3JtRWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybUFkZFVzdWFyaW9cIl0nKTtcblxuZnVuY3Rpb24gc3RhcnRCdG5TdWJtaXRMb2FkaW5nKCkge1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLmNsYXNzTGlzdC5hZGQoJy1sb2FkaW5nJyk7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3BCdG5TdWJtaXRTdG9wTG9hZGluZygpIHtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5jbGFzc0xpc3QucmVtb3ZlKCctbG9hZGluZycpO1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gc3RvcEJ0blN1Ym1pdExvYWRlZCgpIHtcbiAgJGZvcm1FbGVtZW50LnVwZGF0ZUZvcm1FcnJvcigpO1xuICAkZm9ybUVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N0b3Bsb2FkaW5nJykpO1xuICAkZm9ybUVsZW1lbnQucmVzZXQoKTtcbn1cblxuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRpbmcnLCBzdGFydEJ0blN1Ym1pdExvYWRpbmcpO1xuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3Bsb2FkaW5nJywgc3RvcEJ0blN1Ym1pdFN0b3BMb2FkaW5nKTtcblxuJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRlZCcsIHN0b3BCdG5TdWJtaXRMb2FkZWQpO1xuXG4kZm9ybUVsZW1lbnQudXBkYXRlRm9ybUVycm9yID0gKG1lc3NhZ2UgPSAnJykgPT4ge1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm1FcnJvclwiXScpLmlubmVySFRNTCA9IG1lc3NhZ2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVsZW1lbnQ6ICRmb3JtRWxlbWVudCxcbiAgZm9ybVZhbGlkYXRvcjogbmV3IEZvcm1WYWxpZGF0b3IoJGZvcm1FbGVtZW50LCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSksXG59O1xuIiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInO1xuaW1wb3J0ICcuL2VsZW1lbnRzL2Zvcm1BZGRVc3VhcmlvJztcblxud2luZG93LnBhZ2VDYWRhc3RybyA9IHtcbiAgdXNlckNvbnRyb2xsZXI6IFVzZXJDb250cm9sbGVyLFxufTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3QgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgPSB7XG4gIG5vbWU6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdub21lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gbm9tZSDDqSBvYnJpZ2F0w7NyaW8nKSxcbiAgZW1haWw6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdlbWFpbCcsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIGVtYWlsIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmlzRW1haWwoJ0luZm9ybWUgdW0gZS1tYWlsIHbDoWxpZG8nKSxcbiAgY3BmOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnY3BmJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gQ1BGIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmlzQ1BGKCdQb3IgZmF2b3IsIGluZm9ybWUgdW0gQ1BGIHbDoWxpZG8nKSxcbiAgdGVsZWZvbmU6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCd0ZWxlZm9uZScsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIHRlbGVmb25lIMOpIG9icmlnYXTDs3JpbycpXG4gICAgLmhhc01pbkxlbmd0aCgxMCwgJ0luZm9ybWUgdW0gdGVsZWZvbmUgdsOhbGlkbycpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3VXNlclZhbGlkYXRpb25TY2hlbWE7XG4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IEVYVEVSTkFMX1NFUlZJQ0VfVVJMIH0gZnJvbSAnLi9jb25maWdzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoeyB1c2Vyc1JlcG9zaXRvcnkgfSkge1xuICAgIHRoaXMudXNlcnNSZXBvc2l0b3J5ID0gdXNlcnNSZXBvc2l0b3J5O1xuICB9XG5cbiAgYWRkTmV3ID0gKGZvcm1FbGVtZW50c0RUTykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbnNlcnRVc2VyUmVzdWx0ID0gdGhpcy51c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KHVzZXIpO1xuICAgICAgaWYgKGluc2VydFVzZXJSZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikgcmVqZWN0KGluc2VydFVzZXJSZXN1bHQpO1xuXG4gICAgICByZXNvbHZlKGluc2VydFVzZXJSZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZEb21haW5Vc2VycyA9IHRoaXMudXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLm1hcCh1c2VyID0+IG5ldyBVc2VyKHtcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShsaXN0T2ZEb21haW5Vc2Vycyk7XG4gIH0pO1xuXG4gIGRlbGV0ZVVzZXIgPSAocmVtb3ZhYmxlVXNlckRUTykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihyZW1vdmFibGVVc2VyRFRPKTtcbiAgICB0aGlzLnVzZXJzUmVwb3NpdG9yeS5yZW1vdmUodXNlcik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHsgbWVzc2FnZTogJ3JlbW92ZWQgd2l0aCBzdWNjZXNzJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluc2VydEV4dGVybmFsVXNlcnMgPSAoKSA9PiBmZXRjaChFWFRFUk5BTF9TRVJWSUNFX1VSTClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KVxuICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHRoaXMudXNlcnNSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgIH0pKSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpO1xuICAgIH0pXG5cbiAgZ2V0QWxsV2l0aEluaXRpYWxEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkgPSB0aGlzLnVzZXJzUmVwb3NpdG9yeS5nZXRBbGwoKS5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0RXh0ZXJuYWxVc2VycygpO1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEVYVEVSTkFMX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vcHJpdmF0ZS0yMWU4ZGUtcmFmYWVsbHVjaW8uYXBpYXJ5LW1vY2suY29tL3VzZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBFWFRFUk5BTF9TRVJWSUNFX1VSTCxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDUEYge1xuICBjb25zdHJ1Y3Rvcih7IENQRk51bWJlcnMgfSkge1xuICAgIHRoaXMuQ1BGTnVtYmVycyA9IENQRk51bWJlcnMucmVwbGFjZSgvLS9nLCAnJykucmVwbGFjZSgvXFwuL2csICcnKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpID0+IHRoaXMuQ1BGTnVtYmVyc1xuXG4gIGdldFZhbHVlRm9ybWF0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgQ1BGUmVnZXggPSAvKFxcZHszfSkoXFxkezN9KShcXGR7M30pKFxcZHsyfSkvO1xuICAgIHJldHVybiB0aGlzLkNQRk51bWJlcnMucmVwbGFjZShDUEZSZWdleCwgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4gYCR7cGFydE9uZX0uJHtwYXJ0VHdvfS4ke3BhcnRUaHJlZX0tJHtkaWdpdH1gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXIucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldE51bWJlciA9ICgpID0+IHRoaXMubnVtYmVyO1xuXG4gIGdldE51bWJlckZvcm1hdGVkID0gKCkgPT4gdGhpcy5udW1iZXIucmVwbGFjZSgvKFxcZHsyfSk/KFxcZHs0fSkoXFxkezR9KS8sIChmdWxsTWF0Y2gsIGRkZCwgbnVtYmVyUGFydE9uZSwgbnVtYmVyUGFydFR3bykgPT4ge1xuICAgIGlmIChkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG5cbiAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzZXRTdGF0ZSA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHsgY29udHJhY3QsIHBhcmFtLCB2YWx1ZSB9KSB7XG4gICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xuICAgIHRoaXMuY29udHJhY3QgPSBjb250cmFjdDtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBhcHBseVZhbGlkYXRpb24gPSAoY29uZGl0aW9uLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHRoaXMuY29udHJhY3Quc2V0RXJyb3IodGhpcy5wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyYWN0LnJlbW92ZUVycm9yKHRoaXMucGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBpc1JlcXVpcmVkID0gKG1lc3NhZ2UgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhdGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8PSAwO1xuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNSZXF1aXJlZCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0VtYWlsID0gKG1lc3NhZ2UgPSAnRW1haWwgbXVzdCB0byBiZSB2YWxpZCcpID0+IHtcbiAgICBjb25zdCByZWdleEVtYWlsVmFsaWQgPSBuZXcgUmVnRXhwKC9eXFx3KyhbLSsuJ11cXHcrKSpAXFx3KyhbLS5dXFx3KykqXFwuXFx3KyhbLS5dXFx3KykqJC8pO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICFyZWdleEVtYWlsVmFsaWQudGVzdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc0VtYWlsJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzQ1BGID0gKG1lc3NhZ2UgPSAnQ1BGIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gISgodmFsdWUpID0+IHtcbiAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgY29uc3QgY3BmVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmIChjcGZWYWx1ZSA9PT0gJzAwMDAwMDAwMDAwJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA5OyBpICs9IDEpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMSAtIGkpO1xuICAgICAgfVxuICAgICAgbGV0IG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT09IDEwKSB8fCAobW9kID09PSAxMSkpIG1vZCA9IDA7XG4gICAgICBpZiAobW9kICE9PSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoOSwgMTApLCAxMCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgc3VtID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpICs9IDEpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMiAtIGkpO1xuICAgICAgfVxuICAgICAgbW9kID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gICAgICBpZiAoKG1vZCA9PT0gMTApIHx8IChtb2QgPT09IDExKSkgbW9kID0gMDtcbiAgICAgIGlmIChtb2QgIT09IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZygxMCwgMTEpLCAxMCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pKHRoaXMudmFsdWUpO1xuXG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc0NQRicsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBoYXNNaW5MZW5ndGggPSAobWluTGVuZ3RoLCBtZXNzYWdlID0gYE1pbmltYWwgbGVuZ2h0IGlzICR7bWluTGVuZ3RofWApID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhKHRoaXMudmFsdWUubGVuZ3RoID49IG1pbkxlbmd0aCk7XG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaGFzTWluTGVuZ3RoJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25zIGZyb20gJy4vVmFsaWRhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uQ29udHJhY3Qge1xuICBlcnJvcnMgPSBuZXcgTWFwKClcblxuICB2YWxpZGF0ZShwYXJhbSwgdmFsdWUpIHtcbiAgICB0aGlzLnNldFBhcmFtKHBhcmFtKTtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25zKHsgY29udHJhY3Q6IHRoaXMsIHBhcmFtLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnM7XG4gIH1cblxuICBoYXNFcnJvcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mVmFsaWRhdGlvbkVycm9ycyA9IEFycmF5LmZyb20odGhpcy5lcnJvcnMudmFsdWVzKCkpO1xuICAgIGNvbnN0IGZpcnN0VmFsaWRhdGlvbkVycm9ySGFzRXJyb3JzID0gbGlzdE9mVmFsaWRhdGlvbkVycm9yc1swXS5zaXplID4gMDtcblxuICAgIGNvbnN0IGlzVmFsaWRDb250cmFjdCA9IGxpc3RPZlZhbGlkYXRpb25FcnJvcnMucmVkdWNlKChhY2MsIGN1cnJlbnRFcnJvcikgPT4ge1xuICAgICAgY29uc3QgaGFzQ3VycmVudFZhbGlkYXRpb25FcnJvckVycm9ycyA9IGN1cnJlbnRFcnJvci5zaXplID4gMDtcbiAgICAgIGNvbnN0IHByZXZpb3VzT3JDdXJyZW50SGFzRXJyb3JzID0gYWNjIHx8IGhhc0N1cnJlbnRWYWxpZGF0aW9uRXJyb3JFcnJvcnM7XG5cbiAgICAgIGlmIChwcmV2aW91c09yQ3VycmVudEhhc0Vycm9ycykgcmV0dXJuIHRydWU7XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgZmlyc3RWYWxpZGF0aW9uRXJyb3JIYXNFcnJvcnMpO1xuXG4gICAgcmV0dXJuIGlzVmFsaWRDb250cmFjdDtcbiAgfVxuXG4gIHNldFBhcmFtKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLmVycm9ycy5nZXQocGFyYW0pKSB7XG4gICAgICB0aGlzLmVycm9ycy5zZXQocGFyYW0sIG5ldyBNYXAoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IgPSAocGFyYW0sIHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBlcnJvck9iaiA9IHtcbiAgICAgIHBhcmFtLFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLnNldCh0eXBlLCBlcnJvck9iaik7XG4gIH1cblxuICByZW1vdmVFcnJvciA9IChwYXJhbSwgdHlwZSkgPT4ge1xuICAgIGlmICh0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pKSB7XG4gICAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLmRlbGV0ZSh0eXBlKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldEVycm9yc0J5UGFyYW0ocGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgfVxuXG4gIGlzVmFsaWRQYXJhbShwYXJhbSkge1xuICAgIGNvbnN0IHBhcmFtRXJyb3JzID0gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgICBpZiAocGFyYW1FcnJvcnMpIHJldHVybiBwYXJhbUVycm9ycy5zaXplID09PSAwO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGRWYWxpZGF0b3Ige1xuICBpbml0aWFsaXplZCA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgZm9ybUZpZWxkTmFtZSxcbiAgICB2YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgZmllbGRWYWxpZGF0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50ID0gZm9ybUZpZWxkRWxlbWVudDtcbiAgICB0aGlzLmZvcm1GaWVsZE5hbWUgPSBmb3JtRmllbGROYW1lO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gdmFsaWRhdGlvbkNvbnRyYWN0O1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uID0gZmllbGRWYWxpZGF0aW9uO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbigpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcnMoKTtcbiAgfVxuXG4gIHZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24odGhpcy5mb3JtRmllbGRFbGVtZW50LnZhbHVlLCB0aGlzLnZhbGlkYXRpb25Db250cmFjdCk7XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuaXNJbnZhbGlkKCkgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5mb3JtRmllbGRFbGVtZW50O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10eXBlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXR5cGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXJyb3JzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCBlcnJvcnNPZlRoaXNQYXJhbSA9IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmdldEVycm9yc0J5UGFyYW0odGhpcy5mb3JtRmllbGROYW1lKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IEFycmF5LmZyb20oZXJyb3JzT2ZUaGlzUGFyYW0udmFsdWVzKCkpIHx8IFtdO1xuICAgICAgY29uc3QgZmlyc3RFcnJvciA9IGVycm9yc1swXSB8fCB7fTtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQuaW5uZXJIVE1MID0gZmlyc3RFcnJvci5tZXNzYWdlIHx8ICcnO1xuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWQgPSAoKSA9PiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5pc1ZhbGlkUGFyYW0odGhpcy5mb3JtRmllbGROYW1lKVxuXG4gIGlzSW52YWxpZCA9ICgpID0+ICF0aGlzLmlzVmFsaWQoKVxuXG4gIHNldHVwRm9ybUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlLFxuICAgIH07XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50KCk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgJzxzcGFuIGNsYXNzPVwiZXJyb3JzXCI+PC9zcGFuPicpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSB0aGlzLmZvcm1GaWVsZEVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZXJyb3JzJyk7XG4gIH1cbn1cbiIsImltcG9ydCBWYWxpZGF0aW9uQ29udHJhY3QgZnJvbSAnLi4vRmx1ZW50VmFsaWRhdG9yJztcbmltcG9ydCBGb3JtRmllbGRWYWxpZGF0b3IgZnJvbSAnLi9Gb3JtRmllbGRWYWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgZm9ybUZpZWxkRWxlbWVudHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigkZm9ybUVsZW1lbnQsIGZvcm1GaWVsZE5hbWVzKSB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSBuZXcgVmFsaWRhdGlvbkNvbnRyYWN0KCk7XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50ID0gJGZvcm1FbGVtZW50O1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpO1xuXG4gICAgdGhpcy5mb3JtRmllbGROYW1lcyA9IGZvcm1GaWVsZE5hbWVzO1xuICAgIHRoaXMuc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+ICF0aGlzLmlzSW52YWxpZCgpO1xuXG4gIGlzSW52YWxpZCA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMoKTtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuaGFzRXJyb3JzKCk7XG4gIH1cblxuICBzZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5T2ZGb3JtRmllbGROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybUZpZWxkTmFtZXMpO1xuXG4gICAgYXJyYXlPZkZvcm1GaWVsZE5hbWVzLmZvckVhY2goKGZpZWxkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgJGZvcm1GaWVsZEVsZW1lbnQgPSB0aGlzLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYCk7XG4gICAgICBjb25zdCBmb3JtRmllbGRWYWxpZGF0b3IgPSBuZXcgRm9ybUZpZWxkVmFsaWRhdG9yKHtcbiAgICAgICAgZm9ybUZpZWxkRWxlbWVudDogJGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgICAgIGZvcm1GaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgdmFsaWRhdGlvbkNvbnRyYWN0OiB0aGlzLnZhbGlkYXRpb25Db250cmFjdCxcbiAgICAgICAgZmllbGRWYWxpZGF0aW9uOiB0aGlzLmZvcm1GaWVsZE5hbWVzW2ZpZWxkTmFtZV0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudHMucHVzaChmb3JtRmllbGRWYWxpZGF0b3IpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1FbGVtZW50LnZhbGlkYXRvciA9IHtcbiAgICAgIGlzVmFsaWQ6IHRoaXMuaXNWYWxpZCxcbiAgICAgIGlzSW52YWxpZDogdGhpcy5pc0ludmFsaWQsXG4gICAgICBjbGVhcjogdGhpcy5jbGVhcixcbiAgICB9O1xuXG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCk7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5jbGVhcik7XG4gIH1cblxuICB2YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQgPSAoeyB0YXJnZXQ6IGZvcm1GaWVsZEVsZW1lbnQgfSkgPT4ge1xuICAgIGZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudHMuZm9yRWFjaCgoZm9ybUZpZWxkRWxlbWVudCkgPT4ge1xuICAgICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSBuZXcgVmFsaWRhdGlvbkNvbnRyYWN0KCk7XG4gIH1cbn1cbiIsImNvbnN0IGRlZXBFcXVhbCA9IChhLCBiKSA9PiB7XG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgcmV0dXJuIGFLZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldKSB8fCBhY2MgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWVwRXF1YWw7XG4iLCJpbXBvcnQgZGVlcEVxdWFsIGZyb20gJy4uL2RlZXBFcXVhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzUmVwb3NpdG9yeSB7XG4gIGtleSA9ICd1c2Vycyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZXRBbGwgPSB0aGlzLmdldEFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5zZXJ0ID0gdGhpcy5pbnNlcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuXG4gIHNldEl0ZW1JbkxvY2FsU3RvcmFnZSA9IGl0ZW0gPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgaW5zZXJ0KHVzZXIpIHtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgbGV0IGNyZWF0ZWRVc2VyO1xuXG4gICAgaWYgKHVzZXIuZ2V0RnVsbE5hbWUpIHtcbiAgICAgIGNyZWF0ZWRVc2VyID0ge1xuICAgICAgICBuYW1lOiB1c2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICAgIGNwZjogdXNlci5nZXRDUEYoKSxcbiAgICAgICAgcGhvbmU6IHVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgICAgZW1haWw6IHVzZXIuZ2V0RW1haWwoKSxcbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9mVXNlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGRlZXBFcXVhbChsaXN0T2ZVc2Vyc1tpXSwgY3JlYXRlZFVzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVXNlciBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3RPZlVzZXJzLnB1c2goY3JlYXRlZFVzZXIpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKGxpc3RPZlVzZXJzKTtcbiAgICByZXR1cm4gY3JlYXRlZFVzZXI7XG4gIH1cblxuICByZW1vdmUocmVtb3ZhYmxlVXNlcikge1xuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEYk9iaiA9IHtcbiAgICAgIG5hbWU6IHJlbW92YWJsZVVzZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgIGNwZjogcmVtb3ZhYmxlVXNlci5nZXRDUEYoKSxcbiAgICAgIHBob25lOiByZW1vdmFibGVVc2VyLmdldFBob25lKCksXG4gICAgICBlbWFpbDogcmVtb3ZhYmxlVXNlci5nZXRFbWFpbCgpLFxuICAgIH07XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRMaXN0T2ZVc2VycyA9IGxpc3RPZlVzZXJzXG4gICAgICAuZmlsdGVyKGN1cnJlbnRVc2VyID0+ICFkZWVwRXF1YWwoY3VycmVudFVzZXIsIHJlbW92YWJsZVVzZXJEYk9iaikpO1xuXG4gICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UodXBkYXRlZExpc3RPZlVzZXJzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==