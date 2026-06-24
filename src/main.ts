import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { inject } from "@vercel/analytics";

inject();
import { vReveal } from "./directives/reveal";
import { vScramble } from "./directives/scramble";

const app = createApp(App);
app.directive("reveal", vReveal);
app.directive("scramble", vScramble);
app.mount("#app");
