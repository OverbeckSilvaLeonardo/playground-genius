<template>
  <div class="container is-mobile" @startGame="start">

    <h1 class="is-centered m-4">GENIUS</h1>

    <div class="columns is-multiline is-gapless px-4">
      <div class="column is-full my-4">
        <GameModeSelection :key="0"/>
      </div>

      <div class="column is-full my-4">
        <DifficultySelection :key="1"/>
      </div>

      <div class="column is-full my-4">
        <StartGameButton v-if="!isRunning" @click="start"/>
        <FinishGameButton v-else @finishGame="stop"/>
        <p style="float: right">Player turn <span class="player-turn-indicator">{{ playerTurn || 'PC' }}</span></p>
      </div>

      <div class="column">

      </div>
    </div>

    <div class="columns is-multiline is-centered is-gapless is-mobile">
      <GameTile color="green" :current="current"/>
      <GameTile color="red" :current="current"/>
      <GameTile color="yellow" :current="current"/>
      <GameTile color="blue" :current="current"/>
    </div>

    <FloatingIcon @openInformationModal="toggleInfoModal"/>
    <InformationModal :visible="showInfoModal" :close="toggleInfoModal"/>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import GameTile from '@/components/Game/GameTile.vue';
import FloatingIcon from '@/components/Icon/FloatingIcon.vue';
import GameModeSelection from '@/components/Selection/GameModeSelection.vue';
import DifficultySelection from '@/components/Selection/DifficultySelection.vue';
import StartGameButton from '@/components/Button/StartGameButton.vue';
import {useStore} from '@/store';
import FinishGameButton from '@/components/Button/FinishGameButton.vue';
import InformationModal from '@/components/Modal/InformationModal.vue';

const {dispatch, state} = useStore();

const {value: service} = computed(() => state.service);
const isRunning = computed(() => state.isRunning);
const current = computed(() => state.current);
const playerTurn = computed(() => state.playerTurn);

const showInfoModal = ref(false);

const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value;
};

const start = (): void => {
  dispatch('setGameRunning', true);
  service.start();
};

const stop = (): void => {
  dispatch('setGameRunning', false);
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
    text-align: right
  }
}

</style>