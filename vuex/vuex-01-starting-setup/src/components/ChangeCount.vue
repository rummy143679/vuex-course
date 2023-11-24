<template>
  <button @click="addSome({ value: 10 })">Inc</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // increase() {
    //   // this.$store.commit({
    //   //     type:'addSome',
    //   //     value:10
    //   // })
    //   this.$store.dispatch({
    //     type: 'addSome',
    //     value: 10,
    //   });
    // },
    ...mapActions('number', ['addSome']),
  },
};
</script>