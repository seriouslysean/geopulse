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

var _AboutPage = __webpack_require__(35);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _NotFoundPage = __webpack_require__(36);

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

var _renderer = __webpack_require__(37);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(40);

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

__webpack_require__(47)(app);

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

var _Videos = __webpack_require__(34);

var _Videos2 = _interopRequireDefault(_Videos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationWithGeolocation = (0, _withGeolocation2.default)(_Location2.default);
var WeatherWithWeather = (0, _withWeather2.default)(_Weather2.default);
var PhotosWithPhotos = (0, _withPhotos2.default)(_Photos2.default);
var ChatterWithChatter = (0, _withChatter2.default)(_Chatter2.default);
var VideosWithVideos = (0, _withGeolocation2.default)(_Videos2.default);

var FeedPage = function (_React$Component) {
  _inherits(FeedPage, _React$Component);

  function FeedPage() {
    _classCallCheck(this, FeedPage);

    return _possibleConstructorReturn(this, (FeedPage.__proto__ || Object.getPrototypeOf(FeedPage)).apply(this, arguments));
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
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(_config2.default.GOOGLE_MAPS_API_KEY);
      return _react2.default.createElement(
        "div",
        { className: "page-feed" },
        _react2.default.createElement(
          "div",
          { className: "page-feed" },
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
        )
      );
    }
  }]);

  return FeedPage;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getGeolocation: function getGeolocation() {
      return dispatch((0, _geolocation.getGeolocation)());
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
  component: (0, _reactRedux.connect)(undefined, mapDispatchToProps)(FeedPage)
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
        ready: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HOC, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var geolocation = nextProps.geolocation;

        if (!this.state.ready && geolocation) {
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
        var geolocation = nextProps.geolocation,
            weather = nextProps.weather;

        if (!this.state.ready && geolocation && weather) {
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
    var geolocation = _ref2.geolocation,
        weather = _ref2.weather;
    return {
      geolocation: geolocation,
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
        var geolocation = nextProps.geolocation,
            photos = nextProps.photos;

        if (!this.state.ready && geolocation && photos) {
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
    var geolocation = _ref2.geolocation,
        photos = _ref2.photos;
    return {
      geolocation: geolocation,
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
        var geolocation = nextProps.geolocation,
            chatter = nextProps.chatter;

        if (!this.state.ready && geolocation && chatter) {
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
    var geolocation = _ref2.geolocation,
        chatter = _ref2.chatter;
    return {
      geolocation: geolocation,
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
        var entities = status.entities,
            favorite_count = status.favorite_count,
            id = status.id,
            retweet_count = status.retweet_count,
            text = status.text,
            screen_name = status.user.screen_name;

        return _react2.default.createElement(
          "li",
          { key: id, className: "chatter__status" },
          _react2.default.createElement(
            "div",
            { className: "chatter__text" },
            (0, _chatter.setupTweetText)(text, entities)
          ),
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
var getTwitterUserUrl = exports.getTwitterUserUrl = function getTwitterUserUrl(screen_name) {
  return "https://www.twitter.com/" + screen_name;
};

var setupTweetText = exports.setupTweetText = function setupTweetText(text, entities) {
  return text;
};

/***/ }),
/* 34 */
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
/* 35 */
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
  );
};

exports.default = {
  component: AboutPage
};

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

var NotFoundPage = function NotFoundPage() {
  return _react2.default.createElement(
    "div",
    { className: "page-not-found" },
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
  );
};

exports.default = {
  component: NotFoundPage
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

var _serializeJavascript = __webpack_require__(38);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _server = __webpack_require__(39);

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
/* 38 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _reduxThunk = __webpack_require__(41);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(42);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _geolocationReducer = __webpack_require__(43);

var _geolocationReducer2 = _interopRequireDefault(_geolocationReducer);

var _weatherReducer = __webpack_require__(44);

var _weatherReducer2 = _interopRequireDefault(_weatherReducer);

var _photosReducer = __webpack_require__(45);

var _photosReducer2 = _interopRequireDefault(_photosReducer);

var _chatterReducer = __webpack_require__(46);

var _chatterReducer2 = _interopRequireDefault(_chatterReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  geolocation: _geolocationReducer2.default,
  weather: _weatherReducer2.default,
  photos: _photosReducer2.default,
  chatter: _chatterReducer2.default
});

/***/ }),
/* 43 */
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
    default:
      return state;
  }
};

/***/ }),
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _nodeTwitter = __webpack_require__(48);

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
/* 48 */
/***/ (function(module, exports) {

module.exports = require("node-twitter");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2QzOTA1Njc2MDA2YTdlZDUwNWEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvY2hhdHRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wYWdlcy9GZWVkUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aEdlb2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvaG9jcy93aXRoV2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFBob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aENoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NldHVwTWFwLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9XZWF0aGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9QaG90b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oZWxwZXJzL2NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL0Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9nZW9sb2NhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy93ZWF0aGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlZHVjZXJzL3Bob3Rvc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9jaGF0dGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL2NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS10d2l0dGVyXCIiXSwibmFtZXMiOlsiR09PR0xFX01BUFNfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJJTlNUQUdSQU1fQVBJX1RPS0VOIiwiVFdJVFRFUl9DT05TVU1FUl9LRVkiLCJUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCIsIlRXSVRURVJfVE9LRU4iLCJUV0lUVEVSX1RPS0VOX1NFQ1JFVCIsIldFQVRIRVJfVU5ERVJHUk9VTkRfQVBJX1RPS0VOIiwiTG9hZGluZyIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImdldEdlb2xvY2F0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImxvY2F0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkaXNwYXRjaCIsInNldEdlb2xvY2F0aW9uIiwidGltZW91dCIsIlNFVF9HRU9MT0NBVElPTiIsInR5cGUiLCJnZXRXZWF0aGVyIiwid2VhdGhlckVuZHBvaW50Iiwid2VhdGhlckRhdGEiLCJkYXRhIiwiY3VycmVudF9vYnNlcnZhdGlvbiIsImRpc3BsYXlfbG9jYXRpb24iLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5Iiwid2VhdGhlciIsInRlbXBfZiIsInRlbXBfYyIsImljb24iLCJmb3JlY2FzdF91cmwiLCJzZXRXZWF0aGVyIiwiY29uc29sZSIsImxvZyIsIlNFVF9XRUFUSEVSIiwiZ2V0UGhvdG9zIiwicGhvdG9zRW5kcG9pbnQiLCJwaG90b3NEYXRhIiwicGhvdG9zIiwiY29sbGVjdGlvbiIsInBob3RvIiwicHVzaCIsInNldFBob3RvcyIsIlNFVF9QSE9UT1MiLCJnZXRDaGF0dGVyIiwiY2hhdHRlckVuZHBvaW50IiwiY2hhdHRlckRhdGEiLCJzdGF0dXNlcyIsInNldENoYXR0ZXIiLCJTRVRfQ0hBVFRFUiIsImNoYXR0ZXIiLCJwb3J0IiwiUE9SVCIsImFwcCIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJzY2hlbWEiLCJoZWFkZXJzIiwiTk9ERV9FTlYiLCJyZWRpcmVjdCIsImhvc3QiLCJ1cmwiLCJzdGF0aWMiLCJyZXF1aXJlIiwiZ2V0Iiwic3RvcmUiLCJwcm9taXNlcyIsIm1hcCIsInJvdXRlIiwibG9hZERhdGEiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwiYWxsIiwiY29udGV4dCIsImNvbnRlbnQiLCJub3RGb3VuZCIsInN0YXR1cyIsInNlbmQiLCJsaXN0ZW4iLCJBcHAiLCJjb21wb25lbnQiLCJIZWFkZXIiLCJGb290ZXIiLCJMb2NhdGlvbldpdGhHZW9sb2NhdGlvbiIsIldlYXRoZXJXaXRoV2VhdGhlciIsIlBob3Rvc1dpdGhQaG90b3MiLCJDaGF0dGVyV2l0aENoYXR0ZXIiLCJWaWRlb3NXaXRoVmlkZW9zIiwiRmVlZFBhZ2UiLCJwcm9wcyIsImhlaWdodCIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInVuZGVmaW5lZCIsIndpdGhHZW9sb2NhdGlvbiIsIldyYXBwZWRDb21wb25lbnQiLCJIT0MiLCJyZWFkeSIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwibWFwU3RhdGVUb1Byb3BzIiwid2l0aFdlYXRoZXIiLCJ3aXRoUGhvdG9zIiwid2l0aENoYXR0ZXJzIiwiTG9jYXRpb24iLCJyZW5kZXJDb250ZW50IiwibG5nIiwibGF0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xpY2thYmxlSWNvbnMiLCJkaXNhYmxlRGVmYXVsdFVJIiwiZHJhZ2dhYmxlIiwiZnVsbHNjcmVlbkNvbnRyb2wiLCJnZXN0dXJlSGFuZGxpbmciLCJrZXlib2FyZFNob3J0Y3V0cyIsIm1hcFR5cGVDb250cm9sIiwibWF4Wm9vbSIsIm1pblpvb20iLCJwYW5Db250cm9sIiwicm90YXRlQ29udHJvbCIsInNjYWxlQ29udHJvbCIsInNjcm9sbHdoZWVsIiwic3RyZWV0Vmlld0NvbnRyb2wiLCJzdHlsZXMiLCJ6b29tQ29udHJvbCIsImZlYXR1cmVUeXBlIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwiY29sb3IiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwidmlzaWJpbGl0eSIsImh1ZSIsIldlYXRoZXIiLCJzaG93RmFyZW5oZWl0IiwiaGFuZGxlVGVtcGVyYXR1cmVUb2dnbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2U3RhdGUiLCJQaG90b3MiLCJyZW5kZXJQaG90b3MiLCJpZCIsImFsdCIsImNhcHRpb24iLCJ0ZXh0IiwiaW1hZ2UiLCJpbWFnZXMiLCJzdGFuZGFyZF9yZXNvbHV0aW9uIiwibGlrZXMiLCJsaW5rIiwidXNlcm5hbWUiLCJ1c2VyIiwiYmFja2dyb3VuZEltYWdlIiwid2lkdGgiLCJDaGF0dGVyIiwicmVuZGVyQ2hhdHRlciIsImVudGl0aWVzIiwiZmF2b3JpdGVfY291bnQiLCJyZXR3ZWV0X2NvdW50Iiwic2NyZWVuX25hbWUiLCJnZXRUd2l0dGVyVXNlclVybCIsInNldHVwVHdlZXRUZXh0IiwiVmlkZW9zIiwiQWJvdXRQYWdlIiwiTm90Rm91bmRQYWdlIiwiaHRtbCIsImhlbG1ldCIsInJlbmRlclN0YXRpYyIsInRpdGxlIiwidG9TdHJpbmciLCJtZXRhIiwiZ2V0U3RhdGUiLCJnZW9sb2NhdGlvblJlZHVjZXJEZWZhdWx0U3RhdGUiLCJhY3Rpb24iLCJ3ZWF0aGVyUmVkdWNlckRlZmF1bHRTdGF0ZSIsInBob3RvUmVkdWNlckRlZmF1bHRTdGF0ZSIsImNoYXR0ZXJSZWR1Y2VyRGVmYXVsdFN0YXRlIiwidHdpdHRlclNlYXJjaENsaWVudCIsIlNlYXJjaENsaWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXJhbXMiLCJzZWFyY2giLCJxIiwiZ2VvY29kZSIsImxhbmciLCJjb3VudCIsImVycm9yIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0M7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7Ozs7a0JDQWU7QUFDYkEsdUJBQXFCQyxRQUFRQyxHQUFSLENBQVlGLG1CQURwQjtBQUViRyx1QkFBcUJGLFFBQVFDLEdBQVIsQ0FBWUMsbUJBRnBCO0FBR2JDLHdCQUFzQkgsUUFBUUMsR0FBUixDQUFZRSxvQkFIckI7QUFJYkMsMkJBQXlCSixRQUFRQyxHQUFSLENBQVlHLHVCQUp4QjtBQUtiQyxpQkFBZUwsUUFBUUMsR0FBUixDQUFZSSxhQUxkO0FBTWJDLHdCQUFzQk4sUUFBUUMsR0FBUixDQUFZSyxvQkFOckI7QUFPYkMsaUNBQStCUCxRQUFRQyxHQUFSLENBQVlNO0FBUDlCLEM7Ozs7OztBQ0FmLGtDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQUVBLElBQU1DLFVBQVUsU0FB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LGlCQUFPQyxhQUhtQixFQUkxQixpQkFBT0Msb0JBSm1CLENBQTVCOztBQU9BMkwsT0FBT0MsT0FBUCxHQUFpQixlQUFPO0FBQ3RCbEksTUFBSWEsR0FBSixDQUFRLG1DQUFSO0FBQUEsdUVBQTZDLGlCQUFPWCxHQUFQLEVBQVlDLEdBQVo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNYRCxJQUFJaUksTUFETyxFQUNuQzlLLFFBRG1DLGVBQ25DQSxRQURtQyxFQUN6QkMsU0FEeUIsZUFDekJBLFNBRHlCOztBQUUzQ3lLLGtDQUFvQkssTUFBcEIsQ0FDRSxFQUFFQyxHQUFHLEVBQUwsRUFBU0MsU0FBWWpMLFFBQVosU0FBd0JDLFNBQXhCLFNBQVQsRUFBa0RpTCxNQUFNLElBQXhELEVBQThEQyxPQUFPLEdBQXJFLEVBREYsRUFFRSxVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakIsb0JBQUlELEtBQUosRUFBVztBQUNUdEksc0JBQUl3QixJQUFKLENBQVMsRUFBRThHLFlBQUYsRUFBVDtBQUNEO0FBQ0Qsb0JBQUlDLE1BQUosRUFBWTtBQUNWdkksc0JBQUl3QixJQUFKLENBQVMrRyxNQUFUO0FBQ0Q7QUFDRixlQVRIOztBQUYyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE3Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBMUksTUFBSWEsR0FBSixDQUFRLFFBQVIsRUFBa0IsVUFBQ1gsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDOUJBLFFBQUlLLFFBQUosQ0FBYSxHQUFiO0FBQ0QsR0FGRDtBQUdELENBbEJELEM7Ozs7OztBQ1hBLHlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZDM5MDU2NzYwMDZhN2VkNTA1YSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBHT09HTEVfTUFQU19BUElfS0VZOiBwcm9jZXNzLmVudi5HT09HTEVfTUFQU19BUElfS0VZLFxuICBJTlNUQUdSQU1fQVBJX1RPS0VOOiBwcm9jZXNzLmVudi5JTlNUQUdSQU1fQVBJX1RPS0VOLFxuICBUV0lUVEVSX0NPTlNVTUVSX0tFWTogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DT05TVU1FUl9LRVksXG4gIFRXSVRURVJfQ09OU1VNRVJfU0VDUkVUOiBwcm9jZXNzLmVudi5UV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCxcbiAgVFdJVFRFUl9UT0tFTjogcHJvY2Vzcy5lbnYuVFdJVFRFUl9UT0tFTixcbiAgVFdJVFRFUl9UT0tFTl9TRUNSRVQ6IHByb2Nlc3MuZW52LlRXSVRURVJfVE9LRU5fU0VDUkVULFxuICBXRUFUSEVSX1VOREVSR1JPVU5EX0FQSV9UT0tFTjogcHJvY2Vzcy5lbnYuV0VBVEhFUl9VTkRFUkdST1VORF9BUElfVE9LRU5cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvY29uZmlnLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvYWRpbmcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgRmVlZFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL0ZlZWRQYWdlXCI7XG5pbXBvcnQgQWJvdXRQYWdlIGZyb20gXCIuLi9wYWdlcy9BYm91dFBhZ2VcIjtcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL05vdEZvdW5kUGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICAuLi5BcHAsXG4gICAgcm91dGVzOiBbXG4gICAgICB7XG4gICAgICAgIC4uLkZlZWRQYWdlLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgZXhhY3Q6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC4uLkFib3V0UGFnZSxcbiAgICAgICAgcGF0aDogXCIvYWJvdXRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLi4uTm90Rm91bmRQYWdlXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtaGVsbWV0XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgZ2V0R2VvbG9jYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgICAgbG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBsb2NhdGlvbi5jb29yZHM7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRHZW9sb2NhdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlKSk7XG4gICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uLmNvb3Jkcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoXCJHZW9sb2NhdGlvbiBmYWlsZWRcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwMFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChcIkdlb2xvY2F0aW9uIHNlcnZpY2VzIHVuYXZhaWxhYmxlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNFVF9HRU9MT0NBVElPTiA9IFwiU0VUX0dFT0xPQ0FUSU9OXCI7XG5leHBvcnQgY29uc3Qgc2V0R2VvbG9jYXRpb24gPSAobGF0aXR1ZGUgPSBmYWxzZSwgbG9uZ2l0dWRlID0gZmFsc2UpID0+ICh7XG4gIHR5cGU6IFNFVF9HRU9MT0NBVElPTixcbiAgbGF0aXR1ZGUsXG4gIGxvbmdpdHVkZVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvZ2VvbG9jYXRpb24uanMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyID0gKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgY29uc3Qgd2VhdGhlckVuZHBvaW50ID0gYGh0dHBzOi8vYXBpLnd1bmRlcmdyb3VuZC5jb20vYXBpLyR7XG4gICAgY29uZmlnLldFQVRIRVJfVU5ERVJHUk9VTkRfQVBJX1RPS0VOXG4gIH0vY29uZGl0aW9ucy9xLyR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfS5qc29uYDtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBheGlvcyh3ZWF0aGVyRW5kcG9pbnQpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXJyZW50X29ic2VydmF0aW9uOiB7IGRpc3BsYXlfbG9jYXRpb246IHsgY2l0eSwgc3RhdGUsIGNvdW50cnkgfSwgd2VhdGhlciwgdGVtcF9mLCB0ZW1wX2MsIGljb24sIGZvcmVjYXN0X3VybCB9XG4gICAgICB9ID0gd2VhdGhlckRhdGEuZGF0YTtcbiAgICAgIHJldHVybiBkaXNwYXRjaChcbiAgICAgICAgc2V0V2VhdGhlcih7XG4gICAgICAgICAgY2l0eSxcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICAgIHdlYXRoZXIsXG4gICAgICAgICAgdGVtcF9mLFxuICAgICAgICAgIHRlbXBfYyxcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIGZvcmVjYXN0X3VybFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YVwiLCBlKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgU0VUX1dFQVRIRVIgPSBcIlNFVF9XRUFUSEVSXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRXZWF0aGVyID0gKHtcbiAgY2l0eSA9IFwiXCIsXG4gIHN0YXRlID0gXCJcIixcbiAgY291bnRyeSA9IFwiXCIsXG4gIHdlYXRoZXIgPSBcIlwiLFxuICB0ZW1wX2YgPSBcIlwiLFxuICB0ZW1wX2MgPSBcIlwiLFxuICBpY29uID0gXCJcIixcbiAgZm9yZWNhc3RfdXJsID0gXCJcIlxufSkgPT4gKHtcbiAgdHlwZTogU0VUX1dFQVRIRVIsXG4gIGNpdHksXG4gIHN0YXRlLFxuICBjb3VudHJ5LFxuICB3ZWF0aGVyLFxuICB0ZW1wX2YsXG4gIHRlbXBfYyxcbiAgaWNvbixcbiAgZm9yZWNhc3RfdXJsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvYWN0aW9ucy93ZWF0aGVyLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0UGhvdG9zID0gKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgY29uc3QgcGhvdG9zRW5kcG9pbnQgPSBgaHR0cHM6Ly9hcGkuaW5zdGFncmFtLmNvbS92MS9tZWRpYS9zZWFyY2g/YWNjZXNzX3Rva2VuPSR7XG4gICAgY29uZmlnLklOU1RBR1JBTV9BUElfVE9LRU5cbiAgfSZsYXQ9JHtsYXRpdHVkZX0mbG5nPSR7bG9uZ2l0dWRlfSZkaXN0YW5jZT01MDAwJmNvdW50PTZgO1xuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwaG90b3NEYXRhID0gYXdhaXQgYXhpb3MocGhvdG9zRW5kcG9pbnQpO1xuICAgICAgY29uc3QgeyBkYXRhOiBwaG90b3MgfSA9IHBob3Rvc0RhdGEuZGF0YTtcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgcGhvdG8gaW4gcGhvdG9zKSB7XG4gICAgICAgIGNvbGxlY3Rpb24ucHVzaChwaG90b3NbcGhvdG9dKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXNwYXRjaChcbiAgICAgICAgc2V0UGhvdG9zKHtcbiAgICAgICAgICBjb2xsZWN0aW9uXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgcGhvdG9zIGRhdGFcIiwgZSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNFVF9QSE9UT1MgPSBcIlNFVF9QSE9UT1NcIjtcbmV4cG9ydCBjb25zdCBzZXRQaG90b3MgPSBwaG90b3MgPT4gKHtcbiAgdHlwZTogU0VUX1BIT1RPUyxcbiAgcGhvdG9zXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvYWN0aW9ucy9waG90b3MuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGF0dGVyID0gKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgY29uc3QgY2hhdHRlckVuZHBvaW50ID0gYC9hcGkvY2hhdHRlci8ke2xhdGl0dWRlfS8ke2xvbmdpdHVkZX1gO1xuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjaGF0dGVyRGF0YSA9IGF3YWl0IGF4aW9zKGNoYXR0ZXJFbmRwb2ludCk7XG4gICAgICBjb25zdCB7IHN0YXR1c2VzOiBjb2xsZWN0aW9uIH0gPSBjaGF0dGVyRGF0YS5kYXRhO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKFxuICAgICAgICBzZXRDaGF0dGVyKHtcbiAgICAgICAgICBjb2xsZWN0aW9uXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgY2hhdHRlciBkYXRhXCIsIGUpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBTRVRfQ0hBVFRFUiA9IFwiU0VUX0NIQVRURVJcIjtcbmV4cG9ydCBjb25zdCBzZXRDaGF0dGVyID0gY2hhdHRlciA9PiAoe1xuICB0eXBlOiBTRVRfQ0hBVFRFUixcbiAgY2hhdHRlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvY2hhdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgbWF0Y2hSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiO1xuaW1wb3J0IHByb3h5IGZyb20gXCJleHByZXNzLWh0dHAtcHJveHlcIjtcbmltcG9ydCBSb3V0ZXMgZnJvbSBcIi4uLy4uL2NsaWVudC9zcmMvcm91dGVzL0FwcFJvdXRlc1wiO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gXCIuLi9oZWxwZXJzL3JlbmRlcmVyXCI7XG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSBcIi4uL2hlbHBlcnMvY3JlYXRlU3RvcmVcIjtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICB2YXIgc2NoZW1hID0gcmVxLmhlYWRlcnNbXCJ4LWZvcndhcmRlZC1wcm90b1wiXTtcbiAgaWYgKHNjaGVtYSA9PT0gXCJodHRwc1wiIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgcmV0dXJuIG5leHQoKTtcbiAgcmVzLnJlZGlyZWN0KFwiaHR0cHM6Ly9cIiArIHJlcS5oZWFkZXJzLmhvc3QgKyByZXEudXJsKTtcbn0pO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwiY2xpZW50L3B1YmxpY1wiKSk7XG5cbnJlcXVpcmUoXCIuLi9yb3V0ZXMvY2hhdHRlclwiKShhcHApO1xuXG5hcHAuZ2V0KFwiKlwiLCAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZXEpO1xuXG4gIGNvbnN0IHByb21pc2VzID0gbWF0Y2hSb3V0ZXMoUm91dGVzLCByZXEucGF0aClcbiAgICAubWFwKCh7IHJvdXRlIH0pID0+IHtcbiAgICAgIHJldHVybiByb3V0ZS5sb2FkRGF0YSA/IHJvdXRlLmxvYWREYXRhKHN0b3JlKSA6IG51bGw7XG4gICAgfSlcbiAgICAubWFwKHByb21pc2UgPT4ge1xuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0ge307XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlcmVyKHJlcSwgc3RvcmUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRleHQudXJsKSB7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMSwgY29udGV4dC51cmwpO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0Lm5vdEZvdW5kKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgfVxuXG4gICAgcmVzLnNlbmQoY29udGVudCk7XG4gIH0pO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlRoZSBtYWdpYyBpcyBoYXBwZW5pbmcgb24gcG9ydFwiLCBwb3J0KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC1wcm94eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3MtaHR0cC1wcm94eVwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHJvdXRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPkdlb3B1bHNlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJHZW9wdWxzZVwiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICB7cmVuZGVyUm91dGVzKHJvdXRlLnJvdXRlcyl9XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBBcHBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLWJnLXNreS1kYXJrIGhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLWdlb3B1bHNlLnN2Z1wiIGFsdD1cIkdlb3B1bHNlIGxvZ29cIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5HZW9wdWxzZTwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2aWdhdGlvblwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaGVhZGVyX19saW5rLS1hY3RpdmVcIiBleGFjdD5cbiAgICAgICAgICAgICAgICBGZWVkXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaGVhZGVyX19saW5rLS1hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tYmctZWFydGgtZGFya2VzdCBmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICA8cD5cbiAgICAgICAgQ3JhZnRlZCB3aXRoIGxvdmUgL3tcIiBcIn1cbiAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cuY29kZXNlcmlvdXMuY29tXCIgY2xhc3NOYW1lPVwiZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgQ29kZSBTZXJpb3VzXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0R2VvbG9jYXRpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuLi9hY3Rpb25zL3dlYXRoZXJcIjtcbmltcG9ydCB7IGdldFBob3RvcyB9IGZyb20gXCIuLi9hY3Rpb25zL3Bob3Rvc1wiO1xuaW1wb3J0IHsgZ2V0Q2hhdHRlciB9IGZyb20gXCIuLi9hY3Rpb25zL2NoYXR0ZXJcIjtcbmltcG9ydCB3aXRoR2VvbG9jYXRpb24gZnJvbSBcIi4uL2hvY3Mvd2l0aEdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgd2l0aFdlYXRoZXIgZnJvbSBcIi4uL2hvY3Mvd2l0aFdlYXRoZXJcIjtcbmltcG9ydCB3aXRoUGhvdG9zIGZyb20gXCIuLi9ob2NzL3dpdGhQaG90b3NcIjtcbmltcG9ydCB3aXRoQ2hhdHRlciBmcm9tIFwiLi4vaG9jcy93aXRoQ2hhdHRlclwiO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0xvY2F0aW9uXCI7XG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi4vY29tcG9uZW50cy9XZWF0aGVyXCI7XG5pbXBvcnQgUGhvdG9zIGZyb20gXCIuLi9jb21wb25lbnRzL1Bob3Rvc1wiO1xuaW1wb3J0IENoYXR0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdHRlclwiO1xuaW1wb3J0IFZpZGVvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWRlb3NcIjtcblxuY29uc3QgTG9jYXRpb25XaXRoR2VvbG9jYXRpb24gPSB3aXRoR2VvbG9jYXRpb24oTG9jYXRpb24pO1xuY29uc3QgV2VhdGhlcldpdGhXZWF0aGVyID0gd2l0aFdlYXRoZXIoV2VhdGhlcik7XG5jb25zdCBQaG90b3NXaXRoUGhvdG9zID0gd2l0aFBob3RvcyhQaG90b3MpO1xuY29uc3QgQ2hhdHRlcldpdGhDaGF0dGVyID0gd2l0aENoYXR0ZXIoQ2hhdHRlcik7XG5jb25zdCBWaWRlb3NXaXRoVmlkZW9zID0gd2l0aEdlb2xvY2F0aW9uKFZpZGVvcyk7XG5cbmNsYXNzIEZlZWRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRHZW9sb2NhdGlvbigpLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBsb2NhdGlvbjtcbiAgICAgIHRoaXMucHJvcHMuZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgIHRoaXMucHJvcHMuZ2V0UGhvdG9zKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgdGhpcy5wcm9wcy5nZXRDaGF0dGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhjb25maWcuR09PR0xFX01BUFNfQVBJX0tFWSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1mZWVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1mZWVkXCI+XG4gICAgICAgICAgPExvY2F0aW9uV2l0aEdlb2xvY2F0aW9uXG4gICAgICAgICAgICBnb29nbGVNYXBVUkw9e2BodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7XG4gICAgICAgICAgICAgIGNvbmZpZy5HT09HTEVfTUFQU19BUElfS0VZXG4gICAgICAgICAgICB9JnY9My5leHAmbGlicmFyaWVzPWdlb21ldHJ5LHBsYWNlc2B9XG4gICAgICAgICAgICBsb2FkaW5nRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgNDAwcHhgIH19IC8+fVxuICAgICAgICAgICAgbWFwRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxXZWF0aGVyV2l0aFdlYXRoZXIgLz5cbiAgICAgICAgICA8UGhvdG9zV2l0aFBob3RvcyAvPlxuICAgICAgICAgIDxDaGF0dGVyV2l0aENoYXR0ZXIgLz5cbiAgICAgICAgICA8VmlkZW9zV2l0aFZpZGVvcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0R2VvbG9jYXRpb246ICgpID0+IGRpc3BhdGNoKGdldEdlb2xvY2F0aW9uKCkpLFxuICBnZXRXZWF0aGVyOiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4gZGlzcGF0Y2goZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKSksXG4gIGdldFBob3RvczogKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IGRpc3BhdGNoKGdldFBob3RvcyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSksXG4gIGdldENoYXR0ZXI6IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiBkaXNwYXRjaChnZXRDaGF0dGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBjb25uZWN0KHVuZGVmaW5lZCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShGZWVkUGFnZSlcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3BhZ2VzL0ZlZWRQYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiB3aXRoR2VvbG9jYXRpb24oV3JhcHBlZENvbXBvbmVudCkge1xuICBjbGFzcyBIT0MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBnZW9sb2NhdGlvbiB9ID0gbmV4dFByb3BzO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJlYWR5ICYmIGdlb2xvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24gfSkgPT4gKHtcbiAgICBnZW9sb2NhdGlvblxuICB9KTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhPQyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhHZW9sb2NhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaG9jcy93aXRoR2VvbG9jYXRpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIHdpdGhXZWF0aGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZ2VvbG9jYXRpb24sIHdlYXRoZXIgfSA9IG5leHRQcm9wcztcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkeSAmJiBnZW9sb2NhdGlvbiAmJiB3ZWF0aGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24sIHdlYXRoZXIgfSkgPT4gKHtcbiAgICBnZW9sb2NhdGlvbixcbiAgICB3ZWF0aGVyXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSE9DKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFdlYXRoZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFdlYXRoZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIHdpdGhQaG90b3MoV3JhcHBlZENvbXBvbmVudCkge1xuICBjbGFzcyBIT0MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBnZW9sb2NhdGlvbiwgcGhvdG9zIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmVhZHkgJiYgZ2VvbG9jYXRpb24gJiYgcGhvdG9zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24sIHBob3RvcyB9KSA9PiAoe1xuICAgIGdlb2xvY2F0aW9uLFxuICAgIHBob3Rvc1xuICB9KTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhPQyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQaG90b3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFBob3Rvcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZnVuY3Rpb24gd2l0aENoYXR0ZXJzKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZ2VvbG9jYXRpb24sIGNoYXR0ZXIgfSA9IG5leHRQcm9wcztcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkeSAmJiBnZW9sb2NhdGlvbiAmJiBjaGF0dGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24sIGNoYXR0ZXIgfSkgPT4gKHtcbiAgICBnZW9sb2NhdGlvbixcbiAgICBjaGF0dGVyXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSE9DKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENoYXR0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9ob2NzL3dpdGhDaGF0dGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFNjcmlwdGpzLCB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcbmltcG9ydCBzZXR1cE1hcCBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL3NldHVwTWFwXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNsYXNzIExvY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvbmdpdHVkZTogbG5nLCBsYXRpdHVkZTogbGF0IH0gPSB0aGlzLnByb3BzLmdlb2xvY2F0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPEdvb2dsZU1hcFxuICAgICAgICAgIGRlZmF1bHRab29tPXsxNH1cbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdCwgbG5nIH19XG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjOTBhY2YzXCIsXG4gICAgICAgICAgICBjbGlja2FibGVJY29uczogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogXCJub25lXCIsXG4gICAgICAgICAgICBrZXlib2FyZFNob3J0Y3V0czogZmFsc2UsXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBtYXhab29tOiAxNCxcbiAgICAgICAgICAgIG1pblpvb206IDE0LFxuICAgICAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICByb3RhdGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzdHlsZXM6IHNldHVwTWFwLFxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1iZy1za3ktbGlnaHQgbG9jYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbl9fY29udGVudFwiPnt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn08L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JpcHRqcyh3aXRoR29vZ2xlTWFwKExvY2F0aW9uKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9jYXRpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiBcIiM0ZTVjNmFcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLmxvY2FsaXR5XCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiA3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDE5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJsYW5kc2NhcGVcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC0xMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogMTAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IFwiI2YzZjdmYVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtMTAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDEwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNiYmMwYzRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDMxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHNcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjYmJjMGM0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC05M1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAzMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsc1wiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNiYmMwYzRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IC0yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQubG9jYWxcIixcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNlOWViZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IC04XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXRcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjZTllYmVkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDY5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTc4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDY3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IFwiI2RkZTdmMlwiXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL3NldHVwTWFwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jbGFzcyBXZWF0aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvd0ZhcmVuaGVpdDogdHJ1ZVxuICB9O1xuICBoYW5kbGVUZW1wZXJhdHVyZVRvZ2dsZSA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd0ZhcmVuaGVpdDogIXByZXZTdGF0ZS5zaG93RmFyZW5oZWl0XG4gICAgfSkpO1xuICB9O1xuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2l0eSwgc3RhdGUsIGNvdW50cnksIHdlYXRoZXIsIHRlbXBfZiwgdGVtcF9jLCBpY29uLCBmb3JlY2FzdF91cmwgfSA9IHRoaXMucHJvcHMud2VhdGhlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B3ZWF0aGVyX190ZW1wZXJhdHVyZSAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RmFyZW5oZWl0ID8gXCJ3ZWF0aGVyX190ZW1wZXJhdHVyZS0tZlwiIDogXCJ3ZWF0aGVyX190ZW1wZXJhdHVyZS0tY1wiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVUZW1wZXJhdHVyZVRvZ2dsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXAgdGVtcC0tZlwiPnt0ZW1wX2Z9JmRlZztGPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcCB0ZW1wLS1jXCI+e3RlbXBfY30mZGVnO0M8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcl9fZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMz57d2VhdGhlcn08L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2NpdHl9LCB7c3RhdGV9IC8ge2NvdW50cnl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWxpZ2h0IHdlYXRoZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+V2VhdGhlcjwvaDE+XG5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cud3VuZGVyZ3JvdW5kLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICBQb3dlcmVkIGJ5IFdlYXRoZXIgVW5kZXJncm91bmRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL1dlYXRoZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNsYXNzIFBob3RvcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlclBob3RvcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5wcm9wcy5waG90b3MuY29sbGVjdGlvbjtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAocGhvdG8gPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZCxcbiAgICAgICAgY2FwdGlvbjogeyB0ZXh0OiBhbHQgfSxcbiAgICAgICAgaW1hZ2VzOiB7IHN0YW5kYXJkX3Jlc29sdXRpb246IGltYWdlIH0sXG4gICAgICAgIGxpa2VzLFxuICAgICAgICBsaW5rLFxuICAgICAgICB1c2VyOiB7IHVzZXJuYW1lIH1cbiAgICAgIH0gPSBwaG90bztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9XCJwaG90b3NfX3Bob3RvXCI+XG4gICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPXtsaW5rfSB0aXRsZT17YWx0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX19pbWFnZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlLnVybH0pYCB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gd2lkdGg9e2ltYWdlLndpZHRofSBoZWlnaHQ9e2ltYWdlLmhlaWdodH0gYWx0PXthbHR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX191c2VybmFtZVwiPnt1c2VybmFtZX08L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBob3Rvc19fZ3JpZFwiPnt0aGlzLnJlbmRlclBob3RvcygpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1tZWRpdW0gcGhvdG9zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXIgY29udGVudC1jb250YWluZXItLWdyaWQtc3BhY2luZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5QaG90b3M8L2gxPlxuXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkeSA/IHRoaXMucmVuZGVyQ29udGVudCgpIDogPExvYWRpbmcgLz59XG5cbiAgICAgICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgY2xhc3NOYW1lPVwic2VjdGlvbl9fYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgUG93ZXJlZCBieSBJbnN0YWdyYW1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUGhvdG9zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0VHdpdHRlclVzZXJVcmwsIHNldHVwVHdlZXRUZXh0IH0gZnJvbSBcIi4uL2hlbHBlcnMvY2hhdHRlclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jbGFzcyBDaGF0dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyQ2hhdHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5wcm9wcy5jaGF0dGVyLmNvbGxlY3Rpb247XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ubWFwKHN0YXR1cyA9PiB7XG4gICAgICBjb25zdCB7IGVudGl0aWVzLCBmYXZvcml0ZV9jb3VudCwgaWQsIHJldHdlZXRfY291bnQsIHRleHQsIHVzZXI6IHsgc2NyZWVuX25hbWUgfSB9ID0gc3RhdHVzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT1cImNoYXR0ZXJfX3N0YXR1c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdHRlcl9fdGV4dFwiPntzZXR1cFR3ZWV0VGV4dCh0ZXh0LCBlbnRpdGllcyl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXNfX3VzZXJuYW1lXCI+XG4gICAgICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9e2dldFR3aXR0ZXJVc2VyVXJsKHNjcmVlbl9uYW1lKX0gdGl0bGU9e2BGb2xsb3cgJHtzY3JlZW5fbmFtZX0gb24gVHdpdHRlcmB9PlxuICAgICAgICAgICAgICBAe3NjcmVlbl9uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0dGVyX19saXN0XCI+e3RoaXMucmVuZGVyQ2hhdHRlcigpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1kYXJrIGNoYXR0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lciBjb250ZW50LWNvbnRhaW5lci0tZ3JpZC1zcGFjaW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0dGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5DaGF0dGVyPC9oMT5cblxuICAgICAgICAgICAge3RoaXMucHJvcHMucmVhZHkgPyB0aGlzLnJlbmRlckNvbnRlbnQoKSA6IDxMb2FkaW5nIC8+fVxuXG4gICAgICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICBQb3dlcmVkIGJ5IFR3aXR0ZXJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NoYXR0ZXIuanMiLCJleHBvcnQgY29uc3QgZ2V0VHdpdHRlclVzZXJVcmwgPSBzY3JlZW5fbmFtZSA9PiB7XG4gIHJldHVybiBgaHR0cHM6Ly93d3cudHdpdHRlci5jb20vJHtzY3JlZW5fbmFtZX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwVHdlZXRUZXh0ID0gKHRleHQsIGVudGl0aWVzKSA9PiB7XG4gIHJldHVybiB0ZXh0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaGVscGVycy9jaGF0dGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jb25zdCByZW5kZXJDb250ZW50ID0gcHJvcHMgPT4gKFxuICA8dWw+XG4gICAgPGxpPkxhdDoge3Byb3BzLmdlb2xvY2F0aW9uLmxhdGl0dWRlfTwvbGk+XG4gICAgPGxpPkxvbjoge3Byb3BzLmdlb2xvY2F0aW9uLmxvbmdpdHVkZX08L2xpPlxuICA8L3VsPlxuKTtcblxuY29uc3QgVmlkZW9zID0gcHJvcHMgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFya2VyIHZpZGVvc1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9zX19jb250ZW50XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlZpZGVvczwvaDE+XG5cbiAgICAgICAge3Byb3BzLnJlYWR5ID8gcmVuZGVyQ29udGVudChwcm9wcykgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgIFBvd2VyZWQgYnkgWW91VHViZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ZpZGVvcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWJvdXRQYWdlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWJvdXRcIj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctc2t5LWxpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPkFib3V0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZW9wdWxzZSBpcyBhIHRvb2wgdGhhdCBhbGxvd3MgeW91IHRvIHNlZSBjb250ZW50IGJhc2VkIG9uIHlvdXIgbG9jYXRpb24gaW5jbHVkaW5nIGEgR29vZ2xlIE1hcCBvZiB0aGUgYXJlYSxcbiAgICAgICAgICAgIHRoZSBsb2NhbCB3ZWF0aGVyIGZyb20gV2VhdGhlciBVbmRlcmdyb3VuZCwgcGhvdG9zIGZyb20gSW5zdGFncmFtLCB0d2VldHMgZnJvbSBUd2l0dGVyIGFuZCB2aWRlb3MgZnJvbVxuICAgICAgICAgICAgWW91VHViZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1saWdodFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5Sb2FkbWFwPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+KFJvYWRtYXApPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtbWVkaXVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlByaXZhY3k8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD5ObyBkYXRhIGlzIHNhdmVkIG9uIG91ciBzZXJ2ZXJzIGFuZCBpcyBvbmx5IHJlcXVlc3RlZCBvbiBhbiBhcy1uZWVkZWQgYmFzaXMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5UaGFua3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD4oUGVvcGxlKTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWRhcmtlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5Db250YWN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+KEluZm8pPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogQWJvdXRQYWdlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9wYWdlcy9BYm91dFBhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5vdEZvdW5kUGFnZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW5vdC1mb3VuZFwiPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1za3ktbGlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+V2hvb3BzITwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxwPlNvbWV0aGluZyBpc24ndCBxdWl0ZSByaWdodCBoZXJlLCB3ZSB3ZXJlbid0IGFibGUgdG8gZmluZCB3aGF0IHlvdSB3ZXJlIGxvb2tpbmcgZm9yLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IE5vdEZvdW5kUGFnZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCBBcHBSb3V0ZXMgZnJvbSBcIi4uLy4uL2NsaWVudC9zcmMvcm91dGVzL0FwcFJvdXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCBzdG9yZSwgY29udGV4dCkgPT4ge1xuICBjb25zdCBodG1sID0gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnBhdGh9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj57cmVuZGVyUm91dGVzKEFwcFJvdXRlcyl9PC9kaXY+XG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xuICBjb25zdCBjb250ZW50ID0gcmVuZGVyVG9TdHJpbmcoaHRtbCk7XG4gIGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcblxuICByZXR1cm4gYFxuICAgIDwhRE9DVFlQRSBodG1sPlxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuXG4gICAgICAgICR7aGVsbWV0LnRpdGxlLnRvU3RyaW5nKCl9XG4gICAgICAgICR7aGVsbWV0Lm1ldGEudG9TdHJpbmcoKX1cblxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCI+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIj5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIj5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM0MzU3OGNcIj5cblxuICAgICAgICA8IS0tIGlPUyAtLT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCIgY29udGVudD1cImJsYWNrXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiIGNvbnRlbnQ9XCJHZW9wdWxzZVwiPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlXCIgaHJlZj1cIi9hc3NldHMvZ2VvcHVsc2Utc3BsYXNoLnBuZ1wiPlxuICAgICAgXG4gICAgICAgIDwhLS0gT3RoZXIgLS0+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsaWNhdGlvbi1uYW1lXCIgY29udGVudD1cIkdlb3B1bHNlXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNDM1NzhjXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiPlxuICAgICAgXG4gICAgICAgIDwhLS0gU29jaWFsIC0tPlxuICAgICAgICA8bWV0YSBpdGVtcHJvcD1cIm5hbWVcIiBjb250ZW50PVwiR2VvcHVsc2VcIj5cbiAgICAgICAgPG1ldGEgaXRlbXByb3A9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZXQgYSBwdWxzZSBvbiB0aGUgaGFwcGVuaW5ncyBuZWFyYnlcIj5cbiAgICAgICAgPG1ldGEgaXRlbXByb3A9XCJpbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2dlb3B1bHNlLWFwcC5oZXJva3VhcHAuY29tL2Fzc2V0cy9nZW9wdWxzZS1iYW5uZXIucG5nXCI+XG4gICAgICBcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2dlb3B1bHNlLWFwcC5oZXJva3VhcHAuY29tL2Fzc2V0cy9nZW9wdWxzZS1iYW5uZXIucG5nXCI+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2MjhcIj5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJHZW9wdWxzZVwiPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBhIHB1bHNlIG9uIHRoZSBoYXBwZW5pbmdzIG5lYXJieVwiPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2dlb3B1bHNlLWFwcC5oZXJva3VhcHAuY29tXCI+XG4gICAgICBcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkdlb3B1bHNlXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBhIHB1bHNlIG9uIHRoZSBoYXBwZW5pbmdzIG5lYXJieVwiPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBzZXJpb3VzbHlzZWFuXCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZ2VvcHVsc2UtYXBwLmhlcm9rdWFwcC5jb20vYXNzZXRzL2dlb3B1bHNlLWJhbm5lci5wbmdcIj5cbiAgICAgICAgXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiYnVuZGxlLmNzc1wiIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBpZD1cInJvb3RcIj4ke2NvbnRlbnR9PC9kaXY+XG4gICAgICAgIDxzY3JpcHQ+d2luZG93LklOSVRJQUxfU1RBVEUgPSAke3NlcmlhbGl6ZShzdG9yZS5nZXRTdGF0ZSgpKX08L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJidW5kbGUuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIGA7XG5cbiAgcmVzLnNlbmQoaHRtbCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvcmVuZGVyZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi4vLi4vY2xpZW50L3NyYy9yZWR1Y2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCByZXEgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XG4gIHJldHVybiBzdG9yZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgZ2VvbG9jYXRpb25SZWR1Y2VyIGZyb20gXCIuL2dlb2xvY2F0aW9uUmVkdWNlclwiO1xuaW1wb3J0IHdlYXRoZXJSZWR1Y2VyIGZyb20gXCIuL3dlYXRoZXJSZWR1Y2VyXCI7XG5pbXBvcnQgcGhvdG9zUmVkdWNlciBmcm9tIFwiLi9waG90b3NSZWR1Y2VyXCI7XG5pbXBvcnQgY2hhdHRlclJlZHVjZXIgZnJvbSBcIi4vY2hhdHRlclJlZHVjZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZ2VvbG9jYXRpb246IGdlb2xvY2F0aW9uUmVkdWNlcixcbiAgd2VhdGhlcjogd2VhdGhlclJlZHVjZXIsXG4gIHBob3RvczogcGhvdG9zUmVkdWNlcixcbiAgY2hhdHRlcjogY2hhdHRlclJlZHVjZXJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IFNFVF9HRU9MT0NBVElPTiB9IGZyb20gXCIuLi9hY3Rpb25zL2dlb2xvY2F0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZW9sb2NhdGlvblJlZHVjZXJEZWZhdWx0U3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gZ2VvbG9jYXRpb25SZWR1Y2VyRGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0dFT0xPQ0FUSU9OOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGF0aXR1ZGU6IGFjdGlvbi5sYXRpdHVkZSxcbiAgICAgICAgbG9uZ2l0dWRlOiBhY3Rpb24ubG9uZ2l0dWRlXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL2dlb2xvY2F0aW9uUmVkdWNlci5qcyIsImltcG9ydCB7IFNFVF9XRUFUSEVSIH0gZnJvbSBcIi4uL2FjdGlvbnMvd2VhdGhlclwiO1xuXG5leHBvcnQgY29uc3Qgd2VhdGhlclJlZHVjZXJEZWZhdWx0U3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gd2VhdGhlclJlZHVjZXJEZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfV0VBVEhFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNpdHk6IGFjdGlvbi5jaXR5LFxuICAgICAgICBzdGF0ZTogYWN0aW9uLnN0YXRlLFxuICAgICAgICBjb3VudHJ5OiBhY3Rpb24uY291bnRyeSxcbiAgICAgICAgd2VhdGhlcjogYWN0aW9uLndlYXRoZXIsXG4gICAgICAgIHRlbXBfZjogYWN0aW9uLnRlbXBfZixcbiAgICAgICAgdGVtcF9jOiBhY3Rpb24udGVtcF9jLFxuICAgICAgICBpY29uOiBhY3Rpb24uaWNvbixcbiAgICAgICAgZm9yZWNhc3RfdXJsOiBhY3Rpb24uZm9yZWNhc3RfdXJsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL3dlYXRoZXJSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX1BIT1RPUyB9IGZyb20gXCIuLi9hY3Rpb25zL3Bob3Rvc1wiO1xuXG5leHBvcnQgY29uc3QgcGhvdG9SZWR1Y2VyRGVmYXVsdFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHBob3RvUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9QSE9UT1M6XG4gICAgICByZXR1cm4gYWN0aW9uLnBob3RvcztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yZWR1Y2Vycy9waG90b3NSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX0NIQVRURVIgfSBmcm9tIFwiLi4vYWN0aW9ucy9jaGF0dGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9DSEFUVEVSOlxuICAgICAgcmV0dXJuIGFjdGlvbi5jaGF0dGVyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL2NoYXR0ZXJSZWR1Y2VyLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIm5vZGUtdHdpdHRlclwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jb25zdCB0d2l0dGVyU2VhcmNoQ2xpZW50ID0gbmV3IFR3aXR0ZXIuU2VhcmNoQ2xpZW50KFxuICBjb25maWcuVFdJVFRFUl9DT05TVU1FUl9LRVksXG4gIGNvbmZpZy5UV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCxcbiAgY29uZmlnLlRXSVRURVJfVE9LRU4sXG4gIGNvbmZpZy5UV0lUVEVSX1RPS0VOX1NFQ1JFVFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHAgPT4ge1xuICBhcHAuZ2V0KFwiL2FwaS9jaGF0dGVyLzpsYXRpdHVkZS86bG9uZ2l0dWRlXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcmVxLnBhcmFtcztcbiAgICB0d2l0dGVyU2VhcmNoQ2xpZW50LnNlYXJjaChcbiAgICAgIHsgcTogXCJcIiwgZ2VvY29kZTogYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfSw1a21gLCBsYW5nOiBcImVuXCIsIGNvdW50OiBcIjRcIiB9LFxuICAgICAgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeyBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzLnNlbmQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH0pO1xuICBhcHAuZ2V0KFwiL2FwaS8qXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5yZWRpcmVjdChcIi9cIik7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9yb3V0ZXMvY2hhdHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdHdpdHRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtdHdpdHRlclwiXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9