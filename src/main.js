// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//在layout中插入页面，在页面插入子组件的不同方法比较
//6.4 3 5 6节介绍数据获取
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import DetailPage from './pages/detail'
import  VueResource from 'vue-resource'
import VueRouter from 'vue-router'//路由安装；引入；use注册；实例化
Vue.use(VueRouter)
Vue.use(VueResource)//ajax
//import App from './App'
let router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },

    {
      path: '/detail',
      component: DetailPage,
      redirect:'/detail/count',//过滤掉detail页面，作为一个过渡页面，直接指向第一个页面
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }

      ]
    }
    ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: {Layout},
  template: '<Layout/>'
})
