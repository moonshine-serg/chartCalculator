// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
var dateYear = new Date().getFullYear();
var labels = [];
var data1 = [];
var data2 = [];
var data3 = [];
var start = 5000;
var additionalContribution = 100;
var rate = 4;
var year = parseInt(document.querySelector('#year').value);

function starting() {
  for (var i = 0; i <= year; i++) {
    var l = data1.push(start);
  }

  return data1;
}

starting();

function contribution() {
  for (var i = 0; i <= year; i++) {
    var c = additionalContribution * (i + 1);
    var l = data2.push(c);
  }

  return data2;
}

contribution();

function уarned() {
  var i = 0;
  var c = (data1[i] + data2[i]) * rate / 100;

  for (var _i = 0; _i <= year; _i++) {
    var l = data3.push(c);
    c = (data1[_i] + data2[_i]) * rate / 100 + c;
  }

  return data3;
}

уarned();

function years() {
  for (var i = 0; i <= year; i++) {
    var c = dateYear + i;
    var l = labels.push(c);
  }

  return labels;
}

years();

function addStart(chart, label, data) {
  data1.fill(inputStart.value);
  dataPie[0] = inputStart.value;
  return data1;
}

var ctx = document.getElementById('canvas').getContext('2d');
var myBar = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Начальная сумма',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      stack: 'Stack 0',
      data: data1
    }, {
      label: 'Общие взносы',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      stack: 'Stack 0',
      data: data2
    }, {
      label: 'Всего начисленных процентов',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
      stack: 'Stack 0',
      data: data3
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Рост инвестиций с течением времени'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
});
var dataPie = [data1[0], data2[data2.length - 1], data3[data3.length - 1]];
var ctx = document.getElementById('pie');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Начальная сумма', 'Общие взносы', 'Всего начисленных процентов'],
    datasets: [{
      label: '# of Votes',
      data: dataPie,
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});
var inputStart = document.getElementById('start');
inputStart.addEventListener('change', function addData() {
  addStart();
  addRate();
  myChart.update();
  myBar.update();
});
var selectAdd = document.querySelectorAll('#select > option');
var inputAdd = document.querySelector('#add');
document.querySelector('#select').addEventListener('change', function (e) {
  var b = e.target.value;
  var a = inputAdd.value;
  data2.forEach(function (value1, index) {
    data2[index] = b * a * (index + 1);
  });
  addRate();
  dataPie[1] = data2[data2.length - 1];
  myBar.update();
  myChart.update();
});
inputAdd.addEventListener('change', function addContribution() {
  addContribution1();
  addRate();
  myBar.update();
  myChart.update();
});

function addContribution1() {
  var b;
  var c;

  for (var i = 0; i < selectAdd.length; i++) {
    c = selectAdd[i].selected;

    if (c) {
      b = selectAdd[i].dataset.sel;
    }
  }

  var a = inputAdd.value;
  data2.forEach(function (value1, index) {
    return data2[index] = b * a * (index + 1), dataPie[1] = data2[data2.length - 1];
  });
}

var inputRate = document.querySelector('#rate');
var chengYear = document.getElementById('year');
inputRate.addEventListener('change', function () {
  addRate();
  myBar.update();
  myChart.update();
});

function addRate() {
  var a = inputStart.value;
  var rate = inputRate.value;
  var i = 0;
  var c = (+a + data2[i]) * rate / 100;

  for (var _i2 = 0; _i2 <= chengYear.value; _i2++) {
    data3[_i2] = c;
    c = (+a + data2[_i2]) * rate / 100 + c;
  }

  return data3, dataPie[2] = data3[data3.length - 1];
}

chengYear.addEventListener('change', function () {
  var addY = chengYear.value - data1.length + 1;
  console.log(addY);

  if (addY > 0) {
    addYear(addY);
  } else {
    deliteYear(Math.abs(addY));
  }

  myBar.update();
  myChart.update();
});

function addYear(addY) {
  for (var j = 0; j < addY; j++) {
    var a = inputStart.value;
    var b = +inputRate.value;
    var wx = myBar.data.labels.length;
    var i = wx - 1;
    var c = (+a + data2[i]) * b / 100;
    data1.push(data1[i]);
    data2.push(+data2[i] + parseInt(inputAdd.value));
    dataPie[1] = data2[data2.length - 1];
    addRate();
    myBar.data.labels.push(myBar.data.labels[wx - 1] + 1);
  }
}

;

function deliteYear(addY) {
  for (var j = 0; j < addY; j++) {
    data1.splice(data1.length - 1, 1);
    data2.pop();
    dataPie[1] = data2[data2.length - 1];
    data3.pop();
    dataPie[2] = data3[data3.length - 1];
    labels.pop();
  }
}

;
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54878" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map