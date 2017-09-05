import Vue from 'vue';
import _ from 'lodash';
const state = {
  tracks: {},
  playlist: [],
  current: 0,
  playing: false,
};

const mutations = {
  setTracks(state, tracks) {
    tracks.forEach(item => {
      if (item) {
        Vue.set(state.tracks, item.id, item);
      }
    });
  },

  setPlaylist(state, ids) {
    state.playlist = ids;
  },

  addPlaylist(state, id) {
    if (!state.playlist.includes(id)) {
      state.playlist.push(id);
    }
  },

  setCurrent(state, id) {
    state.current = id;
  },

  remove(state, id) {
    state.playlist = _.without(state.playlist, id);
  },

  next(state) {
    const index = state.playlist.indexOf(state.current);
    if (index === state.playlist.length - 1) {
      state.current = state.playlist[0];
    } else {
      state.current = state.playlist[index + 1];
    }
  },
  previous(state) {
    const index = state.playlist.indexOf(state.current);
    if (index === 0) {
      state.current = state.playlist[state.playlist.length - 1];
    } else {
      state.current = state.playlist[index - 1];
    }
  },
  play(state) {
    state.playing = true;
  },
  toggle(state) {
    state.playing = !state.playing;
  },
};

export default {
  state,
  mutations,
};
