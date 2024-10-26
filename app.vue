<template>
  <a-extract-style>
    <a-config-provider
      :locale="zhCN"
      :theme="{
        token: {
          colorPrimary,
        },
      }"
    >
      <a-style-provider hash-priority="high">
        <NuxtLoadingIndicator :color="colorPrimary" :throttle="0" />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </a-style-provider>
    </a-config-provider>
  </a-extract-style>
</template>

<script lang="ts" setup>
import { defaultTheme } from '@/configs/theme'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import '~/assets/css/index.css'
import '~/assets/css/swiper.css'

const colorPrimary = defaultTheme.primary.color['100']
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
