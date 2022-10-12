import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PhotoApp',
    component: () => import(/* webpackChunkName: "about" */ '../components/PhotoApp.vue'),
    children: [
      {
        path: 'albums/:id',
        name: 'albunsId',
        component: () => import(/* webpackChunkName: "about" */ '../views/PhotoView.vue'),
      }

    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
