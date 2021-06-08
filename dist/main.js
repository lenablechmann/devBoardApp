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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHamburgerMenu\": () => (/* binding */ createHamburgerMenu),\n/* harmony export */   \"deleteHamburgerMenu\": () => (/* binding */ deleteHamburgerMenu)\n/* harmony export */ });\nfunction createHamburgerMenu() {\n    const topNav = document.getElementsByClassName(\"top-nav\");\n    const hamburger = document.getElementsByClassName(\"hamburger-dropdown\")\n    if (hamburger.length < 1) {\n        const hamburgerHTML = `\n            <section class=\"hamburger-dropdown\">\n                <ul class=\"project-list-dropdown\">\n                    <li class=\"project-link\" id=\"project-1\">Project 1</li>\n                    <li class=\"project-link\" id=\"project-2\">Project 2</li>\n                    <li class=\"project-link\" id=\"project-3\">Project 3</li>\n                    <li class=\"create-project\"> \n                        New Project\n                    </li>\n            </section>\n        `;\n        topNav[0].insertAdjacentHTML('afterend', hamburgerHTML);\n    }\n\n}\n\nfunction deleteHamburgerMenu() {\n    const hamburger = document.getElementsByClassName(\"hamburger-dropdown\")\n    if (hamburger.length >= 1) {\n        hamburger[0].innerHTML = '';\n        hamburger[0].remove();\n    }\n\n}\n\n\n//# sourceURL=webpack://devboardapp/./src/hamburgerMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburgerMenu.js */ \"./src/hamburgerMenu.js\");\n\n\n// make sure the DOM is fully loaded first.\ndocument.addEventListener('DOMContentLoaded', function(){\n\n    // dealing with hamburger menu dropdown creation and deletion\n    const hamburgerMenu = document.getElementById('hamburger-menu');\n    hamburgerMenu.addEventListener('click', function(){\n        _hamburgerMenu_js__WEBPACK_IMPORTED_MODULE_0__.createHamburgerMenu();\n    });\n    // remove dropdown if user clicks outside\n    const hamburger = document.getElementsByClassName(\"hamburger-dropdown\")[0];\n    if (hamburger) {\n        console.log(\"dropdown exists\");\n    }\n    \n    window.onclick = function(event) {\n        if (!event.target.matches('.hamburger-menu')) {\n            console.log(\"youve clicked outside.\");\n        }\n      }\n});\n\n\n\n//# sourceURL=webpack://devboardapp/./src/index.js?");

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