export default {
  finalCounter(state) {
    return state.count * 3;
  },
  favoriteCount(state, getters) {
    const final = getters.finalCounter;
    if (final < 0) {
      return 0;
    }
    if (final > 100) {
      return 100;
    }
    return final;
  },
};
