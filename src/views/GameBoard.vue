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
        <StartGameButton v-if="!isRunning" @startGame="start"/>
        <FinishGameButton v-else @finishGame="stop"/>
      </div>
    </div>

    <div class="columns is-multiline is-centered is-gapless is-mobile">
        <GameTile color="green"/>
        <GameTile color="red"/>
        <GameTile color="yellow"/>
        <GameTile color="blue"/>
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
import DifficultySelection from '@/components/Selection/DifficultySelection.vue';
import GameModeSelection from '@/components/Selection/GameModeSelection.vue';
import { useStore } from '@/store';
import { computed, ref } from 'vue';

const store = useStore();
const service = computed(() => store.state.service);
const isRunning = computed(() => store.state.isRunning);

const showInfoModal = ref(false);

const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value;
};

const start = (): void => {
  store.dispatch('setGameRunning', true);
  // this.service.startGame();
};

const stop = (): void => {
  store.dispatch('setGameRunning', false);
  // this.service.startGame();
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
}

</style>