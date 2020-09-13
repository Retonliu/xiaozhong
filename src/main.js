import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import router from './router.js';
import { Tabbar, TabbarItem } from 'vant';
import {NavBar} from 'vant';
import { Icon } from 'vant';
import { Tab, Tabs } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Loading } from 'vant';
import { Uploader } from 'vant';
import { Field } from 'vant';
import { Rate } from 'vant';
import { Form } from 'vant';
import { Button } from 'vant';
import { Col, Row } from 'vant';
import { Divider } from 'vant';
import { Lazyload } from 'vant';
import { Toast } from 'vant';
import { ActionSheet } from 'vant';

import './assets/zhong.css'
import 'vant/lib/tabbar/style';
import 'vant/lib/tabbar-item/style';
import 'vant/lib/nav-bar/style';
import 'vant/lib/icon/style';
import 'vant/lib/tab/style';
import 'vant/lib/tabs/style';
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';
import 'vant/lib/grid/style';
import 'vant/lib/grid-item/style';
import 'vant/lib/image/style';
import 'vant/lib/uploader/style';
import 'vant/lib/field/style';
import 'vant/lib/rate/style';
import 'vant/lib/form/style';
import 'vant/lib/button/style';
import 'vant/lib/col/style';
import 'vant/lib/row/style';
import 'vant/lib/divider/style';
import 'vant/lib/lazyload/style';
import 'vant/lib/toast/style';
import 'vant/lib/action-sheet/style';
Vue.prototype.$axios = axios;


Vue.use(ActionSheet);
Vue.use(Toast);
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(Divider);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Form);
Vue.use(Rate);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(Loading);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(VueRouter);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
