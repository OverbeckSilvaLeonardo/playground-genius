<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <a class="nes-pointer navbar-item" href="https://overbecksilvaleonardo.dev">Dashboard</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped lang="scss">
@import '../scss/_variables.scss';

nav {
  background-color: $background-primary;
  top: 0;

  a.navbar-item {
    background-color: $background-primary;
    color: $background-secondary;
  }

  a.navbar-item:hover {
    background-color: $background-secondary;
    color: $background-primary;
    text-decoration: none;
  }
}
</style>
