<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white">
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

        <q-drawer color="secondary" v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
            <div class="q-pa-md q-gutter">
                <div class="q-pa-md q-gutter-sm">
                    <q-avatar color="orange-2" text-color="white" icon="face" style="font-size: 6em" />
                </div>
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn no-caps align="left" color="secondary" icon-right="send" style="width: 95%">Cerrar Sesión </q-btn>
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 1.5em">
                    <q-btn align="left" color="secondary" icon-right="send" label="CAMBIAR NOMBRE" style="width: 95%" />
                </router-link>
                <q-linear-progress :value="progress" class="q-mt-md" />
                <router-link to="/home" class="opcioncont" style="font-size: 2em">
                    <q-btn align="left" color="secondary" icon-right="send" label="Presupuesto" style="width: 95%" />
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 1.5em">
                    <q-btn align="left" color="secondary" icon-right="send" label="Inventarios" style="width: 95%" />
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 1.5em">
                    <q-btn align="left" color="secondary" icon-right="send" label="Pedidos" style="width: 95%" />
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 1.5em">
                    <q-btn align="left" color="secondary" icon-right="send" label="Informes del sistema" style="width: 95%" />
                </router-link>
                <router-link to="/home" class="opcioncont" style="font-size: 1.5em">
                    <q-btn align="left" color="secondary" icon-right="send" label="Utilidades del sistema" style="width: 95%" />
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
