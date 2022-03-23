import { createStore, useStore as vuexUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

interface GameState {
  gameMode: number;
  difficulty: number;
}

export const key: InjectionKey<Store<GameState>> = Symbol();

export const store = createStore<GameState>({
  state: {
    gameMode: 1,
    difficulty: 1,
  },
});

export function useStore(): Store<GameState> {
  return vuexUseStore(key)
}
