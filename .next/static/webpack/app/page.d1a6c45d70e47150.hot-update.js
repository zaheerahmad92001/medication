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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/scrollbar */ \"(app-pages-browser)/./node_modules/swiper/modules/scrollbar.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _sliderCard_sliderCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sliderCard/sliderCard */ \"(app-pages-browser)/./src/components/iconSlider/sliderCard/sliderCard.js\");\n/* harmony import */ var _icons_rightIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/icons/rightIcon */ \"(app-pages-browser)/./src/icons/rightIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Import Swiper styles\n\n\n\n\n\n\n\nconst IconSlider = (param)=>{\n    let { data, textSize, textColor, imgHeight, imgWidth, btnTextColor, btnBackgroundColor } = param;\n    _s();\n    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-10 lg:mx-0 lg:ml-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center mt-10 mb-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay\n                ],\n                spaceBetween: 50,\n                // slidesPerView={4}\n                pagination: {\n                    clickable: false\n                },\n                navigation: false,\n                onSwiper: (swiper)=>console.log(swiper),\n                onSlideChange: ()=>console.log(\"slide change\"),\n                loop: true,\n                autoplay: {\n                    delay: 6500,\n                    disableOnInteraction: false\n                },\n                breakpoints: {\n                    320: {\n                        slidesPerView: 1,\n                        spaceBetween: 10\n                    },\n                    480: {\n                        slidesPerView: 2,\n                        spaceBetween: 10\n                    },\n                    768: {\n                        slidesPerView: 3,\n                        spaceBetween: 20\n                    },\n                    1024: {\n                        slidesPerView: 3.2,\n                        spaceBetween: 30\n                    }\n                },\n                children: data === null || data === void 0 ? void 0 : data.map((img, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sliderCard_sliderCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            text: img.text,\n                            textSize: textSize,\n                            textColor: textColor,\n                            img: img.src,\n                            imgHeight: imgHeight,\n                            imgWidth: imgWidth,\n                            imgAlt: img === null || img === void 0 ? void 0 : img.imgAlt,\n                            btnText: img.btnText,\n                            btnText2: img.btnText2,\n                            btnTextColor: btnTextColor,\n                            btnBackgroundColor: btnBackgroundColor\n                        }, void 0, false, {\n                            fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zaheer/Desktop/11 nov 2024/src/components/iconSlider/iconSlider.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(IconSlider, \"7yKpomHFPHyHiOpTV4g/MTjgI7I=\", false, function() {\n    return [\n        swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper\n    ];\n});\n_c = IconSlider;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconSlider);\nvar _c;\n$RefreshReg$(_c, \"IconSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2ljb25TbGlkZXIvaWNvblNsaWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBT3dCO0FBRXNDO0FBRTlELHVCQUF1QjtBQUNIO0FBQ1c7QUFDQTtBQUNEO0FBRUM7QUFDa0I7QUFDUDtBQUUxQyxNQUFNVyxhQUFhO1FBQUMsRUFDbEJDLElBQUksRUFDSkMsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLFNBQVMsRUFDVEMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLGtCQUFrQixFQUNuQjs7SUFDQyxNQUFNQyxTQUFTWix1REFBU0E7SUFDeEIscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNoQixnREFBTUE7Z0JBQ0xpQixTQUFTO29CQUFDbEIsb0RBQVFBO2lCQUFDO2dCQUNuQm1CLGNBQWM7Z0JBQ2Qsb0JBQW9CO2dCQUNwQkMsWUFBWTtvQkFDVkMsV0FBVztnQkFDYjtnQkFDQUMsWUFBWTtnQkFDWkMsVUFBVSxDQUFDUixTQUFXUyxRQUFRQyxHQUFHLENBQUNWO2dCQUNsQ1csZUFBZSxJQUFNRixRQUFRQyxHQUFHLENBQUM7Z0JBQ2pDRSxJQUFJO2dCQUNKQyxVQUFVO29CQUNSQyxPQUFPO29CQUNQQyxzQkFBc0I7Z0JBQ3hCO2dCQUNBQyxhQUFhO29CQUNYLEtBQUs7d0JBQ0hDLGVBQWU7d0JBQ2ZiLGNBQWM7b0JBQ2hCO29CQUNBLEtBQUs7d0JBQ0hhLGVBQWU7d0JBQ2ZiLGNBQWM7b0JBQ2hCO29CQUNBLEtBQUs7d0JBQ0hhLGVBQWU7d0JBQ2ZiLGNBQWM7b0JBQ2hCO29CQUNBLE1BQU07d0JBQ0phLGVBQWU7d0JBQ2ZiLGNBQWM7b0JBQ2hCO2dCQUNGOzBCQUVDWCxpQkFBQUEsMkJBQUFBLEtBQU15QixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2YsOERBQUNqQyxxREFBV0E7a0NBQ1YsNEVBQUNHLDhEQUFVQTs0QkFDVCtCLE1BQU1GLElBQUlFLElBQUk7NEJBQ2QzQixVQUFVQTs0QkFDVkMsV0FBV0E7NEJBQ1h3QixLQUFLQSxJQUFJRyxHQUFHOzRCQUNaMUIsV0FBV0E7NEJBQ1hDLFVBQVVBOzRCQUNWMEIsTUFBTSxFQUFFSixnQkFBQUEsMEJBQUFBLElBQUtJLE1BQU07NEJBQ25CQyxTQUFTTCxJQUFJSyxPQUFPOzRCQUNwQkMsVUFBVU4sSUFBSU0sUUFBUTs0QkFDdEIzQixjQUFjQTs0QkFDZEMsb0JBQW9CQTs7Ozs7O3VCQVpOcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0I5QjtHQS9FTTVCOztRQVNXSixtREFBU0E7OztLQVRwQkk7QUFpRk4saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy96YWhlZXIvRGVza3RvcC8xMSBub3YgMjAyNC9zcmMvY29tcG9uZW50cy9pY29uU2xpZGVyL2ljb25TbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uLFxuICBQYWdpbmF0aW9uLFxuICBTY3JvbGxiYXIsXG4gIEExMXksXG4gIEF1dG9wbGF5LFxufSBmcm9tIFwic3dpcGVyL21vZHVsZXNcIjtcblxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSwgdXNlU3dpcGVyIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcInN3aXBlci9jc3Mvc2Nyb2xsYmFyXCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFNsaWRlckNhcmQgZnJvbSBcIi4vc2xpZGVyQ2FyZC9zbGlkZXJDYXJkXCI7XG5pbXBvcnQgUmlnaHRJY29uIGZyb20gXCJAL2ljb25zL3JpZ2h0SWNvblwiO1xuXG5jb25zdCBJY29uU2xpZGVyID0gKHtcbiAgZGF0YSxcbiAgdGV4dFNpemUsXG4gIHRleHRDb2xvcixcbiAgaW1nSGVpZ2h0LFxuICBpbWdXaWR0aCxcbiAgYnRuVGV4dENvbG9yLFxuICBidG5CYWNrZ3JvdW5kQ29sb3IsXG59KSA9PiB7XG4gIGNvbnN0IHN3aXBlciA9IHVzZVN3aXBlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMTAgbGc6bXgtMCBsZzptbC0xNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC0xMCBtYi0xMFwiPlxuICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgbW9kdWxlcz17W0F1dG9wbGF5XX1cbiAgICAgICAgICBzcGFjZUJldHdlZW49ezUwfVxuICAgICAgICAgIC8vIHNsaWRlc1BlclZpZXc9ezR9XG4gICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG5hdmlnYXRpb249e2ZhbHNlfVxuICAgICAgICAgIG9uU3dpcGVyPXsoc3dpcGVyKSA9PiBjb25zb2xlLmxvZyhzd2lwZXIpfVxuICAgICAgICAgIG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKFwic2xpZGUgY2hhbmdlXCIpfVxuICAgICAgICAgIGxvb3BcbiAgICAgICAgICBhdXRvcGxheT17e1xuICAgICAgICAgICAgZGVsYXk6IDY1MDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBicmVha3BvaW50cz17e1xuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDgwOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAyNDoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjIsXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxTbGlkZXJDYXJkXG4gICAgICAgICAgICAgICAgdGV4dD17aW1nLnRleHR9XG4gICAgICAgICAgICAgICAgdGV4dFNpemU9e3RleHRTaXplfVxuICAgICAgICAgICAgICAgIHRleHRDb2xvcj17dGV4dENvbG9yfVxuICAgICAgICAgICAgICAgIGltZz17aW1nLnNyY31cbiAgICAgICAgICAgICAgICBpbWdIZWlnaHQ9e2ltZ0hlaWdodH1cbiAgICAgICAgICAgICAgICBpbWdXaWR0aD17aW1nV2lkdGh9XG4gICAgICAgICAgICAgICAgaW1nQWx0PXtpbWc/LmltZ0FsdH1cbiAgICAgICAgICAgICAgICBidG5UZXh0PXtpbWcuYnRuVGV4dH1cbiAgICAgICAgICAgICAgICBidG5UZXh0Mj17aW1nLmJ0blRleHQyfVxuICAgICAgICAgICAgICAgIGJ0blRleHRDb2xvcj17YnRuVGV4dENvbG9yfVxuICAgICAgICAgICAgICAgIGJ0bkJhY2tncm91bmRDb2xvcj17YnRuQmFja2dyb3VuZENvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBDdXN0b20gTmF2aWdhdGlvbiBCdXR0b25zICovfVxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLVstNjVweF0gcmlnaHQtWzgwcHhdIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBiZy1ncmF5LTUwMCBwLTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgPFJpZ2h0SWNvbiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tWy02NXB4XSByaWdodC1bMjVweF0gdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGJnLWdyYXktNTAwIHAtMiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICA8UmlnaHRJY29uIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvblNsaWRlcjtcbiJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIlNjcm9sbGJhciIsIkExMXkiLCJBdXRvcGxheSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwidXNlU3dpcGVyIiwiSW1hZ2UiLCJTbGlkZXJDYXJkIiwiUmlnaHRJY29uIiwiSWNvblNsaWRlciIsImRhdGEiLCJ0ZXh0U2l6ZSIsInRleHRDb2xvciIsImltZ0hlaWdodCIsImltZ1dpZHRoIiwiYnRuVGV4dENvbG9yIiwiYnRuQmFja2dyb3VuZENvbG9yIiwic3dpcGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwib25Td2lwZXIiLCJjb25zb2xlIiwibG9nIiwib25TbGlkZUNoYW5nZSIsImxvb3AiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJtYXAiLCJpbWciLCJpbmRleCIsInRleHQiLCJzcmMiLCJpbWdBbHQiLCJidG5UZXh0IiwiYnRuVGV4dDIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/iconSlider/iconSlider.js\n"));

/***/ })

});