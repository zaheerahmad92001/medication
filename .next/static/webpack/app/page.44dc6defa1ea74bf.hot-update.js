"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// \"use client\";\n// import React, { useState } from \"react\";\n// const Button = ({\n//   size,\n//   color,\n//   backgroundColor,\n//   isBold,\n//   isSemibold,\n//   cursor,\n//   border,\n//   borderRadius,\n//   padding,\n//   isUppercase,\n//   width,\n//   children,\n//   rest,\n//   className,\n//   style,\n// }) => {\n//   const [isHovered, setIsHovered] = useState(false);\n//   const buttonStyle = {\n//     fontSize: size ? `${size}px` : \"16px\",\n//     color,\n//     backgroundColor: backgroundColor ? backgroundColor : \"transparent\",\n//     fontWeight: isBold ? \"700\" : isSemibold ? \"400\" : \"normal\",\n//     textTransform: isUppercase ? \"uppercase\" : \"none\",\n//     cursor: cursor ? cursor : \"pointer\",\n//     border: border ? border : \"none\",\n//     borderRadius: borderRadius ? borderRadius : \"0.15rem\",\n//     padding: padding ? padding : \".75rem 1rem\",\n//     // ...(isHovered && style.hover), // Apply hover styles if the button is hovered\n//     width: width ? width : \"auto\",\n//     ...style,\n//   };\n//   return (\n//     <button\n//       className={className}\n//       type=\"button\"\n//       onMouseEnter={() => setIsHovered(true)}\n//       onMouseLeave={() => setIsHovered(false)}\n//       {...rest}\n//       style={{ ...buttonStyle }}\n//     >\n//       {children}\n//     </button>\n//   );\n// };\n// export default Button;\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst Button = (param)=>{\n    let { size = \"16\", color, backgroundColor, isBold, isSemibold, cursor = \"pointer\", border, borderRadius = \"2\", padding, isUppercase, width, children, className, ...rest } = param;\n    const baseClasses = \"\\n    // \".concat(size && \"text-[\".concat(size, \"px]\"), \"\\n    // \").concat(color ? \"text-[\".concat(color, \"]\") : '', \"\\n    // \").concat(backgroundColor ? \"bg-[\".concat(backgroundColor, \"]\") : 'bg-transparent', \"\\n    // \").concat(isBold ? 'font-bold' : isSemibold ? 'font-semibold' : 'font-normal', \"\\n    // \").concat(isUppercase ? 'uppercase' : '', \"\\n    // \").concat(cursor ? \"cursor-\".concat(cursor) : 'cursor-pointer', \"\\n    // \").concat(border ? \"border-[\".concat(border, \"]\") : 'border-none', \"\\n    // \").concat(borderRadius ? \"rounded-[\".concat(borderRadius, \"px]\") : 'rounded-sm', \"\\n    transition-all duration-300 ease-in-out\\n    hover:opacity-90\\n    focus:outline-none focus:ring-2 focus:ring-opacity-50\\n    \\n    // Responsive width\\n    \").concat(width ? \"\\n      w-full\\n      sm:w-[\".concat(width, \"]\\n      md:w-[\").concat(width, \"]\\n      lg:w-[\").concat(width, \"]\\n    \") : 'w-auto', \"\\n\\n    // Responsive padding\\n    \").concat(padding ? \"\\n      p-2\\n      sm:p-[\".concat(padding, \"]\\n      md:p-[\").concat(padding, \"]\\n      lg:p-[\").concat(padding, \"]\\n    \") : 'p-2 sm:px-4 sm:py-3 md:px-6 md:py-4', \"\\n\\n    // Responsive text size\\n    text-sm\\n    sm:text-[\").concat(parseInt(size) - 2, \"px]\\n    md:text-[\").concat(size, \"px] \\n    lg:text-[\").concat(parseInt(size) + 2, \"px]\\n    xl:text-[\").concat(parseInt(size) + 4, \"px]\\n  \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat(baseClasses, \" \").concat(className),\n        type: \"button\",\n        ...rest,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/button/button.js\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Button;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQiwyQ0FBMkM7QUFFM0Msb0JBQW9CO0FBQ3BCLFVBQVU7QUFDVixXQUFXO0FBQ1gscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1gsY0FBYztBQUNkLFVBQVU7QUFDVixlQUFlO0FBQ2YsV0FBVztBQUNYLFVBQVU7QUFDVix1REFBdUQ7QUFDdkQsMEJBQTBCO0FBQzFCLDZDQUE2QztBQUM3QyxhQUFhO0FBQ2IsMEVBQTBFO0FBQzFFLGtFQUFrRTtBQUNsRSx5REFBeUQ7QUFDekQsMkNBQTJDO0FBQzNDLHdDQUF3QztBQUN4Qyw2REFBNkQ7QUFDN0Qsa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RixxQ0FBcUM7QUFDckMsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUCxhQUFhO0FBQ2IsY0FBYztBQUNkLDhCQUE4QjtBQUM5QixzQkFBc0I7QUFDdEIsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCxrQkFBa0I7QUFDbEIsbUNBQW1DO0FBQ25DLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBRUwseUJBQXlCOztBQUdDO0FBRTFCLE1BQU1DLFNBQVM7UUFBQyxFQUNkQyxPQUFPLElBQUksRUFDWEMsS0FBSyxFQUNMQyxlQUFlLEVBQ2ZDLE1BQU0sRUFDTkMsVUFBVSxFQUNWQyxTQUFTLFNBQVMsRUFDbEJDLE1BQU0sRUFDTkMsZUFBZSxHQUFHLEVBQ2xCQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVCxHQUFHQyxNQUNKO0lBQ0MsTUFBTUMsY0FBYyxZQUViYixPQURBRCxRQUFRLFNBQWMsT0FBTEEsTUFBSyxRQUFLLGFBRTNCRSxPQURBRCxRQUFRLFNBQWUsT0FBTkEsT0FBTSxPQUFLLElBQUcsYUFFL0JFLE9BREFELGtCQUFrQixPQUF1QixPQUFoQkEsaUJBQWdCLE9BQUssa0JBQWlCLGFBRS9ETyxPQURBTixTQUFTLGNBQWNDLGFBQWEsa0JBQWtCLGVBQWMsYUFFcEVDLE9BREFJLGNBQWMsY0FBYyxJQUFHLGFBRS9CSCxPQURBRCxTQUFTLFVBQWlCLE9BQVBBLFVBQVcsa0JBQWlCLGFBRS9DRSxPQURBRCxTQUFTLFdBQWtCLE9BQVBBLFFBQU8sT0FBSyxlQUFjLGFBT2pESSxPQU5HSCxlQUFlLFlBQXlCLE9BQWJBLGNBQWEsU0FBTyxjQUFhLHVLQWMvREMsT0FSQUUsUUFBUSwrQkFHQUEsT0FEQUEsT0FBTSxtQkFFTkEsT0FEQUEsT0FBTSxtQkFDQSxPQUFOQSxPQUFNLGFBQ1osVUFBUyx1Q0FZRkssT0FUVFAsVUFBVSw0QkFHRkEsT0FEQUEsU0FBUSxtQkFFUkEsT0FEQUEsU0FBUSxtQkFDQSxPQUFSQSxTQUFRLGFBQ2QsdUNBQXNDLCtEQUsvQlIsT0FEQWUsU0FBU2YsUUFBUSxHQUFFLHNCQUVuQmUsT0FEQWYsTUFBSyx1QkFFTGUsT0FEQUEsU0FBU2YsUUFBUSxHQUFFLHNCQUNBLE9BQW5CZSxTQUFTZixRQUFRLEdBQUU7SUFHaEMscUJBQ0UsOERBQUNnQjtRQUNDSixXQUFXLEdBQWtCQSxPQUFmRSxhQUFZLEtBQWEsT0FBVkY7UUFDN0JLLE1BQUs7UUFDSixHQUFHSixJQUFJO2tCQUVQRjs7Ozs7O0FBR1A7S0E5RE1aO0FBZ0VOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvemFoZWVyL0Rlc2t0b3AvMTEgbm92IDIwMjQvc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIjtcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBjb25zdCBCdXR0b24gPSAoe1xuLy8gICBzaXplLFxuLy8gICBjb2xvcixcbi8vICAgYmFja2dyb3VuZENvbG9yLFxuLy8gICBpc0JvbGQsXG4vLyAgIGlzU2VtaWJvbGQsXG4vLyAgIGN1cnNvcixcbi8vICAgYm9yZGVyLFxuLy8gICBib3JkZXJSYWRpdXMsXG4vLyAgIHBhZGRpbmcsXG4vLyAgIGlzVXBwZXJjYXNlLFxuLy8gICB3aWR0aCxcbi8vICAgY2hpbGRyZW4sXG4vLyAgIHJlc3QsXG4vLyAgIGNsYXNzTmFtZSxcbi8vICAgc3R5bGUsXG4vLyB9KSA9PiB7XG4vLyAgIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuLy8gICAgIGZvbnRTaXplOiBzaXplID8gYCR7c2l6ZX1weGAgOiBcIjE2cHhcIixcbi8vICAgICBjb2xvcixcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciA/IGJhY2tncm91bmRDb2xvciA6IFwidHJhbnNwYXJlbnRcIixcbi8vICAgICBmb250V2VpZ2h0OiBpc0JvbGQgPyBcIjcwMFwiIDogaXNTZW1pYm9sZCA/IFwiNDAwXCIgOiBcIm5vcm1hbFwiLFxuLy8gICAgIHRleHRUcmFuc2Zvcm06IGlzVXBwZXJjYXNlID8gXCJ1cHBlcmNhc2VcIiA6IFwibm9uZVwiLFxuLy8gICAgIGN1cnNvcjogY3Vyc29yID8gY3Vyc29yIDogXCJwb2ludGVyXCIsXG4vLyAgICAgYm9yZGVyOiBib3JkZXIgPyBib3JkZXIgOiBcIm5vbmVcIixcbi8vICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyA/IGJvcmRlclJhZGl1cyA6IFwiMC4xNXJlbVwiLFxuLy8gICAgIHBhZGRpbmc6IHBhZGRpbmcgPyBwYWRkaW5nIDogXCIuNzVyZW0gMXJlbVwiLFxuLy8gICAgIC8vIC4uLihpc0hvdmVyZWQgJiYgc3R5bGUuaG92ZXIpLCAvLyBBcHBseSBob3ZlciBzdHlsZXMgaWYgdGhlIGJ1dHRvbiBpcyBob3ZlcmVkXG4vLyAgICAgd2lkdGg6IHdpZHRoID8gd2lkdGggOiBcImF1dG9cIixcbi8vICAgICAuLi5zdHlsZSxcbi8vICAgfTtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8YnV0dG9uXG4vLyAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbi8vICAgICAgIHR5cGU9XCJidXR0b25cIlxuLy8gICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4vLyAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4vLyAgICAgICB7Li4ucmVzdH1cbi8vICAgICAgIHN0eWxlPXt7IC4uLmJ1dHRvblN0eWxlIH19XG4vLyAgICAgPlxuLy8gICAgICAge2NoaWxkcmVufVxuLy8gICAgIDwvYnV0dG9uPlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgc2l6ZSA9IFwiMTZcIixcbiAgY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgaXNCb2xkLFxuICBpc1NlbWlib2xkLFxuICBjdXJzb3IgPSBcInBvaW50ZXJcIixcbiAgYm9yZGVyLFxuICBib3JkZXJSYWRpdXMgPSBcIjJcIixcbiAgcGFkZGluZyxcbiAgaXNVcHBlcmNhc2UsXG4gIHdpZHRoLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IGJhc2VDbGFzc2VzID0gYFxuICAgIC8vICR7c2l6ZSAmJiBgdGV4dC1bJHtzaXplfXB4XWB9XG4gICAgLy8gJHtjb2xvciA/IGB0ZXh0LVske2NvbG9yfV1gIDogJyd9XG4gICAgLy8gJHtiYWNrZ3JvdW5kQ29sb3IgPyBgYmctWyR7YmFja2dyb3VuZENvbG9yfV1gIDogJ2JnLXRyYW5zcGFyZW50J31cbiAgICAvLyAke2lzQm9sZCA/ICdmb250LWJvbGQnIDogaXNTZW1pYm9sZCA/ICdmb250LXNlbWlib2xkJyA6ICdmb250LW5vcm1hbCd9XG4gICAgLy8gJHtpc1VwcGVyY2FzZSA/ICd1cHBlcmNhc2UnIDogJyd9XG4gICAgLy8gJHtjdXJzb3IgPyBgY3Vyc29yLSR7Y3Vyc29yfWAgOiAnY3Vyc29yLXBvaW50ZXInfVxuICAgIC8vICR7Ym9yZGVyID8gYGJvcmRlci1bJHtib3JkZXJ9XWAgOiAnYm9yZGVyLW5vbmUnfVxuICAgIC8vICR7Ym9yZGVyUmFkaXVzID8gYHJvdW5kZWQtWyR7Ym9yZGVyUmFkaXVzfXB4XWAgOiAncm91bmRlZC1zbSd9XG4gICAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XG4gICAgaG92ZXI6b3BhY2l0eS05MFxuICAgIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vcGFjaXR5LTUwXG4gICAgXG4gICAgLy8gUmVzcG9uc2l2ZSB3aWR0aFxuICAgICR7d2lkdGggPyBgXG4gICAgICB3LWZ1bGxcbiAgICAgIHNtOnctWyR7d2lkdGh9XVxuICAgICAgbWQ6dy1bJHt3aWR0aH1dXG4gICAgICBsZzp3LVske3dpZHRofV1cbiAgICBgIDogJ3ctYXV0byd9XG5cbiAgICAvLyBSZXNwb25zaXZlIHBhZGRpbmdcbiAgICAke3BhZGRpbmcgPyBgXG4gICAgICBwLTJcbiAgICAgIHNtOnAtWyR7cGFkZGluZ31dXG4gICAgICBtZDpwLVske3BhZGRpbmd9XVxuICAgICAgbGc6cC1bJHtwYWRkaW5nfV1cbiAgICBgIDogJ3AtMiBzbTpweC00IHNtOnB5LTMgbWQ6cHgtNiBtZDpweS00J31cblxuICAgIC8vIFJlc3BvbnNpdmUgdGV4dCBzaXplXG4gICAgdGV4dC1zbVxuICAgIHNtOnRleHQtWyR7cGFyc2VJbnQoc2l6ZSkgLSAyfXB4XVxuICAgIG1kOnRleHQtWyR7c2l6ZX1weF0gXG4gICAgbGc6dGV4dC1bJHtwYXJzZUludChzaXplKSArIDJ9cHhdXG4gICAgeGw6dGV4dC1bJHtwYXJzZUludChzaXplKSArIDR9cHhdXG4gIGA7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc2VzfSAke2NsYXNzTmFtZX1gfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJzaXplIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc0JvbGQiLCJpc1NlbWlib2xkIiwiY3Vyc29yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImlzVXBwZXJjYXNlIiwid2lkdGgiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInJlc3QiLCJiYXNlQ2xhc3NlcyIsInBhcnNlSW50IiwiYnV0dG9uIiwidHlwZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/button/button.js\n"));

/***/ })

});