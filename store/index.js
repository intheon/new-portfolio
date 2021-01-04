/*
 * LIBRARIES
 */
import Vue 								from "vue";
import Vuex 							from "vuex";

/*
 * TOP LEVEL VUEX STUFF
 */
import data 								from "./rootState.js";
import myMutations 					from "./rootMutations.js";
import actions 							from "./rootActions.js";
import getters 							from "./rootGetters.js";

/*
 * INDIVIDUAL COMPONENT VUEX STUFF
 */
import Blogs 						  		from "./Blogs/index.js";
import Midst 						  		from "./Midst/index.js";
import Notification 					from "./Notification/index.js";

Vue.use(Vuex);

export default () => {
	return new Vuex.Store({
		actions,
		getters,
		modules: {
			Blogs,
			Midst,
			Notification
		},
		mutations: {
			...myMutations
		},
		state: data()
	});

};
