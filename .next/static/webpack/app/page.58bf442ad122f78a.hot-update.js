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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// \"use client\";\n// import React, { useState } from \"react\";\n// const Button = ({\n//   size,\n//   color,\n//   backgroundColor,\n//   isBold,\n//   isSemibold,\n//   cursor,\n//   border,\n//   borderRadius,\n//   padding,\n//   isUppercase,\n//   width,\n//   children,\n//   rest,\n//   className,\n//   style,\n// }) => {\n//   const [isHovered, setIsHovered] = useState(false);\n//   const buttonStyle = {\n//     fontSize: size ? `${size}px` : \"16px\",\n//     color,\n//     backgroundColor: backgroundColor ? backgroundColor : \"transparent\",\n//     fontWeight: isBold ? \"700\" : isSemibold ? \"400\" : \"normal\",\n//     textTransform: isUppercase ? \"uppercase\" : \"none\",\n//     cursor: cursor ? cursor : \"pointer\",\n//     border: border ? border : \"none\",\n//     borderRadius: borderRadius ? borderRadius : \"0.15rem\",\n//     padding: padding ? padding : \".75rem 1rem\",\n//     // ...(isHovered && style.hover), // Apply hover styles if the button is hovered\n//     width: width ? width : \"auto\",\n//     ...style,\n//   };\n//   return (\n//     <button\n//       className={className}\n//       type=\"button\"\n//       onMouseEnter={() => setIsHovered(true)}\n//       onMouseLeave={() => setIsHovered(false)}\n//       {...rest}\n//       style={{ ...buttonStyle }}\n//     >\n//       {children}\n//     </button>\n//   );\n// };\n// export default Button;\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst Button = (param)=>{\n    let { size = \"16\", color, backgroundColor, isBold, isSemibold, cursor = \"pointer\", border, borderRadius = \"2\", padding, isUppercase, width, children, className, ...rest } = param;\n    // const baseClasses = `\n    //   ${size && `text-[${size}px]`}\n    //   ${color ? `text-[${color}]` : ''}\n    //   ${backgroundColor ? `bg-[${backgroundColor}]` : 'bg-transparent'}\n    //   ${isBold ? 'font-bold' : isSemibold ? 'font-semibold' : 'font-normal'}\n    //   ${isUppercase ? 'uppercase' : ''}\n    //   ${cursor ? `cursor-${cursor}` : 'cursor-pointer'}\n    //   ${border ? `border-[${border}]` : 'border-none'}\n    //   ${borderRadius ? `rounded-[${borderRadius}px]` : 'rounded-sm'}\n    //   transition-all duration-300 ease-in-out\n    //   hover:opacity-90\n    //   focus:outline-none focus:ring-2 focus:ring-opacity-50\n    //   // Responsive width\n    //   ${width ? `\n    //     w-full\n    //     sm:w-[${width}]\n    //     md:w-[${width}]\n    //     lg:w-[${width}]\n    //   ` : 'w-auto'}\n    //   // Responsive padding\n    //   ${padding ? `\n    //     p-2\n    //     sm:p-[${padding}]\n    //     md:p-[${padding}]\n    //     lg:p-[${padding}]\n    //   ` : 'p-2 sm:px-4 sm:py-3 md:px-6 md:py-4'}\n    //   // Responsive text size\n    //   text-sm\n    //   sm:text-[${parseInt(size) - 2}px]\n    //   md:text-[${size}px] \n    //   lg:text-[${parseInt(size) + 2}px]\n    //   xl:text-[${parseInt(size) + 4}px]\n    // `;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat(className),\n        type: \"button\",\n        ...rest,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/button/button.js\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Button;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQiwyQ0FBMkM7QUFFM0Msb0JBQW9CO0FBQ3BCLFVBQVU7QUFDVixXQUFXO0FBQ1gscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1gsY0FBYztBQUNkLFVBQVU7QUFDVixlQUFlO0FBQ2YsV0FBVztBQUNYLFVBQVU7QUFDVix1REFBdUQ7QUFDdkQsMEJBQTBCO0FBQzFCLDZDQUE2QztBQUM3QyxhQUFhO0FBQ2IsMEVBQTBFO0FBQzFFLGtFQUFrRTtBQUNsRSx5REFBeUQ7QUFDekQsMkNBQTJDO0FBQzNDLHdDQUF3QztBQUN4Qyw2REFBNkQ7QUFDN0Qsa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RixxQ0FBcUM7QUFDckMsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUCxhQUFhO0FBQ2IsY0FBYztBQUNkLDhCQUE4QjtBQUM5QixzQkFBc0I7QUFDdEIsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCxrQkFBa0I7QUFDbEIsbUNBQW1DO0FBQ25DLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBRUwseUJBQXlCOztBQUdDO0FBRTFCLE1BQU1DLFNBQVM7UUFBQyxFQUNkQyxPQUFPLElBQUksRUFDWEMsS0FBSyxFQUNMQyxlQUFlLEVBQ2ZDLE1BQU0sRUFDTkMsVUFBVSxFQUNWQyxTQUFTLFNBQVMsRUFDbEJDLE1BQU0sRUFDTkMsZUFBZSxHQUFHLEVBQ2xCQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVCxHQUFHQyxNQUNKO0lBQ0Msd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFDdEMsc0VBQXNFO0lBQ3RFLDJFQUEyRTtJQUMzRSxzQ0FBc0M7SUFDdEMsc0RBQXNEO0lBQ3RELHFEQUFxRDtJQUNyRCxtRUFBbUU7SUFDbkUsNENBQTRDO0lBQzVDLHFCQUFxQjtJQUNyQiwwREFBMEQ7SUFFMUQsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBRWxCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLCtDQUErQztJQUUvQyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxLQUFLO0lBRUwscUJBQ0UsOERBQUNDO1FBQ0NGLFdBQVcsR0FBYSxPQUFWQTtRQUNkRyxNQUFLO1FBQ0osR0FBR0YsSUFBSTtrQkFFUEY7Ozs7OztBQUdQO0tBOURNWjtBQWdFTixpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3phaGVlci9EZXNrdG9wLzExIG5vdiAyMDI0L3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gXCJ1c2UgY2xpZW50XCI7XG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gY29uc3QgQnV0dG9uID0gKHtcbi8vICAgc2l6ZSxcbi8vICAgY29sb3IsXG4vLyAgIGJhY2tncm91bmRDb2xvcixcbi8vICAgaXNCb2xkLFxuLy8gICBpc1NlbWlib2xkLFxuLy8gICBjdXJzb3IsXG4vLyAgIGJvcmRlcixcbi8vICAgYm9yZGVyUmFkaXVzLFxuLy8gICBwYWRkaW5nLFxuLy8gICBpc1VwcGVyY2FzZSxcbi8vICAgd2lkdGgsXG4vLyAgIGNoaWxkcmVuLFxuLy8gICByZXN0LFxuLy8gICBjbGFzc05hbWUsXG4vLyAgIHN0eWxlLFxuLy8gfSkgPT4ge1xuLy8gICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy8gICBjb25zdCBidXR0b25TdHlsZSA9IHtcbi8vICAgICBmb250U2l6ZTogc2l6ZSA/IGAke3NpemV9cHhgIDogXCIxNnB4XCIsXG4vLyAgICAgY29sb3IsXG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IgPyBiYWNrZ3JvdW5kQ29sb3IgOiBcInRyYW5zcGFyZW50XCIsXG4vLyAgICAgZm9udFdlaWdodDogaXNCb2xkID8gXCI3MDBcIiA6IGlzU2VtaWJvbGQgPyBcIjQwMFwiIDogXCJub3JtYWxcIixcbi8vICAgICB0ZXh0VHJhbnNmb3JtOiBpc1VwcGVyY2FzZSA/IFwidXBwZXJjYXNlXCIgOiBcIm5vbmVcIixcbi8vICAgICBjdXJzb3I6IGN1cnNvciA/IGN1cnNvciA6IFwicG9pbnRlclwiLFxuLy8gICAgIGJvcmRlcjogYm9yZGVyID8gYm9yZGVyIDogXCJub25lXCIsXG4vLyAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgPyBib3JkZXJSYWRpdXMgOiBcIjAuMTVyZW1cIixcbi8vICAgICBwYWRkaW5nOiBwYWRkaW5nID8gcGFkZGluZyA6IFwiLjc1cmVtIDFyZW1cIixcbi8vICAgICAvLyAuLi4oaXNIb3ZlcmVkICYmIHN0eWxlLmhvdmVyKSwgLy8gQXBwbHkgaG92ZXIgc3R5bGVzIGlmIHRoZSBidXR0b24gaXMgaG92ZXJlZFxuLy8gICAgIHdpZHRoOiB3aWR0aCA/IHdpZHRoIDogXCJhdXRvXCIsXG4vLyAgICAgLi4uc3R5bGUsXG4vLyAgIH07XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGJ1dHRvblxuLy8gICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4vLyAgICAgICB0eXBlPVwiYnV0dG9uXCJcbi8vICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuLy8gICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuLy8gICAgICAgey4uLnJlc3R9XG4vLyAgICAgICBzdHlsZT17eyAuLi5idXR0b25TdHlsZSB9fVxuLy8gICAgID5cbi8vICAgICAgIHtjaGlsZHJlbn1cbi8vICAgICA8L2J1dHRvbj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIHNpemUgPSBcIjE2XCIsXG4gIGNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3IsXG4gIGlzQm9sZCxcbiAgaXNTZW1pYm9sZCxcbiAgY3Vyc29yID0gXCJwb2ludGVyXCIsXG4gIGJvcmRlcixcbiAgYm9yZGVyUmFkaXVzID0gXCIyXCIsXG4gIHBhZGRpbmcsXG4gIGlzVXBwZXJjYXNlLFxuICB3aWR0aCxcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICAvLyBjb25zdCBiYXNlQ2xhc3NlcyA9IGBcbiAgLy8gICAke3NpemUgJiYgYHRleHQtWyR7c2l6ZX1weF1gfVxuICAvLyAgICR7Y29sb3IgPyBgdGV4dC1bJHtjb2xvcn1dYCA6ICcnfVxuICAvLyAgICR7YmFja2dyb3VuZENvbG9yID8gYGJnLVske2JhY2tncm91bmRDb2xvcn1dYCA6ICdiZy10cmFuc3BhcmVudCd9XG4gIC8vICAgJHtpc0JvbGQgPyAnZm9udC1ib2xkJyA6IGlzU2VtaWJvbGQgPyAnZm9udC1zZW1pYm9sZCcgOiAnZm9udC1ub3JtYWwnfVxuICAvLyAgICR7aXNVcHBlcmNhc2UgPyAndXBwZXJjYXNlJyA6ICcnfVxuICAvLyAgICR7Y3Vyc29yID8gYGN1cnNvci0ke2N1cnNvcn1gIDogJ2N1cnNvci1wb2ludGVyJ31cbiAgLy8gICAke2JvcmRlciA/IGBib3JkZXItWyR7Ym9yZGVyfV1gIDogJ2JvcmRlci1ub25lJ31cbiAgLy8gICAke2JvcmRlclJhZGl1cyA/IGByb3VuZGVkLVske2JvcmRlclJhZGl1c31weF1gIDogJ3JvdW5kZWQtc20nfVxuICAvLyAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFxuICAvLyAgIGhvdmVyOm9wYWNpdHktOTBcbiAgLy8gICBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb3BhY2l0eS01MFxuICAgIFxuICAvLyAgIC8vIFJlc3BvbnNpdmUgd2lkdGhcbiAgLy8gICAke3dpZHRoID8gYFxuICAvLyAgICAgdy1mdWxsXG4gIC8vICAgICBzbTp3LVske3dpZHRofV1cbiAgLy8gICAgIG1kOnctWyR7d2lkdGh9XVxuICAvLyAgICAgbGc6dy1bJHt3aWR0aH1dXG4gIC8vICAgYCA6ICd3LWF1dG8nfVxuXG4gIC8vICAgLy8gUmVzcG9uc2l2ZSBwYWRkaW5nXG4gIC8vICAgJHtwYWRkaW5nID8gYFxuICAvLyAgICAgcC0yXG4gIC8vICAgICBzbTpwLVske3BhZGRpbmd9XVxuICAvLyAgICAgbWQ6cC1bJHtwYWRkaW5nfV1cbiAgLy8gICAgIGxnOnAtWyR7cGFkZGluZ31dXG4gIC8vICAgYCA6ICdwLTIgc206cHgtNCBzbTpweS0zIG1kOnB4LTYgbWQ6cHktNCd9XG5cbiAgLy8gICAvLyBSZXNwb25zaXZlIHRleHQgc2l6ZVxuICAvLyAgIHRleHQtc21cbiAgLy8gICBzbTp0ZXh0LVske3BhcnNlSW50KHNpemUpIC0gMn1weF1cbiAgLy8gICBtZDp0ZXh0LVske3NpemV9cHhdIFxuICAvLyAgIGxnOnRleHQtWyR7cGFyc2VJbnQoc2l6ZSkgKyAyfXB4XVxuICAvLyAgIHhsOnRleHQtWyR7cGFyc2VJbnQoc2l6ZSkgKyA0fXB4XVxuICAvLyBgO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9YH1cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwic2l6ZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiaXNCb2xkIiwiaXNTZW1pYm9sZCIsImN1cnNvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJpc1VwcGVyY2FzZSIsIndpZHRoIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJyZXN0IiwiYnV0dG9uIiwidHlwZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/button/button.js\n"));

/***/ })

});