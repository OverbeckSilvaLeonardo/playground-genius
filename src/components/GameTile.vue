<template>
  <div class="tile" :class="this.color"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameTile',
  props: [
      'color'
  ],
});
</script>
<style scoped lang="scss">

@import '../scss/_variables.scss';

.tile {
  display: block;
  width: calc(100% - 20px);
  height: 20vw;
  margin: 10px;
  cursor: $cursor;
}

.tile:hover {
  transform: scale(1.1, 1.1);
}

.green {
  background-color: $green-tile;
}

.blue {
  background-color: $blue-tile;
}

.red {
  background-color: $red-tile;

}

.yellow {
  background-color: $yellow-tile;
}
</style>
