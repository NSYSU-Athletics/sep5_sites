if(!self.define){let s,i={};const e=(e,l)=>(e=new URL(e+".js",l).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const c=s=>e(s,n),u={module:{uri:n},exports:t,require:c};i[n]=Promise.all(l.map((s=>u[s]||c(s)))).then((s=>(r(...s),t)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"nsgs"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/index.html",revision:"88d197a58586be2d298e33835e108c80"},{url:"/logo_square_black.ico",revision:"d90491076ed69c25b220e53bba2867d6"},{url:"/manifest.json",revision:"b00d08f3deb3cf1b34368bed053c57ec"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/static/css/254.143e48c3.css",revision:null},{url:"/static/css/436.4094e81f.css",revision:null},{url:"/static/css/522.2263af89.css",revision:null},{url:"/static/css/551.e718993d.css",revision:null},{url:"/static/css/661.d2f3e63e.css",revision:null},{url:"/static/css/872.c17bfd6f.css",revision:null},{url:"/static/css/917.463c7686.css",revision:null},{url:"/static/css/app.96e8a9ff.css",revision:null},{url:"/static/img/logo.79973e4d.svg",revision:null},{url:"/static/js/254.142b7275.js",revision:null},{url:"/static/js/299.5afaeadd.js",revision:null},{url:"/static/js/353.56446a84.js",revision:null},{url:"/static/js/436.6ec943bf.js",revision:null},{url:"/static/js/522.3e7c6809.js",revision:null},{url:"/static/js/523.369b53a1.js",revision:null},{url:"/static/js/551.7d73984e.js",revision:null},{url:"/static/js/661.f4292aa2.js",revision:null},{url:"/static/js/680.1350ebcc.js",revision:null},{url:"/static/js/872.a1ebaaa3.js",revision:null},{url:"/static/js/917.96a04bf9.js",revision:null},{url:"/static/js/app.7d9e4155.js",revision:null},{url:"/static/js/chunk-vendors.f0e09ab7.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
