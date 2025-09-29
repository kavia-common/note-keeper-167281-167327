<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl md:text-3xl font-extrabold tracking-tight">
        Your Notes
      </h1>
      <span class="badge">Total {{ filtered.length }}</span>
    </div>

    <div class="grid gap-4" :class="ui.compact ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-1'">
      <article
        v-for="n in filtered"
        :key="n.id"
        class="card p-4 hover:shadow-lg hover:-translate-y-px cursor-pointer"
        @click="$router.push(`/note/${n.id}`)"
      >
        <div class="flex items-start justify-between">
          <h2 class="font-bold text-lg line-clamp-1">{{ n.title || 'Untitled' }}</h2>
          <button
            class="btn btn-ghost px-2 py-1 text-[color:var(--error)]"
            @click.stop="remove(n.id)"
            title="Delete note"
          >
            Delete
          </button>
        </div>
        <p class="mt-2 text-sm text-[color:var(--muted)] line-clamp-2">{{ n.content }}</p>
        <div class="mt-3 flex items-center gap-2 text-xs text-[color:var(--muted)]">
          <span>Updated {{ formatTime(n.updatedAt) }}</span>
          <span class="mx-1">•</span>
          <span>{{ n.pinned ? 'Pinned' : 'Unpinned' }}</span>
        </div>
      </article>

      <div v-if="filtered.length === 0" class="card p-8 text-center text-[color:var(--muted)]">
        No notes found. Create your first note.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore } from '~/stores/notes'
import { useUIStore } from '~/stores/ui'

const store = useNotesStore()
const ui = useUIStore()
const { filtered } = storeToRefs(store)

function remove(id: string) {
  if (confirm('Delete this note?')) store.deleteNote(id)
}

function formatTime(ts: number) {
  const d = new Date(ts)
  return d.toLocaleString()
}
</script>
