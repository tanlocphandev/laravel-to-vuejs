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
</script>

<template>
    <v-container class="pa-0 w-1200">
        <div class="header-container">
            <Avatar class="header-avatar" />
            <v-img cover="cover" src="assets/header-bg.jpg" class="header-image"></v-img>
        </div>
        <div class="nav-bar-container">
            <router-link class="nav-button">
                <v-icon class="home-icon">mdi-home</v-icon></router-link
            >
            <router-link class="nav-button">Giới thiệu</router-link>
            <router-link class="nav-button">Thông báo</router-link>
            <router-link class="nav-button">Tin tức</router-link>
            <router-link class="nav-button">Tuyển sinh</router-link>
            <router-link class="nav-button">Chương trình học tập</router-link>
            <router-link class="nav-button">Danh sách</router-link>
            <router-link class="nav-button">Tài liệu tham khảo</router-link>
            <router-link class="nav-button">Liên hệ chúng tôi</router-link>
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
    color: white;
}

.nav-button {
    color: white;
    padding: 10px 22px;
    text-decoration: none;
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
