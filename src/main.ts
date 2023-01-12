import { createApp } from "vue";
import App from "./App.vue";

import { key, pinia, store } from "@/store";
import "../node_modules/bulma/css/bulma.min.css";
import "../node_modules/nes.css/css/nes.min.css";
import "./scss/_variables.scss";

createApp(App)
  .use(store, key, pinia)
  .mount("#app");
