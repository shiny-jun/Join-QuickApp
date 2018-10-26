(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(1)
var $app_style$ = __webpack_require__(2)
var $app_script$ = __webpack_require__(3)

$app_define$('@app-component/search', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "search"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "searchBg"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "placeholder": "请输需搜索活动",
            "value": function () {return this.search}
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "×"
          },
          "classList": [
            "clean"
          ],
          "shown": function () {return this.clean}
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "取消"
      },
      "classList": [
        "btn"
      ],
      "shown": function () {return this.cancel},
      "events": {
        "click": "backHome"
      }
    }
  ]
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  ".search": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "backgroundColor": "#99ccb6"
  },
  ".searchBg": {
    "backgroundColor": "#f2f2f2",
    "width": "100%",
    "borderRadius": "10px",
    "height": "60px"
  },
  ".search input": {
    "marginLeft": "20px",
    "height": "60px",
    "lineHeight": "60px",
    "textAlign": "left",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "input"
        }
      ]
    }
  },
  ".clear": {
    "color": "#707070",
    "zIndex": 9999,
    "height": "60px",
    "width": "50px"
  },
  ".holder": {
    "fontSize": "26px"
  },
  ".btn": {
    "color": "#ffffff",
    "fontSize": "26px",
    "lineHeight": "60px",
    "marginLeft": "20px"
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: ['disable']
};}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
var $app_template$ = __webpack_require__(16)
var $app_style$ = __webpack_require__(17)
var $app_script$ = __webpack_require__(18)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "list"
  ],
  "children": [
    {
      "type": "search",
      "attr": {}
    },
    {
      "type": "div",
      "attr": {},
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.currentTab}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
    private: {
        swipers: [{
            image: 'https://cloud-minapp-15787.cloud.ifanrusercontent.com/1fPkbzAeJBuAInDH.jpeg'
        }, {
            image: 'https://cloud-minapp-15787.cloud.ifanrusercontent.com/1fPketIjDwDFodqy.png'
        }, {
            image: 'https://cloud-minapp-15787.cloud.ifanrusercontent.com/1fPkbbvdWHCKDppO.jpeg'
        }],
        search: 'hello',
        types: [{
            icon: '../Common/match.png',
            name: '竞赛'
        }, {
            icon: '../Common/art.png',
            name: '艺术'
        }, {
            icon: '../Common/physical.png',
            name: '体育'
        }],
        activity_list: [{
            image: 'https://cloud-minapp-15787.cloud.ifanrusercontent.com/1fPkbzAeJBuAInDH.jpeg',
            title: '第一届超级大胃王',
            startdate: '9.9',
            enddate: '9.15',
            tel: 1800000000
        }, {
            image: 'https://cloud-minapp-15787.cloud.ifanrusercontent.com/1fPkbzAeJBuAInDH.jpeg',
            title: '第一届超级大胃王',
            startdate: '9.9',
            enddate: '9.15',
            tel: 1800000000
        }],
        currentTab: undefined.$app.$data.currentTab
    },
    onMenuPress: function onMenuPress() {},
    onInit: function onInit() {
        this.$page.setTitleBar({ text: '分类' });
    },
    goList: function goList() {
        router.push({
            uri: '/list'
        });
    }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
})) {
    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = _typeof(moduleOwn[acc]);
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
        }
    });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map