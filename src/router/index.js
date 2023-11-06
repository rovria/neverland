import { createRouter, createWebHistory } from 'vue-router'
import FairyList from '../views/FairyList.vue'
import Formation from '../views/Formations.vue'
import Guides from '../views/Guides.vue'
import TierList from '../views/TierList.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: FairyList
      },
      {
        path: '/formation',
        name: 'formation',
        component: Formation
      },
      {
        path: '/guides',
        name: 'guides',
        component: Guides
      },
      {
        path: '/tierlist',
        name: 'tierlist',
        component: TierList
      }
    ]
  })

export default router
