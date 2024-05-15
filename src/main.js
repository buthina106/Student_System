import { createApp } from 'vue'
import App from './App.vue'
import { router } from 'json-server';
// import wrappercomponent from './components/wrappercomponent.vue'
// import navcomponent from './components/navcomponent.vue'

// createApp(App).mount('#app')
// createApp(navcomponent).mount('#app')
const app =createApp(navcomponent);
app.use(router);
app.mount