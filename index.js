
import Vue from "vue";

import welcome from './components/welcome';

// import VueRouter from 'vue-router';
// import App from 'components/app.vue';    // 路由挂载
// import Routers from './router.js';       // 路由列表

// import Mint from 'mint-ui';

// Vue.use(Mint);

// import { Button } from 'mint-ui';

// import './node_modules/iview/dist/styles/iview.css';
// import './style.css'

new Vue({

	el: '#test',
	// router,
	render: h => h (welcome)

})
