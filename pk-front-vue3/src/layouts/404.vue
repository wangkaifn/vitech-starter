<template>
  <el-result title="404" sub-title="Sorry, request error">
    <template #icon>
      <el-image src="/pk-front-vue3/src/assets/images/404.png" />
    </template>
    <template #extra>
      <el-button type="primary">返回首页</el-button>
    </template>
  </el-result>
  <RouterView />
</template>

<script setup lang="ts">
import Page404 from '@/assets/images/404.png'

</script>

<style scoped></style>
