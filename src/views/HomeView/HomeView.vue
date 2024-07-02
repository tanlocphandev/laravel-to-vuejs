<script setup>
import PostCard from "@/components/shared/client/PostCard/PostCard.vue";
import CardItem from "@/components/shared/client/CardItem/CardItem.vue";
import useCategory from "@/hooks/useCategory";
import { fDate } from "@/utils";

const { data } = useCategory({ include_category: "true", include_news: "true" });

const cardItems1 = ["Thông báo Tuyển sinh Nghiên cứu sinh năm 2019 của Đại học Huế"];
const cardItems2 = [
    "Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế",
    "“Làm sạch biển và xây dựng môi trường xanh - sạch - sáng”",
    "Đội tuyển Olympic Vật lý xuất sắc đạt 2 Giải Nhất và 5 Giải Ba Cuộc thi Olympic Vật lý sinh viên toàn quốc",
];
const cardItems3 = ["203 tân Tiến sĩ, Thạc sĩ nhận bằng tốt nghiệp"];
const cardItems4 = [
    "Thông tin luận án tiến sĩ (Trần Nam Sinh)",
    "Thông báo Bảo vệ luận án tiến sĩ cấp Đại học Huế (Hoàng Hữu Tình)",
    "Thông báo Bảo vệ luận án tiến sĩ cấp cơ sở (Huỳnh Thị Minh Thành)",
];
</script>

<template>
    <PostCard />

    <CardItem
        v-for="cardItem in data?.metadata"
        :key="cardItem.id"
        :links="cardItems1"
        :titleMain="'huhu'"
        :news="cardItem.tintuc"
        :description="cardItem?.tintuc[0]?.mota"
        :title="cardItem?.tintuc[0]?.tieude"
        :imageUrl="cardItem?.tintuc[0]?.hinhdaidien"
        :datetime="fDate(cardItem?.tintuc[0]?.created_at, 'DD/MM/YYYY HH:mm:ss')"
        views="5"
        comments="0"
    />

    <!-- <CardItem
        :links="cardItems2"
        titleMain="Tin tức"
        title="Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế"
        description="Hòa chung không khí tuổi trẻ cả nước chào mừng 88 năm ngày Thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh, 44 năm giải phóng quê hương Thừa Thiên Huế và Tháng thanh niên"
        imageUrl="assets/home/1556362611TinTuc1.jpg"
        date="2019-05-05"
        time="02:12:30"
        views="5"
        comments="1"
    />
    <CardItem
        :links="cardItems3"
        titleMain="Tuyển sinh"
        title="203 tân Tiến sĩ, Thạc sĩ nhận bằng tốt nghiệp"
        description="Sáng 29/3/2019, Trường Đại học Sư phạm, Đại học Huế long trọng tổ chức Lễ tốt nghiệp và trao bằng Tiến sĩ, Thạc sĩ năm 2019."
        imageUrl="assets/home/1556362611TinTuc1.jpg"
        date="2019-04-27"
        time="18:06:26"
        views="3"
        comments="1"
    />
    <CardItem
        :links="cardItems4"
        titleMain="Chương trình học tập"
        title="Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế"
        description="1. NCS Trần Nam Sinh - CN: Đại số Và lý thuyết số Mã số: 62460104 Bảo vệ lúc ..... giờ....., ngày ..... tháng ...... năm 20"
        imageUrl="assets/home/1556362611TinTuc1.jpg"
        date="2019-05-05"
        time="18:02:32"
        views="1"
        comments="1"
    /> -->
</template>

<style lang="css" scoped></style>
