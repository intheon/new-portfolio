// LIBS
import Vue 									from "vue";

import router 							from "./router/router.js";

// CORE
import App 									from "./components/App.vue";

// INSTANCE
new Vue({
	el: "#app",
	render: h => h(App),
	router
});
