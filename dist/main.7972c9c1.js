// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "/*\n* \u9996\u5148\uFF0C\u5148\u6765\u4E00\u4E2A\u80CC\u666F\n*/\n#html{\n    background:rgb(238,236,214);\n}\n/*\n* \u7136\u540E\u7ED9\u7F57\u5C0F\u9ED1\u753B\u4E2A\u5934\n*/\n.head{\n    border: 5px solid #3c2724;\n    width: 350px;\n    height: 280px;\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    margin-left: -175px;\n    border-radius: 43%;\n    background: black;\n}\n\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u7F57\u5C0F\u9ED1\u7684\u773C\u775B\n */\n.eye{\n    border: 5px solid #3c2724;\n    width: 170px;\n    height: 214px;\n    position: absolute;\n    left: 50%;\n    top: 75px;\n    margin-left: -85px;\n    border-radius: 50%;\n    background: white;\n}\n.eye.left{\n    transform: translateX(-90px) rotate(5deg);\n}\n.eye.right{\n    transform: translateX(90px) rotate(-5deg);\n}\n/*\n * \u8FD8\u6709\u4E24\u9897\u773C\u73E0\u5B50\n */\n.eyeball{\n    border: 5px solid #3c2724;\n    width: 114px;\n    height: 150px;\n    position: absolute;\n    left: 50%;\n    top: 25px;\n    margin-left: -57px;\n    border-radius: 50%;\n    background: black;\n}\n/*\n * \u5DE6\u773C\u5728\u5DE6\u8FB9\uFF0C\u53F3\u773C\u5728\u53F3\u8FB9\uFF08\u5E9F\u8BDD\uFF09\n */\n.eyeball.left{\n    transform: translateX(-3px) ;\n}\n.eyeball.right{\n    transform: translateX(3px) ;\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u7F57\u5C0F\u9ED1\u7684\u5634\u5DF4\n */\n.mouth{\n    position: relative;\n    left: 50%;\n    top: 280px;\n    width: 0;\n    height: 0;\n    margin-left:-17px;\n    border: 20px solid transparent;\n    border-top: 33px solid #3c2724;\n}\n\n.lip{\n    position: absolute;\n    left: 50%;\n    top: -30px;\n    width: 0;\n    height: 0;\n    margin-left:-14px;\n    border: 14px solid transparent;\n    border-top: 24px solid #6cb2d3;\n}\n/*\n * \u7136\u540E\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u8033\u6735\n */\n.ear{\n    border: 5px solid #3c2724;\n    position: absolute;\n    left: 50%;\n    top: 35px;\n    width:140px;\n    height: 300px;\n    margin-left: -70px;\n    border-radius: 71px/150px;\n    z-index: -1;\n    background: black;\n    overflow: hidden;\n}\n.ear.left{\n    transform: translateX(-95px) rotate(160deg)\n}\n.ear.right{\n    transform: translateX(95px) rotate(200deg)\n}\n/*\n * \u8FD8\u6709\u91CC\u9762\u7684\u5C0F\u8033\u6735\n */\n.earInner{\n    position: absolute;\n    left:50%;\n    width:140px;\n    height: 300px;\n    border-radius: 71px/150px;\n    margin-left: -70px;\n    top: 50px;\n    background: #97aa5b;\n}\n.earInner.left{\n    transform: translateX(112px) rotate(30deg)\n}\n.earInner.right{\n    transform: translateX(-112px) rotate(330deg)\n}\n/*\n * \u63A5\u7740\u753B\u7F57\u5C0F\u9ED1\u7684\u624B\n */\n.hand{\n    border: 5px solid #3c2724;\n    position: absolute;\n    left: 50%;\n    top: 300px;\n    width:60px;\n    height: 40px;\n    border-radius: 261px/161px;\n    margin-left: -30px;\n    background: black;\n}\n.hand.left{\n    transform: translateX(-61px);\n}\n.hand.right{\n    transform: translateX(61px);\n}\n/*\n * \u6700\u540E\uFF0C\u8BA9\u76AE\u5361\u4E18\u52A8\u4E00\u4E0B\u5427\n */\n\n.hand.left{\n    animation:  moveLeft  infinite 1s ;\n}\n.hand.right{\n    animation:  moveRight  infinite 1s ;\n}\n.ear.left{\n    animation:  leftWave  infinite 1s ;\n}\n.ear.right{\n    animation:  rightWave  infinite 1s ;\n}\n";
exports.default = string;
},{}],"epB2":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 70,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnRePlay': 'replay'
  },
  n: 1,
  init: function init() {
    player.play();
    player.bindEvents();
    player.ui.demo.innerText = _css2.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 70;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  },
  replay: function replay() {
    player.pause();
    player.time = 70;
    player.play(player.n = 0);
  }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.7972c9c1.map