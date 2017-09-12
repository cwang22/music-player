<template>
  <div>
    <h3 class="title has-text-centered" v-text="track.title"></h3>
    <img class="image" :src="track.artwork_url | large">
  </div>
</template>
<script>
export default {
  props: ['track'],
  computed: {
    isCurrent() {
      return this.track.id === this.$store.getters.current.id;
    },
    isInPlaylist() {
      return this.$store.state.music.playlist.includes(this.track.id);
    },
  },
  filters: {
    large(value) {
      if (value) return value.replace('-large', '-t300x300');
      return 'http://via.placeholder.com/300?text=No+Image';
    },
  },
};
</script>
<style>
  .image {
    max-height: 300px;
    max-width: 300px;
    margin: 0 auto;
  }
</style>
