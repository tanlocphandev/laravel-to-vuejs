<script setup>
import Header from '@/components/shared/admin/Header';
import Navbar from '@/components/shared/admin/Navbar';

</script>

<template>
    <v-app>
        <Header />

        <Navbar />

        <v-main class="bg-gray">
            <v-container class="padding-0 mt-5">
                <router-view v-slot="{ Component }">
                    <component :is="Component"></component>
                </router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<style lang="css" scoped></style>