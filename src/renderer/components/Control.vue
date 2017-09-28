<template>
  <div id="control" class="has-text-centered">
    <button :class="shuffleClass" @click="commit('shuffle')">
      <i class="fa fa-random"></i>
    </button>
    <button class="button" @click="commit('previous')">
      <i class="fa fa-backward"></i>
    </button>
    <button class="button" @click="commit('toggle')">
      <i v-if="playing" class="fa fa-pause"></i>
      <i v-else class="fa fa-play"></i>
    </button>
    <button class="button" @click="commit('next')">
      <i class="fa fa-forward"></i>
    </button>
    <button :class="repeatClass">
      <i class="fa fa-repeat" @click="commit('repeat')"></i>
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    playing() {
      return this.$store.state.playing
    },
    shuffleClass() {
      return [
        'button',
        this.$store.state.shuffle ? 'is-active' : ''
      ]
    },
    repeatClass() {
      return [
        'button',
        this.$store.state.repeat ? 'is-active' : ''
      ]
    }
  },
  methods: {
    commit(mutation) {
      this.$store.commit(mutation)
    }
  }
}
</script>
<style scoped>
button {
  padding: 0 1.75em;
}
</style>