<template>
  <section id="services" class="mt-10 lg:mt-24 border-t border-hair pt-[46px]">
    <div class="flex items-baseline gap-[14px]">
      <span v-scramble class="text-[13px] text-accent">services.ts</span>
      <span class="text-[12px] text-comment">// what I can do for you</span>
    </div>

    <div class="mt-[30px] flex flex-col gap-[2px]">
      <div
        v-for="(service, i) in services"
        :key="service.name"
        v-reveal="i * 70"
        class="flex gap-[18px] py-[18px] border-t border-hair transition-[background] duration-200 hover:bg-[rgba(255,255,255,0.018)]"
      >
        <span class="text-[12px] text-synblue flex-none pt-[3px] w-[52px]"
          >export</span
        >
        <div>
          <div class="flex items-baseline gap-3 flex-wrap">
            <span class="text-[15px] text-heading">{{ service.name }}</span>
            <span class="text-[12px] text-syncoral">{{ service.sig }}</span>
          </div>
          <p
            class="m-0 mt-2 text-[16.5px] leading-[1.55] text-bodysoft max-w-[640px]"
          >
            {{ service.body }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    name: "frontendDevelopment()",
    sig: "Vue / React",
    body: "Building fast, accessible interfaces from scratch.",
  },
  {
    name: "uiuxImplementation()",
    sig: "from Figma",
    body: "Turning designs into pixel-accurate, responsive code.",
  },
  {
    name: "landingPages()",
    sig: "marketing sites",
    body: "Quick-turnaround sites focused on conversion and clarity.",
  },
  {
    name: "fullStackSupport()",
    sig: "as needed",
    body: "Frontend-led projects with backend integration or support as needed.",
  },
];
</script>
