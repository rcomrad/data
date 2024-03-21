import { createRouter, createWebHistory } from 'vue-router'
import {login_required} from "@/utils/authorization";
import {home_routes} from "@/router/home";
import {login_before} from "@/utils/authorization";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/journal',
      name: 'journal',
      component: ()=>import("@/views/journal/JournalView.vue")
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: login_before,
      component: ()=>import("@/views/system_functions/Login.vue")
    },
    {
      path: '/',
      beforeEnter: login_required,
      children: home_routes,
      component: ()=>import("@/views/Home.vue")
    },
  ]
})

export default router
