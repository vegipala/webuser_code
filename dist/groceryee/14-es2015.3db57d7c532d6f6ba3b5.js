(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"k/Fm":function(n,t,e){"use strict";e.r(t);var o=e("ofXK"),a=e("tyNb"),i=e("fXoL"),c=e("H+bZ"),r=e("2Rin"),l=e("xJkR");const g=function(){return{"border-radius":"5px",height:"10px",width:"100%"}};function d(n,t){1&n&&i["\u0275\u0275element"](0,"ngx-skeleton-loader",4),2&n&&i["\u0275\u0275property"]("theme",i["\u0275\u0275pureFunction0"](1,g))}const s=function(){return[1,2,3,4,5,6,7,8,9]};function p(n,t){1&n&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275template"](1,d,1,2,"ngx-skeleton-loader",3),i["\u0275\u0275elementEnd"]()),2&n&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",i["\u0275\u0275pureFunction0"](1,s)))}function f(n,t){if(1&n&&i["\u0275\u0275element"](0,"p",5),2&n){const n=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("innerHTML",n.getContent(),i["\u0275\u0275sanitizeHtml"])}}const u=[{path:"",component:(()=>{class n{constructor(n,t){this.api=n,this.util=t,this.loaded=!1,this.api.post("pages/getById",{id:5}).then(n=>{console.log(n),this.loaded=!0,n&&200===n.status&&n.data.length>0&&(this.content=n.data[0].content)},n=>{console.log(n),this.loaded=!0,this.util.errorMessage(this.util.translate("Something went wrong"))})}ngOnInit(){}getContent(){return this.content}}return n.\u0275fac=function(t){return new(t||n)(i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](r.a))},n.\u0275cmp=i["\u0275\u0275defineComponent"]({type:n,selectors:[["app-faq"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"theme",4,"ngFor","ngForOf"],[3,"theme"],[3,"innerHTML"]],template:function(n,t){1&n&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275template"](1,p,2,2,"div",1),i["\u0275\u0275template"](2,f,1,1,"p",2),i["\u0275\u0275elementEnd"]()),2&n&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.loaded),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.loaded))},directives:[o.NgIf,o.NgForOf,l.a],styles:['@charset "UTF-8";.back_image[_ngcontent-%COMP%]{width:100%;height:500px;background-repeat:no-repeat;background-size:cover;background-position:50%}.container[_ngcontent-%COMP%]{margin-top:30px}label[_ngcontent-%COMP%]{display:block;margin:0}h1[_ngcontent-%COMP%]{margin:0;line-height:2;text-align:center}h2[_ngcontent-%COMP%]{margin:0 0 .5em;font-weight:400}input[type=radio][_ngcontent-%COMP%]{position:absolute;opacity:0;z-index:-1}.row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex:1}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child{margin-left:1em}.tabs[_ngcontent-%COMP%]{border-radius:8px;box-shadow:0 4px 4px -2px rgba(0,0,0,.5)}.tab[_ngcontent-%COMP%], .tabs[_ngcontent-%COMP%]{overflow:hidden}.tab[_ngcontent-%COMP%]{width:100%;color:#fff}.tab-label[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1em;background:#45c261;font-weight:500;cursor:pointer}.tab-label[_ngcontent-%COMP%]:hover{background:#3bb356}.tab-label[_ngcontent-%COMP%]:after{content:"\u276f";width:1em;height:1em;text-align:center;transition:all .35s}.tab-content[_ngcontent-%COMP%]{max-height:0;padding:0 1em;color:#45c261;background:#fff;transition:all .35s}.tab-close[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:1em;font-size:.75em;background:#45c261;cursor:pointer}.tab-close[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:checked + .tab-label[_ngcontent-%COMP%]{background:#34a04c}input[_ngcontent-%COMP%]:checked + .tab-label[_ngcontent-%COMP%]:after{transform:rotate(90deg)}input[_ngcontent-%COMP%]:checked ~ .tab-content[_ngcontent-%COMP%]{max-height:100vh;padding:1em}.answer_lbl[_ngcontent-%COMP%]{font-weight:400;color:#000;line-height:26px;font-size:15px}']}),n})()}];let h=(()=>{class n{}return n.\u0275mod=i["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||n)},imports:[[a.h.forChild(u)],a.h]}),n})();var m=e("PCNd");e.d(t,"FaqModule",(function(){return b}));let b=(()=>{class n{}return n.\u0275mod=i["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||n)},imports:[[o.CommonModule,h,m.a]]}),n})()}}]);