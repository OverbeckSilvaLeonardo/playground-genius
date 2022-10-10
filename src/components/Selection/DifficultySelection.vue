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
import {useStore} from '@/store';
import {ref, watch} from "vue";

const {dispatch, state} = useStore();

const selected = ref(state.difficulty);

watch(selected, () => {
  dispatch('setDifficulty', selected.value);
})

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