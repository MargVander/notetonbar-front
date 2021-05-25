import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SignIn from '../modules/connexion/signIn.vue';
import ForgotPassword from '../modules/connexion/forgotPassword.vue';
import ValidateUser from '../modules/connexion/validateUser.vue';
import NewMdp from '../modules/connexion/newMdp.vue';
import SingUp from '../modules/connexion/signUp.vue';
import ProfilUser from '../modules/user/profilUser.vue';
import { store } from '@/store';

const authguard = (to: any, from: any, next: any) => {
  const token = store.getters.getToken;
  if (token.access_token) {
    next();
  } else {
    next("/")
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signIn'
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn,
    props: true
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/validateUser',
    name: 'ValidateUser',
    component: ValidateUser,
    props: true
  },
  {
    path: '/newMdp',
    name: 'NewMdp',
    component: NewMdp,
    props: true
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SingUp
  },
  {
    path: '/profilUser',
    name: 'ProfilUser',
    component: ProfilUser,
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('@/modules/home/homePage.vue'),
    beforeEnter: authguard
  },
  {
    path: '/bar/:id',
    name: 'detail',
    component: () => import('@/modules/bars/barDetail.vue'),
    beforeEnter: authguard
  },
  {
    path: '/bar/reviews/:id',
    name: 'bar-reviews',
    props: true,
    component: () => import('@/modules/bars/barReviews.vue'),
    beforeEnter: authguard
  },
  {
    path: '/bars/',
    name: 'bars',
    component: () => import('@/modules/bars/barList.vue'),
    beforeEnter: authguard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
