import { createStore, useStore as vuexUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue';
import IGameMode from '@/services/gamemode.interface';
import { GameModeFactory } from '@/factories/gamemode.factory';

interface GameState {
  gameMode: number;
  difficulty: number;
  service: IGameMode;
}

export const store = createStore<GameState>({
  state: {
    gameMode: 1,
    difficulty: 1,
    service: GameModeFactory.build(1)
  },
  mutations: {
    'SET_DIFFICULTY'(state, difficulty: number) {
      store.state.difficulty = difficulty;
    },
    'SET_GAME_MODE'(state, gameMode: number) {
      store.state.gameMode = gameMode;
      store.state.service = GameModeFactory.build(gameMode);
    }
  }
});

export const key: InjectionKey<Store<GameState>> = Symbol();

export function useStore(): Store<GameState> {
  return vuexUseStore(key)
}
