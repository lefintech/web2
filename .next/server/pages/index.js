module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/apis/blog.js":
/*!**************************!*\
  !*** ./src/apis/blog.js ***!
  \**************************/
/*! exports provided: fetchBlogData, fetchRecentPostData, fetchPostDetailData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBlogData", function() { return fetchBlogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentPostData", function() { return fetchRecentPostData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostDetailData", function() { return fetchPostDetailData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/blog";

const renderUrl = (url, limit, category) => {
  return url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", category);
};

const fetchBlogData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_page", query.page) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("tag_like", query.tag);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchRecentPostData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_sort", "publicDate") + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("order", "desc");
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchPostDetailData = slug => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("slug", slug);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};

/***/ }),

/***/ "./src/apis/cart.js":
/*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/cart";
const fetchCartData = cartId => {
  let endpoint = cartId ? _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}` : _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdCartData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("productId", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addCartData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeCartData = cartId => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};
const updateCartData = (cartId, data) => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].patch(endpoint, data);
};

/***/ }),

/***/ "./src/apis/shop.js":
/*!**************************!*\
  !*** ./src/apis/shop.js ***!
  \**************************/
/*! exports provided: fetchProductsData, fetchSaleProductsData, fetchFeaturedProductsData, fetchBestSellerProductsData, fetchDaleProductsData, fetchProductDetailData, fetchSearchedProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsData", function() { return fetchProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsData", function() { return fetchSaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsData", function() { return fetchFeaturedProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsData", function() { return fetchBestSellerProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsData", function() { return fetchDaleProductsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailData", function() { return fetchProductDetailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductData", function() { return fetchSearchedProductData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/product";

const renderUrl = (url, limit, category) => {
  return url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", limit) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", category);
}; //Fetch list of products


const fetchProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_page", query.page) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_sort", query.sort.sort) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_order", query.sort.order) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.q) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.color", query.color) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("specifications.size", query.size) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("tag_like", query.tag);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchSaleProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchFeaturedProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchBestSellerProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchDaleProductsData = query => {
  let endpoint = renderUrl(_common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url, query.limit, query.category);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
}; //Fetch product detail

const fetchProductDetailData = slug => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("slug", slug);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
}; //Fetch serched product by query

const fetchSearchedProductData = query => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("q", query.input) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("category", query.category) + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("_limit", query.limit);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};

/***/ }),

/***/ "./src/apis/wishlist.js":
/*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
/*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishlistData", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdWishlistData", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishlistData", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistData", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/wishlist";
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addWishlistData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};

/***/ }),

/***/ "./src/common/axiosService.js":
/*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class AxiosService {
  constructor() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AxiosService());

/***/ }),

/***/ "./src/common/cartServices.js":
/*!************************************!*\
  !*** ./src/common/cartServices.js ***!
  \************************************/
/*! exports provided: onAddProductToCart, onRemoveProductFromCart, onChangeProductCartQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddProductToCart", function() { return onAddProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoveProductFromCart", function() { return onRemoveProductFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeProductCartQuantity", function() { return onChangeProductCartQuantity; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/cart */ "./src/apis/cart.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const onAddProductToCart = ({
  product,
  quantity = 1,
  onSuccess,
  onError,
  getQuantityAvailable = () => true
}) => {
  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchProductIdCartData"])(product.id).then(res => {
    if (res.data.length === 0) {
      if (product.quantity === 0) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable && getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["addCartData"])(_objectSpread(_objectSpread({}, product), {}, {
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
          productId: product.id,
          cartQuantity: quantity
        })).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to cart failed, please try again", err));
      }
    } else {
      let pData = res.data[0];

      if (pData.cartQuantity + quantity > pData.quantity) {
        onError && onError("Reached maximum number of products");
        getQuantityAvailable(false);
      } else {
        Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(pData.id, {
          cartQuantity: pData.cartQuantity + quantity
        }).then(res => {
          onSuccess && onSuccess(res);
        }).catch(err => onError && onError("Add product to cart failed, please try again", err));
      }
    }
  }).catch(err => onError && onError("Add product to cart failed, please try again", err));
};
const onRemoveProductFromCart = ({
  cartId,
  onSuccess,
  onError
}) => {
  if (cartId && cartId !== "" && cartId !== null) {
    Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["removeCartData"])(cartId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product failm, pleaser try again", err));
  }
};
const onChangeProductCartQuantity = ({
  product,
  quantity,
  onSuccess
}) => {
  if (quantity > product.quantity || quantity < 1) {
    return;
  }

  Object(_apis_cart__WEBPACK_IMPORTED_MODULE_1__["updateCartData"])(product.id, {
    cartQuantity: quantity
  }).then(res => onSuccess && onSuccess(res)).catch(err => console.log(err));
};

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "https://ogami-api.herokuapp.com";

/***/ }),

/***/ "./src/common/shopUtils.js":
/*!*********************************!*\
  !*** ./src/common/shopUtils.js ***!
  \*********************************/
/*! exports provided: getProductsBySlug, calculateTotalPrice, checkProductInCart, checkProductCartQuantity, checkProductInWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return getProductsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalPrice", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInCart", function() { return checkProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductCartQuantity", function() { return checkProductCartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInWishlist", function() { return checkProductInWishlist; });
const getProductsBySlug = (arr, slug) => {
  return slug && typeof slug === "string" ? arr.find(p => p.slug.toLowerCase() === slug.toLowerCase()) : arr;
};
const calculateTotalPrice = arr => {
  let total = 0;
  arr.forEach(item => {
    if (item.discount) {
      total += item.cartQuantity ? (item.price - item.discount) * item.cartQuantity : item.price - item.discount;
    } else {
      total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
    }
  });
  return total;
}; //Cart

const checkProductInCart = (cartArr, pid) => {
  return pid ? cartArr.find(item => item.productId === pid) : undefined;
};
const checkProductCartQuantity = (cartArr, pid) => {
  const productsInCart = cartArr.filter(item => item.productId === pid);

  if (productsInCart && productsInCart.length > 0) {
    const totalProductQuantityInCart = productsInCart.reduce((total, item) => total + item.cartQuantity, 0);
    return totalProductQuantityInCart;
  } else {
    return 0;
  }
}; //Wishlist

const checkProductInWishlist = (wishlistArr, pid) => {
  return pid ? wishlistArr.find(item => item.id === pid) : undefined;
};

/***/ }),

/***/ "./src/common/useDebound.js":
/*!**********************************!*\
  !*** ./src/common/useDebound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderParam", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDash", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatCurrency = (price, locales = "us-US", currency = "USD") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
};
const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }

  return "";
};
const formatDate = (date, inputFormat = "YYYY-MM-DD", outputFormat = "MMM DD, YYYY") => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, inputFormat).format(outputFormat);
};
const removeDash = str => {
  return str.replace(/-/g, " ");
};

/***/ }),

/***/ "./src/common/wishlistServices.js":
/*!****************************************!*\
  !*** ./src/common/wishlistServices.js ***!
  \****************************************/
/*! exports provided: onAddProductToWishlist, onRemoveProductFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddProductToWishlist", function() { return onAddProductToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoveProductFromWishlist", function() { return onRemoveProductFromWishlist; });
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/wishlist */ "./src/apis/wishlist.js");

const onAddProductToWishlist = ({
  product,
  onSuccess,
  onError
}) => {
  Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["fetchProductIdWishlistData"])(product.id).then(res => {
    if (res.data.length === 0) {
      Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["addWishlistData"])(product).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Add product to wislist failed, please try again", err));
    } else {
      onError && onError("Product already in wishlist");
    }
  }).catch(err => onError && onError("Add product to wislist failed, please try again", err));
};
const onRemoveProductFromWishlist = ({
  productId,
  onSuccess,
  onError
}) => {
  if (productId && productId !== "" && productId !== null) {
    Object(_apis_wishlist__WEBPACK_IMPORTED_MODULE_0__["removeWishlistData"])(productId).then(res => onSuccess && onSuccess(res)).catch(err => onError && onError("Remove product fail, pleaser try again", err));
  }
};

/***/ }),

/***/ "./src/common/withHeaderScroll.js":
/*!****************************************!*\
  !*** ./src/common/withHeaderScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withHeaderScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\common\\withHeaderScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function withHeaderScroll(WrappedComponent) {
  return function (props) {
    const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const {
      0: scroll,
      1: setScroll
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const {
      0: isHeaderFixed,
      1: setIsHeaderFixed
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (scroll >= headerRef.current.offsetHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }, [scroll]);

    function handleScroll() {
      setScroll(window.scrollY);
    }

    return __jsx("div", {
      ref: headerRef,
      className: `header ${classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        fixed: isHeaderFixed
      }, props.className)}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx(WrappedComponent, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    })));
  };
}

/***/ }),

/***/ "./src/components/detail/product/ProductDetailLayout.js":
/*!**************************************************************!*\
  !*** ./src/components/detail/product/ProductDetailLayout.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/ProductDetailImages */ "./src/components/detail/product/elements/ProductDetailImages.js");
/* harmony import */ var _elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/ProductDetailContent */ "./src/components/detail/product/elements/ProductDetailContent.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/ProductDetailTab */ "./src/components/detail/product/elements/ProductDetailTab.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\detail\\product\\ProductDetailLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function ProductDetailLayout({
  data,
  type,
  hideTab,
  style
}) {
  if (type === "fluid") {
    return __jsx("div", {
      className: "product-detail",
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      gutter: 30,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "column",
      images: data.images,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 14,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx(_elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "fluid",
      data: data,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 24,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, !hideTab && __jsx(_elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fullDescription: data.fullDescription,
      specifications: data.specifications,
      reviews: data.reviews,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }))));
  }

  return __jsx("div", {
    className: "product-detail",
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_elements_ProductDetailImages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: data.images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_elements_ProductDetailContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 24,
    md: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, !hideTab && __jsx(_elements_ProductDetailTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fullDescription: data.fullDescription,
    specifications: data.specifications,
    reviews: data.reviews,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailLayout));

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailContent.js":
/*!************************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailContent.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailContent; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../other/QuantitySelector */ "./src/components/other/QuantitySelector.js");
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











function ProductDetailContent({
  data,
  type
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: currentQuantity,
    1: setCurrentQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  const compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.compareReducer);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductInWishlist"])(compareState, data.id);
  const avaiableQuantity = data.quantity - Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["checkProductCartQuantity"])(cartState.data, data.id);
  console.log(avaiableQuantity);

  const onAddToCart = (product, quantity) => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_8__["onAddProductToCart"])({
      product,
      quantity,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(mes);
        console.log(err);
      }
    });
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_10__["addToCompare"])(product));
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("Product added to compare");
    }
  };

  if (type === "fluid") {
    return __jsx("div", {
      className: "product-detail-content -wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 24,
      sm: 24,
      xl: 16,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-detail-content__left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "product-type",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, data.category), __jsx("h2", {
      className: "product-detail-content__name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, data.name), __jsx("div", {
      className: "product-detail-content__description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem")), __jsx("ul", {
      className: "product-detail-content__meta",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, "SKU:"), " A1359"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, "Categories:"), " Fastfood"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }, "Tag:"), " Food, Organic")), __jsx("div", {
      className: "product-detail-content__share",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, "Share link:"), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 24,
      sm: 24,
      xl: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-detail-content__right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "product-detail-content__delivery",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, "Free delivery"), __jsx("h3", {
      className: "product-detail-content__price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, data.discount && __jsx("del", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 35
      }
    }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("div", {
      className: "product-detail-content__price-discount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
      defaultValue: data.rate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    })))), __jsx(_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: val => setCurrentQuantity(val),
      max: avaiableQuantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "product-detail-content__actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      loading: addToCartLoading,
      onClick: () => onAddToCart(data, currentQuantity),
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      onClick: () => onAddToCompare(data),
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: productInCompare
      }),
      shape: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, "Add to compare")), __jsx("ul", {
      className: "product-detail-content__benefits",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, "Satisfaction 100% Guaranteed"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, "Free shipping on orders over $99"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, "14 day easy Return"))))));
  }

  return __jsx("div", {
    className: "product-detail-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "product-type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, data.category), __jsx("h2", {
    className: "product-detail-content__name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, data.name), __jsx("p", {
    className: "product-detail-content__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"), __jsx("div", {
    className: "product-detail-content__delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, "Free delivery"), __jsx("h3", {
    className: "product-detail-content__price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, data.discount && __jsx("del", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 27
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("div", {
    className: "product-detail-content__price-discount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price)), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Rate"], {
    defaultValue: data.rate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  })))), __jsx(_other_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: val => setCurrentQuantity(val),
    max: avaiableQuantity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "product-detail-content__actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    loading: addToCartLoading,
    onClick: () => onAddToCart(data, currentQuantity),
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: () => onAddToCompare(data),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: productInCompare
    }),
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, "Add to compare")), __jsx("div", {
    className: "product-detail-content__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, "Share link:"), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  })));
}

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ProductDetailContent);

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailImages.js":
/*!***********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailImages.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function ProductDetailImages({
  type,
  images
}) {
  const slider1Settings = {
    arrows: false
  };
  const slider2Settings = {
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: true,
    vertical: type === "column" ? true : false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [{
      breakpoint: 992,
      settings: {
        vertical: type === "column" && false
      }
    }]
  };
  const {
    0: nav1,
    1: setNav1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(); // if (type === "column") {
  //   return <h1>Column</h1>;
  // }

  return __jsx("div", {
    className: `product-detail-images ${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "-column": type === "column"
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-images-big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav2,
    ref: c => setNav1(c)
  }, slider1Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "product-detail-images-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav1,
    ref: c => setNav2(c)
  }, slider2Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), images && images.map((img, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailImages));

/***/ }),

/***/ "./src/components/detail/product/elements/ProductDetailTab.js":
/*!********************************************************************!*\
  !*** ./src/components/detail/product/elements/ProductDetailTab.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\detail\\product\\elements\\ProductDetailTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

const ReviewItem = ({
  data
}) => {
  console.log(data);
  return __jsx("div", {
    className: "product-detail-tab__reviews-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-detail-tab__reviews-item__avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "" + data.user.avatar,
    alt: "Customer avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    defaultValue: 5,
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "product-detail-tab__reviews-item__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, data.commentDate), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, data.user.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, data.review)));
};

function ProductDetailTab({
  fullDescription,
  specifications,
  reviews
}) {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx("div", {
    className: "product-detail-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    defaultActiveKey: "1",
    type: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(TabPane, {
    tab: "Description",
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, fullDescription)), __jsx(TabPane, {
    tab: "Specifications",
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__specifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Weight"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, specifications.weight)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "Dimensions"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, specifications.dimensions.long, " x", " ", specifications.dimensions.width, " x", " ", specifications.dimensions.height)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "Color"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, specifications.color)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "Size"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, specifications.size)))))), __jsx(TabPane, {
    tab: "Reviews",
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-detail-tab__reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, reviews.map((item, index) => __jsx(ReviewItem, {
    key: index,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "product-detail-tab__reviews-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Add Review"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "review",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "name",
    rules: [{
      required: true,
      message: "Please input your name!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: "Please input your email!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "rate",
    label: "Your rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    placeholder: "Message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 23
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, "Submit Review"))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailTab));

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/footer-links.json */ "./src/data/footer-links.json", 1);
/* harmony import */ var _elements_FooterQuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/FooterQuickLinks */ "./src/components/footer/elements/FooterQuickLinks.js");
/* harmony import */ var _elements_FooterInfomation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/FooterInfomation */ "./src/components/footer/elements/FooterInfomation.js");
/* harmony import */ var _elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/FooterSubcribeInput */ "./src/components/footer/elements/FooterSubcribeInput.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Footer({
  containerFluid,
  className
}) {
  return __jsx("div", {
    className: `footer -style-one ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-subcribe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-subcribe__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Join Our Newsletter Now"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Get E-mail updates about our latest shop and special offers."))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_elements_FooterSubcribeInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: "https://lefin.us21.list-manage.com/subscribe/post?u=6f8192b6182b9d53963cea786&id=23a6efe40c&f_id=0023d4e6f0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-bottom__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Copyright \xA9 2023 Lefin Suitcase - All Rights Reserved."), __jsx("img", {
    src: "" + "/assets/images/footer/logo.png",
    alt: "Payment methods",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

/***/ }),

/***/ "./src/components/footer/elements/FooterInfomation.js":
/*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterInfomation.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterInfomation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterInfomation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FooterInfomation() {
  return __jsx("div", {
    className: "footer-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "footer-info__logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Ogami Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }))), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Address: 60-49 Road 11378 New York"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Phone: +65 11.188.888"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Email: info.deercreative@gmail.com")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "primary",
    shape: "circle",
    className: "-btn-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/footer/elements/FooterQuickLinks.js":
/*!************************************************************!*\
  !*** ./src/components/footer/elements/FooterQuickLinks.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/footer-links.json */ "./src/data/footer-links.json", 1);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterQuickLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function FooterQuickLinks({
  colSize
}) {
  return __jsx("div", {
    className: "footer-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 10,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_3__.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], _extends({
    key: index
  }, colSize, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "footer-links__group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, item.title), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, item.items.map((link, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + link.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, " ", link.title)), " "))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FooterQuickLinks));

/***/ }),

/***/ "./src/components/footer/elements/FooterSubcribeInput.js":
/*!***************************************************************!*\
  !*** ./src/components/footer/elements/FooterSubcribeInput.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSubcribeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\footer\\elements\\FooterSubcribeInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  status,
  message,
  onValidated
}) => {
  const onFinish = value => {
    console.log("Success:", value);
    value && onValidated({
      EMAIL: value.email
    });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    className: "footer-subcribe__form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    name: "email",
    rules: [{
      type: "email",
      message: "The input is not valid E-mail!"
    }, {
      required: true,
      message: "Please input your E-mail!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Enter your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "link",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "SUBSCRIBE"))), status === "sending" && __jsx("div", {
    style: {
      color: "blue"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 32
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }));
});
function FooterSubcribeInput({
  url
}) {
  return __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: url,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/header/HeaderFour.js":
/*!*********************************************!*\
  !*** ./src/components/header/HeaderFour.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderFour; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_MenuThree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/MenuThree */ "./src/components/header/menu/MenuThree.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\header\\HeaderFour.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HeaderFour({
  container
}) {
  return __jsx(_menu_MenuThree__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  });
}

/***/ }),

/***/ "./src/components/header/elements/FunctionItems.js":
/*!*********************************************************!*\
  !*** ./src/components/header/elements/FunctionItems.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\header\\elements\\FunctionItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function FunctionItems({
  hideTotal,
  hideWishlist
}) {
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cartReducer);
  return __jsx("div", {
    className: "function-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, !hideWishlist && __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "function-items-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "function-items-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), !hideTotal && (cartState.data ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_4__["calculateTotalPrice"])(cartState.data))) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(0))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(FunctionItems));

/***/ }),

/***/ "./src/components/header/elements/MobileMenuOpener.js":
/*!************************************************************!*\
  !*** ./src/components/header/elements/MobileMenuOpener.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MobileNavigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileNavigator */ "./src/components/header/elements/MobileNavigator.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\header\\elements\\MobileMenuOpener.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MobileMenuOpener() {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onShowDrawer = () => {
    setVisible(true);
  };

  const onCloseDrawer = () => {
    setVisible(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    onClick: onShowDrawer,
    className: "menu-mobile-opener",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fas fa-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    title: "Close",
    placement: "right",
    closable: true,
    onClose: onCloseDrawer,
    visible: visible,
    placement: "left",
    width: 320,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_MobileNavigator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MobileMenuOpener));

/***/ }),

/***/ "./src/components/header/elements/MobileNavigator.js":
/*!***********************************************************!*\
  !*** ./src/components/header/elements/MobileNavigator.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SocialIcons */ "./src/components/other/SocialIcons.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\header\\elements\\MobileNavigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MobileNavigator() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail");

  const handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  return __jsx("div", {
    className: "menu-mobile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "menu-mobile-navigator",
    onClick: handleClick,
    selectedKeys: [current],
    mode: "inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(SubMenu, {
    key: "homepage",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.subMenu.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(SubMenu, {
    key: "shop layout",
    title: "Layout shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop detail",
    title: "Detail shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, " ", item.title))))), __jsx(SubMenu, {
    key: "shop pages",
    title: "Pages shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, " ", item.title)))))), __jsx(SubMenu, {
    key: "pages",
    title: _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + item.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, " ", item.title))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "alipay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://ant.design",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title)))), __jsx("div", {
    className: "menu-mobile-functions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/other/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "menu-mobile-functions__login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Login / Register")), __jsx(_other_SocialIcons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MobileNavigator));

/***/ }),

/***/ "./src/components/header/elements/Navigator.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/Navigator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\header\\elements\\Navigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Navigator() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail");

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return __jsx("ul", {
    className: "navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Navigator));

/***/ }),

/***/ "./src/components/header/elements/SearchForm.js":
/*!******************************************************!*\
  !*** ./src/components/header/elements/SearchForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/useDebound */ "./src/common/useDebound.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\header\\elements\\SearchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function SearchForm({
  enterButton = "Search",
  hideSelect
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: currentSearch,
    1: setCurrentSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: currentCategory,
    1: setCurrentCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_5__["default"])(currentSearch, 300);
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);
  const {
    searchedProducts
  } = shopState;

  const onChange = val => {
    setCurrentSearch(val);
  };

  const onSelectOption = (value, option) => {
    setCurrentSearch(value);
  };

  const onSearch = val => {
    if (!currentSearch || currentSearch === "") {
      return;
    } else {
      router.push({
        pathname: "" + "/shop/shop-3-column",
        query: {
          q: currentSearch
        }
      });
    }
  };

  const onChooseCateogry = val => {
    setCurrentCategory(val);
  };

  const options = searchedProducts.data.length > 0 && searchedProducts.data.map(item => ({
    value: item.name
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_6__["fetchSearchedProductRequest"])({
      input: currentSearch,
      limit: 10,
      category: currentCategory
    }));
  }, [deboundValue, currentCategory]);
  return __jsx("div", {
    className: "search-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "search-form-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, !hideSelect && __jsx("div", {
    className: "search-form-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: currentCategory,
    suffixIcon: __jsx("i", {
      className: "far fa-angle-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 27
      }
    }),
    bordered: false,
    onChange: onChooseCateogry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "All categories"), _data_categories_json__WEBPACK_IMPORTED_MODULE_4__.map((item, index) => __jsx(Option, {
    key: index,
    value: item.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, item.name)))), __jsx("div", {
    className: "search-form-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    backfill: true,
    value: currentSearch,
    onSelect: onSelectOption,
    onChange: onChange,
    options: options,
    filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    placeholder: "What do you need",
    size: "large",
    enterButton: enterButton,
    bordered: false,
    loading: searchedProducts.loading,
    onSearch: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchForm));

/***/ }),

/***/ "./src/components/header/menu/MenuThree.js":
/*!*************************************************!*\
  !*** ./src/components/header/menu/MenuThree.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuThree; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _elements_FunctionItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/FunctionItems */ "./src/components/header/elements/FunctionItems.js");
/* harmony import */ var _elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/MobileMenuOpener */ "./src/components/header/elements/MobileMenuOpener.js");
/* harmony import */ var _elements_Navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/Navigator */ "./src/components/header/elements/Navigator.js");
/* harmony import */ var _elements_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/SearchForm */ "./src/components/header/elements/SearchForm.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\header\\menu\\MenuThree.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function MenuThree() {
  return __jsx("div", {
    className: "menu -style-three",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_elements_MobileMenuOpener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "menu-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo-white.png",
    alt: "Ogami logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }))), __jsx(_elements_Navigator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(_elements_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    hideSelect: true,
    enterButton: __jsx("i", {
      className: "icon_search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 47
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_elements_FunctionItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
    hideWishlist: true,
    hideTotal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/layout/LayoutFour.js":
/*!*********************************************!*\
  !*** ./src/components/layout/LayoutFour.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_HeaderFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/HeaderFour */ "./src/components/header/HeaderFour.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/withHeaderScroll */ "./src/common/withHeaderScroll.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\layout\\LayoutFour.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ScrolledHeader = Object(_common_withHeaderScroll__WEBPACK_IMPORTED_MODULE_5__["default"])(_header_HeaderFour__WEBPACK_IMPORTED_MODULE_3__["default"]);

function LayoutFour({
  title,
  headerClass,
  footerClass,
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title)), children, __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: footerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LayoutFour));

/***/ }),

/***/ "./src/components/other/Benefits.js":
/*!******************************************!*\
  !*** ./src/components/other/Benefits.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/benefits.json */ "./src/data/benefits.json");
var _data_benefits_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/benefits.json */ "./src/data/benefits.json", 1);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\other\\Benefits.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Benefits({
  containerFluid,
  column,
  threeCol,
  style,
  className
}) {
  const renderCol = () => {
    return threeCol ? {
      xs: 24,
      md: 8
    } : column ? {
      xs: 24,
      sm: 12,
      md: 6,
      lg: 24
    } : {
      xs: 24,
      md: 6
    };
  };

  const col = renderCol();
  return __jsx("div", {
    className: `benefits ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      "-column": column
    })}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "benefits-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.slice(0, threeCol ? 3 : _data_benefits_json__WEBPACK_IMPORTED_MODULE_3__.length).map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    key: index
  }, renderCol(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "benefits-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "benefits-item__image",
    src: "" + item.iconSrc,
    alt: "Benefit icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }), __jsx("h5", {
    className: "benefits-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, item.name), __jsx("p", {
    className: "benefits-item__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, item.description)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Benefits));

/***/ }),

/***/ "./src/components/other/Container.js":
/*!*******************************************!*\
  !*** ./src/components/other/Container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\other\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  fluid,
  children
}) {
  return __jsx("div", {
    className: fluid ? "container-fluid" : "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./src/components/other/FetchDataHandle.js":
/*!*************************************************!*\
  !*** ./src/components/other/FetchDataHandle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchDataHandle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\other\\FetchDataHandle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FetchDataHandle({
  data,
  errorMessage = "Get products fail, please try again",
  emptyDescription = "No product in this category",
  renderData
}) {
  return data.loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }) : data.error ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, errorMessage) : data.data.length > 0 ? renderData && renderData(data.data) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: emptyDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/other/QuantitySelector.js":
/*!**************************************************!*\
  !*** ./src/components/other/QuantitySelector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/useDebound */ "./src/common/useDebound.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\other\\QuantitySelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function QuantitySelector({
  min,
  max,
  defaultValue = 1,
  className,
  onChange,
  onDecrease,
  onIncrease
}) {
  const firstUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue);
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_3__["default"])(value, 300);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    onChange && onChange(value);
  }, [deboundValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const decreaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (min && value <= min) {
      return;
    } else {
      if (value <= 1) {
        return;
      }

      onDecrease && onDecrease();
      setValue(value - 1);
    }
  }, [value]);
  const increaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (value >= max) {
      return;
    }

    onIncrease && onIncrease();
    setValue(value + 1);
  }, [value]);
  return __jsx("div", {
    className: `quantity-selector ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "quantity-selector-number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, value), __jsx("div", {
    className: "quantity-selector-controller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value <= min || value <= 1,
    onClick: decreaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "-"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    disabled: value >= max,
    onClick: increaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "+")));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(QuantitySelector));

/***/ }),

/***/ "./src/components/other/SectionTitle.js":
/*!**********************************************!*\
  !*** ./src/components/other/SectionTitle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\other\\SectionTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SectionTitle({
  title,
  hideDecoration,
  className,
  style
}) {
  return __jsx("div", {
    className: `section-title ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, title), !hideDecoration && __jsx("div", {
    className: "section-title-decoration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 27
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SectionTitle));

/***/ }),

/***/ "./src/components/other/SliderArrow.js":
/*!*********************************************!*\
  !*** ./src/components/other/SliderArrow.js ***!
  \*********************************************/
/*! exports provided: PrevArrow, NextArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevArrow", function() { return PrevArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextArrow", function() { return NextArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\other\\SliderArrow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const PrevArrow = (_ref) => {
  let {
    currentSlide,
    slideCount
  } = _ref,
      arrowProps = _objectWithoutProperties(_ref, ["currentSlide", "slideCount"]);

  return __jsx("a", _extends({}, arrowProps, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 3
    }
  }), __jsx("i", {
    className: "far fa-angle-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }));
};
const NextArrow = (_ref2) => {
  let {
    currentSlide,
    slideCount
  } = _ref2,
      arrowProps = _objectWithoutProperties(_ref2, ["currentSlide", "slideCount"]);

  return __jsx("a", _extends({}, arrowProps, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }), __jsx("i", {
    className: "far fa-angle-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }));
};

/***/ }),

/***/ "./src/components/other/SocialIcons.js":
/*!*********************************************!*\
  !*** ./src/components/other/SocialIcons.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\other\\SocialIcons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SocialIcons({
  className,
  type = "link",
  shape
}) {
  return __jsx("ul", {
    className: `social-icons ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-invision",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: type,
    shape: shape,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-pinterest-p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/post/Post.js":
/*!*************************************!*\
  !*** ./src/components/post/Post.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\post\\Post.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Post({
  type,
  className,
  style,
  data
}) {
  switch (type) {
    case "inline":
      return __jsx("div", {
        className: `post-inline ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "post-inline-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }
      }, __jsx("img", {
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "post-inline-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "post-inline-content__meta",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }
      }, __jsx("i", {
        className: "fal fa-calendar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }
      }), Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(data.publicDate)), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, __jsx("i", {
        className: "fal fa-comments",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }), data.comments.length)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "post-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }
      }, data.title))));

    case "row":
      return __jsx("div", {
        className: `post -style-one ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "post-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        placeholder: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "post-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        className: "post-category",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["removeDash"])(data.category)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "post-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }
      }, data.title)), __jsx("div", {
        className: "post-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "credit date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(data.publicDate)), __jsx("p", {
        className: "credit comment",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, data.comments.length, " Comment")), __jsx("p", {
        className: "post-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, data.shortDescription), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "post-readmore",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }, "Read More", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "arrow_carrot-2right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 19
        }
      }))))));

    case "column-full":
      return __jsx("div", {
        className: `post -style-three ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "post-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        width: "100%",
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        placeholder: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "post-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "post-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "credit date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(data.publicDate)), __jsx("p", {
        className: "credit comment",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }
      }, data.comments.length, " Comment")), __jsx("p", {
        className: "post-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }
      }, data.shortDescription), __jsx("a", {
        className: "post-readmore",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, "Read More", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }
      }, __jsx("i", {
        className: "arrow_carrot-2right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      })))));

    case "tiny":
      return __jsx("div", {
        className: `post-tiny ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "post-tiny-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        width: "100%",
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        placeholder: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "post-tiny-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "post-tiny-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 15
        }
      }, data.title)), __jsx("p", {
        className: "post-tiny-date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(data.publicDate))));

    default:
      return __jsx("div", {
        className: `post -style-two ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "post-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        title: data.title,
        src: "" + data.coverImage,
        alt: "Post image",
        placeholder: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      })))), __jsx("div", {
        className: "post-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        className: "post-category",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["removeDash"])(data.category)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "" + `/blog/post/[slug]`,
        as: "" + `/blog/post/${data.slug}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "post-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 15
        }
      }, data.title)), __jsx("div", {
        className: "post-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "credit date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 15
        }
      }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(data.publicDate)), __jsx("p", {
        className: "credit comment",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 15
        }
      }, data.comments.length, " Comment"))));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Post));

/***/ }),

/***/ "./src/components/product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _common_cartServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/cartServices */ "./src/common/cartServices.js");
/* harmony import */ var _common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/wishlistServices */ "./src/common/wishlistServices.js");
/* harmony import */ var _detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../detail/product/ProductDetailLayout */ "./src/components/detail/product/ProductDetailLayout.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\product\\Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Product({
  data,
  className,
  type,
  countdownLast = 100000000
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: addToCartLoading,
    1: setAddToCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: addToWishlistLoading,
    1: setAddToWishlistLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.cartReducer);
  const wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.wishlistReducer);
  const compareState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.compareReducer);
  const productInWishlist = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(wishlistState.data, data.id);
  const productInCompare = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_8__["checkProductInWishlist"])(compareState, data.id);

  const showModal = () => {
    setModalVisible(true);
  };

  const onModalClose = e => {
    setModalVisible(false);
  };

  const onAddToCart = product => {
    if (addToCartLoading) {
      return;
    }

    setAddToCartLoading(true);
    Object(_common_cartServices__WEBPACK_IMPORTED_MODULE_12__["onAddProductToCart"])({
      product,
      onSuccess: data => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart");
        dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCartRequest"])());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
      }
    });
  };

  const onAddWishlist = product => {
    if (addToWishlistLoading) {
      return;
    }

    setAddToWishlistLoading(true);

    if (!productInWishlist) {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onAddProductToWishlist"])({
        product,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    } else {
      Object(_common_wishlistServices__WEBPACK_IMPORTED_MODULE_13__["onRemoveProductFromWishlist"])({
        productId: product.id,
        onSuccess: data => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
          dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_10__["fetchWishListRequest"])());
        },
        onError: (mes, err) => {
          setAddToWishlistLoading(false);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(mes);
          console.log(err);
        }
      });
    }
  };

  const onAddToCompare = product => {
    if (productInCompare) {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["removeFromCompare"])(product.id));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from compare");
    } else {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_11__["addToCompare"])(product));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to compare");
    }
  };

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const rederProductType = type => {
    switch (type) {
      case "tiny":
        return __jsx("div", {
          className: `product-tiny ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-tiny-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-tiny-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-tiny-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-tiny-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))));

      case "dale":
        return __jsx("div", {
          className: `product-dale ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-dale-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 19
          }
        })))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
          date: Date.now() + getRandomArbitrary(100000000, 150000000),
          renderer: ({
            days,
            hours,
            minutes,
            seconds
          }) => {
            return __jsx("div", {
              className: "product-dale-countdown",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }
            }, __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(days)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 48
              }
            }, "days")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(hours)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 49
              }
            }, "hr")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(minutes), " "), __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 23
              }
            }, "min")), __jsx("div", {
              className: "product-dale-countdown-item",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 21
              }
            }, __jsx("h6", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 23
              }
            }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_4__["zeroPad"])(seconds)), " ", __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 51
              }
            }, "sec")));
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }
        }), __jsx("div", {
          className: "product-dale-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-dale-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-dale-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-dale-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-dale-select",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to wishlist",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to cart",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to compare",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Quick view",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 17
          }
        }))));

      case "list":
        return __jsx("div", {
          className: "product-list",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 19
          }
        }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          onClick: showModal,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 15
          }
        }, "Quick view")), __jsx("div", {
          className: "product-list-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 17
          }
        }, data.name)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
          className: "product-rate",
          disabled: true,
          defaultValue: data.rate,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 15
          }
        }), __jsx("p", {
          className: "product-description",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }
        }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor niam"), data.quantity > 0 ? __jsx("h5", {
          className: "product-availability -instock",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 17
          }
        }, "Availability: ", __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 33
          }
        }, " ", data.quantity, " in stock")) : __jsx("h5", {
          className: "product-availability -outstock",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 17
          }
        }, "Availability: ", __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 33
          }
        }, " Out stock"))), __jsx("div", {
          className: "product-list-actions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "product-detail-content__delivery",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }
        }, "Free delivery"), __jsx("h3", {
          className: "product-detail-content__price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 15
          }
        }, data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)), __jsx("div", {
          className: "product-detail-content__price-discount",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 17
          }
        }, __jsx("h5", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 19
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-detail-content__actions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          loading: addToCartLoading,
          shape: "round",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 17
          }
        }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          shape: "round",
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 17
          }
        }, "Add to compare"))));

      default:
        return __jsx("div", {
          className: `product ${classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "product-img",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 15
          }
        }, __jsx("a", {
          title: data.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: data.coverImage,
          alt: "Product image",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 19
          }
        })))), __jsx("div", {
          className: "product-content",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "product-type",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 15
          }
        }, data.category), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "" + `/product/[slug]`,
          as: "" + `/product/${data.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "product-name",
          title: "Pure Pineapple",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 17
          }
        }, data.name)), __jsx("h3", {
          className: "product-price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 15
          }
        }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price - data.discount) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price), data.discount && __jsx("del", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 35
          }
        }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["formatCurrency"])(data.price)))), __jsx("div", {
          className: "product-select",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 13
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to wishlist",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddWishlist(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInWishlist
          })}`,
          type: "primary",
          shape: "round",
          icon: addToWishlistLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-heart",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to cart",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCart(data),
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: addToCartLoading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LoadingOutlined"], {
            spin: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 23
            }
          }) : __jsx("i", {
            className: "far fa-shopping-bag",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 23
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Add to compare",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => onAddToCompare(data),
          className: `product-btn ${classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            active: productInCompare
          })}`,
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-random",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 17
          }
        })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          title: "Quick view",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 15
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: showModal,
          className: "product-btn",
          type: "primary",
          shape: "round",
          icon: __jsx("i", {
            className: "far fa-eye",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 25
            }
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 17
          }
        }))));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rederProductType(type), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    visible: modalVisible,
    onCancel: onModalClose,
    footer: null,
    header: null,
    width: 860,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 7
    }
  }, __jsx(_detail_product_ProductDetailLayout__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      marginBottom: 0
    },
    hideTab: true,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Product));

/***/ }),

/***/ "./src/components/sections/blog/BlogSlide.js":
/*!***************************************************!*\
  !*** ./src/components/sections/blog/BlogSlide.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
/* harmony import */ var _post_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../post/Post */ "./src/components/post/Post.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\blog\\BlogSlide.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function BlogSlide({
  headerTitle,
  headerClass,
  postClassName,
  postType,
  data,
  className
}) {
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  return __jsx("div", {
    className: `blog-slide ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: headerTitle,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(headerClass),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "blog-slide-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, data.loading ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }) : data.error ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Get products fail, please try again") : data.data.length > 0 ? __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), data.data.map((item, index) => __jsx("div", {
    key: index,
    className: "slide-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx(_post_Post__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(postClassName),
    type: postType,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_1__["Empty"].PRESENTED_IMAGE_SIMPLE,
    description: "No product in this category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  })));
}

/***/ }),

/***/ "./src/components/sections/categories/CategoriesOne.js":
/*!*************************************************************!*\
  !*** ./src/components/sections/categories/CategoriesOne.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\categories\\CategoriesOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function CategoriesOne({
  data
}) {
  return __jsx("div", {
    className: "categories-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: [{
      sm: 0,
      md: 15
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, data && data.length > 0 ? data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    key: index,
    xs: 24,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "categories-one-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "categories-one-item__image up-down-anim-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 23
    }
  }, item.image.background), __jsx("img", {
    src: "" + item.image.main,
    alt: "Category image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, item.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, item.quantity)))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Empty"], {
    image: antd__WEBPACK_IMPORTED_MODULE_2__["Empty"].PRESENTED_IMAGE_SIMPLE,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CategoriesOne));

/***/ }),

/***/ "./src/components/sections/hero-slider/HeroSliderFour.js":
/*!***************************************************************!*\
  !*** ./src/components/sections/hero-slider/HeroSliderFour.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _other_SliderArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SliderArrow */ "./src/components/other/SliderArrow.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\hero-slider\\HeroSliderFour.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function HeroSliderFour({
  data
}) {
  const {
    0: currentSlideIndex,
    1: setNextSlideIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_4__["PrevArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }
    }),
    nextArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_4__["NextArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 16
      }
    })
  };

  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentSlide = document.querySelector(`.hero-slider.-style-four .slick-slide[data-index="${currentSlideIndex}"]`);
    const animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach((item, index) => {
      const animationName = item.dataset.animation;
      const animationDelay = item.dataset.delay;
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
    className: "hero-slider -carousel -style-four -coffee",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    beforeChange: beforeChange,
    className: "arrow-center"
  }, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), data.map((item, index) => __jsx("div", {
    key: index,
    className: "slick-slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "hero-slider-background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + item.background,
    alt: "Hero slider background image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })), __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "hero-slider-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "hero-slider-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("img", {
    "data-animation": "animate__fadeInUp",
    src: "" + item.image,
    alt: "slider image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    "data-delay": "0.3",
    "data-animation": "animate__fadeInUp",
    type: "primary",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "" + "/shop/shop-3-column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 23
    }
  }, "Shop now"))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HeroSliderFour));

/***/ }),

/***/ "./src/components/sections/hero-slider/HeroSliderOne.js":
/*!**************************************************************!*\
  !*** ./src/components/sections/hero-slider/HeroSliderOne.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _other_SliderArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../other/SliderArrow */ "./src/components/other/SliderArrow.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\hero-slider\\HeroSliderOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function HeroSliderOne({
  data
}) {
  const {
    0: currentSlideIndex,
    1: setNextSlideIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_6__["PrevArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }),
    nextArrow: __jsx(_other_SliderArrow__WEBPACK_IMPORTED_MODULE_6__["NextArrow"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    })
  };

  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentSlide = document.querySelector(`.hero-slider.-style-one .slick-slide[data-index="${currentSlideIndex}"]`);
    const animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach((item, index) => {
      const animationName = item.dataset.animation;
      const animationDelay = item.dataset.delay;
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
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    beforeChange: beforeChange,
    className: "arrow-center"
  }, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), data.map((item, index) => __jsx("div", {
    key: index,
    className: `slick-slider-item ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: index === currentSlideIndex
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "hero-slider-background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + item.background,
    alt: "Hero slider background image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  })), __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "hero-slider-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "hero-slider-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("h1", {
    "data-delay": "0.2",
    "data-animation": "animate__fadeInDown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 23
    }
  }, item.title), __jsx("h3", {
    "data-delay": "0.4",
    "data-animation": "animate__fadeInDown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, item.price.main))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, __jsx("div", {
    "data-delay": "0.8",
    "data-animation": "animate__zoomInRight",
    className: "hero-slider-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "" + item.price.image,
    alt: "Hero slider image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HeroSliderOne));

/***/ }),

/***/ "./src/components/sections/introduction/IntroductionFour.js":
/*!******************************************************************!*\
  !*** ./src/components/sections/introduction/IntroductionFour.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
/* harmony import */ var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/sections/introduction.json */ "./src/data/sections/introduction.json");
var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/sections/introduction.json */ "./src/data/sections/introduction.json", 1);
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\introduction\\IntroductionFour.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const DownOneItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  reverse,
  data,
  className
}) => {
  return __jsx("div", {
    className: `dow-one-content__item ${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "-reverse": reverse
    })}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dow-one-content__item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "" + data.iconSrc,
    alt: "Dale of the week icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "dow-one-content__item-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, data.title), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, data.description)));
});

function IntroductionFour() {
  const data = _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_5__.four;
  return __jsx("div", {
    className: "introduction-four",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Why choose us",
    className: "-coffee -title-white -center",
    style: {
      marginBottom: 100 / 16 + "em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "dow-one-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "center",
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [0, 30],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, data.slice(0, 2).map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: index,
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx(DownOneItem, {
    reverse: true,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 0,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "dow-one-image",
    src: "" + "/assets/images/sections/introduction/four/img.png",
    alt: "Introduction image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [0, 30],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, data.slice(2, 4).map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    key: index,
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx(DownOneItem, {
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(IntroductionFour));

/***/ }),

/***/ "./src/components/sections/introduction/IntroductionThree.js":
/*!*******************************************************************!*\
  !*** ./src/components/sections/introduction/IntroductionThree.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\introduction\\IntroductionThree.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const data = [{
  title: "Step 1",
  description: "Choose Your Products",
  image: "/assets/images/sections/introduction/three/step-1.png"
}, {
  title: "Step 2",
  description: "Fill Essential Details",
  image: "/assets/images/sections/introduction/three/step-2.png"
}, {
  title: "Step 3",
  description: "Complete Your Payment",
  image: "/assets/images/sections/introduction/three/step-3.png"
}, {
  title: "Step 4",
  description: "Get Contacted by Our Experts",
  image: "/assets/images/sections/introduction/three/step-4.png"
}];

function IntroductionThree() {
  return __jsx("div", {
    className: "introduction-three",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "introduction-three-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Working Process",
    className: "-center -title-white -coffee",
    style: {
      marginBottom: 95 / 16 + "em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "introduction-three-steps",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, data.map((item, index) => __jsx("div", {
    key: index,
    className: "introduction-three-steps-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + item.image,
    alt: "Step image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, item.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, item.description)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(IntroductionThree));

/***/ }),

/***/ "./src/components/sections/introduction/IntroductionTwo.js":
/*!*****************************************************************!*\
  !*** ./src/components/sections/introduction/IntroductionTwo.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\introduction\\IntroductionTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function IntroductionTwo() {
  return __jsx("div", {
    className: "introduction-two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "introduction-two-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "introduction-two-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + "/assets/images/sections/introduction/two/1.png",
    alt: "introduction-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "introduction-two-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Lefin Suitcase",
    hideDecoration: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "LEFIN Suitcase, a suitcase packed with Legal and financial services.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 85
    }
  }), " Here we have experts who deal with your problem and provide you with accurate solutions. From legal consultancy on civil and criminal matters to IPR matters.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 248
    }
  }), "We are here to guide you, help you and make you aware of your legal and financial rights.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 343
    }
  }), " Just connect with us and make your life easy and smooth.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 406
    }
  }), __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 412
    }
  }, " For us, the client is our priority."))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(IntroductionTwo));

/***/ }),

/***/ "./src/components/sections/partners/PartnerOne.js":
/*!********************************************************!*\
  !*** ./src/components/sections/partners/PartnerOne.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\partners\\PartnerOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function PartnerOne({
  style
}) {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }]
  };
  return __jsx("div", {
    className: "partner-one",
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "partner-one-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), Array.from(Array(8), (e, i) => __jsx("div", {
    key: i,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + `/assets/images/sections/partners/${i + 1}.png`,
    alt: "Partner logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PartnerOne));

/***/ }),

/***/ "./src/components/sections/product-thumb/ProductTab.js":
/*!*************************************************************!*\
  !*** ./src/components/sections/product-thumb/ProductTab.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/FetchDataHandle */ "./src/components/other/FetchDataHandle.js");
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\components\\sections\\product-thumb\\ProductTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function ProductTab({
  style,
  data,
  className,
  onTabChange,
  productClassName,
  headerCategories,
  headerTitle,
  headerClass,
  showTitleDecoration = false,
  headerType = "grid",
  productCol
}) {
  const {
    TabPane
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

  const onChooseCategory = key => {
    onTabChange(key);
  };

  const renderTabContent = () => __jsx(_other_FetchDataHandle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    renderData: data => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      gutter: [{
        xs: 0,
        md: 15
      }, {
        xs: 0,
        md: 15
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, data.map((item, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
      key: index
    }, productCol, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: productClassName,
      data: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    })))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  });

  return __jsx("div", {
    className: `product-tab ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `product-tab-header ${headerType === "row" ? "-style-two" : "style-one"}  ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(headerClass)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, headerType === "grid" && __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: headerTitle,
    className: "-center",
    hideDecoration: showTitleDecoration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    tabBarExtraContent: headerType === "row" ? {
      left: __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: headerTitle,
        className: "-center",
        hideDecoration: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      })
    } : null,
    defaultActiveKey: "1",
    centered: headerType === "row" ? false : true,
    onChange: onChooseCategory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(TabPane, {
    tab: "All",
    key: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, renderTabContent()), headerCategories.map((item, index) => __jsx(TabPane, {
    tab: item,
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, renderTabContent())))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductTab));

/***/ }),

/***/ "./src/data/benefits.json":
/*!********************************!*\
  !*** ./src/data/benefits.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"iconSrc\":\"/assets/images/other/benefits/1.png\",\"name\":\"Quick Problem Solving\",\"description\":\"Experienced Experts Team\"},{\"iconSrc\":\"/assets/images/other/benefits/2.png\",\"name\":\"24*7 Services\",\"description\":\"Just a Call Away\"},{\"iconSrc\":\"/assets/images/other/benefits/3.png\",\"name\":\"SECURE PAYMENT\",\"description\":\"100% secure payment\"},{\"iconSrc\":\"/assets/images/other/benefits/4.png\",\"name\":\"24/7 SUPPORT\",\"description\":\"Dedicated support\"}]");

/***/ }),

/***/ "./src/data/categories.json":
/*!**********************************!*\
  !*** ./src/data/categories.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"bread\",\"value\":\"bread\"},{\"name\":\"fastfood\",\"value\":\"fast-food\"},{\"name\":\"fresh meat\",\"value\":\"fresh-meat\"},{\"name\":\"ocean foods\",\"value\":\"ocean-foods\"},{\"name\":\"oranges\",\"value\":\"oranges\"},{\"name\":\"organic drinks\",\"value\":\"organic-drinks\"},{\"name\":\"vegetables\",\"value\":\"vegetables\"}]");

/***/ }),

/***/ "./src/data/footer-links.json":
/*!************************************!*\
  !*** ./src/data/footer-links.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"INFOMATION\",\"items\":[{\"title\":\"About us\",\"href\":\"/other/about-us\"},{\"title\":\"Check out\",\"href\":\"/shop/checkout\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Service\",\"href\":\"#\"}]},{\"title\":\"MY ACCOUNT\",\"items\":[{\"title\":\"My account\",\"href\":\"#\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Shop Cart\",\"href\":\"/shop/cart\"},{\"title\":\"Tracking Order\",\"href\":\"#\"}]},{\"title\":\"QUICK SHOP\",\"items\":[{\"title\":\"About us\",\"href\":\"/other/about-us\"},{\"title\":\"Check out\",\"href\":\"/shop/checkout\"},{\"title\":\"Contact\",\"href\":\"/other/contact-us\"},{\"title\":\"Service\",\"href\":\"#\"}]}]");

/***/ }),

/***/ "./src/data/navigator.json":
/*!*********************************!*\
  !*** ./src/data/navigator.json ***!
  \*********************************/
/*! exports provided: ABOUT, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ABOUT\":{\"title\":\"About us\",\"href\":\"/other/about-us\"}}");

/***/ }),

/***/ "./src/data/sections/categories.json":
/*!*******************************************!*\
  !*** ./src/data/sections/categories.json ***!
  \*******************************************/
/*! exports provided: one, two, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"image\":{\"background\":\"T\",\"main\":\"/assets/images/sections/category/one/1.png\"},\"title\":\"Tax Services\",\"quantity\":\"Income Tax Return,GST Return Filing, TDS Return Filing\"},{\"image\":{\"background\":\"A\",\"main\":\"/assets/images/sections/category/one/2.png\"},\"title\":\"Audit and Compliance Services\",\"quantity\":\"Financial, Tax Audit\"},{\"image\":{\"background\":\"C\",\"main\":\"/assets/images/sections/category/one/3.png\"},\"title\":\"Company Registration \",\"quantity\":\"ROC Annual Filing, Company Registration\"},{\"image\":{\"background\":\"I\",\"main\":\"/assets/images/sections/category/one/4.png\"},\"title\":\"Intellectual Property Services\",\"quantity\":\"Trademark, Copyright, Patent Registration\"}],\"two\":[{\"image\":{\"background\":\"L\",\"main\":\"/assets/images/sections/category/one/5.png\"},\"title\":\"Licensing and Certification Services\",\"quantity\":\"Factory, FSSAI Food License\"},{\"image\":{\"background\":\"B\",\"main\":\"/assets/images/sections/category/one/6.png\"},\"title\":\"Business Registration\",\"quantity\":\"GST, Import/Export, Bar Code, Drug Registration\"},{\"image\":{\"background\":\"L\",\"main\":\"/assets/images/sections/category/one/7.png\"},\"title\":\"Legal Services\",\"quantity\":\"Civil Property, SAAS, Company Agreements\"},{\"image\":{\"background\":\"C\",\"main\":\"/assets/images/sections/category/one/8.png\"},\"title\":\" Compliance Services\",\"quantity\":\"Factory License\"}]}");

/***/ }),

/***/ "./src/data/sections/hero-slider.json":
/*!********************************************!*\
  !*** ./src/data/sections/hero-slider.json ***!
  \********************************************/
/*! exports provided: one, four, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"background\":\"/assets/images/hero-slider/one/bg-1.png\",\"subTitle\":\"\",\"title\":\"We have one of the Best Lawyers for Corporate & Litigation.\",\"price\":{\"main\":\"Legal Services\",\"image\":\"/assets/images/hero-slider/one/1.png\",\"unit\":\"pakage\"}},{\"background\":\"/assets/images/hero-slider/one/bg-2.png\",\"subTitle\":\"\",\"title\":\"We have some best Finance Consultants.\",\"price\":{\"main\":\"Finance Services\",\"image\":\"/assets/images/hero-slider/one/2.png\",\"unit\":\"pakage\"}}],\"four\":[{\"image\":\"/assets/images/hero-slider/four/1.png\",\"background\":\"/assets/images/hero-slider/four/bg-1.png\"},{\"image\":\"/assets/images/hero-slider/four/2.png\",\"background\":\"/assets/images/hero-slider/four/bg-2.png\"}]}");

/***/ }),

/***/ "./src/data/sections/introduction.json":
/*!*********************************************!*\
  !*** ./src/data/sections/introduction.json ***!
  \*********************************************/
/*! exports provided: one, four, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"one\":[{\"background\":\"/assets/images/sections/introduction/bg-1.png\",\"image\":\"/assets/images/sections/introduction/1.png\",\"btnContent\":\"shop now\"},{\"background\":\"/assets/images/sections/introduction/bg-2.png\",\"image\":\"/assets/images/sections/introduction/2.png\",\"btnContent\":\"shop now\"},{\"background\":\"/assets/images/sections/introduction/bg-3.png\",\"image\":\"/assets/images/sections/introduction/3.png\",\"btnContent\":\"shop now\"}],\"four\":[{\"title\":\"Affordable Prices\",\"description\":\"Team of experts at an affordable prize.\",\"iconSrc\":\"/assets/images/sections/introduction/four/1.png\"},{\"title\":\"Top Experts\",\"description\":\"Our team only comprises of the best from legal and financial domain.\",\"iconSrc\":\"/assets/images/sections/introduction/four/2.png\"},{\"title\":\"24*7 Services\",\"description\":\"We are just a call away.\",\"iconSrc\":\"/assets/images/sections/introduction/four/3.png\"},{\"title\":\"All Problems Sorted\",\"description\":\"We have a suitcase of solutions that will solve all your problems.\",\"iconSrc\":\"/assets/images/sections/introduction/four/4.png\"}]}");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homepage4; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
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
var _jsxFileName = "C:\\Users\\Devanashu Sinha\\OneDrive\\Pictures\\ogami-main\\ogami\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




















function homepage4() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: currentProductTabsCategory,
    1: setCurrentProductTabsCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    featuredProducts: ""
  });
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopReducer);
  const blogState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.blogReducer);
  const {
    featuredProducts
  } = shopState;
  const {
    allPosts
  } = blogState;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__["fetchFeaturedProductsRequest"])({
      limit: 8
    }));
    dispatch(Object(_redux_actions_blogActions__WEBPACK_IMPORTED_MODULE_3__["fetchPostsRequest"])({
      limit: 4
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_FILTER", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_FILTER", function() { return BLOG_FILTER; });
const SHOP = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
  FETCH_SALE_PRODUCTS: "FETCH_SALE_PRODUCTS",
  FETCH_SALE_PRODUCTS_SUCCESS: "FETCH_SALE_PRODUCTS_SUCCESS",
  FETCH_SALE_PRODUCTS_FAIL: "FETCH_SALE_PRODUCTS_FAIL",
  FETCH_FEATURED_PRODUCTS: "FETCH_FEATURED_PRODUCTS",
  FETCH_FEATURED_PRODUCTS_SUCCESS: "FETCH_FEATURED_PRODUCTS_SUCCESS",
  FETCH_FEATURED_PRODUCTS_FAIL: "FETCH_FEATURED_PRODUCTS_FAIL",
  FETCH_BEST_SELLER_PRODUCTS: "FETCH_BEST_SELLER_PRODUCTS",
  FETCH_BEST_SELLER_PRODUCTS_SUCCESS: "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
  FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
  FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
  FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
  FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
  FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
  FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
  FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL"
};
const BLOG = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL",
  FETCH_POST_DETAIL: "FETCH_POST_DETAIL",
  FETCH_POST_DETAIL_SUCCESS: "FETCH_POST_DETAIL_SUCCESS",
  FETCH_POST_DETAIL_FAIL: "FETCH_POST_DETAIL_FAIL",
  FETCH_RECENT_POSTS: "FETCH_RECENT_POSTS",
  FETCH_RECENT_POSTS_SUCCESS: "FETCH_RECENT_POSTS_SUCCESS",
  FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL"
};
const SHOP_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_SORT: "SET_SORT",
  SET_SHOW: "SET_SHOW",
  SET_VIEW: "SET_VIEW",
  SET_CATEGORY: "SET_CATEGORY",
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TAG: "SET_TAG"
};
const CART = {
  FETCH_CART: "FETCH_CART",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAIL: "FETCH_CART_FAIL"
};
const WISHLIST = {
  FETCH_WISHLIST: "FETCH_WISHLIST",
  FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
  FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL"
};
const COMPARE = {
  ADD_TO_COMPARE: "ADD_TO_COMPARE",
  REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE"
};
const BLOG_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_TAG: "SET_TAG"
};

/***/ }),

/***/ "./src/redux/actions/blogActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/blogActions.js ***!
  \******************************************/
/*! exports provided: fetchPosts, fetchPostsSuccess, fetchPostsFail, fetchPostsRequest, fetchRecentPosts, fetchRecentPostsSuccess, fetchRecentPostsFail, fetchRecentPostsRequest, fetchPostDetail, fetchPostDetailSuccess, fetchPostDetailFail, fetchPostDetailRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsSuccess", function() { return fetchPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsFail", function() { return fetchPostsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsRequest", function() { return fetchPostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentPosts", function() { return fetchRecentPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentPostsSuccess", function() { return fetchRecentPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentPostsFail", function() { return fetchRecentPostsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentPostsRequest", function() { return fetchRecentPostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostDetail", function() { return fetchPostDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostDetailSuccess", function() { return fetchPostDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostDetailFail", function() { return fetchPostDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostDetailRequest", function() { return fetchPostDetailRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/blog */ "./src/apis/blog.js");

 //Fetch all posts

const fetchPosts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS
});
const fetchPostsSuccess = (data, postCount) => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_SUCCESS,
  payload: {
    data,
    postCount
  }
});
const fetchPostsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_FAIL,
  payload: {
    err
  }
});
const fetchPostsRequest = query => {
  return dispatch => {
    dispatch(fetchPosts());
    _apis_blog__WEBPACK_IMPORTED_MODULE_1__["fetchBlogData"](query).then(res => {
      dispatch(fetchPostsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchPostsFail(err));
    });
  };
}; //Fetch recent posts

const fetchRecentPosts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS
});
const fetchRecentPostsSuccess = (data, postCount) => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_SUCCESS,
  payload: {
    data,
    postCount
  }
});
const fetchRecentPostsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_FAIL,
  payload: {
    err
  }
});
const fetchRecentPostsRequest = query => {
  return dispatch => {
    dispatch(fetchRecentPosts());
    _apis_blog__WEBPACK_IMPORTED_MODULE_1__["fetchRecentPostData"](query).then(res => {
      dispatch(fetchRecentPostsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchRecentPostsFail(err));
    });
  };
}; //Fetch post details

const fetchPostDetail = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL
});
const fetchPostDetailSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_SUCCESS,
  payload: {
    data
  }
});
const fetchPostDetailFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_FAIL,
  payload: {
    err
  }
});
const fetchPostDetailRequest = slug => {
  return dispatch => {
    dispatch(fetchPostDetail());
    _apis_blog__WEBPACK_IMPORTED_MODULE_1__["fetchPostDetailData"](slug).then(res => {
      dispatch(fetchPostDetailSuccess(res.data));
    }).catch(err => {
      dispatch(fetchPostDetailFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartSuccess", function() { return fetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartFail", function() { return fetchCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartRequest", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");

 //Get cart data

const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]().then(res => {
      dispatch(fetchCartSuccess(res.data));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/compareActions.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/compareActions.js ***!
  \*********************************************/
/*! exports provided: addToCompare, removeFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCompare", function() { return removeFromCompare; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const addToCompare = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE,
  payload: {
    data
  }
});
const removeFromCompare = productId => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE,
  payload: {
    productId
  }
});

/***/ }),

/***/ "./src/redux/actions/shopActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/shopActions.js ***!
  \******************************************/
/*! exports provided: fetchProducts, fetchProductsSuccess, fetchProductsFail, fetchProductsRequest, fetchSaleProducts, fetchSaleProductsSuccess, fetchSaleProductsFail, fetchSaleProductsRequest, fetchFeaturedProducts, fetchFeaturedProductsSuccess, fetchFeaturedProductsFail, fetchFeaturedProductsRequest, fetchBestSellerProducts, fetchBestSellerProductsSuccess, fetchBestSellerProductsFail, fetchBestSellerProductsRequest, fetchDaleProducts, fetchDaleProductsSuccess, fetchDaleProductsFail, fetchDaleProductsRequest, fetchProductDetail, fetchProductDetailSuccess, fetchProductDetailFail, fetchProductDetailRequest, fetchSearchedProduct, fetchSearchedProductSuccess, fetchSearchedProductFail, fetchSearchedProductRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsSuccess", function() { return fetchProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsFail", function() { return fetchProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsRequest", function() { return fetchProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProducts", function() { return fetchSaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsSuccess", function() { return fetchSaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsFail", function() { return fetchSaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSaleProductsRequest", function() { return fetchSaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProducts", function() { return fetchFeaturedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsSuccess", function() { return fetchFeaturedProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsFail", function() { return fetchFeaturedProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeaturedProductsRequest", function() { return fetchFeaturedProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProducts", function() { return fetchBestSellerProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsSuccess", function() { return fetchBestSellerProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsFail", function() { return fetchBestSellerProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBestSellerProductsRequest", function() { return fetchBestSellerProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProducts", function() { return fetchDaleProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsSuccess", function() { return fetchDaleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsFail", function() { return fetchDaleProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDaleProductsRequest", function() { return fetchDaleProductsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetail", function() { return fetchProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailSuccess", function() { return fetchProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailFail", function() { return fetchProductDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductDetailRequest", function() { return fetchProductDetailRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProduct", function() { return fetchSearchedProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductSuccess", function() { return fetchSearchedProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductFail", function() { return fetchSearchedProductFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchedProductRequest", function() { return fetchSearchedProductRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/shop */ "./src/apis/shop.js");

 //Get all products

const fetchProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS
});
const fetchProductsSuccess = (data, productCount) => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS,
  payload: {
    data,
    productCount
  }
});
const fetchProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchProductsRequest = query => {
  return dispatch => {
    dispatch(fetchProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductsData"](query).then(res => {
      dispatch(fetchProductsSuccess(res.data, res.headers["x-total-count"]));
    }).catch(err => {
      dispatch(fetchProductsFail(err));
    });
  };
}; //Get sale products

const fetchSaleProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS
});
const fetchSaleProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSaleProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchSaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSaleProductsData"](query).then(res => {
      dispatch(fetchSaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSaleProductsFail(err));
    });
  };
}; //Get featured products

const fetchFeaturedProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS
});
const fetchFeaturedProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchFeaturedProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchFeaturedProductsRequest = query => {
  return dispatch => {
    dispatch(fetchFeaturedProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchFeaturedProductsData"](query).then(res => {
      dispatch(fetchFeaturedProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchFeaturedProductsFail(err));
    });
  };
}; //Get best seller products

const fetchBestSellerProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS
});
const fetchBestSellerProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchBestSellerProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchBestSellerProductsRequest = query => {
  return dispatch => {
    dispatch(fetchBestSellerProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchBestSellerProductsData"](query).then(res => {
      dispatch(fetchBestSellerProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchBestSellerProductsFail(err));
    });
  };
}; //Get best seller products

const fetchDaleProducts = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS
});
const fetchDaleProductsSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchDaleProductsFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchDaleProductsRequest = query => {
  return dispatch => {
    dispatch(fetchDaleProducts());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchDaleProductsData"](query).then(res => {
      dispatch(fetchDaleProductsSuccess(res.data));
    }).catch(err => {
      dispatch(fetchDaleProductsFail(err));
    });
  };
}; //Get product detail

const fetchProductDetail = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL
});
const fetchProductDetailSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: {
    data
  }
});
const fetchProductDetailFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL,
  payload: {
    err
  }
});
const fetchProductDetailRequest = slug => {
  return dispatch => {
    dispatch(fetchProductDetail());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchProductDetailData"](slug).then(res => {
      dispatch(fetchProductDetailSuccess(res.data));
    }).catch(err => {
      dispatch(fetchProductDetailFail(err));
    });
  };
}; //Get searched product

const fetchSearchedProduct = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS
});
const fetchSearchedProductSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS,
  payload: {
    data
  }
});
const fetchSearchedProductFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL,
  payload: {
    err
  }
});
const fetchSearchedProductRequest = query => {
  return dispatch => {
    dispatch(fetchSearchedProduct());
    _apis_shop__WEBPACK_IMPORTED_MODULE_1__["fetchSearchedProductData"](query).then(res => {
      dispatch(fetchSearchedProductSuccess(res.data));
    }).catch(err => {
      dispatch(fetchSearchedProductFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: fetchWishListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishListRequest", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/wishlist */ "./src/apis/wishlist.js");

 //Get cart data

const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST
});

const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});

const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});

const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
    });
  };
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy9ibG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvc2hvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F4aW9zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NhcnRTZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zaG9wVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91c2VEZWJvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aXNobGlzdFNlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2l0aEhlYWRlclNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXRhaWwvcHJvZHVjdC9Qcm9kdWN0RGV0YWlsTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbC9wcm9kdWN0L2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbC9wcm9kdWN0L2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlsL3Byb2R1Y3QvZWxlbWVudHMvUHJvZHVjdERldGFpbFRhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJJbmZvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJRdWlja0xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJTdWJjcmliZUlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJGb3VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9GdW5jdGlvbkl0ZW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Nb2JpbGVNZW51T3BlbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Nb2JpbGVOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL05hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbWVudS9NZW51VGhyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEZvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvQmVuZWZpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoRGF0YUhhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9RdWFudGl0eVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL1NlY3Rpb25UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9TbGlkZXJBcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Tb2NpYWxJY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0L1Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL2Jsb2cvQmxvZ1NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL2NhdGVnb3JpZXMvQ2F0ZWdvcmllc09uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLXNsaWRlci9IZXJvU2xpZGVyRm91ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLXNsaWRlci9IZXJvU2xpZGVyT25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25Gb3VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25UaHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uVHdvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL3BhcnRuZXJzL1BhcnRuZXJPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvZHVjdC10aHVtYi9Qcm9kdWN0VGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYmxvZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY29tcGFyZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudGRvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicmVzb2x2ZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJyZW5kZXJVcmwiLCJsaW1pdCIsImNhdGVnb3J5IiwicmVuZGVyUGFyYW0iLCJmZXRjaEJsb2dEYXRhIiwiZW5kcG9pbnQiLCJBUElfVVJMIiwidGFnIiwiYXhpb3NTZXJ2aWNlIiwiZmV0Y2hSZWNlbnRQb3N0RGF0YSIsImZldGNoUG9zdERldGFpbERhdGEiLCJzbHVnIiwiZmV0Y2hDYXJ0RGF0YSIsImNhcnRJZCIsImZldGNoUHJvZHVjdElkQ2FydERhdGEiLCJwaWQiLCJhZGRDYXJ0RGF0YSIsInBvc3QiLCJyZW1vdmVDYXJ0RGF0YSIsImRlbGV0ZSIsInVwZGF0ZUNhcnREYXRhIiwicGF0Y2giLCJmZXRjaFByb2R1Y3RzRGF0YSIsInNvcnQiLCJvcmRlciIsInEiLCJjb2xvciIsInNpemUiLCJmZXRjaFNhbGVQcm9kdWN0c0RhdGEiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNEYXRhIiwiZmV0Y2hEYWxlUHJvZHVjdHNEYXRhIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YSIsImZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSIsImlucHV0IiwiZmV0Y2hXaXNobGlzdERhdGEiLCJmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSIsImFkZFdpc2hsaXN0RGF0YSIsInJlbW92ZVdpc2hsaXN0RGF0YSIsIkF4aW9zU2VydmljZSIsImF4aW9zIiwiY3JlYXRlIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRXJyb3IiLCJyZWplY3QiLCJib2R5Iiwib25BZGRQcm9kdWN0VG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5Iiwib25TdWNjZXNzIiwib25FcnJvciIsImdldFF1YW50aXR5QXZhaWxhYmxlIiwiaWQiLCJ0aGVuIiwibGVuZ3RoIiwidXVpZHY0IiwicHJvZHVjdElkIiwiY2FydFF1YW50aXR5IiwiY2F0Y2giLCJwRGF0YSIsIm9uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0Iiwib25DaGFuZ2VQcm9kdWN0Q2FydFF1YW50aXR5IiwibG9nIiwiZ2V0UHJvZHVjdHNCeVNsdWciLCJhcnIiLCJmaW5kIiwidG9Mb3dlckNhc2UiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwidG90YWwiLCJmb3JFYWNoIiwiZGlzY291bnQiLCJwcmljZSIsImNoZWNrUHJvZHVjdEluQ2FydCIsImNhcnRBcnIiLCJ1bmRlZmluZWQiLCJjaGVja1Byb2R1Y3RDYXJ0UXVhbnRpdHkiLCJwcm9kdWN0c0luQ2FydCIsImZpbHRlciIsInRvdGFsUHJvZHVjdFF1YW50aXR5SW5DYXJ0IiwicmVkdWNlIiwiY2hlY2tQcm9kdWN0SW5XaXNobGlzdCIsIndpc2hsaXN0QXJyIiwidXNlRGVib3VuY2UiLCJkZWxheSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJmb3JtYXRDdXJyZW5jeSIsImxvY2FsZXMiLCJjdXJyZW5jeSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsInBhcmFtTmFtZSIsInBhcmFtVmFsdWUiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImlucHV0Rm9ybWF0Iiwib3V0cHV0Rm9ybWF0IiwibW9tZW50IiwicmVtb3ZlRGFzaCIsIm9uQWRkUHJvZHVjdFRvV2lzaGxpc3QiLCJvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3QiLCJ3aXRoSGVhZGVyU2Nyb2xsIiwiV3JhcHBlZENvbXBvbmVudCIsImhlYWRlclJlZiIsInVzZVJlZiIsInNldFNjcm9sbCIsImlzSGVhZGVyRml4ZWQiLCJzZXRJc0hlYWRlckZpeGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsWSIsImNsYXNzTmFtZXMiLCJmaXhlZCIsImNsYXNzTmFtZSIsIlByb2R1Y3REZXRhaWxMYXlvdXQiLCJ0eXBlIiwiaGlkZVRhYiIsImltYWdlcyIsImZ1bGxEZXNjcmlwdGlvbiIsInNwZWNpZmljYXRpb25zIiwicmV2aWV3cyIsIm1lbW8iLCJQcm9kdWN0RGV0YWlsQ29udGVudCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjdXJyZW50UXVhbnRpdHkiLCJzZXRDdXJyZW50UXVhbnRpdHkiLCJhZGRUb0NhcnRMb2FkaW5nIiwic2V0QWRkVG9DYXJ0TG9hZGluZyIsImNhcnRTdGF0ZSIsInVzZVNlbGVjdG9yIiwiY2FydFJlZHVjZXIiLCJjb21wYXJlU3RhdGUiLCJjb21wYXJlUmVkdWNlciIsInByb2R1Y3RJbkNvbXBhcmUiLCJhdmFpYWJsZVF1YW50aXR5Iiwib25BZGRUb0NhcnQiLCJmZXRjaENhcnRSZXF1ZXN0IiwibWVzIiwib25BZGRUb0NvbXBhcmUiLCJyZW1vdmVGcm9tQ29tcGFyZSIsImFkZFRvQ29tcGFyZSIsInJhdGUiLCJ2YWwiLCJhY3RpdmUiLCJQcm9kdWN0RGV0YWlsSW1hZ2VzIiwic2xpZGVyMVNldHRpbmdzIiwiYXJyb3dzIiwic2xpZGVyMlNldHRpbmdzIiwic2xpZGVzVG9TaG93IiwiZm9jdXNPblNlbGVjdCIsInZlcnRpY2FsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIm5hdjEiLCJzZXROYXYxIiwibmF2MiIsInNldE5hdjIiLCJjIiwibWFwIiwiaW1nIiwiaW5kZXgiLCJUYWJQYW5lIiwiVGFicyIsIlJldmlld0l0ZW0iLCJ1c2VyIiwiYXZhdGFyIiwiY29tbWVudERhdGUiLCJyZXZpZXciLCJQcm9kdWN0RGV0YWlsVGFiIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsIndlaWdodCIsImRpbWVuc2lvbnMiLCJsb25nIiwid2lkdGgiLCJoZWlnaHQiLCJyZXF1aXJlZCIsIkZvb3RlciIsImNvbnRhaW5lckZsdWlkIiwiRm9vdGVySW5mb21hdGlvbiIsIkZvb3RlclF1aWNrTGlua3MiLCJjb2xTaXplIiwiZm9vdGVyTGlua3MiLCJ0aXRsZSIsIml0ZW1zIiwibGluayIsIkN1c3RvbUZvcm0iLCJzdGF0dXMiLCJvblZhbGlkYXRlZCIsIkVNQUlMIiwiZW1haWwiLCJfX2h0bWwiLCJGb290ZXJTdWJjcmliZUlucHV0Iiwic3Vic2NyaWJlIiwiZm9ybURhdGEiLCJIZWFkZXJGb3VyIiwiY29udGFpbmVyIiwiRnVuY3Rpb25JdGVtcyIsImhpZGVUb3RhbCIsImhpZGVXaXNobGlzdCIsIk1vYmlsZU1lbnVPcGVuZXIiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIm9uU2hvd0RyYXdlciIsIm9uQ2xvc2VEcmF3ZXIiLCJNb2JpbGVOYXZpZ2F0b3IiLCJTdWJNZW51IiwiTWVudSIsInNldEN1cnJlbnQiLCJoYW5kbGVDbGljayIsInNldFN0YXRlIiwibmF2aWdhdG9yRGF0YSIsIkhPTUUiLCJzdWJNZW51IiwiU0hPUCIsImxheW91dCIsImRldGFpbCIsIlBBR0VTIiwiQUJPVVQiLCJOYXZpZ2F0b3IiLCJTZWFyY2hGb3JtIiwiZW50ZXJCdXR0b24iLCJoaWRlU2VsZWN0IiwiT3B0aW9uIiwiU2VsZWN0IiwidXNlUm91dGVyIiwiY3VycmVudFNlYXJjaCIsInNldEN1cnJlbnRTZWFyY2giLCJjdXJyZW50Q2F0ZWdvcnkiLCJzZXRDdXJyZW50Q2F0ZWdvcnkiLCJkZWJvdW5kVmFsdWUiLCJzaG9wU3RhdGUiLCJzaG9wUmVkdWNlciIsInNlYXJjaGVkUHJvZHVjdHMiLCJvbkNoYW5nZSIsIm9uU2VsZWN0T3B0aW9uIiwib3B0aW9uIiwib25TZWFyY2giLCJvbkNob29zZUNhdGVvZ3J5IiwiZmV0Y2hTZWFyY2hlZFByb2R1Y3RSZXF1ZXN0IiwiY2F0ZWdvcmllcyIsImlucHV0VmFsdWUiLCJ0b1VwcGVyQ2FzZSIsImluZGV4T2YiLCJsb2FkaW5nIiwiTWVudVRocmVlIiwiU2Nyb2xsZWRIZWFkZXIiLCJMYXlvdXRGb3VyIiwiaGVhZGVyQ2xhc3MiLCJmb290ZXJDbGFzcyIsIkJlbmVmaXRzIiwiY29sdW1uIiwidGhyZWVDb2wiLCJyZW5kZXJDb2wiLCJ4cyIsIm1kIiwic20iLCJsZyIsImNvbCIsImJlbmVmaXRzRGF0YSIsInNsaWNlIiwiaWNvblNyYyIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwiZmx1aWQiLCJGZXRjaERhdGFIYW5kbGUiLCJlcnJvck1lc3NhZ2UiLCJlbXB0eURlc2NyaXB0aW9uIiwicmVuZGVyRGF0YSIsIkVtcHR5IiwiUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSIsIlF1YW50aXR5U2VsZWN0b3IiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsImZpcnN0VXBkYXRlIiwic2V0VmFsdWUiLCJkZWNyZWFzZVZhbHVlIiwidXNlQ2FsbGJhY2siLCJpbmNyZWFzZVZhbHVlIiwiU2VjdGlvblRpdGxlIiwiaGlkZURlY29yYXRpb24iLCJQcmV2QXJyb3ciLCJjdXJyZW50U2xpZGUiLCJzbGlkZUNvdW50IiwiYXJyb3dQcm9wcyIsIk5leHRBcnJvdyIsIlNvY2lhbEljb25zIiwic2hhcGUiLCJQb3N0IiwiY292ZXJJbWFnZSIsInB1YmxpY0RhdGUiLCJjb21tZW50cyIsInNob3J0RGVzY3JpcHRpb24iLCJQcm9kdWN0IiwiY291bnRkb3duTGFzdCIsIm1vZGFsVmlzaWJsZSIsInNldE1vZGFsVmlzaWJsZSIsImFkZFRvV2lzaGxpc3RMb2FkaW5nIiwic2V0QWRkVG9XaXNobGlzdExvYWRpbmciLCJ3aXNobGlzdFN0YXRlIiwid2lzaGxpc3RSZWR1Y2VyIiwicHJvZHVjdEluV2lzaGxpc3QiLCJzaG93TW9kYWwiLCJvbk1vZGFsQ2xvc2UiLCJvbkFkZFdpc2hsaXN0IiwiZmV0Y2hXaXNoTGlzdFJlcXVlc3QiLCJnZXRSYW5kb21BcmJpdHJhcnkiLCJNYXRoIiwicmFuZG9tIiwicmVkZXJQcm9kdWN0VHlwZSIsIkRhdGUiLCJub3ciLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInplcm9QYWQiLCJtYXJnaW5Cb3R0b20iLCJCbG9nU2xpZGUiLCJoZWFkZXJUaXRsZSIsInBvc3RDbGFzc05hbWUiLCJwb3N0VHlwZSIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Njcm9sbCIsIkNhdGVnb3JpZXNPbmUiLCJpbWFnZSIsImJhY2tncm91bmQiLCJtYWluIiwiSGVyb1NsaWRlckZvdXIiLCJjdXJyZW50U2xpZGVJbmRleCIsInNldE5leHRTbGlkZUluZGV4IiwiZmFkZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImJlZm9yZUNoYW5nZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJxdWVyeVNlbGVjdG9yIiwiYW5pbWF0aW9uSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5pbWF0aW9uTmFtZSIsImRhdGFzZXQiLCJhbmltYXRpb24iLCJhbmltYXRpb25EZWxheSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkhlcm9TbGlkZXJPbmUiLCJEb3duT25lSXRlbSIsInJldmVyc2UiLCJJbnRyb2R1Y3Rpb25Gb3VyIiwiZGF0YUEiLCJmb3VyIiwiSW50cm9kdWN0aW9uVGhyZWUiLCJJbnRyb2R1Y3Rpb25Ud28iLCJQYXJ0bmVyT25lIiwiZnJvbSIsIlByb2R1Y3RUYWIiLCJvblRhYkNoYW5nZSIsInByb2R1Y3RDbGFzc05hbWUiLCJoZWFkZXJDYXRlZ29yaWVzIiwic2hvd1RpdGxlRGVjb3JhdGlvbiIsImhlYWRlclR5cGUiLCJwcm9kdWN0Q29sIiwib25DaG9vc2VDYXRlZ29yeSIsInJlbmRlclRhYkNvbnRlbnQiLCJsZWZ0IiwiaG9tZXBhZ2U0IiwiY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnkiLCJzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSIsImZlYXR1cmVkUHJvZHVjdHMiLCJibG9nU3RhdGUiLCJibG9nUmVkdWNlciIsImFsbFBvc3RzIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzUmVxdWVzdCIsImZldGNoUG9zdHNSZXF1ZXN0IiwiYmFja2dyb3VuZENvbG9yIiwiaGVyb3NsaWRlT25lRGF0YSIsIm9uZSIsImNhdGVnb3JpZXNPbmVEYXRhIiwidHdvIiwiRkVUQ0hfUFJPRFVDVFMiLCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfUFJPRFVDVFNfRkFJTCIsIkZFVENIX1NBTEVfUFJPRFVDVFMiLCJGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUyIsIkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFMiLCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0RBTEVfUFJPRFVDVFMiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1MiLCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTCIsIkZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFMiLCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTCIsIkJMT0ciLCJGRVRDSF9QT1NUUyIsIkZFVENIX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9QT1NUU19GQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUwiLCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTCIsIkZFVENIX1JFQ0VOVF9QT1NUUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUwiLCJTSE9QX0ZJTFRFUiIsIlJFU0VUX0ZJTFRFUlMiLCJTRVRfU09SVCIsIlNFVF9TSE9XIiwiU0VUX1ZJRVciLCJTRVRfQ0FURUdPUlkiLCJTRVRfQ09MT1IiLCJTRVRfU0laRSIsIlNFVF9UQUciLCJDQVJUIiwiRkVUQ0hfQ0FSVCIsIkZFVENIX0NBUlRfU1VDQ0VTUyIsIkZFVENIX0NBUlRfRkFJTCIsIldJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1QiLCJGRVRDSF9XSVNITElTVF9TVUNDRVNTIiwiRkVUQ0hfV0lTSExJU1RfRkFJTCIsIkNPTVBBUkUiLCJBRERfVE9fQ09NUEFSRSIsIlJFTU9WRV9GUk9NX0NPTVBBUkUiLCJCTE9HX0ZJTFRFUiIsImZldGNoUG9zdHMiLCJmZXRjaFBvc3RzU3VjY2VzcyIsInBvc3RDb3VudCIsInBheWxvYWQiLCJmZXRjaFBvc3RzRmFpbCIsImJsb2dBcGlzIiwiaGVhZGVycyIsImZldGNoUmVjZW50UG9zdHMiLCJmZXRjaFJlY2VudFBvc3RzU3VjY2VzcyIsImZldGNoUmVjZW50UG9zdHNGYWlsIiwiZmV0Y2hSZWNlbnRQb3N0c1JlcXVlc3QiLCJmZXRjaFBvc3REZXRhaWwiLCJmZXRjaFBvc3REZXRhaWxTdWNjZXNzIiwiZmV0Y2hQb3N0RGV0YWlsRmFpbCIsImZldGNoUG9zdERldGFpbFJlcXVlc3QiLCJmZXRjaENhcnQiLCJmZXRjaENhcnRTdWNjZXNzIiwiZmV0Y2hDYXJ0RmFpbCIsImNhcnRBcGlzIiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoUHJvZHVjdHNTdWNjZXNzIiwicHJvZHVjdENvdW50IiwiZmV0Y2hQcm9kdWN0c0ZhaWwiLCJmZXRjaFByb2R1Y3RzUmVxdWVzdCIsInNob3BBcGlzIiwiZmV0Y2hTYWxlUHJvZHVjdHMiLCJmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaFNhbGVQcm9kdWN0c0ZhaWwiLCJmZXRjaFNhbGVQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHMiLCJmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbCIsImZldGNoQmVzdFNlbGxlclByb2R1Y3RzIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNTdWNjZXNzIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNGYWlsIiwiZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHNSZXF1ZXN0IiwiZmV0Y2hEYWxlUHJvZHVjdHMiLCJmZXRjaERhbGVQcm9kdWN0c1N1Y2Nlc3MiLCJmZXRjaERhbGVQcm9kdWN0c0ZhaWwiLCJmZXRjaERhbGVQcm9kdWN0c1JlcXVlc3QiLCJmZXRjaFByb2R1Y3REZXRhaWwiLCJmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzIiwiZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbCIsImZldGNoUHJvZHVjdERldGFpbFJlcXVlc3QiLCJmZXRjaFNlYXJjaGVkUHJvZHVjdCIsImZldGNoU2VhcmNoZWRQcm9kdWN0U3VjY2VzcyIsImZldGNoU2VhcmNoZWRQcm9kdWN0RmFpbCIsImZldGNoV2lzaExpc3QiLCJmZXRjaFdpc2hMaXN0U3VjY2VzcyIsImZldGNoV2lzaExpc3RGYWlsIiwid2lzaGxpc3RBcGlzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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QUFRLENBQUNFLHNCQUR1QjtBQUV0Q1MsU0FBTyxFQUFFO0FBQ1B6aUI7QUFETztBQUY2QixDQUFYLENBQTdCOztBQU9BLE1BQU11bEIsaUJBQWlCLEdBQUkvdkIsR0FBRCxLQUFVO0FBQ2xDd1ksTUFBSSxFQUFFOFQscURBQVEsQ0FBQ0csbUJBRG1CO0FBRWxDUSxTQUFPLEVBQUU7QUFDUGp0QjtBQURPO0FBRnlCLENBQVYsQ0FBMUI7O0FBT08sTUFBTTZrQixvQkFBb0IsR0FBRyxNQUFNO0FBQ3hDLFNBQVE3TCxRQUFELElBQWM7QUFDbkJBLFlBQVEsQ0FBQzZXLGFBQWEsRUFBZCxDQUFSO0FBQ0FHLG9FQUFBLEdBRUcvYixJQUZILENBRVN2TyxHQUFELElBQVM7QUFDYnNULGNBQVEsQ0FBQzhXLG9CQUFvQixDQUFDcHFCLEdBQUcsQ0FBQzhFLElBQUwsQ0FBckIsQ0FBUjtBQUNELEtBSkgsRUFLRzhKLEtBTEgsQ0FLVXRVLEdBQUQsSUFBUztBQUNkZ1osY0FBUSxDQUFDK1csaUJBQWlCLENBQUMvdkIsR0FBRCxDQUFsQixDQUFSO0FBQ0QsS0FQSDtBQVFELEdBVkQ7QUFXRCxDQVpNLEM7Ozs7Ozs7Ozs7O0FDdkJQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBheGlvc1NlcnZpY2UgZnJvbSBcIi4uL2NvbW1vbi9heGlvc1NlcnZpY2VcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xuXG5jb25zdCB1cmwgPSBcIi9ibG9nXCI7XG5cbmNvbnN0IHJlbmRlclVybCA9ICh1cmwsIGxpbWl0LCBjYXRlZ29yeSkgPT4ge1xuICByZXR1cm4gKFxuICAgIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJfbGltaXRcIiwgbGltaXQpICsgcmVuZGVyUGFyYW0oXCJjYXRlZ29yeVwiLCBjYXRlZ29yeSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJsb2dEYXRhID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCBlbmRwb2ludCA9XG4gICAgcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSkgK1xuICAgIHJlbmRlclBhcmFtKFwiX3BhZ2VcIiwgcXVlcnkucGFnZSkgK1xuICAgIHJlbmRlclBhcmFtKFwidGFnX2xpa2VcIiwgcXVlcnkudGFnKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUmVjZW50UG9zdERhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID1cbiAgICByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQpICtcbiAgICByZW5kZXJQYXJhbShcIl9zb3J0XCIsIFwicHVibGljRGF0ZVwiKSArXG4gICAgcmVuZGVyUGFyYW0oXCJvcmRlclwiLCBcImRlc2NcIik7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3REZXRhaWxEYXRhID0gKHNsdWcpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJzbHVnXCIsIHNsdWcpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb21tb24vZGVmaW5lc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmNvbnN0IHVybCA9IFwiL2NhcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IGNhcnRJZCA/IEFQSV9VUkwgKyB1cmwgKyBgLyR7Y2FydElkfWAgOiBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRDYXJ0RGF0YSA9IChwaWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJwcm9kdWN0SWRcIiwgcGlkKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcnREYXRhID0gKGRhdGEpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0RGF0YSA9IChjYXJ0SWQpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YDtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhcnREYXRhID0gKGNhcnRJZCwgZGF0YSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLnBhdGNoKGVuZHBvaW50LCBkYXRhKTtcbn07XG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcblxuY29uc3QgdXJsID0gXCIvcHJvZHVjdFwiO1xuXG5jb25zdCByZW5kZXJVcmwgPSAodXJsLCBsaW1pdCwgY2F0ZWdvcnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiX2xpbWl0XCIsIGxpbWl0KSArIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXG4gICk7XG59O1xuXG4vL0ZldGNoIGxpc3Qgb2YgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPVxuICAgIHJlbmRlclVybChBUElfVVJMICsgdXJsLCBxdWVyeS5saW1pdCwgcXVlcnkuY2F0ZWdvcnkpICtcbiAgICByZW5kZXJQYXJhbShcIl9wYWdlXCIsIHF1ZXJ5LnBhZ2UpICtcbiAgICByZW5kZXJQYXJhbShcIl9zb3J0XCIsIHF1ZXJ5LnNvcnQuc29ydCkgK1xuICAgIHJlbmRlclBhcmFtKFwiX29yZGVyXCIsIHF1ZXJ5LnNvcnQub3JkZXIpICtcbiAgICByZW5kZXJQYXJhbShcInFcIiwgcXVlcnkucSkgK1xuICAgIHJlbmRlclBhcmFtKFwic3BlY2lmaWNhdGlvbnMuY29sb3JcIiwgcXVlcnkuY29sb3IpICtcbiAgICByZW5kZXJQYXJhbShcInNwZWNpZmljYXRpb25zLnNpemVcIiwgcXVlcnkuc2l6ZSkgK1xuICAgIHJlbmRlclBhcmFtKFwidGFnX2xpa2VcIiwgcXVlcnkudGFnKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSByZW5kZXJVcmwoQVBJX1VSTCArIHVybCwgcXVlcnkubGltaXQsIHF1ZXJ5LmNhdGVnb3J5KTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRmVhdHVyZWRQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0c0RhdGEgPSAocXVlcnkpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gcmVuZGVyVXJsKEFQSV9VUkwgKyB1cmwsIHF1ZXJ5LmxpbWl0LCBxdWVyeS5jYXRlZ29yeSk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG5cbi8vRmV0Y2ggcHJvZHVjdCBkZXRhaWxcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxEYXRhID0gKHNsdWcpID0+IHtcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJzbHVnXCIsIHNsdWcpO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG4vL0ZldGNoIHNlcmNoZWQgcHJvZHVjdCBieSBxdWVyeVxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoZWRQcm9kdWN0RGF0YSA9IChxdWVyeSkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPVxuICAgIEFQSV9VUkwgK1xuICAgIHVybCArXG4gICAgXCI/XCIgK1xuICAgIHJlbmRlclBhcmFtKFwicVwiLCBxdWVyeS5pbnB1dCkgK1xuICAgIHJlbmRlclBhcmFtKFwiY2F0ZWdvcnlcIiwgcXVlcnkuY2F0ZWdvcnkpICtcbiAgICByZW5kZXJQYXJhbShcIl9saW1pdFwiLCBxdWVyeS5saW1pdCk7XG4gIHJldHVybiBheGlvc1NlcnZpY2UuZ2V0KGVuZHBvaW50KTtcbn07XG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XG5pbXBvcnQgeyByZW5kZXJQYXJhbSB9IGZyb20gXCIuLi9jb21tb24vdXRpbHNcIjtcblxuY29uc3QgdXJsID0gXCIvd2lzaGxpc3RcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoV2lzaGxpc3REYXRhID0gKCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEgPSAocGlkKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiaWRcIiwgcGlkKTtcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFdpc2hsaXN0RGF0YSA9IChkYXRhKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke3BpZH1gO1xuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmRlbGV0ZShlbmRwb2ludCk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jbGFzcyBBeGlvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSgpO1xuICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVTdWNjZXNzLCB0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gIH1cblxuICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG5cbiAgZ2V0KHVybCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldCh1cmwpO1xuICB9XG5cbiAgcG9zdCh1cmwsIGJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wb3N0KHVybCwgYm9keSk7XG4gIH1cblxuICBwYXRjaCh1cmwsIGJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wYXRjaCh1cmwsIGJvZHkpO1xuICB9XG5cbiAgZGVsZXRlKHVybCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlbGV0ZSh1cmwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBeGlvc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge1xuICBmZXRjaFByb2R1Y3RJZENhcnREYXRhLFxuICBhZGRDYXJ0RGF0YSxcbiAgdXBkYXRlQ2FydERhdGEsXG4gIHJlbW92ZUNhcnREYXRhLFxufSBmcm9tIFwiLi4vYXBpcy9jYXJ0XCI7XG5cbmV4cG9ydCBjb25zdCBvbkFkZFByb2R1Y3RUb0NhcnQgPSAoe1xuICBwcm9kdWN0LFxuICBxdWFudGl0eSA9IDEsXG4gIG9uU3VjY2VzcyxcbiAgb25FcnJvcixcbiAgZ2V0UXVhbnRpdHlBdmFpbGFibGUgPSAoKSA9PiB0cnVlLFxufSkgPT4ge1xuICBmZXRjaFByb2R1Y3RJZENhcnREYXRhKHByb2R1Y3QuaWQpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAocHJvZHVjdC5xdWFudGl0eSA9PT0gMCkge1xuICAgICAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihcIlJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgcHJvZHVjdHNcIik7XG4gICAgICAgICAgZ2V0UXVhbnRpdHlBdmFpbGFibGUgJiYgZ2V0UXVhbnRpdHlBdmFpbGFibGUoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENhcnREYXRhKHtcbiAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICAgIChlcnIpID0+XG4gICAgICAgICAgICAgICAgb25FcnJvciAmJlxuICAgICAgICAgICAgICAgIG9uRXJyb3IoXCJBZGQgcHJvZHVjdCB0byBjYXJ0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcERhdGEgPSByZXMuZGF0YVswXTtcbiAgICAgICAgaWYgKHBEYXRhLmNhcnRRdWFudGl0eSArIHF1YW50aXR5ID4gcERhdGEucXVhbnRpdHkpIHtcbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIHByb2R1Y3RzXCIpO1xuICAgICAgICAgIGdldFF1YW50aXR5QXZhaWxhYmxlKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVDYXJ0RGF0YShwRGF0YS5pZCwge1xuICAgICAgICAgICAgY2FydFF1YW50aXR5OiBwRGF0YS5jYXJ0UXVhbnRpdHkgKyBxdWFudGl0eSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgICAgICAgIG9uRXJyb3IgJiZcbiAgICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKFxuICAgICAgKGVycikgPT5cbiAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gY2FydCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25SZW1vdmVQcm9kdWN0RnJvbUNhcnQgPSAoeyBjYXJ0SWQsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gIGlmIChjYXJ0SWQgJiYgY2FydElkICE9PSBcIlwiICYmIGNhcnRJZCAhPT0gbnVsbCkge1xuICAgIHJlbW92ZUNhcnREYXRhKGNhcnRJZClcbiAgICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAgIC5jYXRjaChcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZW1vdmUgcHJvZHVjdCBmYWlsbSwgcGxlYXNlciB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG9uQ2hhbmdlUHJvZHVjdENhcnRRdWFudGl0eSA9ICh7XG4gIHByb2R1Y3QsXG4gIHF1YW50aXR5LFxuICBvblN1Y2Nlc3MsXG59KSA9PiB7XG4gIGlmIChxdWFudGl0eSA+IHByb2R1Y3QucXVhbnRpdHkgfHwgcXVhbnRpdHkgPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHVwZGF0ZUNhcnREYXRhKHByb2R1Y3QuaWQsIHsgY2FydFF1YW50aXR5OiBxdWFudGl0eSB9KVxuICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vb2dhbWktYXBpLmhlcm9rdWFwcC5jb21cIjtcbiIsImV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5U2x1ZyA9IChhcnIsIHNsdWcpID0+IHtcbiAgcmV0dXJuIHNsdWcgJiYgdHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCJcbiAgICA/IGFyci5maW5kKChwKSA9PiBwLnNsdWcudG9Mb3dlckNhc2UoKSA9PT0gc2x1Zy50b0xvd2VyQ2FzZSgpKVxuICAgIDogYXJyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoYXJyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGlzY291bnQpIHtcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5XG4gICAgICAgID8gKGl0ZW0ucHJpY2UgLSBpdGVtLmRpc2NvdW50KSAqIGl0ZW0uY2FydFF1YW50aXR5XG4gICAgICAgIDogaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsICs9IGl0ZW0uY2FydFF1YW50aXR5ID8gaXRlbS5wcmljZSAqIGl0ZW0uY2FydFF1YW50aXR5IDogaXRlbS5wcmljZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG90YWw7XG59O1xuXG4vL0NhcnRcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSAoY2FydEFyciwgcGlkKSA9PiB7XG4gIHJldHVybiBwaWQgPyBjYXJ0QXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBwaWQpIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eSA9IChjYXJ0QXJyLCBwaWQpID0+IHtcbiAgY29uc3QgcHJvZHVjdHNJbkNhcnQgPSBjYXJ0QXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgPT09IHBpZCk7XG4gIGlmIChwcm9kdWN0c0luQ2FydCAmJiBwcm9kdWN0c0luQ2FydC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQgPSBwcm9kdWN0c0luQ2FydC5yZWR1Y2UoXG4gICAgICAodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5jYXJ0UXVhbnRpdHksXG4gICAgICAwXG4gICAgKTtcbiAgICByZXR1cm4gdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbi8vV2lzaGxpc3RcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbldpc2hsaXN0ID0gKHdpc2hsaXN0QXJyLCBwaWQpID0+IHtcbiAgcmV0dXJuIHBpZCA/IHdpc2hsaXN0QXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBpZCkgOiB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XG4gIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcbiAgICB9LCBkZWxheSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChoYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xufVxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChwcmljZSwgbG9jYWxlcyA9IFwidXMtVVNcIiwgY3VycmVuY3kgPSBcIlVTRFwiKSA9PiB7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IGN1cnJlbmN5LFxuICB9KS5mb3JtYXQocHJpY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBhcmFtID0gKHBhcmFtTmFtZSwgcGFyYW1WYWx1ZSkgPT4ge1xuICBpZiAocGFyYW1WYWx1ZSAmJiBwYXJhbVZhbHVlICE9PSBcIlwiICYmIHBhcmFtVmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gYCYke3BhcmFtTmFtZX09JHtwYXJhbVZhbHVlfWA7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChcbiAgZGF0ZSxcbiAgaW5wdXRGb3JtYXQgPSBcIllZWVktTU0tRERcIixcbiAgb3V0cHV0Rm9ybWF0ID0gXCJNTU0gREQsIFlZWVlcIlxuKSA9PiB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSwgaW5wdXRGb3JtYXQpLmZvcm1hdChvdXRwdXRGb3JtYXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURhc2ggPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLS9nLCBcIiBcIik7XG59O1xuIiwiaW1wb3J0IHtcbiAgZmV0Y2hQcm9kdWN0SWRXaXNobGlzdERhdGEsXG4gIGFkZFdpc2hsaXN0RGF0YSxcbiAgcmVtb3ZlV2lzaGxpc3REYXRhLFxufSBmcm9tIFwiLi4vYXBpcy93aXNobGlzdFwiO1xuXG5leHBvcnQgY29uc3Qgb25BZGRQcm9kdWN0VG9XaXNobGlzdCA9ICh7IHByb2R1Y3QsIG9uU3VjY2Vzcywgb25FcnJvciB9KSA9PiB7XG4gIGZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhKHByb2R1Y3QuaWQpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhZGRXaXNobGlzdERhdGEocHJvZHVjdClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKHJlcykpXG4gICAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgKGVycikgPT5cbiAgICAgICAgICAgICAgb25FcnJvciAmJlxuICAgICAgICAgICAgICBvbkVycm9yKFwiQWRkIHByb2R1Y3QgdG8gd2lzbGlzdCBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW5cIiwgZXJyKVxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJQcm9kdWN0IGFscmVhZHkgaW4gd2lzaGxpc3RcIik7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goXG4gICAgICAoZXJyKSA9PlxuICAgICAgICBvbkVycm9yICYmXG4gICAgICAgIG9uRXJyb3IoXCJBZGQgcHJvZHVjdCB0byB3aXNsaXN0IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3QgPSAoe1xuICBwcm9kdWN0SWQsXG4gIG9uU3VjY2VzcyxcbiAgb25FcnJvcixcbn0pID0+IHtcbiAgaWYgKHByb2R1Y3RJZCAmJiBwcm9kdWN0SWQgIT09IFwiXCIgJiYgcHJvZHVjdElkICE9PSBudWxsKSB7XG4gICAgcmVtb3ZlV2lzaGxpc3REYXRhKHByb2R1Y3RJZClcbiAgICAgIC50aGVuKChyZXMpID0+IG9uU3VjY2VzcyAmJiBvblN1Y2Nlc3MocmVzKSlcbiAgICAgIC5jYXRjaChcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICBvbkVycm9yICYmIG9uRXJyb3IoXCJSZW1vdmUgcHJvZHVjdCBmYWlsLCBwbGVhc2VyIHRyeSBhZ2FpblwiLCBlcnIpXG4gICAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhlYWRlclNjcm9sbChXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBjb25zdCBoZWFkZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc0hlYWRlckZpeGVkLCBzZXRJc0hlYWRlckZpeGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChzY3JvbGwgPj0gaGVhZGVyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgIHNldElzSGVhZGVyRml4ZWQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc0hlYWRlckZpeGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCBbc2Nyb2xsXSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxuICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXIgJHtjbGFzc05hbWVzKFxuICAgICAgICAgIHsgZml4ZWQ6IGlzSGVhZGVyRml4ZWQgfSxcbiAgICAgICAgICBwcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1gfVxuICAgICAgPlxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBQcm9kdWN0RGV0YWlsSW1hZ2VzIGZyb20gXCIuL2VsZW1lbnRzL1Byb2R1Y3REZXRhaWxJbWFnZXNcIjtcbmltcG9ydCBQcm9kdWN0RGV0YWlsQ29udGVudCBmcm9tIFwiLi9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsQ29udGVudFwiO1xuaW1wb3J0IEZldGNoRGF0YUhhbmRsZSBmcm9tIFwiLi4vLi4vb3RoZXIvRmV0Y2hEYXRhSGFuZGxlXCI7XG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUHJvZHVjdERldGFpbFRhYiBmcm9tIFwiLi9lbGVtZW50cy9Qcm9kdWN0RGV0YWlsVGFiXCI7XG5cbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxMYXlvdXQoeyBkYXRhLCB0eXBlLCBoaWRlVGFiLCBzdHlsZSB9KSB7XG4gIGlmICh0eXBlID09PSBcImZsdWlkXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbFwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XG4gICAgICAgICAgPENvbCBtZD17MTB9PlxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxJbWFnZXMgdHlwZT1cImNvbHVtblwiIGltYWdlcz17ZGF0YS5pbWFnZXN9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD17MTR9PlxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxDb250ZW50IHR5cGU9XCJmbHVpZFwiIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD17MjR9PlxuICAgICAgICAgICAgeyFoaWRlVGFiICYmIChcbiAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxUYWJcbiAgICAgICAgICAgICAgICBmdWxsRGVzY3JpcHRpb249e2RhdGEuZnVsbERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIHNwZWNpZmljYXRpb25zPXtkYXRhLnNwZWNpZmljYXRpb25zfVxuICAgICAgICAgICAgICAgIHJldmlld3M9e2RhdGEucmV2aWV3c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgPFJvdyBndXR0ZXI9ezMwfT5cbiAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgIDxQcm9kdWN0RGV0YWlsSW1hZ2VzIGltYWdlcz17ZGF0YS5pbWFnZXN9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXsxMn0+XG4gICAgICAgICAgPFByb2R1Y3REZXRhaWxDb250ZW50IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezI0fT5cbiAgICAgICAgICB7IWhpZGVUYWIgJiYgKFxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxUYWJcbiAgICAgICAgICAgICAgZnVsbERlc2NyaXB0aW9uPXtkYXRhLmZ1bGxEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgc3BlY2lmaWNhdGlvbnM9e2RhdGEuc3BlY2lmaWNhdGlvbnN9XG4gICAgICAgICAgICAgIHJldmlld3M9e2RhdGEucmV2aWV3c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsTGF5b3V0KTtcbiIsImltcG9ydCB7IEJ1dHRvbiwgQ29sLCBSYXRlLCBSb3csIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgY2hlY2tQcm9kdWN0Q2FydFF1YW50aXR5LFxuICBjaGVja1Byb2R1Y3RJbldpc2hsaXN0LFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuaW1wb3J0IFF1YW50aXR5U2VsZWN0b3IgZnJvbSBcIi4uLy4uLy4uL290aGVyL1F1YW50aXR5U2VsZWN0b3JcIjtcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcbmltcG9ydCB7IG9uQWRkUHJvZHVjdFRvQ2FydCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vY2FydFNlcnZpY2VzXCI7XG5pbXBvcnQgeyBmZXRjaENhcnRSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcbmltcG9ydCB7XG4gIGFkZFRvQ29tcGFyZSxcbiAgcmVtb3ZlRnJvbUNvbXBhcmUsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxDb250ZW50KHsgZGF0YSwgdHlwZSB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2N1cnJlbnRRdWFudGl0eSwgc2V0Q3VycmVudFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbYWRkVG9DYXJ0TG9hZGluZywgc2V0QWRkVG9DYXJ0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIpO1xuICBjb25zdCBjb21wYXJlU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbXBhcmVSZWR1Y2VyKTtcbiAgY29uc3QgcHJvZHVjdEluQ29tcGFyZSA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QoY29tcGFyZVN0YXRlLCBkYXRhLmlkKTtcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9XG4gICAgZGF0YS5xdWFudGl0eSAtIGNoZWNrUHJvZHVjdENhcnRRdWFudGl0eShjYXJ0U3RhdGUuZGF0YSwgZGF0YS5pZCk7XG4gIGNvbnNvbGUubG9nKGF2YWlhYmxlUXVhbnRpdHkpO1xuICBjb25zdCBvbkFkZFRvQ2FydCA9IChwcm9kdWN0LCBxdWFudGl0eSkgPT4ge1xuICAgIGlmIChhZGRUb0NhcnRMb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFkZFRvQ2FydExvYWRpbmcodHJ1ZSk7XG4gICAgb25BZGRQcm9kdWN0VG9DYXJ0KHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICBxdWFudGl0eSxcbiAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY2FydFwiKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9uQWRkVG9Db21wYXJlID0gKHByb2R1Y3QpID0+IHtcbiAgICBpZiAocHJvZHVjdEluQ29tcGFyZSkge1xuICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUNvbXBhcmUocHJvZHVjdC5pZCkpO1xuICAgICAgbWVzc2FnZS5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIGNvbXBhcmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKGFkZFRvQ29tcGFyZShwcm9kdWN0KSk7XG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNvbXBhcmVcIik7XG4gICAgfVxuICB9O1xuICBpZiAodHlwZSA9PT0gXCJmbHVpZFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudCAtd2lkZVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IHhsPXsxNn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2xlZnRcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZVwiPntkYXRhLmNhdGVnb3J5fTwvaDU+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19uYW1lXCI+e2RhdGEubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkXG4gICAgICAgICAgICAgICAgICBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY29cbiAgICAgICAgICAgICAgICAgIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWRcbiAgICAgICAgICAgICAgICAgIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYVxuICAgICAgICAgICAgICAgICAgcXVpIG9mZmljaWEgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW1cbiAgICAgICAgICAgICAgICAgIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0sIGVhcXVlXG4gICAgICAgICAgICAgICAgICBpcHNhIHF1YWUgYWIgaWxsbyBpbnZlbnRvci5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSBxdWlhIHZvbHVwdGFzIHNpdCBhc3Blcm5hdHVyIGF1dFxuICAgICAgICAgICAgICAgICAgb2RpdCBhdXQgZnVnaXQsIHNlZCBxdWlhIGNvbnNlcXV1bnR1ciBtYWduaSBkb2xvcmVzIGVvcyBxdWlcbiAgICAgICAgICAgICAgICAgIHJhdGlvbmUgdm9sdXB0YXRlbVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19tZXRhXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U0tVOjwvc3Bhbj4gQTEzNTlcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNhdGVnb3JpZXM6PC9zcGFuPiBGYXN0Zm9vZFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+VGFnOjwvc3Bhbj4gRm9vZCwgT3JnYW5pY1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fc2hhcmVcIj5cbiAgICAgICAgICAgICAgICA8aDU+U2hhcmUgbGluazo8L2g1PlxuICAgICAgICAgICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBzbT17MjR9IHhsPXs4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZWxpdmVyeVwiPlxuICAgICAgICAgICAgICAgIEZyZWUgZGVsaXZlcnlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX3ByaWNlLWRpc2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8UmF0ZSBkZWZhdWx0VmFsdWU9e2RhdGEucmF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPFF1YW50aXR5U2VsZWN0b3JcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0Q3VycmVudFF1YW50aXR5KHZhbCl9XG4gICAgICAgICAgICAgICAgbWF4PXthdmFpYWJsZVF1YW50aXR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPXthZGRUb0NhcnRMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSwgY3VycmVudFF1YW50aXR5KX1cbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbkNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjb21wYXJlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fYmVuZWZpdHNcIj5cbiAgICAgICAgICAgICAgICA8bGk+U2F0aXNmYWN0aW9uIDEwMCUgR3VhcmFudGVlZDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkZyZWUgc2hpcHBpbmcgb24gb3JkZXJzIG92ZXIgJDk5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MTQgZGF5IGVhc3kgUmV0dXJuPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnRfX25hbWVcIj57ZGF0YS5uYW1lfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgdGVtcG9yXG4gICAgICAgIHsvKiBDaGFuZ2UgdG8ge2RhdGEuZGVzY3JpcHRpb259ICovfVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19kZWxpdmVyeVwiPkZyZWUgZGVsaXZlcnk8L2Rpdj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZVwiPlxuICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2UtZGlzY291bnRcIj5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UgLSBkYXRhLmRpc2NvdW50KVxuICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8UmF0ZSBkZWZhdWx0VmFsdWU9e2RhdGEucmF0ZX0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oMz5cbiAgICAgIDxRdWFudGl0eVNlbGVjdG9yXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRDdXJyZW50UXVhbnRpdHkodmFsKX1cbiAgICAgICAgbWF4PXthdmFpYWJsZVF1YW50aXR5fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fYWN0aW9uc1wiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgbG9hZGluZz17YWRkVG9DYXJ0TG9hZGluZ31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhLCBjdXJyZW50UXVhbnRpdHkpfVxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ29tcGFyZShkYXRhKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvIGNvbXBhcmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fc2hhcmVcIj5cbiAgICAgICAgPGg1PlNoYXJlIGxpbms6PC9oNT5cbiAgICAgICAgPFNvY2lhbEljb25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsQ29udGVudCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsSW1hZ2VzKHsgdHlwZSwgaW1hZ2VzIH0pIHtcbiAgY29uc3Qgc2xpZGVyMVNldHRpbmdzID0ge1xuICAgIGFycm93czogZmFsc2UsXG4gIH07XG4gIGNvbnN0IHNsaWRlcjJTZXR0aW5ncyA9IHtcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgIHZlcnRpY2FsOiB0eXBlID09PSBcImNvbHVtblwiID8gdHJ1ZSA6IGZhbHNlLFxuICAgIC8vIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPixcbiAgICAvLyBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgdmVydGljYWw6IHR5cGUgPT09IFwiY29sdW1uXCIgJiYgZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IFtuYXYxLCBzZXROYXYxXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuYXYyLCBzZXROYXYyXSA9IHVzZVN0YXRlKCk7XG4gIC8vIGlmICh0eXBlID09PSBcImNvbHVtblwiKSB7XG4gIC8vICAgcmV0dXJuIDxoMT5Db2x1bW48L2gxPjtcbiAgLy8gfVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtZGV0YWlsLWltYWdlcyAke2NsYXNzTmFtZXMoe1xuICAgICAgICBcIi1jb2x1bW5cIjogdHlwZSA9PT0gXCJjb2x1bW5cIixcbiAgICAgIH0pfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZXMtYmlnXCI+XG4gICAgICAgIDxTbGlkZXIgYXNOYXZGb3I9e25hdjJ9IHJlZj17KGMpID0+IHNldE5hdjEoYyl9IHsuLi5zbGlkZXIxU2V0dGluZ3N9PlxuICAgICAgICAgIHtpbWFnZXMgJiZcbiAgICAgICAgICAgIGltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpbWd9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZXMtc21hbGxcIj5cbiAgICAgICAgPFNsaWRlciBhc05hdkZvcj17bmF2MX0gcmVmPXsoYykgPT4gc2V0TmF2MihjKX0gey4uLnNsaWRlcjJTZXR0aW5nc30+XG4gICAgICAgICAge2ltYWdlcyAmJlxuICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNsaWRlLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGltZ30gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdERldGFpbEltYWdlcyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSYXRlLCBUYWJzLCBGb3JtLCBJbnB1dCwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcblxuY29uc3QgUmV2aWV3SXRlbSA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1pdGVtX19hdmF0YXJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGRhdGEudXNlci5hdmF0YXJ9XG4gICAgICAgICAgYWx0PVwiQ3VzdG9tZXIgYXZhdGFyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXs1fSBkaXNhYmxlZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1pdGVtX19jb250ZW50XCI+XG4gICAgICAgIDxoNT57ZGF0YS5jb21tZW50RGF0ZX08L2g1PlxuICAgICAgICA8aDM+e2RhdGEudXNlci5uYW1lfTwvaDM+XG4gICAgICAgIDxwPntkYXRhLnJldmlld308L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxUYWIoeyBmdWxsRGVzY3JpcHRpb24sIHNwZWNpZmljYXRpb25zLCByZXZpZXdzIH0pIHtcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCB2YWx1ZXMpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkOlwiLCBlcnJvckluZm8pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtdGFiXCI+XG4gICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIHR5cGU9XCJjYXJkXCI+XG4gICAgICAgIDxUYWJQYW5lIHRhYj1cIkRlc2NyaXB0aW9uXCIga2V5PVwiMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtdGFiX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge2Z1bGxEZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICA8VGFiUGFuZSB0YWI9XCJTcGVjaWZpY2F0aW9uc1wiIGtleT1cIjJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fc3BlY2lmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5XZWlnaHQ8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzcGVjaWZpY2F0aW9ucy53ZWlnaHR9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5EaW1lbnNpb25zPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge3NwZWNpZmljYXRpb25zLmRpbWVuc2lvbnMubG9uZ30geHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3NwZWNpZmljYXRpb25zLmRpbWVuc2lvbnMud2lkdGh9IHh7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzcGVjaWZpY2F0aW9ucy5kaW1lbnNpb25zLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+Q29sb3I8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzcGVjaWZpY2F0aW9ucy5jb2xvcn08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlNpemU8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzcGVjaWZpY2F0aW9ucy5zaXplfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgPFRhYlBhbmUgdGFiPVwiUmV2aWV3c1wiIGtleT1cIjNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3c1wiPlxuICAgICAgICAgICAge3Jldmlld3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8UmV2aWV3SXRlbSBrZXk9e2luZGV4fSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLXRhYl9fcmV2aWV3cy1mb3JtXCI+XG4gICAgICAgICAgICAgIDxoNT5BZGQgUmV2aWV3PC9oNT5cbiAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICBuYW1lPVwicmV2aWV3XCJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezE1fT5cbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIG5hbWUhXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgZW1haWwhXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJhdGVcIiBsYWJlbD1cIllvdXIgcmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFJhdGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHNoYXBlPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdCBSZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGFiUGFuZT5cbiAgICAgIDwvVGFicz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0RGV0YWlsVGFiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IGZvb3RlckxpbmtzIGZyb20gXCIuLi8uLi9kYXRhL2Zvb3Rlci1saW5rcy5qc29uXCI7XG5pbXBvcnQgRm9vdGVyUXVpY2tMaW5rcyBmcm9tIFwiLi9lbGVtZW50cy9Gb290ZXJRdWlja0xpbmtzXCI7XG5pbXBvcnQgRm9vdGVySW5mb21hdGlvbiBmcm9tIFwiLi9lbGVtZW50cy9Gb290ZXJJbmZvbWF0aW9uXCI7XG5pbXBvcnQgRm9vdGVyU3ViY3JpYmVJbnB1dCBmcm9tIFwiLi9lbGVtZW50cy9Gb290ZXJTdWJjcmliZUlucHV0XCI7XG5cbmZ1bmN0aW9uIEZvb3Rlcih7IGNvbnRhaW5lckZsdWlkLCBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9vdGVyIC1zdHlsZS1vbmUgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFJvdyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxNH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGg1PkpvaW4gT3VyIE5ld3NsZXR0ZXIgTm93PC9oNT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEdldCBFLW1haWwgdXBkYXRlcyBhYm91dCBvdXIgbGF0ZXN0IHNob3AgYW5kIHNwZWNpYWwgb2ZmZXJzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTB9PlxuICAgICAgICAgICAgICA8Rm9vdGVyU3ViY3JpYmVJbnB1dCB1cmw9XCJodHRwczovL2xlZmluLnVzMjEubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9NmY4MTkyYjYxODJiOWQ1Mzk2M2NlYTc4NiZhbXA7aWQ9MjNhNmVmZTQwYyZhbXA7Zl9pZD0wMDIzZDRlNmYwXCIgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm90dG9tX193cmFwcGVyXCI+XG4gICAgICAgICAgICA8cD5Db3B5cmlnaHQgwqkgMjAyMyBMZWZpbiBTdWl0Y2FzZSAtIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2Zvb3Rlci9sb2dvLnBuZ1wifVxuICAgICAgICAgICAgICBhbHQ9XCJQYXltZW50IG1ldGhvZHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRm9vdGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gXCIuLi8uLi9vdGhlci9Tb2NpYWxJY29uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJJbmZvbWF0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWluZm9cIj5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZvb3Rlci1pbmZvX19sb2dvXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxuICAgICAgICAgICAgYWx0PVwiT2dhbWkgTG9nb1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+QWRkcmVzczogNjAtNDkgUm9hZCAxMTM3OCBOZXcgWW9yazwvbGk+XG4gICAgICAgIDxsaT5QaG9uZTogKzY1IDExLjE4OC44ODg8L2xpPlxuICAgICAgICA8bGk+RW1haWw6IGluZm8uZGVlcmNyZWF0aXZlQGdtYWlsLmNvbTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPFNvY2lhbEljb25zIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJjaXJjbGVcIiBjbGFzc05hbWU9XCItYnRuLWxpZ2h0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IGZvb3RlckxpbmtzIGZyb20gXCIuLi8uLi8uLi9kYXRhL2Zvb3Rlci1saW5rcy5qc29uXCI7XG5cbmZ1bmN0aW9uIEZvb3RlclF1aWNrTGlua3MoeyBjb2xTaXplIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc1wiPlxuICAgICAgPFJvdyBndXR0ZXI9ezEwfSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICB7Zm9vdGVyTGlua3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDb2wga2V5PXtpbmRleH0gey4uLmNvbFNpemV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NfX2dyb3VwXCI+XG4gICAgICAgICAgICAgIDxoNT57aXRlbS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2l0ZW0uaXRlbXMubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbGluay5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YT4ge2xpbmsudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApKX1cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3RlclF1aWNrTGlua3MpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tIFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBDdXN0b21Gb3JtID0gUmVhY3QubWVtbygoeyBzdGF0dXMsIG1lc3NhZ2UsIG9uVmFsaWRhdGVkIH0pID0+IHtcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIHZhbHVlKTtcbiAgICB2YWx1ZSAmJlxuICAgICAgb25WYWxpZGF0ZWQoe1xuICAgICAgICBFTUFJTDogdmFsdWUuZW1haWwsXG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZDpcIiwgZXJyb3JJbmZvKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybVxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19mb3JtXCJcbiAgICAgID5cbiAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgIG5vU3R5bGU9e3RydWV9XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBFLW1haWwhXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF19XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgLz5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDxGb3JtLkl0ZW0gbm9TdHlsZT17dHJ1ZX0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTVUJTQ1JJQkVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8L0Zvcm0+XG4gICAgICB7c3RhdHVzID09PSBcInNlbmRpbmdcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5zZW5kaW5nLi4uPC9kaXY+fVxuICAgICAge3N0YXR1cyA9PT0gXCJlcnJvclwiICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZXNzYWdlIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJTdWJjcmliZUlucHV0KHsgdXJsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWFpbGNoaW1wU3Vic2NyaWJlXG4gICAgICB1cmw9e3VybH1cbiAgICAgIHJlbmRlcj17KHsgc3Vic2NyaWJlLCBzdGF0dXMsIG1lc3NhZ2UgfSkgPT4gKFxuICAgICAgICA8Q3VzdG9tRm9ybVxuICAgICAgICAgIHN0YXR1cz17c3RhdHVzfVxuICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgb25WYWxpZGF0ZWQ9eyhmb3JtRGF0YSkgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1lbnVUaHJlZSBmcm9tIFwiLi9tZW51L01lbnVUaHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJGb3VyKHsgY29udGFpbmVyIH0pIHtcbiAgcmV0dXJuIDxNZW51VGhyZWUgLz47XG59XG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVUb3RhbFByaWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcblxuZnVuY3Rpb24gRnVuY3Rpb25JdGVtcyh7IGhpZGVUb3RhbCwgaGlkZVdpc2hsaXN0IH0pIHtcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jdGlvbi1pdGVtc1wiPlxuICAgICAgeyFoaWRlV2lzaGxpc3QgJiYgKFxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC93aXNobGlzdFwifT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmdW5jdGlvbi1pdGVtcy1pdGVtXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2hlYXJ0X2FsdFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApfVxuXG4gICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9jYXJ0XCJ9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJmdW5jdGlvbi1pdGVtcy1pdGVtXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9iYWdfYWx0XCIgLz5cblxuICAgICAgICAgIHshaGlkZVRvdGFsICYmXG4gICAgICAgICAgICAoY2FydFN0YXRlLmRhdGEgPyAoXG4gICAgICAgICAgICAgIDxzcGFuPntmb3JtYXRDdXJyZW5jeShjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZS5kYXRhKSl9PC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KDApfTwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRnVuY3Rpb25JdGVtcyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyYXdlciB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBNb2JpbGVOYXZpZ2F0b3IgZnJvbSBcIi4vTW9iaWxlTmF2aWdhdG9yXCI7XG5cbmZ1bmN0aW9uIE1vYmlsZU1lbnVPcGVuZXIoKSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25TaG93RHJhd2VyID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IG9uQ2xvc2VEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhIG9uQ2xpY2s9e29uU2hvd0RyYXdlcn0gY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtb3BlbmVyXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIiAvPlxuICAgICAgPC9hPlxuICAgICAgPERyYXdlclxuICAgICAgICB0aXRsZT1cIkNsb3NlXCJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cbiAgICAgICAgb25DbG9zZT17b25DbG9zZURyYXdlcn1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICAgIHdpZHRoPXszMjB9XG4gICAgICA+XG4gICAgICAgIDxNb2JpbGVOYXZpZ2F0b3IgLz5cbiAgICAgIDwvRHJhd2VyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1vYmlsZU1lbnVPcGVuZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IG5hdmlnYXRvckRhdGEgZnJvbSBcIi4uLy4uLy4uL2RhdGEvbmF2aWdhdG9yLmpzb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi4vLi4vb3RoZXIvU29jaWFsSWNvbnNcIjtcblxuZnVuY3Rpb24gTW9iaWxlTmF2aWdhdG9yKCkge1xuICBjb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwibWFpbFwiKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgXCIsIGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50OiBlLmtleSB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlXCI+XG4gICAgICA8TWVudVxuICAgICAgICBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1uYXZpZ2F0b3JcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XG4gICAgICAgIG1vZGU9XCJpbmxpbmVcIlxuICAgICAgPlxuICAgICAgICA8U3ViTWVudSBrZXk9XCJob21lcGFnZVwiIHRpdGxlPXtuYXZpZ2F0b3JEYXRhLkhPTUUudGl0bGV9PlxuICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLkhPTUUuc3ViTWVudS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPFN1Yk1lbnUga2V5PVwic2hvcFwiIHRpdGxlPXtuYXZpZ2F0b3JEYXRhLlNIT1AudGl0bGV9PlxuICAgICAgICAgIDxTdWJNZW51IGtleT1cInNob3AgbGF5b3V0XCIgdGl0bGU9XCJMYXlvdXQgc2hvcFwiPlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmxheW91dC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgIDxTdWJNZW51IGtleT1cInNob3AgZGV0YWlsXCIgdGl0bGU9XCJEZXRhaWwgc2hvcFwiPlxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmRldGFpbC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgIDxTdWJNZW51IGtleT1cInNob3AgcGFnZXNcIiB0aXRsZT1cIlBhZ2VzIHNob3BcIj5cbiAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlNIT1Auc3ViTWVudS5wYWdlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGE+IHtpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDxTdWJNZW51IGtleT1cInBhZ2VzXCIgdGl0bGU9e25hdmlnYXRvckRhdGEuUEFHRVMudGl0bGV9PlxuICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlBBR0VTLnN1Yk1lbnUubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxhPiB7aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiYWxpcGF5XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuQUJPVVQuaHJlZn0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hbnQuZGVzaWduXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLkFCT1VULnRpdGxlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLWZ1bmN0aW9uc1wiPlxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvbG9naW5cIn0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtZnVuY3Rpb25zX19sb2dpblwiPkxvZ2luIC8gUmVnaXN0ZXI8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFNvY2lhbEljb25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhNb2JpbGVOYXZpZ2F0b3IpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IG5hdmlnYXRvckRhdGEgZnJvbSBcIi4uLy4uLy4uL2RhdGEvbmF2aWdhdG9yLmpzb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gTmF2aWdhdG9yKCkge1xuICBjb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwibWFpbFwiKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgXCIsIGUpO1xuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkFCT1VULmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5BQk9VVC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkFCT1VULmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5BQk9VVC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkFCT1VULmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5BQk9VVC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkFCT1VULmhyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5BQk9VVC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhOYXZpZ2F0b3IpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWxlY3QsIEF1dG9Db21wbGV0ZSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4uLy4uLy4uL2RhdGEvY2F0ZWdvcmllcy5qc29uXCI7XG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91c2VEZWJvdW5kXCI7XG5pbXBvcnQgeyBmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBTZWFyY2hGb3JtKHsgZW50ZXJCdXR0b24gPSBcIlNlYXJjaFwiLCBoaWRlU2VsZWN0IH0pIHtcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2N1cnJlbnRTZWFyY2gsIHNldEN1cnJlbnRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50Q2F0ZWdvcnksIHNldEN1cnJlbnRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZGVib3VuZFZhbHVlID0gdXNlRGVib3VuY2UoY3VycmVudFNlYXJjaCwgMzAwKTtcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XG4gIGNvbnN0IHsgc2VhcmNoZWRQcm9kdWN0cyB9ID0gc2hvcFN0YXRlO1xuICBjb25zdCBvbkNoYW5nZSA9ICh2YWwpID0+IHtcbiAgICBzZXRDdXJyZW50U2VhcmNoKHZhbCk7XG4gIH07XG4gIGNvbnN0IG9uU2VsZWN0T3B0aW9uID0gKHZhbHVlLCBvcHRpb24pID0+IHtcbiAgICBzZXRDdXJyZW50U2VhcmNoKHZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgb25TZWFyY2ggPSAodmFsKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50U2VhcmNoIHx8IGN1cnJlbnRTZWFyY2ggPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwiLFxuICAgICAgICBxdWVyeTogeyBxOiBjdXJyZW50U2VhcmNoIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uQ2hvb3NlQ2F0ZW9ncnkgPSAodmFsKSA9PiB7XG4gICAgc2V0Q3VycmVudENhdGVnb3J5KHZhbCk7XG4gIH07XG4gIGNvbnN0IG9wdGlvbnMgPVxuICAgIHNlYXJjaGVkUHJvZHVjdHMuZGF0YS5sZW5ndGggPiAwICYmXG4gICAgc2VhcmNoZWRQcm9kdWN0cy5kYXRhLm1hcCgoaXRlbSkgPT4gKHsgdmFsdWU6IGl0ZW0ubmFtZSB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGZldGNoU2VhcmNoZWRQcm9kdWN0UmVxdWVzdCh7XG4gICAgICAgIGlucHV0OiBjdXJyZW50U2VhcmNoLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIGNhdGVnb3J5OiBjdXJyZW50Q2F0ZWdvcnksXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtkZWJvdW5kVmFsdWUsIGN1cnJlbnRDYXRlZ29yeV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0td3JhcHBlclwiPlxuICAgICAgICB7IWhpZGVTZWxlY3QgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0tc2VsZWN0XCI+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y3VycmVudENhdGVnb3J5fVxuICAgICAgICAgICAgICBzdWZmaXhJY29uPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtYW5nbGUtZG93blwiIC8+fVxuICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNob29zZUNhdGVvZ3J5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+QWxsIGNhdGVnb3JpZXM8L09wdGlvbj5cbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0udmFsdWV9PlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtLWlucHV0XCI+XG4gICAgICAgICAgPEF1dG9Db21wbGV0ZVxuICAgICAgICAgICAgYmFja2ZpbGxcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50U2VhcmNofVxuICAgICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0T3B0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0VmFsdWUsIG9wdGlvbikgPT5cbiAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCkpICE9PVxuICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSBuZWVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgZW50ZXJCdXR0b249e2VudGVyQnV0dG9ufVxuICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XG4gICAgICAgICAgICAgIGxvYWRpbmc9e3NlYXJjaGVkUHJvZHVjdHMubG9hZGluZ31cbiAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWFyY2hGb3JtKTtcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgRnVuY3Rpb25JdGVtcyBmcm9tIFwiLi4vZWxlbWVudHMvRnVuY3Rpb25JdGVtc1wiO1xuaW1wb3J0IE1vYmlsZU1lbnVPcGVuZXIgZnJvbSBcIi4uL2VsZW1lbnRzL01vYmlsZU1lbnVPcGVuZXJcIjtcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4uL2VsZW1lbnRzL05hdmlnYXRvclwiO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSBcIi4uL2VsZW1lbnRzL1NlYXJjaEZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudVRocmVlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSAtc3R5bGUtdGhyZWVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgPE1vYmlsZU1lbnVPcGVuZXIgLz5cbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1sb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28td2hpdGUucG5nXCJ9XG4gICAgICAgICAgICAgICAgYWx0PVwiT2dhbWkgbG9nb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxOYXZpZ2F0b3IgLz5cbiAgICAgICAgICA8U2VhcmNoRm9ybSBoaWRlU2VsZWN0IGVudGVyQnV0dG9uPXs8aSBjbGFzc05hbWU9XCJpY29uX3NlYXJjaFwiIC8+fSAvPlxuICAgICAgICAgIDxGdW5jdGlvbkl0ZW1zIGhpZGVXaXNobGlzdCBoaWRlVG90YWwgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEJhY2tUb3AgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgSGVhZGVyRm91ciBmcm9tIFwiLi4vaGVhZGVyL0hlYWRlckZvdXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCB3aXRoSGVhZGVyU2Nyb2xsIGZyb20gXCIuLi8uLi9jb21tb24vd2l0aEhlYWRlclNjcm9sbFwiO1xuXG5jb25zdCBTY3JvbGxlZEhlYWRlciA9IHdpdGhIZWFkZXJTY3JvbGwoSGVhZGVyRm91cik7XG5cbmZ1bmN0aW9uIExheW91dEZvdXIoeyB0aXRsZSwgaGVhZGVyQ2xhc3MsIGZvb3RlckNsYXNzLCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7Lyo8U2Nyb2xsZWRIZWFkZXIgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc30gLz4gKi99XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8Rm9vdGVyIGNsYXNzTmFtZT17Zm9vdGVyQ2xhc3N9IC8+XG4gICAgICA8QmFja1RvcCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKExheW91dEZvdXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IGJlbmVmaXRzRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9iZW5lZml0cy5qc29uXCI7XG5cbmZ1bmN0aW9uIEJlbmVmaXRzKHsgY29udGFpbmVyRmx1aWQsIGNvbHVtbiwgdGhyZWVDb2wsIHN0eWxlLCBjbGFzc05hbWUgfSkge1xuICBjb25zdCByZW5kZXJDb2wgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRocmVlQ29sXG4gICAgICA/IHsgeHM6IDI0LCBtZDogOCB9XG4gICAgICA6IGNvbHVtblxuICAgICAgPyB7IHhzOiAyNCwgc206IDEyLCBtZDogNiwgbGc6IDI0IH1cbiAgICAgIDogeyB4czogMjQsIG1kOiA2IH07XG4gIH07XG4gIGNvbnN0IGNvbCA9IHJlbmRlckNvbCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGJlbmVmaXRzICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUsIHsgXCItY29sdW1uXCI6IGNvbHVtbiB9KX1gfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVuZWZpdHMtd3JhcHBlclwiPlxuICAgICAgICA8Um93IGd1dHRlcj17MTB9PlxuICAgICAgICAgIHtiZW5lZml0c0RhdGFcbiAgICAgICAgICAgIC5zbGljZSgwLCB0aHJlZUNvbCA/IDMgOiBiZW5lZml0c0RhdGEubGVuZ3RoKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSB7Li4ucmVuZGVyQ29sKCl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVuZWZpdHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtX19pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaWNvblNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmVuZWZpdCBpY29uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiYmVuZWZpdHMtaXRlbV9fdGl0bGVcIj57aXRlbS5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiZW5lZml0cy1pdGVtX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCZW5lZml0cyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGZsdWlkLCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2ZsdWlkID8gXCJjb250YWluZXItZmx1aWRcIiA6IFwiY29udGFpbmVyXCJ9PntjaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNrZWxldG9uLCBFbXB0eSB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZldGNoRGF0YUhhbmRsZSh7XG4gIGRhdGEsXG4gIGVycm9yTWVzc2FnZSA9IFwiR2V0IHByb2R1Y3RzIGZhaWwsIHBsZWFzZSB0cnkgYWdhaW5cIixcbiAgZW1wdHlEZXNjcmlwdGlvbiA9IFwiTm8gcHJvZHVjdCBpbiB0aGlzIGNhdGVnb3J5XCIsXG4gIHJlbmRlckRhdGEsXG59KSB7XG4gIHJldHVybiBkYXRhLmxvYWRpbmcgPyAoXG4gICAgPFNrZWxldG9uIGFjdGl2ZSAvPlxuICApIDogZGF0YS5lcnJvciA/IChcbiAgICA8aDM+e2Vycm9yTWVzc2FnZX08L2gzPlxuICApIDogZGF0YS5kYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgcmVuZGVyRGF0YSAmJiByZW5kZXJEYXRhKGRhdGEuZGF0YSlcbiAgKSA6IChcbiAgICA8RW1wdHlcbiAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxuICAgICAgZGVzY3JpcHRpb249e2VtcHR5RGVzY3JpcHRpb259XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gXCIuLi8uLi9jb21tb24vdXNlRGVib3VuZFwiO1xuXG5mdW5jdGlvbiBRdWFudGl0eVNlbGVjdG9yKHtcbiAgbWluLFxuICBtYXgsXG4gIGRlZmF1bHRWYWx1ZSA9IDEsXG4gIGNsYXNzTmFtZSxcbiAgb25DaGFuZ2UsXG4gIG9uRGVjcmVhc2UsXG4gIG9uSW5jcmVhc2UsXG59KSB7XG4gIGNvbnN0IGZpcnN0VXBkYXRlID0gdXNlUmVmKHRydWUpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gIGNvbnN0IGRlYm91bmRWYWx1ZSA9IHVzZURlYm91bmNlKHZhbHVlLCAzMDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaXJzdFVwZGF0ZS5jdXJyZW50KSB7XG4gICAgICBmaXJzdFVwZGF0ZS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlKTtcbiAgfSwgW2RlYm91bmRWYWx1ZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFZhbHVlKGRlZmF1bHRWYWx1ZSk7XG4gIH0sIFtkZWZhdWx0VmFsdWVdKTtcbiAgY29uc3QgZGVjcmVhc2VWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobWluICYmIHZhbHVlIDw9IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgPD0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvbkRlY3JlYXNlICYmIG9uRGVjcmVhc2UoKTtcbiAgICAgIHNldFZhbHVlKHZhbHVlIC0gMSk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcbiAgY29uc3QgaW5jcmVhc2VWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodmFsdWUgPj0gbWF4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uSW5jcmVhc2UgJiYgb25JbmNyZWFzZSgpO1xuICAgIHNldFZhbHVlKHZhbHVlICsgMSk7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcXVhbnRpdHktc2VsZWN0b3IgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5LXNlbGVjdG9yLW51bWJlclwiPnt2YWx1ZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItY29udHJvbGxlclwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cImxpbmtcIlxuICAgICAgICAgIGRpc2FibGVkPXt2YWx1ZSA8PSBtaW4gfHwgdmFsdWUgPD0gMX1cbiAgICAgICAgICBvbkNsaWNrPXtkZWNyZWFzZVZhbHVlfVxuICAgICAgICA+XG4gICAgICAgICAgLVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIGRpc2FibGVkPXt2YWx1ZSA+PSBtYXh9IG9uQ2xpY2s9e2luY3JlYXNlVmFsdWV9PlxuICAgICAgICAgICtcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhRdWFudGl0eVNlbGVjdG9yKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmZ1bmN0aW9uIFNlY3Rpb25UaXRsZSh7IHRpdGxlLCBoaWRlRGVjb3JhdGlvbiwgY2xhc3NOYW1lLCBzdHlsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uLXRpdGxlICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICB7IWhpZGVEZWNvcmF0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZS1kZWNvcmF0aW9uXCIgLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VjdGlvblRpdGxlKTtcbiIsImV4cG9ydCBjb25zdCBQcmV2QXJyb3cgPSAoeyBjdXJyZW50U2xpZGUsIHNsaWRlQ291bnQsIC4uLmFycm93UHJvcHMgfSkgPT4gKFxuICA8YSB7Li4uYXJyb3dQcm9wc30gaHJlZj1cIiNcIj5cbiAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgPC9hPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5leHRBcnJvdyA9ICh7IGN1cnJlbnRTbGlkZSwgc2xpZGVDb3VudCwgLi4uYXJyb3dQcm9wcyB9KSA9PiAoXG4gIDxhIHsuLi5hcnJvd1Byb3BzfSBocmVmPVwiI1wiPlxuICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1hbmdsZS1yaWdodFwiPjwvaT5cbiAgPC9hPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2NpYWxJY29ucyh7IGNsYXNzTmFtZSwgdHlwZSA9IFwibGlua1wiLCBzaGFwZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17YHNvY2lhbC1pY29ucyAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPXt0eXBlfSBzaGFwZT17c2hhcGV9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWludmlzaW9uXCI+PC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxCdXR0b24gdHlwZT17dHlwZX0gc2hhcGU9e3NoYXBlfSBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1waW50ZXJlc3QtcFwiPjwvaT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBJbWFnZSB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCB7IGZvcm1hdERhdGUsIHJlbW92ZURhc2ggfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIFBvc3QoeyB0eXBlLCBjbGFzc05hbWUsIHN0eWxlLCBkYXRhIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcImlubGluZVwiOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3N0LWlubGluZSAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW5saW5lLWltYWdlXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBkYXRhLmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD1cIlBvc3QgaW1hZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW5saW5lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbmxpbmUtY29udGVudF9fbWV0YVwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWwgZmEtY2FsZW5kYXJcIiAvPlxuICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGRhdGEucHVibGljRGF0ZSl9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFsIGZhLWNvbW1lbnRzXCIgLz5cbiAgICAgICAgICAgICAgICB7ZGF0YS5jb21tZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvYmxvZy9wb3N0L1tzbHVnXWB9XG4gICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9ibG9nL3Bvc3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPntkYXRhLnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIGNhc2UgXCJyb3dcIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zdCAtc3R5bGUtb25lICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbWFnZVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvYmxvZy9wb3N0L1tzbHVnXWB9XG4gICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9ibG9nL3Bvc3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGRhdGEuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBvc3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJwb3N0LWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIHtyZW1vdmVEYXNoKGRhdGEuY2F0ZWdvcnkpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9ibG9nL3Bvc3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL2Jsb2cvcG9zdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e2RhdGEudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWluZm9cIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3JlZGl0IGRhdGVcIj57Zm9ybWF0RGF0ZShkYXRhLnB1YmxpY0RhdGUpfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3JlZGl0IGNvbW1lbnRcIj57ZGF0YS5jb21tZW50cy5sZW5ndGh9IENvbW1lbnQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtZGVzY3JpcHRpb25cIj57ZGF0YS5zaG9ydERlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL2Jsb2cvcG9zdC9bc2x1Z11gfVxuICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvYmxvZy9wb3N0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBvc3QtcmVhZG1vcmVcIj5cbiAgICAgICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFycm93X2NhcnJvdC0ycmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgY2FzZSBcImNvbHVtbi1mdWxsXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3QgLXN0eWxlLXRocmVlICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbWFnZVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvYmxvZy9wb3N0L1tzbHVnXWB9XG4gICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9ibG9nL3Bvc3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBkYXRhLmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQb3N0IGltYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW5mb1wiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjcmVkaXQgZGF0ZVwiPntmb3JtYXREYXRlKGRhdGEucHVibGljRGF0ZSl9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjcmVkaXQgY29tbWVudFwiPntkYXRhLmNvbW1lbnRzLmxlbmd0aH0gQ29tbWVudDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1kZXNjcmlwdGlvblwiPntkYXRhLnNob3J0RGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9zdC1yZWFkbW9yZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhcnJvd19jYXJyb3QtMnJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgY2FzZSBcInRpbnlcIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zdC10aW55ICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10aW55LWltYWdlXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9ibG9nL3Bvc3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL2Jsb2cvcG9zdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGRhdGEuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBvc3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXRpbnktY29udGVudFwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvYmxvZy9wb3N0L1tzbHVnXWB9XG4gICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9ibG9nL3Bvc3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9zdC10aW55LXRpdGxlXCI+e2RhdGEudGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC10aW55LWRhdGVcIj57Zm9ybWF0RGF0ZShkYXRhLnB1YmxpY0RhdGUpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3QgLXN0eWxlLXR3byAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW1hZ2VcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL2Jsb2cvcG9zdC9bc2x1Z11gfVxuICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvYmxvZy9wb3N0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBkYXRhLmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQb3N0IGltYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwicG9zdC1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICB7cmVtb3ZlRGFzaChkYXRhLmNhdGVnb3J5KX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvYmxvZy9wb3N0L1tzbHVnXWB9XG4gICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9ibG9nL3Bvc3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPntkYXRhLnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbmZvXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNyZWRpdCBkYXRlXCI+e2Zvcm1hdERhdGUoZGF0YS5wdWJsaWNEYXRlKX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNyZWRpdCBjb21tZW50XCI+e2RhdGEuY29tbWVudHMubGVuZ3RofSBDb21tZW50PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFBvc3QpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEJ1dHRvbiwgbWVzc2FnZSwgUmF0ZSwgVG9vbHRpcCwgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENvdW50ZG93biwgeyB6ZXJvUGFkIH0gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XG5pbXBvcnQgeyBmZXRjaFdpc2hMaXN0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9uc1wiO1xuaW1wb3J0IHtcbiAgYWRkVG9Db21wYXJlLFxuICByZW1vdmVGcm9tQ29tcGFyZSxcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY29tcGFyZUFjdGlvbnNcIjtcbmltcG9ydCB7IG9uQWRkUHJvZHVjdFRvQ2FydCB9IGZyb20gXCIuLi8uLi9jb21tb24vY2FydFNlcnZpY2VzXCI7XG5pbXBvcnQge1xuICBvbkFkZFByb2R1Y3RUb1dpc2hsaXN0LFxuICBvblJlbW92ZVByb2R1Y3RGcm9tV2lzaGxpc3QsXG59IGZyb20gXCIuLi8uLi9jb21tb24vd2lzaGxpc3RTZXJ2aWNlc1wiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxMYXlvdXQgZnJvbSBcIi4uL2RldGFpbC9wcm9kdWN0L1Byb2R1Y3REZXRhaWxMYXlvdXRcIjtcblxuZnVuY3Rpb24gUHJvZHVjdCh7IGRhdGEsIGNsYXNzTmFtZSwgdHlwZSwgY291bnRkb3duTGFzdCA9IDEwMDAwMDAwMCB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FkZFRvQ2FydExvYWRpbmcsIHNldEFkZFRvQ2FydExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWRkVG9XaXNobGlzdExvYWRpbmcsIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XG4gIGNvbnN0IHdpc2hsaXN0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndpc2hsaXN0UmVkdWNlcik7XG4gIGNvbnN0IGNvbXBhcmVTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tcGFyZVJlZHVjZXIpO1xuICBjb25zdCBwcm9kdWN0SW5XaXNobGlzdCA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3Qod2lzaGxpc3RTdGF0ZS5kYXRhLCBkYXRhLmlkKTtcbiAgY29uc3QgcHJvZHVjdEluQ29tcGFyZSA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3QoY29tcGFyZVN0YXRlLCBkYXRhLmlkKTtcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsVmlzaWJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25Nb2RhbENsb3NlID0gKGUpID0+IHtcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICB9O1xuICBjb25zdCBvbkFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKGFkZFRvQ2FydExvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QWRkVG9DYXJ0TG9hZGluZyh0cnVlKTtcbiAgICBvbkFkZFByb2R1Y3RUb0NhcnQoe1xuICAgICAgcHJvZHVjdCxcbiAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlByb2R1Y3QgYWRkZWQgdG8gY2FydFwiKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcbiAgICAgICAgc2V0QWRkVG9DYXJ0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9uQWRkV2lzaGxpc3QgPSAocHJvZHVjdCkgPT4ge1xuICAgIGlmIChhZGRUb1dpc2hsaXN0TG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyh0cnVlKTtcbiAgICBpZiAoIXByb2R1Y3RJbldpc2hsaXN0KSB7XG4gICAgICBvbkFkZFByb2R1Y3RUb1dpc2hsaXN0KHtcbiAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldEFkZFRvV2lzaGxpc3RMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIHdpc2hsaXN0XCIpO1xuICAgICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RSZXF1ZXN0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiAobWVzLCBlcnIpID0+IHtcbiAgICAgICAgICBzZXRBZGRUb1dpc2hsaXN0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihtZXMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25SZW1vdmVQcm9kdWN0RnJvbVdpc2hsaXN0KHtcbiAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSB3aXNobGlzdFwiKTtcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0UmVxdWVzdCgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogKG1lcywgZXJyKSA9PiB7XG4gICAgICAgICAgc2V0QWRkVG9XaXNobGlzdExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IobWVzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkFkZFRvQ29tcGFyZSA9IChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKHByb2R1Y3RJbkNvbXBhcmUpIHtcbiAgICAgIGRpc3BhdGNoKHJlbW92ZUZyb21Db21wYXJlKHByb2R1Y3QuaWQpKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjb21wYXJlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChhZGRUb0NvbXBhcmUocHJvZHVjdCkpO1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjb21wYXJlXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0UmFuZG9tQXJiaXRyYXJ5ID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgfTtcbiAgY29uc3QgcmVkZXJQcm9kdWN0VHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwidGlueVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC10aW55ICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktaW1nXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtdGlueS1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktbmFtZVwiIHRpdGxlPVwiUHVyZSBQaW5lYXBwbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpbnktcHJpY2VcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiZGFsZVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC1kYWxlICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtaW1nXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxDb3VudGRvd25cbiAgICAgICAgICAgICAgZGF0ZT17RGF0ZS5ub3coKSArIGdldFJhbmRvbUFyYml0cmFyeSgxMDAwMDAwMDAsIDE1MDAwMDAwMCl9XG4gICAgICAgICAgICAgIHJlbmRlcmVyPXsoeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLWNvdW50ZG93blwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGFsZS1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57emVyb1BhZChkYXlzKX08L2g2PiA8c3Bhbj5kYXlzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoaG91cnMpfTwvaDY+IDxzcGFuPmhyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQobWludXRlcyl9IDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bWluPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY291bnRkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoc2Vjb25kcyl9PC9oNj4gPHNwYW4+c2VjPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLW5hbWVcIiB0aXRsZT1cIlB1cmUgUGluZWFwcGxlXCI+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kYWxlLXByaWNlXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnRcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfVxuICAgICAgICAgICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIDxkZWw+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UpfTwvZGVsPn1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRhbGUtc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIHdpc2hsaXN0XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRXaXNobGlzdChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluV2lzaGxpc3QsXG4gICAgICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9XaXNobGlzdExvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBZGQgdG8gY2FydFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1idG5cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0TG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ091dGxpbmVkIHNwaW4gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtc2hvcHBpbmctYmFnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBZGQgdG8gY29tcGFyZVwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9Db21wYXJlKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1idG4gJHtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXJhbmRvbVwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJRdWljayB2aWV3XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1idG5cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtZXllXCIgLz59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwibGlzdFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxuICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSB0aXRsZT17ZGF0YS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmNvdmVySW1hZ2V9IGFsdD1cIlByb2R1Y3QgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17c2hvd01vZGFsfT5cbiAgICAgICAgICAgICAgICBRdWljayB2aWV3XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCIgdGl0bGU9XCJQdXJlIFBpbmVhcHBsZVwiPlxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPFJhdGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LXJhdGVcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgbmlhbVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIHtkYXRhLnF1YW50aXR5ID4gMCA/IChcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC1hdmFpbGFiaWxpdHkgLWluc3RvY2tcIj5cbiAgICAgICAgICAgICAgICAgIEF2YWlsYWJpbGl0eTogPHNwYW4+IHtkYXRhLnF1YW50aXR5fSBpbiBzdG9jazwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LWF2YWlsYWJpbGl0eSAtb3V0c3RvY2tcIj5cbiAgICAgICAgICAgICAgICAgIEF2YWlsYWJpbGl0eTogPHNwYW4+IE91dCBzdG9jazwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fZGVsaXZlcnlcIj5cbiAgICAgICAgICAgICAgICBGcmVlIGRlbGl2ZXJ5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fcHJpY2VcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudCAmJiA8ZGVsPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX08L2RlbD59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50X19wcmljZS1kaXNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlKX1cbiAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudF9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGRhdGEpfVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz17YWRkVG9DYXJ0TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NvbXBhcmUoZGF0YSl9XG4gICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluQ29tcGFyZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byBjb21wYXJlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdCAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWdcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtkYXRhLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY292ZXJJbWFnZX0gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGVcIj57ZGF0YS5jYXRlZ29yeX08L2g1PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL3Byb2R1Y3QvW3NsdWddYH1cbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCIgdGl0bGU9XCJQdXJlIFBpbmVhcHBsZVwiPlxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudClcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgPGRlbD57Zm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSl9PC9kZWw+fVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIHdpc2hsaXN0XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRXaXNobGlzdChkYXRhKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYnRuICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEluV2lzaGxpc3QsXG4gICAgICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9XaXNobGlzdExvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBZGQgdG8gY2FydFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9DYXJ0KGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1idG5cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0TG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ091dGxpbmVkIHNwaW4gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtc2hvcHBpbmctYmFnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBZGQgdG8gY29tcGFyZVwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9Db21wYXJlKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1idG4gJHtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5Db21wYXJlLFxuICAgICAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXJhbmRvbVwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJRdWljayB2aWV3XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1idG5cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJmYXIgZmEtZXllXCIgLz59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVkZXJQcm9kdWN0VHlwZSh0eXBlKX1cbiAgICAgIDxNb2RhbFxuICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XG4gICAgICAgIG9uQ2FuY2VsPXtvbk1vZGFsQ2xvc2V9XG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgaGVhZGVyPXtudWxsfVxuICAgICAgICB3aWR0aD17ODYwfVxuICAgICAgPlxuICAgICAgICA8UHJvZHVjdERldGFpbExheW91dCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0gaGlkZVRhYiBkYXRhPXtkYXRhfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9kdWN0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNrZWxldG9uLCBFbXB0eSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcblxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vLi4vb3RoZXIvU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vcG9zdC9Qb3N0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dTbGlkZSh7XG4gIGhlYWRlclRpdGxlLFxuICBoZWFkZXJDbGFzcyxcbiAgcG9zdENsYXNzTmFtZSxcbiAgcG9zdFR5cGUsXG4gIGRhdGEsXG4gIGNsYXNzTmFtZSxcbn0pIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJsb2ctc2xpZGUgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9YH0+XG4gICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPXtoZWFkZXJUaXRsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGhlYWRlckNsYXNzKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1zbGlkZS1jb250ZW50XCI+XG4gICAgICAgIHtkYXRhLmxvYWRpbmcgPyAoXG4gICAgICAgICAgPFNrZWxldG9uIGFjdGl2ZSAvPlxuICAgICAgICApIDogZGF0YS5lcnJvciA/IChcbiAgICAgICAgICA8aDM+R2V0IHByb2R1Y3RzIGZhaWwsIHBsZWFzZSB0cnkgYWdhaW48L2gzPlxuICAgICAgICApIDogZGF0YS5kYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAge2RhdGEuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2xpZGUtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxQb3N0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMocG9zdENsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgICB0eXBlPXtwb3N0VHlwZX1cbiAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RW1wdHlcbiAgICAgICAgICAgIGltYWdlPXtFbXB0eS5QUkVTRU5URURfSU1BR0VfU0lNUExFfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJObyBwcm9kdWN0IGluIHRoaXMgY2F0ZWdvcnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgQ29sLCBSb3csIEVtcHR5IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gQ2F0ZWdvcmllc09uZSh7IGRhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllcy1vbmVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbeyBzbTogMCwgbWQ6IDE1IH1dfT5cbiAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSB4cz17MjR9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcmllcy1vbmUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllcy1vbmUtaXRlbV9faW1hZ2UgdXAtZG93bi1hbmltLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uaW1hZ2UuYmFja2dyb3VuZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5pbWFnZS5tYWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2F0ZWdvcnkgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ucXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxFbXB0eSBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENhdGVnb3JpZXNPbmUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBOZXh0QXJyb3csIFByZXZBcnJvdyB9IGZyb20gXCIuLi8uLi9vdGhlci9TbGlkZXJBcnJvd1wiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5cbmZ1bmN0aW9uIEhlcm9TbGlkZXJGb3VyKHsgZGF0YSB9KSB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGVJbmRleCwgc2V0TmV4dFNsaWRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGZhZGU6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+LFxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcbiAgfTtcbiAgY29uc3QgYmVmb3JlQ2hhbmdlID0gKG9sZEluZGV4LCBuZXdJbmRleCkgPT4ge1xuICAgIHNldE5leHRTbGlkZUluZGV4KG5ld0luZGV4KTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5oZXJvLXNsaWRlci4tc3R5bGUtZm91ciAuc2xpY2stc2xpZGVbZGF0YS1pbmRleD1cIiR7Y3VycmVudFNsaWRlSW5kZXh9XCJdYFxuICAgICk7XG4gICAgY29uc3QgYW5pbWF0aW9uSXRlbXMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFuaW1hdGlvbl1cIik7XG4gICAgYW5pbWF0aW9uSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPSBpdGVtLmRhdGFzZXQuYW5pbWF0aW9uO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBpdGVtLmRhdGFzZXQuZGVsYXk7XG4gICAgICBjb25zb2xlLmxvZyhhbmltYXRpb25OYW1lKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIGFuaW1hdGlvbk5hbWUpO1xuICAgICAgaXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9IGFuaW1hdGlvbkRlbGF5ICsgXCJzXCI7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19hbmltYXRlZFwiLCBhbmltYXRpb25OYW1lKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtjdXJyZW50U2xpZGVJbmRleF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXIgLWNhcm91c2VsIC1zdHlsZS1mb3VyIC1jb2ZmZWVcIj5cbiAgICAgIDxTbGlkZXJcbiAgICAgICAgYmVmb3JlQ2hhbmdlPXtiZWZvcmVDaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT1cImFycm93LWNlbnRlclwiXG4gICAgICAgIHsuLi5zZXR0aW5nc31cbiAgICAgID5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2xpY2stc2xpZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgIGFsdD1cIkhlcm8gc2xpZGVyIGJhY2tncm91bmQgaW1hZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJblVwXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwic2xpZGVyIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9XCIwLjNcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJblVwXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3Avc2hvcC0zLWNvbHVtblwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9zaG9wLTMtY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBub3dcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEhlcm9TbGlkZXJGb3VyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IE5leHRBcnJvdywgUHJldkFycm93IH0gZnJvbSBcIi4uLy4uL290aGVyL1NsaWRlckFycm93XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gSGVyb1NsaWRlck9uZSh7IGRhdGEgfSkge1xuICBjb25zdCBbY3VycmVudFNsaWRlSW5kZXgsIHNldE5leHRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBmYWRlOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPixcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXG4gIH07XG4gIGNvbnN0IGJlZm9yZUNoYW5nZSA9IChvbGRJbmRleCwgbmV3SW5kZXgpID0+IHtcbiAgICBzZXROZXh0U2xpZGVJbmRleChuZXdJbmRleCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuaGVyby1zbGlkZXIuLXN0eWxlLW9uZSAuc2xpY2stc2xpZGVbZGF0YS1pbmRleD1cIiR7Y3VycmVudFNsaWRlSW5kZXh9XCJdYFxuICAgICk7XG4gICAgY29uc3QgYW5pbWF0aW9uSXRlbXMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFuaW1hdGlvbl1cIik7XG4gICAgYW5pbWF0aW9uSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbk5hbWUgPSBpdGVtLmRhdGFzZXQuYW5pbWF0aW9uO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBpdGVtLmRhdGFzZXQuZGVsYXk7XG4gICAgICBjb25zb2xlLmxvZyhhbmltYXRpb25OYW1lKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfX2FuaW1hdGVkXCIsIGFuaW1hdGlvbk5hbWUpO1xuICAgICAgaXRlbS5zdHlsZS5hbmltYXRpb25EZWxheSA9IGFuaW1hdGlvbkRlbGF5ICsgXCJzXCI7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX19hbmltYXRlZFwiLCBhbmltYXRpb25OYW1lKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtjdXJyZW50U2xpZGVJbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlciAtY2Fyb3VzZWwgLXN0eWxlLW9uZVwiPlxuICAgICAgPFNsaWRlclxuICAgICAgICBiZWZvcmVDaGFuZ2U9e2JlZm9yZUNoYW5nZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3ctY2VudGVyXCJcbiAgICAgICAgey4uLnNldHRpbmdzfVxuICAgICAgPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNsaWNrLXNsaWRlci1pdGVtICR7Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgIGFjdGl2ZTogaW5kZXggPT09IGN1cnJlbnRTbGlkZUluZGV4LFxuICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJIZXJvIHNsaWRlciBiYWNrZ3JvdW5kIGltYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIgZ3V0dGVyPXszMH0+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItY29udGVudFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGRhdGEtZGVsYXk9XCIwLjJcIiBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGRhdGEtZGVsYXk9XCIwLjRcIiBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaXRlbS5wcmljZS5tYWluKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PVwiMC44XCJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImFuaW1hdGVfX3pvb21JblJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXNsaWRlci1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgaXRlbS5wcmljZS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkhlcm8gc2xpZGVyIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEhlcm9TbGlkZXJPbmUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi8uLi9vdGhlci9TZWN0aW9uVGl0bGVcIjtcblxuaW1wb3J0IGRhdGFBIGZyb20gXCIuLi8uLi8uLi9kYXRhL3NlY3Rpb25zL2ludHJvZHVjdGlvbi5qc29uXCI7XG5cbmNvbnN0IERvd25PbmVJdGVtID0gUmVhY3QubWVtbygoeyByZXZlcnNlLCBkYXRhLCBjbGFzc05hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGRvdy1vbmUtY29udGVudF9faXRlbSAke2NsYXNzTmFtZXMoeyBcIi1yZXZlcnNlXCI6IHJldmVyc2UgfSl9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY29udGVudF9faXRlbS1pbWFnZVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgZGF0YS5pY29uU3JjfVxuICAgICAgICAgIGFsdD1cIkRhbGUgb2YgdGhlIHdlZWsgaWNvblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb250ZW50X19pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgPGg1PntkYXRhLnRpdGxlfTwvaDU+XG4gICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmZ1bmN0aW9uIEludHJvZHVjdGlvbkZvdXIoKSB7XG4gIGNvbnN0IGRhdGEgPSBkYXRhQS5mb3VyO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLWZvdXJcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uVGl0bGVcbiAgICAgICAgICB0aXRsZT1cIldoeSBjaG9vc2UgdXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIi1jb2ZmZWUgLXRpdGxlLXdoaXRlIC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAwIC8gMTYgKyBcImVtXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lLWNvbnRlbnRcIj5cbiAgICAgICAgICA8Um93IGFsaWduPVwiY2VudGVyXCIgZ3V0dGVyPXsxNX0+XG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezh9PlxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzAsIDMwXX0+XG4gICAgICAgICAgICAgICAge2RhdGEuc2xpY2UoMCwgMikubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgIDxEb3duT25lSXRlbSByZXZlcnNlIGRhdGE9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezB9IGxnPXs4fT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdy1vbmUtaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcbiAgICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbnMvaW50cm9kdWN0aW9uL2ZvdXIvaW1nLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsdD1cIkludHJvZHVjdGlvbiBpbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17OH0+XG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMCwgMzBdfT5cbiAgICAgICAgICAgICAgICB7ZGF0YS5zbGljZSgyLCA0KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICAgICAgPERvd25PbmVJdGVtIGRhdGE9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhJbnRyb2R1Y3Rpb25Gb3VyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vLi4vb3RoZXIvU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlN0ZXAgMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNob29zZSBZb3VyIFByb2R1Y3RzXCIsXG4gICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbnMvaW50cm9kdWN0aW9uL3RocmVlL3N0ZXAtMS5wbmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlN0ZXAgMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpbGwgRXNzZW50aWFsIERldGFpbHNcIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24vdGhyZWUvc3RlcC0yLnBuZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3RlcCAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29tcGxldGUgWW91ciBQYXltZW50XCIsXG4gICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbnMvaW50cm9kdWN0aW9uL3RocmVlL3N0ZXAtMy5wbmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlN0ZXAgNFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkdldCBDb250YWN0ZWQgYnkgT3VyIEV4cGVydHNcIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24vdGhyZWUvc3RlcC00LnBuZ1wiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gSW50cm9kdWN0aW9uVGhyZWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tdGhyZWVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLXRocmVlLWNvbnRlbnRcIj5cbiAgICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgICB0aXRsZT1cIldvcmtpbmcgUHJvY2Vzc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCItY2VudGVyIC10aXRsZS13aGl0ZSAtY29mZmVlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOTUgLyAxNiArIFwiZW1cIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tdGhyZWUtc3RlcHNcIj5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tdGhyZWUtc3RlcHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJTdGVwIGltYWdlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhJbnRyb2R1Y3Rpb25UaHJlZSk7XG4iLCJpbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vLi4vb3RoZXIvU2VjdGlvblRpdGxlXCI7XG5cbmZ1bmN0aW9uIEludHJvZHVjdGlvblR3bygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbi10d29cIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLXR3by13cmFwcGVyXCI+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb24tdHdvLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXG4gICAgICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbnMvaW50cm9kdWN0aW9uL3R3by8xLnBuZ1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJpbnRyb2R1Y3Rpb24taW1hZ2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uLXR3by1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIkxlZmluIFN1aXRjYXNlXCIgaGlkZURlY29yYXRpb24gLz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBMRUZJTiBTdWl0Y2FzZSwgYSBzdWl0Y2FzZSBwYWNrZWQgd2l0aCBMZWdhbCBhbmQgZmluYW5jaWFsIHNlcnZpY2VzLjxici8+IEhlcmUgd2UgaGF2ZSBleHBlcnRzIHdobyBkZWFsIHdpdGggeW91ciBwcm9ibGVtIGFuZCBwcm92aWRlIHlvdSB3aXRoIGFjY3VyYXRlIHNvbHV0aW9ucy4gRnJvbSBsZWdhbCBjb25zdWx0YW5jeSBvbiBjaXZpbCBhbmQgY3JpbWluYWwgbWF0dGVycyB0byBJUFIgbWF0dGVycy48YnIgLz5XZSBhcmUgaGVyZSB0byBndWlkZSB5b3UsIGhlbHAgeW91IGFuZCBtYWtlIHlvdSBhd2FyZSBvZiB5b3VyIGxlZ2FsIGFuZCBmaW5hbmNpYWwgcmlnaHRzLjxiciAvPiBKdXN0IGNvbm5lY3Qgd2l0aCB1cyBhbmQgbWFrZSB5b3VyIGxpZmUgZWFzeSBhbmQgc21vb3RoLjxiciAvPjxzdHJvbmc+IEZvciB1cywgdGhlIGNsaWVudCBpcyBvdXIgcHJpb3JpdHkuPC9zdHJvbmc+XG5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSW50cm9kdWN0aW9uVHdvKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gUGFydG5lck9uZSh7IHN0eWxlIH0pIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1vbmVcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLW9uZS13cmFwcGVyXCI+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheSg4KSwgKGUsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgICBgL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbnMvcGFydG5lcnMvJHtpICsgMX0ucG5nYFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiUGFydG5lciBsb2dvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQYXJ0bmVyT25lKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJzLCBSb3csIENvbCwgRW1wdHksIFNrZWxldG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4uLy4uL290aGVyL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uL3Byb2R1Y3QvUHJvZHVjdFwiO1xuaW1wb3J0IEZldGNoRGF0YUhhbmRsZSBmcm9tIFwiLi4vLi4vb3RoZXIvRmV0Y2hEYXRhSGFuZGxlXCI7XG5cbmZ1bmN0aW9uIFByb2R1Y3RUYWIoe1xuICBzdHlsZSxcbiAgZGF0YSxcbiAgY2xhc3NOYW1lLFxuICBvblRhYkNoYW5nZSxcbiAgcHJvZHVjdENsYXNzTmFtZSxcbiAgaGVhZGVyQ2F0ZWdvcmllcyxcbiAgaGVhZGVyVGl0bGUsXG4gIGhlYWRlckNsYXNzLFxuICBzaG93VGl0bGVEZWNvcmF0aW9uID0gZmFsc2UsXG4gIGhlYWRlclR5cGUgPSBcImdyaWRcIixcbiAgcHJvZHVjdENvbCxcbn0pIHtcbiAgY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xuICBjb25zdCBvbkNob29zZUNhdGVnb3J5ID0gKGtleSkgPT4ge1xuICAgIG9uVGFiQ2hhbmdlKGtleSk7XG4gIH07XG4gIGNvbnN0IHJlbmRlclRhYkNvbnRlbnQgPSAoKSA9PiAoXG4gICAgPEZldGNoRGF0YUhhbmRsZVxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIHJlbmRlckRhdGE9eyhkYXRhKSA9PiAoXG4gICAgICAgIDxSb3dcbiAgICAgICAgICBndXR0ZXI9e1tcbiAgICAgICAgICAgIHsgeHM6IDAsIG1kOiAxNSB9LFxuICAgICAgICAgICAgeyB4czogMCwgbWQ6IDE1IH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDb2wga2V5PXtpbmRleH0gey4uLnByb2R1Y3RDb2x9PlxuICAgICAgICAgICAgICA8UHJvZHVjdCBjbGFzc05hbWU9e3Byb2R1Y3RDbGFzc05hbWV9IGRhdGE9e2l0ZW19IC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICApfVxuICAgIC8+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LXRhYiAke2NsYXNzTmFtZXMoY2xhc3NOYW1lKX1gfSBzdHlsZT17c3R5bGV9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LXRhYi1oZWFkZXIgJHtcbiAgICAgICAgICBoZWFkZXJUeXBlID09PSBcInJvd1wiID8gXCItc3R5bGUtdHdvXCIgOiBcInN0eWxlLW9uZVwiXG4gICAgICAgIH0gICR7Y2xhc3NOYW1lcyhoZWFkZXJDbGFzcyl9YH1cbiAgICAgID5cbiAgICAgICAge2hlYWRlclR5cGUgPT09IFwiZ3JpZFwiICYmIChcbiAgICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgICB0aXRsZT17aGVhZGVyVGl0bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCItY2VudGVyXCJcbiAgICAgICAgICAgIGhpZGVEZWNvcmF0aW9uPXtzaG93VGl0bGVEZWNvcmF0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUYWJzXG4gICAgICAgICAgdGFiQmFyRXh0cmFDb250ZW50PXtcbiAgICAgICAgICAgIGhlYWRlclR5cGUgPT09IFwicm93XCJcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aGVhZGVyVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgaGlkZURlY29yYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIlxuICAgICAgICAgIGNlbnRlcmVkPXtoZWFkZXJUeXBlID09PSBcInJvd1wiID8gZmFsc2UgOiB0cnVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNob29zZUNhdGVnb3J5fVxuICAgICAgICA+XG4gICAgICAgICAgPFRhYlBhbmUgdGFiPVwiQWxsXCIga2V5PVwiXCI+XG4gICAgICAgICAgICB7cmVuZGVyVGFiQ29udGVudCgpfVxuICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICB7aGVhZGVyQ2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9e2l0ZW19IGtleT17aXRlbX0+XG4gICAgICAgICAgICAgIHtyZW5kZXJUYWJDb250ZW50KCl9XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGFicz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFByb2R1Y3RUYWIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcbmltcG9ydCB7IGZldGNoUG9zdHNSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYmxvZ0FjdGlvbnNcIjtcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuLi9kYXRhL2NhdGVnb3JpZXMuanNvblwiO1xuaW1wb3J0IExheW91dEZvdXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEZvdXJcIjtcbmltcG9ydCBCZW5lZml0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9vdGhlci9CZW5lZml0c1wiXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IEhlcm9TbGlkZXJGb3VyIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm8tc2xpZGVyL0hlcm9TbGlkZXJGb3VyXCI7XG5pbXBvcnQgSW50cm9kdWN0aW9uVGhyZWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaW50cm9kdWN0aW9uL0ludHJvZHVjdGlvblRocmVlXCI7XG5pbXBvcnQgSW50cm9kdWN0aW9uVHdvIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25Ud29cIjtcbmltcG9ydCBoZXJvU2xpZGVyRGF0YSBmcm9tIFwiLi4vZGF0YS9zZWN0aW9ucy9oZXJvLXNsaWRlci5qc29uXCI7XG5pbXBvcnQgUHJvZHVjdFRhYiBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RUYWJcIjtcbmltcG9ydCBJbnRyb2R1Y3Rpb25Gb3VyIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2ludHJvZHVjdGlvbi9JbnRyb2R1Y3Rpb25Gb3VyXCI7XG5pbXBvcnQgUGFydG5lck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wYXJ0bmVycy9QYXJ0bmVyT25lXCI7XG5pbXBvcnQgQmxvZ1NsaWRlIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2Jsb2cvQmxvZ1NsaWRlXCI7XG5pbXBvcnQgSGVyb1NsaWRlck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLXNsaWRlci9IZXJvU2xpZGVyT25lXCI7XG5pbXBvcnQgaGVyb3NsaWRlT25lRGF0YSBmcm9tIFwiLi4vZGF0YS9zZWN0aW9ucy9oZXJvLXNsaWRlci5qc29uXCI7XG5pbXBvcnQgQ2F0ZWdvcmllc09uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXRlZ29yaWVzL0NhdGVnb3JpZXNPbmVcIjtcbmltcG9ydCBjYXRlZ29yaWVzT25lRGF0YSBmcm9tIFwiLi4vZGF0YS9zZWN0aW9ucy9jYXRlZ29yaWVzLmpzb25cIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZTQoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2N1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LCBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeV0gPSB1c2VTdGF0ZSh7XG4gICAgZmVhdHVyZWRQcm9kdWN0czogXCJcIixcbiAgfSk7XG4gIGNvbnN0IHNob3BTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xuICBjb25zdCBibG9nU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmJsb2dSZWR1Y2VyKTtcbiAgY29uc3QgeyBmZWF0dXJlZFByb2R1Y3RzIH0gPSBzaG9wU3RhdGU7XG4gIGNvbnN0IHsgYWxsUG9zdHMgfSA9IGJsb2dTdGF0ZTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0KHsgbGltaXQ6IDggfSkpO1xuICAgIGRpc3BhdGNoKGZldGNoUG9zdHNSZXF1ZXN0KHsgbGltaXQ6IDQgfSkpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0KHtcbiAgICAgICAgbGltaXQ6IDgsXG4gICAgICAgIGNhdGVnb3J5OiBjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5mZWF0dXJlZFByb2R1Y3RzLFxuICAgICAgfSlcbiAgICApO1xuICB9LCBbY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnkuZmVhdHVyZWRQcm9kdWN0c10pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXRGb3VyXG4gICAgICB0aXRsZT1cIkluZGV4XCJcbiAgICAgIGhlYWRlckNsYXNzPVwiLWNvZmZlZSAtYWJzb2x1dGUgLW5vLXNwYWNlXCJcbiAgICAgIGZvb3RlckNsYXNzPVwiLWNvZmZlZVwiXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNGY0JyB9fVxuICAgID5cbiAgICAgIDxIZXJvU2xpZGVyT25lIGRhdGE9e2hlcm9zbGlkZU9uZURhdGEub25lfSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8SW50cm9kdWN0aW9uVHdvIGlkPVwiYWJvdXRcIiAvPlxuICAgICAgPEludHJvZHVjdGlvblRocmVlIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgPENhdGVnb3JpZXNPbmUgZGF0YT17Y2F0ZWdvcmllc09uZURhdGEub25lfSAvPlxuICAgICAgPENhdGVnb3JpZXNPbmUgZGF0YT17Y2F0ZWdvcmllc09uZURhdGEudHdvfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8SW50cm9kdWN0aW9uRm91ciAvPlxuICAgIDwvTGF5b3V0Rm91cj5cbiAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBTSE9QID0ge1xuICBGRVRDSF9QUk9EVUNUUzogXCJGRVRDSF9QUk9EVUNUU1wiLFxuICBGRVRDSF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX1NBTEVfUFJPRFVDVFM6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU1wiLFxuICBGRVRDSF9TQUxFX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFM6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNcIixcbiAgRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTFwiLFxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU1wiLFxuICBGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMXCIsXG4gIEZFVENIX0RBTEVfUFJPRFVDVFM6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU1wiLFxuICBGRVRDSF9EQUxFX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTXCIsXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUxcIixcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUw6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxcIixcbiAgRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUzogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTXCIsXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTFwiLFxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU1wiLFxuICBGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgQkxPRyA9IHtcbiAgRkVUQ0hfUE9TVFM6IFwiRkVUQ0hfUE9TVFNcIixcbiAgRkVUQ0hfUE9TVFNfU1VDQ0VTUzogXCJGRVRDSF9QT1NUU19TVUNDRVNTXCIsXG4gIEZFVENIX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUE9TVFNfRkFJTFwiLFxuICBGRVRDSF9QT1NUX0RFVEFJTDogXCJGRVRDSF9QT1NUX0RFVEFJTFwiLFxuICBGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTOiBcIkZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QT1NUX0RFVEFJTF9GQUlMXCIsXG4gIEZFVENIX1JFQ0VOVF9QT1NUUzogXCJGRVRDSF9SRUNFTlRfUE9TVFNcIixcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBTSE9QX0ZJTFRFUiA9IHtcbiAgUkVTRVRfRklMVEVSUzogXCJSRVNFVF9GSUxURVJTXCIsXG4gIFNFVF9TT1JUOiBcIlNFVF9TT1JUXCIsXG4gIFNFVF9TSE9XOiBcIlNFVF9TSE9XXCIsXG4gIFNFVF9WSUVXOiBcIlNFVF9WSUVXXCIsXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcbiAgU0VUX0NPTE9SOiBcIlNFVF9DT0xPUlwiLFxuICBTRVRfU0laRTogXCJTRVRfU0laRVwiLFxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcbn07XG5cbmV4cG9ydCBjb25zdCBDQVJUID0ge1xuICBGRVRDSF9DQVJUOiBcIkZFVENIX0NBUlRcIixcbiAgRkVUQ0hfQ0FSVF9TVUNDRVNTOiBcIkZFVENIX0NBUlRfU1VDQ0VTU1wiLFxuICBGRVRDSF9DQVJUX0ZBSUw6IFwiRkVUQ0hfQ0FSVF9GQUlMXCIsXG59O1xuXG5leHBvcnQgY29uc3QgV0lTSExJU1QgPSB7XG4gIEZFVENIX1dJU0hMSVNUOiBcIkZFVENIX1dJU0hMSVNUXCIsXG4gIEZFVENIX1dJU0hMSVNUX1NVQ0NFU1M6IFwiRkVUQ0hfV0lTSExJU1RfU1VDQ0VTU1wiLFxuICBGRVRDSF9XSVNITElTVF9GQUlMOiBcIkZFVENIX1dJU0hMSVNUX0ZBSUxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBDT01QQVJFID0ge1xuICBBRERfVE9fQ09NUEFSRTogXCJBRERfVE9fQ09NUEFSRVwiLFxuICBSRU1PVkVfRlJPTV9DT01QQVJFOiBcIlJFTU9WRV9GUk9NX0NPTVBBUkVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBCTE9HX0ZJTFRFUiA9IHtcbiAgUkVTRVRfRklMVEVSUzogXCJSRVNFVF9GSUxURVJTXCIsXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXG59O1xuIiwiaW1wb3J0IHsgQkxPRyB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuaW1wb3J0ICogYXMgYmxvZ0FwaXMgZnJvbSBcIi4uLy4uL2FwaXMvYmxvZ1wiO1xuXG4vL0ZldGNoIGFsbCBwb3N0c1xuZXhwb3J0IGNvbnN0IGZldGNoUG9zdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBCTE9HLkZFVENIX1BPU1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RzU3VjY2VzcyA9IChkYXRhLCBwb3N0Q291bnQpID0+ICh7XG4gIHR5cGU6IEJMT0cuRkVUQ0hfUE9TVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gICAgcG9zdENvdW50LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IEJMT0cuRkVUQ0hfUE9TVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQb3N0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUG9zdHMoKSk7XG4gICAgYmxvZ0FwaXNcbiAgICAgIC5mZXRjaEJsb2dEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFBvc3RzU3VjY2VzcyhyZXMuZGF0YSwgcmVzLmhlYWRlcnNbXCJ4LXRvdGFsLWNvdW50XCJdKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQb3N0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vRmV0Y2ggcmVjZW50IHBvc3RzXG5leHBvcnQgY29uc3QgZmV0Y2hSZWNlbnRQb3N0cyA9ICgpID0+ICh7XG4gIHR5cGU6IEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFJlY2VudFBvc3RzU3VjY2VzcyA9IChkYXRhLCBwb3N0Q291bnQpID0+ICh7XG4gIHR5cGU6IEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICAgIHBvc3RDb3VudCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hSZWNlbnRQb3N0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBCTE9HLkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFJlY2VudFBvc3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hSZWNlbnRQb3N0cygpKTtcbiAgICBibG9nQXBpc1xuICAgICAgLmZldGNoUmVjZW50UG9zdERhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIGZldGNoUmVjZW50UG9zdHNTdWNjZXNzKHJlcy5kYXRhLCByZXMuaGVhZGVyc1tcIngtdG90YWwtY291bnRcIl0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hSZWNlbnRQb3N0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vRmV0Y2ggcG9zdCBkZXRhaWxzXG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3REZXRhaWwgPSAoKSA9PiAoe1xuICB0eXBlOiBCTE9HLkZFVENIX1BPU1RfREVUQUlMLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3REZXRhaWxTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEJMT0cuRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUG9zdERldGFpbEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBCTE9HLkZFVENIX1BPU1RfREVUQUlMX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUG9zdERldGFpbFJlcXVlc3QgPSAoc2x1ZykgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hQb3N0RGV0YWlsKCkpO1xuICAgIGJsb2dBcGlzXG4gICAgICAuZmV0Y2hQb3N0RGV0YWlsRGF0YShzbHVnKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFBvc3REZXRhaWxTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQb3N0RGV0YWlsRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcbiIsImltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcblxuaW1wb3J0ICogYXMgY2FydEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvY2FydFwiO1xuXG4vL0dldCBjYXJ0IGRhdGFcbmV4cG9ydCBjb25zdCBmZXRjaENhcnQgPSAoKSA9PiAoe1xuICB0eXBlOiBDQVJULkZFVENIX0NBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhcnRGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFJlcXVlc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaENhcnQoKSk7XG4gICAgY2FydEFwaXNcbiAgICAgIC5mZXRjaENhcnREYXRhKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0U3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDT01QQVJFIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NvbXBhcmUgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQ09NUEFSRS5BRERfVE9fQ09NUEFSRSxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKHByb2R1Y3RJZCkgPT4gKHtcbiAgdHlwZTogQ09NUEFSRS5SRU1PVkVfRlJPTV9DT01QQVJFLFxuICBwYXlsb2FkOiB7XG4gICAgcHJvZHVjdElkLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XG5pbXBvcnQgKiBhcyBzaG9wQXBpcyBmcm9tIFwiLi4vLi4vYXBpcy9zaG9wXCI7XG5cbi8vR2V0IGFsbCBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCBwcm9kdWN0Q291bnQpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gICAgcHJvZHVjdENvdW50LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVFNfRkFJTCxcbiAgcGF5bG9hZDoge1xuICAgIGVycixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaFByb2R1Y3RzRGF0YShxdWVyeSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEsIHJlcy5oZWFkZXJzW1wieC10b3RhbC1jb3VudFwiXSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG4vL0dldCBzYWxlIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hTYWxlUHJvZHVjdHMgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2FsZVByb2R1Y3RzRmFpbCA9IChlcnIpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNhbGVQcm9kdWN0c1JlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoU2FsZVByb2R1Y3RzKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hTYWxlUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0c1N1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNhbGVQcm9kdWN0c0ZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbi8vR2V0IGZlYXR1cmVkIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzID0gKCkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hGZWF0dXJlZFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZlYXR1cmVkUHJvZHVjdHNSZXF1ZXN0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaEZlYXR1cmVkUHJvZHVjdHNEYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEZlYXR1cmVkUHJvZHVjdHNTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hGZWF0dXJlZFByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgYmVzdCBzZWxsZXIgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHtcbiAgICBkYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0ZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmVzdFNlbGxlclByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hCZXN0U2VsbGVyUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaEJlc3RTZWxsZXJQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQmVzdFNlbGxlclByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgYmVzdCBzZWxsZXIgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBmZXRjaERhbGVQcm9kdWN0cyA9ICgpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYWxlUHJvZHVjdHNGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCA9IChxdWVyeSkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hEYWxlUHJvZHVjdHMoKSk7XG4gICAgc2hvcEFwaXNcbiAgICAgIC5mZXRjaERhbGVQcm9kdWN0c0RhdGEocXVlcnkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzU3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgcHJvZHVjdCBkZXRhaWxcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWwgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFNIT1AuRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICBlcnIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdERldGFpbFJlcXVlc3QgPSAoc2x1ZykgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsKCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hQcm9kdWN0RGV0YWlsRGF0YShzbHVnKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3REZXRhaWxTdWNjZXNzKHJlcy5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0RGV0YWlsRmFpbChlcnIpKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuLy9HZXQgc2VhcmNoZWQgcHJvZHVjdFxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3QgPSAoKSA9PiAoe1xuICB0eXBlOiBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTLFxuICBwYXlsb2FkOiB7XG4gICAgZGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hlZFByb2R1Y3RGYWlsID0gKGVycikgPT4gKHtcbiAgdHlwZTogU0hPUC5GRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaGVkUHJvZHVjdFJlcXVlc3QgPSAocXVlcnkpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoU2VhcmNoZWRQcm9kdWN0KCkpO1xuICAgIHNob3BBcGlzXG4gICAgICAuZmV0Y2hTZWFyY2hlZFByb2R1Y3REYXRhKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdFN1Y2Nlc3MocmVzLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlYXJjaGVkUHJvZHVjdEZhaWwoZXJyKSk7XG4gICAgICB9KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBXSVNITElTVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xuXG5pbXBvcnQgKiBhcyB3aXNobGlzdEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvd2lzaGxpc3RcIjtcblxuLy9HZXQgY2FydCBkYXRhXG5jb25zdCBmZXRjaFdpc2hMaXN0ID0gKCkgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1QsXG59KTtcblxuY29uc3QgZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogV0lTSExJU1QuRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyxcbiAgcGF5bG9hZDoge1xuICAgIGRhdGEsXG4gIH0sXG59KTtcblxuY29uc3QgZmV0Y2hXaXNoTGlzdEZhaWwgPSAoZXJyKSA9PiAoe1xuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVF9GQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgZXJyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hMaXN0UmVxdWVzdCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3QoKSk7XG4gICAgd2lzaGxpc3RBcGlzXG4gICAgICAuZmV0Y2hXaXNobGlzdERhdGEoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0U3VjY2VzcyhyZXMuZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RGYWlsKGVycikpO1xuICAgICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnRkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9