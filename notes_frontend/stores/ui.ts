import { defineStore } from 'pinia'

/**
 * PUBLIC_INTERFACE
 * UI store for view preferences.
 */
export const useUIStore = defineStore('ui', {
  state: () => ({
    compact: false,
    mobileSidebarOpen: false,
  }),
  actions: {
    toggleCompact() {
      this.compact = !this.compact
    },
    toggleMobileSidebar() {
      this.mobileSidebarOpen = !this.mobileSidebarOpen
    }
  }
})
