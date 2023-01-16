import GameModeFactory from '@/services/gamemode.factory';
import { SequencesEnum } from '@/utils/sequences.enum';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useGameStore = defineStore('game', () => {
  const gameMode = ref(1);
  const difficulty = ref(1);
  const isRunning = ref(false);
  const service = GameModeFactory.build(gameMode.value);
  const playerTurn = ref<number>(0);

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

  function setPlayerTurn(player: SequencesEnum) {
    if (!(player in SequencesEnum)) {
      throw Error('Invalid player turn value.')
    }

    playerTurn.value = player;
  }

  return {
    gameMode,
    difficulty,
    isRunning,
    service,
    playerTurn,
    setDifficulty,
    setGameMode,
    setGameIsRunning,
    setPlayerTurn,
  };
});

export default useGameStore;
