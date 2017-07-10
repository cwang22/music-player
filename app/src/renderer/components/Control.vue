<template>
    <div>
        <button @click="open"><icon name="folder-open"></icon></button>
        <button @click="play"><icon name="play"></icon></button>
        <button @click="next"><icon name="forward"></icon></button>
    </div>
</template>
<script>

    import Icon from 'vue-awesome';
    const { dialog } = require('electron').remote;
    export default {
      components: { Icon },
      methods: {
        open() {
          dialog.showOpenDialog((filepath) => {
            this.src = filepath;
          });
        },
        play() {
          this.$store.dispatch('play');
        },
        next() {
          this.$store.dispatch('next');
        },
      },
    };
</script>

