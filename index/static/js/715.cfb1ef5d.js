"use strict";(self["webpackChunknsgs"]=self["webpackChunknsgs"]||[]).push([[715],{4384:function(t,e,s){s.d(e,{Z:function(){return h}});var i=s(3396);
/*! vue-countdown v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const a=1e3,n=60*a,d=60*n,l=24*d,o="abort",c="end",u="progress",v="start",r="visibilitychange";var h=(0,i.aZ)({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[o,c,u,v],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/l)},hours(){return Math.floor(this.totalMilliseconds%l/d)},minutes(){return Math.floor(this.totalMilliseconds%d/n)},seconds(){return Math.floor(this.totalMilliseconds%n/a)},milliseconds(){return Math.floor(this.totalMilliseconds%a)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/d)},totalMinutes(){return Math.floor(this.totalMilliseconds/n)},totalSeconds(){return Math.floor(this.totalMilliseconds/a)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(r,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(r,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(v),"visible"===document.visibilityState&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let e,s;const i=a=>{e||(e=a),s||(s=a);const n=a-e;n>=t||n+(a-s)/2>=t?this.progress():this.requestId=requestAnimationFrame(i),s=a};this.requestId=requestAnimationFrame(i)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(u,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(o))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(c))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return(0,i.h)(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}})},4715:function(t,e,s){s.r(e),s.d(e,{default:function(){return W}});var i=s(3396),a=s(7139);const n=t=>((0,i.dD)("data-v-92c1509e"),t=t(),(0,i.Cn)(),t),d={class:"mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3"},l={class:"text-2xl font-medium text-left my-2"},o=n((()=>(0,i._)("hr",{class:"border-black mb-5"},null,-1))),c={class:"sm:flex sm:gap-5 sm:items-center"},u={class:"hidden sm:block basis-1/2"},v={key:0,src:"https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster2.png",alt:""},r={key:1,src:"https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster1.png",alt:""},h={key:0,class:"text-left basis-1/2 font-medium"},m=(0,i.uE)('<div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>賽事名稱：</div><div data-v-92c1509e>111學年度中山・高科・高大聯合新生田徑賽</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>比賽日期：</div><div data-v-92c1509e>111年10月29日至10月30日。</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>比賽地點：</div><div data-v-92c1509e>國立中山大學田徑場 (高雄市鼓山區蓮海路70號)。</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>主辦單位：</div><div data-v-92c1509e>國立中山大學田徑隊。</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>協辦單位：</div><div data-v-92c1509e>國立高雄科技大學田徑隊、國立高雄大學田徑隊。</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>指導單位：</div><div data-v-92c1509e>國立中山大學學生事務處體育發展組。</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>參加資格：</div><div data-v-92c1509e>111學年度註冊之大學部、碩、博一年級新生及轉學生。</div><div class="text-xs" data-v-92c1509e>經主辦、協辦單位開會協調後，調整參賽資格為不限中山、高科、高大學生參加本次競賽。</div></div>',7),g=[m],p={key:1,class:"text-left basis-1/2 font-medium"},w=(0,i.uE)('<div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>Game Name : </div><div data-v-92c1509e>2022 UAAK Freshman Athletics Game in NSYSU.</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>Date : </div><div data-v-92c1509e>2022/10/29 - 2022/10/30.</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>Location : </div><div data-v-92c1509e>National Sun Yat-sen University Athletic Field. (No. 70, Lianhai Rd., Gushan Dist., Kaohsiung City)</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>Organizer : </div><div data-v-92c1509e>NSYSU Athletics.</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>Co-organizer : </div><div data-v-92c1509e>NKUST T&amp;F; NUK T&amp;F. </div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>Supervisor : </div><div data-v-92c1509e>Sport Development Division, Office of Student Affairs, NSYSU.</div></div><div class="section" data-v-92c1509e><div class="title" data-v-92c1509e>Eligibility : </div><div data-v-92c1509e>I. Enrolled 1st grade undergraduate / graduate or transfer / exchange student of 2022 academic year. II. All international students.</div></div>',7),f=[w],_={class:"block sm:hidden"},y={key:0,src:"https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster2.png",alt:""},b={key:1,src:"https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster1.png",alt:""};function S(t,e,s,n,m,w){const S=(0,i.up)("CountdownMod");return(0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(S),(0,i._)("div",l,(0,a.zw)(t.dict.title.info[t.language]),1),o,(0,i._)("div",c,[(0,i._)("div",u,["zh_tw"==t.language?((0,i.wg)(),(0,i.iD)("img",v)):(0,i.kq)("",!0),"en_us"==t.language?((0,i.wg)(),(0,i.iD)("img",r)):(0,i.kq)("",!0)]),"zh_tw"==t.language?((0,i.wg)(),(0,i.iD)("div",h,g)):(0,i.kq)("",!0),"en_us"==t.language?((0,i.wg)(),(0,i.iD)("div",p,f)):(0,i.kq)("",!0),(0,i._)("div",_,["zh_tw"==t.language?((0,i.wg)(),(0,i.iD)("img",y)):(0,i.kq)("",!0),"en_us"==t.language?((0,i.wg)(),(0,i.iD)("img",b)):(0,i.kq)("",!0)])])])}const x=t=>((0,i.dD)("data-v-11c70956"),t=t(),(0,i.Cn)(),t),M={class:"bg-yellow-400 py-2 px-3 md:px-5 w-full box-border mb-5"},k={class:"bg-yellow-400 text-center text-black mb-2 font-semibold text-xl md:text-2xl"},z={key:0},D=x((()=>(0,i._)("div",{class:"text-lg"},"111學年度",-1))),A=(0,i.Uk)("中山・高科・高大聯合新生田徑賽"),C=[D,A],N={key:1},q=x((()=>(0,i._)("div",null,"UAAK Freshman Athletics Game",-1))),U=(0,i.Uk)("NSYSU 2022"),F=[q,U],E={class:"w-full p-1 text-2xl md:text-3xl lg:text-5xl text-center bg-black text-yellow-400"},I={style:{"font-family":"Digital"}},H=x((()=>(0,i._)("div",{class:"bg-yellow-400 text-center text-black mt-2 text-lg",style:{"font-family":"Audiowide-Regular"}},"TechNSport",-1)));function R(t,e,s,n,d,l){const o=(0,i.up)("VueCountdown");return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("div",k,["zh_tw"==n.language?((0,i.wg)(),(0,i.iD)("span",z,C)):(0,i.kq)("",!0),"en_us"==n.language?((0,i.wg)(),(0,i.iD)("span",N,F)):(0,i.kq)("",!0)]),(0,i._)("div",E,[(0,i.Wm)(o,{time:n.time},{default:(0,i.w5)((({days:t,hours:e,minutes:s,seconds:n})=>[(0,i._)("span",I,(0,a.zw)(String(t).padStart(2,"0"))+" day "+(0,a.zw)(String(e).padStart(2,"0"))+" hrs "+(0,a.zw)(String(s).padStart(2,"0"))+" min "+(0,a.zw)(String(n).padStart(2,"0"))+" sec ",1)])),_:1},8,["time"])]),H])}var T=s(4870),V=s(4384),Y=s(65),$={setup(t){const e=new Date,s=(0,Y.oR)(),a=new Date("2022-10-29T09:00:00"),n=a-e,d=(0,T.iH)(n);return{time:d,language:(0,i.Fl)((()=>s.state.language))}},components:{VueCountdown:V.Z}},G=s(89);const Z=(0,G.Z)($,[["render",R],["__scopeId","data-v-11c70956"]]);var K=Z,L=s(8230),O=(0,i.aZ)({setup(){const t=L;return{dict:t,language:(0,i.Fl)((()=>(0,Y.oR)().state.language))}},components:{CountdownMod:K}});const B=(0,G.Z)(O,[["render",S],["__scopeId","data-v-92c1509e"]]);var W=B},8230:function(t){t.exports=JSON.parse('{"nav":{"nsysu":{"en_us":"NSYSU Games","zh_tw":"中山賽事"},"registration":{"en_us":"Registration","zh_tw":"報名系統"},"home":{"en_us":"Home","zh_tw":"首頁"},"about":{"en_us":"About","zh_tw":"賽事介紹"},"regulation":{"en_us":"Regulation","zh_tw":"競賽規程"},"venues":{"en_us":"Venues","zh_tw":"場地資訊"},"schedule":{"en_us":"Schedule","zh_tw":"賽程資訊"},"results":{"en_us":"Results","zh_tw":"成績公告"}},"title":{"info":{"en_us":"Game Info","zh_tw":"賽事資訊"},"about":{"en_us":"About","zh_tw":"賽事介紹"},"poster":{"en_us":"Poster","zh_tw":"海報設計"},"schedule":{"en_us":"Schedule","zh_tw":"賽程資訊"},"regulation":{"en_us":"Regulation","zh_tw":"競賽規程"},"venues":{"en_us":"Venues","zh_tw":"場地資訊"},"navigation":{"en_us":"How to get to NSYSU","zh_tw":"如何抵達中山大學"},"campus":{"en_us":"Campus Map","zh_tw":"中山大學校園地圖"}}}')}}]);
//# sourceMappingURL=715.cfb1ef5d.js.map