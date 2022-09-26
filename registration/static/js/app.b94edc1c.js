(function(){"use strict";var e={9612:function(e,t,A){var r=A(9242),n=A(3396),s=A(7139);const o={class:"fixed z-50 w-full top-36 left-0"},a={class:"mx-auto w-2/3 py-5 px-10 bg-orange-500 text-2xl opacity-90 font-medium shadow text-white rounded"},i=(0,n._)("span",{class:"material-icons mr-3"},"notification_important",-1),g={class:"fixed z-50 w-full h-full bg-black bg-opacity-50"},c={class:"mx-auto my-36 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 text-2xlfont-medium shadow bg-white"},l={class:"py-5 px-10"},u={class:"flex b-0 m-0 text-lg text-white"};function d(e,t,A,d,C,h){const f=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("div",o,[(0,n._)("div",a,[(0,n._)("div",null,[i,(0,n.Uk)((0,s.zw)(e.message),1)])])],512),[[r.F8,e.message.length>0]]),(0,n.wy)((0,n._)("div",g,[(0,n._)("div",c,[(0,n._)("div",l,(0,s.zw)(e.confirmMessage),1),(0,n._)("div",u,[(0,n._)("button",{onClick:t[0]||(t[0]=t=>e.confirmAnswer="n"),class:"block basis-1/2 p-2 m-0 rounded-none bg-red-700 hover:bg-red-600"},"取消 Cancel"),(0,n._)("button",{onClick:t[1]||(t[1]=t=>e.confirmAnswer="y"),class:"block basis-1/2 p-2 m-0 rounded-none bg-green-700 hover:bg-green-600"},"確定 Confirm")])])],512),[[r.F8,e.confirmMessage.length>0]]),(0,n.Wm)(f)],64)}var C=A(4870),h=A(65),f=(0,n.aZ)({setup(){const e=(0,h.oR)(),t=(0,n.Fl)((()=>e.state.messageBox)),A=(0,n.Fl)((()=>e.state.confirmBox)),r=(0,C.iH)("");return(0,n.YP)(t,(t=>{t.length>0&&setTimeout((()=>{e.commit("setMessageBox","")}),3e3)})),(0,n.YP)(r,(t=>{t.length>0&&(e.commit("setConfirmAnswer",t),e.commit("setConfirmBox",""),setTimeout((()=>{r.value=""}),3e3))})),{message:t,confirmMessage:A,confirmAnswer:r}}}),B=A(89);const m=(0,B.Z)(f,[["render",d]]);var E=m,p=A(5431);(0,p.z)("/registration/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var w=A(678),I="data:image/png;base64,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V753DQBk4NE9J1jB4iihB3CNKNmQwIolQgB4pEtkmecOElgAMIeVrI0ILM7wzgXgHpG1CYEVR3wAcMSH0OpPYHGWkASI8SG2+vKYBqALkxSVzRi/3iBPZAUrhkELAPxDYHGFoIQ8HI+QkMC6z8kNHAfkYjyynMDiqlUnMCdO+JPjYq3PF/vg1b+byRiZzE3uVHTnROFG6HHe7ZfR237U96QdHW+rx5bj4r++tseZ1zYyQiJ+9tX9JK4WEFj3GLSQi2OSnzqNCeO7EIGVy4x3+NE/z4oQAPzgHqy9iCGy2XlMOh6hMYF1naVagFiikzYEVh5VTyxCszYTGsAAAuuaylGxakI1kQPU51x+kMDKofqAtYrFHe7DwjahHYHFTE6cOdkvwBHOFScIrPM6rNY4SPhp9ZiwioVtQisCa70uJ5IqT7smL5GFbZKX/XGSwNrXyoPFgZpThv0isrBN8rEfLhBY57iZO44DNieRtZbj4k+2yVq2/0W+KmetbgP37FfnfP1Z4ZpLhv1SZWyMOIYdF3/6SLw93o2B7/++0j4VVjd9fH46hklj1GB0orjn7n6J2P4zTlRZx8mI1+7RMK9l2j6zJ2nnyyACCwAgmHuwAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBgAgsAIJjAAgAIJrAAAIIJLACAYAILACCYwAIACCawAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBgAgsAIJjAAgAIJrAAAIIJLACAYAILACCYwAIACCawAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBgAgsAIJjAAgAIJrAAAIIJLACAYAILACCYwAIACCawAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBgAgsAIJjAAgAIJrAAAIIJLACAYAILACCYwAIACCawAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBgAgsAIJjAAgAIJrAAAIIJLACAYAILACCYwAIACCawAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBgAgsAIJjAAgAIJrAAAIIJLACAYAILACCYwAIACCawAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBgAgsAIJjAAgAIJrAAAIIJLACAYAILACCYwAIACCawAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBgAgsAIJjAAgAIJrAAAIIJLACAYAILACCYwAIACCawAACCCSwAgGACCwAgmMACAAgmsAAAggksAIBIv379+j/uLygpAjYPVQAAAABJRU5ErkJggg==";const v={class:"flex flex-col h-screen"},Q={class:"bg-orange-400 flex items-center"},b=(0,n.uE)('<img src="'+I+'" class="h-16 block mx-3" alt="" data-v-7ad992ed><div class="text-white p-2 hidden sm:block" data-v-7ad992ed><div class="text-xl font-medium" data-v-7ad992ed>體育賽事報名系統</div><div class="text-xs" data-v-7ad992ed>Sports Events Registration System</div></div><div class="flex-grow" data-v-7ad992ed></div>',3),x={class:"flex-grow bg-gray-100"};function Y(e,t,A,r,s,o){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",Q,[b,(0,n._)("div",{class:"nav-button",onClick:t[0]||(t[0]=(...t)=>e.logout&&e.logout(...t))},"登出")]),(0,n._)("div",x,[(0,n.Wm)(a)])])}var y=A(3927),F=(0,n.aZ)({setup(){const e=new y.L,t=new y._,A=(0,w.tv)();function r(){e.Url("auth/user/logout").Post().then((e=>{"done"===e.message?(localStorage.removeItem("sep5_reg_token"),localStorage.removeItem("sep5_reg_data"),A.push("/login")):t.Alert("登出失敗")}))}return{logout:r}}});const M=(0,B.Z)(F,[["render",Y],["__scopeId","data-v-7ad992ed"]]);var k=M;const W=[{path:"/",name:"home",component:k,children:[{path:"/",name:"mainPage",component:()=>A.e(793).then(A.bind(A,5793))},{path:"/organization",name:"organizationPage",component:()=>A.e(97).then(A.bind(A,3097))},{path:"/athlete",name:"athletePage",component:()=>Promise.all([A.e(226),A.e(901)]).then(A.bind(A,6901))},{path:"/account",name:"accountPage",component:()=>A.e(404).then(A.bind(A,9404))},{path:"/register",name:"registerPage",component:()=>A.e(761).then(A.bind(A,2761)),children:[{path:"/register/:game_id",name:"registerList",component:()=>A.e(100).then(A.bind(A,9100))},{path:"/register/:game_id/individual",name:"registerIndividual",component:()=>Promise.all([A.e(226),A.e(413)]).then(A.bind(A,5413))},{path:"/register/:game_id/team",name:"registerTeam",component:()=>Promise.all([A.e(226),A.e(569)]).then(A.bind(A,4569))},{path:"/register/:game_id/group",name:"registerGroup",component:()=>A.e(535).then(A.bind(A,535))}]}]},{path:"/login",name:"login",component:()=>Promise.all([A.e(226),A.e(308)]).then(A.bind(A,1308))}],j=(0,w.p7)({history:(0,w.PO)("/registration/"),routes:W});j.beforeEach(((e,t)=>{const A=localStorage.sep5_reg_token;if(A){const t=JSON.parse(localStorage.sep5_reg_data),A=new Date(t.expired).getTime(),r=Date.now();if(A<=r&&"/login"!==e.path)return localStorage.removeItem("sep5_reg_token"),localStorage.removeItem("sep5_reg_data"),alert("請重新登入"),"/login"}else if("/login"!==e.path)return alert("請先登入"),"/login"}));var L=j,J=(0,h.MT)({state:{messageBox:"",confirmBox:"",confirmAnswer:"",gameId:""},getters:{},mutations:{setMessageBox(e,t){e.messageBox=t},setConfirmBox(e,t){e.confirmBox=t},setConfirmAnswer(e,t){e.confirmAnswer=t},setGameId(e,t){e.gameId=t}},actions:{},modules:{}});(0,r.ri)(E).use(J).use(L).mount("#app")},3927:function(e,t,A){A.d(t,{_:function(){return c},L:function(){return g}});var r=A(2482),n=A(6265),s=A.n(n),o=A(678),a=A(65);class i{constructor(){(0,r.Z)(this,"profix","https://sports.nsysu.edu.tw/server/api/"),(0,r.Z)(this,"headers",{Authorization:`Bearer ${localStorage.sep5_reg_token}`,Accept:"application/json","Content-Type":"application/json; charset=utf-8"})}}class g extends i{constructor(...e){super(...e),(0,r.Z)(this,"url",""),(0,r.Z)(this,"router",(0,o.tv)()),(0,r.Z)(this,"store",(0,a.oR)()),(0,r.Z)(this,"dataset",{})}Url(e){return this.url=this.profix+e,this}ErrHdl(e){e.response?(e.response.data.hasOwnProperty("message")&&"Unauthenticated."==e.response.data.message&&(localStorage.removeItem("sep5_reg_token"),localStorage.removeItem("sep5_reg_token"),this.router.push("/login")),this.LogError(JSON.stringify(e.response)),console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?(this.LogError(JSON.stringify(e.request)),console.log(e.request)):(console.log("Error",e.message),this.LogError(JSON.stringify(e.message))),console.log(e.config)}Get(){return s().get(this.url,{headers:this.headers}).then((e=>e.data)).catch((e=>{this.ErrHdl(e)}))}Login(e){return s().post(this.url,e).then((e=>e.data)).catch((e=>{this.ErrHdl(e)}))}GetAll(e,t){return s().get(this.url,{headers:this.headers}).then((A=>{if(void 0===t)return e.value=A.data,A.data;e.value=A.data[t]})).catch((e=>{this.ErrHdl(e)}))}GetNoH(e){return s().get(this.url).then((t=>(e.value=t.data,t.data))).catch((e=>{this.ErrHdl(e)}))}Post(e){return s().post(this.url,e,{headers:this.headers}).then((e=>e.data)).catch((e=>{this.ErrHdl(e)}))}Patch(e,t){return s().patch(`${this.url}/${e}`,t,{headers:this.headers}).then((e=>e.data)).catch((e=>{this.ErrHdl(e)}))}Delete(e){return s()["delete"](`${this.url}/${e}`,{headers:this.headers}).then((e=>e.data)).catch((e=>{this.ErrHdl(e)}))}Dataset(){return this.dataset={},this}Add(e,t){return this.dataset[e]=t,this}AddObj(e,t){return this.dataset[e]=t.value,this}GetDset(){return this.dataset}EptObj(e){return 0===e.value.length}LogError(e){this.Dataset().Add("user_agent",navigator.userAgent).Add("language",navigator.language).Add("platform",navigator.platform).Add("vendor",navigator.vendor).Add("content",e),s().post(`${this.profix}error-log`,this.GetDset()).then((e=>{alert(`錯誤編號: ${e.data.data}`)}))}}class c{constructor(){(0,r.Z)(this,"store",(0,a.oR)())}changeLang(e){this.store.commit("changeLanguage",e)}Alert(e){this.store.commit("setMessageBox",e)}Confirm(e){this.store.commit("setConfirmBox",e)}ResetConfirm(){this.store.commit("setConfirmAnswer","")}SportPrefix(e){let t="";switch(e){case"athl":t="athletics";break;case"swim":t="swimming";break;default:t="general"}return t}}}},t={};function A(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,A),s.exports}A.m=e,function(){var e=[];A.O=function(t,r,n,s){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],s=e[c][2];for(var a=!0,i=0;i<r.length;i++)(!1&s||o>=s)&&Object.keys(A.O).every((function(e){return A.O[e](r[i])}))?r.splice(i--,1):(a=!1,s<o&&(o=s));if(a){e.splice(c--,1);var g=n();void 0!==g&&(t=g)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[r,n,s]}}(),function(){A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,{a:t}),t}}(),function(){A.d=function(e,t){for(var r in t)A.o(t,r)&&!A.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){A.f={},A.e=function(e){return Promise.all(Object.keys(A.f).reduce((function(t,r){return A.f[r](e,t),t}),[]))}}(),function(){A.u=function(e){return"static/js/"+e+"."+{97:"df25bbed",100:"ae21f589",226:"e2ca982f",308:"15b1b956",404:"895f2fe8",413:"5bd933db",535:"f4ef7322",569:"3612ce52",761:"62646892",793:"5909583f",901:"d0c42452"}[e]+".js"}}(),function(){A.miniCssF=function(e){return"static/css/"+e+"."+{97:"3e6d9a1f",100:"d05c4f70",308:"4da0a15a",404:"34af89bc",413:"34b1fb3e",535:"b259bb30",569:"d482458d",761:"d764c925",793:"e912c59d",901:"fa0b4961"}[e]+".css"}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="registration:";A.l=function(r,n,s,o){if(e[r])e[r].push(n);else{var a,i;if(void 0!==s)for(var g=document.getElementsByTagName("script"),c=0;c<g.length;c++){var l=g[c];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+s){a=l;break}}a||(i=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,A.nc&&a.setAttribute("nonce",A.nc),a.setAttribute("data-webpack",t+s),a.src=r),e[r]=[n];var u=function(t,A){a.onerror=a.onload=null,clearTimeout(d);var n=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(e){return e(A)})),t)return t(A)},d=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),i&&document.head.appendChild(a)}}}(),function(){A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){A.p="/registration/"}(),function(){var e=function(e,t,A,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=function(s){if(n.onerror=n.onload=null,"load"===s.type)A();else{var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=a,n.parentNode.removeChild(n),r(i)}};return n.onerror=n.onload=s,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var A=document.getElementsByTagName("link"),r=0;r<A.length;r++){var n=A[r],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===t))return n}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){n=o[r],s=n.getAttribute("data-href");if(s===e||s===t)return n}},r=function(r){return new Promise((function(n,s){var o=A.miniCssF(r),a=A.p+o;if(t(o,a))return n();e(r,a,n,s)}))},n={143:0};A.f.miniCss=function(e,t){var A={97:1,100:1,308:1,404:1,413:1,535:1,569:1,761:1,793:1,901:1};n[e]?t.push(n[e]):0!==n[e]&&A[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};A.f.j=function(t,r){var n=A.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(A,r){n=e[t]=[A,r]}));r.push(n[2]=s);var o=A.p+A.u(t),a=new Error,i=function(r){if(A.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,n[1](a)}};A.l(o,i,"chunk-"+t,t)}},A.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],a=r[1],i=r[2],g=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)A.o(a,n)&&(A.m[n]=a[n]);if(i)var c=i(A)}for(t&&t(r);g<o.length;g++)s=o[g],A.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return A.O(c)},r=self["webpackChunkregistration"]=self["webpackChunkregistration"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=A.O(void 0,[998],(function(){return A(9612)}));r=A.O(r)})();
//# sourceMappingURL=app.b94edc1c.js.map