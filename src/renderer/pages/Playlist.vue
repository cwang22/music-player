<template>
    <section class="section">
        <h3 class="title">Play List</h3>
        <table class="table">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Title</td>
                    <td width="30%" class="action">Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(track, index) in currentPage" v-bind:key="track.id" :class="isCurrent(track.id) ? 'is-selected' : ''">
                    <td v-text="page * 10 + index - 9"></td>
                    <td>
                        <router-link :to="'/tracks/' + track.id">{{ track.title }}</router-link>
                    </td>
                    <td class="action">
                        <button class="button" @click="play(track)"><i class="fa fa-play"></i></button>
                        <button class="button" @click="remove(track)"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <a v-if="page > 1" class="button" @click="page--">Previous</a>
        <a v-if="hasNextPage()" class="button" @click="page++">Next</a>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      page: 1
    }
  },
  computed: {
    ...mapGetters(['playlist', 'current']),
    currentPage () {
      return this.playlist.slice((this.page - 1) * 10, this.page * 10)
    }
  },
  name: 'playlist',
  methods: {
    play (index) {
      this.$store.dispatch('change', index)
      this.$store.commit('play')
    },
    remove (track) {
      this.$store.dispatch('remove', track)
    },
    hasNextPage () {
      return this.playlist.length > (10 * this.page)
    },
    isCurrent (id) {
      return id === this.current.id
    }
  }
}
</script>
<style scoped>
.table td {
    vertical-align: middle;
}

.action {
    text-align: right;
}

.action button {
    opacity: 0;
    margin-left: 0.5em;
}

tr:hover .action button {
    opacity: 1;
}
</style>