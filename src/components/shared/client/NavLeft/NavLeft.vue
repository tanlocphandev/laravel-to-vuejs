<script setup>
const structures = [
    ["mdi-medal", "Tổ chức 1", "#"],
    ["mdi-medal", "Tổ chức 2", "#"],
    ["mdi-medal", "Tổ chức 3", "#"],
    ["mdi-medal", "Tổ chức 4", "#"],
];
const groups = [
    ["mdi-medal", "Tổ 1", "#"],
    ["mdi-medal", "Tổ 2", "#"],
    ["mdi-medal", "Tổ 3", "#"],
    ["mdi-medal", "Tổ 4", "#"],
];
const navInfo = [
    ["Cơ chế", "#"],
    ["Thông tin từ cơ sở dữ liệu", "#"],
];

const access = [
    ["mdi-wheelchair-accessibility", "Đang truy cập", "9"],
    ["mdi-filter", "Một tháng trước", "16"],
    ["mdi-calendar", "Năm qua", "150"],
    ["mdi-google-circles-communities", "Tổng lượt truy cập", "175"],
];
</script>

<template>
    <v-list class="nav-info">
        <v-list-group value="structures">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props">
                    <v-list-item-title>Cơ cấu tổ chức</v-list-item-title>
                </v-list-item>
            </template>

            <v-list-item v-for="[icon, title, to] in structures" :key="icon" link :to="to">
                <div class="list-item">
                    <v-icon class="mr-3">{{ icon }}</v-icon>
                    <v-list-item-title> {{ title }} </v-list-item-title>
                </div>
            </v-list-item>
        </v-list-group>

        <v-list-group value="groups">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props">
                    <v-list-item-title>Các tổ chuyên môn</v-list-item-title>
                </v-list-item>
            </template>

            <v-list-item v-for="[icon, title, to] in groups" :key="icon" link :to="to">
                <div class="list-item">
                    <v-icon class="mr-3">{{ icon }}</v-icon>
                    <v-list-item-title> {{ title }} </v-list-item-title>
                </div>
            </v-list-item>
        </v-list-group>

        <v-list-item v-for="[text, to, index] in navInfo" :key="index" link :to="to">
            <v-list-item-title> {{ text }} </v-list-item-title>
        </v-list-item>
    </v-list>

    <div class="content-nav">
        <div class="text-center text-title">Liên kết website</div>
        <v-list class="content-nav-list">
            <v-list-group>
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title>Dành cho giảng viên</v-list-item-title>
                    </v-list-item>
                </template>

                <v-list-item v-for="n in 2" :key="n">
                    <v-list-item-title>{{ "Trang " + n }}</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group>
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title>Dành cho học sinh</v-list-item-title>
                    </v-list-item>
                </template>

                <v-list-item v-for="n in 2" :key="n">
                    <v-list-item-title>{{ "Trang " + n }}</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group>
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title>Liên kết khác</v-list-item-title>
                    </v-list-item>
                </template>

                <v-list-item v-for="n in 2" :key="n">
                    <v-list-item-title>{{ "Trang " + n }}</v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
    </div>

    <div class="content-nav">
        <div class="text-center text-title">Thống kê truy cập</div>
        <div>
            <div v-for="[icon, title, text] in access" :key="icon">
                <div class="access">
                    <div class="access-item">
                        <v-icon class="mr-3">{{ icon }}</v-icon>
                        <div>{{ title }}</div>
                    </div>
                    <div class="font-weight-bold">{{ text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.nav-info {
    background-color: var(--primary);
    color: var(--white);
    padding: 0;
    border-radius: 4px;
}

.v-list-item--density-default.v-list-item--one-line {
    min-height: 39px !important;
}

.v-list-group__items .v-list-item {
    padding: 8px 15px !important;
}

.v-list-item {
    border-bottom: 1px solid var(--primary);
}

.list-item {
    display: flex;
    align-items: center;
}

.v-list-item__append {
    display: none !important;
}

.v-list-item:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
    cursor: pointer;
}

/* Content */
.content-nav {
    width: 100%;
    margin-top: 20px;
    border: 1px solid var(--primary);
    margin-bottom: 50px;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
}

.text-title {
    padding: 9.5px 0;
    background-color: var(--primary);
    color: var(--white);
    font-size: 16px;
}

.content-nav-list {
    padding: 0 !important;
    font-size: 13px;
}

.access {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 39px;
    border-bottom: 1px solid var(--primary);
    padding: 0 15px;
}
.access-item {
    display: flex;
    align-items: center;
    flex-direction: row !important;
}
</style>
