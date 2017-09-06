<template>
    <section class="section">
    <h3 class="title">Search Result: {{ query }}</h3>
    <table class="table">
      <thead>
        <tr>
          <td>#</td>
          <td>Title</td>
          <td width="30%" class="action">Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(track, index) in tracks" v-bind:key="track.id">
          <td v-text="index + 1"></td>
          <td><router-link :to="'/tracks/' + track.id">{{ track.title }}</router-link></td>
          <td class="action">
            <button class="button" @click="play(track)"><i class="fa fa-play"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
    <a v-if="offset > 0" class="button" @click="previous">Previous</a>
    <a v-if="tracks.length == 20" class="button" @click="next">Next</a>
  </section>
</template>
<script>
import api from '../services/soundcloud';
export default {
  data() {
    return {
      offset: 0,
      tracks: [],
    };
  },
  computed: {
    query() {
      return this.$route.query.q;
    },
  },
  created() {
    this.search();
  },
  watch: {
    query() {
      this.search();
    },
  },
  methods: {
    search() {
      api.get('/tracks', {
        params: {
          q: this.query,
          offset: this.offset,
          limit: 20,
        },
      }).then((response) => {
        this.tracks = response.data;
        this.$store.dispatch('updateTracks', response.data);
      });
    },
    play(item) {
      this.$store.dispatch('change', item);
    },
    previous() {
      this.offset -= 20;
      this.search();
    },
    next() {
      this.offset += 20;
      this.search();
    },
  },
};
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
  transition: ease-out 0.5s;
}

tr:hover .action button {
  opacity: 1;
}
</style>
