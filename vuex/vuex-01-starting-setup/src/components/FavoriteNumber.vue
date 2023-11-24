<template>
  <div>
    <h2>fav : {{ favoriteCount }}</h2>
    <p>we do more....</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter(){
    //     return this.$store.getters.favoriteCount
    // }
    // counter(){
    //     return this.$store.getters['number/favoriteCount']
    // }
    ...mapGetters('number', ['favoriteCount']),
  },
};
</script>