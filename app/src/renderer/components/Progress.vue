<template>
  <section class="section">
      <span class="time">{{ current }}</span>
      <slider :max="100" :step="1" is-fullwidth></slider>
      <progress class="progress is-primary" :value="progress"></progress>
      <span class="time">{{ total }}</span>
  </section>
</template>
<script>
export default {
  props: ['current', 'total', 'progress'],
};
</script>
<style scoped>
  .progress {
    display: inline-block;
    width: 80%;
    margin-bottom: 0;
  }
</style>
