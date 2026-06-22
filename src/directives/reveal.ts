import type { Directive } from "vue";

const animMap = new WeakMap<Element, Animation>();

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animMap.get(entry.target)?.play();
        obs.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
);

export const vReveal: Directive<HTMLElement, number | string | undefined> = {
  mounted(el, binding) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }

    const delay = Number(binding.value) || 0;
    const anim = el.animate(
      [
        { opacity: 0, transform: "translateY(26px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 740,
        delay,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      },
    );
    anim.pause();
    animMap.set(el, anim);
    revealObserver.observe(el);
  },
  unmounted(el) {
    revealObserver.unobserve(el);
    animMap.delete(el);
  },
};
