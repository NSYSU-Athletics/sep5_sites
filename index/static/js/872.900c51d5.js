"use strict";(self["webpackChunknsgs"]=self["webpackChunknsgs"]||[]).push([[872],{4872:function(t,e,s){s.r(e),s.d(e,{default:function(){return T}});var n=s(3396);const i={class:"mx-auto my-5 w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3"},a=(0,n._)("div",{class:"text-2xl font-medium text-left my-2"},"影音資訊",-1),l=(0,n._)("hr",{class:"border-black"},null,-1);function o(t,e,s,o,r,u){const d=(0,n.up)("CountdownMod"),c=(0,n.up)("PostList");return(0,n.wg)(),(0,n.iD)("div",i,[t.countDown.display?((0,n.wg)(),(0,n.j4)(d,{key:0,"start-time":t.countDown.time,"name-ch":t.countDown.ch,"name-en":t.countDown.en},null,8,["start-time","name-ch","name-en"])):(0,n.kq)("",!0),(0,n.Wm)(c,{"display-mode":"home"}),a,l])}var r=s(4870),u=s(6523),d=s(3898),c=s(7139);const g=t=>((0,n.dD)("data-v-512b3076"),t=t(),(0,n.Cn)(),t),h={class:"bg-yellow-400 py-2 px-3 md:px-5 w-full box-border mb-5"},w={class:"bg-yellow-400 text-center text-black mb-2 font-semibold text-xl md:text-2xl"},m={key:0},p={key:1},y={class:"w-full p-1 text-2xl md:text-3xl lg:text-5xl text-center bg-black text-yellow-400"},k={style:{"font-family":"Digital"}},b=g((()=>(0,n._)("div",{class:"bg-yellow-400 text-center text-black mt-2 text-lg",style:{"font-family":"Audiowide-Regular"}},"TechNSport",-1)));function f(t,e,s,i,a,l){const o=(0,n.up)("VueCountdown");return(0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("div",w,["zh_tw"==i.language?((0,n.wg)(),(0,n.iD)("span",m,(0,c.zw)(i.titleCh),1)):(0,n.kq)("",!0),"en_us"==i.language?((0,n.wg)(),(0,n.iD)("span",p,(0,c.zw)(i.titleEn),1)):(0,n.kq)("",!0)]),(0,n._)("div",y,[(0,n.Wm)(o,{time:i.time},{default:(0,n.w5)((({days:t,hours:e,minutes:s,seconds:i})=>[(0,n._)("span",k,(0,c.zw)(String(t).padStart(2,"0"))+" day "+(0,c.zw)(String(e).padStart(2,"0"))+" hrs "+(0,c.zw)(String(s).padStart(2,"0"))+" min "+(0,c.zw)(String(i).padStart(2,"0"))+" sec ",1)])),_:1},8,["time"])]),b])}
/*! vue-countdown v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */
const _=1e3,D=60*_,v=60*D,x=24*v,M="abort",q="end",C="progress",z="start",S="visibilitychange";var H=(0,n.aZ)({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[M,q,C,z],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/x)},hours(){return Math.floor(this.totalMilliseconds%x/v)},minutes(){return Math.floor(this.totalMilliseconds%v/D)},seconds(){return Math.floor(this.totalMilliseconds%D/_)},milliseconds(){return Math.floor(this.totalMilliseconds%_)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/v)},totalMinutes(){return Math.floor(this.totalMilliseconds/D)},totalSeconds(){return Math.floor(this.totalMilliseconds/_)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(S,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(S,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(z),"visible"===document.visibilityState&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let e,s;const n=i=>{e||(e=i),s||(s=i);const a=i-e;a>=t||a+(i-s)/2>=t?this.progress():this.requestId=requestAnimationFrame(n),s=i};this.requestId=requestAnimationFrame(n)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(C,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(M))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(q))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return(0,n.h)(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}}),F=s(65),E={props:["startTime","nameCh","nameEn"],setup(t){const e=new Date,s=(0,F.oR)(),i=new Date(t.startTime.replace(/-/g,"/")),a=i-e,l=(0,r.iH)(a),o=(0,r.iH)(t.nameCh),u=(0,r.iH)(t.nameEn);return{time:l,titleCh:o,titleEn:u,language:(0,n.Fl)((()=>s.state.language))}},components:{VueCountdown:H}},I=s(89);const $=(0,I.Z)(E,[["render",f],["__scopeId","data-v-512b3076"]]);var L=$,Z=(0,n.aZ)({setup(){const t=new u.L,e=(0,r.iH)({display:0,time:""});return t.Url("countdown").GetNoH(e),{countDown:e}},components:{CountdownMod:L,PostList:d.Z}});const N=(0,I.Z)(Z,[["render",o]]);var T=N},3898:function(t,e,s){s.d(e,{Z:function(){return J}});var n=s(3396),i=s(7139);const a=t=>((0,n.dD)("data-v-4d28edfc"),t=t(),(0,n.Cn)(),t),l={class:"text-2xl font-medium text-left mb-2"},o={key:0},r={key:1},u=a((()=>(0,n._)("hr",{class:"border-black"},null,-1))),d={class:"my-5 filter-button"},c={key:0},g={key:1},h={key:0},w={key:1},m={key:0},p={key:1},y={key:0},k={key:1},b={key:0},f={key:1},_={class:"bulletin-table"},D=["onClick"],v={class:"w-[3%]"},x={key:0,class:"material-icons text-3xl text-orange-500"},M={class:"text-left w-[40%] md:w-[20%] lg:w-[15%] xl:w-[12%]"},q={key:0,class:"category bg-green-600"},C={key:0},z={key:1},S={key:1,class:"category bg-yellow-500"},H={key:0},F={key:1},E={key:2,class:"category bg-blue-600"},I={key:0},$={key:1},L={key:3,class:"category bg-red-600"},Z={key:0},N={key:1},T={class:"text-left hidden md:table-cell truncate max-w-0"},V={class:"w-1/2 text-right md:text-center md:w-[20%]"},A={class:"md:hidden"},G={colspan:"3",class:"text-left border-b-2 w-full truncate max-w-0"},P={key:0,class:"bg-gray-100 p-3 tezt-center mb-3"};function R(t,e,s,a,R,U){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",l,["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",o,"最新消息")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",r,"Latest News")):(0,n.kq)("",!0)]),u,(0,n._)("div",d,[(0,n._)("button",{class:"bg-black",onClick:e[0]||(e[0]=e=>t.newsFilter=9)},["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",c,"全部公告")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",g,"All Posts")):(0,n.kq)("",!0)]),(0,n._)("button",{class:"bg-red-600",onClick:e[1]||(e[1]=e=>t.newsFilter=3)},["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",h,"重要消息")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",w,"Important")):(0,n.kq)("",!0)]),(0,n._)("button",{class:"bg-yellow-500",onClick:e[2]||(e[2]=e=>t.newsFilter=1)},["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",m,"競賽資訊")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",p,"Event Info")):(0,n.kq)("",!0)]),(0,n._)("button",{class:"bg-green-600",onClick:e[3]||(e[3]=e=>t.newsFilter=0)},["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",y,"一般公告")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",k,"General")):(0,n.kq)("",!0)]),(0,n._)("button",{class:"bg-blue-600",onClick:e[4]||(e[4]=e=>t.newsFilter=2)},["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",b,"檔案下載")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",f,"Download")):(0,n.kq)("",!0)])]),(0,n._)("table",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.newsList,((e,s)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:s},[!("home"==t.display&&s<8||"news"==t.display)||9!=t.newsFilter&&e.category!=t.newsFilter||0==e.release_status?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("tbody",{key:0,onClick:s=>t.$router.push(`/news/post/${e.bulletin_id}`)},[(0,n._)("tr",null,[(0,n._)("td",v,[1==e.pinned?((0,n.wg)(),(0,n.iD)("span",x,"label_important")):(0,n.kq)("",!0)]),(0,n._)("td",M,[0==e.category?((0,n.wg)(),(0,n.iD)("span",q,["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",C,"一般公告")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",z,"General")):(0,n.kq)("",!0)])):(0,n.kq)("",!0),1==e.category?((0,n.wg)(),(0,n.iD)("span",S,["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",H,"競賽資訊")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",F,"Event Info")):(0,n.kq)("",!0)])):(0,n.kq)("",!0),2==e.category?((0,n.wg)(),(0,n.iD)("span",E,["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",I,"檔案下載")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",$,"Download")):(0,n.kq)("",!0)])):(0,n.kq)("",!0),3==e.category?((0,n.wg)(),(0,n.iD)("span",L,["zh_tw"==t.language?((0,n.wg)(),(0,n.iD)("span",Z,"重要消息")):(0,n.kq)("",!0),"en_us"==t.language?((0,n.wg)(),(0,n.iD)("span",N,"Important")):(0,n.kq)("",!0)])):(0,n.kq)("",!0)]),(0,n._)("td",T,(0,i.zw)(e.title),1),(0,n._)("td",V,"["+(0,i.zw)(e.date)+"]",1)]),(0,n._)("tr",A,[(0,n._)("td",G,(0,i.zw)(e.title),1)])],8,D))],64)))),128))]),"home"==t.display?((0,n.wg)(),(0,n.iD)("div",P,[(0,n._)("button",{class:"bg-gray-500 text-white py-2 px-5",onClick:e[5]||(e[5]=e=>t.$router.push("/news"))},"更多 More...")])):(0,n.kq)("",!0)])}var U=s(4870),B=s(6523),W=s(65),Y=(0,n.aZ)({props:["displayMode"],setup(t){const e=new B.L,s=(0,W.oR)(),i=(0,U.iH)(t.displayMode),a=(0,U.iH)([]),l=(0,U.iH)(9);function o(){e.Url("bulletin/list").GetNoH(a)}return o(),{newsList:a,newsFilter:l,display:i,language:(0,n.Fl)((()=>s.state.language))}}}),j=s(89);const K=(0,j.Z)(Y,[["render",R],["__scopeId","data-v-4d28edfc"]]);var J=K}}]);
//# sourceMappingURL=872.900c51d5.js.map