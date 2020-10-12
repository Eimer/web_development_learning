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

/***/ "./js/classes.js":
/*!***********************!*\
  !*** ./js/classes.js ***!
  \***********************/
/*! exports provided: magician, doHowl, Creature, Human, Dog, Vampire, Werewolf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"magician\", function() { return magician; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doHowl\", function() { return doHowl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Creature\", function() { return Creature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Human\", function() { return Human; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dog\", function() { return Dog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vampire\", function() { return Vampire; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Werewolf\", function() { return Werewolf; });\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ \"./js/templates.js\");\n\n\n\n\nconst magician = {\n  _hat: './assets/images/hat.png',\n  _getPortrait(){\n    if (this._portrait) return this._portrait;\n    else return 'assets/images/magician.png';\n  },\n  'do magic' () {\n    console.log(`ABRACADABRA\n        The prototype of ${this.name} is `);\n    console.log(Object.getPrototypeOf(this));\n  },\n};\n\nlet doHowl = {\n  howl () {\n    console.log(\"ARH-WOOOOOOOOOOOOOOOOOOOO\");\n  }\n}\n\nclass Creature {\n  constructor(name, age, species) {\n    this.name = name;\n    this.age = age;\n    this.species = species;\n  }\n  ['say hello'] () {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n}\n\nclass Human extends Creature {\n  constructor(name, age, species, job) {\n    super(name, age, species);\n    this.job = job;\n    this._portrait = \"assets/images/human.png\";\n  }\n  transform () {\n\n  }\n}\n\nclass Dog extends Creature {\n  constructor(name, age, species, color) {\n    super(name, age, species);\n    this.color = color;\n    this._portrait = \"assets/images/dog.png\";\n  }\n}\n\nclass Vampire extends Human {\n  constructor(name, age, species, title) {\n    super(name, age, species);\n    this.title = title;\n    this._portrait = \"assets/images/vampire.png\";\n  }\n}\n\nclass Werewolf extends Human {\n  constructor(name, age, species, job) {\n    super(name, age, species, job);\n    this._portrait = \"assets/images/werewolf.png\";\n  }\n}\n\nObject.assign(Werewolf.prototype, doHowl);\n\n//# sourceURL=webpack:///./js/classes.js?");

/***/ }),

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ \"./js/templates.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ \"./js/classes.js\");\n\n\n\n\n\nlet obj;\n\nfunction renderDoingBtns () {\n  let doMagicBtn = document.createElement(\"button\");\n  let sayHelloBtn = document.createElement(\"button\");\n  let doTranformBtn = document.createElement(\"button\");\n  let doHowlBtn = document.createElement(\"button\");\n  let getParrentDiv = document.querySelector(\"#properties\");\n\n  getParrentDiv.innerHTML = \"\";\n  doMagicBtn.setAttribute(\"id\", \"magic\");\n  sayHelloBtn.setAttribute(\"id\", \"hello\");\n  doTranformBtn.setAttribute(\"id\", \"transform\");\n  doHowlBtn.setAttribute(\"id\", \"howl\");\n  doMagicBtn.innerText = \"DO MAGIC\";\n  sayHelloBtn.innerText = \"SAY HELLO\"\n  doTranformBtn.innerText = \"TRANSFORM\";\n  doHowlBtn.innerText = \"HOWL\";\n  getParrentDiv.appendChild(doMagicBtn);\n  getParrentDiv.appendChild(sayHelloBtn);\n  getParrentDiv.appendChild(doTranformBtn);\n  getParrentDiv.appendChild(doHowlBtn);\n  document.getElementById(\"transform\").addEventListener(\"click\", changePerson);\n}\n\nfunction changeBtnStyle (currentClick) {\n  let activeBtn = document.querySelector(\".active\");\n  if (currentClick != activeBtn) {\n    currentClick.setAttribute(\"class\", \"protoBtn active\");\n    activeBtn.className = \"protoBtn\";\n  }\n}\n\nfunction doHowl (event) {\n  obj.howl();\n}\n\nfunction doHello (event) {\n  obj['say hello']();\n}\n\nfunction doMagic (event) {\n  _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"][\"do magic\"]();\n}\n\nfunction doFunc (obj) {\n  document.getElementById(\"magic\").addEventListener(\"click\", doMagic);\n  document.getElementById(\"hello\").addEventListener(\"click\", doHello);\n  document.getElementById(\"howl\").addEventListener(\"click\", doHowl);\n}\n\nfunction createProperty (key, value, parent) {\n  let createSpanKey = document.createElement(\"span\");\n  let createSpanValue = document.createElement(\"span\");\n  let createBr = document.createElement(\"br\");\n\n  createSpanValue.setAttribute(\"class\", \"propValue\");\n  createSpanKey.innerText = key;\n  createSpanValue.innerHTML = value;\n  parent.append(createSpanKey);\n  parent.append(createSpanValue);\n  parent.append(createBr);\n}\n\nfunction renderProper (obj) {\n  let parent = document.getElementById(\"properties\");\n  if (obj.name)\n    createProperty(\"\\nname: \", obj.name, parent);\n  if(obj.age)\n    createProperty(\"age: \", obj.age, parent);\n  if (obj.species)\n    createProperty(\"species: \", obj.species, parent);\n  if (obj.job)\n    createProperty(\"job: \", obj.job, parent);\n  if (obj.title) {\n    createProperty(\"title: \", obj.title, parent);\n  }\n  if (obj.color)\n    createProperty(\"color: \", obj.color, parent);\n}\n\nwindow.changeStatus = (button) => {\n  changeBtnStyle(button);\n  switch (button.innerHTML) {\n    case \"human prototype\":\n      renderDoingBtns();\n      document.getElementById(\"hello\").style.visibility = \"visible\";\n      document.getElementById(\"howl\").style.visibility = \"hidden\";\n      obj = new _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"Human\"](\"Linda\", 22, \"human\", \"doctor\");\n      Object.setPrototypeOf(_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"], obj);\n      renderProper(obj);\n      break;\n    case \"vampire prototype\":\n      renderDoingBtns ();\n      document.getElementById(\"transform\").style.visibility = \"hidden\";\n      document.getElementById(\"howl\").style.visibility = \"hidden\";\n      document.getElementById(\"hello\").style.visibility = \"visible\";\n      obj = new _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"Vampire\"](\"Vlad\", 915, \"vampire\", \"unemployed\", \"count\");\n      Object.setPrototypeOf(_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"], obj);\n      renderProper(obj);\n      break;\n    case \"dog prototype\":\n      renderDoingBtns ();\n      document.getElementById(\"transform\").style.visibility = \"hidden\";\n      document.getElementById(\"howl\").style.visibility = \"hidden\";\n      document.getElementById(\"hello\").style.visibility = \"visible\";\n      obj = new _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"Dog\"](\"Fluffy\", 3, \"dog\", \"brown\");\n      Object.setPrototypeOf(_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"], obj);\n      renderProper(obj);\n      break;\n    case \"werewolf prototype\":\n      renderDoingBtns ();\n      document.getElementById(\"hello\").style.visibility = \"visible\";\n      document.getElementById(\"transform\").style.visibility = \"visible\";\n      document.getElementById(\"howl\").style.visibility = \"visible\";\n      obj = new _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"Werewolf\"](\"Linda\", 22, \"werewolf\", \"doctor\");\n      Object.setPrototypeOf(_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"], obj);\n      renderProper(obj);\n      break;\n    default:\n      renderDoingBtns();\n      document.getElementById(\"hello\").style.visibility = \"hidden\";\n      document.getElementById(\"transform\").style.visibility = \"hidden\";\n      document.getElementById(\"howl\").style.visibility = \"hidden\";\n      Object.setPrototypeOf(_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"], Object.prototype);\n  }\n  document.getElementById(\"head\").setAttribute(\"src\", _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"]._getPortrait());\n  doFunc(obj);\n}\n\nfunction changePerson (event) {\n  if (_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"]._getPortrait() == \"assets/images/human.png\") {\n    renderDoingBtns ();\n    document.getElementById(\"hello\").style.visibility = \"visible\";\n    document.getElementById(\"transform\").style.visibility = \"visible\";\n    document.getElementById(\"howl\").style.visibility = \"visible\";\n    obj = new _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"Werewolf\"](\"Linda\", 22, \"werewolf\", \"doctor\");\n    Object.setPrototypeOf(_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"], obj);\n    renderProper(obj);\n    document.getElementById(\"head\").setAttribute(\"src\", _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"]._getPortrait());\n  }\n  else {\n    renderDoingBtns ();\n    document.getElementById(\"hello\").style.visibility = \"visible\";\n    document.getElementById(\"transform\").style.visibility = \"visible\";\n    document.getElementById(\"howl\").style.visibility = \"hidden\";\n    obj = new _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"Human\"](\"Linda\", 22, \"human\", \"doctor\");\n    Object.setPrototypeOf(_classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"], obj);\n    renderProper(obj);\n    document.getElementById(\"head\").setAttribute(\"src\", _classes_js__WEBPACK_IMPORTED_MODULE_1__[\"magician\"]._getPortrait());\n  }\n  doFunc(obj);\n}\n\nrenderDoingBtns();\ndocument.getElementById(\"magic\").addEventListener(\"click\", doMagic);\ndocument.getElementById(\"hello\").style.visibility = \"hidden\";\ndocument.getElementById(\"transform\").style.visibility = \"hidden\";\ndocument.getElementById(\"howl\").style.visibility = \"hidden\";\n\n//# sourceURL=webpack:///./js/init.js?");

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