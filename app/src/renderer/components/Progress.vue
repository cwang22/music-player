<template>
    <div>
        <span>{{ played }}</span>
        <progress></progress>
         <span> {{ total }}</span>
      </div>
</template>
<script>
    export default {
      props: ['played', 'total'],
    };
</script>
