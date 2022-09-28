<template>
  <section class="nes-container with-title">
    <h3 class="title">{{ label }}</h3>
    <label v-for="(option, index) in options" :key="index">
      <input
          type="radio"
          class="nes-radio is-dark"
          :name="name || 'radio-group'"
          :value="option.value"
          v-model="selectedOption"
          @change="$emit('onSelectionChange', selectedOption)"
      />
      <span>{{ option.label }}</span>
    </label>
  </section>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue';

const props = defineProps({
  numberOfOptions: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  default: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
});

const selectedOption = ref(0);
selectedOption.value = props.default || 1;

const options = computed(() => {
  let options = [];
  for (let i = 1; i <= props.numberOfOptions; i++) {
    options.push({ label: i, value: i });
  }

  return options;
});

</script>

<style scoped lang="scss">
label {
  margin: 0.5rem;
}

.nes-container {
  border-color: var(--background-secondary);
}

h3.title {
  background-color: var(--background-dark) !important;
  color: var(--background-secondary);
}
</style>
