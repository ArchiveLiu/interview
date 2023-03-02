import Vue from 'vue'
import App from './App.vue'
import { Button, Select,Row,Col,Dropdown,DropdownMenu,DropdownItem,Badge } from 'element-ui';
import 'font-awesome/css/font-awesome.min.css';
import router from './router/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import request from "./untils/request";
Vue.prototype.request=request


Vue.use(Antd);

// Vue.use(Button);
Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Badge.name, Badge);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
