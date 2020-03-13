// SCSS
import './scss/main.scss';

// VUE
import Vue from 'vue';
import App from './App.vue';
new Vue({ render: (createElement) => createElement(App) }).$mount('#app');

// HOT RELOAD ===================
if (module.hot) {
	module.hot.accept();
}
