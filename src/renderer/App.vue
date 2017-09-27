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
                <a class="navbar-item" @click="back"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                <router-link to="playlist" class="navbar-item">Playlist</router-link>
                <router-link to="nowplaying" class="navbar-item">Now Playing</router-link>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <p class="control has-icons-right">
                            <input class="input" type="text" placeholder="Search" v-model="query" v-on:keydown.enter.prevent='search'>
                            <span class="icon is-small is-right" @click="search">
                <i class="fa fa-search"></i>
              </span>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container" id="view">
            <router-view></router-view>
        </div>
        <player></player>
    </div>
</template>
<script>
import Player from './components/Player'
export default {
  components: {
    Player
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    search () {
      this.$router.push({ path: '/search', query: { q: this.query } })
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
      this.$store.watch(state => {
        if(state.playing) return `Vue Player - ${state.tracks[state.current].title}`
        return `Vue Player`
      }, title => {
          document.title = title
      })
  }
}
</script>
<style lang="scss">
@import '~bulma/bulma.sass';
$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome.scss";

#view {
    margin-bottom: 12rem;
}
</style>