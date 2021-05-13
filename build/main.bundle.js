(self["webpackChunkwebpack_devserver"] = self["webpackChunkwebpack_devserver"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

console.log("这是main页面");
__webpack_require__.e(/*! import() | foo */ "foo").then(__webpack_require__.bind(__webpack_require__, /*! ./foo */ "./src/foo.js")).then(function (res) {
  console.log("动态导入foo");
  console.log(res.sum(1, 10));
});
__webpack_require__.e(/*! import() | foo2 */ "foo2").then(__webpack_require__.bind(__webpack_require__, /*! ./foo2 */ "./src/foo2.js")).then(function (res) {
  console.log("动态导入foo2");
  console.log(res.sub(1, 10));
});

/***/ })

},
0,[["./src/main.js","jlu-main"]]]);
//# sourceMappingURL=main.bundle.js.map