import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Update from "./components/Update.vue";
import Add from "./components/Add.vue";
import { createRouter , createWebHistory } from "vue-router"; 

const routes = [
    {
        name:'Home',
        component : Home,
        path :'/',
    },
    {
        name:'SignUp',
        component : SignUp,
        path :'/sign-up',
    },
    {
        name:'Login',
        component : Login,
        path :'/Login',
    },
    {
        name:'Add',
        component : Add,
        path :'/add',
    },
    {
        name:'Update',
        component : Update,
        path :'/update',
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;