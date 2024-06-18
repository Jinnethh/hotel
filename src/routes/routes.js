import bienvenida from "../components/bienvenida.vue";
import habitaciones from "../components/habitaciones.vue";
import contacto from "../components/contacto.vue";
import deportesextremos from "../components/deportesextremos.vue";
import servicios from "../components/servicios.vue";
import {createRouter,createWebHashHistory} from "vue-router"

const routes=[
    {path:"/",component:bienvenida},
    {path:"/habitaciones",component:habitaciones},
    {path:"/contacto",component:contacto},
    {path:"/deportesextremos",component:deportesextremos},
    {path:"/servicios",component:servicios},
    
]

export const router = createRouter({
history:createWebHashHistory(),
routes
})
