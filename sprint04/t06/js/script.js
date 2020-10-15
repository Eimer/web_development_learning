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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ \"./js/templates.js\");\n\n\n\n\nfunction* countTurns() {\n  yield \"Hello, I am J.A.R.V.I.S.\";\n  yield \"I believe I've already said it, but, sure, hello again!\"\n  yield \"You are malfunctioning.\";\n  yield \"I believe your intentions to be hostile.\";\n  yield \"I will not respond to that.\";\n\n  while (true)\n    yield \"I will not respond to that.\";\n}\n\nfunction addSender (messageValue) {\n  let messageDiv = _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"div\", \"message-block\", \"\", \".main-chat\");\n  let senderDiv = _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"div\", \"sender\", \"\", messageDiv);\n  let messageSpan = _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"span\", null, messageValue, senderDiv);\n\n  $(\".main-chat\").scrollTop($(\".message-block:last\").offset().top);\n}\n\nfunction addReviver (messageValue) {\n  let messageDiv = _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"div\", \"message-block\", \"\", \".main-chat\");\n  let receiverDiv = _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"div\", \"receiver\", \"\", messageDiv);\n  let messageSpan = _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"span\", null, messageValue, receiverDiv);\n\n  $(\".main-chat\").scrollTop($(\".message-block:last\").offset().top);\n}\n\nfunction sendMessage (event) {\n  let messageValue = $(\".message\")[0].value;\n\n    if (messageValue) {\n      addSender(messageValue);\n      $(\".message\")[0].value = \"\";\n      if (messageValue.toLowerCase() === \"hello\" || messageValue.toLowerCase() === \"hi\")\n        addReviver(this.generator.next().value);\n      else\n        addReviver(\"I don't understand.\");\n    }\n}\n\n$(\".send\")[0].addEventListener(\"click\", {handleEvent: sendMessage, generator: countTurns() });\n\n\n//# sourceURL=webpack:///./js/init.js?");

/***/ }),

/***/ "./js/templates.js":
/*!*************************!*\
  !*** ./js/templates.js ***!
  \*************************/
/*! exports provided: createAddElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAddElem\", function() { return createAddElem; });\n\n\nfunction createAddElem (elemName, elemClass, elemText, parent) {\n  if (elemName) {\n    let elem\n    if (!parent) {\n      elem = $('<' + elemName + '>', {\n        class: elemClass,\n        text: elemText,\n      })\n    } else {\n      $(parent).innerHTML = \"\";\n      elem = $('<' + elemName + '>', {\n        class: elemClass,\n        text: elemText,\n      })\n      $(parent).append(elem);\n    }\n    return elem;\n  }\n}\n\n\n//# sourceURL=webpack:///./js/templates.js?");

/***/ })

/******/ });