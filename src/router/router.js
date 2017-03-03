import Vue                                      from "vue";
import VueRouter                                from "vue-router";

Vue.use(VueRouter);

import Maps                                      from "../components/Map/MapsView.vue";

// define routes
const routes = [
	{ path: "/", component: Maps }
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	routes
});
