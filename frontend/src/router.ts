import { createRouter, createWebHistory } from "vue-router";
import Registration from "./pages/Registration.vue";

const router = createRouter({
    history:createWebHistory(),

    routes:[{path:'/registration', component:Registration}]
})

export default router