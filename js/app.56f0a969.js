(function(){"use strict";var e={4684:function(e,t,n){var r=n(9242),i=n(3396);const o=(0,i._)("nav",null,null,-1);function a(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[o,(0,i.Wm)(n)])}var s=n(89);const c={},l=(0,s.Z)(c,[["render",a]]);var u=l,d=n(2483),p=n(7139);const m=e=>((0,i.dD)("data-v-11432a08"),e=e(),(0,i.Cn)(),e),f={class:"home"},h=m((()=>(0,i._)("div",{class:"d-flex justify-content-end align-items-center p-2"},[(0,i._)("img",{alt:"logo",class:"home__logo",src:"https://www.cryptocompare.com/media/35651259/logowbg.png"})],-1))),g={class:"d-flex flex-column justify-content-start mb-4"},y={class:"d-flex justify-content-start"},b={class:"d-flex flex-column mb-2"},v=m((()=>(0,i._)("label",{for:"input",class:"fw-semibold m-1"},"Ticket",-1))),k={key:0,class:"mb-3 d-flex justify-content-between align-items-center m-1"},w={class:"home__hints bg-secondary bg-gradient p-1 text-white fw-lighter lh-1 font-size-small"},_={class:"d-flex justify-content-start align-items-center"},D=m((()=>(0,i._)("img",{class:"home__btn-image",src:"https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"},null,-1))),x=m((()=>(0,i._)("span",{class:"fw-semibold p-2"}," Add ",-1))),S=m((()=>(0,i._)("hr",{class:"m-4"},null,-1))),C={class:"d-flex align-items-center flex-wrap justify-content-center"},j=m((()=>(0,i._)("hr",{class:"m-3"},null,-1))),T={key:0},A={key:1},O=m((()=>(0,i._)("h6",{class:"fw-semibold home__h6"},"You have not added any tickers yet",-1))),E=[O];function I(e,t,n,o,a,s){const c=(0,i.up)("InputApp"),l=(0,i.up)("NoticeApp"),u=(0,i.up)("ButtonsApp"),d=(0,i.up)("TicketApp"),m=(0,i.up)("DropdownBox");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",null,[h,(0,i._)("div",g,[(0,i._)("div",y,[(0,i._)("div",b,[(0,i.Wm)(c,{type:"text",id:"input",name:"entry",placeholder:a.placeholder,modelValue:a.ticker,"onUpdate:modelValue":t[0]||(t[0]=e=>a.ticker=e),modelModifiers:{trim:!0},onKeydown:(0,r.D2)(s.add,["enter"]),class:(0,p.C_)(["home__input border border-success border-opacity-50 rounded",{error:a.hasError}])},{default:(0,i.w5)((()=>[v])),_:1},8,["placeholder","modelValue","onKeydown","class"]),0!=a.ticker.length?((0,i.wg)(),(0,i.iD)("div",k,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.coins,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"mx-1"},[(0,i._)("div",w,(0,p.zw)(e),1)])))),128))])):(0,i.kq)("",!0),a.isAddedTicker?((0,i.wg)(),(0,i.j4)(l,{key:1,class:"text-danger"},{default:(0,i.w5)((()=>[(0,i.Uk)("This ticker has already been added")])),_:1})):(0,i.kq)("",!0)])]),(0,i._)("div",_,[(0,i.Wm)(u,{size:"md",class:"home__btn rounded-pill",onClick:s.add},{default:(0,i.w5)((()=>[D,x])),_:1},8,["onClick"])])])]),a.tickers.length?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[S,(0,i._)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.tickers,(e=>((0,i.wg)(),(0,i.j4)(d,{key:e,t:e,class:(0,p.C_)([{active:a.currentStateTicker===e},"p-5 pb-3 m-4 home__ticket"]),onHandleDelete:t=>s.handleDelete(e),onClick:(0,r.iM)((t=>s.select(e)),["self"])},null,8,["t","class","onHandleDelete","onClick"])))),128))]),j,a.currentStateTicker?((0,i.wg)(),(0,i.iD)("div",T,[(0,i.Wm)(m,{onClose:t[1]||(t[1]=e=>a.currentStateTicker=null),currentStateTicker:a.currentStateTicker,percents:a.percents},null,8,["currentStateTicker","percents"])])):(0,i.kq)("",!0)],64)):a.isShow?((0,i.wg)(),(0,i.iD)("div",A,E)):(0,i.kq)("",!0)])}n(7658);const B={class:"d-flex flex-column p-1"},U=["type","placeholder","id","name","disabled","value"];function $(e,t,n,r,o,a){return(0,i.wg)(),(0,i.iD)("div",B,[(0,i.WI)(e.$slots,"default"),(0,i._)("input",{type:n.type,class:(0,p.C_)(["m-2 p-2",n.class]),placeholder:n.placeholder,id:n.id,name:n.name,disabled:n.disabled,value:n.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e))},null,42,U)])}var P={name:"InputApp",props:{modelValue:{type:[String,Number],default:null},type:{type:String,default:"text"},id:{type:String},placeholder:{type:String},class:{type:String},name:{type:String},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const W=(0,s.Z)(P,[["render",$]]);var z=W;function V(e,t,n,r,o,a){return(0,i.wg)(),(0,i.iD)("button",{class:(0,p.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click",t))},[(0,i.WI)(e.$slots,"default")],2)}var N={name:"ButtonsApp",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const Z=(0,s.Z)(N,[["render",V]]);var F=Z;const H=e=>((0,i.dD)("data-v-0afbcde0"),e=e(),(0,i.Cn)(),e),M={class:"ticket d-flex flex-column justify-content-center"},q={class:"border border-0 bg-transparent text-center mb-3",type:"text"},K={class:"border border-0 bg-transparent text-center mb-3 fs-2",type:"number"},Y=H((()=>(0,i._)("img",{class:"ticket__image",src:"https://img.icons8.com/dotty/80/null/trash.png",alt:"trash"},null,-1))),L=H((()=>(0,i._)("span",{class:"p-1"},"Delete",-1)));function G(e,t,n,r,o,a){const s=(0,i.up)("ButtonsApp");return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("div",q,(0,p.zw)(n.t.name+" -  USD"),1),(0,i._)("div",K,(0,p.zw)(n.t.price),1),(0,i.Wm)(s,{color:"white ticket__btn",onClick:t[0]||(t[0]=t=>e.$emit("handleDelete"))},{default:(0,i.w5)((()=>[Y,L])),_:1})])}var J={name:"TicketApp",components:{ButtonsApp:F},props:{t:{type:Object}},data(){return{}},emits:["handleDelete"]};const Q=(0,s.Z)(J,[["render",G],["__scopeId","data-v-0afbcde0"]]);var R=Q;const X=e=>((0,i.dD)("data-v-2c4ac2d5"),e=e(),(0,i.Cn)(),e),ee={class:"my-5 dropdown"},te={class:"d-flex justify-content-between align-items-center mb-2"},ne={class:"p-2"},re=X((()=>(0,i._)("img",{class:"dropdown__btn-image",src:"https://img.icons8.com/sf-ultralight/512/close-window.png"},null,-1))),ie={class:"dropdown__box d-flex justify-content-start align-items-end"};function oe(e,t,n,r,o,a){const s=(0,i.up)("ButtonsApp"),c=(0,i.up)("ChartColumn");return(0,i.wg)(),(0,i.iD)("div",ee,[(0,i._)("div",te,[(0,i._)("h5",ne,(0,p.zw)(n.currentStateTicker.name+" -  USD"),1),(0,i.Wm)(s,{size:"md",class:"bg-transparent border border-0",onClick:t[0]||(t[0]=t=>e.$emit("close"))},{default:(0,i.w5)((()=>[re])),_:1})]),(0,i._)("div",ie,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.calcPercents(),((e,t)=>((0,i.wg)(),(0,i.j4)(c,{key:t,style:(0,p.j5)({height:`${e}%`})},null,8,["style"])))),128))])])}function ae(e,t,n,r,o,a){return(0,i.wg)(),(0,i.iD)("div",{class:"chart__strip ms-2",style:(0,p.j5)(n.style)},null,4)}var se={name:"ChartColumn",props:{percent:{type:Number},style:{type:Object}}};const ce=(0,s.Z)(se,[["render",ae],["__scopeId","data-v-94b1b4de"]]);var le=ce,ue={name:"DropdownBox",components:{ButtonsApp:F,ChartColumn:le},props:{currentStateTicker:{type:Object},percents:{type:Array,default:()=>[]}},methods:{calcPercents(){const e=Math.max(...this.percents),t=this.percents.map((t=>5+t/e*95));return t}},emits:["close"]};const de=(0,s.Z)(ue,[["render",oe],["__scopeId","data-v-2c4ac2d5"]]);var pe=de;function me(e,t,n,r,o,a){return(0,i.wg)(),(0,i.iD)("p",{class:(0,p.C_)(n.class)},[(0,i.WI)(e.$slots,"default")],2)}var fe={name:"NoticeApp",props:{class:{type:String}}};const he=(0,s.Z)(fe,[["render",me]]);var ge=he,ye={name:"HomeView",components:{InputApp:z,ButtonsApp:F,TicketApp:R,DropdownBox:pe,NoticeApp:ge},data(){return{placeholder:"Example: DOGE",ticker:"",tickers:[],coin:"",coins:[],fourCoins:[],currentStateTicker:null,hasError:!1,percents:[],isAddedTicker:!1,isShow:!1}},mounted(){this.getCoinList()},methods:{add(){if(null===this.ticker||this.ticker.length<=2)return this.ticker="",this.placeholder="Enter valid value",void(this.hasError=!0);if(this.hasError=!1,this.tickers.find((e=>e.name===this.ticker.toUpperCase())))return void(this.isVisible=!0);const e={name:this.ticker.toUpperCase(),price:0};this.tickers.push(e),setInterval((async()=>{const t=await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${e.name}&tsyms=USD&api_key=27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a`),n=await t.json();let r=this.tickers.find((t=>t.name===e.name));r.price=n.USD>1?n.USD.toFixed(2):n.USD.toPrecision(2),e.price=n.USD,this.currentStateTicker?.name===e.name&&this.percents.push(n.USD)}),9e3),this.ticker=""},handleDelete(e){this.tickers=this.tickers.filter((t=>t!==e)),this.isShow=!0},select(e){this.currentStateTicker=e,this.percents=[]},async getCoinList(){try{const e=await fetch("https://min-api.cryptocompare.com/data/blockchain/list?&api_key=27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a"),t=await e.json();this.coin=t.symbol,this.coins=Object.values(t.Data).map((e=>e.symbol)),console.log(this.coins)}catch(e){console.log("there was an error")}}},watch:{"ticker.length"(){if(this.isAddedTicker=!1,this.ticker.length>1)return this.coins.filter((e=>e.startsWith(this.ticker)))}}};const be=(0,s.Z)(ye,[["render",I],["__scopeId","data-v-11432a08"]]);var ve=be;const ke=[{path:"/",name:"home",component:ve},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],we=(0,d.p7)({history:(0,d.PO)("/TicketsCrypto/"),routes:ke});var _e=we,De=n(65),xe=(0,De.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(u).use(xe).use(_e).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],o=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.7809bda4.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[i];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TicketsCrypto/"}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(t&&t(r);l<a.length;l++)o=a[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4684)}));r=n.O(r)})();
//# sourceMappingURL=app.56f0a969.js.map