import {createStore, useStore as vuexUseStore, Store, Commit} from 'vuex';
import {InjectionKey} from 'vue';
import IGameMode from '@/services/gamemode.interface';
import GameModeFactory from '@/services/gamemode.factory';
import * as types from '@/store/mutation-types';

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
    service: GameModeFactory.build(1)
};

const mutations = {
    [types.SET_DIFFICULTY](state: GameState, difficulty: number): void {
        state.difficulty = difficulty;
    },
    [types.SET_GAME_MODE](state: GameState, gameMode: number): void {
        state.gameMode = gameMode;
        state.service = GameModeFactory.build(gameMode);
    },
    [types.SET_GAME_RUNNING](): void {
        state.isRunning = true;
    },
    [types.SET_GAME_NOT_RUNNING](): void {
        state.isRunning = false;
    }
};

const actions = {
    setDifficulty({commit}: { commit: Commit }, difficulty: number): void {
        commit(types.SET_DIFFICULTY, difficulty)
    },
    setGameMode({commit}: { commit: Commit }, gameMode: number): void {
        commit(types.SET_GAME_MODE, gameMode)
    }
}
export const store = createStore<GameState>({
    state,
    actions,
    mutations
});

export const key: InjectionKey<Store<GameState>> = Symbol();

export function useStore(): Store<GameState> {
    return vuexUseStore(key);
}