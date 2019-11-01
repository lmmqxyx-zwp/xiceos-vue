import Vue from 'vue';
import App from "./App.vue";

// 引入全局的样式
import './assets/styles/global.styl'

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root);
