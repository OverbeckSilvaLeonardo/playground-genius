import GameModeFactory from '@/services/gamemode.factory';
import IGameMode from '@/services/gamemode.interface';
import * as types from '@/store/mutation-types';
import { createPinia } from 'pinia';
import { InjectionKey } from 'vue';
import { Commit, createStore, Store, useStore as vuexUseStore } from 'vuex';

interface GameState {
  gameMode: number;
  difficulty: number;
  isRunning: boolean;
  service: IGameMode;
}

const state = {
  gameMode: 1,
  difficulty: 1,
  isRunning: false,
  service: GameModeFactory.build(1),
};

const mutations = {
  [types.SET_DIFFICULTY](state: GameState, difficulty: number): void {
    state.difficulty = difficulty;
  },
  [types.SET_GAME_MODE](state: GameState, gameMode: number): void {
    state.gameMode = gameMode;
    state.service = GameModeFactory.build(gameMode);
  },
  [types.SET_GAME_RUNNING](state: GameState, running: boolean): void {
    state.isRunning = running;
  },
};

const actions = {
  setDifficulty({ commit }: { commit: Commit }, difficulty: number): void {
    commit(types.SET_DIFFICULTY, difficulty);
  },
  setGameMode({ commit }: { commit: Commit }, gameMode: number): void {
    commit(types.SET_GAME_MODE, gameMode);
  },
  setGameRunning({ commit }: { commit: Commit }, running: boolean): void {
    commit(types.SET_GAME_RUNNING, running);
  },
};
export const store = createStore<GameState>({
  state,
  actions,
  mutations,
});

export const key: InjectionKey<Store<GameState>> = Symbol();

export function useStore(): Store<GameState> {
  return vuexUseStore(key);
}

export const pinia = createPinia();
