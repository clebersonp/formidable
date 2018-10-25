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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ "./src/app/pages/home/index.js":
/*!*************************************!*\
  !*** ./src/app/pages/home/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/UserControler */ "./src/app/controllers/UserControler.js");

window.pageHome = {
  userController: _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/app/pages/home/index.scss":
/*!***************************************!*\
  !*** ./src/app/pages/home/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ 1:
/*!***************************************************************************!*\
  !*** multi ./src/app/pages/home/index.js ./src/app/pages/home/index.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/app/pages/home/index.js */"./src/app/pages/home/index.js");
module.exports = __webpack_require__(/*! ./src/app/pages/home/index.scss */"./src/app/pages/home/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9jb25maWdzLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9kZWVwRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlcnNUYWJsZSIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXNlcnMiLCJjbGlja1RhcmdldEVsZW1lbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVzZXJUciIsImNsb3Nlc3QiLCJ1c2VyVGRzIiwicXVlcnlTZWxlY3RvckFsbCIsInVzZXJEYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudFRkIiwiY3VycmVudERhdGFUeXBlIiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJzdGF0ZSIsIm1hcCIsInVzZXIiLCJnZXRGdWxsTmFtZSIsImdldENQRkZvcm1hdGVkIiwiZ2V0RW1haWwiLCJnZXRQaG9uZUZvcm1hdGVkIiwiam9pbiIsImxlbmd0aCIsImJhc2VFbGVtZW50Iiwic2V0dXBFdmVudHMiLCJvbmNsaWNrIiwicmVtb3ZlVXNlciIsImlubmVySFRNTCIsInRlbXBsYXRlIiwiQ29tcG9uZW50IiwiVXNlckNvbnRyb2xsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGZvcm0iLCJ2YWxpZGF0b3IiLCJpc0ludmFsaWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmb3JtRWxlbWVudHNEVE8iLCJmdWxsTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZW1haWwiLCJ1c2Vyc1JlcG9zaXRvcnkiLCJVc2Vyc1JlcG9zaXRvcnkiLCJ1c2Vyc1NlcnZpY2UiLCJVc2Vyc1NlcnZpY2UiLCJzZXRUaW1lb3V0IiwiYWRkTmV3IiwidGhlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsInVwZGF0ZUZvcm1FcnJvciIsInVzZXJzVGFibGUiLCJkb2N1bWVudCIsImdldEFsbFdpdGhJbml0aWFsRGF0YSIsInNldFN0YXRlIiwicmVtb3ZhYmxlVXNlckRUTyIsIm5vbWUiLCJ0ZWxlZm9uZSIsImRlbGV0ZVVzZXIiLCJnZXRBbGwiLCJwYWdlSG9tZSIsInVzZXJDb250cm9sbGVyIiwiVXNlciIsImdldFZhbHVlIiwiZ2V0VmFsdWVGb3JtYXRlZCIsImdldE51bWJlciIsImdldE51bWJlckZvcm1hdGVkIiwiQ1BGIiwiQ1BGTnVtYmVycyIsIlBob25lIiwibnVtYmVyIiwidG9Mb3dlckNhc2UiLCJPYmplY3QiLCJmcmVlemUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImluc2VydFVzZXJSZXN1bHQiLCJpbnNlcnQiLCJFcnJvciIsImxpc3RPZkRvbWFpblVzZXJzIiwibmFtZSIsImZldGNoIiwiRVhURVJOQUxfU0VSVklDRV9VUkwiLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImZvckVhY2giLCJoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5IiwiaW5zZXJ0RXh0ZXJuYWxVc2VycyIsIkNQRlJlZ2V4IiwicmVwbGFjZSIsImZ1bGxNYXRjaCIsInBhcnRPbmUiLCJwYXJ0VHdvIiwicGFydFRocmVlIiwiZGlnaXQiLCJkZGQiLCJudW1iZXJQYXJ0T25lIiwibnVtYmVyUGFydFR3byIsIm5ld1N0YXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwiZGVlcEVxdWFsIiwiYSIsImIiLCJrZXlzIiwiYUtleXMiLCJrZXkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJiaW5kIiwiZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UiLCJsaXN0T2ZVc2VycyIsImNyZWF0ZWRVc2VyIiwiZ2V0Q1BGIiwiZ2V0UGhvbmUiLCJpIiwicHVzaCIsInNldEl0ZW1JbkxvY2FsU3RvcmFnZSIsInJlbW92YWJsZVVzZXIiLCJyZW1vdmFibGVVc2VyRGJPYmoiLCJ1cGRhdGVkTGlzdE9mVXNlcnMiLCJmaWx0ZXIiLCJjdXJyZW50VXNlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1C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R0osV0FBVyxDQUFDeEcsTUFBaEMsRUFBd0M0RyxDQUFDLElBQUksQ0FBN0MsRUFBZ0Q7QUFDOUMsY0FBSW5CLDBEQUFTLENBQUNlLFdBQVcsQ0FBQ0ksQ0FBRCxDQUFaLEVBQWlCSCxXQUFqQixDQUFiLEVBQTRDO0FBQzFDLG1CQUFPLElBQUl4QyxLQUFKLENBQVUscUJBQVYsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUR1QyxtQkFBVyxDQUFDSyxJQUFaLENBQWlCSixXQUFqQjtBQUNEOztBQUVELFdBQUtLLHFCQUFMLENBQTJCTixXQUEzQjtBQUNBLGFBQU9DLFdBQVA7QUFDRDs7OzJCQUVNTSxhLEVBQWU7QUFDcEIsVUFBTUMsa0JBQWtCLEdBQUc7QUFDekI3QyxZQUFJLEVBQUU0QyxhQUFhLENBQUNwSCxXQUFkLEVBRG1CO0FBRXpCeUIsV0FBRyxFQUFFMkYsYUFBYSxDQUFDTCxNQUFkLEVBRm9CO0FBR3pCckYsYUFBSyxFQUFFMEYsYUFBYSxDQUFDSixRQUFkLEVBSGtCO0FBSXpCckYsYUFBSyxFQUFFeUYsYUFBYSxDQUFDbEgsUUFBZDtBQUprQixPQUEzQjtBQU1BLFVBQU0yRyxXQUFXLEdBQUcsS0FBSzNELE1BQUwsRUFBcEI7QUFDQSxVQUFNb0Usa0JBQWtCLEdBQUdULFdBQVcsQ0FDbkNVLE1BRHdCLENBQ2pCLFVBQUFDLFdBQVc7QUFBQSxlQUFJLENBQUMxQiwwREFBUyxDQUFDMEIsV0FBRCxFQUFjSCxrQkFBZCxDQUFkO0FBQUEsT0FETSxDQUEzQjtBQUdBLFdBQUtGLHFCQUFMLENBQTJCRyxrQkFBM0I7QUFDRCIsImZpbGUiOiJqcy9ob21lL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vaW5mcmEvQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHVzZXJzOiBbXSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRyb2xsZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5iYXNlRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG4gIH1cblxuICBzZXR1cEV2ZW50cygpIHtcbiAgICB0aGlzLmJhc2VFbGVtZW50Lm9uY2xpY2sgPSB0aGlzLnJlbW92ZVVzZXI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG4gIH1cblxuICByZW1vdmVVc2VyID0gKHsgdGFyZ2V0OiBjbGlja1RhcmdldEVsZW1lbnQgfSkgPT4ge1xuICAgIGlmIChjbGlja1RhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tcmVtb3ZlJykpIHtcbiAgICAgIGNvbnN0IHVzZXJUciA9IGNsaWNrVGFyZ2V0RWxlbWVudC5jbG9zZXN0KCd0cicpO1xuICAgICAgY29uc3QgdXNlclRkcyA9IHVzZXJUci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBBcnJheS5mcm9tKHVzZXJUZHMpLnJlZHVjZSgoYWNjLCBjdXJyZW50VGQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGFUeXBlID0gY3VycmVudFRkLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIGFjY1tjdXJyZW50RGF0YVR5cGVdID0gY3VycmVudFRkLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgICAgdGhpcy5jb250cm9sbGVyLnJlbW92ZSh1c2VyRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGUgPSAoKSA9PiBgXG4gICAgICA8dGFibGUgY2xhc3M9XCJ1c2Vycy10YWJsZSAtc3RyaXBlZFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vbWU8L3RkPlxuICAgICAgICAgICAgPHRkPkNQRjwvdGQ+XG4gICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxuICAgICAgICAgICAgPHRkPlRlbGVmb25lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubWFwKHVzZXIgPT4gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cIm5vbWVcIj4ke3VzZXIuZ2V0RnVsbE5hbWUoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJjcGZcIj4ke3VzZXIuZ2V0Q1BGRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJlbWFpbFwiPiR7dXNlci5nZXRFbWFpbCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cInRlbGVmb25lXCI+JHt1c2VyLmdldFBob25lRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiYnRuLXJlbW92ZSBidG4tZ2VuZXJpYyAtcmVkIC1zbWFsbFwiPlJlbW92ZXI8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYCkuam9pbignJylcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGVuZ3RoID09PSAwID8gJzx0cj48dGQgY29sc3Bhbj1cIjRcIiBhbGlnbj1cImNlbnRlclwiPk5lbmh1bSB1c3XDoXJpbyBlbmNvbnRyYWRvIDooPC90ZD48L3RyPicgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcbmltcG9ydCBVc2Vyc1JlcG9zaXRvcnkgZnJvbSAnLi4vLi4vaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeSc7XG5pbXBvcnQgVXNlcnNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzVGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHN0YXRpYyBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSk7XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWUsXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2Vyc1NlcnZpY2UgPSBuZXcgVXNlcnNTZXJ2aWNlKHsgdXNlcnNSZXBvc2l0b3J5IH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1c2Vyc1NlcnZpY2VcbiAgICAgICAgLmFkZE5ldyhmb3JtRWxlbWVudHNEVE8pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGVkJykpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIC8qIGVzbGludCBuby1hbGVydDogXCJlcnJvclwiICovXG4gICAgICAgICAgaWYgKGVyci5tZXNzYWdlID09PSAnVXNlciBhbHJlYWR5IGV4aXN0cycpICRmb3JtLnVwZGF0ZUZvcm1FcnJvcignVXN1w6FyaW8gasOhIGV4aXN0ZSA6KCcpO1xuICAgICAgICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzdG9wbG9hZGluZycpKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0FsbCgpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmdldEFsbFdpdGhJbml0aWFsRGF0YSgpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKHVzZXIpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCByZW1vdmFibGVVc2VyRFRPID0ge1xuICAgICAgZnVsbE5hbWU6IHVzZXIubm9tZSxcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBwaG9uZTogdXNlci50ZWxlZm9uZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH07XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTylcbiAgICAgIC50aGVuKHVzZXJzU2VydmljZS5nZXRBbGwpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJztcblxud2luZG93LnBhZ2VIb21lID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IEVYVEVSTkFMX1NFUlZJQ0VfVVJMIH0gZnJvbSAnLi9jb25maWdzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoeyB1c2Vyc1JlcG9zaXRvcnkgfSkge1xuICAgIHRoaXMudXNlcnNSZXBvc2l0b3J5ID0gdXNlcnNSZXBvc2l0b3J5O1xuICB9XG5cbiAgYWRkTmV3ID0gKGZvcm1FbGVtZW50c0RUTykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbnNlcnRVc2VyUmVzdWx0ID0gdGhpcy51c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KHVzZXIpO1xuICAgICAgaWYgKGluc2VydFVzZXJSZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikgcmVqZWN0KGluc2VydFVzZXJSZXN1bHQpO1xuXG4gICAgICByZXNvbHZlKGluc2VydFVzZXJSZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZEb21haW5Vc2VycyA9IHRoaXMudXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLm1hcCh1c2VyID0+IG5ldyBVc2VyKHtcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShsaXN0T2ZEb21haW5Vc2Vycyk7XG4gIH0pO1xuXG4gIGRlbGV0ZVVzZXIgPSAocmVtb3ZhYmxlVXNlckRUTykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihyZW1vdmFibGVVc2VyRFRPKTtcbiAgICB0aGlzLnVzZXJzUmVwb3NpdG9yeS5yZW1vdmUodXNlcik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHsgbWVzc2FnZTogJ3JlbW92ZWQgd2l0aCBzdWNjZXNzJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluc2VydEV4dGVybmFsVXNlcnMgPSAoKSA9PiBmZXRjaChFWFRFUk5BTF9TRVJWSUNFX1VSTClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KVxuICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHRoaXMudXNlcnNSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgIH0pKSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpO1xuICAgIH0pXG5cbiAgZ2V0QWxsV2l0aEluaXRpYWxEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkgPSB0aGlzLnVzZXJzUmVwb3NpdG9yeS5nZXRBbGwoKS5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0RXh0ZXJuYWxVc2VycygpO1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEVYVEVSTkFMX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vcHJpdmF0ZS0yMWU4ZGUtcmFmYWVsbHVjaW8uYXBpYXJ5LW1vY2suY29tL3VzZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBFWFRFUk5BTF9TRVJWSUNFX1VSTCxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDUEYge1xuICBjb25zdHJ1Y3Rvcih7IENQRk51bWJlcnMgfSkge1xuICAgIHRoaXMuQ1BGTnVtYmVycyA9IENQRk51bWJlcnMucmVwbGFjZSgvLS9nLCAnJykucmVwbGFjZSgvXFwuL2csICcnKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpID0+IHRoaXMuQ1BGTnVtYmVyc1xuXG4gIGdldFZhbHVlRm9ybWF0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgQ1BGUmVnZXggPSAvKFxcZHszfSkoXFxkezN9KShcXGR7M30pKFxcZHsyfSkvO1xuICAgIHJldHVybiB0aGlzLkNQRk51bWJlcnMucmVwbGFjZShDUEZSZWdleCwgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4gYCR7cGFydE9uZX0uJHtwYXJ0VHdvfS4ke3BhcnRUaHJlZX0tJHtkaWdpdH1gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXIucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldE51bWJlciA9ICgpID0+IHRoaXMubnVtYmVyO1xuXG4gIGdldE51bWJlckZvcm1hdGVkID0gKCkgPT4gdGhpcy5udW1iZXIucmVwbGFjZSgvKFxcZHsyfSk/KFxcZHs0fSkoXFxkezR9KS8sIChmdWxsTWF0Y2gsIGRkZCwgbnVtYmVyUGFydE9uZSwgbnVtYmVyUGFydFR3bykgPT4ge1xuICAgIGlmIChkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG5cbiAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzZXRTdGF0ZSA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBkZWVwRXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHJldHVybiBhS2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkgfHwgYWNjID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVlcEVxdWFsO1xuIiwiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICcuLi9kZWVwRXF1YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2V0QWxsID0gdGhpcy5nZXRBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluc2VydCA9IHRoaXMuaW5zZXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cblxuICBzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UgPSBpdGVtID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGluc2VydCh1c2VyKSB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGxldCBjcmVhdGVkVXNlcjtcblxuICAgIGlmICh1c2VyLmdldEZ1bGxOYW1lKSB7XG4gICAgICBjcmVhdGVkVXNlciA9IHtcbiAgICAgICAgbmFtZTogdXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgICBjcGY6IHVzZXIuZ2V0Q1BGKCksXG4gICAgICAgIHBob25lOiB1c2VyLmdldFBob25lKCksXG4gICAgICAgIGVtYWlsOiB1c2VyLmdldEVtYWlsKCksXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPZlVzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChkZWVwRXF1YWwobGlzdE9mVXNlcnNbaV0sIGNyZWF0ZWRVc2VyKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1VzZXIgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0T2ZVc2Vycy5wdXNoKGNyZWF0ZWRVc2VyKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZShsaXN0T2ZVc2Vycyk7XG4gICAgcmV0dXJuIGNyZWF0ZWRVc2VyO1xuICB9XG5cbiAgcmVtb3ZlKHJlbW92YWJsZVVzZXIpIHtcbiAgICBjb25zdCByZW1vdmFibGVVc2VyRGJPYmogPSB7XG4gICAgICBuYW1lOiByZW1vdmFibGVVc2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICBjcGY6IHJlbW92YWJsZVVzZXIuZ2V0Q1BGKCksXG4gICAgICBwaG9uZTogcmVtb3ZhYmxlVXNlci5nZXRQaG9uZSgpLFxuICAgICAgZW1haWw6IHJlbW92YWJsZVVzZXIuZ2V0RW1haWwoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBjb25zdCB1cGRhdGVkTGlzdE9mVXNlcnMgPSBsaXN0T2ZVc2Vyc1xuICAgICAgLmZpbHRlcihjdXJyZW50VXNlciA9PiAhZGVlcEVxdWFsKGN1cnJlbnRVc2VyLCByZW1vdmFibGVVc2VyRGJPYmopKTtcblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKHVwZGF0ZWRMaXN0T2ZVc2Vycyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=