function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{nX7e:function(e,t,r){"use strict";r.r(t);var a=r("ofXK"),o=r("tyNb"),l=r("mrSG"),n=r("wd/R"),c=r("fXoL"),i=r("H+bZ"),s=r("2Rin"),m=r("c14U");function d(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"h2"),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){var r=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",r.util.translate("Transaction status is failure")," ")}}function u(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"h2"),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){var r=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",r.util.translate("Your payment was successful done, thank you for purchase.")," ")}}var g,v,S=[{path:"",component:(g=function(){function e(t,r,a,o,l){var n=this;_classCallCheck(this,e),this.route=t,this.api=r,this.util=a,this.cart=o,this.router=l,this.route.queryParams.subscribe((function(e){console.log(e),n.status=e.status,e&&"success"===e.status?function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(localStorage.getItem("cartItems"))?(n.cart.cart=JSON.parse(localStorage.getItem("cartItems")),n.cart.deliveryAt=localStorage.getItem("deliveryAt"),n.cart.datetime=localStorage.getItem("datetime"),n.cart.totalPrice=localStorage.getItem("totalPrice"),n.cart.orderTax=localStorage.getItem("orderTax"),n.cart.grandTotal=localStorage.getItem("grandTotal"),n.cart.deliveryPrice=localStorage.getItem("deliveryPrice"),n.cart.coupon=function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(localStorage.getItem("appliedCoupon"))?JSON.parse(localStorage.getItem("appliedCoupon")):null,n.cart.userOrderTaxByStores=function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(localStorage.getItem("userOrderTaxByStores"))?JSON.parse(localStorage.getItem("userOrderTaxByStores")):[],n.cart.deliveryAddress=function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(localStorage.getItem("selectedAddress"))?JSON.parse(localStorage.getItem("selectedAddress")):null,n.cart.discount=localStorage.getItem("discount"),console.log("cart instance calcuatelllll,,,,,",n.cart),n.createOrder("paytm",localStorage.getItem("payTMOrderID"))):(console.log("somerthing went wrong"),localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),n.util.errorMessage(n.util.translate("Something went wrong"))):(localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),n.util.errorMessage(n.util.translate("Something went wrong")),n.router.navigate([""]))}))}return _createClass(e,[{key:"createOrder",value:function(e,t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var a,o,l,c,i=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=_toConsumableArray(new Set(this.cart.cart.map((function(e){return e.store_id})))),o=[],a.forEach((function(e){o.push({id:e,status:"created"})})),l=[{status:1,value:"Order Created",time:n().format("lll")}],this.cart.deliveryAt=this.cart.deliveryAt?this.cart.deliveryAt:"",c={uid:localStorage.getItem("uid"),store_id:a.join(),date_time:"today"===this.cart.datetime?n().format("YYYY-MM-DD HH:mm:ss"):n().add(1,"days").format("YYYY-MM-DD HH:mm:ss"),paid_method:e,order_to:this.cart.deliveryAt,orders:JSON.stringify(this.cart.cart),notes:JSON.stringify(l),address:"home"===this.cart.deliveryAt?JSON.stringify(this.cart.deliveryAddress):"",driver_id:"",total:this.cart.totalPrice,tax:this.cart.orderTax,grand_total:this.cart.grandTotal,delivery_charge:this.cart.deliveryPrice,coupon_code:this.cart.coupon?JSON.stringify(this.cart.coupon):"",discount:this.cart.discount,pay_key:t,status:JSON.stringify(o),assignee:"",extra:JSON.stringify(this.cart.userOrderTaxByStores)},console.log("param-----\x3e",c),this.util.start(),this.api.post("orders/save",c).then((function(e){console.log(e),i.util.stop(),i.api.createOrderNotification(i.cart.stores),localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),i.cart.clearCart(),i.util.publishNewOrder();var t=(i.util.userInfo.first_name+"-"+i.util.userInfo.last_name).toLowerCase();i.router.navigate(["user",t,"order"])}),(function(e){console.log(e),localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),i.util.stop(),i.util.errorMessage(i.util.translate("Something went wrong"))})).catch((function(e){console.log(e),localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),i.util.stop(),i.util.errorMessage(i.util.translate("Something went wrong"))}));case 6:case"end":return r.stop()}}),r,this)})))}},{key:"ngOnInit",value:function(){}}]),e}(),g.\u0275fac=function(e){return new(e||g)(c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](m.a),c["\u0275\u0275directiveInject"](o.f))},g.\u0275cmp=c["\u0275\u0275defineComponent"]({type:g,selectors:[["app-paytmcallback"]],decls:4,vars:2,consts:[[1,"container"],[1,"centered"],[4,"ngIf"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275template"](2,d,2,1,"h2",2),c["\u0275\u0275template"](3,u,2,1,"h2",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf","failure"===t.status),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","success"===t.status))},directives:[a.NgIf],styles:[".centered[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"]}),g)}],p=((v=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[o.h.forChild(S)],o.h]}),v);r.d(t,"PaytmcallbackModule",(function(){return y}));var I,y=((I=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[a.CommonModule,p]]}),I)}}]);