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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
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

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Product: () => (/* binding */ Product)\n/* harmony export */ });\nconst { Schema , model , models  } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ProductSchema = new Schema({\n    title: {\n        type: String,\n        requiered: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        requiered: true\n    }\n});\nconst Product = models.Product || model(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxPQUFNLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRXBELE1BQU1DLGdCQUFnQixJQUFJSixPQUFPO0lBQzdCSyxPQUFPO1FBQUNDLE1BQU1DO1FBQVFDLFdBQVc7SUFBSTtJQUNyQ0MsYUFBYUY7SUFDYkcsT0FBTztRQUFDSixNQUFNSztRQUFRSCxXQUFXO0lBQUk7QUFDekM7QUFFTyxNQUFNSSxVQUFVVixPQUFPVSxXQUFXWCxNQUFNLFdBQVdHLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZywgcmVxdWllcmVkOiB0cnVlfSxcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICAgIHByaWNlOiB7dHlwZTogTnVtYmVyLCByZXF1aWVyZWQ6IHRydWV9XG59KTtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSBtb2RlbHMuUHJvZHVjdCB8fCBtb2RlbCgnUHJvZHVjdCcsIFByb2R1Y3RTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwicmVxdWlyZSIsIlByb2R1Y3RTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aWVyZWQiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiTnVtYmVyIiwiUHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Product */ \"(api)/./models/Product.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.find());\n        }\n    }\n    if (method === \"POST\") {\n        const { title , description , price  } = req.body;\n        const productDoc = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.create({\n            title,\n            description,\n            price\n        });\n        res.json(productDoc);\n    }\n    if (method === \"PUT\") {\n        const { title , description , price , _id  } = req.body;\n        await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.updateOne({\n            _id\n        }, {\n            title,\n            description,\n            price\n        });\n        res.json(true);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ007QUFHbEMsZUFBZUUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3pDLE1BQU0sRUFBQ0MsT0FBTSxFQUFDLEdBQUdGO0lBQ2pCLE1BQU1GLDhEQUFlQTtJQUVyQixJQUFHSSxXQUFXLE9BQU07UUFDaEIsSUFBR0YsSUFBSUcsT0FBT0MsSUFBRztZQUNiSCxJQUFJSSxLQUFLLE1BQU1SLG9EQUFPQSxDQUFDUyxRQUFRO2dCQUFDQyxLQUFJUCxJQUFJRyxNQUFNQztZQUFFO1FBQ3BELE9BQ0k7WUFDQUgsSUFBSUksS0FBSyxNQUFNUixvREFBT0EsQ0FBQ1c7UUFDM0I7SUFDSjtJQUVBLElBQUdOLFdBQVcsUUFBTztRQUNqQixNQUFNLEVBQUNPLE1BQUssRUFBQ0MsWUFBVyxFQUFDQyxNQUFLLEVBQUMsR0FBR1gsSUFBSVk7UUFDdEMsTUFBTUMsYUFBYyxNQUFNaEIsb0RBQU9BLENBQUNpQixPQUFPO1lBQ3JDTDtZQUFNQztZQUFZQztRQUN0QjtRQUNBVixJQUFJSSxLQUFLUTtJQUNiO0lBRUEsSUFBR1gsV0FBVyxPQUFNO1FBQ2hCLE1BQU0sRUFBQ08sTUFBSyxFQUFDQyxZQUFXLEVBQUNDLE1BQUssRUFBQ0osSUFBRyxFQUFDLEdBQUdQLElBQUlZO1FBQzFDLE1BQU1mLG9EQUFPQSxDQUFDa0IsVUFBVTtZQUFDUjtRQUFHLEdBQUU7WUFBQ0U7WUFBT0M7WUFBYUM7UUFBSztRQUN4RFYsSUFBSUksS0FBSztJQUNiO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvcHJvZHVjdHMuanM/NDljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkAvbW9kZWxzL1Byb2R1Y3RcIjtcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcyl7XG4gICAgY29uc3Qge21ldGhvZH0gPSByZXE7XG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XG5cbiAgICBpZihtZXRob2QgPT09IFwiR0VUXCIpeyAgIFxuICAgICAgICBpZihyZXEucXVlcnk/LmlkKXtcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZE9uZSh7X2lkOnJlcS5xdWVyeS5pZH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmVzLmpzb24oYXdhaXQgUHJvZHVjdC5maW5kKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYobWV0aG9kID09PSBcIlBPU1RcIil7XG4gICAgICAgIGNvbnN0IHt0aXRsZSxkZXNjcmlwdGlvbixwcmljZX0gPSByZXEuYm9keTtcbiAgICAgICAgY29uc3QgcHJvZHVjdERvYyA9ICBhd2FpdCBQcm9kdWN0LmNyZWF0ZSh7XG4gICAgICAgICAgICB0aXRsZSxkZXNjcmlwdGlvbixwcmljZVxuICAgICAgICB9KVxuICAgICAgICByZXMuanNvbihwcm9kdWN0RG9jKTtcbiAgICB9XG5cbiAgICBpZihtZXRob2QgPT09ICdQVVQnKXtcbiAgICAgICAgY29uc3Qge3RpdGxlLGRlc2NyaXB0aW9uLHByaWNlLF9pZH0gPSByZXEuYm9keTtcbiAgICAgICAgYXdhaXQgUHJvZHVjdC51cGRhdGVPbmUoe19pZH0se3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2V9KTtcbiAgICAgICAgcmVzLmpzb24odHJ1ZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcm9kdWN0IiwibW9uZ29vc2VDb25uZWN0IiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImpzb24iLCJmaW5kT25lIiwiX2lkIiwiZmluZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImJvZHkiLCJwcm9kdWN0RG9jIiwiY3JlYXRlIiwidXBkYXRlT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();