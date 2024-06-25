<script setup>
import MainTop from "@/components/shared/admin/MainTop";

</script>

<template>
    <MainTop title="Hiển thị" sub="Quản lí trình bày - hiển thị nội dung trang chủ" icon="mdi-pencil-box-outline"
        parent="Trang chủ" />
    <v-card class="card-display mx-30">
        <v-row>
            <v-col>
                <v-card-title>Danh mục tin tức hiển thị</v-card-title>
                <p class="text-content"></p>
            </v-col>
            <v-col>
                <v-card-title>Cập nhật thông báo</v-card-title>
                <p class="text-content"></p>
            </v-col>
        </v-row>
    </v-card>

</template>

<style lang="css" scoped></style>
