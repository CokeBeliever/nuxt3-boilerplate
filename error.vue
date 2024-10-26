<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <h2 class="text-8xl font-bold text-cb-primary">{{ error.statusCode }}</h2>
    <span class="mt-2 text-cb-black-75">哎呀，出错了，请稍后再试</span>
    <button
      class="mt-2 rounded border border-cb-primary bg-cb-white px-4 py-2 text-cb-primary hover:bg-cb-primary hover:text-white"
      @click="onClickBackHomeBtn"
    >
      回到首页
    </button>
  </div>
</template>

<script lang="ts" setup>
useHead({ title: '错误' })

const props = defineProps<{
  error: {
    url: string
    statusCode: number
    statusMessage: string
    message: string
    description: string
    data: any
  }
}>()

const onClickBackHomeBtn = () => {
  clearError({ redirect: '/' })
}
</script>
