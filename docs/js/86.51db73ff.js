(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[86],{8772:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"max-width":"800px",width:"100%"}},[i("q-splitter",{attrs:{limits:[30,100],"emit-immediately":""},scopedSlots:e._u([{key:"before",fn:function(){return[i("div",{staticStyle:{overflow:"hidden"}},[i("q-calendar",{ref:"calendar",attrs:{view:"month",locale:"en-us","mini-mode":e.miniMode,"short-weekday-label":e.shortWeekdayLabel},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)]},proxy:!0},{key:"separator",fn:function(){return[i("q-avatar",{attrs:{color:"primary","text-color":"white",size:"40px",icon:"drag_indicator"}})]},proxy:!0},{key:"after",fn:function(){return[i("div",{staticStyle:{"min-width":"20px"}})]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)},n=[],l={data:function(){return{splitterModel:90,selectedDate:"",miniMode:!1,shortWeekdayLabel:!1}},watch:{splitterModel:function(e){var t=this.$refs.calendar.$el.getBoundingClientRect();this.miniMode=t.width<500,this.shortWeekdayLabel=t.width<300}}},r=l,o=i("2877"),s=i("8562"),d=i("cb32"),c=i("eebe"),p=i.n(c),u=Object(o["a"])(r,a,n,!1,null,null,null);t["default"]=u.exports;p()(u,"components",{QSplitter:s["a"],QAvatar:d["a"]})}}]);