(function(){"use strict";var e={1412:function(e,t,n){var r=n(9242),o=n(3396);const a=(0,o._)("nav",null,null,-1);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o.Wm)(n)],64)}var u=n(89);const l={},c=(0,u.Z)(l,[["render",i]]);var s=c,d=n(2483),p=n(7139);const f=e=>((0,o.dD)("data-v-65f29851"),e=e(),(0,o.Cn)(),e),m={class:"home"},b=f((()=>(0,o._)("div",{class:"d-flex justify-content-end align-items-center p-2"},[(0,o._)("img",{alt:"logo",class:"home__logo",src:"https://www.cryptocompare.com/media/35651259/logowbg.png"})],-1))),v={class:"d-flex flex-column justify-content-start mb-4"},g={class:"d-flex justify-content-start"},y={class:"d-flex flex-column mb-2"},h=f((()=>(0,o._)("label",{for:"input",class:"fw-semibold"},"Ticket",-1))),_={class:"d-flex justify-content-start align-items-center"},k=f((()=>(0,o._)("img",{class:"home__btn-image",src:"https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"},null,-1))),w=f((()=>(0,o._)("span",{class:"fw-semibold p-2"}," Add ",-1))),x=f((()=>(0,o._)("hr",{class:"m-4"},null,-1))),A=f((()=>(0,o._)("hr",{class:"m-3"},null,-1)));function j(e,t,n,r,a,i){const u=(0,o.up)("InputApp"),l=(0,o.up)("ButtonsApp"),c=(0,o.up)("TicketApp");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",null,[b,(0,o.Uk)(" "+(0,p.zw)(a.ticker)+" ",1),(0,o._)("div",v,[(0,o._)("div",g,[(0,o._)("div",y,[(0,o.Wm)(u,{type:"text",id:"input",placeholder:"Example: DOGE",modelValue:a.ticker,"onUpdate:modelValue":t[0]||(t[0]=e=>a.ticker=e),modelModifiers:{trim:!0},class:"home__input border border-success border-opacity-50 rounded mb-3"},{default:(0,o.w5)((()=>[h])),_:1},8,["modelValue"])])]),(0,o._)("div",_,[(0,o.Wm)(l,{size:"md",class:"home__btn rounded-pill"},{default:(0,o.w5)((()=>[k,w])),_:1})])])]),(0,o._)("div",null,[x,(0,o.Wm)(c,{class:"p-5 pb-3 m-4 home__ticket"}),A])])}const T=["type","placeholder","id","name","disabled","value"];function O(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.WI)(e.$slots,"default"),(0,o._)("input",{type:n.type,class:(0,p.C_)(["m-2 p-2",n.class]),placeholder:n.placeholder,id:n.id,name:n.name,disabled:n.disabled,value:n.modelValue,onChange:t[0]||(t[0]=(...e)=>i.updateInput&&i.updateInput(...e))},null,42,T)],64)}var C={name:"InputApp",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},id:{type:String},placeholder:{type:String},class:{type:String},name:{type:String},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const S=(0,u.Z)(C,[["render",O]]);var V=S;function I(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("button",{class:(0,p.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click"))},[(0,o.WI)(e.$slots,"default")],2)}var E={name:"ButtonsApp",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const D=(0,u.Z)(E,[["render",I]]);var W=D;const B=e=>((0,o.dD)("data-v-411dd17c"),e=e(),(0,o.Cn)(),e),P={class:"ticket d-flex flex-column justify-content-center"},F=B((()=>(0,o._)("img",{class:"ticket__image",src:"https://img.icons8.com/dotty/80/null/trash.png",alt:"trash"},null,-1))),$=B((()=>(0,o._)("span",{class:"p-1"},"Delete",-1)));function M(e,t,n,r,a,i){const u=(0,o.up)("InputApp"),l=(0,o.up)("ButtonsApp");return(0,o.wg)(),(0,o.iD)("div",P,[(0,o.Wm)(u,{class:"border border-0 bg-transparent",type:"text",modelValue:a.nameTicker,"onUpdate:modelValue":t[0]||(t[0]=e=>a.nameTicker=e),disabled:!0},null,8,["modelValue"]),(0,o.Wm)(u,{class:"border border-0 bg-transparent",type:"number",modelValue:a.rate,"onUpdate:modelValue":t[1]||(t[1]=e=>a.rate=e),disabled:!0},null,8,["modelValue"]),(0,o.Wm)(l,{color:"white ticket__btn"},{default:(0,o.w5)((()=>[F,$])),_:1})])}var Z={name:"TicketApp",components:{ButtonsApp:W,InputApp:V},data(){return{nameTicker:"",rate:""}}};const z=(0,u.Z)(Z,[["render",M],["__scopeId","data-v-411dd17c"]]);var U=z,H={name:"HomeView",components:{InputApp:V,ButtonsApp:W,TicketApp:U},data(){return{ticker:"yy"}}};const N=(0,u.Z)(H,[["render",j],["__scopeId","data-v-65f29851"]]);var L=N;const Y=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],q=(0,d.p7)({history:(0,d.PO)("/TicketsCrypto/"),routes:Y});var G=q,J=n(65),K=(0,J.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(s).use(K).use(G).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.f2bdf6cb.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TicketsCrypto/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1412)}));r=n.O(r)})();
//# sourceMappingURL=app.5baf0174.js.map