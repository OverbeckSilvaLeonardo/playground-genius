<template>
  <div class="column is-half">
    <div class="tile" :class="color"></div>
  </div>

</template>
<script lang="ts" setup>
import {computed, defineProps} from 'vue';
import {TileNumbersEnum, TileColorsEnum} from "@/utils/tiles.enums";

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});

const number = computed(() => {
  switch (props.color) {
    case TileColorsEnum.RED:
      return TileNumbersEnum.RED;
    case TileColorsEnum.YELLOW:
      return TileNumbersEnum.YELLOW;
    case TileColorsEnum.GREEN:
      return TileNumbersEnum.GREEN;
    default:
      return TileNumbersEnum.BLUE;
  }
})
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