<script setup></script>

<template>
    <div class="main-content">
        <div class="text-title">
            <h1>Tin tức mới nhất</h1>
        </div>
        <div class="text-content">
            <div class="content-img">
                <v-img src="assets/home/1556362611TinTuc1.jpg" class="image"></v-img>
            </div>
            <div class="description">
                <h1>Hội Thi " Tìm Hiểu Chương Trình Giáo Dục"</h1>
                <div class="description-date">
                    <v-icon class="mr-1"> mdi-calendar</v-icon>
                    <p class="mr-1">2019-04-27</p>
                    <p>17:56:51</p>
                </div>
                <p class="mt-1">
                    Chương trình Giáo dục phổ thông tổng thể (2017) và Chương trình giáo dục phổ
                    thông các môn học (Ban hành kèm theo Thông tư số 32/2018/TT-BGDĐT ngày 26 tháng
                    12 năm 2018 của
                </p>
                <div class="description-icon">
                    <div>
                        <v-icon class="mr-1">mdi-eye</v-icon>
                        <p>: 2</p>
                    </div>
                    <div>
                        <v-icon class="mr-1">mdi-comment</v-icon>
                        <p>: 0 bình luận</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.main-content {
    border: 1px solid var(--light-gray);
}
.text-title {
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 18px;
    background-color: var(--light-gray);
    color: var(--black);
}
.text-title h1 {
    font-size: 18px;
    font-weight: lighter;
    text-transform: capitalize;
}

.text-content {
    display: flex;
    align-items: center;
}

.content-img .v-img {
    width: 450px;
    height: 300px;
    border-radius: 4px;
    margin-left: 18px;
}

.description {
    padding: 14px 18px;
}

.description h1 {
    font-size: 18px;
    font-weight: 700;
    color: var(--primary);
    text-shadow: var(--primary) 2px 2px 10px;
    text-transform: capitalize;
}

.description h1:hover {
    text-shadow: #3a33be 2px 2px 10px;
    cursor: pointer;
}

.description p {
    font-size: 16px;
    font-weight: lighter;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 7;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.description-date,
.description-icon {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 4px;
    color: #777373;
}

.description-icon div {
    display: flex;
    align-items: center;
    margin-right: 15px;
}
</style>
