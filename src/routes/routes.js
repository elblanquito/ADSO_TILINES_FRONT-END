import login from '../components/login.vue'
import home from '../components/home.vue'
import presupuesto from '../components/presupuesto.vue'
import Pedidos from '../components/Pedidos.vue'
import inventario from '../components/inventario.vue'
import informes_sistema from '../components/informes_sistema.vue'
import utilidades_sistema from '../components/utilidades_sistema.vue'

import {createRouter, createWebHashHistory} from 'vue-router'

const routes =[
    {path: '/', component:login},
    {path: '/home', component: home, children:[
        {path: '/presupuesto', component:presupuesto},
        {path: '/inventario', component:inventario},
        {path: '/Pedidos', component:Pedidos},
        {path: '/informes_sistema', component:informes_sistema},
        {path: '/utilidades_sistema', component:utilidades_sistema}
    ]}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})