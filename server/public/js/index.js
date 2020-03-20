/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// require("./class/01_let_const");
	// require("./class/02_structure_assignment")
	// require("./class/03_reg_extension");
	// require("./class/04_string_extension");
	// require("./class/05_number_extension");
	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	{
	    let arr = Array.of(3, 4, 5, 4);
	    console.log(arr);
	    let empty = Array.of();
	    console.log(empty);

	} {
	    let p = document.querySelectorAll("p");
	    let pArr = Array.from(p);
	    pArr.forEach(function (item) {
	        console.log(item.textContent)
	    })
	    console.log(Array.from([1, 2, 3], item=>item*2))
	    
	}

/***/ })
/******/ ]);