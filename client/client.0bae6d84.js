function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return b(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let E;function S(t){E=t}function j(){if(!E)throw new Error("Function called outside component initialization");return E}const R=[],N=[],A=[],P=[],k=Promise.resolve();let L=!1;function O(t){A.push(t)}let q=!1;const U=new Set;function C(){if(!q){q=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];S(e),T(e.$$)}for(S(null),R.length=0;N.length;)N.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];U.has(e)||(U.add(e),e())}A.length=0}while(R.length);for(;P.length;)P.pop()();L=!1,q=!1,U.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const I=new Set;let B;function J(){B={r:0,c:[],p:B}}function K(){B.r||o(B.c),B=B.p}function M(t,e){t&&t.i&&(I.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),B.c.push((()=>{I.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function D(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r,c){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,r),c||O((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(O)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(R.push(t),L||(L=!0,k.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,c,i,a,l=[-1]){const u=E;S(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&W(e,t)),n})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=y(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&M(e.$$.fragment),F(e,n.target,n.anchor,n.customElement),C()}S(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={};class nt extends Q{constructor(t){super(),X(this,t,null,null,c,{})}}function rt(t){let e,n,r,o;n=new nt({});const s=t[1].default,c=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(s,t,t[0],null);return{c(){e=d("main"),Y(n.$$.fragment),r=m(),c&&c.c()},l(t){e=v(t,"MAIN",{});var o=y(e);z(n.$$.fragment,o),r=_(o),c&&c.l(o),o.forEach(f)},m(t,s){u(t,e,s),F(n,e,null),l(e,r),c&&c.m(e,null),o=!0},p(t,[e]){c&&c.p&&(!o||1&e)&&a(c,s,t,t[0],e,null,null)},i(t){o||(M(n.$$.fragment,t),M(c,t),o=!0)},o(t){V(n.$$.fragment,t),V(c,t),o=!1},d(t){t&&f(e),G(n),c&&c.d(t)}}}function ot(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class st extends Q{constructor(t){super(),X(this,t,ot,rt,c,{})}}function ct(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=v(t,"PRE",{});var o=y(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&f(e)}}}function it(e){let n,r,o,s,c,i,a,p,$,E=e[1].message+"";document.title=n=e[0];let S=e[2]&&e[1].stack&&ct(e);return{c(){r=m(),o=d("h1"),s=h(e[0]),c=m(),i=d("p"),a=h(E),p=m(),S&&S.c(),$=g()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=v(t,"H1",{});var n=y(o);s=b(n,e[0]),n.forEach(f),c=_(t),i=v(t,"P",{});var l=y(i);a=b(l,E),l.forEach(f),p=_(t),S&&S.l(t),$=g()},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,i,e),l(i,a),u(t,p,e),S&&S.m(t,e),u(t,$,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&E!==(E=t[1].message+"")&&x(a,E),t[2]&&t[1].stack?S?S.p(t,e):(S=ct(t),S.c(),S.m($.parentNode,$)):S&&(S.d(1),S=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(i),t&&f(p),S&&S.d(t),t&&f($)}}}function at(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class lt extends Q{constructor(t){super(),X(this,t,at,it,c,{status:0,error:1})}}function ut(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&Y(n.$$.fragment),r=g()},l(t){n&&z(n.$$.fragment,t),r=g()},m(t,e){n&&F(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?D(s,[H(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){J();const t=n;V(t.$$.fragment,1,0,(()=>{G(t,1)})),K()}c?(n=new c(i()),Y(n.$$.fragment),M(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&M(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&G(n,t)}}}function ft(t){let e,n;return e=new lt({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function pt(t){let e,n,r,o;const s=[ft,ut],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(J(),V(c[a],1,1,(()=>{c[a]=null})),K(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){V(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function dt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[pt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new st({props:s}),{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?D(o,[4&e&&{segment:t[2][0]},8&e&&H(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function ht(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,j().$$.after_update.push(u),f=et,p=r,j().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,i,a,r,l]}class mt extends Q{constructor(t){super(),X(this,t,ht,dt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const gt=[/^\/content\/collaborators\.json$/,/^\/content\/experiences\.json$/,/^\/content\/projects\.json$/,/^\/content\/services\.json$/,/^\/content\/links\.json$/],$t=[{js:()=>Promise.all([import("./index.c1cc2cc9.js"),__inject_styles(["client-6979b1e4.css"])]).then((function(t){return t[0]}))}],yt=[{pattern:/^\/$/,parts:[{i:0}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function vt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function bt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let _t,xt=1;const wt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Et={};let St,jt;function Rt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Nt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(St))return null;let e=t.pathname.slice(St.length);if(""===e&&(e="/"),!gt.some((t=>t.test(e))))for(let n=0;n<yt.length;n+=1){const r=yt[n],o=r.pattern.exec(e);if(o){const n=Rt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function At(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=bt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Nt(o);if(s){Lt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),wt.pushState({id:_t},"",o.href)}}function Pt(){return{x:pageXOffset,y:pageYOffset}}function kt(t){if(Et[_t]=Pt(),t.state){const e=Nt(new URL(location.href));e?Lt(e,t.state.id):location.href=location.href}else xt=xt+1,function(t){_t=t}(xt),wt.replaceState({id:_t},"",location.href)}function Lt(t,e,n,r){return vt(this,void 0,void 0,(function*(){const o=!!e;if(o)_t=e;else{const t=Pt();Et[_t]=t,_t=e=++xt,Et[_t]=n?t:{x:0,y:0}}if(yield jt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Et[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Et[_t]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ot(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let qt,Ut=null;function Ct(t){const e=bt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Nt(new URL(t,Ot(document)));if(e)Ut&&t===Ut.href||(Ut={href:t,promise:Zt(e)}),Ut.promise}(e.href)}function Tt(t){clearTimeout(qt),qt=setTimeout((()=>{Ct(t)}),20)}function It(t,e={noscroll:!1,replaceState:!1}){const n=Nt(new URL(t,Ot(document)));return n?(wt[e.replaceState?"replaceState":"pushState"]({id:_t},"",t),Lt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Bt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Jt,Kt,Mt,Vt=!1,Dt=[],Ht="{}";const Yt={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:tt(null),session:tt(Bt&&Bt.session)};let zt,Ft,Gt;function Wt(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Xt(t){return vt(this,void 0,void 0,(function*(){Jt&&Yt.preloading.set(!0);const e=function(t){return Ut&&Ut.href===t.href?Ut.promise:Zt(t)}(t),n=Kt={},r=yield e,{redirect:o}=r;if(n===Kt)if(o)yield It(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Qt(n,e,Wt(e,t.page))}}))}function Qt(t,e,n){return vt(this,void 0,void 0,(function*(){Yt.page.set(n),Yt.preloading.set(!1),Jt?Jt.$set(e):(e.stores={page:{subscribe:Yt.page.subscribe},preloading:{subscribe:Yt.preloading.subscribe},session:Yt.session},e.level0={props:yield Mt},e.notify=Yt.page.notify,Jt=new mt({target:Gt,props:e,hydrate:!0})),Dt=t,Ht=JSON.stringify(n.query),Vt=!0,Ft=!1}))}function Zt(t){return vt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Mt){const t=()=>({});Mt=Bt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},zt)}let i,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>vt(this,void 0,void 0,(function*(){const f=r[i];if(function(t,e,n,r){if(r!==Ht)return!0;const o=Dt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,o)&&(u=!0),s.segments[a]=r[i+1],!e)return{segment:f};const p=a++;if(!Ft&&!u&&Dt[i]&&Dt[i].part===e.i)return Dt[i];u=!1;const{default:d,preload:h}=yield $t[e.i].js();let m;return m=Vt||!Bt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},zt):{}:Bt.preloaded[i+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var te,ee,ne;Yt.session.subscribe((t=>vt(void 0,void 0,void 0,(function*(){if(zt=t,!Vt)return;Ft=!0;const e=Nt(new URL(location.href)),n=Kt={},{redirect:r,props:o,branch:s}=yield Zt(e);n===Kt&&(r?yield It(r.location,{replaceState:!0}):yield Qt(s,o,Wt(o,e.page)))})))),te={target:document.querySelector("#sapper")},ee=te.target,Gt=ee,ne=Bt.baseUrl,St=ne,jt=Xt,"scrollRestoration"in wt&&(wt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{wt.scrollRestoration="auto"})),addEventListener("load",(()=>{wt.scrollRestoration="manual"})),addEventListener("click",At),addEventListener("popstate",kt),addEventListener("touchstart",Ct),addEventListener("mousemove",Tt),Bt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Bt;Mt||(Mt=o&&o[0]);const i={error:c,status:s,session:r,level0:{props:Mt},level1:{props:{status:s,error:c},component:lt},segments:o},a=Rt(n);Qt([],i,{host:t,path:e,query:a,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;wt.replaceState({id:xt},"",e);const n=Nt(new URL(location.href));if(n)return Lt(n,xt,!0,t)}));export{Q as S,m as a,y as b,v as c,b as d,d as e,f,_ as g,$ as h,X as i,u as j,l as k,x as l,p as m,t as n,w as q,c as s,h as t};

import __inject_styles from './inject_styles.5607aec6.js';