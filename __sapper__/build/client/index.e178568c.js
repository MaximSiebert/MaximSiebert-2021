import{S as e,i as t,s as r,h as s,e as o,t as a,a as n,c as i,b as l,d as c,f as h,g as f,j as d,k as u,l as p,m,u as y,n as v,o as b,q as g,p as x,r as w,v as E,w as k,x as D,y as A,z as I,A as P}from"./client.6fecc68d.js";var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var j,_,O=(function(e,t){var r="undefined"!=typeof self?self:T,s=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var r="URLSearchParams"in e,s="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in e,n="ArrayBuffer"in e;if(n)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return s&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function u(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n&&o&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=u(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e,t,r,s=u(this);if(s)return s;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=p(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=c(e),t=h(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[c(e)]},d.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},d.prototype.set=function(e,t){this.map[c(e)]=h(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},s&&(d.prototype[Symbol.iterator]=d.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(e,t){var r,s,o=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=(r=t.method||this.method||"GET",s=r.toUpperCase(),b.indexOf(s)>-1?s:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function x(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),s=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(o))}})),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},v.call(g.prototype),v.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];w.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function k(e,r){return new Promise((function(s,a){var n=new g(e,r);if(n.signal&&n.signal.aborted)return a(new t.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function l(){i.abort()}i.onload=function(){var e,t,r={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),s=r.shift().trim();if(s){var o=r.join(":").trim();t.append(s,o)}})),t)};r.url="responseURL"in i?i.responseURL:r.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;s(new w(o,r))},i.onerror=function(){a(new TypeError("Network request failed"))},i.ontimeout=function(){a(new TypeError("Network request failed"))},i.onabort=function(){a(new t.DOMException("Aborted","AbortError"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&o&&(i.responseType="blob"),n.headers.forEach((function(e,t){i.setRequestHeader(t,e)})),n.signal&&(n.signal.addEventListener("abort",l),i.onreadystatechange=function(){4===i.readyState&&n.signal.removeEventListener("abort",l)}),i.send(void 0===n._bodyInit?null:n._bodyInit)}))}k.polyfill=!0,e.fetch||(e.fetch=k,e.Headers=d,e.Request=g,e.Response=w),t.Headers=d,t.Request=g,t.Response=w,t.fetch=k,Object.defineProperty(t,"__esModule",{value:!0})}({})}(s),s.fetch.ponyfill=!0,delete s.fetch.polyfill;var o=s;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t}(_={path:j,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&_.path)}},_.exports),_.exports);function B(e){return{c:v,l:v,m:v,p:v,d:v}}function S(e){let t,r,s,o,i=e[3][new Date(e[5].commit.commit.author.date).getMonth()]+"",l=new Date(e[5].commit.commit.author.date).getFullYear()+"";return{c(){t=a("Updated – \n                    "),r=a(i),s=n(),o=a(l)},l(e){t=c(e,"Updated – \n                    "),r=c(e,i),s=f(e),o=c(e,l)},m(e,a){u(e,t,a),u(e,r,a),u(e,s,a),u(e,o,a)},p:v,d(e){e&&h(t),e&&h(r),e&&h(s),e&&h(o)}}}function V(e){return{c:v,l:v,m:v,p:v,d:v}}function R(e){let t,r,b,g,x,w,E,k,D,A,I,P,T,j,_,O,R={ctx:e,current:null,token:null,hasCatch:!1,pending:V,then:S,catch:B,value:5};return s(e[2],R),{c(){t=o("div"),r=o("div"),b=o("p"),g=a("Ottawa – "),x=a(e[0]),w=a(" ET"),E=n(),k=o("div"),D=o("div"),A=o("p"),R.block.c(),I=n(),P=o("div"),T=o("p"),j=a("2011 – "),_=a(e[1]),O=a(" ©"),this.h()},l(s){t=i(s,"DIV",{class:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);b=i(a,"P",{});var n=l(b);g=c(n,"Ottawa – "),x=c(n,e[0]),w=c(n," ET"),n.forEach(h),a.forEach(h),E=f(o),k=i(o,"DIV",{class:!0});var d=l(k);D=i(d,"DIV",{class:!0});var u=l(D);A=i(u,"P",{});var p=l(A);R.block.l(p),p.forEach(h),u.forEach(h),I=f(d),P=i(d,"DIV",{class:!0});var m=l(P);T=i(m,"P",{});var y=l(T);j=c(y,"2011 – "),_=c(y,e[1]),O=c(y," ©"),y.forEach(h),m.forEach(h),d.forEach(h),o.forEach(h),this.h()},h(){d(r,"class","w-8/12 px-4 sm:w-3/12"),d(D,"class","hidden w-8/12 px-4 sm:block"),d(P,"class","flex justify-end w-full px-4 sm:w-4/12"),d(k,"class","flex w-4/12 ml-auto sm:w-8/12"),d(t,"class","flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400")},m(e,s){u(e,t,s),p(t,r),p(r,b),p(b,g),p(b,x),p(b,w),p(t,E),p(t,k),p(k,D),p(D,A),R.block.m(A,R.anchor=null),R.mount=()=>A,R.anchor=null,p(k,I),p(k,P),p(P,T),p(T,j),p(T,_),p(T,O)},p(t,[r]){e=t,1&r&&m(x,e[0]),y(R,e,r),2&r&&m(_,e[1])},i:v,o:v,d(e){e&&h(t),R.block.d(),R.token=null,R=null}}}function U(e,t,r){let s=O("https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages").then((e=>e.json()));var o="",a="";return function e(){var t=new Date,s=t.getHours(),n=t.getMinutes(),i="am";s>=12&&(s-=12,i="pm"),r(0,o=(s=(s%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+i),r(1,a=t.getFullYear()),setTimeout(e,1e3)}(),[o,a,s,["January","February","March","April","May","June","July","August","September","October","November","December"]]}class M extends e{constructor(e){super(),t(this,e,U,R,r,{})}}const{document:L}=P;function F(e,t,r){const s=e.slice();return s[5]=t[r],s}function C(e,t,r){const s=e.slice();return s[8]=t[r],s}function H(e,t,r){const s=e.slice();return s[11]=t[r],s}function q(e,t,r){const s=e.slice();return s[14]=t[r],s}function N(e,t,r){const s=e.slice();return s[17]=t[r],s}function $(e){let t,r,s,y,v,b,g,x,w,E,k,D,A,I,P=e[17].title+"",T=e[17].role+"",j=e[17].year+"";return{c(){t=o("a"),r=o("div"),s=o("p"),y=a(P),v=n(),b=o("div"),g=o("p"),x=a(T),w=n(),E=o("div"),k=o("p"),D=a(j),A=n(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);s=i(a,"P",{});var n=l(s);y=c(n,P),n.forEach(h),a.forEach(h),v=f(o),b=i(o,"DIV",{class:!0});var d=l(b);g=i(d,"P",{});var u=l(g);x=c(u,T),u.forEach(h),d.forEach(h),w=f(o),E=i(o,"DIV",{class:!0});var p=l(E);k=i(p,"P",{});var m=l(k);D=c(m,j),m.forEach(h),p.forEach(h),A=f(o),o.forEach(h),this.h()},h(){d(r,"class","w-8/12 px-4 sm:w-4/12"),d(b,"class","hidden w-4/12 px-4 sm:block"),d(E,"class","flex justify-end w-4/12 px-4"),d(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(t,"href",I=e[17].url),d(t,"target","_blank"),d(t,"rel","noreferrer noopener")},m(e,o){u(e,t,o),p(t,r),p(r,s),p(s,y),p(t,v),p(t,b),p(b,g),p(g,x),p(t,w),p(t,E),p(E,k),p(k,D),p(t,A)},p(e,r){1&r&&P!==(P=e[17].title+"")&&m(y,P),1&r&&T!==(T=e[17].role+"")&&m(x,T),1&r&&j!==(j=e[17].year+"")&&m(D,j),1&r&&I!==(I=e[17].url)&&d(t,"href",I)},d(e){e&&h(t)}}}function Y(e){let t,r,s,y,v,b,g,x,w,E,k,D,A,I,P=e[14].title+"",T=e[14].role+"",j=e[14].date+"";return{c(){t=o("a"),r=o("div"),s=o("p"),y=a(P),v=n(),b=o("div"),g=o("p"),x=a(T),w=n(),E=o("div"),k=o("p"),D=a(j),A=n(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);s=i(a,"P",{});var n=l(s);y=c(n,P),n.forEach(h),a.forEach(h),v=f(o),b=i(o,"DIV",{class:!0});var d=l(b);g=i(d,"P",{});var u=l(g);x=c(u,T),u.forEach(h),d.forEach(h),w=f(o),E=i(o,"DIV",{class:!0});var p=l(E);k=i(p,"P",{});var m=l(k);D=c(m,j),m.forEach(h),p.forEach(h),A=f(o),o.forEach(h),this.h()},h(){d(r,"class","w-4/12 px-4"),d(b,"class","hidden w-4/12 px-4 sm:block"),d(E,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),d(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(t,"href",I=e[14].url),d(t,"target","_blank"),d(t,"rel","noreferrer noopener")},m(e,o){u(e,t,o),p(t,r),p(r,s),p(s,y),p(t,v),p(t,b),p(b,g),p(g,x),p(t,w),p(t,E),p(E,k),p(k,D),p(t,A)},p(e,r){2&r&&P!==(P=e[14].title+"")&&m(y,P),2&r&&T!==(T=e[14].role+"")&&m(x,T),2&r&&j!==(j=e[14].date+"")&&m(D,j),2&r&&I!==(I=e[14].url)&&d(t,"href",I)},d(e){e&&h(t)}}}function G(e){let t,r,s=e[11].title+"";return{c(){t=o("p"),r=a(s),this.h()},l(e){t=i(e,"P",{class:!0});var o=l(t);r=c(o,s),o.forEach(h),this.h()},h(){d(t,"class","text-gray-600 dark:text-gray-400")},m(e,s){u(e,t,s),p(t,r)},p(e,t){8&t&&s!==(s=e[11].title+"")&&m(r,s)},d(e){e&&h(t)}}}function J(e){let t,r,s=e[8].title+"";return{c(){t=o("p"),r=a(s),this.h()},l(e){t=i(e,"P",{class:!0});var o=l(t);r=c(o,s),o.forEach(h),this.h()},h(){d(t,"class","text-gray-600 dark:text-gray-400")},m(e,s){u(e,t,s),p(t,r)},p(e,t){4&t&&s!==(s=e[8].title+"")&&m(r,s)},d(e){e&&h(t)}}}function X(e){let t,r,s,n,f=e[5].title+"";return{c(){t=o("p"),r=o("a"),s=a(f),this.h()},l(e){t=i(e,"P",{});var o=l(t);r=i(o,"A",{href:!0,class:!0,target:!0,rel:!0});var a=l(r);s=c(a,f),a.forEach(h),o.forEach(h),this.h()},h(){d(r,"href",n=e[5].url),d(r,"class","text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(r,"target","_blank"),d(r,"rel","noreferrer noopener")},m(e,o){u(e,t,o),p(t,r),p(r,s)},p(e,t){16&t&&f!==(f=e[5].title+"")&&m(s,f),16&t&&n!==(n=e[5].url)&&d(r,"href",n)},d(e){e&&h(t)}}}function z(e){let t,r,s,m,y,v,I,P,T,j,_,O,B,S,V,R,U,z,K,W,Z,ee,te,re,se,oe,ae,ne,ie,le,ce,he,fe,de,ue,pe,me,ye,ve,be,ge,xe,we,Ee,ke,De,Ae,Ie,Pe,Te,je,_e,Oe,Be,Se,Ve,Re,Ue,Me,Le,Fe,Ce,He,qe,Ne,$e,Ye=e[0],Ge=[];for(let t=0;t<Ye.length;t+=1)Ge[t]=$(N(e,Ye,t));let Je=e[1],Xe=[];for(let t=0;t<Je.length;t+=1)Xe[t]=Y(q(e,Je,t));let ze=e[3],Ke=[];for(let t=0;t<ze.length;t+=1)Ke[t]=G(H(e,ze,t));let Qe=e[2],We=[];for(let t=0;t<Qe.length;t+=1)We[t]=J(C(e,Qe,t));let Ze=e[4],et=[];for(let t=0;t<Ze.length;t+=1)et[t]=X(F(e,Ze,t));return Ne=new M({}),{c(){t=n(),r=o("div"),s=n(),m=o("div"),y=o("a"),v=n(),I=o("header"),P=o("div"),T=o("h1"),j=a("Maxim Siebert"),_=n(),O=o("div"),B=n(),S=o("div"),V=o("div"),R=o("p"),U=a("Project"),z=n(),K=o("div"),W=o("p"),Z=a("Role"),ee=n(),te=o("div"),re=o("p"),se=a("Year"),oe=n(),ae=o("section"),ne=o("div"),ie=n(),le=o("div");for(let e=0;e<Ge.length;e+=1)Ge[e].c();ce=n(),he=o("header"),fe=o("div"),de=o("div"),ue=o("p"),pe=a("Experience"),me=n(),ye=o("div"),ve=o("p"),be=a("Title"),ge=n(),xe=o("div"),we=o("p"),Ee=a("Year"),ke=n(),De=o("section"),Ae=o("div");for(let e=0;e<Xe.length;e+=1)Xe[e].c();Ie=n(),Pe=o("section"),Te=o("div"),je=o("p"),_e=a("Services"),Oe=n();for(let e=0;e<Ke.length;e+=1)Ke[e].c();Be=n(),Se=o("div"),Ve=o("p"),Re=a("Selected Clients"),Ue=n();for(let e=0;e<We.length;e+=1)We[e].c();Me=n(),Le=o("div"),Fe=o("p"),Ce=a("Links"),He=n();for(let e=0;e<et.length;e+=1)et[e].c();qe=n(),b(Ne.$$.fragment),this.h()},l(e){g('[data-svelte="svelte-1e6j3ni"]',L.head).forEach(h),t=f(e),r=i(e,"DIV",{id:!0,class:!0}),l(r).forEach(h),s=f(e),m=i(e,"DIV",{class:!0});var o=l(m);y=i(o,"A",{href:!0,class:!0}),l(y).forEach(h),v=f(o),I=i(o,"HEADER",{class:!0});var a=l(I);P=i(a,"DIV",{class:!0});var n=l(P);T=i(n,"H1",{class:!0});var d=l(T);j=c(d,"Maxim Siebert"),d.forEach(h),_=f(n),O=i(n,"DIV",{class:!0}),l(O).forEach(h),n.forEach(h),B=f(a),S=i(a,"DIV",{class:!0});var u=l(S);V=i(u,"DIV",{class:!0});var p=l(V);R=i(p,"P",{});var b=l(R);U=c(b,"Project"),b.forEach(h),p.forEach(h),z=f(u),K=i(u,"DIV",{class:!0});var w=l(K);W=i(w,"P",{});var E=l(W);Z=c(E,"Role"),E.forEach(h),w.forEach(h),ee=f(u),te=i(u,"DIV",{class:!0});var k=l(te);re=i(k,"P",{});var D=l(re);se=c(D,"Year"),D.forEach(h),k.forEach(h),u.forEach(h),a.forEach(h),oe=f(o),ae=i(o,"SECTION",{class:!0});var A=l(ae);ne=i(A,"DIV",{class:!0}),l(ne).forEach(h),ie=f(A),le=i(A,"DIV",{class:!0});var M=l(le);for(let e=0;e<Ge.length;e+=1)Ge[e].l(M);M.forEach(h),A.forEach(h),ce=f(o),he=i(o,"HEADER",{class:!0});var F=l(he);fe=i(F,"DIV",{class:!0});var C=l(fe);de=i(C,"DIV",{class:!0});var H=l(de);ue=i(H,"P",{});var q=l(ue);pe=c(q,"Experience"),q.forEach(h),H.forEach(h),me=f(C),ye=i(C,"DIV",{class:!0});var N=l(ye);ve=i(N,"P",{});var $=l(ve);be=c($,"Title"),$.forEach(h),N.forEach(h),ge=f(C),xe=i(C,"DIV",{class:!0});var Y=l(xe);we=i(Y,"P",{});var G=l(we);Ee=c(G,"Year"),G.forEach(h),Y.forEach(h),C.forEach(h),F.forEach(h),ke=f(o),De=i(o,"SECTION",{class:!0});var J=l(De);Ae=i(J,"DIV",{class:!0});var X=l(Ae);for(let e=0;e<Xe.length;e+=1)Xe[e].l(X);X.forEach(h),J.forEach(h),Ie=f(o),Pe=i(o,"SECTION",{class:!0});var Q=l(Pe);Te=i(Q,"DIV",{class:!0});var $e=l(Te);je=i($e,"P",{class:!0});var Ye=l(je);_e=c(Ye,"Services"),Ye.forEach(h),Oe=f($e);for(let e=0;e<Ke.length;e+=1)Ke[e].l($e);$e.forEach(h),Be=f(Q),Se=i(Q,"DIV",{class:!0});var Je=l(Se);Ve=i(Je,"P",{class:!0});var ze=l(Ve);Re=c(ze,"Selected Clients"),ze.forEach(h),Ue=f(Je);for(let e=0;e<We.length;e+=1)We[e].l(Je);Je.forEach(h),Me=f(Q),Le=i(Q,"DIV",{class:!0});var Qe=l(Le);Fe=i(Qe,"P",{class:!0});var Ze=l(Fe);Ce=c(Ze,"Links"),Ze.forEach(h),He=f(Qe);for(let e=0;e<et.length;e+=1)et[e].l(Qe);Qe.forEach(h),Q.forEach(h),qe=f(o),x(Ne.$$.fragment,o),o.forEach(h),this.h()},h(){L.title="Maxim Siebert – Designer & Developer",d(r,"id","cursor"),d(r,"class","absolute w-2 h-2 duration-100 ease-in-out bg-black rounded-full pointer-events-none dark:bg-white"),d(y,"href","/"),d(y,"class","self-start inline-block px-4 mb-5 loader"),d(T,"class","inline-block mb-1 sm:mb-2 md:mb-0"),d(O,"class","block text-gray-600 dark:text-gray-400 md:hidden"),d(P,"class","w-full px-4 mb-5 sm:mb-8 lg:w-3/12 md:w-4/12 md:mb-0"),d(V,"class","w-4/12 px-4"),d(K,"class","hidden w-4/12 px-4 sm:block"),d(te,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),d(S,"class","flex w-full ml-auto md:w-8/12"),d(I,"class","flex flex-wrap mb-1 sm:mb-2"),d(ne,"class","hidden w-4/12 px-4 text-gray-600 lg:w-3/12 dark:text-gray-400 md:block"),d(le,"class","w-full ml-auto md:w-8/12"),d(ae,"class","flex flex-wrap mb-5 sm:mb-8 md:mb-12"),d(de,"class","w-4/12 px-4"),d(ye,"class","hidden w-4/12 px-4 sm:block"),d(xe,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),d(fe,"class","flex w-full ml-auto md:w-8/12"),d(he,"class","flex mb-1 sm:mb-2"),d(Ae,"class","w-full ml-auto md:w-8/12"),d(De,"class","flex flex-wrap mb-5 sm:mb-8 md:mb-12"),d(je,"class","mb-1 sm:mb-2"),d(Te,"class","w-8/12 px-4 sm:w-4/12"),d(Ve,"class","mb-1 sm:mb-2"),d(Se,"class","hidden w-4/12 px-4 sm:block"),d(Fe,"class","mb-1 sm:mb-2"),d(Le,"class","w-4/12 px-4 text-right"),d(Pe,"class","flex flex-wrap w-full ml-auto md:w-8/12"),d(m,"class","flex flex-col min-h-screen py-5 text-xs text-black bg-gray-100 lg:px-4 dark:bg-black dark:text-white")},m(e,o){u(e,t,o),u(e,r,o),u(e,s,o),u(e,m,o),p(m,y),p(m,v),p(m,I),p(I,P),p(P,T),p(T,j),p(P,_),p(P,O),O.innerHTML=Q,p(I,B),p(I,S),p(S,V),p(V,R),p(R,U),p(S,z),p(S,K),p(K,W),p(W,Z),p(S,ee),p(S,te),p(te,re),p(re,se),p(m,oe),p(m,ae),p(ae,ne),ne.innerHTML=Q,p(ae,ie),p(ae,le);for(let e=0;e<Ge.length;e+=1)Ge[e].m(le,null);p(m,ce),p(m,he),p(he,fe),p(fe,de),p(de,ue),p(ue,pe),p(fe,me),p(fe,ye),p(ye,ve),p(ve,be),p(fe,ge),p(fe,xe),p(xe,we),p(we,Ee),p(m,ke),p(m,De),p(De,Ae);for(let e=0;e<Xe.length;e+=1)Xe[e].m(Ae,null);p(m,Ie),p(m,Pe),p(Pe,Te),p(Te,je),p(je,_e),p(Te,Oe);for(let e=0;e<Ke.length;e+=1)Ke[e].m(Te,null);p(Pe,Be),p(Pe,Se),p(Se,Ve),p(Ve,Re),p(Se,Ue);for(let e=0;e<We.length;e+=1)We[e].m(Se,null);p(Pe,Me),p(Pe,Le),p(Le,Fe),p(Fe,Ce),p(Le,He);for(let e=0;e<et.length;e+=1)et[e].m(Le,null);p(m,qe),w(Ne,m,null),$e=!0},p(e,[t]){if(1&t){let r;for(Ye=e[0],r=0;r<Ye.length;r+=1){const s=N(e,Ye,r);Ge[r]?Ge[r].p(s,t):(Ge[r]=$(s),Ge[r].c(),Ge[r].m(le,null))}for(;r<Ge.length;r+=1)Ge[r].d(1);Ge.length=Ye.length}if(2&t){let r;for(Je=e[1],r=0;r<Je.length;r+=1){const s=q(e,Je,r);Xe[r]?Xe[r].p(s,t):(Xe[r]=Y(s),Xe[r].c(),Xe[r].m(Ae,null))}for(;r<Xe.length;r+=1)Xe[r].d(1);Xe.length=Je.length}if(8&t){let r;for(ze=e[3],r=0;r<ze.length;r+=1){const s=H(e,ze,r);Ke[r]?Ke[r].p(s,t):(Ke[r]=G(s),Ke[r].c(),Ke[r].m(Te,null))}for(;r<Ke.length;r+=1)Ke[r].d(1);Ke.length=ze.length}if(4&t){let r;for(Qe=e[2],r=0;r<Qe.length;r+=1){const s=C(e,Qe,r);We[r]?We[r].p(s,t):(We[r]=J(s),We[r].c(),We[r].m(Se,null))}for(;r<We.length;r+=1)We[r].d(1);We.length=Qe.length}if(16&t){let r;for(Ze=e[4],r=0;r<Ze.length;r+=1){const s=F(e,Ze,r);et[r]?et[r].p(s,t):(et[r]=X(s),et[r].c(),et[r].m(Le,null))}for(;r<et.length;r+=1)et[r].d(1);et.length=Ze.length}},i(e){$e||(E(Ne.$$.fragment,e),$e=!0)},o(e){k(Ne.$$.fragment,e),$e=!1},d(e){e&&h(t),e&&h(r),e&&h(s),e&&h(m),D(Ge,e),D(Xe,e),D(Ke,e),D(We,e),D(et,e),A(Ne)}}}async function K(){const e=await this.fetch("content/projects.json"),t=await e.json(),r=await this.fetch("content/experiences.json"),s=await r.json(),o=await this.fetch("content/collaborators.json"),a=await o.json(),n=await this.fetch("content/services.json"),i=await n.json(),l=await this.fetch("content/links.json");return{projects:t,experiences:s,collaborators:a,services:i,links:await l.json()}}let Q='is a French Canadian designer & developer. He\'s currently a Principal Designer at <a href="https://peggy.com/" class="hover:text-black dark:hover:text-white hover:underline" target="_blank" rel="noreferrer noopener">Peggy</a> and freelances through his studio, <a href="https://blunt.af/" class="hover:text-black dark:hover:text-white hover:underline" target="_blank" rel="noreferrer noopener">Blunt</a>. This site lists most of the work he\'s done over the years. If you\'d like to discuss new commissions or collaborate with Maxim, email him at <a href="mailto:maxim@hey.com" class="hover:text-black dark:hover:text-white hover:underline">maxim@hey.com</a>.';function W(e,t,r){let{projects:s}=t,{experiences:o}=t,{collaborators:a}=t,{services:n}=t,{links:i}=t;return I((()=>{const e=document.getElementById("cursor");document.addEventListener("mousemove",(function(t){let r=t.pageX,s=t.pageY;e.style.left=r+"px",e.style.top=s+"px"})),[].forEach.call(document.getElementsByTagName("a"),(function(t){t.addEventListener("click",(function(e){let t=e.pageX,r=e.pageY,s=document.createElement("div");s.className="dot",s.style.left=t+"px",s.style.top=r+"px",document.body.appendChild(s)})),t.addEventListener("mouseover",(function(){e.style.width="0.75rem",e.style.height="0.75rem"})),t.addEventListener("mouseleave",(function(){e.style.width="0.5rem",e.style.height="0.5rem"}))})),window.addEventListener("resize",(function(){document.querySelectorAll(".dot").forEach((e=>e.remove()))}))})),e.$$set=e=>{"projects"in e&&r(0,s=e.projects),"experiences"in e&&r(1,o=e.experiences),"collaborators"in e&&r(2,a=e.collaborators),"services"in e&&r(3,n=e.services),"links"in e&&r(4,i=e.links)},[s,o,a,n,i]}export default class extends e{constructor(e){super(),t(this,e,W,z,r,{projects:0,experiences:1,collaborators:2,services:3,links:4})}}export{K as preload};
