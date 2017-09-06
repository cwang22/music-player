<template>
  <detail :track="track"></detail>
</template>
<script>
import Detail from '../components/Detail';
export default {
  components: { Detail },
  computed: {
    track() {
      return this.$store.state.music.tracks[this.$route.params.id];
    },
  },
};
</script>
