import router from "@/routes/route";
import pinia from "@/store/store";
import "nprogress/nprogress.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
