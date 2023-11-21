import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons"; // OPTIMIZE THIS LATER
import { fab } from "@fortawesome/free-brands-svg-icons"; // OPTIMIZE THIS LATER
import { far } from "@fortawesome/free-regular-svg-icons"; // OPTIMIZE THIS LATER
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { inject } from "@vercel/analytics";

inject();

library.add(fas, fab, far);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
