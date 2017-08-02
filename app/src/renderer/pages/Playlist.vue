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
        <tr v-for="(track, index) in tracks" v-bind:key="track.id">
          <td v-text="index + 1"></td>
          <td v-text="track.title"></td>
          <td class="action">
            <button class="button" @click="play(index)"><i class="fa fa-play"></i></button>
            <button class="button" @click="remove(index)"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['tracks']),
  },
  name: 'playlist',
  methods: {
    play(index) {
      this.$store.dispatch('change', index);
      this.$store.dispatch('play');
    },
    remove(index) {
      this.$store.dispatch('remove', index);
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
}

tr:hover .action button {
  opacity: 1;
}
</style>
