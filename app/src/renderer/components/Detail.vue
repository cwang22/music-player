<template>
  <div>
    <h3 class="title has-text-centered" v-text="track.title"></h3>
    <img class="image" :src="track.artwork_url | large">
  </div>
</template>
<script>
export default {
  props: ['track'],
  filters: {
    large(value) {
      if (value) return value.replace('-large', '-t300x300');
      return 'http://via.placeholder.com/500?text=No+Image';
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
