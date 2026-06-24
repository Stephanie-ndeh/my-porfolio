<template>
  <div class="max-w-full overflow-x-hidden">
    <TheSidebar :active-section="activeSection" @navigate="scrollTo" />
    <main :style="mainStyle">
      <div class="max-w-[840px] mx-auto">
        <HeroSection @scroll-to="scrollTo" />
        <AboutSection />
        <CaseStudiesSection />
        <ServicesSection />
        <FaqSection />
        <ContactSection />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import TheSidebar from "./components/TheSidebar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import CaseStudiesSection from "./components/CaseStudiesSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import FaqSection from "./components/FaqSection.vue";
import ContactSection from "./components/ContactSection.vue";

const activeSection = ref("hero");
const isDesktop = ref(window.innerWidth >= 880);

const mainStyle = computed(() => ({
  marginLeft: isDesktop.value ? "264px" : "0",
  padding: isDesktop.value ? "120px 64px 168px" : "64px 22px 120px",
}));

const sectionIds = [
  "hero",
  "about",
  "mesagoo",
  "zeney",
  "thia",
  "services",
  "faq",
  "contact",
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = window.innerWidth < 880 ? 72 : 36;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

let observer: IntersectionObserver | null = null;

function onResize() {
  isDesktop.value = window.innerWidth >= 880;
}

onMounted(() => {
  window.addEventListener("resize", onResize);

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      }
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
  );

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  }
});

onUnmounted(() => {
  observer?.disconnect();
  window.removeEventListener("resize", onResize);
});
</script>
