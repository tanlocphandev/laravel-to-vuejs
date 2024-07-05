<script setup>
import MainTop from "@/components/shared/admin/MainTop";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGetNewsTypes } from "@/hooks/newsTypes.hook";

const router = useRouter();
const route = useRoute();
const page = computed(() => parseInt(route.query?.page) || 1);
const LIMIT = 10;

const options = computed(() => {
    return {
        page,
        limit: LIMIT,
        include_category: "true",
    };
});

const { data, isLoading } = useGetNewsTypes(options.value);

const desserts = [
    {
        name: "Chung",
        cate: "Thông báo",
    },
    {
        name: "Trường",
        cate: "Thông báo",
    },
    {
        name: "Chung",
        cate: "Tin tức",
    },
    {
        name: "Trường",
        cate: "Tin tức",
    },
];

const headers = [
    { title: "ID", align: "start", key: "id", maxWidth: 50 },
    {
        title: "Tên loại tin",
        align: "start",
        key: "tenloaitin",
        maxWidth: 200,
    },
    {
        title: "Thuộc thể loại",
        align: "start",
        key: "theloai",
        maxWidth: 200,
        value: (value) => value.theloai?.tentheloai,
    },
    { title: "Action", key: "actions", sortable: false },
];

const onchangePage = (currentPage) => {
    router.push({
        path: route.path,
        query: { ...route.query, page: currentPage },
    });
};
</script>

<template>
    <MainTop
        title="Loại tin"
        sub="Quản lí danh mục loại tin"
        icon="mdi-pencil-box-outline"
        parent="Tin tức"
    />

    <v-card class="mx-30 pa-30 cate-card">
        <div class="d-flex justify-space-between">
            <v-card-title class="mb-5">Danh sách loại tin</v-card-title>
            <v-btn
                prepend-icon="mdi-plus-circle-outline"
                class="action-icon-btn"
                color="success"
                >Thêm mới</v-btn
            >
        </div>

        <v-data-table
            :headers="headers"
            :items="data?.metadata"
            :loading="isLoading"
            :hide-default-footer="true"
            item-key="name"
            hover
        >
            <template v-slot:loading>
                <v-skeleton-loader type="table-row@5"></v-skeleton-loader>
            </template>

            <template v-slot:item.hinhdaidien="{ value }">
                <div class="post-img">
                    <v-img :src="value"> </v-img>
                </div>
            </template>

            <template v-slot:item.mota="{ value }">
                <div class="post-des">
                    <p>{{ value }}</p>
                </div>
            </template>

            <template v-slot:item.tieude="{ value }">
                <div class="post-des">
                    <p>{{ value }}</p>
                </div>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-icon
                    class="me-2"
                    size="small"
                    color="green"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>

                <v-icon size="small" color="red" @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>

        <v-pagination
            size="small"
            class="mt-4"
            :length="data?.options?.total_pages"
            v-model="page"
            @update:modelValue="onchangePage"
            :total-visible="5"
        ></v-pagination>
    </v-card>
</template>

<style lang="css" scoped>
thead.table-header {
    font-size: 18px !important;
}
</style>