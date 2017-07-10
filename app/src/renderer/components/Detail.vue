<template>
  <div>
    <h3 v-text="current.title"></h3>
    <img :src="current.artwork_url">
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['current']),
  },
};
</script>
