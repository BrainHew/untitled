import About from "../pages/About";
import Tests from "../pages/Tests";
import Main from "../pages/Main";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/tests', component: Tests, exact: true},
    {path: '/main', component: Main, exact: true},
    {path: '/about', component: About, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]