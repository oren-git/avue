var h=Object.defineProperty;var c=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,n=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&l(e,o,t[o]);if(c)for(var o of c(t))m.call(t,o)&&l(e,o,t[o]);return e};import{_ as u,m as f,r as i,o as v,c as x,d as s,g as _,i as d,u as b,F as $,p as g,e as I,h as S}from"./index.20fd9f9c.js";import y from"./dashboard.c17e1d33.js";const B={name:"wel",components:{dashboard:y},computed:n({},f(["userInfo"])),created(){},methods:{}},a=e=>(g("data-v-fcd717ee"),e=e(),I(),e),N={class:"wel__header"},V={class:"wel__info"},k=["src"],C={class:"wel__info-content"},F={class:"wel__info-title"},j={class:"wel__info-subtitle"},D={class:"wel__extra"},E={class:"wel__extra-item"},G={class:"wel__extra-title"},T=a(()=>s("p",{class:"wel__extra-subtitle"}," 56 ",-1)),q={class:"wel__extra-item"},z={class:"wel__extra-title"},A=a(()=>s("p",{class:"wel__extra-subtitle"},[S(" 8 "),s("span",null,"/ 24")],-1)),H={class:"wel__extra-item"},J={class:"wel__extra-title"},K=a(()=>s("p",{class:"wel__extra-subtitle"}," 2,223 ",-1));function L(e,t,o,M,O,P){const r=i("dashboard"),p=i("basic-container");return v(),x($,null,[s("div",null,[s("div",N,[s("div",V,[s("img",{src:e.userInfo.avatar,alt:"",class:"wel__info-img"},null,8,k),s("div",C,[s("div",F,_(e.$t("wel.info")),1),s("div",j,_(e.$t("wel.dept")),1)])]),s("div",D,[s("div",E,[s("p",G,_(e.$t("wel.count")),1),T]),s("div",q,[s("p",z,_(e.$t("wel.team")),1),A]),s("div",H,[s("p",J,_(e.$t("wel.project")),1),K])])])]),d(p,null,{default:b(()=>[d(r)]),_:1})],64)}var W=u(B,[["render",L],["__scopeId","data-v-fcd717ee"]]);export{W as default};
