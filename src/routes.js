import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/components/AboutMe";
import Home from "@/components/HomePage";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: { path: "/home" },
    },
    {
      path: "/home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about",
      component: AboutMe,
      meta: {
        title: "About Me",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;

  if (title) {
    document.title = "Daniel Siedlecki" + title;
  }
  next();
});

export default router;
