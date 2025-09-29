<template>
  <div class="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
    <!-- App Shell -->
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <AppSidebar />

      <!-- Main content area -->
      <div class="flex-1 flex flex-col">
        <!-- Top bar -->
        <AppTopbar />

        <!-- Router outlet -->
        <main class="p-4 sm:p-6 md:p-8">
          <NuxtPage />
        </main>
      </div>
    </div>
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup lang="ts">
/**
 * Root app: sets CSS vars for Ocean Professional theme and provides shell layout.
 */
</script>

<style>
:root {
  --primary: #2563EB;  /* blue-600 */
  --secondary: #F59E0B; /* amber-500 */
  --success: #F59E0B;  /* per guide */
  --error: #EF4444; /* red-500 */
  --bg: #f9fafb; /* background */
  --surface: #ffffff; /* white surface */
  --text: #111827; /* gray-900 */
  --muted: #6b7280; /* gray-500 */
  --ring: rgba(37, 99, 235, 0.3);
}

/* Modern, minimalist, smooth transitions */
* {
  transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease, box-shadow 200ms ease, transform 150ms ease;
}

html, body, #__nuxt {
  height: 100%;
}

.card {
  background: var(--surface);
  border-radius: 14px;
  box-shadow: 0 1px 2px rgba(17,24,39,0.05), 0 10px 15px -3px rgba(17,24,39,0.08);
  border: 1px solid rgba(17,24,39,0.06);
}

.input {
  background: white;
  border: 1px solid rgba(17,24,39,0.08);
  border-radius: 12px;
  padding: 10px 12px;
  outline: none;
}
.input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px var(--ring);
}

.btn {
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 600;
}
.btn-primary {
  background: var(--primary);
  color: white;
}
.btn-primary:hover { filter: brightness(0.95); }
.btn-secondary {
  background: var(--secondary);
  color: #111827;
}
.btn-secondary:hover { filter: brightness(1.05); }
.btn-ghost {
  background: transparent;
  color: var(--text);
}
.btn-ghost:hover {
  background: rgba(37,99,235,0.08);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(37,99,235,0.08);
  color: var(--primary);
  border-radius: 999px;
  font-weight: 600;
  font-size: 12px;
}

/* Utility gradient per theme */
.ocean-gradient {
  background-image: linear-gradient(135deg, rgba(59,130,246,0.10), rgba(17,24,39,0.03));
}
</style>
