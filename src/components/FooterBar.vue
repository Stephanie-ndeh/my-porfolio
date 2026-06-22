<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="flex items-center justify-between border-t border-ink/[0.07] px-6 py-4 sm:px-10"
  >
    <span class="text-[11px] text-ink/30">© {{ year }} Stephanie Mbusheri</span>
    <button
      class="text-[11px] text-ink/30 transition-colors hover:text-ink"
      @click="scrollToTop"
    >
      back to top ↑
    </button>
  </footer>
</template>
