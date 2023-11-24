<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
      <favorite-number></favorite-number>
      <the-counter></the-counter>
      <button @click="addOne({ value: 1 })">Add 1</button>
      <change-count></change-count>
    </base-container>
    <base-container title="Authentication">
      <login-logout></login-logout>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCount from './components/ChangeCount.vue';
import FavoriteNumber from './components/FavoriteNumber.vue';
import TheCounter from './components/TheCounter.vue';
import { mapActions, mapGetters } from 'vuex';
import LoginLogout from './components/LoginLogout.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCount,
    FavoriteNumber,
    LoginLogout,
  },
  methods: {
    // increase() {
    //   // this.$store.dispatch('addOne', { value: 1 });
    // },
    ...mapActions('number', ['addOne']),
  },
  computed: {
    // isAuth() {
    //   return this.$store.getters.isAuth;
    // },
    ...mapGetters(['isAuth']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>