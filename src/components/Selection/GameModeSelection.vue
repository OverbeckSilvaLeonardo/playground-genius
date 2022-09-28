<template>
  <RadioSelectionGroup
      :number-of-options="3"
      name="game-mode-selection"
      label="Game Mode"
      @onSelectionChange="setGameMode"
  />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import RadioSelectionGroup from '@/components/Selection/RadioSelectionGroup.vue';
import { useStore } from '@/store';
import { SET_GAME_MODE } from '@/store/mutation-types';

const store = useStore();

const setGameMode = (gameMode: number): void => {
  store.commit(SET_GAME_MODE, gameMode);
};

</script>

<style scoped lang="scss">
label {
  margin: 0.5rem;
}
</style>
