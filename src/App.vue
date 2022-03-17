<template>
  <NavBar />
  <GameBoard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import GameBoard from "./views/GameBoard.vue";

export default defineComponent({
  name: "App",
  components: {
    GameBoard,
    NavBar,
  },
});
</script>

<style lang="scss">

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
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0, pointer;
  }
}
</style>
