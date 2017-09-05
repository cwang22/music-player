import api from '../services/soundcloud';

export const init = ({ commit }) => {
  api.get('playlists/209262931').then(({ data }) => {
    commit('setTracks', data.tracks);
    commit('setPlaylist', data.tracks.map(track => track.id));
    commit('setCurrent', data.tracks[0].id);
    // commit('updateTracks', data.tracks);
  });
};

export const updateTracks = ({ commit }, tracks) => {
  commit('setTracks', { tracks });
};

export const change = ({ commit }, track) => {
  commit('setTracks', [track]);
  commit('addPlaylist', track.id);
  commit('setCurrent', track.id);
};

export const remove = ({ commit }, track) => {
  commit('remove', track.id);
};

export const next = ({ commit }) => {
  commit('next');
};

export const previous = ({ commit }) => {
  commit('previous');
};

export const play = ({ commit }) => {
  commit('play');
};

export const toggle = ({ commit }) => {
  commit('toggle');
};
