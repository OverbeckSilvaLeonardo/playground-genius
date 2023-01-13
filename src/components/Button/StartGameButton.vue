<template>
  <button type="button" class="nes-btn is-warning" @click="$emit('startGame')">Start Game</button>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue';

defineEmits(['startGame']);
</script>
