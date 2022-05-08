<template>
  <button type="button" class="nes-btn is-error" @click="emitFinishGame()">Finish Game</button>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FinishGameButton',
  emits: ['finishGame'],
  methods: {
    emitFinishGame() {
      this.$emit('finishGame');
    }
  }
});
</script>
