(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["modules/pages/submit/submit"],{4608:function(t,e,r){"use strict";var n=r("bcea"),o=r.n(n);o.a},6925:function(t,e,r){"use strict";r.r(e);var n=r("fc52"),o=r("9d34");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("4608");var a,s=r("f0c5"),u=r("d00c"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"74d53fa7",null,!1,n["a"],a);"function"===typeof u["a"]&&Object(u["a"])(c),e["default"]=c.exports},"69b1":function(t,e,r){"use strict";(function(t){r("6cdc");var e=n(r("6925"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])},"9d34":function(t,e,r){"use strict";r.r(e);var n=r("f012"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},bcea:function(t,e,r){},d00c:function(t,e,r){"use strict";var n=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};e["a"]=n},f012:function(t,e,r){"use strict";(function(t){function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=f(r("a34a")),i=r("9ab4"),a=r("60a3"),s=f(r("ff1b")),u=r("79f6"),c=f(r("d180"));function f(t){return t&&t.__esModule?t:{default:t}}function d(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){d(i,n,o,a,s,"next",t)}function s(t){d(i,n,o,a,s,"throw",t)}a(void 0)}))}}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t,e,r){return e&&y(t.prototype,e),r&&y(t,r),t}function b(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}function S(t,e){return S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},S(t,e)}function O(t){var e=A();return function(){var r,n=T(t);if(e){var o=T(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return I(this,r)}}function I(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?P(t):e}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var k=function(){r.e("components/formId/formId").then(function(){return resolve(r("604b"))}.bind(null,r)).catch(r.oe)},w=function(){Promise.all([r.e("common/vendor"),r.e("modules/pages/submit/custom-form/custom-form")]).then(function(){return resolve(r("e72d"))}.bind(null,r)).catch(r.oe)},x=function(e){b(n,e);var r=O(n);function n(){var t;return v(this,n),t=r.apply(this,arguments),t.payTypes=[{name:"微信支付",value:"WECHAT",icon:"iconweixin"}],t.deliveryActions=[{name:"物流配送",value:"LOGISTICS"}],t.forms=[],t.form={customForm:"",deliverType:"LOGISTICS",formId:"",groupLeaderId:"",itemDtoList:[],miniAccountAddressId:"",userNote:"",orderType:"MALL",payType:"WECHAT",sourceType:"MINI_PROGRAM"},t.offerOptions={freightAmount:0},t.itemVoList=[],t.miniAccountAddress=[],t.addressIndex=0,t.realPrice=0,t.totalPrice=0,t.discountInfoDto={ceiling:0},t.isFirst=!0,t.address={},t.haSubscribed=!1,t.hasSubmited=!1,t.prevRoute="",t.useRebate=!0,t.supplyBonus=0,t.dataFrom="miniApp",t.timer=0,t.options={items:""},t}return g(n,[{key:"onLoad",value:function(t){var e=this;this.options=t,this.getOrderData(t),this.$Pubsub.on("app-launch",(function(){e.getOrderData(t)}))}},{key:"onShow",value:function(){this.isFirst||this.getOrderData(this.options)}},{key:"onHide",value:function(){this.setData({isFirst:!1})}},{key:"onUnload",value:function(){clearInterval(this.timer),s.default.clear()}},{key:"onShareAppMessage",value:function(){var t=this.$STORE.shopSetStore.shopInfo.shopName;return{title:t,path:"/pages/index/index?page=home",imageUrl:""}}},{key:"getPrevRoute",value:function(){try{var t=getCurrentPages();return t[t.length-2].route}catch(e){return""}}},{key:"getShipperSetting",value:function(){var t=this,e=this.form;return new Promise((function(r){return e.deliverType="LOGISTICS",t.setData({deliveryActions:[{name:"物流配送",value:"LOGISTICS"}],form:e}),r("1")}))}},{key:"getRealPrice",value:function(){return this.totalPrice}},{key:"setRealPrice",value:function(){var t=this.offerOptions.freightAmount,e=this.getRealPrice();this.setData({realPrice:e<=0?t>0?t:.01:(1e8*e+1e8*t)/1e8})}},{key:"setTotalPrice",value:function(){var t=this,e=(0,c.default)(this.itemVoList.map((function(t){return 1e6*t.productPrice*t.productQuantity})));this.setData({totalPrice:(e/1e6).toFixed(2)},(function(){t.setRealPrice()}))}},{key:"getOrderStatus",value:function(t,e){var r=this;this.timer=setInterval((function(){(0,u.getOrderStatus)({orderId:t,items:JSON.parse(decodeURIComponent(r.options.items||r.getOrSetItemStorage(!0,"")))}).then((function(t){if(-1===t)return clearInterval(r.timer),r.$Popup.toast("下单失败，请重试");0!==t&&t&&(clearInterval(r.timer),e())})).catch((function(t){clearInterval(r.timer),r.$Popup.alert({title:"温馨提示",content:t||"订单状态获取失败"}).then((function(){return null}))}))}),1500)}},{key:"getFreightAmount",value:function(t){var e=this,r=1,n=this.miniAccountAddress[this.addressIndex];if(n){var o=n.postCode;Object.assign(t,{amount:this.totalPrice,addressId:o,region:o,items:this.form.itemDtoList}),(0,u.getFreightAmount)(m({type:r,amount:this.totalPrice},t)).then((function(t){var r=t.cost;if(null===r||-1===r)return e.$Popup.toast("不在配送范围内");e.setData(h({},"offerOptions.freightAmount",r),(function(){e.setRealPrice()}))})).catch((function(t){e.$Popup.toast(t||"运费获取失败")}))}}},{key:"getOrderData",value:function(t){var e=this,r=t.items,n=void 0===r?this.getOrSetItemStorage(!0,""):r;s.default.loading({duration:15e3}),(0,u.getConfirmOrder)({items:JSON.parse(decodeURIComponent(n)),type:"MALL"}).then((function(t){e.setResToData(t,n),s.default.clear()})).catch((function(t){e.$Popup.toast(t||"结算页面信息获取失败")}))}},{key:"setResToData",value:function(t,e){var r=this,n=t.miniAccountAddress,i=t.itemVoList,a=t.discountInfoDto,s=t.supplyBonus,u=1;this.getOrSetItemStorage(!1,e),this.setData(h({miniAccountAddress:n,itemVoList:i,discountInfoDto:a,integralValue:u,supplyBonus:s},"form.itemDtoList",JSON.parse(decodeURIComponent(e))),l(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r.setData({forms:r.getCustomFrom(),prevRoute:r.getPrevRoute()}),t.next=4,r.getShipperSetting();case 4:r.setAddressIndexAndId(),r.setTotalPrice(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r.$Popup.toast(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))))}},{key:"getCustomFrom",value:function(){return JSON.parse(this.$STORE.setStore.order.customFrom)}},{key:"getOrSetItemStorage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1?arguments[1]:void 0;return e?t.getStorageSync("order-items")||r:(t.setStorageSync("order-items",r||this.options.items),"")}},{key:"getOrsetStorage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=["form","itemVoList","miniAccountAddress","addressIndex"],n={},o=JSON.parse(t.getStorageSync("submitData")||"{}"),i=function(t){r.forEach((function(e){n[e]=t[e]}))};if(e)return o?(t.getStorageSync("submitData"),i(o),void t.setStorageSync("submitData",JSON.stringify(n))):void 0}},{key:"verificationForm",value:function(){var t=this.$refs.customForm;return t.verificationForm()}},{key:"handleVerification",value:function(){var t=this,e=this.$refs.customForm;if(!e||!e.verificationForm())return!1;var r=this.miniAccountAddress[this.addressIndex];return!(!r||!r.id)||(this.$Popup.alert({title:"温馨提示",content:"请添加地址"}).then((function(){t.goSelectAddress()})),!1)}},{key:"handleSubmit",value:function(){var t=l(o.default.mark((function t(e){var r,n,i,a=this;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.handleVerification()&&!this.hasSubmited){t.next=3;break}return t.abrupt("return");case 3:if(this.setData({hasSubmited:!0}),r=this.$refs.customForm,this.haSubscribed){t.next=9;break}return t.next=8,this.$STORE.messageStore.subscribe([this.$STORE.messageStore.type.sendMsg,this.$STORE.messageStore.type.memberCartOpen]);case 8:this.setData({haSubscribed:!0});case 9:return s.default.loading({duration:3e5}),"h5"===this.dataFrom&&this.form.itemDtoList.forEach((function(t){t.solitaireActivityId=t.activityId,delete t.activityId})),n=this.miniAccountAddress[this.addressIndex].id,t.t0=u.createOrder,t.t1=Object,t.t2=this.form,t.t3=e.formId,t.t4=this.form.groupLeaderId||"",t.t5=n,t.t6=r?JSON.stringify(r.localForms):"",t.next=21,this.$STORE.messageStore.getTemplateId(this.$STORE.messageStore.type.sendMsg);case 21:if(t.t7=t.sent,t.t7){t.next=24;break}t.t7=null;case 24:return t.t8=t.t7,t.next=27,this.$STORE.messageStore.getTemplateId(this.$STORE.messageStore.type.memberCartOpen);case 27:if(t.t9=t.sent,t.t9){t.next=30;break}t.t9=null;case 30:return t.t10=t.t9,t.t11=this.form.itemDtoList[0].solitaireActivityId?this.form.itemDtoList[0].solitaireActivityId:null,t.t12={formId:t.t3,groupLeaderId:t.t4,groupLeaderNickname:"",pointAuthor:"",point_phone:"",miniAccountAddressId:t.t5,customForm:t.t6,deliveryTemplateId:t.t8,memberTemplateId:t.t10,solitaireActivityId:t.t11},t.t13=t.t1.assign.call(t.t1,t.t2,t.t12),t.next=36,(0,t.t0)(t.t13);case 36:i=t.sent,this.getOrderStatus(i,l(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.handleSubmitType(i).catch((function(t){a.$Popup.toast(t||"支付失败"),a.setData({hasSubmited:!1})})),s.default.clear();case 2:case"end":return t.stop()}}),t)})))),t.next=45;break;case 40:t.prev=40,t.t14=t["catch"](0),this.setData({hasSubmited:!1}),s.default.clear(),this.$Popup.alert({title:"温馨提示",content:t.t14||"订单状态获取失败"});case 45:case"end":return t.stop()}}),t,this,[[0,40]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"handleSubmitType",value:function(t){switch(this.form.payType){case"WECHAT":return this.payment(t);default:return Promise.resolve("")}}},{key:"payment",value:function(t){var e=this;return new Promise((function(r){(0,u.payment)(t).then((function(r){e.wecharPay(r.wxResult,t)})).catch((function(t){r(t||"支付失败")}))}))}},{key:"orderSuccess",value:function(e,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(n&&this.$Popup.toast("支付成功"),r)return r();JSON.parse(decodeURIComponent(this.options.items||this.getOrSetItemStorage(!0,"")));return t.redirectTo({url:"/subcontract/pages/orderSuccess/orderSuccess?price=".concat(this.realPrice,"&orderId=").concat(e)})}},{key:"wecharPay",value:function(e,r){var n=this,o=function(t){return t.includes("cancel")};t.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.packageValue,signType:e.signType,paySign:e.paySign,success:function(){n.orderSuccess(r)},fail:function(e){if(clearInterval(n.timer),o(e.errMsg))return s.default.clear(),t.redirectTo({url:"/subcontract/pages/order/order?type=0"});n.$Popup.toast("支付失败")}})}},{key:"goSelectAddress",value:function(){this.getOrsetStorage(),t.navigateTo({url:"/subcontract/pages/address/address?redirect=".concat(encodeURIComponent("/modules/pages/submit/submit"))})}},{key:"setAddressIndexAndId",value:function(){var t=this,e=this.miniAccountAddress.findIndex((function(t){return 1===t.isDefault})),r=this.miniAccountAddress.findIndex((function(e){return e.id===t.address.id})),n=r>=0?r:e,o=this.miniAccountAddress[n],i=o?"LOGISTICS"===this.form.deliverType?o.id:o.postCode:"";this.setData(h({addressIndex:n},"form.miniAccountAddressId",i),(function(){t.getFreightAmount({addressId:i||""})}))}},{key:"onPayTypeClick",value:function(t){var e=t.currentTarget.dataset,r=e.name,n=e.disabled;if(!n){var o=this.form;o.payType=r,this.form=o}}}]),n}(a.Vue);x=(0,i.__decorate)([(0,a.Component)({components:{formid:k,customForm:w}})],x);var D=x;e.default=D}).call(this,r("543d")["default"])},fc52:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]}},[["69b1","common/runtime","common/vendor"]]]);