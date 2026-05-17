"use strict";var f=function(s,e){return function(){return e||s((e={exports:{}}).exports,e),e.exports}};var g=f(function(D,y){
function k(s,e,r,u,n){var t,a,o,i,v;for(t=r.data,a=r.accessors[0],o=r.accessors[1],i=n,v=0;v<s;v++)o(t,i,e+a(t,i)),i+=u;return r}y.exports=k
});var q=f(function(E,b){
var M=require('@stdlib/array-base-arraylike2object/dist'),O=g(),c=5;function P(s,e,r,u,n){var t,a,o,i;if(s<=0||e===0)return r;if(o=M(r),o.accessorProtocol)return O(s,e,o,u,n);if(t=n,u===1){if(a=s%c,a>0)for(i=0;i<a;i++)r[t]+=e,t+=u;if(s<c)return r;for(i=a;i<s;i+=c)r[t]+=e,r[t+1]+=e,r[t+2]+=e,r[t+3]+=e,r[t+4]+=e,t+=c;return r}for(i=0;i<s;i++)r[t]+=e,t+=u;return r}b.exports=P
});var m=f(function(F,d){
var R=require('@stdlib/strided-base-stride2offset/dist'),w=q();function z(s,e,r,u){return w(s,e,r,u,R(s,u))}d.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),B=q();A(j,"ndarray",B);module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
