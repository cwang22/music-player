<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <search></search>
    <detail name="test"></detail>
    <player></player>
    <progress></progress>
    <current-page></current-page>
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
  import Search from './Search';
  import Detail from './Detail';
  import Player from './Player';
  import Progress from './Progress';
  import CurrentPage from './LandingPageView/CurrentPage';
  import Links from './LandingPageView/Links';
  import Versions from './LandingPageView/Versions';
  export default {
    components: {
      Search,
      Detail,
      Player,
      Progress,
      CurrentPage,
      Links,
      Versions,
    },
    name: 'landing-page',
  };
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
