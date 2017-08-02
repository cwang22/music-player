<template>
  <section class="section">
    <h3 class="title" v-text="track.title"></h3>
    <figure class="image is-128x128">
        <img  :src="track.artwork_url">
    </figure>
  </section>
</template>
<script>
export default {
  props: ['track'],
};
</script>
