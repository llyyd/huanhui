import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      // 首页
      path: '/home',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue'),
    },
    {
      // 公司简介
      path: '/group_introduction',
      name: 'GroupIntroduction',
      component: () => import('../views/GroupIntroduction.vue'),
    },
    {
      // 管理团队
      path: '/management_team',
      name: 'ManagementTeam',
      component: () => import('../views/ManagementTeam.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

export default router
