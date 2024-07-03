import NProgress from "nprogress";
import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_PATHS } from "../constants/route.constant";

// VIEW IMPORT LAYOUT
const AdminLayout = () => import("@/components/layouts/AdminLayout.vue");
const ClientLayout = () => import("@/components/layouts/ClientLayout.vue");

// VIEW IMPORT FOR CUSTOMER
const AboutView = () => import("@/views/AboutView");
const PersonnelView = () => import("@/views/PersonnelView");
const PersonnelDetailView = () => import("@/views/PersonnelView/PersonnelDetailView.vue");
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
const AdminCategoryView = () => import("@/views/admin/CategoryView");
const AdminPostView = () => import("@/views/admin/PostView");
const AdminAccountView = () => import("@/views/admin/AccountView");
const AdminMessageView = () => import("@/views/admin/MessageView");

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
                path: ROUTE_PATHS.Personnel,
                component: PersonnelView,
                meta: { title: "Nhân sự" },
            },
            {
                path: ROUTE_PATHS.Personnel + "/detail/:id",
                name: 'person_details',
                component: PersonnelDetailView,
                meta: { title: "Nhân sự chi tiết" },
            },
            {
                path: ROUTE_PATHS.News,
                component: NewView,
                meta: { title: "Tin Tức" },
            },
            {
                path: ROUTE_PATHS.News + "/detail/:id",
                name: 'news_details',
                component: NewDetailView,
                meta: { title: "Tin Tức chi tiết" },
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
                component: AdminCategoryView,
                meta: { title: "Loại tin" },
                sensitive: true,
                children: [
                    {
                        path: ROUTE_PATHS.AdminCategory() + "add",
                        component: AdminCategoryView,
                        meta: { title: "Thêm loại tin" },
                        sensitive: true,
                    },

                ]
            },
            {
                path: ROUTE_PATHS.AdminPost(),
                component: AdminPostView,
                meta: { title: "Bài viết" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.AdminAccount(),
                component: AdminAccountView,
                meta: { title: "Tài khoản" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.AdminMessage(),
                component: AdminMessageView,
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
