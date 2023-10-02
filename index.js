// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return o.call(n);r=n[f],a=f,t=null!=(u=n)&&e.call(u,a);try{n[f]=void 0}catch(t){return o.call(n)}return i=o.call(n),t?n[f]=r:delete n[f],i}:function(n){return o.call(n)},a="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?c:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof d)return!1;try{t=new d([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?U:function(){throw new Error("not implemented")};var b,v=l,m="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(m&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var h,g=b,F="function"==typeof Uint16Array,N="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,65536,65537]),r=t,n=(F&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var j,E={uint16:h,uint8:g};(j=new E.uint16(1))[0]=4660;var T=52===new E.uint8(j.buffer)[0],x=!0===T?1:0,I=new v(1),O=new p(I.buffer);function G(n){return I[0]=n,O[x]}var P=!0===T?1:0,V=new v(1),Y=new p(V.buffer),_=Number.NEGATIVE_INFINITY,k=.6931471803691238,q=1.9082149292705877e-10,z=1048575;function B(t){var r,o,e,i,f,u,a,y,c,l,p,A;return 0===t?_:n(t)||t<0?NaN:(f=0,(o=G(t))<1048576&&(f-=54,o=G(t*=0x40000000000000)),o>=2146435072?t+t:(f+=(o>>20)-1023|0,f+=(y=614244+(o&=z)&1048576|0)>>20|0,a=(t=function(n,t){return V[0]=n,Y[P]=t>>>0,V[0]}(t,o|1072693248^y))-1,(z&2+o)<3?0===a?0===f?0:f*k+f*q:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*k-(u-f*q-a)):(y=o-398458|0,c=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(y|=c)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*k-(r-(l*(r+u)+f*q)-a)):0===f?a-l*(a-u):f*k-(l*(a-u)-f*q-a))))}return function(t,r){return 0!==t||n(r)?t*B(r):0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).xlogy=t();
//# sourceMappingURL=index.js.map