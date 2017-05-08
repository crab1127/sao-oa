import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index'
import List from '@/views/list'
import Detail from '@/views/detail'
import Receipt from '@/views/receipt'
import ReceiptLog from '@/views/receipt-log'
import Home from '@/views/home'
import Contact from '@/views/contact'
import UserAssets from '@/views/user-assets'
import UserProfile from '@/views/user-profile'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/lisl/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/receipt',
      name: 'Receipt',
      component: Receipt
    },
    {
      path: '/receipt/log',
      name: 'ReceiptLog',
      component: ReceiptLog
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/home/assets',
      name: 'UserAssets',
      component: UserAssets
    },
    {
      path: '/home/profile',
      name: 'UserProfile',
      component: UserProfile
    }
  ]
})