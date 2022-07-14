import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'


const app = createApp(App)

app.use(VueGoogleMaps, {
    load: {
        // key: 'AIzaSyARlTxKFaM9jsRnpUL0YJAfoHETX_XNRbI',
        key: import.meta.env.VITE_MAP_API_KEY,
        // language: 'de',
    }
}
)

app.use(ElementPlus)
app.use(router)
app.use(store)


app.mount('#app')
