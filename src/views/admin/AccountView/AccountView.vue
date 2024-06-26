<script setup>
import { ref } from 'vue';
import MainTop from '@/components/shared/admin/MainTop';
import Search from '@/components/ui/Search';

const users = ref([
    {
        id: 1,
        name: 'Nguyen Van A',
        email: 'xGqJt@example.com',
        created_at: '2022-01-01 00:00:00',
        role: 'Admin'
    },
    {
        id: 2,
        name: 'Nguyen Van B',
        email: 'xGqJt@example.com',
        created_at: '2022-01-01 00:00:00',
        role: 'Student'
    },
    {
        id: 3,
        name: 'Nguyen Van C',
        email: 'xGqJt@example.com',
        created_at: '2022-01-01 00:00:00',
        role: 'Teacher'
    },
    {
        id: 4,
        name: 'Nguyen Van D',
        email: 'xGqJt@example.com',
        created_at: '2022-01-01 00:00:00',
        role: 'User'
    }
]);

</script>

<template>
    <MainTop title="Danh sách tài khoản" sub="Quản lí tài khoản" icon="mdi-pencil-box-outline" />

    <v-card class="mx-30 pa-30">
        <div class="d-flex justify-space-between mb-5">
            <Search placeholder="Tìm kiếm tên tài khoản..." width="300px" height="45px" widthIcon="54px" />
            <v-btn color="success" prepend-icon="mdi-plus-circle-outline" class="action-icon-btn" @click="addNew">Thêm
                mới</v-btn>
        </div>

        <v-data-table :headers="headers" :items="desserts" item-key="name">

            <thead class="table-header">
                <tr>
                    <th class="text-left" style="width: 10%;">
                        STT
                    </th>
                    <th class=" text-left" style="width: 20%;">
                        Tài khoản
                    </th>
                    <th class=" text-left" style="width: 15%;">
                        Email
                    </th>
                    <th class=" text-left" style="width: 15%;">
                        Ngày cập nhật
                    </th>
                    <th class=" text-left" style="width: 10%;">
                        Quyền
                    </th>
                    <th class="text-center" style="width: 25%;">
                        Hành động
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in users" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.created_at }}</td>
                    <td>{{ item.role }}</td>
                    <td class="action-btn">
                        <v-btn class="action-icon-btn mr-2" color="primary">
                            <v-icon class="mr-2">mdi-pencil-outline</v-icon>
                            Sửa
                        </v-btn>
                        <v-btn class="action-icon-btn ">
                            <v-icon class="mr-2">mdi-delete-outline</v-icon>
                            Xóa
                        </v-btn>
                    </td>
                </tr>
            </tbody>
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
    font-size: 18px !important;
}
</style>