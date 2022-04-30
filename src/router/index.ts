import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TheLayout from '../components/TheLayout.vue';
import Campaigns from '../components/Campaigns/Campaigns.vue';

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
        component: Campaigns,
        children: [
          {
            path: "/Break-The-Chains",
            name: "Break The Chains",
            component: () => import("../views/Campaigns/BreakTheChains.vue"),
          },
          {
            path: "/Carnivores-Anonymous",
            name: "Carnivores Anonymous",
            component: () => import("../views/Campaigns/CarnivoresAnonymous.vue"),
          },
          {
            path: "/Cetaceans",
            name: "Cetaceans",
            component: () => import("../views/Campaigns/Cetaceans.vue"),
          },
          {
            path: "/Community-Cats",
            name: "Community Cats",
            component: () => import("../views/Campaigns/CommunityCats.vue"),
          },
          {
            path: "/Dog-Meat",
            name: "Dog Meat",
            component: () => import("../views/Campaigns/DogMeat.vue"),
          },
          {
            path: "/Elephants",
            name: "Elephants",
            component: () => import("../views/Campaigns/Elephants.vue"),
          },
          {
            path: "/Farmed-Animals",
            name: "Farmed Animals",
            component: () => import("../views/Campaigns/FarmedAnimals.vue"),
          },
          {
            path: "/Fish-Abuse",
            name: "Fish Abuse",
            component: () => import("../views/Campaigns/FishAbuse.vue"),
          },
          {
            path: "/Fur",
            name: "Fur",
            component: () => import("../views/Campaigns/Fur.vue"),
          },
          {
            path: "/Geese",
            name: "Geese",
            component: () => import("../views/Campaigns/Geese.vue"),
          },
          {
            path: "/Guardians",
            name: "Guardians",
            component: () => import("../views/Campaigns/Guardians.vue"),
          },
          {
            path: "/Justice-For-Animals",
            name: "Justice for Animals",
            component: () => import("../views/Campaigns/JusticeForAnimals.vue"),
          },
          {
            path: "/Puppy-Mills",
            name: "Puppy Mills",
            component: () => import("../views/Campaigns/PuppyMills.vue"),
          },
          {
            path: "/Sustainable-Activism",
            name: "Sustainable Activism",
            component: () => import("../views/Campaigns/SustainableActivism.vue"),
          },
          {
            path: "/Tule-Elk",
            name: "Tule Elk",
            component: () => import("../views/Campaigns/TuleElk.vue"),
          },
          {
            path: "/Vivisection",
            name: "Vivisection",
            component: () => import("../views/Campaigns/Vivisection.vue"),
          },
          {
            path: "/Wild-And-Free",
            name: "Wild and Free",
            component: () => import("../views/Campaigns/WildAndFree.vue"),
          },
          {
            path: "/Wild-Horses-&-Burros",
            name: "Wild Horses & Burros",
            component: () => import("../views/Campaigns/WildHorses&Burros.vue"),
          },
        ],
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
