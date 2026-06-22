<template>
  <section id="hero" class="relative overflow-hidden min-h-[540px]">
    <AnimatedGrid />
    <div class="relative z-10">
      <!-- Eyebrow — typewriter fills this in on mount -->
      <p
        ref="eyebrowRef"
        class="font-mono text-[13px] tracking-[0.03em] m-0 text-muted min-h-[1.2em]"
      >
        // frontend engineer · based in cameroon
      </p>

      <!-- H1 — rises in via v-reveal, text typed by useTypewriter -->
      <h1
        v-reveal="120"
        class="font-semibold m-0 mt-5 tracking-[-0.025em] text-heading text-[clamp(46px,8vw,90px)] leading-none"
      >
        {{ nameLine1 }}<br v-if="showBreak" />{{ nameLine2
        }}<span class="cursor-blink" aria-hidden="true">▍</span>
      </h1>

      <!-- Bio -->
      <p
        v-reveal="300"
        class="m-0 mt-7 text-biotext max-w-[580px] text-[clamp(17px,2.1vw,20px)] leading-[1.55]"
      >
        I build fast, trustworthy interfaces for products people use every day —
        payments, messaging, and commerce — working mostly in Vue, TypeScript,
        and Tailwind.
      </p>

      <!-- Status pill -->
      <div
        v-reveal="440"
        class="inline-flex items-center gap-[9px] mt-[30px] py-2 px-[14px] border border-[#2f3528] rounded-full bg-accent/5"
      >
        <span class="status-dot"></span>
        <span class="text-[12.5px] tracking-[0.02em] text-accent"
          >available for work</span
        >
      </div>

      <!-- CTA row -->
      <div v-reveal="560" class="flex gap-[13px] mt-9 flex-wrap">
        <button
          ref="primaryBtn"
          class="font-mono text-[13px] cursor-pointer border-none font-medium tracking-[0.01em] py-[13px] px-[22px] rounded bg-accent text-[#15170F] transition-[transform,filter,box-shadow] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          @click="emit('scroll-to', 'mesagoo')"
          @mouseenter="onPrimaryEnter"
          @mouseleave="onPrimaryLeave"
        >
          View work
        </button>

        <button
          ref="ghostBtn"
          class="font-mono text-[13px] cursor-pointer text-[#D9D7CE] py-[13px] px-[22px] rounded bg-transparent border border-[#34342d] transition-[transform,border-color,background] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
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
import { ref, computed, onMounted, onUnmounted } from "vue";
import AnimatedGrid from "./AnimatedGrid.vue";
import { useTypewriter } from "../composables/useTypewriter";

const emit = defineEmits<{
  "scroll-to": [id: string];
}>();

// ── name typewriter ──────────────────────────────────────────────────────────
const { displayed } = useTypewriter("Stephanie\nMbusheri", {
  speed: 110,
  delay: 350,
});

const nameLine1 = computed(() => {
  const i = displayed.value.indexOf("\n");
  return i === -1 ? displayed.value : displayed.value.slice(0, i);
});
const nameLine2 = computed(() => {
  const i = displayed.value.indexOf("\n");
  return i === -1 ? "" : displayed.value.slice(i + 1);
});
const showBreak = computed(() => displayed.value.includes("\n"));

// ── eyebrow typewriter ───────────────────────────────────────────────────────
const eyebrowRef = ref<HTMLElement | null>(null);
let eyebrowInterval: ReturnType<typeof setInterval> | null = null;
let eyebrowTimeout: ReturnType<typeof setTimeout> | null = null;

onMounted(() => {
  const el = eyebrowRef.value;
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const finalText = el.textContent?.trim() ?? "";
  el.textContent = "";

  const caret = document.createElement("span");
  caret.textContent = "_";
  caret.style.cssText =
    "color:var(--accent); animation:twcaret 0.9s steps(1) infinite; margin-left:1px;";
  el.appendChild(caret);

  let i = 0;
  eyebrowInterval = setInterval(() => {
    if (finalText[i]) caret.insertAdjacentText("beforebegin", finalText[i]);
    i++;
    if (i >= finalText.length) {
      clearInterval(eyebrowInterval!);
      eyebrowInterval = null;
      eyebrowTimeout = setTimeout(() => caret.remove(), 1400);
    }
  }, 36);
});

onUnmounted(() => {
  if (eyebrowInterval) clearInterval(eyebrowInterval);
  if (eyebrowTimeout) clearTimeout(eyebrowTimeout);
});

// ── CTA hover ────────────────────────────────────────────────────────────────
const primaryBtn = ref<HTMLButtonElement | null>(null);
const ghostBtn = ref<HTMLButtonElement | null>(null);

function onPrimaryEnter() {
  if (!primaryBtn.value) return;
  primaryBtn.value.style.filter = "brightness(1.07)";
  primaryBtn.value.style.transform = "translateY(-2px)";
  primaryBtn.value.style.boxShadow = "0 8px 22px rgba(167,192,128,0.22)";
}
function onPrimaryLeave() {
  if (!primaryBtn.value) return;
  primaryBtn.value.style.filter = "";
  primaryBtn.value.style.transform = "";
  primaryBtn.value.style.boxShadow = "";
}
function onGhostEnter() {
  if (!ghostBtn.value) return;
  ghostBtn.value.style.borderColor = "#54544a";
  ghostBtn.value.style.background = "rgba(255,255,255,0.03)";
  ghostBtn.value.style.transform = "translateY(-2px)";
}
function onGhostLeave() {
  if (!ghostBtn.value) return;
  ghostBtn.value.style.borderColor = "#34342d";
  ghostBtn.value.style.background = "transparent";
  ghostBtn.value.style.transform = "";
}
</script>
