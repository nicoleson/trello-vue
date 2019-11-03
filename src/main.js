import Vue from "vue";
import App from "./App.vue";

const Login = { template: "Login Page" };

const routes = { "/": App, "/login": Login };

new Vue({
  el: "#app",
  computed: {
    VueComponent() {
      return routes[window.location.pathname];
    }
  },
  render(h) {
    return h(this.VueComponent);
  }
});
