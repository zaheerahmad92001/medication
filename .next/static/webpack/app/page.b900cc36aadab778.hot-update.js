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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// \"use client\";\n// import React, { useState } from \"react\";\n// const Button = ({\n//   size,\n//   color,\n//   backgroundColor,\n//   isBold,\n//   isSemibold,\n//   cursor,\n//   border,\n//   borderRadius,\n//   padding,\n//   isUppercase,\n//   width,\n//   children,\n//   rest,\n//   className,\n//   style,\n// }) => {\n//   const [isHovered, setIsHovered] = useState(false);\n//   const buttonStyle = {\n//     fontSize: size ? `${size}px` : \"16px\",\n//     color,\n//     backgroundColor: backgroundColor ? backgroundColor : \"transparent\",\n//     fontWeight: isBold ? \"700\" : isSemibold ? \"400\" : \"normal\",\n//     textTransform: isUppercase ? \"uppercase\" : \"none\",\n//     cursor: cursor ? cursor : \"pointer\",\n//     border: border ? border : \"none\",\n//     borderRadius: borderRadius ? borderRadius : \"0.15rem\",\n//     padding: padding ? padding : \".75rem 1rem\",\n//     // ...(isHovered && style.hover), // Apply hover styles if the button is hovered\n//     width: width ? width : \"auto\",\n//     ...style,\n//   };\n//   return (\n//     <button\n//       className={className}\n//       type=\"button\"\n//       onMouseEnter={() => setIsHovered(true)}\n//       onMouseLeave={() => setIsHovered(false)}\n//       {...rest}\n//       style={{ ...buttonStyle }}\n//     >\n//       {children}\n//     </button>\n//   );\n// };\n// export default Button;\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst Button = (param)=>{\n    let { size = \"16\", color, backgroundColor, isBold, isSemibold, cursor = \"pointer\", border, borderRadius = \"2\", padding, isUppercase, width, children, className, ...rest } = param;\n    // const baseClasses = `\n    //   // ${size && `text-[${size}px]`}\n    //   // ${color ? `text-[${color}]` : ''}\n    //   // ${backgroundColor ? `bg-[${backgroundColor}]` : 'bg-transparent'}\n    //   // ${isBold ? 'font-bold' : isSemibold ? 'font-semibold' : 'font-normal'}\n    //   // ${isUppercase ? 'uppercase' : ''}\n    //   // ${cursor ? `cursor-${cursor}` : 'cursor-pointer'}\n    //   // ${border ? `border-[${border}]` : 'border-none'}\n    //   // ${borderRadius ? `rounded-[${borderRadius}px]` : 'rounded-sm'}\n    //   transition-all duration-300 ease-in-out\n    //   hover:opacity-90\n    //   focus:outline-none focus:ring-2 focus:ring-opacity-50\n    //   // Responsive width\n    //   ${width ? `\n    //     w-full\n    //     sm:w-[${width}]\n    //     md:w-[${width}]\n    //     lg:w-[${width}]\n    //   ` : 'w-auto'}\n    //   // Responsive padding\n    //   ${padding ? `\n    //     p-2\n    //     sm:p-[${padding}]\n    //     md:p-[${padding}]\n    //     lg:p-[${padding}]\n    //   ` : 'p-2 sm:px-4 sm:py-3 md:px-6 md:py-4'}\n    //   // Responsive text size\n    //   text-sm\n    //   sm:text-[${parseInt(size) - 2}px]\n    //   md:text-[${size}px] \n    //   lg:text-[${parseInt(size) + 2}px]\n    //   xl:text-[${parseInt(size) + 4}px]\n    // `;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat(baseClasses, \" \").concat(className),\n        type: \"button\",\n        ...rest,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/button/button.js\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Button;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQiwyQ0FBMkM7QUFFM0Msb0JBQW9CO0FBQ3BCLFVBQVU7QUFDVixXQUFXO0FBQ1gscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1gsY0FBYztBQUNkLFVBQVU7QUFDVixlQUFlO0FBQ2YsV0FBVztBQUNYLFVBQVU7QUFDVix1REFBdUQ7QUFDdkQsMEJBQTBCO0FBQzFCLDZDQUE2QztBQUM3QyxhQUFhO0FBQ2IsMEVBQTBFO0FBQzFFLGtFQUFrRTtBQUNsRSx5REFBeUQ7QUFDekQsMkNBQTJDO0FBQzNDLHdDQUF3QztBQUN4Qyw2REFBNkQ7QUFDN0Qsa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RixxQ0FBcUM7QUFDckMsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUCxhQUFhO0FBQ2IsY0FBYztBQUNkLDhCQUE4QjtBQUM5QixzQkFBc0I7QUFDdEIsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCxrQkFBa0I7QUFDbEIsbUNBQW1DO0FBQ25DLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBRUwseUJBQXlCOztBQUdDO0FBRTFCLE1BQU1DLFNBQVM7UUFBQyxFQUNkQyxPQUFPLElBQUksRUFDWEMsS0FBSyxFQUNMQyxlQUFlLEVBQ2ZDLE1BQU0sRUFDTkMsVUFBVSxFQUNWQyxTQUFTLFNBQVMsRUFDbEJDLE1BQU0sRUFDTkMsZUFBZSxHQUFHLEVBQ2xCQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVCxHQUFHQyxNQUNKO0lBQ0Msd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekMseUVBQXlFO0lBQ3pFLDhFQUE4RTtJQUM5RSx5Q0FBeUM7SUFDekMseURBQXlEO0lBQ3pELHdEQUF3RDtJQUN4RCxzRUFBc0U7SUFDdEUsNENBQTRDO0lBQzVDLHFCQUFxQjtJQUNyQiwwREFBMEQ7SUFFMUQsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBRWxCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLCtDQUErQztJQUUvQyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxLQUFLO0lBRUwscUJBQ0UsOERBQUNDO1FBQ0NGLFdBQVcsR0FBa0JBLE9BQWZHLGFBQVksS0FBYSxPQUFWSDtRQUM3QkksTUFBSztRQUNKLEdBQUdILElBQUk7a0JBRVBGOzs7Ozs7QUFHUDtLQTlETVo7QUFnRU4saUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy96YWhlZXIvRGVza3RvcC8xMSBub3YgMjAyNC9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGNvbnN0IEJ1dHRvbiA9ICh7XG4vLyAgIHNpemUsXG4vLyAgIGNvbG9yLFxuLy8gICBiYWNrZ3JvdW5kQ29sb3IsXG4vLyAgIGlzQm9sZCxcbi8vICAgaXNTZW1pYm9sZCxcbi8vICAgY3Vyc29yLFxuLy8gICBib3JkZXIsXG4vLyAgIGJvcmRlclJhZGl1cyxcbi8vICAgcGFkZGluZyxcbi8vICAgaXNVcHBlcmNhc2UsXG4vLyAgIHdpZHRoLFxuLy8gICBjaGlsZHJlbixcbi8vICAgcmVzdCxcbi8vICAgY2xhc3NOYW1lLFxuLy8gICBzdHlsZSxcbi8vIH0pID0+IHtcbi8vICAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4vLyAgICAgZm9udFNpemU6IHNpemUgPyBgJHtzaXplfXB4YCA6IFwiMTZweFwiLFxuLy8gICAgIGNvbG9yLFxuLy8gICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yID8gYmFja2dyb3VuZENvbG9yIDogXCJ0cmFuc3BhcmVudFwiLFxuLy8gICAgIGZvbnRXZWlnaHQ6IGlzQm9sZCA/IFwiNzAwXCIgOiBpc1NlbWlib2xkID8gXCI0MDBcIiA6IFwibm9ybWFsXCIsXG4vLyAgICAgdGV4dFRyYW5zZm9ybTogaXNVcHBlcmNhc2UgPyBcInVwcGVyY2FzZVwiIDogXCJub25lXCIsXG4vLyAgICAgY3Vyc29yOiBjdXJzb3IgPyBjdXJzb3IgOiBcInBvaW50ZXJcIixcbi8vICAgICBib3JkZXI6IGJvcmRlciA/IGJvcmRlciA6IFwibm9uZVwiLFxuLy8gICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzID8gYm9yZGVyUmFkaXVzIDogXCIwLjE1cmVtXCIsXG4vLyAgICAgcGFkZGluZzogcGFkZGluZyA/IHBhZGRpbmcgOiBcIi43NXJlbSAxcmVtXCIsXG4vLyAgICAgLy8gLi4uKGlzSG92ZXJlZCAmJiBzdHlsZS5ob3ZlciksIC8vIEFwcGx5IGhvdmVyIHN0eWxlcyBpZiB0aGUgYnV0dG9uIGlzIGhvdmVyZWRcbi8vICAgICB3aWR0aDogd2lkdGggPyB3aWR0aCA6IFwiYXV0b1wiLFxuLy8gICAgIC4uLnN0eWxlLFxuLy8gICB9O1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxidXR0b25cbi8vICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuLy8gICAgICAgdHlwZT1cImJ1dHRvblwiXG4vLyAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cbi8vICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKX1cbi8vICAgICAgIHsuLi5yZXN0fVxuLy8gICAgICAgc3R5bGU9e3sgLi4uYnV0dG9uU3R5bGUgfX1cbi8vICAgICA+XG4vLyAgICAgICB7Y2hpbGRyZW59XG4vLyAgICAgPC9idXR0b24+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICBzaXplID0gXCIxNlwiLFxuICBjb2xvcixcbiAgYmFja2dyb3VuZENvbG9yLFxuICBpc0JvbGQsXG4gIGlzU2VtaWJvbGQsXG4gIGN1cnNvciA9IFwicG9pbnRlclwiLFxuICBib3JkZXIsXG4gIGJvcmRlclJhZGl1cyA9IFwiMlwiLFxuICBwYWRkaW5nLFxuICBpc1VwcGVyY2FzZSxcbiAgd2lkdGgsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIC4uLnJlc3Rcbn0pID0+IHtcbiAgLy8gY29uc3QgYmFzZUNsYXNzZXMgPSBgXG4gIC8vICAgLy8gJHtzaXplICYmIGB0ZXh0LVske3NpemV9cHhdYH1cbiAgLy8gICAvLyAke2NvbG9yID8gYHRleHQtWyR7Y29sb3J9XWAgOiAnJ31cbiAgLy8gICAvLyAke2JhY2tncm91bmRDb2xvciA/IGBiZy1bJHtiYWNrZ3JvdW5kQ29sb3J9XWAgOiAnYmctdHJhbnNwYXJlbnQnfVxuICAvLyAgIC8vICR7aXNCb2xkID8gJ2ZvbnQtYm9sZCcgOiBpc1NlbWlib2xkID8gJ2ZvbnQtc2VtaWJvbGQnIDogJ2ZvbnQtbm9ybWFsJ31cbiAgLy8gICAvLyAke2lzVXBwZXJjYXNlID8gJ3VwcGVyY2FzZScgOiAnJ31cbiAgLy8gICAvLyAke2N1cnNvciA/IGBjdXJzb3ItJHtjdXJzb3J9YCA6ICdjdXJzb3ItcG9pbnRlcid9XG4gIC8vICAgLy8gJHtib3JkZXIgPyBgYm9yZGVyLVske2JvcmRlcn1dYCA6ICdib3JkZXItbm9uZSd9XG4gIC8vICAgLy8gJHtib3JkZXJSYWRpdXMgPyBgcm91bmRlZC1bJHtib3JkZXJSYWRpdXN9cHhdYCA6ICdyb3VuZGVkLXNtJ31cbiAgLy8gICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcbiAgLy8gICBob3ZlcjpvcGFjaXR5LTkwXG4gIC8vICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9wYWNpdHktNTBcbiAgICBcbiAgLy8gICAvLyBSZXNwb25zaXZlIHdpZHRoXG4gIC8vICAgJHt3aWR0aCA/IGBcbiAgLy8gICAgIHctZnVsbFxuICAvLyAgICAgc206dy1bJHt3aWR0aH1dXG4gIC8vICAgICBtZDp3LVske3dpZHRofV1cbiAgLy8gICAgIGxnOnctWyR7d2lkdGh9XVxuICAvLyAgIGAgOiAndy1hdXRvJ31cblxuICAvLyAgIC8vIFJlc3BvbnNpdmUgcGFkZGluZ1xuICAvLyAgICR7cGFkZGluZyA/IGBcbiAgLy8gICAgIHAtMlxuICAvLyAgICAgc206cC1bJHtwYWRkaW5nfV1cbiAgLy8gICAgIG1kOnAtWyR7cGFkZGluZ31dXG4gIC8vICAgICBsZzpwLVske3BhZGRpbmd9XVxuICAvLyAgIGAgOiAncC0yIHNtOnB4LTQgc206cHktMyBtZDpweC02IG1kOnB5LTQnfVxuXG4gIC8vICAgLy8gUmVzcG9uc2l2ZSB0ZXh0IHNpemVcbiAgLy8gICB0ZXh0LXNtXG4gIC8vICAgc206dGV4dC1bJHtwYXJzZUludChzaXplKSAtIDJ9cHhdXG4gIC8vICAgbWQ6dGV4dC1bJHtzaXplfXB4XSBcbiAgLy8gICBsZzp0ZXh0LVske3BhcnNlSW50KHNpemUpICsgMn1weF1cbiAgLy8gICB4bDp0ZXh0LVske3BhcnNlSW50KHNpemUpICsgNH1weF1cbiAgLy8gYDtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzZXN9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInNpemUiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImlzQm9sZCIsImlzU2VtaWJvbGQiLCJjdXJzb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiaXNVcHBlcmNhc2UiLCJ3aWR0aCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmVzdCIsImJ1dHRvbiIsImJhc2VDbGFzc2VzIiwidHlwZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/button/button.js\n"));

/***/ })

});