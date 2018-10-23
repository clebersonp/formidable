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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ob21lL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9kZWVwRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlcnNUYWJsZSIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXNlcnMiLCJjbGlja1RhcmdldEVsZW1lbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVzZXJUciIsImNsb3Nlc3QiLCJ1c2VyVGRzIiwicXVlcnlTZWxlY3RvckFsbCIsInVzZXJEYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudFRkIiwiY3VycmVudERhdGFUeXBlIiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJzdGF0ZSIsIm1hcCIsInVzZXIiLCJnZXRGdWxsTmFtZSIsImdldENQRkZvcm1hdGVkIiwiZ2V0RW1haWwiLCJnZXRQaG9uZUZvcm1hdGVkIiwiam9pbiIsImxlbmd0aCIsImJhc2VFbGVtZW50Iiwic2V0dXBFdmVudHMiLCJvbmNsaWNrIiwicmVtb3ZlVXNlciIsImlubmVySFRNTCIsInRlbXBsYXRlIiwiQ29tcG9uZW50IiwiVXNlckNvbnRyb2xsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGZvcm0iLCJ2YWxpZGF0b3IiLCJpc0ludmFsaWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmb3JtRWxlbWVudHNEVE8iLCJmdWxsTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZW1haWwiLCJVc2Vyc1NlcnZpY2UiLCJhZGROZXciLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXNlcnNUYWJsZSIsImRvY3VtZW50IiwiZ2V0QWxsV2l0aEluaXRpYWxEYXRhIiwic2V0U3RhdGUiLCJyZW1vdmFibGVVc2VyRFRPIiwibm9tZSIsInRlbGVmb25lIiwiZGVsZXRlVXNlciIsImdldEFsbCIsInBhZ2VIb21lIiwidXNlckNvbnRyb2xsZXIiLCJVc2VyIiwiZ2V0VmFsdWUiLCJnZXRWYWx1ZUZvcm1hdGVkIiwiZ2V0TnVtYmVyIiwiZ2V0TnVtYmVyRm9ybWF0ZWQiLCJDUEYiLCJDUEZOdW1iZXJzIiwiUGhvbmUiLCJudW1iZXIiLCJ0b0xvd2VyQ2FzZSIsIk9iamVjdCIsImZyZWV6ZSIsInVzZXJzUmVwb3NpdG9yeSIsIlVzZXJzUmVwb3NpdG9yeSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImluc2VydCIsImxpc3RPZkRvbWFpblVzZXJzIiwibmFtZSIsImhhc1VzZXJzRnJvbVJlcG9zaXRvcnkiLCJnZXRFeHRlcm5hbFVzZXJzIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImFkZFVzZXJzUHJvbWlzZXMiLCJhbGwiLCJtZXNzYWdlIiwiQ1BGUmVnZXgiLCJyZXBsYWNlIiwiZnVsbE1hdGNoIiwicGFydE9uZSIsInBhcnRUd28iLCJwYXJ0VGhyZWUiLCJkaWdpdCIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJkZWVwRXF1YWwiLCJhIiwiYiIsImtleXMiLCJhS2V5cyIsImtleSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJwdXNoIiwiZ2V0Q1BGIiwiZ2V0UGhvbmUiLCJyZWplY3QiLCJzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UiLCJlcnIiLCJyZW1vdmFibGVVc2VyIiwicmVtb3ZhYmxlVXNlckRiT2JqIiwidXBkYXRlZExpc3RPZlVzZXJzIiwiZmlsdGVyIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9pbmZyYS9Db21wb25lbnQnO1xuaW1wb3J0ICcuL1VzZXJzVGFibGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5vbmNsaWNrID0gdGhpcy5yZW1vdmVVc2VyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVtb3ZlVXNlciA9ICh7IHRhcmdldDogY2xpY2tUYXJnZXRFbGVtZW50IH0pID0+IHtcbiAgICBpZiAoY2xpY2tUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbW92ZScpKSB7XG4gICAgICBjb25zdCB1c2VyVHIgPSBjbGlja1RhcmdldEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgIGNvbnN0IHVzZXJUZHMgPSB1c2VyVHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gQXJyYXkuZnJvbSh1c2VyVGRzKS5yZWR1Y2UoKGFjYywgY3VycmVudFRkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhVHlwZSA9IGN1cnJlbnRUZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICBhY2NbY3VycmVudERhdGFUeXBlXSA9IGN1cnJlbnRUZC50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5yZW1vdmUodXNlckRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT4gYFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vbWU8L3RkPlxuICAgICAgICAgICAgPHRkPkNQRjwvdGQ+XG4gICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxuICAgICAgICAgICAgPHRkPlRlbGVmb25lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubWFwKHVzZXIgPT4gYFxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cIm5vbWVcIj4ke3VzZXIuZ2V0RnVsbE5hbWUoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJjcGZcIj4ke3VzZXIuZ2V0Q1BGRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJlbWFpbFwiPiR7dXNlci5nZXRFbWFpbCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cInRlbGVmb25lXCI+JHt1c2VyLmdldFBob25lRm9ybWF0ZWQoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiYnRuLXJlbW92ZVwiPlJlbW92ZXI8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYCkuam9pbignJylcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGVuZ3RoID09PSAwID8gJzx0cj48dGQgY29sc3Bhbj1cIjRcIiBhbGlnbj1cImNlbnRlclwiPk5lbmh1bSB1c3XDoXJpbyBlbmNvbnRyYWRvIDooPC90ZD48L3RyPicgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgc3RhdGljIGFkZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXQ7XG5cblxuICAgIGlmICgkZm9ybS52YWxpZGF0b3IuaXNJbnZhbGlkKCkpIHJldHVybjtcblxuICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkaW5nJykpO1xuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzRFRPID0ge1xuICAgICAgZnVsbE5hbWU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dE5vbWVcIl0nKS52YWx1ZSxcbiAgICAgIGNwZjogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Q1BGXCJdJykudmFsdWUsXG4gICAgICBwaG9uZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0VGVsZWZvbmVcIl0nKS52YWx1ZSxcbiAgICAgIGVtYWlsOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRFbWFpbFwiXScpLnZhbHVlLFxuICAgIH07XG5cbiAgICBVc2Vyc1NlcnZpY2VcbiAgICAgIC5hZGROZXcoZm9ybUVsZW1lbnRzRFRPKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGVkJykpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSwgVXNlckNvbnRyb2xsZXIpO1xuXG4gICAgVXNlcnNTZXJ2aWNlXG4gICAgICAuZ2V0QWxsV2l0aEluaXRpYWxEYXRhKClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUodXNlcikge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogdXNlci5ub21lLFxuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIHBob25lOiB1c2VyLnRlbGVmb25lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfTtcblxuICAgIFVzZXJzU2VydmljZVxuICAgICAgLmRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTylcbiAgICAgIC50aGVuKFVzZXJzU2VydmljZS5nZXRBbGwpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJztcblxud2luZG93LnBhZ2VIb21lID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCIvKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFtcImVycm9yXCIsIHsgXCJmdW5jdGlvbnNcIjogZmFsc2UgfV0gKi9cbmltcG9ydCBVc2VyIGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IFVzZXJzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9pbmZyYS9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5JztcblxuY29uc3QgYWRkTmV3ID0gKGZvcm1FbGVtZW50c0RUTykgPT4ge1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKTtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodXNlcnNSZXBvc2l0b3J5Lmluc2VydCh1c2VyKSksIDEwMDApO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldEFsbCA9ICgpID0+IHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RPZkRvbWFpblVzZXJzID0gdXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLm1hcCh1c2VyID0+IG5ldyBVc2VyKHtcbiAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUsXG4gICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShsaXN0T2ZEb21haW5Vc2Vycyk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWxsV2l0aEluaXRpYWxEYXRhID0gKCkgPT4ge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkgPSB1c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubGVuZ3RoID4gMDtcblxuICBpZiAoaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSkge1xuICAgIHJldHVybiBnZXRBbGwoKTtcbiAgfVxuICByZXR1cm4gZ2V0RXh0ZXJuYWxVc2VycygpO1xufTtcblxuZnVuY3Rpb24gZ2V0RXh0ZXJuYWxVc2VycygpIHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vcHJpdmF0ZS0yMWU4ZGUtcmFmYWVsbHVjaW8uYXBpYXJ5LW1vY2suY29tL3VzZXJzJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KVxuICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgY29uc3QgYWRkVXNlcnNQcm9taXNlcyA9IHVzZXJzLm1hcCh1c2VyID0+IHVzZXJzUmVwb3NpdG9yeS5pbnNlcnQobmV3IFVzZXIoe1xuICAgICAgICBjcGY6IHVzZXIuY3BmLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgcGhvbmU6IHVzZXIucGhvbmUsXG4gICAgICB9KSkpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFkZFVzZXJzUHJvbWlzZXMpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gZ2V0QWxsKCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVVc2VyKHJlbW92YWJsZVVzZXJEVE8pIHtcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICBjb25zdCB1c2VyID0gbmV3IFVzZXIocmVtb3ZhYmxlVXNlckRUTyk7XG4gIHVzZXJzUmVwb3NpdG9yeS5yZW1vdmUodXNlcik7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmUoeyBtZXNzYWdlOiAncmVtb3ZlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGROZXcsXG4gIGdldEFsbCxcbiAgZGVsZXRlVXNlcixcbiAgZ2V0QWxsV2l0aEluaXRpYWxEYXRhLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENQRiB7XG4gIGNvbnN0cnVjdG9yKHsgQ1BGTnVtYmVycyB9KSB7XG4gICAgdGhpcy5DUEZOdW1iZXJzID0gQ1BGTnVtYmVycy5yZXBsYWNlKC8tL2csICcnKS5yZXBsYWNlKC9cXC4vZywgJycpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgcmV0dXJuIHRoaXMuQ1BGTnVtYmVycy5yZXBsYWNlKENQRlJlZ2V4LCAoZnVsbE1hdGNoLCBwYXJ0T25lLCBwYXJ0VHdvLCBwYXJ0VGhyZWUsIGRpZ2l0KSA9PiBgJHtwYXJ0T25lfS4ke3BhcnRUd299LiR7cGFydFRocmVlfS0ke2RpZ2l0fWApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZSB7XG4gIGNvbnN0cnVjdG9yKHsgbnVtYmVyIH0pIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlci5yZXBsYWNlKC8tL2csICcnKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyID0gKCkgPT4gdGhpcy5udW1iZXI7XG5cbiAgZ2V0TnVtYmVyRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLm51bWJlci5yZXBsYWNlKC8oXFxkezJ9KT8oXFxkezR9KShcXGR7NH0pLywgKGZ1bGxNYXRjaCwgZGRkLCBudW1iZXJQYXJ0T25lLCBudW1iZXJQYXJ0VHdvKSA9PiB7XG4gICAgaWYgKGRkZCkgcmV0dXJuIGAke2RkZH0tJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcblxuICAgIHJldHVybiBgJHtudW1iZXJQYXJ0T25lfS0ke251bWJlclBhcnRUd299YDtcbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IGRlZXBFcXVhbCA9IChhLCBiKSA9PiB7XG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgcmV0dXJuIGFLZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldKSB8fCBhY2MgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBFcXVhbFxuIiwiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICcuLi9kZWVwRXF1YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cblxuICBzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UgPSBpdGVtID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcblxuICBnZXRBbGwgPSAoKSA9PiB0aGlzLmdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKClcblxuICBpbnNlcnQgPSAodXNlcikgPT4ge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBpZiAodXNlci5nZXRGdWxsTmFtZSkge1xuICAgICAgbGlzdE9mVXNlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6IHVzZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgICAgY3BmOiB1c2VyLmdldENQRigpLFxuICAgICAgICBwaG9uZTogdXNlci5nZXRQaG9uZSgpLFxuICAgICAgICBlbWFpbDogdXNlci5nZXRFbWFpbCgpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKGxpc3RPZlVzZXJzKTtcbiAgICAgICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdVc2VyIHJlZ2lzdGVyZWQgd2l0aCBzdWNjZXNzJyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZSA9IChyZW1vdmFibGVVc2VyKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZhYmxlVXNlckRiT2JqID0ge1xuICAgICAgbmFtZTogcmVtb3ZhYmxlVXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgY3BmOiByZW1vdmFibGVVc2VyLmdldENQRigpLFxuICAgICAgcGhvbmU6IHJlbW92YWJsZVVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgIGVtYWlsOiByZW1vdmFibGVVc2VyLmdldEVtYWlsKCksXG4gICAgfTtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgY29uc3QgdXBkYXRlZExpc3RPZlVzZXJzID0gbGlzdE9mVXNlcnNcbiAgICAgIC5maWx0ZXIoY3VycmVudFVzZXIgPT4gIWRlZXBFcXVhbChjdXJyZW50VXNlciwgcmVtb3ZhYmxlVXNlckRiT2JqKSk7XG5cbiAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZSh1cGRhdGVkTGlzdE9mVXNlcnMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9