<template>
  <base-container title="Vuex">
  <favorite-number></favorite-number>
  <the-counter></the-counter>
  <button @click="increase">Add 1</button>
  <change-count></change-count>
</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCount from './components/ChangeCount.vue';
import FavoriteNumber from './components/FavoriteNumber.vue';
import TheCounter from './components/TheCounter.vue'

export default {
  components: {
    BaseContainer, TheCounter,
    ChangeCount,
    FavoriteNumber
},
  methods:{
      increase(){
        this.$store.dispatch('addOne')
      }
    }
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