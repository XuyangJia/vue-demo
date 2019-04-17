import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui'
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header)
const vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    components: {},
    render: c => c(app),
    created() {}
})