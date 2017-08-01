<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Vue Player</h1>
        </div>
      </div>
    </section>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="playlist" class="navbar-item">Playlist</router-link>
        <router-link to="detail" class="navbar-item">Now Playing</router-link>
      </div>
    </nav>
    <div class="container">
      <search></search>
      <router-view></router-view>
    </div>
    <player></player>
  </div>
</template>
<script>
import store from 'renderer/vuex/store';
import Search from 'renderer/components/Search';
import Player from 'renderer/components/Player';
export default {
  store,
  components: {
    Search,
    Player,
  },
};
</script>
<style lang="scss">
@import '~bulma/bulma.sass';
$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome.scss";
</style>
