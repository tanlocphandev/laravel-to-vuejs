<script setup>
import NewItem from '@/components/shared/client/NewItem';

</script>

<template>

    <div class="main-content">
        <div class="text-title">
            <v-icon class="mr-2">mdi-format-list-bulleted</v-icon>
            <h1 class="">Home / Danh sách bài viết </h1>
        </div>

        <NewItem title="Thông báo Tuyển sinh Nghiên cứu sinh năm 2019 của Đại học Huế" description="Đại học Huế thông báo tuyển nghiên cứu sinh năm 2019 cho 46 chuyên ngành vào các
    trường đại học thành viên." imageUrl="assets/new/1556997044hinh1.jpg" date="2019-04-27" time="17:56:51" views="5"
            comments="0" />

        <NewItem title="Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế"
            description="Hòa chung không khí tuổi trẻ cả nước chào mừng 88 năm ngày Thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh, 44 năm giải phóng quê hương Thừa Thiên Huế và Tháng thanh niên"
            imageUrl="assets/new/1556363043tintuc2.jpg" date="2019-05-05" time="02:12:30" views="5" comments="1" />

        <NewItem title="203 tân Tiến sĩ, Thạc sĩ nhận bằng tốt nghiệp"
            description="Sáng 29/3/2019, Trường Đại học Sư phạm, Đại học Huế long trọng tổ chức Lễ tốt nghiệp và trao bằng Tiến sĩ, Thạc sĩ năm 2019."
            imageUrl="assets/new/1556363186tintuc3.jpg" date="2019-04-27" time="18:06:26" views="3" comments="1" />

        <NewItem title="Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế"
            description="1. NCS Trần Nam Sinh - CN: Đại số Và lý thuyết số Mã số: 62460104 Bảo vệ lúc ..... giờ....., ngày ..... tháng ...... năm 20"
            imageUrl="assets/new/1556997150hinh2.jpg" date="2019-05-05" time="18:02:32" views="1" comments="1" />

    </div>

</template>

<style lang="css" scoped>
.text-title {
    height: 49px;
    display: flex;
    align-items: center;
    padding: 0 18px;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 4px;
}

.text-title h1 {
    font-size: 18px;
    font-weight: lighter;
    text-transform: capitalize;
}
</style>
