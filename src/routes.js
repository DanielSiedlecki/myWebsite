import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/components/AboutMe";
import Home from "@/components/HomePage";
import Portfolio from "@/components/PortfolioSection";
import Contact from "@/components/ContactForm";

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
    {
      path: "/Portfolio",
      component: Portfolio,
      meta: {
        title: "Portfolio",
      },
    },
    {
      path: "/contact",
      component: Contact,
      meta: {
        title: "Contact Me",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;

  if (title) {
    document.title = "Daniel Siedlecki || " + title;
  }
  next();
});

export default router;
