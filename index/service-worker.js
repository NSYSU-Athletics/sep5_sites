if(!self.define){let s,i={};const e=(e,l)=>(e=new URL(e+".js",l).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,r)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const t=s=>e(s,c),u={module:{uri:c},exports:n,require:t};i[c]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(r(...s),n)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"nsgs"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/index.html",revision:"918f2ce8b04dd9d0936deff754fd8907"},{url:"/logo_square_black.ico",revision:"d90491076ed69c25b220e53bba2867d6"},{url:"/manifest.json",revision:"b00d08f3deb3cf1b34368bed053c57ec"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/static/css/304.1a41ac98.css",revision:null},{url:"/static/css/48.98a9a3d9.css",revision:null},{url:"/static/css/522.2263af89.css",revision:null},{url:"/static/css/53.9b7e7950.css",revision:null},{url:"/static/css/551.e718993d.css",revision:null},{url:"/static/css/661.d2f3e63e.css",revision:null},{url:"/static/css/684.cc363553.css",revision:null},{url:"/static/css/app.02c0d3cc.css",revision:null},{url:"/static/img/logo.79973e4d.svg",revision:null},{url:"/static/js/304.308a625b.js",revision:null},{url:"/static/js/396.2f0fe055.js",revision:null},{url:"/static/js/48.32e2d2d2.js",revision:null},{url:"/static/js/522.3e7c6809.js",revision:null},{url:"/static/js/523.369b53a1.js",revision:null},{url:"/static/js/53.e8d90455.js",revision:null},{url:"/static/js/551.7d73984e.js",revision:null},{url:"/static/js/661.f4292aa2.js",revision:null},{url:"/static/js/684.b93a2583.js",revision:null},{url:"/static/js/712.030f3cd6.js",revision:null},{url:"/static/js/app.d1c44336.js",revision:null},{url:"/static/js/chunk-vendors.f0e09ab7.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
