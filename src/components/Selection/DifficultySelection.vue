<template>
  <RadioSelectionGroup
      :number-of-options="5"
      lock-when-running
      name="difficulty-selection"
      label="Difficulty"
      v-model="selected"
  />
</template>

<script lang="ts" setup>
import RadioSelectionGroup from '@/components/Selection/RadioSelectionGroup.vue';
import useGameStore from '@/store/game';
import { ref, watch } from 'vue';

const gameStore = useGameStore();

const selected = ref(1);

watch(selected, () => gameStore.setDifficulty(selected.value));
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
