import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
// 引入goods组件
import goods from './components/goods/goods';

Vue.use(VueRouter);

let app = Vue.extend(App);

let router = new VueRouter();

// 用router的map()方法配置路由
router.map({
  '/goods': {
    // 首先得创建goods组件
    component: goods
  }
});

// 启动
router.start(app, '#app');
