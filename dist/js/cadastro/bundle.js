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
/* harmony import */ var _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/services/UsersService */ "./src/domain/services/UsersService.js");
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
    } // showAll(event) {
    // import { UsersTable } from '../components/UsersTable'
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
  this.email = email;
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



var addNew = function addNew(formElementsDTO) {
  var user = new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](formElementsDTO);
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return usersRepository.insert(user);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  addNew: addNew
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

/***/ "./src/infra/repositories/UsersRepository.js":
/*!***************************************************!*\
  !*** ./src/infra/repositories/UsersRepository.js ***!
  \***************************************************/
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

  _defineProperty(this, "getAll", function () {
    return _this.getItemFromLocalStorage();
  });

  _defineProperty(this, "insert", function (user) {
    var listOfUsers = _this.getAll();

    listOfUsers.push({
      name: user.getFullName(),
      cpf: user.getCPF(),
      phone: user.getPhone(),
      email: user.getEmail()
    });
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          _this.setItemInLocalStorage(listOfUsers);

          resolve({
            message: 'User registered with success'
          });
        } catch (err) {
          reject(err);
        }
      }, 1000);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvQ1BGLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL1Bob25lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlckNvbnRyb2xsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGZvcm0iLCJ0YXJnZXQiLCJ2YWxpZGF0b3IiLCJpc0ludmFsaWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmb3JtRWxlbWVudHNEVE8iLCJmdWxsTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZW1haWwiLCJVc2Vyc1NlcnZpY2UiLCJhZGROZXciLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJGZvcm1FbGVtZW50IiwiZG9jdW1lbnQiLCJzdGFydEJ0blN1Ym1pdExvYWRpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzdG9wQnRuU3VibWl0TG9hZGluZyIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJmb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJub21lIiwiY29udHJhY3QiLCJ2YWxpZGF0ZSIsImlzUmVxdWlyZWQiLCJpc0VtYWlsIiwiaXNDUEYiLCJ0ZWxlZm9uZSIsImhhc01pbkxlbmd0aCIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsIk9iamVjdCIsImZyZWV6ZSIsInVzZXIiLCJ1c2Vyc1JlcG9zaXRvcnkiLCJVc2Vyc1JlcG9zaXRvcnkiLCJpbnNlcnQiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJWYWxpZGF0aW9ucyIsInBhcmFtIiwiY29uZGl0aW9uIiwidmFsaWRhdGlvbk5hbWUiLCJtZXNzYWdlIiwic2V0RXJyb3IiLCJyZW1vdmVFcnJvciIsImxlbmd0aCIsImFwcGx5VmFsaWRhdGlvbiIsInJlZ2V4RW1haWxWYWxpZCIsIlJlZ0V4cCIsInRlc3QiLCJzdW0iLCJjcGZWYWx1ZSIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsIm1vZCIsIm1pbkxlbmd0aCIsIlZhbGlkYXRpb25Db250cmFjdCIsIk1hcCIsImNvbnRyYWN0SXNJbnZhbGlkIiwiZXJyb3JzIiwiZm9yRWFjaCIsInNpemUiLCJ0eXBlIiwiZXJyb3JPYmoiLCJnZXRFcnJvcnNCeVBhcmFtIiwic2V0IiwiZGVsZXRlIiwic2V0UGFyYW0iLCJnZXQiLCJwYXJhbUVycm9ycyIsIkZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRmllbGROYW1lIiwidmFsaWRhdGlvbkNvbnRyYWN0IiwiZmllbGRWYWxpZGF0aW9uIiwidmFsaWRhdGlvbiIsInVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cyIsInVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMiLCJ1cGRhdGVFcnJvcnMiLCJpbml0aWFsaXplZCIsImVycm9yc09mVGhpc1BhcmFtIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiZmlyc3RFcnJvciIsImZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5uZXJIVE1MIiwiaXNWYWxpZFBhcmFtIiwiaXNWYWxpZCIsInNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwYXJlbnROb2RlIiwiaW5pdCIsInNldHVwRm9ybUVsZW1lbnQiLCJmb3JtRmllbGROYW1lcyIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJoYXNFcnJvcnMiLCJhcnJheU9mRm9ybUZpZWxkTmFtZXMiLCJrZXlzIiwiZmllbGROYW1lIiwiJGZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRWxlbWVudCIsImZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnRzIiwicHVzaCIsImNsZWFyIiwidmFsaWRhdGVGb3JtRmllbGRFbGVtZW50Iiwic2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJrZXkiLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJnZXRBbGwiLCJuYW1lIiwiZ2V0RnVsbE5hbWUiLCJnZXRDUEYiLCJnZXRQaG9uZSIsImdldEVtYWlsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwiZXJyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztJQUVxQkEsYzs7Ozs7Ozs7O3dCQUNSQyxLLEVBQU87QUFDaEJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFwQjtBQUdBLFVBQUlELEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsU0FBaEIsRUFBSixFQUFp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RFM7QUFFZjlJLFNBQUcsRUFBRTZDLElBQUksQ0FBQ2tHLE1BQUwsRUFGVTtBQUdmOUksV0FBSyxFQUFFNEMsSUFBSSxDQUFDbUcsUUFBTCxFQUhRO0FBSWY5SSxXQUFLLEVBQUUyQyxJQUFJLENBQUNvRyxRQUFMO0FBSlEsS0FBakI7QUFPQSxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLGdCQUFVLENBQUMsWUFBTTtBQUNmLFlBQUk7QUFDRixlQUFJLENBQUNDLHFCQUFMLENBQTJCWCxXQUEzQjs7QUFDQVEsaUJBQU8sQ0FBQztBQUFFcEYsbUJBQU8sRUFBRTtBQUFYLFdBQUQsQ0FBUDtBQUNELFNBSEQsQ0FHRSxPQUFPd0YsR0FBUCxFQUFZO0FBQ1pILGdCQUFNLENBQUNHLEdBQUQsQ0FBTjtBQUNEO0FBQ0YsT0FQUyxFQU9QLElBUE8sQ0FBVjtBQVFELEtBVE0sQ0FBUDtBQVVELEciLCJmaWxlIjoianMvY2FkYXN0cm8vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBzdGF0aWMgYWRkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkZm9ybSA9IGV2ZW50LnRhcmdldDtcblxuXG4gICAgaWYgKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSk7XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWUsXG4gICAgfTtcblxuICAgIFVzZXJzU2VydmljZVxuICAgICAgLmFkZE5ldyhmb3JtRWxlbWVudHNEVE8pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkZWQnKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBzaG93QWxsKGV2ZW50KSB7XG4gIC8vIGltcG9ydCB7IFVzZXJzVGFibGUgfSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzVGFibGUnXG4gIC8vICAgLy8gY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpKVxuICAvLyAgIC8vIGNvbnN0IHVzZXJzID0gbmV3IFVzZXJzUmVwb3NpdG9yeSgpLmdldEFsbCgpXG4gIC8vICAgLy8gdXNlcnNUYWJsZS5zZXRTdGF0ZSh7XG4gIC8vICAgLy8gICB1c2Vyc1xuICAvLyAgIC8vIH0pXG4gIC8vIH1cbn1cbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uLy4uLy4uLy4uL2luZnJhL0Zvcm1WYWxpZGF0b3InO1xuaW1wb3J0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRpb25zL25ld1VzZXJWYWxpZGF0aW9uU2NoZW1hJztcblxuY29uc3QgJGZvcm1FbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtQWRkVXN1YXJpb1wiXScpO1xuXG5mdW5jdGlvbiBzdGFydEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LmFkZCgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbn1cblxuZnVuY3Rpb24gc3RvcEJ0blN1Ym1pdExvYWRpbmcoKSB7XG4gICRmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiYnRuU3VibWl0XCJdJykuY2xhc3NMaXN0LnJlbW92ZSgnLWxvYWRpbmcnKTtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICRmb3JtRWxlbWVudC5yZXNldCgpO1xufVxuXG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGluZycsIHN0YXJ0QnRuU3VibWl0TG9hZGluZyk7XG4kZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYnRuc3VibWl0bG9hZGVkJywgc3RvcEJ0blN1Ym1pdExvYWRpbmcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWxlbWVudDogJGZvcm1FbGVtZW50LFxuICBmb3JtVmFsaWRhdG9yOiBuZXcgRm9ybVZhbGlkYXRvcigkZm9ybUVsZW1lbnQsIG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hKSxcbn07XG4iLCJpbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xlcic7XG5pbXBvcnQgJy4vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8nO1xuXG53aW5kb3cucGFnZUNhZGFzdHJvID0ge1xuICB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG59O1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJjb25zdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYSA9IHtcbiAgbm9tZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ25vbWUnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBub21lIMOpIG9icmlnYXTDs3JpbycpLFxuICBlbWFpbDogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ2VtYWlsJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gZW1haWwgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNFbWFpbCgnSW5mb3JtZSB1bSBlLW1haWwgdsOhbGlkbycpLFxuICBjcGY6ICh2YWx1ZSwgY29udHJhY3QpID0+IGNvbnRyYWN0XG4gICAgLnZhbGlkYXRlKCdjcGYnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBDUEYgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaXNDUEYoJ1BvciBmYXZvciwgaW5mb3JtZSB1bSBDUEYgdsOhbGlkbycpLFxuICB0ZWxlZm9uZTogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ3RlbGVmb25lJywgdmFsdWUpXG4gICAgLmlzUmVxdWlyZWQoJ08gY2FtcG8gdGVsZWZvbmUgw6kgb2JyaWdhdMOzcmlvJylcbiAgICAuaGFzTWluTGVuZ3RoKDEwLCAnSW5mb3JtZSB1bSB0ZWxlZm9uZSB2w6FsaWRvJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdVc2VyVmFsaWRhdGlvblNjaGVtYTtcbiIsImltcG9ydCBQaG9uZSBmcm9tICcuLi92YWx1ZU9iamVjdHMvUGhvbmUnO1xuaW1wb3J0IENQRiBmcm9tICcuLi92YWx1ZU9iamVjdHMvQ1BGJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmdWxsTmFtZSxcbiAgICBjcGYsXG4gICAgcGhvbmUsXG4gICAgZW1haWwsXG4gIH0pIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgdGhpcy5jcGYgPSBuZXcgQ1BGKHsgQ1BGTnVtYmVyczogY3BmIH0pO1xuICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmUoeyBudW1iZXI6IHBob25lIH0pO1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXRGdWxsTmFtZSA9ICgpID0+IHRoaXMuZnVsbE5hbWVcblxuICBnZXRFbWFpbCA9ICgpID0+IHRoaXMuZW1haWxcblxuICBnZXRDUEYgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZSgpXG5cbiAgZ2V0Q1BGRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLmNwZi5nZXRWYWx1ZUZvcm1hdGVkKClcblxuICBnZXRQaG9uZSA9ICgpID0+IHRoaXMucGhvbmUuZ2V0TnVtYmVyKClcblxuICBnZXRQaG9uZUZvcm1hdGVkID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXJGb3JtYXRlZCgpXG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCBVc2Vyc1JlcG9zaXRvcnkgZnJvbSAnLi4vLi4vaW5mcmEvcmVwb3NpdG9yaWVzL1VzZXJzUmVwb3NpdG9yeSc7XG5cbmNvbnN0IGFkZE5ldyA9IChmb3JtRWxlbWVudHNEVE8pID0+IHtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKTtcbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgcmV0dXJuIHVzZXJzUmVwb3NpdG9yeS5pbnNlcnQodXNlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkTmV3XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDUEYge1xuICBjb25zdHJ1Y3Rvcih7IENQRk51bWJlcnMgfSkge1xuICAgIHRoaXMuQ1BGTnVtYmVycyA9IENQRk51bWJlcnM7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLkNQRk51bWJlcnNcblxuICBnZXRWYWx1ZUZvcm1hdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IENQRlJlZ2V4ID0gLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLztcbiAgICB0aGlzLkNQRk51bWJlcnMucmVwbGFjZShDUEZSZWdleCwgKGZ1bGxNYXRjaCwgcGFydE9uZSwgcGFydFR3bywgcGFydFRocmVlLCBkaWdpdCkgPT4gYCR7cGFydE9uZX0uJHtwYXJ0VHdvfS4ke3BhcnRUaHJlZX0tJHtkaWdpdH1gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmUge1xuICBjb25zdHJ1Y3Rvcih7IG51bWJlciB9KSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldE51bWJlciA9ICgpID0+IHRoaXMubnVtYmVyO1xuXG4gIGdldE51bWJlckZvcm1hdGVkID0gKCkgPT4gdGhpcy5udW1iZXIucmVwbGFjZSgvKFxcZHsyfSk/KFxcZHs0fSkoXFxkezR9KS8sIChmdWxsTWF0Y2gsIGRkZCwgbnVtYmVyUGFydE9uZSwgbnVtYmVyUGFydFR3bykgPT4ge1xuICAgIGlmIChkZGQpIHJldHVybiBgJHtkZGR9LSR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG5cbiAgICByZXR1cm4gYCR7bnVtYmVyUGFydE9uZX0tJHtudW1iZXJQYXJ0VHdvfWA7XG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHsgY29udHJhY3QsIHBhcmFtLCB2YWx1ZSB9KSB7XG4gICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xuICAgIHRoaXMuY29udHJhY3QgPSBjb250cmFjdDtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBhcHBseVZhbGlkYXRpb24gPSAoY29uZGl0aW9uLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHRoaXMuY29udHJhY3Quc2V0RXJyb3IodGhpcy5wYXJhbSwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyYWN0LnJlbW92ZUVycm9yKHRoaXMucGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBpc1JlcXVpcmVkID0gKG1lc3NhZ2UgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhdGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8PSAwO1xuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNSZXF1aXJlZCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0VtYWlsID0gKG1lc3NhZ2UgPSAnRW1haWwgbXVzdCB0byBiZSB2YWxpZCcpID0+IHtcbiAgICBjb25zdCByZWdleEVtYWlsVmFsaWQgPSBuZXcgUmVnRXhwKC9eXFx3KyhbLSsuJ11cXHcrKSpAXFx3KyhbLS5dXFx3KykqXFwuXFx3KyhbLS5dXFx3KykqJC8pO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICFyZWdleEVtYWlsVmFsaWQudGVzdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc0VtYWlsJywgbWVzc2FnZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzQ1BGID0gKG1lc3NhZ2UgPSAnQ1BGIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gISgodmFsdWUpID0+IHtcbiAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgY29uc3QgY3BmVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmIChjcGZWYWx1ZSA9PT0gJzAwMDAwMDAwMDAwJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA5OyBpICs9IDEpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMSAtIGkpO1xuICAgICAgfVxuICAgICAgbGV0IG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT09IDEwKSB8fCAobW9kID09PSAxMSkpIG1vZCA9IDA7XG4gICAgICBpZiAobW9kICE9PSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoOSwgMTApLCAxMCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgc3VtID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpICs9IDEpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMiAtIGkpO1xuICAgICAgfVxuICAgICAgbW9kID0gKHN1bSAqIDEwKSAlIDExO1xuXG4gICAgICBpZiAoKG1vZCA9PT0gMTApIHx8IChtb2QgPT09IDExKSkgbW9kID0gMDtcbiAgICAgIGlmIChtb2QgIT09IHBhcnNlSW50KGNwZlZhbHVlLnN1YnN0cmluZygxMCwgMTEpLCAxMCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pKHRoaXMudmFsdWUpO1xuXG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdpc0NQRicsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBoYXNNaW5MZW5ndGggPSAobWluTGVuZ3RoLCBtZXNzYWdlID0gYE1pbmltYWwgbGVuZ2h0IGlzICR7bWluTGVuZ3RofWApID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLnZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aDtcblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2hhc01pbkxlbmd0aCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBWYWxpZGF0aW9ucyBmcm9tICcuL1ZhbGlkYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkNvbnRyYWN0IHtcbiAgZXJyb3JzID0gbmV3IE1hcCgpXG5cbiAgdmFsaWRhdGUocGFyYW0sIHZhbHVlKSB7XG4gICAgdGhpcy5zZXRQYXJhbShwYXJhbSk7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9ucyh7IGNvbnRyYWN0OiB0aGlzLCBwYXJhbSwgdmFsdWUgfSk7XG4gIH1cblxuICBnZXRFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzO1xuICB9XG5cbiAgaGFzRXJyb3JzID0gKCkgPT4ge1xuICAgIGxldCBjb250cmFjdElzSW52YWxpZCA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3JzLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICBpZiAocGFyYW0uc2l6ZSA9PT0gMSkge1xuICAgICAgICBjb250cmFjdElzSW52YWxpZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRyYWN0SXNJbnZhbGlkO1xuICB9XG5cbiAgc2V0UGFyYW0ocGFyYW0pIHtcbiAgICBpZiAoIXRoaXMuZXJyb3JzLmdldChwYXJhbSkpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnNldChwYXJhbSwgbmV3IE1hcCgpKTtcbiAgICB9XG4gIH1cblxuICBzZXRFcnJvciA9IChwYXJhbSwgdHlwZSwgbWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGVycm9yT2JqID0ge1xuICAgICAgcGFyYW0sXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICB9O1xuICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuc2V0KHR5cGUsIGVycm9yT2JqKTtcbiAgfVxuXG4gIHJlbW92ZUVycm9yID0gKHBhcmFtLCB0eXBlKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkpIHtcbiAgICAgIHRoaXMuZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkuZGVsZXRlKHR5cGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0RXJyb3JzQnlQYXJhbShwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5nZXQocGFyYW0pO1xuICB9XG5cbiAgaXNWYWxpZFBhcmFtKHBhcmFtKSB7XG4gICAgY29uc3QgcGFyYW1FcnJvcnMgPSB0aGlzLmVycm9ycy5nZXQocGFyYW0pO1xuICAgIGlmIChwYXJhbUVycm9ycykgcmV0dXJuIHBhcmFtRXJyb3JzLnNpemUgPT09IDA7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZFZhbGlkYXRvciB7XG4gIGluaXRpYWxpemVkID0gZmFsc2VcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgZm9ybUZpZWxkRWxlbWVudCxcbiAgICBmb3JtRmllbGROYW1lLFxuICAgIHZhbGlkYXRpb25Db250cmFjdCxcbiAgICBmaWVsZFZhbGlkYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQgPSBmb3JtRmllbGRFbGVtZW50O1xuICAgIHRoaXMuZm9ybUZpZWxkTmFtZSA9IGZvcm1GaWVsZE5hbWU7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJhY3QgPSB2YWxpZGF0aW9uQ29udHJhY3Q7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24gPSBmaWVsZFZhbGlkYXRpb247XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9ycygpO1xuICB9XG5cbiAgdmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLmZpZWxkVmFsaWRhdGlvbih0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsdWUsIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0KTtcbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cygpIHtcbiAgICBpZiAodGhpcy5pc0ludmFsaWQoKSAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLWludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy1pbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ1NTQ2xhc3NUeXBlZFN0YXR1cygpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmZvcm1GaWVsZEVsZW1lbnQ7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXR5cGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdHlwZWQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFcnJvcnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yc09mVGhpc1BhcmFtID0gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuZ2V0RXJyb3JzQnlQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpO1xuICAgICAgY29uc3QgZXJyb3JzID0gQXJyYXkuZnJvbShlcnJvcnNPZlRoaXNQYXJhbS52YWx1ZXMoKSkgfHwgW107XG4gICAgICBjb25zdCBmaXJzdEVycm9yID0gZXJyb3JzWzBdIHx8IHt9O1xuICAgICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudC5pbm5lckhUTUwgPSBgJHtmaXJzdEVycm9yLm1lc3NhZ2V9YDtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gdGhpcy52YWxpZGF0aW9uQ29udHJhY3QuaXNWYWxpZFBhcmFtKHRoaXMuZm9ybUZpZWxkTmFtZSlcblxuICBpc0ludmFsaWQgPSAoKSA9PiAhdGhpcy5pc1ZhbGlkKClcblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IgPSB7XG4gICAgICB2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZSxcbiAgICB9O1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudEVycm9yRWxlbWVudCgpO1xuICB9XG5cbiAgc2V0dXBGb3JtRWxlbWVudEVycm9yRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsICc8c3BhbiBjbGFzcz1cImVycm9yc1wiPjwvc3Bhbj4nKTtcbiAgICB0aGlzLmZvcm1FbGVtZW50RXJyb3JFbGVtZW50ID0gdGhpcy5mb3JtRmllbGRFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmVycm9ycycpO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbkNvbnRyYWN0IGZyb20gJy4uL0ZsdWVudFZhbGlkYXRvcic7XG5pbXBvcnQgRm9ybUZpZWxkVmFsaWRhdG9yIGZyb20gJy4vRm9ybUZpZWxkVmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGZvcm1GaWVsZEVsZW1lbnRzID0gW107XG5cbiAgY29uc3RydWN0b3IoJGZvcm1FbGVtZW50LCBmb3JtRmllbGROYW1lcykge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpO1xuXG4gICAgdGhpcy5mb3JtRWxlbWVudCA9ICRmb3JtRWxlbWVudDtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZm9ybUZpZWxkTmFtZXMgPSBmb3JtRmllbGROYW1lcztcbiAgICB0aGlzLnNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMoKTtcbiAgfVxuXG4gIGlzVmFsaWQgPSAoKSA9PiAhdGhpcy5pc0ludmFsaWQoKTtcblxuICBpc0ludmFsaWQgPSAoKSA9PiB7XG4gICAgdGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0Lmhhc0Vycm9ycygpO1xuICB9XG5cbiAgc2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBhcnJheU9mRm9ybUZpZWxkTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm1GaWVsZE5hbWVzKTtcblxuICAgIGFycmF5T2ZGb3JtRmllbGROYW1lcy5mb3JFYWNoKChmaWVsZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0ICRmb3JtRmllbGRFbGVtZW50ID0gdGhpcy5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7ZmllbGROYW1lfVwiXWApO1xuICAgICAgY29uc3QgZm9ybUZpZWxkVmFsaWRhdG9yID0gbmV3IEZvcm1GaWVsZFZhbGlkYXRvcih7XG4gICAgICAgIGZvcm1GaWVsZEVsZW1lbnQ6ICRmb3JtRmllbGRFbGVtZW50LFxuICAgICAgICBmb3JtRmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgIHZhbGlkYXRpb25Db250cmFjdDogdGhpcy52YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgICAgIGZpZWxkVmFsaWRhdGlvbjogdGhpcy5mb3JtRmllbGROYW1lc1tmaWVsZE5hbWVdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnRzLnB1c2goZm9ybUZpZWxkVmFsaWRhdG9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRWxlbWVudC52YWxpZGF0b3IgPSB7XG4gICAgICBpc1ZhbGlkOiB0aGlzLmlzVmFsaWQsXG4gICAgICBpc0ludmFsaWQ6IHRoaXMuaXNJbnZhbGlkLFxuICAgICAgY2xlYXI6IHRoaXMuY2xlYXIsXG4gICAgfTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCk7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIHRoaXMuY2xlYXIpO1xuICB9XG5cbiAgdmFsaWRhdGVGb3JtRmllbGRFbGVtZW50ID0gKHsgdGFyZ2V0OiBmb3JtRmllbGRFbGVtZW50IH0pID0+IHtcbiAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRvci52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cyA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnRzLmZvckVhY2goKGZvcm1GaWVsZEVsZW1lbnQpID0+IHtcbiAgICAgIGZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gbmV3IFZhbGlkYXRpb25Db250cmFjdCgpO1xuICB9XG59XG4iLCIvLyBpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL2VudGl0aWVzL1VzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNSZXBvc2l0b3J5IHtcbiAga2V5ID0gJ3VzZXJzJ1xuXG4gIGdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpIHx8IFtdXG5cbiAgc2V0SXRlbUluTG9jYWxTdG9yYWdlID0gaXRlbSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG5cbiAgZ2V0QWxsID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKClcbiAgfVxuXG4gIGluc2VydCA9ICh1c2VyKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuXG4gICAgbGlzdE9mVXNlcnMucHVzaCh7XG4gICAgICBuYW1lOiB1c2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICBjcGY6IHVzZXIuZ2V0Q1BGKCksXG4gICAgICBwaG9uZTogdXNlci5nZXRQaG9uZSgpLFxuICAgICAgZW1haWw6IHVzZXIuZ2V0RW1haWwoKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZShsaXN0T2ZVc2Vycyk7XG4gICAgICAgICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdVc2VyIHJlZ2lzdGVyZWQgd2l0aCBzdWNjZXNzJyB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCAxMDAwKVxuICAgIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=