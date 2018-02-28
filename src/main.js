// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
 import $ from 'jquery';
/*引入资源请求插件*/
import VueResource from 'vue-resource'
/*使用VueResource插件*/
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.interceptors.push(function(request, next) {//拦截器
// 跨域携带cookie
 request.credentials = true;
next()
})
Vue.http.options.emulateJSON = true;//vue-resource的处理方案


/* eslint-disable no-new */
new Vue(
{
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
