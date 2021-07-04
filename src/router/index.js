import Vue from 'vue'
import VueRouter from 'vue-router'
import Validate from "@/views/background/Validate";
import Main from "@/views/main/Main";
import Background from "@/views/background/Background";
import Overview from "@/views/main/Overview";
import TextPage from "@/views/text/TextPage";
import Create from "@/views/background/components/Create";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        component: Overview
      },
      {
        path: '/text',
        component: TextPage
      }
    ]
  },
  {
    path: '/validate',
    component: Validate
  },
  {
    path: '/background',
    component: Background,
    children: [
      {
        path: '/background',
        component: Overview
      },
      {
        path: '/write',
        component: Create
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
