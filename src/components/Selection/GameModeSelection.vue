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
import useGameStore from '@/store/game';

const gameStore = useGameStore();

const setGameMode = (gameMode: number): void => {
  gameStore.setGameMode(gameMode);
};
</script>

<style scoped lang="scss">
label {
  margin: 0.5rem;
}
</style>
