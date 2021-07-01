/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hamburgerMenu.js":
/*!******************************!*\
  !*** ./src/hamburgerMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHamburgerMenu\": () => (/* binding */ createHamburgerMenu),\n/* harmony export */   \"deleteHamburgerMenu\": () => (/* binding */ deleteHamburgerMenu)\n/* harmony export */ });\nfunction createHamburgerMenu(jsonText) {\n\t// first create the html for the dropdown menu dynamically (will take json in the end)\n\t// write a function that parses this json and only takes project names\n\t// and puts them into html elements.\n\t//  which are then put into the page as hamburger menu. This will make sure\n\t//  that the real projects of the user are loaded.\n\t//  Meaning when this function is called, it needs to get called with a json\n\t//  Meaning this createHamburgerMenu() can be tested with jest.\n\n\t/* a possible json example for this app\n    {\n  \"id\": 83,\n  \"belongsToUser\": \"a8934uuo3e6267\",\n  \"projects\": [{\n      \"name\": \"todo app\", \n      \"issues\": [\n\t{\n\t  \"name\": \"Create wireframe\", \n\t  \"status\": \"review\"\n\t  \"tags\": [html\"blocker\", \"independent\"]\n\n\t}, {\n\t  \"name\": \"Figma design\", \n\t  \"status\": \"todo\"\n\t  \"tags\": [\"blocker\", \"dependent\"]\n\t}\n      ]\n    }, {\n      \"issues\": [\n\t{\n\t  \"name\": \"Create wireframe\", \n\t  \"status\": \"review\"\n\t  \"tags\": [\"blocker\", \"independent\"]\n\n\t}, {\n\t  \"name\": \"Figma design\", \n\t  \"status\": \"todo\"\n\t  \"tags\": [\"blocker\", \"dependent\"]\n\t}\n      ]\n\t}]\n    }]\n}\n*/\n\tconsole.log(\"you've clicked the menu\")\n}\n\nfunction deleteHamburgerMenu() {\n\tconst hamburger = document.getElementsByClassName(\"hamburger-dropdown\")\n\tif (hamburger.length >= 1) {\n\t\thamburger[0].innerHTML = '';\n\t\thamburger[0].remove();\n\t}\n\n}\n\n\n//# sourceURL=webpack://devboardapp/./src/hamburgerMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburgerMenu.js */ \"./src/hamburgerMenu.js\");\n\n\n// make sure the DOM is fully loaded first.\ndocument.addEventListener('DOMContentLoaded', function(){\n\n    // dealing with hamburger menu dropdown creation and deletion\n    const hamburgerMenu = document.getElementById('hamburger-menu');\n    hamburgerMenu.addEventListener('click', function(){\n        _hamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__.createHamburgerMenu();\n        const hamburger = document.getElementsByClassName(\"hamburger-dropdown\");\n    });\n\n    // a different approach to the dropdown menu, Plan:\n    // first create the html for the dropdown menu dynamically (will take json in the end)\n    // create onhover classes for the dropdown menu\n    // eventlistener onclick for showing this menu\n    // eventlistener for outside clicks to delete the show class.\n    \n}); \n\n\n\n//# sourceURL=webpack://devboardapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;