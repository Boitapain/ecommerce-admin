"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ \"./components/Logo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { children  } = param;\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-bgGray w-screen h-screen flex flex-col justify-center gap-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white bg-gray-600 p-2 rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Email : ecomad708@gmail.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Password : Admin123!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\"),\n                        className: \"bg-highlight p-2 flex gap-2 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                preserveAspectRatio: \"xMidYMid\",\n                                viewBox: \"0 0 256 262\",\n                                id: \"google\",\n                                className: \"w-6 h-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fill: \"#4285F4\",\n                                        d: \"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fill: \"#34A853\",\n                                        d: \"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fill: \"#FBBC05\",\n                                        d: \"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fill: \"#EB4335\",\n                                        d: \"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            \"Login with Google\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-bgGray min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setShowNav(true),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            viewBox: \"0 0 24 24\",\n                            fill: \"currentColor\",\n                            class: \"w-6 h-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                \"fill-rule\": \"evenodd\",\n                                d: \"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z\",\n                                \"clip-rule\": \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        show: showNav\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/Layout.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"+DvQlvlEVSCoTn9xTnoX672jD8c=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNnQjtBQUNsQjtBQUNQO0FBRVgsU0FBU0ssT0FBTyxLQUFVO1FBQVYsRUFBQ0MsU0FBUSxFQUFDLEdBQVY7O0lBQzdCLE1BQU0sRUFBRUMsTUFBTUMsUUFBTyxFQUFFLEdBQUdQLDJEQUFVQTtJQUNwQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFHdkMsSUFBRyxDQUFDSyxTQUFRO1FBQ1YscUJBQ0UsOERBQUNHO3NCQUNDLDRFQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7MENBQUk7Ozs7OzswQ0FDTCw4REFBQ0E7MENBQUk7Ozs7Ozs7Ozs7OztrQ0FFUCw4REFBQ0U7d0JBQU9DLFNBQVMsSUFBTVosdURBQU1BLENBQUM7d0JBQVdVLFdBQVU7OzBDQUNqRCw4REFBQ0c7Z0NBQUlDLE9BQU07Z0NBQTZCQyxxQkFBb0I7Z0NBQVdDLFNBQVE7Z0NBQWNDLElBQUc7Z0NBQVNQLFdBQVU7O2tEQUNqSCw4REFBQ1E7d0NBQUtDLE1BQUs7d0NBQVVDLEdBQUU7Ozs7OztrREFDdkIsOERBQUNGO3dDQUFLQyxNQUFLO3dDQUFVQyxHQUFFOzs7Ozs7a0RBQ3ZCLDhEQUFDRjt3Q0FBS0MsTUFBSzt3Q0FBVUMsR0FBRTs7Ozs7O2tEQUN2Qiw4REFBQ0Y7d0NBQUtDLE1BQUs7d0NBQVVDLEdBQUU7Ozs7Ozs7Ozs7Ozs0QkFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1kO0lBQ0EscUJBQ0UsOERBQUNYO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFPQyxTQUFTLElBQU1KLFdBQVc7a0NBQ2hDLDRFQUFDSzs0QkFBSUMsT0FBTTs0QkFBNkJFLFNBQVE7NEJBQVlHLE1BQUs7NEJBQWVFLE9BQU07c0NBQ3BGLDRFQUFDSDtnQ0FBS0ksYUFBVTtnQ0FBVUYsR0FBRTtnQ0FBd05HLGFBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2xRLDhEQUFDckIsNkNBQUlBOzs7Ozs7Ozs7OzswQkFHUCw4REFBQ087Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWix1REFBR0E7d0JBQUMwQixNQUFNakI7Ozs7OztrQ0FDWCw4REFBQ0U7d0JBQUlDLFdBQVU7a0NBQ1pOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWDtHQTlDd0JEOztRQUNJSix1REFBVUE7OztLQURkSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXYgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW3Nob3dOYXYsIHNldFNob3dOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgaWYoIXNlc3Npb24pe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJnR3JheSB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZ3JheS02MDAgcC0yIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8ZGl2PkVtYWlsIDogZWNvbWFkNzA4QGdtYWlsLmNvbTwvZGl2PlxuICAgICAgICAgIDxkaXY+UGFzc3dvcmQgOiBBZG1pbjEyMyE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCdnb29nbGUnKX0gY2xhc3NOYW1lPVwiYmctaGlnaGxpZ2h0IHAtMiBmbGV4IGdhcC0yIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNjJcIiBpZD1cImdvb2dsZVwiIGNsYXNzTmFtZT1cInctNiBoLTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjNDI4NUY0XCIgZD1cIk0yNTUuODc4IDEzMy40NTFjMC0xMC43MzQtLjg3MS0xOC41NjctMi43NTYtMjYuNjlIMTMwLjU1djQ4LjQ0OGg3MS45NDdjLTEuNDUgMTIuMDQtOS4yODMgMzAuMTcyLTI2LjY5IDQyLjM1NmwtLjI0NCAxLjYyMiAzOC43NTUgMzAuMDIzIDIuNjg1LjI2OGMyNC42NTktMjIuNzc0IDM4Ljg3NS01Ni4yODIgMzguODc1LTk2LjAyN1wiPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMzRBODUzXCIgZD1cIk0xMzAuNTUgMjYxLjFjMzUuMjQ4IDAgNjQuODM5LTExLjYwNSA4Ni40NTMtMzEuNjIybC00MS4xOTYtMzEuOTEzYy0xMS4wMjQgNy42ODgtMjUuODIgMTMuMDU1LTQ1LjI1NyAxMy4wNTUtMzQuNTIzIDAtNjMuODI0LTIyLjc3My03NC4yNjktNTQuMjVsLTEuNTMxLjEzLTQwLjI5OCAzMS4xODctLjUyNyAxLjQ2NUMzNS4zOTMgMjMxLjc5OCA3OS40OSAyNjEuMSAxMzAuNTUgMjYxLjFcIj48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiI0ZCQkMwNVwiIGQ9XCJNNTYuMjgxIDE1Ni4zN2MtMi43NTYtOC4xMjMtNC4zNTEtMTYuODI3LTQuMzUxLTI1LjgyIDAtOC45OTQgMS41OTUtMTcuNjk3IDQuMjA2LTI1LjgybC0uMDczLTEuNzNMMTUuMjYgNzEuMzEybC0xLjMzNS42MzVDNS4wNzcgODkuNjQ0IDAgMTA5LjUxNyAwIDEzMC41NXM1LjA3NyA0MC45MDUgMTMuOTI1IDU4LjYwMmw0Mi4zNTYtMzIuNzgyXCI+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNFQjQzMzVcIiBkPVwiTTEzMC41NSA1MC40NzljMjQuNTE0IDAgNDEuMDUgMTAuNTg5IDUwLjQ3OSAxOS40MzhsMzYuODQ0LTM1Ljk3NEMxOTUuMjQ1IDEyLjkxIDE2NS43OTggMCAxMzAuNTUgMCA3OS40OSAwIDM1LjM5MyAyOS4zMDEgMTMuOTI1IDcxLjk0N2w0Mi4yMTEgMzIuNzgzYzEwLjU5LTMxLjQ3NyAzOS44OTEtNTQuMjUxIDc0LjQxNC01NC4yNTFcIj48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgTG9naW4gd2l0aCBHb29nbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmdHcmF5IG1pbi1oLXNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmF2KHRydWUpfT5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNlwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMyA2Ljc1QS43NS43NSAwIDAxMy43NSA2aDE2LjVhLjc1Ljc1IDAgMDEwIDEuNUgzLjc1QS43NS43NSAwIDAxMyA2Ljc1ek0zIDEyYS43NS43NSAwIDAxLjc1LS43NWgxNi41YS43NS43NSAwIDAxMCAxLjVIMy43NUEuNzUuNzUgMCAwMTMgMTJ6bTAgNS4yNWEuNzUuNzUgMCAwMS43NS0uNzVoMTYuNWEuNzUuNzUgMCAwMTAgMS41SDMuNzVhLjc1Ljc1IDAgMDEtLjc1LS43NXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleFwiPlxuICAgICAgICA8TmF2IHNob3c9e3Nob3dOYXZ9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBmbGV4LWdyb3cgbXQtMiBtci0yIG1iLTIgcm91bmRlZC1sZyBwLTRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOYXYiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwidXNlU3RhdGUiLCJMb2dvIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkYXRhIiwic2Vzc2lvbiIsInNob3dOYXYiLCJzZXRTaG93TmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsInZpZXdCb3giLCJpZCIsInBhdGgiLCJmaWxsIiwiZCIsImNsYXNzIiwiZmlsbC1ydWxlIiwiY2xpcC1ydWxlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});