<script setup>
import { ref } from "vue";
import { ROUTE_PATHS } from "@/constants/route.constant";

const drawer = ref(null);

const links = [
    ["mdi-home", "Dashboard", ROUTE_PATHS.AdminHome],
    ["mdi-account", "Tài khoản", ROUTE_PATHS.AdminAccount(true)],
    ["mdi-email", "Hộp thư", ROUTE_PATHS.AdminMessage(true)],
]
    ;

const home = [
    ["mdi-checkbox-blank-circle-outline", "Giới thiệu", ROUTE_PATHS.AdminAbout(true)],
    ["mdi-checkbox-blank-circle-outline", "Hiển thị", ROUTE_PATHS.AdminDisplay(true)],
];
const news = [
    ["mdi-checkbox-blank-circle-outline", "Loại tin", ROUTE_PATHS.AdminCategory(true)],
    ["mdi-checkbox-blank-circle-outline", "Bài viết", ROUTE_PATHS.AdminPost(true)],
];
</script>

<template>
    <v-navigation-drawer v-model="drawer" class="mt-5 navigation">
        <v-sheet class="nav-content pa-4">
            <v-avatar size="64" class="mr-4">
                <v-img src="/assets/avatar.jpg"></v-img>
            </v-avatar>

            <div>
                <div>Huỳnh Văn Thùy</div>
                <div>Admin</div>
            </div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
            <v-list-item v-for="[icon, text, to] in links" :key="icon" link :to="to">
                <template v-slot:prepend>
                    <v-icon>{{ icon }}</v-icon>
                </template>
                <v-list-item-title> {{ text }} </v-list-item-title>
            </v-list-item>

            <v-list-group value="home">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <template v-slot:prepend>
                            <v-icon icon="mdi-laptop"></v-icon>
                        </template>
                        <v-list-item-title>Trang chủ</v-list-item-title>
                    </v-list-item>
                </template>

                <v-list-item class="fs-14" v-for="([icon, title, to], i) in home" :key="i" :value="title" :to="to"
                    :prepend-icon="icon" :title="title">
                </v-list-item>
            </v-list-group>

            <v-list-group value="news">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <template v-slot:prepend>
                            <v-icon icon="mdi-pencil-box-outline"></v-icon>
                        </template>
                        <v-list-item-title>Tin tức</v-list-item-title>
                    </v-list-item>
                </template>

                <v-list-item class="fs-14" v-for="([icon, title, to], i) in news" :key="i" :value="title" :to="to"
                    :prepend-icon="icon" :title="title">
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<style lang="css" scoped>
.navigation {
    background-color: var(--primary);
    color: var(--white);
}

.nav-content {
    display: flex;
    align-items: center;
    background-color: var(--primary);
    color: var(--white)
}

.v-list-group__items .v-list-item {
    padding: 0 16px !important;
}


.v-list-item-title {
    font-size: 14px !important;
}
</style>
