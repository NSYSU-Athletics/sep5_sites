if(!self.define){let s,i={};const r=(r,t)=>(r=new URL(r+".js",t).href,i[r]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=i,document.head.appendChild(s)}else s=r,importScripts(r),i()})).then((()=>{let s=i[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(t,e)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let l={};const c=s=>r(s,n),o={module:{uri:n},exports:l,require:c};i[n]=Promise.all(t.map((s=>o[s]||c(s)))).then((s=>(e(...s),l)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"registration"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/registration/index.html",revision:"b7a4cb74d3020dbe6c9dd70b33abc2c0"},{url:"/registration/logo_square_black.ico",revision:"d90491076ed69c25b220e53bba2867d6"},{url:"/registration/manifest.json",revision:"4207102382c42885fecbc9e3b94089ed"},{url:"/registration/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/registration/static/css/181.1e6ffac3.css",revision:null},{url:"/registration/static/css/206.b780f9f5.css",revision:null},{url:"/registration/static/css/608.4eb25591.css",revision:null},{url:"/registration/static/css/670.007c97d8.css",revision:null},{url:"/registration/static/css/761.d764c925.css",revision:null},{url:"/registration/static/css/795.18f531a0.css",revision:null},{url:"/registration/static/css/810.5a20989a.css",revision:null},{url:"/registration/static/css/964.1cc32368.css",revision:null},{url:"/registration/static/css/97.3e6d9a1f.css",revision:null},{url:"/registration/static/css/987.734718ef.css",revision:null},{url:"/registration/static/css/app.a669e4ce.css",revision:null},{url:"/registration/static/js/181.b6af7b68.js",revision:null},{url:"/registration/static/js/206.10ede2ce.js",revision:null},{url:"/registration/static/js/226.e2ca982f.js",revision:null},{url:"/registration/static/js/608.40c6c39f.js",revision:null},{url:"/registration/static/js/670.306bd73a.js",revision:null},{url:"/registration/static/js/761.e335133c.js",revision:null},{url:"/registration/static/js/795.fdd5159a.js",revision:null},{url:"/registration/static/js/810.039022c7.js",revision:null},{url:"/registration/static/js/964.b0d2bd44.js",revision:null},{url:"/registration/static/js/97.df25bbed.js",revision:null},{url:"/registration/static/js/987.eaf6f1df.js",revision:null},{url:"/registration/static/js/app.4674a630.js",revision:null},{url:"/registration/static/js/chunk-vendors.d40f020d.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
