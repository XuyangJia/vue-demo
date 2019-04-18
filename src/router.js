import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router