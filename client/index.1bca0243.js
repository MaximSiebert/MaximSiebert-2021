import{S as e,i as t,s as r,h as s,e as a,t as o,a as n,c as i,b as l,d as c,f as h,g as f,j as d,k as u,l as p,m,u as y,n as b,o as v,q as g,p as w,r as x,v as E,w as D,x as k,y as A}from"./client.254e8ef5.js";var P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var I,j,T=(function(e,t){var r="undefined"!=typeof self?self:P,s=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var r="URLSearchParams"in e,s="Symbol"in e&&"iterator"in Symbol,a="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in e,n="ArrayBuffer"in e;if(n)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return s&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function u(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:a&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n&&a&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var e=u(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e,t,r,s=u(this);if(s)return s;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=p(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=c(e),t=h(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[c(e)]},d.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},d.prototype.set=function(e,t){this.map[c(e)]=h(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},s&&(d.prototype[Symbol.iterator]=d.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(e,t){var r,s,a=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,a||null==e._bodyInit||(a=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=(r=t.method||this.method||"GET",s=r.toUpperCase(),v.indexOf(s)>-1?s:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&a)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(a)}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),s=r.shift().replace(/\+/g," "),a=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(a))}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},b.call(g.prototype),b.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];x.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function D(e,r){return new Promise((function(s,o){var n=new g(e,r);if(n.signal&&n.signal.aborted)return o(new t.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function l(){i.abort()}i.onload=function(){var e,t,r={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),s=r.shift().trim();if(s){var a=r.join(":").trim();t.append(s,a)}})),t)};r.url="responseURL"in i?i.responseURL:r.headers.get("X-Request-URL");var a="response"in i?i.response:i.responseText;s(new x(a,r))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.onabort=function(){o(new t.DOMException("Aborted","AbortError"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&a&&(i.responseType="blob"),n.headers.forEach((function(e,t){i.setRequestHeader(t,e)})),n.signal&&(n.signal.addEventListener("abort",l),i.onreadystatechange=function(){4===i.readyState&&n.signal.removeEventListener("abort",l)}),i.send(void 0===n._bodyInit?null:n._bodyInit)}))}D.polyfill=!0,e.fetch||(e.fetch=D,e.Headers=d,e.Request=g,e.Response=x),t.Headers=d,t.Request=g,t.Response=x,t.fetch=D,Object.defineProperty(t,"__esModule",{value:!0})}({})}(s),s.fetch.ponyfill=!0,delete s.fetch.polyfill;var a=s;(t=a.fetch).default=a.fetch,t.fetch=a.fetch,t.Headers=a.Headers,t.Request=a.Request,t.Response=a.Response,e.exports=t}(j={path:I,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&j.path)}},j.exports),j.exports);function _(e){return{c:b,l:b,m:b,p:b,d:b}}function O(e){let t,r,s,a,i=e[3][new Date(e[5].commit.commit.author.date).getMonth()]+"",l=new Date(e[5].commit.commit.author.date).getFullYear()+"";return{c(){t=o("Updated — \n                    "),r=o(i),s=n(),a=o(l)},l(e){t=c(e,"Updated — \n                    "),r=c(e,i),s=f(e),a=c(e,l)},m(e,o){u(e,t,o),u(e,r,o),u(e,s,o),u(e,a,o)},p:b,d(e){e&&h(t),e&&h(r),e&&h(s),e&&h(a)}}}function S(e){return{c:b,l:b,m:b,p:b,d:b}}function B(e){let t,r,v,g,w,x,E,D,k,A,P,I,j,T,B,R={ctx:e,current:null,token:null,hasCatch:!1,pending:S,then:O,catch:_,value:5};return s(e[2],R),{c(){t=a("div"),r=a("div"),v=a("p"),g=o("Ottawa — "),w=o(e[0]),x=o(" ET"),E=n(),D=a("div"),k=a("div"),A=a("p"),R.block.c(),P=n(),I=a("div"),j=a("p"),T=o(e[1]),B=o(" ©"),this.h()},l(s){t=i(s,"DIV",{class:!0});var a=l(t);r=i(a,"DIV",{class:!0});var o=l(r);v=i(o,"P",{});var n=l(v);g=c(n,"Ottawa — "),w=c(n,e[0]),x=c(n," ET"),n.forEach(h),o.forEach(h),E=f(a),D=i(a,"DIV",{class:!0});var d=l(D);k=i(d,"DIV",{class:!0});var u=l(k);A=i(u,"P",{});var p=l(A);R.block.l(p),p.forEach(h),u.forEach(h),P=f(d),I=i(d,"DIV",{class:!0});var m=l(I);j=i(m,"P",{});var y=l(j);T=c(y,e[1]),B=c(y," ©"),y.forEach(h),m.forEach(h),d.forEach(h),a.forEach(h),this.h()},h(){d(r,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),d(k,"class","hidden w-8/12 px-4 sm:block"),d(I,"class","flex justify-end w-full px-4 sm:w-4/12"),d(D,"class","flex w-4/12 ml-auto sm:w-9/12"),d(t,"class","flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400")},m(e,s){u(e,t,s),p(t,r),p(r,v),p(v,g),p(v,w),p(v,x),p(t,E),p(t,D),p(D,k),p(k,A),R.block.m(A,R.anchor=null),R.mount=()=>A,R.anchor=null,p(D,P),p(D,I),p(I,j),p(j,T),p(j,B)},p(t,[r]){e=t,1&r&&m(w,e[0]),y(R,e,r),2&r&&m(T,e[1])},i:b,o:b,d(e){e&&h(t),R.block.d(),R.token=null,R=null}}}function R(e,t,r){let s=T("https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages").then((e=>e.json()));var a="",o="";return function e(){var t=new Date,s=t.getHours(),n=t.getMinutes(),i="am";s>=12&&(s-=12,i="pm"),r(0,a=(s=(s%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+i),r(1,o=t.getFullYear()),setTimeout(e,1e3)}(),[a,o,s,["January","February","March","April","May","June","July","August","September","October","November","December"]]}class V extends e{constructor(e){super(),t(this,e,R,B,r,{})}}function U(e,t,r){const s=e.slice();return s[7]=t[r],s}function M(e,t,r){const s=e.slice();return s[10]=t[r],s}function F(e,t,r){const s=e.slice();return s[13]=t[r],s}function C(e,t,r){const s=e.slice();return s[16]=t[r],s}function H(e,t,r){const s=e.slice();return s[19]=t[r],s}function L(e){let t,r,s,y,b,v,g,w,x,E,D,k,A,P,I=e[19].title+"",j=e[19].role+"",T=e[19].year+"";return{c(){t=a("a"),r=a("div"),s=a("p"),y=o(I),b=n(),v=a("div"),g=a("p"),w=o(j),x=n(),E=a("div"),D=a("p"),k=o(T),A=n(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var a=l(t);r=i(a,"DIV",{class:!0});var o=l(r);s=i(o,"P",{});var n=l(s);y=c(n,I),n.forEach(h),o.forEach(h),b=f(a),v=i(a,"DIV",{class:!0});var d=l(v);g=i(d,"P",{});var u=l(g);w=c(u,j),u.forEach(h),d.forEach(h),x=f(a),E=i(a,"DIV",{class:!0});var p=l(E);D=i(p,"P",{});var m=l(D);k=c(m,T),m.forEach(h),p.forEach(h),A=f(a),a.forEach(h),this.h()},h(){d(r,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),d(v,"class","hidden w-4/12 px-4 sm:block"),d(E,"class","flex justify-end w-5/12 px-4"),d(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(t,"href",P=e[19].url),d(t,"target","_blank"),d(t,"rel","noreferrer noopener")},m(e,a){u(e,t,a),p(t,r),p(r,s),p(s,y),p(t,b),p(t,v),p(v,g),p(g,w),p(t,x),p(t,E),p(E,D),p(D,k),p(t,A)},p(e,r){1&r&&I!==(I=e[19].title+"")&&m(y,I),1&r&&j!==(j=e[19].role+"")&&m(w,j),1&r&&T!==(T=e[19].year+"")&&m(k,T),1&r&&P!==(P=e[19].url)&&d(t,"href",P)},d(e){e&&h(t)}}}function q(e){let t,r,s,y,b,v,g,w,x,E,D,k,A,P,I=e[16].title+"",j=e[16].role+"",T=e[16].date+"";return{c(){t=a("a"),r=a("div"),s=a("p"),y=o(I),b=n(),v=a("div"),g=a("p"),w=o(j),x=n(),E=a("div"),D=a("p"),k=o(T),A=n(),this.h()},l(e){t=i(e,"A",{class:!0,href:!0,target:!0,rel:!0});var a=l(t);r=i(a,"DIV",{class:!0});var o=l(r);s=i(o,"P",{});var n=l(s);y=c(n,I),n.forEach(h),o.forEach(h),b=f(a),v=i(a,"DIV",{class:!0});var d=l(v);g=i(d,"P",{});var u=l(g);w=c(u,j),u.forEach(h),d.forEach(h),x=f(a),E=i(a,"DIV",{class:!0});var p=l(E);D=i(p,"P",{});var m=l(D);k=c(m,T),m.forEach(h),p.forEach(h),A=f(a),a.forEach(h),this.h()},h(){d(r,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),d(v,"class","hidden w-4/12 px-4 sm:block"),d(E,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),d(t,"class","flex ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(t,"href",P=e[16].url),d(t,"target","_blank"),d(t,"rel","noreferrer noopener")},m(e,a){u(e,t,a),p(t,r),p(r,s),p(s,y),p(t,b),p(t,v),p(v,g),p(g,w),p(t,x),p(t,E),p(E,D),p(D,k),p(t,A)},p(e,r){2&r&&I!==(I=e[16].title+"")&&m(y,I),2&r&&j!==(j=e[16].role+"")&&m(w,j),2&r&&T!==(T=e[16].date+"")&&m(k,T),2&r&&P!==(P=e[16].url)&&d(t,"href",P)},d(e){e&&h(t)}}}function $(e){let t,r,s=e[13].title+"";return{c(){t=a("p"),r=o(s),this.h()},l(e){t=i(e,"P",{class:!0});var a=l(t);r=c(a,s),a.forEach(h),this.h()},h(){d(t,"class","text-gray-600 dark:text-gray-400")},m(e,s){u(e,t,s),p(t,r)},p(e,t){8&t&&s!==(s=e[13].title+"")&&m(r,s)},d(e){e&&h(t)}}}function N(e){let t,r,s=e[10].title+"";return{c(){t=a("p"),r=o(s),this.h()},l(e){t=i(e,"P",{class:!0});var a=l(t);r=c(a,s),a.forEach(h),this.h()},h(){d(t,"class","text-gray-600 dark:text-gray-400")},m(e,s){u(e,t,s),p(t,r)},p(e,t){4&t&&s!==(s=e[10].title+"")&&m(r,s)},d(e){e&&h(t)}}}function Y(e){let t,r,s,n,f=e[7].title+"";return{c(){t=a("p"),r=a("a"),s=o(f),this.h()},l(e){t=i(e,"P",{});var a=l(t);r=i(a,"A",{href:!0,class:!0,target:!0,rel:!0});var o=l(r);s=c(o,f),o.forEach(h),a.forEach(h),this.h()},h(){d(r,"href",n=e[7].url),d(r,"class","text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),d(r,"target","_blank"),d(r,"rel","noreferrer noopener")},m(e,a){u(e,t,a),p(t,r),p(r,s)},p(e,t){16&t&&f!==(f=e[7].title+"")&&m(s,f),16&t&&n!==(n=e[7].url)&&d(r,"href",n)},d(e){e&&h(t)}}}function z(e){let t,r,s,y,b,P,I,j,T,_,O,S,B,R,z,G,X,K,Q,W,Z,ee,te,re,se,ae,oe,ne,ie,le,ce,he,fe,de,ue,pe,me,ye,be,ve,ge,we,xe,Ee,De,ke,Ae,Pe,Ie,je,Te,_e,Oe,Se,Be,Re,Ve,Ue,Me,Fe,Ce,He,Le,qe,$e,Ne,Ye,ze,Ge,Je=e[0],Xe=[];for(let t=0;t<Je.length;t+=1)Xe[t]=L(H(e,Je,t));let Ke=e[1],Qe=[];for(let t=0;t<Ke.length;t+=1)Qe[t]=q(C(e,Ke,t));let We=e[3],Ze=[];for(let t=0;t<We.length;t+=1)Ze[t]=$(F(e,We,t));let et=e[2],tt=[];for(let t=0;t<et.length;t+=1)tt[t]=N(M(e,et,t));let rt=e[4],st=[];for(let t=0;t<rt.length;t+=1)st[t]=Y(U(e,rt,t));return ze=new V({}),{c(){t=a("description"),r=o("A French-Canadian designer and developer specialized in web and product design."),s=n(),y=a("div"),b=a("div"),P=a("header"),I=a("a"),j=n(),T=a("h1"),_=o("Maxim Siebert"),O=n(),S=a("p"),B=o("Designer + Developer"),R=n(),z=a("p"),G=o("2011–"),X=o(e[5]),K=n(),Q=a("div"),W=a("div"),Z=n(),ee=a("div"),te=a("div"),re=a("p"),se=o("Project"),ae=n(),oe=a("div"),ne=a("p"),ie=o("Role"),le=n(),ce=a("div"),he=a("p"),fe=o("Year"),de=n(),ue=a("section");for(let e=0;e<Xe.length;e+=1)Xe[e].c();pe=n(),me=a("header"),ye=a("div"),be=a("p"),ve=o("Experience"),ge=n(),we=a("div"),xe=a("p"),Ee=o("Title"),De=n(),ke=a("div"),Ae=a("p"),Pe=o("Year"),Ie=n(),je=a("section");for(let e=0;e<Qe.length;e+=1)Qe[e].c();Te=n(),_e=a("section"),Oe=a("div"),Se=a("p"),Be=o("Services"),Re=n();for(let e=0;e<Ze.length;e+=1)Ze[e].c();Ve=n(),Ue=a("div"),Me=a("p"),Fe=o("Selected Clients"),Ce=n();for(let e=0;e<tt.length;e+=1)tt[e].c();He=n(),Le=a("div"),qe=a("p"),$e=o("Links"),Ne=n();for(let e=0;e<st.length;e+=1)st[e].c();Ye=n(),v(ze.$$.fragment),this.h()},l(a){const o=g('[data-svelte="svelte-qit1z1"]',document.head);t=i(o,"DESCRIPTION",{});var n=l(t);r=c(n,"A French-Canadian designer and developer specialized in web and product design."),n.forEach(h),o.forEach(h),s=f(a),y=i(a,"DIV",{class:!0});var d=l(y);b=i(d,"DIV",{class:!0});var u=l(b);P=i(u,"HEADER",{class:!0});var p=l(P);I=i(p,"A",{href:!0,class:!0}),l(I).forEach(h),j=f(p),T=i(p,"H1",{class:!0});var m=l(T);_=c(m,"Maxim Siebert"),m.forEach(h),O=f(p),S=i(p,"P",{class:!0});var v=l(S);B=c(v,"Designer + Developer"),v.forEach(h),R=f(p),z=i(p,"P",{class:!0});var x=l(z);G=c(x,"2011–"),X=c(x,e[5]),x.forEach(h),p.forEach(h),K=f(u),Q=i(u,"DIV",{class:!0});var E=l(Q);W=i(E,"DIV",{class:!0}),l(W).forEach(h),Z=f(E),ee=i(E,"DIV",{class:!0});var D=l(ee);te=i(D,"DIV",{class:!0});var k=l(te);re=i(k,"P",{});var A=l(re);se=c(A,"Project"),A.forEach(h),k.forEach(h),ae=f(D),oe=i(D,"DIV",{class:!0});var V=l(oe);ne=i(V,"P",{});var U=l(ne);ie=c(U,"Role"),U.forEach(h),V.forEach(h),le=f(D),ce=i(D,"DIV",{class:!0});var M=l(ce);he=i(M,"P",{});var F=l(he);fe=c(F,"Year"),F.forEach(h),M.forEach(h),D.forEach(h),de=f(E),ue=i(E,"SECTION",{class:!0});var C=l(ue);for(let e=0;e<Xe.length;e+=1)Xe[e].l(C);C.forEach(h),pe=f(E),me=i(E,"HEADER",{class:!0});var H=l(me);ye=i(H,"DIV",{class:!0});var L=l(ye);be=i(L,"P",{});var q=l(be);ve=c(q,"Experience"),q.forEach(h),L.forEach(h),ge=f(H),we=i(H,"DIV",{class:!0});var $=l(we);xe=i($,"P",{});var N=l(xe);Ee=c(N,"Title"),N.forEach(h),$.forEach(h),De=f(H),ke=i(H,"DIV",{class:!0});var Y=l(ke);Ae=i(Y,"P",{});var J=l(Ae);Pe=c(J,"Year"),J.forEach(h),Y.forEach(h),H.forEach(h),Ie=f(E),je=i(E,"SECTION",{class:!0});var Ge=l(je);for(let e=0;e<Qe.length;e+=1)Qe[e].l(Ge);Ge.forEach(h),Te=f(E),_e=i(E,"SECTION",{class:!0});var Je=l(_e);Oe=i(Je,"DIV",{class:!0});var Ke=l(Oe);Se=i(Ke,"P",{class:!0});var We=l(Se);Be=c(We,"Services"),We.forEach(h),Re=f(Ke);for(let e=0;e<Ze.length;e+=1)Ze[e].l(Ke);Ke.forEach(h),Ve=f(Je),Ue=i(Je,"DIV",{class:!0});var et=l(Ue);Me=i(et,"P",{class:!0});var rt=l(Me);Fe=c(rt,"Selected Clients"),rt.forEach(h),Ce=f(et);for(let e=0;e<tt.length;e+=1)tt[e].l(et);et.forEach(h),He=f(Je),Le=i(Je,"DIV",{class:!0});var at=l(Le);qe=i(at,"P",{class:!0});var ot=l(qe);$e=c(ot,"Links"),ot.forEach(h),Ne=f(at);for(let e=0;e<st.length;e+=1)st[e].l(at);at.forEach(h),Je.forEach(h),E.forEach(h),u.forEach(h),Ye=f(d),w(ze.$$.fragment,d),d.forEach(h),this.h()},h(){document.title="Maxim Siebert — Designer + Developer",d(I,"href","/"),d(I,"class","self-start inline-block mb-4 loader"),d(T,"class","mb-1 sm:mb-2"),d(S,"class","text-gray-600 dark:text-gray-400"),d(z,"class","text-gray-600 dark:text-gray-400"),d(P,"class","w-full px-4 mb-8 md:w-3/12 md:mb-0 md:sticky top-4"),d(W,"class","w-full px-4 mb-8 text-base leading-snug text-black dark:text-white lg:w-5/12 md:w-8/12 md:block md:mb-12"),d(te,"class","w-4/12 px-4 lg:w-3/12"),d(oe,"class","hidden w-4/12 px-4 sm:block"),d(ce,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),d(ee,"class","flex mb-1 sm:mb-2"),d(ue,"class","w-full mb-5 sm:mb-8 md:mb-12"),d(ye,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),d(we,"class","hidden w-4/12 px-4 sm:block"),d(ke,"class","flex justify-end w-8/12 px-4 sm:w-5/12"),d(me,"class","flex mb-1 sm:mb-2"),d(je,"class","w-full mb-5 sm:mb-8 md:mb-12"),d(Se,"class","mb-1 sm:mb-2"),d(Oe,"class","w-8/12 px-4 lg:w-3/12 sm:w-4/12"),d(Me,"class","mb-1 sm:mb-2"),d(Ue,"class","hidden w-4/12 px-4 sm:block"),d(qe,"class","mb-1 sm:mb-2"),d(Le,"class","w-5/12 px-4 text-right"),d(_e,"class","flex"),d(Q,"class","w-full ml-auto md:w-9/12 md:mt-7"),d(b,"class","flex flex-wrap items-start"),d(y,"class","flex flex-col min-h-screen py-4 text-xs text-black bg-gray-100 dark:bg-black dark:text-white")},m(e,a){p(document.head,t),p(t,r),u(e,s,a),u(e,y,a),p(y,b),p(b,P),p(P,I),p(P,j),p(P,T),p(T,_),p(P,O),p(P,S),p(S,B),p(P,R),p(P,z),p(z,G),p(z,X),p(b,K),p(b,Q),p(Q,W),W.innerHTML=J,p(Q,Z),p(Q,ee),p(ee,te),p(te,re),p(re,se),p(ee,ae),p(ee,oe),p(oe,ne),p(ne,ie),p(ee,le),p(ee,ce),p(ce,he),p(he,fe),p(Q,de),p(Q,ue);for(let e=0;e<Xe.length;e+=1)Xe[e].m(ue,null);p(Q,pe),p(Q,me),p(me,ye),p(ye,be),p(be,ve),p(me,ge),p(me,we),p(we,xe),p(xe,Ee),p(me,De),p(me,ke),p(ke,Ae),p(Ae,Pe),p(Q,Ie),p(Q,je);for(let e=0;e<Qe.length;e+=1)Qe[e].m(je,null);p(Q,Te),p(Q,_e),p(_e,Oe),p(Oe,Se),p(Se,Be),p(Oe,Re);for(let e=0;e<Ze.length;e+=1)Ze[e].m(Oe,null);p(_e,Ve),p(_e,Ue),p(Ue,Me),p(Me,Fe),p(Ue,Ce);for(let e=0;e<tt.length;e+=1)tt[e].m(Ue,null);p(_e,He),p(_e,Le),p(Le,qe),p(qe,$e),p(Le,Ne);for(let e=0;e<st.length;e+=1)st[e].m(Le,null);p(y,Ye),x(ze,y,null),Ge=!0},p(e,[t]){if((!Ge||32&t)&&m(X,e[5]),1&t){let r;for(Je=e[0],r=0;r<Je.length;r+=1){const s=H(e,Je,r);Xe[r]?Xe[r].p(s,t):(Xe[r]=L(s),Xe[r].c(),Xe[r].m(ue,null))}for(;r<Xe.length;r+=1)Xe[r].d(1);Xe.length=Je.length}if(2&t){let r;for(Ke=e[1],r=0;r<Ke.length;r+=1){const s=C(e,Ke,r);Qe[r]?Qe[r].p(s,t):(Qe[r]=q(s),Qe[r].c(),Qe[r].m(je,null))}for(;r<Qe.length;r+=1)Qe[r].d(1);Qe.length=Ke.length}if(8&t){let r;for(We=e[3],r=0;r<We.length;r+=1){const s=F(e,We,r);Ze[r]?Ze[r].p(s,t):(Ze[r]=$(s),Ze[r].c(),Ze[r].m(Oe,null))}for(;r<Ze.length;r+=1)Ze[r].d(1);Ze.length=We.length}if(4&t){let r;for(et=e[2],r=0;r<et.length;r+=1){const s=M(e,et,r);tt[r]?tt[r].p(s,t):(tt[r]=N(s),tt[r].c(),tt[r].m(Ue,null))}for(;r<tt.length;r+=1)tt[r].d(1);tt.length=et.length}if(16&t){let r;for(rt=e[4],r=0;r<rt.length;r+=1){const s=U(e,rt,r);st[r]?st[r].p(s,t):(st[r]=Y(s),st[r].c(),st[r].m(Le,null))}for(;r<st.length;r+=1)st[r].d(1);st.length=rt.length}},i(e){Ge||(E(ze.$$.fragment,e),Ge=!0)},o(e){D(ze.$$.fragment,e),Ge=!1},d(e){h(t),e&&h(s),e&&h(y),k(Xe,e),k(Qe,e),k(Ze,e),k(tt,e),k(st,e),A(ze)}}}async function G(){const e=await this.fetch("content/projects.json"),t=await e.json(),r=await this.fetch("content/experiences.json"),s=await r.json(),a=await this.fetch("content/collaborators.json"),o=await a.json(),n=await this.fetch("content/services.json"),i=await n.json(),l=await this.fetch("content/links.json");return{projects:t,experiences:s,collaborators:o,services:i,links:await l.json()}}let J='A French-Canadian designer and developer specialized in web and product design. If you\'d like to collaborate with Maxim, email him at <a href="mailto:maxim@hey.com" class="hover:text-black dark:hover:text-white hover:underline">maxim@hey.com</a>.';function X(e,t,r){let{projects:s}=t,{experiences:a}=t,{collaborators:o}=t,{services:n}=t,{links:i}=t;var l,c="";return l=new Date,r(5,c=l.getFullYear()),e.$$set=e=>{"projects"in e&&r(0,s=e.projects),"experiences"in e&&r(1,a=e.experiences),"collaborators"in e&&r(2,o=e.collaborators),"services"in e&&r(3,n=e.services),"links"in e&&r(4,i=e.links)},[s,a,o,n,i,c]}export default class extends e{constructor(e){super(),t(this,e,X,z,r,{projects:0,experiences:1,collaborators:2,services:3,links:4})}}export{G as preload};
