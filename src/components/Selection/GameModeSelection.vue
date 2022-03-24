<template>
  <div>
    <radio-selection-group
      :number-of-options="3"
      label="Game Mode"
      name="game-mode-selection"
      @onSelectionChange="setGameMode"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RadioSelectionGroup from '@/components/Selection/RadioSelectionGroup.vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'GameModeSelection',
  components: { RadioSelectionGroup },

  methods: {
    setGameMode(gameMode: number) {
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
