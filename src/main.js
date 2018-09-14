// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  引入通用布局
import './assets/styles/reset.css'
//  引入1像素边框解决方案
import './assets/styles/border.css'
//  解决移动端单击300毫秒延迟问题 在项目所在目录中执行目录cnpm install fastclick --save
import fastClick from 'fastclick'
//  引入iconfont
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
