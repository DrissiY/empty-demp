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

/***/ "./Api.js":
/*!****************!*\
  !*** ./Api.js ***!
  \****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shopifyFetch: function() { return /* binding */ shopifyFetch; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function shopifyFetch(param) {\n    let { query, variables } = param;\n    const endpoint = \"https://www.ethni01.myshopify.com/\";\n    const key = \"f3a10d22bc94caeb6bddb5e034282485\";\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(endpoint, {\n            query,\n            variables\n        }, {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"X-Shopify-Storefront-Access-Token\": key\n            }\n        });\n        return {\n            status: response.status,\n            body: response.data\n        };\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return {\n            status: 500,\n            error: \"Error receiving data\"\n        };\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNGO0FBRWpCLGVBQWVFLGFBQWEsS0FBb0I7UUFBcEIsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBcEI7SUFDakMsTUFBTUMsV0FBVztJQUNqQixNQUFNQyxNQUFNO0lBRVosSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTVAsaURBQVMsQ0FBQ0ssVUFBVTtZQUN6Q0Y7WUFDQUM7UUFDRixHQUFHO1lBQ0RLLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixxQ0FBcUNIO1lBQ3ZDO1FBQ0Y7UUFFQSxPQUFPO1lBQ0xJLFFBQVFILFNBQVNHLE1BQU07WUFDdkJDLE1BQU1KLFNBQVNLLElBQUk7UUFDckI7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO1FBRXhCLE9BQU87WUFDTEgsUUFBUTtZQUNSRyxPQUFPO1FBQ1Q7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0FwaS5qcz9jOTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvcGlmeUZldGNoKHsgcXVlcnksIHZhcmlhYmxlcyB9KSB7XHJcbiAgY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly93d3cuZXRobmkwMS5teXNob3BpZnkuY29tLyc7XHJcbiAgY29uc3Qga2V5ID0gJ2YzYTEwZDIyYmM5NGNhZWI2YmRkYjVlMDM0MjgyNDg1JztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGVuZHBvaW50LCB7XHJcbiAgICAgIHF1ZXJ5LFxyXG4gICAgICB2YXJpYWJsZXNcclxuICAgIH0sIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ1gtU2hvcGlmeS1TdG9yZWZyb250LUFjY2Vzcy1Ub2tlbic6IGtleVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcclxuICAgICAgYm9keTogcmVzcG9uc2UuZGF0YVxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICBlcnJvcjogJ0Vycm9yIHJlY2VpdmluZyBkYXRhJ1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImNvcnMiLCJzaG9waWZ5RmV0Y2giLCJxdWVyeSIsInZhcmlhYmxlcyIsImVuZHBvaW50Iiwia2V5IiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwic3RhdHVzIiwiYm9keSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Api.js\n"));

/***/ })

});