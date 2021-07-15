import Vue from 'vue'
import VueRouter from 'vue-router'
import Validate from "@/views/background/Validate";
import Main from "@/views/main/Main";
import Background from "@/views/background/Background";
import Overview from "@/views/main/Overview";
import TextPage from "@/views/text/TextPage";
import Create from "@/views/background/components/Create";
import Manage from "@/views/background/components/Manage";
import UpdateArticle from "@/views/background/components/UpdateArticle";

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
      },
      {
        path: '/manage',
        component: Manage
      },
      {
        path: '/update',
        component: UpdateArticle
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
