<template>
  <section id="contact" class="mt-32 border-t border-hair pt-[46px]">
    <div class="flex items-baseline gap-[14px]">
      <span v-scramble class="text-[13px] text-accent">contact.ts</span>
      <span class="text-[12px] text-comment">// say hello</span>
    </div>

    <h2
      v-reveal="0"
      class="font-semibold tracking-[-0.022em] m-0 mt-6 text-heading text-[clamp(30px,4.4vw,48px)]"
    >
      Let's build something solid.
    </h2>

    <p
      v-reveal="80"
      class="m-0 mt-[22px] text-body max-w-[600px] text-[18px] leading-[1.6]"
    >
      I'm currently available for frontend work — especially Vue and TypeScript
      projects where the interface really matters. If that sounds like your
      team, get in touch.
    </p>

    <div v-reveal="160" class="mt-[34px] max-w-[560px]">
      <a
        v-for="(link, index) in links"
        :key="link.label"
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener' : undefined"
        class="flex items-baseline gap-[18px] no-underline py-4 border-t border-hair transition-[background,padding-left] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.02] hover:pl-2"
        :class="{ 'border-b border-hair': index === links.length - 1 }"
      >
        <span class="text-[12px] flex-none text-comment w-[74px]">{{
          link.label
        }}</span>
        <span class="text-value text-[17px]">{{ link.display }}</span>
        <span class="ml-auto text-accent">↗</span>
      </a>
    </div>

    <p v-reveal="0" class="font-mono text-[12px] text-faint mt-14">
      // © 2026 stephanie mbusheri — frontend engineer
    </p>
  </section>
</template>

<script setup lang="ts">
const links = [
  {
    label: "email",
    href: "mailto:hello@stephaniembusheri.dev",
    display: "hello@stephaniembusheri.dev",
    external: false,
  },
  {
    label: "github",
    href: "https://github.com/stephaniembusheri",
    display: "github.com/stephaniembusheri",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/stephaniembusheri",
    display: "linkedin.com/in/stephaniembusheri",
    external: true,
  },
];
</script>
