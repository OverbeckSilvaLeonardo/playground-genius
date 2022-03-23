<template>
  <div>
    <label>
      <input type="radio" class="nes-radio is-dark" name="answer-dark" checked />
      <span>Yes</span>
    </label>

    <label>
      <input type="radio" class="nes-radio is-dark" name="answer-dark" />
      <span>No</span>
    </label>
  </div>
</template>

<script>

import {defineComponent} from 'vue';

export default defineComponent({
  name: 'GameModeSelection'
});
</script>

<style scoped>

</style>
