<template>
    <div id="control" class="has-text-centered">
        <button class="button" @click="previous"><i class="fa fa-backward"></i></button>
        <button class="button" @click="toggle"><i v-if="playing" class="fa fa-pause"></i><i v-else="playing" class="fa fa-play"></i></button>
        <button :class="shuffleClass" @click="shuffle"><i class="fa fa-random"></i></button>
        <button class="button" @click="next"><i class="fa fa-forward"></i></button>
    </div>
</template>
<script>
export default {
  computed: {
    playing() {
      return this.$store.state.music.playing;
    },
    shuffleClass() {
      return [
        'button',
        this.$store.state.music.isShuffle ? 'is-active' : '',
      ];
    },
  },
  methods: {
    toggle() {
      this.$store.dispatch('toggle');
    },
    shuffle() {
      this.$store.dispatch('shuffle');
    },
    next() {
      this.$store.dispatch('next');
    },
    previous() {
      this.$store.dispatch('previous');
    },
  },
};
</script>
<style scopped>
  #control {
    margin-bottom:1rem;
  }
</style>

