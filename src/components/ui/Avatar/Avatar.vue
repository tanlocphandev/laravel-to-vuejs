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
                <div class="card-avatar">
                    <v-btn to="/auth/login" class="custom-btn" variant="text"> Đăng nhập </v-btn>
                    <v-btn to="/admin" class="custom-btn" variant="text">Quản trị viên </v-btn>
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

.card-avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.custom-btn {
    width: 150px;
    transition: background-color 0.3s, color 0.3s;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--primary);
    border-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-btn:hover {
    background-color: var(--primary);
    color: var(--white);
}
</style>
