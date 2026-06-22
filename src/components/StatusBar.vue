<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const clock = ref('')

function tick() {
  clock.value = new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Africa/Douala',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

let timer: ReturnType<typeof setInterval>
onMounted(() => { tick(); timer = setInterval(tick, 1000) })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="bg-ink px-10 py-2 flex items-center justify-between">
    <div class="flex items-center gap-7">
      <!-- Available -->
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-sage animate-pulse-dot" />
        <span class="text-[11px] text-white/45">Available for work</span>
      </div>

      <!-- Location -->
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400" />
        <span class="text-[11px] text-white/45">
          Based in <span class="text-white/80 font-medium">Yaoundé, CMR</span>
        </span>
      </div>

      <!-- Role -->
      <span class="text-[11px] text-white/30 hidden sm:block">
        Frontend Engineer · Vue · TypeScript
      </span>
    </div>

    <!-- Live clock -->
    <span class="text-[11px] text-white/35 tabular-nums">
      Yaoundé · {{ clock }}
    </span>
  </div>
</template>
