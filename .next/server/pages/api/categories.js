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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "@auth/mongodb-adapter":
/*!****************************************!*\
  !*** external "@auth/mongodb-adapter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@auth/mongodb-adapter");;

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDNUQ7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxJQUFJQyxhQUFhO0lBQzVCLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVBLE1BQU1DLE1BQU1KLFFBQVFDLElBQUlDO0FBQ3hCLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MscUJBQXFCO1FBQy9CSCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsT0FBT0Msc0JBQXNCSCxPQUFPSTtJQUN0QztJQUNBSCxnQkFBZ0JDLE9BQU9DO0FBQ3pCLE9BQU8sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVGLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xufVxuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IG9wdGlvbnMgPSB7fTtcblxubGV0IGNsaWVudDtcbmxldCBjbGllbnRQcm9taXNlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

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

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isAdminRequest: () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"@auth/mongodb-adapter\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__]);\n_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst adminEmail = [\n    \"vincent.bullion455666@gmail.com\",\n    \"ecomad708@gmail.com\"\n];\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    callbacks: {\n        session: ({ session , token , user  })=>{\n            if (adminEmail.includes(session?.user?.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, authOptions);\n    if (!adminEmail.includes(session?.user?.email)) {\n        res.status(401);\n        res.end();\n        throw \"not an admin\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNhO0FBQ0E7QUFDQztBQUV2RCxNQUFNSyxhQUFhO0lBQUM7SUFBbUM7Q0FBc0I7QUFFdEUsTUFBTUMsY0FBYztJQUN6QkMsV0FBVztRQUNUSCxpRUFBY0EsQ0FBQztZQUNiSSxVQUFVQyxRQUFRQyxJQUFJQztZQUN0QkMsY0FBY0gsUUFBUUMsSUFBSUc7UUFDNUI7S0FDRDtJQUNEQyxTQUFTYixxRUFBY0EsQ0FBQ0Qsb0RBQWFBO0lBQ3JDZSxXQUFVO1FBQ1JDLFNBQVMsQ0FBQyxFQUFDQSxRQUFPLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFDO1lBQzlCLElBQUliLFdBQVdjLFNBQVNILFNBQVNFLE1BQU1FLFFBQU87Z0JBQzVDLE9BQU9KO1lBQ1QsT0FBTztnQkFDTCxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0FBQ0YsRUFBQztBQUVELGlFQUFlZCxnREFBUUEsQ0FBQ0ksWUFBWUEsRUFBQztBQUU5QixlQUFlZSxlQUFlQyxHQUFHLEVBQUNDLEdBQUc7SUFDMUMsTUFBTVAsVUFBVSxNQUFNYiwyREFBZ0JBLENBQUNtQixLQUFJQyxLQUFJakI7SUFDL0MsSUFBSSxDQUFDRCxXQUFXYyxTQUFTSCxTQUFTRSxNQUFNRSxRQUFPO1FBQzdDRyxJQUFJQyxPQUFPO1FBQ1hELElBQUlFO1FBQ0osTUFBTTtJQUNSO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnQC9saWIvbW9uZ29kYidcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQGF1dGgvbW9uZ29kYi1hZGFwdGVyJ1xuaW1wb3J0IE5leHRBdXRoLCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXG5cbmNvbnN0IGFkbWluRW1haWwgPSBbJ3ZpbmNlbnQuYnVsbGlvbjQ1NTY2NkBnbWFpbC5jb20nLCAnZWNvbWFkNzA4QGdtYWlsLmNvbSddXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVFxuICAgIH0pLFxuICBdLFxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbiAgY2FsbGJhY2tzOntcbiAgICBzZXNzaW9uOiAoe3Nlc3Npb24sIHRva2VuLCB1c2VyfSkgPT4ge1xuICAgICAgaWYgKGFkbWluRW1haWwuaW5jbHVkZXMoc2Vzc2lvbj8udXNlcj8uZW1haWwpKXtcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQWRtaW5SZXF1ZXN0KHJlcSxyZXMpe1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEscmVzLGF1dGhPcHRpb25zKTtcbiAgaWYgKCFhZG1pbkVtYWlsLmluY2x1ZGVzKHNlc3Npb24/LnVzZXI/LmVtYWlsKSl7XG4gICAgcmVzLnN0YXR1cyg0MDEpO1xuICAgIHJlcy5lbmQoKTtcbiAgICB0aHJvdyAnbm90IGFuIGFkbWluJztcbiAgfVxufSJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiTW9uZ29EQkFkYXB0ZXIiLCJOZXh0QXV0aCIsImdldFNlcnZlclNlc3Npb24iLCJHb29nbGVQcm92aWRlciIsImFkbWluRW1haWwiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImluY2x1ZGVzIiwiZW1haWwiLCJpc0FkbWluUmVxdWVzdCIsInJlcSIsInJlcyIsInN0YXR1cyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/categories.js":
/*!*********************************!*\
  !*** ./pages/api/categories.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Category */ \"(api)/./models/Category.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__]);\n_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n    await (0,_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.isAdminRequest)(req, res);\n    if (method === \"GET\") {\n        res.json(await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.find().populate(\"parent\"));\n    }\n    if (method === \"POST\") {\n        const { name , parentCategory , properties  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.create({\n            name,\n            parent: parentCategory || undefined,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"PUT\") {\n        const { name , parentCategory , properties , _id  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.updateOne({\n            _id\n        }, {\n            name,\n            parent: parentCategory || undefined,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"DELETE\") {\n        const { _id  } = req.query;\n        await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.deleteOne({\n            _id\n        });\n        res.json(\"ok\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ0k7QUFDSTtBQUd0QyxlQUFlRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUc7SUFDekMsTUFBTSxFQUFDQyxPQUFNLEVBQUMsR0FBR0Y7SUFDakIsTUFBTUgsOERBQWVBO0lBQ3JCLE1BQU1DLCtEQUFjQSxDQUFDRSxLQUFJQztJQUV6QixJQUFHQyxXQUFXLE9BQU07UUFDaEJELElBQUlFLEtBQUssTUFBTVAsc0RBQVFBLENBQUNRLE9BQU9DLFNBQVM7SUFDNUM7SUFFQSxJQUFHSCxXQUFXLFFBQU87UUFDakIsTUFBTSxFQUFDSSxLQUFJLEVBQUVDLGVBQWMsRUFBRUMsV0FBVSxFQUFDLEdBQUdSLElBQUlTO1FBQy9DLE1BQU1DLGNBQWMsTUFBTWQsc0RBQVFBLENBQUNlLE9BQU87WUFDdENMO1lBQ0FNLFFBQU9MLGtCQUFrQk07WUFDekJMO1FBQ0o7UUFDQVAsSUFBSUUsS0FBS087SUFDYjtJQUVBLElBQUdSLFdBQVcsT0FBTTtRQUNoQixNQUFNLEVBQUNJLEtBQUksRUFBRUMsZUFBYyxFQUFFQyxXQUFVLEVBQUVNLElBQUcsRUFBQyxHQUFHZCxJQUFJUztRQUNwRCxNQUFNQyxjQUFjLE1BQU1kLHNEQUFRQSxDQUFDbUIsVUFBVTtZQUFDRDtRQUFHLEdBQUU7WUFDL0NSO1lBQ0FNLFFBQU9MLGtCQUFrQk07WUFDekJMO1FBQ0o7UUFDQVAsSUFBSUUsS0FBS087SUFDYjtJQUVBLElBQUdSLFdBQVMsVUFBUztRQUNqQixNQUFNLEVBQUNZLElBQUcsRUFBQyxHQUFHZCxJQUFJZ0I7UUFDbEIsTUFBTXBCLHNEQUFRQSxDQUFDcUIsVUFBVTtZQUFDSDtRQUFHO1FBQzdCYixJQUFJRSxLQUFLO0lBQ2I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzLmpzPzY4ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiQC9tb2RlbHMvQ2F0ZWdvcnlcIjtcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xuaW1wb3J0IHtpc0FkbWluUmVxdWVzdCB9IGZyb20gXCIuL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcyl7XG4gICAgY29uc3Qge21ldGhvZH0gPSByZXE7XG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XG4gICAgYXdhaXQgaXNBZG1pblJlcXVlc3QocmVxLHJlcyk7XG5cbiAgICBpZihtZXRob2QgPT09ICdHRVQnKXtcbiAgICAgICAgcmVzLmpzb24oYXdhaXQgQ2F0ZWdvcnkuZmluZCgpLnBvcHVsYXRlKCdwYXJlbnQnKSlcbiAgICB9XG5cbiAgICBpZihtZXRob2QgPT09ICdQT1NUJyl7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBwYXJlbnRDYXRlZ29yeSwgcHJvcGVydGllc30gPSByZXEuYm9keTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlEb2MgPSBhd2FpdCBDYXRlZ29yeS5jcmVhdGUoe1xuICAgICAgICAgICAgbmFtZSwgXG4gICAgICAgICAgICBwYXJlbnQ6cGFyZW50Q2F0ZWdvcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5qc29uKGNhdGVnb3J5RG9jKTtcbiAgICB9XG5cbiAgICBpZihtZXRob2QgPT09ICdQVVQnKXtcbiAgICAgICAgY29uc3Qge25hbWUsIHBhcmVudENhdGVnb3J5LCBwcm9wZXJ0aWVzLCBfaWR9ID0gcmVxLmJvZHk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RG9jID0gYXdhaXQgQ2F0ZWdvcnkudXBkYXRlT25lKHtfaWR9LHtcbiAgICAgICAgICAgIG5hbWUsIFxuICAgICAgICAgICAgcGFyZW50OnBhcmVudENhdGVnb3J5IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXMuanNvbihjYXRlZ29yeURvYyk7XG4gICAgfVxuXG4gICAgaWYobWV0aG9kPT09XCJERUxFVEVcIil7XG4gICAgICAgIGNvbnN0IHtfaWR9ID0gcmVxLnF1ZXJ5O1xuICAgICAgICBhd2FpdCBDYXRlZ29yeS5kZWxldGVPbmUoe19pZH0pO1xuICAgICAgICByZXMuanNvbignb2snKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJtb25nb29zZUNvbm5lY3QiLCJpc0FkbWluUmVxdWVzdCIsImhhbmRsZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImpzb24iLCJmaW5kIiwicG9wdWxhdGUiLCJuYW1lIiwicGFyZW50Q2F0ZWdvcnkiLCJwcm9wZXJ0aWVzIiwiYm9keSIsImNhdGVnb3J5RG9jIiwiY3JlYXRlIiwicGFyZW50IiwidW5kZWZpbmVkIiwiX2lkIiwidXBkYXRlT25lIiwicXVlcnkiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories.js\n");

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