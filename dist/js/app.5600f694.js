(function(){"use strict";var t={5155:function(t,e,n){var r=n(9242),o=n(3396);const a={class:"container column"};function i(t,e,n,r,i,u){const l=(0,o.up)("app-form"),s=(0,o.up)("app-summary"),c=(0,o.up)("app-comment");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o.Wm)(l,{onAddNewBlock:u.addNewSummaryBlock},null,8,["onAddNewBlock"]),(0,o.Wm)(s,{summary:i.summary},null,8,["summary"])]),(0,o.Wm)(c)],64)}n(7658);var u=n(7139);const l={class:"card card-w30"},s={class:"form-control"},c=(0,o._)("label",{for:"type"},"Тип блока",-1),m=["value"],d={class:"form-control"},p=(0,o._)("label",{for:"value"},"Значение",-1),v=["disabled"];function y(t,e,n,a,i,y){return(0,o.wg)(),(0,o.iD)("form",l,[(0,o._)("div",s,[c,(0,o.wy)((0,o._)("select",{id:"type","onUpdate:modelValue":e[0]||(e[0]=t=>i.typeBlock=t)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.options,((t,e)=>((0,o.wg)(),(0,o.iD)("option",{value:e,key:e},(0,u.zw)(t),9,m)))),128))],512),[[r.bM,i.typeBlock]])]),(0,o._)("div",d,[p,(0,o.wy)((0,o._)("textarea",{id:"value",rows:"3","onUpdate:modelValue":e[1]||(e[1]=t=>i.valueBlock=t)},null,512),[[r.nr,i.valueBlock]])]),(0,o._)("button",{class:"btn primary",disabled:y.isDisabledBtn,onClick:e[2]||(e[2]=(0,r.iM)(((...t)=>y.addBlock&&y.addBlock(...t)),["prevent"]))},"Добавить",8,v)])}var f={name:"AppForm",emits:["addNewBlock"],data(){return{options:{title:"Заголовок",subtitle:"Подзаголовок",avatar:"Аватар",text:"Текст"},valueBlock:"",typeBlock:"title"}},methods:{addBlock(){const t={type:this.typeBlock,value:this.valueBlock};this.$emit("addNewBlock",t),this.valueBlock="",this.typeBlock="title"}},computed:{isDisabledBtn(){return this.valueBlock.length<4}}},w=n(89);const h=(0,w.Z)(f,[["render",y]]);var g=h;const k={class:"card card-w70"},b={key:0};function B(t,e,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",k,[i.isEmptySummary?((0,o.wg)(),(0,o.iD)("h3",b,"Добавьте первый блок, чтобы увидеть результат")):((0,o.wg)(!0),(0,o.iD)(o.HY,{key:1},(0,o.Ko)(n.summary,((t,e)=>((0,o.wg)(),(0,o.j4)((0,o.LL)("summary-"+t.type),{key:e,value:t.value},null,8,["value"])))),128))])}const D={class:"avatar"},_=["src"];function S(t,e,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("img",{src:n.value,alt:"Аватарка"},null,8,_)])}var C={name:"SummaryAvatar",props:{value:{type:String,required:!0}}};const L=(0,w.Z)(C,[["render",S]]);var A=L;function O(t,e,n,r,a,i){return(0,o.wg)(),(0,o.iD)("h1",null,(0,u.zw)(n.value),1)}var j={name:"SummaryTitle",props:{value:{type:String,required:!0}}};const x=(0,w.Z)(j,[["render",O]]);var Z=x;function q(t,e,n,r,a,i){return(0,o.wg)(),(0,o.iD)("p",null,(0,u.zw)(n.value),1)}var T={name:"SummaryText",props:{value:{type:String,required:!0}}};const z=(0,w.Z)(T,[["render",q]]);var N=z;function H(t,e,n,r,a,i){return(0,o.wg)(),(0,o.iD)("h2",null,(0,u.zw)(n.value),1)}var Y={name:"SummarySubTitle",props:{value:{type:String,required:!0}}};const E=(0,w.Z)(Y,[["render",H]]);var F=E,K={name:"AppSummary",props:{summary:Array,default:[]},components:{SummaryAvatar:A,SummaryTitle:Z,SummaryText:N,"summary-subtitle":F},computed:{isEmptySummary(){return 0===this.summary.length}}};const M=(0,w.Z)(K,[["render",B]]);var W=M;const P={class:"container"},U=(0,o._)("button",{class:"btn primary"},"Загрузить комментарии",-1),V=[U],$={key:1,class:"card"},G=(0,o._)("h2",null,"Комментарии",-1),I={class:"list"},J={key:2,class:"loader"};function Q(t,e,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",P,[a.isLoadComments?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",{key:0,onClick:e[0]||(e[0]=(...t)=>i.uploadComments&&i.uploadComments(...t))},V)),a.isLoad?((0,o.wg)(),(0,o.iD)("div",$,[G,(0,o._)("ul",I,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.comments,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{class:"list-item",key:t.id},[(0,o._)("div",null,[(0,o._)("p",null,[(0,o._)("strong",null,(0,u.zw)(t.email),1)]),(0,o._)("small",null,(0,u.zw)(t.body),1)])])))),128))])])):(0,o.kq)("",!0),a.isLoading?((0,o.wg)(),(0,o.iD)("div",J)):(0,o.kq)("",!0)])}var R={name:"AppComment",data(){return{isLoadComments:!1,isLoading:!1,isLoad:!1,comments:[]}},methods:{async uploadComments(){this.isLoadComments=!0,this.isLoading=!0;const t=await fetch("https://jsonplaceholder.typicode.com/comments?_limit=42");this.comments=await t.json(),console.log(this.comments),this.isLoad=!0,this.isLoading=!1}}};const X=(0,w.Z)(R,[["render",Q]]);var tt=X,et={data(){return{summary:[]}},components:{AppForm:g,AppSummary:W,AppComment:tt},methods:{addNewSummaryBlock(t){this.summary.push(t)}}};const nt=(0,w.Z)(et,[["render",i]]);var rt=nt;(0,r.ri)(rt).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],a=t[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(u=!1,a<i&&(i=a));if(u){t.splice(c--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],l=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var c=l(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunkcourse"]=self["webpackChunkcourse"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5155)}));r=n.O(r)})();
//# sourceMappingURL=app.5600f694.js.map