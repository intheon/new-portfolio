import state 												from "./state.js";

export default {
  addIdToArray({commit}, payload){
		commit("ADD_TO_SELECTED_DATES_ARRAY", payload);
	},
	clearAllSelectedDates({commit}){
		commit("CLEAR_ALL_SELECTED_DATES_FROM_ARRAY");
	},
	removeLastIdFromArray({commit}){
		commit("REMOVE_LAST_ID_FROM_ARRAY");
	},
	storeNumDays({commit}, payload){
		commit("STORE_NUM_DAYS", payload);
	}
}
