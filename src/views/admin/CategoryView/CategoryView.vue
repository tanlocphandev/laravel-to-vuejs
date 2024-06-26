<script setup>
import MainTop from '@/components/shared/admin/MainTop';

const desserts = [
    {
        name: 'Chung',
        cate: "Thông báo",
    },
    {
        name: 'Trường',
        cate: "Thông báo",
    },
    {
        name: 'Chung',
        cate: "Tin tức",
    },
    {
        name: 'Trường',
        cate: "Tin tức",
    },

]
</script>

<template>
    <MainTop title="Loại tin" sub="Quản lí danh mục loại tin" icon="mdi-pencil-box-outline" parent="Tin tức" />

    <v-card class="mx-30 pa-30 cate-card">
        <div class="d-flex justify-space-between">
            <v-card-title class="mb-5">Danh sách loại tin</v-card-title>
            <v-btn prepend-icon="mdi-plus-circle-outline" class="action-icon-btn" color="success">Thêm mới</v-btn>
        </div>

        <v-table class="cate-table">
            <thead class="table-header">
                <tr>
                    <th class="text-left" style="width: 10%;">
                        Mã
                    </th>
                    <th class=" text-left" style="width: 30%;">
                        Tên loại tin
                    </th>
                    <th class=" text-left" style="width: 30%;">
                        Thuộc thể loại
                    </th>
                    <th class="text-center" style="width: 20%;">
                        Hành động
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.cate }}</td>
                    <td>
                        <v-btn prepend-icon="mdi-pencil-outline" color="primary"
                            class="mr-5 action-icon-btn">Sửa</v-btn>
                        <v-btn prepend-icon="mdi-delete-outline" class="action-icon-btn">Xóa</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<style lang="css" scoped>
thead.table-header {
    font-size: 18px !important;
}
</style>