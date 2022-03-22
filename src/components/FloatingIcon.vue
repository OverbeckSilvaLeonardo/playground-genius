<template>
  <a class="floating-icon"
     :class="{expanding: isExpanding, retracting: isRetracting, expanded: isExpanded, retracted: isRetracted}"
     @mouseenter="setExpanding"
     @mouseleave="setRetracting"
  >
    <div class="icon-content-wrapper">
      <i class="nes-icon coin"></i>
      <p>info</p>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FloatingIcon',
  data() {
    return {
      isExpanding: false,
      isRetracting: false,
      isExpanded: false,
      isRetracted: true,
      animationDuration: 250,
    };
  },
  methods: {
    async setExpanding() {
      this.isExpanding = true;
      this.isRetracted = false;

      await this.sleep(this.animationDuration);

      this.isExpanding = false;
      this.isExpanded = true;
    },

    async setRetracting() {
      this.isExpanded = false;
      this.isRetracting = true;

      await this.sleep(this.animationDuration);

      this.isRetracted = true;
      this.isRetracting = false;

    },
    sleep(ms) {
      return new Promise(r => setTimeout(r, ms));
    }
  }
});
</script>

<style scoped lang="scss">

@import '../scss/_variables.scss';

$icon-size: 32px;
$float-anchor-size: 60px;
$float-anchor-size-expanded: calc(#{$float-anchor-size} * 2.35);
$animation-length: 250ms;

.floating-icon {
  position: fixed;
  display: block;
  height: $float-anchor-size;
  border-radius: calc(#{$float-anchor-size} / 2);
  background-color: $background-secondary;
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
  margin-left: calc(#{$icon-size} * 1.37);
  margin-top: 3px;
  color: $background-primary;
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
    width: calc(#{$float-anchor-size} * 2.35);
  }

  to {
    width: $float-anchor-size;
  }
}

.retracting {
  animation: retract $animation-length ease-in-out forwards;

}
</style>
