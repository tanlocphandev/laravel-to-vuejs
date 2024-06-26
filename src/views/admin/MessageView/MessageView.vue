<script setup>
import MainTop from '@/components/shared/admin/MainTop';

const links = [
    ["mdi-email-outline", "Thư thường", "#", 1],
    ["mdi-eye-off", "Ẩn danh", "#", 0],
    ["mdi-file-document", "Tất cả", "#", 1],
]

const message = [
    {
        name: 'Nguyễn Thành An',
        icon: 'mdi-account',
        content: "0973625733 - Cho em hỏi đã có lịch thi học kì 2 chưa ạ?",
        date: "25-06-2024",
    },
    {
        name: 'Thi Thi',
        icon: 'mdi-account-off',
        content: "0973625733 - Cho em hỏi đã có lịch thi học kì 2 chứ sinh năm 2019 của Đại học Huế",
        date: "25-06-2024",
    },

]

</script>

<template>
    <MainTop title="Hộp thư hỗ trợ" sub="Danh sách hộp thư hỗ trợ từ sinh viên" icon="mdi-pencil-box-outline" />

    <div class="mx-30 pa-30">
        <v-row>
            <v-col cols="3">
                <div class="title-message">
                    <h3>Danh sách hộp thư</h3>
                </div>

                <v-card class="pa-3">
                    <v-list class="card-message pa-0">
                        <v-list-item v-for="[icon, text, to, count] in links" :key="icon" link :to="to">
                            <template v-slot:default="{ active, toggle }">
                                <div class="mess-item">
                                    <div class="mess-item-left">
                                        <v-icon class="mr-1">{{ icon }}</v-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ text }}</v-list-item-title>
                                        </v-list-item-content>
                                    </div>
                                    <div class="mess-item-right" v-if="count && count > 0">
                                        <span>{{ count }}</span>
                                    </div>
                                </div>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="9">
                <v-card class="pa-3">
                    <div class="mailbox-controls text-end">
                        <v-btn style="border-radius: 0px;" class="action-icon-btn cus-btn ma-0"
                            prepend-icon="mdi-delete-outline"></v-btn>
                        <v-btn style="border-radius: 0px;" class="action-icon-btn cus-btn"
                            prepend-icon="mdi-eye"></v-btn>
                        <v-btn style="border-radius: 0px;" class="action-icon-btn cus-btn"
                            prepend-icon="mdi-reload"></v-btn>
                    </div>

                    <v-table>
                        <tbody>
                            <tr v-for="(item, index) in message" :key="index">
                                <td style="width: 10%;">
                                    <div class="mt-5">
                                        <v-checkbox></v-checkbox>
                                    </div>
                                </td>
                                <td style="width: 30%;">
                                    <div class="user-title">
                                        <v-icon class="color-primary mr-5">{{ item.icon }}</v-icon>
                                        <p>{{ item.name }}</p>
                                    </div>
                                </td>
                                <td style="width: 40%;">{{ item.content }}</td>
                                <td>{{ item.date }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<style lang="css" scoped>
.title-message {
    height: 40px;
    background-color: var(--primary);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-bottom: 20px;
}

.card-message {
    background-color: var(--light-gray);

}


.v-list-item:hover,
.v-list-item .v-list-item--active {
    color: var(--white);
    background-color: var(--primary);
}

.mess-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.mess-item-left {
    display: flex;
    justify-content: center;
    align-items: center;
}

.mess-item-right {
    color: var(--white);
    background-color: var(--primary);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* right */
.mailbox-controls {
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 20px;
}

.v-btn--size-default {
    min-width: 32px !important;
    padding: 0 10px !important;
}

.user-title {
    color: var(--yellow);
    display: flex;
    align-items: center;
    cursor: pointer;
}

.user-title p:hover {
    text-decoration: underline;

}
</style>