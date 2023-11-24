export default {
  addOne(context, payload) {
    setTimeout(() => {
      context.commit('addOne', payload);
    }, 1000);
  },
  addSome(context, payload) {
    console.log(context);
    context.commit('addSome', payload);
  },
};
