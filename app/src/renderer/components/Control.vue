<template>
    <section class="section">
        <button class="button" @click="play"><i class="fa fa-play"></i></button>
        <button class="button" @click="next"><i class="fa fa-forward"></i></button>
    </section>
</template>
<script>
    export default {
      methods: {
        play() {
          this.$store.dispatch('play');
        },
        next() {
          this.$store.dispatch('next');
        },
      },
    };
</script>

