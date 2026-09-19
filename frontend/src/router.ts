import { createRouter, createWebHistory } from "vue-router";
import Registration from "./pages/Registration.vue";
import Autorization from "./pages/Autorization.vue";

const router = createRouter({
    history:createWebHistory(),

    routes:[
        {
            path:'/registration', 
            component:Registration
        },
        {
            path:'/autorization', 
            component:Autorization
        }
    ]
})

export default router