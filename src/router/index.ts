import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SignIn from '../modules/connexion/signIn.vue';
import ForgotPassword from '../modules/connexion/forgotPassword.vue';
import SingUp from '../modules/connexion/signUp.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signIn'
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SingUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
