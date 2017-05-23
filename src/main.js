// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css';

import FE_DEBUG from 'error-report-crab'
FE_DEBUG.init({
  siteId: '47b2f28e-a516-4475-8629-57492b227bf6',
  silent: process.env.NODE_ENV !== 'production'
})
Vue.config.errorHandler = function(err, vm) {
  FE_DEBUG.reportError(err)
}

import App from './App'
import router from './router'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push(function(request, next) {
  try {
    if (request.params) {
      request.params.openid = openid
      request.params._ = +new Date()
    } else {
      request.params = {
        openid: openid,
        _: +new Date()
      }
    }
  } catch (e) {}
  next((response) => {
    if (response.status === 401) {
      if (response.body.errorCode != '00000') {
        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa166ce145510c378&redirect_uri=http%3A%2F%2Fmpapi.redseawetoo.com%2Fuser%2Fauthorize%23&response_type=code&scope=SCOPE&state=STATE#wechat_redirect'
      }
    }
    if (response.status === 400 || response.status === 500) {
      alert('接口访问失败， 请联系管理员')
    }
    if (response.status >= 400 && response.status != 401) {
      if (FE_DEBUG && FE_DEBUG.report) {
        const params = {
          type: 2,
          fu: response.url,
          referer: location.href,
          stack: ''
        }
        request.params && (params.stack = 'params=' + request.params.toString())
        request.body && (params.stack += 'body=' + request.body)

        try {
          params.msg = request.method + ' :: ' + response.status + ' :: ' + response.body.name + ',' + response.body.message

        } catch (e) {
          params.msg = request.method + ' :: ' + response.status
        }
        FE_DEBUG.report(params)
      }
    }
  })
})


Vue.use(YDUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})