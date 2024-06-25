<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const emailRules = [
    (v) => !!v || "Email là trường bắt buộc",
    (v) => /.+@.+\..+/.test(v) || "E-mail không hợp lệ",
];
const handleSubmit = async () => {
};

</script>

<template>
    <div class="login">
        <v-card class="card-login">
            <v-form @submit.prevent="handleSubmit" class="card-login-form">
                <div class="text-center mt-5">
                    <h1 class="font-weight-light">Đăng nhập</h1>
                    <p class="font-weight-thin text-h7 my-2">Great to have back!</p>
                </div>


                <v-text-field v-model="email" label="E-mail" :rules="emailRules" />
                <v-text-field class="mt-2" v-model="password" type="password" label="Mật khẩu" />


                <div class="btn-login">
                    <v-btn type="submit" class=" text-center">Đăng nhập</v-btn>
                    <v-btn to="/" variant="text" class="my-2 ">Về trang chủ</v-btn>
                </div>

            </v-form>
        </v-card>
    </div>
</template>

<style scoped>
.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 25px 45px rgb(1 2 2 / 12%);
    margin: auto;
    width: 500px;

}

.card-login-form {
    width: 80%;
}

.btn-login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
}

.btn-login .v-btn {
    margin: 10px 0;
}

.btn-login .v-btn:first-child {
    background-color: var(--primary);
    color: var(--white);
    margin: 10px 0;
}
</style>
