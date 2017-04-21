import Vue from 'vue'
import VueRouter from 'vue-router'
import Item from '../Item.vue'
import List from '../List.vue'
import Detail from '../Detail.vue'
Vue.use(VueRouter)
//vue router
const routes = [
    {
        path: '/',
        component: Item
    }, {
        path: '/list/:id',
        component: List
    }, {
        path: '/detail',
        component: Detail
    }
];
export const rou = new VueRouter({routes})
