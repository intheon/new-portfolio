import state from "./state.js";

export default {
  ADD_TO_SELECTED_DATES_ARRAY(state, payload){
		state.selectedDates.push(payload);
	},
	CLEAR_ALL_SELECTED_DATES_FROM_ARRAY(state){
		state.selectedDates = [];
	},
	REMOVE_LAST_ID_FROM_ARRAY(state){
		state.selectedDates.pop();
	},
	STORE_NUM_DAYS(state, payload){
		state.numDays = payload;
	}
}
