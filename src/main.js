import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import app from './App.vue'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import router from './router'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
const vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    components: {},
    router,
    render: c => c(app),
    created() {}
})