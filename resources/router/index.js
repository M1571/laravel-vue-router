//  importo vue router

import Vue from 'vue' 
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// rotte

const routes = []

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router