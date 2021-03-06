// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import DatePicker from 'vue-da?tepicker-simple/datepicker-2.vue'
// import DateTime from 'vue-datetime';
import  dateTime  from 'vue-datetime';

Vue.use(dateTime)
Vue.config.productionTip = false
// Vue.use(DatePicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
