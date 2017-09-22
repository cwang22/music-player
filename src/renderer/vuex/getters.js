export const tracks = state => state.tracks
export const playing = state => state.playing

export const playlist = state => state.playlist.map(id => state.tracks[id])
export const current = state => state.tracks[state.current]
