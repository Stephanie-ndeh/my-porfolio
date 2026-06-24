<template>
  <div>
    <!-- Eyebrow -->
    <p
      v-reveal="0"
      class="font-mono text-[12px] tracking-[0.06em] uppercase mt-32 text-comment"
    >
      selected work — 03 case studies
    </p>

    <section
      v-for="project in projects"
      :key="project.id"
      :id="project.id"
      class="mt-[34px] border-t border-hair pt-[46px]"
    >
      <!-- Header row -->
      <div class="flex items-baseline gap-[14px]">
        <span v-scramble class="text-[13px] text-accent">{{
          project.file
        }}</span>
        <span class="text-[12px] text-comment">case study {{ project.n }}</span>
      </div>

      <!-- Title row -->
      <div
        v-reveal="0"
        class="flex justify-between items-end gap-6 mt-4 flex-wrap"
      >
        <h2
          class="font-semibold tracking-[-0.022em] text-heading text-[clamp(30px,4.4vw,48px)] m-0"
        >
          {{ project.name }}
        </h2>
        <a
          :href="project.linkHref"
          target="_blank"
          rel="noopener"
          class="case-link font-mono text-[13px] no-underline whitespace-nowrap text-accent pb-[6px] inline-block transition-[transform,opacity] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:underline hover:translate-x-1"
          >{{ project.link }} ↗</a
        >
      </div>

      <!-- Fields block -->
      <div v-reveal="90" class="mt-7 border-l border-hair">
        <div
          v-for="field in getFields(project)"
          :key="field.label"
          class="flex gap-[18px] py-[14px] pl-6"
        >
          <span
            class="text-[12px] text-line w-[18px] text-right flex-none pt-px"
            >{{ field.lineNum }}</span
          >
          <div class="flex-1">
            <span
              class="text-[12px] tracking-[0.02em]"
              :style="{ color: field.labelColor }"
              >{{ field.label }}</span
            >
            <p
              class="m-0 mt-[7px] text-[16.5px] leading-[1.55] max-w-[640px]"
              :style="field.bodyStyle"
            >
              {{ field.body }}
            </p>
          </div>
        </div>
      </div>

      <!-- Stack tags -->
      <div v-reveal="170" class="flex gap-2 mt-[26px] flex-wrap">
        <span
          v-for="tag in project.stack"
          :key="tag"
          class="stack-tag text-[12px] text-tag px-[11px] py-[5px] border border-[#2c2c26] rounded-[3px] inline-block transition-[transform,border-color,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-default hover:border-accent hover:text-heading hover:-translate-y-0.5"
          >{{ tag }}</span
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: string;
  file: string;
  n: string;
  name: string;
  link: string;
  linkHref: string;
  problem: string;
  role: string;
  stack: string[];
}

const projects: Project[] = [
  {
    id: "mesagoo",
    file: "mesagoo.tsx",
    n: "01",
    name: "Mesagoo",
    link: "mesagoo.com",
    linkHref: "https://mesagoo.com",
    problem:
      "Businesses needed a reliable way to send promotional SMS at scale across unreliable telecom networks.",
    role: "Owned the entire frontend — landing page, onboarding, campaign builder, and real-time delivery dashboard — including all animations and full API integration with the backend.",
    stack: ["Vue 3", "Pinia", "WebSockets"],
  },
  {
    id: "zeney",
    file: "zeney.tsx",
    n: "02",
    name: "Zeney",
    link: "staging.getzeney.app",
    linkHref: "https://staging.getzeney.app",
    problem:
      "International money transfers to and from Africa needed to feel fast and trustworthy in the interface, not just the backend.",
    role: "Built the landing page, including the currency converter feature, and the admin dashboard UI — components, interactions, and layout.",
    stack: ["Vue 3", "TypeScript"],
  },
  {
    id: "thia",
    file: "thia.tsx",
    n: "03",
    name: "THIA Skincare",
    link: "thia-skincare-frontend.vercel.app",
    linkHref: "https://thia-skincare-frontend.vercel.app",
    problem:
      "A skincare brand needed an e-commerce storefront that felt premium without slowing down the shopping flow.",
    role: "Took an AI-assisted approach for this one: I directed the build and reviewed every change — design, frontend, backend, and API integration — before it shipped.",
    stack: ["Vue 3", "E-commerce", "AI"],
  },
];

interface Field {
  lineNum: string;
  label: string;
  labelColor: string;
  body: string;
  bodyStyle: Record<string, string>;
}

function getFields(p: Project): Field[] {
  return [
    {
      lineNum: "01",
      label: "problem",
      labelColor: "#D08C70",
      body: p.problem,
      bodyStyle: { color: "#B5B3AA" },
    },
    {
      lineNum: "02",
      label: "my role",
      labelColor: "#7E9CD8",
      body: p.role,
      bodyStyle: { color: "#B5B3AA" },
    },
  ];
}
</script>
