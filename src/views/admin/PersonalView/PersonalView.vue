<script setup>
import MainTop from "@/components/shared/admin/MainTop";
import Search from "@/components/ui/Search";
</script>

<template>
    <main-top
        title="Nhân sự"
        sub="Quản lý nhân sự"
        icon="mdi-pencil-box-outline"
        parent="Nhân sự"
    />

    <v-card class="mx-30 pa-30">
        <div class="d-flex justify-space-between mb-5">
            <search
                placeholder="Tìm kiếm nhân sự..."
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
    </v-card>
</template>

<style lang="css" scoped></style>