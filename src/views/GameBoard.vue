<template>
  <div class="container">

    <h1 class="is-centered">GENIUS</h1>

    <div class="columns">
      <div class="column is-one-third">
        <game-mode-selection />
      </div>

      <div class="column is-one-third">
        <difficulty-selection />
      </div>

      <div class="column is-one-third">
        <start-game-button/>
      </div>
    </div>

    <div class="columns is-multiline is-centered is-gapless is-mobile">
      <div class="column is-half">
        <game-tile :color="'green'"/>
      </div>

      <div class="column is-half">
        <game-tile :color="'red'"/>
      </div>

      <div class="column is-half">
        <game-tile :color="'yellow'"/>
      </div>
      <div class="column is-half">
        <game-tile :color="'blue'"/>
      </div>
    </div>

    <floating-icon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameTile from '@/components/Game/GameTile.vue';
import FloatingIcon from '@/components/Icon/FloatingIcon.vue';
import GameModeSelection from '@/components/Selection/GameModeSelection.vue';
import DifficultySelection from '@/components/Selection/DifficultySelection.vue';
import StartGameButton from '@/components/Button/StartGameButton.vue';

export default defineComponent({
  components: { StartGameButton, DifficultySelection, FloatingIcon, GameTile, GameModeSelection }
});
</script>

<style scoped lang="scss">

.container {
  margin-top: 20px;

  h1 {
    color: var(--background-secondary);
    text-align: center;
    margin: 20px;
    font-size: 2rem;
  }
}

</style>
