import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import router from "./router";
import "./assets/main.css";

// trong tài liệu thực hành không use(router)
createApp(App).use(router).mount("#app");
