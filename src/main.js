import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import { router } from "./routes/routes.js";
import { Quasar, Dialog } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import axios from 'axios';
//axios.defaults.baseURL = "https://transporte-el2a.onrender.com/api/";


const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia)
app.use(Quasar, {
    plugins: { Dialog },
  });


app.mount("#app");
