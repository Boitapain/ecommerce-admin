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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
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

/***/ "(api)/./models/Category.js":
/*!****************************!*\
  !*** ./models/Category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Category: () => (/* binding */ Category)\n/* harmony export */ });\nconst { model , models , Schema , default: mongoose  } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst CategorySchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    parent: {\n        type: mongoose.Types.ObjectId,\n        required: false,\n        ref: \"Category\"\n    },\n    properties: [\n        {\n            type: Object\n        }\n    ]\n});\nconst Category = models?.Category || model(\"Category\", CategorySchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2F0ZWdvcnkuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBQ0EsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBRUMsU0FBU0MsU0FBUSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRXRFLE1BQU1DLGlCQUFrQixJQUFJSixPQUFPO0lBQy9CSyxNQUFNO1FBQUNDLE1BQUtDO1FBQU9DLFVBQVM7SUFBSTtJQUNoQ0MsUUFBUTtRQUFDSCxNQUFLSixTQUFTUSxNQUFNQztRQUFVSCxVQUFTO1FBQU9JLEtBQUk7SUFBVTtJQUNyRUMsWUFBWTtRQUFDO1lBQUNQLE1BQUtRO1FBQU07S0FBRTtBQUMvQjtBQUVPLE1BQU1DLFdBQVdoQixRQUFRZ0IsWUFBWWpCLE1BQU0sWUFBWU0sZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vbW9kZWxzL0NhdGVnb3J5LmpzPzRjODEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge21vZGVsLCBtb2RlbHMsIFNjaGVtYSwgZGVmYXVsdDogbW9uZ29vc2UgfSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSAgbmV3IFNjaGVtYSh7XG4gICAgbmFtZToge3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWV9LFxuICAgIHBhcmVudDoge3R5cGU6bW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIHJlcXVpcmVkOmZhbHNlLCByZWY6J0NhdGVnb3J5J30sXG4gICAgcHJvcGVydGllczogW3t0eXBlOk9iamVjdH1dLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IG1vZGVscz8uQ2F0ZWdvcnkgfHwgbW9kZWwoJ0NhdGVnb3J5JywgQ2F0ZWdvcnlTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsImRlZmF1bHQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJDYXRlZ29yeVNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYXJlbnQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicHJvcGVydGllcyIsIk9iamVjdCIsIkNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Category.js\n");

/***/ }),

/***/ "(api)/./pages/api/categories.js":
/*!*********************************!*\
  !*** ./pages/api/categories.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Category */ \"(api)/./models/Category.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n    if (method === \"GET\") {\n        res.json(await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.find().populate(\"parent\"));\n    }\n    if (method === \"POST\") {\n        const { name , parentCategory , properties  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.create({\n            name,\n            parent: parentCategory || undefined,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"PUT\") {\n        const { name , parentCategory , properties , _id  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.updateOne({\n            _id\n        }, {\n            name,\n            parent: parentCategory || undefined,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"DELETE\") {\n        const { _id  } = req.query;\n        await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.deleteOne({\n            _id\n        });\n        res.json(\"ok\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDSTtBQUVsQyxlQUFlRSxPQUFPQyxHQUFHLEVBQUVDLEdBQUc7SUFDekMsTUFBTSxFQUFDQyxPQUFNLEVBQUMsR0FBR0Y7SUFDakIsTUFBTUYsOERBQWVBO0lBRXJCLElBQUdJLFdBQVcsT0FBTTtRQUNoQkQsSUFBSUUsS0FBSyxNQUFNTixzREFBUUEsQ0FBQ08sT0FBT0MsU0FBUztJQUM1QztJQUVBLElBQUdILFdBQVcsUUFBTztRQUNqQixNQUFNLEVBQUNJLEtBQUksRUFBRUMsZUFBYyxFQUFFQyxXQUFVLEVBQUMsR0FBR1IsSUFBSVM7UUFDL0MsTUFBTUMsY0FBYyxNQUFNYixzREFBUUEsQ0FBQ2MsT0FBTztZQUN0Q0w7WUFDQU0sUUFBT0wsa0JBQWtCTTtZQUN6Qkw7UUFDSjtRQUNBUCxJQUFJRSxLQUFLTztJQUNiO0lBRUEsSUFBR1IsV0FBVyxPQUFNO1FBQ2hCLE1BQU0sRUFBQ0ksS0FBSSxFQUFFQyxlQUFjLEVBQUVDLFdBQVUsRUFBRU0sSUFBRyxFQUFDLEdBQUdkLElBQUlTO1FBQ3BELE1BQU1DLGNBQWMsTUFBTWIsc0RBQVFBLENBQUNrQixVQUFVO1lBQUNEO1FBQUcsR0FBRTtZQUMvQ1I7WUFDQU0sUUFBT0wsa0JBQWtCTTtZQUN6Qkw7UUFDSjtRQUNBUCxJQUFJRSxLQUFLTztJQUNiO0lBRUEsSUFBR1IsV0FBUyxVQUFTO1FBQ2pCLE1BQU0sRUFBQ1ksSUFBRyxFQUFDLEdBQUdkLElBQUlnQjtRQUNsQixNQUFNbkIsc0RBQVFBLENBQUNvQixVQUFVO1lBQUNIO1FBQUc7UUFDN0JiLElBQUlFLEtBQUs7SUFDYjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL2NhdGVnb3JpZXMuanM/NjhkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCJAL21vZGVscy9DYXRlZ29yeVwiO1xuaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcyl7XG4gICAgY29uc3Qge21ldGhvZH0gPSByZXE7XG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XG5cbiAgICBpZihtZXRob2QgPT09ICdHRVQnKXtcbiAgICAgICAgcmVzLmpzb24oYXdhaXQgQ2F0ZWdvcnkuZmluZCgpLnBvcHVsYXRlKCdwYXJlbnQnKSlcbiAgICB9XG5cbiAgICBpZihtZXRob2QgPT09ICdQT1NUJyl7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBwYXJlbnRDYXRlZ29yeSwgcHJvcGVydGllc30gPSByZXEuYm9keTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlEb2MgPSBhd2FpdCBDYXRlZ29yeS5jcmVhdGUoe1xuICAgICAgICAgICAgbmFtZSwgXG4gICAgICAgICAgICBwYXJlbnQ6cGFyZW50Q2F0ZWdvcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5qc29uKGNhdGVnb3J5RG9jKTtcbiAgICB9XG5cbiAgICBpZihtZXRob2QgPT09ICdQVVQnKXtcbiAgICAgICAgY29uc3Qge25hbWUsIHBhcmVudENhdGVnb3J5LCBwcm9wZXJ0aWVzLCBfaWR9ID0gcmVxLmJvZHk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RG9jID0gYXdhaXQgQ2F0ZWdvcnkudXBkYXRlT25lKHtfaWR9LHtcbiAgICAgICAgICAgIG5hbWUsIFxuICAgICAgICAgICAgcGFyZW50OnBhcmVudENhdGVnb3J5IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXMuanNvbihjYXRlZ29yeURvYyk7XG4gICAgfVxuXG4gICAgaWYobWV0aG9kPT09XCJERUxFVEVcIil7XG4gICAgICAgIGNvbnN0IHtfaWR9ID0gcmVxLnF1ZXJ5O1xuICAgICAgICBhd2FpdCBDYXRlZ29yeS5kZWxldGVPbmUoe19pZH0pO1xuICAgICAgICByZXMuanNvbignb2snKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJtb25nb29zZUNvbm5lY3QiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJqc29uIiwiZmluZCIsInBvcHVsYXRlIiwibmFtZSIsInBhcmVudENhdGVnb3J5IiwicHJvcGVydGllcyIsImJvZHkiLCJjYXRlZ29yeURvYyIsImNyZWF0ZSIsInBhcmVudCIsInVuZGVmaW5lZCIsIl9pZCIsInVwZGF0ZU9uZSIsInF1ZXJ5IiwiZGVsZXRlT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories.js"));
module.exports = __webpack_exports__;

})();