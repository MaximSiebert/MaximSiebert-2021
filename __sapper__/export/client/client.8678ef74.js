function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function x(t){return b(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let _;function k(t){_=t}function S(){if(!_)throw new Error("Function called outside component initialization");return _}const j=[],L=[],N=[],R=[],A=Promise.resolve();let P=!1;function C(t){N.push(t)}let q=!1;const O=new Set;function I(){if(!q){q=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];k(e),T(e.$$)}for(k(null),j.length=0;L.length;)L.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];O.has(e)||(O.add(e),e())}N.length=0}while(j.length);for(;R.length;)R.pop()();P=!1,q=!1,O.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const U=new Set;let B;function V(){B={r:0,c:[],p:B}}function D(){B.r||o(B.c),B=B.p}function M(t,e){t&&t.i&&(U.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),B.c.push((()=>{U.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function K(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;void 0!==o&&(c=c.slice(),c[o]=s);const i=t&&(e.current=t)(c);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(V(),J(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),D())})):e.block.d(1),i.c(),M(i,1),i.m(e.mount(),e.anchor),a=!0),e.block=i,e.blocks&&(e.blocks[r]=i),a&&I()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=S();if(t.then((t=>{k(n),r(e.then,1,e.value,t),k(null)}),(t=>{if(k(n),r(e.catch,2,e.error,t),k(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function Y(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r,c){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,r),c||C((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(C)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(j.push(t),P||(P=!0,A.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,c,i,a,l=[-1]){const u=_;k(e);const d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&Q(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&M(e.$$.fragment),G(e,n.target,n.anchor,n.customElement),I()}k(u)}class tt{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={};class ot extends tt{constructor(t){super(),Z(this,t,null,null,c,{})}}function st(t){let e,n,r,o,s,c;n=new ot({});const d=t[1].default,h=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(d,t,t[0],null);return{c(){e=p("main"),H(n.$$.fragment),r=m(),o=p("div"),s=m(),h&&h.c(),this.h()},l(t){e=v(t,"MAIN",{});var c=y(e);F(n.$$.fragment,c),r=x(c),o=v(c,"DIV",{id:!0,class:!0}),y(o).forEach(f),s=x(c),h&&h.l(c),c.forEach(f),this.h()},h(){$(o,"id","cursor"),$(o,"class","absolute w-2 h-2 duration-100 ease-in-out bg-black rounded-full pointer-events-none dark:bg-white -top-10 -left-10")},m(t,i){u(t,e,i),G(n,e,null),l(e,r),l(e,o),l(e,s),h&&h.m(e,null),c=!0},p(t,[e]){h&&h.p&&(!c||1&e)&&a(h,d,t,t[0],e,null,null)},i(t){c||(M(n.$$.fragment,t),M(h,t),c=!0)},o(t){J(n.$$.fragment,t),J(h,t),c=!1},d(t){t&&f(e),W(n),h&&h.d(t)}}}function ct(t,e,n){let{$$slots:r={},$$scope:o}=e;var s;return s=()=>{const t=document.getElementById("cursor");document.addEventListener("mousemove",(function(e){let n=e.pageX,r=e.pageY;t.style.left=n+"px",t.style.top=r+"px"})),[].forEach.call(document.getElementsByTagName("a"),(function(e){e.addEventListener("click",(function(t){let e=t.pageX,n=t.pageY,r=document.createElement("div");r.className="dot",r.style.left=e+"px",r.style.top=n+"px",document.body.appendChild(r)})),e.addEventListener("mouseover",(function(){t.style.width="0.75rem",t.style.height="0.75rem"})),e.addEventListener("mouseleave",(function(){t.style.width="0.5rem",t.style.height="0.5rem"}))})),window.addEventListener("resize",(function(){document.querySelectorAll(".dot").forEach((t=>t.remove()))}))},S().$$.on_mount.push(s),t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class it extends tt{constructor(t){super(),Z(this,t,ct,st,c,{})}}function at(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){e=v(t,"PRE",{});var o=y(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function lt(e){let n,r,o,s,c,i,a,d,g,_,k,S,j,L;document.title=n="Maxim Siebert – "+e[0];let N=e[2]&&e[1].stack&&at(e);return{c(){r=m(),o=p("div"),s=p("div"),c=p("a"),i=h("Back home"),a=m(),d=p("div"),g=p("h1"),_=h(e[0]),k=m(),S=p("p"),j=h("Ceci n'est pas une page."),L=m(),N&&N.c(),this.h()},l(t){w('[data-svelte="svelte-1e46zjp"]',document.head).forEach(f),r=x(t),o=v(t,"DIV",{class:!0});var n=y(o);s=v(n,"DIV",{class:!0});var l=y(s);c=v(l,"A",{href:!0,class:!0});var u=y(c);i=b(u,"Back home"),u.forEach(f),a=x(l),d=v(l,"DIV",{class:!0});var p=y(d);g=v(p,"H1",{class:!0});var h=y(g);_=b(h,e[0]),h.forEach(f),k=x(p),S=v(p,"P",{class:!0});var m=y(S);j=b(m,"Ceci n'est pas une page."),m.forEach(f),L=x(p),N&&N.l(p),p.forEach(f),l.forEach(f),n.forEach(f),this.h()},h(){$(c,"href","/"),$(c,"class","self-start inline-block px-4 mb-4 loader"),$(g,"class","text-sm"),$(S,"class","text-gray-600 dark:text-gray-400"),$(d,"class","px-4"),$(s,"class","w-full max-w-2xl mx-auto"),$(o,"class","flex flex-col min-h-screen py-4 overflow-y-scroll text-xs bg-gray-100 lg:py-24 md:py-14 dark:bg-black dark:text-white")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),l(s,c),l(c,i),l(s,a),l(s,d),l(d,g),l(g,_),l(d,k),l(d,S),l(S,j),l(d,L),N&&N.m(d,null)},p(t,[e]){1&e&&n!==(n="Maxim Siebert – "+t[0])&&(document.title=n),1&e&&E(_,t[0]),t[2]&&t[1].stack?N?N.p(t,e):(N=at(t),N.c(),N.m(d,null)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),N&&N.d()}}}function ut(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class ft extends tt{constructor(t){super(),Z(this,t,ut,lt,c,{status:0,error:1})}}function dt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&H(n.$$.fragment),r=g()},l(t){n&&F(n.$$.fragment,t),r=g()},m(t,e){n&&G(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?z(s,[X(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){V();const t=n;J(t.$$.fragment,1,0,(()=>{W(t,1)})),D()}c?(n=new c(i()),H(n.$$.fragment),M(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&M(n.$$.fragment,t),o=!0)},o(t){n&&J(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&W(n,t)}}}function pt(t){let e,n;return e=new ft({props:{error:t[0],status:t[1]}}),{c(){H(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){G(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function ht(t){let e,n,r,o;const s=[pt,dt],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(V(),J(c[a],1,1,(()=>{c[a]=null})),D(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){J(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function mt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new it({props:s}),{c(){H(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=12&e?z(o,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){W(n,t)}}}function gt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:l}=e;var u,f,d;return u=l,S().$$.after_update.push(u),f=rt,d=r,S().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,i,a,r,l]}class $t extends tt{constructor(t){super(),Z(this,t,gt,mt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const yt=[/^\/content\/collaborators\.json$/,/^\/content\/experiences\.json$/,/^\/content\/projects\.json$/,/^\/content\/services\.json$/,/^\/content\/links\.json$/],vt=[{js:()=>Promise.all([import("./index.5646081a.js"),__inject_styles(["client-29b739b7.css"])]).then((function(t){return t[0]}))}],bt=[{pattern:/^\/$/,parts:[{i:0}]}];
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
function xt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function Et(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let wt,_t=1;const kt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},St={};let jt,Lt;function Nt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Rt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt))return null;let e=t.pathname.slice(jt.length);if(""===e&&(e="/"),!yt.some((t=>t.test(e))))for(let n=0;n<bt.length;n+=1){const r=bt[n],o=r.pattern.exec(e);if(o){const n=Nt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function At(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Et(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Rt(o);if(s){qt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),kt.pushState({id:wt},"",o.href)}}function Pt(){return{x:pageXOffset,y:pageYOffset}}function Ct(t){if(St[wt]=Pt(),t.state){const e=Rt(new URL(location.href));e?qt(e,t.state.id):location.href=location.href}else _t=_t+1,function(t){wt=t}(_t),kt.replaceState({id:wt},"",location.href)}function qt(t,e,n,r){return xt(this,void 0,void 0,(function*(){const o=!!e;if(o)wt=e;else{const t=Pt();St[wt]=t,wt=e=++_t,St[wt]=n?t:{x:0,y:0}}if(yield Lt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=St[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),St[wt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ot(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let It,Tt=null;function Ut(t){const e=Et(t.target);e&&"prefetch"===e.rel&&function(t){const e=Rt(new URL(t,Ot(document)));if(e)Tt&&t===Tt.href||(Tt={href:t,promise:ee(e)}),Tt.promise}(e.href)}function Bt(t){clearTimeout(It),It=setTimeout((()=>{Ut(t)}),20)}function Vt(t,e={noscroll:!1,replaceState:!1}){const n=Rt(new URL(t,Ot(document)));return n?(kt[e.replaceState?"replaceState":"pushState"]({id:wt},"",t),qt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Dt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Mt,Jt,Kt,Yt=!1,zt=[],Xt="{}";const Ht={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:nt(null),session:nt(Dt&&Dt.session)};let Ft,Gt,Wt;function Qt(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Zt(t){return xt(this,void 0,void 0,(function*(){Mt&&Ht.preloading.set(!0);const e=function(t){return Tt&&Tt.href===t.href?Tt.promise:ee(t)}(t),n=Jt={},r=yield e,{redirect:o}=r;if(n===Jt)if(o)yield Vt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield te(n,e,Qt(e,t.page))}}))}function te(t,e,n){return xt(this,void 0,void 0,(function*(){Ht.page.set(n),Ht.preloading.set(!1),Mt?Mt.$set(e):(e.stores={page:{subscribe:Ht.page.subscribe},preloading:{subscribe:Ht.preloading.subscribe},session:Ht.session},e.level0={props:yield Kt},e.notify=Ht.page.notify,Mt=new $t({target:Wt,props:e,hydrate:!0})),zt=t,Xt=JSON.stringify(n.query),Yt=!0,Gt=!1}))}function ee(t){return xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Kt){const t=()=>({});Kt=Dt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Ft)}let i,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>xt(this,void 0,void 0,(function*(){const f=r[i];if(function(t,e,n,r){if(r!==Xt)return!0;const o=zt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,o)&&(u=!0),s.segments[a]=r[i+1],!e)return{segment:f};const d=a++;if(!Gt&&!u&&zt[i]&&zt[i].part===e.i)return zt[i];u=!1;const{default:p,preload:h}=yield vt[e.i].js();let m;return m=Yt||!Dt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ft):{}:Dt.preloaded[i+1],s[`level${d}`]={component:p,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var ne,re,oe;Ht.session.subscribe((t=>xt(void 0,void 0,void 0,(function*(){if(Ft=t,!Yt)return;Gt=!0;const e=Rt(new URL(location.href)),n=Jt={},{redirect:r,props:o,branch:s}=yield ee(e);n===Jt&&(r?yield Vt(r.location,{replaceState:!0}):yield te(s,o,Qt(o,e.page)))})))),ne={target:document.querySelector("#sapper")},re=ne.target,Wt=re,oe=Dt.baseUrl,jt=oe,Lt=Zt,"scrollRestoration"in kt&&(kt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{kt.scrollRestoration="auto"})),addEventListener("load",(()=>{kt.scrollRestoration="manual"})),addEventListener("click",At),addEventListener("popstate",Ct),addEventListener("touchstart",Ut),addEventListener("mousemove",Bt),Dt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Dt;Kt||(Kt=o&&o[0]);const i={error:c,status:s,session:r,level0:{props:Kt},level1:{props:{status:s,error:c},component:ft},segments:o},a=Nt(n);te([],i,{host:t,path:e,query:a,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;kt.replaceState({id:_t},"",e);const n=Rt(new URL(location.href));if(n)return qt(n,_t,!0,t)}));export{tt as S,m as a,y as b,v as c,b as d,p as e,f,x as g,K as h,Z as i,$ as j,u as k,l,E as m,t as n,H as o,F as p,w as q,G as r,c as s,h as t,Y as u,M as v,J as w,d as x,W as y};

import __inject_styles from './inject_styles.5607aec6.js';