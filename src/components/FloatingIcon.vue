<template>
  <a class="floating-icon">
    <i class="nes-icon coin"></i>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FloatingIcon',
});
</script>

<style scoped lang="scss">

@import '../scss/_variables.scss';

$icon-size: 32px;
$float-anchor-size: 60px;

.floating-icon {
  position: absolute;
  display: block;
  width: $float-anchor-size;
  height: $float-anchor-size;
  border-radius: 100%;
  background-color: $background-secondary;
  text-align: center;
  padding-top: calc((#{$float-anchor-size} - #{$icon-size}) / 2);
}
</style>
