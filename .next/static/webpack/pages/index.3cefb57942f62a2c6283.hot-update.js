webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homepage4; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _redux_actions_blogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/blogActions */ "./src/redux/actions/blogActions.js");
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _components_layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/LayoutFour */ "./src/components/layout/LayoutFour.js");
/* harmony import */ var _components_other_Benefits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/other/Benefits */ "./src/components/other/Benefits.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _components_sections_hero_slider_HeroSliderFour__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/hero-slider/HeroSliderFour */ "./src/components/sections/hero-slider/HeroSliderFour.js");
/* harmony import */ var _components_sections_introduction_IntroductionThree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/introduction/IntroductionThree */ "./src/components/sections/introduction/IntroductionThree.js");
/* harmony import */ var _components_sections_introduction_IntroductionTwo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/introduction/IntroductionTwo */ "./src/components/sections/introduction/IntroductionTwo.js");
/* harmony import */ var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json");
var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json", 1);
/* harmony import */ var _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/product-thumb/ProductTab */ "./src/components/sections/product-thumb/ProductTab.js");
/* harmony import */ var _components_sections_introduction_IntroductionFour__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sections/introduction/IntroductionFour */ "./src/components/sections/introduction/IntroductionFour.js");
/* harmony import */ var _components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sections/partners/PartnerOne */ "./src/components/sections/partners/PartnerOne.js");
/* harmony import */ var _components_sections_blog_BlogSlide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/sections/blog/BlogSlide */ "./src/components/sections/blog/BlogSlide.js");
/* harmony import */ var _components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/sections/hero-slider/HeroSliderOne */ "./src/components/sections/hero-slider/HeroSliderOne.js");
/* harmony import */ var _components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/sections/categories/CategoriesOne */ "./src/components/sections/categories/CategoriesOne.js");
/* harmony import */ var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json");
var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json", 1);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




















function homepage4() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    featuredProducts: ""
  }),
      currentProductTabsCategory = _useState[0],
      setCurrentProductTabsCategory = _useState[1];

  var shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.shopReducer;
  });
  var blogState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.blogReducer;
  });
  var featuredProducts = shopState.featuredProducts;
  var allPosts = blogState.allPosts;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__["fetchFeaturedProductsRequest"])({
      limit: 8
    }));
    dispatch(Object(_redux_actions_blogActions__WEBPACK_IMPORTED_MODULE_3__["fetchPostsRequest"])({
      limit: 4
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__["fetchFeaturedProductsRequest"])({
      limit: 8,
      category: currentProductTabsCategory.featuredProducts
    }));
  }, [currentProductTabsCategory.featuredProducts]);
  return __jsx(_components_layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Index",
    headerClass: "-coffee -absolute -no-space",
    footerClass: "-coffee",
    style: {
      backgroundColor: '#f4f4f4'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(_components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_16__["default"], {
    data: _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_11__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(_components_sections_introduction_IntroductionTwo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(_components_sections_introduction_IntroductionThree__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_17__["default"], {
    data: _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_18__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(_components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_17__["default"], {
    data: _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_18__.two,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  })), __jsx(_components_sections_introduction_IntroductionFour__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
}

_s(homepage4, "9Hkc7402YE0E/8TVggHB81Am+g0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImhvbWVwYWdlNCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImZlYXR1cmVkUHJvZHVjdHMiLCJjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSIsInNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5Iiwic2hvcFN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNob3BSZWR1Y2VyIiwiYmxvZ1N0YXRlIiwiYmxvZ1JlZHVjZXIiLCJhbGxQb3N0cyIsInVzZUVmZmVjdCIsImZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QiLCJsaW1pdCIsImZldGNoUG9zdHNSZXF1ZXN0IiwiY2F0ZWdvcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZXJvc2xpZGVPbmVEYXRhIiwib25lIiwiY2F0ZWdvcmllc09uZURhdGEiLCJ0d28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQ2xDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtDLGtCQUVrQ0Msc0RBQVEsQ0FBQztBQUMzRUMsb0JBQWdCLEVBQUU7QUFEeUQsR0FBRCxDQUYxQztBQUFBLE1BRTNCQywwQkFGMkI7QUFBQSxNQUVDQyw2QkFGRDs7QUFLbEMsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFdBQWpCO0FBQUEsR0FBRCxDQUE3QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxXQUFqQjtBQUFBLEdBQUQsQ0FBN0I7QUFOa0MsTUFPMUJSLGdCQVAwQixHQU9MRyxTQVBLLENBTzFCSCxnQkFQMEI7QUFBQSxNQVExQlMsUUFSMEIsR0FRYkYsU0FSYSxDQVExQkUsUUFSMEI7QUFTbENDLHlEQUFTLENBQUMsWUFBTTtBQUNkYixZQUFRLENBQUNjLCtGQUE0QixDQUFDO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQUQsQ0FBN0IsQ0FBUjtBQUNBZixZQUFRLENBQUNnQixvRkFBaUIsQ0FBQztBQUFFRCxXQUFLLEVBQUU7QUFBVCxLQUFELENBQWxCLENBQVI7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUFGLHlEQUFTLENBQUMsWUFBTTtBQUNkYixZQUFRLENBQ05jLCtGQUE0QixDQUFDO0FBQzNCQyxXQUFLLEVBQUUsQ0FEb0I7QUFFM0JFLGNBQVEsRUFBRWIsMEJBQTBCLENBQUNEO0FBRlYsS0FBRCxDQUR0QixDQUFSO0FBTUQsR0FQUSxFQU9OLENBQUNDLDBCQUEwQixDQUFDRCxnQkFBNUIsQ0FQTSxDQUFUO0FBUUEsU0FDRSxNQUFDLHFFQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxlQUFXLEVBQUMsNkJBRmQ7QUFHRSxlQUFXLEVBQUMsU0FIZDtBQUlFLFNBQUssRUFBRTtBQUFFZSxxQkFBZSxFQUFFO0FBQW5CLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsdUZBQUQ7QUFBZSxRQUFJLEVBQUVDLDZEQUFnQixDQUFDQyxHQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLDBGQUFEO0FBQWlCLE1BQUUsRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRSxNQUFDLDJGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsc0ZBQUQ7QUFBZSxRQUFJLEVBQUVDLDREQUFpQixDQUFDRCxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFQSxNQUFDLHNGQUFEO0FBQWUsUUFBSSxFQUFFQyw0REFBaUIsQ0FBQ0MsR0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBVkYsRUFjRSxNQUFDLDJGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGO0FBa0JEOztHQXZDdUJ2QixTO1VBQ0xFLHVELEVBSUNNLHVELEVBQ0FBLHVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjZWZiNTc5NDJmNjJhMmM2MjgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IGZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9uc1wiO1xuaW1wb3J0IHsgZmV0Y2hQb3N0c1JlcXVlc3QgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9ibG9nQWN0aW9uc1wiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4uL2RhdGEvY2F0ZWdvcmllcy5qc29uXCI7XG5pbXBvcnQgTGF5b3V0Rm91ciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0Rm91clwiO1xuaW1wb3J0IEJlbmVmaXRzIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0JlbmVmaXRzXCJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgSGVyb1NsaWRlckZvdXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zbGlkZXIvSGVyb1NsaWRlckZvdXJcIjtcbmltcG9ydCBJbnRyb2R1Y3Rpb25UaHJlZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uVGhyZWVcIjtcbmltcG9ydCBJbnRyb2R1Y3Rpb25Ud28gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaW50cm9kdWN0aW9uL0ludHJvZHVjdGlvblR3b1wiO1xuaW1wb3J0IGhlcm9TbGlkZXJEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2hlcm8tc2xpZGVyLmpzb25cIjtcbmltcG9ydCBQcm9kdWN0VGFiIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL3Byb2R1Y3QtdGh1bWIvUHJvZHVjdFRhYlwiO1xuaW1wb3J0IEludHJvZHVjdGlvbkZvdXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbkZvdXJcIjtcbmltcG9ydCBQYXJ0bmVyT25lIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL3BhcnRuZXJzL1BhcnRuZXJPbmVcIjtcbmltcG9ydCBCbG9nU2xpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvYmxvZy9CbG9nU2xpZGVcIjtcbmltcG9ydCBIZXJvU2xpZGVyT25lIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm8tc2xpZGVyL0hlcm9TbGlkZXJPbmVcIjtcbmltcG9ydCBoZXJvc2xpZGVPbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2hlcm8tc2xpZGVyLmpzb25cIjtcbmltcG9ydCBDYXRlZ29yaWVzT25lIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhdGVnb3JpZXMvQ2F0ZWdvcmllc09uZVwiO1xuaW1wb3J0IGNhdGVnb3JpZXNPbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2NhdGVnb3JpZXMuanNvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlNCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnksIHNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5XSA9IHVzZVN0YXRlKHtcbiAgICBmZWF0dXJlZFByb2R1Y3RzOiBcIlwiLFxuICB9KTtcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XG4gIGNvbnN0IGJsb2dTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYmxvZ1JlZHVjZXIpO1xuICBjb25zdCB7IGZlYXR1cmVkUHJvZHVjdHMgfSA9IHNob3BTdGF0ZTtcbiAgY29uc3QgeyBhbGxQb3N0cyB9ID0gYmxvZ1N0YXRlO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3QoeyBsaW1pdDogOCB9KSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hQb3N0c1JlcXVlc3QoeyBsaW1pdDogNCB9KSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGZldGNoRmVhdHVyZWRQcm9kdWN0c1JlcXVlc3Qoe1xuICAgICAgICBsaW1pdDogOCxcbiAgICAgICAgY2F0ZWdvcnk6IGN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LmZlYXR1cmVkUHJvZHVjdHMsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5mZWF0dXJlZFByb2R1Y3RzXSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dEZvdXJcbiAgICAgIHRpdGxlPVwiSW5kZXhcIlxuICAgICAgaGVhZGVyQ2xhc3M9XCItY29mZmVlIC1hYnNvbHV0ZSAtbm8tc3BhY2VcIlxuICAgICAgZm9vdGVyQ2xhc3M9XCItY29mZmVlXCJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmNGY0ZjQnIH19XG4gICAgPlxuICAgICAgPEhlcm9TbGlkZXJPbmUgZGF0YT17aGVyb3NsaWRlT25lRGF0YS5vbmV9IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxJbnRyb2R1Y3Rpb25Ud28gaWQ9XCJhYm91dFwiIC8+XG4gICAgICA8SW50cm9kdWN0aW9uVGhyZWUgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICA8Q2F0ZWdvcmllc09uZSBkYXRhPXtjYXRlZ29yaWVzT25lRGF0YS5vbmV9IC8+XG4gICAgICA8Q2F0ZWdvcmllc09uZSBkYXRhPXtjYXRlZ29yaWVzT25lRGF0YS50d299IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxJbnRyb2R1Y3Rpb25Gb3VyIC8+XG4gICAgPC9MYXlvdXRGb3VyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==