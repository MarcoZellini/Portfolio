import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';
import "bootstrap";
import { router } from './router.js';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faGithub);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')