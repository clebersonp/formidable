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

/***/ "./src/app/controllers/UserControler.js":
/*!**********************************************!*\
  !*** ./src/app/controllers/UserControler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserController; });
/* harmony import */ var _domain_entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/entities/User */ "./src/domain/entities/User.js");
/* harmony import */ var _domain_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/repositories/UsersRepository */ "./src/domain/repositories/UsersRepository.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // import { UsersTable } from '../components/UsersTable'

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
      var formElementsDTO = {
        fullName: $form.querySelector('[data-element="inputNome"]').value,
        cpf: $form.querySelector('[data-element="inputCPF"]').value,
        phone: $form.querySelector('[data-element="inputTelefone"]').value,
        email: $form.querySelector('[data-element="inputEmail"]').value
      };
      $form.dispatchEvent(new Event('btnsubmitloading'));
      setTimeout(function () {
        return $form.dispatchEvent(new Event('btnsubmitloaded'));
      }, 2000);
      var user = new _domain_entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](formElementsDTO);
      var usersRepository = new _domain_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
      usersRepository.add(user);
    } // showAll(event) {
    //   // const usersTable = new UsersTable(document.querySelector('[data-template="UsersTable"]'))
    //   // const users = new UsersRepository().getAll()
    //   // usersTable.setState({
    //   //   users
    //   // })
    // }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  element: $formElement,
  formValidator: new _infra_FormValidator__WEBPACK_IMPORTED_MODULE_0__["default"]($formElement, _validations_newUserValidationSchema__WEBPACK_IMPORTED_MODULE_1__["default"]),
  init: function init() {
    $formElement.addEventListener('btnsubmitloading', startBtnSubmitLoading);
    $formElement.addEventListener('btnsubmitloaded', stopBtnSubmitLoading);
  }
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


_elements_formAddUsuario__WEBPACK_IMPORTED_MODULE_1__["default"].init();
window.pageCadastro = {
  userController: new _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["default"]()
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
  this.email = email;
  Object.freeze(this);
};



/***/ }),

/***/ "./src/domain/repositories/UsersRepository.js":
/*!****************************************************!*\
  !*** ./src/domain/repositories/UsersRepository.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersRepository; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { User } from "../entities/User";
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

  _defineProperty(this, "getAll", function () {// return this.getItemFromLocalStorage().map((user) => {
    //   return new User({
    //     fullName: user._fullName,
    //     cpf: user._cpf,
    //     phone: user._phone,
    //     email: user._email
    //   })
    // })
  });

  _defineProperty(this, "add", function (user) {
    var listOfUsers = _this.getAll();

    listOfUsers.push(user);

    _this.setItemInLocalStorage(listOfUsers);
  });
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

    _this.CPFNumbers.replace(CPFRegex, function (fullMatch, partOne, partTwo, partThree, digit) {
      return "".concat(partOne, ".").concat(partTwo, ".").concat(partThree, "-").concat(digit);
    });
  });

  this.CPFNumbers = CPFNumbers;
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

  this.number = number;
  Object.freeze(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9yZXBvc2l0b3JpZXMvVXNlcnNSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRmx1ZW50VmFsaWRhdG9yL1ZhbGlkYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvRm9ybUZpZWxkVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9Gb3JtVmFsaWRhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXJDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRmb3JtIiwidGFyZ2V0IiwidmFsaWRhdG9yIiwiaXNJbnZhbGlkIiwiZm9ybUVsZW1lbnRzRFRPIiwiZnVsbE5hbWUiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJjcGYiLCJwaG9uZSIsImVtYWlsIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Iiwic2V0VGltZW91dCIsInVzZXIiLCJVc2VyIiwidXNlcnNSZXBvc2l0b3J5IiwiVXNlcnNSZXBvc2l0b3J5IiwiYWRkIiwiJGZvcm1FbGVtZW50Iiwid2luZG93IiwiZG9jdW1lbnQiLCJzdGFydEJ0blN1Ym1pdExvYWRpbmciLCJjbGFzc0xpc3QiLCJzZXRBdHRyaWJ1dGUiLCJzdG9wQnRuU3VibWl0TG9hZGluZyIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlc2V0IiwiZWxlbWVudCIsImZvcm1WYWxpZGF0b3IiLCJGb3JtVmFsaWRhdG9yIiwibmV3VXNlclZhbGlkYXRpb25TY2hlbWEiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1BZGRVc3VhcmlvIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJub21lIiwiY29udHJhY3QiLCJ2YWxpZGF0ZSIsImlzUmVxdWlyZWQiLCJpc0VtYWlsIiwiaXNDUEYiLCJ0ZWxlZm9uZSIsImhhc01pbkxlbmd0aCIsImdldFZhbHVlIiwiZ2V0VmFsdWVGb3JtYXRlZCIsImdldE51bWJlciIsImdldE51bWJlckZvcm1hdGVkIiwiQ1BGIiwiQ1BGTnVtYmVycyIsIlBob25lIiwibnVtYmVyIiwiT2JqZWN0IiwiZnJlZXplIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImtleSIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibGlzdE9mVXNlcnMiLCJnZXRBbGwiLCJwdXNoIiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwiQ1BGUmVnZXgiLCJyZXBsYWNlIiwiZnVsbE1hdGNoIiwicGFydE9uZSIsInBhcnRUd28iLCJwYXJ0VGhyZWUiLCJkaWdpdCIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwiVmFsaWRhdGlvbnMiLCJwYXJhbSIsImNvbmRpdGlvbiIsInZhbGlkYXRpb25OYW1lIiwibWVzc2FnZSIsInNldEVycm9yIiwicmVtb3ZlRXJyb3IiLCJsZW5ndGgiLCJhcHBseVZhbGlkYXRpb24iLCJyZWdleEVtYWlsVmFsaWQiLCJSZWdFeHAiLCJ0ZXN0Iiwic3VtIiwiY3BmVmFsdWUiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJtb2QiLCJtaW5MZW5ndGgiLCJWYWxpZGF0aW9uQ29udHJhY3QiLCJNYXAiLCJjb250cmFjdElzSW52YWxpZCIsImVycm9ycyIsImZvckVhY2giLCJzaXplIiwidHlwZSIsImVycm9yT2JqIiwiZ2V0RXJyb3JzQnlQYXJhbSIsInNldCIsImRlbGV0ZSIsInNldFBhcmFtIiwiZ2V0IiwicGFyYW1FcnJvcnMiLCJGb3JtRmllbGRWYWxpZGF0b3IiLCJmb3JtRmllbGRFbGVtZW50IiwiZm9ybUZpZWxkTmFtZSIsInZhbGlkYXRpb25Db250cmFjdCIsImZpZWxkVmFsaWRhdGlvbiIsInZhbGlkYXRpb24iLCJ1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMiLCJ1cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzIiwidXBkYXRlRXJyb3JzIiwiaW5pdGlhbGl6ZWQiLCJlcnJvcnNPZlRoaXNQYXJhbSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsImZpcnN0RXJyb3IiLCJmb3JtRWxlbWVudEVycm9yRWxlbWVudCIsImlubmVySFRNTCIsImlzVmFsaWRQYXJhbSIsImlzVmFsaWQiLCJzZXR1cEZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsInNldHVwRm9ybUVsZW1lbnQiLCJmb3JtRmllbGROYW1lcyIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJoYXNFcnJvcnMiLCJhcnJheU9mRm9ybUZpZWxkTmFtZXMiLCJrZXlzIiwiZmllbGROYW1lIiwiJGZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRWxlbWVudCIsImZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnRzIiwiY2xlYXIiLCJ2YWxpZGF0ZUZvcm1GaWVsZEVs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akIsQ0FBa0MsT0FBbEMsRUFBMkMsS0FBSSxDQUFDK0csd0JBQWhEOztBQUNBLFNBQUksQ0FBQ0osV0FBTCxDQUFpQjNHLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxLQUFJLENBQUM4RyxLQUFoRDtBQUNELEdBMUN5Qzs7QUFBQSxvREE0Q2YsZ0JBQWtDO0FBQUEsUUFBdkJoQyxnQkFBdUIsUUFBL0IvRyxNQUErQjtBQUMzRCtHLG9CQUFnQixDQUFDOUcsU0FBakIsQ0FBMkJzQyxRQUEzQjtBQUNELEdBOUN5Qzs7QUFBQSx3REFnRFgsWUFBTTtBQUNuQyxTQUFJLENBQUN1RyxpQkFBTCxDQUF1QjFDLE9BQXZCLENBQStCLFVBQUNXLGdCQUFELEVBQXNCO0FBQ25EQSxzQkFBZ0IsQ0FBQ3hFLFFBQWpCO0FBQ0QsS0FGRDtBQUdELEdBcER5Qzs7QUFBQSxpQ0FzRGxDLFlBQU07QUFDWixTQUFJLENBQUMwRSxrQkFBTCxHQUEwQixJQUFJakIsd0RBQUosRUFBMUI7QUFDRCxHQXhEeUM7O0FBQ3hDLE9BQUtpQixrQkFBTCxHQUEwQixJQUFJakIsd0RBQUosRUFBMUI7QUFFQSxPQUFLNEMsV0FBTCxHQUFtQjFILFlBQW5CO0FBQ0EsT0FBS2tILGdCQUFMO0FBRUEsT0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxPQUFLWSx5QkFBTDtBQUNELEMiLCJmaWxlIjoianMvY2FkYXN0cm8vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vZG9tYWluL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IFVzZXJzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9kb21haW4vcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeSc7XG4vLyBpbXBvcnQgeyBVc2Vyc1RhYmxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vyc1RhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHN0YXRpYyBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYoJGZvcm0udmFsaWRhdG9yLmlzSW52YWxpZCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWUsXG4gICAgfVxuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAkZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYnRuc3VibWl0bG9hZGVkJykpLCAyMDAwKTtcblxuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuXG4gICAgY29uc3QgdXNlcnNSZXBvc2l0b3J5ID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpO1xuICAgIHVzZXJzUmVwb3NpdG9yeS5hZGQodXNlcik7XG4gIH1cblxuICAvLyBzaG93QWxsKGV2ZW50KSB7XG4gIC8vICAgLy8gY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpKVxuICAvLyAgIC8vIGNvbnN0IHVzZXJzID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpLmdldEFsbCgpXG4gIC8vICAgLy8gdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gIC8vICAgLy8gICB1c2Vyc1xuICAvLyAgIC8vIH0pXG4gIC8vIH1cbn1cblxuIiwiaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmEvRm9ybVZhbGlkYXRvcic7XG5pbXBvcnQgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgZnJvbSAnLi4vLi4vLi4vdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEnO1xuXG5jb25zdCAkZm9ybUVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm1BZGRVc3VhcmlvXCJdJyk7XG5cbmZ1bmN0aW9uIHN0YXJ0QnRuU3VibWl0TG9hZGluZygpIHtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5jbGFzc0xpc3QuYWRkKCctbG9hZGluZycpO1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xufVxuXG5mdW5jdGlvbiBzdG9wQnRuU3VibWl0TG9hZGluZygpIHtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5jbGFzc0xpc3QucmVtb3ZlKCctbG9hZGluZycpO1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgJGZvcm1FbGVtZW50LnJlc2V0KCk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtZW50OiAkZm9ybUVsZW1lbnQsXG4gIGZvcm1WYWxpZGF0b3I6IG5ldyBGb3JtVmFsaWRhdG9yKCRmb3JtRWxlbWVudCwgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEpLFxuICBpbml0OiAoKSA9PiB7XG4gICAgJGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2J0bnN1Ym1pdGxvYWRpbmcnLCBzdGFydEJ0blN1Ym1pdExvYWRpbmcpO1xuICAgICRmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdidG5zdWJtaXRsb2FkZWQnLCBzdG9wQnRuU3VibWl0TG9hZGluZyk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInO1xuaW1wb3J0IGZvcm1BZGRVc3VhcmlvIGZyb20gJy4vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8nO1xuXG5mb3JtQWRkVXN1YXJpby5pbml0KCk7XG5cbndpbmRvdy5wYWdlQ2FkYXN0cm8gPSB7XG4gIHVzZXJDb250cm9sbGVyOiBuZXcgVXNlckNvbnRyb2xsZXIoKSxcbn07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hID0ge1xuICBub21lOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnbm9tZScsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIG5vbWUgw6kgb2JyaWdhdMOzcmlvJyksXG4gIGVtYWlsOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnZW1haWwnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBlbWFpbCDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5pc0VtYWlsKCdJbmZvcm1lIHVtIGUtbWFpbCB2w6FsaWRvJyksXG4gIGNwZjogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ2NwZicsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIENQRiDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5pc0NQRignUG9yIGZhdm9yLCBpbmZvcm1lIHVtIENQRiB2w6FsaWRvJyksXG4gIHRlbGVmb25lOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgndGVsZWZvbmUnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyB0ZWxlZm9uZSDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5oYXNNaW5MZW5ndGgoMTAsICdJbmZvcm1lIHVtIHRlbGVmb25lIHbDoWxpZG8nKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hO1xuIiwiaW1wb3J0IFBob25lIGZyb20gJy4uL3ZhbHVlT2JqZWN0cy9QaG9uZSc7XG5pbXBvcnQgQ1BGIGZyb20gJy4uL3ZhbHVlT2JqZWN0cy9DUEYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGZ1bGxOYW1lLFxuICAgIGNwZixcbiAgICBwaG9uZSxcbiAgICBlbWFpbCxcbiAgfSkge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcbiAgICB0aGlzLmNwZiA9IG5ldyBDUEYoeyBDUEZOdW1iZXJzOiBjcGYgfSk7XG4gICAgdGhpcy5waG9uZSA9IG5ldyBQaG9uZSh7IG51bWJlcjogcGhvbmUgfSk7XG4gICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lID0gKCkgPT4gdGhpcy5mdWxsTmFtZVxuXG4gIGdldEVtYWlsID0gKCkgPT4gdGhpcy5lbWFpbFxuXG4gIGdldENQRiA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlKClcblxuICBnZXRDUEZGb3JtYXRlZCA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlRm9ybWF0ZWQoKVxuXG4gIGdldFBob25lID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXIoKVxuXG4gIGdldFBob25lRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlckZvcm1hdGVkKClcbn1cbiIsIi8vIGltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vZW50aXRpZXMvVXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1JlcG9zaXRvcnkge1xuICBrZXkgPSAndXNlcnMnXG5cbiAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSkgfHwgW11cblxuICBzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UgPSBpdGVtID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcblxuICBnZXRBbGwgPSAoKSA9PiB7XG4gICAgLy8gcmV0dXJuIHRoaXMuZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoKS5tYXAoKHVzZXIpID0+IHtcbiAgICAvLyAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgLy8gICAgIGZ1bGxOYW1lOiB1c2VyLl9mdWxsTmFtZSxcbiAgICAvLyAgICAgY3BmOiB1c2VyLl9jcGYsXG4gICAgLy8gICAgIHBob25lOiB1c2VyLl9waG9uZSxcbiAgICAvLyAgICAgZW1haWw6IHVzZXIuX2VtYWlsXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH1cblxuICBhZGQgPSAodXNlcikgPT4ge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcbiAgICBsaXN0T2ZVc2Vycy5wdXNoKHVzZXIpO1xuICAgIHRoaXMuc2V0SXRlbUluTG9jYWxTdG9yYWdlKGxpc3RPZlVzZXJzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBDUEZOdW1iZXJzIH0pIHtcbiAgICB0aGlzLkNQRk51bWJlcnMgPSBDUEZOdW1iZXJzO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgdGhpcy5DUEZOdW1iZXJzLnJlcGxhY2UoQ1BGUmVnZXgsIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob25lIHtcbiAgY29uc3RydWN0b3IoeyBudW1iZXIgfSkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXROdW1iZXIgPSAoKSA9PiB0aGlzLm51bWJlcjtcblxuICBnZXROdW1iZXJGb3JtYXRlZCA9ICgpID0+IHRoaXMubnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICBpZiAoZGRkKSByZXR1cm4gYCR7ZGRkfS0ke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuXG4gICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih7IGNvbnRyYWN0LCBwYXJhbSwgdmFsdWUgfSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgYXBwbHlWYWxpZGF0aW9uID0gKGNvbmRpdGlvbiwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbnRyYWN0LnNldEVycm9yKHRoaXMucGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cmFjdC5yZW1vdmVFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaXNSZXF1aXJlZCA9IChtZXNzYWdlID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gMDtcblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzUmVxdWlyZWQnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFbWFpbCA9IChtZXNzYWdlID0gJ0VtYWlsIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgcmVnZXhFbWFpbFZhbGlkID0gbmV3IFJlZ0V4cCgvXlxcdysoWy0rLiddXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKiQvKTtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhcmVnZXhFbWFpbFZhbGlkLnRlc3QodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNFbWFpbCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0NQRiA9IChtZXNzYWdlID0gJ0NQRiBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEoKHZhbHVlKSA9PiB7XG4gICAgICBsZXQgc3VtID0gMDtcbiAgICAgIGNvbnN0IGNwZlZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoY3BmVmFsdWUgPT09ICcwMDAwMDAwMDAwMCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gOTsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTEgLSBpKTtcbiAgICAgIH1cbiAgICAgIGxldCBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDksIDEwKSwgMTApKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHN1bSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTIgLSBpKTtcbiAgICAgIH1cbiAgICAgIG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT09IDEwKSB8fCAobW9kID09PSAxMSkpIG1vZCA9IDA7XG4gICAgICBpZiAobW9kICE9PSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoMTAsIDExKSwgMTApKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KSh0aGlzLnZhbHVlKTtcblxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNDUEYnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzTWluTGVuZ3RoID0gKG1pbkxlbmd0aCwgbWVzc2FnZSA9IGBNaW5pbWFsIGxlbmdodCBpcyAke21pbkxlbmd0aH1gKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy52YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGg7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdoYXNNaW5MZW5ndGgnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbnMgZnJvbSAnLi9WYWxpZGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25Db250cmFjdCB7XG4gIGVycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0UGFyYW0ocGFyYW0pO1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGhhc0Vycm9ycyA9ICgpID0+IHtcbiAgICBsZXQgY29udHJhY3RJc0ludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9ycy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgaWYgKHBhcmFtLnNpemUgPT09IDEpIHtcbiAgICAgICAgY29udHJhY3RJc0ludmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250cmFjdElzSW52YWxpZDtcbiAgfVxuXG4gIHNldFBhcmFtKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLmVycm9ycy5nZXQocGFyYW0pKSB7XG4gICAgICB0aGlzLmVycm9ycy5zZXQocGFyYW0sIG5ldyBNYXAoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IgPSAocGFyYW0sIHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBlcnJvck9iaiA9IHtcbiAgICAgIHBhcmFtLFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLnNldCh0eXBlLCBlcnJvck9iaik7XG4gIH1cblxuICByZW1vdmVFcnJvciA9IChwYXJhbSwgdHlwZSkgPT4ge1xuICAgIGlmICh0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pKSB7XG4gICAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLmRlbGV0ZSh0eXBlKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldEVycm9yc0J5UGFyYW0ocGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgfVxuXG4gIGlzVmFsaWRQYXJhbShwYXJhbSkge1xuICAgIGNvbnN0IHBhcmFtRXJyb3JzID0gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgICBpZiAocGFyYW1FcnJvcnMpIHJldHVybiBwYXJhbUVycm9ycy5zaXplID09PSAwO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGRWYWxpZGF0b3Ige1xuICBpbml0aWFsaXplZCA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgZm9ybUZpZWxkTmFtZSxcbiAgICB2YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgZmllbGRWYWxpZGF0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50ID0gZm9ybUZpZWxkRWxlbWVudDtcbiAgICB0aGlzLmZvcm1GaWVsZE5hbWUgPSBmb3JtRmllbGROYW1lO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gdmFsaWRhdGlvbkNvbnRyYWN0O1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uID0gZmllbGRWYWxpZGF0aW9uO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbigpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcnMoKTtcbiAgfVxuXG4gIHZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24odGhpcy5mb3JtRmllbGRFbGVtZW50LnZhbHVlLCB0aGlzLnZhbGlkYXRpb25Db250cmFjdCk7XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuaXNJbnZhbGlkKCkgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5mb3JtRmllbGRFbGVtZW50O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10eXBlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXR5cGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXJyb3JzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCBlcnJvcnNPZlRoaXNQYXJhbSA9IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmdldEVycm9yc0J5UGFyYW0odGhpcy5mb3JtRmllbGROYW1lKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IEFycmF5LmZyb20oZXJyb3JzT2ZUaGlzUGFyYW0udmFsdWVzKCkpIHx8IFtdO1xuICAgICAgY29uc3QgZmlyc3RFcnJvciA9IGVycm9yc1swXSB8fCB7fTtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Zmlyc3RFcnJvci5tZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpXG5cbiAgaXNJbnZhbGlkID0gKCkgPT4gIXRoaXMuaXNWYWxpZCgpXG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGUsXG4gICAgfTtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQoKTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAnPHNwYW4gY2xhc3M9XCJlcnJvcnNcIj48L3NwYW4+Jyk7XG4gICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudCA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25Db250cmFjdCBmcm9tICcuLi9GbHVlbnRWYWxpZGF0b3InO1xuaW1wb3J0IEZvcm1GaWVsZFZhbGlkYXRvciBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBmb3JtRmllbGRFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCRmb3JtRWxlbWVudCwgZm9ybUZpZWxkTmFtZXMpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG5cbiAgICB0aGlzLmZvcm1GaWVsZE5hbWVzID0gZm9ybUZpZWxkTmFtZXM7XG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gIXRoaXMuaXNJbnZhbGlkKCk7XG5cbiAgaXNJbnZhbGlkID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIHNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXlPZkZvcm1GaWVsZE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5mb3JtRmllbGROYW1lcyk7XG5cbiAgICBhcnJheU9mRm9ybUZpZWxkTmFtZXMuZm9yRWFjaCgoZmllbGROYW1lKSA9PiB7XG4gICAgICBjb25zdCAkZm9ybUZpZWxkRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFZhbGlkYXRvciA9IG5ldyBGb3JtRmllbGRWYWxpZGF0b3Ioe1xuICAgICAgICBmb3JtRmllbGRFbGVtZW50OiAkZm9ybUZpZWxkRWxlbWVudCxcbiAgICAgICAgZm9ybUZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICB2YWxpZGF0aW9uQ29udHJhY3Q6IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgICAgICBmaWVsZFZhbGlkYXRpb246IHRoaXMuZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5wdXNoKGZvcm1GaWVsZFZhbGlkYXRvcik7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgaXNWYWxpZDogdGhpcy5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkOiB0aGlzLmlzSW52YWxpZCxcbiAgICAgIGNsZWFyOiB0aGlzLmNsZWFyLFxuICAgIH07XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==