<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="home">
    <router-view />
  </div>
</template>
<style lang="stylus" scoped>
.home
  display flex
  height 100vh
  width 100%
</style>
