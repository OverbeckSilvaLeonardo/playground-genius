<template>
  <div class="container is-mobile" @startGame="start">

    <h1 class="is-centered m-4">GENIUS</h1>

    <div class="columns is-multiline is-gapless px-4">
      <div class="column is-full my-4">
        <GameModeSelection/>
      </div>

      <div class="column is-full my-4">
        <DifficultySelection/>
      </div>

      <div class="column is-full my-4">
        <StartGameButton v-if="!isRunning" @click="start"/>
        <FinishGameButton v-else @finishGame="stop"/>
        <p style="float: right"> Turn <span class="player-turn-indicator">{{ playerTurn ? `P${playerTurn}` : 'PC' }}</span></p>
      </div>

      <div class="column">

      </div>
    </div>

    <div class="columns is-multiline is-centered is-gapless is-mobile">
      <GameTile :color="TileColorsEnum.GREEN"/>
      <GameTile :color="TileColorsEnum.RED"/>
      <GameTile :color="TileColorsEnum.YELLOW"/>
      <GameTile :color="TileColorsEnum.BLUE"/>
    </div>

    <FloatingIcon @openInformationModal="toggleInfoModal"/>
    <InformationModal :visible="showInfoModal" :close="toggleInfoModal"/>
  </div>
</template>

<script setup lang="ts">
import FinishGameButton from '@/components/Button/FinishGameButton.vue';
import StartGameButton from '@/components/Button/StartGameButton.vue';
import GameTile from '@/components/Game/GameTile.vue';
import FloatingIcon from '@/components/Icon/FloatingIcon.vue';
import InformationModal from '@/components/Modal/InformationModal.vue';
<<<<<<< HEAD
import { TileColorsEnum } from '@/utils/tiles.enums';

const {dispatch, state} = useStore();

const {value: service} = computed(() => state.service);
const isRunning = computed(() => state.isRunning);
const playerTurn = computed(() => state.playerTurn);
=======
import DifficultySelection from '@/components/Selection/DifficultySelection.vue';
import GameModeSelection from '@/components/Selection/GameModeSelection.vue';
import useGameStore from '@/store/game';
import { computed, ref } from 'vue';

const gameStore = useGameStore();
// const service = computed(() => gameStore.service);
const isRunning = computed(() => gameStore.isRunning);
>>>>>>> feature/migrating-store-to-pinia

const showInfoModal = ref(false);

const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value;
};

const start = (): void => {
<<<<<<< HEAD
  dispatch('setGameRunning', true);
  service.start();
};

const stop = (): void => {
  dispatch('setGameRunning', false);
  service.stop();
=======
  gameStore.setGameIsRunning(true);
  // this.service.startGame();
};

const stop = (): void => {
  gameStore.setGameIsRunning(false);
  // this.service.startGame();
>>>>>>> feature/migrating-store-to-pinia
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
    text-align: right
  }
}

</style>