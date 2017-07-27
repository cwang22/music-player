export const tracks = state => state.music.tracks;
export const current = (state) => {
  if (state.music.tracks.length === 0) {
    return { stream_url: '' };
  }
  return state.music.tracks[state.music.current];
};
export const playing = state => state.music.playing;
