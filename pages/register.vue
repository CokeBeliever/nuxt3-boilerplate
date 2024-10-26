<template>
  <div class="mt-10">
    <div class="flex items-center text-5xl font-bold">
      <span class="icon-[ant-design--user-outlined]"></span>
      <h2>注册</h2>
    </div>

    <a-button class="mt-8 w-full" type="primary" @click="navigateTo('/login')">
      注册
    </a-button>
    <div class="mt-6">
      <span>已有账号？</span>
      <NuxtLink class="text-cb-primary" to="/login">登录</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({ title: '注册' })
</script>
