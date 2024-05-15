import { createRouter, createWebHistory } from 'vue-router';
import homecomponent from './views/homecomponent.vue';
import aboutcomponent from './views/aboutcomponent.vue';
import contactcomponent from './views/contactcomponent.vue';
import iticomponent from './views/iticomponent.vue';
import studentcomponent from './views/studentcomponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homecomponent,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: aboutcomponent,
    meta: { requiresAuth: true }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: contactcomponent,
    meta: { requiresAuth: true }
  },
  {
    path: '/iti',
    name: 'ITI',
    component: iticomponent,
    meta: { requiresAuth: true }
  },
  {
    path: '/student',
    name: 'Student',
    component: studentcomponent,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
