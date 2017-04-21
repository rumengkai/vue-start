import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Item from './view/Item.vue'
import List from './view/List.vue'
import Detail from './view/Detail.vue'
import { Pagination,Button ,Table,TableColumn,Icon,Form,FormItem,} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Pagination)
Vue.use(VueResource)
//vue router
const routes = [
    {
        path: '/',
        component: Item
    }, {
        path: '/list/:id',
        component: List
    }, {
        path: '/detail/:id',
        component: Detail
    }
];
const router = new VueRouter({routes});

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
