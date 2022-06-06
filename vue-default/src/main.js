import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
// const app = createApp(App)
// app.use(router)
// app.mount('#app')
// 이랑 같다.
