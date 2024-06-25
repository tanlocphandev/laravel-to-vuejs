<script setup>
import { getCurrentTime } from "@/utils";
import { onBeforeUnmount, onMounted, ref } from "vue";
import Avatar from "@/components/ui/Avatar";
const currentTime = ref("");

function updateTime() {
    currentTime.value = getCurrentTime();
}

let timer;

onMounted(() => {
    updateTime();
    timer = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
    clearInterval(timer);
});

const categories = [

    {
        name: "Giới Thiệu",
        to: "/about",

    },
    {
        name: "Thông báo",
        to: "#",
        children: [
            {
                name: "Trường",
                to: "/news",
            }

        ]
    },
    {
        name: "Tin Tức",
        to: "#",
        children: [
            {
                name: "Trường",
                to: "/news",
            },
            {
                name: "Chung ",
                to: "/news",
            }

        ]
    },
    {
        name: "Tuyển sinh",
        to: "#",
        children: [
            {
                name: "Sau đại học",
                to: "/news",
            }

        ]
    },
    {
        name: "Chương trình học tập",
        to: "#",
        children: [
            {
                name: "Sau đại học",
                to: "/news",
            }

        ]
    },
    {
        name: "Danh sách",
        to: "/",

    },
    {
        name: "Tài liệu tham khảo",
        to: "#",
        children: [
            {
                name: "Tham khảo chung",
                to: "/",
            }

        ]
    },
    {
        name: "Liên hệ chúng tôi",
        to: "",

    },

];
</script>

<template>
    <v-container class="pa-0 w-1200">
        <div class="header-container">
            <Avatar class="header-avatar" />
            <v-img cover="cover" src="assets/header-bg.jpg" class="header-image"></v-img>
        </div>
        <div class="nav-bar-container">
            <router-link to="/" class="nav-button">
                <v-icon class="home-icon">mdi-home</v-icon>
            </router-link>
            <v-menu open-on-hover v-for="category in   categories  " :key="category._id" link>
                <template v-slot:activator="{ props }">
                    <router-link v-bind="props" :to=category.to class="nav-button">

                        <v-list-item-title class="text-capitalize">
                            {{ category.name }}
                        </v-list-item-title>
                    </router-link>
                </template>

                <v-list v-if="category?.children && category?.children?.length > 0" class="list-cate">
                    <v-list-item v-for="  sub   in   category.children  " :key="sub._id" link class="list-sub">
                        <router-link :to=sub.to class="sub-button">
                            <v-list-item-title> {{ sub.name }} </v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div class="header-bottom w-1200 m-auto">
            <div>{{ currentTime }}</div>
            <div>
                <div class="search-field">
                    <input type="text" class="search-text" placeholder="Tìm kiếm..." />
                    <v-icon class="search-icon">mdi-magnify</v-icon>
                </div>
            </div>
        </div>


    </v-container>
</template>

<style lang="css" scoped>
.header-container {
    position: relative;
}

.container {
    position: unset;
}

.m-auto {
    margin: auto;
}

.nav-bar-container {
    width: 100%;
    background-color: var(--primary);
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.home-icon {
    color: var(--white);
}

.nav-button {
    color: var(--white);
    padding: 10px 18px;
    text-decoration: none;
}

.list-cate {
    min-width: 150px
}

.list-sub {
    padding: 0 !important;
}

.sub-button {
    color: var(--black);
    text-decoration: none;
}

.sub-button .v-list-item-title {
    border-bottom: 1px solid var(--primary);
    padding: 8px;
}

.sub-button .v-list-item-title:hover {
    color: var(--white);
    background-color: var(--primary);
}

.nav-button:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
}

.header-bottom {
    background-color: #eaeaea;
    border: 1px solid var(--gray);
    height: 52px;
    padding: 0 10px;
    color: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-field {
    background-color: var(--white);
    border: 1px solid var(--gray);
    border-radius: 4px;
    font-family: Arial;
    font-size: 13px;
    height: 33px;
    width: 241px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.search-text {
    width: 100%;
    padding-left: 15px;
    border: none;
    outline: none;
}

.search-icon {
    color: var(--white);
    width: 49px;
    height: 100%;
    background: var(--primary);
    border-radius: 0 4px 4px 0;
}
</style>
