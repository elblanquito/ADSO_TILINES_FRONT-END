<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-secondary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    Title
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer class="bg-secondary" v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
            <div class="q-pa-md q-gutter">
                <div class="q-pa-md q-gutter-sm" style="margin-top: 3em">
                    <q-avatar color="white" text-color="primary" icon="face" style="font-size: 7em" />
                </div>
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn no-caps align="between" color="accent" text-color="primary" icon-right=">" style="width: 95%">Cerrar Sesión </q-btn>
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn no-caps align="between" color="accent" text-color="primary" icon-right="navigation" style="width: 95%">Cambiar nombre </q-btn>
                </router-link>
                <q-linear-progress :value="progress" class="q-mt-md" color="primary" />
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn no-caps align="between" color="accent" text-color="primary" icon-right="send" label="Presupuesto" style="width: 95%" />
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn no-caps align="between" color="accent" text-color="primary" icon-right="send" label="Inventarios" style="width: 95%" />
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn no-caps align="between" color="accent" text-color="primary" icon-right="send" label="Pedidos" style="width: 95%" />
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn no-caps align="between" color="accent" text-color="primary" icon-right="send" label="Informes del sistema" style="width: 95%" />
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn  no-caps align="between" color="accent" text-color="primary" icon-right="send" label="Utilidades del sistema" style="width: 95%" />
                </router-link>
                <q-linear-progress :value="progress" class="q-mt-md" />

            </div>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>
<script>
import { ref } from 'vue'

export default {
    setup() {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
}
</script>

<style scoped>

</style>
