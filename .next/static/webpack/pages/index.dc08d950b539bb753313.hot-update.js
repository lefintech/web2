webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/sections/hero-slider/HeroSliderOne.js":
/*!**************************************************************!*\
  !*** ./src/components/sections/hero-slider/HeroSliderOne.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _other_SliderArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../other/SliderArrow */ "./src/components/other/SliderArrow.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");


var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\hero-slider\\HeroSliderOne.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function HeroSliderOne(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentSlideIndex = _useState[0],
      setNextSlideIndex = _useState[1];

  var settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_7__["PrevArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }),
    nextArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_7__["NextArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    })
  };

  var beforeChange = function beforeChange(oldIndex, newIndex) {
    setNextSlideIndex(newIndex);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var currentSlide = document.querySelector(".hero-slider.-style-one .slick-slide[data-index=\"".concat(currentSlideIndex, "\"]"));
    var animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach(function (item, index) {
      var animationName = item.dataset.animation;
      var animationDelay = item.dataset.delay;
      console.log(animationName);
      item.classList.add("animate__animated", animationName);
      item.style.animationDelay = animationDelay + "s";
      item.addEventListener("animationend", function () {
        this.classList.remove("animate__animated", animationName);
        this.removeEventListener("animationend", function () {
          return;
        });
      });
    });
  }, [currentSlideIndex]);
  return __jsx("div", {
    className: "hero-slider -carousel -style-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    beforeChange: beforeChange,
    className: "arrow-center"
  }, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), data.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: "slick-slider-item ".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        active: index === currentSlideIndex
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "hero-slider-background",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "" + item.background,
      alt: "Hero slider background image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    })), __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "hero-slider-content-wrapper",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      align: "middle",
      gutter: 30,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "hero-slider-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("h1", {
      "data-delay": "0.2",
      "data-animation": "animate__fadeInDown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 23
      }
    }, item.title), __jsx("h3", {
      "data-delay": "0.4",
      "data-animation": "animate__fadeInDown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 23
      }
    }, item.price.main))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      "data-delay": "0.8",
      "data-animation": "animate__zoomInRight",
      className: "hero-slider-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "" + "/assets/images/hero-slider/one/1.png",
      alt: "Hero slider image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 23
      }
    })))))));
  })));
}

_s(HeroSliderOne, "HcnDggpsmT4tVDC2KQmsLL20Q6U=");

_c = HeroSliderOne;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(HeroSliderOne));

var _c, _c2;

$RefreshReg$(_c, "HeroSliderOne");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby1zbGlkZXIvSGVyb1NsaWRlck9uZS5qcyJdLCJuYW1lcyI6WyJIZXJvU2xpZGVyT25lIiwiZGF0YSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlSW5kZXgiLCJzZXROZXh0U2xpZGVJbmRleCIsInNldHRpbmdzIiwiZmFkZSIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImJlZm9yZUNoYW5nZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U2xpZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltYXRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYW5pbWF0aW9uTmFtZSIsImRhdGFzZXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25EZWxheSIsImRlbGF5IiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJjbGFzc05hbWVzIiwiYWN0aXZlIiwicHJvY2VzcyIsImJhY2tncm91bmQiLCJ0aXRsZSIsInByaWNlIiwibWFpbiIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BQWlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxDQUFELENBRHhCO0FBQUEsTUFDeEJDLGlCQUR3QjtBQUFBLE1BQ0xDLGlCQURLOztBQUUvQixNQUFNQyxR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QUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFO0FBQUksb0JBQVcsS0FBZjtBQUFxQix3QkFBZSxxQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHbkIsSUFBSSxDQUFDb0IsS0FEUixDQUZGLEVBS0U7QUFBSSxvQkFBVyxLQUFmO0FBQXFCLHdCQUFlLHFCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0lwQixJQUFJLENBQUNxQixLQUFMLENBQVdDLElBRGYsQ0FMRixDQURGLENBREYsRUFhRSxNQUFDLHdDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0Usb0JBQVcsS0FEYjtBQUVFLHdCQUFlLHNCQUZqQjtBQUdFLGVBQVMsRUFBQyxtQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0U7QUFDRSxTQUFHLEVBQ0RKLEVBQUEsR0FDQSxzQ0FISjtBQUtFLFNBQUcsRUFBQyxtQkFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERixDQWJGLENBREYsQ0FERixDQVpGLENBRFE7QUFBQSxHQUFULENBTEgsQ0FERixDQURGO0FBMEREOztHQTVGUXpDLGE7O0tBQUFBLGE7QUE4Rk0sa0ZBQUE4Qyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcvQyxhQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGMwOGQ5NTBiNTM5YmI3NTMzMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IE5leHRBcnJvdywgUHJldkFycm93IH0gZnJvbSBcIi4uLy4uL290aGVyL1NsaWRlckFycm93XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gSGVyb1NsaWRlck9uZSh7IGRhdGEgfSkge1xuICBjb25zdCBbY3VycmVudFNsaWRlSW5kZXgsIHNldE5leHRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBmYWRlOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPixcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXG4gIH07XG4gIGNvbnN0IGJlZm9yZUNoYW5nZSA9IChvbGRJbmRleCwgbmV3SW5kZXgpID0+IHtcbiAgICBzZXROZXh0U2xpZGVJbmRleChuZXdJbmRleCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuaGVyby1zbGlkZXIuLXN0eWxlLW9uZSAuc2xpY2stc2xpZGVbZGF0YS1pbmRleD1cIiR7Y3VycmVudFNsaWRlSW5kZXh9XCJdYFxuICAgICk7XG4gICAgY29uc3QgYW5pbWF0aW9uSXRlbXMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFuaW1hdGlvbl1cIik7XG4gICAgYW5pbWF0aW9uSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPSBpdGVtLmRhdGFzZXQuYW5pbWF0aW9uO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBpdGVtLmRhdGFzZXQuZGVsYXk7XG4gICAgICBjb25zb2xlLmxvZyhhbmltYXRpb25OYW1lKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIGFuaW1hdGlvbk5hbWUpO1xuICAgICAgaXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9IGFuaW1hdGlvbkRlbGF5ICsgXCJzXCI7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19hbmltYXRlZFwiLCBhbmltYXRpb25OYW1lKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtjdXJyZW50U2xpZGVJbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlciAtY2Fyb3VzZWwgLXN0eWxlLW9uZVwiPlxuICAgICAgPFNsaWRlclxuICAgICAgICBiZWZvcmVDaGFuZ2U9e2JlZm9yZUNoYW5nZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3ctY2VudGVyXCJcbiAgICAgICAgey4uLnNldHRpbmdzfVxuICAgICAgPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNsaWNrLXNsaWRlci1pdGVtICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgIGFjdGl2ZTogaW5kZXggPT09IGN1cnJlbnRTbGlkZUluZGV4LFxuICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJIZXJvIHNsaWRlciBiYWNrZ3JvdW5kIGltYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIgZ3V0dGVyPXszMH0+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItY29udGVudFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGRhdGEtZGVsYXk9XCIwLjJcIiBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtZGVsYXk9XCIwLjRcIiBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaXRlbS5wcmljZS5tYWluKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PVwiMC44XCJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX3pvb21JblJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9oZXJvLXNsaWRlci9vbmUvMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSGVybyBzbGlkZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9TbGlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSGVyb1NsaWRlck9uZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9