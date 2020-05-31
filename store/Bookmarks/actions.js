import state 												from "./state.js";

export default {
  async getWebsiteScreenshot({ commit }, url){

    // you could do with proxying this to the api server instead of directly to puppeteer
    try {
      let { data } = await this.$axios.get(`http://localhost:5566/website-screenshot?url=${url}`, { withCredentials: true });
      return data;
    }
    catch (e){
      console.log(e)
    }



  }
}
