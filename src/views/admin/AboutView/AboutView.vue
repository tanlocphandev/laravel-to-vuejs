<script setup>
import CKEditor from "@/components/shared/admin/CKeditorCustom";
import MainTop from "@/components/shared/admin/MainTop";

</script>

<template>
    <MainTop title="Giới thiệu" sub="Thay đổi nội dung giới thiệu" icon="mdi-home" parent="Trang chủ" />
    <v-card class="card-about">
        <v-card-title>Chỉnh sửa nội dung</v-card-title>
        <CKEditor />
        <v-btn class="card-about-btn ma-5">Cập nhật</v-btn>
    </v-card>

</template>

<style lang="css" scoped>
.card-about {
    margin: 0 30px;
}

.v-card-title {
    font-size: 20px;
    font-weight: 700;
}

.card-about-btn {
    background-color: var(--primary);
    box-shadow: #0006 0px 4px 8px 0px;
    color: #fff;
    font-family: Lato;
    font-size: 14px;
    font-weight: 700;
    text-transform: initial;
}
</style>
