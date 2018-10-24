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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9jb25maWdzLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9kZWVwRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlcnNUYWJsZSIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXNlcnMiLCJjbGlja1RhcmdldEVsZW1lbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVzZXJUciIsImNsb3Nlc3QiLCJ1c2VyVGRzIiwicXVlcnlTZWxlY3RvckFsbCIsInVzZXJEYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudFRkIiwiY3VycmVudERhdGFUeXBlIiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJzdGF0ZSIsIm1hcCIsInVzZXIiLCJnZXRGdWxsTmFtZSIsImdldENQRkZvcm1hdGVkIiwiZ2V0RW1haWwiLCJnZXRQaG9uZUZvcm1hdGVkIiwiam9pbiIsImxlbmd0aCIsImJhc2VFbGVtZW50Iiwic2V0dXBFdmVudHMiLCJvbmNsaWNrIiwicmVtb3ZlVXNlciIsImlubmVySFRNTCIsInRlbXBsYXRlIiwiQ29tcG9uZW50IiwiVXNlckNvbnRyb2xsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGZvcm0iLCJ2YWxpZGF0b3IiLCJpc0ludmFsaWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmb3JtRWxlbWVudHNEVE8iLCJmdWxsTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZW1haWwiLCJ1c2Vyc1JlcG9zaXRvcnkiLCJVc2Vyc1JlcG9zaXRvcnkiLCJ1c2Vyc1NlcnZpY2UiLCJVc2Vyc1NlcnZpY2UiLCJhZGROZXciLCJ0aGVuIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVzZXJzVGFibGUiLCJkb2N1bWVudCIsImdldEFsbFdpdGhJbml0aWFsRGF0YSIsInNldFN0YXRlIiwicmVtb3ZhYmxlVXNlckRUTyIsIm5vbWUiLCJ0ZWxlZm9uZSIsImRlbGV0ZVVzZXIiLCJnZXRBbGwiLCJwYWdlSG9tZSIsInVzZXJDb250cm9sbGVyIiwiVXNlciIsImdldFZhbHVlIiwiZ2V0VmFsdWVGb3JtYXRlZCIsImdldE51bWJlciIsImdldE51bWJlckZvcm1hdGVkIiwiQ1BGIiwiQ1BGTnVtYmVycyIsIlBob25lIiwibnVtYmVyIiwidG9Mb3dlckNhc2UiLCJPYmplY3QiLCJmcmVlemUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImluc2VydCIsImxpc3RPZkRvbWFpblVzZXJzIiwibmFtZSIsIm1lc3NhZ2UiLCJmZXRjaCIsIkVYVEVSTkFMX1NFUlZJQ0VfVVJMIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJmb3JFYWNoIiwiaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSIsImluc2VydEV4dGVybmFsVXNlcnMiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsImRlZXBFcXVhbCIsImEiLCJiIiwia2V5cyIsImFLZXlzIiwia2V5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYmluZCIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJjcmVhdGVkVXNlciIsImdldENQRiIsImdldFBob25lIiwicHVzaCIsInNldEl0ZW1JbkxvY2FsU3RvcmFnZSIsInJlbW92YWJsZVVzZXIiLCJyZW1vdmFibGVVc2VyRGJPYmoiLCJ1cGRhdGVkTGlzdE9mVXNlcnMiLCJmaWx0ZXIiLCJjdXJyZW50VXNlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVB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ZUFBSSxDQUFDekIsMERBQVMsQ0FBQ3lCLFdBQUQsRUFBY0gsa0JBQWQsQ0FBZDtBQUFBLE9BRE0sQ0FBM0I7QUFHQSxXQUFLRixxQkFBTCxDQUEyQkcsa0JBQTNCO0FBQ0QiLCJmaWxlIjoianMvaG9tZS9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2luZnJhL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5vbmNsaWNrID0gdGhpcy5yZW1vdmVVc2VyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlVXNlciA9ICh7IHRhcmdldDogY2xpY2tUYXJnZXRFbGVtZW50IH0pID0+IHtcbiAgICBpZiAoY2xpY2tUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbW92ZScpKSB7XG4gICAgICBjb25zdCB1c2VyVHIgPSBjbGlja1RhcmdldEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgIGNvbnN0IHVzZXJUZHMgPSB1c2VyVHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gQXJyYXkuZnJvbSh1c2VyVGRzKS5yZWR1Y2UoKGFjYywgY3VycmVudFRkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhVHlwZSA9IGN1cnJlbnRUZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICBhY2NbY3VycmVudERhdGFUeXBlXSA9IGN1cnJlbnRUZC50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5yZW1vdmUodXNlckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT4gYFxuICAgICAgPHRhYmxlIGNsYXNzPVwidXNlcnMtdGFibGUgLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLm1hcCh1c2VyID0+IGBcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJub21lXCI+JHt1c2VyLmdldEZ1bGxOYW1lKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiY3BmXCI+JHt1c2VyLmdldENQRkZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiZW1haWxcIj4ke3VzZXIuZ2V0RW1haWwoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJ0ZWxlZm9uZVwiPiR7dXNlci5nZXRQaG9uZUZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0bi1yZW1vdmUgYnRuLWdlbmVyaWMgLXJlZCAtc21hbGxcIj5SZW1vdmVyPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGApLmpvaW4oJycpXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLmxlbmd0aCA9PT0gMCA/ICc8dHI+PHRkIGNvbHNwYW49XCI0XCIgYWxpZ249XCJjZW50ZXJcIj5OZW5odW0gdXN1w6FyaW8gZW5jb250cmFkbyA6KDwvdGQ+PC90cj4nIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIGBcbn1cbiIsImltcG9ydCBVc2Vyc1NlcnZpY2UgZnJvbSAnLi4vLi4vZG9tYWluL3NlcnZpY2VzL1VzZXJzU2VydmljZSc7XG5pbXBvcnQgVXNlcnNSZXBvc2l0b3J5IGZyb20gJy4uLy4uL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnknO1xuaW1wb3J0IFVzZXJzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vyc1RhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBzdGF0aWMgYWRkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkZm9ybSA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICgkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpIHJldHVybjtcblxuICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkaW5nJykpO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlLFxuICAgIH07XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmFkZE5ldyhmb3JtRWxlbWVudHNEVE8pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkZWQnKSk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0FsbCgpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmdldEFsbFdpdGhJbml0aWFsRGF0YSgpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKHVzZXIpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBjb25zdCByZW1vdmFibGVVc2VyRFRPID0ge1xuICAgICAgZnVsbE5hbWU6IHVzZXIubm9tZSxcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBwaG9uZTogdXNlci50ZWxlZm9uZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH07XG5cbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KTtcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTylcbiAgICAgIC50aGVuKHVzZXJzU2VydmljZS5nZXRBbGwpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJztcblxud2luZG93LnBhZ2VIb21lID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IEVYVEVSTkFMX1NFUlZJQ0VfVVJMIH0gZnJvbSAnLi9jb25maWdzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoeyB1c2Vyc1JlcG9zaXRvcnkgfSkge1xuICAgIHRoaXMudXNlcnNSZXBvc2l0b3J5ID0gdXNlcnNSZXBvc2l0b3J5O1xuICB9XG5cbiAgYWRkTmV3ID0gKGZvcm1FbGVtZW50c0RUTykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh0aGlzLnVzZXJzUmVwb3NpdG9yeS5pbnNlcnQodXNlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZEb21haW5Vc2VycyA9IHRoaXMudXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLm1hcCh1c2VyID0+IG5ldyBVc2VyKHtcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShsaXN0T2ZEb21haW5Vc2Vycyk7XG4gIH0pO1xuXG4gIGRlbGV0ZVVzZXIgPSAocmVtb3ZhYmxlVXNlckRUTykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihyZW1vdmFibGVVc2VyRFRPKTtcbiAgICB0aGlzLnVzZXJzUmVwb3NpdG9yeS5yZW1vdmUodXNlcik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHsgbWVzc2FnZTogJ3JlbW92ZWQgd2l0aCBzdWNjZXNzJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluc2VydEV4dGVybmFsVXNlcnMgPSAoKSA9PiBmZXRjaChFWFRFUk5BTF9TRVJWSUNFX1VSTClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KVxuICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHRoaXMudXNlcnNSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgIH0pKSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpO1xuICAgIH0pXG5cbiAgZ2V0QWxsV2l0aEluaXRpYWxEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkgPSB0aGlzLnVzZXJzUmVwb3NpdG9yeS5nZXRBbGwoKS5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBbGwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0RXh0ZXJuYWxVc2VycygpO1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEVYVEVSTkFMX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vcHJpdmF0ZS0yMWU4ZGUtcmFmYWVsbHVjaW8uYXBpYXJ5LW1vY2suY29tL3VzZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBFWFRFUk5BTF9TRVJWSUNFX1VSTCxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDUEYge1xuICBjb25zdHJ1Y3Rvcih7IENQRk51bWJlcnMgfSkge1xuICAgIHRoaXMuQ1BGTnVtYmVycyA9IENQRk51bWJlcnMucmVwbGFjZSgvLS9nLCAnJykucmVwbGFjZSgvXFwuL2csICcnKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpID0+IHRoaXMuQ1BGTnVtYmVyc1xuXG4gIGdldFZhbHVlRm9ybWF0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgQ1BGUmVnZXggPSAvKFxcZHszfSkoXFxkezN9KShcXGR7M30pKFxcZHsyfSkvO1xuICAgIHJldHVybiB0aGlzLkNQRk51bWJlcnMucmVwbGFjZShDUEZSZWdleCwgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4gYCR7cGFydE9uZX0uJHtwYXJ0VHdvfS4ke3BhcnRUaHJlZX0tJHtkaWdpdH1gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXIucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldE51bWJlciA9ICgpID0+IHRoaXMubnVtYmVyO1xuXG4gIGdldE51bWJlckZvcm1hdGVkID0gKCkgPT4gdGhpcy5udW1iZXIucmVwbGFjZSgvKFxcZHsyfSk/KFxcZHs0fSkoXFxkezR9KS8sIChmdWxsTWF0Y2gsIGRkZCwgbnVtYmVyUGFydE9uZSwgbnVtYmVyUGFydFR3bykgPT4ge1xuICAgIGlmIChkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG5cbiAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzZXRTdGF0ZSA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBkZWVwRXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHJldHVybiBhS2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkgfHwgYWNjID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVlcEVxdWFsO1xuIiwiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICcuLi9kZWVwRXF1YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2V0QWxsID0gdGhpcy5nZXRBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluc2VydCA9IHRoaXMuaW5zZXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cblxuICBzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UgPSBpdGVtID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGluc2VydCh1c2VyKSB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGxldCBjcmVhdGVkVXNlcjtcblxuICAgIGlmICh1c2VyLmdldEZ1bGxOYW1lKSB7XG4gICAgICBjcmVhdGVkVXNlciA9IHtcbiAgICAgICAgbmFtZTogdXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgICBjcGY6IHVzZXIuZ2V0Q1BGKCksXG4gICAgICAgIHBob25lOiB1c2VyLmdldFBob25lKCksXG4gICAgICAgIGVtYWlsOiB1c2VyLmdldEVtYWlsKCksXG4gICAgICB9O1xuICAgICAgbGlzdE9mVXNlcnMucHVzaChjcmVhdGVkVXNlcik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UobGlzdE9mVXNlcnMpO1xuICAgIHJldHVybiBjcmVhdGVkVXNlcjtcbiAgfVxuXG4gIHJlbW92ZShyZW1vdmFibGVVc2VyKSB7XG4gICAgY29uc3QgcmVtb3ZhYmxlVXNlckRiT2JqID0ge1xuICAgICAgbmFtZTogcmVtb3ZhYmxlVXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgY3BmOiByZW1vdmFibGVVc2VyLmdldENQRigpLFxuICAgICAgcGhvbmU6IHJlbW92YWJsZVVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgIGVtYWlsOiByZW1vdmFibGVVc2VyLmdldEVtYWlsKCksXG4gICAgfTtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgY29uc3QgdXBkYXRlZExpc3RPZlVzZXJzID0gbGlzdE9mVXNlcnNcbiAgICAgIC5maWx0ZXIoY3VycmVudFVzZXIgPT4gIWRlZXBFcXVhbChjdXJyZW50VXNlciwgcmVtb3ZhYmxlVXNlckRiT2JqKSk7XG5cbiAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZSh1cGRhdGVkTGlzdE9mVXNlcnMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9