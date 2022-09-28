<template>
  <button type="button" class="nes-btn is-error" @click="$emit('finishGame')">Finish Game</button>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue';

defineEmits(['finishGame'])
</script>
