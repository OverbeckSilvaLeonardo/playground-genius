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
  background-color: #212529;

}

#app {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
