// LIBS
import Vue 									from "vue";

import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

// CORE
import App 									from "./components/App.vue";

// INSTANCE
new Vue({
	el: "#app",
	render: h => h(App),
});
