<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('is-visible')
    }),
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

const stack = [
  { icon: '⚡', name: 'Vue 3',        note: 'Primary framework — Composition API, Pinia, Vue Router' },
  { icon: '🔷', name: 'TypeScript',   note: 'Strictly typed from day one, every project' },
  { icon: '🎨', name: 'Tailwind CSS', note: 'Utility-first styling, custom design systems' },
  { icon: '🚀', name: 'Nuxt',         note: 'SSR, file-based routing, auto-imports' },
  { icon: '🔗', name: 'REST APIs',    note: 'Axios, fetch, async data handling patterns' },
  { icon: '✏️', name: 'Figma',        note: 'Design to code — I speak both languages' },
  { icon: '🌿', name: 'Git',          note: 'Branching strategies, PRs, clean commit history' },
  { icon: '⚙️', name: 'Vite',         note: 'Fast builds, HMR, modern tooling' },
]
</script>

<template>
  <section class="px-10 py-20 border-t border-ink/8">
    <div ref="sectionRef" class="section-reveal max-w-5xl">
      <p class="text-[11px] uppercase tracking-widest2 text-ink/35 mb-7">Stack</p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <div
          v-for="item in stack"
          :key="item.name"
          class="group border border-ink/10 rounded-xl p-4 cursor-default
                 hover:border-ink/30 hover:-translate-y-1 hover:bg-white
                 transition-all duration-250"
        >
          <div class="text-xl mb-3">{{ item.icon }}</div>
          <p class="text-[13px] font-medium text-ink mb-1">{{ item.name }}</p>
          <p class="text-[10px] leading-snug text-ink/40 opacity-0 translate-y-1
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-200">
            {{ item.note }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
