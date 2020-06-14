import state from "./state.js";

export default {
  SET_IS_NOTIFICATION_SHOWN(state, bool){
    state.isNotificationShown = bool;
  },
  SET_NOTIFICATION_TEXT(state, text){
    state.notificationText = text;
  }
}
