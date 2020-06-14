import state from "./state.js";

export default {
  SET_BLOGS(state, blogs){
    state.blogs = blogs;
  },
  SET_BLOG(state, blog){
    state.blog = blog;
  }
}
