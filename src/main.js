import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Upcoming from "./views/Upcoming";
import Pooldetails from "./views/Pooldetails";
import Poldex from "./views/Poldex";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/upcoming", component: Upcoming },
  { path: "/pooldetails", component: Pooldetails },
  { path: "/poldex", component: Poldex },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
