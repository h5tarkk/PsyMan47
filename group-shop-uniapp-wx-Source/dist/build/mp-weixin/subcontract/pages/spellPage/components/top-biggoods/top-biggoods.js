(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subcontract/pages/spellPage/components/top-biggoods/top-biggoods"],{"09ad":function(t,e,o){"use strict";o.r(e);var r=o("6bb2"),n=o("f40f");for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("ad86");var s,i=o("f0c5"),c=o("9219"),u=Object(i["a"])(n["default"],r["b"],r["c"],!1,null,"53b23d58",null,!1,r["a"],s);"function"===typeof c["a"]&&Object(c["a"])(u),e["default"]=u.exports},"3bb8":function(t,e,o){"use strict";(function(t){function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a=u(o("a34a")),s=o("9ab4"),i=o("60a3"),c=o("771b");function u(t){return t&&t.__esModule?t:{default:t}}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function f(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){p(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function d(t,e,o,r,n,a,s){try{var i=t[a](s),c=i.value}catch(u){return void o(u)}i.done?e(c):Promise.resolve(c).then(r,n)}function h(t){return function(){var e=this,o=arguments;return new Promise((function(r,n){var a=t.apply(e,o);function s(t){d(a,r,n,s,i,"next",t)}function i(t){d(a,r,n,s,i,"throw",t)}s(void 0)}))}}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,o){return e&&y(t.prototype,e),o&&y(t,o),t}function v(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function _(t){var e=w();return function(){var o,r=j(t);if(e){var n=j(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return O(this,o)}}function O(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?P(t):e}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var C=function(e){v(r,e);var o=_(r);function r(){var t;return g(this,r),t=o.apply(this,arguments),t.formData={},t.getGoodsNameClass="",t.getGoodsBoxClass="",t.getBigGoodsPageClass="",t.goodsList=[],t.searchForm={current:1,name:"",showCategoryId:"",size:10,saleMode:""},t.hasMore=!0,t.isFirst=!0,t}return b(r,[{key:"created",value:function(){this.getFormData()}},{key:"getFormData",value:function(){var t=this;if(n&&clearInterval(n),this.propData){var e=this.propData.currentFirstCategory,o=e&&!this.isFirst?e.category.id:"";this.setData({formData:this.propData,searchForm:{current:1,name:"",showCategoryId:o,size:10,saleMode:this.$STORE.setStore.saleMode},hasMore:!0,goodsList:[]},(function(){t.isFirst=!1,t.getInfo()}))}}},{key:"getInfo",value:function(){this.getAllList(),this.getGoodsNameClassHandle(),this.getGoodsBoxClassHandle(),this.getBigGoodsPageClassHandle()}},{key:"onReachscrollBottom",value:function(){this.searchForm.showCategoryId||this.getInfo()}},{key:"getGoodsBoxClassHandle",value:function(){var t=1,e=2,o=["spellpre__goods--boxWB","spellpre__goods--boxCP","spellpre__goods--boxSW"],r=["spellpre__goods--corners","spellpre__goods--angle"],n=o[+t-1],a=r[+e-1];this.getGoodsBoxClass="".concat(n," ").concat(a)}},{key:"getGoodsNameClassHandle",value:function(){var t=this.formData.textStyle,e=void 0===t?1:t,o=["spellpre__goods--nameF","spellpre__goods--nameB"];this.getGoodsNameClass=o[+e-1]}},{key:"getBigGoodsPageClassHandle",value:function(){var t=this.formData,e=t.selectMode,o=t.listStyle,r=[];1===e&&r.push("page__goods-addPadding"),2===e&&2===o&&r.push("left__Lgoods-style"),this.getBigGoodsPageClass="".concat(r.join(" "))}},{key:"getAllList",value:function(){var t=h(a.default.mark((function t(){var e,o,r,n,s,i=this;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasMore){t.next=2;break}return t.abrupt("return");case 2:return e=f({},this.searchForm),o=[],t.next=6,(0,c.getGoodsList)(e,{});case 6:r=t.sent,o=r.list,n=[],o.forEach((function(t){n.push({id:Number(t.id),name:t.name,img:i.returnGoodsImg(t),actPrice:t.minPrice,price:t.maxPrice,soldCount:t.sale,inventory:t.inventory})})),s=this.formData,s.count>n.length&&(s.count=n.length),this.setData({goodsList:this.goodsList.concat(n),formData:s},(function(){i.dealSearchParam(r)}));case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"dealSearchParam",value:function(t){var e=this.goodsList.length<t.total,o=this.searchForm;e&&(o.current+=1),this.hasMore=e,this.searchForm=o}},{key:"returnGoodsImg",value:function(t){var e=t.widePic,o=t.pic,r=o||"";return 1===this.formData.listStyle&&(r=e?e.split(",")[0]:o||""),r}},{key:"gotoDetail",value:function(e){var o=e.currentTarget.dataset.id;t.navigateTo({url:"/subcontract/pages/detail/detail?id=".concat(o)})}}]),r}(i.Vue);(0,s.__decorate)([(0,i.Prop)()],C.prototype,"propData",void 0),(0,s.__decorate)([(0,i.Watch)("propData",{deep:!0})],C.prototype,"getFormData",null),C=(0,s.__decorate)([(0,i.Component)({})],C);var D=C;e.default=D}).call(this,o("543d")["default"])},"6bb2":function(t,e,o){"use strict";var r;o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement;t._self._c},a=[]},9219:function(t,e,o){"use strict";var r=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};e["a"]=r},ad86:function(t,e,o){"use strict";var r=o("d503"),n=o.n(r);n.a},d503:function(t,e,o){},f40f:function(t,e,o){"use strict";o.r(e);var r=o("3bb8"),n=o.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'subcontract/pages/spellPage/components/top-biggoods/top-biggoods-create-component',
    {
        'subcontract/pages/spellPage/components/top-biggoods/top-biggoods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("09ad"))
        })
    },
    [['subcontract/pages/spellPage/components/top-biggoods/top-biggoods-create-component']]
]);