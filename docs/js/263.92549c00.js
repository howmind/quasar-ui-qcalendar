(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[263],{"1c0b9":function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <div class="row justify-center items-center">\n      <q-btn dense flat label="Prev" @click="calendarPrev" />\n      <q-separator vertical />\n      <q-btn dense flat label="Next" @click="calendarNext" />\n    </div>\n    <q-separator />\n    <q-calendar\n      ref="calendar"\n      v-model="selectedDate"\n      view="month"\n      locale="en-us"\n      animated\n      transition-prev="slide-right"\n      transition-next="slide-left"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\'\n    }\n  },\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    }\n  }\n}\n<\/script>\n'}}]);