export default {
  addOne(state, payload) {
    state.count += payload.value;
  },
  addSome(state, payload) {
    state.count += payload.value;
  },
};
