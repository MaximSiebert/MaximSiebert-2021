import{S as e,i as t,s as r,h as s,e as o,t as a,a as n,c as i,b as l,d as c,f as h,g as f,j as u,k as d,l as p,m,u as y,n as b,o as v,q as x,p as w,r as g,v as E,w as k,x as D,y as P,z as A,A as I}from"./client.5b87eeef.js";var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var j,_,O=(function(e,t){var r="undefined"!=typeof self?self:T,s=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var r="URLSearchParams"in e,s="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in e,n="ArrayBuffer"in e;if(n)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return s&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n&&o&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e,t,r,s=d(this);if(s)return s;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=p(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=c(e),t=h(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[c(e)]},u.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},u.prototype.set=function(e,t){this.map[c(e)]=h(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},s&&(u.prototype[Symbol.iterator]=u.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function x(e,t){var r,s,o=(t=t||{}).body;if(e instanceof x){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(r=t.method||this.method||"GET",s=r.toUpperCase(),v.indexOf(s)>-1?s:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),s=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(o))}})),t}function g(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},b.call(x.prototype),b.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];g.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function k(e,r){return new Promise((function(s,a){var n=new x(e,r);if(n.signal&&n.signal.aborted)return a(new t.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function l(){i.abort()}i.onload=function(){var e,t,r={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),s=r.shift().trim();if(s){var o=r.join(":").trim();t.append(s,o)}})),t)};r.url="responseURL"in i?i.responseURL:r.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;s(new g(o,r))},i.onerror=function(){a(new TypeError("Network request failed"))},i.ontimeout=function(){a(new TypeError("Network request failed"))},i.onabort=function(){a(new t.DOMException("Aborted","AbortError"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&o&&(i.responseType="blob"),n.headers.forEach((function(e,t){i.setRequestHeader(t,e)})),n.signal&&(n.signal.addEventListener("abort",l),i.onreadystatechange=function(){4===i.readyState&&n.signal.removeEventListener("abort",l)}),i.send(void 0===n._bodyInit?null:n._bodyInit)}))}k.polyfill=!0,e.fetch||(e.fetch=k,e.Headers=u,e.Request=x,e.Response=g),t.Headers=u,t.Request=x,t.Response=g,t.fetch=k,Object.defineProperty(t,"__esModule",{value:!0})}({})}(s),s.fetch.ponyfill=!0,delete s.fetch.polyfill;var o=s;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t}(_={path:j,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&_.path)}},_.exports),_.exports);function B(e){return{c:b,l:b,m:b,p:b,d:b}}function S(e){let t,r,s,o,i=e[3][new Date(e[5].commit.commit.author.date).getMonth()]+"",l=new Date(e[5].commit.commit.author.date).getFullYear()+"";return{c(){t=a("Updated – \n                    "),r=a(i),s=n(),o=a(l)},l(e){t=c(e,"Updated – \n                    "),r=c(e,i),s=f(e),o=c(e,l)},m(e,a){d(e,t,a),d(e,r,a),d(e,s,a),d(e,o,a)},p:b,d(e){e&&h(t),e&&h(r),e&&h(s),e&&h(o)}}}function V(e){return{c:b,l:b,m:b,p:b,d:b}}function R(e){let t,r,v,x,w,g,E,k,D,P,A,I,T,j,_,O,R={ctx:e,current:null,token:null,hasCatch:!1,pending:V,then:S,catch:B,value:5};return s(e[2],R),{c(){t=o("div"),r=o("div"),v=o("p"),x=a("Ottawa – "),w=a(e[0]),g=a(" ET"),E=n(),k=o("div"),D=o("div"),P=o("p"),R.block.c(),A=n(),I=o("div"),T=o("p"),j=a("2011 – "),_=a(e[1]),O=a(" ©"),this.h()},l(s){t=i(s,"DIV",{class:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);v=i(a,"P",{});var n=l(v);x=c(n,"Ottawa – "),w=c(n,e[0]),g=c(n," ET"),n.forEach(h),a.forEach(h),E=f(o),k=i(o,"DIV",{class:!0});var u=l(k);D=i(u,"DIV",{class:!0});var d=l(D);P=i(d,"P",{});var p=l(P);R.block.l(p),p.forEach(h),d.forEach(h),A=f(u),I=i(u,"DIV",{class:!0});var m=l(I);T=i(m,"P",{});var y=l(T);j=c(y,"2011 – "),_=c(y,e[1]),O=c(y," ©"),y.forEach(h),m.forEach(h),u.forEach(h),o.forEach(h),this.h()},h(){u(r,"class","w-8/12 px-4 sm:w-3/12"),u(D,"class","hidden w-8/12 px-4 sm:block"),u(I,"class","flex justify-end w-full px-4 sm:w-4/12"),u(k,"class","flex w-4/12 ml-auto sm:w-8/12"),u(t,"class","flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400")},m(e,s){d(e,t,s),p(t,r),p(r,v),p(v,x),p(v,w),p(v,g),p(t,E),p(t,k),p(k,D),p(D,P),R.block.m(P,R.anchor=null),R.mount=()=>P,R.anchor=null,p(k,A),p(k,I),p(I,T),p(T,j),p(T,_),p(T,O)},p(t,[r]){e=t,1&r&&m(w,e[0]),y(R,e,r),2&r&&m(_,e[1])},i:b,o:b,d(e){e&&h(t),R.block.d(),R.token=null,R=null}}}function M(e,t,r){let s=O("https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages").then((e=>e.json()));var o="",a="";return function e(){var t=new Date,s=t.getHours(),n=t.getMinutes(),i="am";s>=12&&(s-=12,i="pm"),r(0,o=(s=(s%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+i),r(1,a=t.getFullYear()),setTimeout(e,1e3)}(),[o,a,s,["January","February","March","April","May","June","July","August","September","October","November","December"]]}class U extends e{constructor(e){super(),t(this,e,M,R,r,{})}}const{document:F}=I;function L(e,t,r){const s=e.slice();return s[5]=t[r],s}function C(e,t,r){const s=e.slice();return s[8]=t[r],s}function H(e,t,r){const s=e.slice();return s[11]=t[r],s}function q(e,t,r){const s=e.slice();return s[14]=t[r],s}function N(e,t,r){const s=e.slice();return s[17]=t[r],s}function $(e){let t,r,s,y,b,v,x,w,g,E,k,D,P,A,I=e[17].title+"",T=e[17].role+"",j=e[17].year+"";return{c(){t=o("a"),r=o("div"),s=o("p"),y=a(I),b=n(),v=o("div"),x=o("p"),w=a(T),g=n(),E=o("div"),k=o("p"),D=a(j),P=n(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);s=i(a,"P",{});var n=l(s);y=c(n,I),n.forEach(h),a.forEach(h),b=f(o),v=i(o,"DIV",{class:!0});var u=l(v);x=i(u,"P",{});var d=l(x);w=c(d,T),d.forEach(h),u.forEach(h),g=f(o),E=i(o,"DIV",{class:!0});var p=l(E);k=i(p,"P",{});var m=l(k);D=c(m,j),m.forEach(h),p.forEach(h),P=f(o),o.forEach(h),this.h()},h(){u(r,"class","w-8/12 px-4 sm:w-4/12"),u(v,"class","hidden w-4/12 px-4 sm:block"),u(E,"class","flex justify-end w-4/12 px-4"),u(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),u(t,"href",A=e[17].url),u(t,"target","_blank"),u(t,"rel","noreferrer noopener")},m(e,o){d(e,t,o),p(t,r),p(r,s),p(s,y),p(t,b),p(t,v),p(v,x),p(x,w),p(t,g),p(t,E),p(E,k),p(k,D),p(t,P)},p(e,r){1&r&&I!==(I=e[17].title+"")&&m(y,I),1&r&&T!==(T=e[17].role+"")&&m(w,T),1&r&&j!==(j=e[17].year+"")&&m(D,j),1&r&&A!==(A=e[17].url)&&u(t,"href",A)},d(e){e&&h(t)}}}function Y(e){let t,r,s,y,b,v,x,w,g,E,k,D,P,A,I=e[14].title+"",T=e[14].role+"",j=e[14].date+"";return{c(){t=o("a"),r=o("div"),s=o("p"),y=a(I),b=n(),v=o("div"),x=o("p"),w=a(T),g=n(),E=o("div"),k=o("p"),D=a(j),P=n(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var o=l(t);r=i(o,"DIV",{class:!0});var a=l(r);s=i(a,"P",{});var n=l(s);y=c(n,I),n.forEach(h),a.forEach(h),b=f(o),v=i(o,"DIV",{class:!0});var u=l(v);x=i(u,"P",{});var d=l(x);w=c(d,T),d.forEach(h),u.forEach(h),g=f(o),E=i(o,"DIV",{class:!0});var p=l(E);k=i(p,"P",{});var m=l(k);D=c(m,j),m.forEach(h),p.forEach(h),P=f(o),o.forEach(h),this.h()},h(){u(r,"class","w-4/12 px-4"),u(v,"class","hidden w-4/12 px-4 sm:block"),u(E,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),u(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),u(t,"href",A=e[14].url),u(t,"target","_blank"),u(t,"rel","noreferrer noopener")},m(e,o){d(e,t,o),p(t,r),p(r,s),p(s,y),p(t,b),p(t,v),p(v,x),p(x,w),p(t,g),p(t,E),p(E,k),p(k,D),p(t,P)},p(e,r){2&r&&I!==(I=e[14].title+"")&&m(y,I),2&r&&T!==(T=e[14].role+"")&&m(w,T),2&r&&j!==(j=e[14].date+"")&&m(D,j),2&r&&A!==(A=e[14].url)&&u(t,"href",A)},d(e){e&&h(t)}}}function G(e){let t,r,s=e[11].title+"";return{c(){t=o("p"),r=a(s),this.h()},l(e){t=i(e,"P",{class:!0});var o=l(t);r=c(o,s),o.forEach(h),this.h()},h(){u(t,"class","text-gray-600 dark:text-gray-400")},m(e,s){d(e,t,s),p(t,r)},p(e,t){8&t&&s!==(s=e[11].title+"")&&m(r,s)},d(e){e&&h(t)}}}function J(e){let t,r,s=e[8].title+"";return{c(){t=o("p"),r=a(s),this.h()},l(e){t=i(e,"P",{class:!0});var o=l(t);r=c(o,s),o.forEach(h),this.h()},h(){u(t,"class","text-gray-600 dark:text-gray-400")},m(e,s){d(e,t,s),p(t,r)},p(e,t){4&t&&s!==(s=e[8].title+"")&&m(r,s)},d(e){e&&h(t)}}}function z(e){let t,r,s,n,f=e[5].title+"";return{c(){t=o("p"),r=o("a"),s=a(f),this.h()},l(e){t=i(e,"P",{});var o=l(t);r=i(o,"A",{href:!0,class:!0,target:!0,rel:!0});var a=l(r);s=c(a,f),a.forEach(h),o.forEach(h),this.h()},h(){u(r,"href",n=e[5].url),u(r,"class","text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),u(r,"target","_blank"),u(r,"rel","noreferrer noopener")},m(e,o){d(e,t,o),p(t,r),p(r,s)},p(e,t){16&t&&f!==(f=e[5].title+"")&&m(s,f),16&t&&n!==(n=e[5].url)&&u(r,"href",n)},d(e){e&&h(t)}}}function X(e){let t,r,s,m,y,b,A,I,T,j,_,O,B,S,V,R,M,X,K,W,Z,ee,te,re,se,oe,ae,ne,ie,le,ce,he,fe,ue,de,pe,me,ye,be,ve,xe,we,ge,Ee,ke,De,Pe,Ae,Ie,Te,je,_e,Oe,Be,Se,Ve,Re,Me,Ue,Fe,Le,Ce,He,qe,Ne=e[0],$e=[];for(let t=0;t<Ne.length;t+=1)$e[t]=$(N(e,Ne,t));let Ye=e[1],Ge=[];for(let t=0;t<Ye.length;t+=1)Ge[t]=Y(q(e,Ye,t));let Je=e[3],ze=[];for(let t=0;t<Je.length;t+=1)ze[t]=G(H(e,Je,t));let Xe=e[2],Ke=[];for(let t=0;t<Xe.length;t+=1)Ke[t]=J(C(e,Xe,t));let Qe=e[4],We=[];for(let t=0;t<Qe.length;t+=1)We[t]=z(L(e,Qe,t));return He=new U({}),{c(){t=n(),r=o("div"),s=o("a"),m=n(),y=o("header"),b=o("div"),A=o("h1"),I=a("Maxim Siebert"),T=n(),j=o("div"),_=n(),O=o("div"),B=o("div"),S=o("p"),V=a("Project"),R=n(),M=o("div"),X=o("p"),K=a("Role"),W=n(),Z=o("div"),ee=o("p"),te=a("Year"),re=n(),se=o("section"),oe=o("div"),ae=n(),ne=o("div");for(let e=0;e<$e.length;e+=1)$e[e].c();ie=n(),le=o("header"),ce=o("div"),he=o("div"),fe=o("p"),ue=a("Experience"),de=n(),pe=o("div"),me=o("p"),ye=a("Title"),be=n(),ve=o("div"),xe=o("p"),we=a("Year"),ge=n(),Ee=o("section"),ke=o("div");for(let e=0;e<Ge.length;e+=1)Ge[e].c();De=n(),Pe=o("section"),Ae=o("div"),Ie=o("p"),Te=a("Services"),je=n();for(let e=0;e<ze.length;e+=1)ze[e].c();_e=n(),Oe=o("div"),Be=o("p"),Se=a("Selected Clients"),Ve=n();for(let e=0;e<Ke.length;e+=1)Ke[e].c();Re=n(),Me=o("div"),Ue=o("p"),Fe=a("Links"),Le=n();for(let e=0;e<We.length;e+=1)We[e].c();Ce=n(),v(He.$$.fragment),this.h()},l(e){x('[data-svelte="svelte-1e6j3ni"]',F.head).forEach(h),t=f(e),r=i(e,"DIV",{class:!0});var o=l(r);s=i(o,"A",{href:!0,class:!0}),l(s).forEach(h),m=f(o),y=i(o,"HEADER",{class:!0});var a=l(y);b=i(a,"DIV",{class:!0});var n=l(b);A=i(n,"H1",{class:!0});var u=l(A);I=c(u,"Maxim Siebert"),u.forEach(h),T=f(n),j=i(n,"DIV",{class:!0}),l(j).forEach(h),n.forEach(h),_=f(a),O=i(a,"DIV",{class:!0});var d=l(O);B=i(d,"DIV",{class:!0});var p=l(B);S=i(p,"P",{});var v=l(S);V=c(v,"Project"),v.forEach(h),p.forEach(h),R=f(d),M=i(d,"DIV",{class:!0});var g=l(M);X=i(g,"P",{});var E=l(X);K=c(E,"Role"),E.forEach(h),g.forEach(h),W=f(d),Z=i(d,"DIV",{class:!0});var k=l(Z);ee=i(k,"P",{});var D=l(ee);te=c(D,"Year"),D.forEach(h),k.forEach(h),d.forEach(h),a.forEach(h),re=f(o),se=i(o,"SECTION",{class:!0});var P=l(se);oe=i(P,"DIV",{class:!0}),l(oe).forEach(h),ae=f(P),ne=i(P,"DIV",{class:!0});var U=l(ne);for(let e=0;e<$e.length;e+=1)$e[e].l(U);U.forEach(h),P.forEach(h),ie=f(o),le=i(o,"HEADER",{class:!0});var L=l(le);ce=i(L,"DIV",{class:!0});var C=l(ce);he=i(C,"DIV",{class:!0});var H=l(he);fe=i(H,"P",{});var q=l(fe);ue=c(q,"Experience"),q.forEach(h),H.forEach(h),de=f(C),pe=i(C,"DIV",{class:!0});var N=l(pe);me=i(N,"P",{});var $=l(me);ye=c($,"Title"),$.forEach(h),N.forEach(h),be=f(C),ve=i(C,"DIV",{class:!0});var Y=l(ve);xe=i(Y,"P",{});var G=l(xe);we=c(G,"Year"),G.forEach(h),Y.forEach(h),C.forEach(h),L.forEach(h),ge=f(o),Ee=i(o,"SECTION",{class:!0});var J=l(Ee);ke=i(J,"DIV",{class:!0});var z=l(ke);for(let e=0;e<Ge.length;e+=1)Ge[e].l(z);z.forEach(h),J.forEach(h),De=f(o),Pe=i(o,"SECTION",{class:!0});var Q=l(Pe);Ae=i(Q,"DIV",{class:!0});var qe=l(Ae);Ie=i(qe,"P",{class:!0});var Ne=l(Ie);Te=c(Ne,"Services"),Ne.forEach(h),je=f(qe);for(let e=0;e<ze.length;e+=1)ze[e].l(qe);qe.forEach(h),_e=f(Q),Oe=i(Q,"DIV",{class:!0});var Ye=l(Oe);Be=i(Ye,"P",{class:!0});var Je=l(Be);Se=c(Je,"Selected Clients"),Je.forEach(h),Ve=f(Ye);for(let e=0;e<Ke.length;e+=1)Ke[e].l(Ye);Ye.forEach(h),Re=f(Q),Me=i(Q,"DIV",{class:!0});var Xe=l(Me);Ue=i(Xe,"P",{class:!0});var Qe=l(Ue);Fe=c(Qe,"Links"),Qe.forEach(h),Le=f(Xe);for(let e=0;e<We.length;e+=1)We[e].l(Xe);Xe.forEach(h),Q.forEach(h),Ce=f(o),w(He.$$.fragment,o),o.forEach(h),this.h()},h(){F.title="Maxim Siebert – Designer & Developer",u(s,"href","/"),u(s,"class","self-start inline-block px-4 mb-5 loader"),u(A,"class","inline-block mb-1 sm:mb-2 md:mb-0"),u(j,"class","block text-gray-600 dark:text-gray-400 md:hidden"),u(b,"class","w-full px-4 mb-5 sm:mb-8 lg:w-3/12 md:w-4/12 md:mb-0"),u(B,"class","w-4/12 px-4"),u(M,"class","hidden w-4/12 px-4 sm:block"),u(Z,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),u(O,"class","flex w-full ml-auto md:w-8/12"),u(y,"class","flex flex-wrap mb-1 sm:mb-2"),u(oe,"class","hidden w-4/12 px-4 text-gray-600 lg:w-3/12 dark:text-gray-400 md:block"),u(ne,"class","w-full ml-auto md:w-8/12"),u(se,"class","flex flex-wrap mb-5 sm:mb-8 md:mb-12"),u(he,"class","w-4/12 px-4"),u(pe,"class","hidden w-4/12 px-4 sm:block"),u(ve,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),u(ce,"class","flex w-full ml-auto md:w-8/12"),u(le,"class","flex mb-1 sm:mb-2"),u(ke,"class","w-full ml-auto md:w-8/12"),u(Ee,"class","flex flex-wrap mb-5 sm:mb-8 md:mb-12"),u(Ie,"class","mb-1 sm:mb-2"),u(Ae,"class","w-8/12 px-4 sm:w-4/12"),u(Be,"class","mb-1 sm:mb-2"),u(Oe,"class","hidden w-4/12 px-4 sm:block"),u(Ue,"class","mb-1 sm:mb-2"),u(Me,"class","w-4/12 px-4 text-right"),u(Pe,"class","flex flex-wrap w-full ml-auto md:w-8/12"),u(r,"class","flex flex-col min-h-screen py-5 text-xs text-black bg-gray-100 lg:px-4 dark:bg-black dark:text-white")},m(e,o){d(e,t,o),d(e,r,o),p(r,s),p(r,m),p(r,y),p(y,b),p(b,A),p(A,I),p(b,T),p(b,j),j.innerHTML=Q,p(y,_),p(y,O),p(O,B),p(B,S),p(S,V),p(O,R),p(O,M),p(M,X),p(X,K),p(O,W),p(O,Z),p(Z,ee),p(ee,te),p(r,re),p(r,se),p(se,oe),oe.innerHTML=Q,p(se,ae),p(se,ne);for(let e=0;e<$e.length;e+=1)$e[e].m(ne,null);p(r,ie),p(r,le),p(le,ce),p(ce,he),p(he,fe),p(fe,ue),p(ce,de),p(ce,pe),p(pe,me),p(me,ye),p(ce,be),p(ce,ve),p(ve,xe),p(xe,we),p(r,ge),p(r,Ee),p(Ee,ke);for(let e=0;e<Ge.length;e+=1)Ge[e].m(ke,null);p(r,De),p(r,Pe),p(Pe,Ae),p(Ae,Ie),p(Ie,Te),p(Ae,je);for(let e=0;e<ze.length;e+=1)ze[e].m(Ae,null);p(Pe,_e),p(Pe,Oe),p(Oe,Be),p(Be,Se),p(Oe,Ve);for(let e=0;e<Ke.length;e+=1)Ke[e].m(Oe,null);p(Pe,Re),p(Pe,Me),p(Me,Ue),p(Ue,Fe),p(Me,Le);for(let e=0;e<We.length;e+=1)We[e].m(Me,null);p(r,Ce),g(He,r,null),qe=!0},p(e,[t]){if(1&t){let r;for(Ne=e[0],r=0;r<Ne.length;r+=1){const s=N(e,Ne,r);$e[r]?$e[r].p(s,t):($e[r]=$(s),$e[r].c(),$e[r].m(ne,null))}for(;r<$e.length;r+=1)$e[r].d(1);$e.length=Ne.length}if(2&t){let r;for(Ye=e[1],r=0;r<Ye.length;r+=1){const s=q(e,Ye,r);Ge[r]?Ge[r].p(s,t):(Ge[r]=Y(s),Ge[r].c(),Ge[r].m(ke,null))}for(;r<Ge.length;r+=1)Ge[r].d(1);Ge.length=Ye.length}if(8&t){let r;for(Je=e[3],r=0;r<Je.length;r+=1){const s=H(e,Je,r);ze[r]?ze[r].p(s,t):(ze[r]=G(s),ze[r].c(),ze[r].m(Ae,null))}for(;r<ze.length;r+=1)ze[r].d(1);ze.length=Je.length}if(4&t){let r;for(Xe=e[2],r=0;r<Xe.length;r+=1){const s=C(e,Xe,r);Ke[r]?Ke[r].p(s,t):(Ke[r]=J(s),Ke[r].c(),Ke[r].m(Oe,null))}for(;r<Ke.length;r+=1)Ke[r].d(1);Ke.length=Xe.length}if(16&t){let r;for(Qe=e[4],r=0;r<Qe.length;r+=1){const s=L(e,Qe,r);We[r]?We[r].p(s,t):(We[r]=z(s),We[r].c(),We[r].m(Me,null))}for(;r<We.length;r+=1)We[r].d(1);We.length=Qe.length}},i(e){qe||(E(He.$$.fragment,e),qe=!0)},o(e){k(He.$$.fragment,e),qe=!1},d(e){e&&h(t),e&&h(r),D($e,e),D(Ge,e),D(ze,e),D(Ke,e),D(We,e),P(He)}}}async function K(){const e=await this.fetch("content/projects.json"),t=await e.json(),r=await this.fetch("content/experiences.json"),s=await r.json(),o=await this.fetch("content/collaborators.json"),a=await o.json(),n=await this.fetch("content/services.json"),i=await n.json(),l=await this.fetch("content/links.json");return{projects:t,experiences:s,collaborators:a,services:i,links:await l.json()}}let Q='is a French Canadian designer & developer. He\'s currently a Principal Designer at <a href="https://blunt.af/" class="hover:text-black dark:hover:text-white hover:underline" target="_blank" rel="noreferrer noopener">Peggy</a> and freelances through his studio, <a href="https://blunt.af/" class="hover:text-black dark:hover:text-white hover:underline" target="_blank" rel="noreferrer noopener">Blunt</a>. This site lists most of the work he\'s done over the years. If you\'d like to discuss new commissions or collaborate with Maxim, email him at <a href="mailto:maxim@hey.com" class="hover:text-black dark:hover:text-white hover:underline">maxim@hey.com</a>.';function W(e,t,r){let{projects:s}=t,{experiences:o}=t,{collaborators:a}=t,{services:n}=t,{links:i}=t;return A((()=>{[].forEach.call(document.getElementsByTagName("a"),(function(e){e.addEventListener("click",(function(e){let t=e.pageX,r=e.pageY;console.log("Mouse Position:\t"+t+"|"+r);let s=document.createElement("div");s.className="dot",s.style.left=t+"px",s.style.top=r+"px",document.body.appendChild(s)}))})),window.addEventListener("resize",(function(){document.querySelectorAll(".dot").forEach((e=>e.remove()))}))})),e.$$set=e=>{"projects"in e&&r(0,s=e.projects),"experiences"in e&&r(1,o=e.experiences),"collaborators"in e&&r(2,a=e.collaborators),"services"in e&&r(3,n=e.services),"links"in e&&r(4,i=e.links)},[s,o,a,n,i]}export default class extends e{constructor(e){super(),t(this,e,W,X,r,{projects:0,experiences:1,collaborators:2,services:3,links:4})}}export{K as preload};