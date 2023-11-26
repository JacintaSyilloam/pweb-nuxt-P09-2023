import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight, faCircle, fas } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fas, faCircle, faArrowRight);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
