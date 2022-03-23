<template>
  <div class="container">

    <h1 class="is-centered">GENIUS</h1>

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

    <FloatingIcon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameTile from '@/components/GameTile.vue';
import FloatingIcon from '@/components/FloatingIcon.vue';
import GameModeSelection from '@/components/GameModeSelection.vue';

export default defineComponent({
  components: { FloatingIcon, GameTile, GameModeSelection }
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
