<template>
  <RadioSelectionGroup
      :number-of-options="3"
      lock-when-running
      name="game-mode-selection"
      label="Game Mode"
      v-model="selected"
  />
</template>

<script lang="ts" setup>
import RadioSelectionGroup from '@/components/Selection/RadioSelectionGroup.vue';
import {useStore} from '@/store';
import {ref, watch} from "vue";

const {dispatch} = useStore();

const selected = ref(1);

watch(selected, () => dispatch('setGameMode', selected.value));
</script>

<style scoped lang="scss">
label {
  margin: 0.5rem;
}
</style>