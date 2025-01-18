"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var s=v(function(k,a){
var o=5;function g(i,r,e,n,d){var t,f,u;if(i<=0||r===0)return e;if(t=d,n===1){if(f=i%o,f>0)for(u=0;u<f;u++)e[t]+=r,t+=n;if(i<o)return e;for(u=f;u<i;u+=o)e[t]+=r,e[t+1]+=r,e[t+2]+=r,e[t+3]+=r,e[t+4]+=r,t+=o;return e}for(u=0;u<i;u++)e[t]+=r,t+=n;return e}a.exports=g
});var q=v(function(w,c){
var m=require('@stdlib/strided-base-stride2offset/dist'),M=s();function O(i,r,e,n){return M(i,r,e,n,m(i,n))}c.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),b=s();R(y,"ndarray",b);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
