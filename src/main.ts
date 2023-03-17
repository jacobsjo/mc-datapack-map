import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileZipper, faFolderOpen, faXmark, faRotateRight, faPlus, faBars, faMagnifyingGlass, faLocationDot, faAngleRight, faAngleDown, faDice } from "@fortawesome/free-solid-svg-icons";
import './style.css'
import App from './App.vue'


library.add(faFileZipper, faFolderOpen, faXmark, faRotateRight, faPlus, faBars, faMagnifyingGlass, faLocationDot, faAngleRight, faAngleDown, faDice);

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.component("font-awesome-icon", FontAwesomeIcon)
app.config.globalProperties.window = window
app.mount('#app')