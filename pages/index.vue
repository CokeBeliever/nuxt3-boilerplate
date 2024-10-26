<template>
  <div class="mt-10">
    <div class="flex items-center text-5xl font-bold">
      <span class="icon-[ant-design--home-outlined]"></span>
      <h2>首页</h2>
    </div>

    <p class="mt-8 h-8 text-center font-bold leading-8">
      {{ userStore.user?.username ?? '' }}
    </p>

    <a-button
      class="mt-8 w-full"
      type="primary"
      ghost
      @click="onClickLogoutBtn"
    >
      登出
    </a-button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores'

useHead({ title: '首页' })

const userStore = useUserStore()

const onClickLogoutBtn = () => {
  userStore.logout()
  navigateTo(`/login${location.search}`)
}
</script>
