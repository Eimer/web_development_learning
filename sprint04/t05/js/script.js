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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ \"./js/templates.js\");\n\n\n\n\nconst menuMap = new Map();\nconst saladsMap = new Map();\nconst mainDishesMap = new Map();\nconst desertsMap = new Map();\nconst drinksMap = new Map();\n\nsaladsMap.set(\"Greek salad\", 5.99);\nsaladsMap.set(\"Caesar salad\", 7.99);\nmainDishesMap.set(\"Margharita Pizza\", 12.50);\nmainDishesMap.set(\"Tomato Soup\", 6.99);\nmainDishesMap.set(\"Burger\", 10.00);\ndesertsMap.set(\"Cheesecake\", 4.99);\ndesertsMap.set(\"Chocolate Ice-Cream\", 2.50);\ndesertsMap.set(\"Fruit Salad\", 3.99);\ndrinksMap.set(\"Lemonade\", 3.20);\ndrinksMap.set(\"Green Tea\", 1.50);\ndrinksMap.set(\"Coffee\", 1.99);\nmenuMap.set(\"salads\", saladsMap).set(\"dishes\", mainDishesMap).set(\"deserts\", desertsMap).set(\"drinks\", drinksMap);\n\nmenuMap.forEach(function (value, key) {\n  let nodeDiv = _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"div\", \"node\", \"\", \".menu\");\n  let categoryDiv = _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"span\", \"category\", key, nodeDiv);\n  _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"br\", undefined, \"\", nodeDiv);\n  _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"div\", \"line\", \"\", nodeDiv);\n  value.forEach(function (value, key) {\n    // console.log(key);\n    _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"span\", \"name\", key, nodeDiv);\n    _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"span\", \"price\", '$' + value, nodeDiv);\n    _templates_js__WEBPACK_IMPORTED_MODULE_0__[\"createAddElem\"](\"br\", undefined, \"\", nodeDiv);\n  })\n})\n\n//# sourceURL=webpack:///./js/init.js?");

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