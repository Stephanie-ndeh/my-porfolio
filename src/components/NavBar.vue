<script setup lang="ts">
function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <nav
    class="relative z-10 flex items-center justify-between border-b border-ink/[0.08] px-6 py-5 sm:px-10 animate-navSlide"
  >
    <div class="text-sm font-medium tracking-wide text-ink">SM.</div>

    <div class="hidden gap-6 sm:flex">
      <button
        class="text-xs text-ink/50 transition-colors hover:text-ink"
        @click="scrollToId('work')"
      >
        work
      </button>
      <button
        class="text-xs text-ink/50 transition-colors hover:text-ink"
        @click="scrollToId('about')"
      >
        about
      </button>
      <button
        class="text-xs text-ink/50 transition-colors hover:text-ink"
        @click="scrollToId('contact')"
      >
        contact
      </button>
    </div>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full border border-ink/30 px-3.5 py-1.5 text-xs text-ink transition-colors hover:bg-ink/5"
    >
      résumé ↗
    </a>
  </nav>
</template>
