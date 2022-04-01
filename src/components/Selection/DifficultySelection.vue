<template>
  <radio-selection-group
      :number-of-options="5"
      name="difficulty-selection"
      label="Difficulty"
      @onSelectionChange="setDifficuly"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RadioSelectionGroup from '@/components/Selection/RadioSelectionGroup.vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'DifficultySelection',
  components: { RadioSelectionGroup },

  methods: {
    setDifficuly(difficulty: number) {
      this.store.commit('SET_DIFFICULTY', difficulty);
    },
  },

  setup() {
    const store = useStore();
    return { store };
  },
});
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
