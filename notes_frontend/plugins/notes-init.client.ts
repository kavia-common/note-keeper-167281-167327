import { useNotesStore } from '~/stores/notes'

/**
 * PUBLIC_INTERFACE
 * Nuxt plugin to initialize the notes store data on the client.
 * Runs after Pinia is installed. Defers execution until client mount to
 * ensure localStorage access is safe and Pinia is active.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return

  // Defer until the app is mounted to guarantee Pinia is active and localStorage is available
  nuxtApp.hook('app:mounted', () => {
    const notes = useNotesStore()
    // Initialize notes on client (idempotent)
    notes.init()
  })
})
