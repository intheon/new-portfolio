import state 												from "./state.js";

export default {
  async checkAuthState({ commit, dispatch }){
    try {
      let req = await this.$axios.get(`${this.getters.serverEndpoint}/checkAuthState`, { withCredentials: true });
      if (req.status === 200){
        dispatch("setUserMeta", req.data.user);
      }
    }
    catch (e){
      if (e.response.status === 401){
        dispatch("setUserMeta", false);
      }
    }
  },
  async checkUserExists({ commit, dispatch }, email){
    try {
      return await this.$axios.get(`${this.getters.serverEndpoint}/user/${email}`);
    }
    catch {
      return "WRONG_EMAIL_FORMAT";
    }
  },
  async getUser({ }, id){
    try {
      const { data } = await this.$axios.get(`${this.getters.serverEndpoint}/users?_id=${id}`);
      return data;
    }
    catch (e){
      dispatch("setNotification", "An error occurred");
      throw new Error(e);
    }
  },
  async login({ commit, dispatch }, payload){
    try {
      let req = await this.$axios.post(`${this.getters.serverEndpoint}/login`, { email: payload.email, password: payload.password }, { withCredentials: true });
      if (req.status === 401){
        dispatch("setNotification", "Wrong Password");
      }
      else if (req.status === 200){
        console.log("you are here");
        console.log(req.data);
        dispatch("setUserMeta", req.data);
        if (req.data.isAdmin){
          this.$router.push("/admin")
        }
      }
      commit("SET_IS_LOADING", false);
    }
    catch (e){
      if (e.response.status === 401){
        dispatch("setNotification", "Wrong Password");
      }
    }
  },
  async logout({ commit, dispatch }, needsRedirect){
    try {
      let req = await this.$axios.post(`${this.getters.serverEndpoint}/logout`, {}, { withCredentials: true });
      if (req.status === 200){
        dispatch("setUserMeta", null);
      }
      if (needsRedirect){
        this.$router.push("/");
      }
    }
    catch (e){
      dispatch("setNotification", e.response.message);
    }
  },
  async requestPasswordReset({ commit, dispatch }, email){
    try { await this.$axios.post(`${this.getters.serverEndpoint}/request-password-reset`, { email }) }
    catch (e) { console.log(e) }
  },
  async register({ commit, dispatch }, payload){
    try {
      await this.$axios.post(`${this.getters.serverEndpoint}/register`, { "email": payload.email, "password": payload.password, "name": payload.name });
      await dispatch("login", { "email": payload.email, "password": payload.password });
    }
    catch (e){
      console.log(e)
    }
  },
  setUserMeta({ commit }, meta){
    commit("SET_USER_META", meta);
  }
}
