<template>
  <section class="nes-container with-title" :class="{'disabled': disabled}">
    <h3 class="title">{{ label }}</h3>
    <label v-for="({value, label}, index) in options" :key="index">
      <input
          type="radio"
          class="nes-radio is-dark"
          :name="name || 'radio-group'"
          :value="value"
          :disabled="disabled"
          v-model="selectedOption"
      />
      <span>{{ label }}</span>
    </label>
  </section>
</template>

<script lang="ts" setup>
import {computed, defineEmits, defineProps} from 'vue';
import {useStore} from "@/store";

const {state} = useStore();

const emit = defineEmits(['update:modelValue'])

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
  modelValue: {
    type: Number,
  },
  lockWhenRunning: {
    type: Boolean,
    default: false,
  }
});

const selectedOption = computed({
  get() {
    return props.modelValue
  },
  set(option) {
    emit('update:modelValue', option)
  }
})

const disabled = computed(() => props.lockWhenRunning && state.isRunning)

const options = computed(() => {
  let options = [];
  for (let i = 1; i <= props.numberOfOptions; i++) {
    options.push({label: i, value: i});
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

.disabled  {
  border-color: var(--background-muted) !important;

  h3.title, label span {
    color: var(--background-muted);
  }

}
</style>
