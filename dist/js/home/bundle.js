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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _infra_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../infra/Component */ "./src/infra/Component.js");
/* harmony import */ var _UsersTable_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UsersTable.scss */ "./src/app/components/UsersTable/UsersTable.scss");
/* harmony import */ var _UsersTable_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_UsersTable_scss__WEBPACK_IMPORTED_MODULE_8__);










var UsersTable =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UsersTable, _Component);

  function UsersTable(element, controller) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UsersTable);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UsersTable).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      users: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "removeUser", function (_ref) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "template", function () {
      return "\n      <table>\n        <thead>\n          <tr>\n            <td>Nome</td>\n            <td>CPF</td>\n            <td>Email</td>\n            <td>Telefone</td>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(_this.state.users.map(function (user) {
        return "\n              <tr>\n                <td data-type=\"nome\">".concat(user.getFullName(), "</td>\n                <td data-type=\"cpf\">").concat(user.getCPFFormated(), "</td>\n                <td data-type=\"email\">").concat(user.getEmail(), "</td>\n                <td data-type=\"telefone\">").concat(user.getPhoneFormated(), "</td>\n                <td><button class=\"btn-remove\">Remover</button></td>\n              </tr>\n            ");
      }).join(''), "\n          ").concat(_this.state.users.length === 0 ? '<tr><td colspan="4" align="center">Nenhum usuário encontrado :(</td></tr>' : '', "\n        </tbody>\n      </table>\n    ");
    });

    _this.controller = controller;
    _this.baseElement = element;

    _this.setupEvents();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UsersTable, [{
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
}(_infra_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/services/UsersService */ "./src/domain/services/UsersService.js");
/* harmony import */ var _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../infra/repositories/UsersRepository */ "./src/infra/repositories/UsersRepository.js");
/* harmony import */ var _components_UsersTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UsersTable */ "./src/app/components/UsersTable/index.js");






var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UserController, null, [{
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
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_3__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_4__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_3__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_4__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      var removableUserDTO = {
        fullName: user.nome,
        cpf: user.cpf,
        phone: user.telefone,
        email: user.email
      };
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_3__["default"]();
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../valueObjects/Phone */ "./src/domain/valueObjects/Phone.js");
/* harmony import */ var _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../valueObjects/CPF */ "./src/domain/valueObjects/CPF.js");





var User = function User(_ref) {
  var _this = this;

  var fullName = _ref.fullName,
      cpf = _ref.cpf,
      phone = _ref.phone,
      email = _ref.email;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getFullName", function () {
    return _this.fullName;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getEmail", function () {
    return _this.email;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getCPF", function () {
    return _this.cpf.getValue();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getCPFFormated", function () {
    return _this.cpf.getValueFormated();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getPhone", function () {
    return _this.phone.getNumber();
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getPhoneFormated", function () {
    return _this.phone.getNumberFormated();
  });

  this.fullName = fullName;
  this.cpf = new _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_3__["default"]({
    CPFNumbers: cpf
  });
  this.phone = new _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/User */ "./src/domain/entities/User.js");




var UsersService = function UsersService(_ref) {
  var _this = this;

  var usersRepository = _ref.usersRepository;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UsersService);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "addNew", function (formElementsDTO) {
    var user = new _entities_User__WEBPACK_IMPORTED_MODULE_2__["default"](formElementsDTO);
    return new Promise(function (resolve) {
      resolve(_this.usersRepository.insert(user));
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getAll", function () {
    return new Promise(function (resolve) {
      var listOfDomainUsers = _this.usersRepository.getAll().map(function (user) {
        return new _entities_User__WEBPACK_IMPORTED_MODULE_2__["default"]({
          cpf: user.cpf,
          email: user.email,
          fullName: user.name,
          phone: user.phone
        });
      });

      resolve(listOfDomainUsers);
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "deleteUser", function (removableUserDTO) {
    var user = new _entities_User__WEBPACK_IMPORTED_MODULE_2__["default"](removableUserDTO);

    _this.usersRepository.remove(user);

    return new Promise(function (resolve) {
      resolve({
        message: 'removed with success'
      });
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getExternalUsers", function () {
    return fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users').then(function (response) {
      if (response.ok) return response.json();
      return response;
    }).then(function (users) {
      var addUsersPromises = users.map(function (user) {
        return _this.usersRepository.insert(new _entities_User__WEBPACK_IMPORTED_MODULE_2__["default"]({
          cpf: user.cpf,
          email: user.email,
          fullName: user.name,
          phone: user.phone
        }));
      });
      return Promise.all(addUsersPromises);
    }).then(function () {
      return _this.getAll();
    });
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getAllWithInitialData", function () {
    var hasUsersFromRepository = _this.usersRepository.getAll().length > 0;

    if (hasUsersFromRepository) {
      return _this.getAll();
    }

    return _this.getExternalUsers();
  });

  this.usersRepository = usersRepository;
};



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



var CPF = function CPF(_ref) {
  var _this = this;

  var CPFNumbers = _ref.CPFNumbers;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CPF);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getValue", function () {
    return _this.CPFNumbers;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getValueFormated", function () {
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



var Phone = function Phone(_ref) {
  var _this = this;

  var number = _ref.number;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Phone);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getNumber", function () {
    return _this.number;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getNumberFormated", function () {
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
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




var Component = function Component() {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Component);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "setState", function (newState) {
    requestAnimationFrame(function () {
      _this.state = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state, newState);

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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


var deepEqual = function deepEqual(a, b) {
  if (a && b && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a) === 'object' && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(b) === 'object') {
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deepEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deepEqual */ "./src/infra/deepEqual.js");





var UsersRepository =
/*#__PURE__*/
function () {
  function UsersRepository() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UsersRepository);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "key", 'users');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "getItemFromLocalStorage", function () {
      return JSON.parse(localStorage.getItem(_this.key)) || [];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "setItemInLocalStorage", function (item) {
      return localStorage.setItem(_this.key, JSON.stringify(item));
    });

    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UsersRepository, [{
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
        return !Object(_deepEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(currentUser, removableUserDbObj);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlcnNUYWJsZS9Vc2Vyc1RhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvQ1BGLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL1Bob25lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJVc2Vyc1RhYmxlIiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ1c2VycyIsImNsaWNrVGFyZ2V0RWxlbWVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidXNlclRyIiwiY2xvc2VzdCIsInVzZXJUZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidXNlckRhdGEiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50VGQiLCJjdXJyZW50RGF0YVR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSIsInN0YXRlIiwibWFwIiwidXNlciIsImdldEZ1bGxOYW1lIiwiZ2V0Q1BGRm9ybWF0ZWQiLCJnZXRFbWFpbCIsImdldFBob25lRm9ybWF0ZWQiLCJqb2luIiwibGVuZ3RoIiwiYmFzZUVsZW1lbnQiLCJzZXR1cEV2ZW50cyIsIm9uY2xpY2siLCJyZW1vdmVVc2VyIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJDb21wb25lbnQiLCJVc2VyQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZm9ybSIsInZhbGlkYXRvciIsImlzSW52YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImZvcm1FbGVtZW50c0RUTyIsImZ1bGxOYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiY3BmIiwicGhvbmUiLCJlbWFpbCIsInVzZXJzUmVwb3NpdG9yeSIsIlVzZXJzUmVwb3NpdG9yeSIsInVzZXJzU2VydmljZSIsIlVzZXJzU2VydmljZSIsImFkZE5ldyIsInRoZW4iLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXNlcnNUYWJsZSIsImRvY3VtZW50IiwiZ2V0QWxsV2l0aEluaXRpYWxEYXRhIiwic2V0U3RhdGUiLCJyZW1vdmFibGVVc2VyRFRPIiwibm9tZSIsInRlbGVmb25lIiwiZGVsZXRlVXNlciIsImdldEFsbCIsInBhZ2VIb21lIiwidXNlckNvbnRyb2xsZXIiLCJVc2VyIiwiZ2V0VmFsdWUiLCJnZXRWYWx1ZUZvcm1hdGVkIiwiZ2V0TnVtYmVyIiwiZ2V0TnVtYmVyRm9ybWF0ZWQiLCJDUEYiLCJDUEZOdW1iZXJzIiwiUGhvbmUiLCJudW1iZXIiLCJ0b0xvd2VyQ2FzZSIsIk9iamVjdCIsImZyZWV6ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW5zZXJ0IiwibGlzdE9mRG9tYWluVXNlcnMiLCJuYW1lIiwibWVzc2FnZSIsImZldGNoIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJhZGRVc2Vyc1Byb21pc2VzIiwiYWxsIiwiaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSIsImdldEV4dGVybmFsVXNlcnMiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJuZXdTdGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsImRlZXBFcXVhbCIsImEiLCJiIiwia2V5cyIsImFLZXlzIiwia2V5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYmluZCIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJjcmVhdGVkVXNlciIsImdldENQRiIsImdldFBob25lIiwicHVzaCIsInNldEl0ZW1JbkxvY2FsU3RvcmFnZSIsInJlbW92YWJsZVVzZXIiLCJyZW1vdmFibGVVc2VyRGJPYmoiLCJ1cGRhdGVkTGlzdE9mVXNlcnMiLCJmaWx0ZXIiLCJjdXJyZW50VXNlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFD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ZmlsZSI6ImpzL2hvbWUvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2luZnJhL0NvbXBvbmVudCc7XG5pbXBvcnQgJy4vVXNlcnNUYWJsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHVzZXJzOiBbXSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRyb2xsZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5iYXNlRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG4gIH1cblxuICBzZXR1cEV2ZW50cygpIHtcbiAgICB0aGlzLmJhc2VFbGVtZW50Lm9uY2xpY2sgPSB0aGlzLnJlbW92ZVVzZXI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5iYXNlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG4gIH1cblxuICByZW1vdmVVc2VyID0gKHsgdGFyZ2V0OiBjbGlja1RhcmdldEVsZW1lbnQgfSkgPT4ge1xuICAgIGlmIChjbGlja1RhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tcmVtb3ZlJykpIHtcbiAgICAgIGNvbnN0IHVzZXJUciA9IGNsaWNrVGFyZ2V0RWxlbWVudC5jbG9zZXN0KCd0cicpO1xuICAgICAgY29uc3QgdXNlclRkcyA9IHVzZXJUci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBBcnJheS5mcm9tKHVzZXJUZHMpLnJlZHVjZSgoYWNjLCBjdXJyZW50VGQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGFUeXBlID0gY3VycmVudFRkLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIGFjY1tjdXJyZW50RGF0YVR5cGVdID0gY3VycmVudFRkLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgICAgdGhpcy5jb250cm9sbGVyLnJlbW92ZSh1c2VyRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGUgPSAoKSA9PiBgXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+Tm9tZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+Q1BGPC90ZD5cbiAgICAgICAgICAgIDx0ZD5FbWFpbDwvdGQ+XG4gICAgICAgICAgICA8dGQ+VGVsZWZvbmU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2Vycy5tYXAodXNlciA9PiBgXG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwibm9tZVwiPiR7dXNlci5nZXRGdWxsTmFtZSgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cImNwZlwiPiR7dXNlci5nZXRDUEZGb3JtYXRlZCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtdHlwZT1cImVtYWlsXCI+JHt1c2VyLmdldEVtYWlsKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwidGVsZWZvbmVcIj4ke3VzZXIuZ2V0UGhvbmVGb3JtYXRlZCgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCJidG4tcmVtb3ZlXCI+UmVtb3ZlcjwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKS5qb2luKCcnKVxuICAgICAgICAgIH1cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2Vycy5sZW5ndGggPT09IDAgPyAnPHRyPjx0ZCBjb2xzcGFuPVwiNFwiIGFsaWduPVwiY2VudGVyXCI+TmVuaHVtIHVzdcOhcmlvIGVuY29udHJhZG8gOig8L3RkPjwvdHI+JyA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICBgXG59XG4iLCJpbXBvcnQgVXNlcnNTZXJ2aWNlIGZyb20gJy4uLy4uL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UnO1xuaW1wb3J0IFVzZXJzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9pbmZyYS9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5JztcbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgc3RhdGljIGFkZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJGZvcm0gPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKSByZXR1cm47XG5cbiAgICAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGluZycpKTtcblxuICAgIGNvbnN0IGZvcm1FbGVtZW50c0RUTyA9IHtcbiAgICAgIGZ1bGxOYW1lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXROb21lXCJdJykudmFsdWUsXG4gICAgICBjcGY6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dENQRlwiXScpLnZhbHVlLFxuICAgICAgcGhvbmU6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dFRlbGVmb25lXCJdJykudmFsdWUsXG4gICAgICBlbWFpbDogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0RW1haWxcIl0nKS52YWx1ZSxcbiAgICB9O1xuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpXG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KVxuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuYWRkTmV3KGZvcm1FbGVtZW50c0RUTylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNob3dBbGwoKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSwgVXNlckNvbnRyb2xsZXIpO1xuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpXG4gICAgY29uc3QgdXNlcnNTZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSh7IHVzZXJzUmVwb3NpdG9yeSB9KVxuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuZ2V0QWxsV2l0aEluaXRpYWxEYXRhKClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUodXNlcikge1xuICAgIGNvbnN0IHVzZXJzVGFibGUgPSBuZXcgVXNlcnNUYWJsZSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJyksIFVzZXJDb250cm9sbGVyKTtcblxuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogdXNlci5ub21lLFxuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIHBob25lOiB1c2VyLnRlbGVmb25lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKVxuICAgIGNvbnN0IHVzZXJzU2VydmljZSA9IG5ldyBVc2Vyc1NlcnZpY2UoeyB1c2Vyc1JlcG9zaXRvcnkgfSlcblxuICAgIHVzZXJzU2VydmljZVxuICAgICAgLmRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTylcbiAgICAgIC50aGVuKHVzZXJzU2VydmljZS5nZXRBbGwpXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcnMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJztcblxud2luZG93LnBhZ2VIb21lID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgUGhvbmUgZnJvbSAnLi4vdmFsdWVPYmplY3RzL1Bob25lJztcbmltcG9ydCBDUEYgZnJvbSAnLi4vdmFsdWVPYmplY3RzL0NQRic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZnVsbE5hbWUsXG4gICAgY3BmLFxuICAgIHBob25lLFxuICAgIGVtYWlsLFxuICB9KSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgIHRoaXMuY3BmID0gbmV3IENQRih7IENQRk51bWJlcnM6IGNwZiB9KTtcbiAgICB0aGlzLnBob25lID0gbmV3IFBob25lKHsgbnVtYmVyOiBwaG9uZSB9KTtcbiAgICB0aGlzLmVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9lbnRpdGllcy9Vc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHVzZXJzUmVwb3NpdG9yeSB9KSB7XG4gICAgdGhpcy51c2Vyc1JlcG9zaXRvcnkgPSB1c2Vyc1JlcG9zaXRvcnlcbiAgfVxuXG4gIGFkZE5ldyA9IChmb3JtRWxlbWVudHNEVE8pID0+IHtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUodGhpcy51c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KHVzZXIpKVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgbGlzdE9mRG9tYWluVXNlcnMgPSB0aGlzLnVzZXJzUmVwb3NpdG9yeS5nZXRBbGwoKS5tYXAodXNlciA9PiBuZXcgVXNlcih7XG4gICAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgIH0pKTtcbiAgICAgIHJlc29sdmUobGlzdE9mRG9tYWluVXNlcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlVXNlciA9IChyZW1vdmFibGVVc2VyRFRPKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHJlbW92YWJsZVVzZXJEVE8pO1xuICAgIHRoaXMudXNlcnNSZXBvc2l0b3J5LnJlbW92ZSh1c2VyKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUoeyBtZXNzYWdlOiAncmVtb3ZlZCB3aXRoIHN1Y2Nlc3MnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXh0ZXJuYWxVc2VycyA9ICgpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vcHJpdmF0ZS0yMWU4ZGUtcmFmYWVsbHVjaW8uYXBpYXJ5LW1vY2suY29tL3VzZXJzJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVXNlcnNQcm9taXNlcyA9IHVzZXJzLm1hcCh1c2VyID0+IHRoaXMudXNlcnNSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgICAgICB9KSkpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYWRkVXNlcnNQcm9taXNlcyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5nZXRBbGwoKSk7XG4gIH1cblxuICBnZXRBbGxXaXRoSW5pdGlhbERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSA9IHRoaXMudXNlcnNSZXBvc2l0b3J5LmdldEFsbCgpLmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc1VzZXJzRnJvbVJlcG9zaXRvcnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEFsbCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRFeHRlcm5hbFVzZXJzKCk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDUEYge1xuICBjb25zdHJ1Y3Rvcih7IENQRk51bWJlcnMgfSkge1xuICAgIHRoaXMuQ1BGTnVtYmVycyA9IENQRk51bWJlcnMucmVwbGFjZSgvLS9nLCAnJykucmVwbGFjZSgvXFwuL2csICcnKTtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpID0+IHRoaXMuQ1BGTnVtYmVyc1xuXG4gIGdldFZhbHVlRm9ybWF0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgQ1BGUmVnZXggPSAvKFxcZHszfSkoXFxkezN9KShcXGR7M30pKFxcZHsyfSkvO1xuICAgIHJldHVybiB0aGlzLkNQRk51bWJlcnMucmVwbGFjZShDUEZSZWdleCwgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4gYCR7cGFydE9uZX0uJHtwYXJ0VHdvfS4ke3BhcnRUaHJlZX0tJHtkaWdpdH1gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXIucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldE51bWJlciA9ICgpID0+IHRoaXMubnVtYmVyO1xuXG4gIGdldE51bWJlckZvcm1hdGVkID0gKCkgPT4gdGhpcy5udW1iZXIucmVwbGFjZSgvKFxcZHsyfSk/KFxcZHs0fSkoXFxkezR9KS8sIChmdWxsTWF0Y2gsIGRkZCwgbnVtYmVyUGFydE9uZSwgbnVtYmVyUGFydFR3bykgPT4ge1xuICAgIGlmIChkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG5cbiAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzZXRTdGF0ZSA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBkZWVwRXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHJldHVybiBhS2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkgfHwgYWNjID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVlcEVxdWFsO1xuIiwiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICcuLi9kZWVwRXF1YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZXRBbGwgPSB0aGlzLmdldEFsbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbnNlcnQgPSB0aGlzLmluc2VydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuXG4gIHNldEl0ZW1JbkxvY2FsU3RvcmFnZSA9IGl0ZW0gPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuXG4gIGdldEFsbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoKVxuICB9XG5cbiAgaW5zZXJ0ICh1c2VyKSB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGxldCBjcmVhdGVkVXNlcjtcblxuICAgIGlmICh1c2VyLmdldEZ1bGxOYW1lKSB7XG4gICAgICBjcmVhdGVkVXNlciA9IHtcbiAgICAgICAgbmFtZTogdXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgICBjcGY6IHVzZXIuZ2V0Q1BGKCksXG4gICAgICAgIHBob25lOiB1c2VyLmdldFBob25lKCksXG4gICAgICAgIGVtYWlsOiB1c2VyLmdldEVtYWlsKCksXG4gICAgICB9O1xuICAgICAgbGlzdE9mVXNlcnMucHVzaChjcmVhdGVkVXNlcik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UobGlzdE9mVXNlcnMpO1xuICAgIHJldHVybiBjcmVhdGVkVXNlcjtcbiAgfVxuXG4gIHJlbW92ZSAocmVtb3ZhYmxlVXNlcikge1xuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEYk9iaiA9IHtcbiAgICAgIG5hbWU6IHJlbW92YWJsZVVzZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgIGNwZjogcmVtb3ZhYmxlVXNlci5nZXRDUEYoKSxcbiAgICAgIHBob25lOiByZW1vdmFibGVVc2VyLmdldFBob25lKCksXG4gICAgICBlbWFpbDogcmVtb3ZhYmxlVXNlci5nZXRFbWFpbCgpLFxuICAgIH07XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRMaXN0T2ZVc2VycyA9IGxpc3RPZlVzZXJzXG4gICAgICAuZmlsdGVyKGN1cnJlbnRVc2VyID0+ICFkZWVwRXF1YWwoY3VycmVudFVzZXIsIHJlbW92YWJsZVVzZXJEYk9iaikpO1xuXG4gICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UodXBkYXRlZExpc3RPZlVzZXJzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==