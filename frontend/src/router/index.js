import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import MenuView from "@/views/MenuView.vue";
import CartView from "@/views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LoginView,
    },
    {
      path: "/dashboard",
      component: DashboardView,
      children: [
        {
          path: "",
          component: MenuView,
        },
        {
          path: "cart",
          component: CartView,
        },
      ],
    },
  ],
});

export default router;
