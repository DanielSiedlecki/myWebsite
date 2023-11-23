import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "../src/styles/style.scss";
import router from "../src/routes";

const app = createApp(App);

app.use(router);
app.mount("#app");
