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

/***/ "(app-pages-browser)/./src/components/iconSlider/iconSlider.js":
/*!*************************************************!*\
  !*** ./src/components/iconSlider/iconSlider.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/scrollbar */ \"(app-pages-browser)/./node_modules/swiper/modules/scrollbar.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _sliderCard_sliderCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sliderCard/sliderCard */ \"(app-pages-browser)/./src/components/iconSlider/sliderCard/sliderCard.js\");\n/* harmony import */ var _icons_rightIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/icons/rightIcon */ \"(app-pages-browser)/./src/icons/rightIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Import Swiper styles\n\n\n\n\n\n\n\nconst IconSlider = (param)=>{\n    let { data } = param;\n    _s();\n    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative mx-10 lg:mx-0 lg:ml-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center mt-10 mb-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay\n                ],\n                spaceBetween: 50,\n                // slidesPerView={4}\n                pagination: {\n                    clickable: false\n                },\n                navigation: false,\n                onSwiper: (swiper)=>console.log(swiper),\n                onSlideChange: ()=>console.log(\"slide change\"),\n                loop: true,\n                autoplay: {\n                    delay: 6500,\n                    disableOnInteraction: false\n                },\n                breakpoints: {\n                    320: {\n                        slidesPerView: 1,\n                        spaceBetween: 10\n                    },\n                    480: {\n                        slidesPerView: 2,\n                        spaceBetween: 10\n                    },\n                    768: {\n                        slidesPerView: 3.2,\n                        spaceBetween: 20\n                    },\n                    1024: {\n                        slidesPerView: 3.2,\n                        spaceBetween: 30\n                    }\n                },\n                children: data === null || data === void 0 ? void 0 : data.map((img, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sliderCard_sliderCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            text: img.text,\n                            img: img.src,\n                            imgAlt: img === null || img === void 0 ? void 0 : img.imgAlt,\n                            btnText: img.btnText,\n                            btnText2: img.btnText2\n                        }, void 0, false, {\n                            fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(IconSlider, \"7yKpomHFPHyHiOpTV4g/MTjgI7I=\", false, function() {\n    return [\n        swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper\n    ];\n});\n_c = IconSlider;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconSlider);\nvar _c;\n$RefreshReg$(_c, \"IconSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2ljb25TbGlkZXIvaWNvblNsaWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBT3dCO0FBRXNDO0FBRTlELHVCQUF1QjtBQUNIO0FBQ1c7QUFDQTtBQUNEO0FBRUM7QUFDa0I7QUFDUDtBQUUxQyxNQUFNVyxhQUFhO1FBQUMsRUFDbEJDLElBQUksRUFDTDs7SUFDQyxNQUFNQyxTQUFTTix1REFBU0E7SUFDeEIscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNWLGdEQUFNQTtnQkFDTFcsU0FBUztvQkFBQ1osb0RBQVFBO2lCQUFDO2dCQUNuQmEsY0FBYztnQkFDZCxvQkFBb0I7Z0JBQ3BCQyxZQUFZO29CQUNWQyxXQUFXO2dCQUNiO2dCQUNBQyxZQUFZO2dCQUNaQyxVQUFVLENBQUNSLFNBQVdTLFFBQVFDLEdBQUcsQ0FBQ1Y7Z0JBQ2xDVyxlQUFlLElBQU1GLFFBQVFDLEdBQUcsQ0FBQztnQkFDakNFLElBQUk7Z0JBQ0pDLFVBQVU7b0JBQ1JDLE9BQU87b0JBQ1BDLHNCQUFzQjtnQkFDeEI7Z0JBQ0FDLGFBQWE7b0JBQ1gsS0FBSzt3QkFDSEMsZUFBZTt3QkFDZmIsY0FBYztvQkFDaEI7b0JBQ0EsS0FBSzt3QkFDSGEsZUFBZTt3QkFDZmIsY0FBYztvQkFDaEI7b0JBQ0EsS0FBSzt3QkFDSGEsZUFBZTt3QkFDZmIsY0FBYztvQkFDaEI7b0JBQ0EsTUFBTTt3QkFDSmEsZUFBZTt3QkFDZmIsY0FBYztvQkFDaEI7Z0JBQ0Y7MEJBRUNMLGlCQUFBQSwyQkFBQUEsS0FBTW1CLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZiw4REFBQzNCLHFEQUFXQTtrQ0FDViw0RUFBQ0csOERBQVVBOzRCQUNUeUIsTUFBTUYsSUFBSUUsSUFBSTs0QkFDZEYsS0FBS0EsSUFBSUcsR0FBRzs0QkFDWkMsTUFBTSxFQUFFSixnQkFBQUEsMEJBQUFBLElBQUtJLE1BQU07NEJBQ25CQyxTQUFTTCxJQUFJSyxPQUFPOzRCQUNwQkMsVUFBVU4sSUFBSU0sUUFBUTs7Ozs7O3VCQU5STDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QjlCO0dBbkVNdEI7O1FBR1dKLG1EQUFTQTs7O0tBSHBCSTtBQXFFTixpRUFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3phaGVlci9EZXNrdG9wLzExIG5vdiAyMDI0L3NyYy9jb21wb25lbnRzL2ljb25TbGlkZXIvaWNvblNsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7XG4gIE5hdmlnYXRpb24sXG4gIFBhZ2luYXRpb24sXG4gIFNjcm9sbGJhcixcbiAgQTExeSxcbiAgQXV0b3BsYXksXG59IGZyb20gXCJzd2lwZXIvbW9kdWxlc1wiO1xuXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlLCB1c2VTd2lwZXIgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5cbi8vIEltcG9ydCBTd2lwZXIgc3R5bGVzXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9zY3JvbGxiYXJcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgU2xpZGVyQ2FyZCBmcm9tIFwiLi9zbGlkZXJDYXJkL3NsaWRlckNhcmRcIjtcbmltcG9ydCBSaWdodEljb24gZnJvbSBcIkAvaWNvbnMvcmlnaHRJY29uXCI7XG5cbmNvbnN0IEljb25TbGlkZXIgPSAoe1xuICBkYXRhLFxufSkgPT4ge1xuICBjb25zdCBzd2lwZXIgPSB1c2VTd2lwZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LTEwIGxnOm14LTAgbGc6bWwtMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtMTAgbWItMTBcIj5cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIG1vZHVsZXM9e1tBdXRvcGxheV19XG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXs1MH1cbiAgICAgICAgICAvLyBzbGlkZXNQZXJWaWV3PXs0fVxuICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBuYXZpZ2F0aW9uPXtmYWxzZX1cbiAgICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cbiAgICAgICAgICBvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZyhcInNsaWRlIGNoYW5nZVwiKX1cbiAgICAgICAgICBsb29wXG4gICAgICAgICAgYXV0b3BsYXk9e3tcbiAgICAgICAgICAgIGRlbGF5OiA2NTAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQ4MDoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjIsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAyNDoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjIsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxTbGlkZXJDYXJkXG4gICAgICAgICAgICAgICAgdGV4dD17aW1nLnRleHR9XG4gICAgICAgICAgICAgICAgaW1nPXtpbWcuc3JjfVxuICAgICAgICAgICAgICAgIGltZ0FsdD17aW1nPy5pbWdBbHR9XG4gICAgICAgICAgICAgICAgYnRuVGV4dD17aW1nLmJ0blRleHR9XG4gICAgICAgICAgICAgICAgYnRuVGV4dDI9e2ltZy5idG5UZXh0Mn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3dpcGVyPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogQ3VzdG9tIE5hdmlnYXRpb24gQnV0dG9ucyAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS1bLTY1cHhdIHJpZ2h0LVs4MHB4XSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgYmctZ3JheS01MDAgcC0yIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgIDxSaWdodEljb24gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLVstNjVweF0gcmlnaHQtWzI1cHhdIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBiZy1ncmF5LTUwMCBwLTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgPFJpZ2h0SWNvbiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25TbGlkZXI7XG4iXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJTY3JvbGxiYXIiLCJBMTF5IiwiQXV0b3BsYXkiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsInVzZVN3aXBlciIsIkltYWdlIiwiU2xpZGVyQ2FyZCIsIlJpZ2h0SWNvbiIsIkljb25TbGlkZXIiLCJkYXRhIiwic3dpcGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwib25Td2lwZXIiLCJjb25zb2xlIiwibG9nIiwib25TbGlkZUNoYW5nZSIsImxvb3AiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJtYXAiLCJpbWciLCJpbmRleCIsInRleHQiLCJzcmMiLCJpbWdBbHQiLCJidG5UZXh0IiwiYnRuVGV4dDIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/iconSlider/iconSlider.js\n"));

/***/ })

});