import GameModeFactory from '@/services/gamemode.factory';
import { defineStore } from 'pinia';
import { ref } from 'vue';

 const useGameStore = defineStore('game', () => {
  const gameMode = ref(1);
  const difficulty = ref(1);
  const isRunning = ref(false);
  const service = GameModeFactory.build(gameMode.value);

  function setDifficulty(newDifficulty: number): void {
    if (gameIsRunning()) {
      return;
    }

    difficulty.value = newDifficulty;
  }

  function setGameMode(newGameMode: number): void {
    if (gameIsRunning()) {
      return;
    }

    gameMode.value = newGameMode;
  }

  function setGameIsRunning(newStatus: boolean) {
    isRunning.value = newStatus;
  }

  function gameIsRunning() {
    return isRunning.value;
  }

  return { gameMode, difficulty, isRunning, service, setDifficulty, setGameMode, setGameIsRunning };
});

export default useGameStore;
