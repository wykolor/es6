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
	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	{
	  let str = "\\u(20bb7)abc";
	  for (let code of str) {
	    console.log("code=", code);
	  }
	}

	{
	  let str = "string";
	  console.log("includes:", str.includes("r"));
	  console.log("str:", str.startsWith("str"));
	  console.log("end:", str.endsWith("ng"));
	  let newstr = str.repeat(2);
	  console.log(newstr);
	}

	{
	  let name = "kolor";
	  let info = "she is a girl";
	  let long = `I'm ${name} ,${info}`;
	  console.log(long);
	}
	{
	  console.log("1".padStart(2, '0'));
	  console.log("1".padEnd(3, '0'));
	}


/***/ })
/******/ ]);