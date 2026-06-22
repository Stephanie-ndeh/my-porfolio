<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationFrame: number;
let resizeObserver: ResizeObserver | null = null;

const CELL = 48;
const PROXIMITY_RADIUS = 160;

let time = 0;
let mouseX = 0;
let mouseY = 0;
let prefersReducedMotion = false;

function resizeCanvas() {
  const canvas = canvasRef.value;
  if (!canvas || !canvas.parentElement) return;
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
  mouseX = canvas.width / 2;
  mouseY = canvas.height / 2;
}

function handleMouseMove(e: MouseEvent) {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
}

function draw() {
  const canvas = canvasRef.value;
  if (!canvas || !ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cols = Math.ceil(canvas.width / CELL) + 1;
  const rows = Math.ceil(canvas.height / CELL) + 1;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * CELL;
      const y = j * CELL;

      const dx = x - mouseX;
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const proximity = Math.max(0, 1 - dist / PROXIMITY_RADIUS);

      const wave = prefersReducedMotion
        ? 0.5
        : Math.sin(time * 0.6 + i * 0.5 + j * 0.4) * 0.4 + 0.5;
      const baseOpacity = 0.055 + wave * 0.035;
      const accentOpacity = proximity * 0.28;

      const dotSize = 1 + proximity * 2.5;

      // Base dot: soft warm white
      ctx.beginPath();
      ctx.arc(x, y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 218, 210, ${baseOpacity + accentOpacity * 0.3})`;
      ctx.fill();

      // Accent overlay on proximity
      if (proximity > 0.05) {
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 192, 128, ${accentOpacity})`;
        ctx.fill();
      }
    }
  }

  if (!prefersReducedMotion) {
    time += 0.016;
    animationFrame = requestAnimationFrame(draw);
  }
}

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  ctx = canvas.getContext("2d");
  prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  resizeCanvas();
  draw();

  canvas.parentElement?.addEventListener("mousemove", handleMouseMove);

  resizeObserver = new ResizeObserver(() => resizeCanvas());
  if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
  resizeObserver?.disconnect();
  canvasRef.value?.parentElement?.removeEventListener(
    "mousemove",
    handleMouseMove,
  );
});
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 z-0" aria-hidden="true" />
</template>
