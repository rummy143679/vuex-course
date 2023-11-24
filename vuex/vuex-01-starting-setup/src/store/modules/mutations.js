export default {
  login(state) {
    state.auth = true;
  },
  logout(state) {
    state.auth = false;
  },
};
