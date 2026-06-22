import { onMounted, onUnmounted, ref, type Ref } from "vue";

export function useScrollReveal(threshold = 0.15): {
  target: Ref<HTMLElement | null>;
  visible: Ref<boolean>;
} {
  const target = ref<HTMLElement | null>(null);
  const visible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!target.value) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.value = true;
            observer?.disconnect();
          }
        });
      },
      { threshold },
    );

    observer.observe(target.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { target, visible };
}
