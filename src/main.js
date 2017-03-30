import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
// 引入goods,ratings,seller组件
// 因在webpack.base.conf.js中resolve有设置components路径，路径可以写成下面这样
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

// 引入全局styl样式
import 'common/stylus/index.styl';

Vue.use(VueRouter);

let app = Vue.extend(App);

let router = new VueRouter({
  // 手动修改路由被激活的样式名称,默认为“v-link-active”
  linkActiveClass: 'active'
});

// 用router的map()方法配置路由
router.map({
  '/goods': {
    // 首先得创建goods组件
    component: goods
  },
  'ratings': {
    component: ratings
  },
  'seller': {
    component: seller
  }
});

// 启动 '#app'为挂载点
router.start(app, '#app');

router.go('/goods');
