<template>
  <RadioSelectionGroup
    :number-of-options="3"
    name="game-mode-selection"
    label="Game Mode"
    @onSelectionChange="setGameMode"
  />
</template>

<script lang="ts" setup>
import RadioSelectionGroup from '@/components/Selection/RadioSelectionGroup.vue';
import { useStore } from '@/store';

const { dispatch } = useStore();

const setGameMode = (gameMode: number): void => {
  dispatch('setGameMode', gameMode);
};
</script>

<style scoped lang="scss">
label {
  margin: 0.5rem;
}
</style>
