import{_ as c,o as n,c as l,d as t,z as d}from"./index.20fd9f9c.js";class h{constructor(e){this.video=e,this.mediaRecorder=null,this.chunks=[]}init(){return new Promise((e,s)=>{navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(i=>{"srcObject"in this.video?this.video.srcObject=i:this.video.src=window.URL.createObjectURL(i),this.video.addEventListener("loadmetadata",()=>{this.video.play()}),this.mediaRecorder=new MediaRecorder(i),this.mediaRecorder.addEventListener("dataavailable",o=>{this.chunks.push(o.data)}),e()}).catch(i=>{s(i)})})}startRecord(){this.mediaRecorder.state==="inactive"&&this.mediaRecorder.start()}stopRecord(){this.mediaRecorder.state==="recording"&&this.mediaRecorder.stop()}isSupport(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)return!0}}const v={name:"basic-video",props:{background:{type:String},width:{type:[String,Number],default:500}},computed:{styleName(){return{width:`${this.width}px`}},imgStyleName(){return{width:`${this.width/2}px`}},borderStyleName(){return{width:`${this.width/15}px`,height:`${this.width/15}px`,borderWidth:`${5}px`}}},data(){return{videoObj:null}},mounted(){this.init()},methods:{init(){this.videoObj=new h(this.$refs.main),this.videoObj.init().then(()=>{this.videoObj.mediaRecorder.addEventListener("stop",this.getData,!1)})},startRecord(){this.videoObj.startRecord()},stopRecord(){this.videoObj.stopRecord()},getData(){const r=new Blob(this.videoObj.chunks,{type:"video/mp4"}),e=new FileReader;e.readAsDataURL(r),e.addEventListener("loadend",()=>{var s=e.result;this.$emit("data-change",s)})}}},m={class:"basic-video__border"},u=["src"],_={class:"basic-video__main",ref:"main",autoplay:"",muted:""};function b(r,e,s,i,o,a){return n(),l("div",{style:d(a.styleName),class:"basic-video"},[t("div",m,[t("span",{style:d(a.borderStyleName)},null,4),t("span",{style:d(a.borderStyleName)},null,4),t("span",{style:d(a.borderStyleName)},null,4),t("span",{style:d(a.borderStyleName)},null,4)]),t("img",{style:d(a.imgStyleName),class:"basic-video__img",src:s.background},null,12,u),t("video",_,null,512)],4)}var y=c(v,[["render",b],["__scopeId","data-v-45b0dc82"]]);export{y as default};
