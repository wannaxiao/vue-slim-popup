webpackJsonp([1],{"+zrP":function(t,n){},L53O:function(t,n){},NHnr:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=o("7+uW"),e="vue-slim-popup",i={name:"SlimPopup",components:{},mixins:[{methods:{c:function(t){return t?""+e+t:""+e}}}],props:{show:{type:Boolean,default:!1},hideOnMaskClick:{type:Boolean,default:!1},maskTransition:{type:String,default:"slim-fade"},popupTransition:{type:String,default:"slim-scale"},maskClass:{type:Array,default:null},popupClass:{type:Array,default:null},maskStyle:{type:Object,default:null},popupStyle:{type:Object,default:null},popupPosition:{type:String,default:"center"}},data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){},hide:function(){this.$emit("update:show",!1)},maskClick:function(){this.hideOnMaskClick&&this.hide()},preventDefault:function(){}}},p={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{class:t.c()},[o("transition",{attrs:{name:t.maskTransition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:[t.c("__mask")].concat(t.maskClass),style:t.maskStyle,on:{click:t.maskClick,touchmove:function(n){return n.preventDefault(),t.preventDefault(n)}}})]),t._v(" "),o("transition",{attrs:{name:t.popupTransition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"popup",class:[t.c("__popup"),t.c("__popup--"+t.popupPosition)].concat(t.popupClass),style:t.popupStyle,on:{touchmove:function(n){return n.preventDefault(),t.preventDefault(n)}}},[t._t("default")],2)])],1)},staticRenderFns:[]};var a=o("VU/8")(i,p,!1,function(t){o("L53O")},null,null).exports;a.install=function(t){t.component(a.name,a)};var u={name:"App",components:{SlimPopup:a},data:function(){return{show:!1,show2:!1,popupTransition:""}},created:function(){this.transitionList=["slim-scale","slim-zoom","slim-fade-in-bottom","slim-slide-in-bottom"]},methods:{popupShow:function(t){this.popupTransition=this.transitionList[t],this.show=!0},popupHide:function(){this.show=!1}}},l={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("中间弹出")]),t._v(" "),o("div",{staticClass:"btn-box"},t._l(4,function(n,s){return o("button",{key:s,staticClass:"open-btn",on:{click:function(n){t.popupShow(s)}}},[t._v("Click Me")])})),t._v(" "),o("SlimPopup",{attrs:{show:t.show,popupTransition:t.popupTransition,popupClass:["popup"]},on:{"update:show":function(n){t.show=n}}},[o("h2",{staticStyle:{color:"#6D7A80"}},[t._v("这里是一个插槽，可以放置任何元素")]),t._v(" "),o("button",{staticClass:"close-btn",on:{click:t.popupHide}},[t._v("X")])]),t._v(" "),o("h1",[t._v("底部弹出")]),t._v(" "),o("div",{staticClass:"btn-box"},[o("button",{staticClass:"open-btn",on:{click:function(n){t.show2=!0}}},[t._v("Click Me")])]),t._v(" "),o("SlimPopup",{attrs:{show:t.show2,popupClass:["popup"],popupTransition:"slim-slide-in-bottom",popupPosition:"bottom"},on:{"update:show":function(n){t.show2=n}}},[o("h2",{staticStyle:{color:"#6D7A80"}},[t._v("这里是一个插槽，可以放置任何元素")]),t._v(" "),o("button",{staticClass:"close-btn",on:{click:function(n){t.show2=!1}}},[t._v("X")])])],1)},staticRenderFns:[]};var c=o("VU/8")(u,l,!1,function(t){o("+zrP")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:c},template:"<App/>"})}},["NHnr"]);