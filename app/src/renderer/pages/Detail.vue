<template>
  <section class="section">
    <h3 class="title" v-text="current.title"></h3>
    <figure class="image is-128x128">
        <img  :src="current.artwork_url">
    </figure>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['current']),
  },
};
</script>
