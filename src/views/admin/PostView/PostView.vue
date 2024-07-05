
<script setup>
import MainTop from "@/components/shared/admin/MainTop";
import Search from "@/components/ui/Search";
import { useGetNews } from "@/hooks/news.hook";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const isChecked = ref(false);

const router = useRouter();
const route = useRoute();
const page = computed(() => parseInt(route.query?.page) || 1);

const options = computed(() => {
    return {
        page,
        limit: 10,
    };
});

const { data, isLoading } = useGetNews(options.value);

const headers = [
    { title: "ID", align: "start", key: "id", maxWidth: 50 },
    {
        title: "Tiêu đề",
        align: "start",
        key: "tieude",
        maxWidth: 200,
    },
    {
        title: "Mô tả",
        align: "start",
        key: "mota",
        maxWidth: 200,
    },
    { title: "Hình ảnh", align: "start", key: "hinhdaidien", sortable: false },
    { title: "Nổi bật", align: "start", key: "noibat", sortable: false },
    { title: "Lượt xem", align: "start", key: "luotxem" },
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
        title="Danh sách bài viết"
        sub="Quản lí bài viết"
        icon="mdi-pencil-box-outline"
        parent="Tin tức"
    />

    <v-card class="mx-30 pa-30">
        <div class="d-flex justify-space-between mb-5">
            <Search
                placeholder="Tìm kiếm tên tài khoản..."
                width="300px"
                height="45px"
                widthIcon="54px"
            />
            <v-btn
                color="success"
                prepend-icon="mdi-plus-circle-outline"
                class="action-icon-btn"
                @click="addNew"
            >
                Thêm mới
            </v-btn>
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
.custom-thead tr th {
    font-size: 1.2em;
    font-weight: bold;
    border-top: 2px solid #000;
}

thead.table-header {
    font-size: 18px !important;
}

.post-des {
    height: 150px;
    overflow: hidden;
}

.post-des p {
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
    line-clamp: 5;
    -webkit-line-clamp: 5;
    height: 100px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.post-img {
    width: 120px;
    height: 90px;
    object-fit: cover;
    border: 1px solid var(--gray);
    padding: 5px;
    border-radius: 4px;
}
</style>