import home from "./components/Index.vue"
import CreateUser from "./components/CreateUser.vue"
import Menu from "./components/Menu.vue"
import login from "./components/Login.vue"
import Solicitud from "./components/Solicitud.vue"
import Selectivo from "./components/Selectivo.vue"

export const routes = [
    {path: "/", component: home},
    {path: "/CreateUser", component: CreateUser},
    {path: "/login", component: login},
    {path: "/Solicitud", component: Solicitud},
    {path: "/Menu", component: Menu},
    {path: "/Selectivo", component: Selectivo}

]
    