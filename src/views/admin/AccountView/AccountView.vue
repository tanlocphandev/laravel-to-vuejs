<script setup>
import { computed, ref } from "vue";
import MainTop from "@/components/shared/admin/MainTop";
import Search from "@/components/ui/Search";
import { useGetUsers } from "@/hooks/user.hook";
import { useRoute } from "vue-router";
import { fDate } from "@/utils";

const route = useRoute();

const page = computed(() => parseInt(route.query?.page) || 1);

const options = computed(() => {
    return {
        page,
        limit: 10,
    };
});

const { data, isLoading } = useGetUsers(options.value);

const headers = [
    { title: "ID", align: "start", key: "id" },
    { title: "Tài khoản", align: "start", key: "name" },
    { title: "Email", align: "start", key: "email" },
    {
        title: "Ngày cập nhật",
        align: "start",
        key: "updated_at",
        value: (item) => fDate(item.updated_at, "DD-MM-YYYY HH:mm:ss"),
    },
    { title: "Quyền", align: "start", key: "permission" },
    { title: "Action", key: "actions", sortable: false },
];

const getColor = (role) => {
    if (role === "Admin") return "red";
    else if (role === "SinhVien") return "orange";
    else return "green";
};

const editItem = (item) => {
    console.log(`item editItem:::`, item);
};

const deleteItem = (item) => {
    console.log(`item deleteItem:::`, item);
};
</script>

<template>
    <MainTop
        title="Danh sách tài khoản"
        sub="Quản lí tài khoản"
        icon="mdi-pencil-box-outline"
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
                >Thêm mới</v-btn
            >
        </div>

        <v-data-table
            :headers="headers"
            :items="data?.metadata"
            :loading="isLoading"
            density="compact"
            item-key="name"
        >
            <template v-slot:loading>
                <v-skeleton-loader type="table-row@5"></v-skeleton-loader>
            </template>

            <template v-slot:item.permission="{ value }">
                <v-chip :color="getColor(value)">
                    {{ value }}
                </v-chip>
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
    </v-card>
</template>

<style lang="css" scoped>
.action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-thead tr th {
    font-size: 1.2em;
    font-weight: bold;
    border-top: 2px solid #000;
}

thead.table-header {
    font-size: 14px !important;
}
</style>