<template>
    <div id="app">
        <nav class="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" @click="back">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </a>
                <router-link to="playlist" class="navbar-item">Playlist</router-link>
                <router-link to="nowplaying" class="navbar-item">Now Playing</router-link>
                <div class="navbar-item">
                    <p class="control has-icons-right">
                        <input class="input" type="text" placeholder="Search" v-model="query" v-on:keydown.enter.prevent='search'>
                        <span class="icon is-small is-right" @click="search">
                            <i class="fa fa-search"></i>
                        </span>
                    </p>
                </div>
            </div>
        </nav>
        <div class="container" id="view">
            <transition name="forward" mode="out-in">
                <router-view></router-view>
            </transition>
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
    data() {
        return {
            query: ''
        }
    },
    methods: {
        search() {
            this.$router.push({ path: '/search', query: { q: this.query } })
        },
        back() {
            this.$router.go(-1)
        }
    },
    mounted() {
        this.$store.watch(state => {
            if (state.playing) return `Vue Player - ${state.tracks[state.current].title}`
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

.forward-leave-active,
.forward-enter-active {
    transition: all .3s ease;
}

.forward-enter {
    transform: translateX(-10px);
    opacity: 0;
}

.forward-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>