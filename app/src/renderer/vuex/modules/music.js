const state = {
  tracks: [],
  current: 0,
  playing: false,
};

const mutations = {
  updateTracks(state, tracks) {
    state.tracks = tracks;
  },
  change(state, { track }) {
    if (typeof track === 'number') {
      state.current = track;
    } else {
      state.tracks.push(track);
      state.current = state.tracks.length - 1;
    }
  },
  remove(state, { index }) {
    state.tracks.splice(index, 1);
  },
  next(state) {
    if (state.current < state.tracks.length - 1) {
      state.current++;
    } else {
      state.current = 0;
    }
  },
  previous(state) {
    if (state.current > 0) {
      state.current--;
    } else {
      state.current = state.tracks.length - 1;
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
