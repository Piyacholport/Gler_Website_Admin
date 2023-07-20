
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
import dashboard from '../views/Home.vue'
import Login from '../views/Login.vue'
import Home from '../views/Profile.vue'

import insertchatopen from '../views/insert/insertChatopen.vue'
import insertchatpostive from '../views/insert/insertChatpositive.vue'
import insertchatnegative from '../views/insert/insertChatnegative.vue'
import insertchatstimulate from '../views/insert/insertChatstimulate.vue'
import insertchatclose from '../views/insert/insertChatclose.vue'
import insertassistance from '../views/insert/insertAssistance.vue'
import insertactivity from '../views/insert/insertActivity.vue'

import updatechatopen from '../views/update/_id/updateChatopen.vue'
import updatechatpositive from '../views/update/_id/updateChatpositive.vue'
import updatechatnegative from '../views/update/_id/updateChatnegative.vue'
import updatechatstimulate from '../views/update/_id/updateChatstimulate.vue'
import updatechatclose from '../views/update/_id/updateChatclose.vue'
import updateactivitye from '../views/update/_id/updateActivity.vue'
import updateassistance from '../views/update/_id/upateAssistance.vue'
import updateProfile from '../views/update/_id/updateProfile.vue'
//ในviews
import activity from '../views/activity.vue'
import assistance from '../views/assistance.vue'
import forgotpassword from '../views/forgotPassword.vue'
import replymessage from '../views/reply_message.vue'
import Register from '../views/Register.vue'
import admin from '../views/admin.vue'
import help from '../views/help.vue'
import sorting from '../views/sorting.vue'
import chart from '../views/chart.vue'

//Chat
import chatopen from '../views/chat/chatopen.vue'
import chatpositive from '../views/chat/chatpositive.vue'
import chatnegative from '../views/chat/chatnegative.vue'
import chatstimulate from '../views/chat/chatstimulate.vue'
import chatclose from '../views/chat/chatclose.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/chart',
    name: 'chart',
    component: chart
  },
  /////////////////////// insert ////////////////////////
  {
    path: '/insertchatopen',
    name: 'insertchatopen',
    component: insertchatopen
  },
  {
    path: '/insertchatpositive',
    name: 'insertchatpositive',
    component: insertchatpostive
  },
  {
    path: '/insertchatnegative',
    name: 'insertchatnegative',
    component: insertchatnegative
  },
  {
    path: '/insertchatstimulate',
    name: 'insertchatstimulate',
    component: insertchatstimulate
  },
  {
    path: '/insertchatclose',
    name: 'insertchatclose',
    component: insertchatclose
  },
  {
    path: '/insertassistance',
    name: 'insertassistance',
    component: insertassistance
  },
  {
    path: '/insertactivity',
    name: 'insertactivity',
    component: insertactivity
  },

  /////////////////////// update /////////////////////////////
  {
    path: '/updatechatopen/:id',
    name: 'updatechatopen',
    component: updatechatopen
  },
  {
    path: '/updatechatpositive/:id',
    name: 'updatechatpositive',
    component: updatechatpositive
  },
  {
    path: '/updatechatnegative/:id',
    name: 'updatechatnegative',
    component: updatechatnegative
  },
  {
    path: '/updatechatstimulate/:id',
    name: 'updatechatstimulate',
    component: updatechatstimulate
  },
  {
    path: '/updatechatclose/:id',
    name: 'updatechatclose',
    component: updatechatclose
  },
  {
    path: '/updateActivity/:id',
    name: 'updateactivitye',
    component: updateactivitye
  },
  {
    path: '/updateAssistance/:id',
    name: 'updateassistance',
    component: updateassistance
  },
  {
    path: '/updateProfile/:id',
    name: 'updateProfile',
    component: updateProfile,
    meta: {
      requiresAuth: true
    }
  },



  /////////////  VIEWS   ///////////

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/replymessage',
    name: 'reply_message',
    component: replymessage
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity
  },
  {
    path: '/assistance',
    name: 'assistance',
    component: assistance
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: forgotpassword
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/help',
    name: 'help',
    component: help
  },
  {
    path: '/sort',
    name: 'sort',
    component: sorting
  },

    /////////////  CHAT   ///////////
    {
      path: '/chatopen',
      name: 'chatopen',
      component: chatopen
    },
    {
      path: '/chatpositive',
      name: 'chatpositive',
      component: chatpositive
    },
    {
      path: '/chatnegative',
      name: 'chatnegative',
      component: chatnegative
    },
    {
      path: '/chatstimulate',
      name: 'chatstimulate',
      component: chatstimulate
    },
    {
      path: '/chatclose',
      name: 'chatclose',
      component: chatclose
    },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router

