import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRight,
  faBars,
  faCircle,
  faXmark,
  fas,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fas, faCircle, faArrowRight, faBars, faXmark);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
