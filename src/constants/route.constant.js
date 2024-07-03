export const ROUTE_PATHS = {
    Home: "/",
    About: "/about",
    Personnel: "/personnel",
    News: "/news",
    NewsDetails: (id) => `/news/detail/${id}`,
    AdminHome: "/admin",
    AdminCategory: (isRedirect) => (!isRedirect ? "category" : "/admin/category"),
    AdminPost: (isRedirect) => (!isRedirect ? "post" : "/admin/post"),
    AdminAbout: (isRedirect) => (!isRedirect ? "about" : "/admin/about"),
    AdminDisplay: (isRedirect) => (!isRedirect ? "display" : "/admin/display"),
    AdminAccount: (isRedirect) => (!isRedirect ? "account" : "/admin/account"),
    AdminMessage: (isRedirect) => (!isRedirect ? "message" : "/admin/message"),
};
