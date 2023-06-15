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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductForm(param) {\n    let { title: existingTitle , description: existingDescription , price: existingPrice  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingTitle || \"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingDescription || \"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(existingPrice || \"\");\n    const [goToProduct, setGoToProduct] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    async function createProduct(ev) {\n        ev.preventDefault();\n        const data = {\n            title,\n            description,\n            price\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/products\", data);\n        setGoToProduct(true);\n    }\n    if (goToProduct) {\n        router.push(\"/products\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: createProduct,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product name\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"product name\",\n                value: title,\n                onChange: (ev)=>setTitle(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>setDescription(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (in EUR)\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>setPrice(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductForm, \"11iyFP0qbOhu5YdpKFvE1zbJ8RE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDUDtBQUNjO0FBRXpCLFNBQVNJLFlBQVksS0FJbkM7UUFKbUMsRUFDaENDLE9BQU1DLGNBQWEsRUFDbkJDLGFBQVlDLG9CQUFtQixFQUMvQkMsT0FBTUMsY0FBYSxFQUN0QixHQUptQzs7SUFLaEMsTUFBTSxDQUFDTCxPQUFNTSxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDSyxpQkFBaUI7SUFDbkQsTUFBTSxDQUFDQyxhQUFhSyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDTyx1QkFBdUI7SUFDdEUsTUFBTSxDQUFDQyxPQUFPSSxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDUyxpQkFBaUI7SUFDcEQsTUFBTSxDQUFDSSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1lLFNBQVNiLHNEQUFTQTtJQUV4QixlQUFlYyxjQUFjQyxFQUFFO1FBQzNCQSxHQUFHQztRQUNILE1BQU1DLE9BQU87WUFBQ2Y7WUFBT0U7WUFBYUU7UUFBSztRQUN2QyxNQUFNUCxrREFBVW1CLENBQUMsaUJBQWlCRDtRQUNsQ0wsZUFBZTtJQUNuQjtJQUNBLElBQUdELGFBQVk7UUFDWEUsT0FBT00sS0FBSztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDQztRQUFLQyxVQUFVUDs7MEJBQ1osOERBQUNROzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPeEI7Z0JBQ1B5QixVQUFVWixDQUFBQSxLQUFNUCxTQUFTTyxHQUFHYSxPQUFPRjs7Ozs7OzBCQUN2Qyw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ087Z0JBQ0dKLGFBQVk7Z0JBQ1pDLE9BQU90QjtnQkFDUHVCLFVBQVVaLENBQUFBLEtBQU1OLGVBQWVNLEdBQUdhLE9BQU9GOzs7Ozs7MEJBQzdDLDhEQUFDSjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDR0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBT3BCO2dCQUNQcUIsVUFBVVosQ0FBQUEsS0FBTUwsU0FBU0ssR0FBR2EsT0FBT0Y7Ozs7OzswQkFDdkMsOERBQUNJO2dCQUFPTixNQUFLO2dCQUFTTyxXQUFVOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHMUQ7R0EzQ3dCOUI7O1FBU0xELGtEQUFTQTs7O0tBVEpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEZvcm0uanM/ZjQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RGb3JtKHtcbiAgICB0aXRsZTpleGlzdGluZ1RpdGxlLCBcbiAgICBkZXNjcmlwdGlvbjpleGlzdGluZ0Rlc2NyaXB0aW9uLCBcbiAgICBwcmljZTpleGlzdGluZ1ByaWNlLFxufSkge1xuICAgIGNvbnN0IFt0aXRsZSxzZXRUaXRsZV0gPSB1c2VTdGF0ZShleGlzdGluZ1RpdGxlIHx8ICcnKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGV4aXN0aW5nRGVzY3JpcHRpb24gfHwgJycpO1xuICAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoZXhpc3RpbmdQcmljZSB8fCAnJyk7XG4gICAgY29uc3QgW2dvVG9Qcm9kdWN0LCBzZXRHb1RvUHJvZHVjdF0gPSB1c2VTdGF0ZShmYWxzZSkgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0KGV2KXtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlfTtcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9wcm9kdWN0cycsIGRhdGEpO1xuICAgICAgICBzZXRHb1RvUHJvZHVjdCh0cnVlKTtcbiAgICB9XG4gICAgaWYoZ29Ub1Byb2R1Y3Qpe1xuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NyZWF0ZVByb2R1Y3R9PlxuICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByb2R1Y3QgbmFtZVwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldFRpdGxlKGV2LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiBzZXREZXNjcmlwdGlvbihldi50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8bGFiZWw+UHJpY2UgKGluIEVVUik8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaWNlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldFByaWNlKGV2LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiUHJvZHVjdEZvcm0iLCJ0aXRsZSIsImV4aXN0aW5nVGl0bGUiLCJkZXNjcmlwdGlvbiIsImV4aXN0aW5nRGVzY3JpcHRpb24iLCJwcmljZSIsImV4aXN0aW5nUHJpY2UiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic2V0UHJpY2UiLCJnb1RvUHJvZHVjdCIsInNldEdvVG9Qcm9kdWN0Iiwicm91dGVyIiwiY3JlYXRlUHJvZHVjdCIsImV2IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9zdCIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});