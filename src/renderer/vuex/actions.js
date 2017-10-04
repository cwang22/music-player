import api from '../services/soundcloud'

export const init = ({ commit, state }) => {
  if (state.playlist.length === 0)
    api.get('playlists/209262931').then(({ data }) => {
      commit('setTracks', data.tracks)
      commit('setPlaylist', data.tracks.map(track => track.id))
      commit('setCurrent', data.tracks[0].id)
    })
}

export const updateTracks = ({ commit }, tracks) => {
  commit('setTracks', tracks)
}

export const change = ({ commit }, track) => {
  commit('setTracks', [track])
  commit('addPlaylist', track.id)
  commit('setCurrent', track.id)
}

export const remove = ({ commit, state }, track) => {
  commit('remove', track.id)
  if (state.current === track.id) commit('next')
}
