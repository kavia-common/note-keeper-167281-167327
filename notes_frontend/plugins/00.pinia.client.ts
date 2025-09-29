import { createPinia } from 'pinia'

/**
 * PUBLIC_INTERFACE
 * Nuxt plugin to install Pinia on the client before any store usage.
 * Ensures `nuxtApp.vueApp.use(pinia)` runs before other plugins/components use stores.
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Create a single Pinia instance and install it on the Vue app
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
})
