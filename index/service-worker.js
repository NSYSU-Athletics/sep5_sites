if(!self.define){let s,i={};const l=(l,e)=>(l=new URL(l+".js",e).href,i[l]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=i,document.head.appendChild(s)}else s=l,importScripts(l),i()})).then((()=>{let s=i[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(e,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const c=s=>l(s,n),u={module:{uri:n},exports:t,require:c};i[n]=Promise.all(e.map((s=>u[s]||c(s)))).then((s=>(r(...s),t)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"nsgs"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/index.html",revision:"f87db7fff441b72402144913b9f8f182"},{url:"/logo_square_black.ico",revision:"d90491076ed69c25b220e53bba2867d6"},{url:"/manifest.json",revision:"b00d08f3deb3cf1b34368bed053c57ec"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/static/css/114.463c7686.css",revision:null},{url:"/static/css/410.a79b13f5.css",revision:null},{url:"/static/css/44.a2f13091.css",revision:null},{url:"/static/css/522.2263af89.css",revision:null},{url:"/static/css/551.e718993d.css",revision:null},{url:"/static/css/661.d2f3e63e.css",revision:null},{url:"/static/css/872.c17bfd6f.css",revision:null},{url:"/static/css/917.445e0265.css",revision:null},{url:"/static/css/app.3e85f755.css",revision:null},{url:"/static/img/logo.79973e4d.svg",revision:null},{url:"/static/js/114.d2be69fd.js",revision:null},{url:"/static/js/353.56446a84.js",revision:null},{url:"/static/js/410.a79aff33.js",revision:null},{url:"/static/js/44.70ce2c62.js",revision:null},{url:"/static/js/522.3e7c6809.js",revision:null},{url:"/static/js/523.369b53a1.js",revision:null},{url:"/static/js/551.7d73984e.js",revision:null},{url:"/static/js/661.f4292aa2.js",revision:null},{url:"/static/js/680.1350ebcc.js",revision:null},{url:"/static/js/872.a1ebaaa3.js",revision:null},{url:"/static/js/917.a425f88d.js",revision:null},{url:"/static/js/app.ae1ff10c.js",revision:null},{url:"/static/js/chunk-vendors.f0e09ab7.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
