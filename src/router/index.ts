import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('@/modules/home/homePage.vue')
  },
  {
    path: '/bar/:id',
    name: 'detail',
    component: () => import('@/modules/bars/barDetail.vue')
  },
  {
    path: '/bar/reviews/:id',
    name: 'bar-reviews',
    props: true,
    component: () => import('@/modules/bars/barReviews.vue')
  },
  {
    path: '/bars/',
    name: 'bars',
    component: () => import('@/modules/bars/barList.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
