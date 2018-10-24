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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ob21lL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvY29uZmlncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9DUEYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvUGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvZGVlcEVxdWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5LmpzIl0sIm5hbWVzIjpbIlVzZXJzVGFibGUiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInVzZXJzIiwiY2xpY2tUYXJnZXRFbGVtZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ1c2VyVHIiLCJjbG9zZXN0IiwidXNlclRkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1c2VyRGF0YSIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsImFjYyIsImN1cnJlbnRUZCIsImN1cnJlbnREYXRhVHlwZSIsImdldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwicmVtb3ZlIiwic3RhdGUiLCJtYXAiLCJ1c2VyIiwiZ2V0RnVsbE5hbWUiLCJnZXRDUEZGb3JtYXRlZCIsImdldEVtYWlsIiwiZ2V0UGhvbmVGb3JtYXRlZCIsImpvaW4iLCJsZW5ndGgiLCJiYXNlRWxlbWVudCIsInNldHVwRXZlbnRzIiwib25jbGljayIsInJlbW92ZVVzZXIiLCJpbm5lckhUTUwiLCJ0ZW1wbGF0ZSIsIkNvbXBvbmVudCIsIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidmFsaWRhdG9yIiwiaXNJbnZhbGlkIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZm9ybUVsZW1lbnRzRFRPIiwiZnVsbE5hbWUiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJjcGYiLCJwaG9uZSIsImVtYWlsIiwidXNlcnNSZXBvc2l0b3J5IiwiVXNlcnNSZXBvc2l0b3J5IiwidXNlcnNTZXJ2aWNlIiwiVXNlcnNTZXJ2aWNlIiwiYWRkTmV3IiwidGhlbiIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2Vyc1RhYmxlIiwiZG9jdW1lbnQiLCJnZXRBbGxXaXRoSW5pdGlhbERhdGEiLCJzZXRTdGF0ZSIsInJlbW92YWJsZVVzZXJEVE8iLCJub21lIiwidGVsZWZvbmUiLCJkZWxldGVVc2VyIiwiZ2V0QWxsIiwicGFnZUhvbWUiLCJ1c2VyQ29udHJvbGxlciIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwiZnJlZXplIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbnNlcnQiLCJsaXN0T2ZEb21haW5Vc2VycyIsIm5hbWUiLCJtZXNzYWdlIiwiZmV0Y2giLCJFWFRFUk5BTF9TRVJWSUNFX1VSTCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZm9yRWFjaCIsImhhc1VzZXJzRnJvbVJlcG9zaXRvcnkiLCJpbnNlcnRFeHRlcm5hbFVzZXJzIiwiQ1BGUmVnZXgiLCJyZXBsYWNlIiwiZnVsbE1hdGNoIiwicGFydE9uZSIsInBhcnRUd28iLCJwYXJ0VGhyZWUiLCJkaWdpdCIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJkZWVwRXF1YWwiLCJhIiwiYiIsImtleXMiLCJhS2V5cyIsImtleSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImJpbmQiLCJnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSIsImxpc3RPZlVzZXJzIiwiY3JlYXRlZFVzZXIiLCJnZXRDUEYiLCJnZXRQaG9uZSIsInB1c2giLCJzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UiLCJyZW1vdmFibGVVc2VyIiwicmVtb3ZhYmxlVXNlckRiT2JqIiwidXBkYXRlZExpc3RPZlVzZXJzIiwiZmlsdGVyIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJ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QUcsS0FBS3pELE1BQUwsRUFBcEI7QUFDQSxVQUFNaUUsa0JBQWtCLEdBQUdSLFdBQVcsQ0FDbkNTLE1BRHdCLENBQ2pCLFVBQUFDLFdBQVc7QUFBQSxlQUFJLENBQUN6QiwwREFBUyxDQUFDeUIsV0FBRCxFQUFjSCxrQkFBZCxDQUFkO0FBQUEsT0FETSxDQUEzQjtBQUdBLFdBQUtGLHFCQUFMLENBQTJCRyxrQkFBM0I7QUFDRCIsImZpbGUiOiJqcy9ob21lL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9pbmZyYS9Db21wb25lbnQnO1xuaW1wb3J0ICcuL1VzZXJzVGFibGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5vbmNsaWNrID0gdGhpcy5yZW1vdmVVc2VyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlVXNlciA9ICh7IHRhcmdldDogY2xpY2tUYXJnZXRFbGVtZW50IH0pID0+IHtcbiAgICBpZiAoY2xpY2tUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbW92ZScpKSB7XG4gICAgICBjb25zdCB1c2VyVHIgPSBjbGlja1RhcmdldEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgIGNvbnN0IHVzZXJUZHMgPSB1c2VyVHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gQXJyYXkuZnJvbSh1c2VyVGRzKS5yZWR1Y2UoKGFjYywgY3VycmVudFRkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhVHlwZSA9IGN1cnJlbnRUZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICBhY2NbY3VycmVudERhdGFUeXBlXSA9IGN1cnJlbnRUZC50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5yZW1vdmUodXNlckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT4gYFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vbWU8L3RkPlxuICAgICAgICAgICAgPHRkPkNQRjwvdGQ+XG4gICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxuICAgICAgICAgICAgPHRkPlRlbGVmb25lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubWFwKHVzZXIgPT4gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cIm5vbWVcIj4ke3VzZXIuZ2V0RnVsbE5hbWUoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJjcGZcIj4ke3VzZXIuZ2V0Q1BGRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJlbWFpbFwiPiR7dXNlci5nZXRFbWFpbCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cInRlbGVmb25lXCI+JHt1c2VyLmdldFBob25lRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiYnRuLXJlbW92ZVwiPlJlbW92ZXI8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYCkuam9pbignJylcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGVuZ3RoID09PSAwID8gJzx0cj48dGQgY29sc3Bhbj1cIjRcIiBhbGlnbj1cImNlbnRlclwiPk5lbmh1bSB1c3XDoXJpbyBlbmNvbnRyYWRvIDooPC90ZD48L3RyPicgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcbmltcG9ydCBVc2Vyc1JlcG9zaXRvcnkgZnJvbSAnLi4vLi4vaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeSc7XG5pbXBvcnQgVXNlcnNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzVGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHN0YXRpYyBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSk7XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWUsXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2Vyc1NlcnZpY2UgPSBuZXcgVXNlcnNTZXJ2aWNlKHsgdXNlcnNSZXBvc2l0b3J5IH0pO1xuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuYWRkTmV3KGZvcm1FbGVtZW50c0RUTylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93QWxsKCkge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2Vyc1NlcnZpY2UgPSBuZXcgVXNlcnNTZXJ2aWNlKHsgdXNlcnNSZXBvc2l0b3J5IH0pO1xuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuZ2V0QWxsV2l0aEluaXRpYWxEYXRhKClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUodXNlcikge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogdXNlci5ub21lLFxuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIHBob25lOiB1c2VyLnRlbGVmb25lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgICBjb25zdCB1c2Vyc1NlcnZpY2UgPSBuZXcgVXNlcnNTZXJ2aWNlKHsgdXNlcnNSZXBvc2l0b3J5IH0pO1xuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuZGVsZXRlVXNlcihyZW1vdmFibGVVc2VyRFRPKVxuICAgICAgLnRoZW4odXNlcnNTZXJ2aWNlLmdldEFsbClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInO1xuXG53aW5kb3cucGFnZUhvbWUgPSB7XG4gIHVzZXJDb250cm9sbGVyOiBVc2VyQ29udHJvbGxlcixcbn07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBQaG9uZSBmcm9tICcuLi92YWx1ZU9iamVjdHMvUGhvbmUnO1xuaW1wb3J0IENQRiBmcm9tICcuLi92YWx1ZU9iamVjdHMvQ1BGJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmdWxsTmFtZSxcbiAgICBjcGYsXG4gICAgcGhvbmUsXG4gICAgZW1haWwsXG4gIH0pIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgdGhpcy5jcGYgPSBuZXcgQ1BGKHsgQ1BGTnVtYmVyczogY3BmIH0pO1xuICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmUoeyBudW1iZXI6IHBob25lIH0pO1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lID0gKCkgPT4gdGhpcy5mdWxsTmFtZVxuXG4gIGdldEVtYWlsID0gKCkgPT4gdGhpcy5lbWFpbFxuXG4gIGdldENQRiA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlKClcblxuICBnZXRDUEZGb3JtYXRlZCA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlRm9ybWF0ZWQoKVxuXG4gIGdldFBob25lID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXIoKVxuXG4gIGdldFBob25lRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlckZvcm1hdGVkKClcbn1cbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IHsgRVhURVJOQUxfU0VSVklDRV9VUkwgfSBmcm9tICcuL2NvbmZpZ3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih7IHVzZXJzUmVwb3NpdG9yeSB9KSB7XG4gICAgdGhpcy51c2Vyc1JlcG9zaXRvcnkgPSB1c2Vyc1JlcG9zaXRvcnk7XG4gIH1cblxuICBhZGROZXcgPSAoZm9ybUVsZW1lbnRzRFRPKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm1FbGVtZW50c0RUTyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHRoaXMudXNlcnNSZXBvc2l0b3J5Lmluc2VydCh1c2VyKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGwgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RPZkRvbWFpblVzZXJzID0gdGhpcy51c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubWFwKHVzZXIgPT4gbmV3IFVzZXIoe1xuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgIH0pKTtcbiAgICByZXNvbHZlKGxpc3RPZkRvbWFpblVzZXJzKTtcbiAgfSk7XG5cbiAgZGVsZXRlVXNlciA9IChyZW1vdmFibGVVc2VyRFRPKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHJlbW92YWJsZVVzZXJEVE8pO1xuICAgIHRoaXMudXNlcnNSZXBvc2l0b3J5LnJlbW92ZSh1c2VyKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUoeyBtZXNzYWdlOiAncmVtb3ZlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5zZXJ0RXh0ZXJuYWxVc2VycyA9ICgpID0+IGZldGNoKEVYVEVSTkFMX1NFUlZJQ0VfVVJMKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4gdGhpcy51c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KG5ldyBVc2VyKHtcbiAgICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgICAgfSkpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKCk7XG4gICAgfSlcblxuICBnZXRBbGxXaXRoSW5pdGlhbERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSA9IHRoaXMudXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnNlcnRFeHRlcm5hbFVzZXJzKCk7XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgRVhURVJOQUxfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9wcml2YXRlLTIxZThkZS1yYWZhZWxsdWNpby5hcGlhcnktbW9jay5jb20vdXNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEVYVEVSTkFMX1NFUlZJQ0VfVVJMLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgQ1BGTnVtYmVycyB9KSB7XG4gICAgdGhpcy5DUEZOdW1iZXJzID0gQ1BGTnVtYmVycy5yZXBsYWNlKC8tL2csICcnKS5yZXBsYWNlKC9cXC4vZywgJycpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgcmV0dXJuIHRoaXMuQ1BGTnVtYmVycy5yZXBsYWNlKENQRlJlZ2V4LCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlci5yZXBsYWNlKC8tL2csICcnKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyID0gKCkgPT4gdGhpcy5udW1iZXI7XG5cbiAgZ2V0TnVtYmVyRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLm51bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgaWYgKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcblxuICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IGRlZXBFcXVhbCA9IChhLCBiKSA9PiB7XG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgcmV0dXJuIGFLZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldKSB8fCBhY2MgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWVwRXF1YWw7XG4iLCJpbXBvcnQgZGVlcEVxdWFsIGZyb20gJy4uL2RlZXBFcXVhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzUmVwb3NpdG9yeSB7XG4gIGtleSA9ICd1c2Vycyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZXRBbGwgPSB0aGlzLmdldEFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5zZXJ0ID0gdGhpcy5pbnNlcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuXG4gIHNldEl0ZW1JbkxvY2FsU3RvcmFnZSA9IGl0ZW0gPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgaW5zZXJ0KHVzZXIpIHtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgbGV0IGNyZWF0ZWRVc2VyO1xuXG4gICAgaWYgKHVzZXIuZ2V0RnVsbE5hbWUpIHtcbiAgICAgIGNyZWF0ZWRVc2VyID0ge1xuICAgICAgICBuYW1lOiB1c2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICAgIGNwZjogdXNlci5nZXRDUEYoKSxcbiAgICAgICAgcGhvbmU6IHVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgICAgZW1haWw6IHVzZXIuZ2V0RW1haWwoKSxcbiAgICAgIH07XG4gICAgICBsaXN0T2ZVc2Vycy5wdXNoKGNyZWF0ZWRVc2VyKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZShsaXN0T2ZVc2Vycyk7XG4gICAgcmV0dXJuIGNyZWF0ZWRVc2VyO1xuICB9XG5cbiAgcmVtb3ZlKHJlbW92YWJsZVVzZXIpIHtcbiAgICBjb25zdCByZW1vdmFibGVVc2VyRGJPYmogPSB7XG4gICAgICBuYW1lOiByZW1vdmFibGVVc2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICBjcGY6IHJlbW92YWJsZVVzZXIuZ2V0Q1BGKCksXG4gICAgICBwaG9uZTogcmVtb3ZhYmxlVXNlci5nZXRQaG9uZSgpLFxuICAgICAgZW1haWw6IHJlbW92YWJsZVVzZXIuZ2V0RW1haWwoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBjb25zdCB1cGRhdGVkTGlzdE9mVXNlcnMgPSBsaXN0T2ZVc2Vyc1xuICAgICAgLmZpbHRlcihjdXJyZW50VXNlciA9PiAhZGVlcEVxdWFsKGN1cnJlbnRVc2VyLCByZW1vdmFibGVVc2VyRGJPYmopKTtcblxuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKHVwZGF0ZWRMaXN0T2ZVc2Vycyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=