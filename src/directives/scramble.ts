import type { Directive } from "vue";

const GLYPHS = "!<>-_\\/[]{}=+*^?#abcdef0123456789";
const textMap = new WeakMap<Element, string>();

function runScramble(el: HTMLElement) {
  const finalText = textMap.get(el) ?? "";
  const len = finalText.length;
  let frame = 0;
  const total = len * 2 + 12;

  const id = setInterval(() => {
    let out = "";
    for (let i = 0; i < len; i++) {
      const ch = finalText[i];
      if (i < (frame - 6) / 2 || ch === " " || ch === ".") {
        out += ch;
      } else {
        out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
    }
    el.textContent = out;
    frame++;
    if (frame > total) {
      clearInterval(id);
      el.textContent = finalText;
    }
  }, 30);
}

const scrambleObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runScramble(entry.target as HTMLElement);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 },
);

export const vScramble: Directive<HTMLElement> = {
  mounted(el) {
    textMap.set(el, el.textContent?.trim() ?? "");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    scrambleObserver.observe(el);
  },
  unmounted(el) {
    scrambleObserver.unobserve(el);
    textMap.delete(el);
  },
};
