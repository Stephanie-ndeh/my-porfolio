<template>
  <section
    id="faq"
    style="margin-top: 128px; border-top: 1px solid #242420; padding-top: 46px;"
  >
    <div style="display: flex; align-items: baseline; gap: 14px;">
      <span v-scramble class="font-mono text-[13px]" style="color: var(--accent);">faq.md</span>
      <span class="font-mono text-[12px]" style="color: #5a5851;">// frequently asked</span>
    </div>

    <div style="margin-top: 32px; display: flex; flex-direction: column; gap: 36px;">
      <div
        v-for="(item, i) in faqs"
        :key="item.q"
        v-reveal="i * 70"
        style="max-width: 660px;"
      >
        <div style="display: flex; gap: 12px; align-items: baseline;">
          <span class="font-mono text-[15px] flex-none" style="color: var(--accent);">##</span>
          <h3 class="font-semibold tracking-[-0.01em] m-0" style="color: #ECEAE3; font-size: 19px; line-height: 1.4;">{{ item.q }}</h3>
        </div>
        <p class="m-0" style="color: #B5B3AA; font-size: 16.5px; line-height: 1.6; margin: 11px 0 0 30px;">{{ item.a }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: "What's your tech stack?",
    a: 'Vue 3, TypeScript, and Tailwind CSS for the frontend, with experience integrating REST APIs and working alongside backend teams for full-stack projects.',
  },
  {
    q: 'Do you work with Figma designs directly?',
    a: 'Yes — I can take a Figma file and build it into a pixel-accurate, responsive frontend, or work from a rough brief if no design exists yet.',
  },
  {
    q: 'Can you build the backend too, or just frontend?',
    a: 'My core strength is frontend, but I can handle full-stack work with backend support — either by building simple APIs myself or integrating with an existing backend or team.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A landing page usually takes 1–2 weeks; a full web app depends on scope, but I always share a timeline upfront before starting.',
  },
  {
    q: 'Are you open to freelance or only full-time roles?',
    a: "Both — I'm open to full-time opportunities and select freelance projects.",
  },
]
</script>
