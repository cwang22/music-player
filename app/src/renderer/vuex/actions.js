export const updateTracks = ({ commit }, tracks) => {
  commit('updateTracks', { tracks });
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

export const change = ({ commit }, track) => {
  commit('change', { track });
};
