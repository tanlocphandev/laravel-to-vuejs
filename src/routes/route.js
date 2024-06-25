import NProgress from "nprogress";
import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_PATHS } from "../constants/route.constant";

// VIEW IMPORT LAYOUT
const AdminLayout = () => import("@/components/layouts/AdminLayout.vue");
const ClientLayout = () => import("@/components/layouts/ClientLayout.vue");

// VIEW IMPORT FOR CUSTOMER
const AboutView = () => import("@/views/AboutView");
const HomeView = () => import("@/views/HomeView");
const NewView = () => import("@/views/NewView");
const NewDetailView = () => import("@/views/NewView/NewDetailView.vue");
const NotFoundView = () => import("@/views/NotFoundView");

// VIEW IMPORT FOR AUTH
const LoginView = () => import("@/views/auth/LoginView");

// VIEW IMPORT FOR ADMIN
const AdminHomeView = () => import("@/views/admin/HomeView");
const AdminAboutView = () => import("@/views/admin/AboutView");
const AdminDisplayView = () => import("@/views/admin/DisplayView");

/**
 * @type {import("vue-router").RouteRecordRaw}
 */
const routes = [
    {
        path: ROUTE_PATHS.Home,
        component: ClientLayout,
        children: [
            {
                path: ROUTE_PATHS.Home,
                component: HomeView,
                meta: { title: "Trang chủ" },
            },
            {
                path: ROUTE_PATHS.About,
                component: AboutView,
                meta: { title: "Giới thiệu" },
            },
            {
                path: ROUTE_PATHS.News,
                component: NewView,
                meta: { title: "Tin Tức" },
                children: [
                    {
                        path: "/detail",
                        component: NewDetailView,
                        meta: { title: "Tin Tức chi tiết" },
                    },
                ],
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
        path: ROUTE_PATHS.AdminHome,
        component: AdminLayout,
        children: [
            {
                path: ROUTE_PATHS.AdminHome,
                component: AdminHomeView,
                meta: { title: "Dashboard" },
                sensitive: true,

            },
            {
                path: ROUTE_PATHS.AdminAbout(),
                component: AdminAboutView,
                meta: { title: "Giới thiệu" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.AdminDisplay(),
                component: AdminDisplayView,
                meta: { title: "Hiển thị" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.AdminCategory(),
                component: AdminAboutView,
                meta: { title: "Loại tin" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.AdminPost(),
                component: AdminAboutView,
                meta: { title: "Bài viết" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.AdminAccount(),
                component: AdminAboutView,
                meta: { title: "Tài khoản" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.AdminMessage(),
                component: AdminAboutView,
                meta: { title: "Hộp thư" },
                sensitive: true,
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
