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
import { useStore } from '@/store';
import { SET_DIFFICULTY } from '@/store/mutation-types';

const store = useStore();

const setDifficuly = (difficulty: number): void => {
  store.commit(SET_DIFFICULTY, difficulty);
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
