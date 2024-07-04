<script setup>
import MainTop from "@/components/shared/admin/MainTop";
import { useGetMailbox } from "@/hooks/mailbox.hook";
import { fDate } from "@/utils";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const TAB_OPTIONS = {
    NORMAL: "NORMAL",
    ANONYMOUS: "ANONYMOUS",
    ALL: "ALL",
};

const route = useRoute();
const router = useRouter();
const tabOption = ref(TAB_OPTIONS.NORMAL);
const page = computed(() => parseInt(route.query?.page) || 1);

const handleChangeTab = (tab) => {
    tabOption.value = tab;
};

const handleChangePage = (currentPage) => {
    router.push({
        path: route.path,
        query: { ...route.query, page: currentPage },
    });
};

const parserTab = (tab) => {
    switch (tab.value) {
        case TAB_OPTIONS.NORMAL:
            return { "dadoc[eq]": 0 };
        case TAB_OPTIONS.ANONYMOUS:
            return { "andanh[eq]": 1 };
        case TAB_OPTIONS.ALL:
            return {};
    }
};

const options = computed(() => {
    return {
        page,
        limit: 10,
        ...parserTab(tabOption),
    };
});

const { data, isLoading } = useGetMailbox(options.value);

const links = [
    ["mdi-email-outline", "Thư thường", "#", 1],
    ["mdi-eye-off", "Ẩn danh", "#", 0],
    ["mdi-file-document", "Tất cả", "#", 1],
];

const message = [
    {
        name: "Nguyễn Thành An",
        icon: "mdi-account",
        content: "0973625733 - Cho em hỏi đã có lịch thi học kì 2 chưa ạ?",
        date: "25-06-2024",
    },
    {
        name: "Thi Thi",
        icon: "mdi-account-off",
        content:
            "0973625733 - Cho em hỏi đã có lịch thi học kì 2 chứ sinh năm 2019 của Đại học Huế",
        date: "25-06-2024",
    },
];
</script>

<template>
    <MainTop
        title="Hộp thư hỗ trợ"
        sub="Danh sách hộp thư hỗ trợ từ sinh viên"
        icon="mdi-pencil-box-outline"
    />

    <div class="mx-30 pa-30">
        <v-row>
            <v-col cols="3">
                <div class="title-message">
                    <h3>Danh sách hộp thư</h3>
                </div>

                <v-card class="pa-3">
                    <v-list class="card-message pa-0">
                        <v-list-item
                            v-for="[icon, text, to, count] in links"
                            :key="icon"
                            link
                            :to="to"
                        >
                            <template v-slot:default="{ active, toggle }">
                                <div class="mess-item">
                                    <div class="mess-item-left">
                                        <v-icon class="mr-1">{{ icon }}</v-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>{{
                                                text
                                            }}</v-list-item-title>
                                        </v-list-item-content>
                                    </div>
                                    <div
                                        class="mess-item-right"
                                        v-if="count && count > 0"
                                    >
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
                        <v-btn
                            style="border-radius: 0px"
                            class="action-icon-btn cus-btn ma-0"
                            prepend-icon="mdi-delete-outline"
                        ></v-btn>
                        <v-btn
                            style="border-radius: 0px"
                            class="action-icon-btn cus-btn"
                            prepend-icon="mdi-eye"
                        ></v-btn>
                        <v-btn
                            style="border-radius: 0px"
                            class="action-icon-btn cus-btn"
                            prepend-icon="mdi-reload"
                        ></v-btn>
                    </div>

                    <v-table>
                        <tbody>
                            <tr
                                v-for="(item, index) in data?.metadata"
                                :key="index"
                            >
                                <td>
                                    {{ index + 1 }}
                                </td>

                                <td style="width: 30%">
                                    <div class="user-title">
                                        <v-icon class="color-primary mr-5">
                                            {{ item.icon }}
                                        </v-icon>

                                        <p>{{ item.hoten }}</p>
                                    </div>
                                </td>

                                <td style="width: 40%">{{ item.noidung }}</td>

                                <td>
                                    {{ fDate(item.created_at, "DD-MM-YYYY") }}
                                </td>
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