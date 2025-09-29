<template>
  <div class="space-y-6">
    <div class="card p-4 ocean-gradient border border-black/5">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-xl md:text-2xl font-extrabold tracking-tight">All Notes</h1>
          <p class="text-sm text-[color:var(--muted)] mt-1">
            Manage your notes with a clean, modern, ocean-inspired interface.
          </p>
        </div>
        <NuxtLink to="/new" class="btn btn-primary">New Note</NuxtLink>
      </div>
    </div>

    <NotesList />
  </div>
</template>

<script setup lang="ts">
import NotesList from '~/components/NotesList.vue'
</script>
