<template>
  <div class="min-h-screen flex items-center justify-center bg-[color:var(--bg)]">
    <div class="card p-8 max-w-md text-center">
      <div class="h-12 w-12 rounded-xl ocean-gradient mx-auto flex items-center justify-center border border-black/5">
        <span class="text-[color:var(--primary)] font-black">NK</span>
      </div>
      <h1 class="mt-4 text-2xl font-extrabold">Something went wrong</h1>
      <p class="mt-2 text-[color:var(--muted)]">{{ error?.message || 'Unknown error' }}</p>
      <div class="mt-4 flex items-center justify-center gap-2">
        <NuxtLink class="btn btn-primary" to="/">Go Home</NuxtLink>
        <button class="btn btn-ghost" @click="handleError">Clear</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: any }>()
const handleError = () => clearError({ redirect: '/' })
</script>
