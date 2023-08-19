// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var f,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||l.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=f):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r};function f(r,e,t,n){var o,a,i;if(r<=0||0===e)return t;if(1===n){if((i=r%5)>0)for(a=0;a<i;a++)t[a]+=e;if(r<5)return t;for(a=i;a<r;a+=5)t[a]+=e,t[a+1]+=e,t[a+2]+=e,t[a+3]+=e,t[a+4]+=e;return t}for(o=n<0?(1-r)*n:0,a=0;a<r;a++)t[o]+=e,o+=n;return t}function c(r,e,t,n,o){var a,i,u;if(r<=0||0===e)return t;if(a=o,1===n){if((i=r%5)>0)for(u=0;u<i;u++)t[a]+=e,a+=n;if(r<5)return t;for(u=i;u<r;u+=5)t[a]+=e,t[a+1]+=e,t[a+2]+=e,t[a+3]+=e,t[a+4]+=e,a+=5;return t}for(u=0;u<r;u++)t[a]+=e,a+=n;return t}e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:c});export{f as default,c as ndarray};
//# sourceMappingURL=mod.js.map
