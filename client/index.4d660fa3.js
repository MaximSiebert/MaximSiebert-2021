import{S as e,i as a,s as r,e as t,t as s,a as l,c,b as o,d as n,f as h,g as i,h as f,j as d,k as m,l as v,n as u,o as p,m as x,q as g,p as w,r as b,u as E,v as k,w as D,x as y}from"./client.910bc6c4.js";function I(e){let a,r,p,x,g,w,b,E,k,D,y,I,j,V,P,S,M,T,$,A,H=e[3][new Date(e[0]).getMonth()]+"",Y=new Date(e[0]).getFullYear()+"";return{c(){a=t("div"),r=t("div"),p=t("p"),x=s("Ottawa – "),g=s(e[1]),w=s(" ET"),b=l(),E=t("div"),k=t("div"),D=t("p"),y=s("Updated "),I=s(H),j=l(),V=s(Y),P=l(),S=t("div"),M=t("p"),T=s("2011 – "),$=s(e[2]),A=s(" ©"),this.h()},l(t){a=c(t,"DIV",{class:!0});var s=o(a);r=c(s,"DIV",{class:!0});var l=o(r);p=c(l,"P",{});var f=o(p);x=n(f,"Ottawa – "),g=n(f,e[1]),w=n(f," ET"),f.forEach(h),l.forEach(h),b=i(s),E=c(s,"DIV",{class:!0});var d=o(E);k=c(d,"DIV",{class:!0});var m=o(k);D=c(m,"P",{});var v=o(D);y=n(v,"Updated "),I=n(v,H),j=i(v),V=n(v,Y),v.forEach(h),m.forEach(h),P=i(d),S=c(d,"DIV",{class:!0});var u=o(S);M=c(u,"P",{});var C=o(M);T=n(C,"2011 – "),$=n(C,e[2]),A=n(C," ©"),C.forEach(h),u.forEach(h),d.forEach(h),s.forEach(h),this.h()},h(){f(r,"class","w-8/12 px-4 sm:w-3/12"),f(k,"class","hidden w-8/12 px-4 sm:block"),f(S,"class","flex justify-end w-full px-4 sm:w-4/12"),f(E,"class","flex w-4/12 ml-auto sm:w-8/12"),f(a,"class","flex pt-5 mt-auto text-gray-600 sm:pt-8 md:pt-12 dark:text-gray-400")},m(e,t){d(e,a,t),m(a,r),m(r,p),m(p,x),m(p,g),m(p,w),m(a,b),m(a,E),m(E,k),m(k,D),m(D,y),m(D,I),m(D,j),m(D,V),m(E,P),m(E,S),m(S,M),m(M,T),m(M,$),m(M,A)},p(e,[a]){2&a&&v(g,e[1]),1&a&&H!==(H=e[3][new Date(e[0]).getMonth()]+"")&&v(I,H),1&a&&Y!==(Y=new Date(e[0]).getFullYear()+"")&&v(V,Y),4&a&&v($,e[2])},i:u,o:u,d(e){e&&h(a)}}}function j(e,a,r){let t;p((async()=>{fetch("https://api.github.com/repos/MaximSiebert/MaximSiebert-2021/branches/gh-pages",{headers:{Accept:"application/vnd.github.v3+json"}}).then((e=>e.json())).then((e=>{r(0,t=e.commit.commit.author.date)}))}));var s="",l="";return function e(){var a=new Date,t=a.getHours(),c=a.getMinutes(),o="am";t>=12&&(t-=12,o="pm"),r(1,s=(t=(t%=12)||12)+":"+(c=c<10?"0"+c:c)+" "+o),r(2,l=a.getFullYear()),setTimeout(e,1e3)}(),[t,s,l,["January","February","March","April","May","June","July","August","September","October","November","December"]]}class V extends e{constructor(e){super(),a(this,e,j,I,r,{})}}function P(e,a,r){const t=e.slice();return t[5]=a[r],t}function S(e,a,r){const t=e.slice();return t[8]=a[r],t}function M(e,a,r){const t=e.slice();return t[11]=a[r],t}function T(e,a,r){const t=e.slice();return t[14]=a[r],t}function $(e,a,r){const t=e.slice();return t[17]=a[r],t}function A(e){let a,r,u,p,x,g,w,b,E,k,D,y,I,j,V=e[17].title+"",P=e[17].role+"",S=e[17].year+"";return{c(){a=t("a"),r=t("div"),u=t("p"),p=s(V),x=l(),g=t("div"),w=t("p"),b=s(P),E=l(),k=t("div"),D=t("p"),y=s(S),I=l(),this.h()},l(e){a=c(e,"A",{class:!0,href:!0,target:!0,rel:!0});var t=o(a);r=c(t,"DIV",{class:!0});var s=o(r);u=c(s,"P",{});var l=o(u);p=n(l,V),l.forEach(h),s.forEach(h),x=i(t),g=c(t,"DIV",{class:!0});var f=o(g);w=c(f,"P",{});var d=o(w);b=n(d,P),d.forEach(h),f.forEach(h),E=i(t),k=c(t,"DIV",{class:!0});var m=o(k);D=c(m,"P",{});var v=o(D);y=n(v,S),v.forEach(h),m.forEach(h),I=i(t),t.forEach(h),this.h()},h(){f(r,"class","w-8/12 px-4 sm:w-4/12"),f(g,"class","hidden w-4/12 px-4 sm:block"),f(k,"class","flex justify-end w-4/12 px-4"),f(a,"class","flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),f(a,"href",j=e[17].url),f(a,"target","_blank"),f(a,"rel","noreferrer noopener")},m(e,t){d(e,a,t),m(a,r),m(r,u),m(u,p),m(a,x),m(a,g),m(g,w),m(w,b),m(a,E),m(a,k),m(k,D),m(D,y),m(a,I)},p(e,r){1&r&&V!==(V=e[17].title+"")&&v(p,V),1&r&&P!==(P=e[17].role+"")&&v(b,P),1&r&&S!==(S=e[17].year+"")&&v(y,S),1&r&&j!==(j=e[17].url)&&f(a,"href",j)},d(e){e&&h(a)}}}function H(e){let a,r,u,p,x,g,w,b,E,k,D,y,I,j,V=e[14].title+"",P=e[14].role+"",S=e[14].date+"";return{c(){a=t("a"),r=t("div"),u=t("p"),p=s(V),x=l(),g=t("div"),w=t("p"),b=s(P),E=l(),k=t("div"),D=t("p"),y=s(S),I=l(),this.h()},l(e){a=c(e,"A",{class:!0,href:!0,target:!0,rel:!0});var t=o(a);r=c(t,"DIV",{class:!0});var s=o(r);u=c(s,"P",{});var l=o(u);p=n(l,V),l.forEach(h),s.forEach(h),x=i(t),g=c(t,"DIV",{class:!0});var f=o(g);w=c(f,"P",{});var d=o(w);b=n(d,P),d.forEach(h),f.forEach(h),E=i(t),k=c(t,"DIV",{class:!0});var m=o(k);D=c(m,"P",{});var v=o(D);y=n(v,S),v.forEach(h),m.forEach(h),I=i(t),t.forEach(h),this.h()},h(){f(r,"class","w-4/12 px-4"),f(g,"class","hidden w-4/12 px-4 sm:block"),f(k,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),f(a,"class","flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),f(a,"href",j=e[14].url),f(a,"target","_blank"),f(a,"rel","noreferrer noopener")},m(e,t){d(e,a,t),m(a,r),m(r,u),m(u,p),m(a,x),m(a,g),m(g,w),m(w,b),m(a,E),m(a,k),m(k,D),m(D,y),m(a,I)},p(e,r){2&r&&V!==(V=e[14].title+"")&&v(p,V),2&r&&P!==(P=e[14].role+"")&&v(b,P),2&r&&S!==(S=e[14].date+"")&&v(y,S),2&r&&j!==(j=e[14].url)&&f(a,"href",j)},d(e){e&&h(a)}}}function Y(e){let a,r,l=e[11].title+"";return{c(){a=t("p"),r=s(l),this.h()},l(e){a=c(e,"P",{class:!0});var t=o(a);r=n(t,l),t.forEach(h),this.h()},h(){f(a,"class","text-gray-600 dark:text-gray-400")},m(e,t){d(e,a,t),m(a,r)},p(e,a){8&a&&l!==(l=e[11].title+"")&&v(r,l)},d(e){e&&h(a)}}}function C(e){let a,r,l=e[8].title+"";return{c(){a=t("p"),r=s(l),this.h()},l(e){a=c(e,"P",{class:!0});var t=o(a);r=n(t,l),t.forEach(h),this.h()},h(){f(a,"class","text-gray-600 dark:text-gray-400")},m(e,t){d(e,a,t),m(a,r)},p(e,a){4&a&&l!==(l=e[8].title+"")&&v(r,l)},d(e){e&&h(a)}}}function O(e){let a,r,l,i,u=e[5].title+"";return{c(){a=t("p"),r=t("a"),l=s(u),this.h()},l(e){a=c(e,"P",{});var t=o(a);r=c(t,"A",{href:!0,class:!0,target:!0,rel:!0});var s=o(r);l=n(s,u),s.forEach(h),t.forEach(h),this.h()},h(){f(r,"href",i=e[5].url),f(r,"class","text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white"),f(r,"target","_blank"),f(r,"rel","noreferrer noopener")},m(e,t){d(e,a,t),m(a,r),m(r,l)},p(e,a){16&a&&u!==(u=e[5].title+"")&&v(l,u),16&a&&i!==(i=e[5].url)&&f(r,"href",i)},d(e){e&&h(a)}}}function F(e){let a,r,v,u,p,I,j,F,_,N,R,J,U,q,B,z,G,K,Q,W,X,Z,ee,ae,re,te,se,le,ce,oe,ne,he,ie,fe,de,me,ve,ue,pe,xe,ge,we,be,Ee,ke,De,ye,Ie,je,Ve,Pe,Se,Me,Te,$e,Ae,He,Ye,Ce,Oe,Fe,_e,Le,Ne,Re=e[0],Je=[];for(let a=0;a<Re.length;a+=1)Je[a]=A($(e,Re,a));let Ue=e[1],qe=[];for(let a=0;a<Ue.length;a+=1)qe[a]=H(T(e,Ue,a));let Be=e[3],ze=[];for(let a=0;a<Be.length;a+=1)ze[a]=Y(M(e,Be,a));let Ge=e[2],Ke=[];for(let a=0;a<Ge.length;a+=1)Ke[a]=C(S(e,Ge,a));let Qe=e[4],We=[];for(let a=0;a<Qe.length;a+=1)We[a]=O(P(e,Qe,a));return Le=new V({}),{c(){a=l(),r=t("div"),v=t("a"),u=l(),p=t("header"),I=t("div"),j=t("h1"),F=s("Maxim Siebert"),_=l(),N=t("div"),R=l(),J=t("div"),U=t("div"),q=t("p"),B=s("Project"),z=l(),G=t("div"),K=t("p"),Q=s("Role"),W=l(),X=t("div"),Z=t("p"),ee=s("Year"),ae=l(),re=t("section"),te=t("div"),se=l(),le=t("div");for(let e=0;e<Je.length;e+=1)Je[e].c();ce=l(),oe=t("header"),ne=t("div"),he=t("div"),ie=t("p"),fe=s("Experience"),de=l(),me=t("div"),ve=t("p"),ue=s("Title"),pe=l(),xe=t("div"),ge=t("p"),we=s("Year"),be=l(),Ee=t("section"),ke=t("div");for(let e=0;e<qe.length;e+=1)qe[e].c();De=l(),ye=t("section"),Ie=t("div"),je=t("p"),Ve=s("Services"),Pe=l();for(let e=0;e<ze.length;e+=1)ze[e].c();Se=l(),Me=t("div"),Te=t("p"),$e=s("Selected Clients"),Ae=l();for(let e=0;e<Ke.length;e+=1)Ke[e].c();He=l(),Ye=t("div"),Ce=t("p"),Oe=s("Links"),Fe=l();for(let e=0;e<We.length;e+=1)We[e].c();_e=l(),x(Le.$$.fragment),this.h()},l(e){g('[data-svelte="svelte-1e6j3ni"]',document.head).forEach(h),a=i(e),r=c(e,"DIV",{class:!0});var t=o(r);v=c(t,"A",{href:!0,class:!0}),o(v).forEach(h),u=i(t),p=c(t,"HEADER",{class:!0});var s=o(p);I=c(s,"DIV",{class:!0});var l=o(I);j=c(l,"H1",{class:!0});var f=o(j);F=n(f,"Maxim Siebert"),f.forEach(h),_=i(l),N=c(l,"DIV",{class:!0}),o(N).forEach(h),l.forEach(h),R=i(s),J=c(s,"DIV",{class:!0});var d=o(J);U=c(d,"DIV",{class:!0});var m=o(U);q=c(m,"P",{});var x=o(q);B=n(x,"Project"),x.forEach(h),m.forEach(h),z=i(d),G=c(d,"DIV",{class:!0});var b=o(G);K=c(b,"P",{});var E=o(K);Q=n(E,"Role"),E.forEach(h),b.forEach(h),W=i(d),X=c(d,"DIV",{class:!0});var k=o(X);Z=c(k,"P",{});var D=o(Z);ee=n(D,"Year"),D.forEach(h),k.forEach(h),d.forEach(h),s.forEach(h),ae=i(t),re=c(t,"SECTION",{class:!0});var y=o(re);te=c(y,"DIV",{class:!0}),o(te).forEach(h),se=i(y),le=c(y,"DIV",{class:!0});var V=o(le);for(let e=0;e<Je.length;e+=1)Je[e].l(V);V.forEach(h),y.forEach(h),ce=i(t),oe=c(t,"HEADER",{class:!0});var P=o(oe);ne=c(P,"DIV",{class:!0});var S=o(ne);he=c(S,"DIV",{class:!0});var M=o(he);ie=c(M,"P",{});var T=o(ie);fe=n(T,"Experience"),T.forEach(h),M.forEach(h),de=i(S),me=c(S,"DIV",{class:!0});var $=o(me);ve=c($,"P",{});var A=o(ve);ue=n(A,"Title"),A.forEach(h),$.forEach(h),pe=i(S),xe=c(S,"DIV",{class:!0});var H=o(xe);ge=c(H,"P",{});var Y=o(ge);we=n(Y,"Year"),Y.forEach(h),H.forEach(h),S.forEach(h),P.forEach(h),be=i(t),Ee=c(t,"SECTION",{class:!0});var C=o(Ee);ke=c(C,"DIV",{class:!0});var O=o(ke);for(let e=0;e<qe.length;e+=1)qe[e].l(O);O.forEach(h),C.forEach(h),De=i(t),ye=c(t,"SECTION",{class:!0});var L=o(ye);Ie=c(L,"DIV",{class:!0});var Ne=o(Ie);je=c(Ne,"P",{class:!0});var Re=o(je);Ve=n(Re,"Services"),Re.forEach(h),Pe=i(Ne);for(let e=0;e<ze.length;e+=1)ze[e].l(Ne);Ne.forEach(h),Se=i(L),Me=c(L,"DIV",{class:!0});var Ue=o(Me);Te=c(Ue,"P",{class:!0});var Be=o(Te);$e=n(Be,"Selected Clients"),Be.forEach(h),Ae=i(Ue);for(let e=0;e<Ke.length;e+=1)Ke[e].l(Ue);Ue.forEach(h),He=i(L),Ye=c(L,"DIV",{class:!0});var Ge=o(Ye);Ce=c(Ge,"P",{class:!0});var Qe=o(Ce);Oe=n(Qe,"Links"),Qe.forEach(h),Fe=i(Ge);for(let e=0;e<We.length;e+=1)We[e].l(Ge);Ge.forEach(h),L.forEach(h),_e=i(t),w(Le.$$.fragment,t),t.forEach(h),this.h()},h(){document.title="Maxim Siebert – Designer & Developer",f(v,"href","/"),f(v,"class","self-start inline-block px-4 mb-5 loader"),f(j,"class","inline-block mb-1 sm:mb-2 md:mb-0"),f(N,"class","block text-gray-600 dark:text-gray-400 md:hidden"),f(I,"class","w-full px-4 mb-5 sm:mb-8 lg:w-3/12 md:w-4/12 md:mb-0"),f(U,"class","w-4/12 px-4"),f(G,"class","hidden w-4/12 px-4 sm:block"),f(X,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),f(J,"class","flex w-full ml-auto md:w-8/12"),f(p,"class","flex flex-wrap mb-1 sm:mb-2"),f(te,"class","hidden w-4/12 px-4 text-gray-600 lg:w-3/12 dark:text-gray-400 md:block"),f(le,"class","w-full ml-auto md:w-8/12"),f(re,"class","flex flex-wrap mb-5 sm:mb-8 md:mb-12"),f(he,"class","w-4/12 px-4"),f(me,"class","hidden w-4/12 px-4 sm:block"),f(xe,"class","flex justify-end w-8/12 px-4 sm:w-4/12"),f(ne,"class","flex w-full ml-auto md:w-8/12"),f(oe,"class","flex mb-1 sm:mb-2"),f(ke,"class","w-full ml-auto md:w-8/12"),f(Ee,"class","flex flex-wrap mb-5 sm:mb-8 md:mb-12"),f(je,"class","mb-1 sm:mb-2"),f(Ie,"class","w-8/12 px-4 sm:w-4/12"),f(Te,"class","mb-1 sm:mb-2"),f(Me,"class","hidden w-4/12 px-4 sm:block"),f(Ce,"class","mb-1 sm:mb-2"),f(Ye,"class","w-4/12 px-4 text-right"),f(ye,"class","flex flex-wrap w-full ml-auto md:w-8/12"),f(r,"class","flex flex-col min-h-screen py-5 text-xs bg-gray-100 lg:px-4 dark:bg-black dark:text-white")},m(e,t){d(e,a,t),d(e,r,t),m(r,v),m(r,u),m(r,p),m(p,I),m(I,j),m(j,F),m(I,_),m(I,N),N.innerHTML=L,m(p,R),m(p,J),m(J,U),m(U,q),m(q,B),m(J,z),m(J,G),m(G,K),m(K,Q),m(J,W),m(J,X),m(X,Z),m(Z,ee),m(r,ae),m(r,re),m(re,te),te.innerHTML=L,m(re,se),m(re,le);for(let e=0;e<Je.length;e+=1)Je[e].m(le,null);m(r,ce),m(r,oe),m(oe,ne),m(ne,he),m(he,ie),m(ie,fe),m(ne,de),m(ne,me),m(me,ve),m(ve,ue),m(ne,pe),m(ne,xe),m(xe,ge),m(ge,we),m(r,be),m(r,Ee),m(Ee,ke);for(let e=0;e<qe.length;e+=1)qe[e].m(ke,null);m(r,De),m(r,ye),m(ye,Ie),m(Ie,je),m(je,Ve),m(Ie,Pe);for(let e=0;e<ze.length;e+=1)ze[e].m(Ie,null);m(ye,Se),m(ye,Me),m(Me,Te),m(Te,$e),m(Me,Ae);for(let e=0;e<Ke.length;e+=1)Ke[e].m(Me,null);m(ye,He),m(ye,Ye),m(Ye,Ce),m(Ce,Oe),m(Ye,Fe);for(let e=0;e<We.length;e+=1)We[e].m(Ye,null);m(r,_e),b(Le,r,null),Ne=!0},p(e,[a]){if(1&a){let r;for(Re=e[0],r=0;r<Re.length;r+=1){const t=$(e,Re,r);Je[r]?Je[r].p(t,a):(Je[r]=A(t),Je[r].c(),Je[r].m(le,null))}for(;r<Je.length;r+=1)Je[r].d(1);Je.length=Re.length}if(2&a){let r;for(Ue=e[1],r=0;r<Ue.length;r+=1){const t=T(e,Ue,r);qe[r]?qe[r].p(t,a):(qe[r]=H(t),qe[r].c(),qe[r].m(ke,null))}for(;r<qe.length;r+=1)qe[r].d(1);qe.length=Ue.length}if(8&a){let r;for(Be=e[3],r=0;r<Be.length;r+=1){const t=M(e,Be,r);ze[r]?ze[r].p(t,a):(ze[r]=Y(t),ze[r].c(),ze[r].m(Ie,null))}for(;r<ze.length;r+=1)ze[r].d(1);ze.length=Be.length}if(4&a){let r;for(Ge=e[2],r=0;r<Ge.length;r+=1){const t=S(e,Ge,r);Ke[r]?Ke[r].p(t,a):(Ke[r]=C(t),Ke[r].c(),Ke[r].m(Me,null))}for(;r<Ke.length;r+=1)Ke[r].d(1);Ke.length=Ge.length}if(16&a){let r;for(Qe=e[4],r=0;r<Qe.length;r+=1){const t=P(e,Qe,r);We[r]?We[r].p(t,a):(We[r]=O(t),We[r].c(),We[r].m(Ye,null))}for(;r<We.length;r+=1)We[r].d(1);We.length=Qe.length}},i(e){Ne||(E(Le.$$.fragment,e),Ne=!0)},o(e){k(Le.$$.fragment,e),Ne=!1},d(e){e&&h(a),e&&h(r),D(Je,e),D(qe,e),D(ze,e),D(Ke,e),D(We,e),y(Le)}}}async function _(){const e=await this.fetch("content/projects.json"),a=await e.json(),r=await this.fetch("content/experiences.json"),t=await r.json(),s=await this.fetch("content/collaborators.json"),l=await s.json(),c=await this.fetch("content/services.json"),o=await c.json(),n=await this.fetch("content/links.json");return{projects:a,experiences:t,collaborators:l,services:o,links:await n.json()}}let L='is a French Canadian designer & developer. He\'s currently a Principal Designer at <a href="https://blunt.af/" class="hover:text-black dark:hover:text-white hover:underline" target="_blank" rel="noreferrer noopener">Peggy</a> and freelances through his studio <a href="https://blunt.af/" class="hover:text-black dark:hover:text-white hover:underline" target="_blank" rel="noreferrer noopener">Blunt</a>. This site lists most of the work he\'s done over the years, if you\'d like to discuss new commissions or collaborate with Maxim email him at <a href="mailto:maxim@hey.com" class="hover:text-black dark:hover:text-white hover:underline">maxim@hey.com</a>.';function N(e,a,r){let{projects:t}=a,{experiences:s}=a,{collaborators:l}=a,{services:c}=a,{links:o}=a;return e.$$set=e=>{"projects"in e&&r(0,t=e.projects),"experiences"in e&&r(1,s=e.experiences),"collaborators"in e&&r(2,l=e.collaborators),"services"in e&&r(3,c=e.services),"links"in e&&r(4,o=e.links)},[t,s,l,c,o]}export default class extends e{constructor(e){super(),a(this,e,N,F,r,{projects:0,experiences:1,collaborators:2,services:3,links:4})}}export{_ as preload};
