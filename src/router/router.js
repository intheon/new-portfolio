import Vue 					          	from "vue";
import VueRouter 			        	from "vue-router";

Vue.use(VueRouter);

import Home 				        		from "../components/Home/Home.vue";
import About 				        		from "../components/About/About.vue";
import Blog 				        		from "../components/Blog/Blog.vue";

// define routes
const routes = [
	{ path: "/", component: Home },
	{ path: "/about", component: About },
	{ path: "/blog", component: Blog }
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	mode: 'history',
	routes
});;
