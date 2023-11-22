import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/auth/LoginPage.vue";
import SigninPage from "../views/auth/SigninPage.vue";
import MainPage from "../views/MainPage.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;