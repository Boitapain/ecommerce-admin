"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/new",{

/***/ "./components/ProductForm.js":
/*!***********************************!*\
  !*** ./components/ProductForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductForm(param) {\n    let { _id , title: existingTitle , description: existingDescription , price: existingPrice , images  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingTitle || \"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingDescription || \"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingPrice || \"\");\n    const [goToProduct, setGoToProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function saveProduct(ev) {\n        const data = {\n            _id,\n            title,\n            description,\n            price\n        };\n        ev.preventDefault();\n        if (_id) {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/api/products\", {\n                ...data,\n                _id\n            });\n        } else {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/products\", data);\n            setGoToProduct(true);\n        }\n    }\n    if (goToProduct) {\n        router.push(\"/products\");\n    }\n    async function uploadImages(ev) {\n        var _ev_target;\n        const files = (_ev_target = ev.target) === null || _ev_target === void 0 ? void 0 : _ev_target.files;\n        if ((files === null || files === void 0 ? void 0 : files.lenght) > 0) {\n            const data = new FormData();\n            files.forEach((file)=>data.append(\"file\", file));\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/upload\", data);\n            console.log(res.data);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: saveProduct,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product name\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"product name\",\n                value: title,\n                onChange: (ev)=>setTitle(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Photos\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"w-24 h-24 cursor-pointer text-center text-sm gap-1 text-gray-500  flex flex-col items-center justify-center  rounded-lg bg-gray-200\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                onChange: uploadImages,\n                                className: \"hidden\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    !(images === null || images === void 0 ? void 0 : images.lenght) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"No photos for this product\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>setDescription(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (in EUR)\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>setPrice(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onChange: uploadImages,\n                className: \"btn-primary\",\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductForm, \"11iyFP0qbOhu5YdpKFvE1zbJ8RE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTSyxHQUFHUSxPQUFPZTs7Ozs7OzBCQUN2Qyw4REFBQ2U7Z0JBQU9qQixNQUFLO2dCQUFTRyxVQUFVbEI7Z0JBQWNvQixXQUFVOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHbEY7R0FsRndCMUM7O1FBV0xELGtEQUFTQTs7O0tBWEpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEZvcm0uanM/ZjQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RGb3JtKHtcbiAgICBfaWQsXG4gICAgdGl0bGU6ZXhpc3RpbmdUaXRsZSwgXG4gICAgZGVzY3JpcHRpb246ZXhpc3RpbmdEZXNjcmlwdGlvbiwgXG4gICAgcHJpY2U6ZXhpc3RpbmdQcmljZSxcbiAgICBpbWFnZXMsXG59KSB7XG4gICAgY29uc3QgW3RpdGxlLHNldFRpdGxlXSA9IHVzZVN0YXRlKGV4aXN0aW5nVGl0bGUgfHwgJycpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoZXhpc3RpbmdEZXNjcmlwdGlvbiB8fCAnJyk7XG4gICAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShleGlzdGluZ1ByaWNlIHx8ICcnKTtcbiAgICBjb25zdCBbZ29Ub1Byb2R1Y3QsIHNldEdvVG9Qcm9kdWN0XSA9IHVzZVN0YXRlKGZhbHNlKSBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNhdmVQcm9kdWN0KGV2KXtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtfaWQsdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZX07XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKF9pZCl7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoJy9hcGkvcHJvZHVjdHMnLHsuLi5kYXRhLF9pZH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Byb2R1Y3RzJywgZGF0YSk7XG4gICAgICAgICAgICBzZXRHb1RvUHJvZHVjdCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgaWYoZ29Ub1Byb2R1Y3Qpe1xuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBsb2FkSW1hZ2VzKGV2KXtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBldi50YXJnZXQ/LmZpbGVzXG4gICAgICAgIGlmKGZpbGVzPy5sZW5naHQ+MCl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4gZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKSlcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXBsb2FkJyxkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlUHJvZHVjdH0+XG4gICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJvZHVjdCBuYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gc2V0VGl0bGUoZXYudGFyZ2V0LnZhbHVlKX0vPlxuXG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgUGhvdG9zXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMjQgaC0yNCBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgICAgICAgIHRleHQtY2VudGVyIHRleHQtc20gZ2FwLTEgdGV4dC1ncmF5LTUwMCBcbiAgICAgICAgICAgICAgICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcbiAgICAgICAgICAgICAgICByb3VuZGVkLWxnIGJnLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZVdpZHRoPXsxLjV9IHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInctNiBoLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgOC4yNUg3LjVhMi4yNSAyLjI1IDAgMDAtMi4yNSAyLjI1djlhMi4yNSAyLjI1IDAgMDAyLjI1IDIuMjVoOWEyLjI1IDIuMjUgMCAwMDIuMjUtMi4yNXYtOWEyLjI1IDIuMjUgMCAwMC0yLjI1LTIuMjVIMTVtMC0zbC0zLTNtMCAwbC0zIDNtMy0zVjE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt1cGxvYWRJbWFnZXN9IGNsYXNzTmFtZT1cImhpZGRlblwiLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIHshaW1hZ2VzPy5sZW5naHQgJiYoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Tm8gcGhvdG9zIGZvciB0aGlzIHByb2R1Y3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gc2V0RGVzY3JpcHRpb24oZXYudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPGxhYmVsPlByaWNlIChpbiBFVVIpPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiBzZXRQcmljZShldi50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNoYW5nZT17dXBsb2FkSW1hZ2VzfSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIlByb2R1Y3RGb3JtIiwiX2lkIiwidGl0bGUiLCJleGlzdGluZ1RpdGxlIiwiZGVzY3JpcHRpb24iLCJleGlzdGluZ0Rlc2NyaXB0aW9uIiwicHJpY2UiLCJleGlzdGluZ1ByaWNlIiwiaW1hZ2VzIiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsInNldFByaWNlIiwiZ29Ub1Byb2R1Y3QiLCJzZXRHb1RvUHJvZHVjdCIsInJvdXRlciIsInNhdmVQcm9kdWN0IiwiZXYiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJwdXQiLCJwb3N0IiwicHVzaCIsInVwbG9hZEltYWdlcyIsImZpbGVzIiwidGFyZ2V0IiwibGVuZ2h0IiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiZmlsZSIsImFwcGVuZCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});