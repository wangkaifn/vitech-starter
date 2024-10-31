<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <div
      class="text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s"
    >
      UnoCSS
    </div>
    初始化 删除一些无用的文件
    <RouterView />
  </div>

  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div
    class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
  />
</template>

<style scoped lang="scss">
.main {
  color: red;
}
</style>
