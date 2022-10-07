"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[685],{8924:function(e,l,a){a.d(l,{Z:function(){return p}});var t=a(3396),d=a(9242);const n={class:"fixed z-10 left-0 top-0 w-full h-screen bg-black bg-opacity-40 p-5 box-border overflow-hidden"},i={class:"box-border w-full h-full bg-white relative p-5 sm:p-10 flex flex-col overflow-hidden rounded"},s={class:"flex items-center"},u={class:"flex-grow font-medium"},o={class:"flex-grow h-full overflow-hidden p-1"};function r(e,l,a,r,_,m){return(0,t.wg)(),(0,t.j4)(d.uT,{name:"modal"},{default:(0,t.w5)((()=>[(0,t._)("div",n,[(0,t._)("div",i,[(0,t._)("div",s,[(0,t._)("div",u,[(0,t.WI)(e.$slots,"title")]),(0,t._)("div",{class:"text-4xl text-gray-300 hover:text-gray-500 cursor-pointer duration-300 font-light",onClick:l[0]||(l[0]=(...l)=>e.closeModal&&e.closeModal(...l))},"×")]),(0,t._)("div",o,[(0,t.WI)(e.$slots,"content")])])])])),_:3})}var _=(0,t.aZ)({setup(e,l){function a(){l.emit("close_modal")}return{closeModal:a}}}),m=a(89);const c=(0,m.Z)(_,[["render",r]]);var p=c},8058:function(e,l,a){a.d(l,{Z:function(){return ye}});var t=a(3396),d=a(9242),n=a(7139);const i=e=>((0,t.dD)("data-v-998420a6"),e=e(),(0,t.Cn)(),e),s={class:"h-full overflow-y-auto pb-5"},u=i((()=>(0,t._)("td",{class:"w-[20%]"},"報名系統",-1))),o={class:"w-[30%]"},r=i((()=>(0,t._)("td",{class:"w-[20%]"},null,-1))),_=i((()=>(0,t._)("td",{class:"w-[30%]"},null,-1))),m=i((()=>(0,t._)("td",null,"賽事中文",-1))),c={colspan:"3"},p=["readonly"],g=i((()=>(0,t._)("td",null,"賽事英文",-1))),b={colspan:"3"},v=["readonly"],y=i((()=>(0,t._)("td",null,"賽事說明",-1))),f={colspan:"3"},w={key:0},V={key:1,class:"max-h-48 overflow-auto whitespace-pre-wrap"},h=["innerHTML"],U=i((()=>(0,t._)("td",null,"運動項目",-1))),H={colspan:"3"},E=["value"],k=i((()=>(0,t._)("td",null,"負責單位",-1))),S={colspan:"3"},A=["disabled"],D={key:0,class:"inline-block m-1 border-2 rounded py-1 px-2"},O=i((()=>(0,t._)("td",null,"比賽日期",-1))),L={colspan:"3"},x=["readonly"],j=i((()=>(0,t._)("td",null,"報名開始",-1))),M={colspan:"3"},C=["readonly"],W=i((()=>(0,t._)("td",null,"報名結束",-1))),T={colspan:"3"},Z=["readonly"],Y=i((()=>(0,t._)("td",{class:"w-[20%]"},"比賽性質",-1))),q={class:"w-[30%]"},z=i((()=>(0,t._)("td",{class:"w-[20%]"},"報名單位",-1))),G={class:"w-[30%]"},I=i((()=>(0,t._)("td",{class:"w-[20%]"},"報名選手限同系所",-1))),R={class:"w-[30%]"},J=i((()=>(0,t._)("td",{class:"w-[20%]"},"報名選手限同團體",-1))),K={class:"w-[30%]"},N=i((()=>(0,t._)("td",{class:"w-[20%]"},"同一單位限報一隊",-1))),$={class:"w-[30%]"},B=i((()=>(0,t._)("td",null,"使用報名系統",-1))),Q=i((()=>(0,t._)("td",null,"自有報名系統",-1))),F=["disabled","readonly"],P=i((()=>(0,t._)("td",null,"使用管理系統",-1))),X=i((()=>(0,t._)("td",null,"自有管理系統",-1))),ee=["disabled","readonly"],le=i((()=>(0,t._)("td",null,"使用網站頁面",-1))),ae=i((()=>(0,t._)("td",null,"自有網站頁面",-1))),te=["disabled","readonly"],de={class:"text-2xl"},ne={key:0},ie=i((()=>(0,t._)("hr",{class:"my-2"},null,-1))),se=["value"];function ue(e,l,a,i,ue,oe){const re=(0,t.up)("Toggle"),_e=(0,t.up)("QuillEditor"),me=(0,t.up)("SmallModal");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",s,[(0,t._)("table",null,[(0,t._)("tr",null,[u,(0,t._)("td",o,[(0,t.Wm)(re,{modelValue:e.regSwitch,"onUpdate:modelValue":l[0]||(l[0]=l=>e.regSwitch=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"關閉",onLabel:"開啟"},null,8,["modelValue","disabled"])]),r,_]),(0,t._)("tr",null,[m,(0,t._)("td",c,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=l=>e.nameCh=l),readonly:!e.isEdit},null,8,p),[[d.nr,e.nameCh]])])]),(0,t._)("tr",null,[g,(0,t._)("td",b,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=l=>e.nameEn=l),readonly:!e.isEdit},null,8,v),[[d.nr,e.nameEn]])])]),(0,t._)("tr",null,[y,(0,t._)("td",f,[e.isEdit?((0,t.wg)(),(0,t.iD)("div",w,[(0,t.Wm)(_e,{theme:"snow",toolbar:"full",content:e.info,"onUpdate:content":l[3]||(l[3]=l=>e.info=l),contentType:"html"},null,8,["content"])])):((0,t.wg)(),(0,t.iD)("div",V,[(0,t._)("div",{innerHTML:e.info},null,8,h)]))])]),(0,t._)("tr",null,[U,(0,t._)("td",H,[(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":l[4]||(l[4]=l=>e.type=l),disabled:""},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.sportList,((e,l)=>((0,t.wg)(),(0,t.iD)("option",{key:l,value:e.code},(0,n.zw)(e.name_ch),9,E)))),128))],512),[[d.bM,e.type]])])]),(0,t._)("tr",null,[k,(0,t._)("td",S,[(0,t._)("div",null,[(0,t._)("button",{onClick:l[5]||(l[5]=l=>e.displayModal=1),disabled:!e.isEdit},"選取",8,A)]),(0,t._)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.divisionList,((l,a)=>((0,t.wg)(),(0,t.iD)(t.HY,{key:a},[e.hostDivision.indexOf(l.division_id)>-1?((0,t.wg)(),(0,t.iD)("span",D,(0,n.zw)(l.name_ch),1)):(0,t.kq)("",!0)],64)))),128))])])]),(0,t._)("tr",null,[O,(0,t._)("td",L,[(0,t.wy)((0,t._)("input",{type:"date","onUpdate:modelValue":l[6]||(l[6]=l=>e.eventStart=l),readonly:!e.isEdit},null,8,x),[[d.nr,e.eventStart]])])]),(0,t._)("tr",null,[j,(0,t._)("td",M,[(0,t.wy)((0,t._)("input",{type:"datetime-local","onUpdate:modelValue":l[7]||(l[7]=l=>e.regStart=l),readonly:!e.isEdit},null,8,C),[[d.nr,e.regStart]])])]),(0,t._)("tr",null,[W,(0,t._)("td",T,[(0,t.wy)((0,t._)("input",{type:"datetime-local","onUpdate:modelValue":l[8]||(l[8]=l=>e.regEnd=l),readonly:!e.isEdit},null,8,Z),[[d.nr,e.regEnd]])])]),(0,t._)("tr",null,[Y,(0,t._)("td",q,[(0,t.Wm)(re,{modelValue:e.nsysu,"onUpdate:modelValue":l[9]||(l[9]=l=>e.nsysu=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"校內",onLabel:"校外"},null,8,["modelValue","disabled"])]),z,(0,t._)("td",G,[(0,t.Wm)(re,{modelValue:e.regUnit,"onUpdate:modelValue":l[10]||(l[10]=l=>e.regUnit=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"團體",onLabel:"系所"},null,8,["modelValue","disabled"])])]),(0,t._)("tr",null,[1==e.regUnit?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[I,(0,t._)("td",R,[(0,t.Wm)(re,{modelValue:e.sameDept,"onUpdate:modelValue":l[11]||(l[11]=l=>e.sameDept=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"不限",onLabel:"限制"},null,8,["modelValue","disabled"])])],64)):(0,t.kq)("",!0),0==e.regUnit?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[J,(0,t._)("td",K,[(0,t.Wm)(re,{modelValue:e.sameOrg,"onUpdate:modelValue":l[12]||(l[12]=l=>e.sameOrg=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"不限",onLabel:"限制"},null,8,["modelValue","disabled"])])],64)):(0,t.kq)("",!0),N,(0,t._)("td",$,[(0,t.Wm)(re,{modelValue:e.onlyTeam,"onUpdate:modelValue":l[13]||(l[13]=l=>e.onlyTeam=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"不限",onLabel:"限制"},null,8,["modelValue","disabled"])])]),(0,t._)("tr",null,[B,(0,t._)("td",null,[(0,t.Wm)(re,{modelValue:e.useReg,"onUpdate:modelValue":l[14]||(l[14]=l=>e.useReg=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"否",onLabel:"是"},null,8,["modelValue","disabled"])]),Q,(0,t._)("td",null,[(0,t.wy)((0,t._)("input",{type:"text",disabled:"1"===e.useReg,"onUpdate:modelValue":l[15]||(l[15]=l=>e.regUrl=l),readonly:!e.isEdit,placeholder:"請輸入網址"},null,8,F),[[d.nr,e.regUrl]])])]),(0,t._)("tr",null,[P,(0,t._)("td",null,[(0,t.Wm)(re,{modelValue:e.useManage,"onUpdate:modelValue":l[16]||(l[16]=l=>e.useManage=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"否",onLabel:"是"},null,8,["modelValue","disabled"])]),X,(0,t._)("td",null,[(0,t.wy)((0,t._)("input",{type:"text",disabled:"1"===e.useManage,"onUpdate:modelValue":l[17]||(l[17]=l=>e.manageUrl=l),readonly:!e.isEdit,placeholder:"請輸入網址"},null,8,ee),[[d.nr,e.manageUrl]])])]),(0,t._)("tr",null,[le,(0,t._)("td",null,[(0,t.Wm)(re,{modelValue:e.useSite,"onUpdate:modelValue":l[18]||(l[18]=l=>e.useSite=l),disabled:!e.isEdit,falseValue:"0",trueValue:"1",offLabel:"否",onLabel:"是"},null,8,["modelValue","disabled"])]),ae,(0,t._)("td",null,[(0,t.wy)((0,t._)("input",{type:"text",disabled:"1"===e.useSite,"onUpdate:modelValue":l[19]||(l[19]=l=>e.siteUrl=l),readonly:!e.isEdit,placeholder:"請輸入網址"},null,8,te),[[d.nr,e.siteUrl]])])])]),(0,t._)("div",null,[0==e.isEdit?((0,t.wg)(),(0,t.iD)("button",{key:0,class:"w-full",onClick:l[20]||(l[20]=l=>e.isEdit=!0)},"編輯")):(0,t.kq)("",!0),1==e.isEdit?((0,t.wg)(),(0,t.iD)("button",{key:1,class:"w-full",onClick:l[21]||(l[21]=(...l)=>e.submitAll&&e.submitAll(...l))},"儲存")):(0,t.kq)("",!0)])]),(0,t.wy)((0,t.Wm)(me,{onClose_modal:l[23]||(l[23]=l=>e.displayModal=0)},{title:(0,t.w5)((()=>[(0,t._)("div",de,[1==e.displayModal?((0,t.wg)(),(0,t.iD)("div",ne,"選擇單位")):(0,t.kq)("",!0)])])),content:(0,t.w5)((()=>[ie,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.divisionList,((a,i)=>((0,t.wg)(),(0,t.iD)("label",{key:i,class:(0,n.C_)({"division-label":!0,"division-selected":e.hostDivision.indexOf(a.division_id)>-1})},[(0,t._)("span",null,(0,n.zw)(a.name_ch),1),(0,t.wy)((0,t._)("input",{class:"hidden",type:"checkbox",value:a.division_id,"onUpdate:modelValue":l[22]||(l[22]=l=>e.hostDivision=l)},null,8,se),[[d.e8,e.hostDivision]])],2)))),128))])),_:1},512),[[d.F8,e.displayModal>0]])],64)}var oe=a(4870),re=a(6617),_e=a(3927),me=a(1435),ce=a(2483),pe=a(6149),ge=(0,t.aZ)({props:["gameType"],setup(e,l){const a=new _e.L,t=new _e._,d=(0,ce.yj)(),n=(0,oe.iH)(e.gameType),i=(0,oe.iH)(0),s=(0,oe.iH)([]);function u(){a.Url("sports/list").GetAll(s)}u();const o=(0,oe.iH)([]);function r(){a.Url("division/list").GetAll(o)}r();const _=(0,oe.iH)(""),m=(0,oe.iH)(""),c=(0,oe.iH)(""),p=(0,oe.iH)("athl"),g=(0,oe.iH)([]),b=(0,oe.iH)(""),v=(0,oe.iH)(""),y=(0,oe.iH)(""),f=(0,oe.iH)("0"),w=(0,oe.iH)("1"),V=(0,oe.iH)("0"),h=(0,oe.iH)("0"),U=(0,oe.iH)("0"),H=(0,oe.iH)("0"),E=(0,oe.iH)("1"),k=(0,oe.iH)(""),S=(0,oe.iH)("1"),A=(0,oe.iH)(""),D=(0,oe.iH)("1"),O=(0,oe.iH)("");function L(){a.Url(`games/${d.params.gameId}`).Get().then((e=>{_.value=e.name_ch,m.value=e.name_en,c.value=e.info,p.value=e.type,g.value=JSON.parse(e.host_division),b.value=e.reg_start,v.value=e.reg_end,y.value=e.event_start,f.value=String(e.nsysu),w.value=String(e.reg_switch),V.value=String(e.same_org),h.value=String(e.same_dept),U.value=String(e.only_team),H.value=String(e.reg_unit),E.value=String(e.use_reg),k.value=e.reg_url,S.value=String(e.use_manage),A.value=e.manage_url,D.value=String(e.use_site),O.value=e.site_url}))}function x(){"1"===E.value&&(k.value=""),"1"===S.value&&(A.value=""),"1"===D.value&&(O.value=""),a.Dataset().AddObj("name_ch",_).AddObj("name_en",m).AddObj("info",c).AddObj("type",p).AddObj("reg_start",b).AddObj("reg_end",v).AddObj("event_start",y).AddObj("nsysu",f).AddObj("reg_switch",w).Add("host_division",JSON.stringify(g.value)).AddObj("same_org",V).AddObj("same_dept",h).AddObj("only_team",U).AddObj("reg_unit",H).AddObj("use_reg",E).AddObj("reg_url",k).AddObj("use_manage",S).AddObj("manage_url",A).AddObj("use_site",D).AddObj("site_url",O),new Blob([JSON.stringify(a.GetDset())]).size>1e7?t.Alert("總大小大於10Mb，無法上傳"):a.Url("games/edit").Patch(String(d.params.gameId),a.GetDset()).then((e=>{"done"===e.message&&(t.Alert("已更新比賽資訊"),l.emit("refresh"),l.emit("close_modal"))}))}return L(),{nameCh:_,nameEn:m,info:c,type:p,hostDivision:g,regStart:b,regEnd:v,eventStart:y,nsysu:f,regSwitch:w,sameOrg:V,sameDept:h,onlyTeam:U,regUnit:H,useReg:E,regUrl:k,useManage:S,manageUrl:A,useSite:D,siteUrl:O,submitAll:x,sportList:s,divisionList:o,displayModal:i,gameCode:n,isEdit:(0,oe.iH)(!1)}},components:{Toggle:re.Z,SmallModal:me.Z,QuillEditor:pe.Bn}}),be=a(89);const ve=(0,be.Z)(ge,[["render",ue],["__scopeId","data-v-998420a6"]]);var ye=ve}}]);
//# sourceMappingURL=685.55916652.js.map