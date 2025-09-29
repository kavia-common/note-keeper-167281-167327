<template>
  <aside
    class="hidden md:flex w-72 p-5 flex-col gap-4 border-r border-black/5 bg-[color:var(--surface)]/95 backdrop-blur"
  >
    <div class="flex items-center gap-3">
      <div
        class="h-10 w-10 rounded-xl ocean-gradient flex items-center justify-center shadow-sm border border-black/5"
      >
        <span class="font-black text-[color:var(--primary)]">NK</span>
      </div>
      <div>
        <p class="font-extrabold tracking-tight">Note Keeper</p>
        <p class="text-xs text-[color:var(--muted)]">Ocean Professional</p>
      </div>
    </div>

    <nav class="mt-2">
      <ul class="space-y-1">
        <li>
          <NuxtLink
            to="/"
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[color:var(--primary)]/10"
            :class="route.path === '/' ? 'bg-[color:var(--primary)]/10 text-[color:var(--primary)] font-semibold' : 'text-[color:var(--text)]'"
          >
            <IconHome />
            <span>All Notes</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/new"
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[color:var(--secondary)]/15"
            :class="route.path === '/new' ? 'bg-[color:var(--secondary)]/15 text-[color:var(--text)] font-semibold' : 'text-[color:var(--text)]'"
          >
            <IconPlus />
            <span>New Note</span>
          </NuxtLink>
        </li>
        <li>
          <button
            class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 text-left"
            @click="toggleCompact()"
          >
            <IconLayout />
            <span>Toggle Compact</span>
            <span class="ml-auto badge">{{ ui.compact ? 'On' : 'Off' }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <div class="mt-auto p-3 card">
      <p class="text-sm font-semibold">Tips</p>
      <p class="text-xs text-[color:var(--muted)] mt-1">
        Click a note to edit. Use the search to filter. Your data is stored in your browser (mocked).
      </p>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUIStore } from '~/stores/ui'

const route = useRoute()
const ui = useUIStore()
function toggleCompact() {
  ui.toggleCompact()
}
</script>

<!-- Local icon components using templates to avoid JSX/TSX -->
<script lang="ts">
import { defineComponent } from 'vue'
export const IconHome = defineComponent({
  name: 'IconHome',
  template: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M3 10.5L12 3l9 7.5M4.5 9.75V21h15V9.75" />
  </svg>`
})
export const IconPlus = defineComponent({
  name: 'IconPlus',
  template: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M12 4.5v15m7.5-7.5h-15" />
  </svg>`
})
export const IconLayout = defineComponent({
  name: 'IconLayout',
  template: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v2.25H3.75V6zM3.75 11.25H12v9H6A2.25 2.25 0 013.75 18v-6.75zM12 11.25h8.25V18A2.25 2.25 0 0118 20.25h-6V11.25z" />
  </svg>`
})
export default {}
</script>
