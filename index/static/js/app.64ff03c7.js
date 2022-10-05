(function(){"use strict";var e={8736:function(e,n,t){var i=t(9242),o=t(3396);function a(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var s=t(89);const r={},u=(0,s.Z)(r,[["render",a]]);var l=u,c=t(5431);(0,c.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=t(678);const g={class:"h-screen flex flex-col"},f={class:"flex-grow overflow-y-auto flex flex-col"},h={class:"w-full"},m=["src"],v={class:"flex-grow"};function p(e,n,t,i,a,s){const r=(0,o.up)("NavBar"),u=(0,o.up)("VueHorizontal"),l=(0,o.up)("router-view"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(r),(0,o._)("div",f,[(0,o._)("div",h,[(0,o.Wm)(u,{"button-between":!1},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.imgList,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"w-full"},[(0,o._)("img",{src:e,class:"w-full h-auto",alt:""},null,8,m)])))),128))])),_:1})]),(0,o._)("div",v,[(0,o.Wm)(l),(0,o.Wm)(c)])])])}var w=t(4870),b=t(7139);const _=e=>((0,o.dD)("data-v-0a21a4a8"),e=e(),(0,o.Cn)(),e),k={class:"md:flex bg-black bg-opacity-75 p-2 justify-between justify-items-stretch z-30"},y=_((()=>(0,o._)("div",{class:"md:flex-grow"},null,-1))),z={class:"md:hidden text-white text-right leading-normal"},C={class:"drop-list-normal"},S=_((()=>(0,o._)("div",{class:"md:flex-grow"},null,-1)));function x(e,n,t,a,s,r){const u=(0,o.up)("OnClickOutside");return(0,o.wg)(),(0,o.j4)(u,{onTrigger:n[9]||(n[9]=()=>{e.navListBtn=0,e.mobileNav=!1})},{default:(0,o.w5)((()=>[(0,o._)("div",k,[y,(0,o._)("div",z,[(0,o._)("span",{class:"material-icons inline-block p-1 hover:bg-white hover:text-black rounded duration-300",onClick:n[0]||(n[0]=n=>e.mobileNav=!e.mobileNav)},"menu")]),(0,o._)("div",{class:(0,b.C_)({hidden:!e.mobileNav,"md:flex":!0})},[(0,o._)("div",{class:"button",onClick:n[1]||(n[1]=n=>e.$router.push("/"))},(0,b.zw)(e.dict.home[e.language]),1),(0,o._)("div",{class:"button",onClick:n[2]||(n[2]=n=>e.$router.push("/games"))},(0,b.zw)(e.dict.event_list[e.language]),1),(0,o._)("div",{class:"button",onClick:n[3]||(n[3]=n=>e.$router.push("/news"))},(0,b.zw)(e.dict.news[e.language]),1),(0,o._)("div",{class:"button",onClick:n[4]||(n[4]=n=>e.windowOpen("https://sports.nsysu.edu.tw/registration/#/login"))},(0,b.zw)(e.dict.registration[e.language]),1),(0,o._)("div",{onClick:n[6]||(n[6]=n=>e.navListBtn=5==e.navListBtn?0:5),class:"button"},[(0,o._)("span",null,(0,b.zw)(e.dict.links[e.language]),1),(0,o.wy)((0,o._)("div",C,[(0,o._)("div",null,(0,b.zw)(e.dict.links.sublink.epidemic[e.language]),1),(0,o._)("div",null,(0,b.zw)(e.dict.links.sublink.media[e.language]),1),(0,o._)("div",{onClick:n[5]||(n[5]=n=>e.windowOpen("https://www.nsysu.edu.tw/"))},(0,b.zw)(e.dict.links.sublink.nsysu[e.language]),1)],512),[[i.F8,5==e.navListBtn]])]),"en_us"==e.language?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:n[7]||(n[7]=n=>e.language="zh_tw"),class:"button"},"中文")):(0,o.kq)("",!0),"zh_tw"==e.language?((0,o.wg)(),(0,o.iD)("div",{key:1,onClick:n[8]||(n[8]=n=>e.language="en_us"),class:"button"},"ENGLISH")):(0,o.kq)("",!0)],2),S])])),_:1})}t(6699);var O=t(65),N=JSON.parse('{"home":{"en_us":"Home","zh_tw":"首頁"},"event_list":{"en_us":"Events","zh_tw":"賽事資訊","sublink":{"nfcc":{"en_us":"NSYSU Freshman Cup Championships","zh_tw":"新生盃錦標賽"},"nisg":{"en_us":"NSYSU Interdepartmental Sports Games","zh_tw":"系際運動大會"},"nao":{"en_us":"NSYSU Athletics Open","zh_tw":"中山田徑公開賽"},"others":{"en_us":"Others","zh_tw":"其他賽事"}}},"news":{"en_us":"News","zh_tw":"最新消息"},"registration":{"en_us":"Registration","zh_tw":"報名系統"},"school_team":{"en_us":"School Team","zh_tw":"校隊簡介","sublink":{"ball_games":{"en_us":"Ball Games","zh_tw":"球類運動"},"others":{"en_us":"Others","zh_tw":"其他運動","sublink":{"athletics":{"en_us":"Athletics","zh_tw":"田徑隊"},"swimming_men":{"en_us":"Swimming (Men)","zh_tw":"游泳隊"},"swimming_women":{"en_us":"Swimming (Women)","zh_tw":"游泳隊"},"archery":{"en_us":"Archery","zh_tw":"射箭隊"},"frisbee":{"en_us":"Frisbee","zh_tw":"飛盤隊"},"sailing":{"en_us":"Sailing","zh_tw":"風帆隊"}}}}},"links":{"en_us":"Links","zh_tw":"其他頁面","sublink":{"about":{"en_us":"About NSGEC","zh_tw":"關於執委會"},"epidemic":{"en_us":"Epidemic Prevention","zh_tw":"防疫專區"},"media":{"en_us":"Photos & Videos","zh_tw":"影音資訊"},"nsysu":{"en_us":"NSYSU Homepage","zh_tw":"中山首頁"}}}}'),j=t(6652),L=(0,o.aZ)({setup(){const e=(0,O.oR)(),n=N,t=(0,w.iH)(0);navigator.language.includes("en")&&e.commit("setLanguage","en_us");const i=(0,w.iH)(e.state.language);return(0,o.YP)(i,(()=>{e.commit("changeLang",i.value)})),{navListBtn:t,mobileNav:(0,w.iH)(!1),dict:n,language:i,ballGamesList:["mens_basketball","womens_basketball"],othersList:["athletics","swimming_men","swimming_women","archery","frisbee","sailing"],windowOpen:e=>{window.open(e)}}},components:{OnClickOutside:j.vo}});const E=(0,s.Z)(L,[["render",x],["__scopeId","data-v-0a21a4a8"]]);var A=E;const P={class:"bg-black p-5 flex"},B=(0,o.uE)('<div class="flex-grow"></div><div class="text-white font-medium"><div>中山大學體育賽事執行委員會</div><div>NSYSU Sports Games Executive Committee</div><div>804201 高雄市鼓山區蓮海路70號</div><div>國立中山大學體育組</div><hr class="my-1"><div class="text-sm">本系統由田徑隊協助建置</div><div class="text-xs">© 2022 Ryan P. H. Chang</div></div><div class="flex-grow"></div>',3),H=[B];function T(e,n,t,i,a,s){return(0,o.wg)(),(0,o.iD)("div",P,H)}var F=(0,o.aZ)({setup(){return{}}});const D=(0,s.Z)(F,[["render",T]]);var Z=D,Y=t(3823),q=(0,o.aZ)({setup(){const e=(0,w.qj)(["https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/02.jpg","https://ryanxuan930.github.io/cdn/nsysu_athletics/slideshow/03.jpg"]);return{imgList:e}},components:{NavBar:A,Footer:Z,VueHorizontal:Y.Z}});const G=(0,s.Z)(q,[["render",p]]);var I=G;const U=[{path:"/",name:"home",component:I,children:[{path:"/",name:"homepage",component:()=>Promise.all([t.e(523),t.e(661)]).then(t.bind(t,9661))},{path:"/news",name:"news",component:()=>Promise.all([t.e(523),t.e(551)]).then(t.bind(t,6551))},{path:"/news/post/:postId",name:"post",component:()=>Promise.all([t.e(523),t.e(917)]).then(t.bind(t,4917))},{path:"/games",name:"games",component:()=>Promise.all([t.e(523),t.e(522)]).then(t.bind(t,7522))},{path:"/games/:gameId",name:"gamesData",component:()=>Promise.all([t.e(523),t.e(872)]).then(t.bind(t,4872))}]},{path:"/2022ufag",name:"ufag",component:()=>t.e(553).then(t.bind(t,3750)),children:[{path:"/2022ufag",name:"ufagHome",component:()=>t.e(254).then(t.bind(t,4254))},{path:"regulation",name:"ufagRegulation",component:()=>t.e(299).then(t.bind(t,7299))},{path:"about",name:"ufagAbout",component:()=>t.e(353).then(t.bind(t,8353))},{path:"schedule",name:"ufagSchedule",component:()=>t.e(680).then(t.bind(t,3680))}]}],M=(0,d.p7)({history:(0,d.PO)("/"),routes:U});var W=M,R=(0,O.MT)({state:{language:"zh_tw"},getters:{},mutations:{changeLang(e,n){e.language=n}},actions:{},modules:{}});(0,i.ri)(l).use(R).use(W).mount("#app")}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,i,o,a){if(!i){var s=1/0;for(c=0;c<e.length;c++){i=e[c][0],o=e[c][1],a=e[c][2];for(var r=!0,u=0;u<i.length;u++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](i[u])}))?i.splice(u--,1):(r=!1,a<s&&(s=a));if(r){e.splice(c--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,i){return t.f[i](e,n),n}),[]))}}(),function(){t.u=function(e){return"static/js/"+e+"."+{254:"142b7275",299:"5afaeadd",353:"56446a84",522:"3e7c6809",523:"369b53a1",551:"7d73984e",553:"03a36f85",661:"f4292aa2",680:"1350ebcc",872:"a1ebaaa3",917:"96a04bf9"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"static/css/"+e+"."+{254:"143e48c3",522:"2263af89",551:"e718993d",553:"25d8b6b3",661:"d2f3e63e",872:"c17bfd6f",917:"463c7686"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="nsgs:";t.l=function(i,o,a,s){if(e[i])e[i].push(o);else{var r,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==n+a){r=d;break}}r||(u=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",n+a),r.src=i),e[i]=[o];var g=function(n,t){r.onerror=r.onload=null,clearTimeout(f);var o=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=g.bind(null,r.onerror),r.onload=g.bind(null,r.onload),u&&document.head.appendChild(r)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=r,o.parentNode.removeChild(o),i(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),i=0;i<t.length;i++){var o=t[i],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){o=s[i],a=o.getAttribute("data-href");if(a===e||a===n)return o}},i=function(i){return new Promise((function(o,a){var s=t.miniCssF(i),r=t.p+s;if(n(s,r))return o();e(i,r,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={254:1,522:1,551:1,553:1,661:1,872:1,917:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=i(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,i){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(t,i){o=e[n]=[t,i]}));i.push(o[2]=a);var s=t.p+t.u(n),r=new Error,u=function(i){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+n+" failed.\n("+a+": "+s+")",r.name="ChunkLoadError",r.type=a,r.request=s,o[1](r)}};t.l(s,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,a,s=i[0],r=i[1],u=i[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(u)var c=u(t)}for(n&&n(i);l<s.length;l++)a=s[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},i=self["webpackChunknsgs"]=self["webpackChunknsgs"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(8736)}));i=t.O(i)})();
//# sourceMappingURL=app.64ff03c7.js.map