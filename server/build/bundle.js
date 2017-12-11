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

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        " + helmet.title.toString() + "\n        " + helmet.meta.toString() + "\n        \n        <link rel=\"stylesheet\" type=\"text/css\" href=\"bundle.css\" />\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>\n        <script>window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "</script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  ";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODRkOWY3NDZlN2ZkYmExODk1OGYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvY2hhdHRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wYWdlcy9GZWVkUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aEdlb2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvaG9jcy93aXRoV2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFBob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aENoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NldHVwTWFwLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9XZWF0aGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9QaG90b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oZWxwZXJzL2NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL0Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9nZW9sb2NhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy93ZWF0aGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlZHVjZXJzL3Bob3Rvc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9jaGF0dGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL2NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS10d2l0dGVyXCIiXSwibmFtZXMiOlsiR09PR0xFX01BUFNfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJJTlNUQUdSQU1fQVBJX1RPS0VOIiwiVFdJVFRFUl9DT05TVU1FUl9LRVkiLCJUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCIsIlRXSVRURVJfVE9LRU4iLCJUV0lUVEVSX1RPS0VOX1NFQ1JFVCIsIldFQVRIRVJfVU5ERVJHUk9VTkRfQVBJX1RPS0VOIiwiTG9hZGluZyIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImdldEdlb2xvY2F0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImxvY2F0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkaXNwYXRjaCIsInNldEdlb2xvY2F0aW9uIiwidGltZW91dCIsIlNFVF9HRU9MT0NBVElPTiIsInR5cGUiLCJnZXRXZWF0aGVyIiwid2VhdGhlckVuZHBvaW50Iiwid2VhdGhlckRhdGEiLCJkYXRhIiwiY3VycmVudF9vYnNlcnZhdGlvbiIsImRpc3BsYXlfbG9jYXRpb24iLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5Iiwid2VhdGhlciIsInRlbXBfZiIsInRlbXBfYyIsImljb24iLCJmb3JlY2FzdF91cmwiLCJzZXRXZWF0aGVyIiwiY29uc29sZSIsImxvZyIsIlNFVF9XRUFUSEVSIiwiZ2V0UGhvdG9zIiwicGhvdG9zRW5kcG9pbnQiLCJwaG90b3NEYXRhIiwicGhvdG9zIiwiY29sbGVjdGlvbiIsInBob3RvIiwicHVzaCIsInNldFBob3RvcyIsIlNFVF9QSE9UT1MiLCJnZXRDaGF0dGVyIiwiY2hhdHRlckVuZHBvaW50IiwiY2hhdHRlckRhdGEiLCJzdGF0dXNlcyIsInNldENoYXR0ZXIiLCJTRVRfQ0hBVFRFUiIsImNoYXR0ZXIiLCJwb3J0IiwiUE9SVCIsImFwcCIsInVzZSIsInN0YXRpYyIsInJlcXVpcmUiLCJnZXQiLCJyZXEiLCJyZXMiLCJzdG9yZSIsInByb21pc2VzIiwibWFwIiwicm91dGUiLCJsb2FkRGF0YSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJhbGwiLCJjb250ZXh0IiwiY29udGVudCIsInVybCIsInJlZGlyZWN0Iiwibm90Rm91bmQiLCJzdGF0dXMiLCJzZW5kIiwibGlzdGVuIiwiQXBwIiwiY29tcG9uZW50IiwiSGVhZGVyIiwiRm9vdGVyIiwiTG9jYXRpb25XaXRoR2VvbG9jYXRpb24iLCJXZWF0aGVyV2l0aFdlYXRoZXIiLCJQaG90b3NXaXRoUGhvdG9zIiwiQ2hhdHRlcldpdGhDaGF0dGVyIiwiVmlkZW9zV2l0aFZpZGVvcyIsIkZlZWRQYWdlIiwicHJvcHMiLCJoZWlnaHQiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJ1bmRlZmluZWQiLCJ3aXRoR2VvbG9jYXRpb24iLCJXcmFwcGVkQ29tcG9uZW50IiwiSE9DIiwicmVhZHkiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIndpdGhXZWF0aGVyIiwid2l0aFBob3RvcyIsIndpdGhDaGF0dGVycyIsIkxvY2F0aW9uIiwicmVuZGVyQ29udGVudCIsImxuZyIsImxhdCIsImJhY2tncm91bmRDb2xvciIsImNsaWNrYWJsZUljb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsImRyYWdnYWJsZSIsImZ1bGxzY3JlZW5Db250cm9sIiwiZ2VzdHVyZUhhbmRsaW5nIiwia2V5Ym9hcmRTaG9ydGN1dHMiLCJtYXBUeXBlQ29udHJvbCIsIm1heFpvb20iLCJtaW5ab29tIiwicGFuQ29udHJvbCIsInJvdGF0ZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzY3JvbGx3aGVlbCIsInN0cmVldFZpZXdDb250cm9sIiwic3R5bGVzIiwiem9vbUNvbnRyb2wiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsInZpc2liaWxpdHkiLCJodWUiLCJXZWF0aGVyIiwic2hvd0ZhcmVuaGVpdCIsImhhbmRsZVRlbXBlcmF0dXJlVG9nZ2xlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXRlIiwiUGhvdG9zIiwicmVuZGVyUGhvdG9zIiwiaWQiLCJhbHQiLCJjYXB0aW9uIiwidGV4dCIsImltYWdlIiwiaW1hZ2VzIiwic3RhbmRhcmRfcmVzb2x1dGlvbiIsImxpa2VzIiwibGluayIsInVzZXJuYW1lIiwidXNlciIsImJhY2tncm91bmRJbWFnZSIsIndpZHRoIiwiQ2hhdHRlciIsInJlbmRlckNoYXR0ZXIiLCJlbnRpdGllcyIsImZhdm9yaXRlX2NvdW50IiwicmV0d2VldF9jb3VudCIsInNjcmVlbl9uYW1lIiwiZ2V0VHdpdHRlclVzZXJVcmwiLCJzZXR1cFR3ZWV0VGV4dCIsIlZpZGVvcyIsIkFib3V0UGFnZSIsIk5vdEZvdW5kUGFnZSIsImh0bWwiLCJoZWxtZXQiLCJyZW5kZXJTdGF0aWMiLCJ0aXRsZSIsInRvU3RyaW5nIiwibWV0YSIsImdldFN0YXRlIiwiZ2VvbG9jYXRpb25SZWR1Y2VyRGVmYXVsdFN0YXRlIiwiYWN0aW9uIiwid2VhdGhlclJlZHVjZXJEZWZhdWx0U3RhdGUiLCJwaG90b1JlZHVjZXJEZWZhdWx0U3RhdGUiLCJjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSIsInR3aXR0ZXJTZWFyY2hDbGllbnQiLCJTZWFyY2hDbGllbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyYW1zIiwic2VhcmNoIiwicSIsImdlb2NvZGUiLCJsYW5nIiwiY291bnQiLCJlcnJvciIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7O2tCQ0FlO0FBQ2JBLHVCQUFxQkMsUUFBUUMsR0FBUixDQUFZRixtQkFEcEI7QUFFYkcsdUJBQXFCRixRQUFRQyxHQUFSLENBQVlDLG1CQUZwQjtBQUdiQyx3QkFBc0JILFFBQVFDLEdBQVIsQ0FBWUUsb0JBSHJCO0FBSWJDLDJCQUF5QkosUUFBUUMsR0FBUixDQUFZRyx1QkFKeEI7QUFLYkMsaUJBQWVMLFFBQVFDLEdBQVIsQ0FBWUksYUFMZDtBQU1iQyx3QkFBc0JOLFFBQVFDLEdBQVIsQ0FBWUssb0JBTnJCO0FBT2JDLGlDQUErQlAsUUFBUUMsR0FBUixDQUFZTTtBQVA5QixDOzs7Ozs7QUNBZixrQzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQUE7QUFBQSxNQUFLLFdBQVUsU0FBZjtB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QUFFOEcsWUFBRixFQUFUO0FBQ0Q7QUFDRCxvQkFBSUMsTUFBSixFQUFZO0FBQ1YvSCxzQkFBSWdCLElBQUosQ0FBUytHLE1BQVQ7QUFDRDtBQUNGLGVBVEg7O0FBRjJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0FySSxNQUFJSSxHQUFKLENBQVEsUUFBUixFQUFrQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM5QkEsUUFBSWEsUUFBSixDQUFhLEdBQWI7QUFDRCxHQUZEO0FBR0QsQ0FsQkQsQzs7Ozs7O0FDWEEseUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg0ZDlmNzQ2ZTdmZGJhMTg5NThmIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIEdPT0dMRV9NQVBTX0FQSV9LRVk6IHByb2Nlc3MuZW52LkdPT0dMRV9NQVBTX0FQSV9LRVksXG4gIElOU1RBR1JBTV9BUElfVE9LRU46IHByb2Nlc3MuZW52LklOU1RBR1JBTV9BUElfVE9LRU4sXG4gIFRXSVRURVJfQ09OU1VNRVJfS0VZOiBwcm9jZXNzLmVudi5UV0lUVEVSX0NPTlNVTUVSX0tFWSxcbiAgVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQ6IHByb2Nlc3MuZW52LlRXSVRURVJfQ09OU1VNRVJfU0VDUkVULFxuICBUV0lUVEVSX1RPS0VOOiBwcm9jZXNzLmVudi5UV0lUVEVSX1RPS0VOLFxuICBUV0lUVEVSX1RPS0VOX1NFQ1JFVDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9UT0tFTl9TRUNSRVQsXG4gIFdFQVRIRVJfVU5ERVJHUk9VTkRfQVBJX1RPS0VOOiBwcm9jZXNzLmVudi5XRUFUSEVSX1VOREVSR1JPVU5EX0FQSV9UT0tFTlxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9jb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCBGZWVkUGFnZSBmcm9tIFwiLi4vcGFnZXMvRmVlZFBhZ2VcIjtcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL0Fib3V0UGFnZVwiO1xuaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tIFwiLi4vcGFnZXMvTm90Rm91bmRQYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIC4uLkFwcCxcbiAgICByb3V0ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgLi4uRmVlZFBhZ2UsXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBleGFjdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLi4uQWJvdXRQYWdlLFxuICAgICAgICBwYXRoOiBcIi9hYm91dFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAuLi5Ob3RGb3VuZFBhZ2VcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JvdXRlcy9BcHBSb3V0ZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBnZXRHZW9sb2NhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgICBsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IGxvY2F0aW9uLmNvb3JkcztcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEdlb2xvY2F0aW9uKGxhdGl0dWRlLCBsb25naXR1ZGUpKTtcbiAgICAgICAgICAgIHJlc29sdmUobG9jYXRpb24uY29vcmRzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChcIkdlb2xvY2F0aW9uIGZhaWxlZFwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KFwiR2VvbG9jYXRpb24gc2VydmljZXMgdW5hdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgU0VUX0dFT0xPQ0FUSU9OID0gXCJTRVRfR0VPTE9DQVRJT05cIjtcbmV4cG9ydCBjb25zdCBzZXRHZW9sb2NhdGlvbiA9IChsYXRpdHVkZSA9IGZhbHNlLCBsb25naXR1ZGUgPSBmYWxzZSkgPT4gKHtcbiAgdHlwZTogU0VUX0dFT0xPQ0FUSU9OLFxuICBsYXRpdHVkZSxcbiAgbG9uZ2l0dWRlXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvYWN0aW9ucy9nZW9sb2NhdGlvbi5qcyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXIgPSAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyRW5kcG9pbnQgPSBgaHR0cHM6Ly9hcGkud3VuZGVyZ3JvdW5kLmNvbS9hcGkvJHtcbiAgICBjb25maWcuV0VBVEhFUl9VTkRFUkdST1VORF9BUElfVE9LRU5cbiAgfS9jb25kaXRpb25zL3EvJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9Lmpzb25gO1xuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGF4aW9zKHdlYXRoZXJFbmRwb2ludCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRfb2JzZXJ2YXRpb246IHsgZGlzcGxheV9sb2NhdGlvbjogeyBjaXR5LCBzdGF0ZSwgY291bnRyeSB9LCB3ZWF0aGVyLCB0ZW1wX2YsIHRlbXBfYywgaWNvbiwgZm9yZWNhc3RfdXJsIH1cbiAgICAgIH0gPSB3ZWF0aGVyRGF0YS5kYXRhO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKFxuICAgICAgICBzZXRXZWF0aGVyKHtcbiAgICAgICAgICBjaXR5LFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGNvdW50cnksXG4gICAgICAgICAgd2VhdGhlcixcbiAgICAgICAgICB0ZW1wX2YsXG4gICAgICAgICAgdGVtcF9jLFxuICAgICAgICAgIGljb24sXG4gICAgICAgICAgZm9yZWNhc3RfdXJsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhXCIsIGUpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBTRVRfV0VBVEhFUiA9IFwiU0VUX1dFQVRIRVJcIjtcblxuZXhwb3J0IGNvbnN0IHNldFdlYXRoZXIgPSAoe1xuICBjaXR5ID0gXCJcIixcbiAgc3RhdGUgPSBcIlwiLFxuICBjb3VudHJ5ID0gXCJcIixcbiAgd2VhdGhlciA9IFwiXCIsXG4gIHRlbXBfZiA9IFwiXCIsXG4gIHRlbXBfYyA9IFwiXCIsXG4gIGljb24gPSBcIlwiLFxuICBmb3JlY2FzdF91cmwgPSBcIlwiXG59KSA9PiAoe1xuICB0eXBlOiBTRVRfV0VBVEhFUixcbiAgY2l0eSxcbiAgc3RhdGUsXG4gIGNvdW50cnksXG4gIHdlYXRoZXIsXG4gIHRlbXBfZixcbiAgdGVtcF9jLFxuICBpY29uLFxuICBmb3JlY2FzdF91cmxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9hY3Rpb25zL3dlYXRoZXIuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRQaG90b3MgPSAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4ge1xuICBjb25zdCBwaG90b3NFbmRwb2ludCA9IGBodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL21lZGlhL3NlYXJjaD9hY2Nlc3NfdG9rZW49JHtcbiAgICBjb25maWcuSU5TVEFHUkFNX0FQSV9UT0tFTlxuICB9JmxhdD0ke2xhdGl0dWRlfSZsbmc9JHtsb25naXR1ZGV9JmRpc3RhbmNlPTUwMDAmY291bnQ9NmA7XG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBob3Rvc0RhdGEgPSBhd2FpdCBheGlvcyhwaG90b3NFbmRwb2ludCk7XG4gICAgICBjb25zdCB7IGRhdGE6IHBob3RvcyB9ID0gcGhvdG9zRGF0YS5kYXRhO1xuICAgICAgY29uc3QgY29sbGVjdGlvbiA9IFtdO1xuICAgICAgZm9yIChjb25zdCBwaG90byBpbiBwaG90b3MpIHtcbiAgICAgICAgY29sbGVjdGlvbi5wdXNoKHBob3Rvc1twaG90b10pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpc3BhdGNoKFxuICAgICAgICBzZXRQaG90b3Moe1xuICAgICAgICAgIGNvbGxlY3Rpb25cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBwaG90b3MgZGF0YVwiLCBlKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgU0VUX1BIT1RPUyA9IFwiU0VUX1BIT1RPU1wiO1xuZXhwb3J0IGNvbnN0IHNldFBob3RvcyA9IHBob3RvcyA9PiAoe1xuICB0eXBlOiBTRVRfUEhPVE9TLFxuICBwaG90b3Ncbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9hY3Rpb25zL3Bob3Rvcy5qcyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IGdldENoYXR0ZXIgPSAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4ge1xuICBjb25zdCBjaGF0dGVyRW5kcG9pbnQgPSBgL2FwaS9jaGF0dGVyLyR7bGF0aXR1ZGV9LyR7bG9uZ2l0dWRlfWA7XG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNoYXR0ZXJEYXRhID0gYXdhaXQgYXhpb3MoY2hhdHRlckVuZHBvaW50KTtcbiAgICAgIGNvbnN0IHsgc3RhdHVzZXM6IGNvbGxlY3Rpb24gfSA9IGNoYXR0ZXJEYXRhLmRhdGE7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goXG4gICAgICAgIHNldENoYXR0ZXIoe1xuICAgICAgICAgIGNvbGxlY3Rpb25cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBjaGF0dGVyIGRhdGFcIiwgZSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNFVF9DSEFUVEVSID0gXCJTRVRfQ0hBVFRFUlwiO1xuZXhwb3J0IGNvbnN0IHNldENoYXR0ZXIgPSBjaGF0dGVyID0+ICh7XG4gIHR5cGU6IFNFVF9DSEFUVEVSLFxuICBjaGF0dGVyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvYWN0aW9ucy9jaGF0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBtYXRjaFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XG5pbXBvcnQgcHJveHkgZnJvbSBcImV4cHJlc3MtaHR0cC1wcm94eVwiO1xuaW1wb3J0IFJvdXRlcyBmcm9tIFwiLi4vLi4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzXCI7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSBcIi4uL2hlbHBlcnMvcmVuZGVyZXJcIjtcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tIFwiLi4vaGVscGVycy9jcmVhdGVTdG9yZVwiO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwiY2xpZW50L3B1YmxpY1wiKSk7XG5cbnJlcXVpcmUoXCIuLi9yb3V0ZXMvY2hhdHRlclwiKShhcHApO1xuXG5hcHAuZ2V0KFwiKlwiLCAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZXEpO1xuXG4gIGNvbnN0IHByb21pc2VzID0gbWF0Y2hSb3V0ZXMoUm91dGVzLCByZXEucGF0aClcbiAgICAubWFwKCh7IHJvdXRlIH0pID0+IHtcbiAgICAgIHJldHVybiByb3V0ZS5sb2FkRGF0YSA/IHJvdXRlLmxvYWREYXRhKHN0b3JlKSA6IG51bGw7XG4gICAgfSlcbiAgICAubWFwKHByb21pc2UgPT4ge1xuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0ge307XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlcmVyKHJlcSwgc3RvcmUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRleHQudXJsKSB7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMSwgY29udGV4dC51cmwpO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0Lm5vdEZvdW5kKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgfVxuXG4gICAgcmVzLnNlbmQoY29udGVudCk7XG4gIH0pO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlRoZSBtYWdpYyBpcyBoYXBwZW5pbmcgb24gcG9ydFwiLCBwb3J0KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC1wcm94eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3MtaHR0cC1wcm94eVwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHJvdXRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPkdlb3B1bHNlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJHZW9wdWxzZVwiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICB7cmVuZGVyUm91dGVzKHJvdXRlLnJvdXRlcyl9XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBBcHBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLWJnLXNreS1kYXJrIGhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLWdlb3B1bHNlLnN2Z1wiIGFsdD1cIkdlb3B1bHNlIGxvZ29cIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5HZW9wdWxzZTwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2aWdhdGlvblwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaGVhZGVyX19saW5rLS1hY3RpdmVcIiBleGFjdD5cbiAgICAgICAgICAgICAgICBGZWVkXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaGVhZGVyX19saW5rLS1hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tYmctZWFydGgtZGFya2VzdCBmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICA8cD5cbiAgICAgICAgQ3JhZnRlZCB3aXRoIGxvdmUgL3tcIiBcIn1cbiAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cuY29kZXNlcmlvdXMuY29tXCIgY2xhc3NOYW1lPVwiZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgQ29kZSBTZXJpb3VzXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0R2VvbG9jYXRpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuLi9hY3Rpb25zL3dlYXRoZXJcIjtcbmltcG9ydCB7IGdldFBob3RvcyB9IGZyb20gXCIuLi9hY3Rpb25zL3Bob3Rvc1wiO1xuaW1wb3J0IHsgZ2V0Q2hhdHRlciB9IGZyb20gXCIuLi9hY3Rpb25zL2NoYXR0ZXJcIjtcbmltcG9ydCB3aXRoR2VvbG9jYXRpb24gZnJvbSBcIi4uL2hvY3Mvd2l0aEdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgd2l0aFdlYXRoZXIgZnJvbSBcIi4uL2hvY3Mvd2l0aFdlYXRoZXJcIjtcbmltcG9ydCB3aXRoUGhvdG9zIGZyb20gXCIuLi9ob2NzL3dpdGhQaG90b3NcIjtcbmltcG9ydCB3aXRoQ2hhdHRlciBmcm9tIFwiLi4vaG9jcy93aXRoQ2hhdHRlclwiO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0xvY2F0aW9uXCI7XG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi4vY29tcG9uZW50cy9XZWF0aGVyXCI7XG5pbXBvcnQgUGhvdG9zIGZyb20gXCIuLi9jb21wb25lbnRzL1Bob3Rvc1wiO1xuaW1wb3J0IENoYXR0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdHRlclwiO1xuaW1wb3J0IFZpZGVvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWRlb3NcIjtcblxuY29uc3QgTG9jYXRpb25XaXRoR2VvbG9jYXRpb24gPSB3aXRoR2VvbG9jYXRpb24oTG9jYXRpb24pO1xuY29uc3QgV2VhdGhlcldpdGhXZWF0aGVyID0gd2l0aFdlYXRoZXIoV2VhdGhlcik7XG5jb25zdCBQaG90b3NXaXRoUGhvdG9zID0gd2l0aFBob3RvcyhQaG90b3MpO1xuY29uc3QgQ2hhdHRlcldpdGhDaGF0dGVyID0gd2l0aENoYXR0ZXIoQ2hhdHRlcik7XG5jb25zdCBWaWRlb3NXaXRoVmlkZW9zID0gd2l0aEdlb2xvY2F0aW9uKFZpZGVvcyk7XG5cbmNsYXNzIEZlZWRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRHZW9sb2NhdGlvbigpLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBsb2NhdGlvbjtcbiAgICAgIHRoaXMucHJvcHMuZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgIHRoaXMucHJvcHMuZ2V0UGhvdG9zKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgdGhpcy5wcm9wcy5nZXRDaGF0dGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhjb25maWcuR09PR0xFX01BUFNfQVBJX0tFWSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1mZWVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1mZWVkXCI+XG4gICAgICAgICAgPExvY2F0aW9uV2l0aEdlb2xvY2F0aW9uXG4gICAgICAgICAgICBnb29nbGVNYXBVUkw9e2BodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7XG4gICAgICAgICAgICAgIGNvbmZpZy5HT09HTEVfTUFQU19BUElfS0VZXG4gICAgICAgICAgICB9JnY9My5leHAmbGlicmFyaWVzPWdlb21ldHJ5LHBsYWNlc2B9XG4gICAgICAgICAgICBsb2FkaW5nRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgNDAwcHhgIH19IC8+fVxuICAgICAgICAgICAgbWFwRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxXZWF0aGVyV2l0aFdlYXRoZXIgLz5cbiAgICAgICAgICA8UGhvdG9zV2l0aFBob3RvcyAvPlxuICAgICAgICAgIDxDaGF0dGVyV2l0aENoYXR0ZXIgLz5cbiAgICAgICAgICA8VmlkZW9zV2l0aFZpZGVvcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0R2VvbG9jYXRpb246ICgpID0+IGRpc3BhdGNoKGdldEdlb2xvY2F0aW9uKCkpLFxuICBnZXRXZWF0aGVyOiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4gZGlzcGF0Y2goZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKSksXG4gIGdldFBob3RvczogKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IGRpc3BhdGNoKGdldFBob3RvcyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSksXG4gIGdldENoYXR0ZXI6IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiBkaXNwYXRjaChnZXRDaGF0dGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBjb25uZWN0KHVuZGVmaW5lZCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShGZWVkUGFnZSlcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3BhZ2VzL0ZlZWRQYWdlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiB3aXRoR2VvbG9jYXRpb24oV3JhcHBlZENvbXBvbmVudCkge1xuICBjbGFzcyBIT0MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBnZW9sb2NhdGlvbiB9ID0gbmV4dFByb3BzO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJlYWR5ICYmIGdlb2xvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24gfSkgPT4gKHtcbiAgICBnZW9sb2NhdGlvblxuICB9KTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhPQyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhHZW9sb2NhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaG9jcy93aXRoR2VvbG9jYXRpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIHdpdGhXZWF0aGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZ2VvbG9jYXRpb24sIHdlYXRoZXIgfSA9IG5leHRQcm9wcztcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkeSAmJiBnZW9sb2NhdGlvbiAmJiB3ZWF0aGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24sIHdlYXRoZXIgfSkgPT4gKHtcbiAgICBnZW9sb2NhdGlvbixcbiAgICB3ZWF0aGVyXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSE9DKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFdlYXRoZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFdlYXRoZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIHdpdGhQaG90b3MoV3JhcHBlZENvbXBvbmVudCkge1xuICBjbGFzcyBIT0MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgeyBnZW9sb2NhdGlvbiwgcGhvdG9zIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmVhZHkgJiYgZ2VvbG9jYXRpb24gJiYgcGhvdG9zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24sIHBob3RvcyB9KSA9PiAoe1xuICAgIGdlb2xvY2F0aW9uLFxuICAgIHBob3Rvc1xuICB9KTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhPQyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQaG90b3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFBob3Rvcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZnVuY3Rpb24gd2l0aENoYXR0ZXJzKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZ2VvbG9jYXRpb24sIGNoYXR0ZXIgfSA9IG5leHRQcm9wcztcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkeSAmJiBnZW9sb2NhdGlvbiAmJiBjaGF0dGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgICByZWFkeTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZWFkeTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSByZWFkeT17dGhpcy5zdGF0ZS5yZWFkeX0gLz47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZ2VvbG9jYXRpb24sIGNoYXR0ZXIgfSkgPT4gKHtcbiAgICBnZW9sb2NhdGlvbixcbiAgICBjaGF0dGVyXG4gIH0pO1xuXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSE9DKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENoYXR0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9ob2NzL3dpdGhDaGF0dGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFNjcmlwdGpzLCB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcbmltcG9ydCBzZXR1cE1hcCBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL3NldHVwTWFwXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNsYXNzIExvY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvbmdpdHVkZTogbG5nLCBsYXRpdHVkZTogbGF0IH0gPSB0aGlzLnByb3BzLmdlb2xvY2F0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPEdvb2dsZU1hcFxuICAgICAgICAgIGRlZmF1bHRab29tPXsxNH1cbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdCwgbG5nIH19XG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjOTBhY2YzXCIsXG4gICAgICAgICAgICBjbGlja2FibGVJY29uczogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogXCJub25lXCIsXG4gICAgICAgICAgICBrZXlib2FyZFNob3J0Y3V0czogZmFsc2UsXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBtYXhab29tOiAxNCxcbiAgICAgICAgICAgIG1pblpvb206IDE0LFxuICAgICAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICByb3RhdGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzdHlsZXM6IHNldHVwTWFwLFxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1iZy1za3ktbGlnaHQgbG9jYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbl9fY29udGVudFwiPnt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn08L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JpcHRqcyh3aXRoR29vZ2xlTWFwKExvY2F0aW9uKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9jYXRpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiBcIiM0ZTVjNmFcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlLmxvY2FsaXR5XCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiA3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDE5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJsYW5kc2NhcGVcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC0xMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogMTAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IFwiI2YzZjdmYVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtMTAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDEwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNiYmMwYzRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDMxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWRcIixcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHNcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjYmJjMGM0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC05M1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAzMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsc1wiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNiYmMwYzRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IC0yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQubG9jYWxcIixcbiAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaHVlOiBcIiNlOWViZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTkwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IC04XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXRcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjZTllYmVkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDY5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTc4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDY3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IFwiI2RkZTdmMlwiXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL3NldHVwTWFwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jbGFzcyBXZWF0aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvd0ZhcmVuaGVpdDogdHJ1ZVxuICB9O1xuICBoYW5kbGVUZW1wZXJhdHVyZVRvZ2dsZSA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd0ZhcmVuaGVpdDogIXByZXZTdGF0ZS5zaG93RmFyZW5oZWl0XG4gICAgfSkpO1xuICB9O1xuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2l0eSwgc3RhdGUsIGNvdW50cnksIHdlYXRoZXIsIHRlbXBfZiwgdGVtcF9jLCBpY29uLCBmb3JlY2FzdF91cmwgfSA9IHRoaXMucHJvcHMud2VhdGhlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B3ZWF0aGVyX190ZW1wZXJhdHVyZSAke1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RmFyZW5oZWl0ID8gXCJ3ZWF0aGVyX190ZW1wZXJhdHVyZS0tZlwiIDogXCJ3ZWF0aGVyX190ZW1wZXJhdHVyZS0tY1wiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVUZW1wZXJhdHVyZVRvZ2dsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXAgdGVtcC0tZlwiPnt0ZW1wX2Z9JmRlZztGPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcCB0ZW1wLS1jXCI+e3RlbXBfY30mZGVnO0M8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcl9fZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMz57d2VhdGhlcn08L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2NpdHl9LCB7c3RhdGV9IC8ge2NvdW50cnl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWxpZ2h0IHdlYXRoZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+V2VhdGhlcjwvaDE+XG5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cud3VuZGVyZ3JvdW5kLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICBQb3dlcmVkIGJ5IFdlYXRoZXIgVW5kZXJncm91bmRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL1dlYXRoZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmNsYXNzIFBob3RvcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlclBob3RvcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5wcm9wcy5waG90b3MuY29sbGVjdGlvbjtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAocGhvdG8gPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZCxcbiAgICAgICAgY2FwdGlvbjogeyB0ZXh0OiBhbHQgfSxcbiAgICAgICAgaW1hZ2VzOiB7IHN0YW5kYXJkX3Jlc29sdXRpb246IGltYWdlIH0sXG4gICAgICAgIGxpa2VzLFxuICAgICAgICBsaW5rLFxuICAgICAgICB1c2VyOiB7IHVzZXJuYW1lIH1cbiAgICAgIH0gPSBwaG90bztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9XCJwaG90b3NfX3Bob3RvXCI+XG4gICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPXtsaW5rfSB0aXRsZT17YWx0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX19pbWFnZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlLnVybH0pYCB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gd2lkdGg9e2ltYWdlLndpZHRofSBoZWlnaHQ9e2ltYWdlLmhlaWdodH0gYWx0PXthbHR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX191c2VybmFtZVwiPnt1c2VybmFtZX08L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBob3Rvc19fZ3JpZFwiPnt0aGlzLnJlbmRlclBob3RvcygpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1tZWRpdW0gcGhvdG9zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXIgY29udGVudC1jb250YWluZXItLWdyaWQtc3BhY2luZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zX19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5QaG90b3M8L2gxPlxuXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkeSA/IHRoaXMucmVuZGVyQ29udGVudCgpIDogPExvYWRpbmcgLz59XG5cbiAgICAgICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgY2xhc3NOYW1lPVwic2VjdGlvbl9fYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgUG93ZXJlZCBieSBJbnN0YWdyYW1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUGhvdG9zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0VHdpdHRlclVzZXJVcmwsIHNldHVwVHdlZXRUZXh0IH0gZnJvbSBcIi4uL2hlbHBlcnMvY2hhdHRlclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jbGFzcyBDaGF0dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyQ2hhdHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5wcm9wcy5jaGF0dGVyLmNvbGxlY3Rpb247XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ubWFwKHN0YXR1cyA9PiB7XG4gICAgICBjb25zdCB7IGVudGl0aWVzLCBmYXZvcml0ZV9jb3VudCwgaWQsIHJldHdlZXRfY291bnQsIHRleHQsIHVzZXI6IHsgc2NyZWVuX25hbWUgfSB9ID0gc3RhdHVzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT1cImNoYXR0ZXJfX3N0YXR1c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdHRlcl9fdGV4dFwiPntzZXR1cFR3ZWV0VGV4dCh0ZXh0LCBlbnRpdGllcyl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXNfX3VzZXJuYW1lXCI+XG4gICAgICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9e2dldFR3aXR0ZXJVc2VyVXJsKHNjcmVlbl9uYW1lKX0gdGl0bGU9e2BGb2xsb3cgJHtzY3JlZW5fbmFtZX0gb24gVHdpdHRlcmB9PlxuICAgICAgICAgICAgICBAe3NjcmVlbl9uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGF0dGVyX19saXN0XCI+e3RoaXMucmVuZGVyQ2hhdHRlcigpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1kYXJrIGNoYXR0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lciBjb250ZW50LWNvbnRhaW5lci0tZ3JpZC1zcGFjaW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0dGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5DaGF0dGVyPC9oMT5cblxuICAgICAgICAgICAge3RoaXMucHJvcHMucmVhZHkgPyB0aGlzLnJlbmRlckNvbnRlbnQoKSA6IDxMb2FkaW5nIC8+fVxuXG4gICAgICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICBQb3dlcmVkIGJ5IFR3aXR0ZXJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NoYXR0ZXIuanMiLCJleHBvcnQgY29uc3QgZ2V0VHdpdHRlclVzZXJVcmwgPSBzY3JlZW5fbmFtZSA9PiB7XG4gIHJldHVybiBgaHR0cHM6Ly93d3cudHdpdHRlci5jb20vJHtzY3JlZW5fbmFtZX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwVHdlZXRUZXh0ID0gKHRleHQsIGVudGl0aWVzKSA9PiB7XG4gIHJldHVybiB0ZXh0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaGVscGVycy9jaGF0dGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jb25zdCByZW5kZXJDb250ZW50ID0gcHJvcHMgPT4gKFxuICA8dWw+XG4gICAgPGxpPkxhdDoge3Byb3BzLmdlb2xvY2F0aW9uLmxhdGl0dWRlfTwvbGk+XG4gICAgPGxpPkxvbjoge3Byb3BzLmdlb2xvY2F0aW9uLmxvbmdpdHVkZX08L2xpPlxuICA8L3VsPlxuKTtcblxuY29uc3QgVmlkZW9zID0gcHJvcHMgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFya2VyIHZpZGVvc1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9zX19jb250ZW50XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlZpZGVvczwvaDE+XG5cbiAgICAgICAge3Byb3BzLnJlYWR5ID8gcmVuZGVyQ29udGVudChwcm9wcykgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgIFBvd2VyZWQgYnkgWW91VHViZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ZpZGVvcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWJvdXRQYWdlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWJvdXRcIj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctc2t5LWxpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPkFib3V0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZW9wdWxzZSBpcyBhIHRvb2wgdGhhdCBhbGxvd3MgeW91IHRvIHNlZSBjb250ZW50IGJhc2VkIG9uIHlvdXIgbG9jYXRpb24gaW5jbHVkaW5nIGEgR29vZ2xlIE1hcCBvZiB0aGUgYXJlYSxcbiAgICAgICAgICAgIHRoZSBsb2NhbCB3ZWF0aGVyIGZyb20gV2VhdGhlciBVbmRlcmdyb3VuZCwgcGhvdG9zIGZyb20gSW5zdGFncmFtLCB0d2VldHMgZnJvbSBUd2l0dGVyIGFuZCB2aWRlb3MgZnJvbVxuICAgICAgICAgICAgWW91VHViZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1saWdodFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5Sb2FkbWFwPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+KFJvYWRtYXApPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtbWVkaXVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlByaXZhY3k8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD5ObyBkYXRhIGlzIHNhdmVkIG9uIG91ciBzZXJ2ZXJzIGFuZCBpcyBvbmx5IHJlcXVlc3RlZCBvbiBhbiBhcy1uZWVkZWQgYmFzaXMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5UaGFua3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD4oUGVvcGxlKTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWRhcmtlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5Db250YWN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+KEluZm8pPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogQWJvdXRQYWdlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9wYWdlcy9BYm91dFBhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5vdEZvdW5kUGFnZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW5vdC1mb3VuZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxoMT40MDQ8L2gxPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBOb3RGb3VuZFBhZ2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzZXJpYWxpemUgZnJvbSBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgQXBwUm91dGVzIGZyb20gXCIuLi8uLi9jbGllbnQvc3JjL3JvdXRlcy9BcHBSb3V0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgc3RvcmUsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgaHRtbCA9IChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS5wYXRofSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+e3JlbmRlclJvdXRlcyhBcHBSb3V0ZXMpfTwvZGl2PlxuICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbiAgY29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKGh0bWwpO1xuICBjb25zdCBoZWxtZXQgPSBIZWxtZXQucmVuZGVyU3RhdGljKCk7XG5cbiAgcmV0dXJuIGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICAke2hlbG1ldC50aXRsZS50b1N0cmluZygpfVxuICAgICAgICAke2hlbG1ldC5tZXRhLnRvU3RyaW5nKCl9XG4gICAgICAgIFxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImJ1bmRsZS5jc3NcIiAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxuICAgICAgICA8c2NyaXB0PndpbmRvdy5JTklUSUFMX1NUQVRFID0gJHtzZXJpYWxpemUoc3RvcmUuZ2V0U3RhdGUoKSl9PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICBgO1xuXG4gIHJlcy5zZW5kKGh0bWwpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9oZWxwZXJzL3JlbmRlcmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSBcIi4uLy4uL2NsaWVudC9zcmMvcmVkdWNlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgcmVxID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvY3JlYXRlU3RvcmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGdlb2xvY2F0aW9uUmVkdWNlciBmcm9tIFwiLi9nZW9sb2NhdGlvblJlZHVjZXJcIjtcbmltcG9ydCB3ZWF0aGVyUmVkdWNlciBmcm9tIFwiLi93ZWF0aGVyUmVkdWNlclwiO1xuaW1wb3J0IHBob3Rvc1JlZHVjZXIgZnJvbSBcIi4vcGhvdG9zUmVkdWNlclwiO1xuaW1wb3J0IGNoYXR0ZXJSZWR1Y2VyIGZyb20gXCIuL2NoYXR0ZXJSZWR1Y2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGdlb2xvY2F0aW9uOiBnZW9sb2NhdGlvblJlZHVjZXIsXG4gIHdlYXRoZXI6IHdlYXRoZXJSZWR1Y2VyLFxuICBwaG90b3M6IHBob3Rvc1JlZHVjZXIsXG4gIGNoYXR0ZXI6IGNoYXR0ZXJSZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBTRVRfR0VPTE9DQVRJT04gfSBmcm9tIFwiLi4vYWN0aW9ucy9nZW9sb2NhdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VvbG9jYXRpb25SZWR1Y2VyRGVmYXVsdFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGdlb2xvY2F0aW9uUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9HRU9MT0NBVElPTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhdGl0dWRlOiBhY3Rpb24ubGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZTogYWN0aW9uLmxvbmdpdHVkZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yZWR1Y2Vycy9nZW9sb2NhdGlvblJlZHVjZXIuanMiLCJpbXBvcnQgeyBTRVRfV0VBVEhFUiB9IGZyb20gXCIuLi9hY3Rpb25zL3dlYXRoZXJcIjtcblxuZXhwb3J0IGNvbnN0IHdlYXRoZXJSZWR1Y2VyRGVmYXVsdFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHdlYXRoZXJSZWR1Y2VyRGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX1dFQVRIRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaXR5OiBhY3Rpb24uY2l0eSxcbiAgICAgICAgc3RhdGU6IGFjdGlvbi5zdGF0ZSxcbiAgICAgICAgY291bnRyeTogYWN0aW9uLmNvdW50cnksXG4gICAgICAgIHdlYXRoZXI6IGFjdGlvbi53ZWF0aGVyLFxuICAgICAgICB0ZW1wX2Y6IGFjdGlvbi50ZW1wX2YsXG4gICAgICAgIHRlbXBfYzogYWN0aW9uLnRlbXBfYyxcbiAgICAgICAgaWNvbjogYWN0aW9uLmljb24sXG4gICAgICAgIGZvcmVjYXN0X3VybDogYWN0aW9uLmZvcmVjYXN0X3VybFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yZWR1Y2Vycy93ZWF0aGVyUmVkdWNlci5qcyIsImltcG9ydCB7IFNFVF9QSE9UT1MgfSBmcm9tIFwiLi4vYWN0aW9ucy9waG90b3NcIjtcblxuZXhwb3J0IGNvbnN0IHBob3RvUmVkdWNlckRlZmF1bHRTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBwaG90b1JlZHVjZXJEZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfUEhPVE9TOlxuICAgICAgcmV0dXJuIGFjdGlvbi5waG90b3M7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcmVkdWNlcnMvcGhvdG9zUmVkdWNlci5qcyIsImltcG9ydCB7IFNFVF9DSEFUVEVSIH0gZnJvbSBcIi4uL2FjdGlvbnMvY2hhdHRlclwiO1xuXG5leHBvcnQgY29uc3QgY2hhdHRlclJlZHVjZXJEZWZhdWx0U3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gY2hhdHRlclJlZHVjZXJEZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQ0hBVFRFUjpcbiAgICAgIHJldHVybiBhY3Rpb24uY2hhdHRlcjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yZWR1Y2Vycy9jaGF0dGVyUmVkdWNlci5qcyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBUd2l0dGVyIGZyb20gXCJub2RlLXR3aXR0ZXJcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuY29uc3QgdHdpdHRlclNlYXJjaENsaWVudCA9IG5ldyBUd2l0dGVyLlNlYXJjaENsaWVudChcbiAgY29uZmlnLlRXSVRURVJfQ09OU1VNRVJfS0VZLFxuICBjb25maWcuVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQsXG4gIGNvbmZpZy5UV0lUVEVSX1RPS0VOLFxuICBjb25maWcuVFdJVFRFUl9UT0tFTl9TRUNSRVRcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwID0+IHtcbiAgYXBwLmdldChcIi9hcGkvY2hhdHRlci86bGF0aXR1ZGUvOmxvbmdpdHVkZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IHJlcS5wYXJhbXM7XG4gICAgdHdpdHRlclNlYXJjaENsaWVudC5zZWFyY2goXG4gICAgICB7IHE6IFwiXCIsIGdlb2NvZGU6IGAke2xhdGl0dWRlfSwke2xvbmdpdHVkZX0sNWttYCwgbGFuZzogXCJlblwiLCBjb3VudDogXCI0XCIgfSxcbiAgICAgIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlcy5zZW5kKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9KTtcbiAgYXBwLmdldChcIi9hcGkvKlwiLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMucmVkaXJlY3QoXCIvXCIpO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvcm91dGVzL2NoYXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXR3aXR0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXR3aXR0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==