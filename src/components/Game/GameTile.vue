<template>
  <div class="column is-half">
    <div class="tile" :class="this.color"></div>
  </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameTile",
  props: ["color"],
});
</script>
<style scoped lang="scss">
.tile {
  display: block;
  width: calc(100% - 20px);
  height: 20vw;
  margin: 10px;
  cursor: var(--cursor);
  transition: all 75ms ease-in-out;
}

.tile:hover {
  transform: scale(1.05, 1.05);
}

.green {
  background-color: var(--green-tile);
}

.blue {
  background-color: var(--blue-tile);
}

.red {
  background-color: var(--red-tile);
}

.yellow {
  background-color: var(--yellow-tile);
}
</style>
