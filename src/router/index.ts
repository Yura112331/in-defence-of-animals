import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TheLayout from '../components/TheLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TheLayout",
    component: TheLayout,
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("../components/Home/Home.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../components/About/About.vue"),
      },
      {
        path: "/campaigns",
        name: "Campaigns",
        component: () => import("../components/Campaigns/Campaigns.vue"),
      },
      {
        path: "/sanctuaries",
        name: "Sanctuaries",
        component: () => import("../components/Sanctuaries/Sanctuaries.vue"),
      },
      {
        path: "/news",
        name: "News",
        component: () => import("../components/News/News.vue"),
      },
      {
        path: "/take-action",
        name: "Take-action",
        component: () => import("../components/Take-action/Take-action.vue"),
      },
      {
        path: "/shop",
        name: "Shop",
        component: () => import("../components/Shop/Shop.vue"),
      },
      {
        path: "/donate",
        name: "Donate",
        component: () => import("../components/Donate/Donate.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
