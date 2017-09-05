import api from '../services/soundcloud';

export const init = ({ commit }) => {
  api.get('playlists/209262931').then(({ data }) => {
    commit('updateTracks', data.tracks);
  });
};

export const updateTracks = ({ commit }, tracks) => {
  commit('updateTracks', { tracks });
};

export const change = ({ commit }, track) => {
  commit('change', { track });
};

export const remove = ({ commit }, index) => {
  commit('remove', { index });
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
