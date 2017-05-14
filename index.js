
import Vue from "vue";

// import Favlist from "./components/Favlist";

import MuseUI from 'muse-ui';

import './node_modules/muse-ui/dist/muse-ui.css'

Vue.use(MuseUI);

import welcome from './components/welcome';

// import './style.css'


new Vue({

	el: '#test',
	// router,
	render: h => h ( welcome)

})
