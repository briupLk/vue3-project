<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      key: ''
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
}

html,
body {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}

/* ::view-transition {
  background-color: transparent;
} */

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

/* .dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 999;
} */

/* ::view-transition-old(root) {
  z-index: 999;
}

::view-transition-new(root) {
  z-index: 1;
} */
</style>
