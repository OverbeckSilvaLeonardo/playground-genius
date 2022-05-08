<template>
  <div class="container is-mobile" @startGame="start">

    <h1 class="is-centered m-4">GENIUS</h1>

    <div class="columns is-multiline is-gapless px-4">
      <div class="column is-full my-4">
        <game-mode-selection/>
      </div>

      <div class="column is-full my-4">
        <difficulty-selection/>
      </div>

      <div class="column is-full my-4">
        <start-game-button/>
      </div>
    </div>

    <div class="columns is-multiline is-centered is-gapless is-mobile">
      <div class="column is-half">
        <game-tile color="green"/>
      </div>

      <div class="column is-half">
        <game-tile color="red"/>
      </div>

      <div class="column is-half">
        <game-tile color="yellow"/>
      </div>
      <div class="column is-half">
        <game-tile color="blue"/>
      </div>
    </div>

    <floating-icon/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import GameTile from '@/components/Game/GameTile.vue';
import FloatingIcon from '@/components/Icon/FloatingIcon.vue';
import GameModeSelection from '@/components/Selection/GameModeSelection.vue';
import DifficultySelection from '@/components/Selection/DifficultySelection.vue';
import StartGameButton from '@/components/Button/StartGameButton.vue';
import { useStore } from '@/store';

export default defineComponent({
  components: { StartGameButton, DifficultySelection, FloatingIcon, GameTile, GameModeSelection },
  methods: {
    start(): void {
      this.store.commit('SET_GAME_RUNNING');
      // this.service.startGame();
    }
  },
  setup() {
    const store = useStore();

    return {
      store,
      service: computed(() => store.state.service)
    };
  },
});
</script>

<style scoped lang="scss">

.container {
  margin-top: 20px;

  h1 {
    color: var(--background-secondary);
    text-align: center;
    font-size: 2rem;
  }
}

</style>
