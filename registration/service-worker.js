if(!self.define){let s,i={};const r=(r,t)=>(r=new URL(r+".js",t).href,i[r]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=i,document.head.appendChild(s)}else s=r,importScripts(r),i()})).then((()=>{let s=i[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(t,e)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let l={};const c=s=>r(s,n),o={module:{uri:n},exports:l,require:c};i[n]=Promise.all(t.map((s=>o[s]||c(s)))).then((s=>(e(...s),l)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"registration"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/registration/index.html",revision:"b2833f6bda89967b4319612527fbe54c"},{url:"/registration/logo_square_black.ico",revision:"d90491076ed69c25b220e53bba2867d6"},{url:"/registration/manifest.json",revision:"4207102382c42885fecbc9e3b94089ed"},{url:"/registration/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/registration/static/css/100.734718ef.css",revision:null},{url:"/registration/static/css/203.15f24c02.css",revision:null},{url:"/registration/static/css/221.95e860cb.css",revision:null},{url:"/registration/static/css/608.4eb25591.css",revision:null},{url:"/registration/static/css/658.5d5f189b.css",revision:null},{url:"/registration/static/css/761.d764c925.css",revision:null},{url:"/registration/static/css/810.5a20989a.css",revision:null},{url:"/registration/static/css/914.1412ff98.css",revision:null},{url:"/registration/static/css/97.3e6d9a1f.css",revision:null},{url:"/registration/static/css/982.33b2ba83.css",revision:null},{url:"/registration/static/css/app.997abffd.css",revision:null},{url:"/registration/static/js/100.77067cec.js",revision:null},{url:"/registration/static/js/203.9432a8a9.js",revision:null},{url:"/registration/static/js/221.fff79919.js",revision:null},{url:"/registration/static/js/226.e2ca982f.js",revision:null},{url:"/registration/static/js/608.40c6c39f.js",revision:null},{url:"/registration/static/js/658.5afc2d69.js",revision:null},{url:"/registration/static/js/761.e335133c.js",revision:null},{url:"/registration/static/js/810.039022c7.js",revision:null},{url:"/registration/static/js/914.1091a2d8.js",revision:null},{url:"/registration/static/js/97.df25bbed.js",revision:null},{url:"/registration/static/js/982.b38cab76.js",revision:null},{url:"/registration/static/js/app.ccf8ea20.js",revision:null},{url:"/registration/static/js/chunk-vendors.d40f020d.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
