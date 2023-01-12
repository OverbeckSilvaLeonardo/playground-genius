<template>
  <RadioSelectionGroup
      :number-of-options="5"
      name="difficulty-selection"
      label="Difficulty"
      @onSelectionChange="setDifficuly"
  />
</template>

<script lang="ts" setup>
import RadioSelectionGroup from '@/components/Selection/RadioSelectionGroup.vue';
import {useStore} from '@/store';
import useGameStore from '@/store/game';

const {dispatch} = useStore();
const gameStore = useGameStore();

const setDifficuly = (difficulty: number): void => {
  dispatch('setDifficulty', difficulty);
  gameStore.setDifficulty(difficulty);
};

</script>

<style scoped lang="scss">
.nes-container {
  border-color: var(--background-secondary);
}

h3.title {
  background-color: var(--background-dark) !important;
  color: var(--background-secondary);
}
</style>