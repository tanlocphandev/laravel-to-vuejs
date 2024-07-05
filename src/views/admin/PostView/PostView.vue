
<script setup>
import MainTop from "@/components/shared/admin/MainTop";
import Search from "@/components/ui/Search";
import {
    queryKeysGetAllNews,
    useGetNews,
    useMutationEditPost,
} from "@/hooks/news.hook";
import { useQueryClient } from "@tanstack/vue-query";
import { computed, ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue-sonner";

const isChecked = ref(false);

const router = useRouter();
const route = useRoute();
const page = computed(() => parseInt(route.query?.page) || 1);
const mutationEdit = useMutationEditPost();
const popular = ref(null);
const queryClient = useQueryClient();
const searQuery = computed(() => {
    return route.query?.q || "";
});

const isSearching = computed(() => {
    return searQuery.value.length > 0;
});

const options = computed(() => {
    return {
        page,
        limit: 10,
        ...(isSearching
            ? {
                  "noidung[like]": searQuery,
              }
            : {}),
    };
});

const { data, isLoading } = useGetNews(options.value);

watchEffect(() => {
    if (data.value?.metadata) {
        const { metadata } = data.value;

        const _popular = {};

        metadata.forEach((item) => {
            _popular[item.id] = Boolean(item.noibat);
        });

        popular.value = _popular;
    }
});

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
    {
        title: "Nổi bật",
        align: "start",
        key: "noibat",
        sortable: false,
    },
    { title: "Lượt xem", align: "start", key: "luotxem" },
    { title: "Action", key: "actions", sortable: false },
];

const onchangePage = (currentPage) => {
    router.push({
        path: route.path,
        query: { ...route.query, page: currentPage },
    });
};

const handleChangeValue = (item) => {
    const newPopular = !item.noibat;

    const updated = {
        id: item.id,
        noibat: newPopular,
    };

    mutationEdit.mutate(updated, {
        onSuccess: () => {
            popular.value[item.id] = newPopular;

            toast.success("Đã thay đổi nổi bật thành công.");

            queryClient.invalidateQueries({
                queryKey: queryKeysGetAllNews(options.value),
                exact: true,
            });
        },
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
                placeholder="Tìm kiếm bài viết..."
                width="300px"
                height="45px"
                widthIcon="54px"
            />

            <router-link
                class="text-decoration-none text-white"
                :to="{ name: 'post_create' }"
            >
                <v-btn
                    color="success"
                    prepend-icon="mdi-plus-circle-outline"
                    class="action-icon-btn"
                    @click="addNew"
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
                <v-img :src="value"> </v-img>
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

            <template v-slot:item.noibat="{ item }">
                <v-switch
                    :loading="mutationEdit.isPending.value"
                    :disabled="mutationEdit.isPending.value"
                    v-model="popular[item.id]"
                    inset
                    @update:modelValue="handleChangeValue(item)"
                    indeterminate
                    color="primary"
                ></v-switch>
            </template>

            <template v-slot:item.actions="{ item }">
                <router-link
                    :to="{ name: 'post_edit', params: { id: item.id } }"
                >
                    <v-icon
                        class="me-2"
                        size="small"
                        color="green"
                        @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                </router-link>
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