/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/session";
exports.ids = ["pages/api/session"];
exports.modules = {

/***/ "./lib/auth0-config.js":
/*!*****************************!*\
  !*** ./lib/auth0-config.js ***!
  \*****************************/
/***/ ((module) => {

eval("if (true) {\n  /**\n   * Settings exposed to the server.\n   */\n  module.exports = {\n    AUTH0_CLIENT_ID: \"21LYOjnMbFbrLamAK8tHav97ywnbPAlo\",\n    AUTH0_CLIENT_SECRET: \"9FypTKEzO474dR9V4tFROj4Q3RG6ZyuXBkw_pm3CcW4NzwrzsjTgxSRU4GQ4PexX\",\n    AUTH0_AUDIENCE: \"https://google.com\",\n    AUTH0_SCOPE: \"openid profile\",\n    AUTH0_DOMAIN: \"https://dev-agygrzhq.us.auth0.com\",\n    REDIRECT_URI: \"/api/callback\",\n    POST_LOGOUT_REDIRECT_URI: \"http://localhost:3000/\",\n    SESSION_COOKIE_SECRET: \"pTKEzO474dR9V4tFROj4Q3RG6ZyuXBkw_pm3CcW4NzwrzsjTgxSRU4GQ4P\",\n    SESSION_COOKIE_LIFETIME: 7200\n  };\n} else {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aDAtY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQUksTUFBK0I7QUFDakM7QUFDRjtBQUNBO0FBQ0VBLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxJQUFBQSxlQUFlLEVBQUVDLGtDQURGO0FBRWZFLElBQUFBLG1CQUFtQixFQUFFRixrRUFGTjtBQUdmRyxJQUFBQSxjQUFjLEVBQUVILG9CQUhEO0FBSWZJLElBQUFBLFdBQVcsRUFBRUosZ0JBSkU7QUFLZkssSUFBQUEsWUFBWSxFQUFFTCxtQ0FMQztBQU1mTSxJQUFBQSxZQUFZLEVBQUVOLGVBTkM7QUFPZk8sSUFBQUEsd0JBQXdCLEVBQUVQLHdCQVBYO0FBUWZRLElBQUFBLHFCQUFxQixFQUFFUiw0REFSUjtBQVNmUyxJQUFBQSx1QkFBdUIsRUFBRVQsSUFBbUNTO0FBVDdDLEdBQWpCO0FBV0QsQ0FmRCxNQWVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWdyYXBocWwtaGFzdXJhLy4vbGliL2F1dGgwLWNvbmZpZy5qcz9mYTYwIl0sInNvdXJjZXNDb250ZW50IjpbImlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAvKipcbiAgICogU2V0dGluZ3MgZXhwb3NlZCB0byB0aGUgc2VydmVyLlxuICAgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQVVUSDBfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQsXG4gICAgQVVUSDBfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgICBBVVRIMF9BVURJRU5DRTogcHJvY2Vzcy5lbnYuQVVUSDBfQVVESUVOQ0UsXG4gICAgQVVUSDBfU0NPUEU6IHByb2Nlc3MuZW52LkFVVEgwX1NDT1BFLFxuICAgIEFVVEgwX0RPTUFJTjogcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOLFxuICAgIFJFRElSRUNUX1VSSTogcHJvY2Vzcy5lbnYuUkVESVJFQ1RfVVJJLFxuICAgIFBPU1RfTE9HT1VUX1JFRElSRUNUX1VSSTogcHJvY2Vzcy5lbnYuUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJLFxuICAgIFNFU1NJT05fQ09PS0lFX1NFQ1JFVDogcHJvY2Vzcy5lbnYuU0VTU0lPTl9DT09LSUVfU0VDUkVULFxuICAgIFNFU1NJT05fQ09PS0lFX0xJRkVUSU1FOiBwcm9jZXNzLmVudi5TRVNTSU9OX0NPT0tJRV9MSUZFVElNRSxcbiAgfVxufSBlbHNlIHtcbiAgLyoqXG4gICAqIFNldHRpbmdzIGV4cG9zZWQgdG8gdGhlIGNsaWVudC5cbiAgICovXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIEFVVEgwX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxuICAgIEFVVEgwX0FVRElFTkNFOiBwcm9jZXNzLmVudi5BVVRIMF9BVURJRU5DRSxcbiAgICBBVVRIMF9TQ09QRTogcHJvY2Vzcy5lbnYuQVVUSDBfU0NPUEUsXG4gICAgQVVUSDBfRE9NQUlOOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXG4gICAgUkVESVJFQ1RfVVJJOiBwcm9jZXNzLmVudi5SRURJUkVDVF9VUkksXG4gICAgUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJOiBwcm9jZXNzLmVudi5QT1NUX0xPR09VVF9SRURJUkVDVF9VUkksXG4gIH1cbn0iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkFVVEgwX0NMSUVOVF9JRCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9DTElFTlRfU0VDUkVUIiwiQVVUSDBfQVVESUVOQ0UiLCJBVVRIMF9TQ09QRSIsIkFVVEgwX0RPTUFJTiIsIlJFRElSRUNUX1VSSSIsIlBPU1RfTE9HT1VUX1JFRElSRUNUX1VSSSIsIlNFU1NJT05fQ09PS0lFX1NFQ1JFVCIsIlNFU1NJT05fQ09PS0lFX0xJRkVUSU1FIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth0-config.js\n");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth0-config */ \"./lib/auth0-config.js\");\n/* harmony import */ var _auth0_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.initAuth0)({\n  baseURL: 'http://localhost:3000',\n  issuerBaseURL: (_auth0_config__WEBPACK_IMPORTED_MODULE_1___default().AUTH0_DOMAIN),\n  clientID: (_auth0_config__WEBPACK_IMPORTED_MODULE_1___default().AUTH0_CLIENT_ID),\n  clientSecret: (_auth0_config__WEBPACK_IMPORTED_MODULE_1___default().AUTH0_CLIENT_SECRET),\n  secret: (_auth0_config__WEBPACK_IMPORTED_MODULE_1___default().SESSION_COOKIE_SECRET),\n  authorizationParams: {\n    scope: (_auth0_config__WEBPACK_IMPORTED_MODULE_1___default().AUTH0_SCOPE),\n    audience: (_auth0_config__WEBPACK_IMPORTED_MODULE_1___default().AUTH0_AUDIENCE)\n  },\n  routes: {\n    callback: (_auth0_config__WEBPACK_IMPORTED_MODULE_1___default().REDIRECT_URI),\n    postLogoutRedirect: '/'\n  },\n  session: {\n    rollingDuration: 60 * 60 * 8\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aDAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsaUVBQWVBLDhEQUFTLENBQUM7QUFDdkJFLEVBQUFBLE9BQU8sRUFBRSx1QkFEYztBQUV2QkMsRUFBQUEsYUFBYSxFQUFFRixtRUFGUTtBQUd2QkksRUFBQUEsUUFBUSxFQUFFSixzRUFIYTtBQUl2Qk0sRUFBQUEsWUFBWSxFQUFFTiwwRUFKUztBQUt2QlEsRUFBQUEsTUFBTSxFQUFFUiw0RUFMZTtBQU12QlUsRUFBQUEsbUJBQW1CLEVBQUU7QUFDbkJDLElBQUFBLEtBQUssRUFBRVgsa0VBRFk7QUFFbkJhLElBQUFBLFFBQVEsRUFBRWIscUVBQXFCYztBQUZaLEdBTkU7QUFVdkJDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxRQUFRLEVBQUVoQixtRUFESjtBQUVOa0IsSUFBQUEsa0JBQWtCLEVBQUU7QUFGZCxHQVZlO0FBY3ZCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsZUFBZSxFQUFFLEtBQUssRUFBTCxHQUFVO0FBRHBCO0FBZGMsQ0FBRCxDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1ncmFwaHFsLWhhc3VyYS8uL2xpYi9hdXRoMC5qcz9kOGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vYXV0aDAtY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgaXNzdWVyQmFzZVVSTDogY29uZmlnLkFVVEgwX0RPTUFJTixcbiAgY2xpZW50SUQ6IGNvbmZpZy5BVVRIMF9DTElFTlRfSUQsXG4gIGNsaWVudFNlY3JldDogY29uZmlnLkFVVEgwX0NMSUVOVF9TRUNSRVQsXG4gIHNlY3JldDogY29uZmlnLlNFU1NJT05fQ09PS0lFX1NFQ1JFVCxcbiAgYXV0aG9yaXphdGlvblBhcmFtczoge1xuICAgIHNjb3BlOiBjb25maWcuQVVUSDBfU0NPUEUsXG4gICAgYXVkaWVuY2U6IGNvbmZpZy5BVVRIMF9BVURJRU5DRVxuICB9LFxuICByb3V0ZXM6IHtcbiAgICBjYWxsYmFjazogY29uZmlnLlJFRElSRUNUX1VSSSxcbiAgICBwb3N0TG9nb3V0UmVkaXJlY3Q6ICcvJyxcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHJvbGxpbmdEdXJhdGlvbjogNjAgKiA2MCAqIDgsXG4gIH1cbn0pIl0sIm5hbWVzIjpbImluaXRBdXRoMCIsImNvbmZpZyIsImJhc2VVUkwiLCJpc3N1ZXJCYXNlVVJMIiwiQVVUSDBfRE9NQUlOIiwiY2xpZW50SUQiLCJBVVRIMF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIMF9DTElFTlRfU0VDUkVUIiwic2VjcmV0IiwiU0VTU0lPTl9DT09LSUVfU0VDUkVUIiwiYXV0aG9yaXphdGlvblBhcmFtcyIsInNjb3BlIiwiQVVUSDBfU0NPUEUiLCJhdWRpZW5jZSIsIkFVVEgwX0FVRElFTkNFIiwicm91dGVzIiwiY2FsbGJhY2siLCJSRURJUkVDVF9VUkkiLCJwb3N0TG9nb3V0UmVkaXJlY3QiLCJzZXNzaW9uIiwicm9sbGluZ0R1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth0.js\n");

/***/ }),

/***/ "./pages/api/session.js":
/*!******************************!*\
  !*** ./pages/api/session.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ session)\n/* harmony export */ });\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/auth0 */ \"./lib/auth0.js\");\n\n\nasync function session(req, res) {\n  try {\n    const {\n      accessToken\n    } = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__.default.getAccessToken(req, res, {});\n    res.status(200).json({\n      accessToken\n    });\n  } catch (error) {\n    console.error(error);\n    res.status(error.status || 500).json({\n      code: error.code,\n      error: error.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2Vzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUVlLGVBQWVFLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJO0FBQ0YsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQWtCLE1BQU1KLDhEQUFBLENBQXFCRSxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0IsRUFBL0IsQ0FBOUI7QUFDQUEsSUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUgsTUFBQUE7QUFBRixLQUFyQjtBQUNELEdBSEQsQ0FHRSxPQUFPSSxLQUFQLEVBQWM7QUFDZEMsSUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDQUwsSUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVdFLEtBQUssQ0FBQ0YsTUFBTixJQUFnQixHQUEzQixFQUFnQ0MsSUFBaEMsQ0FBcUM7QUFDbkNHLE1BQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDRSxJQUR1QjtBQUVuQ0YsTUFBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNHO0FBRnNCLEtBQXJDO0FBSUQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1ncmFwaHFsLWhhc3VyYS8uL3BhZ2VzL2FwaS9zZXNzaW9uLmpzPzYwZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuaW1wb3J0IGF1dGgwIGZyb20gXCIuLi8uLi9saWIvYXV0aDBcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2Vzc2lvbihyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4gfSA9IGF3YWl0IGF1dGgwLmdldEFjY2Vzc1Rva2VuKHJlcSwgcmVzLCB7fSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBhY2Nlc3NUb2tlbiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLmpzb24oe1xuICAgICAgY29kZTogZXJyb3IuY29kZSxcbiAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmV0Y2giLCJhdXRoMCIsInNlc3Npb24iLCJyZXEiLCJyZXMiLCJhY2Nlc3NUb2tlbiIsImdldEFjY2Vzc1Rva2VuIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImNvZGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/session.js\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-unfetch");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/session.js"));
module.exports = __webpack_exports__;

})();