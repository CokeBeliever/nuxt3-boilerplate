<template>
  <div class="min-w-screen flex min-h-screen flex-row flex-nowrap">
    <div class="flex-1">
      <div class="flex min-h-full flex-col flex-nowrap space-y-10 p-10">
        <header>
          <h2 class="text-2xl font-bold text-cb-primary">CokeBeliever</h2>
        </header>
        <main class="w-full min-w-[240px] max-w-[400px] flex-1 self-center">
          <p class="text-2xl font-bold">欢迎来到，Nuxt3 Boilerplate</p>
          <slot></slot>
        </main>
        <footer>
          <div class="text-xs">
            版权所有 © 2024 CokeBeliever 保留所有权利。
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
