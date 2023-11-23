import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/components/AboutMe";
import Home from "@/components/HomePage";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/aboutme",
      component: AboutMe,
    },
  ],
});

export default router;
