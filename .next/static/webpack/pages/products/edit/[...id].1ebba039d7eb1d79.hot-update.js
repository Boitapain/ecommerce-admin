"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/edit/[...id]",{

/***/ "./components/ProductForm.js":
/*!***********************************!*\
  !*** ./components/ProductForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductForm(param) {\n    let { _id , title: existingTitle , description: existingDescription , price: existingPrice  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingTitle || \"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingDescription || \"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingPrice || \"\");\n    const [goToProduct, setGoToProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function saveProduct(ev) {\n        ev.preventDefault();\n        if (_id) {} else {\n            const data = {\n                title,\n                description,\n                price\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/products\", data);\n            setGoToProduct(true);\n        }\n    }\n    if (goToProduct) {\n        router.push(\"/products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: createProduct,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product name\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"product name\",\n                value: title,\n                onChange: (ev)=>setTitle(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>setDescription(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (in EUR)\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>setPrice(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductForm, \"11iyFP0qbOhu5YdpKFvE1zbJ8RE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUDtBQUNjO0FBRXpCLFNBQVNHLFlBQVksS0FLbkM7UUFMbUMsRUFDaENDLElBQUcsRUFDSEMsT0FBTUMsY0FBYSxFQUNuQkMsYUFBWUMsb0JBQW1CLEVBQy9CQyxPQUFNQyxjQUFhLEVBQ3RCLEdBTG1DOztJQU1oQyxNQUFNLENBQUNMLE9BQU1NLFNBQVMsR0FBR1gsK0NBQVFBLENBQUNNLGlCQUFpQjtJQUNuRCxNQUFNLENBQUNDLGFBQWFLLGVBQWUsR0FBR1osK0NBQVFBLENBQUNRLHVCQUF1QjtJQUN0RSxNQUFNLENBQUNDLE9BQU9JLFNBQVMsR0FBR2IsK0NBQVFBLENBQUNVLGlCQUFpQjtJQUNwRCxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTWdCLFNBQVNkLHNEQUFTQTtJQUV4QixlQUFlZSxZQUFZQyxFQUFFO1FBQ3pCQSxHQUFHQztRQUNILElBQUdmLEtBQUksQ0FFUCxPQUNJO1lBQ0EsTUFBTWdCLE9BQU87Z0JBQUNmO2dCQUFPRTtnQkFBYUU7WUFBSztZQUN2QyxNQUFNUixrREFBVW9CLENBQUMsaUJBQWlCRDtZQUNsQ0wsZUFBZTtRQUNuQjtJQUVKO0lBQ0EsSUFBR0QsYUFBWTtRQUNYRSxPQUFPTSxLQUFLO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNDO1FBQUtDLFVBQVVDOzswQkFDWiw4REFBQ0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0dDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU96QjtnQkFDUDBCLFVBQVViLENBQUFBLEtBQU1QLFNBQVNPLEdBQUdjLE9BQU9GOzs7Ozs7MEJBQ3ZDLDhEQUFDSjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDTztnQkFDR0osYUFBWTtnQkFDWkMsT0FBT3ZCO2dCQUNQd0IsVUFBVWIsQ0FBQUEsS0FBTU4sZUFBZU0sR0FBR2MsT0FBT0Y7Ozs7OzswQkFDN0MsOERBQUNKOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPckI7Z0JBQ1BzQixVQUFVYixDQUFBQSxLQUFNTCxTQUFTSyxHQUFHYyxPQUFPRjs7Ozs7OzBCQUN2Qyw4REFBQ0k7Z0JBQU9OLE1BQUs7Z0JBQVNPLFdBQVU7MEJBQWM7Ozs7Ozs7Ozs7OztBQUcxRDtHQWxEd0JoQzs7UUFVTEQsa0RBQVNBOzs7S0FWSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Rm9ybS5qcz9mNDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEZvcm0oe1xuICAgIF9pZCxcbiAgICB0aXRsZTpleGlzdGluZ1RpdGxlLCBcbiAgICBkZXNjcmlwdGlvbjpleGlzdGluZ0Rlc2NyaXB0aW9uLCBcbiAgICBwcmljZTpleGlzdGluZ1ByaWNlLFxufSkge1xuICAgIGNvbnN0IFt0aXRsZSxzZXRUaXRsZV0gPSB1c2VTdGF0ZShleGlzdGluZ1RpdGxlIHx8ICcnKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGV4aXN0aW5nRGVzY3JpcHRpb24gfHwgJycpO1xuICAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoZXhpc3RpbmdQcmljZSB8fCAnJyk7XG4gICAgY29uc3QgW2dvVG9Qcm9kdWN0LCBzZXRHb1RvUHJvZHVjdF0gPSB1c2VTdGF0ZShmYWxzZSkgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlUHJvZHVjdChldil7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKF9pZCl7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlfTtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvZHVjdHMnLCBkYXRhKTtcbiAgICAgICAgICAgIHNldEdvVG9Qcm9kdWN0KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBpZihnb1RvUHJvZHVjdCl7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZHVjdHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y3JlYXRlUHJvZHVjdH0+XG4gICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJvZHVjdCBuYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gc2V0VGl0bGUoZXYudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldERlc2NyaXB0aW9uKGV2LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgIDxsYWJlbD5QcmljZSAoaW4gRVVSKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gc2V0UHJpY2UoZXYudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0Rm9ybSIsIl9pZCIsInRpdGxlIiwiZXhpc3RpbmdUaXRsZSIsImRlc2NyaXB0aW9uIiwiZXhpc3RpbmdEZXNjcmlwdGlvbiIsInByaWNlIiwiZXhpc3RpbmdQcmljZSIsInNldFRpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJzZXRQcmljZSIsImdvVG9Qcm9kdWN0Iiwic2V0R29Ub1Byb2R1Y3QiLCJyb3V0ZXIiLCJzYXZlUHJvZHVjdCIsImV2IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9zdCIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJjcmVhdGVQcm9kdWN0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});