<template>
  <section id="hero" class="relative overflow-hidden" style="min-height: 540px">
    <AnimatedGrid />
    <div class="relative z-10">
      <!-- Eyebrow -->
      <p
        class="font-mono text-[13px] tracking-[0.03em] m-0"
        style="color: #85837a"
      >
        // frontend engineer · based in cameroon
      </p>

      <!-- H1 -->
      <h1
        class="font-sans font-semibold m-0 mt-5 tracking-[-0.025em]"
        style="
          color: #eceae3;
          font-size: clamp(46px, 8vw, 90px);
          line-height: 1;
        "
      >
        Stephanie<br />Mbusheri<span class="cursor-blink" aria-hidden="true"
          >▍</span
        >
      </h1>

      <!-- Bio -->
      <p
        class="m-0 mt-7"
        style="
          color: #a8a69d;
          max-width: 580px;
          font-size: clamp(17px, 2.1vw, 20px);
          line-height: 1.55;
        "
      >
        I build fast, trustworthy interfaces for products people use every day —
        payments, messaging, and commerce — working mostly in Vue, TypeScript,
        and Tailwind.
      </p>

      <!-- Status pill -->
      <div
        class="inline-flex items-center gap-[9px] mt-[30px]"
        style="
          padding: 8px 14px;
          border: 1px solid #2f3528;
          border-radius: 999px;
          background: rgba(167, 192, 128, 0.05);
        "
      >
        <span class="status-dot"></span>
        <span
          class="font-mono text-[12.5px] tracking-[0.02em]"
          style="color: var(--accent)"
          >available for work</span
        >
      </div>

      <!-- CTA row -->
      <div class="flex gap-[13px] mt-9 flex-wrap">
        <button
          class="font-mono text-[13px] cursor-pointer border-none font-medium tracking-[0.01em]"
          style="
            padding: 13px 22px;
            border-radius: 4px;
            background: var(--accent);
            color: #15170f;
            transition: filter 0.15s;
          "
          @click="emit('scroll-to', 'mesagoo')"
          @mouseenter="
            (e) =>
              ((e.currentTarget as HTMLElement).style.filter =
                'brightness(1.08)')
          "
          @mouseleave="
            (e) => ((e.currentTarget as HTMLElement).style.filter = '')
          "
        >
          View work
        </button>

        <button
          ref="ghostBtn"
          class="font-mono text-[13px] cursor-pointer text-[#D9D7CE]"
          style="
            padding: 13px 22px;
            border-radius: 4px;
            background: transparent;
            border: 1px solid #34342d;
            transition:
              border-color 0.15s,
              background 0.15s;
          "
          @click="emit('scroll-to', 'contact')"
          @mouseenter="onGhostEnter"
          @mouseleave="onGhostLeave"
        >
          Say hello →
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AnimatedGrid from "./AnimatedGrid.vue";

const emit = defineEmits<{
  "scroll-to": [id: string];
}>();

const ghostBtn = ref<HTMLButtonElement | null>(null);

function onGhostEnter() {
  if (!ghostBtn.value) return;
  ghostBtn.value.style.borderColor = "#54544a";
  ghostBtn.value.style.background = "rgba(255,255,255,0.02)";
}
function onGhostLeave() {
  if (!ghostBtn.value) return;
  ghostBtn.value.style.borderColor = "#34342d";
  ghostBtn.value.style.background = "transparent";
}
</script>
