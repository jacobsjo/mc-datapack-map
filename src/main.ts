import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileZipper, faFolderOpen, faXmark, faRotateRight, faPlus, faBars, faMagnifyingGlass, faLocationDot, faAngleRight, faAngleDown, faDice, faGlobe, faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import './style.css'
import App from './App.vue'

import messages from '@intlify/unplugin-vue-i18n/messages'

library.add(faFileZipper, faFolderOpen, faXmark, faRotateRight, faPlus, faBars, faMagnifyingGlass, faLocationDot, faAngleRight, faAngleDown, faDice, faGlobe, faEarthEurope);


const uri = window.location.search.substring(1)
const params = new URLSearchParams(uri)
var lang = params.get('lang') ?? 'en'
console.log(messages)
if (messages[lang] === undefined){
    lang = 'en'
    params.set('lang', 'en')
    window.location.search = params.toString()
}

const i18n = createI18n({
    globalInjection: true,
    locale: lang,
    fallbackLocale: 'en',
    messages: messages
})

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.component("font-awesome-icon", FontAwesomeIcon)
app.config.globalProperties.window = window
app.mount('#app')