<template>
  <div class="grid gap-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <button class="btn btn-ghost" @click="$router.back()">Back</button>
        <span v-if="note?.id" class="badge">Editing</span>
        <span v-else class="badge">New</span>
      </div>
      <div class="flex items-center gap-2">
        <button class="btn btn-secondary" @click="togglePin">
          {{ form.pinned ? 'Unpin' : 'Pin' }}
        </button>
        <button class="btn btn-primary" @click="save">Save</button>
      </div>
    </div>

    <div class="card p-4">
      <input
        v-model="form.title"
        type="text"
        class="input w-full text-xl font-bold"
        placeholder="Note title"
      />
      <textarea
        v-model="form.content"
        rows="12"
        class="input w-full mt-3"
        placeholder="Write your note here..."
      />
      <div class="mt-3 flex items-center justify-between text-sm text-[color:var(--muted)]">
        <div class="flex items-center gap-3">
          <span>Characters: {{ form.content.length }}</span>
          <span>Title: {{ form.title.length }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="badge" v-if="form.pinned">Pinned</span>
          <span>Autosave: Mocked</span>
        </div>
      </div>
    </div>

    <div v-if="note?.id" class="flex justify-between">
      <button class="btn btn-ghost text-[color:var(--error)]" @click="remove">Delete</button>
      <span class="text-sm text-[color:var(--muted)]">Last updated: {{ lastUpdated }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, watchEffect } from 'vue'
import { useNotesStore } from '~/stores/notes'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useNotesStore()

const noteId = computed(() => route.params.id as string | undefined)
const note = computed(() => (noteId.value ? store.getById(noteId.value) : null))

const form = reactive({
  title: '',
  content: '',
  pinned: false,
})

watchEffect(() => {
  if (note.value) {
    form.title = note.value.title
    form.content = note.value.content
    form.pinned = note.value.pinned
  } else {
    form.title = ''
    form.content = ''
    form.pinned = false
  }
})

const lastUpdated = computed(() => {
  const ts = note.value?.updatedAt
  return ts ? new Date(ts).toLocaleString() : '—'
})

function togglePin() {
  form.pinned = !form.pinned
}

function save() {
  if (note.value) {
    store.updateNote(note.value.id, { ...form })
  } else {
    const created = store.createNote({ ...form })
    router.replace(`/note/${created.id}`)
  }
  // Subtle saved feedback
  alert('Saved')
}

function remove() {
  if (!note.value) return
  if (confirm('Delete this note?')) {
    store.deleteNote(note.value.id)
    router.replace('/')
  }
}
</script>
