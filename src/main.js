import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入 vue-resource   vue-resource是一个通过XMLHttpRequrest或JSONP技术实现异步加载服务端数据的Vue插件

import VueResource from 'vue-resource'

Vue.use(VueResource)

import app from './App.vue'

// 按需导入 mint-ui 组件
import { Header, Swipe, SwipeItem } from 'mint-ui'

import './lib/mui/css/mui.css'  

import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)

// 按需导入需要的轮播图的组件

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入自己的 router
import router from './router.js'

var vm = new Vue ({
  el: '#app',
  render: c => c(app), 
  router
})
