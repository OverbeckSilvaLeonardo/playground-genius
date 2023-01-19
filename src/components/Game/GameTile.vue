<template>
  <div class="column is-half">
    <div
      class="tile"
      :class="[color, focused || isCurrent ? 'focused' : '']"
      @mouseenter="focused = true"
      @mouseleave="focused = false"
      @click="addToSequence"
    >

    </div>
  </div>
</template>
<script lang="ts" setup>
import useGameStore from '@/store/game';
import useSequenceStore from '@/store/sequence';
import { SequencesEnum } from "@/utils/sequences.enum";
import { TileColorsEnum, TileNumbersEnum } from "@/utils/tiles.enums";
import { computed, defineProps, PropType, ref } from 'vue';

const gameStore = useGameStore();
const sequenceStore = useSequenceStore();

const props = defineProps({
  color: {
    type: String as PropType<TileColorsEnum>,
    required: true,
  },
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
});

const isCurrent = computed(() => sequenceStore.current === number.value)
const {value: service} = computed(() => gameStore.service);

const focused = ref(false);

const addToSequence = () => {
  sequenceStore.addToSequence(number.value, SequencesEnum.PLAYER)
  service.validateSequence();
}
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
