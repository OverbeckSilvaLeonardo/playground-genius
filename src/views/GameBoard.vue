<template>
  <div class="container is-mobile" @startGame="start">
    <h1 class="is-centered m-4">GENIUS</h1>

    <div class="columns is-multiline is-gapless px-4">
      <div class="column is-full my-4">
        <GameModeSelection />
      </div>

      <div class="column is-full my-4">
        <DifficultySelection />
      </div>

      <div class="column is-full my-4">
        <StartGameButton v-if="!isRunning" @click="start" />
        <FinishGameButton v-else @finishGame="stop" />
        <p style="float: right">
          Turn <span class="player-turn-indicator">{{ playerTurn }}</span>
        </p>
      </div>

      <div class="column"></div>
    </div>

    <div class="columns is-multiline is-centered is-gapless is-mobile">
      <GameTile :color="TileColorsEnum.GREEN" />
      <GameTile :color="TileColorsEnum.RED" />
      <GameTile :color="TileColorsEnum.YELLOW" />
      <GameTile :color="TileColorsEnum.BLUE" />
    </div>

    <FloatingIcon @openInformationModal="toggleInfoModal" />
    <InformationModal :visible="showInfoModal" :close="toggleInfoModal" />
  </div>
</template>

<script setup lang="ts">
import FinishGameButton from '@/components/Button/FinishGameButton.vue';
import StartGameButton from '@/components/Button/StartGameButton.vue';
import GameTile from '@/components/Game/GameTile.vue';
import FloatingIcon from '@/components/Icon/FloatingIcon.vue';
import InformationModal from '@/components/Modal/InformationModal.vue';
import DifficultySelection from '@/components/Selection/DifficultySelection.vue';
import GameModeSelection from '@/components/Selection/GameModeSelection.vue';
import useGameStore from '@/store/game';
import useSequenceStore from '@/store/sequence';
import { TileColorsEnum } from '@/utils/tiles.enums';
import { computed, ref } from 'vue';

const gameStore = useGameStore();
const sequenceStore = useSequenceStore();

const { value: service } = computed(() => gameStore.service);
const isRunning = computed(() => gameStore.isRunning);

const playerTurn = computed(() => {
  if (!gameStore.isRunning) {
    return 'PC'
  }

  if (sequenceStore.current !== null) {
    return 'PC'
  }

  if (gameStore.playerTurn === null || gameStore.playerTurn === 0) {
    return 'PC'
  }

  return 'P' + gameStore.playerTurn
});

const showInfoModal = ref(false);

const toggleInfoModal = (): void => {
  showInfoModal.value = !showInfoModal.value;
};

const start = (): void => {
  service.start();
};

const stop = (): void => {
  service.stop();
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 20px;

  h1 {
    color: var(--background-secondary);
    text-align: center;
    font-size: 2rem;
  }

  .player-turn-indicator {
    color: white;
    display: inline-block;
    width: 30px;
    text-align: right;
  }
}
</style>
