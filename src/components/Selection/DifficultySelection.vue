<template>
  <div>
    <radio-selection-group
      :number-of-options="5"
      label="Difficulty"
      name="difficulty-selection"
      @onSelectionChange="setDifficuly"
    />
  </div>
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

<style scoped lang="scss"></style>
