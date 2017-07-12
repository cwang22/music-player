<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from 'renderer/vuex/store';
export default {
  store,
};
</script>
<style lang="scss">
  @import '~bulma/bulma.sass';
  $fa-font-path: "~font-awesome/fonts";
  @import "~font-awesome/scss/font-awesome.scss";
</style>

