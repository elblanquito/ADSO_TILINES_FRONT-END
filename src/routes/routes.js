import login from '../components/login.vue'
import home from '../components/home.vue'

import buses from '../components/buses.vue'
import rutas from '../components/rutas.vue'
import conductores from '../components/conductores.vue'
import usuarios from '../components/usuarios.vue'

import {createRouter, createWebHashHistory} from 'vue-router'
import { Quasar}from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const routes =[
    {path: '/', component:login},
    {path: '/home', component: home, children:[
        {path: '/buses', component:buses},
        {path: '/rutas', component:rutas},
        {path: '/conductores', component:conductores},
        {path: '/usuarios', component:usuarios}
    ]}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})