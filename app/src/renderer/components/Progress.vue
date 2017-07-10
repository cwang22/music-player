<template>
    <div>
        <span>{{ current }}</span>
        <progress :value="progress"></progress>
         <span>{{ total }}</span>
      </div>
</template>
<script>
export default {
  props: ['current', 'total', 'progress'],
};
</script>
