export const ROUTE_PATHS = {
    Home: "/",
<<<<<<< HEAD
    About: "about",
    News: "news",
=======
    About: "/about",
    Personnel: "/personnel",
    News: "/news",
    NewsDetails: (id) => `/news/detail/${id}`,
>>>>>>> 75bc9aa052b6862ce25deaa71bc443100d286b10
    AdminHome: "/admin",
    AdminCategory: (isRedirect) => (!isRedirect ? "category" : "/admin/category"),
    AdminPost: (isRedirect) => (!isRedirect ? "post" : "/admin/post"),
    AdminAbout: (isRedirect) => (!isRedirect ? "about" : "/admin/about"),
    AdminDisplay: (isRedirect) => (!isRedirect ? "display" : "/admin/display"),
    AdminAccount: (isRedirect) => (!isRedirect ? "account" : "/admin/account"),
    AdminMessage: (isRedirect) => (!isRedirect ? "message" : "/admin/message"),
};
