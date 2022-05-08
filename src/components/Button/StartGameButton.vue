<template>
  <button type="button" class="nes-btn is-warning" @click="emitStartOfGame()">Start Game</button>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StartGameButton',
  emits: ['startGame'],
  methods: {
    emitStartOfGame() {
      this.$emit('startGame');
    }
  }
});
</script>
