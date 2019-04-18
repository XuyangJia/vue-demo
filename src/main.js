import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment' // 时间格式化插件
import app from './App.vue'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
import router from './router'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005/api'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 定义全局过滤器
Vue.filter('dateFormat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(dataStr).format(pattern)
})

const vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    components: {},
    router,
    render: c => c(app),
    created() {}
})