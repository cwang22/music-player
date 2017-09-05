export const tracks = state => state.music.tracks;
export const playing = state => state.music.playing;

export const playlist = state => state.music.playlist.map(id => state.music.tracks[id]);
export const current = state => state.music.tracks[state.music.current];
