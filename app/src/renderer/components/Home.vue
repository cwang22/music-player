<template>
  <div>
    <h1>Vue Player</h1>
    <search></search>
    <detail name="test"></detail>
    <control></control>
    <progress-bar :current="currentTime" :total="totalTime" :progress="progress"></progress-bar>
    <audio ref="player" :src="url" @canplay="canplay" @ended="ended"></audio>
  </div>
</template>
<script>
import Search from './Search';
import Detail from './Detail';
import Control from './Control';
import ProgressBar from './Progress';

import axios from 'axios';
import { mapGetters } from 'vuex';

import helper from '../helper';

export default {
  components: {
    Search,
    Detail,
    Control,
    ProgressBar,
  },
  name: 'home',
  data() {
    return {
      client_id: 'yhZSOFUtSUGz5OxWpiOhRi065lcrlAqI',
      updateInterval: null,
      currentTime: '00:00',
      totalTime: '00:00',
      progress: 0,
    };
  },
  computed: {
    ...mapGetters(['current', 'playing']),
    url() {
      return `${this.current.stream_url}?client_id=${this.client_id}`;
    },
  },
  created() {
    axios.get(`https://api.soundcloud.com/playlists/209262931?client_id=${this.client_id}`)
      .then((response) => {
        this.$store.dispatch('updateTracks', response.data.tracks);
      });
  },
  watch: {
    playing() {
      this.play();
    },
  },
  methods: {
    canplay() {
      this.totalTime = helper.formatTime(this.$refs.player.duration);
      this.play();
    },
    ended() {
      clearInterval(this.updateInterval);
    },
    play() {
      if (this.playing) {
        this.$refs.player.play();
        this.updateInterval = setInterval(this.update, 1000);
      } else {
        clearInterval(this.updateInterval);
      }
    },
    update() {
      const current = this.$refs.player.currentTime;
      const duration = this.$refs.player.duration;
      this.currentTime = helper.formatTime(current);
      this.progress = current / duration;
    },
  },
};
</script>
