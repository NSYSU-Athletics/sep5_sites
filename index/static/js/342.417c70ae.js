"use strict";(self["webpackChunknsgs"]=self["webpackChunknsgs"]||[]).push([[342],{4384:function(t,s,i){i.d(s,{Z:function(){return h}});var a=i(3396);
/*! vue-countdown v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const e=1e3,n=60*e,d=60*n,l=24*d,o="abort",u="end",c="progress",v="start",r="visibilitychange";var h=(0,a.aZ)({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[o,u,c,v],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/l)},hours(){return Math.floor(this.totalMilliseconds%l/d)},minutes(){return Math.floor(this.totalMilliseconds%d/n)},seconds(){return Math.floor(this.totalMilliseconds%n/e)},milliseconds(){return Math.floor(this.totalMilliseconds%e)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/d)},totalMinutes(){return Math.floor(this.totalMilliseconds/n)},totalSeconds(){return Math.floor(this.totalMilliseconds/e)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(r,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(r,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(v),"visible"===document.visibilityState&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let s,i;const a=e=>{s||(s=e),i||(i=e);const n=e-s;n>=t||n+(e-i)/2>=t?this.progress():this.requestId=requestAnimationFrame(a),i=e};this.requestId=requestAnimationFrame(a)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(c,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(o))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(u))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return(0,a.h)(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}})},342:function(t,s,i){i.r(s),i.d(s,{default:function(){return W}});var a=i(3396),e=i(7139);const n=t=>((0,a.dD)("data-v-7a11b530"),t=t(),(0,a.Cn)(),t),d={class:"mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3"},l={class:"text-2xl font-medium text-left my-2"},o=n((()=>(0,a._)("hr",{class:"border-black mb-5"},null,-1))),u={class:"sm:flex sm:gap-5 sm:items-center"},c={class:"hidden sm:block basis-1/2"},v={key:0,src:"https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster2.png",alt:""},r={key:1,src:"https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster1.png",alt:""},h={key:0,class:"text-left basis-1/2 font-medium"},m=(0,a.uE)('<div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>賽事名稱：</div><div data-v-7a11b530>111學年度中山・高科・高大聯合新生田徑賽</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>比賽日期：</div><div data-v-7a11b530>111年10月29日至10月30日。</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>比賽地點：</div><div data-v-7a11b530>國立中山大學田徑場 (高雄市鼓山區蓮海路70號)。</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>主辦單位：</div><div data-v-7a11b530>國立中山大學田徑隊。</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>協辦單位：</div><div data-v-7a11b530>國立高雄科技大學田徑隊、國立高雄大學田徑隊。</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>指導單位：</div><div data-v-7a11b530>國立中山大學學生事務處體育發展組。</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>參加資格：</div><div data-v-7a11b530>111學年度註冊之大學部、碩、博一年級新生及轉學生。</div><div class="text-xs" data-v-7a11b530>經主辦、協辦單位開會協調後，調整參賽資格為不限中山、高科、高大學生參加本次競賽。</div></div>',7),g=[m],b={key:1,class:"text-left basis-1/2 font-medium"},p=(0,a.uE)('<div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>Game Name : </div><div data-v-7a11b530>2022 UAAK Freshman Athletics Game in NSYSU.</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>Date : </div><div data-v-7a11b530>2022/10/29 - 2022/10/30.</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>Location : </div><div data-v-7a11b530>National Sun Yat-sen University Athletic Field. (No. 70, Lianhai Rd., Gushan Dist., Kaohsiung City)</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>Organizer : </div><div data-v-7a11b530>NSYSU Athletics.</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>Co-organizer : </div><div data-v-7a11b530>NKUST T&amp;F; NUK T&amp;F. </div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>Supervisor : </div><div data-v-7a11b530>Sport Development Division, Office of Student Affairs, NSYSU.</div></div><div class="section" data-v-7a11b530><div class="title" data-v-7a11b530>Eligibility : </div><div data-v-7a11b530>Enrolled 1st grade undergraduate / graduate or transfer / exchange student of 2022 academic year. (All the foreign students.)</div></div>',7),f=[p],w={class:"block sm:hidden"},y={key:0,src:"https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster2.png",alt:""},_={key:1,src:"https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster1.png",alt:""};function x(t,s,i,n,m,p){const x=(0,a.up)("CountdownMod");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(x),(0,a._)("div",l,(0,e.zw)(t.dict.title.info[t.language]),1),o,(0,a._)("div",u,[(0,a._)("div",c,["zh_tw"==t.language?((0,a.wg)(),(0,a.iD)("img",v)):(0,a.kq)("",!0),"en_us"==t.language?((0,a.wg)(),(0,a.iD)("img",r)):(0,a.kq)("",!0)]),"zh_tw"==t.language?((0,a.wg)(),(0,a.iD)("div",h,g)):(0,a.kq)("",!0),"en_us"==t.language?((0,a.wg)(),(0,a.iD)("div",b,f)):(0,a.kq)("",!0),(0,a._)("div",w,["zh_tw"==t.language?((0,a.wg)(),(0,a.iD)("img",y)):(0,a.kq)("",!0),"en_us"==t.language?((0,a.wg)(),(0,a.iD)("img",_)):(0,a.kq)("",!0)])])])}const S=t=>((0,a.dD)("data-v-11c70956"),t=t(),(0,a.Cn)(),t),M={class:"bg-yellow-400 py-2 px-3 md:px-5 w-full box-border mb-5"},k={class:"bg-yellow-400 text-center text-black mb-2 font-semibold text-xl md:text-2xl"},D={key:0},z=S((()=>(0,a._)("div",{class:"text-lg"},"111學年度",-1))),A=(0,a.Uk)("中山・高科・高大聯合新生田徑賽"),q=[z,A],C={key:1},N=S((()=>(0,a._)("div",null,"UAAK Freshman Athletics Game",-1))),U=(0,a.Uk)("NSYSU 2022"),F=[N,U],E={class:"w-full p-1 text-2xl md:text-3xl lg:text-5xl text-center bg-black text-yellow-400"},R={style:{"font-family":"Digital"}},T=S((()=>(0,a._)("div",{class:"bg-yellow-400 text-center text-black mt-2 text-lg",style:{"font-family":"Audiowide-Regular"}},"TechNSport",-1)));function H(t,s,i,n,d,l){const o=(0,a.up)("VueCountdown");return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",k,["zh_tw"==n.language?((0,a.wg)(),(0,a.iD)("span",D,q)):(0,a.kq)("",!0),"en_us"==n.language?((0,a.wg)(),(0,a.iD)("span",C,F)):(0,a.kq)("",!0)]),(0,a._)("div",E,[(0,a.Wm)(o,{time:n.time},{default:(0,a.w5)((({days:t,hours:s,minutes:i,seconds:n})=>[(0,a._)("span",R,(0,e.zw)(String(t).padStart(2,"0"))+" day "+(0,e.zw)(String(s).padStart(2,"0"))+" hrs "+(0,e.zw)(String(i).padStart(2,"0"))+" min "+(0,e.zw)(String(n).padStart(2,"0"))+" sec ",1)])),_:1},8,["time"])]),T])}var I=i(4870),V=i(4384),$=i(65),G={setup(t){const s=new Date,i=(0,$.oR)(),e=new Date("2022-10-29T09:00:00"),n=e-s,d=(0,I.iH)(n);return{time:d,language:(0,a.Fl)((()=>i.state.language))}},components:{VueCountdown:V.Z}},Y=i(89);const Z=(0,Y.Z)(G,[["render",H],["__scopeId","data-v-11c70956"]]);var K=Z,L=i(8230),O=(0,a.aZ)({setup(){const t=L;return{dict:t,language:(0,a.Fl)((()=>(0,$.oR)().state.language))}},components:{CountdownMod:K}});const B=(0,Y.Z)(O,[["render",x],["__scopeId","data-v-7a11b530"]]);var W=B},8230:function(t){t.exports=JSON.parse('{"nav":{"nsysu":{"en_us":"NSYSU Games","zh_tw":"中山賽事"},"registration":{"en_us":"Registration","zh_tw":"報名系統"},"home":{"en_us":"Home","zh_tw":"首頁"},"about":{"en_us":"About","zh_tw":"賽事介紹"},"regulation":{"en_us":"Regulation","zh_tw":"競賽規程"},"venues":{"en_us":"Venues","zh_tw":"場地資訊"},"schedule":{"en_us":"Schedule","zh_tw":"賽程資訊"},"results":{"en_us":"Results","zh_tw":"成績公告"}},"title":{"info":{"en_us":"Game Info","zh_tw":"賽事資訊"},"about":{"en_us":"About","zh_tw":"賽事介紹"},"poster":{"en_us":"Poster","zh_tw":"海報設計"},"schedule":{"en_us":"Schedule","zh_tw":"賽程資訊"},"regulation":{"en_us":"Regulation","zh_tw":"競賽規程"}}}')}}]);
//# sourceMappingURL=342.417c70ae.js.map