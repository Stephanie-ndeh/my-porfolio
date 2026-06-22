<script setup lang="ts">
const items = [
  'Frontend Engineer', 'Vue 3', 'TypeScript', 'Tailwind CSS',
  'Open to Work', 'Cameroon', 'Building for the Web',
  'Nuxt', 'UI Engineering', 'Remote Ready',
]
</script>

<template>
  <div class="border-y border-ink/8 py-3 overflow-hidden bg-cream select-none">
    <div class="flex w-max animate-marquee marquee-track">
      <!-- Duplicate for seamless loop -->
      <template v-for="n in 2" :key="n">
        <div class="flex items-center">
          <template v-for="(item, i) in items" :key="`${n}-${i}`">
            <span class="text-[11px] uppercase tracking-widest2 text-ink/40 px-5 whitespace-nowrap">
              {{ item }}
            </span>
            <span class="w-1 h-1 rounded-full bg-ink/20 flex-shrink-0" />
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
