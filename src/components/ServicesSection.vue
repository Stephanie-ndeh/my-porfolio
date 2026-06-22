<template>
  <section
    id="services"
    style="margin-top: 128px; border-top: 1px solid #242420; padding-top: 46px"
  >
    <!-- Header -->
    <div style="display: flex; align-items: baseline; gap: 14px">
      <span class="font-mono text-[13px]" style="color: var(--accent)"
        >services.ts</span
      >
      <span class="font-mono text-[12px]" style="color: #5a5851"
        >// what I can do for you</span
      >
    </div>

    <!-- Services list -->
    <div
      style="margin-top: 30px; display: flex; flex-direction: column; gap: 2px"
    >
      <div
        v-for="service in services"
        :key="service.name"
        style="
          display: flex;
          gap: 18px;
          padding: 18px 0;
          border-top: 1px solid #242420;
        "
      >
        <!-- export marker -->
        <span
          class="font-mono text-[12px]"
          style="color: #7e9cd8; flex: none; padding-top: 3px; width: 52px"
          >export</span
        >
        <!-- Right column -->
        <div>
          <div
            style="
              display: flex;
              align-items: baseline;
              gap: 12px;
              flex-wrap: wrap;
            "
          >
            <span class="font-mono text-[15px]" style="color: #eceae3">{{
              service.name
            }}</span>
            <span class="font-mono text-[12px]" style="color: #d08c70">{{
              service.sig
            }}</span>
          </div>
          <p
            class="m-0"
            style="
              font-size: 16.5px;
              line-height: 1.55;
              color: #b5b3aa;
              margin: 8px 0 0;
              max-width: 640px;
            "
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
