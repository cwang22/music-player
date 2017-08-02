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
        <router-link to="nowplaying" class="navbar-item">Now Playing</router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <p class="control has-icons-right">
              <input class="input" type="text" placeholder="Search" v-model="query" v-on:keydown.enter.prevent='search'>
              <span class="icon is-small is-right">
                <i class="fa fa-search"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
    <player></player>
  </div>
</template>
<script>
import Player from 'renderer/components/Player';
export default {
  components: {
    Player,
  },
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      this.$router.push({ path: 'search', query: { q: this.query } });
    },
  },
};
</script>
<style lang="scss">
@import '~bulma/bulma.sass';
$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome.scss";
</style>
