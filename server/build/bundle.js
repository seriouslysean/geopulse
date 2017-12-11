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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

var _FeedPage = __webpack_require__(21);

var _FeedPage2 = _interopRequireDefault(_FeedPage);

var _AboutPage = __webpack_require__(34);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _NotFoundPage = __webpack_require__(35);

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
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
module.exports = __webpack_require__(15);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(5);

var _expressHttpProxy = __webpack_require__(17);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _AppRoutes = __webpack_require__(6);

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

var _renderer = __webpack_require__(36);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(39);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();

app.use(_express2.default.static("client/public"));

__webpack_require__(45)(app);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 18 */
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

var _Header = __webpack_require__(19);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(20);

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
/* 19 */
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
/* 20 */
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
/* 21 */
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

var _chatter = __webpack_require__(22);

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

var _Videos = __webpack_require__(33);

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
/* 22 */
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

var _chatter = __webpack_require__(48);

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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(37);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _server = __webpack_require__(38);

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
/* 37 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(40);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(41);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _geolocationReducer = __webpack_require__(42);

var _geolocationReducer2 = _interopRequireDefault(_geolocationReducer);

var _weatherReducer = __webpack_require__(43);

var _weatherReducer2 = _interopRequireDefault(_weatherReducer);

var _photosReducer = __webpack_require__(44);

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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _nodeTwitter = __webpack_require__(46);

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
/* 46 */
/***/ (function(module, exports) {

module.exports = require("node-twitter");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatterReducerDefaultState = undefined;

var _chatter = __webpack_require__(22);

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


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTwitterUserUrl = exports.getTwitterUserUrl = function getTwitterUserUrl(screen_name) {
  return "https://www.twitter.com/" + screen_name;
};

var setupTweetText = exports.setupTweetText = function setupTweetText(text, entities) {
  return text;
};

// function json_tweet_text_to_HTML($tweet, $links=true, $users=true, $hashtags=true)
// {
//     $return = $tweet->text;

//     $entities = array();

//     if($links && is_array($tweet->entities->urls))
//     {
//         foreach($tweet->entities->urls as $e)
//         {
//             $temp["start"] = $e->indices[0];
//             $temp["end"] = $e->indices[1];
//             $temp["replacement"] = "<a href='".$e->expanded_url."' target='_blank'>".$e->display_url."</a>";
//             $entities[] = $temp;
//         }
//     }
//     if($users && is_array($tweet->entities->user_mentions))
//     {
//         foreach($tweet->entities->user_mentions as $e)
//         {
//             $temp["start"] = $e->indices[0];
//             $temp["end"] = $e->indices[1];
//             $temp["replacement"] = "<a href='https://twitter.com/".$e->screen_name."' target='_blank'>@".$e->screen_name."</a>";
//             $entities[] = $temp;
//         }
//     }
//     if($hashtags && is_array($tweet->entities->hashtags))
//     {
//         foreach($tweet->entities->hashtags as $e)
//         {
//             $temp["start"] = $e->indices[0];
//             $temp["end"] = $e->indices[1];
//             $temp["replacement"] = "<a href='https://twitter.com/hashtag/".$e->text."?src=hash' target='_blank'>#".$e->text."</a>";
//             $entities[] = $temp;
//         }
//     }

//     usort($entities, function($a,$b){return($b["start"]-$a["start"]);});

//     foreach($entities as $item)
//     {
//         $return = substr_replace($return, $item["replacement"], $item["start"], $item["end"] - $item["start"]);
//     }

//     return($return);
// }

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWY5NGIzYWUxMzcyODUwZmQwOTQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hY3Rpb25zL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wYWdlcy9GZWVkUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FjdGlvbnMvY2hhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aEdlb2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvaG9jcy93aXRoV2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aFBob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hvY3Mvd2l0aENoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NldHVwTWFwLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9XZWF0aGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9QaG90b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NoYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL0Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy9nZW9sb2NhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZWR1Y2Vycy93ZWF0aGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlZHVjZXJzL3Bob3Rvc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9jaGF0dGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdHdpdHRlclwiIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVkdWNlcnMvY2hhdHRlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oZWxwZXJzL2NoYXR0ZXIuanMiXSwibmFtZXMiOlsiR09PR0xFX01BUFNfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJJTlNUQUdSQU1fQVBJX1RPS0VOIiwiVFdJVFRFUl9DT05TVU1FUl9LRVkiLCJUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCIsIlRXSVRURVJfVE9LRU4iLCJUV0lUVEVSX1RPS0VOX1NFQ1JFVCIsIldFQVRIRVJfVU5ERVJHUk9VTkRfQVBJX1RPS0VOIiwiTG9hZGluZyIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImdldEdlb2xvY2F0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImxvY2F0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkaXNwYXRjaCIsInNldEdlb2xvY2F0aW9uIiwidGltZW91dCIsIlNFVF9HRU9MT0NBVElPTiIsInR5cGUiLCJnZXRXZWF0aGVyIiwid2VhdGhlckVuZHBvaW50Iiwid2VhdGhlckRhdGEiLCJkYXRhIiwiY3VycmVudF9vYnNlcnZhdGlvbiIsImRpc3BsYXlfbG9jYXRpb24iLCJjaXR5Iiwic3RhdGUiLCJjb3VudHJ5Iiwid2VhdGhlciIsInRlbXBfZiIsInRlbXBfYyIsImljb24iLCJmb3JlY2FzdF91cmwiLCJzZXRXZWF0aGVyIiwiY29uc29sZSIsImxvZyIsIlNFVF9XRUFUSEVSIiwiZ2V0UGhvdG9zIiwicGhvdG9zRW5kcG9pbnQiLCJwaG90b3NEYXRhIiwicGhvdG9zIiwiY29sbGVjdGlvbiIsInBob3RvIiwicHVzaCIsInNldFBob3RvcyIsIlNFVF9QSE9UT1MiLCJwb3J0IiwiUE9SVCIsImFwcCIsInVzZSIsInN0YXRpYyIsInJlcXVpcmUiLCJnZXQiLCJyZXEiLCJyZXMiLCJzdG9yZSIsInByb21pc2VzIiwibWFwIiwicm91dGUiLCJsb2FkRGF0YSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJhbGwiLCJjb250ZXh0IiwiY29udGVudCIsInVybCIsInJlZGlyZWN0Iiwibm90Rm91bmQiLCJzdGF0dXMiLCJzZW5kIiwibGlzdGVuIiwiQXBwIiwiY29tcG9uZW50IiwiSGVhZGVyIiwiRm9vdGVyIiwiTG9jYXRpb25XaXRoR2VvbG9jYXRpb24iLCJXZWF0aGVyV2l0aFdlYXRoZXIiLCJQaG90b3NXaXRoUGhvdG9zIiwiQ2hhdHRlcldpdGhDaGF0dGVyIiwiVmlkZW9zV2l0aFZpZGVvcyIsIkZlZWRQYWdlIiwicHJvcHMiLCJnZXRDaGF0dGVyIiwiaGVpZ2h0IiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwidW5kZWZpbmVkIiwiY2hhdHRlckVuZHBvaW50IiwiY2hhdHRlckRhdGEiLCJzdGF0dXNlcyIsInNldENoYXR0ZXIiLCJTRVRfQ0hBVFRFUiIsImNoYXR0ZXIiLCJ3aXRoR2VvbG9jYXRpb24iLCJXcmFwcGVkQ29tcG9uZW50IiwiSE9DIiwicmVhZHkiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIndpdGhXZWF0aGVyIiwid2l0aFBob3RvcyIsIndpdGhDaGF0dGVycyIsIkxvY2F0aW9uIiwicmVuZGVyQ29udGVudCIsImxuZyIsImxhdCIsImJhY2tncm91bmRDb2xvciIsImNsaWNrYWJsZUljb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsImRyYWdnYWJsZSIsImZ1bGxzY3JlZW5Db250cm9sIiwiZ2VzdHVyZUhhbmRsaW5nIiwia2V5Ym9hcmRTaG9ydGN1dHMiLCJtYXBUeXBlQ29udHJvbCIsIm1heFpvb20iLCJtaW5ab29tIiwicGFuQ29udHJvbCIsInJvdGF0ZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzY3JvbGx3aGVlbCIsInN0cmVldFZpZXdDb250cm9sIiwic3R5bGVzIiwiem9vbUNvbnRyb2wiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsInZpc2liaWxpdHkiLCJodWUiLCJXZWF0aGVyIiwic2hvd0ZhcmVuaGVpdCIsImhhbmRsZVRlbXBlcmF0dXJlVG9nZ2xlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXRlIiwiUGhvdG9zIiwicmVuZGVyUGhvdG9zIiwiaWQiLCJhbHQiLCJjYXB0aW9uIiwidGV4dCIsImltYWdlIiwiaW1hZ2VzIiwic3RhbmRhcmRfcmVzb2x1dGlvbiIsImxpa2VzIiwibGluayIsInVzZXJuYW1lIiwidXNlciIsImJhY2tncm91bmRJbWFnZSIsIndpZHRoIiwiQ2hhdHRlciIsInJlbmRlckNoYXR0ZXIiLCJlbnRpdGllcyIsImZhdm9yaXRlX2NvdW50IiwicmV0d2VldF9jb3VudCIsInNjcmVlbl9uYW1lIiwiVmlkZW9zIiwiQWJvdXRQYWdlIiwiTm90Rm91bmRQYWdlIiwiaHRtbCIsImhlbG1ldCIsInJlbmRlclN0YXRpYyIsInRpdGxlIiwidG9TdHJpbmciLCJtZXRhIiwiZ2V0U3RhdGUiLCJnZW9sb2NhdGlvblJlZHVjZXJEZWZhdWx0U3RhdGUiLCJhY3Rpb24iLCJ3ZWF0aGVyUmVkdWNlckRlZmF1bHRTdGF0ZSIsInBob3RvUmVkdWNlckRlZmF1bHRTdGF0ZSIsInR3aXR0ZXJTZWFyY2hDbGllbnQiLCJTZWFyY2hDbGllbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyYW1zIiwic2VhcmNoIiwicSIsImdlb2NvZGUiLCJsYW5nIiwiY291bnQiLCJlcnJvciIsInJlc3VsdCIsImNoYXR0ZXJSZWR1Y2VyRGVmYXVsdFN0YXRlIiwiZ2V0VHdpdHRlclVzZXJVcmwiLCJzZXR1cFR3ZWV0VGV4dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7O2tCQ0FlO0FBQ2JBLHVCQUFxQkMsUUFBUUMsR0FBUixDQUFZRixtQkFEcEI7QUFFYkcsdUJBQXFCRixRQUFRQyxHQUFSLENBQVlDLG1CQUZwQjtBQUdiQyx3QkFBc0JILFFBQVFDLEdBQVIsQ0FBWUUsb0JBSHJCO0FBSWJDLDJCQUF5QkosUUFBUUMsR0FBUixDQUFZRyx1QkFKeEI7QUFLYkMsaUJBQWVMLFFBQVFDLEdBQVIsQ0FBWUksYUFMZDtBQU1iQyx3QkFBc0JOLFFBQVFDLEdBQVIsQ0FBWUssb0JBTnJCO0FBT2JDLGlDQUErQlAsUUFBUUMsR0FBUixDQUFZTTtBQVA5QixDOzs7Ozs7QUNBZixrQzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQUE7QUFBQSxNQUFLLFdBQVUsU0FBZjtB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LE9BQU96SixJQUFmO0FBQ0U7QUFDRSxhQUFPeUosT0FBTzlFLE9BQWQ7QUFDRjtBQUNFLGFBQU9uRSxLQUFQO0FBSko7QUFNRCxDOzs7Ozs7Ozs7Ozs7QUNYTSxJQUFNaUssZ0RBQW9CLFNBQXBCQSxpQkFBb0IsY0FBZTtBQUM5QyxzQ0FBa0M1QixXQUFsQztBQUNELENBRk07O0FBSUEsSUFBTTZCLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBQzVDLElBQUQsRUFBT1ksUUFBUCxFQUFvQjtBQUNoRCxTQUFPWixJQUFQO0FBQ0QsQ0FGTTs7QUFJUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWY5NGIzYWUxMzcyODUwZmQwOTQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgR09PR0xFX01BUFNfQVBJX0tFWTogcHJvY2Vzcy5lbnYuR09PR0xFX01BUFNfQVBJX0tFWSxcbiAgSU5TVEFHUkFNX0FQSV9UT0tFTjogcHJvY2Vzcy5lbnYuSU5TVEFHUkFNX0FQSV9UT0tFTixcbiAgVFdJVFRFUl9DT05TVU1FUl9LRVk6IHByb2Nlc3MuZW52LlRXSVRURVJfQ09OU1VNRVJfS0VZLFxuICBUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQsXG4gIFRXSVRURVJfVE9LRU46IHByb2Nlc3MuZW52LlRXSVRURVJfVE9LRU4sXG4gIFRXSVRURVJfVE9LRU5fU0VDUkVUOiBwcm9jZXNzLmVudi5UV0lUVEVSX1RPS0VOX1NFQ1JFVCxcbiAgV0VBVEhFUl9VTkRFUkdST1VORF9BUElfVE9LRU46IHByb2Nlc3MuZW52LldFQVRIRVJfVU5ERVJHUk9VTkRfQVBJX1RPS0VOXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2NvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IEZlZWRQYWdlIGZyb20gXCIuLi9wYWdlcy9GZWVkUGFnZVwiO1xuaW1wb3J0IEFib3V0UGFnZSBmcm9tIFwiLi4vcGFnZXMvQWJvdXRQYWdlXCI7XG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gXCIuLi9wYWdlcy9Ob3RGb3VuZFBhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgLi4uQXBwLFxuICAgIHJvdXRlczogW1xuICAgICAge1xuICAgICAgICAuLi5GZWVkUGFnZSxcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIGV4YWN0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAuLi5BYm91dFBhZ2UsXG4gICAgICAgIHBhdGg6IFwiL2Fib3V0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC4uLk5vdEZvdW5kUGFnZVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcm91dGVzL0FwcFJvdXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGdldEdlb2xvY2F0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAgIGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gbG9jYXRpb24uY29vcmRzO1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0R2VvbG9jYXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSkpO1xuICAgICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbi5jb29yZHMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KFwiR2VvbG9jYXRpb24gZmFpbGVkXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGltZW91dDogMTAwMDBcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoXCJHZW9sb2NhdGlvbiBzZXJ2aWNlcyB1bmF2YWlsYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBTRVRfR0VPTE9DQVRJT04gPSBcIlNFVF9HRU9MT0NBVElPTlwiO1xuZXhwb3J0IGNvbnN0IHNldEdlb2xvY2F0aW9uID0gKGxhdGl0dWRlID0gZmFsc2UsIGxvbmdpdHVkZSA9IGZhbHNlKSA9PiAoe1xuICB0eXBlOiBTRVRfR0VPTE9DQVRJT04sXG4gIGxhdGl0dWRlLFxuICBsb25naXR1ZGVcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9hY3Rpb25zL2dlb2xvY2F0aW9uLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJFbmRwb2ludCA9IGBodHRwczovL2FwaS53dW5kZXJncm91bmQuY29tL2FwaS8ke1xuICAgIGNvbmZpZy5XRUFUSEVSX1VOREVSR1JPVU5EX0FQSV9UT0tFTlxuICB9L2NvbmRpdGlvbnMvcS8ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX0uanNvbmA7XG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXhpb3Mod2VhdGhlckVuZHBvaW50KTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VycmVudF9vYnNlcnZhdGlvbjogeyBkaXNwbGF5X2xvY2F0aW9uOiB7IGNpdHksIHN0YXRlLCBjb3VudHJ5IH0sIHdlYXRoZXIsIHRlbXBfZiwgdGVtcF9jLCBpY29uLCBmb3JlY2FzdF91cmwgfVxuICAgICAgfSA9IHdlYXRoZXJEYXRhLmRhdGE7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goXG4gICAgICAgIHNldFdlYXRoZXIoe1xuICAgICAgICAgIGNpdHksXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgY291bnRyeSxcbiAgICAgICAgICB3ZWF0aGVyLFxuICAgICAgICAgIHRlbXBfZixcbiAgICAgICAgICB0ZW1wX2MsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBmb3JlY2FzdF91cmxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGFcIiwgZSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNFVF9XRUFUSEVSID0gXCJTRVRfV0VBVEhFUlwiO1xuXG5leHBvcnQgY29uc3Qgc2V0V2VhdGhlciA9ICh7XG4gIGNpdHkgPSBcIlwiLFxuICBzdGF0ZSA9IFwiXCIsXG4gIGNvdW50cnkgPSBcIlwiLFxuICB3ZWF0aGVyID0gXCJcIixcbiAgdGVtcF9mID0gXCJcIixcbiAgdGVtcF9jID0gXCJcIixcbiAgaWNvbiA9IFwiXCIsXG4gIGZvcmVjYXN0X3VybCA9IFwiXCJcbn0pID0+ICh7XG4gIHR5cGU6IFNFVF9XRUFUSEVSLFxuICBjaXR5LFxuICBzdGF0ZSxcbiAgY291bnRyeSxcbiAgd2VhdGhlcixcbiAgdGVtcF9mLFxuICB0ZW1wX2MsXG4gIGljb24sXG4gIGZvcmVjYXN0X3VybFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvd2VhdGhlci5qcyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IGdldFBob3RvcyA9IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiB7XG4gIGNvbnN0IHBob3Rvc0VuZHBvaW50ID0gYGh0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvbWVkaWEvc2VhcmNoP2FjY2Vzc190b2tlbj0ke1xuICAgIGNvbmZpZy5JTlNUQUdSQU1fQVBJX1RPS0VOXG4gIH0mbGF0PSR7bGF0aXR1ZGV9JmxuZz0ke2xvbmdpdHVkZX0mZGlzdGFuY2U9NTAwMCZjb3VudD02YDtcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGhvdG9zRGF0YSA9IGF3YWl0IGF4aW9zKHBob3Rvc0VuZHBvaW50KTtcbiAgICAgIGNvbnN0IHsgZGF0YTogcGhvdG9zIH0gPSBwaG90b3NEYXRhLmRhdGE7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uID0gW107XG4gICAgICBmb3IgKGNvbnN0IHBob3RvIGluIHBob3Rvcykge1xuICAgICAgICBjb2xsZWN0aW9uLnB1c2gocGhvdG9zW3Bob3RvXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlzcGF0Y2goXG4gICAgICAgIHNldFBob3Rvcyh7XG4gICAgICAgICAgY29sbGVjdGlvblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHBob3RvcyBkYXRhXCIsIGUpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBTRVRfUEhPVE9TID0gXCJTRVRfUEhPVE9TXCI7XG5leHBvcnQgY29uc3Qgc2V0UGhvdG9zID0gcGhvdG9zID0+ICh7XG4gIHR5cGU6IFNFVF9QSE9UT1MsXG4gIHBob3Rvc1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvcGhvdG9zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBtYXRjaFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XG5pbXBvcnQgcHJveHkgZnJvbSBcImV4cHJlc3MtaHR0cC1wcm94eVwiO1xuaW1wb3J0IFJvdXRlcyBmcm9tIFwiLi4vLi4vY2xpZW50L3NyYy9yb3V0ZXMvQXBwUm91dGVzXCI7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSBcIi4uL2hlbHBlcnMvcmVuZGVyZXJcIjtcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tIFwiLi4vaGVscGVycy9jcmVhdGVTdG9yZVwiO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwiY2xpZW50L3B1YmxpY1wiKSk7XG5cbnJlcXVpcmUoXCIuLi9yb3V0ZXMvY2hhdHRlclwiKShhcHApO1xuXG5hcHAuZ2V0KFwiKlwiLCAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZXEpO1xuXG4gIGNvbnN0IHByb21pc2VzID0gbWF0Y2hSb3V0ZXMoUm91dGVzLCByZXEucGF0aClcbiAgICAubWFwKCh7IHJvdXRlIH0pID0+IHtcbiAgICAgIHJldHVybiByb3V0ZS5sb2FkRGF0YSA/IHJvdXRlLmxvYWREYXRhKHN0b3JlKSA6IG51bGw7XG4gICAgfSlcbiAgICAubWFwKHByb21pc2UgPT4ge1xuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0ge307XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlcmVyKHJlcSwgc3RvcmUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRleHQudXJsKSB7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMSwgY29udGV4dC51cmwpO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0Lm5vdEZvdW5kKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgfVxuXG4gICAgcmVzLnNlbmQoY29udGVudCk7XG4gIH0pO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlRoZSBtYWdpYyBpcyBoYXBwZW5pbmcgb24gcG9ydFwiLCBwb3J0KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC1wcm94eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3MtaHR0cC1wcm94eVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHJvdXRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPkdlb3B1bHNlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJHZW9wdWxzZVwiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICB7cmVuZGVyUm91dGVzKHJvdXRlLnJvdXRlcyl9XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBBcHBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLWJnLXNreS1kYXJrIGhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLWdlb3B1bHNlLnN2Z1wiIGFsdD1cIkdlb3B1bHNlIGxvZ29cIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5HZW9wdWxzZTwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2aWdhdGlvblwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaGVhZGVyX19saW5rLS1hY3RpdmVcIiBleGFjdD5cbiAgICAgICAgICAgICAgICBGZWVkXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiaGVhZGVyX19saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaGVhZGVyX19saW5rLS1hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tYmctZWFydGgtZGFya2VzdCBmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICA8cD5cbiAgICAgICAgQ3JhZnRlZCB3aXRoIGxvdmUgL3tcIiBcIn1cbiAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cuY29kZXNlcmlvdXMuY29tXCIgY2xhc3NOYW1lPVwiZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgQ29kZSBTZXJpb3VzXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0R2VvbG9jYXRpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuLi9hY3Rpb25zL3dlYXRoZXJcIjtcbmltcG9ydCB7IGdldFBob3RvcyB9IGZyb20gXCIuLi9hY3Rpb25zL3Bob3Rvc1wiO1xuaW1wb3J0IHsgZ2V0Q2hhdHRlciB9IGZyb20gXCIuLi9hY3Rpb25zL2NoYXR0ZXJcIjtcbmltcG9ydCB3aXRoR2VvbG9jYXRpb24gZnJvbSBcIi4uL2hvY3Mvd2l0aEdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgd2l0aFdlYXRoZXIgZnJvbSBcIi4uL2hvY3Mvd2l0aFdlYXRoZXJcIjtcbmltcG9ydCB3aXRoUGhvdG9zIGZyb20gXCIuLi9ob2NzL3dpdGhQaG90b3NcIjtcbmltcG9ydCB3aXRoQ2hhdHRlciBmcm9tIFwiLi4vaG9jcy93aXRoQ2hhdHRlclwiO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0xvY2F0aW9uXCI7XG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi4vY29tcG9uZW50cy9XZWF0aGVyXCI7XG5pbXBvcnQgUGhvdG9zIGZyb20gXCIuLi9jb21wb25lbnRzL1Bob3Rvc1wiO1xuaW1wb3J0IENoYXR0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdHRlclwiO1xuaW1wb3J0IFZpZGVvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWRlb3NcIjtcblxuY29uc3QgTG9jYXRpb25XaXRoR2VvbG9jYXRpb24gPSB3aXRoR2VvbG9jYXRpb24oTG9jYXRpb24pO1xuY29uc3QgV2VhdGhlcldpdGhXZWF0aGVyID0gd2l0aFdlYXRoZXIoV2VhdGhlcik7XG5jb25zdCBQaG90b3NXaXRoUGhvdG9zID0gd2l0aFBob3RvcyhQaG90b3MpO1xuY29uc3QgQ2hhdHRlcldpdGhDaGF0dGVyID0gd2l0aENoYXR0ZXIoQ2hhdHRlcik7XG5jb25zdCBWaWRlb3NXaXRoVmlkZW9zID0gd2l0aEdlb2xvY2F0aW9uKFZpZGVvcyk7XG5cbmNsYXNzIEZlZWRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRHZW9sb2NhdGlvbigpLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBsb2NhdGlvbjtcbiAgICAgIHRoaXMucHJvcHMuZ2V0V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgICAgIHRoaXMucHJvcHMuZ2V0UGhvdG9zKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgICAgdGhpcy5wcm9wcy5nZXRDaGF0dGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWZlZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWZlZWRcIj5cbiAgICAgICAgICA8TG9jYXRpb25XaXRoR2VvbG9jYXRpb25cbiAgICAgICAgICAgIGdvb2dsZU1hcFVSTD17YGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHtcbiAgICAgICAgICAgICAgY29uZmlnLkdPT0dMRV9NQVBTX0FQSV9LRVlcbiAgICAgICAgICAgIH0mdj0zLmV4cCZsaWJyYXJpZXM9Z2VvbWV0cnkscGxhY2VzYH1cbiAgICAgICAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGA0MDBweGAgfX0gLz59XG4gICAgICAgICAgICBtYXBFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFdlYXRoZXJXaXRoV2VhdGhlciAvPlxuICAgICAgICAgIDxQaG90b3NXaXRoUGhvdG9zIC8+XG4gICAgICAgICAgPENoYXR0ZXJXaXRoQ2hhdHRlciAvPlxuICAgICAgICAgIDxWaWRlb3NXaXRoVmlkZW9zIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRHZW9sb2NhdGlvbjogKCkgPT4gZGlzcGF0Y2goZ2V0R2VvbG9jYXRpb24oKSksXG4gIGdldFdlYXRoZXI6IChsYXRpdHVkZSwgbG9uZ2l0dWRlKSA9PiBkaXNwYXRjaChnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUpKSxcbiAgZ2V0UGhvdG9zOiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4gZGlzcGF0Y2goZ2V0UGhvdG9zKGxhdGl0dWRlLCBsb25naXR1ZGUpKSxcbiAgZ2V0Q2hhdHRlcjogKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IGRpc3BhdGNoKGdldENoYXR0ZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IGNvbm5lY3QodW5kZWZpbmVkLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZlZWRQYWdlKVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcGFnZXMvRmVlZFBhZ2UuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGF0dGVyID0gKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgY29uc3QgY2hhdHRlckVuZHBvaW50ID0gYC9hcGkvY2hhdHRlci8ke2xhdGl0dWRlfS8ke2xvbmdpdHVkZX1gO1xuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjaGF0dGVyRGF0YSA9IGF3YWl0IGF4aW9zKGNoYXR0ZXJFbmRwb2ludCk7XG4gICAgICBjb25zdCB7IHN0YXR1c2VzOiBjb2xsZWN0aW9uIH0gPSBjaGF0dGVyRGF0YS5kYXRhO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKFxuICAgICAgICBzZXRDaGF0dGVyKHtcbiAgICAgICAgICBjb2xsZWN0aW9uXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgY2hhdHRlciBkYXRhXCIsIGUpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBTRVRfQ0hBVFRFUiA9IFwiU0VUX0NIQVRURVJcIjtcbmV4cG9ydCBjb25zdCBzZXRDaGF0dGVyID0gY2hhdHRlciA9PiAoe1xuICB0eXBlOiBTRVRfQ0hBVFRFUixcbiAgY2hhdHRlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2FjdGlvbnMvY2hhdHRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZnVuY3Rpb24gd2l0aEdlb2xvY2F0aW9uKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZ2VvbG9jYXRpb24gfSA9IG5leHRQcm9wcztcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkeSAmJiBnZW9sb2NhdGlvbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgcmVhZHk6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucmVhZHk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gcmVhZHk9e3RoaXMuc3RhdGUucmVhZHl9IC8+O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGdlb2xvY2F0aW9uIH0pID0+ICh7XG4gICAgZ2VvbG9jYXRpb25cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIT0MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoR2VvbG9jYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2hvY3Mvd2l0aEdlb2xvY2F0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiB3aXRoV2VhdGhlcihXcmFwcGVkQ29tcG9uZW50KSB7XG4gIGNsYXNzIEhPQyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICByZWFkeTogZmFsc2VcbiAgICB9O1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBjb25zdCB7IGdlb2xvY2F0aW9uLCB3ZWF0aGVyIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmVhZHkgJiYgZ2VvbG9jYXRpb24gJiYgd2VhdGhlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgcmVhZHk6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucmVhZHk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gcmVhZHk9e3RoaXMuc3RhdGUucmVhZHl9IC8+O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGdlb2xvY2F0aW9uLCB3ZWF0aGVyIH0pID0+ICh7XG4gICAgZ2VvbG9jYXRpb24sXG4gICAgd2VhdGhlclxuICB9KTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhPQyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhXZWF0aGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9ob2NzL3dpdGhXZWF0aGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiB3aXRoUGhvdG9zKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY2xhc3MgSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH07XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgZ2VvbG9jYXRpb24sIHBob3RvcyB9ID0gbmV4dFByb3BzO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJlYWR5ICYmIGdlb2xvY2F0aW9uICYmIHBob3Rvcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgcmVhZHk6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucmVhZHk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gcmVhZHk9e3RoaXMuc3RhdGUucmVhZHl9IC8+O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGdlb2xvY2F0aW9uLCBwaG90b3MgfSkgPT4gKHtcbiAgICBnZW9sb2NhdGlvbixcbiAgICBwaG90b3NcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIT0MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGhvdG9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9ob2NzL3dpdGhQaG90b3MuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIHdpdGhDaGF0dGVycyhXcmFwcGVkQ29tcG9uZW50KSB7XG4gIGNsYXNzIEhPQyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICByZWFkeTogZmFsc2VcbiAgICB9O1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBjb25zdCB7IGdlb2xvY2F0aW9uLCBjaGF0dGVyIH0gPSBuZXh0UHJvcHM7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmVhZHkgJiYgZ2VvbG9jYXRpb24gJiYgY2hhdHRlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgcmVhZHk6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucmVhZHk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gcmVhZHk9e3RoaXMuc3RhdGUucmVhZHl9IC8+O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGdlb2xvY2F0aW9uLCBjaGF0dGVyIH0pID0+ICh7XG4gICAgZ2VvbG9jYXRpb24sXG4gICAgY2hhdHRlclxuICB9KTtcblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhPQyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDaGF0dGVycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaG9jcy93aXRoQ2hhdHRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhTY3JpcHRqcywgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwIH0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XG5pbXBvcnQgc2V0dXBNYXAgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9zZXR1cE1hcFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jbGFzcyBMb2NhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb25naXR1ZGU6IGxuZywgbGF0aXR1ZGU6IGxhdCB9ID0gdGhpcy5wcm9wcy5nZW9sb2NhdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgICBkZWZhdWx0Wm9vbT17MTR9XG4gICAgICAgICAgZGVmYXVsdENlbnRlcj17eyBsYXQsIGxuZyB9fVxuICAgICAgICAgIGRlZmF1bHRPcHRpb25zPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzkwYWNmM1wiLFxuICAgICAgICAgICAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBnZXN0dXJlSGFuZGxpbmc6IFwibm9uZVwiLFxuICAgICAgICAgICAga2V5Ym9hcmRTaG9ydGN1dHM6IGZhbHNlLFxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgbWF4Wm9vbTogMTQsXG4gICAgICAgICAgICBtaW5ab29tOiAxNCxcbiAgICAgICAgICAgIHBhbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgcm90YXRlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgc3R5bGVzOiBzZXR1cE1hcCxcbiAgICAgICAgICAgIHpvb21Db250cm9sOiBmYWxzZVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tYmctc2t5LWxpZ2h0IGxvY2F0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25fX2NvbnRlbnRcIj57dGhpcy5wcm9wcy5yZWFkeSA/IHRoaXMucmVuZGVyQ29udGVudCgpIDogPExvYWRpbmcgLz59PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2NyaXB0anMod2l0aEdvb2dsZU1hcChMb2NhdGlvbikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL0xvY2F0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLW1hcHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbWFwc1wiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJhbGxcIixcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBjb2xvcjogXCIjNGU1YzZhXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eVwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogN1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAxOVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwibGFuZHNjYXBlXCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtMTAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IDEwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJzaW1wbGlmaWVkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiBcIiNmM2Y3ZmFcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInBvaVwiLFxuICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgc2F0dXJhdGlvbjogLTEwMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAxMDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwib2ZmXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXG4gICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjYmJjMGM0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC05M1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAzMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJzaW1wbGlmaWVkXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXG4gICAgZWxlbWVudFR5cGU6IFwibGFiZWxzXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBodWU6IFwiI2JiYzBjNFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAtOTNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogMzFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwib25cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBlbGVtZW50VHlwZTogXCJsYWJlbHNcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjYmJjMGM0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC05M1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAtMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJzaW1wbGlmaWVkXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmxvY2FsXCIsXG4gICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGh1ZTogXCIjZTllYmVkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC05MFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAtOFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJzaW1wbGlmaWVkXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXG4gICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBodWU6IFwiI2U5ZWJlZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzYXR1cmF0aW9uOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiA2OVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6IFwid2F0ZXJcIixcbiAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHNhdHVyYXRpb246IC03OFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiA2N1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eTogXCJzaW1wbGlmaWVkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiBcIiNkZGU3ZjJcIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9zZXR1cE1hcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcblxuY2xhc3MgV2VhdGhlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNob3dGYXJlbmhlaXQ6IHRydWVcbiAgfTtcbiAgaGFuZGxlVGVtcGVyYXR1cmVUb2dnbGUgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNob3dGYXJlbmhlaXQ6ICFwcmV2U3RhdGUuc2hvd0ZhcmVuaGVpdFxuICAgIH0pKTtcbiAgfTtcbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNpdHksIHN0YXRlLCBjb3VudHJ5LCB3ZWF0aGVyLCB0ZW1wX2YsIHRlbXBfYywgaWNvbiwgZm9yZWNhc3RfdXJsIH0gPSB0aGlzLnByb3BzLndlYXRoZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgd2VhdGhlcl9fdGVtcGVyYXR1cmUgJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0ZhcmVuaGVpdCA/IFwid2VhdGhlcl9fdGVtcGVyYXR1cmUtLWZcIiA6IFwid2VhdGhlcl9fdGVtcGVyYXR1cmUtLWNcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGVtcGVyYXR1cmVUb2dnbGV9XG4gICAgICAgID5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wIHRlbXAtLWZcIj57dGVtcF9mfSZkZWc7Rjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXAgdGVtcC0tY1wiPnt0ZW1wX2N9JmRlZztDPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJfX2RldGFpbHNcIj5cbiAgICAgICAgICA8aDM+e3dlYXRoZXJ9PC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtjaXR5fSwge3N0YXRlfSAvIHtjb3VudHJ5fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1saWdodCB3ZWF0aGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPldlYXRoZXI8L2gxPlxuXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkeSA/IHRoaXMucmVuZGVyQ29udGVudCgpIDogPExvYWRpbmcgLz59XG5cbiAgICAgICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj1cImh0dHBzOi8vd3d3Lnd1bmRlcmdyb3VuZC5jb20vXCIgY2xhc3NOYW1lPVwic2VjdGlvbl9fYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgUG93ZXJlZCBieSBXZWF0aGVyIFVuZGVyZ3JvdW5kXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9XZWF0aGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jbGFzcyBQaG90b3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJQaG90b3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMucHJvcHMucGhvdG9zLmNvbGxlY3Rpb247XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ubWFwKHBob3RvID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNhcHRpb246IHsgdGV4dDogYWx0IH0sXG4gICAgICAgIGltYWdlczogeyBzdGFuZGFyZF9yZXNvbHV0aW9uOiBpbWFnZSB9LFxuICAgICAgICBsaWtlcyxcbiAgICAgICAgbGluayxcbiAgICAgICAgdXNlcjogeyB1c2VybmFtZSB9XG4gICAgICB9ID0gcGhvdG87XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtpZH0gY2xhc3NOYW1lPVwicGhvdG9zX19waG90b1wiPlxuICAgICAgICAgIDxhIHJlbD1cImV4dGVybmFsXCIgaHJlZj17bGlua30gdGl0bGU9e2FsdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3Rvc19faW1hZ2VcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZS51cmx9KWAgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPXtpbWFnZS53aWR0aH0gaGVpZ2h0PXtpbWFnZS5oZWlnaHR9IGFsdD17YWx0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3Rvc19fdXNlcm5hbWVcIj57dXNlcm5hbWV9PC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwaG90b3NfX2dyaWRcIj57dGhpcy5yZW5kZXJQaG90b3MoKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtbWVkaXVtIHBob3Rvc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyIGNvbnRlbnQtY29udGFpbmVyLS1ncmlkLXNwYWNpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3Rvc19fY29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+UGhvdG9zPC9oMT5cblxuICAgICAgICAgICAge3RoaXMucHJvcHMucmVhZHkgPyB0aGlzLnJlbmRlckNvbnRlbnQoKSA6IDxMb2FkaW5nIC8+fVxuXG4gICAgICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIGNsYXNzTmFtZT1cInNlY3Rpb25fX2F0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgICAgIFBvd2VyZWQgYnkgSW5zdGFncmFtXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Bob3Rvcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFR3aXR0ZXJVc2VyVXJsLCBzZXR1cFR3ZWV0VGV4dCB9IGZyb20gXCIuLi9oZWxwZXJzL2NoYXR0ZXJcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcblxuY2xhc3MgQ2hhdHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlckNoYXR0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMucHJvcHMuY2hhdHRlci5jb2xsZWN0aW9uO1xuICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcChzdGF0dXMgPT4ge1xuICAgICAgY29uc3QgeyBlbnRpdGllcywgZmF2b3JpdGVfY291bnQsIGlkLCByZXR3ZWV0X2NvdW50LCB0ZXh0LCB1c2VyOiB7IHNjcmVlbl9uYW1lIH0gfSA9IHN0YXR1cztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2lkfSBjbGFzc05hbWU9XCJjaGF0dGVyX19zdGF0dXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXR0ZXJfX3RleHRcIj57c2V0dXBUd2VldFRleHQodGV4dCwgZW50aXRpZXMpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzX191c2VybmFtZVwiPlxuICAgICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPXtnZXRUd2l0dGVyVXNlclVybChzY3JlZW5fbmFtZSl9IHRpdGxlPXtgRm9sbG93ICR7c2NyZWVuX25hbWV9IG9uIFR3aXR0ZXJgfT5cbiAgICAgICAgICAgICAgQHtzY3JlZW5fbmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdHRlcl9fbGlzdFwiPnt0aGlzLnJlbmRlckNoYXR0ZXIoKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFyayBjaGF0dGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXIgY29udGVudC1jb250YWluZXItLWdyaWQtc3BhY2luZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdHRlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25fX3RpdGxlXCI+Q2hhdHRlcjwvaDE+XG5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWR5ID8gdGhpcy5yZW5kZXJDb250ZW50KCkgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICAgICAgPGEgcmVsPVwiZXh0ZXJuYWxcIiBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vXCIgY2xhc3NOYW1lPVwic2VjdGlvbl9fYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgUG93ZXJlZCBieSBUd2l0dGVyXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9DaGF0dGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5jb25zdCByZW5kZXJDb250ZW50ID0gcHJvcHMgPT4gKFxuICA8dWw+XG4gICAgPGxpPkxhdDoge3Byb3BzLmdlb2xvY2F0aW9uLmxhdGl0dWRlfTwvbGk+XG4gICAgPGxpPkxvbjoge3Byb3BzLmdlb2xvY2F0aW9uLmxvbmdpdHVkZX08L2xpPlxuICA8L3VsPlxuKTtcblxuY29uc3QgVmlkZW9zID0gcHJvcHMgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFya2VyIHZpZGVvc1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9zX19jb250ZW50XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlZpZGVvczwvaDE+XG5cbiAgICAgICAge3Byb3BzLnJlYWR5ID8gcmVuZGVyQ29udGVudChwcm9wcykgOiA8TG9hZGluZyAvPn1cblxuICAgICAgICA8YSByZWw9XCJleHRlcm5hbFwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9cIiBjbGFzc05hbWU9XCJzZWN0aW9uX19hdHRyaWJ1dGlvblwiPlxuICAgICAgICAgIFBvd2VyZWQgYnkgWW91VHViZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ZpZGVvcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWJvdXRQYWdlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWJvdXRcIj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctc2t5LWxpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPkFib3V0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZW9wdWxzZSBpcyBhIHRvb2wgdGhhdCBhbGxvd3MgeW91IHRvIHNlZSBjb250ZW50IGJhc2VkIG9uIHlvdXIgbG9jYXRpb24gaW5jbHVkaW5nIGEgR29vZ2xlIE1hcCBvZiB0aGUgYXJlYSxcbiAgICAgICAgICAgIHRoZSBsb2NhbCB3ZWF0aGVyIGZyb20gV2VhdGhlciBVbmRlcmdyb3VuZCwgcGhvdG9zIGZyb20gSW5zdGFncmFtLCB0d2VldHMgZnJvbSBUd2l0dGVyIGFuZCB2aWRlb3MgZnJvbVxuICAgICAgICAgICAgWW91VHViZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi0tc3BhY2luZyBzZWN0aW9uLS1iZy1lYXJ0aC1saWdodFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5Sb2FkbWFwPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+KFJvYWRtYXApPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtbWVkaXVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uX190aXRsZVwiPlByaXZhY3k8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD5ObyBkYXRhIGlzIHNhdmVkIG9uIG91ciBzZXJ2ZXJzIGFuZCBpcyBvbmx5IHJlcXVlc3RlZCBvbiBhbiBhcy1uZWVkZWQgYmFzaXMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tLXNwYWNpbmcgc2VjdGlvbi0tYmctZWFydGgtZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5UaGFua3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cD4oUGVvcGxlKTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLS1zcGFjaW5nIHNlY3Rpb24tLWJnLWVhcnRoLWRhcmtlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj5Db250YWN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+KEluZm8pPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogQWJvdXRQYWdlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9wYWdlcy9BYm91dFBhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5vdEZvdW5kUGFnZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW5vdC1mb3VuZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxoMT40MDQ8L2gxPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBOb3RGb3VuZFBhZ2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzZXJpYWxpemUgZnJvbSBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgQXBwUm91dGVzIGZyb20gXCIuLi8uLi9jbGllbnQvc3JjL3JvdXRlcy9BcHBSb3V0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgc3RvcmUsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgaHRtbCA9IChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS5wYXRofSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+e3JlbmRlclJvdXRlcyhBcHBSb3V0ZXMpfTwvZGl2PlxuICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbiAgY29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKGh0bWwpO1xuICBjb25zdCBoZWxtZXQgPSBIZWxtZXQucmVuZGVyU3RhdGljKCk7XG5cbiAgcmV0dXJuIGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICAke2hlbG1ldC50aXRsZS50b1N0cmluZygpfVxuICAgICAgICAke2hlbG1ldC5tZXRhLnRvU3RyaW5nKCl9XG4gICAgICAgIFxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImJ1bmRsZS5jc3NcIiAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxuICAgICAgICA8c2NyaXB0PndpbmRvdy5JTklUSUFMX1NUQVRFID0gJHtzZXJpYWxpemUoc3RvcmUuZ2V0U3RhdGUoKSl9PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICBgO1xuXG4gIHJlcy5zZW5kKGh0bWwpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9oZWxwZXJzL3JlbmRlcmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSBcIi4uLy4uL2NsaWVudC9zcmMvcmVkdWNlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgcmVxID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvY3JlYXRlU3RvcmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGdlb2xvY2F0aW9uUmVkdWNlciBmcm9tIFwiLi9nZW9sb2NhdGlvblJlZHVjZXJcIjtcbmltcG9ydCB3ZWF0aGVyUmVkdWNlciBmcm9tIFwiLi93ZWF0aGVyUmVkdWNlclwiO1xuaW1wb3J0IHBob3Rvc1JlZHVjZXIgZnJvbSBcIi4vcGhvdG9zUmVkdWNlclwiO1xuaW1wb3J0IGNoYXR0ZXJSZWR1Y2VyIGZyb20gXCIuL2NoYXR0ZXJSZWR1Y2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGdlb2xvY2F0aW9uOiBnZW9sb2NhdGlvblJlZHVjZXIsXG4gIHdlYXRoZXI6IHdlYXRoZXJSZWR1Y2VyLFxuICBwaG90b3M6IHBob3Rvc1JlZHVjZXIsXG4gIGNoYXR0ZXI6IGNoYXR0ZXJSZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBTRVRfR0VPTE9DQVRJT04gfSBmcm9tIFwiLi4vYWN0aW9ucy9nZW9sb2NhdGlvblwiO1xuXG5leHBvcnQgY29uc3QgZ2VvbG9jYXRpb25SZWR1Y2VyRGVmYXVsdFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGdlb2xvY2F0aW9uUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9HRU9MT0NBVElPTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhdGl0dWRlOiBhY3Rpb24ubGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZTogYWN0aW9uLmxvbmdpdHVkZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yZWR1Y2Vycy9nZW9sb2NhdGlvblJlZHVjZXIuanMiLCJpbXBvcnQgeyBTRVRfV0VBVEhFUiB9IGZyb20gXCIuLi9hY3Rpb25zL3dlYXRoZXJcIjtcblxuZXhwb3J0IGNvbnN0IHdlYXRoZXJSZWR1Y2VyRGVmYXVsdFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHdlYXRoZXJSZWR1Y2VyRGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX1dFQVRIRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaXR5OiBhY3Rpb24uY2l0eSxcbiAgICAgICAgc3RhdGU6IGFjdGlvbi5zdGF0ZSxcbiAgICAgICAgY291bnRyeTogYWN0aW9uLmNvdW50cnksXG4gICAgICAgIHdlYXRoZXI6IGFjdGlvbi53ZWF0aGVyLFxuICAgICAgICB0ZW1wX2Y6IGFjdGlvbi50ZW1wX2YsXG4gICAgICAgIHRlbXBfYzogYWN0aW9uLnRlbXBfYyxcbiAgICAgICAgaWNvbjogYWN0aW9uLmljb24sXG4gICAgICAgIGZvcmVjYXN0X3VybDogYWN0aW9uLmZvcmVjYXN0X3VybFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9yZWR1Y2Vycy93ZWF0aGVyUmVkdWNlci5qcyIsImltcG9ydCB7IFNFVF9QSE9UT1MgfSBmcm9tIFwiLi4vYWN0aW9ucy9waG90b3NcIjtcblxuZXhwb3J0IGNvbnN0IHBob3RvUmVkdWNlckRlZmF1bHRTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBwaG90b1JlZHVjZXJEZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfUEhPVE9TOlxuICAgICAgcmV0dXJuIGFjdGlvbi5waG90b3M7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvcmVkdWNlcnMvcGhvdG9zUmVkdWNlci5qcyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBUd2l0dGVyIGZyb20gXCJub2RlLXR3aXR0ZXJcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcblxuY29uc3QgdHdpdHRlclNlYXJjaENsaWVudCA9IG5ldyBUd2l0dGVyLlNlYXJjaENsaWVudChcbiAgY29uZmlnLlRXSVRURVJfQ09OU1VNRVJfS0VZLFxuICBjb25maWcuVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQsXG4gIGNvbmZpZy5UV0lUVEVSX1RPS0VOLFxuICBjb25maWcuVFdJVFRFUl9UT0tFTl9TRUNSRVRcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwID0+IHtcbiAgYXBwLmdldChcIi9hcGkvY2hhdHRlci86bGF0aXR1ZGUvOmxvbmdpdHVkZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IHJlcS5wYXJhbXM7XG4gICAgdHdpdHRlclNlYXJjaENsaWVudC5zZWFyY2goXG4gICAgICB7IHE6IFwiXCIsIGdlb2NvZGU6IGAke2xhdGl0dWRlfSwke2xvbmdpdHVkZX0sNWttYCwgbGFuZzogXCJlblwiLCBjb3VudDogXCI0XCIgfSxcbiAgICAgIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlcy5zZW5kKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9KTtcbiAgYXBwLmdldChcIi9hcGkvKlwiLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMucmVkaXJlY3QoXCIvXCIpO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvcm91dGVzL2NoYXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXR3aXR0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXR3aXR0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU0VUX0NIQVRURVIgfSBmcm9tIFwiLi4vYWN0aW9ucy9jaGF0dGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBjaGF0dGVyUmVkdWNlckRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9DSEFUVEVSOlxuICAgICAgcmV0dXJuIGFjdGlvbi5jaGF0dGVyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JlZHVjZXJzL2NoYXR0ZXJSZWR1Y2VyLmpzIiwiZXhwb3J0IGNvbnN0IGdldFR3aXR0ZXJVc2VyVXJsID0gc2NyZWVuX25hbWUgPT4ge1xuICByZXR1cm4gYGh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tLyR7c2NyZWVuX25hbWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXR1cFR3ZWV0VGV4dCA9ICh0ZXh0LCBlbnRpdGllcykgPT4ge1xuICByZXR1cm4gdGV4dDtcbn07XG5cbi8vIGZ1bmN0aW9uIGpzb25fdHdlZXRfdGV4dF90b19IVE1MKCR0d2VldCwgJGxpbmtzPXRydWUsICR1c2Vycz10cnVlLCAkaGFzaHRhZ3M9dHJ1ZSlcbi8vIHtcbi8vICAgICAkcmV0dXJuID0gJHR3ZWV0LT50ZXh0O1xuXG4vLyAgICAgJGVudGl0aWVzID0gYXJyYXkoKTtcblxuLy8gICAgIGlmKCRsaW5rcyAmJiBpc19hcnJheSgkdHdlZXQtPmVudGl0aWVzLT51cmxzKSlcbi8vICAgICB7XG4vLyAgICAgICAgIGZvcmVhY2goJHR3ZWV0LT5lbnRpdGllcy0+dXJscyBhcyAkZSlcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgJHRlbXBbXCJzdGFydFwiXSA9ICRlLT5pbmRpY2VzWzBdO1xuLy8gICAgICAgICAgICAgJHRlbXBbXCJlbmRcIl0gPSAkZS0+aW5kaWNlc1sxXTtcbi8vICAgICAgICAgICAgICR0ZW1wW1wicmVwbGFjZW1lbnRcIl0gPSBcIjxhIGhyZWY9J1wiLiRlLT5leHBhbmRlZF91cmwuXCInIHRhcmdldD0nX2JsYW5rJz5cIi4kZS0+ZGlzcGxheV91cmwuXCI8L2E+XCI7XG4vLyAgICAgICAgICAgICAkZW50aXRpZXNbXSA9ICR0ZW1wO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGlmKCR1c2VycyAmJiBpc19hcnJheSgkdHdlZXQtPmVudGl0aWVzLT51c2VyX21lbnRpb25zKSlcbi8vICAgICB7XG4vLyAgICAgICAgIGZvcmVhY2goJHR3ZWV0LT5lbnRpdGllcy0+dXNlcl9tZW50aW9ucyBhcyAkZSlcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgJHRlbXBbXCJzdGFydFwiXSA9ICRlLT5pbmRpY2VzWzBdO1xuLy8gICAgICAgICAgICAgJHRlbXBbXCJlbmRcIl0gPSAkZS0+aW5kaWNlc1sxXTtcbi8vICAgICAgICAgICAgICR0ZW1wW1wicmVwbGFjZW1lbnRcIl0gPSBcIjxhIGhyZWY9J2h0dHBzOi8vdHdpdHRlci5jb20vXCIuJGUtPnNjcmVlbl9uYW1lLlwiJyB0YXJnZXQ9J19ibGFuayc+QFwiLiRlLT5zY3JlZW5fbmFtZS5cIjwvYT5cIjtcbi8vICAgICAgICAgICAgICRlbnRpdGllc1tdID0gJHRlbXA7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgaWYoJGhhc2h0YWdzICYmIGlzX2FycmF5KCR0d2VldC0+ZW50aXRpZXMtPmhhc2h0YWdzKSlcbi8vICAgICB7XG4vLyAgICAgICAgIGZvcmVhY2goJHR3ZWV0LT5lbnRpdGllcy0+aGFzaHRhZ3MgYXMgJGUpXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgICR0ZW1wW1wic3RhcnRcIl0gPSAkZS0+aW5kaWNlc1swXTtcbi8vICAgICAgICAgICAgICR0ZW1wW1wiZW5kXCJdID0gJGUtPmluZGljZXNbMV07XG4vLyAgICAgICAgICAgICAkdGVtcFtcInJlcGxhY2VtZW50XCJdID0gXCI8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL2hhc2h0YWcvXCIuJGUtPnRleHQuXCI/c3JjPWhhc2gnIHRhcmdldD0nX2JsYW5rJz4jXCIuJGUtPnRleHQuXCI8L2E+XCI7XG4vLyAgICAgICAgICAgICAkZW50aXRpZXNbXSA9ICR0ZW1wO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgdXNvcnQoJGVudGl0aWVzLCBmdW5jdGlvbigkYSwkYil7cmV0dXJuKCRiW1wic3RhcnRcIl0tJGFbXCJzdGFydFwiXSk7fSk7XG5cbi8vICAgICBmb3JlYWNoKCRlbnRpdGllcyBhcyAkaXRlbSlcbi8vICAgICB7XG4vLyAgICAgICAgICRyZXR1cm4gPSBzdWJzdHJfcmVwbGFjZSgkcmV0dXJuLCAkaXRlbVtcInJlcGxhY2VtZW50XCJdLCAkaXRlbVtcInN0YXJ0XCJdLCAkaXRlbVtcImVuZFwiXSAtICRpdGVtW1wic3RhcnRcIl0pO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybigkcmV0dXJuKTtcbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvaGVscGVycy9jaGF0dGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==