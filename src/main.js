import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import app from './App.vue';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import VueRouter from 'vue-router'
import router from './router.js'
import axios from 'axios'


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$axios = axios;


var vm = new Vue({
	el:'#app',
	data:{},
	methods:{},
	render: c => c(app),
	router: router,
});

