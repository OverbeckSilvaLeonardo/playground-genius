<<<<<<< HEAD
import {Commit, createStore, Store, useStore as vuexUseStore} from 'vuex';
import {InjectionKey} from 'vue';
import IGameMode from '@/services/gamemode.interface';
import GameModeFactory from '@/services/gamemode.factory';
import * as types from '@/store/mutation-types';
import {SequencesEnum} from "@/utils/sequences.enum";

export interface GameState {
  gameMode: number;
  difficulty: number;
  isRunning: boolean;
  service: IGameMode;
  current: number | null;
  playerTurn: number | null;
  sequence: number[];
  playerSequence: number[];
  pSequenceIsValid: boolean;
}

const state = {
  gameMode: 1,
  difficulty: 1,
  isRunning: false,
  service: GameModeFactory.build(1),
  current: null,
  playerTurn: null,
  sequenceLength: 0,
  sequence: [],
  playerSequence: [],
  pSequenceIsValid: false,
};

const mutations = {
  // GAME Mutations
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

  //SEQUENCE mutations
  [types.ADD_TO_SEQUENCE](state: GameState, num: number): void {
    state.sequence.push(num);
  },
  [types.ADD_TO_PLAYER_SEQUENCE](state: GameState, num: number): void {
    state.playerSequence.push(num);
  },
  [types.CLEAR_SEQUENCES](): void {
    state.sequence = []
    state.playerSequence = []
  },
  [types.CLEAR_P_SEQUENCE](): void {
    state.playerSequence = []
  },
  [types.SET_CURRENT](state: GameState, current: number): void {
    state.current = current
  },
  [types.SET_PLAYER_TURN](state: GameState, player: number): void {
    state.playerTurn = player
  },
  [types.SET_P_SEQUENCE_IS_VALID](state: GameState, pSequenceIsValid: boolean): void {
    state.pSequenceIsValid = pSequenceIsValid
  }
};

const getters = {
  sequenceLength(state: GameState): number {
    return state.sequence.length;
  },
  playerSequenceLength(state: GameState): number {
    return state.playerSequence.length;
  }
}

const actions = {
  // GAME state
  setDifficulty({commit, state}: { commit: Commit, state: GameState }, difficulty: number): void {
    if (state.isRunning) {
      return
    }

    commit(types.SET_DIFFICULTY, difficulty)
  },
  setGameMode({commit, state}: { commit: Commit, state: GameState }, gameMode: number): void {
    if (state.isRunning) {
      return
    }

    commit(types.SET_GAME_MODE, gameMode)
  },
  setGameRunning({commit}: { commit: Commit }, running: boolean): void {
    commit(types.SET_GAME_RUNNING, running);
  },

  // SEQUENCE state
  addToSequence({commit}: { commit: Commit }, {number, sequenceType}: {number: number, sequenceType: SequencesEnum}): void {
    if (sequenceType === SequencesEnum.PLAYER) {
      return commit(types.ADD_TO_PLAYER_SEQUENCE, number);
    }

    return commit(types.ADD_TO_SEQUENCE, number);
  },
  clearSequences({commit}: { commit: Commit }): void {
    commit(types.CLEAR_SEQUENCES);
  },
  clearPlayerSequence({commit}: { commit: Commit }): void {
    commit(types.CLEAR_P_SEQUENCE);
  },
  setCurrentNumber({commit}: { commit: Commit }, num: number): void {
    commit(types.SET_CURRENT, num);
  },
  setPlayerTurn({commit}: {commit: Commit}, player: number | null): void {
    commit(types.SET_PLAYER_TURN, player);
  },
  setSequenceIsValid({commit}: {commit: Commit}, valid: boolean) {
    commit(types.SET_P_SEQUENCE_IS_VALID, valid);
  }
}
export const store = createStore<GameState>({
  state,
  actions,
  getters,
  mutations
});

export const key: InjectionKey<Store<GameState>> = Symbol();

export function useStore(): Store<GameState> {
  return vuexUseStore(key);
}
=======
import { createPinia } from 'pinia';

export const pinia = createPinia();
>>>>>>> feature/migrating-store-to-pinia
