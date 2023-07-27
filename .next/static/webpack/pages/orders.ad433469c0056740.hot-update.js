"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Orders; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Orders() {\n    _s();\n    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/orders\").then((response)=>{\n            setOrders(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Orders\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Date\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Recipient\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Products\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: orders.length > 0 && orders.map((order)=>{\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: order.createdAt.replace(\"T\", \" \").substring(0, 16)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            order.name,\n                                            \" \",\n                                            order.email,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 33\n                                            }, this),\n                                            order.city,\n                                            \" \",\n                                            order.postalCode,\n                                            \" \",\n                                            order.country,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 33\n                                            }, this),\n                                            order.streetAddress\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: order.line_items.map((l)=>{\n                                            var _l_price_data_product_data;\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: [\n                                                    (_l_price_data_product_data = l.price_data.product_data) === null || _l_price_data_product_data === void 0 ? void 0 : _l_price_data_product_data.name,\n                                                    \" x\",\n                                                    l.quantity,\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 89\n                                                    }, this)\n                                                ]\n                                            }, void 0, true);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/pages/orders.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(Orders, \"FvMuVccH6DXI6fqfhJiN/VsjZaw=\");\n_c = Orders;\nvar _c;\n$RefreshReg$(_c, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0c7QUFDbEI7QUFFWCxTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkNELGdEQUFTQSxDQUFDO1FBQ05FLGlEQUFTSSxDQUFDLGVBQWVDLEtBQUtDLENBQUFBO1lBQzFCSCxVQUFVRyxTQUFTQztRQUN2QjtJQUNKLEdBQUUsRUFBRTtJQUNKLHFCQUNJLDhEQUFDViwwREFBTUE7OzBCQUNILDhEQUFDVzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUNHLDRFQUFDQzs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ0M7a0NBQ0laLE9BQU9hLFNBQU8sS0FBS2IsT0FBT2MsSUFBSUMsQ0FBQUE7MENBQzNCLHFFQUFDTDs7a0RBQ0csOERBQUNNO2tEQUFJRCxNQUFNRSxVQUFVQyxRQUFRLEtBQUssS0FBS0MsVUFBVSxHQUFFOzs7Ozs7a0RBQ25ELDhEQUFDSDs7NENBQ0lELE1BQU1LOzRDQUFLOzRDQUFFTCxNQUFNTTswREFDcEIsOERBQUNDOzs7Ozs0Q0FDQVAsTUFBTVE7NENBQUs7NENBQUVSLE1BQU1TOzRDQUFXOzRDQUFFVCxNQUFNVTswREFDdkMsOERBQUNIOzs7Ozs0Q0FDQVAsTUFBTVc7Ozs7Ozs7a0RBRVgsOERBQUNWO2tEQUNJRCxNQUFNWSxXQUFXYixJQUFJYyxDQUFBQTtnREFFYkE7MERBREw7O29EQUNLQSxDQUFBQSw2QkFBQUEsRUFBRUMsV0FBV0MsMEJBQWJGLHdDQUFBQSxLQUFBQSxJQUFBQSwyQkFBMkJSO29EQUFLO29EQUFHUSxFQUFFRztvREFBUztrRUFBQyw4REFBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekY7R0ExQ3dCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzPzQ2ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcnMoKXtcbiAgICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pOyAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9vcmRlcnMnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldE9yZGVycyhyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KTsgXG4gICAgfSxbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT5PcmRlcnM8L2gxPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJhc2ljXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVjaXBpZW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0czwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcnMubGVuZ3RoPjAgJiYgb3JkZXJzLm1hcChvcmRlciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntvcmRlci5jcmVhdGVkQXQucmVwbGFjZSgnVCcsICcgJykuc3Vic3RyaW5nKDAsMTYpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIubmFtZX0ge29yZGVyLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLmNpdHl9IHtvcmRlci5wb3N0YWxDb2RlfSB7b3JkZXIuY291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5zdHJlZXRBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIubGluZV9pdGVtcy5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsLnByaWNlX2RhdGEucHJvZHVjdF9kYXRhPy5uYW1lfSB4e2wucXVhbnRpdHl9IDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiT3JkZXJzIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImgxIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsImxlbmd0aCIsIm1hcCIsIm9yZGVyIiwidGQiLCJjcmVhdGVkQXQiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwibmFtZSIsImVtYWlsIiwiYnIiLCJjaXR5IiwicG9zdGFsQ29kZSIsImNvdW50cnkiLCJzdHJlZXRBZGRyZXNzIiwibGluZV9pdGVtcyIsImwiLCJwcmljZV9kYXRhIiwicHJvZHVjdF9kYXRhIiwicXVhbnRpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/orders.js\n"));

/***/ })

});