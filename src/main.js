import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import BootstrapVue from "bootstrap-vue";
import "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/css/base.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
