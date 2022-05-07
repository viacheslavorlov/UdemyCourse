/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script2.js":
/*!********************!*\
  !*** ./script2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sayHello),
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "sayHi": () => (/* binding */ sayHi),
/* harmony export */   "two": () => (/* binding */ two)
/* harmony export */ });


let one = 1; // экспорт переменной

let two = 2;

 // экспорт переменной 2 вариант - именованный

function sayHi() {
    console.log('Hello!');
}

function sayHello() {
    console.log('Hi!');
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script2 */ "./script2.js");
//импортирует с изменением названия
// импортирует с тем же названием
// импортирует как объект с методами
 // импортирует дефолтный экспорт

//если файл подключается напрямую в index.html -нужно прописывать расширение файла

console.log(`${_script2__WEBPACK_IMPORTED_MODULE_0__.one} and ${_script2__WEBPACK_IMPORTED_MODULE_0__.two}`);

console.log(`${_script2__WEBPACK_IMPORTED_MODULE_0__.one} and ${_script2__WEBPACK_IMPORTED_MODULE_0__.two}`);

_script2__WEBPACK_IMPORTED_MODULE_0__.sayHi();

console.log(_script2__WEBPACK_IMPORTED_MODULE_0__);

(0,_script2__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map