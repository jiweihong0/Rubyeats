import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/auth/LoginPage.vue";
import UserloginPage from "../views/auth/UserloginPage.vue";
import SigninPage from "../views/auth/SigninPage.vue";
import MainPage from "../views/MainPage.vue";
import RestaurantEditPageVue from "../views/chief/RestaurantEditPage.vue";
import MealsPage from "../views/chief/MealsEditPage.vue";
import RestaurantsPage from "../views/restaurants/index.vue";
import OrderPage from "../views/chief/OrderPage.vue";
import ClientOrderPage from "../views/restaurants/ClientOrderPage.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: MainPage,
    },
    {
        path: "/Login",
        name: "Login",
        component: LoginPage,
    },
    {
        path: "/Signin",
        name: "Signin",
        component: SigninPage,
    },
    {
        path: "/Userlogin",
        name: "Userlogin",
        component: UserloginPage,
    },
    {
        path: "/vendor/restaurant/edit/:id",
        name: "VendorRestaurantEdit",
        component: RestaurantEditPageVue,
    },
    {
        path: "/meals",
        name: "Meals",
        component: MealsPage,
  },
  {
    path: "/restaurnts",
    name: "RetaurantsRouter",
    redirect: "/restaurants",
    children: [
      {
        path: "/restaurants",
        name: "Restaurants",
        component: RestaurantsPage,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    component: OrderPage,

  },
  {
    path: "/restaurants/:id",
    name: "ClientOrder",
    component: ClientOrderPage,

  }
  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;