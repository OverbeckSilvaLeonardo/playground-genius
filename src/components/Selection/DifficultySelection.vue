<template>
  <div>
    <radio-selection-group number-of-options="5" label="Difficulty" name="difficulty-selection"/>
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import RadioSelectionGroup from '@/components/RadioSelectionGroup';

export default defineComponent({
  name: 'DifficultySelection',
  components: { RadioSelectionGroup },

  data() {
    return {
      selectedDifficulty: 1
    }
  }
});
</script>

<style scoped lang="scss">

</style>
