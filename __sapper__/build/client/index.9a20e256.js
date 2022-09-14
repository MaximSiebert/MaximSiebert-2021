import{S as e,i as t,s as r,h as a,e as o,t as n,a as s,c as i,b as l,d as c,f as h,g as f,j as d,k as u,l as p,u as y,m,n as b,o as v,q as g,p as x,r as w,v as E,w as k,x as D,y as A}from"./client.e478ebfe.js";var j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var P,T,I=(function(e,t){var r="undefined"!=typeof self?self:j,a=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var r="URLSearchParams"in e,a="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),n="FormData"in e,s="ArrayBuffer"in e;if(s)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function u(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function y(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:n&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&o&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=u(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var e,t,r,a=u(this);if(a)return a;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=p(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),a=0;a<t.length;a++)r[a]=String.fromCharCode(t[a]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=c(e),t=h(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[c(e)]},d.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},d.prototype.set=function(e,t){this.map[c(e)]=h(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},a&&(d.prototype[Symbol.iterator]=d.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(e,t){var r,a,o=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=(r=t.method||this.method||"GET",a=r.toUpperCase(),v.indexOf(a)>-1?a:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function x(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),a=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(a),decodeURIComponent(o))}})),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},b.call(g.prototype),b.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];w.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function k(e,r){return new Promise((function(a,n){var s=new g(e,r);if(s.signal&&s.signal.aborted)return n(new t.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function l(){i.abort()}i.onload=function(){var e,t,r={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),a=r.shift().trim();if(a){var o=r.join(":").trim();t.append(a,o)}})),t)};r.url="responseURL"in i?i.responseURL:r.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;a(new w(o,r))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new t.DOMException("Aborted","AbortError"))},i.open(s.method,s.url,!0),"include"===s.credentials?i.withCredentials=!0:"omit"===s.credentials&&(i.withCredentials=!1),"responseType"in i&&o&&(i.responseType="blob"),s.headers.forEach((function(e,t){i.setRequestHeader(t,e)})),s.signal&&(s.signal.addEventListener("abort",l),i.onreadystatechange=function(){4===i.readyState&&s.signal.removeEventListener("abort",l)}),i.send(void 0===s._bodyInit?null:s._bodyInit)}))}k.polyfill=!0,e.fetch||(e.fetch=k,e.Headers=d,e.Request=g,e.Response=w),t.Headers=d,t.Request=g,t.Response=w,t.fetch=k,Object.defineProperty(t,"__esModule",{value:!0})}({})}(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var o=a;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t}(T={path:P,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&T.path)}},T.exports),T.exports);function _(e){return{c:b,l:b,m:b,p:b,d:b}}function O(e){let t,r,a=Math.round(e[7].current.temp_c)+"";return{c(){t=n(a),r=n("°C")},l(e){t=c(e,a),r=c(e,"°C")},m(e,a){u(e,t,a),u(e,r,a)},p:b,d(e){e&&h(t),e&&h(r)}}}function B(e){return{c:b,l:b,m:b,p:b,d:b}}function S(e){return{c:b,l:b,m:b,p:b,d:b}}function R(e){let t,r,a,o,i=e[3][new Date(e[6].commit.commit.author.date).getMonth()]+"",l=new Date(e[6].commit.commit.author.date).getFullYear()+"";return{c(){t=n("Updated – \n                "),r=n(i),a=s(),o=n(l)},l(e){t=c(e,"Updated – \n                "),r=c(e,i),a=f(e),o=c(e,l)},m(e,n){u(e,t,n),u(e,r,n),u(e,a,n),u(e,o,n)},p:b,d(e){e&&h(t),e&&h(r),e&&h(a),e&&h(o)}}}function U(e){return{c:b,l:b,m:b,p:b,d:b}}function M(e){let t,r,v,g,x,w,E,k,D,A,j,P={ctx:e,current:null,token:null,hasCatch:!1,pending:B,then:O,catch:_,value:7};a(e[2],P);let T={ctx:e,current:null,token:null,hasCatch:!1,pending:U,then:R,catch:S,value:6};return a(e[1],T),{c(){t=o("div"),r=o("div"),v=o("p"),g=n("Gatineau\n            "),P.block.c(),x=n(", "),w=n(e[0]),E=n(" ET"),k=s(),D=o("div"),A=o("p"),T.block.c(),j=n(" ©"),this.h()},l(a){t=i(a,"DIV",{class:!0});var o=l(t);r=i(o,"DIV",{class:!0});var n=l(r);v=i(n,"P",{});var s=l(v);g=c(s,"Gatineau\n            "),P.block.l(s),x=c(s,", "),w=c(s,e[0]),E=c(s," ET"),s.forEach(h),n.forEach(h),k=f(o),D=i(o,"DIV",{class:!0});var d=l(D);A=i(d,"P",{});var u=l(A);T.block.l(u),j=c(u," ©"),u.forEach(h),d.forEach(h),o.forEach(h),this.h()},h(){d(r,"class","w-1/2 px-4"),d(D,"class","flex justify-end w-1/2 px-4 ml-auto"),d(t,"class","flex mt-auto text-gray-600 dark:text-gray-400")},m(e,a){u(e,t,a),p(t,r),p(r,v),p(v,g),P.block.m(v,P.anchor=null),P.mount=()=>v,P.anchor=x,p(v,x),p(v,w),p(v,E),p(t,k),p(t,D),p(D,A),T.block.m(A,T.anchor=null),T.mount=()=>A,T.anchor=j,p(A,j)},p(t,[r]){y(P,e=t,r),1&r&&m(w,e[0]),y(T,e,r)},i:b,o:b,d(e){e&&h(t),P.block.d(),P.token=null,P=null,T.block.d(),T.token=null,T=null}}}function V(e,t,r){let a=I("https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages").then((e=>e.json())),o=I("https://weatherapi-com.p.rapidapi.com/current.json?q=Gatineau",{method:"GET",headers:{"x-rapidapi-key":"f5f5a79298msh7a8be4bd6aea657p1f6f5ejsn4dac3a5543b4","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((e=>e.json()));var n="";return function e(){var t=new Date,a=t.getHours(),o=t.getMinutes();r(0,n=a+":"+(o=o<10?"0"+o:o)),t.getFullYear(),setTimeout(e,1e3)}(),[n,a,o,["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]]}class C extends e{constructor(e){super(),t(this,e,V,M,r,{})}}function F(e,t,r){const a=e.slice();return a[7]=t[r],a}function H(e,t,r){const a=e.slice();return a[10]=t[r],a}function L(e,t,r){const a=e.slice();return a[13]=t[r],a}function q(e,t,r){const a=e.slice();return a[16]=t[r],a}function N(e,t,r){const a=e.slice();return a[19]=t[r],a}function $(e){let t,r,a,y,b,v,g,x,w,E,k,D,A,j,P=e[19].title+"",T=e[19].role+"",I=e[19].year+"";return{c(){t=o("a"),r=o("div"),a=o("p"),y=n(P),b=s(),v=o("div"),g=o("p"),x=n(T),w=s(),E=o("div"),k=o("p"),D=n(I),A=s(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var o=l(t);r=i(o,"DIV",{class:!0});var n=l(r);a=i(n,"P",{});var s=l(a);y=c(s,P),s.forEach(h),n.forEach(h),b=f(o),v=i(o,"DIV",{class:!0});var d=l(v);g=i(d,"P",{});var u=l(g);x=c(u,T),u.forEach(h),d.forEach(h),w=f(o),E=i(o,"DIV",{class:!0});var p=l(E);k=i(p,"P",{});var m=l(k);D=c(m,I),m.forEach(h),p.forEach(h),A=f(o),o.forEach(h),this.h()},h(){d(r,"class","w-8/12 px-4 lg:w-5/12 sm:w-4/12"),d(v,"class","hidden w-4/12 px-4 sm:block"),d(E,"class","flex justify-end w-5/12 px-4"),d(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(t,"href",j=e[19].url),d(t,"target","_blank"),d(t,"rel","noreferrer noopener")},m(e,o){u(e,t,o),p(t,r),p(r,a),p(a,y),p(t,b),p(t,v),p(v,g),p(g,x),p(t,w),p(t,E),p(E,k),p(k,D),p(t,A)},p(e,r){1&r&&P!==(P=e[19].title+"")&&m(y,P),1&r&&T!==(T=e[19].role+"")&&m(x,T),1&r&&I!==(I=e[19].year+"")&&m(D,I),1&r&&j!==(j=e[19].url)&&d(t,"href",j)},d(e){e&&h(t)}}}function G(e){let t,r,a,y,b,v,g,x,w,E,k,D,A,j,P=e[16].title+"",T=e[16].role+"",I=e[16].date+"";return{c(){t=o("a"),r=o("div"),a=o("p"),y=n(P),b=s(),v=o("div"),g=o("p"),x=n(T),w=s(),E=o("div"),k=o("p"),D=n(I),A=s(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var o=l(t);r=i(o,"DIV",{class:!0});var n=l(r);a=i(n,"P",{});var s=l(a);y=c(s,P),s.forEach(h),n.forEach(h),b=f(o),v=i(o,"DIV",{class:!0});var d=l(v);g=i(d,"P",{});var u=l(g);x=c(u,T),u.forEach(h),d.forEach(h),w=f(o),E=i(o,"DIV",{class:!0});var p=l(E);k=i(p,"P",{});var m=l(k);D=c(m,I),m.forEach(h),p.forEach(h),A=f(o),o.forEach(h),this.h()},h(){d(r,"class","w-8/12 px-4 lg:w-5/12 sm:w-4/12"),d(v,"class","hidden w-4/12 px-4 sm:block"),d(E,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),d(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(t,"href",j=e[16].url),d(t,"target","_blank"),d(t,"rel","noreferrer noopener")},m(e,o){u(e,t,o),p(t,r),p(r,a),p(a,y),p(t,b),p(t,v),p(v,g),p(g,x),p(t,w),p(t,E),p(E,k),p(k,D),p(t,A)},p(e,r){2&r&&P!==(P=e[16].title+"")&&m(y,P),2&r&&T!==(T=e[16].role+"")&&m(x,T),2&r&&I!==(I=e[16].date+"")&&m(D,I),2&r&&j!==(j=e[16].url)&&d(t,"href",j)},d(e){e&&h(t)}}}function Y(e){let t,r,a=e[13].title+"";return{c(){t=o("p"),r=n(a),this.h()},l(e){t=i(e,"P",{class:!0});var o=l(t);r=c(o,a),o.forEach(h),this.h()},h(){d(t,"class","text-gray-600 dark:text-gray-400")},m(e,a){u(e,t,a),p(t,r)},p(e,t){8&t&&a!==(a=e[13].title+"")&&m(r,a)},d(e){e&&h(t)}}}function J(e){let t,r,a=e[10].title+"";return{c(){t=o("p"),r=n(a),this.h()},l(e){t=i(e,"P",{class:!0});var o=l(t);r=c(o,a),o.forEach(h),this.h()},h(){d(t,"class","text-gray-600 dark:text-gray-400")},m(e,a){u(e,t,a),p(t,r)},p(e,t){4&t&&a!==(a=e[10].title+"")&&m(r,a)},d(e){e&&h(t)}}}function z(e){let t,r,a,s,f=e[7].title+"";return{c(){t=o("p"),r=o("a"),a=n(f),this.h()},l(e){t=i(e,"P",{});var o=l(t);r=i(o,"A",{href:!0,class:!0,target:!0,rel:!0});var n=l(r);a=c(n,f),n.forEach(h),o.forEach(h),this.h()},h(){d(r,"href",s=e[7].url),d(r,"class","text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(r,"target","_blank"),d(r,"rel","noreferrer noopener")},m(e,o){u(e,t,o),p(t,r),p(r,a)},p(e,t){16&t&&f!==(f=e[7].title+"")&&m(a,f),16&t&&s!==(s=e[7].url)&&d(r,"href",s)},d(e){e&&h(t)}}}function X(e){let t,r,a,y,b,j,P,T,I,_,O,B,S,R,U,M,V,X,K,W,Z,ee,te,re,ae,oe,ne,se,ie,le,ce,he,fe,de,ue,pe,ye,me,be,ve,ge,xe,we,Ee,ke,De,Ae,je,Pe,Te,Ie,_e,Oe,Be,Se,Re,Ue,Me,Ve,Ce,Fe,He,Le,qe,Ne,$e,Ge,Ye,Je,ze,Xe,Ke,Qe,We,Ze,et,tt,rt,at,ot=e[0],nt=[];for(let t=0;t<ot.length;t+=1)nt[t]=$(N(e,ot,t));let st=e[1],it=[];for(let t=0;t<st.length;t+=1)it[t]=G(q(e,st,t));let lt=e[3],ct=[];for(let t=0;t<lt.length;t+=1)ct[t]=Y(L(e,lt,t));let ht=e[2],ft=[];for(let t=0;t<ht.length;t+=1)ft[t]=J(H(e,ht,t));let dt=e[4],ut=[];for(let t=0;t<dt.length;t+=1)ut[t]=z(F(e,dt,t));return rt=new C({}),{c(){t=o("meta"),r=s(),a=o("div"),y=o("div"),b=o("header"),j=o("a"),P=n("Back home"),T=s(),I=o("h1"),_=n("Maxim Siebert"),O=s(),B=o("p"),S=n("Designer + Developer"),R=s(),U=o("p"),M=n("2011–"),V=n(e[5]),X=s(),K=o("div"),W=o("div"),Z=s(),ee=o("hr"),te=s(),re=o("section"),ae=o("div"),oe=o("div"),ne=o("p"),se=n("Project"),ie=s(),le=o("div"),ce=o("p"),he=n("Role"),fe=s(),de=o("div"),ue=o("p"),pe=n("Year"),ye=s(),me=o("section");for(let e=0;e<nt.length;e+=1)nt[e].c();be=s(),ve=o("hr"),ge=s(),xe=o("section"),we=o("header"),Ee=o("div"),ke=o("p"),De=n("Experience"),Ae=s(),je=o("div"),Pe=o("p"),Te=n("Title"),Ie=s(),_e=o("div"),Oe=o("p"),Be=n("Year"),Se=s(),Re=o("section");for(let e=0;e<it.length;e+=1)it[e].c();Ue=s(),Me=o("hr"),Ve=s(),Ce=o("section"),Fe=o("div"),He=o("p"),Le=n("Services"),qe=s();for(let e=0;e<ct.length;e+=1)ct[e].c();Ne=s(),$e=o("div"),Ge=o("p"),Ye=n("Selected Clients"),Je=s();for(let e=0;e<ft.length;e+=1)ft[e].c();ze=s(),Xe=o("div"),Ke=o("p"),Qe=n("Links"),We=s();for(let e=0;e<ut.length;e+=1)ut[e].c();Ze=s(),et=o("hr"),tt=s(),v(rt.$$.fragment),this.h()},l(o){const n=g('[data-svelte="svelte-c4bbcl"]',document.head);t=i(n,"META",{name:!0,content:!0}),n.forEach(h),r=f(o),a=i(o,"DIV",{class:!0});var s=l(a);y=i(s,"DIV",{class:!0});var d=l(y);b=i(d,"HEADER",{class:!0});var u=l(b);j=i(u,"A",{href:!0,class:!0});var p=l(j);P=c(p,"Back home"),p.forEach(h),T=f(u),I=i(u,"H1",{});var m=l(I);_=c(m,"Maxim Siebert"),m.forEach(h),O=f(u),B=i(u,"P",{class:!0});var v=l(B);S=c(v,"Designer + Developer"),v.forEach(h),R=f(u),U=i(u,"P",{class:!0});var w=l(U);M=c(w,"2011–"),V=c(w,e[5]),w.forEach(h),u.forEach(h),X=f(d),K=i(d,"DIV",{class:!0});var E=l(K);W=i(E,"DIV",{class:!0}),l(W).forEach(h),Z=f(E),ee=i(E,"HR",{class:!0}),te=f(E),re=i(E,"SECTION",{});var k=l(re);ae=i(k,"DIV",{class:!0});var D=l(ae);oe=i(D,"DIV",{class:!0});var A=l(oe);ne=i(A,"P",{});var C=l(ne);se=c(C,"Project"),C.forEach(h),A.forEach(h),ie=f(D),le=i(D,"DIV",{class:!0});var F=l(le);ce=i(F,"P",{});var H=l(ce);he=c(H,"Role"),H.forEach(h),F.forEach(h),fe=f(D),de=i(D,"DIV",{class:!0});var L=l(de);ue=i(L,"P",{});var q=l(ue);pe=c(q,"Year"),q.forEach(h),L.forEach(h),D.forEach(h),ye=f(k),me=i(k,"SECTION",{class:!0});var N=l(me);for(let e=0;e<nt.length;e+=1)nt[e].l(N);N.forEach(h),k.forEach(h),be=f(E),ve=i(E,"HR",{class:!0}),ge=f(E),xe=i(E,"SECTION",{});var $=l(xe);we=i($,"HEADER",{class:!0});var G=l(we);Ee=i(G,"DIV",{class:!0});var Y=l(Ee);ke=i(Y,"P",{});var J=l(ke);De=c(J,"Experience"),J.forEach(h),Y.forEach(h),Ae=f(G),je=i(G,"DIV",{class:!0});var z=l(je);Pe=i(z,"P",{});var Q=l(Pe);Te=c(Q,"Title"),Q.forEach(h),z.forEach(h),Ie=f(G),_e=i(G,"DIV",{class:!0});var at=l(_e);Oe=i(at,"P",{});var ot=l(Oe);Be=c(ot,"Year"),ot.forEach(h),at.forEach(h),G.forEach(h),Se=f($),Re=i($,"SECTION",{class:!0});var st=l(Re);for(let e=0;e<it.length;e+=1)it[e].l(st);st.forEach(h),$.forEach(h),Ue=f(E),Me=i(E,"HR",{class:!0}),Ve=f(E),Ce=i(E,"SECTION",{class:!0});var lt=l(Ce);Fe=i(lt,"DIV",{class:!0});var ht=l(Fe);He=i(ht,"P",{class:!0});var dt=l(He);Le=c(dt,"Services"),dt.forEach(h),qe=f(ht);for(let e=0;e<ct.length;e+=1)ct[e].l(ht);ht.forEach(h),Ne=f(lt),$e=i(lt,"DIV",{class:!0});var pt=l($e);Ge=i(pt,"P",{class:!0});var yt=l(Ge);Ye=c(yt,"Selected Clients"),yt.forEach(h),Je=f(pt);for(let e=0;e<ft.length;e+=1)ft[e].l(pt);pt.forEach(h),ze=f(lt),Xe=i(lt,"DIV",{class:!0});var mt=l(Xe);Ke=i(mt,"P",{class:!0});var bt=l(Ke);Qe=c(bt,"Links"),bt.forEach(h),We=f(mt);for(let e=0;e<ut.length;e+=1)ut[e].l(mt);mt.forEach(h),lt.forEach(h),E.forEach(h),Ze=f(d),et=i(d,"HR",{class:!0}),tt=f(d),x(rt.$$.fragment,d),d.forEach(h),s.forEach(h),this.h()},h(){document.title="Maxim Siebert — Designer + Developer",d(t,"name","description"),d(t,"content","A French Canadian designer and developer specialized in web and product design."),d(j,"href","/"),d(j,"class","self-start inline-block mb-4 loader"),d(B,"class","text-gray-600 dark:text-gray-400"),d(U,"class","text-gray-600 dark:text-gray-400"),d(b,"class","w-full px-4 mb-8 md:mb-10 top-4"),d(W,"class","w-full px-4 text-base leading-snug text-black md:text-lg dark:text-white md:block"),d(ee,"class","mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12"),d(oe,"class","w-4/12 px-4 lg:w-5/12"),d(le,"class","hidden w-4/12 px-4 sm:block"),d(de,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),d(ae,"class","flex mb-1 sm:mb-2"),d(me,"class","w-full"),d(ve,"class","mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12"),d(Ee,"class","w-8/12 px-4 lg:w-5/12 sm:w-4/12"),d(je,"class","hidden w-4/12 px-4 sm:block"),d(_e,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),d(we,"class","flex mb-1 sm:mb-2"),d(Re,"class","w-full"),d(Me,"class","mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12"),d(He,"class","mb-1 sm:mb-2"),d(Fe,"class","w-8/12 px-4 lg:w-5/12 sm:w-4/12"),d(Ge,"class","mb-1 sm:mb-2"),d($e,"class","hidden w-4/12 px-4 sm:block"),d(Ke,"class","mb-1 sm:mb-2"),d(Xe,"class","w-5/12 px-4 text-right"),d(Ce,"class","flex"),d(K,"class","w-full ml-auto"),d(et,"class","mx-4 my-8 border-t border-gray-400 border-opacity-50 border-dashed dark:border-white dark:border-opacity-20 md:my-12"),d(y,"class","w-full max-w-2xl mx-auto"),d(a,"class","flex flex-col min-h-screen py-4 text-xs text-black bg-gray-100 lg:py-24 md:py-14 dark:bg-black dark:text-white")},m(e,o){p(document.head,t),u(e,r,o),u(e,a,o),p(a,y),p(y,b),p(b,j),p(j,P),p(b,T),p(b,I),p(I,_),p(b,O),p(b,B),p(B,S),p(b,R),p(b,U),p(U,M),p(U,V),p(y,X),p(y,K),p(K,W),W.innerHTML=Q,p(K,Z),p(K,ee),p(K,te),p(K,re),p(re,ae),p(ae,oe),p(oe,ne),p(ne,se),p(ae,ie),p(ae,le),p(le,ce),p(ce,he),p(ae,fe),p(ae,de),p(de,ue),p(ue,pe),p(re,ye),p(re,me);for(let e=0;e<nt.length;e+=1)nt[e].m(me,null);p(K,be),p(K,ve),p(K,ge),p(K,xe),p(xe,we),p(we,Ee),p(Ee,ke),p(ke,De),p(we,Ae),p(we,je),p(je,Pe),p(Pe,Te),p(we,Ie),p(we,_e),p(_e,Oe),p(Oe,Be),p(xe,Se),p(xe,Re);for(let e=0;e<it.length;e+=1)it[e].m(Re,null);p(K,Ue),p(K,Me),p(K,Ve),p(K,Ce),p(Ce,Fe),p(Fe,He),p(He,Le),p(Fe,qe);for(let e=0;e<ct.length;e+=1)ct[e].m(Fe,null);p(Ce,Ne),p(Ce,$e),p($e,Ge),p(Ge,Ye),p($e,Je);for(let e=0;e<ft.length;e+=1)ft[e].m($e,null);p(Ce,ze),p(Ce,Xe),p(Xe,Ke),p(Ke,Qe),p(Xe,We);for(let e=0;e<ut.length;e+=1)ut[e].m(Xe,null);p(y,Ze),p(y,et),p(y,tt),w(rt,y,null),at=!0},p(e,[t]){if((!at||32&t)&&m(V,e[5]),1&t){let r;for(ot=e[0],r=0;r<ot.length;r+=1){const a=N(e,ot,r);nt[r]?nt[r].p(a,t):(nt[r]=$(a),nt[r].c(),nt[r].m(me,null))}for(;r<nt.length;r+=1)nt[r].d(1);nt.length=ot.length}if(2&t){let r;for(st=e[1],r=0;r<st.length;r+=1){const a=q(e,st,r);it[r]?it[r].p(a,t):(it[r]=G(a),it[r].c(),it[r].m(Re,null))}for(;r<it.length;r+=1)it[r].d(1);it.length=st.length}if(8&t){let r;for(lt=e[3],r=0;r<lt.length;r+=1){const a=L(e,lt,r);ct[r]?ct[r].p(a,t):(ct[r]=Y(a),ct[r].c(),ct[r].m(Fe,null))}for(;r<ct.length;r+=1)ct[r].d(1);ct.length=lt.length}if(4&t){let r;for(ht=e[2],r=0;r<ht.length;r+=1){const a=H(e,ht,r);ft[r]?ft[r].p(a,t):(ft[r]=J(a),ft[r].c(),ft[r].m($e,null))}for(;r<ft.length;r+=1)ft[r].d(1);ft.length=ht.length}if(16&t){let r;for(dt=e[4],r=0;r<dt.length;r+=1){const a=F(e,dt,r);ut[r]?ut[r].p(a,t):(ut[r]=z(a),ut[r].c(),ut[r].m(Xe,null))}for(;r<ut.length;r+=1)ut[r].d(1);ut.length=dt.length}},i(e){at||(E(rt.$$.fragment,e),at=!0)},o(e){k(rt.$$.fragment,e),at=!1},d(e){h(t),e&&h(r),e&&h(a),D(nt,e),D(it,e),D(ct,e),D(ft,e),D(ut,e),A(rt)}}}async function K(){const e=await this.fetch("content/projects.json"),t=await e.json(),r=await this.fetch("content/experiences.json"),a=await r.json(),o=await this.fetch("content/collaborators.json"),n=await o.json(),s=await this.fetch("content/services.json"),i=await s.json(),l=await this.fetch("content/links.json");return{projects:t,experiences:a,collaborators:n,services:i,links:await l.json()}}let Q='I\'m a French Canadian designer and developer specialized in web and product design. If you\'d like to collaborate, email me at <a href="mailto:maxim@hey.com" class="hover:text-black dark:hover:text-white hover:border-transparent border-b pb-1">maxim@hey.com</a>.';function W(e,t,r){let{projects:a}=t,{experiences:o}=t,{collaborators:n}=t,{services:s}=t,{links:i}=t;var l,c="";return l=new Date,r(5,c=l.getFullYear()),e.$$set=e=>{"projects"in e&&r(0,a=e.projects),"experiences"in e&&r(1,o=e.experiences),"collaborators"in e&&r(2,n=e.collaborators),"services"in e&&r(3,s=e.services),"links"in e&&r(4,i=e.links)},[a,o,n,s,i,c]}export default class extends e{constructor(e){super(),t(this,e,W,X,r,{projects:0,experiences:1,collaborators:2,services:3,links:4})}}export{K as preload};
