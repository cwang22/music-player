import * as types from './mutation-types';

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER);
};

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER);
};

export const updateTracks = ({ commit }, tracks) => {
  commit('updateTracks', { tracks });
};

export const next = ({ commit }) => {
  commit('next');
};

export const play = ({ commit }) => {
  commit('play');
};

export const change = ({ commit }, track) => {
  commit('change', { track });
};
