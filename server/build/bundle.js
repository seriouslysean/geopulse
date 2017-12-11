/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  INSTAGRAM_API_TOKEN: process.env.INSTAGRAM_API_TOKEN,
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  TWITTER_TOKEN: process.env.TWITTER_TOKEN,
  TWITTER_TOKEN_SECRET: process.env.TWITTER_TOKEN_SECRET,
  WEATHER_UNDERGROUND_API_TOKEN: process.env.WEATHER_UNDERGROUND_API_TOKEN
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return _react2.default.createElement(
    "div",
    { className: "loading" },
    _react2.default.createElement(
      "p",
      null,
      "Loading..."
    )
  );
};

exports.default = Loading;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _FeedPage = __webpack_require__(22);

var _FeedPage2 = _interopRequireDefault(_FeedPage);

var _AboutPage = __webpack_require__(36);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _NotFoundPage = __webpack_require__(37);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _FeedPage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _AboutPage2.default, {
    path: "/about"
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getGeolocation = exports.getGeolocation = function getGeolocation() {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (location) {
          var _location$coords = location.coords,
              latitude = _location$coords.latitude,
              longitude = _location$coords.longitude;

          dispatch(setGeolocation(latitude, longitude));
          resolve(location.coords);
        }, function () {
          reject("Geolocation failed");
        }, {
          timeout: 10000
        });
      } else {
        reject("Geolocation services unavailable");
      }
    });
  };
};

var SET_GEOLOCATION = exports.SET_GEOLOCATION = "SET_GEOLOCATION";
var setGeolocation = exports.setGeolocation = function setGeolocation() {
  var latitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var longitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: SET_GEOLOCATION,
    latitude: latitude,
    longitude: longitude
  };
};

var SET_GEOLOCATION_UNAVAILABLE = exports.SET_GEOLOCATION_UNAVAILABLE = "SET_GEOLOCATION_UNAVAILABLE";
var setGeolocationUnavailable = exports.setGeolocationUnavailable = function setGeolocationUnavailable() {
  return {
    type: SET_GEOLOCATION_UNAVAILABLE
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWeather = exports.SET_WEATHER = exports.getWeather = undefined;

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getWeather = exports.getWeather = function getWeather(latitude, longitude) {
  var weatherEndpoint = "https://api.wunderground.com/api/" + _config2.default.WEATHER_UNDERGROUND_API_TOKEN + "/conditions/q/" + latitude + "," + longitude + ".json";
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var weatherData, _weatherData$data$cur, _weatherData$data$cur2, city, state, country, weather, temp_f, temp_c, icon, forecast_url;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _axios2.default)(weatherEndpoint);

            case 3:
              weatherData = _context.sent;
              _weatherData$data$cur = weatherData.data.current_observation, _weatherData$data$cur2 = _weatherData$data$cur.display_location, city = _weatherData$data$cur2.city, state = _weatherData$data$cur2.state, country = _weatherData$data$cur2.country, weather = _weatherData$data$cur.weather, temp_f = _weatherData$data$cur.temp_f, temp_c = _weatherData$data$cur.temp_c, icon = _weatherData$data$cur.icon, forecast_url = _weatherData$data$cur.forecast_url;
              return _context.abrupt("return", dispatch(setWeather({
                city: city,
                state: state,
                country: country,
                weather: weather,
                temp_f: temp_f,
                temp_c: temp_c,
                icon: icon,
                forecast_url: forecast_url
              })));

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              console.log("Error fetching weather data", _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var SET_WEATHER = exports.SET_WEATHER = "SET_WEATHER";

var setWeather = exports.setWeather = function setWeather(_ref2) {
  var _ref2$city = _ref2.city,
      city = _ref2$city === undefined ? "" : _ref2$city,
      _ref2$state = _ref2.state,
      state = _ref2$state === undefined ? "" : _ref2$state,
      _ref2$country = _ref2.country,
      country = _ref2$country === undefined ? "" : _ref2$country,
      _ref2$weather = _ref2.weather,
      weather = _ref2$weather === undefined ? "" : _ref2$weather,
      _ref2$temp_f = _ref2.temp_f,
      temp_f = _ref2$temp_f === undefined ? "" : _ref2$temp_f,
      _ref2$temp_c = _ref2.temp_c,
      temp_c = _ref2$temp_c === undefined ? "" : _ref2$temp_c,
      _ref2$icon = _ref2.icon,
      icon = _ref2$icon === undefined ? "" : _ref2$icon,
      _ref2$forecast_url = _ref2.forecast_url,
      forecast_url = _ref2$forecast_url === undefined ? "" : _ref2$forecast_url;
  return {
    type: SET_WEATHER,
    city: city,
    state: state,
    country: country,
    weather: weather,
    temp_f: temp_f,
    temp_c: temp_c,
    icon: icon,
    forecast_url: forecast_url
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPhotos = exports.SET_PHOTOS = exports.getPhotos = undefined;

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getPhotos = exports.getPhotos = function getPhotos(latitude, longitude) {
  var photosEndpoint = "https://api.instagram.com/v1/media/search?access_token=" + _config2.default.INSTAGRAM_API_TOKEN + "&lat=" + latitude + "&lng=" + longitude + "&distance=5000&count=6";
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var photosData, photos, collection, photo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _axios2.default)(photosEndpoint);

            case 3:
              photosData = _context.sent;
              photos = photosData.data.data;
              collection = [];

              for (photo in photos) {
                collection.push(photos[photo]);
              }
              return _context.abrupt("return", dispatch(setPhotos({
                collection: collection
              })));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);

              console.log("Error fetching photos data", _context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 10]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var SET_PHOTOS = exports.SET_PHOTOS = "SET_PHOTOS";
var setPhotos = exports.setPhotos = function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    photos: photos
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setChatter = exports.SET_CHATTER = exports.getChatter = undefined;

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getChatter = exports.getChatter = function getChatter(latitude, longitude) {
  var chatterEndpoint = "/api/chatter/" + latitude + "/" + longitude;
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var chatterData, collection;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _axios2.default)(chatterEndpoint);

            case 3:
              chatterData = _context.sent;
              collection = chatterData.data.statuses;
              return _context.abrupt("return", dispatch(setChatter({
                collection: collection
              })));

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              console.log("Error fetching chatter data", _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var SET_CHATTER = exports.SET_CHATTER = "SET_CHATTER";
var setChatter = exports.setChatter = function setChatter(chatter) {
  return {
    type: SET_CHATTER,
    chatter: chatter
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(16);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(5);

var _expressHttpProxy = __webpack_require__(18);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _AppRoutes = __webpack_require__(6);

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

var _renderer = __webpack_require__(38);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(41);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();

app.use(function (req, res, next) {
  var schema = req.headers["x-forwarded-proto"];
  if (schema === "https" || process.env.NODE_ENV !== "production") return next();
  res.redirect("https://" + req.headers.host + req.url);
});

app.use(_express2.default.static("client/public"));

__webpack_require__(48)(app);

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_AppRoutes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(port, function () {
  console.log("The magic is happening on port", port);
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(5);

var _reactHelmet = __webpack_require__(7);

var _Header = __webpack_require__(20);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(21);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    { className: "app" },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        "title",
        null,
        "Geopulse"
      ),
      _react2.default.createElement("meta", { property: "og:title", content: "Geopulse" })
    ),
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    { className: "section section--bg-sky-dark header" },
    _react2.default.createElement(
      "div",
      { className: "content-container" },
      _react2.default.createElement(
        "div",
        { className: "header__content" },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/", className: "header__logo" },
          _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement("img", { src: "./assets/logo-geopulse.svg", alt: "Geopulse logo" })
          ),
          _react2.default.createElement(
            "span",
            null,
            "Geopulse"
          )
        ),
        _react2.default.createElement(
          "nav",
          { className: "header__navigation" },
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: "/", className: "header__link", activeClassName: "header__link--active", exact: true },
                "Feed"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: "/about", className: "header__link", activeClassName: "header__link--active" },
                "About"
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    "footer",
    { className: "section section--bg-earth-darkest footer" },
    _react2.default.createElement(
      "div",
      { className: "content-container" },
      _react2.default.createElement(
        "p",
        null,
        "Crafted with love /",
        " ",
        _react2.default.createElement(
          "a",
          { rel: "external", href: "https://www.codeserious.com", className: "footer__link" },
          "Code Serious"
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _geolocation = __webpack_require__(9);

var _weather = __webpack_require__(10);

var _photos = __webpack_require__(11);

var _chatter = __webpack_require__(12);

var _withGeolocation = __webpack_require__(23);

var _withGeolocation2 = _interopRequireDefault(_withGeolocation);

var _withWeather = __webpack_require__(24);

var _withWeather2 = _interopRequireDefault(_withWeather);

var _withPhotos = __webpack_require__(25);

var _withPhotos2 = _interopRequireDefault(_withPhotos);

var _withChatter = __webpack_require__(26);

var _withChatter2 = _interopRequireDefault(_withChatter);

var _Location = __webpack_require__(27);

var _Location2 = _interopRequireDefault(_Location);

var _Weather = __webpack_require__(30);

var _Weather2 = _interopRequireDefault(_Weather);

var _Photos = __webpack_require__(31);

var _Photos2 = _interopRequireDefault(_Photos);

var _Chatter = __webpack_require__(32);

var _Chatter2 = _interopRequireDefault(_Chatter);

var _Videos = __webpack_require__(35);

var _Videos2 = _interopRequireDefault(_Videos);

var _Unavailable = __webpack_require__(50);

var _Unavailable2 = _interopRequireDefault(_Unavailable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationWithGeolocation = (0, _withGeolocation2.default)(_Location2.default);
var WeatherWithWeather = (0, _withGeolocation2.default)((0, _withWeather2.default)(_Weather2.default));
var PhotosWithPhotos = (0, _withGeolocation2.default)((0, _withPhotos2.default)(_Photos2.default));
var ChatterWithChatter = (0, _withGeolocation2.default)((0, _withChatter2.default)(_Chatter2.default));
var VideosWithVideos = (0, _withGeolocation2.default)(_Videos2.default);

var FeedPage = function (_React$Component) {
  _inherits(FeedPage, _React$Component);

  function FeedPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FeedPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FeedPage.__proto__ || Object.getPrototypeOf(FeedPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      unavailable: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FeedPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getGeolocation().then(function (location) {
        var latitude = location.latitude,
            longitude = location.longitude;

        _this2.props.getWeather(latitude, longitude);
        _this2.props.getPhotos(latitude, longitude);
        _this2.props.getChatter(latitude, longitude);
      }).catch(function () {
        _this2.props.setGeolocationUnavailable();
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var geolocation = nextProps.geolocation;

      if (geolocation.unavailable) {
        this.setState(function () {
          return {
            unavailable: true
          };
        });
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      return _react2.default.createElement(
        "div",
        { className: "section-container" },
        _react2.default.createElement(LocationWithGeolocation, {
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + _config2.default.GOOGLE_MAPS_API_KEY + "&v=3.exp&libraries=geometry,places",
          loadingElement: _react2.default.createElement("div", { style: { height: "100%" } }),
          containerElement: _react2.default.createElement("div", { style: { height: "400px" } }),
          mapElement: _react2.default.createElement("div", { style: { height: "100%" } })
        }),
        _react2.default.createElement(WeatherWithWeather, null),
        _react2.default.createElement(PhotosWithPhotos, null),
        _react2.default.createElement(ChatterWithChatter, null),
        _react2.default.createElement(VideosWithVideos, null)
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "page-feed" },
        _react2.default.createElement(
          "div",
          { className: "page-content" },
          !this.state.unavailable ? this.renderContent() : _react2.default.createElement(_Unavailable2.default, null)
        )
      );
    }
  }]);

  return FeedPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    geolocation: state.geolocation
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getGeolocation: function getGeolocation() {
      return dispatch((0, _geolocation.getGeolocation)());
    },
    setGeolocationUnavailable: function setGeolocationUnavailable() {
      return dispatch((0, _geolocation.setGeolocationUnavailable)());
    },
    getWeather: function getWeather(latitude, longitude) {
      return dispatch((0, _weather.getWeather)(latitude, longitude));
    },
    getPhotos: function getPhotos(latitude, longitude) {
      return dispatch((0, _photos.getPhotos)(latitude, longitude));
    },
    getChatter: function getChatter(latitude, longitude) {
      return dispatch((0, _chatter.getChatter)(latitude, longitude));
    }
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FeedPage)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withGeolocation(WrappedComponent) {
  var HOC = function (_React$Component) {
    _inherits(HOC, _React$Component);

    function HOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        ready: false,
        unavailable: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HOC, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var geolocation = nextProps.geolocation;

        if (!this.state.ready && geolocation.unavailable) {
          this.setState(function () {
            return {
              unavailable: true
            };
          });
        } else {
          if (!this.state.ready && geolocation) {
            this.setState(function () {
              return {
                ready: true
              };
            });
          }
        }
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate() {
        return this.state.ready || this.state.unavailable;
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.unavailable) {
          return "";
        } else {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { ready: this.state.ready }));
        }
      }
    }]);

    return HOC;
  }(_react2.default.Component);

  var mapStateToProps = function mapStateToProps(_ref2) {
    var geolocation = _ref2.geolocation;
    return {
      geolocation: geolocation
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(HOC);
}

exports.default = withGeolocation;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withWeather(WrappedComponent) {
  var HOC = function (_React$Component) {
    _inherits(HOC, _React$Component);

    function HOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        ready: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HOC, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var weather = nextProps.weather;

        if (!this.state.ready && weather) {
          this.setState(function () {
            return {
              ready: true
            };
          });
        }
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate() {
        return this.state.ready;
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { ready: this.state.ready }));
      }
    }]);

    return HOC;
  }(_react2.default.Component);

  var mapStateToProps = function mapStateToProps(_ref2) {
    var weather = _ref2.weather;
    return {
      weather: weather
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(HOC);
}

exports.default = withWeather;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withPhotos(WrappedComponent) {
  var HOC = function (_React$Component) {
    _inherits(HOC, _React$Component);

    function HOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        ready: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HOC, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var photos = nextProps.photos;

        if (!this.state.ready && photos) {
          this.setState(function () {
            return {
              ready: true
            };
          });
        }
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate() {
        return this.state.ready;
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { ready: this.state.ready }));
      }
    }]);

    return HOC;
  }(_react2.default.Component);

  var mapStateToProps = function mapStateToProps(_ref2) {
    var photos = _ref2.photos;
    return {
      photos: photos
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(HOC);
}

exports.default = withPhotos;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withChatters(WrappedComponent) {
  var HOC = function (_React$Component) {
    _inherits(HOC, _React$Component);

    function HOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        ready: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HOC, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var chatter = nextProps.chatter;

        if (!this.state.ready && chatter) {
          this.setState(function () {
            return {
              ready: true
            };
          });
        }
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate() {
        return this.state.ready;
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { ready: this.state.ready }));
      }
    }]);

    return HOC;
  }(_react2.default.Component);

  var mapStateToProps = function mapStateToProps(_ref2) {
    var chatter = _ref2.chatter;
    return {
      chatter: chatter
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(HOC);
}

exports.default = withChatters;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(28);

var _setupMap = __webpack_require__(29);

var _setupMap2 = _interopRequireDefault(_setupMap);

var _Loading = __webpack_require__(4);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_React$Component) {
  _inherits(Location, _React$Component);

  function Location() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Location);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Location.__proto__ || Object.getPrototypeOf(Location)).call.apply(_ref, [this].concat(args))), _this), _this.renderContent = function () {
      var _this$props$geolocati = _this.props.geolocation,
          lng = _this$props$geolocati.longitude,
          lat = _this$props$geolocati.latitude;

      return _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(_reactGoogleMaps.GoogleMap, {
          defaultZoom: 14,
          defaultCenter: { lat: lat, lng: lng },
          defaultOptions: {
            backgroundColor: "#90acf3",
            clickableIcons: false,
            disableDefaultUI: true,
            draggable: false,
            fullscreenControl: false,
            gestureHandling: "none",
            keyboardShortcuts: false,
            mapTypeControl: false,
            maxZoom: 14,
            minZoom: 14,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false,
            styles: _setupMap2.default,
            zoomControl: false
          }
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Location, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "section section--bg-sky-light location" },
        _react2.default.createElement(
          "div",
          { className: "location__content" },
          this.props.ready ? this.renderContent() : _react2.default.createElement(_Loading2.default, null)
        )
      );
    }
  }]);

  return Location;
}(_react2.default.Component);

exports.default = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(Location));

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#4e5c6a"
  }]
}, {
  featureType: "administrative.locality",
  elementType: "all",
  stylers: [{
    saturation: 7
  }, {
    lightness: 19
  }, {
    visibility: "on"
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    saturation: -100
  }, {
    lightness: 100
  }, {
    visibility: "simplified"
  }, {
    color: "#f3f7fa"
  }]
}, {
  featureType: "poi",
  elementType: "all",
  stylers: [{
    saturation: -100
  }, {
    lightness: 100
  }, {
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{
    hue: "#bbc0c4"
  }, {
    saturation: -93
  }, {
    lightness: 31
  }, {
    visibility: "simplified"
  }]
}, {
  featureType: "road",
  elementType: "labels",
  stylers: [{
    hue: "#bbc0c4"
  }, {
    saturation: -93
  }, {
    lightness: 31
  }, {
    visibility: "on"
  }]
}, {
  featureType: "road.arterial",
  elementType: "labels",
  stylers: [{
    hue: "#bbc0c4"
  }, {
    saturation: -93
  }, {
    lightness: -2
  }, {
    visibility: "simplified"
  }]
}, {
  featureType: "road.local",
  elementType: "geometry",
  stylers: [{
    hue: "#e9ebed"
  }, {
    saturation: -90
  }, {
    lightness: -8
  }, {
    visibility: "simplified"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    hue: "#e9ebed"
  }, {
    saturation: 10
  }, {
    lightness: 69
  }, {
    visibility: "on"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    saturation: -78
  }, {
    lightness: 67
  }, {
    visibility: "simplified"
  }, {
    color: "#dde7f2"
  }]
}];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Loading = __webpack_require__(4);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weather = function (_React$Component) {
  _inherits(Weather, _React$Component);

  function Weather() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Weather);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Weather.__proto__ || Object.getPrototypeOf(Weather)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showFarenheit: true
    }, _this.handleTemperatureToggle = function (e) {
      e.preventDefault();
      _this.setState(function (prevState) {
        return {
          showFarenheit: !prevState.showFarenheit
        };
      });
    }, _this.renderContent = function () {
      var _this$props$weather = _this.props.weather,
          city = _this$props$weather.city,
          state = _this$props$weather.state,
          country = _this$props$weather.country,
          weather = _this$props$weather.weather,
          temp_f = _this$props$weather.temp_f,
          temp_c = _this$props$weather.temp_c,
          icon = _this$props$weather.icon,
          forecast_url = _this$props$weather.forecast_url;

      return _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(
          "div",
          {
            className: "weather__temperature " + (_this.state.showFarenheit ? "weather__temperature--f" : "weather__temperature--c"),
            onClick: _this.handleTemperatureToggle
          },
          _react2.default.createElement(
            "h2",
            null,
            _react2.default.createElement(
              "span",
              { className: "temp temp--f" },
              temp_f,
              "\xB0F"
            ),
            _react2.default.createElement(
              "span",
              { className: "temp temp--c" },
              temp_c,
              "\xB0C"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "weather__details" },
          _react2.default.createElement(
            "h3",
            null,
            weather
          ),
          _react2.default.createElement(
            "p",
            null,
            city,
            ", ",
            state,
            " / ",
            country
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Weather, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-earth-light weather" },
        _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(
            "div",
            { className: "weather__content" },
            _react2.default.createElement(
              "h1",
              { className: "section__title" },
              "Weather"
            ),
            this.props.ready ? this.renderContent() : _react2.default.createElement(_Loading2.default, null),
            _react2.default.createElement(
              "a",
              { rel: "external", href: "https://www.wunderground.com/", className: "section__attribution" },
              "Powered by Weather Underground"
            )
          )
        )
      );
    }
  }]);

  return Weather;
}(_react2.default.Component);

exports.default = Weather;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Loading = __webpack_require__(4);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photos = function (_React$Component) {
  _inherits(Photos, _React$Component);

  function Photos() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Photos);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Photos.__proto__ || Object.getPrototypeOf(Photos)).call.apply(_ref, [this].concat(args))), _this), _this.renderPhotos = function () {
      var collection = _this.props.photos.collection;
      return collection.map(function (photo) {
        var id = photo.id,
            alt = photo.caption.text,
            image = photo.images.standard_resolution,
            likes = photo.likes,
            link = photo.link,
            username = photo.user.username;

        return _react2.default.createElement(
          "li",
          { key: id, className: "photos__photo" },
          _react2.default.createElement(
            "a",
            { rel: "external", href: link, title: alt },
            _react2.default.createElement(
              "div",
              { className: "photos__image", style: { backgroundImage: "url(" + image.url + ")" } },
              _react2.default.createElement("img", { src: image.url, width: image.width, height: image.height, alt: alt })
            ),
            _react2.default.createElement(
              "div",
              { className: "photos__username" },
              username
            )
          )
        );
      });
    }, _this.renderContent = function () {
      return _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(
          "ul",
          { className: "photos__grid" },
          _this.renderPhotos()
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Photos, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-earth-medium photos" },
        _react2.default.createElement(
          "div",
          { className: "content-container content-container--grid-spacing" },
          _react2.default.createElement(
            "div",
            { className: "photos__content" },
            _react2.default.createElement(
              "h1",
              { className: "section__title" },
              "Photos"
            ),
            this.props.ready ? this.renderContent() : _react2.default.createElement(_Loading2.default, null),
            _react2.default.createElement(
              "a",
              { rel: "external", href: "https://www.instagram.com/", className: "section__attribution" },
              "Powered by Instagram"
            )
          )
        )
      );
    }
  }]);

  return Photos;
}(_react2.default.Component);

exports.default = Photos;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _chatter = __webpack_require__(33);

var _Loading = __webpack_require__(4);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chatter = function (_React$Component) {
  _inherits(Chatter, _React$Component);

  function Chatter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Chatter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chatter.__proto__ || Object.getPrototypeOf(Chatter)).call.apply(_ref, [this].concat(args))), _this), _this.renderChatter = function () {
      var collection = _this.props.chatter.collection;
      return collection.map(function (status) {
        if (status.retweeted_status) {
          status = status.retweeted_status;
        }
        var _status = status,
            id = _status.id,
            screen_name = _status.user.screen_name;


        return _react2.default.createElement(
          "li",
          { key: id, className: "chatter__status" },
          _react2.default.createElement("div", { className: "chatter__text", dangerouslySetInnerHTML: { __html: (0, _chatter.setupTweetText)(status) } }),
          _react2.default.createElement(
            "div",
            { className: "status__username" },
            _react2.default.createElement(
              "a",
              { rel: "external", href: (0, _chatter.getTwitterUserUrl)(screen_name), title: "Follow " + screen_name + " on Twitter" },
              "@",
              screen_name
            )
          )
        );
      });
    }, _this.renderContent = function () {
      return _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(
          "ul",
          { className: "chatter__list" },
          _this.renderChatter()
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Chatter, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-earth-dark chatter" },
        _react2.default.createElement(
          "div",
          { className: "content-container content-container--grid-spacing" },
          _react2.default.createElement(
            "div",
            { className: "chatter__content" },
            _react2.default.createElement(
              "h1",
              { className: "section__title" },
              "Chatter"
            ),
            this.props.ready ? this.renderContent() : _react2.default.createElement(_Loading2.default, null),
            _react2.default.createElement(
              "a",
              { rel: "external", href: "https://www.twitter.com/", className: "section__attribution" },
              "Powered by Twitter"
            )
          )
        )
      );
    }
  }]);

  return Chatter;
}(_react2.default.Component);

exports.default = Chatter;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupTweetText = exports.getTwitterUserUrl = undefined;

var _lodash = __webpack_require__(34);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTwitterUserUrl = exports.getTwitterUserUrl = function getTwitterUserUrl(screen_name) {
  return "https://www.twitter.com/" + screen_name;
};

var setupTweetText = exports.setupTweetText = function setupTweetText(tweet) {
  var entities = tweet.entities;
  var toReplace = [];
  var text = tweet.text;

  console.log(tweet);

  _lodash2.default.forEach(entities, function (value, key) {
    switch (key) {
      case "hashtags":
        _lodash2.default.each(entities[key], function (e) {
          toReplace.push({
            start: e.indices[0],
            end: e.indices[1],
            replace: "<a href=\"https://www.twitter.com/hashtag/" + e.text + "?src=hash\" target=\"_blank\">#" + e.text + "</a>"
          });
        });
        break;
      case "urls":
        _lodash2.default.each(entities[key], function (e) {
          toReplace.push({
            start: e.indices[0],
            end: e.indices[1],
            replace: "<a href=\"" + e.expanded_url + "\" target=\"_blank\">" + e.display_url + "</a>"
          });
        });
        break;
      case "user_mentions":
        _lodash2.default.each(entities[key], function (e) {
          toReplace.push({
            start: e.indices[0],
            end: e.indices[1],
            replace: "<a href=\"https://www.twitter.com/" + e.screen_name + "\" target=\"_blank\">@" + e.screen_name + "</a>"
          });
        });
        break;
    }
  });

  if (toReplace.length) {
    toReplace.sort(function (a, b) {
      return b.start - a.start;
    });
    _lodash2.default.each(toReplace, function (r, k) {
      text = text.substring(0, r.start) + r.replace + text.substring(r.end);
    });
  }

  return text;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Loading = __webpack_require__(4);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderContent = function renderContent(props) {
  return _react2.default.createElement(
    "ul",
    null,
    _react2.default.createElement(
      "li",
      null,
      "Lat: ",
      props.geolocation.latitude
    ),
    _react2.default.createElement(
      "li",
      null,
      "Lon: ",
      props.geolocation.longitude
    )
  );
};

var Videos = function Videos(props) {
  return _react2.default.createElement(
    "section",
    { className: "section section--spacing section--bg-earth-darker videos" },
    _react2.default.createElement(
      "div",
      { className: "content-container" },
      _react2.default.createElement(
        "div",
        { className: "videos__content" },
        _react2.default.createElement(
          "h1",
          { className: "section__title" },
          "Videos"
        ),
        props.ready ? renderContent(props) : _react2.default.createElement(_Loading2.default, null),
        _react2.default.createElement(
          "a",
          { rel: "external", href: "https://www.youtube.com/", className: "section__attribution" },
          "Powered by YouTube"
        )
      )
    )
  );
};

exports.default = Videos;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutPage = function AboutPage() {
  return _react2.default.createElement(
    "div",
    { className: "page-about" },
    _react2.default.createElement(
      "div",
      { className: "page-content" },
      _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-sky-light" },
        _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(
            "h1",
            { className: "section__title" },
            "About"
          ),
          _react2.default.createElement(
            "div",
            { className: "content" },
            _react2.default.createElement(
              "p",
              null,
              "Geopulse is a tool that allows you to see content based on your location including a Google Map of the area, the local weather from Weather Underground, photos from Instagram, tweets from Twitter and videos from YouTube."
            )
          )
        )
      ),
      _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-earth-light" },
        _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(
            "h1",
            { className: "section__title" },
            "Roadmap"
          ),
          _react2.default.createElement(
            "div",
            { className: "content" },
            _react2.default.createElement(
              "p",
              null,
              "(Roadmap)"
            )
          )
        )
      ),
      _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-earth-medium" },
        _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(
            "h1",
            { className: "section__title" },
            "Privacy"
          ),
          _react2.default.createElement(
            "div",
            { className: "content" },
            _react2.default.createElement(
              "p",
              null,
              "No data is saved on our servers and is only requested on an as-needed basis."
            )
          )
        )
      ),
      _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-earth-dark" },
        _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(
            "h1",
            { className: "section__title" },
            "Thanks"
          ),
          _react2.default.createElement(
            "div",
            { className: "content" },
            _react2.default.createElement(
              "p",
              null,
              "(People)"
            )
          )
        )
      ),
      _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-earth-darker" },
        _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(
            "h1",
            { className: "section__title" },
            "Contact"
          ),
          _react2.default.createElement(
            "div",
            { className: "content" },
            _react2.default.createElement(
              "p",
              null,
              "(Info)"
            )
          )
        )
      )
    )
  );
};

exports.default = {
  component: AboutPage
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage() {
  return _react2.default.createElement(
    "div",
    { className: "page-not-found" },
    _react2.default.createElement(
      "div",
      { className: "page-content" },
      _react2.default.createElement(
        "section",
        { className: "section section--spacing section--bg-sky-light" },
        _react2.default.createElement(
          "div",
          { className: "content-container" },
          _react2.default.createElement(
            "h1",
            { className: "section__title" },
            "Whoops!"
          ),
          _react2.default.createElement(
            "div",
            { className: "content" },
            _react2.default.createElement(
              "p",
              null,
              "Something isn't quite right here, we weren't able to find what you were looking for."
            )
          )
        )
      )
    )
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(39);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _server = __webpack_require__(40);

var _reactRouterDom = __webpack_require__(8);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(5);

var _reactHelmet = __webpack_require__(7);

var _AppRoutes = __webpack_require__(6);

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var html = _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        { className: "app-container" },
        (0, _reactRouterConfig.renderRoutes)(_AppRoutes2.default)
      )
    )
  );
  var content = (0, _server.renderToString)(html);
  var helmet = _reactHelmet.Helmet.renderStatic();

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n\n        " + helmet.title.toString() + "\n        " + helmet.meta.toString() + "\n\n        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">\n        <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">\n        <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\">\n        <link rel=\"manifest\" href=\"/manifest.json\">\n        <link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#43578c\">\n\n        <!-- iOS -->\n        <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n        <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n        <meta name=\"apple-mobile-web-app-title\" content=\"Geopulse\">\n        <link rel=\"apple-touch-startup-image\" href=\"/assets/geopulse-splash.png\">\n      \n        <!-- Other -->\n        <meta name=\"application-name\" content=\"Geopulse\">\n        <meta name=\"theme-color\" content=\"#43578c\">\n        <meta name=\"format-detection\" content=\"telephone=no\">\n      \n        <!-- Social -->\n        <meta itemprop=\"name\" content=\"Geopulse\">\n        <meta itemprop=\"description\" content=\"Get a pulse on the happenings nearby\">\n        <meta itemprop=\"image\" content=\"https://geopulse-app.herokuapp.com/assets/geopulse-banner.png\">\n      \n        <meta property=\"og:image\" content=\"https://geopulse-app.herokuapp.com/assets/geopulse-banner.png\">\n        <meta property=\"og:image:width\" content=\"1200\">\n        <meta property=\"og:image:height\" content=\"628\">\n        <meta property=\"og:title\" content=\"Geopulse\">\n        <meta property=\"og:description\" content=\"Get a pulse on the happenings nearby\">\n        <meta property=\"og:url\" content=\"https://geopulse-app.herokuapp.com\">\n      \n        <meta name=\"twitter:card\" content=\"summary_large_image\">\n        <meta name=\"twitter:title\" content=\"Geopulse\">\n        <meta name=\"twitter:description\" content=\"Get a pulse on the happenings nearby\">\n        <meta name=\"twitter:creator\" content=\"@seriouslysean\">\n        <meta name=\"twitter:image\" content=\"https://geopulse-app.herokuapp.com/assets/geopulse-banner.png\">\n        \n        <link rel=\"stylesheet\" type=\"text/css\" href=\"bundle.css\" />\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>\n        <script>window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "</script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  ";

  res.send(html);
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _reduxThunk = __webpack_require__(42);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(43);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _geolocationReducer = __webpack_require__(44);

var _geolocationReducer2 = _interopRequireDefault(_geolocationReducer);

var _weatherReducer = __webpack_require__(45);

var _weatherReducer2 = _interopRequireDefault(_weatherReducer);

var _photosReducer = __webpack_require__(46);

var _photosReducer2 = _interopRequireDefault(_photosReducer);

var _chatterReducer = __webpack_require__(47);

var _chatterReducer2 = _interopRequireDefault(_chatterReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  geolocation: _geolocationReducer2.default,
  weather: _weatherReducer2.default,
  photos: _photosReducer2.default,
  chatter: _chatterReducer2.default
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geolocationReducerDefaultState = undefined;

var _geolocation = __webpack_require__(9);

var geolocationReducerDefaultState = exports.geolocationReducerDefaultState = false;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : geolocationReducerDefaultState;
  var action = arguments[1];

  switch (action.type) {
    case _geolocation.SET_GEOLOCATION:
      return {
        latitude: action.latitude,
        longitude: action.longitude
      };
    case _geolocation.SET_GEOLOCATION_UNAVAILABLE:
      return {
        unavailable: true
      };
    default:
      return state;
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weatherReducerDefaultState = undefined;

var _weather = __webpack_require__(10);

var weatherReducerDefaultState = exports.weatherReducerDefaultState = false;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : weatherReducerDefaultState;
  var action = arguments[1];

  switch (action.type) {
    case _weather.SET_WEATHER:
      return {
        city: action.city,
        state: action.state,
        country: action.country,
        weather: action.weather,
        temp_f: action.temp_f,
        temp_c: action.temp_c,
        icon: action.icon,
        forecast_url: action.forecast_url
      };
    default:
      return state;
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.photoReducerDefaultState = undefined;

var _photos = __webpack_require__(11);

var photoReducerDefaultState = exports.photoReducerDefaultState = false;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : photoReducerDefaultState;
  var action = arguments[1];

  switch (action.type) {
    case _photos.SET_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatterReducerDefaultState = undefined;

var _chatter = __webpack_require__(12);

var chatterReducerDefaultState = exports.chatterReducerDefaultState = false;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : chatterReducerDefaultState;
  var action = arguments[1];

  switch (action.type) {
    case _chatter.SET_CHATTER:
      return action.chatter;
    default:
      return state;
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _nodeTwitter = __webpack_require__(49);

var _nodeTwitter2 = _interopRequireDefault(_nodeTwitter);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var twitterSearchClient = new _nodeTwitter2.default.SearchClient(_config2.default.TWITTER_CONSUMER_KEY, _config2.default.TWITTER_CONSUMER_SECRET, _config2.default.TWITTER_TOKEN, _config2.default.TWITTER_TOKEN_SECRET);

module.exports = function (app) {
  app.get("/api/chatter/:latitude/:longitude", function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _req$params, latitude, longitude;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$params = req.params, latitude = _req$params.latitude, longitude = _req$params.longitude;

              twitterSearchClient.search({ q: "", geocode: latitude + "," + longitude + ",5km", lang: "en", count: "4" }, function (error, result) {
                if (error) {
                  res.send({ error: error });
                }
                if (result) {
                  res.send(result);
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  app.get("/api/*", function (req, res) {
    res.redirect("/");
  });
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("node-twitter");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Unavailable = function Unavailable() {
  return _react2.default.createElement(
    "section",
    { className: "section section--spacing section--bg-sky-light unavailable" },
    _react2.default.createElement(
      "div",
      { className: "content-container" },
      _react2.default.createElement(
        "h1",
        { className: "section__title" },
        "Unavailable"
      ),
      _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(
          "p",
          null,
          "Geolocation is unavailable. Check your settings to verify access or try again later."
        )
      )
    )
  );
};

exports.default = Unavailable;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTU1MmVjM2IyNDlhM2ZjNDIxNTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvY2hhdHRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wYWdlcy9GZWVkUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aEdlb2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvaG9jcy93aXRoV2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFBob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aENoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NldHVwTWFwLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9XZWF0aGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9QaG90b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oZWxwZXJzL2NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL0Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9nZW9sb2NhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy93ZWF0aGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlZHVjZXJzL3Bob3Rvc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9jaGF0dGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL2NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS10d2l0dGVyXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1VuYXZhaWxhYmxlLmpzIl0sIm5hbWVzIjpbIkdPT0dMRV9NQVBTX0FQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiSU5TVEFHUkFNX0FQSV9UT0tFTiIsIlRXSVRURVJfQ09OU1VNRVJfS0VZIiwiVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQiLCJUV0lUVEVSX1RPS0VOIiwiVFdJVFRFUl9UT0tFTl9TRUNSRVQiLCJXRUFUSEVSX1VOREVSR1JPVU5EX0FQSV9UT0tFTiIsIkxvYWRpbmciLCJyb3V0ZXMiLCJwYXRoIiwiZXhhY3QiLCJnZXRHZW9sb2NhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJsb2NhdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZGlzcGF0Y2giLCJzZXRHZW9sb2NhdGlvbiIsInRpbWVvdXQiLCJTRVRfR0VPTE9DQVRJT04iLCJ0eXBlIiwiU0VUX0dFT0xPQ0FUSU9OX1VOQVZBSUxBQkxFIiwic2V0R2VvbG9jYXRpb25VbmF2YWlsYWJsZSIsImdldFdlYXRoZXIiLCJ3ZWF0aGVyRW5kcG9pbnQiLCJ3ZWF0aGVyRGF0YSIsImRhdGEiLCJjdXJyZW50X29ic2VydmF0aW9uIiwiZGlzcGxheV9sb2NhdGlvbiIsImNpdHkiLCJzdGF0ZSIsImNvdW50cnkiLCJ3ZWF0aGVyIiwidGVtcF9mIiwidGVtcF9jIiwiaWNvbiIsImZvcmVjYXN0X3VybCIsInNldFdlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwiU0VUX1dFQVRIRVIiLCJnZXRQaG90b3MiLCJwaG90b3NFbmRwb2ludCIsInBob3Rvc0RhdGEiLCJwaG90b3MiLCJjb2xsZWN0aW9uIiwicGhvdG8iLCJwdXNoIiwic2V0UGhvdG9zIiwiU0VUX1BIT1RPUyIsImdldENoYXR0ZXIiLCJjaGF0dGVyRW5kcG9pbnQiLCJjaGF0dGVyRGF0YSIsInN0YXR1c2VzIiwic2V0Q2hhdHRlciIsIlNFVF9DSEFUVEVSIiwiY2hhdHRlciIsInBvcnQiLCJQT1JUIiwiYXBwIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsInNjaGVtYSIsImhlYWRlcnMiLCJOT0RFX0VOViIsInJlZGlyZWN0IiwiaG9zdCIsInVybCIsInN0YXRpYyIsInJlcXVpcmUiLCJnZXQiLCJzdG9yZSIsInByb21pc2VzIiwibWFwIiwicm91dGUiLCJsb2FkRGF0YSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJhbGwiLCJjb250ZXh0IiwiY29udGVudCIsIm5vdEZvdW5kIiwic3RhdHVzIiwic2VuZCIsImxpc3RlbiIsIkFwcCIsImNvbXBvbmVudCIsIkhlYWRlciIsIkZvb3RlciIsIkxvY2F0aW9uV2l0aEdlb2xvY2F0aW9uIiwiV2VhdGhlcldpdGhXZWF0aGVyIiwiUGhvdG9zV2l0aFBob3RvcyIsIkNoYXR0ZXJXaXRoQ2hhdHRlciIsIlZpZGVvc1dpdGhWaWRlb3MiLCJGZWVkUGFnZSIsInVuYXZhaWxhYmxlIiwicHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImhlaWdodCIsInJlbmRlckNvbnRlbnQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJ3aXRoR2VvbG9jYXRpb24iLCJXcmFwcGVkQ29tcG9uZW50IiwiSE9DIiwicmVhZHkiLCJ3aXRoV2VhdGhlciIsIndpdGhQaG90b3MiLCJ3aXRoQ2hhdHRlcnMiLCJMb2NhdGlvbiIsImxuZyIsImxhdCIsImJhY2tncm91bmRDb2xvciIsImNsaWNrYWJsZUljb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsImRyYWdnYWJsZSIsImZ1bGxzY3JlZW5Db250cm9sIiwiZ2VzdHVyZUhhbmRsaW5nIiwia2V5Ym9hcmRTaG9ydGN1dHMiLCJtYXBUeXBlQ29udHJvbCIsIm1heFpvb20iLCJtaW5ab29tIiwicGFuQ29udHJvbCIsInJvdGF0ZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzY3JvbGx3aGVlbCIsInN0cmVldFZpZXdDb250cm9sIiwic3R5bGVzIiwiem9vbUNvbnRyb2wiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsInZpc2liaWxpdHkiLCJodWUiLCJXZWF0aGVyIiwic2hvd0ZhcmVuaGVpdCIsImhhbmRsZVRlbXBlcmF0dXJlVG9nZ2xlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXRlIiwiUGhvdG9zIiwicmVuZGVyUGhvdG9zIiwiaWQiLCJhbHQiLCJjYXB0aW9uIiwidGV4dCIsImltYWdlIiwiaW1hZ2VzIiwic3RhbmRhcmRfcmVzb2x1dGlvbiIsImxpa2VzIiwibGluayIsInVzZXJuYW1lIiwidXNlciIsImJhY2tncm91bmRJbWFnZSIsIndpZHRoIiwiQ2hhdHRlciIsInJlbmRlckNoYXR0ZXIiLCJyZXR3ZWV0ZWRfc3RhdHVzIiwic2NyZWVuX25hbWUiLCJfX2h0bWwiLCJnZXRUd2l0dGVyVXNlclVybCIsInNldHVwVHdlZXRUZXh0IiwiZW50aXRpZXMiLCJ0d2VldCIsInRvUmVwbGFjZSIsImZvckVhY2giLCJ2YWx1ZSIsImtleSIsImVhY2giLCJzdGFydCIsImluZGljZXMiLCJlbmQiLCJyZXBsYWNlIiwiZXhwYW5kZWRfdXJsIiwiZGlzcGxheV91cmwiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJyIiwiayIsInN1YnN0cmluZyIsIlZpZGVvcyIsIkFib3V0UGFnZSIsIk5vdEZvdW5kUGFnZSIsImh0bWwiLCJoZWxtZXQiLCJyZW5kZXJTdGF0aWMiLCJ0aXRsZSIsInRvU3RyaW5nIiwibWV0YSIsImdldFN0YXRlIiwiZ2VvbG9jYXRpb25SZWR1Y2VyRGVmYXVsdFN0YXRlIiwiYWN0aW9uIiwid2VhdGhlclJlZHVjZXJEZWZhdWx0U3RhdGUiLCJwaG90b1JlZHVjZXJEZWZhdWx0U3RhdGUiLCJjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSIsInR3aXR0ZXJTZWFyY2hDbGllbnQiLCJTZWFyY2hDbGllbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyYW1zIiwic2VhcmNoIiwicSIsImdlb2NvZGUiLCJsYW5nIiwiY291bnQiLCJlcnJvciIsInJlc3VsdCIsIlVuYXZhaWxhYmxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0M7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7Ozs7a0JDQWU7QUFDYkEs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SXdCLElBQUosQ0FBU2tJLE1BQVQ7QUFDRDtBQUNGLGVBVEg7O0FBRjJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E3SixNQUFJYSxHQUFKLENBQVEsUUFBUixFQUFrQixVQUFDWCxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM5QkEsUUFBSUssUUFBSixDQUFhLEdBQWI7QUFDRCxHQUZEO0FBR0QsQ0FsQkQsQzs7Ozs7O0FDWEEseUM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBRUEsSUFBTXNKLGNBQWMsU0FBZEEsV0FBYztBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFTLFdBQVUsNERBQW5CO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsZ0JBQWQ7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFGRjtBQURGLEdBRGtCO0FBQUEsQ0FBcEI7O2tCQVdlQSxXIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNTUyZWMzYjI0OWEzZmM0MjE1NiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBHT09HTEVfTUFQU19BUElfS0VZOiBwcm9jZXNzLmVudi5HT09HTEVfTUFQU19BUElfS0VZLFxuICBJTlNUQUdSQU1fQVBJX1RPS0VOOiBwcm9jZXNzLmVudi5JTlNUQUdSQU1fQVBJX1RPS0VOLFxuICBUV0lUVEVSX0NPTlNVTUVSX0tFWTogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DT05TVU1FUl9LRVksXG4gIFRXSVRURVJfQ09OU1VNRVJfU0VDUkVUOiBwcm9jZXNzLmVudi5UV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCxcbiAgVFdJVFRFUl9UT0tFTjogcHJvY2Vzcy5lbnYuVFdJVFRFUl9UT0tFTixcbiAgVFdJVFRFUl9UT0tFTl9TRUNSRVQ6IHByb2Nlc3MuZW52LlRXSVRURVJfVE9LRU5fU0VDUkVULFxuICBXRUFUSEVSX1VOREVSR1JPVU5EX0FQSV9UT0tFTjogcHJvY2Vzcy5lbnYuV0VBVEhFUl9VTkRFUkdST1VORF9BUElfVE9LRU5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvY29uZmlnLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvYWRpbmcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgRmVlZFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL0ZlZWRQYWdlXCI7XG5pbXBvcnQgQWJvdXRQYWdlIGZyb20gXCIuLi9wYWdlcy9BYm91dFBhZ2VcIjtcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL05vdEZvdW5kUGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICAuLi5BcHAsXG4gICAgcm91dGVzOiBbXG4gICAgICB7XG4gICAgICAgIC4uLkZlZWRQYWdlLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgZXhhY3Q6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC4uLkFib3V0UGFnZSxcbiAgICAgICAgcGF0aDogXCIvYWJvdXRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLi4uTm90Rm91bmRQYWdlXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtaGVsbWV0XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgZ2V0R2VvbG9jYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgICAgbG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBsb2NhdGlvbi5jb29yZHM7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRHZW9sb2NhdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlKSk7XG4gICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uLmNvb3Jkcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoXCJHZW9sb2NhdGlvbiBmYWlsZWRcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChcIkdlb2xvY2F0aW9uIHNlcnZpY2VzIHVuYXZhaWxhYmxlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNFVF9HRU9MT0NBVElPTiA9IFwiU0VUX0dFT0xPQ0FUSU9OXCI7XG5leHBvcnQgY29uc3Qgc2V0R2VvbG9jYXRpb24gPSAobGF0aXR1ZGUgPSBmYWxzZSwgbG9uZ2l0dWRlID0gZmFsc2UpID0+ICh7XG4gIHR5cGU6IFNFVF9HRU9MT0NBVElPTixcbiAgbGF0aXR1ZGUsXG4gIGxvbmdpdHVkZVxufSk7XG5cbmV4cG9ydCBjb25zdCBTRVRfR0VPTE9DQVRJT05fVU5BVkFJTEFCTEUgPSBcIlNFVF9HRU9MT0NBVElPTl9VTkFWQUlMQUJMRVwiO1xuZXhwb3J0IGNvbnN0IHNldEdlb2xvY2F0aW9uVW5hdmFpbGFibGUgPSAoKSA9PiAoe1xuICB0eXBlOiBTRVRfR0VPTE9DQVRJT05fVU5BVkFJTEFCTEVcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9hY3Rpb25zL2dlb2xvY2F0aW9uLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJFbmRwb2ludCA9IGBodHRwczovL2FwaS53dW5kZXJncm91bmQuY29tL2FwaS8ke1xuICAgIGNvbmZpZy5XRUFUSEVSX1VOREVSR1JPVU5EX0FQSV9UT0tFTlxuICB9L2NvbmRpdGlvbnMvcS8ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX0uanNvbmA7XG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXhpb3Mod2VhdGhlckVuZHBvaW50KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VycmVudF9vYnNlcnZhdGlvbjogeyBkaXNwbGF5X2xvY2F0aW9uOiB7IGNpdHksIHN0YXRlLCBjb3VudHJ5IH0sIHdlYXRoZXIsIHRlbXBfZiwgdGVtcF9jLCBpY29uLCBmb3JlY2FzdF91cmwgfVxuICAgICAgfSA9IHdlYXRoZXJEYXRhLmRhdGE7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goXG4gICAgICAgIHNldFdlYXRoZXIoe1xuICAgICAgICAgIGNpdHksXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgY291bnRyeSxcbiAgICAgICAgICB3ZWF0aGVyLFxuICAgICAgICAgIHRlbXBfZixcbiAgICAgICAgICB0ZW1wX2MsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBmb3JlY2FzdF91cmxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGFcIiwgZSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNFVF9XRUFUSEVSID0gXCJTRVRfV0VBVEhFUlwiO1xuXG5leHBvcnQgY29uc3Qgc2V0V2VhdGhlciA9ICh7XG4gIGNpdHkgPSBcIlwiLFxuICBzdGF0ZSA9IFwiXCIsXG4gIGNvdW50cnkgPSBcIlwiLFxuICB3ZWF0aGVyID0gXCJcIixcbiAgdGVtcF9mID0gXCJcIixcbiAgdGVtcF9jID0gXCJcIixcbiAgaWNvbiA9IFwiXCIsXG4gIGZvcmVjYXN0X3VybCA9IFwiXCJcbn0pID0+ICh7XG4gIHR5cGU6IFNFVF9XRUFUSEVSLFxuICBjaXR5LFxuICBzdGF0ZSxcbiAgY291bnRyeSxcbiAgd2VhdGhlcixcbiAgdGVtcF9mLFxuICB0ZW1wX2MsXG4gIGljb24sXG4gIGZvcmVjYXN0X3VybFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvd2VhdGhlci5qcyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IGdldFBob3RvcyA9IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gIGNvbnN0IHBob3Rvc0VuZHBvaW50ID0gYGh0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvbWVkaWEvc2VhcmNoP2FjY2Vzc190b2tlbj0ke1xuICAgIGNvbmZpZy5JTlNUQUdSQU1fQVBJX1RPS0VOXG4gIH0mbGF0PSR7bGF0aXR1ZGV9JmxuZz0ke2xvbmdpdHVkZX0mZGlzdGFuY2U9NTAwMCZjb3VudD02YDtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGhvdG9zRGF0YSA9IGF3YWl0IGF4aW9zKHBob3Rvc0VuZHBvaW50KTtcbiAgICAgIGNvbnN0IHsgZGF0YTogcGhvdG9zIH0gPSBwaG90b3NEYXRhLmRhdGE7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uID0gW107XG4gICAgICBmb3IgKGNvbnN0IHBob3RvIGluIHBob3Rvcykge1xuICAgICAgICBjb2xsZWN0aW9uLnB1c2gocGhvdG9zW3Bob3RvXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlzcGF0Y2goXG4gICAgICAgIHNldFBob3Rvcyh7XG4gICAgICAgICAgY29sbGVjdGlvblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHBob3RvcyBkYXRhXCIsIGUpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBTRVRfUEhPVE9TID0gXCJTRVRfUEhPVE9TXCI7XG5leHBvcnQgY29uc3Qgc2V0UGhvdG9zID0gcGhvdG9zID0+ICh7XG4gIHR5cGU6IFNFVF9QSE9UT1MsXG4gIHBob3Rvc1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvcGhvdG9zLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hhdHRlciA9IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gIGNvbnN0IGNoYXR0ZXJFbmRwb2ludCA9IGAvYXBpL2NoYXR0ZXIvJHtsYXRpdHVkZX0vJHtsb25naXR1ZGV9YDtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2hhdHRlckRhdGEgPSBhd2FpdCBheGlvcyhjaGF0dGVyRW5kcG9pbnQpO1xuICAgICAgY29uc3QgeyBzdGF0dXNlczogY29sbGVjdGlvbiB9ID0gY2hhdHRlckRhdGEuZGF0YTtcbiAgICAgIHJldHVybiBkaXNwYXRjaChcbiAgICAgICAgc2V0Q2hhdHRlcih7XG4gICAgICAgICAgY29sbGVjdGlvblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIGNoYXR0ZXIgZGF0YVwiLCBlKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgU0VUX0NIQVRURVIgPSBcIlNFVF9DSEFUVEVSXCI7XG5leHBvcnQgY29uc3Qgc2V0Q2hhdHRlciA9IGNoYXR0ZXIgPT4gKHtcbiAgdHlwZTogU0VUX0NIQVRURVIsXG4gIGNoYXR0ZXJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9hY3Rpb25zL2NoYXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCBwcm94eSBmcm9tIFwiZXhwcmVzcy1odHRwLXByb3h5XCI7XG5pbXBvcnQgUm91dGVzIGZyb20gXCIuLi8uLi9jbGllbnQvc3JjL3JvdXRlcy9BcHBSb3V0ZXNcIjtcbmltcG9ydCByZW5kZXJlciBmcm9tIFwiLi4vaGVscGVycy9yZW5kZXJlclwiO1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gXCIuLi9oZWxwZXJzL2NyZWF0ZVN0b3JlXCI7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgdmFyIHNjaGVtYSA9IHJlcS5oZWFkZXJzW1wieC1mb3J3YXJkZWQtcHJvdG9cIl07XG4gIGlmIChzY2hlbWEgPT09IFwiaHR0cHNcIiB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHJldHVybiBuZXh0KCk7XG4gIHJlcy5yZWRpcmVjdChcImh0dHBzOi8vXCIgKyByZXEuaGVhZGVycy5ob3N0ICsgcmVxLnVybCk7XG59KTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcImNsaWVudC9wdWJsaWNcIikpO1xuXG5yZXF1aXJlKFwiLi4vcm91dGVzL2NoYXR0ZXJcIikoYXBwKTtcblxuYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVxKTtcblxuICBjb25zdCBwcm9taXNlcyA9IG1hdGNoUm91dGVzKFJvdXRlcywgcmVxLnBhdGgpXG4gICAgLm1hcCgoeyByb3V0ZSB9KSA9PiB7XG4gICAgICByZXR1cm4gcm91dGUubG9hZERhdGEgPyByb3V0ZS5sb2FkRGF0YShzdG9yZSkgOiBudWxsO1xuICAgIH0pXG4gICAgLm1hcChwcm9taXNlID0+IHtcbiAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUpLmNhdGNoKHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHt9O1xuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJlcihyZXEsIHN0b3JlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZXh0LnVybCkge1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgzMDEsIGNvbnRleHQudXJsKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5ub3RGb3VuZCkge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgIH1cblxuICAgIHJlcy5zZW5kKGNvbnRlbnQpO1xuICB9KTtcbn0pO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJUaGUgbWFnaWMgaXMgaGFwcGVuaW5nIG9uIHBvcnRcIiwgcG9ydCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWh0dHAtcHJveHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLWh0dHAtcHJveHlcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBBcHAgPSAoeyByb3V0ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5HZW9wdWxzZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiR2VvcHVsc2VcIiAvPlxuICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAge3JlbmRlclJvdXRlcyhyb3V0ZS5yb3V0ZXMpfVxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogQXBwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxoZWFkZXIgY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1iZy1za3ktZGFyayBoZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudFwiPlxuICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby1nZW9wdWxzZS5zdmdcIiBhbHQ9XCJHZW9wdWxzZSBsb2dvXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+R2VvcHVsc2U8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdmlnYXRpb25cIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua1wiIGFjdGl2ZUNsYXNzTmFtZT1cImhlYWRlcl9fbGluay0tYWN0aXZlXCIgZXhhY3Q+XG4gICAgICAgICAgICAgICAgRmVlZFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua1wiIGFjdGl2ZUNsYXNzTmFtZT1cImhlYWRlcl9fbGluay0tYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLWJnLWVhcnRoLWRhcmtlc3QgZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPHA+XG4gICAgICAgIENyYWZ0ZWQgd2l0aCBsb3ZlIC97XCIgXCJ9XG4gICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVzZXJpb3VzLmNvbVwiIGNsYXNzTmFtZT1cImZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgIENvZGUgU2VyaW91c1xuICAgICAgICA8L2E+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCB7IGdldEdlb2xvY2F0aW9uLCBzZXRHZW9sb2NhdGlvblVuYXZhaWxhYmxlIH0gZnJvbSBcIi4uL2FjdGlvbnMvZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi4vYWN0aW9ucy93ZWF0aGVyXCI7XG5pbXBvcnQgeyBnZXRQaG90b3MgfSBmcm9tIFwiLi4vYWN0aW9ucy9waG90b3NcIjtcbmltcG9ydCB7IGdldENoYXR0ZXIgfSBmcm9tIFwiLi4vYWN0aW9ucy9jaGF0dGVyXCI7XG5pbXBvcnQgd2l0aEdlb2xvY2F0aW9uIGZyb20gXCIuLi9ob2NzL3dpdGhHZW9sb2NhdGlvblwiO1xuaW1wb3J0IHdpdGhXZWF0aGVyIGZyb20gXCIuLi9ob2NzL3dpdGhXZWF0aGVyXCI7XG5pbXBvcnQgd2l0aFBob3RvcyBmcm9tIFwiLi4vaG9jcy93aXRoUGhvdG9zXCI7XG5pbXBvcnQgd2l0aENoYXR0ZXIgZnJvbSBcIi4uL2hvY3Mvd2l0aENoYXR0ZXJcIjtcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2NhdGlvblwiO1xuaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2VhdGhlclwiO1xuaW1wb3J0IFBob3RvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9QaG90b3NcIjtcbmltcG9ydCBDaGF0dGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXR0ZXJcIjtcbmltcG9ydCBWaWRlb3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlkZW9zXCI7XG5pbXBvcnQgVW5hdmFpbGFibGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVW5hdmFpbGFibGVcIjtcblxuY29uc3QgTG9jYXRpb25XaXRoR2VvbG9jYXRpb24gPSB3aXRoR2VvbG9jYXRpb24oTG9jYXRpb24pO1xuY29uc3QgV2VhdGhlcldpdGhXZWF0aGVyID0gd2l0aEdlb2xvY2F0aW9uKHdpdGhXZWF0aGVyKFdlYXRoZXIpKTtcbmNvbnN0IFBob3Rvc1dpdGhQaG90b3MgPSB3aXRoR2VvbG9jYXRpb24od2l0aFBob3RvcyhQaG90b3MpKTtcbmNvbnN0IENoYXR0ZXJXaXRoQ2hhdHRlciA9IHdpdGhHZW9sb2NhdGlvbih3aXRoQ2hhdHRlcihDaGF0dGVyKSk7XG5jb25zdCBWaWRlb3NXaXRoVmlkZW9zID0gd2l0aEdlb2xvY2F0aW9uKFZpZGVvcyk7XG5cbmNsYXNzIEZlZWRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdW5hdmFpbGFibGU6IGZhbHNlXG4gIH07XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHNcbiAgICAgIC5nZXRHZW9sb2NhdGlvbigpXG4gICAgICAudGhlbihsb2NhdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRQaG90b3MobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q2hhdHRlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNldEdlb2xvY2F0aW9uVW5hdmFpbGFibGUoKTtcbiAgICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBnZW9sb2NhdGlvbiB9ID0gbmV4dFByb3BzO1xuICAgIGlmIChnZW9sb2NhdGlvbi51bmF2YWlsYWJsZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICB1bmF2YWlsYWJsZTogdHJ1ZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuICByZW5kZXJDb250ZW50KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxMb2NhdGlvbldpdGhHZW9sb2NhdGlvblxuICAgICAgICAgIGdvb2dsZU1hcFVSTD17YGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHtcbiAgICAgICAgICAgIGNvbmZpZy5HT09HTEVfTUFQU19BUElfS0VZXG4gICAgICAgICAgfSZ2PTMuZXhwJmxpYnJhcmllcz1nZW9tZXRyeSxwbGFjZXNgfVxuICAgICAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgNDAwcHhgIH19IC8+fVxuICAgICAgICAgIG1hcEVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX0gLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxXZWF0aGVyV2l0aFdlYXRoZXIgLz5cbiAgICAgICAgPFBob3Rvc1dpdGhQaG90b3MgLz5cbiAgICAgICAgPENoYXR0ZXJXaXRoQ2hhdHRlciAvPlxuICAgICAgICA8VmlkZW9zV2l0aFZpZGVvcyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1mZWVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+eyF0aGlzLnN0YXRlLnVuYXZhaWxhYmxlID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8VW5hdmFpbGFibGUgLz59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGdlb2xvY2F0aW9uOiBzdGF0ZS5nZW9sb2NhdGlvblxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldEdlb2xvY2F0aW9uOiAoKSA9PiBkaXNwYXRjaChnZXRHZW9sb2NhdGlvbigpKSxcbiAgc2V0R2VvbG9jYXRpb25VbmF2YWlsYWJsZTogKCkgPT4gZGlzcGF0Y2goc2V0R2VvbG9jYXRpb25VbmF2YWlsYWJsZSgpKSxcbiAgZ2V0V2VhdGhlcjogKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IGRpc3BhdGNoKGdldFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSkpLFxuICBnZXRQaG90b3M6IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiBkaXNwYXRjaChnZXRQaG90b3MobGF0aXR1ZGUsIGxvbmdpdHVkZSkpLFxuICBnZXRDaGF0dGVyOiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4gZGlzcGF0Y2goZ2V0Q2hhdHRlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRmVlZFBhZ2UpXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9wYWdlcy9GZWVkUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZnVuY3Rpb24gd2l0aEdlb2xvY2F0aW9uKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgIHVuYXZhaWxhYmxlOiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZ2VvbG9jYXRpb24gfSA9IG5leHRQcm9wcztcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkeSAmJiBnZW9sb2NhdGlvbi51bmF2YWlsYWJsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgdW5hdmFpbGFibGU6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJlYWR5ICYmIGdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgICAgcmVhZHk6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlYWR5IHx8IHRoaXMuc3RhdGUudW5hdmFpbGFibGU7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnVuYXZhaWxhYmxlKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24gfSkgPT4gKHtcbiAgICBnZW9sb2NhdGlvblxuICB9KTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhPQyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhHZW9sb2NhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaG9jcy93aXRoR2VvbG9jYXRpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIHdpdGhXZWF0aGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgd2VhdGhlciB9ID0gbmV4dFByb3BzO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJlYWR5ICYmIHdlYXRoZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgIHJlYWR5OiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlYWR5O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHJlYWR5PXt0aGlzLnN0YXRlLnJlYWR5fSAvPjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB3ZWF0aGVyIH0pID0+ICh7XG4gICAgd2VhdGhlclxuICB9KTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhPQyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhXZWF0aGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9ob2NzL3dpdGhXZWF0aGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiB3aXRoUGhvdG9zKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgcGhvdG9zIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmVhZHkgJiYgcGhvdG9zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcGhvdG9zIH0pID0+ICh7XG4gICAgcGhvdG9zXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSE9DKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBob3RvcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaG9jcy93aXRoUGhvdG9zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiB3aXRoQ2hhdHRlcnMoV3JhcHBlZENvbXBvbmVudCkge1xuICBjbGFzcyBIT0MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBjaGF0dGVyIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmVhZHkgJiYgY2hhdHRlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgcmVhZHk6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucmVhZHk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gcmVhZHk9e3RoaXMuc3RhdGUucmVhZHl9IC8+O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNoYXR0ZXIgfSkgPT4gKHtcbiAgICBjaGF0dGVyXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSE9DKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENoYXR0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9ob2NzL3dpdGhDaGF0dGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFNjcmlwdGpzLCB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcbmltcG9ydCBzZXR1cE1hcCBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL3NldHVwTWFwXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNsYXNzIExvY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvbmdpdHVkZTogbG5nLCBsYXRpdHVkZTogbGF0IH0gPSB0aGlzLnByb3BzLmdlb2xvY2F0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPEdvb2dsZU1hcFxuICAgICAgICAgIGRlZmF1bHRab29tPXsxNH1cbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdCwgbG5nIH19XG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjOTBhY2YzXCIsXG4gICAgICAgICAgICBjbGlja2FibGVJY29uczogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogXCJub25lXCIsXG4gICAgICAgICAgICBrZXlib2FyZFNob3J0Y3V0czogZmFsc2UsXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBtYXhab29tOiAxNCxcbiAgICAgICAgICAgIG1pblpvb206IDE0LFxuICAgICAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICByb3RhdGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzdHlsZXM6IHNldHVwTWFwLFxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1iZy1za3ktbGlnaHQgbG9jYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbl9fY29udGVudFwiPnt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn08L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JpcHRqcyh3aXRoR29vZ2xlTWFwKExvY2F0aW9uKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9jYXRpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiBcIiM0ZTVjNmFcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLmxvY2FsaXR5XCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiA3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDE5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJsYW5kc2NhcGVcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC0xMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogMTAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IFwiI2YzZjdmYVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtMTAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDEwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNiYmMwYzRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDMxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHNcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjYmJjMGM0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC05M1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAzMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsc1wiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNiYmMwYzRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IC0yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQubG9jYWxcIixcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNlOWViZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IC04XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXRcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjZTllYmVkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDY5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTc4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDY3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IFwiI2RkZTdmMlwiXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL3NldHVwTWFwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jbGFzcyBXZWF0aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvd0ZhcmVuaGVpdDogdHJ1ZVxuICB9O1xuICBoYW5kbGVUZW1wZXJhdHVyZVRvZ2dsZSA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd0ZhcmVuaGVpdDogIXByZXZTdGF0ZS5zaG93RmFyZW5oZWl0XG4gICAgfSkpO1xuICB9O1xuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2l0eSwgc3RhdGUsIGNvdW50cnksIHdlYXRoZXIsIHRlbXBfZiwgdGVtcF9jLCBpY29uLCBmb3JlY2FzdF91cmwgfSA9IHRoaXMucHJvcHMud2VhdGhlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B3ZWF0aGVyX190ZW1wZXJhdHVyZSAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RmFyZW5oZWl0ID8gXCJ3ZWF0aGVyX190ZW1wZXJhdHVyZS0tZlwiIDogXCJ3ZWF0aGVyX190ZW1wZXJhdHVyZS0tY1wiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVUZW1wZXJhdHVyZVRvZ2dsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXAgdGVtcC0tZlwiPnt0ZW1wX2Z9JmRlZztGPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcCB0ZW1wLS1jXCI+e3RlbXBfY30mZGVnO0M8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcl9fZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMz57d2VhdGhlcn08L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2NpdHl9LCB7c3RhdGV9IC8ge2NvdW50cnl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWxpZ2h0IHdlYXRoZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+V2VhdGhlcjwvaDE+XG5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cud3VuZGVyZ3JvdW5kLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICBQb3dlcmVkIGJ5IFdlYXRoZXIgVW5kZXJncm91bmRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL1dlYXRoZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNsYXNzIFBob3RvcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlclBob3RvcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5wcm9wcy5waG90b3MuY29sbGVjdGlvbjtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAocGhvdG8gPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZCxcbiAgICAgICAgY2FwdGlvbjogeyB0ZXh0OiBhbHQgfSxcbiAgICAgICAgaW1hZ2VzOiB7IHN0YW5kYXJkX3Jlc29sdXRpb246IGltYWdlIH0sXG4gICAgICAgIGxpa2VzLFxuICAgICAgICBsaW5rLFxuICAgICAgICB1c2VyOiB7IHVzZXJuYW1lIH1cbiAgICAgIH0gPSBwaG90bztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9XCJwaG90b3NfX3Bob3RvXCI+XG4gICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPXtsaW5rfSB0aXRsZT17YWx0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX19pbWFnZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlLnVybH0pYCB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gd2lkdGg9e2ltYWdlLndpZHRofSBoZWlnaHQ9e2ltYWdlLmhlaWdodH0gYWx0PXthbHR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX191c2VybmFtZVwiPnt1c2VybmFtZX08L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBob3Rvc19fZ3JpZFwiPnt0aGlzLnJlbmRlclBob3RvcygpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1tZWRpdW0gcGhvdG9zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXIgY29udGVudC1jb250YWluZXItLWdyaWQtc3BhY2luZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5QaG90b3M8L2gxPlxuXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkeSA/IHRoaXMucmVuZGVyQ29udGVudCgpIDogPExvYWRpbmcgLz59XG5cbiAgICAgICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgY2xhc3NOYW1lPVwic2VjdGlvbl9fYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgUG93ZXJlZCBieSBJbnN0YWdyYW1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUGhvdG9zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0VHdpdHRlclVzZXJVcmwsIHNldHVwVHdlZXRUZXh0IH0gZnJvbSBcIi4uL2hlbHBlcnMvY2hhdHRlclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jbGFzcyBDaGF0dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyQ2hhdHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5wcm9wcy5jaGF0dGVyLmNvbGxlY3Rpb247XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ubWFwKHN0YXR1cyA9PiB7XG4gICAgICBpZiAoc3RhdHVzLnJldHdlZXRlZF9zdGF0dXMpIHtcbiAgICAgICAgc3RhdHVzID0gc3RhdHVzLnJldHdlZXRlZF9zdGF0dXM7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGlkLCB1c2VyOiB7IHNjcmVlbl9uYW1lIH0gfSA9IHN0YXR1cztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT1cImNoYXR0ZXJfX3N0YXR1c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdHRlcl9fdGV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2V0dXBUd2VldFRleHQoc3RhdHVzKSB9fSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzX191c2VybmFtZVwiPlxuICAgICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPXtnZXRUd2l0dGVyVXNlclVybChzY3JlZW5fbmFtZSl9IHRpdGxlPXtgRm9sbG93ICR7c2NyZWVuX25hbWV9IG9uIFR3aXR0ZXJgfT5cbiAgICAgICAgICAgICAgQHtzY3JlZW5fbmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdHRlcl9fbGlzdFwiPnt0aGlzLnJlbmRlckNoYXR0ZXIoKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFyayBjaGF0dGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXIgY29udGVudC1jb250YWluZXItLWdyaWQtc3BhY2luZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdHRlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+Q2hhdHRlcjwvaDE+XG5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vXCIgY2xhc3NOYW1lPVwic2VjdGlvbl9fYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgUG93ZXJlZCBieSBUd2l0dGVyXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9DaGF0dGVyLmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0VHdpdHRlclVzZXJVcmwgPSBzY3JlZW5fbmFtZSA9PiB7XG4gIHJldHVybiBgaHR0cHM6Ly93d3cudHdpdHRlci5jb20vJHtzY3JlZW5fbmFtZX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwVHdlZXRUZXh0ID0gdHdlZXQgPT4ge1xuICBjb25zdCBlbnRpdGllcyA9IHR3ZWV0LmVudGl0aWVzO1xuICBsZXQgdG9SZXBsYWNlID0gW107XG4gIGxldCB0ZXh0ID0gdHdlZXQudGV4dDtcblxuICBjb25zb2xlLmxvZyh0d2VldCk7XG5cbiAgXy5mb3JFYWNoKGVudGl0aWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIFwiaGFzaHRhZ3NcIjpcbiAgICAgICAgXy5lYWNoKGVudGl0aWVzW2tleV0sIGUgPT4ge1xuICAgICAgICAgIHRvUmVwbGFjZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBlLmluZGljZXNbMF0sXG4gICAgICAgICAgICBlbmQ6IGUuaW5kaWNlc1sxXSxcbiAgICAgICAgICAgIHJlcGxhY2U6IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vaGFzaHRhZy8ke2UudGV4dH0/c3JjPWhhc2hcIiB0YXJnZXQ9XCJfYmxhbmtcIj4jJHtlLnRleHR9PC9hPmBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInVybHNcIjpcbiAgICAgICAgXy5lYWNoKGVudGl0aWVzW2tleV0sIGUgPT4ge1xuICAgICAgICAgIHRvUmVwbGFjZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBlLmluZGljZXNbMF0sXG4gICAgICAgICAgICBlbmQ6IGUuaW5kaWNlc1sxXSxcbiAgICAgICAgICAgIHJlcGxhY2U6IGA8YSBocmVmPVwiJHtlLmV4cGFuZGVkX3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke2UuZGlzcGxheV91cmx9PC9hPmBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInVzZXJfbWVudGlvbnNcIjpcbiAgICAgICAgXy5lYWNoKGVudGl0aWVzW2tleV0sIGUgPT4ge1xuICAgICAgICAgIHRvUmVwbGFjZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBlLmluZGljZXNbMF0sXG4gICAgICAgICAgICBlbmQ6IGUuaW5kaWNlc1sxXSxcbiAgICAgICAgICAgIHJlcGxhY2U6IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vJHtlLnNjcmVlbl9uYW1lfVwiIHRhcmdldD1cIl9ibGFua1wiPkAke2Uuc2NyZWVuX25hbWV9PC9hPmBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRvUmVwbGFjZS5sZW5ndGgpIHtcbiAgICB0b1JlcGxhY2Uuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGIuc3RhcnQgLSBhLnN0YXJ0O1xuICAgIH0pO1xuICAgIF8uZWFjaCh0b1JlcGxhY2UsIChyLCBrKSA9PiB7XG4gICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgci5zdGFydCkgKyByLnJlcGxhY2UgKyB0ZXh0LnN1YnN0cmluZyhyLmVuZCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGV4dDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2hlbHBlcnMvY2hhdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNvbnN0IHJlbmRlckNvbnRlbnQgPSBwcm9wcyA9PiAoXG4gIDx1bD5cbiAgICA8bGk+TGF0OiB7cHJvcHMuZ2VvbG9jYXRpb24ubGF0aXR1ZGV9PC9saT5cbiAgICA8bGk+TG9uOiB7cHJvcHMuZ2VvbG9jYXRpb24ubG9uZ2l0dWRlfTwvbGk+XG4gIDwvdWw+XG4pO1xuXG5jb25zdCBWaWRlb3MgPSBwcm9wcyA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1kYXJrZXIgdmlkZW9zXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb3NfX2NvbnRlbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+VmlkZW9zPC9oMT5cblxuICAgICAgICB7cHJvcHMucmVhZHkgPyByZW5kZXJDb250ZW50KHByb3BzKSA6IDxMb2FkaW5nIC8+fVxuXG4gICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL1wiIGNsYXNzTmFtZT1cInNlY3Rpb25fX2F0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgUG93ZXJlZCBieSBZb3VUdWJlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVmlkZW9zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hYm91dFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctc2t5LWxpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5BYm91dDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgR2VvcHVsc2UgaXMgYSB0b29sIHRoYXQgYWxsb3dzIHlvdSB0byBzZWUgY29udGVudCBiYXNlZCBvbiB5b3VyIGxvY2F0aW9uIGluY2x1ZGluZyBhIEdvb2dsZSBNYXAgb2YgdGhlXG4gICAgICAgICAgICAgIGFyZWEsIHRoZSBsb2NhbCB3ZWF0aGVyIGZyb20gV2VhdGhlciBVbmRlcmdyb3VuZCwgcGhvdG9zIGZyb20gSW5zdGFncmFtLCB0d2VldHMgZnJvbSBUd2l0dGVyIGFuZCB2aWRlb3NcbiAgICAgICAgICAgICAgZnJvbSBZb3VUdWJlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1saWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+Um9hZG1hcDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8cD4oUm9hZG1hcCk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLW1lZGl1bVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+UHJpdmFjeTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8cD5ObyBkYXRhIGlzIHNhdmVkIG9uIG91ciBzZXJ2ZXJzIGFuZCBpcyBvbmx5IHJlcXVlc3RlZCBvbiBhbiBhcy1uZWVkZWQgYmFzaXMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1kYXJrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5UaGFua3M8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHA+KFBlb3BsZSk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWRhcmtlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+Q29udGFjdDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8cD4oSW5mbyk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBBYm91dFBhZ2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3BhZ2VzL0Fib3V0UGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTm90Rm91bmRQYWdlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utbm90LWZvdW5kXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1za3ktbGlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPldob29wcyE8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHA+U29tZXRoaW5nIGlzbid0IHF1aXRlIHJpZ2h0IGhlcmUsIHdlIHdlcmVuJ3QgYWJsZSB0byBmaW5kIHdoYXQgeW91IHdlcmUgbG9va2luZyBmb3IuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogTm90Rm91bmRQYWdlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9wYWdlcy9Ob3RGb3VuZFBhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IEFwcFJvdXRlcyBmcm9tIFwiLi4vLi4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHN0b3JlLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IGh0bWwgPSAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEucGF0aH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPntyZW5kZXJSb3V0ZXMoQXBwUm91dGVzKX08L2Rpdj5cbiAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG4gIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJUb1N0cmluZyhodG1sKTtcbiAgY29uc3QgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xuXG4gIHJldHVybiBgXG4gICAgPCFET0NUWVBFIGh0bWw+XG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XG5cbiAgICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cbiAgICAgICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxuXG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCI+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIj5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiPlxuICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzQzNTc4Y1wiPlxuXG4gICAgICAgIDwhLS0gaU9TIC0tPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiYmxhY2tcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkdlb3B1bHNlXCI+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIiBocmVmPVwiL2Fzc2V0cy9nZW9wdWxzZS1zcGxhc2gucG5nXCI+XG4gICAgICBcbiAgICAgICAgPCEtLSBPdGhlciAtLT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxpY2F0aW9uLW5hbWVcIiBjb250ZW50PVwiR2VvcHVsc2VcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM0MzU3OGNcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cImZvcm1hdC1kZXRlY3Rpb25cIiBjb250ZW50PVwidGVsZXBob25lPW5vXCI+XG4gICAgICBcbiAgICAgICAgPCEtLSBTb2NpYWwgLS0+XG4gICAgICAgIDxtZXRhIGl0ZW1wcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJHZW9wdWxzZVwiPlxuICAgICAgICA8bWV0YSBpdGVtcHJvcD1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBhIHB1bHNlIG9uIHRoZSBoYXBwZW5pbmdzIG5lYXJieVwiPlxuICAgICAgICA8bWV0YSBpdGVtcHJvcD1cImltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZ2VvcHVsc2UtYXBwLmhlcm9rdWFwcC5jb20vYXNzZXRzL2dlb3B1bHNlLWJhbm5lci5wbmdcIj5cbiAgICAgIFxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZ2VvcHVsc2UtYXBwLmhlcm9rdWFwcC5jb20vYXNzZXRzL2dlb3B1bHNlLWJhbm5lci5wbmdcIj5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCI+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYyOFwiPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkdlb3B1bHNlXCI+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2V0IGEgcHVsc2Ugb24gdGhlIGhhcHBlbmluZ3MgbmVhcmJ5XCI+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZ2VvcHVsc2UtYXBwLmhlcm9rdWFwcC5jb21cIj5cbiAgICAgIFxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiR2VvcHVsc2VcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2V0IGEgcHVsc2Ugb24gdGhlIGhhcHBlbmluZ3MgbmVhcmJ5XCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHNlcmlvdXNseXNlYW5cIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9nZW9wdWxzZS1hcHAuaGVyb2t1YXBwLmNvbS9hc3NldHMvZ2VvcHVsc2UtYmFubmVyLnBuZ1wiPlxuICAgICAgICBcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJidW5kbGUuY3NzXCIgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cbiAgICAgICAgPHNjcmlwdD53aW5kb3cuSU5JVElBTF9TVEFURSA9ICR7c2VyaWFsaXplKHN0b3JlLmdldFN0YXRlKCkpfTwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImJ1bmRsZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgYDtcblxuICByZXMuc2VuZChodG1sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvaGVscGVycy9yZW5kZXJlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIlxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuLi8uLi9jbGllbnQvc3JjL3JlZHVjZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9oZWxwZXJzL2NyZWF0ZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBnZW9sb2NhdGlvblJlZHVjZXIgZnJvbSBcIi4vZ2VvbG9jYXRpb25SZWR1Y2VyXCI7XG5pbXBvcnQgd2VhdGhlclJlZHVjZXIgZnJvbSBcIi4vd2VhdGhlclJlZHVjZXJcIjtcbmltcG9ydCBwaG90b3NSZWR1Y2VyIGZyb20gXCIuL3Bob3Rvc1JlZHVjZXJcIjtcbmltcG9ydCBjaGF0dGVyUmVkdWNlciBmcm9tIFwiLi9jaGF0dGVyUmVkdWNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBnZW9sb2NhdGlvbjogZ2VvbG9jYXRpb25SZWR1Y2VyLFxuICB3ZWF0aGVyOiB3ZWF0aGVyUmVkdWNlcixcbiAgcGhvdG9zOiBwaG90b3NSZWR1Y2VyLFxuICBjaGF0dGVyOiBjaGF0dGVyUmVkdWNlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgU0VUX0dFT0xPQ0FUSU9OLCBTRVRfR0VPTE9DQVRJT05fVU5BVkFJTEFCTEUgfSBmcm9tIFwiLi4vYWN0aW9ucy9nZW9sb2NhdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VvbG9jYXRpb25SZWR1Y2VyRGVmYXVsdFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGdlb2xvY2F0aW9uUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9HRU9MT0NBVElPTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhdGl0dWRlOiBhY3Rpb24ubGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZTogYWN0aW9uLmxvbmdpdHVkZVxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9HRU9MT0NBVElPTl9VTkFWQUlMQUJMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVuYXZhaWxhYmxlOiB0cnVlXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL2dlb2xvY2F0aW9uUmVkdWNlci5qcyIsImltcG9ydCB7IFNFVF9XRUFUSEVSIH0gZnJvbSBcIi4uL2FjdGlvbnMvd2VhdGhlclwiO1xuXG5leHBvcnQgY29uc3Qgd2VhdGhlclJlZHVjZXJEZWZhdWx0U3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gd2VhdGhlclJlZHVjZXJEZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfV0VBVEhFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNpdHk6IGFjdGlvbi5jaXR5LFxuICAgICAgICBzdGF0ZTogYWN0aW9uLnN0YXRlLFxuICAgICAgICBjb3VudHJ5OiBhY3Rpb24uY291bnRyeSxcbiAgICAgICAgd2VhdGhlcjogYWN0aW9uLndlYXRoZXIsXG4gICAgICAgIHRlbXBfZjogYWN0aW9uLnRlbXBfZixcbiAgICAgICAgdGVtcF9jOiBhY3Rpb24udGVtcF9jLFxuICAgICAgICBpY29uOiBhY3Rpb24uaWNvbixcbiAgICAgICAgZm9yZWNhc3RfdXJsOiBhY3Rpb24uZm9yZWNhc3RfdXJsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL3dlYXRoZXJSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX1BIT1RPUyB9IGZyb20gXCIuLi9hY3Rpb25zL3Bob3Rvc1wiO1xuXG5leHBvcnQgY29uc3QgcGhvdG9SZWR1Y2VyRGVmYXVsdFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHBob3RvUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9QSE9UT1M6XG4gICAgICByZXR1cm4gYWN0aW9uLnBob3RvcztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yZWR1Y2Vycy9waG90b3NSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX0NIQVRURVIgfSBmcm9tIFwiLi4vYWN0aW9ucy9jaGF0dGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9DSEFUVEVSOlxuICAgICAgcmV0dXJuIGFjdGlvbi5jaGF0dGVyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL2NoYXR0ZXJSZWR1Y2VyLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIm5vZGUtdHdpdHRlclwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jb25zdCB0d2l0dGVyU2VhcmNoQ2xpZW50ID0gbmV3IFR3aXR0ZXIuU2VhcmNoQ2xpZW50KFxuICBjb25maWcuVFdJVFRFUl9DT05TVU1FUl9LRVksXG4gIGNvbmZpZy5UV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCxcbiAgY29uZmlnLlRXSVRURVJfVE9LRU4sXG4gIGNvbmZpZy5UV0lUVEVSX1RPS0VOX1NFQ1JFVFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHAgPT4ge1xuICBhcHAuZ2V0KFwiL2FwaS9jaGF0dGVyLzpsYXRpdHVkZS86bG9uZ2l0dWRlXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcmVxLnBhcmFtcztcbiAgICB0d2l0dGVyU2VhcmNoQ2xpZW50LnNlYXJjaChcbiAgICAgIHsgcTogXCJcIiwgZ2VvY29kZTogYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfSw1a21gLCBsYW5nOiBcImVuXCIsIGNvdW50OiBcIjRcIiB9LFxuICAgICAgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeyBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzLnNlbmQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH0pO1xuICBhcHAuZ2V0KFwiL2FwaS8qXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5yZWRpcmVjdChcIi9cIik7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9yb3V0ZXMvY2hhdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdHdpdHRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtdHdpdHRlclwiXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFVuYXZhaWxhYmxlID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctc2t5LWxpZ2h0IHVuYXZhaWxhYmxlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+VW5hdmFpbGFibGU8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxwPkdlb2xvY2F0aW9uIGlzIHVuYXZhaWxhYmxlLiBDaGVjayB5b3VyIHNldHRpbmdzIHRvIHZlcmlmeSBhY2Nlc3Mgb3IgdHJ5IGFnYWluIGxhdGVyLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBVbmF2YWlsYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9VbmF2YWlsYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=