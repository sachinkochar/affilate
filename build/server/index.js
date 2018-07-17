require("source-map-support").install();
module.exports =
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
/******/ 	__webpack_require__.p = "http://localhost:3001/client/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configGet;
/**
 * Unified Configuration Reader
 *
 * This helper function allows you to use the same API in accessing configuration
 * values no matter where the code is being executed (i.e. browser/node).
 *
 * e.g.
 *   import config from '../config';
 *   config('welcomeMessage'); // => "Hello World!"
 */

/* eslint-disable no-console */
/* eslint-disable import/global-require */
/* eslint-disable no-underscore-dangle */

// PRIVATES

let configCache;

/**
 * This resolves the correct configuration source based on the execution
 * environment.  For node we use the standard config file, however, for browsers
 * we need to access the configuration object that would have been bound to
 * the "window" by our "reactApplication" middleware.
 *
 * @return {Object} The executing environment configuration object.
 */
function resolveConfigForBrowserOrServer() {
  if (configCache) {
    return configCache;
  }

  // NOTE: By using the "process.env.BUILD_FLAG_IS_NODE" flag here this block of code
  // will be removed when "process.env.BUILD_FLAG_IS_NODE === true".
  // If no "BUILD_FLAG_IS_NODE" env var is undefined we can assume that we are running outside
  // of a webpack run, and will therefore return the config file.
  if (true) {
    // i.e. running in our server/node process.
    // eslint-disable-next-line global-require
    configCache = __webpack_require__(19).default;
    return configCache;
  }

  // To get here we are likely running in the browser.

  if (typeof window !== 'undefined' && typeof window.__CLIENT_CONFIG__ === 'object') {
    configCache = window.__CLIENT_CONFIG__;
  } else {
    // To get here we must be running in the browser.
    console.warn('No client configuration object was bound to the window.');
    configCache = {};
  }

  return configCache;
}

// EXPORT

/**
 * This function wraps up the boilerplate needed to access the correct
 * configuration depending on whether your code will get executed in the
 * browser/node.
 *
 * i.e.
 *  - For the browser the config values are available at window.__CLIENT_CONFIG__
 *  - For a node process they are within the "<root>/config".
 *
 * To request a configuration value you must provide the repective path. For
 * example, f you had the following configuration structure:
 *   {
 *     foo: {
 *       bar: [1, 2, 3]
 *     },
 *     bob: 'bob'
 *   }
 *
 * You could use this function to access "bar" like so:
 *   import config from '../config';
 *   const value = config('foo.bar');
 *
 * And you could access "bob" like so:
 *   import config from '../config';
 *   const value = config('bob');
 *
 * If any part of the path isn't available as a configuration key/value then
 * an error will be thrown indicating that a respective configuration value
 * could not be found at the given path.
 */
function configGet(path) {
  const parts = typeof path === 'string' ? path.split('.') : path;

  if (parts.length === 0) {
    throw new Error('You must provide the path to the configuration value you would like to consume.');
  }
  let result = resolveConfigForBrowserOrServer();
  for (let i = 0; i < parts.length; i += 1) {
    if (result === undefined) {
      const errorMessage = `Failed to resolve configuration value at "${parts.join('.')}".`;
      // This "if" block gets stripped away by webpack for production builds.
      if (false) {
        throw new Error(`${errorMessage} We have noticed that you are trying to access this configuration value from the client bundle (i.e. code that will be executed in a browser). For configuration values to be exposed to the client bundle you must ensure that the path is added to the client configuration filter in the project configuration values file.`);
      }
      throw new Error(errorMessage);
    }
    result = result[parts[i]];
  }
  return result;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/Paragraph.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Paragraph extends _react.Component {
  render() {
    return _react2.default.createElement(
      'p',
      { className: this.props.class, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      this.props.text
    );
  }
}
exports.default = Paragraph;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/GradButton.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GradButton extends _react.Component {
  render() {
    const { disabled, text } = this.props;
    return _react2.default.createElement(
      "button",
      { onClick: this.props.click, type: "button", className: this.props.class, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      text
    );
  }
}
exports.default = GradButton;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/Image.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Image extends _react.Component {
  render() {
    return _react2.default.createElement('img', { src: this.props.src, width: this.props.width, className: this.props.class, alt: this.props.alt, id: this.props.id, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    });
  }
}
exports.default = Image;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("app-root-dir");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/InputText.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InputText extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      [this.props.name]: ""
    };
  }
  render() {
    const { id, type, name } = this.props;
    return _react2.default.createElement(
      "div",
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      _react2.default.createElement("input", {
        type: type,
        id: id,
        className: this.props.class,
        name: name,
        onChange: ({ target }) => {
          this.setState({ [name]: target.value });this.props._setValue(target.value);
        },
        value: this.state[name],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })
    );
  }
}
exports.default = InputText;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/Label.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Label extends _react.Component {
  render() {
    return _react2.default.createElement(
      'label',
      { htmlFor: this.props.for, className: this.props.class, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      this.props.text
    );
  }
}
exports.default = Label;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

console.log('process.env.NODE_ENV', "development");
if (false) {
  var configFiles = {
   apiUrl: 'http://localhost:9000',
   fbId: '194272327936106',
   gooleId: '548645868132-n8rcc09datfhvikaprdcssl149ldncr6.apps.googleusercontent.com',
   emailReg: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  };
  module.exports = { url };
} else if (true) {
  var configFiles = {
    apiUrl: 'http://localhost:9000',
    fbId: '194272327936106',
    gooleId: '548645868132-n8rcc09datfhvikaprdcssl149ldncr6.apps.googleusercontent.com',
    emailReg: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
   };
  module.exports = { configFiles };
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/TextArea.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextArea extends _react.Component {
  render() {
    return _react2.default.createElement('textarea', { className: this.props.class, id: this.props.id, rows: this.props.rows, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    });
  }
}
exports.default = TextArea;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/Select.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Select extends _react.Component {
  render() {
    console.log("opt", this.props.opt);
    return _react2.default.createElement(
      "select",
      { className: this.props.selectClass, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      this.props.opt.map(data => {
        return _react2.default.createElement(
          "option",
          { className: data.class, value: data.value, disabled: data.disabled, selected: data.selected, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          data.text
        );
      })
    );
  }
}
exports.default = Select;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _envVars = __webpack_require__(39);

var EnvVars = _interopRequireWildcard(_envVars);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const values = {
  // The configuration values that should be exposed to our client bundle.
  // This value gets passed through the /shared/utils/objects/filterWithRules
  // util to create a filter object that can be serialised and included
  // with our client bundle.
  clientConfigFilter: {
    // This is here as an example showing that you can expose variables
    // that were potentially provivded by the environment
    welcomeMessage: true,
    // We only need to expose the enabled flag of the service worker.
    serviceWorker: {
      enabled: true
    },
    // We need to expose all the polyfill.io settings.
    polyfillIO: true,
    // We need to expose all the htmlPage settings.
    htmlPage: true
  },

  // The host on which the server should run.
  host: EnvVars.string('HOST', '18.195.238.14'),
  // The port on which the server should run.
  port: EnvVars.number('PORT', 1337),
  apiUrl: EnvVars.string('API_URL', 'localhost'),

  // The port on which the client bundle development server should run.
  clientDevServerPort: EnvVars.number('CLIENT_DEV_PORT', 3002),

  // This is an example environment variable which is used within the react
  // application to demonstrate the usage of environment variables across
  // the client and server bundles.
  welcomeMessage: EnvVars.string('WELCOME_MSG', 'Hello world!'),

  // Disable server side rendering?
  disableSSR: false,

  // How long should we set the browser cache for the served assets?
  // Don't worry, we add hashes to the files, so if they change the new files
  // will be served to browsers.
  // We are using the "ms" format to set the length.
  // @see https://www.npmjs.com/package/ms
  browserCacheMaxAge: '365d',

  // We use the polyfill.io service which provides the polyfills that a
  // client needs, which is far more optimal than the large output
  // generated by babel-polyfill.
  // Note: we have to keep this seperate from our "htmlPage" configuration
  // as the polyfill needs to be loaded BEFORE any of our other javascript
  // gets parsed.
  polyfillIO: {
    enabled: true,
    url: '//cdn.polyfill.io/v2/polyfill.min.js',
    // Reference https://qa.polyfill.io/v2/docs/features for a full list
    // of features.
    features: [
    // The default list.
    'default', 'es6']
  },

  // Basic configuration for the HTML page that hosts our application.
  // We make use of react-helmet to consume the values below.
  // @see https://github.com/nfl/react-helmet
  htmlPage: {
    titleTemplate: 'RisorsoHomePage, %s',
    defaultTitle: 'Risorso',

    description: '',
    defaultCss: './shared/index.css'
  },

  // Content Security Policy (CSP)
  // @see server/middleware/security for more info.
  cspExtensions: {
    childSrc: [],
    connectSrc: [],
    defaultSrc: [],
    fontSrc: ['fonts.googleapis.com/css', 'fonts.gstatic.com'],
    imgSrc: [],
    mediaSrc: [],
    manifestSrc: [],
    objectSrc: [],
    scriptSrc: [
    // Allow scripts from cdn.polyfill.io so that we can import the
    // polyfill.
    'cdn.polyfill.io'],
    styleSrc: ['cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css', 'fonts.googleapis.com/css']
  },

  // Path to the public assets that will be served off the root of the
  // HTTP server.
  publicAssetsPath: './public',

  // Where does our build output live?
  buildOutputPath: './build',

  // Do you want to included source maps for optimised builds of the client
  // bundle?
  includeSourceMapsForOptimisedClientBundle: false,

  // These extensions are tried when resolving src files for our bundles..
  bundleSrcTypes: ['js', 'jsx', 'json'],

  // What should we name the json output file that webpack generates
  // containing details of all output files for a bundle?
  bundleAssetsFileName: 'assets.json',

  // node_modules are not included in any bundles that target "node" as a
  // runtime (e.g.. the server bundle) as including them often breaks builds
  // due to thinks like require statements containing expressions..
  // However. some of the modules contain files need to be processed by
  // one of our Webpack loaders (e.g. CSS). Add any file types to the list
  // below to allow them to be processed by Webpack.
  nodeExternalsFileTypeWhitelist: [/\.(eot|woff|woff2|ttf|otf)$/, /\.(svg|png|jpg|jpeg|gif|ico)$/, /\.(mp4|mp3|ogg|swf|webp)$/, /\.(css|scss|sass|sss|less)$/],

  // Note: you can only have a single service worker instance.  Our service
  // worker implementation is bound to the "client" and "server" bundles.
  // It includes the "client" bundle assets, as well as the public folder assets,
  // and it is served by the "server" bundle.
  serviceWorker: {
    // Enabled?
    enabled: true,
    // Service worker name
    fileName: 'sw.js',
    // Paths to the public assets which should be included within our
    // service worker. Relative to our public folder path, and accepts glob
    // syntax.
    includePublicAssets: [
    // NOTE: This will include ALL of our public folder assets.  We do
    // a glob pull of them and then map them to /foo paths as all the
    // public folder assets get served off the root of our application.
    // You may or may not want to be including these assets.  Feel free
    // to remove this or instead include only a very specific set of
    // assets.
    './**/*'],
    // Offline page file name.
    offlinePageFileName: 'offline.html'
  },

  bundles: {
    client: {
      // Src entry file.
      srcEntryFile: './client/index.js',

      // Src paths.
      srcPaths: ['./client', './shared',
      // The service worker offline page generation needs access to the
      // config folder.  Don't worry we have guards within the config files
      // to ensure they never get included in a client bundle.
      './config'],

      // Where does the client bundle output live?
      outputPath: './build/client',

      // What is the public http path at which we must serve the bundle from?
      webPath: '/client/',

      // Configuration settings for the development vendor DLL.  This will be created
      // by our development server and provides an improved dev experience
      // by decreasing the number of modules that webpack needs to process
      // for every rebuild of our client bundle.  It by default uses the
      // dependencies configured in package.json however you can customise
      // which of these dependencies are excluded, whilst also being able to
      // specify the inclusion of additional modules below.
      devVendorDLL: {
        // Enabled?
        enabled: true,

        // Specify any dependencies that you would like to include in the
        // Vendor DLL.
        //
        // NOTE: It is also possible that some modules require specific
        // webpack loaders in order to be processed (e.g. CSS/SASS etc).
        // For these cases you don't want to include them in the Vendor DLL.
        include: ['react-async-component', 'react', 'react-dom', 'react-helmet', 'react-router-dom', 'redux', 'react-redux', 'redux-thunk', 'axios'],

        // The name of the vendor DLL.
        name: '__dev_vendor_dll__'
      }
    },

    server: {
      // Src entry file.
      srcEntryFile: './server/index.js',

      // Src paths.
      srcPaths: ['./server', './shared', './config'],

      // Where does the server bundle output live?
      outputPath: './build/server'
    }
  },

  additionalNodeBundles: {
    // NOTE: The webpack configuration and build scripts have been built so
    // that you can add arbitrary additional node bundle configurations here.
    //
    // A common requirement for larger projects is to add additional "node"
    // target bundles (e.g an APi server endpoint). Therefore flexibility has been
    // baked into our webpack config factory to allow for this.
    //
    // Simply define additional configurations similar to below.  The development
    // server will manage starting them up for you.  The only requirement is that
    // within the entry for each bundle you create and return the "express"
    // listener.
    /*
    apiServer: {
      srcEntryFile: './api/index.js',
      srcPaths: [
        './api',
        './shared',
        './config',
      ],
      outputPath: './build/api',
    }
    */
  },

  // These plugin definitions provide you with advanced hooks into customising
  // the project without having to reach into the internals of the tools.
  //
  // We have decided to create this plugin approach so that you can come to
  // a centralised configuration folder to do most of your application
  // configuration adjustments.  Additionally it helps to make merging
  // from the origin starter kit a bit easier.
  plugins: {
    // This plugin allows you to provide final adjustments your babel
    // configurations for each bundle before they get processed.
    //
    // This function will be called once for each for your bundles.  It will be
    // provided the current webpack config, as well as the buildOptions which
    // detail which bundle and mode is being targetted for the current function run.
    babelConfig: (babelConfig, buildOptions) => {
      // eslint-disable-next-line no-unused-vars
      const { target, mode } = buildOptions;

      // Example
      /*
      if (target === 'server' && mode === 'development') {
        babelConfig.presets.push('foo');
      }
      */

      return babelConfig;
    },

    // This plugin allows you to provide final adjustments your webpack
    // configurations for each bundle before they get processed.
    //
    // I would recommend looking at the "webpack-merge" module to help you with
    // merging modifications to each config.
    //
    // This function will be called once for each for your bundles.  It will be
    // provided the current webpack config, as well as the buildOptions which
    // detail which bundle and mode is being targetted for the current function run.
    webpackConfig: (webpackConfig, buildOptions) => {
      // eslint-disable-next-line no-unused-vars
      const { target, mode } = buildOptions;

      // Example:
      /*
      if (target === 'server' && mode === 'development') {
        webpackConfig.plugins.push(new MyCoolWebpackPlugin());
      }
      */

      // Debugging/Logging Example:
      /*
      if (target === 'server') {
        console.log(JSON.stringify(webpackConfig, null, 4));
      }
      */

      return webpackConfig;
    }
  }
};

// This protects us from accidentally including this configuration in our
// client bundle. That would be a big NO NO to do. :)
/**
 * Project Configuration.
 *
 * NOTE: All file/folder paths should be relative to the project root. The
 * absolute paths should be resolved during runtime by our build internal/server.
 */

if (false) {
  throw new Error("You shouldn't be importing the `<projectroot>/config/values.js` directly into code that will be included in your 'client' bundle as the configuration object will be sent to user's browsers. This could be a security risk! Instead, use the `config` helper function located at `<projectroot>/config/index.js`.");
}

exports.default = values;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ifElse;
const execIfFunc = x => typeof x === 'function' ? x() : x;

/**
 * This is a higher order function that accepts a boolean condition and will
 * return a function allowing you to provide if/else values that should be
 * resolved based on the boolean condition.
 *
 * @param  {Boolean|() => Boolean} condition:
 *   The condition to test against. This can be a function for lazy resolution.
 *
 * @return {(X|() => X, Y|() => Y) => X|Y}
 *   A function where the first paramater is the "if" and the second paramater
 *   is the "else".  Each of these allows lazy resolving by providing a function.
 *
 * @example
 *   const ifDev = ifElse(process.env.NODE_ENV === 'development');
 *   ifDev('foo', () => 'lazy resolved');  // => 'foo'
 */
function ifElse(condition) {
  return (then, or) => execIfFunc(condition) ? execIfFunc(then) : execIfFunc(or);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeNil;
/**
 * Filters out all null/undefined items from the given array.
 *
 * @param  {Array} as - the target array
 *
 * @return {Array} The filtered array.
 */
function removeNil(as) {
  return as.filter(a => a != null);
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(26);

var _compression2 = _interopRequireDefault(_compression);

var _path = __webpack_require__(6);

var _appRootDir = __webpack_require__(7);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _reactApplication = __webpack_require__(27);

var _reactApplication2 = _interopRequireDefault(_reactApplication);

var _security = __webpack_require__(76);

var _security2 = _interopRequireDefault(_security);

var _clientBundle = __webpack_require__(80);

var _clientBundle2 = _interopRequireDefault(_clientBundle);

var _serviceWorker = __webpack_require__(81);

var _serviceWorker2 = _interopRequireDefault(_serviceWorker);

var _offlinePage = __webpack_require__(82);

var _offlinePage2 = _interopRequireDefault(_offlinePage);

var _errorHandlers = __webpack_require__(83);

var _errorHandlers2 = _interopRequireDefault(_errorHandlers);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create our express based server.
const app = (0, _express2.default)();

// Don't expose any software information to potential hackers.
/* eslint-disable no-console */

app.disable('x-powered-by');

// Security middlewares.
app.use(..._security2.default);

// Gzip compress the responses.
app.use((0, _compression2.default)());

// Register our service worker generated by our webpack config.
// We do not want the service worker registered for development builds, and
// additionally only want it registered if the config allows.
if (false) {
  app.get(`/${(0, _config2.default)('serviceWorker.fileName')}`, _serviceWorker2.default);
  app.get(`${(0, _config2.default)('bundles.client.webPath')}${(0, _config2.default)('serviceWorker.offlinePageFileName')}`, _offlinePage2.default);
}

// Configure serving of our client bundle.
app.use((0, _config2.default)('bundles.client.webPath'), _clientBundle2.default);

// Configure static serving of our "public" root http path static files.
// Note: these will be served off the root (i.e. '/') of our application.
app.use(_express2.default.static((0, _path.resolve)(_appRootDir2.default.get(), (0, _config2.default)('publicAssetsPath'))));

// The React application middleware.
app.get('*', _reactApplication2.default);

// Error Handler middlewares.
app.use(..._errorHandlers2.default);

// Create an http listener for our express app.
const listener = app.listen((0, _config2.default)('port'), () => console.log(`Server listening on port ${(0, _config2.default)('port')}`));

// We export the listener as it will be handy for our development hot reloader,
// or for exposing a general extension layer for application customisations.
exports.default = listener;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/server/middleware/reactApplication/index.js';
exports.default = reactApplicationMiddleware;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(28);

var _reactRouterDom = __webpack_require__(5);

var _reactAsyncComponent = __webpack_require__(29);

var _reactJobs = __webpack_require__(30);

var _reactAsyncBootstrapper = __webpack_require__(31);

var _reactAsyncBootstrapper2 = _interopRequireDefault(_reactAsyncBootstrapper);

var _reactRedux = __webpack_require__(8);

var _reactHelmet = __webpack_require__(17);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _configureStore = __webpack_require__(32);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _App = __webpack_require__(42);

var _App2 = _interopRequireDefault(_App);

var _ServerHTML = __webpack_require__(71);

var _ServerHTML2 = _interopRequireDefault(_ServerHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React application middleware, supports server side rendering.
 */
function reactApplicationMiddleware(request, response) {
  // Ensure a nonce has been provided to us.
  // See the server/middleware/security.js for more info.
  if (typeof response.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const nonce = response.locals.nonce;

  // It's possible to disable SSR, which can be useful in development mode.
  // In this case traditional client side only rendering will occur.
  if ((0, _config2.default)('disableSSR')) {
    if (true) {
      // eslint-disable-next-line no-console
      console.log('==> Handling react route without SSR');
    }
    // SSR is disabled so we will return an "empty" html page and
    // rely on the client to initialize and render the react application.
    const html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_ServerHTML2.default, { nonce: nonce, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }));
    response.status(200).send(`<!DOCTYPE html>${html}`);
    return;
  }

  // Create a context for our AsyncComponentProvider.
  const asyncComponentsContext = (0, _reactAsyncComponent.createAsyncContext)();

  // Create a context for <StaticRouter>, which will allow us to
  // query for the results of the render.
  const reactRouterContext = {};

  // Create the job context for our provider, this grants
  // us the ability to track the resolved jobs to send back to the client.
  const jobContext = (0, _reactJobs.createJobContext)();

  // Create the redux store.
  const store = (0, _configureStore2.default)();

  // Declare our React application.
  const app = _react2.default.createElement(
    _reactAsyncComponent.AsyncComponentProvider,
    { asyncContext: asyncComponentsContext, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    },
    _react2.default.createElement(
      _reactJobs.JobProvider,
      { jobContext: jobContext, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: request.url, context: reactRouterContext, __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: store, __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          _react2.default.createElement(_App2.default, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          })
        )
      )
    )
  );

  // Pass our app into the react-async-component helper so that any async
  // components are resolved for the render.
  (0, _reactAsyncBootstrapper2.default)(app).then(() => {
    const appString = (0, _server.renderToString)(app);
    // Generate the html response.
    const html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_ServerHTML2.default, {
      reactAppString: appString,
      nonce: nonce,
      helmet: _reactHelmet2.default.rewind(),
      storeState: store.getState(),
      routerState: reactRouterContext,
      jobsState: jobContext.getState(),
      asyncComponentsState: asyncComponentsContext.getState(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    }));

    // Check if the router context contains a redirect, if so we need to set
    // the specific status and redirect header and end the response.
    if (reactRouterContext.url) {
      response.status(302).setHeader('Location', reactRouterContext.url);
      response.end();
      return;
    }

    response.status(reactRouterContext.missed ? // If the renderResult contains a "missed" match then we set a 404 code.
    // Our App component will handle the rendering of an Error404 view.
    404 : // Otherwise everything is all good and we send a 200 OK status.
    200).send(`<!DOCTYPE html>${html}`);
  });
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-async-component");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-jobs");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-async-bootstrapper");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reduxThunk = __webpack_require__(33);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(34);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(35);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  const enhancers = (0, _redux.compose)(
  // Middleware store enhancer.
  (0, _redux.applyMiddleware)(
  // Initialising redux-thunk with extra arguments will pass the below
  // arguments to all the redux-thunk actions. Below we are passing a
  // preconfigured axios instance which can be used to fetch data with.
  // @see https://github.com/gaearon/redux-thunk
  _reduxThunk2.default.withExtraArgument({ axios: _axios2.default })),
  // Redux Dev Tools store enhancer.
  // @see https://github.com/zalmoxisus/redux-devtools-extension
  // We only want this enhancer enabled for development and when in a browser
  // with the extension installed.
  "development" === 'development' && typeof window !== 'undefined' && typeof window.devToolsExtension !== 'undefined' ? // Call the brower extension function to create the enhancer.
  window.devToolsExtension() : // Else we return a no-op function.
  f => f);

  const store = initialState ? (0, _redux.createStore)(_reducers2.default, initialState, enhancers) : (0, _redux.createStore)(_reducers2.default, enhancers);

  if (false) {
    // Enable Webpack hot module replacement for reducers. This is so that we
    // don't lose all of our current application state during hot reloading.
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

// NOTE: If we create an '/api' endpoint in our application then we will neeed to
// configure the axios instances so that they will resolve to the proper URL
// endpoints on the server. We have to provide absolute URLs for any of our
// server bundles. To do so we can set the default 'baseURL' for axios. Any
// relative path requests will then be appended to the 'baseURL' in order to
// form an absolute URL.
// We don't need to worry about this for client side executions, relative paths
// will work fine there.
// Example:
//
// const axiosConfig = process.env.IS_NODE === true
//   ? { baseURL: process.env.NOW_URL || notEmpty(process.env.SERVER_URL) }
//   : {};
//
// Then we will then have to initialise our redux-thunk middlware like so:
//
// thunk.withExtraArgument({
//   axios: axios.create(axiosConfig),
// })

exports.default = configureStore;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _test = __webpack_require__(36);

var _test2 = _interopRequireDefault(_test);

var _search = __webpack_require__(37);

var _search2 = _interopRequireDefault(_search);

var _tags = __webpack_require__(38);

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rootReducer = (0, _redux.combineReducers)({
  test: _test2.default,
  search: _search2.default,
  tags: _tags2.default
});

exports.default = rootReducer;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;
// import { LOGIN, ERROR, FORGETPASSWORD } from '../actions/login_action';

const initialState = {
  response: ''
};

// receiving response sent by action according to type of action
function test(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { response: action.payload };
      break;

    case 'ERROR':
      return { response: action.payload };
      break;

    case 'FORGETPASSWORD':
      return { response: action.payload };
      break;

    default:
      return state;
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;
// import { LOGIN, ERROR, FORGETPASSWORD } from '../actions/login_action';

const initialState = {
  search_data: ''
};

// receiving response sent by action according to type of action
function test(state = initialState, action) {
  console.log(action, 'action');
  switch (action.type) {
    case 'SEARCHSUCCESS':
      return { search_data: action.payload };
      break;

    case 'SEARCHERROR':
      return { search_data: action.payload };
      break;

    case 'SEARCHREQUEST':
      return { search_data: action.message };
      break;

    default:
      return state;
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;
// import { LOGIN, ERROR, FORGETPASSWORD } from '../actions/login_action';

const initialState = {
  tags_data: ''
};

// receiving response sent by action according to type of action
function test(state = initialState, action) {
  console.log(action, 'action');
  switch (action.type) {
    case 'TAGSSUCCESS':
      return { tags_data: action.payload };
      break;

    case 'TAGSERROR':
      return { tags_data: action.payload };
      break;

    case 'TAGSREQUEST':
      return { tags_data: action.message };
      break;

    default:
      return state;
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = string;
exports.number = number;
exports.bool = bool;

var _appRootDir = __webpack_require__(7);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _safe = __webpack_require__(40);

var _safe2 = _interopRequireDefault(_safe);

var _dotenv = __webpack_require__(41);

var _dotenv2 = _interopRequireDefault(_dotenv);

var _fs = __webpack_require__(13);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _ifElse = __webpack_require__(20);

var _ifElse2 = _interopRequireDefault(_ifElse);

var _removeNil = __webpack_require__(21);

var _removeNil2 = _interopRequireDefault(_removeNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PRIVATES

function registerEnvFile() {
  const DEPLOYMENT = process.env.DEPLOYMENT;
  const envFile = '.env';

  // This is the order in which we will try to resolve an environment configuration
  // file.
  const envFileResolutionOrder = (0, _removeNil2.default)([
  // Is there an environment config file at the app root?
  // This always takes preference.
  // e.g. /projects/react-universally/.env
  _path2.default.resolve(_appRootDir2.default.get(), envFile),
  // Is there an environment config file at the app root for our target
  // environment name?
  // e.g. /projects/react-universally/.env.staging
  (0, _ifElse2.default)(DEPLOYMENT)(_path2.default.resolve(_appRootDir2.default.get(), `${envFile}.${DEPLOYMENT}`))]);

  // Find the first env file path match.
  const envFilePath = envFileResolutionOrder.find(filePath => _fs2.default.existsSync(filePath));

  // If we found an env file match the register it.
  if (envFilePath) {
    // eslint-disable-next-line no-console
    console.log(_safe2.default.bgBlue.white(`==> Registering environment variables from: ${envFilePath}`));
    _dotenv2.default.config({ path: envFilePath });
  }
}

// Ensure that we first register any environment variables from an existing
// env file.
/**
 * Helper for resolving environment specific configuration files.
 *
 * It resolves .env files that are supported by the `dotenv` library.
 *
 * Please read the application configuration docs for more info.
 */

registerEnvFile();

// EXPORTED HELPERS

/**
 * Gets a string environment variable by the given name.
 *
 * @param  {String} name - The name of the environment variable.
 * @param  {String} defaultVal - The default value to use.
 *
 * @return {String} The value.
 */
function string(name, defaultVal) {
  return process.env[name] || defaultVal;
}

/**
 * Gets a number environment variable by the given name.
 *
 * @param  {String} name - The name of the environment variable.
 * @param  {number} defaultVal - The default value to use.
 *
 * @return {number} The value.
 */
function number(name, defaultVal) {
  return process.env[name] ? parseInt(process.env[name], 10) : defaultVal;
}

function bool(name, defaultVal) {
  return process.env[name] ? process.env[name] === 'true' || process.env[name] === '1' : defaultVal;
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("colors/safe");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/App.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _Switch = __webpack_require__(43);

var _Switch2 = _interopRequireDefault(_Switch);

var _Route = __webpack_require__(44);

var _Route2 = _interopRequireDefault(_Route);

var _reactHelmet = __webpack_require__(17);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactToastify = __webpack_require__(22);

var _Content = __webpack_require__(45);

var _Content2 = _interopRequireDefault(_Content);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _Main = __webpack_require__(47);

var _Main2 = _interopRequireDefault(_Main);

var _Signup = __webpack_require__(50);

var _Signup2 = _interopRequireDefault(_Signup);

var _LookingFor = __webpack_require__(54);

var _LookingFor2 = _interopRequireDefault(_LookingFor);

var _BothBus = __webpack_require__(55);

var _BothBus2 = _interopRequireDefault(_BothBus);

var _OnBus = __webpack_require__(56);

var _OnBus2 = _interopRequireDefault(_OnBus);

var _OffBus = __webpack_require__(57);

var _OffBus2 = _interopRequireDefault(_OffBus);

var _PriceComp = __webpack_require__(58);

var _PriceComp2 = _interopRequireDefault(_PriceComp);

var _Notification = __webpack_require__(62);

var _Notification2 = _interopRequireDefault(_Notification);

var _Chat = __webpack_require__(63);

var _Chat2 = _interopRequireDefault(_Chat);

var _Search = __webpack_require__(64);

var _Search2 = _interopRequireDefault(_Search);

var _Sales = __webpack_require__(69);

var _Sales2 = _interopRequireDefault(_Sales);

__webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {
  componentDidMount() {
    new WOW().init();
  }
  render() {
    return _react2.default.createElement(
      'div',
      { id: 'row', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      _react2.default.createElement(
        _reactHelmet2.default,
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        _react2.default.createElement('html', { lang: 'en', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }),
        _react2.default.createElement('meta', { charSet: 'utf-8', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }),
        _react2.default.createElement('meta', { name: 'application-name', content: (0, _config2.default)('htmlPage.defaultTitle'), __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }),
        _react2.default.createElement('meta', { name: 'description', content: (0, _config2.default)('htmlPage.description'), __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }),
        _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }),
        _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#2b2b2b', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }),
        _react2.default.createElement('meta', { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }),
        _react2.default.createElement('meta', { name: 'theme-color', content: '#2b2b2b', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }),
        _react2.default.createElement('link', { href: '../assets/css/bootstrap.min.css', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }),
        _react2.default.createElement('link', { href: '../assets/css/mdb.css', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }),
        _react2.default.createElement('link', { href: '../assets/css/mdb.min.css', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }),
        _react2.default.createElement('link', { href: '../assets/css/main.css', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }),
        _react2.default.createElement('link', { href: '../assets/css/style.min.css', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }),
        _react2.default.createElement('link', {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }),
        _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Muli:400,600', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }),
        _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.3.1.js', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }),
        _react2.default.createElement('script', { src: '../assets/js/bootstrap.js', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }),
        _react2.default.createElement('script', { src: '../assets/js/mdb.min.js', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }),
        _react2.default.createElement('script', { src: '../assets/js/popper.min.js', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }),
        _react2.default.createElement(
          'title',
          {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          (0, _config2.default)('htmlPage.defaultTitle'),
          ' '
        )
      ),
      _react2.default.createElement(_reactToastify.ToastContainer, { autoClose: 2000, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }),
      _react2.default.createElement(
        _Switch2.default,
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        _react2.default.createElement(_Route2.default, { exact: true, path: '/chat', render: props => _react2.default.createElement(_Chat2.default, _extends({}, props, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          })), __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }),
        _react2.default.createElement(
          _Main2.default,
          {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          },
          _react2.default.createElement(_Route2.default, { exact: true, path: '/', render: props => _react2.default.createElement(_Content2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/signup', render: props => _react2.default.createElement(_Signup2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/looking-for', render: props => _react2.default.createElement(_LookingFor2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/online-bussiness', render: props => _react2.default.createElement(_OnBus2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/offline-bussiness', render: props => _react2.default.createElement(_OffBus2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/both-bussiness', render: props => _react2.default.createElement(_BothBus2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/price-recom', render: props => _react2.default.createElement(_PriceComp2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/notification', render: props => _react2.default.createElement(_Notification2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/search', render: props => _react2.default.createElement(_Search2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }),
          _react2.default.createElement(_Route2.default, { path: '/sales', render: props => _react2.default.createElement(_Sales2.default, _extends({}, props, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            })), __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          })
        )
      )
    );
  }
}
exports.default = App;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Switch");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Route");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Content.js'; // Component containing all the components rendering,
// of all child Routes.

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _Middle = __webpack_require__(46);

var _Middle2 = _interopRequireDefault(_Middle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Content extends _react.Component {
  constructor() {
    super();
  }
  render() {
    return _react2.default.createElement(
      'div',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      _react2.default.createElement(_Middle2.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })
    );
  }
}

function mapStateToProps(state) {
  const data = state;
  return { data };
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Content);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Middle.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Middle extends _react.Component {
  render() {
    return _react2.default.createElement(
      "main",
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      _react2.default.createElement(
        "div",
        { className: "container", __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        _react2.default.createElement(
          "section",
          { className: "text-center my-5", __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          _react2.default.createElement(
            "h5",
            { className: "text-center py-2 color-primary", __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            },
            "Our Process"
          ),
          _react2.default.createElement(
            "h3",
            { className: "mb-5", __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            "Check out how your organisation stacks",
            _react2.default.createElement("br", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            }),
            "up against competitors"
          ),
          _react2.default.createElement(
            "div",
            { className: "row", __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            _react2.default.createElement(
              "div",
              { className: "col-lg-4 col-md-4 mb-lg-0 mb-4", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                }
              },
              _react2.default.createElement(
                "div",
                { className: "card rounded testimonial-card", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  }
                },
                _react2.default.createElement("div", { className: "card-up info-color", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "avatar mx-auto white", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    }
                  },
                  _react2.default.createElement("img", {
                    src: "../assets/images/Icon/time.png",
                    className: "rounded-circle img-fluid",
                    alt: "",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    }
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "card-body mb-4", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    }
                  },
                  _react2.default.createElement(
                    "h4",
                    { className: "mb-4", __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      }
                    },
                    "30 Days Period Crap"
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "dark-grey-text mt-4", __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      }
                    },
                    "Get Paid Even after 90 Days. If you\u2019re",
                    _react2.default.createElement("br", {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      }
                    }),
                    " the source then you remain"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-lg-4 col-md-4 mb-md-0 mb-4", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              _react2.default.createElement(
                "div",
                { className: "card rounded testimonial-card", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                },
                _react2.default.createElement("div", { className: "card-up blue-gradient", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "avatar mx-auto white", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    }
                  },
                  _react2.default.createElement("img", {
                    src: "../assets/images/Icon/network.png",
                    className: "rounded-circle img-fluid",
                    alt: "",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "card-body mb-4", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    }
                  },
                  _react2.default.createElement(
                    "h4",
                    { className: "mb-4", __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      }
                    },
                    "Get Easy Links"
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "dark-grey-text mt-4", __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      }
                    },
                    "Get links to put on your blogs",
                    _react2.default.createElement("br", {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      }
                    }),
                    " as soon as you register"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-lg-4 col-md-4", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              _react2.default.createElement(
                "div",
                { className: "card rounded testimonial-card", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                _react2.default.createElement("div", { className: "card-up indigo", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "avatar mx-auto white", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    }
                  },
                  _react2.default.createElement("img", {
                    src: "../assets/images/Icon/db.png",
                    className: "rounded-circle img-fluid",
                    alt: "",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54
                    }
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "card-body mb-4", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    }
                  },
                  _react2.default.createElement(
                    "h4",
                    { className: "mb-4", __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      }
                    },
                    "Get Competitive Analysis"
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "dark-grey-text mt-4", __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    "Know the source of every Purchase.",
                    _react2.default.createElement("br", {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      }
                    }),
                    " Get detailed Analysis"
                  )
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "container-fluid wave", __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        },
        _react2.default.createElement(
          "section",
          { className: "mt-5 wow fadeIn", __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          _react2.default.createElement(
            "div",
            { className: "row pt-5", __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            _react2.default.createElement(
              "div",
              { className: "col-md-7 mb-4 px-0", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                }
              },
              _react2.default.createElement("img", { src: "../assets/images/home/1.png", className: "img-fluid", alt: "", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-4 my-auto", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              },
              _react2.default.createElement(
                "h3",
                { className: "h3 mb-3", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                },
                "For Publishers -",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                }),
                " Blogs, Websites, ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                }),
                " E-commerce Stores"
              ),
              _react2.default.createElement(
                "p",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                "Get Offers or Request offers from the business also get complete ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                }),
                "Product analysis that is Product\u2019s Credibility , User Trust , Brand value , Reviews and more. ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                }),
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                }),
                "So that you can decide which products to publish wisely"
              ),
              _react2.default.createElement(
                "div",
                { className: "text-left py-4 mt-3", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  }
                },
                _react2.default.createElement(
                  "button",
                  { className: "btn blue-gradient btn-rounded ml-0 px-5 text-capitalize", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 88
                    }
                  },
                  "Get Offer"
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "container-fluid", __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        },
        _react2.default.createElement(
          "section",
          { className: "mt-5 wow fadeIn", __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          },
          _react2.default.createElement(
            "div",
            { className: "row", __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            },
            _react2.default.createElement(
              "div",
              { className: "col-md-4 offset-md-1 my-auto", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                }
              },
              _react2.default.createElement(
                "h3",
                { className: "h3 mb-3", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                },
                "For Business-",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  }
                }),
                " Online , Offline"
              ),
              _react2.default.createElement(
                "p",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  }
                },
                "Get Offers or Request offers from the business also get complete ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  }
                }),
                "Product analysis that is Product\u2019s Credibility , User Trust , Brand value , Reviews and more. ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                }),
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                }),
                "So that you can decide which products to publish wisely"
              ),
              _react2.default.createElement(
                "div",
                { className: "text-left py-4 mt-3", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                },
                _react2.default.createElement(
                  "button",
                  { className: "btn blue-gradient btn-rounded ml-0 px-5 text-capitalize", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 110
                    }
                  },
                  "Get Offer"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-7 mb-4 px-0", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                }
              },
              _react2.default.createElement("img", { src: "../assets/images/home/2.png", className: "img-fluid", alt: "", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 116
                }
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "container-fluid wave", __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        },
        _react2.default.createElement(
          "section",
          { className: "mt-5 wow fadeIn", __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          },
          _react2.default.createElement(
            "div",
            { className: "row", __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            },
            _react2.default.createElement(
              "div",
              { className: "col-md-7 mb-4 px-0", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124
                }
              },
              _react2.default.createElement("img", { src: "../assets/images/home/3.png", className: "img-fluid", alt: "", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-4 my-auto", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                }
              },
              _react2.default.createElement(
                "h3",
                { className: "h3 mb-3", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                  }
                },
                "Get Recommendation",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  }
                }),
                " and potential earnings",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  }
                }),
                " for product",
                ' '
              ),
              _react2.default.createElement(
                "p",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                  }
                },
                "Publishers can Get recommended products and see ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  }
                }),
                "expected earnings through that product . In the similar way ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                  }
                }),
                "Businesses Can get recommended websites and see ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                  }
                }),
                "expected earnings."
              ),
              _react2.default.createElement(
                "div",
                { className: "text-left py-4 mt-3", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                  }
                },
                _react2.default.createElement(
                  "button",
                  { className: "btn blue-gradient btn-rounded ml-0 px-5 text-capitalize", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 137
                    }
                  },
                  "Get Offer"
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "container-fluid", __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        },
        _react2.default.createElement(
          "section",
          { className: "mt-5 wow fadeIn", __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            }
          },
          _react2.default.createElement(
            "div",
            { className: "row", __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              }
            },
            _react2.default.createElement(
              "div",
              { className: "col-md-4 offset-md-1 my-auto", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                }
              },
              _react2.default.createElement(
                "h3",
                { className: "h3 mb-3", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  }
                },
                "Get the complete",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  }
                }),
                " competitive Analysis"
              ),
              _react2.default.createElement(
                "p",
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                  }
                },
                "Find the source behind very single sale whether your ",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  }
                }),
                "business is online or offline And get ways to improve your",
                _react2.default.createElement("br", {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                  }
                }),
                "sale."
              ),
              _react2.default.createElement(
                "div",
                { className: "text-left py-4 mt-3", __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                  }
                },
                _react2.default.createElement(
                  "button",
                  { className: "btn blue-gradient btn-rounded ml-0 px-5 text-capitalize", __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 157
                    }
                  },
                  "Get Offer"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-7 mb-4 px-0", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                }
              },
              _react2.default.createElement("img", { src: "../assets/images/home/4.png", className: "img-fluid", alt: "", __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 163
                }
              })
            )
          )
        )
      )
    );
  }
}
exports.default = Middle;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Main.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(48);

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(49);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Main extends _react.Component {
  render() {
    console.log("this+++", this.props);
    return _react2.default.createElement(
      'div',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      _react2.default.createElement(_Header2.default, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })),
      this.props.children,
      _react2.default.createElement(_Footer2.default, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }))
    );
  }
}
exports.default = Main;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Footer.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Footer extends _react.Component {
  render() {
    return _react2.default.createElement(
      'footer',
      { className: 'page-footer text-center font-small mt-4 wow fadeIn', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      _react2.default.createElement(
        'div',
        { className: 'container text-center text-md-left pad-bottom', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'row text-center text-md-left mt-3 ml-lg-5 pb-3', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'col-md-3 col-lg-3 col-xl-3 mx-auto mt-3', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            _react2.default.createElement(
              'h6',
              { className: 'mb-4 font-weight-bold', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              },
              'Links'
            ),
            _react2.default.createElement(_Paragraph2.default, { text: 'Home', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'Company', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'About Us', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'Terms & Condition', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            })
          ),
          _react2.default.createElement('hr', { className: 'w-100 clearfix d-md-none', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-3 col-lg-3 col-xl-3 mx-auto mt-3', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            _react2.default.createElement(
              'h6',
              { className: 'mb-4 font-weight-bold', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              'Company'
            ),
            _react2.default.createElement(_Paragraph2.default, { text: 'Careers', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'Blog', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'Clients', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'Privacy Policy', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            })
          ),
          _react2.default.createElement('hr', { className: 'w-100 clearfix d-md-none', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-3 col-lg-3 col-xl-3 mx-auto mt-3', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            _react2.default.createElement(
              'h6',
              { className: 'mb-4 font-weight-bold', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              'Support'
            ),
            _react2.default.createElement(_Paragraph2.default, { text: 'Team', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'Blog', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'Clients', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: 'Privacy Policy', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            })
          ),
          _react2.default.createElement('hr', { className: 'w-100 clearfix d-md-none', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-3 col-lg-3 col-xl-3 mx-auto mt-3', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            _react2.default.createElement(
              'h6',
              { className: 'mb-4 font-weight-bold', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              'Contact'
            ),
            _react2.default.createElement(_Paragraph2.default, { text: 'demo@mail.com', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            }),
            _react2.default.createElement(_Paragraph2.default, { text: '+ 01 234 567 88', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            }),
            _react2.default.createElement(
              'div',
              { className: 'text-center text-md-left', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              _react2.default.createElement(
                'ul',
                { className: 'list-unstyled list-inline', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                _react2.default.createElement(
                  'li',
                  { className: 'list-inline-item', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  },
                  _react2.default.createElement(
                    'a',
                    { className: 'google btn-floating btn-sm mx-1', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      }
                    },
                    _react2.default.createElement('i', { className: 'fa fa-google-plus', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      }
                    })
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'list-inline-item', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    }
                  },
                  _react2.default.createElement(
                    'a',
                    { className: 'facebook btn-floating btn-sm mx-1', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      }
                    },
                    _react2.default.createElement('i', { className: 'fa fa-facebook', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                      }
                    })
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'list-inline-item', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    }
                  },
                  _react2.default.createElement(
                    'a',
                    { className: 'linkedin btn-floating btn-sm mx-1', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      }
                    },
                    _react2.default.createElement('i', { className: 'fa fa-linkedin', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      }
                    })
                  )
                )
              )
            )
          )
        )
      )
    );
  }
}
exports.default = Footer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Header.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Image = __webpack_require__(4);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Header extends _react.Component {
  toggleNavbar() {
    const { location } = this.props;
    console.log('this.props.location.pathName', location);
    if (location.pathname == '/') {
      return _react2.default.createElement(
        'div',
        { className: 'header-image', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        _react2.default.createElement(
          'nav',
          {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'container', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'navbar-brand', to: '/', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                },
                _react2.default.createElement(_Image2.default, {
                  src: '../assets/images/logo-white.png',
                  'class': 'float-left',
                  alt: 'placeholder',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  }
                })
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'mt-5 wow fadeIn', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              _react2.default.createElement(
                'div',
                { className: 'row', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-12', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    }
                  },
                  _react2.default.createElement(
                    'h2',
                    { className: 'text-center white-text mb-4', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      }
                    },
                    'Affiliate advertising using ',
                    _react2.default.createElement('br', {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      }
                    }),
                    ' mattchnies learning'
                  ),
                  _react2.default.createElement(
                    'h6',
                    { className: 'text-center white-text mb-4', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      }
                    },
                    'Who you are?'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'row my-3 d-flex justify-content-center', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-sm-12 col-md-6 mb-4 text-md-right bussiness', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 32
                        }
                      },
                      _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: '/signup?bussiness', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                          }
                        },
                        _react2.default.createElement(_GradButton2.default, { 'class': 'btn btn-transparent btn-rounded btn-border z-depth-1a', text: 'Bussiness', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                          }
                        })
                      ),
                      _react2.default.createElement(_Paragraph2.default, { 'class': 'text-center py-4 white-text text-md-right', text: 'I want to get published!', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-6 col-xs-12 mb-4 publisher', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        }
                      },
                      _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: '/signup?publisher', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          }
                        },
                        _react2.default.createElement(_GradButton2.default, { 'class': 'btn btn-transparent btn-rounded btn-border z-depth-1a', text: 'Publisher', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                          }
                        })
                      ),
                      _react2.default.createElement(_Paragraph2.default, { 'class': 'text-center py-4 white-text text-md-left', text: '(Blog, Website, Ecommerce)', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 42
                        }
                      })
                    ),
                    _react2.default.createElement(_Image2.default, {
                      id: 'laptop',
                      'class': 'mockups img-fluid float-left',
                      src: '../assets/images/mockups.png',
                      alt: 'placeholder',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      }
                    }),
                    _react2.default.createElement(_Image2.default, {
                      id: 'cellphone',
                      'class': 'mockups img-fluid float-left',
                      src: '../assets/images/cell-mockups.png',
                      alt: 'placeholder',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      }
                    })
                  )
                )
              )
            )
          )
        )
      );
    } else if (location.pathname == '/sales' || location.pathname == '/notification' || location.pathname == '/messages' || location.pathname == '/price-recom') {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'container', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { className: 'navbar-brand', to: '/', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            },
            _react2.default.createElement(_Image2.default, { src: '../assets/images/logo-black.png', 'class': 'float-left', alt: 'placeholder', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            })
          ),
          _react2.default.createElement(
            'button',
            { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            },
            _react2.default.createElement(
              'span',
              { className: 'dark-blue-text', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              },
              _react2.default.createElement('i', { className: 'fa fa-bars fa-1x', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarSupportedContent', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            },
            _react2.default.createElement('ul', { className: 'navbar-nav mr-auto', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            }),
            _react2.default.createElement(
              'ul',
              { className: 'navbar-nav my-auto', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                }
              },
              _react2.default.createElement(
                'li',
                { className: 'nav-item  p-2  mx-3 active', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  }
                },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { className: 'nav-link', to: '/price-recom', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81
                    }
                  },
                  'Home',
                  _react2.default.createElement(
                    'span',
                    { className: 'sr-only', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      }
                    },
                    '(current)'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item p-2 mx-3', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { className: 'nav-link', to: '/notification', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    }
                  },
                  'Notificaiton'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item p-2 mx-3', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  }
                },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { className: 'nav-link', to: '/chat', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 89
                    }
                  },
                  'Messages'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item p-2 mx-3', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { className: 'nav-link', to: '/sales', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  'Sales'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  }
                },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { className: 'nav-link btn blue-gradient btn-rounded', to: '/', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    }
                  },
                  _react2.default.createElement(
                    'span',
                    { className: 'white-text px-4', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      }
                    },
                    'Sign Out'
                  )
                )
              )
            )
          )
        )
      );
    }
    return _react2.default.createElement(
      'nav',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      },
      _react2.default.createElement(
        'div',
        { className: 'container', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'navbar-brand', to: '/', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          },
          _react2.default.createElement(_Image2.default, { src: '../assets/images/logo-black.png', className: 'float-left', alt: 'placeholder', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          })
        )
      )
    );
  }
  render() {
    const navbar = this.toggleNavbar();
    return _react2.default.createElement(
      'div',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      },
      navbar
    );
  }
}
exports.default = Header;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Signup.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

var _InputText = __webpack_require__(9);

var _InputText2 = _interopRequireDefault(_InputText);

var _Image = __webpack_require__(4);

var _Image2 = _interopRequireDefault(_Image);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Label = __webpack_require__(10);

var _Label2 = _interopRequireDefault(_Label);

var _reactFacebook = __webpack_require__(51);

var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

var _reactGoogleLogin = __webpack_require__(52);

var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);

var _reactToastify = __webpack_require__(22);

var _variables = __webpack_require__(11);

var _variables2 = _interopRequireDefault(_variables);

var _reactRedux = __webpack_require__(8);

var _signup = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { fbId, googleId, emailReg } = _variables2.default.configFiles;

class Signup extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      pass: '',
      repPass: '',
      valid: false
    };
  }
  _handleResponse(data) {
    console.log("success+++", data);
  }

  _handleError(error) {
    console.log("erroe", error);
    this.setState({ error });
  }

  _handleSignup(e) {
    console.log('fname', fname, 'lname', lname, 'email', email, 'pass', pass, 'repPass', repPass);
    const { fname, lname, email, pass, repPass } = this.state;
    // console.log(fname || lname || email || pass || repPass);
    // e.preventDefault();
    if (fname !== undefined || lname !== undefined || email !== undefined || pass !== undefined || repPass !== undefined) {
      if (emailReg.test(String(email).toLowerCase()) || pass.length >= 8 || repPass.length >= 8 || pass === repPass) {
        let data = {
          fname, lname, email, password, repPass
        };
        this.props._signup(data);
        this.setState({ valid: true });
      } else {
        _reactToastify.toast.error('Please Fill All the fields!', { position: _reactToastify.toast.POSITION.BOTTOM_CENTER });
        e.preventDefault();
      }
    }
  }

  render() {
    return _react2.default.createElement(
      'main',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      },
      _react2.default.createElement(
        'div',
        { className: 'container', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        _react2.default.createElement(
          'section',
          { className: 'mt-3 wow fadeIn', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'row', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'col-md-12 mb-4', __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              _react2.default.createElement(
                'h1',
                { className: 'text-center py-4 color-primary mb-4', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                'Sign Up'
              ),
              _react2.default.createElement(
                'div',
                { className: 'card mx-xl-5', __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                },
                _react2.default.createElement(
                  'div',
                  { className: 'card-body mt-5', __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  _react2.default.createElement(
                    'form',
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      { className: 'row', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 67
                        }
                      },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-6 mb-4', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                          }
                        },
                        _react2.default.createElement(_InputText2.default, {
                          name: 'fname',
                          type: 'text',
                          id: 'defaultFormCardNameEx',
                          'class': 'form-control',
                          _setValue: value => this.setState({ fname: value }),
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                          }
                        }),
                        _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light mb-3', text: 'First Name', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                          }
                        })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-6 mb-4', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                          }
                        },
                        _react2.default.createElement(_InputText2.default, {
                          type: 'text',
                          id: 'defaultFormCardNameEx',
                          'class': 'form-control',
                          name: 'lname',
                          _setValue: value => this.setState({ lname: value }),
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                          }
                        }),
                        _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light mb-3', text: 'Last Name', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                          }
                        })
                      )
                    ),
                    _react2.default.createElement('br', {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      }
                    }),
                    _react2.default.createElement(
                      'div',
                      { className: 'row', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 90
                        }
                      },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-12 mb-4', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 91
                          }
                        },
                        _react2.default.createElement(_InputText2.default, {
                          type: 'email',
                          id: 'defaultFormCardNameEx',
                          'class': 'form-control',
                          name: 'email',
                          _setValue: value => this.setState({ email: value }),
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 92
                          }
                        }),
                        _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light mb-3', text: 'Email', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99
                          }
                        })
                      )
                    ),
                    _react2.default.createElement('br', {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      }
                    }),
                    _react2.default.createElement(
                      'div',
                      { className: 'row', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 103
                        }
                      },
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-6 mb-4', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 104
                          }
                        },
                        _react2.default.createElement(_InputText2.default, {
                          type: 'password',
                          id: 'defaultFormCardNameEx',
                          'class': 'form-control',
                          name: 'password',
                          _setValue: value => this.setState({ pass: value }),
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                          }
                        }),
                        _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light mb-3', text: 'Password', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 112
                          }
                        })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-md-6 mb-4', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 114
                          }
                        },
                        _react2.default.createElement(_InputText2.default, {
                          type: 'password',
                          id: 'defaultFormCardNameEx',
                          'class': 'form-control',
                          name: 'repPas',
                          _setValue: value => this.setState({ repPass: value }),
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 115
                          }
                        }),
                        _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light mb-3', text: 'Repeat Password', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 122
                          }
                        })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'text-center py-4 mt-3', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 125
                        }
                      },
                      _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: '/looking-for', __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 126
                          }
                        },
                        _react2.default.createElement(_GradButton2.default, { click: this._handleSignup.bind(this), 'class': "btn blue-gradient btn-rounded px-5 text-capitalize", disabled: this.state.valid, text: "Sign Up", __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 127
                          }
                        })
                      )
                    ),
                    _react2.default.createElement(_Paragraph2.default, { 'class': 'text-uppercase font-small grey-text text-right d-flex justify-content-center mb-3 pt-2', text: 'or Sign up with', __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 130
                      }
                    }),
                    _react2.default.createElement(
                      'div',
                      { className: 'row my-3 d-flex justify-content-center', __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 131
                        }
                      },
                      _react2.default.createElement(
                        _reactFacebook2.default,
                        { appId: fbId, __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 132
                          }
                        },
                        _react2.default.createElement(
                          _reactFacebook.Login,
                          {
                            scope: 'email',
                            onResponse: this._handleResponse.bind(this),
                            onError: this._handleError.bind(this),
                            __self: this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 133
                            }
                          },
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-fb btn-rounded mr-md-3 z-depth-1a', __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 138
                              }
                            },
                            _react2.default.createElement(_Image2.default, { width: '10', src: '../assets/images/Icon/facebook.png', __self: this,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 139
                              }
                            })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactGoogleLogin2.default,
                        {
                          clientId: "googleId",
                          onSuccess: this._handleResponse.bind(this),
                          onFailure: this._handleError.bind(this),
                          className: 'btn btn-google btn-rounded ml-md-3 z-depth-1a',
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 143
                          }
                        },
                        _react2.default.createElement(_Image2.default, {
                          'class': 'google',
                          width: '20',
                          src: '../assets/images/Icon/google.png',
                          __self: this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 149
                          }
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }

};
function mapStateToProps(state) {
  const Signup = state;
  console.log("State", Signup);
  return { Signup };
}
function mapDispatchToProps(dispatch, props) {
  return {
    _signup: data => {
      dispatch((0, _signup._actionSignup)(data));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Signup);

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-facebook");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIGNUPERROR = exports.SIGNUPREQUEST = exports.SIGNUPSUCCESS = undefined;
exports.handleSignUpSuccess = handleSignUpSuccess;
exports.handleSignUpRequest = handleSignUpRequest;
exports.handleSignupError = handleSignupError;
exports._signupAction = _signupAction;

var _variables = __webpack_require__(11);

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SIGNUPSUCCESS = exports.SIGNUPSUCCESS = 'SIGNUPSUCCESS';
const SIGNUPREQUEST = exports.SIGNUPREQUEST = 'SIGNUPREQUEST';
const SIGNUPERROR = exports.SIGNUPERROR = 'SIGNUPERROR';

const apiURL = _variables2.default.configFiles.apiUrl;

// sending received response form fetchSignup to reducer
function handleSignUpSuccess(res) {
  return {
    type: SIGNUPSUCCESS,
    payload: res,
    message: res.message
  };
}

function handleSignUpRequest() {
  return {
    type: SIGNUPREQUEST,
    message: 'loading'
  };
}

// to handle error
function handleSignupError(err) {
  return {
    type: SIGNUPERROR,
    payload: err,
    message: err.message
  };
}

// sending post request of signup data i.e. email and password to backend
function _signupAction(data) {
  const url = `${apiURL}/signup`;

  return dispatch => {
    dispatch(handleSignUpRequest());
    fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json , text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => {
      if (typeof res === 'object') {
        if (res.status === 200) {
          return dispatch(handleSignUpSuccess(res));
        }
        return dispatch(handleSignupError(res));
      }
      return dispatch(handleSignupError(res));
    }).catch(err => dispatch(handleSignupError(err)));
  };
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/LookingFor.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LookingFor extends _react.Component {
    render() {
        return _react2.default.createElement(
            'div',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            _react2.default.createElement(
                'main',
                {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'container', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    _react2.default.createElement(
                        'section',
                        { className: 'mt-5 wow fadeIn', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'row', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 13
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-12 mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 14
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card mx-xl-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 15
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'card-body', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 16
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'text-center base-text py-4 mt-5', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 17
                                                }
                                            },
                                            'Are you looking for'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 18
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-sm-12 col-md-6 mb-4 text-md-right bussiness', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 19
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    _reactRouterDom.NavLink,
                                                    { to: 'online-bussiness', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 20
                                                        }
                                                    },
                                                    _react2.default.createElement(_GradButton2.default, _extends({}, this.props, { 'class': "btn blue-gradient btn-rounded text-capitalize", text: "Online Bussiness", __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 21
                                                        }
                                                    }))
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 col-xs-12 mb-4 publisher', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 24
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    _reactRouterDom.NavLink,
                                                    { to: 'offline-bussiness', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 25
                                                        }
                                                    },
                                                    _react2.default.createElement(_GradButton2.default, _extends({}, this.props, { 'class': "btn blue-gradient btn-rounded text-capitalize", text: "Offline Bussiness", __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 26
                                                        }
                                                    }))
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'text-uppercase grey-text text-right d-flex justify-content-center mb-3 pt-2', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 30
                                                }
                                            },
                                            'or'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row my-3 d-flex justify-content-center', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 31
                                                }
                                            },
                                            _react2.default.createElement(
                                                _reactRouterDom.NavLink,
                                                { to: 'both-bussiness', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 32
                                                    }
                                                },
                                                _react2.default.createElement(_GradButton2.default, _extends({}, this.props, { 'class': "btn blue-gradient btn-rounded text-capitalize", text: "Both Bussiness", __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 33
                                                    }
                                                }))
                                            )
                                        ),
                                        _react2.default.createElement(_Paragraph2.default, { 'class': 'text-center grey-text mb-5', text: '(Online & Offline)', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 36
                                            }
                                        })
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
exports.default = LookingFor;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/BothBus.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InputText = __webpack_require__(9);

var _InputText2 = _interopRequireDefault(_InputText);

var _Label = __webpack_require__(10);

var _Label2 = _interopRequireDefault(_Label);

var _Select = __webpack_require__(14);

var _Select2 = _interopRequireDefault(_Select);

var _TextArea = __webpack_require__(12);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BothBus extends _react.Component {
    render() {
        let opt = [{
            class: "grey-text",
            value: "Choose Your Option",
            disabled: true,
            selected: true,
            text: "Choose Your Option"
        }, {
            class: "",
            value: "1",
            disabled: false,
            selected: false,
            text: "Option1"
        }, {
            class: "",
            value: "2",
            disabled: false,
            selected: false,
            text: "Option2"
        }];
        return _react2.default.createElement(
            'main',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            },
            _react2.default.createElement(
                'div',
                { className: 'container', __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                },
                _react2.default.createElement(
                    'section',
                    { className: 'mt-3 wow fadeIn', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12 mb-4', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            _react2.default.createElement(
                                'h2',
                                { className: 'text-center base-text py-4 mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
                                    }
                                },
                                'Both Business'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card mx-xl-5', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 41
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-body mt-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 42
                                        }
                                    },
                                    _react2.default.createElement(
                                        'form',
                                        {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 43
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 44
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 45
                                                    }
                                                },
                                                _react2.default.createElement(_InputText2.default, { type: 'text', id: 'defaultFormCardNameEx', 'class': 'form-control', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 46
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light', text: 'Business name', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 47
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 49
                                                    }
                                                },
                                                _react2.default.createElement(_Select2.default, { selectClass: 'form-control', opt: opt, __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 50
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'class': 'base-text font-weight-light', text: 'Business Type', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 51
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement('br', {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 54
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 55
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 56
                                                    }
                                                },
                                                _react2.default.createElement(_InputText2.default, { type: 'text', id: 'defaultFormCardNameEx', 'class': 'form-control', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 57
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light', text: 'Bussiness Website', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 58
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 60
                                                    }
                                                },
                                                _react2.default.createElement(_Select2.default, { selectClass: 'form-control', opt: opt, __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 61
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'class': 'base-text font-weight-light', text: 'Offline Bussiness Address', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 62
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement('br', {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 65
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 66
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 67
                                                    }
                                                },
                                                _react2.default.createElement(_InputText2.default, { type: 'text', id: 'defaultFormCardNameEx', 'class': 'form-control', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 68
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light', text: 'Appartment', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 69
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 71
                                                    }
                                                },
                                                _react2.default.createElement(_Select2.default, { selectClass: 'form-control', opt: opt, __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 72
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'class': 'base-text font-weight-light', text: 'Street', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 73
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement('br', {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 76
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 77
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-12 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 78
                                                    }
                                                },
                                                _react2.default.createElement(_TextArea2.default, { 'class': 'form-control md-textarea', id: 'defaultFormCardNameEx', rows: '5', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 79
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text label-textarea font-weight-light', text: 'Description (Optional)', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 80
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center py-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 83
                                                }
                                            },
                                            _react2.default.createElement(
                                                _reactRouterDom.NavLink,
                                                { to: '/price-recom', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 84
                                                    }
                                                },
                                                _react2.default.createElement(_GradButton2.default, { 'class': 'btn blue-gradient btn-rounded text-capitalize px-5', type: 'submit', text: 'Submit', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 85
                                                    }
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
exports.default = BothBus;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/OnBus.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _InputText = __webpack_require__(9);

var _InputText2 = _interopRequireDefault(_InputText);

var _Label = __webpack_require__(10);

var _Label2 = _interopRequireDefault(_Label);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

var _Select = __webpack_require__(14);

var _Select2 = _interopRequireDefault(_Select);

var _TextArea = __webpack_require__(12);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OnBus extends _react.Component {
    render() {
        let opt = [{
            class: "grey-text",
            value: "Choose Your Option",
            disabled: true,
            selected: true,
            text: "Choose Your Option"
        }, {
            class: "",
            value: "1",
            disabled: false,
            selected: false,
            text: "Option1"
        }, {
            class: "",
            value: "2",
            disabled: false,
            selected: false,
            text: "Option2"
        }];
        return _react2.default.createElement(
            'main',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            },
            _react2.default.createElement(
                'div',
                { className: 'container', __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                },
                _react2.default.createElement(
                    'section',
                    { className: 'mt-3 wow fadeIn', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12 mb-4', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            _react2.default.createElement(
                                'h2',
                                { className: 'text-center base-text py-4 mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
                                    }
                                },
                                'Online Business'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card mx-xl-5', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 41
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-body mt-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 42
                                        }
                                    },
                                    _react2.default.createElement(
                                        'form',
                                        {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 43
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 44
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 45
                                                    }
                                                },
                                                _react2.default.createElement(_InputText2.default, { type: 'text', id: 'defaultFormCardNameEx', 'class': 'form-control', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 46
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light', text: 'Business name', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 47
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 49
                                                    }
                                                },
                                                _react2.default.createElement(_Select2.default, { selectClass: 'form-control', opt: opt, __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 50
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'class': 'base-text font-weight-light', text: 'Business Type', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 51
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement('br', {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 54
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 55
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-12 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 56
                                                    }
                                                },
                                                _react2.default.createElement(_InputText2.default, { type: 'text', id: 'defaultFormCardNameEx', 'class': 'form-control', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 57
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light', text: 'Business Website', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 58
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement('br', {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 61
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 62
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-12 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 63
                                                    }
                                                },
                                                _react2.default.createElement(_TextArea2.default, { 'class': 'form-control md-textarea', id: 'defaultFormCardNameEx', rows: '5', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 64
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text label-textarea font-weight-light', text: 'Description (Optional)', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 65
                                                    }
                                                }),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'text-center py-3', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 66
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        _reactRouterDom.NavLink,
                                                        { to: '/price-recom', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 67
                                                            }
                                                        },
                                                        _react2.default.createElement(_GradButton2.default, { 'class': 'btn blue-gradient btn-rounded text-capitalize px-5', type: 'submit', text: 'Submit', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 68
                                                            }
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
exports.default = OnBus;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/OffBus.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _InputText = __webpack_require__(9);

var _InputText2 = _interopRequireDefault(_InputText);

var _Label = __webpack_require__(10);

var _Label2 = _interopRequireDefault(_Label);

var _Select = __webpack_require__(14);

var _Select2 = _interopRequireDefault(_Select);

var _TextArea = __webpack_require__(12);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OffBus extends _react.Component {
    render() {
        let opt = [{
            class: "grey-text",
            value: "Choose Your Option",
            disabled: true,
            selected: true,
            text: "Choose Your Option"
        }, {
            class: "",
            value: "1",
            disabled: false,
            selected: false,
            text: "Option1"
        }, {
            class: "",
            value: "2",
            disabled: false,
            selected: false,
            text: "Option2"
        }];
        return _react2.default.createElement(
            'main',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            },
            _react2.default.createElement(
                'div',
                { className: 'container', __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                },
                _react2.default.createElement(
                    'section',
                    { className: 'mt-3 wow fadeIn', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12 mb-4', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            _react2.default.createElement(
                                'h2',
                                { className: 'text-center base-text py-4 mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
                                    }
                                },
                                'Offline Business'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card mx-xl-5', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 41
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-body mt-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 42
                                        }
                                    },
                                    _react2.default.createElement(
                                        'form',
                                        {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 43
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 44
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 45
                                                    }
                                                },
                                                _react2.default.createElement(_InputText2.default, { type: 'text', id: 'defaultFormCardNameEx', 'class': 'form-control', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 46
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light', text: 'Business name', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 47
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 49
                                                    }
                                                },
                                                _react2.default.createElement(_Select2.default, { selectClass: 'form-control', opt: opt, __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 50
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'class': 'base-text font-weight-light', text: 'Business Type', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 51
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement('br', {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 54
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 55
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 56
                                                    }
                                                },
                                                _react2.default.createElement(_InputText2.default, { type: 'text', id: 'defaultFormCardNameEx', 'class': 'form-control', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 57
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light', text: 'Address fields', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 58
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 60
                                                    }
                                                },
                                                _react2.default.createElement(_Select2.default, { selectClass: 'form-control', opt: opt, __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 61
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'class': 'base-text font-weight-light', text: 'Street', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 62
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement('br', {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 65
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 66
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 67
                                                    }
                                                },
                                                _react2.default.createElement(_InputText2.default, { type: 'text', id: 'defaultFormCardNameEx', 'class': 'form-control', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 68
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text font-weight-light', text: 'Appartment', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 69
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-6 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 71
                                                    }
                                                },
                                                _react2.default.createElement(_Select2.default, { selectClass: 'form-control', opt: opt, __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 72
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'class': 'base-text font-weight-light', text: 'Town', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 73
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement('br', {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 76
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 77
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-12 mb-4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 78
                                                    }
                                                },
                                                _react2.default.createElement(_TextArea2.default, { 'class': 'form-control md-textarea', id: 'defaultFormCardNameEx', rows: '5', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 79
                                                    }
                                                }),
                                                _react2.default.createElement(_Label2.default, { 'for': 'defaultFormCardNameEx', 'class': 'base-text label-textarea font-weight-light', text: 'Description (Optional)', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 80
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center py-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 83
                                                }
                                            },
                                            _react2.default.createElement(
                                                _reactRouterDom.NavLink,
                                                { to: '/price-recom', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 84
                                                    }
                                                },
                                                _react2.default.createElement(_GradButton2.default, { 'class': 'btn blue-gradient btn-rounded text-capitalize px-5', type: 'submit', text: 'Submit', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 85
                                                    }
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
exports.default = OffBus;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/PriceComp.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PriceCard = __webpack_require__(59);

var _PriceCard2 = _interopRequireDefault(_PriceCard);

var _Ol = __webpack_require__(60);

var _Ol2 = _interopRequireDefault(_Ol);

var _PublisherRec = __webpack_require__(61);

var _PublisherRec2 = _interopRequireDefault(_PublisherRec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PriceComp extends _react.Component {
    render() {
        let ol = [{ class: "active" }, { class: "" }, { class: "" }];
        return _react2.default.createElement(
            'main',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            },
            _react2.default.createElement(
                'div',
                { className: 'container ', __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                },
                _react2.default.createElement(
                    'section',
                    { className: 'mt-5 wow fadeIn pt-5', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    },
                    _react2.default.createElement(
                        'h2',
                        { className: 'text-center pt-5 base-text', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            }
                        },
                        'Price Recommendation'
                    ),
                    _react2.default.createElement(
                        'h5',
                        { className: 'text-center grey-text mb-4', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        'Similar Businesses'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                { id: 'multi-item-example', className: 'carousel slide carousel-multi-item', 'data-ride': 'carousel', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 21
                                    }
                                },
                                _react2.default.createElement(_Ol2.default, { olClass: 'carousel-indicators', ol: ol, __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 22
                                    }
                                }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'carousel-inner mb-4 pt-4', role: 'listbox', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 23
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'carousel-item', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 24
                                            }
                                        },
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 25
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 26
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 27
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 28
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 29
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 30
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'carousel-item', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 32
                                            }
                                        },
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 33
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 34
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 35
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 36
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 37
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 38
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'carousel-item active', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 40
                                            }
                                        },
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 41
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 42
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 43
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 44
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 45
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 46
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'carousel-item', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 48
                                            }
                                        },
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 49
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 50
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 51
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 52
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 53
                                            }
                                        }),
                                        _react2.default.createElement(_PriceCard2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 54
                                            }
                                        })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }),
                _react2.default.createElement(
                    'section',
                    { className: 'mt-5 wow fadeIn pt-5 mb-5', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    _react2.default.createElement(
                        'h2',
                        { className: 'text-center pt-5 base-text', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            }
                        },
                        'Recommended Publishers'
                    ),
                    _react2.default.createElement(
                        'h5',
                        { className: 'text-center grey-text mb-4', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 65
                            }
                        },
                        'Similar Businesses'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12 mb-5', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 67
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                { id: 'multi-item-example', className: 'carousel slide carousel-multi-item', 'data-ride': 'carousel', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 68
                                    }
                                },
                                _react2.default.createElement(_Ol2.default, { olClass: 'carousel-indicators', ol: ol, __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 69
                                    }
                                }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'carousel-inner mb-4 pt-4', role: 'listbox', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 70
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'carousel-item', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 71
                                            }
                                        },
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 72
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 73
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 74
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 75
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 76
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 77
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'carousel-item active', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 79
                                            }
                                        },
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 80
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 81
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 82
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 83
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 84
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 85
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'carousel-item', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 87
                                            }
                                        },
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 88
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 89
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 90
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 91
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 92
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 93
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'carousel-item', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 95
                                            }
                                        },
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 96
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 97
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 98
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 99
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 100
                                            }
                                        }),
                                        _react2.default.createElement(_PublisherRec2.default, { 'class': 'row mt-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 101
                                            }
                                        })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'text-center py-4 mt-3', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108
                        }
                    },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn blue-gradient btn-rounded px-5', type: 'submit', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 109
                            }
                        },
                        'Next'
                    )
                ),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                    }
                })
            )
        );
    }
}
exports.default = PriceComp;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/PriceCard.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Image = __webpack_require__(4);

var _Image2 = _interopRequireDefault(_Image);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PriceCard extends _react.Component {

    render() {
        let cardCount = [1, 2];
        return _react2.default.createElement(
            'div',
            { className: this.props.class, __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            cardCount.map((data, i) => {
                return _react2.default.createElement(
                    'div',
                    { className: i % 2 == 0 ? "col-md-5 offset-md-1" : "col-md-5", key: i, __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'card rounded', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'row', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 16
                                    }
                                },
                                _react2.default.createElement(_Image2.default, { 'class': 'card-img-top', src: '../assets/images/price-card-image.png', alt: 'Card image cap', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 17
                                    }
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-8 my-auto', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 19
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-body mb-0 pl-0 pl-0', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 20
                                        }
                                    },
                                    _react2.default.createElement(_Paragraph2.default, { 'class': 'card-text font-weight-bold base-text', text: 'Xyx.com - 88 % Credibility', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 21
                                        }
                                    })
                                )
                            )
                        )
                    )
                );
            })
        );
    }
}
exports.default = PriceCard;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/Ol.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Ol extends _react.Component {
    render() {
        const { olClass, ol } = this.props;
        return _react2.default.createElement(
            "ol",
            { className: olClass, __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            ol.map((data, i) => {
                return _react2.default.createElement("li", { "data-target": "#multi-item-example", key: i, "data-slide-to": i, className: data.class, __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                });
            })
        );
    }
}
exports.default = Ol;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/PublisherRec.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Image = __webpack_require__(4);

var _Image2 = _interopRequireDefault(_Image);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PublisherRec extends _react.Component {
    render() {
        let cardCount = [1, 2];
        return _react2.default.createElement(
            'div',
            { className: this.props.class, __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            cardCount.map((data, i) => {
                return _react2.default.createElement(
                    'div',
                    { className: i % 2 == 0 ? "col-md-5 offset-md-1" : "col-md-5", key: i, __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'card rounded', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'row', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 16
                                    }
                                },
                                _react2.default.createElement(_Image2.default, { 'class': 'card-img-top', src: '../assets/images/price-card-image.png', alt: 'Card image cap', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 17
                                    }
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-8 my-auto', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 19
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-body mb-0 pl-0', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 20
                                        }
                                    },
                                    _react2.default.createElement(_Paragraph2.default, { 'class': 'card-text font-weight-bold base-text mb-2', text: 'Xyx.com - 88 % Credibility', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 21
                                        }
                                    }),
                                    _react2.default.createElement(_Paragraph2.default, { 'class': 'card-text-small', text: 'Avg Sales -98 $', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 22
                                        }
                                    }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 23
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-5', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 24
                                                }
                                            },
                                            _react2.default.createElement(
                                                'a',
                                                { className: 'btn-accept page-link', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 25
                                                    }
                                                },
                                                'Accept'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-5', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 27
                                                }
                                            },
                                            _react2.default.createElement(
                                                'a',
                                                { className: 'btn-reject page-link', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 28
                                                    }
                                                },
                                                'Reject'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            })
        );
    }
}
exports.default = PublisherRec;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Notification.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

var _Image = __webpack_require__(4);

var _Image2 = _interopRequireDefault(_Image);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Notification extends _react.Component {
    render() {
        return _react2.default.createElement(
            'main',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            _react2.default.createElement(
                'div',
                { className: 'container ', __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                _react2.default.createElement(
                    'section',
                    { className: 'mt-5 wow fadeIn pt-5', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 13
                                }
                            },
                            _react2.default.createElement(
                                'h2',
                                { className: 'text-center base-text py-4 mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 14
                                    }
                                },
                                'Messages'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 15
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-2 pt-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 16
                                        }
                                    },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'text-center base-text font-weight-bold py-4 mb-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 17
                                            }
                                        },
                                        'Inbox (3)',
                                        _react2.default.createElement('img', { width: '15', src: '../assets/images/Icon/down-arrow.png', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 18
                                            }
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-3 offset-md-4 form-inline py-0 px-0 search-inbox', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 20
                                        }
                                    },
                                    _react2.default.createElement('img', { className: 'search-btn', width: '20', src: '../assets/images/Icon/search.png', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 21
                                        }
                                    }),
                                    _react2.default.createElement('input', { className: 'form-control search-box', type: 'text ', placeholder: 'Search ', 'aria-label': 'Search ', mdbInputDirective: true, __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 21
                                        }
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-3 pt-4 text-center', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 23
                                        }
                                    },
                                    _react2.default.createElement(_GradButton2.default, { text: '+   New Message', 'class': 'btn blue-gradient btn-rounded text-capitalize', type: 'submit', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 24
                                        }
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27
                                    }
                                },
                                _react2.default.createElement(
                                    'table',
                                    { className: 'table table-striped table-hover mx-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 28
                                        }
                                    },
                                    _react2.default.createElement(
                                        'tbody',
                                        {
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 29
                                            }
                                        },
                                        _react2.default.createElement(
                                            'tr',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 30
                                                }
                                            },
                                            _react2.default.createElement(
                                                'th',
                                                { scope: 'row', className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 31
                                                    }
                                                },
                                                ' ',
                                                _react2.default.createElement(_Image2.default, { width: '75', src: '../assets/images/inbox-head.png', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 31
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 32
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'mt-3', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 33
                                                        }
                                                    },
                                                    'Robbie T Andrew S.'
                                                ),
                                                _react2.default.createElement(_Paragraph2.default, { text: 'Renters, 50 Bond St.', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 34
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 36
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'font-weight-bold mt-3', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 37
                                                        }
                                                    },
                                                    'We need the lease documents'
                                                ),
                                                _react2.default.createElement(_Paragraph2.default, { text: 'Hi there justin, we would like to get our lease documents...', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 38
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 40
                                                    }
                                                },
                                                '20 min ago'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 41
                                                    }
                                                },
                                                _react2.default.createElement(_Paragraph2.default, { 'class': 'notification', text: '4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 42
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 44
                                                    }
                                                },
                                                _react2.default.createElement(_Image2.default, { width: '35', src: '../assets/images/Icon/more-options.png', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 44
                                                    }
                                                })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'tr',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 46
                                                }
                                            },
                                            _react2.default.createElement(
                                                'th',
                                                { scope: 'row', className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 47
                                                    }
                                                },
                                                ' ',
                                                _react2.default.createElement(_Image2.default, { width: '75', src: '../assets/images/inbox-head.png', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 47
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 48
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'mt-3', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 49
                                                        }
                                                    },
                                                    'Robbie T Andrew S.'
                                                ),
                                                _react2.default.createElement(_Paragraph2.default, { text: 'Renters, 50 Bond St.', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 50
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 52
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'font-weight-bold mt-3', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 53
                                                        }
                                                    },
                                                    'We need the lease documents'
                                                ),
                                                _react2.default.createElement(_Paragraph2.default, { text: 'Hi there justin, we would like to get our lease documents...', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 54
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 56
                                                    }
                                                },
                                                '20 min ago'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 57
                                                    }
                                                },
                                                _react2.default.createElement(_Paragraph2.default, { 'class': 'notification', text: '4', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 58
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'align-middle', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 60
                                                    }
                                                },
                                                _react2.default.createElement(_Image2.default, { width: '35', src: '../assets/images/Icon/more-options.png', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 60
                                                    }
                                                })
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 66
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-4 mt-2', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 67
                                        }
                                    },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'font-weight-bold', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 68
                                            }
                                        },
                                        'Showing ',
                                        _react2.default.createElement(
                                            'strong',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 68
                                                }
                                            },
                                            '0-5 out of 24'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-8', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 70
                                        }
                                    },
                                    _react2.default.createElement(
                                        'nav',
                                        { className: 'float-right', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 71
                                            }
                                        },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'pagination pagination-circle pg-blue mb-0', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 72
                                                }
                                            },
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item disabled', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 74
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'btn-previous page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 74
                                                        }
                                                    },
                                                    'Previous'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item disabled', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 76
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'page-link', mdbWavesEffect: true, 'aria-label': 'Previous', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 77
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'sr-only', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 78
                                                            }
                                                        },
                                                        'Previous'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item active', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 82
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 82
                                                        }
                                                    },
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 83
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 83
                                                        }
                                                    },
                                                    '2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 84
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 84
                                                        }
                                                    },
                                                    '3'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 85
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 85
                                                        }
                                                    },
                                                    '4'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 86
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 86
                                                        }
                                                    },
                                                    '5'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 88
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'page-link', mdbWavesEffect: true, 'aria-label': 'Next', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 89
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'sr-only', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 90
                                                            }
                                                        },
                                                        'Next'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 94
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'btn-next page-link', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 94
                                                        }
                                                    },
                                                    'Next'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109
                    }
                })
            )
        );
    }
}
exports.default = Notification;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Chat.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Image = __webpack_require__(4);

var _Image2 = _interopRequireDefault(_Image);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _TextArea = __webpack_require__(12);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Chat extends _react.Component {
    render() {
        return _react2.default.createElement(
            'main',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            _react2.default.createElement(
                'div',
                { className: 'container ', __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                _react2.default.createElement(
                    'section',
                    { className: 'mt-5 pt-5', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    _react2.default.createElement(
                        'h4',
                        { className: 'text-center fixed-top font-weight-bold white py-4 color-primary mb-4', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        'John Doe'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-10 col-xl-10 offset-md-1 offset-xl-1 pl-md-3 px-lg-auto px-5 members-panel-1 scrollbar-light-blue', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            },
                            _react2.default.createElement(
                                'ul',
                                { className: 'list-unstyled chat', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 16
                                    }
                                },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'justify-content-between mb-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 17
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 18
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-1 align-bottom display-1 chat-head', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 19
                                                }
                                            },
                                            _react2.default.createElement(_Image2.default, { src: '../assets/images/chat-1.png', width: '50', alt: 'avatar', 'class': 'avatar chat-head-image rounded-circle ml-2 z-depth-1', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 20
                                                }
                                            })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-7 chat-box chat-body white p-3 ml-2', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 22
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'header', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 23
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'strong',
                                                    { className: 'primary-font', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 24
                                                        }
                                                    },
                                                    'Abraham Doe'
                                                ),
                                                _react2.default.createElement(
                                                    'small',
                                                    { className: 'pull-right text-muted', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 25
                                                        }
                                                    },
                                                    '10:41 pm'
                                                )
                                            ),
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'mb-0', text: 'Get Offers or Request offers from the business also get complete Product analysis that is', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 27
                                                }
                                            })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'justify-content-between mb-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 31
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row mr-3', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 32
                                            }
                                        },
                                        _react2.default.createElement('div', { className: 'col-md-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 33
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-7 chat-box-gradient chat-body white p-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 35
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'header', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 36
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'strong',
                                                    { className: 'primary-font', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 37
                                                        }
                                                    },
                                                    'John Doe'
                                                ),
                                                _react2.default.createElement(
                                                    'small',
                                                    { className: 'white-text pull-right text-muted', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 38
                                                        }
                                                    },
                                                    '10:41 pm'
                                                )
                                            ),
                                            _react2.default.createElement(_Paragraph2.default, { className: 'mb-0', text: 'Get Offers or Request offers from the business also get complete Product analysis that is', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 40
                                                }
                                            })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-1 align-bottom display-1 chat-head', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 42
                                                }
                                            },
                                            _react2.default.createElement(_Image2.default, { src: '../assets/images/chat-2.png', width: '50', alt: 'avatar', 'class': 'avatar chat-head-image rounded-circle mr-2 ml-0 z-depth-1', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 43
                                                }
                                            })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'justify-content-between mb-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 47
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 48
                                            }
                                        },
                                        _react2.default.createElement('div', { className: 'col-md-1 align-bottom display-1 chat-head', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 49
                                            }
                                        }),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-7 chat-box chat-body white p-3 ml-2', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 51
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'header', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 52
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'strong',
                                                    { className: 'primary-font', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 53
                                                        }
                                                    },
                                                    'Abraham Doe'
                                                ),
                                                _react2.default.createElement(
                                                    'small',
                                                    { className: 'pull-right text-muted', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 54
                                                        }
                                                    },
                                                    '10:42 pm'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'mb-0', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 56
                                                    }
                                                },
                                                _react2.default.createElement(_Image2.default, { 'class': 'p-2', src: '../assets/images/C1.png', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 57
                                                    }
                                                }),
                                                _react2.default.createElement(_Image2.default, { 'class': 'p-2', src: '../assets/images/C2.png', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 58
                                                    }
                                                }),
                                                _react2.default.createElement(_Image2.default, { 'class': 'p-2', src: '../assets/images/C3.png', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 59
                                                    }
                                                }),
                                                _react2.default.createElement(_Image2.default, { 'class': 'p-2', src: '../assets/images/C4.png', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 60
                                                    }
                                                })
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'justify-content-between mb-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 65
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 66
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-1 chat-head', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 67
                                                }
                                            },
                                            _react2.default.createElement(_Image2.default, { src: '../assets/images/chat-1.png', width: '50', alt: 'avatar', 'class': 'avatar chat-head-image rounded-circle ml-2 z-depth-1', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 68
                                                }
                                            })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-1 chat-box chat-body white p-3 ml-2', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 70
                                                }
                                            },
                                            _react2.default.createElement(_Image2.default, { src: '../assets/images/typing.png', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 71
                                                }
                                            })
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'white', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 76
                                    }
                                },
                                _react2.default.createElement('hr', { className: 'w-100', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 77
                                    }
                                }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row form-group basic-textarea', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 78
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-1', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 79
                                            }
                                        },
                                        _react2.default.createElement(_Image2.default, { src: '../assets/images/chat-2.png', width: '36', alt: 'avatar', 'class': 'avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 80
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-9', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 82
                                            }
                                        },
                                        _react2.default.createElement(_TextArea2.default, { 'class': 'form-control border-0 pl-2 my-0', id: 'exampleFormControlTextarea2', rows: '1', placeholder: 'Write something...', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 83
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-2', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 85
                                            }
                                        },
                                        _react2.default.createElement(_GradButton2.default, { 'class': 'btn btn-sm blue-gradient btn-rounded text-capitalize float-right mr-lg-2', type: 'button', text: 'Send', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 86
                                            }
                                        })
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
exports.default = Chat;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Search.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Image = __webpack_require__(4);

var _Image2 = _interopRequireDefault(_Image);

var _GradButton = __webpack_require__(3);

var _GradButton2 = _interopRequireDefault(_GradButton);

var _reactRedux = __webpack_require__(8);

var _search = __webpack_require__(65);

var _tags = __webpack_require__(66);

var _SearchCard = __webpack_require__(68);

var _SearchCard2 = _interopRequireDefault(_SearchCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Search extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleTagDelete = this.handleTagDelete.bind(this);
    }
    componentDidMount() {
        this.props._search();
        this.props._tags();
    }
    componentWillReceiveProps(props, nextProps) {
        console.log(props, 'props');
        console.log(nextProps, 'nextProps');
    }

    handleClick(tag) {
        console.log(tag);
        var tags = this.state.tags;
        if (tags.indexOf(tag) < 0) {
            tags.push(tag);
            this.props._filter(tags);
        }
    }

    handleTagDelete(tag) {
        console.log(tag);
        var tags = this.state.tags;
        var tag_index = tags.indexOf(tag);
        tags.splice(tag_index, 1);
        this.setState({ tags: tags });
        if (tags.length > 0) {
            this.props._filter(tags);
        } else {
            this.props._search();
        }
    }

    render() {
        return _react2.default.createElement(
            'main',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            },
            _react2.default.createElement(
                'div',
                { className: 'container ', __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                },
                _react2.default.createElement(
                    'section',
                    { className: 'mt-5 wow fadeIn pt-5', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 55
                                }
                            },
                            _react2.default.createElement(
                                'h2',
                                { className: 'text-center base-text py-4 mb-0', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 56
                                    }
                                },
                                'Find Publishers'
                            ),
                            _react2.default.createElement(
                                'h5',
                                { className: 'text-center base-text mb-5', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 57
                                    }
                                },
                                'Blog , Website , E - Commerce Store'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 58
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-8 offset-md-2 form-inline py-0 px-0 search-inbox search-big-btn', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 59
                                        }
                                    },
                                    _react2.default.createElement(_Image2.default, { 'class': 'ml-3', width: '30', src: '../assets/images/Icon/search.png', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 60
                                        }
                                    }),
                                    this.state.tags.map((tag, i) => {
                                        return _react2.default.createElement(
                                            'span',
                                            { className: 'tags', key: i, onClick: this.handleTagDelete.bind(this, tag), __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 64
                                                }
                                            },
                                            tag,
                                            _react2.default.createElement(_Image2.default, { 'class': 'ml-2', src: '../assets/images/Icon/close.png', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 64
                                                }
                                            })
                                        );
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 72
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-8 offset-md-2 form-inline py-0 px-0 pt-3 pb-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 73
                                        }
                                    },
                                    this.props.Search_data.tags.tags_data.length > 0 && this.props.Search_data.tags.tags_data.map((tag, i) => {
                                        return _react2.default.createElement(
                                            'a',
                                            { className: 'btn-tags page-link', key: i, onClick: this.handleClick.bind(this, tag), mdbWavesEffect: true, __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 77
                                                }
                                            },
                                            tag
                                        );
                                    })
                                )
                            ),
                            Array.isArray(this.props.Search_data.search.search_data) === true && this.props.Search_data.search.search_data.length > 0 && this.props.Search_data.search.search_data.map((details, i) => {
                                return _react2.default.createElement(_SearchCard2.default, {
                                    key: i,
                                    title: details.title,
                                    credibility: details.credibility,
                                    user_trust: details.user_trust,
                                    brand_value: details.brand_value,
                                    expected_profit: details.expected_profit,
                                    expected_sales: details.expected_sales,
                                    subject: details.subject,
                                    price: details.price,
                                    request_for: details.request_for,
                                    __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 87
                                    }
                                });
                            }),
                            this.props.Search_data.search.search_data === "loading" && _react2.default.createElement(
                                'div',
                                { className: 'text-center', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 104
                                    }
                                },
                                'Loading....'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 108
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-4 mt-2', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 109
                                        }
                                    },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'font-weight-bold', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 110
                                            }
                                        },
                                        'Showing ',
                                        _react2.default.createElement(
                                            'strong',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 110
                                                }
                                            },
                                            '0-5 out of 24'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-8', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 112
                                        }
                                    },
                                    _react2.default.createElement(
                                        'nav',
                                        { className: 'float-right', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 113
                                            }
                                        },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'pagination pagination-circle pg-blue mb-0', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 114
                                                }
                                            },
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item disabled', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 116
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'btn-previous page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 116
                                                        }
                                                    },
                                                    'Previous'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item disabled', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 118
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'page-link', mdbWavesEffect: true, 'aria-label': 'Previous', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 119
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'sr-only', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 120
                                                            }
                                                        },
                                                        'Previous'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item active', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 123
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 123
                                                        }
                                                    },
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 124
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 124
                                                        }
                                                    },
                                                    '2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 125
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 125
                                                        }
                                                    },
                                                    '3'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 126
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 126
                                                        }
                                                    },
                                                    '4'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 127
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 127
                                                        }
                                                    },
                                                    '5'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 129
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'page-link', mdbWavesEffect: true, 'aria-label': 'Next', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 130
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'sr-only', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 131
                                                            }
                                                        },
                                                        'Next'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 134
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'btn-next page-link', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 134
                                                        }
                                                    },
                                                    'Next'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'text-center py-4 mt-3', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 142
                        }
                    },
                    _react2.default.createElement(_GradButton2.default, { 'class': 'btn blue-gradient btn-rounded px-5', type: 'submit', text: 'Skip', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 143
                        }
                    })
                ),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 145
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 146
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 147
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 148
                    }
                })
            )
        );
    }
}

function mapStateToProps(state) {
    const Search_data = state;
    console.log("State", Search_data);
    return { Search_data };
}
function mapDispatchToProps(dispatch, props) {
    return {
        _search: () => {
            dispatch((0, _search._searchAction)());
        },
        _tags: () => {
            dispatch((0, _tags._tagsAction)());
        },
        _filter: tags => {
            dispatch((0, _search._searchFilterAction)(tags));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Search);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEARCHERROR = exports.SEARCHREQUEST = exports.SEARCHSUCCESS = undefined;
exports.handleSearchSuccess = handleSearchSuccess;
exports.handleSearchRequest = handleSearchRequest;
exports.handleSearchError = handleSearchError;
exports._searchAction = _searchAction;
exports._searchFilterAction = _searchFilterAction;

var _variables = __webpack_require__(11);

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SEARCHSUCCESS = exports.SEARCHSUCCESS = 'SEARCHSUCCESS';
const SEARCHREQUEST = exports.SEARCHREQUEST = 'SEARCHREQUEST';
const SEARCHERROR = exports.SEARCHERROR = 'SEARCHERROR';

const apiURL = _variables2.default.configFiles.apiUrl;
const temp_url = "http://localhost:5000/api/search/";
const filter_url = "http://localhost:5000/api/search/filter";

const searchData = [{
  title: 'www.xyz.com',
  subject: 'Insurance',
  credibility: '97 %',
  user_trust: '89 %',
  brand_value: 'Good',
  price: '8 $ / Sale',
  request_for: '8 $ / Sale',
  expected_profit: '72 $',
  expected_sales: '99 $ / Month',
  tags: ["Insurance", "Life Cover"]
}, {
  title: 'www.asd.com',
  subject: 'Life Cover',
  credibility: '96 %',
  user_trust: '89 %',
  brand_value: 'Excellent',
  price: '8 $ / Sale',
  request_for: '8 $ / Sale',
  expected_profit: '72 $',
  expected_sales: '99 $ / Month',
  tags: ["Life Cover", "Banking"]

}, {
  title: 'www.abc.com',
  subject: 'Banking',
  credibility: '93 %',
  user_trust: '89 %',
  brand_value: 'Good',
  price: '8 $ / Sale',
  request_for: '8 $ / Sale',
  expected_profit: '72 $',
  expected_sales: '99 $ / Month',
  tags: ["Banking", "Life Cover"]

}, {
  title: 'www.cde.com',
  subject: 'Education',
  credibility: '94 %',
  user_trust: '89 %',
  brand_value: 'Good',
  price: '8 $ / Sale',
  request_for: '8 $ / Sale',
  expected_profit: '72 $',
  expected_sales: '99 $ / Month',
  tags: ["Education", "Life Cover", "Blog"]

}, {
  title: 'www.qwerty.com',
  subject: 'Insurance',
  credibility: '97 %',
  user_trust: '89 %',
  brand_value: 'Good',
  price: '8 $ / Sale',
  request_for: '8 $ / Sale',
  expected_profit: '72 $',
  expected_sales: '99 $ / Month',
  tags: ["Insurance", "Banking"]

}];
// sending received response form fetchSEARCH to reducer
function handleSearchSuccess(res) {
  return {
    type: SEARCHSUCCESS,
    payload: res
  };
}

function handleSearchRequest() {
  return {
    type: SEARCHREQUEST,
    message: 'loading'
  };
}

// to handle error
function handleSearchError(err) {
  return {
    type: SEARCHERROR,
    payload: err,
    message: err.message
  };
}

// sending post request of search data i.e. email and password to backend
function _searchAction() {

  return dispatch => {
    dispatch(handleSearchRequest());
    fetch(temp_url).then(res => res.json()).then(res => {
      return dispatch(handleSearchSuccess(res.data));
    }).catch(err => {
      return dispatch(handleSearchError(err));
    });
  };
}

function _searchFilterAction(tags) {
  console.log(tags.length);
  if (tags.length > 0) {
    console.log(tags);
    const url = filter_url + '/?tags=' + tags;
    console.log('searchFilterAction');
    return dispatch => {
      dispatch(handleSearchRequest());
      fetch(url, {
        method: 'get',
        headers: {
          Accept: 'application/json , text/plain, */*',
          'Content-type': 'application/json'
        }
      }).then(res => res.json()).then(res => {
        return dispatch(handleSearchSuccess(res.data));
      }).catch(err => {
        return dispatch(handleSearchError(err));
      });
    };
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TAGSERROR = exports.TAGSREQUEST = exports.TAGSSUCCESS = undefined;
exports.handleTagsSuccess = handleTagsSuccess;
exports.handleTagsRequest = handleTagsRequest;
exports.handleTagsError = handleTagsError;
exports._tagsAction = _tagsAction;

var _variables = __webpack_require__(11);

var _variables2 = _interopRequireDefault(_variables);

var _constants = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TAGSSUCCESS = exports.TAGSSUCCESS = 'TAGSSUCCESS';
const TAGSREQUEST = exports.TAGSREQUEST = 'TAGSREQUEST';
const TAGSERROR = exports.TAGSERROR = 'TAGSERROR';

const tags = ['Blog', 'Website', 'E-commerce', 'Insurance', 'Banking', 'Education'];
// sending received response form fetchSEARCH to reducer
function handleTagsSuccess(res) {
  return {
    type: TAGSSUCCESS,
    payload: res
  };
}

function handleTagsRequest() {
  return {
    type: TAGSREQUEST,
    message: 'loading'
  };
}

// to handle error
function handleTagsError(err) {
  return {
    type: TAGSERROR,
    payload: err,
    message: err.message
  };
}

// sending post request of search data i.e. email and password to backend
function _tagsAction() {
  console.log('tagsAction');

  return dispatch => {
    dispatch(handleTagsRequest());
    return dispatch(handleTagsSuccess(tags));
  };
}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = "/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/common/SearchCard.js";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchCard extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return _react2.default.createElement(
            "div",
            { className: "card rounded mb-4", __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            _react2.default.createElement(
                "div",
                { className: "row card-body mx-5 mb-4", __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                _react2.default.createElement(
                    "div",
                    { className: "col-md-5 offset-md-1 align-middle", __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    _react2.default.createElement(
                        "h5",
                        { className: "mt-3 mb-3", __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        this.props.title,
                        " "
                    ),
                    _react2.default.createElement(
                        "p",
                        {
                            __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        "Credibility - ",
                        this.props.credibility,
                        " ",
                        _react2.default.createElement("br", {
                            __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        }),
                        " User Trust - ",
                        this.props.user_trust,
                        " ",
                        _react2.default.createElement("br", {
                            __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        }),
                        " Brand value - ",
                        this.props.brand_value,
                        " "
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "color-primary", __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        "Expected Profit - ",
                        this.props.expected_profit
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "col-md-5 offset-md-1 align-middle", __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    _react2.default.createElement(
                        "h5",
                        { className: "mt-3 mb-3", __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        "Blog Sub.- ",
                        this.props.subject,
                        " "
                    ),
                    _react2.default.createElement(
                        "p",
                        {
                            __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        "Price - ",
                        this.props.price,
                        _react2.default.createElement("br", {
                            __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        }),
                        " Request for ",
                        this.props.request_for
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "color-primary", __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        "Expected Sales - ",
                        this.props.expected_sales
                    ),
                    _react2.default.createElement(
                        "a",
                        { className: "btn-request page-link", mdbWavesEffect: true, __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        "Request"
                    )
                )
            )
        );
    }

}

exports.default = SearchCard;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/Sales.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Image = __webpack_require__(4);

var _Image2 = _interopRequireDefault(_Image);

var _Paragraph = __webpack_require__(2);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Sales extends _react.Component {
    render() {
        return _react2.default.createElement(
            'main',
            {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            _react2.default.createElement(
                'div',
                { className: 'container ', __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                _react2.default.createElement(
                    'section',
                    { className: 'mt-5 wow fadeIn pt-5', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            },
                            _react2.default.createElement(
                                'h2',
                                { className: 'text-center base-text py-4 mb-0', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 13
                                    }
                                },
                                'Sales'
                            ),
                            _react2.default.createElement(
                                'h5',
                                { className: 'text-center base-text mb-5', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 14
                                    }
                                },
                                'Blog , Website , E - Commerce Store'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'container card', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 15
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row graph-background mb-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 16
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-12 text-center mt-5', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 17
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'white-text', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 18
                                                }
                                            },
                                            'Accunt Value'
                                        ),
                                        _react2.default.createElement(
                                            'h3',
                                            { className: 'white-text', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 19
                                                }
                                            },
                                            '$4,543.32'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-12 text-center mt-3', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 21
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 22
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-1 offset-md-4 text-center mt-3', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 23
                                                    }
                                                },
                                                _react2.default.createElement(_Image2.default, { src: '../assets/images/Icon/previous.png', alt: '', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 24
                                                    }
                                                })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-2 text-center', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 26
                                                    }
                                                },
                                                _react2.default.createElement(_Paragraph2.default, { 'class': 'white-text mb-1', text: 'Market Gain/Loss', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 27
                                                    }
                                                }),
                                                _react2.default.createElement(
                                                    'h6',
                                                    { className: 'white-text', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 28
                                                        }
                                                    },
                                                    '+$20.17(1.02%)'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-md-1 text-center mt-3', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 30
                                                    }
                                                },
                                                _react2.default.createElement(_Image2.default, { src: '../assets/images/Icon/next.png', alt: '', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 31
                                                    }
                                                })
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-8 offset-md-2 form-inline py-0 px-0 pb-3 pt-3', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 35
                                            }
                                        },
                                        _react2.default.createElement('canvas', { id: 'line-chart', width: '800', height: '200', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 36
                                            }
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-12 pb-3 text-center', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 38
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h6',
                                            { className: 'white-text', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 39
                                                }
                                            },
                                            'MARKET CLOSED'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-6 offset-md-3 pb-5 text-center', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 41
                                            }
                                        },
                                        _react2.default.createElement(
                                            'section',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 42
                                                }
                                            },
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'nav nav-tabs nav-justified graph-tabs', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 43
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'nav-item', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 44
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { className: 'nav-link', 'data-toggle': 'tab', href: '#panel1', role: 'tab', 'aria-selected': 'false', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 45
                                                            }
                                                        },
                                                        '1D'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'nav-item', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 47
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { className: 'nav-link', 'data-toggle': 'tab', href: '#panel2', role: 'tab', 'aria-selected': 'false', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 48
                                                            }
                                                        },
                                                        '1M'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'nav-item', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 50
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { className: 'nav-link', 'data-toggle': 'tab', href: '#panel2', role: 'tab', 'aria-selected': 'false', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 51
                                                            }
                                                        },
                                                        '3M'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'nav-item', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 53
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { className: 'nav-link', 'data-toggle': 'tab', href: '#panel2', role: 'tab', 'aria-selected': 'false', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 54
                                                            }
                                                        },
                                                        '6M'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'nav-item', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 56
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { className: 'nav-link', 'data-toggle': 'tab', href: '#panel2', role: 'tab', 'aria-selected': 'false', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 57
                                                            }
                                                        },
                                                        '1Y'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: 'nav-item', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 59
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { className: 'nav-link active show', 'data-toggle': 'tab', href: '#panel3', role: 'tab', 'aria-selected': 'true', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 60
                                                            }
                                                        },
                                                        'ALL'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row mx-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 66
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-10 mt-2 pl-0', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 67
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'font-weight-bold', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 68
                                                }
                                            },
                                            _react2.default.createElement(
                                                'strong',
                                                {
                                                    __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 68
                                                    }
                                                },
                                                'Your Agressive Portfolio Breakdown'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-2 pr-0', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 71
                                            }
                                        },
                                        _react2.default.createElement(
                                            'select',
                                            { className: 'form-control', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 72
                                                }
                                            },
                                            _react2.default.createElement(
                                                'option',
                                                { className: 'grey-text', value: '', disabled: true, selected: true, __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 73
                                                    }
                                                },
                                                '% Percentage'
                                            ),
                                            _react2.default.createElement(
                                                'option',
                                                { value: '1', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 74
                                                    }
                                                },
                                                'Value'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row mx-5 mt-3 mb-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 78
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-2 card rounded ml-4 stat-panel', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 79
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row card-body text-center my-0 pb-0', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 80
                                                }
                                            },
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h6text-center mt-0 mb-0', text: 'Large Company<br/>Stocks', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 81
                                                }
                                            }),
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h4 mx-auto mt-0 mb-3 color-primary', text: '28.45%', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 82
                                                }
                                            })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-2 card rounded ml-4 stat-panel', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 85
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row card-body text-center my-0 pb-0', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 86
                                                }
                                            },
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h6text-center mt-0 mb-0', text: 'Large Company<br/>Stocks', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 87
                                                }
                                            }),
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h4 mx-auto mt-0 mb-3 color-primary', text: '28.45%', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 88
                                                }
                                            })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-2 card rounded ml-4 stat-panel', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 91
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row card-body text-center my-0 pb-0', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 92
                                                }
                                            },
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h6text-center mt-0 mb-0', text: 'Large Company<br/>Stocks', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 93
                                                }
                                            }),
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h4 mx-auto mt-0 mb-3 color-primary', text: '28.45%', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 94
                                                }
                                            })
                                        )
                                    ),
                                    ' ',
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-2 card rounded ml-4 stat-panel', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 96
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row card-body text-center my-0 pb-0', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 97
                                                }
                                            },
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h6text-center mt-0 mb-0', text: 'Large Company<br/>Stocks', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 98
                                                }
                                            }),
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h4 mx-auto mt-0 mb-3 color-primary', text: '28.45%', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 99
                                                }
                                            })
                                        )
                                    ),
                                    ' ',
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-2 card rounded ml-4 stat-panel', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 101
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row card-body text-center my-0 pb-0', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 102
                                                }
                                            },
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h6text-center mt-0 mb-0', text: 'Large Company<br/>Stocks', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 103
                                                }
                                            }),
                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'h4 mx-auto mt-0 mb-3 color-primary', text: '28.45%', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 104
                                                }
                                            })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'h5',
                                    { className: 'text-center base-text mb-5 mt-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 108
                                        }
                                    },
                                    'Large Company Stock'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card rounded mb-5 mx-5', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 109
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row card-body mx-5 mb-4', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 110
                                            }
                                        },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-6 align-middle border-right pr-5 pt-5', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 111
                                                }
                                            },
                                            _react2.default.createElement(
                                                'table',
                                                { className: 'table', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 112
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'tbody',
                                                    {
                                                        __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 113
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'tr',
                                                        {
                                                            __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 114
                                                            }
                                                        },
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 115
                                                                }
                                                            },
                                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'mt-2', text: 'Opnening Price', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 116
                                                                }
                                                            })
                                                        ),
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 118
                                                                }
                                                            },
                                                            _react2.default.createElement(
                                                                'h6',
                                                                { className: 'font-weight-bold', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 119
                                                                    }
                                                                },
                                                                '$200.64'
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'tr',
                                                        {
                                                            __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 122
                                                            }
                                                        },
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 123
                                                                }
                                                            },
                                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'mt-2', text: 'Previous Closing Price', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 124
                                                                }
                                                            })
                                                        ),
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 126
                                                                }
                                                            },
                                                            _react2.default.createElement(
                                                                'h6',
                                                                { className: 'font-weight-bold', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 127
                                                                    }
                                                                },
                                                                '$200.64'
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'tr',
                                                        {
                                                            __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 130
                                                            }
                                                        },
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 131
                                                                }
                                                            },
                                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'mt-2', text: '52 Week Range', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 132
                                                                }
                                                            })
                                                        ),
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 134
                                                                }
                                                            },
                                                            _react2.default.createElement(
                                                                'h6',
                                                                { className: 'font-weight-bold', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 135
                                                                    }
                                                                },
                                                                '$200.64'
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'tr',
                                                        {
                                                            __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 138
                                                            }
                                                        },
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 139
                                                                }
                                                            },
                                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'mt-2', text: 'Volume', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 140
                                                                }
                                                            })
                                                        ),
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 142
                                                                }
                                                            },
                                                            _react2.default.createElement(
                                                                'h6',
                                                                { className: 'font-weight-bold', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 143
                                                                    }
                                                                },
                                                                '$200.64'
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'tr',
                                                        {
                                                            __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 146
                                                            }
                                                        },
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 147
                                                                }
                                                            },
                                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'mt-2', text: 'Year-To-Date Return', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 148
                                                                }
                                                            })
                                                        ),
                                                        _react2.default.createElement(
                                                            'td',
                                                            { className: 'align-middle', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 150
                                                                }
                                                            },
                                                            _react2.default.createElement(
                                                                'h6',
                                                                { className: 'font-weight-bold', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 151
                                                                    }
                                                                },
                                                                '$200.64'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-6 align-middle', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 158
                                                }
                                            },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'row', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 159
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-md-12 text-center mt-5', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 160
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'h5',
                                                        { className: 'base-text', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 161
                                                            }
                                                        },
                                                        'Accunt Value'
                                                    ),
                                                    _react2.default.createElement(
                                                        'h3',
                                                        { className: 'color-primary', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 162
                                                            }
                                                        },
                                                        '$4,543.32'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-md-12 text-center mt-3', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 164
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'row', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 165
                                                            }
                                                        },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'col-md-3 text-center mt-3', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 166
                                                                }
                                                            },
                                                            _react2.default.createElement(_Image2.default, { src: '../assets/images/Icon/previous-dark.png', alt: '', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 167
                                                                }
                                                            })
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'col-md-6 text-center', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 169
                                                                }
                                                            },
                                                            _react2.default.createElement(_Paragraph2.default, { 'class': 'base-text mb-1', text: 'Market Gain/Loss', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 170
                                                                }
                                                            }),
                                                            _react2.default.createElement(
                                                                'h6',
                                                                { className: 'color-primary', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 171
                                                                    }
                                                                },
                                                                '+$20.17(1.02%)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'col-md-3 text-center mt-3', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 173
                                                                }
                                                            },
                                                            _react2.default.createElement(_Image2.default, { src: '../assets/images/Icon/next-dark.png', alt: '', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 174
                                                                }
                                                            })
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-md-8 offset-md-2 form-inline py-0 px-0 pb-3 pt-3', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 178
                                                        }
                                                    },
                                                    _react2.default.createElement('canvas', { id: 'line-chart-white', width: '800', height: '200', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 179
                                                        }
                                                    })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-md-12 pb-3 text-center', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 181
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'h6',
                                                        { className: 'grey-text', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 182
                                                            }
                                                        },
                                                        'MARKET CLOSED'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-md-12 pb-5 text-center', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 184
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'section',
                                                        {
                                                            __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 185
                                                            }
                                                        },
                                                        _react2.default.createElement(
                                                            'ul',
                                                            { className: 'nav nav-tabs nav-justified graph-tabs-white', __self: this,
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 186
                                                                }
                                                            },
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'nav-item', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 187
                                                                    }
                                                                },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { className: 'nav-link', 'data-toggle': 'tab', href: '#panel1', role: 'tab', 'aria-selected': 'false', __self: this,
                                                                        __source: {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 188
                                                                        }
                                                                    },
                                                                    '1D'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'nav-item', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 190
                                                                    }
                                                                },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { className: 'nav-link', 'data-toggle': 'tab', href: '#panel2', role: 'tab', 'aria-selected': 'false', __self: this,
                                                                        __source: {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 191
                                                                        }
                                                                    },
                                                                    '1M'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'nav-item', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 193
                                                                    }
                                                                },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { className: 'nav-link', 'data-toggle': 'tab', href: '#panel2', role: 'tab', 'aria-selected': 'false', __self: this,
                                                                        __source: {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 194
                                                                        }
                                                                    },
                                                                    '3M'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'nav-item', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 196
                                                                    }
                                                                },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { className: 'nav-link', 'data-toggle': 'tab', href: '#panel2', role: 'tab', 'aria-selected': 'false', __self: this,
                                                                        __source: {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 197
                                                                        }
                                                                    },
                                                                    '6M'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'nav-item', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 199
                                                                    }
                                                                },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { className: 'nav-link', 'data-toggle': 'tab', href: '#panel2', role: 'tab', 'aria-selected': 'false', __self: this,
                                                                        __source: {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 200
                                                                        }
                                                                    },
                                                                    '1Y'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'nav-item', __self: this,
                                                                    __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 202
                                                                    }
                                                                },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { className: 'nav-link active show', 'data-toggle': 'tab', href: '#panel3', role: 'tab', 'aria-selected': 'true', __self: this,
                                                                        __source: {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 203
                                                                        }
                                                                    },
                                                                    'ALL'
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement('br', {
                                    __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 212
                                    }
                                }),
                                _react2.default.createElement('br', {
                                    __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 213
                                    }
                                })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'mt-5 wow fadeIn pt-5', __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 219
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'row', __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 221
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12', __self: this,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 223
                                }
                            },
                            _react2.default.createElement(
                                'h2',
                                { className: 'text-center base-text py-4 mb-0', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 225
                                    }
                                },
                                'What websites have your products'
                            ),
                            _react2.default.createElement(
                                'h5',
                                { className: 'text-center base-text mb-5', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 226
                                    }
                                },
                                'Blog , Website , E - Commerce Store'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card rounded mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 228
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row card-body mx-5 mb-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 229
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-5 offset-md-1 align-middle', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 230
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'mt-3 mb-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 231
                                                }
                                            },
                                            'www.xyz.com '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 232
                                                }
                                            },
                                            'Credibility - 97 % ',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 232
                                                }
                                            }),
                                            ' User Trust - 89 % ',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 232
                                                }
                                            }),
                                            ' Brand value - Good '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'color-primary', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 233
                                                }
                                            },
                                            'Expected Profit - 72 $'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-5 offset-md-1 align-middle', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 235
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'mt-3 mb-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 236
                                                }
                                            },
                                            'Blog Sub.- Insurance '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 237
                                                }
                                            },
                                            'Price - 8 $ / Sale',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 237
                                                }
                                            }),
                                            ' Request for 8 $ / Sale'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'color-primary', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 238
                                                }
                                            },
                                            'Expected Sales - 99 $ / Month'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'btn-request page-link', mdbWavesEffect: true, __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 239
                                                }
                                            },
                                            'Request'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card rounded mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 244
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row card-body mx-5 mb-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 245
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-5 offset-md-1 align-middle', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 246
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'mt-3 mb-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 247
                                                }
                                            },
                                            'www.xyz.com '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 248
                                                }
                                            },
                                            'Credibility - 97 % ',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 248
                                                }
                                            }),
                                            ' User Trust - 89 % ',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 248
                                                }
                                            }),
                                            ' Brand value - Good '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'color-primary', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 249
                                                }
                                            },
                                            'Expected Profit - 72 $'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-5 offset-md-1 align-middle', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 251
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'mt-3 mb-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 252
                                                }
                                            },
                                            'Blog Sub.- Insurance '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 253
                                                }
                                            },
                                            'Price - 8 $ / Sale',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 253
                                                }
                                            }),
                                            ' Request for 8 $ / Sale'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'color-primary', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 254
                                                }
                                            },
                                            'Expected Sales - 99 $ / Month'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'btn-request page-link', mdbWavesEffect: true, __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 255
                                                }
                                            },
                                            'Request'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card rounded mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 260
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row card-body mx-5 mb-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 261
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-5 offset-md-1 align-middle', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 262
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'mt-3 mb-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 263
                                                }
                                            },
                                            'www.xyz.com '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 264
                                                }
                                            },
                                            'Credibility - 97 % ',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 264
                                                }
                                            }),
                                            ' User Trust - 89 % ',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 264
                                                }
                                            }),
                                            ' Brand value - Good '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'color-primary', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 265
                                                }
                                            },
                                            'Expected Profit - 72 $'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-5 offset-md-1 align-middle', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 267
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'mt-3 mb-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 268
                                                }
                                            },
                                            'Blog Sub.- Insurance '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 269
                                                }
                                            },
                                            'Price - 8 $ / Sale',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 269
                                                }
                                            }),
                                            ' Request for 8 $ / Sale'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'color-primary', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 270
                                                }
                                            },
                                            'Expected Sales - 99 $ / Month'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'btn-request page-link', mdbWavesEffect: true, __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 271
                                                }
                                            },
                                            'Request'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'card rounded mb-4', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 276
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row card-body mx-5 mb-4', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 277
                                        }
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-5 offset-md-1 align-middle', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 278
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'mt-3 mb-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 279
                                                }
                                            },
                                            'www.xyz.com '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 280
                                                }
                                            },
                                            'Credibility - 97 % ',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 280
                                                }
                                            }),
                                            ' User Trust - 89 % ',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 280
                                                }
                                            }),
                                            ' Brand value - Good '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'color-primary', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 281
                                                }
                                            },
                                            'Expected Profit - 72 $'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-5 offset-md-1 align-middle', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 283
                                            }
                                        },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'mt-3 mb-3', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 284
                                                }
                                            },
                                            'Blog Sub.- Insurance '
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 285
                                                }
                                            },
                                            'Price - 8 $ / Sale',
                                            _react2.default.createElement('br', {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 285
                                                }
                                            }),
                                            ' Request for 8 $ / Sale'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'color-primary', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 286
                                                }
                                            },
                                            'Expected Sales - 99 $ / Month'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'btn-request page-link', mdbWavesEffect: true, __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 287
                                                }
                                            },
                                            'Request'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'row', __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 292
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-4 mt-2', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 293
                                        }
                                    },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'font-weight-bold', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 294
                                            }
                                        },
                                        'Showing ',
                                        _react2.default.createElement(
                                            'strong',
                                            {
                                                __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 294
                                                }
                                            },
                                            '0-5 out of 24'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-8', __self: this,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 296
                                        }
                                    },
                                    _react2.default.createElement(
                                        'nav',
                                        { className: 'float-right', __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 297
                                            }
                                        },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'pagination pagination-circle pg-blue mb-0', __self: this,
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 298
                                                }
                                            },
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item disabled', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 300
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'btn-previous page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 300
                                                        }
                                                    },
                                                    'Previous'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item disabled', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 302
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'page-link', mdbWavesEffect: true, 'aria-label': 'Previous', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 303
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'sr-only', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 304
                                                            }
                                                        },
                                                        'Previous'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item active', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 308
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 308
                                                        }
                                                    },
                                                    '1'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 309
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 309
                                                        }
                                                    },
                                                    '2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 310
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 310
                                                        }
                                                    },
                                                    '3'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 311
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 311
                                                        }
                                                    },
                                                    '4'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 312
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'pagination-items page-link', mdbWavesEffect: true, __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 312
                                                        }
                                                    },
                                                    '5'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 314
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'page-link', mdbWavesEffect: true, 'aria-label': 'Next', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 315
                                                        }
                                                    },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'sr-only', __self: this,
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 316
                                                            }
                                                        },
                                                        'Next'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'page-item', __self: this,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 320
                                                    }
                                                },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'btn-next page-link', __self: this,
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 320
                                                        }
                                                    },
                                                    'Next'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 332
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 333
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 334
                    }
                }),
                _react2.default.createElement('br', {
                    __self: this,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 335
                    }
                })
            )
        );
    }
}
exports.default = Sales;

/***/ }),
/* 70 */
/***/ (function(module, exports) {



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/server/middleware/reactApplication/ServerHTML.js'; /**
                                                                                                                              * This module is responsible for generating the HTML page response for
                                                                                                                              * the react application middleware.
                                                                                                                              */

/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _serializeJavascript = __webpack_require__(23);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _ifElse = __webpack_require__(20);

var _ifElse2 = _interopRequireDefault(_ifElse);

var _removeNil = __webpack_require__(21);

var _removeNil2 = _interopRequireDefault(_removeNil);

var _getClientBundleEntryAssets = __webpack_require__(72);

var _getClientBundleEntryAssets2 = _interopRequireDefault(_getClientBundleEntryAssets);

var _ClientConfig = __webpack_require__(73);

var _ClientConfig2 = _interopRequireDefault(_ClientConfig);

var _HTML = __webpack_require__(75);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PRIVATES

function KeyedComponent({ children }) {
  return _react.Children.only(children);
}

// Resolve the assets (js/css) for the client bundle's entry chunk.
const clientEntryAssets = (0, _getClientBundleEntryAssets2.default)();

function stylesheetTag(stylesheetFilePath) {
  return _react2.default.createElement('link', { href: stylesheetFilePath, media: 'screen, projection', rel: 'stylesheet', type: 'text/css', __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  });
}

function scriptTag(jsFilePath) {
  return _react2.default.createElement('script', { type: 'text/javascript', src: jsFilePath, __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  });
}

// COMPONENT

function ServerHTML(props) {
  const {
    asyncComponentsState,
    helmet,
    jobsState,
    nonce,
    reactAppString,
    routerState,
    storeState
  } = props;

  // Creates an inline script definition that is protected by the nonce.
  const inlineScript = body => _react2.default.createElement('script', { nonce: nonce, type: 'text/javascript', dangerouslySetInnerHTML: { __html: body }, __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  });

  const headerElements = (0, _removeNil2.default)([...(0, _ifElse2.default)(helmet)(() => helmet.title.toComponent(), []), ...(0, _ifElse2.default)(helmet)(() => helmet.base.toComponent(), []), ...(0, _ifElse2.default)(helmet)(() => helmet.meta.toComponent(), []), ...(0, _ifElse2.default)(helmet)(() => helmet.link.toComponent(), []), (0, _ifElse2.default)(clientEntryAssets && clientEntryAssets.css)(() => stylesheetTag(clientEntryAssets.css)), ...(0, _ifElse2.default)(helmet)(() => helmet.style.toComponent(), [])]);

  const bodyElements = (0, _removeNil2.default)([
  // Bind our redux store state so the client knows how to hydrate his one
  (0, _ifElse2.default)(storeState)(() => inlineScript(`window.__APP_STATE__=${(0, _serializeJavascript2.default)(storeState)};`)),

  // Binds the client configuration object to the window object so
  // that we can safely expose some configuration values to the
  // client bundle that gets executed in the browser.
  _react2.default.createElement(_ClientConfig2.default, { nonce: nonce, __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }),

  // Bind our async components state so the client knows which ones
  // to initialise so that the checksum matches the server response.
  // @see https://github.com/ctrlplusb/react-async-component
  (0, _ifElse2.default)(asyncComponentsState)(() => inlineScript(`window.__ASYNC_COMPONENTS_REHYDRATE_STATE__=${(0, _serializeJavascript2.default)(asyncComponentsState)};`)), (0, _ifElse2.default)(jobsState)(() => inlineScript(`window.__JOBS_STATE__=${(0, _serializeJavascript2.default)(jobsState)}`)), (0, _ifElse2.default)(routerState)(() => inlineScript(`window.__ROUTER_STATE__=${(0, _serializeJavascript2.default)(routerState)}`)),

  // Enable the polyfill io script?
  // This can't be configured within a react-helmet component as we
  // may need the polyfill's before our client JS gets parsed.
  (0, _ifElse2.default)((0, _config2.default)('polyfillIO.enabled'))(() => scriptTag(`${(0, _config2.default)('polyfillIO.url')}?features=${(0, _config2.default)('polyfillIO.features').join(',')}`)),
  // When we are in development mode our development server will
  // generate a vendor DLL in order to dramatically reduce our
  // compilation times.  Therefore we need to inject the path to the
  // vendor dll bundle below.
  (0, _ifElse2.default)("true" === 'true' && (0, _config2.default)('bundles.client.devVendorDLL.enabled'))(() => scriptTag(`${(0, _config2.default)('bundles.client.webPath')}${(0, _config2.default)('bundles.client.devVendorDLL.name')}.js?t=${Date.now()}`)), (0, _ifElse2.default)(clientEntryAssets && clientEntryAssets.js)(() => scriptTag(clientEntryAssets.js)), ...(0, _ifElse2.default)(helmet)(() => helmet.script.toComponent(), [])]);

  return _react2.default.createElement(_HTML2.default, {
    htmlAttributes: (0, _ifElse2.default)(helmet)(() => helmet.htmlAttributes.toComponent(), null),
    headerElements: headerElements.map((x, idx) => _react2.default.createElement(
      KeyedComponent,
      { key: idx, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      },
      x
    )),
    bodyElements: bodyElements.map((x, idx) => _react2.default.createElement(
      KeyedComponent,
      { key: idx, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      },
      x
    )),
    appBodyString: reactAppString,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  });
}

ServerHTML.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  asyncComponentsState: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  helmet: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  jobsState: _propTypes2.default.object,
  nonce: _propTypes2.default.string,
  reactAppString: _propTypes2.default.string,
  // eslint-disable-next-line react/forbid-prop-types
  routerState: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  storeState: _propTypes2.default.object
};

// EXPORT

exports.default = ServerHTML;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClientBundleEntryAssets;

var _fs = __webpack_require__(13);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(6);

var _appRootDir = __webpack_require__(7);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This file resolves the entry assets available from our client bundle.
 */

let resultCache;

/**
 * Retrieves the js/css for the named chunks that belong to our client bundle.
 *
 * Note: the order of the chunk names is important. The same ordering will be
 * used when rendering the scripts.
 *
 * This is useful to us for a couple of reasons:
 *   - It allows us to target the assets for a specific chunk, thereby only
 *     loading the assets we know we will need for a specific request.
 *   - The assets are hashed, and therefore they can't be "manually" added
 *     to the render logic.  Having this method allows us to easily fetch
 *     the respective assets simply by using a chunk name. :)
 */
function getClientBundleEntryAssets() {
  // Return the assets json cache if it exists.
  // In development mode we always read the assets json file from disk to avoid
  // any cases where an older version gets cached.
  if (false) {
    return resultCache;
  }

  const assetsFilePath = (0, _path.resolve)(_appRootDir2.default.get(), (0, _config2.default)('bundles.client.outputPath'), `./${(0, _config2.default)('bundleAssetsFileName')}`);

  if (!_fs2.default.existsSync(assetsFilePath)) {
    throw new Error(`We could not find the "${assetsFilePath}" file, which contains a list of the assets of the client bundle.  Please ensure that the client bundle has been built.`);
  }

  const readAssetsJSONFile = () => JSON.parse(_fs2.default.readFileSync(assetsFilePath, 'utf8'));
  const assetsJSONCache = readAssetsJSONFile();
  if (typeof assetsJSONCache.index === 'undefined') {
    throw new Error('No asset data found for expected "index" entry chunk of client bundle.');
  }
  resultCache = assetsJSONCache.index;
  return resultCache;
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/config/components/ClientConfig.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _serializeJavascript = __webpack_require__(23);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _filterWithRules = __webpack_require__(74);

var _filterWithRules2 = _interopRequireDefault(_filterWithRules);

var _values = __webpack_require__(19);

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Filter the config down to the properties that are allowed to be included
// in the HTML response.
const clientConfig = (0, _filterWithRules2.default)(
// These are the rules used to filter the config.

// The config values to filter.
_values2.default.clientConfigFilter, _values2.default);

const serializedClientConfig = (0, _serializeJavascript2.default)(clientConfig);

/**
 * A react component that generates a script tag that binds the allowed
 * values to the window so that config values can be read within the
 * browser.
 *
 * They get bound to window.__CLIENT_CONFIG__
 */
function ClientConfig({ nonce }) {
  return _react2.default.createElement('script', {
    type: 'text/javascript',
    nonce: nonce
    // eslint-disable-next-line react/no-danger
    , dangerouslySetInnerHTML: {
      __html: `window.__CLIENT_CONFIG__=${serializedClientConfig}`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  });
}

ClientConfig.propTypes = {
  nonce: _propTypes2.default.string.isRequired
};

exports.default = ClientConfig;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterWithRules;
function filterWithRulesLoop(rules, obj, basePropPath = '') {
  return Object.keys(rules).reduce((acc, key) => {
    const propPath = basePropPath !== '' ? `${basePropPath}.${key}` : key;

    if (typeof rules[key] === 'object') {
      if (typeof obj[key] !== 'object') {
        throw new Error(`Expected prop at path "${propPath}" to be an object`);
      }
      acc[key] = filterWithRulesLoop(rules[key], obj[key], propPath); // eslint-disable-line no-param-reassign,max-len
    } else if (rules[key]) {
      if (typeof obj[key] === 'undefined') {
        throw new Error(`Filter set an "allow" on path "${propPath}", however, this path was not found on the source object.`);
      }
      acc[key] = obj[key]; // eslint-disable-line no-param-reassign
    }
    return acc;
  }, {});
}

/**
 * Applies a rules object to filter a given object's structure.
 *
 * The rules object should match the shape of the source object and should
 * have a truthy/falsey value indicating if a property should be included/
 * excluded.  If the filters do not contain a property that exists on the
 * source object then the respective property will be excluded.
 *
 * @param  {Object} rules : The filter rules.
 * @param  {Object} obj   : The object to filter.
 *
 * @return {Object}
 *   The filtered object.
 *
 * @example
 *   filter(
 *     // rules
 *     {
 *       foo: { bar: true },
 *       poop: true
 *     },
 *     // source
 *     {
 *       foo: { bar: 'bar', qux: 'qux' },
 *       bob: 'bob',
 *       poop: { plop: 'splash' }
 *     },
 *   )
 */
function filterWithRules(rules, obj) {
  return filterWithRulesLoop(rules, obj);
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/rnf-52/Documents/Sachin/tasks/web/affiliate-web/shared/components/HTML/index.js'; /* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The is the HTML shell for our React Application.
 */
function HTML(props) {
  const { htmlAttributes, headerElements, bodyElements, appBodyString } = props;

  return _react2.default.createElement(
    'html',
    _extends({}, htmlAttributes, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    _react2.default.createElement(
      'head',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      headerElements
    ),
    _react2.default.createElement(
      'body',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: appBodyString }, __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }),
      bodyElements
    )
  );
}

HTML.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlAttributes: _propTypes2.default.object,
  headerElements: _propTypes2.default.node,
  bodyElements: _propTypes2.default.node,
  appBodyString: _propTypes2.default.string
};

HTML.defaultProps = {
  htmlAttributes: null,
  headerElements: null,
  bodyElements: null,
  appBodyString: ''
};

// EXPORT

exports.default = HTML;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = __webpack_require__(77);

var _uuid2 = _interopRequireDefault(_uuid);

var _hpp = __webpack_require__(78);

var _hpp2 = _interopRequireDefault(_hpp);

var _helmet = __webpack_require__(79);

var _helmet2 = _interopRequireDefault(_helmet);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cspConfig = {
  directives: {
    childSrc: ["'self'"],
    // Note: Setting this to stricter than * breaks the service worker. :(
    // I can't figure out how to get around this, so if you know of a safer
    // implementation that is kinder to service workers please let me know.
    connectSrc: ['*'], // ["'self'", 'ws:'],
    defaultSrc: ["'self'"],
    imgSrc: [" * 'self'",
    // If you use Base64 encoded images (i.e. inlined images), then you will
    // need the following:
    'data:'],
    fontSrc: ["'self'", 'data:'],
    objectSrc: ["'self'"],
    mediaSrc: [" * 'self'"],
    manifestSrc: ["'self'"],
    scriptSrc: [
    // Allow scripts hosted from our application.
    " * 'self'", 'https://platform.twitter.com/', "'unsafe-eval'", 'http://platform.instagram.com', 'https://cdn.syndication.twimg.com', 'https://platform.twitter.com',
    // Note: We will execution of any inline scripts that have the following
    // nonce identifier attached to them.
    // This is useful for guarding your application whilst allowing an inline
    // script to do data store rehydration (redux/mobx/apollo) for example.
    // @see https://helmetjs.github.io/docs/csp/
    (req, res) => `'nonce-${res.locals.nonce}'`,
    // This is a know workaround for browsers that don't support nonces.
    // It will be ignored by browsers that do support nonces as they will
    // recognise that we have also provided a nonce configuration and
    // use the stricter rule.
    "'unsafe-inline'"],
    styleSrc: ["'self'", 'https://platform.twitter.com/',
    // Webpack generates JS that loads our CSS, so this is needed:
    "'unsafe-inline'", 'blob:'],
    frameSrc: ['*']
  }
};

// Add any additional CSP from the static config.
const cspExtensions = (0, _config2.default)('cspExtensions');
Object.keys(cspExtensions).forEach(key => {
  if (cspConfig.directives[key]) {
    cspConfig.directives[key] = cspConfig.directives[key].concat(cspExtensions[key]);
  } else {
    cspConfig.directives[key] = cspExtensions[key];
  }
});

if (true) {
  // When in development mode we need to add our secondary express server that
  // is used to host our client bundle to our csp config.
  Object.keys(cspConfig.directives).forEach(directive => {
    cspConfig.directives[directive].push(`${(0, _config2.default)('host')}:${(0, _config2.default)('clientDevServerPort')}`);
  });
}

// Attach a unique "nonce" to every response.  This allows use to declare
// inline scripts as being safe for execution against our content security policy.
// @see https://helmetjs.github.io/docs/csp/
function nonceMiddleware(req, res, next) {
  // eslint-disable-next-line no-param-reassign
  res.locals.nonce = _uuid2.default.v4();
  next();
}

const securityMiddleware = [nonceMiddleware,

// Prevent HTTP Parameter pollution.
// @see http://bit.ly/2f8q7Td
(0, _hpp2.default)(),

// The xssFilter middleware sets the X-XSS-Protection header to prevent
// reflected XSS attacks.
// @see https://helmetjs.github.io/docs/xss-filter/
_helmet2.default.xssFilter(),

// Frameguard mitigates clickjacking attacks by setting the X-Frame-Options header.
// @see https://helmetjs.github.io/docs/frameguard/
_helmet2.default.frameguard('deny'),

// Sets the X-Download-Options to prevent Internet Explorer from executing
// downloads in your site’s context.
// @see https://helmetjs.github.io/docs/ienoopen/
_helmet2.default.ieNoOpen(),

// Don’t Sniff Mimetype middleware, noSniff, helps prevent browsers from trying
// to guess (“sniff”) the MIME type, which can have security implications. It
// does this by setting the X-Content-Type-Options header to nosniff.
// @see https://helmetjs.github.io/docs/dont-sniff-mimetype/
_helmet2.default.noSniff(),

// Content Security Policy
//
// If you are unfamiliar with CSPs then I highly recommend that you do some
// reading on the subject:
//  - https://content-security-policy.com/
//  - https://developers.google.com/web/fundamentals/security/csp/
//  - https://developer.mozilla.org/en/docs/Web/Security/CSP
//  - https://helmetjs.github.io/docs/csp/
//
// If you are relying on scripts/styles/assets from other servers (internal
// or external to your company) then you will need to explicitly configure
// the CSP below to allow for this.  For example you can see I have had to
// add the polyfill.io CDN in order to allow us to use the polyfill script.
// It can be a pain to manage these, but it's a really great habit to get
// in to.
//
// You may find CSPs annoying at first, but it is a great habit to build.
// The CSP configuration is an optional item for helmet, however you should
// not remove it without making a serious consideration that you do not
// require the added security.
_helmet2.default.contentSecurityPolicy(cspConfig)];

exports.default = securityMiddleware;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(6);

var _appRootDir = __webpack_require__(7);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware to server our client bundle.
 */
exports.default = _express2.default.static((0, _path.resolve)(_appRootDir2.default.get(), (0, _config2.default)('bundles.client.outputPath')), {
  maxAge: (0, _config2.default)('browserCacheMaxAge')
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(6);

var _appRootDir = __webpack_require__(7);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Middleware to serve our service worker.
function serviceWorkerMiddleware(req, res, next) {
  res.sendFile((0, _path.resolve)(_appRootDir2.default.get(), (0, _config2.default)('bundles.client.outputPath'), (0, _config2.default)('serviceWorker.fileName')));
} /* eslint-disable no-unused-vars */

exports.default = serviceWorkerMiddleware;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offlinePageMiddleware;

var _fs = __webpack_require__(13);

var _path = __webpack_require__(6);

var _appRootDir = __webpack_require__(7);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware to intercept calls to our offline page to ensure that
 * inline scripts get a nonce value attached to them.
 */
/* eslint-disable no-unused-vars */

function offlinePageMiddleware(req, res, next) {
  // We should have had a nonce provided to us.  See the server/index.js for
  // more information on what this is.
  if (typeof res.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const nonce = res.locals.nonce;

  (0, _fs.readFile)(
  // Path to the offline page.
  (0, _path.resolve)(_appRootDir2.default.get(), (0, _config2.default)('bundles.client.outputPath'), (0, _config2.default)('serviceWorker.offlinePageFileName')),
  // Charset for read
  'utf-8',
  // Read handler
  (err, data) => {
    if (err) {
      res.status(500).send('Error returning offline page.');
      return;
    }
    // We replace the placeholder with the actual nonce.
    const offlinePageWithNonce = data.replace('OFFLINE_PAGE_NONCE_PLACEHOLDER', nonce);
    // Send back the page as the response
    res.send(offlinePageWithNonce);
  });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const errorHandlersMiddleware = [
/**
 * 404 errors middleware.
 *
 * NOTE: the react application middleware hands 404 paths, but it is good to
 * have this backup for paths not handled by the react middleware. For
 * example you may bind a /api path to express.
 */
function notFoundMiddlware(req, res, next) {
  res.status(404).send('Sorry, that resource was not found.');
},

/**
 * 500 errors middleware.
 *
 * NOTE: You must provide specify all 4 parameters on this callback function
 * even if they aren't used, otherwise it won't be used.
 */
function unexpectedErrorMiddleware(err, req, res, next) {
  if (err) {
    console.log(err);
    console.log(err.stack);
  }
  res.status(500).send('Sorry, an unexpected error occurred.');
}];

exports.default = errorHandlersMiddleware;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map