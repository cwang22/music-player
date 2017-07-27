const state = {
  tracks: [],
  current: 0,
  playing: false,
};

const mutations = {
  updateTracks(state, { tracks }) {
    state.tracks = tracks;
  },
  addTrack(state, { track }) {
    state.tracks.push(track);
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
  change(state, { track }) {
    state.tracks.push(track);
    state.current = state.tracks.length - 1;
  },
};

export default {
  state,
  mutations,
};
