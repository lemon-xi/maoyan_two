import Vue from "vue";


Vue.filter('wh',(value,ages)=>{
    return value.replace('w.h',ages)
})
