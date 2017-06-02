<template>
    <div>
        <button><icon name="backward"></icon></button>
        <button><icon name="play"></icon></button>
        <button><icon name="pause"></icon></button>
        <button><icon name="forward"></icon></button>
    </div>
</template>
<script>
    import Icon from 'vue-awesome/components/Icon';
    export default {
      components: { Icon },
    };
</script>
