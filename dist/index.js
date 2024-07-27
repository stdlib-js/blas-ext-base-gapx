"use strict";var c=function(i,f){return function(){return f||i((f={exports:{}}).exports,f),f.exports}};var q=c(function(w,m){
var s=5;function O(i,f,e,t){var o,r,n;if(i<=0||f===0)return e;if(t===1){if(n=i%s,n>0)for(r=0;r<n;r++)e[r]+=f;if(i<s)return e;for(r=n;r<i;r+=s)e[r]+=f,e[r+1]+=f,e[r+2]+=f,e[r+3]+=f,e[r+4]+=f;return e}for(t<0?o=(1-i)*t:o=0,r=0;r<i;r++)e[o]+=f,o+=t;return e}m.exports=O
});var g=c(function(z,y){
var v=5;function R(i,f,e,t,o){var r,n,u;if(i<=0||f===0)return e;if(r=o,t===1){if(n=i%v,n>0)for(u=0;u<n;u++)e[r]+=f,r+=t;if(i<v)return e;for(u=n;u<i;u+=v)e[r]+=f,e[r+1]+=f,e[r+2]+=f,e[r+3]+=f,e[r+4]+=f,r+=v;return e}for(u=0;u<i;u++)e[r]+=f,r+=t;return e}y.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=q(),j=g();b(M,"ndarray",j);module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
