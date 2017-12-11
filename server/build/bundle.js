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
      "div",
      { className: "content-container" },
      _react2.default.createElement(
        "h1",
        null,
        "404"
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

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\" />\n\n        " + helmet.title.toString() + "\n        " + helmet.meta.toString() + "\n\n        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">\n        <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">\n        <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\">\n        <link rel=\"manifest\" href=\"/manifest.json\">\n        <link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#43578c\">\n\n        <!-- iOS -->\n        <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n        <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n        <meta name=\"apple-mobile-web-app-title\" content=\"Geopulse\">\n        <link rel=\"apple-touch-startup-image\" href=\"/assets/geopulse-splash.png\">\n      \n        <!-- Other -->\n        <meta name=\"application-name\" content=\"Geopulse\">\n        <meta name=\"theme-color\" content=\"#43578c\">\n        <meta name=\"format-detection\" content=\"telephone=no\">\n      \n        <!-- Social -->\n        <meta itemprop=\"name\" content=\"Geopulse\">\n        <meta itemprop=\"description\" content=\"Get a pulse on the happenings nearby\">\n        <meta itemprop=\"image\" content=\"https://geopulse-app.herokuapp.com/assets/geopulse-banner.png\">\n      \n        <meta property=\"og:image\" content=\"https://geopulse-app.herokuapp.com/assets/geopulse-banner.png\">\n        <meta property=\"og:image:width\" content=\"1200\">\n        <meta property=\"og:image:height\" content=\"628\">\n        <meta property=\"og:title\" content=\"Geopulse\">\n        <meta property=\"og:description\" content=\"Get a pulse on the happenings nearby\">\n        <meta property=\"og:url\" content=\"https://geopulse-app.herokuapp.com\">\n      \n        <meta name=\"twitter:card\" content=\"summary_large_image\">\n        <meta name=\"twitter:title\" content=\"Geopulse\">\n        <meta name=\"twitter:description\" content=\"Get a pulse on the happenings nearby\">\n        <meta name=\"twitter:creator\" content=\"@seriouslysean\">\n        <meta name=\"twitter:image\" content=\"https://geopulse-app.herokuapp.com/assets/geopulse-banner.png\">\n        \n        <link rel=\"stylesheet\" type=\"text/css\" href=\"bundle.css\" />\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>\n        <script>window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "</script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  ";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWVkMGNjM2NlNzVlZGUxYzQ4YjQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvY2hhdHRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wYWdlcy9GZWVkUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aEdlb2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvaG9jcy93aXRoV2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFBob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aENoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NldHVwTWFwLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9XZWF0aGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9QaG90b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oZWxwZXJzL2NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL0Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9nZW9sb2NhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy93ZWF0aGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlZHVjZXJzL3Bob3Rvc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9jaGF0dGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL2NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS10d2l0dGVyXCIiXSwibmFtZXMiOlsiR09PR0xFX01BUFNfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJJTlNUQUdSQU1fQVBJX1RPS0VOIiwiVFdJVFRFUl9DT05TVU1FUl9LRVkiLCJUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCIsIlRXSVRURVJfVE9LRU4iLCJUV0lUVEVSX1RPS0VOX1NFQ1JFVCIsIldFQVRIRVJfVU5ERVJHUk9VTkRfQVBJX1RPS0VOIiwiTG9hZGluZyIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImdldEdlb2xvY2F0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImxvY2F0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkaXNwYXRjaCIsInNldEdlb2xvY2F0aW9uIiwidGltZW91dCIsIlNFVF9HRU9MT0NBVElPTiIsInR5cGUiLCJnZXRXZWF0aGVyIiwid2VhdGhlckVuZHBvaW50Iiwid2VhdGhlckRhdGEiLCJkYXRhIiwiY3VycmVudF9vYnNlcnZhdGlvbiIsImRpc3BsYXlfbG9jYXRpb24iLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5Iiwid2VhdGhlciIsInRlbXBfZiIsInRlbXBfYyIsImljb24iLCJmb3JlY2FzdF91cmwiLCJzZXRXZWF0aGVyIiwiY29uc29sZSIsImxvZyIsIlNFVF9XRUFUSEVSIiwiZ2V0UGhvdG9zIiwicGhvdG9zRW5kcG9pbnQiLCJwaG90b3NEYXRhIiwicGhvdG9zIiwiY29sbGVjdGlvbiIsInBob3RvIiwicHVzaCIsInNldFBob3RvcyIsIlNFVF9QSE9UT1MiLCJnZXRDaGF0dGVyIiwiY2hhdHRlckVuZHBvaW50IiwiY2hhdHRlckRhdGEiLCJzdGF0dXNlcyIsInNldENoYXR0ZXIiLCJTRVRfQ0hBVFRFUiIsImNoYXR0ZXIiLCJwb3J0IiwiUE9SVCIsImFwcCIsInVzZSIsInN0YXRpYyIsInJlcXVpcmUiLCJnZXQiLCJyZXEiLCJyZXMiLCJzdG9yZSIsInByb21pc2VzIiwibWFwIiwicm91dGUiLCJsb2FkRGF0YSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJhbGwiLCJjb250ZXh0IiwiY29udGVudCIsInVybCIsInJlZGlyZWN0Iiwibm90Rm91bmQiLCJzdGF0dXMiLCJzZW5kIiwibGlzdGVuIiwiQXBwIiwiY29tcG9uZW50IiwiSGVhZGVyIiwiRm9vdGVyIiwiTG9jYXRpb25XaXRoR2VvbG9jYXRpb24iLCJXZWF0aGVyV2l0aFdlYXRoZXIiLCJQaG90b3NXaXRoUGhvdG9zIiwiQ2hhdHRlcldpdGhDaGF0dGVyIiwiVmlkZW9zV2l0aFZpZGVvcyIsIkZlZWRQYWdlIiwicHJvcHMiLCJoZWlnaHQiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJ1bmRlZmluZWQiLCJ3aXRoR2VvbG9jYXRpb24iLCJXcmFwcGVkQ29tcG9uZW50IiwiSE9DIiwicmVhZHkiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIndpdGhXZWF0aGVyIiwid2l0aFBob3RvcyIsIndpdGhDaGF0dGVycyIsIkxvY2F0aW9uIiwicmVuZGVyQ29udGVudCIsImxuZyIsImxhdCIsImJhY2tncm91bmRDb2xvciIsImNsaWNrYWJsZUljb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsImRyYWdnYWJsZSIsImZ1bGxzY3JlZW5Db250cm9sIiwiZ2VzdHVyZUhhbmRsaW5nIiwia2V5Ym9hcmRTaG9ydGN1dHMiLCJtYXBUeXBlQ29udHJvbCIsIm1heFpvb20iLCJtaW5ab29tIiwicGFuQ29udHJvbCIsInJvdGF0ZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzY3JvbGx3aGVlbCIsInN0cmVldFZpZXdDb250cm9sIiwic3R5bGVzIiwiem9vbUNvbnRyb2wiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsInZpc2liaWxpdHkiLCJodWUiLCJXZWF0aGVyIiwic2hvd0ZhcmVuaGVpdCIsImhhbmRsZVRlbXBlcmF0dXJlVG9nZ2xlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXRlIiwiUGhvdG9zIiwicmVuZGVyUGhvdG9zIiwiaWQiLCJhbHQiLCJjYXB0aW9uIiwidGV4dCIsImltYWdlIiwiaW1hZ2VzIiwic3RhbmRhcmRfcmVzb2x1dGlvbiIsImxpa2VzIiwibGluayIsInVzZXJuYW1lIiwidXNlciIsImJhY2tncm91bmRJbWFnZSIsIndpZHRoIiwiQ2hhdHRlciIsInJlbmRlckNoYXR0ZXIiLCJlbnRpdGllcyIsImZhdm9yaXRlX2NvdW50IiwicmV0d2VldF9jb3VudCIsInNjcmVlbl9uYW1lIiwiZ2V0VHdpdHRlclVzZXJVcmwiLCJzZXR1cFR3ZWV0VGV4dCIsIlZpZGVvcyIsIkFib3V0UGFnZSIsIk5vdEZvdW5kUGFnZSIsImh0bWwiLCJoZWxtZXQiLCJyZW5kZXJTdGF0aWMiLCJ0aXRsZSIsInRvU3RyaW5nIiwibWV0YSIsImdldFN0YXRlIiwiZ2VvbG9jYXRpb25SZWR1Y2VyRGVmYXVsdFN0YXRlIiwiYWN0aW9uIiwid2VhdGhlclJlZHVjZXJEZWZhdWx0U3RhdGUiLCJwaG90b1JlZHVjZXJEZWZhdWx0U3RhdGUiLCJjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSIsInR3aXR0ZXJTZWFyY2hDbGllbnQiLCJTZWFyY2hDbGllbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyYW1zIiwic2VhcmNoIiwicSIsImdlb2NvZGUiLCJsYW5nIiwiY291bnQiLCJlcnJvciIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7O2tCQ0FlO0FBQ2JBLHVCQUFxQkMsUUFBUUMsR0FBUixDQUFZRixtQkFEcEI7QUFFYkcsdUJBQXFCRixRQUFRQyxHQUFSLENBQVlDLG1CQUZwQjtBQUdiQyx3QkFBc0JILFFBQVFDLEdBQVIsQ0FBWUUsb0JBSHJCO0FBSWJDLDJCQUF5QkosUUFBUUMsR0FBUixDQUFZRyx1QkFKeEI7QUFLYkMsaUJBQWVMLFFBQVFDLEdBQVIsQ0FBWUksYUFMZDtBQU1iQyx3QkFBc0JOLFFBQVFDLEdBQVIsQ0FBWUssb0JBTnJCO0FBT2JDLGlDQUErQlAsUUFBUUMsR0FBUixDQUFZTTtBQVA5QixDOzs7Ozs7QUNBZixrQzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQUE7QUFBQSxNQUFLLFdBQVUsU0FBZjtB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QUFTLEVBQUU4RyxZQUFGLEVBQVQ7QUFDRDtBQUNELG9CQUFJQyxNQUFKLEVBQVk7QUFDVi9ILHNCQUFJZ0IsSUFBSixDQUFTK0csTUFBVDtBQUNEO0FBQ0YsZUFUSDs7QUFGMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQXJJLE1BQUlJLEdBQUosQ0FBUSxRQUFSLEVBQWtCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzlCQSxRQUFJYSxRQUFKLENBQWEsR0FBYjtBQUNELEdBRkQ7QUFHRCxDQWxCRCxDOzs7Ozs7QUNYQSx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWVkMGNjM2NlNzVlZGUxYzQ4YjQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgR09PR0xFX01BUFNfQVBJX0tFWTogcHJvY2Vzcy5lbnYuR09PR0xFX01BUFNfQVBJX0tFWSxcbiAgSU5TVEFHUkFNX0FQSV9UT0tFTjogcHJvY2Vzcy5lbnYuSU5TVEFHUkFNX0FQSV9UT0tFTixcbiAgVFdJVFRFUl9DT05TVU1FUl9LRVk6IHByb2Nlc3MuZW52LlRXSVRURVJfQ09OU1VNRVJfS0VZLFxuICBUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQsXG4gIFRXSVRURVJfVE9LRU46IHByb2Nlc3MuZW52LlRXSVRURVJfVE9LRU4sXG4gIFRXSVRURVJfVE9LRU5fU0VDUkVUOiBwcm9jZXNzLmVudi5UV0lUVEVSX1RPS0VOX1NFQ1JFVCxcbiAgV0VBVEhFUl9VTkRFUkdST1VORF9BUElfVE9LRU46IHByb2Nlc3MuZW52LldFQVRIRVJfVU5ERVJHUk9VTkRfQVBJX1RPS0VOXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2NvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IEZlZWRQYWdlIGZyb20gXCIuLi9wYWdlcy9GZWVkUGFnZVwiO1xuaW1wb3J0IEFib3V0UGFnZSBmcm9tIFwiLi4vcGFnZXMvQWJvdXRQYWdlXCI7XG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gXCIuLi9wYWdlcy9Ob3RGb3VuZFBhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgLi4uQXBwLFxuICAgIHJvdXRlczogW1xuICAgICAge1xuICAgICAgICAuLi5GZWVkUGFnZSxcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIGV4YWN0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAuLi5BYm91dFBhZ2UsXG4gICAgICAgIHBhdGg6IFwiL2Fib3V0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC4uLk5vdEZvdW5kUGFnZVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcm91dGVzL0FwcFJvdXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGdldEdlb2xvY2F0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAgIGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gbG9jYXRpb24uY29vcmRzO1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0R2VvbG9jYXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSkpO1xuICAgICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbi5jb29yZHMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KFwiR2VvbG9jYXRpb24gZmFpbGVkXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGltZW91dDogMTAwMDBcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoXCJHZW9sb2NhdGlvbiBzZXJ2aWNlcyB1bmF2YWlsYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBTRVRfR0VPTE9DQVRJT04gPSBcIlNFVF9HRU9MT0NBVElPTlwiO1xuZXhwb3J0IGNvbnN0IHNldEdlb2xvY2F0aW9uID0gKGxhdGl0dWRlID0gZmFsc2UsIGxvbmdpdHVkZSA9IGZhbHNlKSA9PiAoe1xuICB0eXBlOiBTRVRfR0VPTE9DQVRJT04sXG4gIGxhdGl0dWRlLFxuICBsb25naXR1ZGVcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9hY3Rpb25zL2dlb2xvY2F0aW9uLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJFbmRwb2ludCA9IGBodHRwczovL2FwaS53dW5kZXJncm91bmQuY29tL2FwaS8ke1xuICAgIGNvbmZpZy5XRUFUSEVSX1VOREVSR1JPVU5EX0FQSV9UT0tFTlxuICB9L2NvbmRpdGlvbnMvcS8ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX0uanNvbmA7XG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXhpb3Mod2VhdGhlckVuZHBvaW50KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VycmVudF9vYnNlcnZhdGlvbjogeyBkaXNwbGF5X2xvY2F0aW9uOiB7IGNpdHksIHN0YXRlLCBjb3VudHJ5IH0sIHdlYXRoZXIsIHRlbXBfZiwgdGVtcF9jLCBpY29uLCBmb3JlY2FzdF91cmwgfVxuICAgICAgfSA9IHdlYXRoZXJEYXRhLmRhdGE7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goXG4gICAgICAgIHNldFdlYXRoZXIoe1xuICAgICAgICAgIGNpdHksXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgY291bnRyeSxcbiAgICAgICAgICB3ZWF0aGVyLFxuICAgICAgICAgIHRlbXBfZixcbiAgICAgICAgICB0ZW1wX2MsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBmb3JlY2FzdF91cmxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGFcIiwgZSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNFVF9XRUFUSEVSID0gXCJTRVRfV0VBVEhFUlwiO1xuXG5leHBvcnQgY29uc3Qgc2V0V2VhdGhlciA9ICh7XG4gIGNpdHkgPSBcIlwiLFxuICBzdGF0ZSA9IFwiXCIsXG4gIGNvdW50cnkgPSBcIlwiLFxuICB3ZWF0aGVyID0gXCJcIixcbiAgdGVtcF9mID0gXCJcIixcbiAgdGVtcF9jID0gXCJcIixcbiAgaWNvbiA9IFwiXCIsXG4gIGZvcmVjYXN0X3VybCA9IFwiXCJcbn0pID0+ICh7XG4gIHR5cGU6IFNFVF9XRUFUSEVSLFxuICBjaXR5LFxuICBzdGF0ZSxcbiAgY291bnRyeSxcbiAgd2VhdGhlcixcbiAgdGVtcF9mLFxuICB0ZW1wX2MsXG4gIGljb24sXG4gIGZvcmVjYXN0X3VybFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvd2VhdGhlci5qcyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IGdldFBob3RvcyA9IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gIGNvbnN0IHBob3Rvc0VuZHBvaW50ID0gYGh0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvbWVkaWEvc2VhcmNoP2FjY2Vzc190b2tlbj0ke1xuICAgIGNvbmZpZy5JTlNUQUdSQU1fQVBJX1RPS0VOXG4gIH0mbGF0PSR7bGF0aXR1ZGV9JmxuZz0ke2xvbmdpdHVkZX0mZGlzdGFuY2U9NTAwMCZjb3VudD02YDtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGhvdG9zRGF0YSA9IGF3YWl0IGF4aW9zKHBob3Rvc0VuZHBvaW50KTtcbiAgICAgIGNvbnN0IHsgZGF0YTogcGhvdG9zIH0gPSBwaG90b3NEYXRhLmRhdGE7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uID0gW107XG4gICAgICBmb3IgKGNvbnN0IHBob3RvIGluIHBob3Rvcykge1xuICAgICAgICBjb2xsZWN0aW9uLnB1c2gocGhvdG9zW3Bob3RvXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlzcGF0Y2goXG4gICAgICAgIHNldFBob3Rvcyh7XG4gICAgICAgICAgY29sbGVjdGlvblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHBob3RvcyBkYXRhXCIsIGUpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBTRVRfUEhPVE9TID0gXCJTRVRfUEhPVE9TXCI7XG5leHBvcnQgY29uc3Qgc2V0UGhvdG9zID0gcGhvdG9zID0+ICh7XG4gIHR5cGU6IFNFVF9QSE9UT1MsXG4gIHBob3Rvc1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvcGhvdG9zLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hhdHRlciA9IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gIGNvbnN0IGNoYXR0ZXJFbmRwb2ludCA9IGAvYXBpL2NoYXR0ZXIvJHtsYXRpdHVkZX0vJHtsb25naXR1ZGV9YDtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2hhdHRlckRhdGEgPSBhd2FpdCBheGlvcyhjaGF0dGVyRW5kcG9pbnQpO1xuICAgICAgY29uc3QgeyBzdGF0dXNlczogY29sbGVjdGlvbiB9ID0gY2hhdHRlckRhdGEuZGF0YTtcbiAgICAgIHJldHVybiBkaXNwYXRjaChcbiAgICAgICAgc2V0Q2hhdHRlcih7XG4gICAgICAgICAgY29sbGVjdGlvblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIGNoYXR0ZXIgZGF0YVwiLCBlKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgU0VUX0NIQVRURVIgPSBcIlNFVF9DSEFUVEVSXCI7XG5leHBvcnQgY29uc3Qgc2V0Q2hhdHRlciA9IGNoYXR0ZXIgPT4gKHtcbiAgdHlwZTogU0VUX0NIQVRURVIsXG4gIGNoYXR0ZXJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9hY3Rpb25zL2NoYXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCBwcm94eSBmcm9tIFwiZXhwcmVzcy1odHRwLXByb3h5XCI7XG5pbXBvcnQgUm91dGVzIGZyb20gXCIuLi8uLi9jbGllbnQvc3JjL3JvdXRlcy9BcHBSb3V0ZXNcIjtcbmltcG9ydCByZW5kZXJlciBmcm9tIFwiLi4vaGVscGVycy9yZW5kZXJlclwiO1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gXCIuLi9oZWxwZXJzL2NyZWF0ZVN0b3JlXCI7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJjbGllbnQvcHVibGljXCIpKTtcblxucmVxdWlyZShcIi4uL3JvdXRlcy9jaGF0dGVyXCIpKGFwcCk7XG5cbmFwcC5nZXQoXCIqXCIsIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlcSk7XG5cbiAgY29uc3QgcHJvbWlzZXMgPSBtYXRjaFJvdXRlcyhSb3V0ZXMsIHJlcS5wYXRoKVxuICAgIC5tYXAoKHsgcm91dGUgfSkgPT4ge1xuICAgICAgcmV0dXJuIHJvdXRlLmxvYWREYXRhID8gcm91dGUubG9hZERhdGEoc3RvcmUpIDogbnVsbDtcbiAgICB9KVxuICAgIC5tYXAocHJvbWlzZSA9PiB7XG4gICAgICBpZiAocHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlKS5jYXRjaChyZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcbiAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyZXIocmVxLCBzdG9yZSwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGV4dC51cmwpIHtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoMzAxLCBjb250ZXh0LnVybCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQubm90Rm91bmQpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KTtcbiAgICB9XG5cbiAgICByZXMuc2VuZChjb250ZW50KTtcbiAgfSk7XG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIG1hZ2ljIGlzIGhhcHBlbmluZyBvbiBwb3J0XCIsIHBvcnQpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1odHRwLXByb3h5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuY29uc3QgQXBwID0gKHsgcm91dGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+R2VvcHVsc2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkdlb3B1bHNlXCIgLz5cbiAgICAgIDwvSGVsbWV0PlxuXG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIHtyZW5kZXJSb3V0ZXMocm91dGUucm91dGVzKX1cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IEFwcFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tYmctc2t5LWRhcmsgaGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCI+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28tZ2VvcHVsc2Uuc3ZnXCIgYWx0PVwiR2VvcHVsc2UgbG9nb1wiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkdlb3B1bHNlPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtcIiBhY3RpdmVDbGFzc05hbWU9XCJoZWFkZXJfX2xpbmstLWFjdGl2ZVwiIGV4YWN0PlxuICAgICAgICAgICAgICAgIEZlZWRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtcIiBhY3RpdmVDbGFzc05hbWU9XCJoZWFkZXJfX2xpbmstLWFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1iZy1lYXJ0aC1kYXJrZXN0IGZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxwPlxuICAgICAgICBDcmFmdGVkIHdpdGggbG92ZSAve1wiIFwifVxuICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9XCJodHRwczovL3d3dy5jb2Rlc2VyaW91cy5jb21cIiBjbGFzc05hbWU9XCJmb290ZXJfX2xpbmtcIj5cbiAgICAgICAgICBDb2RlIFNlcmlvdXNcbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCI7XG5pbXBvcnQgeyBnZXRHZW9sb2NhdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL2dlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4uL2FjdGlvbnMvd2VhdGhlclwiO1xuaW1wb3J0IHsgZ2V0UGhvdG9zIH0gZnJvbSBcIi4uL2FjdGlvbnMvcGhvdG9zXCI7XG5pbXBvcnQgeyBnZXRDaGF0dGVyIH0gZnJvbSBcIi4uL2FjdGlvbnMvY2hhdHRlclwiO1xuaW1wb3J0IHdpdGhHZW9sb2NhdGlvbiBmcm9tIFwiLi4vaG9jcy93aXRoR2VvbG9jYXRpb25cIjtcbmltcG9ydCB3aXRoV2VhdGhlciBmcm9tIFwiLi4vaG9jcy93aXRoV2VhdGhlclwiO1xuaW1wb3J0IHdpdGhQaG90b3MgZnJvbSBcIi4uL2hvY3Mvd2l0aFBob3Rvc1wiO1xuaW1wb3J0IHdpdGhDaGF0dGVyIGZyb20gXCIuLi9ob2NzL3dpdGhDaGF0dGVyXCI7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9jYXRpb25cIjtcbmltcG9ydCBXZWF0aGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1dlYXRoZXJcIjtcbmltcG9ydCBQaG90b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGhvdG9zXCI7XG5pbXBvcnQgQ2hhdHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGF0dGVyXCI7XG5pbXBvcnQgVmlkZW9zIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZGVvc1wiO1xuXG5jb25zdCBMb2NhdGlvbldpdGhHZW9sb2NhdGlvbiA9IHdpdGhHZW9sb2NhdGlvbihMb2NhdGlvbik7XG5jb25zdCBXZWF0aGVyV2l0aFdlYXRoZXIgPSB3aXRoV2VhdGhlcihXZWF0aGVyKTtcbmNvbnN0IFBob3Rvc1dpdGhQaG90b3MgPSB3aXRoUGhvdG9zKFBob3Rvcyk7XG5jb25zdCBDaGF0dGVyV2l0aENoYXR0ZXIgPSB3aXRoQ2hhdHRlcihDaGF0dGVyKTtcbmNvbnN0IFZpZGVvc1dpdGhWaWRlb3MgPSB3aXRoR2VvbG9jYXRpb24oVmlkZW9zKTtcblxuY2xhc3MgRmVlZFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldEdlb2xvY2F0aW9uKCkudGhlbihsb2NhdGlvbiA9PiB7XG4gICAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IGxvY2F0aW9uO1xuICAgICAgdGhpcy5wcm9wcy5nZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgdGhpcy5wcm9wcy5nZXRQaG90b3MobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgICB0aGlzLnByb3BzLmdldENoYXR0ZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKGNvbmZpZy5HT09HTEVfTUFQU19BUElfS0VZKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWZlZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWZlZWRcIj5cbiAgICAgICAgICA8TG9jYXRpb25XaXRoR2VvbG9jYXRpb25cbiAgICAgICAgICAgIGdvb2dsZU1hcFVSTD17YGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHtcbiAgICAgICAgICAgICAgY29uZmlnLkdPT0dMRV9NQVBTX0FQSV9LRVlcbiAgICAgICAgICAgIH0mdj0zLmV4cCZsaWJyYXJpZXM9Z2VvbWV0cnkscGxhY2VzYH1cbiAgICAgICAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGA0MDBweGAgfX0gLz59XG4gICAgICAgICAgICBtYXBFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFdlYXRoZXJXaXRoV2VhdGhlciAvPlxuICAgICAgICAgIDxQaG90b3NXaXRoUGhvdG9zIC8+XG4gICAgICAgICAgPENoYXR0ZXJXaXRoQ2hhdHRlciAvPlxuICAgICAgICAgIDxWaWRlb3NXaXRoVmlkZW9zIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRHZW9sb2NhdGlvbjogKCkgPT4gZGlzcGF0Y2goZ2V0R2VvbG9jYXRpb24oKSksXG4gIGdldFdlYXRoZXI6IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiBkaXNwYXRjaChnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpKSxcbiAgZ2V0UGhvdG9zOiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4gZGlzcGF0Y2goZ2V0UGhvdG9zKGxhdGl0dWRlLCBsb25naXR1ZGUpKSxcbiAgZ2V0Q2hhdHRlcjogKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IGRpc3BhdGNoKGdldENoYXR0ZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IGNvbm5lY3QodW5kZWZpbmVkLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZlZWRQYWdlKVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcGFnZXMvRmVlZFBhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIHdpdGhHZW9sb2NhdGlvbihXcmFwcGVkQ29tcG9uZW50KSB7XG4gIGNsYXNzIEhPQyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICByZWFkeTogZmFsc2VcbiAgICB9O1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBjb25zdCB7IGdlb2xvY2F0aW9uIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmVhZHkgJiYgZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgIHJlYWR5OiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlYWR5O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHJlYWR5PXt0aGlzLnN0YXRlLnJlYWR5fSAvPjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBnZW9sb2NhdGlvbiB9KSA9PiAoe1xuICAgIGdlb2xvY2F0aW9uXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSE9DKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEdlb2xvY2F0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9ob2NzL3dpdGhHZW9sb2NhdGlvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZnVuY3Rpb24gd2l0aFdlYXRoZXIoV3JhcHBlZENvbXBvbmVudCkge1xuICBjbGFzcyBIT0MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBnZW9sb2NhdGlvbiwgd2VhdGhlciB9ID0gbmV4dFByb3BzO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJlYWR5ICYmIGdlb2xvY2F0aW9uICYmIHdlYXRoZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgIHJlYWR5OiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlYWR5O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHJlYWR5PXt0aGlzLnN0YXRlLnJlYWR5fSAvPjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBnZW9sb2NhdGlvbiwgd2VhdGhlciB9KSA9PiAoe1xuICAgIGdlb2xvY2F0aW9uLFxuICAgIHdlYXRoZXJcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIT0MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoV2VhdGhlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaG9jcy93aXRoV2VhdGhlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZnVuY3Rpb24gd2l0aFBob3RvcyhXcmFwcGVkQ29tcG9uZW50KSB7XG4gIGNsYXNzIEhPQyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICByZWFkeTogZmFsc2VcbiAgICB9O1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBjb25zdCB7IGdlb2xvY2F0aW9uLCBwaG90b3MgfSA9IG5leHRQcm9wcztcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkeSAmJiBnZW9sb2NhdGlvbiAmJiBwaG90b3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgIHJlYWR5OiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlYWR5O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHJlYWR5PXt0aGlzLnN0YXRlLnJlYWR5fSAvPjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBnZW9sb2NhdGlvbiwgcGhvdG9zIH0pID0+ICh7XG4gICAgZ2VvbG9jYXRpb24sXG4gICAgcGhvdG9zXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSE9DKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBob3RvcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaG9jcy93aXRoUGhvdG9zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiB3aXRoQ2hhdHRlcnMoV3JhcHBlZENvbXBvbmVudCkge1xuICBjbGFzcyBIT0MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBnZW9sb2NhdGlvbiwgY2hhdHRlciB9ID0gbmV4dFByb3BzO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJlYWR5ICYmIGdlb2xvY2F0aW9uICYmIGNoYXR0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgIHJlYWR5OiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlYWR5O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHJlYWR5PXt0aGlzLnN0YXRlLnJlYWR5fSAvPjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBnZW9sb2NhdGlvbiwgY2hhdHRlciB9KSA9PiAoe1xuICAgIGdlb2xvY2F0aW9uLFxuICAgIGNoYXR0ZXJcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIT0MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ2hhdHRlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2hvY3Mvd2l0aENoYXR0ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU2NyaXB0anMsIHdpdGhHb29nbGVNYXAsIEdvb2dsZU1hcCB9IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xuaW1wb3J0IHNldHVwTWFwIGZyb20gXCIuLi8uLi8uLi9jb25maWcvc2V0dXBNYXBcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcblxuY2xhc3MgTG9jYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9uZ2l0dWRlOiBsbmcsIGxhdGl0dWRlOiBsYXQgfSA9IHRoaXMucHJvcHMuZ2VvbG9jYXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8R29vZ2xlTWFwXG4gICAgICAgICAgZGVmYXVsdFpvb209ezE0fVxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0LCBsbmcgfX1cbiAgICAgICAgICBkZWZhdWx0T3B0aW9ucz17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM5MGFjZjNcIixcbiAgICAgICAgICAgIGNsaWNrYWJsZUljb25zOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgZ2VzdHVyZUhhbmRsaW5nOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGtleWJvYXJkU2hvcnRjdXRzOiBmYWxzZSxcbiAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIG1heFpvb206IDE0LFxuICAgICAgICAgICAgbWluWm9vbTogMTQsXG4gICAgICAgICAgICBwYW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHJvdGF0ZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHN0eWxlczogc2V0dXBNYXAsXG4gICAgICAgICAgICB6b29tQ29udHJvbDogZmFsc2VcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLWJnLXNreS1saWdodCBsb2NhdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uX19jb250ZW50XCI+e3RoaXMucHJvcHMucmVhZHkgPyB0aGlzLnJlbmRlckNvbnRlbnQoKSA6IDxMb2FkaW5nIC8+fTwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNjcmlwdGpzKHdpdGhHb29nbGVNYXAoTG9jYXRpb24pKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9Mb2NhdGlvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZ29vZ2xlLW1hcHNcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwiYWxsXCIsXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IFwiIzRlNWM2YVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IDdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogMTlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwib25cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcImxhbmRzY2FwZVwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTEwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAxMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwic2ltcGxpZmllZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogXCIjZjNmN2ZhXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJwb2lcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC0xMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogMTAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBodWU6IFwiI2JiYzBjNFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtOTNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogMzFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwic2ltcGxpZmllZFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsc1wiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNiYmMwYzRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDMxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBodWU6IFwiI2JiYzBjNFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtOTNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogLTJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwic2ltcGxpZmllZFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicm9hZC5sb2NhbFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBodWU6IFwiI2U5ZWJlZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtOTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogLThcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwic2ltcGxpZmllZFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNlOWViZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogNjlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwib25cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtNzhcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogNjdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwic2ltcGxpZmllZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogXCIjZGRlN2YyXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvc2V0dXBNYXAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNsYXNzIFdlYXRoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzaG93RmFyZW5oZWl0OiB0cnVlXG4gIH07XG4gIGhhbmRsZVRlbXBlcmF0dXJlVG9nZ2xlID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzaG93RmFyZW5oZWl0OiAhcHJldlN0YXRlLnNob3dGYXJlbmhlaXRcbiAgICB9KSk7XG4gIH07XG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaXR5LCBzdGF0ZSwgY291bnRyeSwgd2VhdGhlciwgdGVtcF9mLCB0ZW1wX2MsIGljb24sIGZvcmVjYXN0X3VybCB9ID0gdGhpcy5wcm9wcy53ZWF0aGVyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHdlYXRoZXJfX3RlbXBlcmF0dXJlICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dGYXJlbmhlaXQgPyBcIndlYXRoZXJfX3RlbXBlcmF0dXJlLS1mXCIgOiBcIndlYXRoZXJfX3RlbXBlcmF0dXJlLS1jXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRlbXBlcmF0dXJlVG9nZ2xlfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcCB0ZW1wLS1mXCI+e3RlbXBfZn0mZGVnO0Y8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wIHRlbXAtLWNcIj57dGVtcF9jfSZkZWc7Qzwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyX19kZXRhaWxzXCI+XG4gICAgICAgICAgPGgzPnt3ZWF0aGVyfTwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7Y2l0eX0sIHtzdGF0ZX0gLyB7Y291bnRyeX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtbGlnaHQgd2VhdGhlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5XZWF0aGVyPC9oMT5cblxuICAgICAgICAgICAge3RoaXMucHJvcHMucmVhZHkgPyB0aGlzLnJlbmRlckNvbnRlbnQoKSA6IDxMb2FkaW5nIC8+fVxuXG4gICAgICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9XCJodHRwczovL3d3dy53dW5kZXJncm91bmQuY29tL1wiIGNsYXNzTmFtZT1cInNlY3Rpb25fX2F0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgICAgIFBvd2VyZWQgYnkgV2VhdGhlciBVbmRlcmdyb3VuZFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvV2VhdGhlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcblxuY2xhc3MgUGhvdG9zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyUGhvdG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLnByb3BzLnBob3Rvcy5jb2xsZWN0aW9uO1xuICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcChwaG90byA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlkLFxuICAgICAgICBjYXB0aW9uOiB7IHRleHQ6IGFsdCB9LFxuICAgICAgICBpbWFnZXM6IHsgc3RhbmRhcmRfcmVzb2x1dGlvbjogaW1hZ2UgfSxcbiAgICAgICAgbGlrZXMsXG4gICAgICAgIGxpbmssXG4gICAgICAgIHVzZXI6IHsgdXNlcm5hbWUgfVxuICAgICAgfSA9IHBob3RvO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT1cInBob3Rvc19fcGhvdG9cIj5cbiAgICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9e2xpbmt9IHRpdGxlPXthbHR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b3NfX2ltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2UudXJsfSlgIH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UudXJsfSB3aWR0aD17aW1hZ2Uud2lkdGh9IGhlaWdodD17aW1hZ2UuaGVpZ2h0fSBhbHQ9e2FsdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b3NfX3VzZXJuYW1lXCI+e3VzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGhvdG9zX19ncmlkXCI+e3RoaXMucmVuZGVyUGhvdG9zKCl9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLW1lZGl1bSBwaG90b3NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lciBjb250ZW50LWNvbnRhaW5lci0tZ3JpZC1zcGFjaW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b3NfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlBob3RvczwvaDE+XG5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICBQb3dlcmVkIGJ5IEluc3RhZ3JhbVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9QaG90b3MuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRUd2l0dGVyVXNlclVybCwgc2V0dXBUd2VldFRleHQgfSBmcm9tIFwiLi4vaGVscGVycy9jaGF0dGVyXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNsYXNzIENoYXR0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJDaGF0dGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLnByb3BzLmNoYXR0ZXIuY29sbGVjdGlvbjtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoc3RhdHVzID0+IHtcbiAgICAgIGNvbnN0IHsgZW50aXRpZXMsIGZhdm9yaXRlX2NvdW50LCBpZCwgcmV0d2VldF9jb3VudCwgdGV4dCwgdXNlcjogeyBzY3JlZW5fbmFtZSB9IH0gPSBzdGF0dXM7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtpZH0gY2xhc3NOYW1lPVwiY2hhdHRlcl9fc3RhdHVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0dGVyX190ZXh0XCI+e3NldHVwVHdlZXRUZXh0KHRleHQsIGVudGl0aWVzKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c19fdXNlcm5hbWVcIj5cbiAgICAgICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj17Z2V0VHdpdHRlclVzZXJVcmwoc2NyZWVuX25hbWUpfSB0aXRsZT17YEZvbGxvdyAke3NjcmVlbl9uYW1lfSBvbiBUd2l0dGVyYH0+XG4gICAgICAgICAgICAgIEB7c2NyZWVuX25hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXR0ZXJfX2xpc3RcIj57dGhpcy5yZW5kZXJDaGF0dGVyKCl9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWRhcmsgY2hhdHRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyIGNvbnRlbnQtY29udGFpbmVyLS1ncmlkLXNwYWNpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXR0ZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPkNoYXR0ZXI8L2gxPlxuXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkeSA/IHRoaXMucmVuZGVyQ29udGVudCgpIDogPExvYWRpbmcgLz59XG5cbiAgICAgICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL1wiIGNsYXNzTmFtZT1cInNlY3Rpb25fX2F0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgICAgIFBvd2VyZWQgYnkgVHdpdHRlclxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXR0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ2hhdHRlci5qcyIsImV4cG9ydCBjb25zdCBnZXRUd2l0dGVyVXNlclVybCA9IHNjcmVlbl9uYW1lID0+IHtcbiAgcmV0dXJuIGBodHRwczovL3d3dy50d2l0dGVyLmNvbS8ke3NjcmVlbl9uYW1lfWA7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0dXBUd2VldFRleHQgPSAodGV4dCwgZW50aXRpZXMpID0+IHtcbiAgcmV0dXJuIHRleHQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9oZWxwZXJzL2NoYXR0ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNvbnN0IHJlbmRlckNvbnRlbnQgPSBwcm9wcyA9PiAoXG4gIDx1bD5cbiAgICA8bGk+TGF0OiB7cHJvcHMuZ2VvbG9jYXRpb24ubGF0aXR1ZGV9PC9saT5cbiAgICA8bGk+TG9uOiB7cHJvcHMuZ2VvbG9jYXRpb24ubG9uZ2l0dWRlfTwvbGk+XG4gIDwvdWw+XG4pO1xuXG5jb25zdCBWaWRlb3MgPSBwcm9wcyA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1kYXJrZXIgdmlkZW9zXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb3NfX2NvbnRlbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+VmlkZW9zPC9oMT5cblxuICAgICAgICB7cHJvcHMucmVhZHkgPyByZW5kZXJDb250ZW50KHByb3BzKSA6IDxMb2FkaW5nIC8+fVxuXG4gICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL1wiIGNsYXNzTmFtZT1cInNlY3Rpb25fX2F0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgUG93ZXJlZCBieSBZb3VUdWJlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVmlkZW9zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hYm91dFwiPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1za3ktbGlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+QWJvdXQ8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEdlb3B1bHNlIGlzIGEgdG9vbCB0aGF0IGFsbG93cyB5b3UgdG8gc2VlIGNvbnRlbnQgYmFzZWQgb24geW91ciBsb2NhdGlvbiBpbmNsdWRpbmcgYSBHb29nbGUgTWFwIG9mIHRoZSBhcmVhLFxuICAgICAgICAgICAgdGhlIGxvY2FsIHdlYXRoZXIgZnJvbSBXZWF0aGVyIFVuZGVyZ3JvdW5kLCBwaG90b3MgZnJvbSBJbnN0YWdyYW0sIHR3ZWV0cyBmcm9tIFR3aXR0ZXIgYW5kIHZpZGVvcyBmcm9tXG4gICAgICAgICAgICBZb3VUdWJlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWxpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlJvYWRtYXA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD4oUm9hZG1hcCk8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1tZWRpdW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+UHJpdmFjeTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxwPk5vIGRhdGEgaXMgc2F2ZWQgb24gb3VyIHNlcnZlcnMgYW5kIGlzIG9ubHkgcmVxdWVzdGVkIG9uIGFuIGFzLW5lZWRlZCBiYXNpcy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlRoYW5rczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxwPihQZW9wbGUpPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFya2VyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPkNvbnRhY3Q8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD4oSW5mbyk8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBBYm91dFBhZ2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3BhZ2VzL0Fib3V0UGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTm90Rm91bmRQYWdlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utbm90LWZvdW5kXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPGgxPjQwNDwvaDE+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IE5vdEZvdW5kUGFnZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCBBcHBSb3V0ZXMgZnJvbSBcIi4uLy4uL2NsaWVudC9zcmMvcm91dGVzL0FwcFJvdXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCBzdG9yZSwgY29udGV4dCkgPT4ge1xuICBjb25zdCBodG1sID0gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnBhdGh9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj57cmVuZGVyUm91dGVzKEFwcFJvdXRlcyl9PC9kaXY+XG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xuICBjb25zdCBjb250ZW50ID0gcmVuZGVyVG9TdHJpbmcoaHRtbCk7XG4gIGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcblxuICByZXR1cm4gYFxuICAgIDwhRE9DVFlQRSBodG1sPlxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHZpZXdwb3J0LWZpdD1jb3ZlclwiIC8+XG5cbiAgICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cbiAgICAgICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxuXG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCI+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIj5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiPlxuICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzQzNTc4Y1wiPlxuXG4gICAgICAgIDwhLS0gaU9TIC0tPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiYmxhY2tcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkdlb3B1bHNlXCI+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLXN0YXJ0dXAtaW1hZ2VcIiBocmVmPVwiL2Fzc2V0cy9nZW9wdWxzZS1zcGxhc2gucG5nXCI+XG4gICAgICBcbiAgICAgICAgPCEtLSBPdGhlciAtLT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxpY2F0aW9uLW5hbWVcIiBjb250ZW50PVwiR2VvcHVsc2VcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM0MzU3OGNcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cImZvcm1hdC1kZXRlY3Rpb25cIiBjb250ZW50PVwidGVsZXBob25lPW5vXCI+XG4gICAgICBcbiAgICAgICAgPCEtLSBTb2NpYWwgLS0+XG4gICAgICAgIDxtZXRhIGl0ZW1wcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJHZW9wdWxzZVwiPlxuICAgICAgICA8bWV0YSBpdGVtcHJvcD1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBhIHB1bHNlIG9uIHRoZSBoYXBwZW5pbmdzIG5lYXJieVwiPlxuICAgICAgICA8bWV0YSBpdGVtcHJvcD1cImltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZ2VvcHVsc2UtYXBwLmhlcm9rdWFwcC5jb20vYXNzZXRzL2dlb3B1bHNlLWJhbm5lci5wbmdcIj5cbiAgICAgIFxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZ2VvcHVsc2UtYXBwLmhlcm9rdWFwcC5jb20vYXNzZXRzL2dlb3B1bHNlLWJhbm5lci5wbmdcIj5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCI+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYyOFwiPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkdlb3B1bHNlXCI+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2V0IGEgcHVsc2Ugb24gdGhlIGhhcHBlbmluZ3MgbmVhcmJ5XCI+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZ2VvcHVsc2UtYXBwLmhlcm9rdWFwcC5jb21cIj5cbiAgICAgIFxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiR2VvcHVsc2VcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2V0IGEgcHVsc2Ugb24gdGhlIGhhcHBlbmluZ3MgbmVhcmJ5XCI+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHNlcmlvdXNseXNlYW5cIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9nZW9wdWxzZS1hcHAuaGVyb2t1YXBwLmNvbS9hc3NldHMvZ2VvcHVsc2UtYmFubmVyLnBuZ1wiPlxuICAgICAgICBcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJidW5kbGUuY3NzXCIgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cbiAgICAgICAgPHNjcmlwdD53aW5kb3cuSU5JVElBTF9TVEFURSA9ICR7c2VyaWFsaXplKHN0b3JlLmdldFN0YXRlKCkpfTwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImJ1bmRsZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgYDtcblxuICByZXMuc2VuZChodG1sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvaGVscGVycy9yZW5kZXJlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIlxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuLi8uLi9jbGllbnQvc3JjL3JlZHVjZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9oZWxwZXJzL2NyZWF0ZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBnZW9sb2NhdGlvblJlZHVjZXIgZnJvbSBcIi4vZ2VvbG9jYXRpb25SZWR1Y2VyXCI7XG5pbXBvcnQgd2VhdGhlclJlZHVjZXIgZnJvbSBcIi4vd2VhdGhlclJlZHVjZXJcIjtcbmltcG9ydCBwaG90b3NSZWR1Y2VyIGZyb20gXCIuL3Bob3Rvc1JlZHVjZXJcIjtcbmltcG9ydCBjaGF0dGVyUmVkdWNlciBmcm9tIFwiLi9jaGF0dGVyUmVkdWNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBnZW9sb2NhdGlvbjogZ2VvbG9jYXRpb25SZWR1Y2VyLFxuICB3ZWF0aGVyOiB3ZWF0aGVyUmVkdWNlcixcbiAgcGhvdG9zOiBwaG90b3NSZWR1Y2VyLFxuICBjaGF0dGVyOiBjaGF0dGVyUmVkdWNlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgU0VUX0dFT0xPQ0FUSU9OIH0gZnJvbSBcIi4uL2FjdGlvbnMvZ2VvbG9jYXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdlb2xvY2F0aW9uUmVkdWNlckRlZmF1bHRTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBnZW9sb2NhdGlvblJlZHVjZXJEZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfR0VPTE9DQVRJT046XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXRpdHVkZTogYWN0aW9uLmxhdGl0dWRlLFxuICAgICAgICBsb25naXR1ZGU6IGFjdGlvbi5sb25naXR1ZGVcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcmVkdWNlcnMvZ2VvbG9jYXRpb25SZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX1dFQVRIRVIgfSBmcm9tIFwiLi4vYWN0aW9ucy93ZWF0aGVyXCI7XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyUmVkdWNlckRlZmF1bHRTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB3ZWF0aGVyUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9XRUFUSEVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2l0eTogYWN0aW9uLmNpdHksXG4gICAgICAgIHN0YXRlOiBhY3Rpb24uc3RhdGUsXG4gICAgICAgIGNvdW50cnk6IGFjdGlvbi5jb3VudHJ5LFxuICAgICAgICB3ZWF0aGVyOiBhY3Rpb24ud2VhdGhlcixcbiAgICAgICAgdGVtcF9mOiBhY3Rpb24udGVtcF9mLFxuICAgICAgICB0ZW1wX2M6IGFjdGlvbi50ZW1wX2MsXG4gICAgICAgIGljb246IGFjdGlvbi5pY29uLFxuICAgICAgICBmb3JlY2FzdF91cmw6IGFjdGlvbi5mb3JlY2FzdF91cmxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcmVkdWNlcnMvd2VhdGhlclJlZHVjZXIuanMiLCJpbXBvcnQgeyBTRVRfUEhPVE9TIH0gZnJvbSBcIi4uL2FjdGlvbnMvcGhvdG9zXCI7XG5cbmV4cG9ydCBjb25zdCBwaG90b1JlZHVjZXJEZWZhdWx0U3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gcGhvdG9SZWR1Y2VyRGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX1BIT1RPUzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGhvdG9zO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL3Bob3Rvc1JlZHVjZXIuanMiLCJpbXBvcnQgeyBTRVRfQ0hBVFRFUiB9IGZyb20gXCIuLi9hY3Rpb25zL2NoYXR0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNoYXR0ZXJSZWR1Y2VyRGVmYXVsdFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGNoYXR0ZXJSZWR1Y2VyRGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0NIQVRURVI6XG4gICAgICByZXR1cm4gYWN0aW9uLmNoYXR0ZXI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcmVkdWNlcnMvY2hhdHRlclJlZHVjZXIuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVHdpdHRlciBmcm9tIFwibm9kZS10d2l0dGVyXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XG5cbmNvbnN0IHR3aXR0ZXJTZWFyY2hDbGllbnQgPSBuZXcgVHdpdHRlci5TZWFyY2hDbGllbnQoXG4gIGNvbmZpZy5UV0lUVEVSX0NPTlNVTUVSX0tFWSxcbiAgY29uZmlnLlRXSVRURVJfQ09OU1VNRVJfU0VDUkVULFxuICBjb25maWcuVFdJVFRFUl9UT0tFTixcbiAgY29uZmlnLlRXSVRURVJfVE9LRU5fU0VDUkVUXG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcCA9PiB7XG4gIGFwcC5nZXQoXCIvYXBpL2NoYXR0ZXIvOmxhdGl0dWRlLzpsb25naXR1ZGVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSByZXEucGFyYW1zO1xuICAgIHR3aXR0ZXJTZWFyY2hDbGllbnQuc2VhcmNoKFxuICAgICAgeyBxOiBcIlwiLCBnZW9jb2RlOiBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9LDVrbWAsIGxhbmc6IFwiZW5cIiwgY291bnQ6IFwiNFwiIH0sXG4gICAgICAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuc2VuZCh7IGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXMuc2VuZChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG4gIGFwcC5nZXQoXCIvYXBpLypcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnJlZGlyZWN0KFwiL1wiKTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3JvdXRlcy9jaGF0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS10d2l0dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS10d2l0dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=