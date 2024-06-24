<script setup></script>

<template>
    <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" class="avatar">
                <v-avatar class="avatar-bg" color="brown" size="large">
                    <v-icon>mdi-account</v-icon>
                </v-avatar>
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <div class="mx-auto text-center">
                    <v-btn class="custom-btn" variant="text"> Đăng nhập </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn class="custom-btn" variant="text"> Đăng ký </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-menu>
</template>

<style lang="css" scoped>
.avatar {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 20;
}

.avatar-bg {
    background-color: var(--primary) !important;
}

.custom-btn {
    width: 150px;
    transition: background-color 0.3s, color 0.3s;
}

.custom-btn:hover {
    background-color: var(--primary);
    color: var(--white);
}
</style>
