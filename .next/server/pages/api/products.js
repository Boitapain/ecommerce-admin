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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Product: () => (/* binding */ Product)\n/* harmony export */ });\nconst { Schema , model , models , default: mongoose  } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ProductSchema = new Schema({\n    title: {\n        type: String,\n        requiered: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        requiered: true\n    },\n    images: [\n        {\n            type: String\n        }\n    ],\n    category: {\n        type: mongoose.Types.ObjectId,\n        ref: \"Category\"\n    }\n});\nconst Product = models.Product || model(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxPQUFNLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxTQUFTQyxTQUFRLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMEJBQVU7QUFFdkUsTUFBTUMsZ0JBQWdCLElBQUlOLE9BQU87SUFDN0JPLE9BQU87UUFBQ0MsTUFBTUM7UUFBUUMsV0FBVztJQUFJO0lBQ3JDQyxhQUFhRjtJQUNiRyxPQUFPO1FBQUNKLE1BQU1LO1FBQVFILFdBQVc7SUFBSTtJQUNyQ0ksUUFBUTtRQUFDO1lBQUNOLE1BQU1DO1FBQU07S0FBRTtJQUN4Qk0sVUFBVTtRQUFDUCxNQUFNSixTQUFTWSxNQUFNQztRQUFVQyxLQUFJO0lBQVU7QUFDNUQ7QUFFTyxNQUFNQyxVQUFVakIsT0FBT2lCLFdBQVdsQixNQUFNLFdBQVdLLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzLCBkZWZhdWx0OiBtb25nb29zZSB9ID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgdGl0bGU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpZXJlZDogdHJ1ZX0sXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICBwcmljZToge3R5cGU6IE51bWJlciwgcmVxdWllcmVkOiB0cnVlfSxcbiAgICBpbWFnZXM6IFt7dHlwZTogU3RyaW5nfV0sXG4gICAgY2F0ZWdvcnk6IHt0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCwgcmVmOidDYXRlZ29yeSd9ICxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IG1vZGVscy5Qcm9kdWN0IHx8IG1vZGVsKCdQcm9kdWN0JywgUHJvZHVjdFNjaGVtYSk7XG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJkZWZhdWx0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiUHJvZHVjdFNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpZXJlZCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJpbWFnZXMiLCJjYXRlZ29yeSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Product */ \"(api)/./models/Product.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.find());\n        }\n    }\n    if (method === \"POST\") {\n        const { title , description , price , images , category  } = req.body;\n        const productDoc = await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.create({\n            title,\n            description,\n            price,\n            images,\n            category\n        });\n        res.json(productDoc);\n    }\n    if (method === \"PUT\") {\n        const { title , description , price , images , category , _id  } = req.body;\n        await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.updateOne({\n            _id\n        }, {\n            title,\n            description,\n            price,\n            images,\n            category\n        });\n        res.json(true);\n    }\n    if (method === \"DELETE\") {\n        if (req.query?.id) {\n            await _models_Product__WEBPACK_IMPORTED_MODULE_0__.Product.deleteOne({\n                _id: req.query.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ007QUFFbEMsZUFBZUUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3pDLE1BQU0sRUFBQ0MsT0FBTSxFQUFDLEdBQUdGO0lBQ2pCLE1BQU1GLDhEQUFlQTtJQUVyQixJQUFHSSxXQUFXLE9BQU07UUFDaEIsSUFBR0YsSUFBSUcsT0FBT0MsSUFBRztZQUNiSCxJQUFJSSxLQUFLLE1BQU1SLG9EQUFPQSxDQUFDUyxRQUFRO2dCQUFDQyxLQUFJUCxJQUFJRyxNQUFNQztZQUFFO1FBQ3BELE9BQ0k7WUFDQUgsSUFBSUksS0FBSyxNQUFNUixvREFBT0EsQ0FBQ1c7UUFDM0I7SUFDSjtJQUVBLElBQUdOLFdBQVcsUUFBTztRQUNqQixNQUFNLEVBQUNPLE1BQUssRUFBQ0MsWUFBVyxFQUFDQyxNQUFLLEVBQUNDLE9BQU0sRUFBQ0MsU0FBUSxFQUFDLEdBQUdiLElBQUljO1FBQ3RELE1BQU1DLGFBQWMsTUFBTWxCLG9EQUFPQSxDQUFDbUIsT0FBTztZQUNyQ1A7WUFBTUM7WUFBWUM7WUFBTUM7WUFBT0M7UUFDbkM7UUFDQVosSUFBSUksS0FBS1U7SUFDYjtJQUVBLElBQUdiLFdBQVcsT0FBTTtRQUNoQixNQUFNLEVBQUNPLE1BQUssRUFBQ0MsWUFBVyxFQUFDQyxNQUFLLEVBQUNDLE9BQU0sRUFBQ0MsU0FBUSxFQUFDTixJQUFHLEVBQUMsR0FBR1AsSUFBSWM7UUFDMUQsTUFBTWpCLG9EQUFPQSxDQUFDb0IsVUFBVTtZQUFDVjtRQUFHLEdBQUU7WUFBQ0U7WUFBT0M7WUFBYUM7WUFBT0M7WUFBUUM7UUFBUTtRQUMxRVosSUFBSUksS0FBSztJQUNiO0lBRUEsSUFBR0gsV0FBVyxVQUFTO1FBQ25CLElBQUdGLElBQUlHLE9BQU9DLElBQUc7WUFDYixNQUFNUCxvREFBT0EsQ0FBQ3FCLFVBQVU7Z0JBQUNYLEtBQUlQLElBQUlHLE1BQU1DO1lBQUU7WUFDekNILElBQUlJLEtBQUs7UUFDYjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvcHJvZHVjdHMuanM/NDljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkAvbW9kZWxzL1Byb2R1Y3RcIjtcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpe1xuICAgIGNvbnN0IHttZXRob2R9ID0gcmVxO1xuICAgIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xuXG4gICAgaWYobWV0aG9kID09PSBcIkdFVFwiKXsgICBcbiAgICAgICAgaWYocmVxLnF1ZXJ5Py5pZCl7XG4gICAgICAgICAgICByZXMuanNvbihhd2FpdCBQcm9kdWN0LmZpbmRPbmUoe19pZDpyZXEucXVlcnkuaWR9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKG1ldGhvZCA9PT0gXCJQT1NUXCIpe1xuICAgICAgICBjb25zdCB7dGl0bGUsZGVzY3JpcHRpb24scHJpY2UsaW1hZ2VzLGNhdGVnb3J5fSA9IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCBwcm9kdWN0RG9jID0gIGF3YWl0IFByb2R1Y3QuY3JlYXRlKHtcbiAgICAgICAgICAgIHRpdGxlLGRlc2NyaXB0aW9uLHByaWNlLGltYWdlcyxjYXRlZ29yeVxuICAgICAgICB9KVxuICAgICAgICByZXMuanNvbihwcm9kdWN0RG9jKTtcbiAgICB9XG5cbiAgICBpZihtZXRob2QgPT09ICdQVVQnKXtcbiAgICAgICAgY29uc3Qge3RpdGxlLGRlc2NyaXB0aW9uLHByaWNlLGltYWdlcyxjYXRlZ29yeSxfaWR9ID0gcmVxLmJvZHk7XG4gICAgICAgIGF3YWl0IFByb2R1Y3QudXBkYXRlT25lKHtfaWR9LHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZXMsIGNhdGVnb3J5fSk7XG4gICAgICAgIHJlcy5qc29uKHRydWUpO1xuICAgIH1cblxuICAgIGlmKG1ldGhvZCA9PT0gXCJERUxFVEVcIil7XG4gICAgICAgIGlmKHJlcS5xdWVyeT8uaWQpe1xuICAgICAgICAgICAgYXdhaXQgUHJvZHVjdC5kZWxldGVPbmUoe19pZDpyZXEucXVlcnkuaWR9KTtcbiAgICAgICAgICAgIHJlcy5qc29uKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcm9kdWN0IiwibW9uZ29vc2VDb25uZWN0IiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImpzb24iLCJmaW5kT25lIiwiX2lkIiwiZmluZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlcyIsImNhdGVnb3J5IiwiYm9keSIsInByb2R1Y3REb2MiLCJjcmVhdGUiLCJ1cGRhdGVPbmUiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

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