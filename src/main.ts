import { createApp } from "vue";
import App from "./App.vue";

import "../node_modules/nes.css/css/nes.min.css";
import "../node_modules/bulma/css/bulma.min.css";
import "./scss/_variables.scss";
import { key, store } from "@/store";

createApp(App).use(store, key).mount("#app");
