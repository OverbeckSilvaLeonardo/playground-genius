<template>
  <div class="container">

    <h1 class="is-centered">GENIUS</h1>

    <div class="columns is-multiline is-centered is-gapless is-mobile">
      <div class="column is-half">
        <GameTile :color="'green'"/>
      </div>

      <div class="column is-half">
        <GameTile :color="'red'"/>
      </div>

      <div class="column is-half">
        <GameTile :color="'yellow'"/>
      </div>
      <div class="column is-half">
        <GameTile :color="'blue'"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameTile from '@/components/GameTile.vue';

export default defineComponent({
  components: { GameTile }
});
</script>

<style scoped lang="scss">

@import '../scss/_variables.scss';

.container {
  margin-top: 20px;

  h1 {
    color: $background-secondary;
    text-align: center;
    margin: 20px;
    font-size: 2rem;
  }
}

</style>
