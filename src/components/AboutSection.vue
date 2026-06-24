<template>
  <section id="about" class="mt-32 border-t border-hair pt-[46px]">
    <div class="flex items-baseline gap-[14px]">
      <span v-scramble class="text-[13px] text-accent">about.ts</span>
      <span class="text-[12px] text-comment">// who I am</span>
    </div>

    <p
      v-reveal="0"
      class="font-sans max-w-160 text-[18px] leading-[1.6] text-body m-0 mt-6.5"
    >
      I'm a frontend-focused software engineer based in Cameroon, building the
      parts of a product people actually touch. I care about the details that
      make an interface feel solid: state that's never ambiguous, interactions
      that feel instant, and code the next person can read.
    </p>
    <p
      v-reveal="90"
      class="font-sans max-w-[640px] text-[18px] leading-[1.6] text-body m-0 mt-4"
    >
      I care about the details that make an interface feel solid: state that's
      never ambiguous, interactions that feel instant, and code the next person
      can read.
    </p>

    <div
      v-reveal="180"
      class="font-mono text-[14px] mt-[34px] leading-[2.05] text-[#C9C7BE] overflow-x-auto"
    >
      <div v-for="imp in imports" :key="imp.from">
        <span class="text-synblue">import</span>
        {{ ` { ${imp.items} } ` }}<span class="text-synblue">from</span>
        <span class="text-syncoral">'{{ imp.from }}'</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const imports = [
  { items: "Vue 3, React, HTML5, TypeScript", from: "core" },
  { items: "Tailwind, design systems", from: "styling" },
  { items: "state management", from: "state" },
  { items: "WebSockets, REST", from: "data" },
];
</script>
