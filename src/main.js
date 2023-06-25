import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import createPersistedState from "vuex-persistedstate";

createApp(App).use(store).use(createPersistedState).mount('#app')
