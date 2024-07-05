<script setup>
import MainTop from "@/components/shared/admin/MainTop";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
    useGetNewsTypes,
    useMutationDeleteNewsTypes,
} from "@/hooks/newsTypes.hook";
import DeleteConfirmDialog from "@/components/shared/dialog/DeleteConfirmDialog.vue";
import { useQueryClient } from "@tanstack/vue-query";
import { getQueryKeys } from "@/utils";
import queryKeys from "@/constants/queryKey.constant";

const router = useRouter();
const route = useRoute();
const page = computed(() => parseInt(route.query?.page) || 1);
const LIMIT = 10;
const openDialog = ref(false);
const selectedDelete = ref(null);

const options = computed(() => {
    return {
        page,
        limit: LIMIT,
        include_category: "true",
    };
});

const { data, isLoading } = useGetNewsTypes(options.value);
const mutationDelete = useMutationDeleteNewsTypes();
const queryClient = useQueryClient();

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

const handleClose = (value) => {
    openDialog.value = value;
    selectedDelete.value = null;
};

const handleConfirm = (callback) => {
    mutationDelete.mutate(selectedDelete.value.id, {
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeys({
                    key: queryKeys.newsTypes.GET_ALL,
                    ...options.value,
                }),
                exact: true,
            });
            handleClose();
            callback();
        },
    });
};

const deleteItem = (item) => {
    openDialog.value = true;
    selectedDelete.value = item;
};
</script>

<template>
    <MainTop
        title="Loại tin"
        sub="Quản lí danh mục loại tin"
        icon="mdi-pencil-box-outline"
        parent="Tin tức"
    />

    <delete-confirm-dialog
        :open="openDialog"
        @update:open="handleClose"
        @confirm="handleConfirm"
    />

    <v-card class="mx-30 pa-30 cate-card">
        <div class="d-flex justify-space-between">
            <v-card-title class="mb-5">Danh sách loại tin</v-card-title>
            <router-link
                :to="{ name: 'category_create' }"
                class="text-decoration-none text-white"
            >
                <v-btn
                    prepend-icon="mdi-plus-circle-outline"
                    class="action-icon-btn"
                    color="success"
                >
                    Thêm mới
                </v-btn>
            </router-link>
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
                <router-link
                    :to="{ name: 'category_edit', params: { id: item.id } }"
                >
                    <v-icon class="me-2" size="small" color="green">
                        mdi-pencil
                    </v-icon>
                </router-link>

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