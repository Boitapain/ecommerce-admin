"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handle(req, res) {\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    form.parse(req, (err, fields, files)=>{\n        console.log(files.lenght);\n        res.json(\"ok\");\n    });\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsT0FBT0MsR0FBRyxFQUFDQyxHQUFHO0lBQ3hDLE1BQU1DLE9BQU8sSUFBSUosd0RBQWVLO0lBQ2hDRCxLQUFLRSxNQUFNSixLQUFLLENBQUNLLEtBQUtDLFFBQVFDO1FBQzFCQyxRQUFRQyxJQUFJRixNQUFNRztRQUNsQlQsSUFBSVUsS0FBSztJQUNiO0FBQ0o7QUFFTyxNQUFNQyxTQUFTO0lBQ2xCQyxLQUFLO1FBQUNDLFlBQVk7SUFBSztBQUMzQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL3VwbG9hZC5qcz81NTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdWx0aXBhcnR5IGZyb20gXCJtdWx0aXBhcnR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEscmVzKXtcbiAgICBjb25zdCBmb3JtID0gbmV3IG11bHRpcGFydHkuRm9ybSgpO1xuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVzLmxlbmdodCk7XG4gICAgICAgIHJlcy5qc29uKCdvaycpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge2JvZHlQYXJzZXI6IGZhbHNlfVxufSJdLCJuYW1lcyI6WyJtdWx0aXBhcnR5IiwiaGFuZGxlIiwicmVxIiwicmVzIiwiZm9ybSIsIkZvcm0iLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImxlbmdodCIsImpzb24iLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();