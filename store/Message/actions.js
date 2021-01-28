import state 												from "./state.js";

export default {
  async sendMessage({ commit, dispatch }, payload){
    console.log("action: sendMessage");
    console.log(payload);
    try {
      await this.$axios.post(`/api/message`, payload)
    }
    catch (e){
      dispatch("setNotification", "An error occurred");
      throw new Error(e);
    }
  }
}
