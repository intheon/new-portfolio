import state 												from "./state.js";

export default {
  async getBlogs({ commit, dispatch }, url){
    try {
      let { data } = await this.$axios.get(`/api/blogs`, { withCredentials: true });
      commit("SET_BLOGS", data);
    }
    catch (e){
      console.log(e)
    }
  }
}
