import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import("../views/Dashboard.vue")
    },
    {
        path: '/barang',
        name: 'barang.index',
        component: () => import("../views/barang/Index.vue")
    },
    {
        path: '/barang/create',
        name: 'barang.create',
        component: () => import("../views/barang/Create.vue")
    },
    {
        path: '/barang/edit/:id',
        name: 'barang.edit',
        component: () => import("../views/barang/Edit.vue")
    },
    {
        path: '/pegawai',
        name: 'pegawai.index',
        component: () => import("../views/pegawai/Index.vue")
    },
    {
        path: '/pegawai/create',
        name: 'pegawai.create',
        component: () => import("../views/pegawai/Create.vue")
    },
    {
        path: '/pegawai/edit/:id',
        name: 'pegawai.edit',
        component: () => import("../views/pegawai/Edit.vue")
    },
    {
        path: '/reqbarang',
        name: 'reqbarang.index',
        component: () => import("../views/reqbarang/Index.vue")
    },
    {
        path: '/reqbarang/create',
        name: 'reqbarang.create',
        component: () => import("../views/reqbarang/Create.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;