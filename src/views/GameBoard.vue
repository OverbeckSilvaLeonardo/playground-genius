<template>
  <div class="container">
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>

@import '../scss/_variables.scss';

.tile {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
