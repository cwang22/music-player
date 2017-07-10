const state = {
  tracks: {},
  current: {
    stream_url: '',
  },
  playing: false,
};

const mutations = {
  updateTracks(state, { tracks }) {
    state.tracks = tracks;
    const random = Math.floor(Math.random() * state.tracks.length);
    state.current = state.tracks[random];
  },
  next(state) {
    const random = Math.floor(Math.random() * state.tracks.length);
    state.current = state.tracks[random];
  },
  play(state) {
    state.playing = true;
  },
};

export default {
  state,
  mutations,
};
