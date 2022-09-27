"use strict";(self["webpackChunknsgs"]=self["webpackChunknsgs"]||[]).push([[684],{4384:function(t,s,i){i.d(s,{Z:function(){return v}});var e=i(3396);
/*! vue-countdown v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const a=1e3,n=60*a,o=60*n,d=24*o,l="abort",r="end",c="progress",u="start",h="visibilitychange";var v=(0,e.aZ)({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[l,r,c,u],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/d)},hours(){return Math.floor(this.totalMilliseconds%d/o)},minutes(){return Math.floor(this.totalMilliseconds%o/n)},seconds(){return Math.floor(this.totalMilliseconds%n/a)},milliseconds(){return Math.floor(this.totalMilliseconds%a)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/o)},totalMinutes(){return Math.floor(this.totalMilliseconds/n)},totalSeconds(){return Math.floor(this.totalMilliseconds/a)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(h,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(h,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(u),"visible"===document.visibilityState&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let s,i;const e=a=>{s||(s=a),i||(i=a);const n=a-s;n>=t||n+(a-i)/2>=t?this.progress():this.requestId=requestAnimationFrame(e),i=a};this.requestId=requestAnimationFrame(e)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(c,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(l))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(r))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return(0,e.h)(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}})},8684:function(t,s,i){i.r(s),i.d(s,{default:function(){return C}});var e=i(3396);const a={class:"mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3"},n=(0,e.uE)('<div class="text-2xl font-medium text-left my-2" data-v-a786163e>賽事簡介 Game Info</div><hr class="border-black mb-5" data-v-a786163e><div class="sm:flex sm:gap-5 sm:items-center" data-v-a786163e><div class="hidden sm:block basis-1/2" data-v-a786163e><img src="https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster2.png" alt="" data-v-a786163e></div><div class="text-left basis-1/2 font-medium" data-v-a786163e><div class="section" data-v-a786163e><div class="title" data-v-a786163e>賽事名稱：</div><div data-v-a786163e>111學年度中山・高科・高大聯合新生田徑賽</div></div><div class="section" data-v-a786163e><div class="title" data-v-a786163e>比賽日期：</div><div data-v-a786163e>111年10月29日至10月30日。</div></div><div class="section" data-v-a786163e><div class="title" data-v-a786163e>比賽地點：</div><div data-v-a786163e>國立中山大學田徑場 (高雄市鼓山區蓮海路70號)。</div></div><div class="section" data-v-a786163e><div class="title" data-v-a786163e>主辦單位：</div><div data-v-a786163e>國立中山大學田徑隊。</div></div><div class="section" data-v-a786163e><div class="title" data-v-a786163e>協辦單位：</div><div data-v-a786163e>國立高雄科技大學田徑隊、國立高雄大學田徑隊。</div></div><div class="section" data-v-a786163e><div class="title" data-v-a786163e>指導單位：</div><div data-v-a786163e>國立中山大學學生事務處體育發展組。</div></div><div class="section" data-v-a786163e><div class="title" data-v-a786163e>參加資格：</div><div data-v-a786163e>111學年度註冊之國立中山大學、國立高雄科技大學、國立高雄大學大學部、碩、博一年級新生及轉學生。</div></div></div><div class="block sm:hidden" data-v-a786163e><img src="https://ryanxuan930.github.io/cdn/nsysu_athletics/ufag/poster2.png" alt="" data-v-a786163e></div></div>',3);function o(t,s,i,o,d,l){const r=(0,e.up)("CountdownMod");return(0,e.wg)(),(0,e.iD)("div",a,[(0,e.Wm)(r),n])}var d=i(6523),l=i(7139);const r=t=>((0,e.dD)("data-v-124ada04"),t=t(),(0,e.Cn)(),t),c={class:"bg-yellow-400 py-2 px-3 md:px-5 w-full box-border mb-5"},u=r((()=>(0,e._)("div",{class:"bg-yellow-400 text-center text-black mb-2 font-semibold text-xl md:text-2xl"},[(0,e._)("span",null,[(0,e._)("div",{class:"text-lg"},"111學年度"),(0,e.Uk)("中山・高科・高大聯合新生田徑賽")])],-1))),h={class:"w-full p-1 text-2xl md:text-3xl lg:text-5xl text-center bg-black text-yellow-400"},v={style:{"font-family":"Digital"}},m=r((()=>(0,e._)("div",{class:"bg-yellow-400 text-center text-black mt-2 text-lg",style:{"font-family":"Audiowide-Regular"}},"TechNSport",-1)));function p(t,s,i,a,n,o){const d=(0,e.up)("VueCountdown");return(0,e.wg)(),(0,e.iD)("div",c,[u,(0,e._)("div",h,[(0,e.Wm)(d,{time:a.time},{default:(0,e.w5)((({days:t,hours:s,minutes:i,seconds:a})=>[(0,e._)("span",v,(0,l.zw)(String(t).padStart(2,"0"))+" day "+(0,l.zw)(String(s).padStart(2,"0"))+" hrs "+(0,l.zw)(String(i).padStart(2,"0"))+" min "+(0,l.zw)(String(a).padStart(2,"0"))+" sec ",1)])),_:1},8,["time"])]),m])}var g=i(4870),f=i(4384),y=i(65),b={setup(t){const s=new Date,i=(0,y.oR)(),a=new Date("2022-10-29T09:00:00"),n=a-s,o=(0,g.iH)(n),d=(0,g.iH)(t.nameCh),l=(0,g.iH)(t.nameEn);return{time:o,titleCh:d,titleEn:l,language:(0,e.Fl)((()=>i.state.language))}},components:{VueCountdown:f.Z}},M=i(89);const w=(0,M.Z)(b,[["render",p],["__scopeId","data-v-124ada04"]]);var x=w,S=(0,e.aZ)({setup(){new d.L;return{}},components:{CountdownMod:x}});const k=(0,M.Z)(S,[["render",o],["__scopeId","data-v-a786163e"]]);var C=k}}]);
//# sourceMappingURL=684.b93a2583.js.map