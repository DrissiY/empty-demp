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

/***/ "./components/common/product-box/MasterProductDetail.js":
/*!**************************************************************!*\
  !*** ./components/common/product-box/MasterProductDetail.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MasterProductDetail = (param)=>{\n    let { product, productDetail, currency, uniqueTags, detailClass, title, des, variantChangeByColor } = param;\n    let RatingStars = [];\n    let rating = 5;\n    for(var i = 0; i < rating; i++){\n        RatingStars.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n            className: \"fa fa-star\"\n        }, i, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n            lineNumber: 16,\n            columnNumber: 22\n        }, undefined));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"product-detail \".concat(productDetail, \" \").concat(detailClass),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                title !== \"Product style 4\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rating\",\n                    children: RatingStars\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined) : \"\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    children: product.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                des ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: product.description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n                    lineNumber: 28,\n                    columnNumber: 16\n                }, undefined) : \"\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: [\n                        currency.symbol,\n                        ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"del\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"money\",\n                                children: [\n                                    currency.symbol,\n                                    (product.price * currency.value).toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                product.type === \"jewellery\" || product.type === \"nursery\" || product.type === \"beauty\" || product.type === \"electronics\" || product.type === \"goggles\" || product.type === \"watch\" || product.type === \"pets\" ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: title !== \"Product style 4\" && uniqueTags[0].color ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"color-variant\",\n                        children: uniqueTags.map((vari, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: vari.color,\n                                title: vari.color,\n                                onClick: ()=>variantChangeByColor(vari.image_id, product.images)\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n                        lineNumber: 59,\n                        columnNumber: 15\n                    }, undefined) : \"\"\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Ethni-store\\\\empty-demp\\\\components\\\\common\\\\product-box\\\\MasterProductDetail.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MasterProductDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasterProductDetail);\nvar _c;\n$RefreshReg$(_c, \"MasterProductDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0LWJveC9NYXN0ZXJQcm9kdWN0RGV0YWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxzQkFBc0I7UUFBQyxFQUMzQkMsT0FBTyxFQUNQQyxhQUFhLEVBQ2JDLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLEtBQUssRUFDTEMsR0FBRyxFQUNIQyxvQkFBb0IsRUFDckI7SUFDQyxJQUFJQyxjQUFjLEVBQUU7SUFDcEIsSUFBSUMsU0FBUztJQUNiLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRCxRQUFRQyxJQUFLO1FBQy9CRixZQUFZRyxJQUFJLGVBQUMsOERBQUNEO1lBQUVFLFdBQVU7V0FBa0JGOzs7OztJQUNsRDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJRCxXQUFXLGtCQUFtQ1IsT0FBakJILGVBQWMsS0FBZSxPQUFaRztrQkFDakQsNEVBQUNTOztnQkFDRVIsVUFBVSxrQ0FDVCw4REFBQ1E7b0JBQUlELFdBQVU7OEJBQVVKOzs7OztnQ0FFekI7OEJBRUYsOERBQUNNOzhCQUFJZCxRQUFRSyxLQUFLOzs7Ozs7Z0JBQ2pCQyxvQkFBTSw4REFBQ1M7OEJBQUdmLFFBQVFnQixXQUFXOzs7OztnQ0FBUTs4QkFDdEMsOERBQUNDOzt3QkFDRWYsU0FBU2dCLE1BQU07d0JBRWQsRUFBQ2xCLFFBQVFtQixLQUFLLEdBQUcsUUFBU0EsS0FBSyxHQUFHbkIsUUFBUW9CLFFBQVEsR0FBSSxHQUFFLElBQ3hEbEIsU0FBU21CLEtBQUssRUFDZEMsT0FBTyxDQUFDO3NDQUNWLDhEQUFDQztzQ0FDQyw0RUFBQ0M7Z0NBQUtaLFdBQVU7O29DQUNiVixTQUFTZ0IsTUFBTTtvQ0FDZGxCLENBQUFBLFFBQVFtQixLQUFLLEdBQUdqQixTQUFTbUIsS0FBSyxFQUFFQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFVL0N0QixRQUFReUIsSUFBSSxLQUFLLGVBQ2xCekIsUUFBUXlCLElBQUksS0FBSyxhQUNqQnpCLFFBQVF5QixJQUFJLEtBQUssWUFDakJ6QixRQUFReUIsSUFBSSxLQUFLLGlCQUNqQnpCLFFBQVF5QixJQUFJLEtBQUssYUFDakJ6QixRQUFReUIsSUFBSSxLQUFLLFdBQ2pCekIsUUFBUXlCLElBQUksS0FBSyxTQUNmLG1CQUVBOzhCQUNHcEIsVUFBVSxxQkFBcUJGLFVBQVUsQ0FBQyxFQUFFLENBQUN1QixLQUFLLGlCQUNqRCw4REFBQ0M7d0JBQUdmLFdBQVU7a0NBQ1hULFdBQVd5QixHQUFHLENBQUMsQ0FBQ0MsTUFBTW5COzRCQUNyQixxQkFDRSw4REFBQ29CO2dDQUNDbEIsV0FBV2lCLEtBQUtILEtBQUs7Z0NBRXJCckIsT0FBT3dCLEtBQUtILEtBQUs7Z0NBQ2pCSyxTQUFTLElBQ1B4QixxQkFBcUJzQixLQUFLRyxRQUFRLEVBQUVoQyxRQUFRaUMsTUFBTTsrQkFIL0N2Qjs7Ozs7d0JBT1g7Ozs7O29DQUdGOzs7Ozs7Ozs7Ozs7O0FBT2Q7S0E5RU1YO0FBZ0ZOLCtEQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vcHJvZHVjdC1ib3gvTWFzdGVyUHJvZHVjdERldGFpbC5qcz8zOWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1hc3RlclByb2R1Y3REZXRhaWwgPSAoe1xyXG4gIHByb2R1Y3QsXHJcbiAgcHJvZHVjdERldGFpbCxcclxuICBjdXJyZW5jeSxcclxuICB1bmlxdWVUYWdzLFxyXG4gIGRldGFpbENsYXNzLFxyXG4gIHRpdGxlLFxyXG4gIGRlcyxcclxuICB2YXJpYW50Q2hhbmdlQnlDb2xvcixcclxufSkgPT4ge1xyXG4gIGxldCBSYXRpbmdTdGFycyA9IFtdO1xyXG4gIGxldCByYXRpbmcgPSA1O1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF0aW5nOyBpKyspIHtcclxuICAgIFJhdGluZ1N0YXJzLnB1c2goPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIGtleT17aX0+PC9pPik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LWRldGFpbCAke3Byb2R1Y3REZXRhaWx9ICR7ZGV0YWlsQ2xhc3N9YH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RpdGxlICE9PSBcIlByb2R1Y3Qgc3R5bGUgNFwiID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj57UmF0aW5nU3RhcnN9PC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApfVxyXG4gICAgICAgIDxoNj57cHJvZHVjdC50aXRsZX08L2g2PlxyXG4gICAgICAgIHtkZXMgPyA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+IDogXCJcIn1cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICB7Y3VycmVuY3kuc3ltYm9sfVxyXG4gICAgICAgICAgeyhcclxuICAgICAgICAgICAgKHByb2R1Y3QucHJpY2UgLSAocHJvZHVjdC5wcmljZSAqIHByb2R1Y3QuZGlzY291bnQpIC8gMTAwKSAqXHJcbiAgICAgICAgICAgIGN1cnJlbmN5LnZhbHVlXHJcbiAgICAgICAgICApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICA8ZGVsPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb25leVwiPlxyXG4gICAgICAgICAgICAgIHtjdXJyZW5jeS5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgeyhwcm9kdWN0LnByaWNlICogY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGVsPlxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIHsvKiB7cHJvZHVjdC52YXJpYW50cy5tYXAoKHZhcmkpID0+IHtcclxuICAgICAgICAgIHZhciBmaW5kSXRlbSA9IHVuaXF1ZVRhZ3MuZmluZCgoeCkgPT4geC5jb2xvciA9PT0gdmFyaS5jb2xvcik7XHJcbiAgICAgICAgICBpZiAoIWZpbmRJdGVtKSB1bmlxdWVUYWdzLnB1c2godmFyaSk7XHJcbiAgICAgICAgfSl9ICovfVxyXG5cclxuICAgICAgICB7cHJvZHVjdC50eXBlID09PSBcImpld2VsbGVyeVwiIHx8XHJcbiAgICAgICAgcHJvZHVjdC50eXBlID09PSBcIm51cnNlcnlcIiB8fFxyXG4gICAgICAgIHByb2R1Y3QudHlwZSA9PT0gXCJiZWF1dHlcIiB8fFxyXG4gICAgICAgIHByb2R1Y3QudHlwZSA9PT0gXCJlbGVjdHJvbmljc1wiIHx8XHJcbiAgICAgICAgcHJvZHVjdC50eXBlID09PSBcImdvZ2dsZXNcIiB8fFxyXG4gICAgICAgIHByb2R1Y3QudHlwZSA9PT0gXCJ3YXRjaFwiIHx8XHJcbiAgICAgICAgcHJvZHVjdC50eXBlID09PSBcInBldHNcIiA/IChcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RpdGxlICE9PSBcIlByb2R1Y3Qgc3R5bGUgNFwiICYmIHVuaXF1ZVRhZ3NbMF0uY29sb3IgPyAoXHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbG9yLXZhcmlhbnRcIj5cclxuICAgICAgICAgICAgICAgIHt1bmlxdWVUYWdzLm1hcCgodmFyaSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt2YXJpLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3ZhcmkuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Q2hhbmdlQnlDb2xvcih2YXJpLmltYWdlX2lkLCBwcm9kdWN0LmltYWdlcylcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9saT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyUHJvZHVjdERldGFpbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFzdGVyUHJvZHVjdERldGFpbCIsInByb2R1Y3QiLCJwcm9kdWN0RGV0YWlsIiwiY3VycmVuY3kiLCJ1bmlxdWVUYWdzIiwiZGV0YWlsQ2xhc3MiLCJ0aXRsZSIsImRlcyIsInZhcmlhbnRDaGFuZ2VCeUNvbG9yIiwiUmF0aW5nU3RhcnMiLCJyYXRpbmciLCJpIiwicHVzaCIsImNsYXNzTmFtZSIsImRpdiIsImg2IiwicCIsImRlc2NyaXB0aW9uIiwiaDQiLCJzeW1ib2wiLCJwcmljZSIsImRpc2NvdW50IiwidmFsdWUiLCJ0b0ZpeGVkIiwiZGVsIiwic3BhbiIsInR5cGUiLCJjb2xvciIsInVsIiwibWFwIiwidmFyaSIsImxpIiwib25DbGljayIsImltYWdlX2lkIiwiaW1hZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/product-box/MasterProductDetail.js\n"));

/***/ })

});