import { createStore, useStore as vuexUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

interface GameState {
  gameMode: number;
  difficulty: number;
}

export const store = createStore<GameState>({
  state: {
    gameMode: 1,
    difficulty: 1,
  },
  mutations: {
    'SET_DIFFICULTY'(state, difficulty: number) {
      store.state.difficulty = difficulty;
    },
    'SET_GAME_MODE'(state, gameMode: number) {
      store.state.gameMode = gameMode;
    }
  }
});

export const key: InjectionKey<Store<GameState>> = Symbol();

export function useStore(): Store<GameState> {
  return vuexUseStore(key)
}
