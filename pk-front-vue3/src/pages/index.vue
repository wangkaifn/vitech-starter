<template>
  <div>
    <h1>首页</h1>
    <ReloadPrompt />
    测试
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register';

onMounted(() => {
  /**
   * 注册一个服务工作者并为其生命周期事件设置事件处理程序。
   * @param {Object} options - 注册服务工作者的选项。
   * @param {Function} options.onNeedRefresh - 当有新的服务工作者可用且需要激活时调用的回调函数。
   * @param {Function} options.onRegisteredSW - 成功注册服务工作者时调用的回调函数。
   * @param {string} options.onRegisteredSW.swScriptUrl - 已注册服务工作者脚本的URL。
   * @param {ServiceWorkerRegistration} options.onRegisteredSW.swRegistration - 与已注册服务工作者关联的ServiceWorkerRegistration对象。
   */
  registerSW({
    onNeedRefresh() {
      console.log('onNeedRefresh');
    },
    onRegisteredSW(swScriptUrl, swRegistration) {
      setInterval(() => {
        if (swRegistration) {
          swRegistration.update();
        }
        console.log('onRegisteredSW', swScriptUrl, swRegistration);
      }, 5000);
    },
  });
});


</script>

<style scoped></style>

<route lang="yaml">
meta:
layout: default
</route>
