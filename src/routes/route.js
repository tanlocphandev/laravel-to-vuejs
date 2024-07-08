import NProgress from "nprogress";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import { ROUTE_PATHS } from "../constants/route.constant";

// VIEW IMPORT LAYOUT
const AdminLayout = () => import("@/components/layouts/AdminLayout.vue");
const ClientLayout = () => import("@/components/layouts/ClientLayout.vue");

// VIEW IMPORT FOR CUSTOMER
const AboutView = () => import("@/views/AboutView");
const FacultyDetailsView = () => import("@/views/FacultyDetailsView");
const DepartmentDetailsView = () => import("@/views/DepartmentDetailsView");
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
const AddEditPost = () => import("@/views/admin/PostView/AddEditPost.vue");
const AdminAccountView = () => import("@/views/admin/AccountView");
const AddEditAccount = () => import("@/views/admin/AccountView/AddEditAccount.vue");
const AdminMessageView = () => import("@/views/admin/MessageView");
const AddEditCategory = () => import("@/views/admin/CategoryView/AddEditCategory.vue");
const AdminPersonnelView = () => import("@/views/admin/PersonalView");
const AdminFacultyView = () => import("@/views/admin/FacultyView");
const AdminDepartmentView = () => import("@/views/admin/DepartmentView");
const AdminAddEditDepartmentView = () =>
    import("@/views/admin/DepartmentView/AddEditDepartment.vue");
const AdminAddEditPersonnelView = () => import("@/views/admin/PersonalView/AddEditPersonnel.vue");
const AdminAddEditFacultyView = () => import("@/views/admin/FacultyView/AddEditFaculty.vue");

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
                path: ROUTE_PATHS.FacultyPage + "/:id",
                name: "faculty_details",
                component: FacultyDetailsView,
                meta: { title: "Chi tiết khoa" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.DepartmentPage + "/:id",
                name: "department_details",
                component: DepartmentDetailsView,
                meta: { title: "Chi tiết bộ môn" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.Personnel,
                component: PersonnelView,
                meta: { title: "Nhân sự" },
            },
            {
                path: ROUTE_PATHS.Personnel + "/detail/:id",
                name: "person_details",
                component: PersonnelDetailView,
                meta: { title: "Nhân sự chi tiết" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.News,
                component: NewView,
                meta: { title: "Tin Tức" },
            },
            {
                path: ROUTE_PATHS.News + "/detail/:id",
                name: "news_details",
                component: NewDetailView,
                meta: { title: "Tin Tức chi tiết" },
                sensitive: true,
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
                component: RouterView,
                children: [
                    {
                        path: "",
                        component: AdminCategoryView,
                        name: "category",
                        meta: { title: "Loại tin" },
                        sensitive: true,
                    },
                    {
                        path: "add",
                        component: AddEditCategory,
                        name: "category_create",
                        meta: { title: "Thêm loại tin" },
                        sensitive: true,
                    },
                    {
                        path: "edit/:id",
                        component: AddEditCategory,
                        name: "category_edit",
                        meta: { title: "Cập nhật loại tin" },
                        sensitive: true,
                    },
                ],
            },
            {
                path: ROUTE_PATHS.AdminPost(),
                component: RouterView,
                children: [
                    {
                        path: "",
                        component: AdminPostView,
                        name: "post",
                        meta: { title: "Bài viết" },
                        sensitive: true,
                    },
                    {
                        path: "add",
                        component: AddEditPost,
                        name: "post_create",
                        meta: { title: "Thêm bài viết" },
                        sensitive: true,
                    },
                    {
                        path: "edit/:id",
                        component: AddEditPost,
                        name: "post_edit",
                        meta: { title: "Sửa bài viết" },
                        sensitive: true,
                    },
                ],
            },
            {
                path: ROUTE_PATHS.AdminAccount(),
                component: RouterView,
                children: [
                    {
                        path: "",
                        component: AdminAccountView,
                        name: "account",
                        meta: { title: "Tài khoản" },
                        sensitive: true,
                    },
                    {
                        path: "add",
                        component: AddEditAccount,
                        name: "account_create",
                        meta: { title: "Thêm tài khoản" },
                        sensitive: true,
                    },
                    {
                        path: "edit/:id",
                        component: AddEditAccount,
                        name: "account_edit",
                        meta: { title: "Cập nhật tài khoản" },
                        sensitive: true,
                    },
                ],
            },
            {
                path: ROUTE_PATHS.AdminMessage(),
                component: AdminMessageView,
                meta: { title: "Hộp thư" },
                sensitive: true,
            },
            {
                path: ROUTE_PATHS.AdminPersonnel(),
                component: RouterView,
                children: [
                    {
                        path: "",
                        component: AdminPersonnelView,
                        name: "personnel",
                        meta: { title: "Nhân sự" },
                        sensitive: true,
                    },
                    {
                        path: "add",
                        component: AdminAddEditPersonnelView,
                        name: "add_personnel",
                        meta: { title: "Thêm nhân sự" },
                        sensitive: true,
                    },
                    {
                        path: "edit/:id",
                        component: AdminAddEditPersonnelView,
                        name: "edit_personnel",
                        meta: { title: "Cập nhật nhân sự" },
                        sensitive: true,
                    },
                ],
            },
            {
                path: ROUTE_PATHS.AdminDepartment(),
                component: RouterView,
                children: [
                    {
                        path: "",
                        component: AdminDepartmentView,
                        name: "department",
                        meta: { title: "Bộ môn" },
                        sensitive: true,
                    },
                    {
                        path: "add",
                        component: AdminAddEditDepartmentView,
                        name: "add_department",
                        meta: { title: "Thêm bộ môn" },
                        sensitive: true,
                    },
                    {
                        path: "edit/:id",
                        component: AdminAddEditDepartmentView,
                        name: "edit_department",
                        meta: { title: "Cập nhật bộ môn" },
                        sensitive: true,
                    },
                ],
            },
            {
                path: ROUTE_PATHS.AdminFaculty(),
                component: RouterView,
                children: [
                    {
                        path: "",
                        component: AdminFacultyView,
                        name: "faculty",
                        meta: { title: "Khoa" },
                        sensitive: true,
                    },
                    {
                        path: "add",
                        component: AdminAddEditFacultyView,
                        name: "add_faculty",
                        meta: { title: "Thêm khoa" },
                        sensitive: true,
                    },
                    {
                        path: "edit/:id",
                        component: AdminAddEditFacultyView,
                        name: "edit_faculty",
                        meta: { title: "Cập nhật khoa" },
                        sensitive: true,
                    },
                ],
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
