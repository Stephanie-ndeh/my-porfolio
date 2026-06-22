<template>
  <section id="faq" class="mt-32 border-t border-hair pt-[46px]">
    <div class="flex items-baseline gap-[14px]">
      <span v-scramble class="text-[13px] text-accent">faq.md</span>
      <span class="text-[12px] text-comment">// frequently asked</span>
    </div>

    <div class="mt-8 flex flex-col gap-9">
      <div
        v-for="(item, i) in faqs"
        :key="item.q"
        v-reveal="i * 70"
        class="max-w-[660px]"
      >
        <div class="flex gap-3 items-baseline">
          <span class="text-[15px] flex-none text-accent">##</span>
          <h3
            class="font-semibold tracking-[-0.01em] m-0 text-heading text-[19px] leading-[1.4]"
          >
            {{ item.q }}
          </h3>
        </div>
        <p
          class="m-0 mt-[11px] ml-[30px] text-bodysoft text-[16.5px] leading-[1.6]"
        >
          {{ item.a }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: "What's your tech stack?",
    a: "Vue 3, TypeScript, and Tailwind CSS for the frontend, with experience integrating REST APIs and working alongside backend teams for full-stack projects.",
  },
  {
    q: "Do you work with Figma designs directly?",
    a: "Yes — I can take a Figma file and build it into a pixel-accurate, responsive frontend, or work from a rough brief if no design exists yet.",
  },
  {
    q: "Can you build the backend too, or just frontend?",
    a: "My core strength is frontend, but I can handle full-stack work with backend support — either by building simple APIs myself or integrating with an existing backend or team.",
  },
  {
    q: "How long does a typical project take?",
    a: "A landing page usually takes 1–2 weeks; a full web app depends on scope, but I always share a timeline upfront before starting.",
  },
  {
    q: "Are you open to freelance or only full-time roles?",
    a: "Both — I'm open to full-time opportunities and select freelance projects.",
  },
];
</script>
