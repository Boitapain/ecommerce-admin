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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spinner */ \"./components/Spinner.js\");\n/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sortablejs */ \"./node_modules/react-sortablejs/dist/index.js\");\n/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProductForm(param) {\n    let { _id , title: existingTitle , description: existingDescription , price: existingPrice , images: existingImages , category: assignedCategory  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingTitle || \"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingDescription || \"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(assignedCategory || \"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingPrice || \"\");\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingImages || []);\n    const [goToProduct, setGoToProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/categories\").then((result)=>{\n            setCategories(result.data);\n        });\n    }, []);\n    async function saveProduct(ev) {\n        const data = {\n            _id,\n            title,\n            description,\n            price,\n            images,\n            category\n        };\n        ev.preventDefault();\n        if (_id) {\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"/api/products\", {\n                ...data,\n                _id\n            });\n            setGoToProduct(true);\n        } else {\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/products\", data);\n            setGoToProduct(true);\n        }\n    }\n    if (goToProduct) {\n        router.push(\"/products\");\n    }\n    async function uploadImages(ev) {\n        var _ev_target;\n        const files = (_ev_target = ev.target) === null || _ev_target === void 0 ? void 0 : _ev_target.files;\n        if ((files === null || files === void 0 ? void 0 : files.length) > 0) {\n            setIsUploading(true);\n            const data = new FormData();\n            for (const file of files){\n                data.append(\"file\", file);\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/upload\", data);\n            setImages((oldImages)=>{\n                return [\n                    ...oldImages,\n                    ...res.data.links\n                ];\n            });\n            setIsUploading(false);\n        }\n    }\n    function updateImagesOrder(images) {\n        setImages(images);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: saveProduct,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product name\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"product name\",\n                value: title,\n                onChange: (ev)=>setTitle(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Category\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: category,\n                onChange: (ev)=>setCategory(ev.target.value),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"Uncategorized\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    categories.length > 0 && categories.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: c._id,\n                            children: c.name\n                        }, void 0, false, {\n                            fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            categories.length > 0 && category.properties > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 85,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Photos\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 flex flex-wrap gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_sortablejs__WEBPACK_IMPORTED_MODULE_4__.ReactSortable, {\n                        list: images,\n                        className: \"flex flex-wrap gap-2\",\n                        setList: updateImagesOrder,\n                        children: !!(images === null || images === void 0 ? void 0 : images.length) && images.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" h-24\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: link,\n                                    alt: \"\",\n                                    className: \"rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, this)\n                            }, link, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this),\n                    isUploading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-24 p-1 flex items-center rounded-md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                            lineNumber: 101,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \" w-24 h-24 cursor-pointer text-center text-sm gap-1 text-gray-500  flex flex-col items-center justify-center  rounded-lg bg-gray-200\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                lineNumber: 108,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                lineNumber: 111,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                onChange: uploadImages,\n                                className: \"hidden\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>setDescription(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (in EUR)\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>setPrice(ev.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vincentbullion/www/template/ecommerce/ecommerce-admin/components/ProductForm.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductForm, \"P3UDDrUT5/oUhCRZMZiJshBEoL4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VXZCLENBQUFBLEtBQU1oQixlQUFlZ0IsR0FBR08sT0FBT2U7Ozs7OzswQkFDN0MsOERBQUNKOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPN0M7Z0JBQ1A4QyxVQUFVdkIsQ0FBQUEsS0FBTWQsU0FBU2MsR0FBR08sT0FBT2U7Ozs7OzswQkFDdkMsOERBQUMyQjtnQkFBTzdCLE1BQUs7Z0JBQVNXLFdBQVU7MEJBQWM7Ozs7Ozs7Ozs7OztBQUcxRDtHQTdId0I1RDs7UUFlTEgsa0RBQVNBOzs7S0FmSkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Rm9ybS5qcz9mNDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xuaW1wb3J0IHsgUmVhY3RTb3J0YWJsZSB9IGZyb20gXCJyZWFjdC1zb3J0YWJsZWpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RGb3JtKHtcbiAgICBfaWQsXG4gICAgdGl0bGU6ZXhpc3RpbmdUaXRsZSwgXG4gICAgZGVzY3JpcHRpb246ZXhpc3RpbmdEZXNjcmlwdGlvbiwgXG4gICAgcHJpY2U6ZXhpc3RpbmdQcmljZSxcbiAgICBpbWFnZXM6ZXhpc3RpbmdJbWFnZXMsXG4gICAgY2F0ZWdvcnk6YXNzaWduZWRDYXRlZ29yeSxcbn0pIHtcbiAgICBjb25zdCBbdGl0bGUsc2V0VGl0bGVdID0gdXNlU3RhdGUoZXhpc3RpbmdUaXRsZSB8fCAnJyk7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShleGlzdGluZ0Rlc2NyaXB0aW9uIHx8ICcnKTtcbiAgICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKGFzc2lnbmVkQ2F0ZWdvcnkgfHwgJycpO1xuICAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoZXhpc3RpbmdQcmljZSB8fCAnJyk7XG4gICAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKGV4aXN0aW5nSW1hZ2VzIHx8IFtdKTtcbiAgICBjb25zdCBbZ29Ub1Byb2R1Y3QsIHNldEdvVG9Qcm9kdWN0XSA9IHVzZVN0YXRlKGZhbHNlKTsgXG4gICAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9jYXRlZ29yaWVzXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMocmVzdWx0LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlUHJvZHVjdChldil7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7X2lkLHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlcywgY2F0ZWdvcnl9O1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihfaWQpe1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KCcvYXBpL3Byb2R1Y3RzJyx7Li4uZGF0YSxfaWR9KTtcbiAgICAgICAgICAgIHNldEdvVG9Qcm9kdWN0KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Byb2R1Y3RzJywgZGF0YSk7XG4gICAgICAgICAgICBzZXRHb1RvUHJvZHVjdCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgaWYoZ29Ub1Byb2R1Y3Qpe1xuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RzJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBsb2FkSW1hZ2VzKGV2KXtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBldi50YXJnZXQ/LmZpbGVzXG4gICAgICAgIGlmKGZpbGVzPy5sZW5ndGg+MCl7XG4gICAgICAgICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcihjb25zdCBmaWxlIG9mIGZpbGVzKXtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXBsb2FkJyxkYXRhKTtcbiAgICAgICAgICAgIHNldEltYWdlcyhvbGRJbWFnZXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbLi4ub2xkSW1hZ2VzLCAuLi5yZXMuZGF0YS5saW5rc107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUltYWdlc09yZGVyKGltYWdlcyl7XG4gICAgICAgIHNldEltYWdlcyhpbWFnZXMpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlUHJvZHVjdH0+XG4gICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJvZHVjdCBuYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gc2V0VGl0bGUoZXYudGFyZ2V0LnZhbHVlKX0vPlxuXG4gICAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Y2F0ZWdvcnl9IG9uQ2hhbmdlPXtldiA9PiBzZXRDYXRlZ29yeShldi50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VW5jYXRlZ29yaXplZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aD4wICYmIGNhdGVnb3JpZXMubWFwKGMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjLl9pZH0+e2MubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoPjAgJiYgY2F0ZWdvcnkucHJvcGVydGllcz4wICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8bGFiZWw+UGhvdG9zPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxSZWFjdFNvcnRhYmxlIGxpc3Q9e2ltYWdlc30gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIiBzZXRMaXN0PXt1cGRhdGVJbWFnZXNPcmRlcn0+XG4gICAgICAgICAgICAgICAgeyEhaW1hZ2VzPy5sZW5ndGggJiYgaW1hZ2VzLm1hcChsaW5rID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpbmt9IGNsYXNzTmFtZT1cIiBoLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlua30gYWx0PVwiXCIgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9SZWFjdFNvcnRhYmxlPlxuICAgICAgICAgICAgICAgIHtpc1VwbG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCBwLTEgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCIgdy0yNCBoLTI0IGN1cnNvci1wb2ludGVyXG4gICAgICAgICAgICAgICAgdGV4dC1jZW50ZXIgdGV4dC1zbSBnYXAtMSB0ZXh0LWdyYXktNTAwIFxuICAgICAgICAgICAgICAgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFxuICAgICAgICAgICAgICAgIHJvdW5kZWQtbGcgYmctZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9ezEuNX0gc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOSA4LjI1SDcuNWEyLjI1IDIuMjUgMCAwMC0yLjI1IDIuMjV2OWEyLjI1IDIuMjUgMCAwMDIuMjUgMi4yNWg5YTIuMjUgMi4yNSAwIDAwMi4yNS0yLjI1di05YTIuMjUgMi4yNSAwIDAwLTIuMjUtMi4yNUgxNW0wLTNsLTMtM20wIDBsLTMgM20zLTNWMTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3VwbG9hZEltYWdlc30gY2xhc3NOYW1lPVwiaGlkZGVuXCIvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldERlc2NyaXB0aW9uKGV2LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgIDxsYWJlbD5QcmljZSAoaW4gRVVSKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gc2V0UHJpY2UoZXYudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJTcGlubmVyIiwiUmVhY3RTb3J0YWJsZSIsIlByb2R1Y3RGb3JtIiwiX2lkIiwidGl0bGUiLCJleGlzdGluZ1RpdGxlIiwiZGVzY3JpcHRpb24iLCJleGlzdGluZ0Rlc2NyaXB0aW9uIiwicHJpY2UiLCJleGlzdGluZ1ByaWNlIiwiaW1hZ2VzIiwiZXhpc3RpbmdJbWFnZXMiLCJjYXRlZ29yeSIsImFzc2lnbmVkQ2F0ZWdvcnkiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic2V0Q2F0ZWdvcnkiLCJzZXRQcmljZSIsInNldEltYWdlcyIsImdvVG9Qcm9kdWN0Iiwic2V0R29Ub1Byb2R1Y3QiLCJpc1VwbG9hZGluZyIsInNldElzVXBsb2FkaW5nIiwicm91dGVyIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsInNhdmVQcm9kdWN0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInB1dCIsInBvc3QiLCJwdXNoIiwidXBsb2FkSW1hZ2VzIiwiZmlsZXMiLCJ0YXJnZXQiLCJsZW5ndGgiLCJGb3JtRGF0YSIsImZpbGUiLCJhcHBlbmQiLCJyZXMiLCJvbGRJbWFnZXMiLCJsaW5rcyIsInVwZGF0ZUltYWdlc09yZGVyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJzZWxlY3QiLCJvcHRpb24iLCJtYXAiLCJjIiwibmFtZSIsInByb3BlcnRpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJsaXN0Iiwic2V0TGlzdCIsImxpbmsiLCJpbWciLCJzcmMiLCJhbHQiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});