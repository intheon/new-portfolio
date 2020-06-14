import state from "./state.js";

export default {
  SET_BOOKMARKS(state, bookmarks){
    state.bookmarks = bookmarks;
  },
  SET_BOOKMARK(state, bookmark){
    state.bookmark = bookmark;
  }
}
