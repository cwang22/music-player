<template>
  <detail :track="current"></detail>
</template>
<script>
import { mapGetters } from 'vuex';
import Detail from '../components/Detail';
export default {
  components: { Detail },
  computed: {
    ...mapGetters(['current']),
  },
};
</script>
