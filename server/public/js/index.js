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
	__webpack_require__(2)

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// 结构赋值
	{
	  let a, b, rest;
	  [a, b] = [1, 2];
	  console.log(a, b);
	}

	{
	  let a, b, rest;
	  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
	  console.log(a, b, rest);
	}

	{
	  let a, b;
	  ({ a, b } = {
	    a: 1,
	    b: 2
	  });
	  console.log(a, b);
	}

	{
	  let a, b, c, rest;
	  [a, b, c = 3] = [1, 2];
	  console.log(a, b, c);
	}

	{
	  // 结构赋值应用于值的交换
	  let a = 1,
	    b = 2;
	  [a, b] = [b, a];
	  console.log(a, b); // 2 1
	}

	{
	  // 解构赋值应用于对于返回值的单独获取
	  function foo() {
	    return [1, 2];
	  }
	  let a, b;
	  [a, b] = foo();
	  console.log(a, b);
	}

	{
	  function foo() {
	    return [1, 2, 3, 4, 5];
	  }
	  let a, b;
	  [a, , , b] = foo();
	  console.log(a, b);
	}
	{
	  function foo() {
	    return [1, 2, 3, 4, 5];
	  }
	  let a, b;
	  [a, , ...b] = foo();
	  console.log(a, b);
	}

	{
	  let obj = {
	    p: 123,
	    q: true
	  };
	  let { p, q } = obj;
	  console.log(p, q);
	  p = 12; // 不会真正更改到原对象
	  console.log(p, q);
	  console.log(obj); // { p: 123,q: true}
	}

	{
	  let { a = 10, b = 5 } = { a: 3, c: 12 };
	  console.log(a, b); // 3,5
	}
	{
	  let data = {
	    title: "kolor",
	    desc: [
	      {
	        title: "this is a kolor",
	        age: 12
	      }
	    ],
	    info: {
	      title: "哈哈啊哈"
	    }
	  };
	  let {
	    title: Atitle,
	    desc: [{ title: Btitle }],
	    info: { title: Ctitle }
	  } = data;
	  console.log(Atitle, Btitle, Ctitle);
	}


/***/ })
/******/ ]);