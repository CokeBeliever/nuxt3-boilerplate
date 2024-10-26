<template>
  <div class="mt-10">
    <div class="flex items-center text-5xl font-bold">
      <span class="icon-[ant-design--login-outlined]"></span>
      <h2>登录</h2>
    </div>

    <a-button class="mt-8 w-full" type="primary" @click="onClickLoginBtn">
      登录
    </a-button>
    <div class="mt-6">
      <span>还没有账户？</span>
      <NuxtLink class="text-cb-primary" to="/register">注册</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores'

useHead({ title: '登录' })

const userStore = useUserStore()

const onClickLoginBtn = () => {
  userStore.login({
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzI5OTU1NzM2LCJleHAiOjE3Mjk5NTkzMzZ9.xV_0nOhGPAsMdwBsm0kuHIR1KTOCaUs-FvJr2K0CDCc',
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzI5OTU1NzM2LCJleHAiOjE3Mjk5NjIxMzZ9.ulEOTkDxtGMXeUEgZ99ZXQD8Cjs4gx1ZecdHKvrBCCY',
    expires_in: 3600,
    token_type: 'Bearer',
  })
  navigateTo('/')
}
</script>
