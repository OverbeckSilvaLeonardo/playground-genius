<template>
  <main>
    <NavBar/>
    <GameBoard/>
  </main>
</template>

<script lang="ts" setup>
import NavBar from '@/components/Navigation/NavBar.vue';
import GameBoard from '@/views/GameBoard.vue';

</script>

<style lang="scss">

@import './scss/_variables.scss';

@font-face {
  font-family: "Press Start 2P";
  src: local("Press Start 2P"),
  url(./assets/fonts/PressStart2P-Regular.ttf) format("truetype");
}

html {
  background-color: #212529 !important;
}

#app {
  font-family: "Press Start 2P", sans-serif;
  background-color: #212529 !important;

  a:hover {
    cursor: var(--cursor);
  }

  button {
    font-family: "Press Start 2P", sans-serif;
  }
}
</style>