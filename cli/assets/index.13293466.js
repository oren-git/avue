import{_ as u,E as w,w as x,G as b,o as d,c as f,d as o,z as r,l as a,n as h,g}from"./index.20fd9f9c.js";const m={props:{app:Object,onDestroy:Function},data(){return{isShow:!0,defaultIndex:10,activeIndex:20,isBoxMoving:!1,startPosition:{x:0,y:0},nowRect:{left:100,right:100,top:100,bottom:100},startRect:{left:0,right:0,top:0,bottom:0},isBoxResizing:!1,moveDirection:!1,isMaxShowing:!1,isFullScreen:!1}},computed:{location(){return w(this.app.path)?"":window.location.origin}},created(){this.app.width&&(this.nowRect.left=this.nowRect.right=(document.body.clientWidth-this.app.width)/2),this.app.height&&(this.nowRect.bottom=(document.body.clientHeight-this.app.height)/2+50,this.nowRect.top=(document.body.clientHeight-this.app.height)/2-50)},methods:{handleFocus(){let e=document.getElementsByClassName("moveBg");if(e.length==1)return;let t=0;for(let n=0;n<e.length;n++){let l=e[n].getElementsByClassName("box")[0].style,s=Number(l.zIndex);t<s&&(t=s)}t=t+1,this.$el.getElementsByClassName("box")[0].style.zIndex=t},close(){this.isShow=!1,this.onDestroy()},switchFullScreen(){this.app.disableResize||(this.isFullScreen=!this.isFullScreen,this.isFullScreen?this.isMaxShowing=!0:this.isMaxShowing=!1)},getExtBoxClasses(){let e="";return!this.isBoxResizing&&!this.isBoxMoving&&(e+="box-animation "),this.isMaxShowing&&(e+="isMaxShowing "),this.isFullScreen&&(e+="isFullScreen "),this.app.disableResize&&(e+="resize-disabled "),this.app.isTop&&(e+="isTop "),e},appBarDoubleClicked(){this.app.disableResize||(this.isMaxShowing=!this.isMaxShowing,this.isMaxShowing||(this.isFullScreen=!1))},positionMouseDown(e){this.isFullScreen||this.isMaxShowing||(this.startRect={left:this.nowRect.left,right:this.nowRect.right,top:this.nowRect.top,bottom:this.nowRect.bottom},this.startPosition.x=e.clientX,this.startPosition.y=e.clientY,this.isBoxMoving=!0)},mouseUp(){this.isBoxMoving=!1,this.isBoxResizing=!1,this.moveDirection=!1},mouseLeave(){this.isBoxMoving=!1,this.isBoxResizing=!1,this.moveDirection=!1},mouseMove(e){if(this.isBoxResizing){switch(this.isFullScreen=!1,this.isMaxShowing=!1,this.moveDirection){case"box-top-left":this.nowRect.top=this.startRect.top+(e.clientY-this.startPosition.y),this.nowRect.left=this.startRect.left+(e.clientX-this.startPosition.x);break;case"box-top-center":this.nowRect.top=this.startRect.top+(e.clientY-this.startPosition.y);break;case"box-top-right":this.nowRect.top=this.startRect.top+(e.clientY-this.startPosition.y),this.nowRect.right=this.startRect.right-(e.clientX-this.startPosition.x);break;case"box-center-left":this.nowRect.left=this.startRect.left+(e.clientX-this.startPosition.x);break;case"box-bottom-left":this.nowRect.left=this.startRect.left+(e.clientX-this.startPosition.x),this.nowRect.bottom=this.startRect.bottom-(e.clientY-this.startPosition.y);break;case"box-bottom-center":this.nowRect.bottom=this.startRect.bottom-(e.clientY-this.startPosition.y);break;case"box-center-right":this.nowRect.right=this.startRect.right-(e.clientX-this.startPosition.x);break;case"box-bottom-right":this.nowRect.right=this.startRect.right-(e.clientX-this.startPosition.x),this.nowRect.bottom=this.startRect.bottom-(e.clientY-this.startPosition.y);break}return}if(this.isBoxMoving){this.isFullScreen=!1,this.isMaxShowing=!1,this.nowRect.left=this.startRect.left+(e.clientX-this.startPosition.x),this.nowRect.right=this.startRect.right-(e.clientX-this.startPosition.x),this.nowRect.top=this.startRect.top+(e.clientY-this.startPosition.y),this.nowRect.bottom=this.startRect.bottom-(e.clientY-this.startPosition.y);return}},resizeMouseDown(e){this.app.disableResize||this.isFullScreen||this.isMaxShowing||(this.startRect={left:this.nowRect.left,top:this.nowRect.top,right:this.nowRect.right,bottom:this.nowRect.bottom},this.startPosition.x=e.clientX,this.startPosition.y=e.clientY,this.isBoxResizing=!0,this.moveDirection=e.target.className)}}},R={class:"box-top"},p={class:"box-center"},M={class:"box-center-center loader"},v={class:"controll"},z=["src"],D={class:"box-bottom"};function S(e,t,n,c,l,s){return x((d(),f("div",{class:"moveBg",onClick:t[12]||(t[12]=(...i)=>s.handleFocus&&s.handleFocus(...i)),onMousemove:t[13]||(t[13]=(...i)=>s.mouseMove&&s.mouseMove(...i)),onMouseup:t[14]||(t[14]=(...i)=>s.mouseUp&&s.mouseUp(...i)),onMouseleave:t[15]||(t[15]=a((...i)=>s.mouseLeave&&s.mouseLeave(...i),["stop"])),style:r({pointerEvents:l.isBoxResizing||l.isBoxMoving?"auto":"none"})},[o("div",{class:h(["box",s.getExtBoxClasses()]),style:r({left:l.nowRect.left+"px",top:l.nowRect.top+"px",bottom:l.nowRect.bottom+"px",right:l.nowRect.right+"px"})},[o("div",R,[o("div",{class:"box-top-left",onMousedown:t[0]||(t[0]=(...i)=>s.resizeMouseDown&&s.resizeMouseDown(...i))},null,32),o("div",{class:"box-top-center",onMousedown:t[1]||(t[1]=(...i)=>s.resizeMouseDown&&s.resizeMouseDown(...i))},null,32),o("div",{class:"box-top-right",onMousedown:t[2]||(t[2]=(...i)=>s.resizeMouseDown&&s.resizeMouseDown(...i))},null,32)]),o("div",p,[o("div",{class:"box-center-left",onMousedown:t[3]||(t[3]=(...i)=>s.resizeMouseDown&&s.resizeMouseDown(...i))},null,32),o("div",M,[o("div",{class:"app-bar",style:r({backgroundColor:n.app.tabbarBgColor}),onMousedown:t[6]||(t[6]=a((...i)=>s.positionMouseDown&&s.positionMouseDown(...i),["stop"])),onDblclick:t[7]||(t[7]=(...i)=>s.appBarDoubleClicked&&s.appBarDoubleClicked(...i))},[o("div",v,[o("div",{class:"close",onClick:t[4]||(t[4]=a((...i)=>s.close&&s.close(...i),["stop"]))}),o("div",{class:h(["full",n.app.disableResize?"full-disabled":""]),onClick:t[5]||(t[5]=a((...i)=>s.switchFullScreen&&s.switchFullScreen(...i),["stop"]))},null,2)]),o("div",{class:"title",style:r({color:n.app.tabbarTextColor})},g(n.app.title),5)],36),o("iframe",{src:s.location+n.app.path,frameborder:"0",class:"iframe"},null,8,z)]),o("div",{class:"box-center-right",onMousedown:t[8]||(t[8]=(...i)=>s.resizeMouseDown&&s.resizeMouseDown(...i))},null,32)]),o("div",D,[o("div",{class:"box-bottom-left",onMousedown:t[9]||(t[9]=(...i)=>s.resizeMouseDown&&s.resizeMouseDown(...i))},null,32),o("div",{class:"box-bottom-center",onMousedown:t[10]||(t[10]=(...i)=>s.resizeMouseDown&&s.resizeMouseDown(...i))},null,32),o("div",{class:"box-bottom-right",onMousedown:t[11]||(t[11]=(...i)=>s.resizeMouseDown&&s.resizeMouseDown(...i))},null,32)])],6)],36)),[[b,l.isShow]])}var B=u(m,[["render",S],["__scopeId","data-v-741c457d"]]);export{B as default};