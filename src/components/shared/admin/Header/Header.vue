<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const drawer = ref(null);


const bellShake = ref(false)

onMounted(() => {
    const interval = setInterval(() => {
        bellShake.value = true
        setTimeout(() => {
            bellShake.value = false
        }, 1000)
    }, 5000)

    onBeforeUnmount(() => {
        clearInterval(interval)
    })
})
</script>

<template>
    <v-system-bar class="header-top">
        <div class="header-left">
            <a href="#" class="header-logo">Admin page</a>
        </div>
        <div class="header-right">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <div class="top-right">
                <div class="search-field">
                    <input type="text" class="search-text" placeholder="Tìm kiếm..." />
                    <v-icon class="search-icon">mdi-magnify</v-icon>
                </div>

                <div class="mx-3">
                    <v-icon :class="{ 'shake': bellShake }">mdi-bell-outline</v-icon>
                </div>

                <v-menu min-width="200px" rounded>
                    <template v-slot:activator="{ props }">
                        <v-avatar icon v-bind="props" class="avatar-bg mx-3" color="brown" size="small">
                            <v-icon>mdi-account</v-icon>
                        </v-avatar>
                    </template>
                    <v-card>
                        <v-card-text>
                            <div class="card-avatar">
                                <v-btn class="custom-btn" variant="text"> Trang cá nhân</v-btn>
                                <v-btn class="custom-btn" variant="text"> Đăng xuất </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-menu>
            </div>
        </div>
    </v-system-bar>
</template>

<style lang="css" scoped>
.header-top {
    background-color: var(--primary);
    height: 51px !important;
    color: var(--white)
}

.header-logo {
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    color: white;
    text-align: center;
    margin: 0;
    padding: 10px;
    text-decoration: none
}

.header-left {
    width: 18%;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid var(--white);
}

.header-right {
    width: 82%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-right .v-btn {
    background-color: var(--primary);
    height: 100%;
    color: var(--white);
}

.top-right {
    display: flex;
    align-items: center;
}

.avatar-bg {
    background-color: var(--primary) !important;
}

.custom-btn {
    width: 150px;
    transition: background-color 0.3s, color 0.3s;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--primary);
    border-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-btn:hover {
    background-color: var(--primary);
    color: var(--white);
}

.search-field {
    background-color: var(--white);
    border: 1px solid var(--gray);
    border-radius: 4px;
    font-family: Arial;
    font-size: 13px;
    height: 33px;
    width: 198px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 20px;
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

/* bell */
.shake {
    animation: shake 1s infinite;
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-10px);
    }

    50% {
        transform: translateX(10px);
    }

    75% {
        transform: translateX(-10px);
    }
}

/* end header top */
</style>
