import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue';
import Login from '@/modules/Login.vue';
import TopPage from '@/modules/TopPage.vue';
import Ajax from '@/modules/Ajax.vue';
import List from '@/modules/List.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/top',
        name: 'TopPage',
        component: TopPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/ajax',
        name: 'Ajax',
        component: Ajax,
    },
    {
        path: '/list',
        name: 'List',
        component: List,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;