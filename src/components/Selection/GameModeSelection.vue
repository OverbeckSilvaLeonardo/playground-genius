<template>
  <radio-selection-group
    :number-of-options="3"
    name="game-mode-selection"
    label="Game Mode"
    @onSelectionChange="setGameMode"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RadioSelectionGroup from '@/components/Selection/RadioSelectionGroup.vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'GameModeSelection',
  components: { RadioSelectionGroup },

  methods: {
    setGameMode(gameMode: number): void {
      this.store.commit('SET_GAME_MODE', gameMode);
    },
  },

  setup() {
    const store = useStore();
    return { store };
  },
});
</script>

<style scoped lang="scss">
label {
  margin: 0.5rem;
}
</style>
