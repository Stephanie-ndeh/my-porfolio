<template>
  <div id="work">
    <p
      v-reveal="0"
      class="font-mono text-[12px] tracking-[0.06em] uppercase mt-32 text-comment"
    >
      selected work — {{ projectCount }} case studies
    </p>

    <div class="mt-[34px]">
      <div
        v-for="(project, i) in projects"
        :key="project.id"
        :id="project.id"
        v-reveal="i * 55"
        class="border-t border-hair"
        :class="{ 'border-b border-hair': i === projects.length - 1 }"
      >
        <!-- Row -->
        <div
          role="button"
          tabindex="0"
          class="w-full flex items-center gap-3 py-[17px] pr-3 cursor-pointer transition-colors duration-150 hover:bg-white/[0.018]"
          @click="toggle(project.id)"
          @keydown.enter.prevent="toggle(project.id)"
          @keydown.space.prevent="toggle(project.id)"
        >
          <span class="font-mono text-[11px] text-comment flex-none w-5 text-right">{{ project.n }}</span>
          <span class="text-[17px] text-heading font-medium flex-none">{{ project.name }}</span>
          <span v-scramble class="font-mono text-[12px] text-muted flex-none hidden sm:block">{{ project.file }}</span>

          <div class="flex items-center space-x-6 ml-auto">
            <!-- Project link — visible on desktop, hidden on mobile -->
            <a
              class="hidden nav:inline-flex items-center gap-[5px] font-mono text-[12px] text-accent no-underline hover:underline"
              :href="project.linkHref"
              target="_blank"
              rel="noopener"
              @click.stop
            >{{ project.link }} ↗</a>

            <span
              class="font-mono text-[13px] text-accent transition-transform duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              :class="openId === project.id ? 'rotate-180' : 'rotate-0'"
            >↓</span>
          </div>
        </div>

        <!-- Expandable panel — grid trick animates to actual content height -->
        <div
          class="grid transition-[grid-template-rows] duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          :class="openId === project.id ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]'"
        >
          <div
            class="overflow-hidden transition-opacity duration-300"
            :class="openId === project.id ? 'opacity-100 delay-75' : 'opacity-0'"
          >
            <div class="pb-6 mb-5 ml-8 pl-5 border-l border-hair">
              <div
                v-for="field in getFields(project)"
                :key="field.label"
                class="py-2.5"
              >
                <span class="font-mono text-[12px] tracking-[0.02em]" :style="{ color: field.labelColor }">{{ field.label }}</span>
                <p class="m-0 mt-[6px] text-[16px] leading-[1.55] max-w-[560px]" :style="field.bodyStyle">{{ field.body }}</p>
              </div>

              <!-- URL — mobile only, sits above tags -->
              <a
                class="nav:hidden inline-flex items-center gap-[5px] font-mono text-[12px] text-accent no-underline hover:underline mt-5"
                :href="project.linkHref"
                target="_blank"
                rel="noopener"
              >{{ project.link }} ↗</a>

              <!-- Stack tags -->
              <div class="flex gap-[6px] flex-wrap mt-3 nav:mt-5">
                <span
                  v-for="tag in project.stack"
                  :key="tag"
                  class="font-mono text-[11px] text-tag px-[9px] py-[4px] border border-[#2c2c26] rounded-[3px]"
                >{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

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
    file: "mesagoo.vue",
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
    file: "zeney.vue",
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
    file: "thia.vue",
    n: "03",
    name: "THIA Skincare",
    link: "thia-skincare-frontend.vercel.app",
    linkHref: "https://thia-skincare-frontend.vercel.app",
    problem:
      "A skincare brand needed an e-commerce storefront that felt premium without slowing down the shopping flow.",
    role: "Took an AI-assisted approach for this one: I directed the build and reviewed every change — design, frontend, backend, and API integration — before it shipped.",
    stack: ["Nuxt", "E-commerce", "AI"],
  },
];

const projectCount = computed(() => String(projects.length).padStart(2, "0"));

const openId = ref<string | null>(null);

function toggle(id: string) {
  openId.value = openId.value === id ? null : id;
}

function tryOpen(id: string) {
  if (projects.some((p) => p.id === id)) {
    openId.value = id;
  }
}

defineExpose({ tryOpen });

interface Field {
  label: string;
  labelColor: string;
  body: string;
  bodyStyle: Record<string, string>;
}

function getFields(p: Project): Field[] {
  return [
    {
      label: "problem",
      labelColor: "#D08C70",
      body: p.problem,
      bodyStyle: { color: "#B5B3AA" },
    },
    {
      label: "my role",
      labelColor: "#7E9CD8",
      body: p.role,
      bodyStyle: { color: "#B5B3AA" },
    },
  ];
}
</script>
