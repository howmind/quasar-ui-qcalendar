(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[174],{fccf:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"max-width":"800px",width:"100%"}},[a("div",{staticClass:"row justify-center items-center"},[a("q-btn",{attrs:{flat:"",dense:"",label:"Prev"},on:{click:e.calendarPrev}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{flat:"",dense:"",label:"Next"},on:{click:e.calendarNext}})],1),a("q-separator"),a("div",{staticStyle:{overflow:"hidden"}},[a("q-calendar",{ref:"calendar",staticStyle:{height:"400px",overflow:"hidden"},attrs:{view:"week",locale:"en-us",animated:"","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)},r=[],l={data:function(){return{selectedDate:""}},methods:{calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()}}},c=l,s=a("2877"),i=a("9c40"),d=a("eb85"),o=a("eebe"),f=a.n(o),u=Object(s["a"])(c,n,r,!1,null,null,null);t["default"]=u.exports;f()(u,"components",{QBtn:i["a"],QSeparator:d["a"]})}}]);