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
      var usersService = new _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"]();
      usersService.addNew(formElementsDTO).then(function () {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersService; });
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/User */ "./src/domain/entities/User.js");
/* harmony import */ var _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infra/repositories/UsersRepository */ "./src/infra/repositories/UsersRepository.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var UsersService =
/*#__PURE__*/
function () {
  function UsersService() {
    _classCallCheck(this, UsersService);
  }

  _createClass(UsersService, [{
    key: "addNew",
    value: function addNew(formElementsDTO) {
      var user = new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](formElementsDTO);
      var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
      return usersRepository.insert(user);
    }
  }]);

  return UsersService;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8vZWxlbWVudHMvZm9ybUFkZFVzdWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9jYWRhc3Ryby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92YWxpZGF0aW9ucy9uZXdVc2VyVmFsaWRhdGlvblNjaGVtYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2VudGl0aWVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9zZXJ2aWNlcy9Vc2Vyc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi92YWx1ZU9iamVjdHMvQ1BGLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL1Bob25lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9GbHVlbnRWYWxpZGF0b3IvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0ZsdWVudFZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvRm9ybVZhbGlkYXRvci9Gb3JtRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL0Zvcm1WYWxpZGF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlckNvbnRyb2xsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGZvcm0iLCJ0YXJnZXQiLCJ2YWxpZGF0b3IiLCJpc0ludmFsaWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmb3JtRWxlbWVudHNEVE8iLCJmdWxsTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZW1haWwiLCJ1c2Vyc1NlcnZpY2UiLCJVc2Vyc1NlcnZpY2UiLCJhZGROZXciLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJGZvcm1FbGVtZW50IiwiZG9jdW1lbnQiLCJzdGFydEJ0blN1Ym1pdExvYWRpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzdG9wQnRuU3VibWl0TG9hZGluZyIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJmb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsIm5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hIiwicGFnZUNhZGFzdHJvIiwidXNlckNvbnRyb2xsZXIiLCJub21lIiwiY29udHJhY3QiLCJ2YWxpZGF0ZSIsImlzUmVxdWlyZWQiLCJpc0VtYWlsIiwiaXNDUEYiLCJ0ZWxlZm9uZSIsImhhc01pbkxlbmd0aCIsIlVzZXIiLCJnZXRWYWx1ZSIsImdldFZhbHVlRm9ybWF0ZWQiLCJnZXROdW1iZXIiLCJnZXROdW1iZXJGb3JtYXRlZCIsIkNQRiIsIkNQRk51bWJlcnMiLCJQaG9uZSIsIm51bWJlciIsIk9iamVjdCIsImZyZWV6ZSIsInVzZXIiLCJ1c2Vyc1JlcG9zaXRvcnkiLCJVc2Vyc1JlcG9zaXRvcnkiLCJpbnNlcnQiLCJDUEZSZWdleCIsInJlcGxhY2UiLCJmdWxsTWF0Y2giLCJwYXJ0T25lIiwicGFydFR3byIsInBhcnRUaHJlZSIsImRpZ2l0IiwiZGRkIiwibnVtYmVyUGFydE9uZSIsIm51bWJlclBhcnRUd28iLCJWYWxpZGF0aW9ucyIsInBhcmFtIiwiY29uZGl0aW9uIiwidmFsaWRhdGlvbk5hbWUiLCJtZXNzYWdlIiwic2V0RXJyb3IiLCJyZW1vdmVFcnJvciIsImxlbmd0aCIsImFwcGx5VmFsaWRhdGlvbiIsInJlZ2V4RW1haWxWYWxpZCIsIlJlZ0V4cCIsInRlc3QiLCJzdW0iLCJjcGZWYWx1ZSIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsIm1vZCIsIm1pbkxlbmd0aCIsIlZhbGlkYXRpb25Db250cmFjdCIsIk1hcCIsImNvbnRyYWN0SXNJbnZhbGlkIiwiZXJyb3JzIiwiZm9yRWFjaCIsInNpemUiLCJ0eXBlIiwiZXJyb3JPYmoiLCJnZXRFcnJvcnNCeVBhcmFtIiwic2V0IiwiZGVsZXRlIiwic2V0UGFyYW0iLCJnZXQiLCJwYXJhbUVycm9ycyIsIkZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRmllbGROYW1lIiwidmFsaWRhdGlvbkNvbnRyYWN0IiwiZmllbGRWYWxpZGF0aW9uIiwidmFsaWRhdGlvbiIsInVwZGF0ZUNTU0NsYXNzSW52YWxpZFN0YXR1cyIsInVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMiLCJ1cGRhdGVFcnJvcnMiLCJpbml0aWFsaXplZCIsImVycm9yc09mVGhpc1BhcmFtIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiZmlyc3RFcnJvciIsImZvcm1FbGVtZW50RXJyb3JFbGVtZW50IiwiaW5uZXJIVE1MIiwiaXNWYWxpZFBhcmFtIiwiaXNWYWxpZCIsInNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwYXJlbnROb2RlIiwiaW5pdCIsInNldHVwRm9ybUVsZW1lbnQiLCJmb3JtRmllbGROYW1lcyIsInZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMiLCJoYXNFcnJvcnMiLCJhcnJheU9mRm9ybUZpZWxkTmFtZXMiLCJrZXlzIiwiZmllbGROYW1lIiwiJGZvcm1GaWVsZEVsZW1lbnQiLCJmb3JtRWxlbWVudCIsImZvcm1GaWVsZFZhbGlkYXRvciIsImZvcm1GaWVsZEVsZW1lbnRzIiwicHVzaCIsImNsZWFyIiwidmFsaWRhdGVGb3JtRmllbGRFbGVtZW50Iiwic2V0dXBBbGxGb3JtRmllbGRFbGVtZW50cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJrZXkiLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJnZXRBbGwiLCJuYW1lIiwiZ2V0RnVsbE5hbWUiLCJnZXRDUEYiLCJnZXRQaG9uZSIsImdldEVtYWlsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2V0SXRlbUluTG9jYWxTdG9yYWdlIiwiZXJyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztJQUVxQkEsYzs7Ozs7Ozs7O3dCQUNSQyxLLEVBQU87QUFDaEJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFwQjtBQUdBLFVBQUlELEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMs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QUFFZi9JLFNBQUcsRUFBRThDLElBQUksQ0FBQ2tHLE1BQUwsRUFGVTtBQUdmL0ksV0FBSyxFQUFFNkMsSUFBSSxDQUFDbUcsUUFBTCxFQUhRO0FBSWYvSSxXQUFLLEVBQUU0QyxJQUFJLENBQUNvRyxRQUFMO0FBSlEsS0FBakI7QUFPQSxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLGdCQUFVLENBQUMsWUFBTTtBQUNmLFlBQUk7QUFDRixlQUFJLENBQUNDLHFCQUFMLENBQTJCWCxXQUEzQjs7QUFDQVEsaUJBQU8sQ0FBQztBQUFFcEYsbUJBQU8sRUFBRTtBQUFYLFdBQUQsQ0FBUDtBQUNELFNBSEQsQ0FHRSxPQUFPd0YsR0FBUCxFQUFZO0FBQ1pILGdCQUFNLENBQUNHLEdBQUQsQ0FBTjtBQUNEO0FBQ0YsT0FQUyxFQU9QLElBUE8sQ0FBVjtBQVFELEtBVE0sQ0FBUDtBQVVELEciLCJmaWxlIjoianMvY2FkYXN0cm8vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFVzZXJzU2VydmljZSBmcm9tICcuLi8uLi9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBzdGF0aWMgYWRkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkZm9ybSA9IGV2ZW50LnRhcmdldDtcblxuXG4gICAgaWYgKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSk7XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWUsXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzU2VydmljZSA9IG5ldyBVc2Vyc1NlcnZpY2UoKVxuXG4gICAgdXNlcnNTZXJ2aWNlXG4gICAgICAuYWRkTmV3KGZvcm1FbGVtZW50c0RUTylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRlZCcpKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgICAgfSlcbiAgfVxuXG4gIC8vIHNob3dBbGwoZXZlbnQpIHtcbiAgLy8gaW1wb3J0IHsgVXNlcnNUYWJsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNUYWJsZSdcbiAgLy8gICAvLyBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVtcGxhdGU9XCJVc2Vyc1RhYmxlXCJdJykpXG4gIC8vICAgLy8gY29uc3QgdXNlcnMgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCkuZ2V0QWxsKClcbiAgLy8gICAvLyB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgLy8gICAvLyAgIHVzZXJzXG4gIC8vICAgLy8gfSlcbiAgLy8gfVxufVxuIiwiaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vLi4vLi4vLi4vaW5mcmEvRm9ybVZhbGlkYXRvcic7XG5pbXBvcnQgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEgZnJvbSAnLi4vLi4vLi4vdmFsaWRhdGlvbnMvbmV3VXNlclZhbGlkYXRpb25TY2hlbWEnO1xuXG5jb25zdCAkZm9ybUVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm1BZGRVc3VhcmlvXCJdJyk7XG5cbmZ1bmN0aW9uIHN0YXJ0QnRuU3VibWl0TG9hZGluZygpIHtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5jbGFzc0xpc3QuYWRkKCctbG9hZGluZycpO1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xufVxuXG5mdW5jdGlvbiBzdG9wQnRuU3VibWl0TG9hZGluZygpIHtcbiAgJGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJidG5TdWJtaXRcIl0nKS5jbGFzc0xpc3QucmVtb3ZlKCctbG9hZGluZycpO1xuICAkZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImJ0blN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgJGZvcm1FbGVtZW50LnJlc2V0KCk7XG59XG5cbiRmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdidG5zdWJtaXRsb2FkaW5nJywgc3RhcnRCdG5TdWJtaXRMb2FkaW5nKTtcbiRmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdidG5zdWJtaXRsb2FkZWQnLCBzdG9wQnRuU3VibWl0TG9hZGluZyk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbGVtZW50OiAkZm9ybUVsZW1lbnQsXG4gIGZvcm1WYWxpZGF0b3I6IG5ldyBGb3JtVmFsaWRhdG9yKCRmb3JtRWxlbWVudCwgbmV3VXNlclZhbGlkYXRpb25TY2hlbWEpLFxufTtcbiIsImltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tICcuLi8uLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGVyJztcbmltcG9ydCAnLi9lbGVtZW50cy9mb3JtQWRkVXN1YXJpbyc7XG5cbndpbmRvdy5wYWdlQ2FkYXN0cm8gPSB7XG4gIHVzZXJDb250cm9sbGVyOiBVc2VyQ29udHJvbGxlcixcbn07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hID0ge1xuICBub21lOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnbm9tZScsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIG5vbWUgw6kgb2JyaWdhdMOzcmlvJyksXG4gIGVtYWlsOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgnZW1haWwnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyBlbWFpbCDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5pc0VtYWlsKCdJbmZvcm1lIHVtIGUtbWFpbCB2w6FsaWRvJyksXG4gIGNwZjogKHZhbHVlLCBjb250cmFjdCkgPT4gY29udHJhY3RcbiAgICAudmFsaWRhdGUoJ2NwZicsIHZhbHVlKVxuICAgIC5pc1JlcXVpcmVkKCdPIGNhbXBvIENQRiDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5pc0NQRignUG9yIGZhdm9yLCBpbmZvcm1lIHVtIENQRiB2w6FsaWRvJyksXG4gIHRlbGVmb25lOiAodmFsdWUsIGNvbnRyYWN0KSA9PiBjb250cmFjdFxuICAgIC52YWxpZGF0ZSgndGVsZWZvbmUnLCB2YWx1ZSlcbiAgICAuaXNSZXF1aXJlZCgnTyBjYW1wbyB0ZWxlZm9uZSDDqSBvYnJpZ2F0w7NyaW8nKVxuICAgIC5oYXNNaW5MZW5ndGgoMTAsICdJbmZvcm1lIHVtIHRlbGVmb25lIHbDoWxpZG8nKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1VzZXJWYWxpZGF0aW9uU2NoZW1hO1xuIiwiaW1wb3J0IFBob25lIGZyb20gJy4uL3ZhbHVlT2JqZWN0cy9QaG9uZSc7XG5pbXBvcnQgQ1BGIGZyb20gJy4uL3ZhbHVlT2JqZWN0cy9DUEYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGZ1bGxOYW1lLFxuICAgIGNwZixcbiAgICBwaG9uZSxcbiAgICBlbWFpbCxcbiAgfSkge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcbiAgICB0aGlzLmNwZiA9IG5ldyBDUEYoeyBDUEZOdW1iZXJzOiBjcGYgfSk7XG4gICAgdGhpcy5waG9uZSA9IG5ldyBQaG9uZSh7IG51bWJlcjogcGhvbmUgfSk7XG4gICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lID0gKCkgPT4gdGhpcy5mdWxsTmFtZVxuXG4gIGdldEVtYWlsID0gKCkgPT4gdGhpcy5lbWFpbFxuXG4gIGdldENQRiA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlKClcblxuICBnZXRDUEZGb3JtYXRlZCA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlRm9ybWF0ZWQoKVxuXG4gIGdldFBob25lID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXIoKVxuXG4gIGdldFBob25lRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlckZvcm1hdGVkKClcbn1cbiIsImltcG9ydCBVc2VyIGZyb20gXCIuLi9lbnRpdGllcy9Vc2VyXCI7XG5pbXBvcnQgVXNlcnNSZXBvc2l0b3J5IGZyb20gJy4uLy4uL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIGFkZE5ldyhmb3JtRWxlbWVudHNEVE8pIHtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybUVsZW1lbnRzRFRPKTtcbiAgICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gICAgcmV0dXJuIHVzZXJzUmVwb3NpdG9yeS5pbnNlcnQodXNlcilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBDUEZOdW1iZXJzIH0pIHtcbiAgICB0aGlzLkNQRk51bWJlcnMgPSBDUEZOdW1iZXJzO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy5DUEZOdW1iZXJzXG5cbiAgZ2V0VmFsdWVGb3JtYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBDUEZSZWdleCA9IC8oXFxkezN9KShcXGR7M30pKFxcZHszfSkoXFxkezJ9KS87XG4gICAgdGhpcy5DUEZOdW1iZXJzLnJlcGxhY2UoQ1BGUmVnZXgsIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob25lIHtcbiAgY29uc3RydWN0b3IoeyBudW1iZXIgfSkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXROdW1iZXIgPSAoKSA9PiB0aGlzLm51bWJlcjtcblxuICBnZXROdW1iZXJGb3JtYXRlZCA9ICgpID0+IHRoaXMubnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICBpZiAoZGRkKSByZXR1cm4gYCR7ZGRkfS0ke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuXG4gICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih7IGNvbnRyYWN0LCBwYXJhbSwgdmFsdWUgfSkge1xuICAgIHRoaXMucGFyYW0gPSBwYXJhbTtcbiAgICB0aGlzLmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgYXBwbHlWYWxpZGF0aW9uID0gKGNvbmRpdGlvbiwgdmFsaWRhdGlvbk5hbWUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbnRyYWN0LnNldEVycm9yKHRoaXMucGFyYW0sIHZhbGlkYXRpb25OYW1lLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cmFjdC5yZW1vdmVFcnJvcih0aGlzLnBhcmFtLCB2YWxpZGF0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaXNSZXF1aXJlZCA9IChtZXNzYWdlID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gMDtcblxuICAgIHRoaXMuYXBwbHlWYWxpZGF0aW9uKGNvbmRpdGlvbiwgJ2lzUmVxdWlyZWQnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNFbWFpbCA9IChtZXNzYWdlID0gJ0VtYWlsIG11c3QgdG8gYmUgdmFsaWQnKSA9PiB7XG4gICAgY29uc3QgcmVnZXhFbWFpbFZhbGlkID0gbmV3IFJlZ0V4cCgvXlxcdysoWy0rLiddXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKiQvKTtcbiAgICBjb25zdCBjb25kaXRpb24gPSAhcmVnZXhFbWFpbFZhbGlkLnRlc3QodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNFbWFpbCcsIG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0NQRiA9IChtZXNzYWdlID0gJ0NQRiBtdXN0IHRvIGJlIHZhbGlkJykgPT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICEoKHZhbHVlKSA9PiB7XG4gICAgICBsZXQgc3VtID0gMDtcbiAgICAgIGNvbnN0IGNwZlZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoY3BmVmFsdWUgPT09ICcwMDAwMDAwMDAwMCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gOTsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTEgLSBpKTtcbiAgICAgIH1cbiAgICAgIGxldCBtb2QgPSAoc3VtICogMTApICUgMTE7XG5cbiAgICAgIGlmICgobW9kID09PSAxMCkgfHwgKG1vZCA9PT0gMTEpKSBtb2QgPSAwO1xuICAgICAgaWYgKG1vZCAhPT0gcGFyc2VJbnQoY3BmVmFsdWUuc3Vic3RyaW5nKDksIDEwKSwgMTApKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHN1bSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoaSAtIDEsIGkpLCAxMCkgKiAoMTIgLSBpKTtcbiAgICAgIH1cbiAgICAgIG1vZCA9IChzdW0gKiAxMCkgJSAxMTtcblxuICAgICAgaWYgKChtb2QgPT09IDEwKSB8fCAobW9kID09PSAxMSkpIG1vZCA9IDA7XG4gICAgICBpZiAobW9kICE9PSBwYXJzZUludChjcGZWYWx1ZS5zdWJzdHJpbmcoMTAsIDExKSwgMTApKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KSh0aGlzLnZhbHVlKTtcblxuXG4gICAgdGhpcy5hcHBseVZhbGlkYXRpb24oY29uZGl0aW9uLCAnaXNDUEYnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzTWluTGVuZ3RoID0gKG1pbkxlbmd0aCwgbWVzc2FnZSA9IGBNaW5pbWFsIGxlbmdodCBpcyAke21pbkxlbmd0aH1gKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy52YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGg7XG5cbiAgICB0aGlzLmFwcGx5VmFsaWRhdGlvbihjb25kaXRpb24sICdoYXNNaW5MZW5ndGgnLCBtZXNzYWdlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgVmFsaWRhdGlvbnMgZnJvbSAnLi9WYWxpZGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25Db250cmFjdCB7XG4gIGVycm9ycyA9IG5ldyBNYXAoKVxuXG4gIHZhbGlkYXRlKHBhcmFtLCB2YWx1ZSkge1xuICAgIHRoaXMuc2V0UGFyYW0ocGFyYW0pO1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbnMoeyBjb250cmFjdDogdGhpcywgcGFyYW0sIHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycztcbiAgfVxuXG4gIGhhc0Vycm9ycyA9ICgpID0+IHtcbiAgICBsZXQgY29udHJhY3RJc0ludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9ycy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgaWYgKHBhcmFtLnNpemUgPT09IDEpIHtcbiAgICAgICAgY29udHJhY3RJc0ludmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250cmFjdElzSW52YWxpZDtcbiAgfVxuXG4gIHNldFBhcmFtKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLmVycm9ycy5nZXQocGFyYW0pKSB7XG4gICAgICB0aGlzLmVycm9ycy5zZXQocGFyYW0sIG5ldyBNYXAoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXJyb3IgPSAocGFyYW0sIHR5cGUsIG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBlcnJvck9iaiA9IHtcbiAgICAgIHBhcmFtLFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLnNldCh0eXBlLCBlcnJvck9iaik7XG4gIH1cblxuICByZW1vdmVFcnJvciA9IChwYXJhbSwgdHlwZSkgPT4ge1xuICAgIGlmICh0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pKSB7XG4gICAgICB0aGlzLmdldEVycm9yc0J5UGFyYW0ocGFyYW0pLmRlbGV0ZSh0eXBlKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldEVycm9yc0J5UGFyYW0ocGFyYW0pIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgfVxuXG4gIGlzVmFsaWRQYXJhbShwYXJhbSkge1xuICAgIGNvbnN0IHBhcmFtRXJyb3JzID0gdGhpcy5lcnJvcnMuZ2V0KHBhcmFtKTtcbiAgICBpZiAocGFyYW1FcnJvcnMpIHJldHVybiBwYXJhbUVycm9ycy5zaXplID09PSAwO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGRWYWxpZGF0b3Ige1xuICBpbml0aWFsaXplZCA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGZvcm1GaWVsZEVsZW1lbnQsXG4gICAgZm9ybUZpZWxkTmFtZSxcbiAgICB2YWxpZGF0aW9uQ29udHJhY3QsXG4gICAgZmllbGRWYWxpZGF0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50ID0gZm9ybUZpZWxkRWxlbWVudDtcbiAgICB0aGlzLmZvcm1GaWVsZE5hbWUgPSBmb3JtRmllbGROYW1lO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0ID0gdmFsaWRhdGlvbkNvbnRyYWN0O1xuICAgIHRoaXMuZmllbGRWYWxpZGF0aW9uID0gZmllbGRWYWxpZGF0aW9uO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBGb3JtRWxlbWVudCgpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGlvbigpO1xuICAgIHRoaXMudXBkYXRlQ1NTQ2xhc3NJbnZhbGlkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVDU1NDbGFzc1R5cGVkU3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcnMoKTtcbiAgfVxuXG4gIHZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5maWVsZFZhbGlkYXRpb24odGhpcy5mb3JtRmllbGRFbGVtZW50LnZhbHVlLCB0aGlzLnZhbGlkYXRpb25Db250cmFjdCk7XG4gIH1cblxuICB1cGRhdGVDU1NDbGFzc0ludmFsaWRTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuaXNJbnZhbGlkKCkgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNTU0NsYXNzVHlwZWRTdGF0dXMoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5mb3JtRmllbGRFbGVtZW50O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10eXBlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXR5cGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXJyb3JzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCBlcnJvcnNPZlRoaXNQYXJhbSA9IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmdldEVycm9yc0J5UGFyYW0odGhpcy5mb3JtRmllbGROYW1lKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IEFycmF5LmZyb20oZXJyb3JzT2ZUaGlzUGFyYW0udmFsdWVzKCkpIHx8IFtdO1xuICAgICAgY29uc3QgZmlyc3RFcnJvciA9IGVycm9yc1swXSB8fCB7fTtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnRFcnJvckVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Zmlyc3RFcnJvci5tZXNzYWdlfWA7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LmlzVmFsaWRQYXJhbSh0aGlzLmZvcm1GaWVsZE5hbWUpXG5cbiAgaXNJbnZhbGlkID0gKCkgPT4gIXRoaXMuaXNWYWxpZCgpXG5cbiAgc2V0dXBGb3JtRWxlbWVudCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1GaWVsZEVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGUsXG4gICAgfTtcbiAgICB0aGlzLnNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQoKTtcbiAgfVxuXG4gIHNldHVwRm9ybUVsZW1lbnRFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAnPHNwYW4gY2xhc3M9XCJlcnJvcnNcIj48L3NwYW4+Jyk7XG4gICAgdGhpcy5mb3JtRWxlbWVudEVycm9yRWxlbWVudCA9IHRoaXMuZm9ybUZpZWxkRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcnMnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZhbGlkYXRpb25Db250cmFjdCBmcm9tICcuLi9GbHVlbnRWYWxpZGF0b3InO1xuaW1wb3J0IEZvcm1GaWVsZFZhbGlkYXRvciBmcm9tICcuL0Zvcm1GaWVsZFZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBmb3JtRmllbGRFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCRmb3JtRWxlbWVudCwgZm9ybUZpZWxkTmFtZXMpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSAkZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5zZXR1cEZvcm1FbGVtZW50KCk7XG5cbiAgICB0aGlzLmZvcm1GaWVsZE5hbWVzID0gZm9ybUZpZWxkTmFtZXM7XG4gICAgdGhpcy5zZXR1cEFsbEZvcm1GaWVsZEVsZW1lbnRzKCk7XG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4gIXRoaXMuaXNJbnZhbGlkKCk7XG5cbiAgaXNJbnZhbGlkID0gKCkgPT4ge1xuICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRFbGVtZW50cygpO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Db250cmFjdC5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIHNldHVwQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXlPZkZvcm1GaWVsZE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5mb3JtRmllbGROYW1lcyk7XG5cbiAgICBhcnJheU9mRm9ybUZpZWxkTmFtZXMuZm9yRWFjaCgoZmllbGROYW1lKSA9PiB7XG4gICAgICBjb25zdCAkZm9ybUZpZWxkRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFZhbGlkYXRvciA9IG5ldyBGb3JtRmllbGRWYWxpZGF0b3Ioe1xuICAgICAgICBmb3JtRmllbGRFbGVtZW50OiAkZm9ybUZpZWxkRWxlbWVudCxcbiAgICAgICAgZm9ybUZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICB2YWxpZGF0aW9uQ29udHJhY3Q6IHRoaXMudmFsaWRhdGlvbkNvbnRyYWN0LFxuICAgICAgICBmaWVsZFZhbGlkYXRpb246IHRoaXMuZm9ybUZpZWxkTmFtZXNbZmllbGROYW1lXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5wdXNoKGZvcm1GaWVsZFZhbGlkYXRvcik7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cEZvcm1FbGVtZW50ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUVsZW1lbnQudmFsaWRhdG9yID0ge1xuICAgICAgaXNWYWxpZDogdGhpcy5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkOiB0aGlzLmlzSW52YWxpZCxcbiAgICAgIGNsZWFyOiB0aGlzLmNsZWFyLFxuICAgIH07XG5cbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVGb3JtRmllbGRFbGVtZW50KTtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZUZvcm1GaWVsZEVsZW1lbnQpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRm9ybUZpZWxkRWxlbWVudCA9ICh7IHRhcmdldDogZm9ybUZpZWxkRWxlbWVudCB9KSA9PiB7XG4gICAgZm9ybUZpZWxkRWxlbWVudC52YWxpZGF0b3IudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtRmllbGRFbGVtZW50cy5mb3JFYWNoKChmb3JtRmllbGRFbGVtZW50KSA9PiB7XG4gICAgICBmb3JtRmllbGRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cmFjdCA9IG5ldyBWYWxpZGF0aW9uQ29udHJhY3QoKTtcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9lbnRpdGllcy9Vc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzUmVwb3NpdG9yeSB7XG4gIGtleSA9ICd1c2VycydcblxuICBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKSB8fCBbXVxuXG4gIHNldEl0ZW1JbkxvY2FsU3RvcmFnZSA9IGl0ZW0gPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuXG4gIGdldEFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgpXG4gIH1cblxuICBpbnNlcnQgPSAodXNlcikgPT4ge1xuICAgIGNvbnN0IGxpc3RPZlVzZXJzID0gdGhpcy5nZXRBbGwoKTtcblxuICAgIGxpc3RPZlVzZXJzLnB1c2goe1xuICAgICAgbmFtZTogdXNlci5nZXRGdWxsTmFtZSgpLFxuICAgICAgY3BmOiB1c2VyLmdldENQRigpLFxuICAgICAgcGhvbmU6IHVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgIGVtYWlsOiB1c2VyLmdldEVtYWlsKCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UobGlzdE9mVXNlcnMpO1xuICAgICAgICAgIHJlc29sdmUoeyBtZXNzYWdlOiAnVXNlciByZWdpc3RlcmVkIHdpdGggc3VjY2VzcycgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMClcbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9