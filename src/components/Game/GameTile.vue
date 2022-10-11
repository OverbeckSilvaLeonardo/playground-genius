<template>
  <div class="column is-half">
    <div class="tile" :class="[color, focused || isCurrent ? 'focused' : '']" @mouseenter="focused = true" @mouseleave="focused = false"></div>
  </div>

</template>
<script lang="ts" setup>
import {computed, defineProps, ref} from 'vue';
import {TileNumbersEnum, TileColorsEnum} from "@/utils/tiles.enums";

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  current: {
    type: Number,
    required: false,
  }
});

const number = computed(() => {
  switch (props.color) {
    case TileColorsEnum.GREEN:
      return TileNumbersEnum.GREEN;
    case TileColorsEnum.RED:
      return TileNumbersEnum.RED;
    case TileColorsEnum.YELLOW:
      return TileNumbersEnum.YELLOW;
    default:
      return TileNumbersEnum.BLUE;
  }
})

const focused = ref(false);
const isCurrent = computed(() => props.current === number.value)

</script>

<style scoped lang="scss">
.tile {
  display: block;
  width: calc(100% - 20px);
  height: 20vw;
  margin: 10px;
  cursor: var(--cursor);
  transition: all 50ms ease-in-out;
}

.focused {
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