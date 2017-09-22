<template>
    <footer class="footer">
        <div class="container">
            <div class="columns is-mobile">
                <div class="column is-2">
                    <img :src="current && current.artwork_url ? current.artwork_url : 'http://via.placeholder.com/128?text=No+Image'">
                </div>
                <div class="column is-10">
                    <h5 v-text="current ? current.title : ''" class="has-text-centered"></h5>
                    <control></control>
                    <slider v-bind="setting" v-model="progress"></slider>
                </div>
            </div>
        </div>
        <audio ref="player" :src="url" @canplay="canplay" @ended="ended"></audio>
    </footer>
</template>
<script>
import Control from './Control'
import Slider from 'vue-slider-component'
import { mapGetters } from 'vuex'

import helper from '../helper'

export default {
  components: {
    Control,
    Slider
  },
  data () {
    return {
      client_id: 'yhZSOFUtSUGz5OxWpiOhRi065lcrlAqI',
      updateInterval: null,
      currentTime: '00:00',
      totalTime: '00:00',
      duration: 0,
      progress: 0,
      setting: {
        tooltip: false,
        min: 0,
        max: 100
      }
    }
  },
  computed: {
    ...mapGetters(['current', 'playing']),
    url () {
      return this.current ? `${this.current.stream_url}?client_id=${this.client_id}` : ''
    }
  },
  watch: {
    progress (newValue, oldValue) {
      if (Math.abs(newValue - oldValue) > 1) {
        this.currentTime = helper.formatTime(newValue)
        this.$refs.player.currentTime = newValue
      }
    },
    playing () {
      this.play()
    }
  },
  methods: {
    canplay () {
      this.duration = this.$refs.player.duration
      this.totalTime = helper.formatTime(this.$refs.player.duration)
      this.setting.max = Number.parseInt(this.duration, 10)
      this.play()
    },
    ended () {
      clearInterval(this.updateInterval)
      this.$store.dispatch('next')
    },
    play () {
      if (this.playing) {
        this.$refs.player.play()
        this.updateInterval = setInterval(this.update, 200)
      } else {
        this.$refs.player.pause()
        clearInterval(this.updateInterval)
      }
    },
    update () {
      const current = this.$refs.player.currentTime
      this.currentTime = helper.formatTime(current)
      this.progress = Number.parseInt(current, 10)
    }
  }
}
</script>
<style>
h5 {
    margin-bottom: 1rem;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 3rem 1.5rem;
}
</style>