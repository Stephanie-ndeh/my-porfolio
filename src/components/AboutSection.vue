<template>
  <section
    id="about"
    style="margin-top: 128px; border-top: 1px solid #242420; padding-top: 46px;"
  >
    <div style="display: flex; align-items: baseline; gap: 14px;">
      <span class="font-mono text-[13px]" style="color: var(--accent);">about.ts</span>
      <span class="font-mono text-[12px]" style="color: #5a5851;">// who I am</span>
    </div>

    <p class="font-sans" style="max-width: 640px; font-size: 18px; line-height: 1.6; color: #B9B7AE; margin: 26px 0 0;">
      I'm a frontend-focused software engineer based in Cameroon. I work mostly in the Vue ecosystem, building the parts of a product people actually touch.
    </p>
    <p class="font-sans" style="max-width: 640px; font-size: 18px; line-height: 1.6; color: #B9B7AE; margin: 16px 0 0;">
      I care about the details that make an interface feel solid: state that's never ambiguous, interactions that feel instant, and code the next person can read.
    </p>

    <div class="font-mono text-[14px]" style="margin-top: 34px; line-height: 2.05; color: #C9C7BE;">
      <div v-for="imp in imports" :key="imp.from">
        <span style="color: #7E9CD8;">import</span>
        {{ ` { ${imp.items} } ` }}<span style="color: #7E9CD8;">from</span>
        <span style="color: #D08C70;"> '{{ imp.from }}'</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const imports = [
  { items: 'Vue 3, TypeScript', from: 'core' },
  { items: 'Tailwind, CSS',     from: 'styling' },
  { items: 'Pinia, Vuex',       from: 'state' },
  { items: 'WebSockets, REST',  from: 'data' },
]
</script>
