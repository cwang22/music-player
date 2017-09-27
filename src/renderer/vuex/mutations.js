import Vue from 'vue'
import _ from 'lodash'

export default {
  setTracks (state, tracks) {
    tracks.forEach(item => {
      if (item) {
        Vue.set(state.tracks, item.id, item)
      }
    })
  },
  toggleShuffle (state) {
    state.isShuffle = !state.isShuffle
    state.shuffleList = state.isShuffle ? _.shuffle(state.playlist) : []
  },

  setPlaylist (state, ids) {
    state.playlist = ids
  },

  addPlaylist (state, id) {
    if (!state.playlist.includes(id)) {
      state.playlist.push(id)
    }
  },

  setCurrent (state, id) {
    state.current = id
  },

  remove (state, id) {
    state.playlist = _.without(state.playlist, id)
  },

  next (state) {
    const list = state.isShuffle ? state.shuffleList : state.playlist
    const index = list.indexOf(state.current)
    if (index === list.length - 1) {
      state.current = list[0]
    } else {
      state.current = list[index + 1]
    }
  },
  previous (state) {
    const list = state.isShuffle ? state.shuffleList : state.playlist
    const index = list.indexOf(state.current)
    if (index === 0) {
      state.current = list[list.length - 1]
    } else {
      state.current = list[index - 1]
    }
  },
  play (state) {
    state.playing = true
  },
  toggle (state) {
    state.playing = !state.playing
  },
  updateVolume (state, value) {
    state.volume = value
  }
}
