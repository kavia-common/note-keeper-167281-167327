import { defineStore } from 'pinia'

export interface Note {
  id: string
  title: string
  content: string
  pinned: boolean
  createdAt: number
  updatedAt: number
}

export interface NoteDraft {
  title: string
  content: string
  pinned: boolean
}

/**
 * PUBLIC_INTERFACE
 * Notes store manages CRUD on mock data and persists to localStorage.
 */
export const useNotesStore = defineStore('notes', {
  state: () => ({
    // initialize from localStorage if present
    notes: [] as Note[],
    searchQuery: '' as string,
    initialized: false,
  }),
  getters: {
    sorted(state): Note[] {
      // pinned first, then by updated desc
      return [...state.notes].sort((a, b) => {
        if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
        return b.updatedAt - a.updatedAt
      })
    },
    filtered(): Note[] {
      const q = this.searchQuery.trim().toLowerCase()
      if (!q) return this.sorted
      return this.sorted.filter(n =>
        (n.title || '').toLowerCase().includes(q) ||
        (n.content || '').toLowerCase().includes(q)
      )
    }
  },
  actions: {
    /** Load from localStorage or seed with dummy data */
    init() {
      if (this.initialized) return
      const raw = localStorage.getItem('nk_notes')
      if (raw) {
        try {
          this.notes = JSON.parse(raw)
        } catch {
          this.notes = []
        }
      }
      if (this.notes.length === 0) {
        // Seed mock notes
        const now = Date.now()
        this.notes = [
          {
            id: cryptoRandomId(),
            title: 'Welcome to Note Keeper',
            content: 'This is a demo note. Use the New Note button to create more.',
            pinned: true,
            createdAt: now - 100000,
            updatedAt: now - 100000,
          },
          {
            id: cryptoRandomId(),
            title: 'Ocean Professional Theme',
            content: 'Clean, modern, blue primary with amber accents, soft shadows, rounded corners.',
            pinned: false,
            createdAt: now - 90000,
            updatedAt: now - 80000,
          },
        ]
        this.persist()
      }
      this.initialized = true
    },

    persist() {
      localStorage.setItem('nk_notes', JSON.stringify(this.notes))
    },

    /** PUBLIC_INTERFACE: Create a new note (mock) */
    createNote(draft: NoteDraft): Note {
      const now = Date.now()
      const note: Note = {
        id: cryptoRandomId(),
        title: draft.title?.trim() || 'Untitled',
        content: draft.content || '',
        pinned: !!draft.pinned,
        createdAt: now,
        updatedAt: now,
      }
      this.notes.unshift(note)
      this.persist()
      return note
    },

    /** PUBLIC_INTERFACE: Update an existing note by id (mock) */
    updateNote(id: string, patch: Partial<NoteDraft>) {
      const idx = this.notes.findIndex(n => n.id === id)
      if (idx === -1) return
      this.notes[idx] = {
        ...this.notes[idx],
        ...patch,
        title: (patch.title ?? this.notes[idx].title).trim(),
        updatedAt: Date.now(),
      }
      this.persist()
    },

    /** PUBLIC_INTERFACE: Delete note by id (mock) */
    deleteNote(id: string) {
      this.notes = this.notes.filter(n => n.id !== id)
      this.persist()
    },

    /** PUBLIC_INTERFACE: Get note by id */
    getById(id: string): Note | null {
      return this.notes.find(n => n.id === id) ?? null
    },
  }
})

function cryptoRandomId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    // @ts-ignore
    return crypto.randomUUID()
  }
  return Math.random().toString(36).slice(2, 10)
}
