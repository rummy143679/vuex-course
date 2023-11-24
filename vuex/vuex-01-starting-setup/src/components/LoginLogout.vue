<template>
  <div>
    <button v-if="!isAuth" @click="login">Login</button>
    <button v-if="isAuth" @click="logout">Logout</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    // isAuth() {
    //   return this.$store.getters.isAuth;
    // },
    ...mapGetters(['isAuth']),
  },
  methods: {
    // login() {
    //   this.$store.dispatch('login');
    // },
    // logout() {
    //   this.$store.dispatch('logout');
    // },
    ...mapActions(['login', 'logout']),
  },
};
</script>