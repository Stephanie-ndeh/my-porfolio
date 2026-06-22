import { ref, onMounted, onUnmounted } from "vue";

interface TypewriterOptions {
  speed?: number; // ms per character
  delay?: number; // ms before typing starts
}

export function useTypewriter(
  fullText: string,
  options: TypewriterOptions = {},
) {
  const { speed = 70, delay = 350 } = options;
  const displayed = ref("");

  let delayTimer: ReturnType<typeof setTimeout> | null = null;
  let ticker: ReturnType<typeof setInterval> | null = null;

  function cleanup() {
    if (delayTimer) {
      clearTimeout(delayTimer);
      delayTimer = null;
    }
    if (ticker) {
      clearInterval(ticker);
      ticker = null;
    }
  }

  onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      displayed.value = fullText;
      return;
    }

    let index = 0;
    delayTimer = setTimeout(() => {
      ticker = setInterval(() => {
        index++;
        displayed.value = fullText.slice(0, index);
        if (index >= fullText.length) cleanup();
      }, speed);
    }, delay);
  });

  onUnmounted(cleanup);

  return { displayed };
}
