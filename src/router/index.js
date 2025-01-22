import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Browse from '../views/Browse.vue';
import Favorites from '../views/Favorites.vue';
import Watch from '../views/Watch.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/watch/:id',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;