import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import MenuView from "@/views/MenuView.vue";
import CartView from "@/views/CartView.vue";
import HistoryView from "@/views/HistoryView.vue";
import OrdersView from "@/views/OrdersView.vue";

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
        {
          path: "history",
          component: HistoryView,
        },
        {
          path: "orders",
          component: OrdersView,
        },
      ],
    },
  ],
});

export default router;
