<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-2 img-wrapper">
          <img :src="current && current.artwork_url ? current.artwork_url : 'http://via.placeholder.com/128?text=No+Image'">
        </div>
        <div class="column is-8">
          <slider v-bind="playbackOptions" v-model="progress"></slider>
          
          <div class="columns inner">
            <div class="column">
              <h5 v-text="current ? current.title : ''"></h5>
            </div>
            <div class="column">
              <control></control>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <slider id="volume" v-bind="volumeOptions" v-model="volume"></slider>          
          <i :class="volumeClasses" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <audio ref="player" :volume="volume / 100" :src="url" @canplay="canplay" @ended="ended"></audio>
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
      playbackOptions: {
        tooltip: false,
        min: 0,
        max: 100
      },
      volumeOptions: {
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
    },
    volume: {
      get () {
        return this.$store.state.volume
      },
      set (value) {
        this.$store.commit('updateVolume', value) 
      }
    },
    repeat() {
        return this.$store.state.repeat
    },
    volumeClasses () {
      return [
        'has-text-centered',
        'fa',
        this.volume === 0 ? 'fa-volume-off' : 
        this.volume <= 50 ? 'fa-volume-down' :
         'fa-volume-up'
      ]
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
      this.playbackOptions.max = Number.parseInt(this.duration, 10)
      this.play()
    },
    ended () {
      clearInterval(this.updateInterval)
      console.log('called')
      if(this.repeat) {
        this.$refs.player.currentTime = 0
        this.play()
      } else {
      console.log('called')
        
        this.$store.dispatch('next')
      }
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
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
}

.img-wrapper {
  display: flex;
  align-items: center;
}

.inner .column {
  text-align: center;
}

img {
  max-height: 100px;
}

.fa {
  display: block;
}
</style>