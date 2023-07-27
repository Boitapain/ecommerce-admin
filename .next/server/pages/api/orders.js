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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mongooseConnect: () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const URI = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(URI);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDO0lBQ1osSUFBR0QsNERBQW1CRSxDQUFDQyxlQUFlLEdBQUU7UUFDcEMsT0FBT0gsMERBQW1CRSxDQUFDRTtJQUMvQixPQUNJO1FBQ0EsTUFBTUMsTUFBTUMsUUFBUUMsSUFBSUM7UUFDeEIsT0FBT1IsdURBQWdCUyxDQUFDSjtJQUM1QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vbGliL21vbmdvb3NlLmpzPzE2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9uZ29vc2VDb25uZWN0KCl7XG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKXtcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnN0IFVSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChVUkkpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vbmdvb3NlQ29ubmVjdCIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiYXNQcm9taXNlIiwiVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Order: () => (/* binding */ Order)\n/* harmony export */ });\nconst { Schema , model , models  } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst OrderSchema = new Schema({\n    line_items: Object,\n    name: String,\n    email: String,\n    city: String,\n    postalCode: String,\n    streetAddress: String,\n    country: String,\n    paid: Boolean\n}, {\n    timestamps: true\n});\nconst Order = models.Order || model(\"Order\", OrderSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEsT0FBTSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUVwRCxNQUFNQyxjQUFjLElBQUlKLE9BQU87SUFDM0JLLFlBQVdDO0lBQ1hDLE1BQU1DO0lBQ05DLE9BQU9EO0lBQ1BFLE1BQU1GO0lBQ05HLFlBQVlIO0lBQ1pJLGVBQWVKO0lBQ2ZLLFNBQVNMO0lBQ1RNLE1BQUtDO0FBQ1QsR0FBRztJQUNDQyxZQUFZO0FBQ2hCO0FBRU8sTUFBTUMsUUFBUWYsT0FBT2UsU0FBU2hCLE1BQU0sU0FBU0csYUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL21vZGVscy9PcmRlci5qcz9lYjI5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IE9yZGVyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgbGluZV9pdGVtczpPYmplY3QsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGVtYWlsOiBTdHJpbmcsXG4gICAgY2l0eTogU3RyaW5nLFxuICAgIHBvc3RhbENvZGU6IFN0cmluZyxcbiAgICBzdHJlZXRBZGRyZXNzOiBTdHJpbmcsXG4gICAgY291bnRyeTogU3RyaW5nLFxuICAgIHBhaWQ6Qm9vbGVhbixcbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBPcmRlciA9IG1vZGVscy5PcmRlciB8fCBtb2RlbCgnT3JkZXInLCBPcmRlclNjaGVtYSkiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJyZXF1aXJlIiwiT3JkZXJTY2hlbWEiLCJsaW5lX2l0ZW1zIiwiT2JqZWN0IiwibmFtZSIsIlN0cmluZyIsImVtYWlsIiwiY2l0eSIsInBvc3RhbENvZGUiLCJzdHJlZXRBZGRyZXNzIiwiY291bnRyeSIsInBhaWQiLCJCb29sZWFuIiwidGltZXN0YW1wcyIsIk9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Order */ \"(api)/./models/Order.js\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    res.json(await _models_Order__WEBPACK_IMPORTED_MODULE_1__.Order.find().sort({\n        createdAt: -1\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUNWO0FBRXhCLGVBQWVFLFFBQVFDLEdBQUcsRUFBQ0MsR0FBRztJQUN6QyxNQUFNSiw4REFBZUE7SUFDckJJLElBQUlDLEtBQUssTUFBTUosZ0RBQUtBLENBQUNLLE9BQU9DLEtBQUs7UUFBQ0MsV0FBVyxDQUFDO0lBQUM7QUFDbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvb3JkZXJzLmpzPzFhODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCJAL21vZGVscy9PcmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xuICAgIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xuICAgIHJlcy5qc29uKGF3YWl0IE9yZGVyLmZpbmQoKS5zb3J0KHtjcmVhdGVkQXQ6IC0xfSkpO1xufSJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJPcmRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uIiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders.js"));
module.exports = __webpack_exports__;

})();