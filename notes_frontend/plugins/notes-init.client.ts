import { useNotesStore } from '~/stores/notes'

export default defineNuxtPlugin(() => {
  const notes = useNotesStore()
  // Initialize notes on client
  if (process.client) notes.init()
})
