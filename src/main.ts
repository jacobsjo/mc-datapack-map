import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileZipper, faFolderOpen, faXmark, faRotateRight, faPlus, faBars} from "@fortawesome/free-solid-svg-icons";
import './style.css'
import App from './App.vue'


library.add(faFileZipper, faFolderOpen, faXmark, faRotateRight, faPlus, faBars);

const pinia = createPinia()
createApp(App)
    .use(pinia)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')