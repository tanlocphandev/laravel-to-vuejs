<script setup>
import { ref } from 'vue';

const isFormVisible = ref(false);
const valid = ref(false);

function toggleForm() {
    isFormVisible.value = !isFormVisible.value;
}

function hideForm() {
    isFormVisible.value = false;
}

const submit = () => {
    if (valid.value) {
        // Handle form submission
        console.log('Form data:', formData.value);
    }
};

const submitAnonymous = () => {
    const anonymousData = {
        ...formData.value,
        name: 'Anonymous',
        email: 'anonymous@example.com',
        phone: '0000000000'
    };
    // Handle anonymous form submission
    console.log('Anonymous form data:', anonymousData);
};


</script>

<template>

    <div class="form-container">
        <div class="form-title" :class="isFormVisible ? ' w-299' : ''">
            <div class="title-left" @click="toggleForm">
                <v-icon class="icon-title-left">mdi-email-outline</v-icon>
                <p>Hỗ trợ sinh viên</p>
            </div>
            <v-icon v-if="isFormVisible" @click.stop="hideForm"
                style="cursor: pointer;">mdi-close-circle-outline</v-icon>
        </div>

        <v-form v-if="isFormVisible" v-model="valid" ref="form" class="form">
            <v-text-field density="compact" placeholder="Họ tên" prepend-inner-icon="mdi-account-outline"
                variant="outlined" label="Họ tên" class="text-field mt-3"> </v-text-field>
            <v-text-field density="compact" placeholder="Địa chỉ email" prepend-inner-icon="mdi-email-outline"
                variant="outlined" label="Email" class="text-field"> </v-text-field>
            <v-text-field density="compact" placeholder="Số điện thoại" prepend-inner-icon="mdi-cellphone-basic"
                variant="outlined" label="Điện thoại" class="text-field"> </v-text-field>
            <v-textarea class="mx-2 my-1" row-height="25" rows="1" variant="outlined" auto-grow shaped
                label="Bạn cần khoa hỗ trợ điều gì?"></v-textarea>
            <div class="btn-mailbox mb-2">
                <v-btn @click="submit" class=" action-icon-btn">Gửi hỗ trợ</v-btn>
                <v-btn @click="submitAnonymous" class="ml-2 action-icon-btn">Gửi ẩn danh</v-btn>
            </div>
        </v-form>
    </div>

</template>

<style scoped>
.w-299 {
    width: 299px;
}

.form-container {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
}

.form-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 4px 4px 0 0;
    padding: 0 10px;
    font-weight: 400;

}


.title-left {
    display: flex;
    cursor: pointer;
}

.icon-title-left {
    border-right: 1px solid var(--white);
    padding-right: 10px;
    margin-right: 10px;
}

.form {
    border: 1px solid var(--primary);
    background-color: var(--white)
}

.text-field {
    margin: 0 10px;
}

.btn-mailbox {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
}
</style>