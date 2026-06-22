<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

const { target, visible } = useScrollReveal()

interface Project {
  name: string
  type: string
  url: string
}

const otherProjects: Project[] = [
  { name: 'Zeney', type: 'Fintech · Money transfer app', url: 'https://staging.getzeney.app/' },
  {
    name: 'THIA Skincare',
    type: 'E-commerce · Skincare brand',
    url: 'https://thia-skincare-frontend.vercel.app/',
  },
]
</script>

<template>
  <section
    id="work"
    ref="target"
    class="px-6 py-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:py-16"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
  >
    <div class="mb-7 text-[11px] uppercase tracking-[0.08em] text-ink/35">Selected work</div>

    <a
      href="https://www.mesagoo.com/"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative mb-3 block overflow-hidden rounded-xl bg-ink p-7 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/20 sm:p-8"
    >
      <div class="mb-4 text-[10px] uppercase tracking-[0.1em] text-paper/35">
        Featured · Fintech / SaaS
      </div>
      <div class="mb-2 text-xl font-medium text-paper sm:text-2xl">Mesagoo</div>
      <p class="max-w-sm text-[13px] leading-relaxed text-paper/50">
        Frontend for a professional bulk SMS &amp; marketing platform — built for businesses across
        Africa to reach customers at scale.
      </p>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tag in ['Vue', 'TypeScript', 'Tailwind', 'SaaS']"
          :key="tag"
          class="rounded-full border border-paper/15 px-2.5 py-0.5 text-[10px] text-paper/40"
        >
          {{ tag }}
        </span>
      </div>
      <div
        class="absolute right-7 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-paper/20 text-sm text-paper/70 transition-all duration-300 group-hover:rotate-45 group-hover:border-paper/50"
      >
        ↗
      </div>
      <div
        class="pointer-events-none absolute bottom-4 right-7 text-6xl font-medium leading-none text-paper/[0.04] sm:text-7xl"
      >
        01
      </div>
    </a>

    <div class="flex flex-col">
      <a
        v-for="(project, index) in otherProjects"
        :key="project.name"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center justify-between border-b border-ink/[0.07] py-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:pl-2.5 last:border-b-0"
      >
        <div class="flex items-baseline gap-3">
          <span class="min-w-[18px] text-[11px] text-ink/25">{{ String(index + 2).padStart(2, '0') }}</span>
          <div>
            <span class="text-sm font-medium text-ink/80 transition-colors group-hover:text-ink">{{
              project.name
            }}</span>
            <span class="ml-2.5 text-[11px] text-ink/40">{{ project.type }}</span>
          </div>
        </div>
        <span
          class="text-[13px] text-ink/25 transition-all duration-300 group-hover:rotate-45 group-hover:text-ink"
          >↗</span
        >
      </a>
    </div>
  </section>
</template>
