<template>
  <a
      class="floating-icon"
      :class="cssClasses"
      @mouseenter="expand"
      @mouseleave="retract"
      @click="$emit('openInformationModal')"
  >
    <div class="icon-content-wrapper">
      <i class="nes-icon coin"></i>
      <p :style="{ opacity: isExpanded ? 1 : 0 }">info</p>
    </div>
  </a>
</template>

<script lang="ts" setup>
import {computed, defineEmits, ref} from 'vue';

defineEmits(['openInformationModal']);

const isExpanding = ref(false);
const isRetracting = ref(false);
const isExpanded = ref(false);
const isRetracted = ref(true);
const animationDuration = ref(100);
const animationTimeOut = animationDuration.value + 1;

const cssClasses = computed(() => ({
  expanding: isExpanding.value,
  retracting: isRetracting.value,
  expanded: isExpanded.value,
  retracted: isRetracted.value,
}));

const setExpanded = () => {
  isExpanded.value = true;
  isExpanding.value = false;
  isRetracted.value = false;
  isRetracting.value = false;
}

const setRetracted = () => {
  isRetracted.value = true;
  isRetracting.value = false;
  isExpanded.value = false;
  isExpanding.value = false;
}

const setExpanding = () => {
  isExpanding.value = true;
  isRetracted.value = false;
  isRetracting.value = false;
  isExpanded.value = false;
};

const setRetracting = () => {
  isRetracting.value = true;
  isExpanded.value = false;
  isRetracted.value = false;
  isExpanding.value = false;
};

const expand = () => {
  setExpanding();
  setTimeout(() => setExpanded(), animationTimeOut);
}

const retract = () => {
  setRetracting();
  setTimeout(() => setRetracted(), animationTimeOut);
}
</script>

<style scoped lang="scss">
$icon-size: 32px;
$float-anchor-size: 60px;
$float-anchor-size-expanded: calc(#{$float-anchor-size} * 2.35);
$animation-length: 100ms;

.floating-icon {
  position: fixed;
  display: block;
  height: $float-anchor-size;
  border-radius: calc(#{$float-anchor-size} / 2);
  background-color: var(--background-primary);
  padding-top: calc((#{$float-anchor-size} - #{$icon-size}) / 2);
  padding-left: calc((#{$float-anchor-size} - #{$icon-size}) / 2);
  bottom: 40px;
  left: 40px;
  overflow: hidden;
  z-index: 1;
}

.icon-content-wrapper {
  display: flex;
  margin: 0;
  padding: 0;
  height: $float-anchor-size;
  width: $float-anchor-size;
}

i {
  margin: 0;
}

p {
  margin-left: calc(#{$icon-size} * 1.3);
  margin-top: 3px;
  color: var(--background-secondary);
  transition: opacity 200ms ease-in-out;
}

.retracted {
  width: $float-anchor-size;
}

.expanded {
  width: $float-anchor-size-expanded;
}

@keyframes expand {
  from {
    width: $float-anchor-size;
  }

  to {
    width: $float-anchor-size-expanded;
  }
}

.expanding {
  animation: expand $animation-length ease-in-out forwards;
}

@keyframes retract {
  from {
    width: $float-anchor-size-expanded;
  }

  to {
    width: $float-anchor-size;
  }
}

.retracting {
  animation: retract $animation-length ease-in-out forwards;
}
</style>