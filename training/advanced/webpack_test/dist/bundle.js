!function(t){var r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./src/main.js")}({"./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */function(e,n,t){window.addEventListener("DOMContentLoaded",function(){"use strict";var e=t(/*! ./modules/data.js */"./src/modules/data.js"),n=t(/*! ./modules/numbers.js */"./src/modules/numbers.js");e(),n()})},"./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/*! no static exports found */function(e,n){e.exports=function(){var e;e="Garry",console.log("Hello",e)}},"./src/modules/numbers.js":
/*!********************************!*\
  !*** ./src/modules/numbers.js ***!
  \********************************/
/*! no static exports found */function(e,n){e.exports=function(){console.log("".concat(1,", ").concat(2,", ").concat(3))}}});