<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <search></search>
    <detail name="test"></detail>
    <player></player>
    <progress-bar played="60" total="120"></progress-bar>
    <current-page></current-page>
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
  import Search from './Search';
  import Detail from './Detail';
  import Player from './Player';
  import ProgressBar from './Progress';
  import CurrentPage from './LandingPageView/CurrentPage';
  import Links from './LandingPageView/Links';
  import Versions from './LandingPageView/Versions';
  export default {
    components: {
      Search,
      Detail,
      Player,
      ProgressBar,
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
