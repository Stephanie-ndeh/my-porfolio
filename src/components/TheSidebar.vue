<template>
  <aside
    class="z-20 bg-panel"
    :style="desktop ? {
      position: 'fixed',
      top: '0', left: '0',
      width: '264px',
      height: '100vh',
      background: '#141413',
      borderRight: '1px solid #242420',
      padding: '32px 0 26px',
    } : {
      position: 'sticky',
      top: '0',
      width: '100%',
      background: '#141413',
      borderBottom: '1px solid #242420',
      padding: '11px 14px',
    }"
  >
    <div
      :style="desktop ? {
        display: 'flex', flexDirection: 'column', height: '100%',
      } : {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
      }"
    >
      <!-- Brand -->
      <button
        class="flex items-center gap-[13px] cursor-pointer bg-transparent border-none outline-none"
        :style="{ padding: desktop ? '0 18px' : '0', flexShrink: desktop ? undefined : '0' }"
        @click="onBrandClick"
      >
        <div class="flex gap-[5px] items-center">
          <span class="w-[7px] h-[7px] rounded-full bg-[#3d3d36] block"></span>
          <span class="w-[7px] h-[7px] rounded-full bg-[#3d3d36] block"></span>
          <span class="w-[7px] h-[7px] rounded-full block" style="background: var(--accent); opacity: 0.55;"></span>
        </div>
        <span class="font-mono text-[12.5px] text-tag tracking-[0.02em]">stephanie/</span>
      </button>

      <!-- Nav file list (hidden on mobile) -->
      <nav
        :style="desktop ? {
          display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '30px',
        } : {
          display: 'none',
        }"
      >
        <a
          v-for="item in navItems"
          :key="item.id"
          href="#"
          class="block font-mono text-[13px] tracking-[0.01em] no-underline cursor-pointer whitespace-nowrap"
          style="padding: 7px 14px 7px 16px; transition: color .15s, background .15s;"
          :style="navItemStyle(item.section)"
          @click.prevent="emit('navigate', item.section)"
          @mouseenter="() => hoverItem = item.section"
          @mouseleave="hoverItem = null"
        >{{ item.label }}</a>
      </nav>

      <!-- Status row -->
      <div
        :style="desktop ? {
          display: 'flex', alignItems: 'center', gap: '9px',
          marginTop: 'auto', padding: '0 18px',
        } : {
          display: 'flex', alignItems: 'center', gap: '9px', flexShrink: '0',
        }"
      >
        <span class="status-dot"></span>
        <span class="font-mono text-[11.5px] tracking-[0.02em] whitespace-nowrap" style="color: var(--accent);">available for work</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  activeSection: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()

const desktop = ref(typeof window !== 'undefined' ? window.innerWidth >= 880 : false)
const hoverItem = ref<string | null>(null)

function onResize() {
  desktop.value = window.innerWidth >= 880
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

const navItems = [
  { id: 'about',    label: 'about.ts',    section: 'about' },
  { id: 'mesagoo',  label: 'mesagoo.tsx', section: 'mesagoo' },
  { id: 'zeney',    label: 'zeney.tsx',   section: 'zeney' },
  { id: 'thia',     label: 'thia.tsx',    section: 'thia' },
  { id: 'services', label: 'services.ts', section: 'services' },
  { id: 'faq',      label: 'faq.md',      section: 'faq' },
  { id: 'contact',  label: 'contact.ts',  section: 'contact' },
]

const activeSectionInNav = computed(() =>
  navItems.some(i => i.section === props.activeSection) ? props.activeSection : null
)

function navItemStyle(section: string) {
  const isActive = activeSectionInNav.value === section
  const isHovered = hoverItem.value === section && !isActive
  return {
    color: isActive ? '#ECEAE3' : '#85837A',
    borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
    background: isActive
      ? 'rgba(167,192,128,0.07)'
      : isHovered
        ? 'rgba(255,255,255,0.035)'
        : 'transparent',
  }
}

function onBrandClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
