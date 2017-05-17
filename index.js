
// import Vue from "vue";
//
import welcome from './components/welcome';
//
import login from './components/userCenter/login';

import register from './components/userCenter/register';

import forget from './components/userCenter/forget';

import MuseUI from 'muse-ui';

var routes = [

	{
		path: '/',
		name: 'welcome',
		component: welcome
	},

	{
		path: '/user/login',
		name: 'login',
		component: login
	},
	{
		path: '/user/register',
		name: 'register',
		component: register
	},
]

var router = new VueRouter({

  routes

})
// //
new Vue({

	router

}).$mount('#app')
