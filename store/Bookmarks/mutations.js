import state from "./state.js";

export default {
  SET_USER_META(state, meta){
    state.userMeta = meta;
  },
  SET_USER_ORDERS(state, orders){
    state.userOrders = orders;
  }
}
