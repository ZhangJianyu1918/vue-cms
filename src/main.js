import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import app from './App.vue';
import './lib/mui/css/mui.css'

Vue.use(ElementUI);

var vm = new Vue({
	el:'#app',
	methods:{
		
	},
	render: c => c(app)
});