(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[186],{"3a6a":function(a,n,e){"use strict";e.r(n),n["default"]="<template>\n  <div style=\"max-width: 800px; width: 100%;\">\n    <div class=\"full-width\">\n      <q-select\n        outlined\n        dense\n        emit-value\n        map-options\n        label=\"Change theme\"\n        v-model=\"theme\"\n        :options=\"themesList\"\n        class=\"col-12\"\n      ></q-select>\n    </div>\n    <q-separator></q-separator>\n    <q-calendar\n      v-model=\"selectedDate\"\n      view=\"week-agenda\"\n      locale=\"en-us\"\n      :style=\"theme\"\n      style=\"height: 400px;\"\n    >\n      <template #day-body=\"{ timestamp }\">\n        <template v-for=\"(agenda) in getAgenda(timestamp)\">\n          <div\n            :key=\"timestamp.date + agenda.time\"\n            :label=\"agenda.time\"\n            class=\"justify-start q-ma-sm shadow-5 bg-grey-6\"\n          >\n            <div v-if=\"agenda.avatar\" class=\"row justify-center\" style=\"margin-top: 30px; width: 100%;\">\n              <q-avatar style=\"margin-top: -25px; margin-bottom: 10px; font-size: 60px; max-height: 50px;\">\n                <img :src=\"agenda.avatar\" style=\"border: #9e9e9e solid 5px;\">\n              </q-avatar>\n            </div>\n            <div class=\"col-12 q-px-sm\">\n              <strong>{{ agenda.time }}</strong>\n            </div>\n            <div v-if=\"agenda.desc\" class=\"col-12 q-px-sm\" style=\"font-size: 10px;\">\n              {{ agenda.desc }}\n            </div>\n          </div>\n        </template>\n      </template>\n    </q-calendar>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      agenda: {\n        // value represents day of the week\n        1: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',\n            desc: 'Meeting with CEO'\n          },\n          {\n            time: '08:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png',\n            desc: 'Meeting with HR'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',\n            desc: 'Meeting with Karen'\n          }\n        ],\n        2: [\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',\n            desc: 'Meeting with Alisha'\n          },\n          {\n            time: '17:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',\n            desc: 'Meeting with Sarah'\n          }\n        ],\n        3: [\n          {\n            time: '08:00',\n            desc: 'Stand-up SCRUM',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '10:00',\n            desc: 'Sprint planning',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'\n          }\n        ],\n        4: [\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          }\n        ],\n        5: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '09:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'\n          },\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          },\n          {\n            time: '13:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '14:00',\n            avatar: 'https://cdn.quasar.dev/img/linux-avatar.png'\n          },\n          {\n            time: '14:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png'\n          },\n          {\n            time: '15:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '15:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '16:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          }\n        ]\n      },\n      theme: {\n      },\n      themes: {\n        default: {\n        },\n        teal: {\n          '--calendar-border': '#4db6ac 1px solid',\n          '--calendar-border-dark': '#e0f2f1 1px solid',\n          '--calendar-border-section': '#80cbc4 1px dashed',\n          '--calendar-border-section-dark': '#80cbc4 1px dashed',\n          '--calendar-border-current': '#4db6ac 2px solid',\n          '--calendar-border-current-dark': '#1de9b6 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#004d40',\n          '--calendar-color-dark': '#e0f2f1',\n          '--calendar-background': '#e0f2f1',\n          '--calendar-background-dark': '#004d40',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#ffff66',\n          '--calendar-current-background': '#00000000',\n          '--calendar-current-background-dark': '#004d40',\n          '--calendar-disabled-date-color': '#e0f2f1',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#80cbc4',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#000000',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#1de9b6',\n          '--calendar-active-date-background-dark': '#4db6ac',\n          '--calendar-outside-color': '#004d40',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#00000000',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        },\n        brown: {\n          '--calendar-border': '#a1887f 1px solid',\n          '--calendar-border-dark': '#efebe9 1px solid',\n          '--calendar-border-section': '#bcaaa4 1px dashed',\n          '--calendar-border-section-dark': '#bcaaa4 1px dashed',\n          '--calendar-border-current': '#a1887f 2px solid',\n          '--calendar-border-current-dark': '#8d6e63 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#3e2723',\n          '--calendar-color-dark': '#efebe9',\n          '--calendar-background': '#efebe9',\n          '--calendar-background-dark': '#3e2723',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#efebe9',\n          '--calendar-current-background': '#00000000',\n          '--calendar-current-background-dark': '#3e2723',\n          '--calendar-disabled-date-color': '#efebe9',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#bcaaa4',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#efebe9',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#8d6e63',\n          '--calendar-active-date-background-dark': '#a1887f',\n          '--calendar-outside-color': '#3e2723',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#00000000',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        },\n        'deep purple': {\n          '--calendar-border': '#9575cd 1px solid',\n          '--calendar-border-dark': '#ede7f6 1px solid',\n          '--calendar-border-section': '#b39ddb 1px dashed',\n          '--calendar-border-section-dark': '#b39ddb 1px dashed',\n          '--calendar-border-current': '#9575cd 2px solid',\n          '--calendar-border-current-dark': '#651fff 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#311b92',\n          '--calendar-color-dark': '#ede7f6',\n          '--calendar-background': '#ede7f6',\n          '--calendar-background-dark': '#311b92',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#651fff',\n          '--calendar-current-background': '#00000000',\n          '--calendar-current-background-dark': '#311b92',\n          '--calendar-disabled-date-color': '#ede7f6',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#b39ddb',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#ede7f6',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#651fff',\n          '--calendar-active-date-background-dark': '#9575cd',\n          '--calendar-outside-color': '#311b92',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#00000000',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        },\n        indigo: {\n          '--calendar-border': '#7986cb 1px solid',\n          '--calendar-border-dark': '#e8eaf6 1px solid',\n          '--calendar-border-section': '#9fa8da 1px dashed',\n          '--calendar-border-section-dark': '#9fa8da 1px dashed',\n          '--calendar-border-current': '#7986cb 2px solid',\n          '--calendar-border-current-dark': '#3d5afe 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#1a237e',\n          '--calendar-color-dark': '#e8eaf6',\n          '--calendar-background': '#e8eaf6',\n          '--calendar-background-dark': '#1a237e',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#3d5afe',\n          '--calendar-current-background': '#00000000',\n          '--calendar-current-background-dark': '#1a237e',\n          '--calendar-disabled-date-color': '#e8eaf6',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#9fa8da',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#e8eaf6',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#3d5afe',\n          '--calendar-active-date-background-dark': '#7986cb',\n          '--calendar-outside-color': '#1a237e',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#00000000',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        },\n        blue: {\n          '--calendar-border': '#64b5f6 1px solid',\n          '--calendar-border-dark': '#e3f2fd 1px solid',\n          '--calendar-border-section': '#90caf9 1px dashed',\n          '--calendar-border-section-dark': '#90caf9 1px dashed',\n          '--calendar-border-current': '#64b5f6 2px solid',\n          '--calendar-border-current-dark': '#2979ff 2px solid',\n          '--calendar-border-droppable': '#027BE3 1px dashed',\n          '--calendar-border-droppable-dark': '#ffff66 1px dashed',\n          '--calendar-mini-range-connector-hover-border': '#027BE3 1px dashed',\n          '--calendar-mini-range-connector-hover-border-dark': '#ffff66 1px dashed',\n          '--calendar-color': '#0d47a0',\n          '--calendar-color-dark': '#e3f2fd',\n          '--calendar-background': '#e3f2fd',\n          '--calendar-background-dark': '#0d47a0',\n          '--calendar-current-color': '#027BE3',\n          '--calendar-current-color-dark': '#2979ff',\n          '--calendar-current-background': '#00000000',\n          '--calendar-current-background-dark': '#0d47a0',\n          '--calendar-disabled-date-color': '#e3f2fd',\n          '--calendar-disabled-date-color-dark': '#bebebe',\n          '--calendar-disabled-date-background': '#90caf9',\n          '--calendar-disabled-date-background-dark': '#121212',\n          '--calendar-active-date-color': '#e3f2fd',\n          '--calendar-active-date-color-dark': '#ffff66',\n          '--calendar-active-date-background': '#2979ff',\n          '--calendar-active-date-background-dark': '#64b5f6',\n          '--calendar-outside-color': '#0d47a0',\n          '--calendar-outside-color-dark': '#bebebe',\n          '--calendar-outside-background': '#00000000',\n          '--calendar-outside-background-dark': '#121212',\n          '--calendar-selected-color': '#027BE3',\n          '--calendar-selected-color-dark': '#027BE3',\n          '--calendar-selected-background': '#cce7ff',\n          '--calendar-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-color': 'unset',\n          '--calendar-mini-selected-color-dark': '#027BE3',\n          '--calendar-mini-selected-background': 'unset',\n          '--calendar-mini-selected-background-dark': '#cce7ff',\n          '--calendar-mini-selected-label-color': '#027BE3',\n          '--calendar-mini-selected-label-color-dark': '#cce7ff',\n          '--calendar-mini-selected-label-background': '#cce7ff',\n          '--calendar-mini-selected-label-background-dark': '#027BE3',\n          '--calendar-range-color': '#027BE3',\n          '--calendar-range-color-dark': '#027BE3',\n          '--calendar-range-background': '#cce7ff',\n          '--calendar-range-background-dark': '#cce7ff',\n          '--calendar-mini-range-color': '#cce7ff',\n          '--calendar-mini-range-color-dark': '#027BE3',\n          '--calendar-mini-range-background': 'unset',\n          '--calendar-mini-range-background-dark': 'unset',\n          '--calendar-mini-range-label-color': '#cce7ff',\n          '--calendar-mini-range-label-color-dark': '#027BE3',\n          '--calendar-mini-range-label-background': '#cce7ff',\n          '--calendar-mini-range-label-background-dark': '#cce7ff',\n          '--calendar-mini-range-connector-color': '#cce7ff',\n          '--calendar-mini-range-connector-color-dark': '#ffff66',\n          '--calendar-mini-range-hover-color': '#027BE3',\n          '--calendar-mini-range-hover-color-dark': '#ffff66',\n          '--calendar-mini-range-firstlast-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-background': 'unset',\n          '--calendar-mini-range-firstlast-background-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-color-dark': '#cce7ff',\n          '--calendar-mini-range-firstlast-label-background': '#027BE3',\n          '--calendar-mini-range-firstlast-label-background-dark': '#ffff66',\n          '--calendar-intervals-width': '56px',\n          '--calendar-work-week-width': '30px',\n          '--calendar-mini-work-week-width': '30px',\n          '--calendar-work-week-font-size': '1.0em',\n          '--calendar-head-font-weight': '600'\n        }\n      }\n    }\n  },\n\n  computed: {\n    themesList () {\n      const list = []\n      Object.keys(this.themes).forEach((theme) => {\n        list.push({\n          label: theme,\n          value: { ...this.themes[theme] }\n        })\n      })\n      return list\n    }\n  },\n\n  methods: {\n    getAgenda (day) {\n      return this.agenda[parseInt(day.weekday, 10)]\n    }\n  }\n}\n<\/script>\n"}}]);