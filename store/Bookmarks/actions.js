import state 												from "./state.js";

export default {
  async createBookmark({ commit, dispatch }, bookmark){
    try {
      return await this.$axios.post(`${this.getters.serverEndpoint}/bookmark/`, bookmark, { withCredentials: true });
    }
    catch (e) {
      dispatch("setNotification", "An error occurred");
      throw new Error(e);
    };
  },
  async getBookmarks({ commit, dispatch }, url){
    try {
      let { data } = await this.$axios.get(`${this.getters.serverEndpoint}/bookmarks`);
      commit("SET_BOOKMARKS", data);
    }
    catch (e){
      dispatch("setNotification", "An error occurred");
      throw new Error(e);
    }
  },
  async getWebsiteScreenshot({ commit }, url){

    // you could do with proxying this to the api server instead of directly to puppeteer
    try {
      let { data } = await this.$axios.get(`http://localhost:5566/website-screenshot?url=${url}`, { withCredentials: true });
      return data;
    }
    catch (e){
      dispatch("setNotification", "An error occurred");
      throw new Error(e);
    }

  }
}
