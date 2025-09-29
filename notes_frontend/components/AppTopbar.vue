<template>
  <header class="sticky top-0 z-10 bg-[color:var(--surface)]/90 backdrop-blur border-b border-black/5">
    <div class="flex items-center gap-3 p-4">
      <button class="md:hidden btn btn-ghost px-3 py-2 rounded-lg" @click="ui.toggleMobileSidebar()">
        <!-- hamburger -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z" clip-rule="evenodd" />
        </svg>
      </button>

      <div class="relative flex-1 max-w-xl">
        <input
          v-model="notes.searchQuery"
          type="text"
          placeholder="Search notes..."
          class="input w-full pl-10 pr-12"
          @keydown.escape="notes.searchQuery=''"
        />
        <span class="absolute left-3 top-2.5 text-[color:var(--muted)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" />
          </svg>
        </span>
        <button v-if="notes.searchQuery" class="absolute right-2 top-2 btn btn-ghost px-2 py-1"
                @click="notes.searchQuery=''">Clear</button>
      </div>

      <NuxtLink to="/new" class="btn btn-primary shadow-sm">
        New Note
      </NuxtLink>

      <div class="ml-2 h-9 w-9 rounded-full ocean-gradient border border-black/10 shadow-sm flex items-center justify-center">
        <span class="text-[color:var(--primary)] font-bold text-sm">U</span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useNotesStore } from '~/stores/notes'
import { useUIStore } from '~/stores/ui'

const notes = useNotesStore()
const ui = useUIStore()
</script>
