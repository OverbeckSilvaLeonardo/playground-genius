<template>
  <section v-if="visible" class="nes-dialog is-dark is-rounded" @click="close">
    <h1 class="is-centered m-4">Info</h1>

    <div class="info">
      <p>The classic color sequence memorization game recreated by me with some frontend magic.</p>
      <ul>
        <li>
          <i class="nes-icon github is-small"></i>
          GitHub: <a href="https://github.com/OverbeckSilvaLeonardo/playground-genius" target="_blank">playground-genius</a>
        </li>
        <li>
          <i class="nes-icon linkedin is-small"></i>
          My LinkedIn: <a href="https://www.linkedin.com/in/overbecksilvaleonardo/" target="_blank">overbecksilvaleonardo</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false
  },
  close: {
    required: true
  }
});
</script>

<style scoped lang="scss">
section {
  position: absolute;
  z-index: 900;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 30px;
  text-align: center;
  box-shadow: 0 0 0 9999px #000000b0;
}

h2 {
  margin: 2em;
}

p {
  margin: 2em;
  line-height: 2em;
}

.item {
  margin: 0;
  float: right;
}

ul {
  margin: 2em;

  li {
    display: flex;
    gap: 1em;
    margin: .5em .5em 0;
  }
}

.info {
  text-align: left;

  a {
    color: lightblue;
  }


}

</style>