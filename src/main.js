import Vue from "vue";
import App from "./App.vue";

// :::::::::::::::::::::::::::::::::::::::::: //
// ::::::::::::: EDITOR FROALA ::::::::::::: //
// :::::::::::::::::::::::::::::::::::::::: //
// Import Froala CSS files
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
//import all Froala plugins
import "froala-editor/js/plugins.pkgd.min.js";

// Import and use Vue Froala lib.
import VueFroala from "./vue-froala";
Vue.use(VueFroala);
window.VueFroala = VueFroala;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
