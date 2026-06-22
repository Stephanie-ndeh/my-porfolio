<template>
  <section
    id="contact"
    style="margin-top: 128px; border-top: 1px solid #242420; padding-top: 46px;"
  >
    <!-- Header -->
    <div style="display: flex; align-items: baseline; gap: 14px;">
      <span class="font-mono text-[13px]" style="color: var(--accent);">contact.ts</span>
      <span class="font-mono text-[12px]" style="color: #5a5851;">// say hello</span>
    </div>

    <!-- H2 -->
    <h2
      class="font-semibold tracking-[-0.022em] m-0 mt-6"
      style="color: #ECEAE3; font-size: clamp(30px, 4.4vw, 48px);"
    >Let's build something solid.</h2>

    <!-- Intro -->
    <p class="m-0 mt-[22px]" style="color: #B9B7AE; max-width: 600px; font-size: 18px; line-height: 1.6;">
      I'm currently available for frontend work — especially Vue and TypeScript projects where the interface really matters. If that sounds like your team, get in touch.
    </p>

    <!-- Links -->
    <div style="margin-top: 34px; max-width: 560px;">
      <a
        v-for="(link, index) in links"
        :key="link.label"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener' : undefined"
        class="flex items-baseline gap-[18px] no-underline"
        style="padding: 16px 0; border-top: 1px solid #242420; transition: background .15s;"
        :style="{
          borderBottom: index === links.length - 1 ? '1px solid #242420' : undefined,
        }"
        @mouseenter="(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)')"
        @mouseleave="(e) => ((e.currentTarget as HTMLElement).style.background = '')"
      >
        <span class="font-mono text-[12px] flex-none" style="color: #5a5851; width: 74px;">{{ link.label }}</span>
        <span style="color: #E2E0D8; font-size: 17px;">{{ link.display }}</span>
        <span class="font-mono ml-auto" style="color: var(--accent);">↗</span>
      </a>
    </div>

    <!-- Footer -->
    <p class="font-mono text-[12px]" style="color: #46453f; margin-top: 56px;">
      // © 2026 stephanie mbusheri — frontend engineer
    </p>
  </section>
</template>

<script setup lang="ts">
const links = [
  {
    label: 'email',
    href: 'mailto:hello@stephaniembusheri.dev',
    display: 'hello@stephaniembusheri.dev',
    external: false,
  },
  {
    label: 'github',
    href: 'https://github.com/stephaniembusheri',
    display: 'github.com/stephaniembusheri',
    external: true,
  },
  {
    label: 'linkedin',
    href: 'https://linkedin.com/in/stephaniembusheri',
    display: 'linkedin.com/in/stephaniembusheri',
    external: true,
  },
]
</script>
