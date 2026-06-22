<template>
  <div>
    <!-- Eyebrow -->
    <p
      v-reveal="0"
      class="font-mono text-[12px] tracking-[0.06em] uppercase"
      style="margin-top: 128px; color: #5a5851;"
    >selected work — 03 case studies</p>

    <section
      v-for="project in projects"
      :key="project.id"
      :id="project.id"
      style="margin-top: 34px; border-top: 1px solid #242420; padding-top: 46px;"
    >
      <!-- Header row -->
      <div style="display: flex; align-items: baseline; gap: 14px;">
        <span v-scramble class="font-mono text-[13px]" style="color: var(--accent);">{{ project.file }}</span>
        <span class="font-mono text-[12px]" style="color: #5a5851;">case study {{ project.n }}</span>
      </div>

      <!-- Title row -->
      <div
        v-reveal="0"
        style="display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; margin-top: 16px; flex-wrap: wrap;"
      >
        <h2
          class="font-semibold tracking-[-0.022em]"
          style="color: #ECEAE3; font-size: clamp(30px, 4.4vw, 48px); margin: 0;"
        >{{ project.name }}</h2>
        <a
          :href="project.linkHref"
          target="_blank"
          rel="noopener"
          class="case-link font-mono text-[13px] no-underline whitespace-nowrap"
          style="color: var(--accent); padding-bottom: 6px;"
        >{{ project.link }} ↗</a>
      </div>

      <!-- Fields block -->
      <div
        v-reveal="90"
        style="margin-top: 28px; border-left: 1px solid #242420;"
      >
        <div
          v-for="field in getFields(project)"
          :key="field.label"
          style="display: flex; gap: 18px; padding: 14px 0 14px 24px;"
        >
          <span class="font-mono text-[12px]" style="color: #4a4a43; width: 18px; text-align: right; flex: none; padding-top: 1px;">{{ field.lineNum }}</span>
          <div style="flex: 1;">
            <span class="font-mono text-[12px] tracking-[0.02em]" :style="{ color: field.labelColor }">{{ field.label }}</span>
            <p
              class="m-0"
              style="font-size: 16.5px; line-height: 1.55; margin: 7px 0 0; max-width: 640px;"
              :style="field.bodyStyle"
            >{{ field.body }}</p>
          </div>
        </div>
      </div>

      <!-- Stack tags -->
      <div v-reveal="170" style="display: flex; gap: 8px; margin-top: 26px; flex-wrap: wrap;">
        <span
          v-for="tag in project.stack"
          :key="tag"
          class="stack-tag font-mono text-[12px]"
          style="color: #9a988f; padding: 5px 11px; border: 1px solid #2c2c26; border-radius: 3px;"
        >{{ tag }}</span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: string
  file: string
  n: string
  name: string
  link: string
  linkHref: string
  problem: string
  role: string
  decision: string
  decisionPlaceholder: boolean
  stack: string[]
}

const projects: Project[] = [
  {
    id: 'mesagoo',
    file: 'mesagoo.tsx',
    n: '01',
    name: 'Mesagoo',
    link: 'mesagoo.com',
    linkHref: 'https://mesagoo.com',
    problem: 'Businesses needed a reliable way to send promotional SMS at scale across unreliable telecom networks.',
    role: 'Built the campaign builder UI and real-time delivery dashboard from scratch.',
    decision: 'Chose optimistic UI updates with rollback to keep the dashboard feeling instant despite slow delivery webhooks.',
    decisionPlaceholder: false,
    stack: ['Vue 3', 'Pinia', 'WebSockets'],
  },
  {
    id: 'zeney',
    file: 'zeney.tsx',
    n: '02',
    name: 'Zeney',
    link: 'staging.getzeney.app',
    linkHref: 'https://staging.getzeney.app',
    problem: 'International money transfers to and from Africa needed to feel fast and trustworthy in the interface, not just the backend.',
    role: 'Built the frontend for transaction flows and currency conversion screens.',
    decision: 'Made transaction state explicit at every screen so users always know exactly what stage their transfer is at.',
    decisionPlaceholder: false,
    stack: ['Vue 3', 'TypeScript'],
  },
  {
    id: 'thia',
    file: 'thia.tsx',
    n: '03',
    name: 'THIA Skincare',
    link: 'thia-skincare-frontend.vercel.app',
    linkHref: 'https://thia-skincare-frontend.vercel.app',
    problem: 'A skincare brand needed an e-commerce storefront that felt premium without slowing down the shopping flow.',
    role: 'Built the storefront frontend including product pages, cart, and checkout.',
    decision: '[ Stephanie to confirm ] — e.g. how product imagery was optimised to keep first paint fast on slower connections.',
    decisionPlaceholder: true,
    stack: ['Vue 3', 'E-commerce'],
  },
]

interface Field {
  lineNum: string
  label: string
  labelColor: string
  body: string
  bodyStyle: Record<string, string>
}

function getFields(p: Project): Field[] {
  return [
    {
      lineNum: '01',
      label: 'problem',
      labelColor: '#D08C70',
      body: p.problem,
      bodyStyle: { color: '#B5B3AA' },
    },
    {
      lineNum: '02',
      label: 'my role',
      labelColor: '#7E9CD8',
      body: p.role,
      bodyStyle: { color: '#B5B3AA' },
    },
    {
      lineNum: '03',
      label: 'decision',
      labelColor: 'var(--accent)',
      body: p.decision,
      bodyStyle: p.decisionPlaceholder
        ? { color: '#8a887f', fontStyle: 'italic' }
        : { color: '#B5B3AA' },
    },
  ]
}
</script>

<style scoped>
.case-link {
  transition: transform .22s cubic-bezier(0.22, 1, 0.36, 1), opacity .2s;
  display: inline-block;
}
.case-link:hover {
  text-decoration: underline;
  transform: translateX(4px);
}

.stack-tag {
  display: inline-block;
  transition: transform .2s cubic-bezier(0.22, 1, 0.36, 1), border-color .2s, color .2s;
  cursor: default;
}
.stack-tag:hover {
  border-color: var(--accent) !important;
  color: #ECEAE3 !important;
  transform: translateY(-2px);
}
</style>
