<script setup>
const news = [
    [
        "assets/new/1556363043tintuc2.jpg",
        "Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế",
    ],
    [
        "assets/new/1556363186tintuc3.jpg",
        "Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế",
    ],
    [
        "assets/new/1556363474avatar.jpg",
        "Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế",
    ],
    [
        "assets/new/1556997044hinh1.jpg",
        "Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế",
    ],
    [
        "assets/new/1556997150hinh2.jpg",
        "Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế",
    ],
];
</script>

<template>
    <div>
        <div class="text-center text-title">Tin tức nổi bật</div>
        <div class="content-nav">
            <div class="content-nav-list">
                <!-- Duplicate the news items to create a seamless scroll effect -->
                <div class="content-nav-item" v-for="(item, index) in news" :key="index">
                    <div class="content-nav-img">
                        <v-img :src="item[0]" class="image" aspect-ratio="16/9"></v-img>
                    </div>
                    <div class="content-nav-title font-weight-bold text-xs">{{ item[1] }}</div>
                </div>
                <div class="content-nav-item" v-for="(item, index) in news" :key="'dup' + index">
                    <div class="content-nav-img">
                        <v-img :src="item[0]" class="image" aspect-ratio="16/9"></v-img>
                    </div>
                    <div class="content-nav-title font-weight-bold text-xs">{{ item[1] }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
/* Content */
.content-nav {
    border: 1px solid var(--primary);
    margin-bottom: 50px;

    overflow: hidden;
}

.text-title {
    padding: 9.5px 0;
    background-color: var(--primary);
    color: var(--white);
    font-size: 16px;
    border-radius: 4px 4px 0 0;
}

.content-nav-list {
    color: var(--black);
    padding: 0;
    border-radius: 4px;
    height: 80vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    animation: scroll 20s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(-100%);
    }
}

.content-nav-item {
    display: flex;
    align-items: center;
    padding: 15px;
}

.content-nav-img {
    width: 79px;
    height: 61px;
    overflow: hidden;
    border: 1px solid var(--primary);
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-nav-title {
    width: 116px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 25px;
    -webkit-line-clamp: 3;
    height: 75px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
</style>
