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
</template>

<style scoped lang="scss">
.main {
  color: red;
}
</style>
