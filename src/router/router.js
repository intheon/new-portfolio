import Vue 					          	from "vue";
import VueRouter 			        	from "vue-router";

Vue.use(VueRouter);

import Home 				        		from "../components/Home/Home.vue";
import About 				        		from "../components/About/About.vue";
import Blog 				        		from "../components/Blog/Blog.vue";
import Portfolio 				        from "../components/Portfolio/Portfolio.vue";

// define routes
const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
	{ path: "/about", component: About },
	{ path: "/blog", component: Blog },
	{ path: "/portfolio", component: Portfolio }
];

// initialise & export Instance
export default new VueRouter({
	mode: "history",
	base: "/",
	routes
});;
