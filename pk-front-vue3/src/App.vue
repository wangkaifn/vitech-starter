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
</template>

<style scoped lang="scss">
.main {
  color: red;
}
</style>
