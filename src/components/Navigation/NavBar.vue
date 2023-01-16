<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <a class="nes-pointer navbar-item" href="https://overbecksilvaleonardo.dev"> Dashboard </a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: var(--background-primary);
  top: 0;

  a.navbar-item {
    background-color: var(--background-primary);
    color: var(--background-secondary);
  }

  a.navbar-item:hover {
    background-color: var(--background-secondary);
    color: var(--background-primary);
    text-decoration: none;
  }
}
</style>
