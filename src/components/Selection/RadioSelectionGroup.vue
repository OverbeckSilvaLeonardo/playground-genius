<template>
  <div>
    <label v-if="label" class="white-text">{{ label }}</label>
    <label v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        class="nes-radio is-dark"
        :name="name || 'radio-group'"
        :value="option.value"
        v-model="selectedOption"
        @change="emitSelectedOption"
      />
      <span>{{ option.label }}</span>
    </label>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RadioSelectionGroup",
  emits: ["onSelectionChange"],
  props: {
    numberOfOptions: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    default: {
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      selectedOption: this.default || 1,
    };
  },
  methods: {
    emitSelectedOption() {
      this.$emit("onSelectionChange", this.selectedOption);
    },
  },
  computed: {
    options() {
      let options = [];
      for (let i = 1; i <= this.numberOfOptions; i++) {
        options.push({ label: i, value: i });
      }

      return options;
    },
  },
});
</script>

<style scoped lang="scss">
label {
  margin: 0.5rem;

  &.white-text {
    color: var(--background-secondary);
    margin-right: 0.5rem;
  }
}
</style>
