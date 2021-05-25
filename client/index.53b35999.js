import{S as e,i as t,s as r,h as s,e as o,t as a,a as n,c as i,b as l,d as c,f as h,g as f,j as u,k as d,l as p,m,u as y,n as b,o as v,q as g,p as w,r as x,v as E,w as D,x as k,y as P}from"./client.dbb25f51.js";var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var j,I,T=(function(e,t){var r="undefined"!=typeof self?self:A,s=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var r="URLSearchParams"in e,s="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in e,n="ArrayBuffer"in e;if(n)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return s&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n&&o&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e,t,r,s=d(this);if(s)return s;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=p(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=c(e),t=h(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[c(e)]},u.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},u.prototype.set=function(e,t){this.map[c(e)]=h(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},s&&(u.prototype[Symbol.iterator]=u.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(e,t){var r,s,o=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(r=t.method||this.method||"GET",s=r.toUpperCase(),v.indexOf(s)>-1?s:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),s=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(o))}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},b.call(g.prototype),b.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];x.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function D(e,r){return new Promise((function(s,a){var n=new g(e,r);if(n.signal&&n.signal.aborted)return a(new t.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function l(){i.abort()}i.onload=function(){var e,t,r={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),s=r.shift().trim();if(s){var o=r.join(":").trim();t.append(s,o)}})),t)};r.url="responseURL"in i?i.responseURL:r.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;s(new x(o,r))},i.onerror=function(){a(new TypeError("Network request failed"))},i.ontimeout=function(){a(new TypeError("Network request failed"))},i.onabort=function(){a(new t.DOMException("Aborted","AbortError"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&o&&(i.responseType="blob"),n.headers.forEach((function(e,t){i.setRequestHeader(t,e)})),n.signal&&(n.signal.addEventListener("abort",l),i.onreadystatechange=function(){4===i.readyState&&n.signal.removeEventListener("abort",l)}),i.send(void 0===n._bodyInit?null:n._bodyInit)}))}D.polyfill=!0,e.fetch||(e.fetch=D,e.Headers=u,e.Request=g,e.Response=x),t.Headers=u,t.Request=g,t.Response=x,t.fetch=D,Object.defineProperty(t,"__esModule",{value:!0})}({})}(s),s.fetch.ponyfill=!0,delete s.fetch.polyfill;var o=s;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t}(I={path:j,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&I.path)}},I.exports),I.exports);function _(e){return{c:b,l:b,m:b,p:b,d:b}}function O(e){let t,r,s,o,i=e[3][new Date(e[5].commit.commit.author.date).getMonth()]+"",l=new Date(e[5].commit.commit.author.date).getFullYear()+"";return{c(){t=a("Updated — \n                    "),r=a(i),s=n(),o=a(l)},l(e){t=c(e,"Updated — \n                    "),r=c(e,i),s=f(e),o=c(e,l)},m(e,a){d(e,t,a),d(e,r,a),d(e,s,a),d(e,o,a)},p:b,d(e){e&&h(t),e&&h(r),e&&h(s),e&&h(o)}}}function B(e){return{c:b,l:b,m:b,p:b,d:b}}function S(e){let t,r,v,g,w,x,E,D,k,P,A,j,I,T,S,R={ctx:e,current:null,token:null,hasCatch:!1,pending:B,then:O,catch:_,value:5};return s(e[2],R),{c(){t=o("div"),r=o("div"),v=o("p"),g=a("Ottawa — "),w=a(e[0]),x=a(" ET"),E=n(),D=o("div"),k=o("div"),P=o("p"),R.block.c(),A=n(),j=o("div"),I=o("p"),T=a(e[1]),S=a(" ©"),this.h()},l(s){t=i(s,"DIV",{class:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);v=i(a,"P",{});var n=l(v);g=c(n,"Ottawa — "),w=c(n,e[0]),x=c(n," ET"),n.forEach(h),a.forEach(h),E=f(o),D=i(o,"DIV",{class:!0});var u=l(D);k=i(u,"DIV",{class:!0});var d=l(k);P=i(d,"P",{});var p=l(P);R.block.l(p),p.forEach(h),d.forEach(h),A=f(u),j=i(u,"DIV",{class:!0});var m=l(j);I=i(m,"P",{});var y=l(I);T=c(y,e[1]),S=c(y," ©"),y.forEach(h),m.forEach(h),u.forEach(h),o.forEach(h),this.h()},h(){u(r,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),u(k,"class","hidden w-8/12 px-4 sm:block"),u(j,"class","flex justify-end w-full px-4 sm:w-4/12"),u(D,"class","flex w-4/12 ml-auto sm:w-9/12"),u(t,"class","flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400")},m(e,s){d(e,t,s),p(t,r),p(r,v),p(v,g),p(v,w),p(v,x),p(t,E),p(t,D),p(D,k),p(k,P),R.block.m(P,R.anchor=null),R.mount=()=>P,R.anchor=null,p(D,A),p(D,j),p(j,I),p(I,T),p(I,S)},p(t,[r]){e=t,1&r&&m(w,e[0]),y(R,e,r),2&r&&m(T,e[1])},i:b,o:b,d(e){e&&h(t),R.block.d(),R.token=null,R=null}}}function R(e,t,r){let s=T("https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages").then((e=>e.json()));var o="",a="";return function e(){var t=new Date,s=t.getHours(),n=t.getMinutes(),i="am";s>=12&&(s-=12,i="pm"),r(0,o=(s=(s%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+i),r(1,a=t.getFullYear()),setTimeout(e,1e3)}(),[o,a,s,["January","February","March","April","May","June","July","August","September","October","November","December"]]}class V extends e{constructor(e){super(),t(this,e,R,S,r,{})}}function U(e,t,r){const s=e.slice();return s[7]=t[r],s}function M(e,t,r){const s=e.slice();return s[10]=t[r],s}function F(e,t,r){const s=e.slice();return s[13]=t[r],s}function C(e,t,r){const s=e.slice();return s[16]=t[r],s}function H(e,t,r){const s=e.slice();return s[19]=t[r],s}function L(e){let t,r,s,y,b,v,g,w,x,E,D,k,P,A,j=e[19].title+"",I=e[19].role+"",T=e[19].year+"";return{c(){t=o("a"),r=o("div"),s=o("p"),y=a(j),b=n(),v=o("div"),g=o("p"),w=a(I),x=n(),E=o("div"),D=o("p"),k=a(T),P=n(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);s=i(a,"P",{});var n=l(s);y=c(n,j),n.forEach(h),a.forEach(h),b=f(o),v=i(o,"DIV",{class:!0});var u=l(v);g=i(u,"P",{});var d=l(g);w=c(d,I),d.forEach(h),u.forEach(h),x=f(o),E=i(o,"DIV",{class:!0});var p=l(E);D=i(p,"P",{});var m=l(D);k=c(m,T),m.forEach(h),p.forEach(h),P=f(o),o.forEach(h),this.h()},h(){u(r,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),u(v,"class","hidden w-4/12 px-4 sm:block"),u(E,"class","flex justify-end w-5/12 px-4"),u(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),u(t,"href",A=e[19].url),u(t,"target","_blank"),u(t,"rel","noreferrer noopener")},m(e,o){d(e,t,o),p(t,r),p(r,s),p(s,y),p(t,b),p(t,v),p(v,g),p(g,w),p(t,x),p(t,E),p(E,D),p(D,k),p(t,P)},p(e,r){1&r&&j!==(j=e[19].title+"")&&m(y,j),1&r&&I!==(I=e[19].role+"")&&m(w,I),1&r&&T!==(T=e[19].year+"")&&m(k,T),1&r&&A!==(A=e[19].url)&&u(t,"href",A)},d(e){e&&h(t)}}}function q(e){let t,r,s,y,b,v,g,w,x,E,D,k,P,A,j=e[16].title+"",I=e[16].role+"",T=e[16].date+"";return{c(){t=o("a"),r=o("div"),s=o("p"),y=a(j),b=n(),v=o("div"),g=o("p"),w=a(I),x=n(),E=o("div"),D=o("p"),k=a(T),P=n(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);s=i(a,"P",{});var n=l(s);y=c(n,j),n.forEach(h),a.forEach(h),b=f(o),v=i(o,"DIV",{class:!0});var u=l(v);g=i(u,"P",{});var d=l(g);w=c(d,I),d.forEach(h),u.forEach(h),x=f(o),E=i(o,"DIV",{class:!0});var p=l(E);D=i(p,"P",{});var m=l(D);k=c(m,T),m.forEach(h),p.forEach(h),P=f(o),o.forEach(h),this.h()},h(){u(r,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),u(v,"class","hidden w-4/12 px-4 sm:block"),u(E,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),u(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),u(t,"href",A=e[16].url),u(t,"target","_blank"),u(t,"rel","noreferrer noopener")},m(e,o){d(e,t,o),p(t,r),p(r,s),p(s,y),p(t,b),p(t,v),p(v,g),p(g,w),p(t,x),p(t,E),p(E,D),p(D,k),p(t,P)},p(e,r){2&r&&j!==(j=e[16].title+"")&&m(y,j),2&r&&I!==(I=e[16].role+"")&&m(w,I),2&r&&T!==(T=e[16].date+"")&&m(k,T),2&r&&A!==(A=e[16].url)&&u(t,"href",A)},d(e){e&&h(t)}}}function $(e){let t,r,s=e[13].title+"";return{c(){t=o("p"),r=a(s),this.h()},l(e){t=i(e,"P",{class:!0});var o=l(t);r=c(o,s),o.forEach(h),this.h()},h(){u(t,"class","text-gray-600 dark:text-gray-400")},m(e,s){d(e,t,s),p(t,r)},p(e,t){8&t&&s!==(s=e[13].title+"")&&m(r,s)},d(e){e&&h(t)}}}function N(e){let t,r,s=e[10].title+"";return{c(){t=o("p"),r=a(s),this.h()},l(e){t=i(e,"P",{class:!0});var o=l(t);r=c(o,s),o.forEach(h),this.h()},h(){u(t,"class","text-gray-600 dark:text-gray-400")},m(e,s){d(e,t,s),p(t,r)},p(e,t){4&t&&s!==(s=e[10].title+"")&&m(r,s)},d(e){e&&h(t)}}}function Y(e){let t,r,s,n,f=e[7].title+"";return{c(){t=o("p"),r=o("a"),s=a(f),this.h()},l(e){t=i(e,"P",{});var o=l(t);r=i(o,"A",{href:!0,class:!0,target:!0,rel:!0});var a=l(r);s=c(a,f),a.forEach(h),o.forEach(h),this.h()},h(){u(r,"href",n=e[7].url),u(r,"class","text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),u(r,"target","_blank"),u(r,"rel","noreferrer noopener")},m(e,o){d(e,t,o),p(t,r),p(r,s)},p(e,t){16&t&&f!==(f=e[7].title+"")&&m(s,f),16&t&&n!==(n=e[7].url)&&u(r,"href",n)},d(e){e&&h(t)}}}function G(e){let t,r,s,y,b,A,j,I,T,_,O,B,S,R,G,J,X,K,Q,W,Z,ee,te,re,se,oe,ae,ne,ie,le,ce,he,fe,ue,de,pe,me,ye,be,ve,ge,we,xe,Ee,De,ke,Pe,Ae,je,Ie,Te,_e,Oe,Be,Se,Re,Ve,Ue,Me,Fe,Ce,He,Le,qe,$e,Ne,Ye,Ge=e[0],Je=[];for(let t=0;t<Ge.length;t+=1)Je[t]=L(H(e,Ge,t));let ze=e[1],Xe=[];for(let t=0;t<ze.length;t+=1)Xe[t]=q(C(e,ze,t));let Ke=e[3],Qe=[];for(let t=0;t<Ke.length;t+=1)Qe[t]=$(F(e,Ke,t));let We=e[2],Ze=[];for(let t=0;t<We.length;t+=1)Ze[t]=N(M(e,We,t));let et=e[4],tt=[];for(let t=0;t<et.length;t+=1)tt[t]=Y(U(e,et,t));return Ne=new V({}),{c(){t=n(),r=o("div"),s=o("a"),y=n(),b=o("div"),A=o("header"),j=o("h1"),I=a("Maxim Siebert"),T=n(),_=o("p"),O=a("Designer + Developer"),B=n(),S=o("p"),R=a("2011–"),G=a(e[5]),J=n(),X=o("div"),K=o("div"),Q=n(),W=o("div"),Z=o("div"),ee=o("p"),te=a("Project"),re=n(),se=o("div"),oe=o("p"),ae=a("Role"),ne=n(),ie=o("div"),le=o("p"),ce=a("Year"),he=n(),fe=o("section");for(let e=0;e<Je.length;e+=1)Je[e].c();ue=n(),de=o("header"),pe=o("div"),me=o("p"),ye=a("Experience"),be=n(),ve=o("div"),ge=o("p"),we=a("Title"),xe=n(),Ee=o("div"),De=o("p"),ke=a("Year"),Pe=n(),Ae=o("section");for(let e=0;e<Xe.length;e+=1)Xe[e].c();je=n(),Ie=o("section"),Te=o("div"),_e=o("p"),Oe=a("Services"),Be=n();for(let e=0;e<Qe.length;e+=1)Qe[e].c();Se=n(),Re=o("div"),Ve=o("p"),Ue=a("Selected Clients"),Me=n();for(let e=0;e<Ze.length;e+=1)Ze[e].c();Fe=n(),Ce=o("div"),He=o("p"),Le=a("Links"),qe=n();for(let e=0;e<tt.length;e+=1)tt[e].c();$e=n(),v(Ne.$$.fragment),this.h()},l(o){g('[data-svelte="svelte-k4gemi"]',document.head).forEach(h),t=f(o),r=i(o,"DIV",{class:!0});var a=l(r);s=i(a,"A",{href:!0,class:!0}),l(s).forEach(h),y=f(a),b=i(a,"DIV",{class:!0});var n=l(b);A=i(n,"HEADER",{class:!0});var u=l(A);j=i(u,"H1",{});var d=l(j);I=c(d,"Maxim Siebert"),d.forEach(h),T=f(u),_=i(u,"P",{class:!0});var p=l(_);O=c(p,"Designer + Developer"),p.forEach(h),B=f(u),S=i(u,"P",{class:!0});var m=l(S);R=c(m,"2011–"),G=c(m,e[5]),m.forEach(h),u.forEach(h),J=f(n),X=i(n,"DIV",{class:!0});var v=l(X);K=i(v,"DIV",{class:!0}),l(K).forEach(h),Q=f(v),W=i(v,"DIV",{class:!0});var x=l(W);Z=i(x,"DIV",{class:!0});var E=l(Z);ee=i(E,"P",{});var D=l(ee);te=c(D,"Project"),D.forEach(h),E.forEach(h),re=f(x),se=i(x,"DIV",{class:!0});var k=l(se);oe=i(k,"P",{});var P=l(oe);ae=c(P,"Role"),P.forEach(h),k.forEach(h),ne=f(x),ie=i(x,"DIV",{class:!0});var V=l(ie);le=i(V,"P",{});var U=l(le);ce=c(U,"Year"),U.forEach(h),V.forEach(h),x.forEach(h),he=f(v),fe=i(v,"SECTION",{class:!0});var M=l(fe);for(let e=0;e<Je.length;e+=1)Je[e].l(M);M.forEach(h),ue=f(v),de=i(v,"HEADER",{class:!0});var F=l(de);pe=i(F,"DIV",{class:!0});var C=l(pe);me=i(C,"P",{});var H=l(me);ye=c(H,"Experience"),H.forEach(h),C.forEach(h),be=f(F),ve=i(F,"DIV",{class:!0});var L=l(ve);ge=i(L,"P",{});var q=l(ge);we=c(q,"Title"),q.forEach(h),L.forEach(h),xe=f(F),Ee=i(F,"DIV",{class:!0});var $=l(Ee);De=i($,"P",{});var N=l(De);ke=c(N,"Year"),N.forEach(h),$.forEach(h),F.forEach(h),Pe=f(v),Ae=i(v,"SECTION",{class:!0});var Y=l(Ae);for(let e=0;e<Xe.length;e+=1)Xe[e].l(Y);Y.forEach(h),je=f(v),Ie=i(v,"SECTION",{class:!0});var z=l(Ie);Te=i(z,"DIV",{class:!0});var Ye=l(Te);_e=i(Ye,"P",{class:!0});var Ge=l(_e);Oe=c(Ge,"Services"),Ge.forEach(h),Be=f(Ye);for(let e=0;e<Qe.length;e+=1)Qe[e].l(Ye);Ye.forEach(h),Se=f(z),Re=i(z,"DIV",{class:!0});var ze=l(Re);Ve=i(ze,"P",{class:!0});var Ke=l(Ve);Ue=c(Ke,"Selected Clients"),Ke.forEach(h),Me=f(ze);for(let e=0;e<Ze.length;e+=1)Ze[e].l(ze);ze.forEach(h),Fe=f(z),Ce=i(z,"DIV",{class:!0});var We=l(Ce);He=i(We,"P",{class:!0});var et=l(He);Le=c(et,"Links"),et.forEach(h),qe=f(We);for(let e=0;e<tt.length;e+=1)tt[e].l(We);We.forEach(h),z.forEach(h),v.forEach(h),n.forEach(h),$e=f(a),w(Ne.$$.fragment,a),a.forEach(h),this.h()},h(){document.title="Maxim Siebert — Designer + Developer",u(s,"href","/"),u(s,"class","self-start inline-block px-4 mb-4 loader"),u(_,"class","text-gray-600 dark:text-gray-400"),u(S,"class","text-gray-600 dark:text-gray-400"),u(A,"class","w-full px-4 mb-8 md:w-3/12 md:mb-0"),u(K,"class","w-full px-4 mb-8 text-base leading-snug text-black dark:text-white lg:w-5/12 md:w-8/12 md:block md:mb-12"),u(Z,"class","w-4/12 px-4 lg:w-3/12"),u(se,"class","hidden w-4/12 px-4 sm:block"),u(ie,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),u(W,"class","flex mb-1 sm:mb-2"),u(fe,"class","w-full mb-5 sm:mb-8 md:mb-12"),u(pe,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),u(ve,"class","hidden w-4/12 px-4 sm:block"),u(Ee,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),u(de,"class","flex mb-1 sm:mb-2"),u(Ae,"class","w-full mb-5 sm:mb-8 md:mb-12"),u(_e,"class","mb-1 sm:mb-2"),u(Te,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),u(Ve,"class","mb-1 sm:mb-2"),u(Re,"class","hidden w-4/12 px-4 sm:block"),u(He,"class","mb-1 sm:mb-2"),u(Ce,"class","w-5/12 px-4 text-right"),u(Ie,"class","flex"),u(X,"class","w-full ml-auto md:w-9/12 md:-mt-1"),u(b,"class","flex flex-wrap"),u(r,"class","flex flex-col min-h-screen py-4 text-xs text-black bg-gray-100 dark:bg-black dark:text-white")},m(e,o){d(e,t,o),d(e,r,o),p(r,s),p(r,y),p(r,b),p(b,A),p(A,j),p(j,I),p(A,T),p(A,_),p(_,O),p(A,B),p(A,S),p(S,R),p(S,G),p(b,J),p(b,X),p(X,K),K.innerHTML=z,p(X,Q),p(X,W),p(W,Z),p(Z,ee),p(ee,te),p(W,re),p(W,se),p(se,oe),p(oe,ae),p(W,ne),p(W,ie),p(ie,le),p(le,ce),p(X,he),p(X,fe);for(let e=0;e<Je.length;e+=1)Je[e].m(fe,null);p(X,ue),p(X,de),p(de,pe),p(pe,me),p(me,ye),p(de,be),p(de,ve),p(ve,ge),p(ge,we),p(de,xe),p(de,Ee),p(Ee,De),p(De,ke),p(X,Pe),p(X,Ae);for(let e=0;e<Xe.length;e+=1)Xe[e].m(Ae,null);p(X,je),p(X,Ie),p(Ie,Te),p(Te,_e),p(_e,Oe),p(Te,Be);for(let e=0;e<Qe.length;e+=1)Qe[e].m(Te,null);p(Ie,Se),p(Ie,Re),p(Re,Ve),p(Ve,Ue),p(Re,Me);for(let e=0;e<Ze.length;e+=1)Ze[e].m(Re,null);p(Ie,Fe),p(Ie,Ce),p(Ce,He),p(He,Le),p(Ce,qe);for(let e=0;e<tt.length;e+=1)tt[e].m(Ce,null);p(r,$e),x(Ne,r,null),Ye=!0},p(e,[t]){if((!Ye||32&t)&&m(G,e[5]),1&t){let r;for(Ge=e[0],r=0;r<Ge.length;r+=1){const s=H(e,Ge,r);Je[r]?Je[r].p(s,t):(Je[r]=L(s),Je[r].c(),Je[r].m(fe,null))}for(;r<Je.length;r+=1)Je[r].d(1);Je.length=Ge.length}if(2&t){let r;for(ze=e[1],r=0;r<ze.length;r+=1){const s=C(e,ze,r);Xe[r]?Xe[r].p(s,t):(Xe[r]=q(s),Xe[r].c(),Xe[r].m(Ae,null))}for(;r<Xe.length;r+=1)Xe[r].d(1);Xe.length=ze.length}if(8&t){let r;for(Ke=e[3],r=0;r<Ke.length;r+=1){const s=F(e,Ke,r);Qe[r]?Qe[r].p(s,t):(Qe[r]=$(s),Qe[r].c(),Qe[r].m(Te,null))}for(;r<Qe.length;r+=1)Qe[r].d(1);Qe.length=Ke.length}if(4&t){let r;for(We=e[2],r=0;r<We.length;r+=1){const s=M(e,We,r);Ze[r]?Ze[r].p(s,t):(Ze[r]=N(s),Ze[r].c(),Ze[r].m(Re,null))}for(;r<Ze.length;r+=1)Ze[r].d(1);Ze.length=We.length}if(16&t){let r;for(et=e[4],r=0;r<et.length;r+=1){const s=U(e,et,r);tt[r]?tt[r].p(s,t):(tt[r]=Y(s),tt[r].c(),tt[r].m(Ce,null))}for(;r<tt.length;r+=1)tt[r].d(1);tt.length=et.length}},i(e){Ye||(E(Ne.$$.fragment,e),Ye=!0)},o(e){D(Ne.$$.fragment,e),Ye=!1},d(e){e&&h(t),e&&h(r),k(Je,e),k(Xe,e),k(Qe,e),k(Ze,e),k(tt,e),P(Ne)}}}async function J(){const e=await this.fetch("content/projects.json"),t=await e.json(),r=await this.fetch("content/experiences.json"),s=await r.json(),o=await this.fetch("content/collaborators.json"),a=await o.json(),n=await this.fetch("content/services.json"),i=await n.json(),l=await this.fetch("content/links.json");return{projects:t,experiences:s,collaborators:a,services:i,links:await l.json()}}let z='A French-Canadian designer and developer specialized in web and product design. If you\'d like to collaborate with Maxim, email him at <a href="mailto:maxim@hey.com" class="hover:text-black dark:hover:text-white hover:underline">maxim@hey.com</a>.';function X(e,t,r){let{projects:s}=t,{experiences:o}=t,{collaborators:a}=t,{services:n}=t,{links:i}=t;var l,c="";return l=new Date,r(5,c=l.getFullYear()),e.$$set=e=>{"projects"in e&&r(0,s=e.projects),"experiences"in e&&r(1,o=e.experiences),"collaborators"in e&&r(2,a=e.collaborators),"services"in e&&r(3,n=e.services),"links"in e&&r(4,i=e.links)},[s,o,a,n,i,c]}export default class extends e{constructor(e){super(),t(this,e,X,G,r,{projects:0,experiences:1,collaborators:2,services:3,links:4})}}export{J as preload};