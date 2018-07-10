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
/******/ 	__webpack_require__.p = "http://18.195.238.14:3001/client/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
    configCache = __webpack_require__(10).default;
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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("app-root-dir");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _envVars = __webpack_require__(28);

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
  clientDevServerPort: EnvVars.number('CLIENT_DEV_PORT', 3001),

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
    titleTemplate: 'React SSR, %s',
    defaultTitle: 'React SSR,',

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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(16);

var _compression2 = _interopRequireDefault(_compression);

var _path = __webpack_require__(2);

var _appRootDir = __webpack_require__(3);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _reactApplication = __webpack_require__(17);

var _reactApplication2 = _interopRequireDefault(_reactApplication);

var _security = __webpack_require__(41);

var _security2 = _interopRequireDefault(_security);

var _clientBundle = __webpack_require__(45);

var _clientBundle2 = _interopRequireDefault(_clientBundle);

var _serviceWorker = __webpack_require__(46);

var _serviceWorker2 = _interopRequireDefault(_serviceWorker);

var _offlinePage = __webpack_require__(47);

var _offlinePage2 = _interopRequireDefault(_offlinePage);

var _errorHandlers = __webpack_require__(48);

var _errorHandlers2 = _interopRequireDefault(_errorHandlers);

var _config = __webpack_require__(0);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/b-rave/Documents/jalaj/Frontend-Development/server/middleware/reactApplication/index.js';
exports.default = reactApplicationMiddleware;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(19);

var _reactAsyncComponent = __webpack_require__(20);

var _reactJobs = __webpack_require__(21);

var _reactAsyncBootstrapper = __webpack_require__(22);

var _reactAsyncBootstrapper2 = _interopRequireDefault(_reactAsyncBootstrapper);

var _reactRedux = __webpack_require__(4);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _configureStore = __webpack_require__(23);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _App = __webpack_require__(31);

var _App2 = _interopRequireDefault(_App);

var _ServerHTML = __webpack_require__(36);

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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-async-component");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-jobs");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-async-bootstrapper");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(26);

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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _test = __webpack_require__(27);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rootReducer = (0, _redux.combineReducers)({
  test: _test2.default
});

exports.default = rootReducer;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = string;
exports.number = number;
exports.bool = bool;

var _appRootDir = __webpack_require__(3);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _safe = __webpack_require__(29);

var _safe2 = _interopRequireDefault(_safe);

var _dotenv = __webpack_require__(30);

var _dotenv2 = _interopRequireDefault(_dotenv);

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _ifElse = __webpack_require__(11);

var _ifElse2 = _interopRequireDefault(_ifElse);

var _removeNil = __webpack_require__(12);

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
/* 29 */
/***/ (function(module, exports) {

module.exports = require("colors/safe");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/b-rave/Documents/jalaj/Frontend-Development/shared/components/App.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _Switch = __webpack_require__(32);

var _Switch2 = _interopRequireDefault(_Switch);

var _Route = __webpack_require__(33);

var _Route2 = _interopRequireDefault(_Route);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Content = __webpack_require__(34);

var _Content2 = _interopRequireDefault(_Content);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _Main = __webpack_require__(35);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {

  render() {
    return _react2.default.createElement(
      'div',
      { id: 'row', __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      _react2.default.createElement(
        _reactHelmet2.default,
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        _react2.default.createElement('html', { lang: 'en', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }),
        _react2.default.createElement('meta', { charSet: 'utf-8', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }),
        _react2.default.createElement('meta', { name: 'application-name', content: (0, _config2.default)('htmlPage.defaultTitle'), __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        _react2.default.createElement('meta', { name: 'description', content: (0, _config2.default)('htmlPage.description'), __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }),
        _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#2b2b2b', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }),
        _react2.default.createElement('meta', { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }),
        _react2.default.createElement('meta', { name: 'theme-color', content: '#2b2b2b', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }),
        _react2.default.createElement('link', { href: '../assets/css/bootstrap.min.css', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }),
        _react2.default.createElement('link', { href: '../assets/css/main.css', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        _react2.default.createElement('link', { href: '../assets/font-awesome/css/font-awesome.min.css', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }),
        _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Oxygen', rel: 'stylesheet', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }),
        _react2.default.createElement('link', {
          href: 'https://fonts.googleapis.com/css?family=Oxygen:300,400,700',
          rel: 'stylesheet',
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }),
        _react2.default.createElement(
          'title',
          {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          (0, _config2.default)('htmlPage.defaultTitle'),
          ' '
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'container content no_padding', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 no_padding', __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'row no_margin', __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            _react2.default.createElement(
              _Switch2.default,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              _react2.default.createElement(
                _Main2.default,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                },
                _react2.default.createElement(_Route2.default, {
                  exact: true,
                  path: '/',
                  render: props => _react2.default.createElement(_Content2.default, _extends({}, props, {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    }
                  })),
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                })
              )
            )
          )
        )
      )
    );
  }
}
exports.default = App;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Switch");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Route");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/b-rave/Documents/jalaj/Frontend-Development/shared/components/Content.js'; // Component containing all the components rendering,
// of all child Routes.

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

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
          lineNumber: 12
        }
      },
      _react2.default.createElement(
        'div',
        { className: 'row no_margin', __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'hello'
      )
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/b-rave/Documents/jalaj/Frontend-Development/shared/components/Main.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Main extends _react.Component {
  render() {
    return _react2.default.createElement(
      'div',
      {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      this.props.children
    );
  }
}
exports.default = Main;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/b-rave/Documents/jalaj/Frontend-Development/server/middleware/reactApplication/ServerHTML.js'; /**
                                                                                                                          * This module is responsible for generating the HTML page response for
                                                                                                                          * the react application middleware.
                                                                                                                          */

/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _serializeJavascript = __webpack_require__(13);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _ifElse = __webpack_require__(11);

var _ifElse2 = _interopRequireDefault(_ifElse);

var _removeNil = __webpack_require__(12);

var _removeNil2 = _interopRequireDefault(_removeNil);

var _getClientBundleEntryAssets = __webpack_require__(37);

var _getClientBundleEntryAssets2 = _interopRequireDefault(_getClientBundleEntryAssets);

var _ClientConfig = __webpack_require__(38);

var _ClientConfig2 = _interopRequireDefault(_ClientConfig);

var _HTML = __webpack_require__(40);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClientBundleEntryAssets;

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(2);

var _appRootDir = __webpack_require__(3);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _config = __webpack_require__(0);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/b-rave/Documents/jalaj/Frontend-Development/config/components/ClientConfig.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _serializeJavascript = __webpack_require__(13);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _filterWithRules = __webpack_require__(39);

var _filterWithRules2 = _interopRequireDefault(_filterWithRules);

var _values = __webpack_require__(10);

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
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/b-rave/Documents/jalaj/Frontend-Development/shared/components/HTML/index.js'; /* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = __webpack_require__(42);

var _uuid2 = _interopRequireDefault(_uuid);

var _hpp = __webpack_require__(43);

var _hpp2 = _interopRequireDefault(_hpp);

var _helmet = __webpack_require__(44);

var _helmet2 = _interopRequireDefault(_helmet);

var _config = __webpack_require__(0);

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
    imgSrc: [" * 'self'"],
    fontSrc: ["'self'", 'data:'],
    objectSrc: ["'self'"],
    mediaSrc: ["'self'"],
    manifestSrc: ["'self'"],
    scriptSrc: [
    // Allow scripts hosted from our application.
    "'self'",
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
    styleSrc: ["'self'",
    // Webpack generates JS that loads our CSS, so this is needed:
    "'unsafe-inline'", 'blob:']
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
/* 42 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(2);

var _appRootDir = __webpack_require__(3);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware to server our client bundle.
 */
exports.default = _express2.default.static((0, _path.resolve)(_appRootDir2.default.get(), (0, _config2.default)('bundles.client.outputPath')), {
  maxAge: (0, _config2.default)('browserCacheMaxAge')
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(2);

var _appRootDir = __webpack_require__(3);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Middleware to serve our service worker.
function serviceWorkerMiddleware(req, res, next) {
  res.sendFile((0, _path.resolve)(_appRootDir2.default.get(), (0, _config2.default)('bundles.client.outputPath'), (0, _config2.default)('serviceWorker.fileName')));
} /* eslint-disable no-unused-vars */

exports.default = serviceWorkerMiddleware;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offlinePageMiddleware;

var _fs = __webpack_require__(5);

var _path = __webpack_require__(2);

var _appRootDir = __webpack_require__(3);

var _appRootDir2 = _interopRequireDefault(_appRootDir);

var _config = __webpack_require__(0);

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
/* 48 */
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