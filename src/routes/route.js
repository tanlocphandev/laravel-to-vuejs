import NProgress from "nprogress";
import { createRouter, createWebHistory } from "vue-router";

// VIEW IMPORT LAYOUT
const AdminLayout = () => import("@/components/layouts/AdminLayout.vue");
const ClientLayout = () => import("@/components/layouts/ClientLayout.vue");

// VIEW IMPORT FOR CUSTOMER
const AboutView = () => import("@/views/AboutView");
const HomeView = () => import("@/views/HomeView");
const NewView = () => import("@/views/NewView");
const NotFoundView = () => import("@/views/NotFoundView");

// VIEW IMPORT FOR AUTH
const LoginView = () => import("@/views/auth/LoginView");

// VIEW IMPORT FOR ADMIN
const AdminHomeView = () => import("@/views/admin/HomeView");

/**
 * @type {import("vue-router").RouteRecordRaw}
 */
const routes = [
    {
        path: "/",
        component: ClientLayout,
        children: [
            {
                path: "",
                component: HomeView,
                meta: { title: "Trang chủ" },
            },
            {
                path: "about",
                component: AboutView,
                meta: { title: "Giới thiệu" },
            },
            {
                path: "news",
                component: NewView,
                meta: { title: "Tin Tức" },
            },
        ],
    },
    {
        path: "/auth",
        children: [
            {
                path: "login",
                component: LoginView,
                meta: { title: "Đăng nhập" },
            },
        ],
    },
    {
        path: "/admin",
        component: AdminLayout,
        children: [
            {
                path: "",
                component: AdminHomeView,
                meta: { title: "Trang chủ" },
            },
            {
                path: "about",
                component: AdminHomeView,
                meta: { title: "Giới thiệu" },
            },
        ],
    },
    { path: "/:pathMatch(.*)*", component: NotFoundView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta?.title || ""} | KhoaLuan`;

    NProgress.start();
    window.scrollTo(0, 0);
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
