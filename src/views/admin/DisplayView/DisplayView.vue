<script setup>
import MainTop from "@/components/shared/admin/MainTop";
import { ref, onMounted, computed } from 'vue';

const selectedCheckboxes = ref([]);

// Trạng thái của snackbar
const showSnackbar = ref(false);

// Khôi phục trạng thái checkbox từ localStorage khi tải trang
onMounted(() => {
    const savedCheckboxes = localStorage.getItem('selectedCheckboxes');
    if (savedCheckboxes) {
        selectedCheckboxes.value = JSON.parse(savedCheckboxes);
    }
});

// Hàm lưu và hiển thị thông báo
const save = () => {
    // Lưu trạng thái checkbox vào localStorage
    localStorage.setItem('selectedCheckboxes', JSON.stringify(selectedCheckboxes.value));

    // Hiển thị thông báo thành công
    showSnackbar.value = true;
    setTimeout(() => {
        showSnackbar.value = false; // Tắt alert sau 3 giây
    }, 3000);
};

// Hàm hien thi sắp xếp lại
const selectedItems = computed(() => {
    return selectedCheckboxes.value;
});

// di chuyển sắp xếp lại
const moveItemUp = (index) => {
    if (index > 0) {
        const itemToMove = selectedItems.value[index];
        selectedCheckboxes.value.splice(index, 1);  // Xóa mục hiện tại
        selectedCheckboxes.value.splice(index - 1, 0, itemToMove);  // Chèn lại vào vị trí trước đó
        save();  // Lưu lại sau khi di chuyển
    }
};

const moveItemDown = (index) => {
    if (index < selectedItems.value.length - 1) {
        const itemToMove = selectedItems.value[index];
        selectedCheckboxes.value.splice(index, 1);  // Xóa mục hiện tại
        selectedCheckboxes.value.splice(index + 1, 0, itemToMove);  // Chèn lại vào vị trí sau đó
        save();  // Lưu lại sau khi di chuyển
    }
};

// content right
// const formData = ref({
//     Title: 'Lịch học kỳ II',
//     Content: 'Đã có lịch thi chính thức, SV truy cập trang web để xem lịch thi cụ thể.',
//     Note: '* Thông báo cập nhật lúc 18h40 ngày 10/01/2019.',
//     DateStart: '15/03/2020',
//     DateEnd: '15/03/2020'
// });

const formData = ref({
    Title: '',
    Content: '',
    Note: '',
    DateStart: '',
    DateEnd: ''
});

// Khôi phục dữ liệu từ localStorage khi tải trang
onMounted(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        Object.assign(formData.value, JSON.parse(savedData));
    }
});

const submitForm = () => {
    // Lưu dữ liệu vào localStorage
    localStorage.setItem('formData', JSON.stringify(formData.value));

    // Thực hiện lưu dữ liệu (ví dụ: gửi request API)
    saveData(formData.value);

    // Hiển thị thông báo alert
    showSuccessAlert();
};

const saveData = (formData) => {
    // Đoạn này là nơi bạn có thể thực hiện lưu dữ liệu, ví dụ như gửi request API
    console.log('Saving data:', formData);
    // Đoạn này có thể gửi request API để lưu dữ liệu vào server
};

const showSuccessAlert = () => {
    alert('Thông báo đã được tải lên thành công!');
    // Hoặc sử dụng v-alert của Vuetify để hiển thị thông báo
    // Ví dụ: showSnackbar = true;
};

</script>

<template>
    <MainTop title="Hiển thị" sub="Quản lí trình bày - hiển thị nội dung trang chủ" icon="mdi-pencil-box-outline"
        parent="Trang chủ" />

    <v-card class="card-display mx-30 pa-30">
        <v-row class="padding-0">
            <v-col class="padding-0">
                <v-alert variant="tonal" v-model="showSnackbar" color="success" class="padding-0 ma-3">
                    <div class="card-alert">
                        <div>
                            <v-icon>mdi-check</v-icon>
                            Thành công : Nội dung đã được cập nhật!
                        </div>
                        <v-btn variant="text" @click="showSnackbar = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                </v-alert>

                <div>
                    <v-card-title>Danh mục tin tức hiển thị</v-card-title>
                    <p class="text-content">
                        <v-checkbox v-model="selectedCheckboxes" color="primary" label="Thông báo" value="Thông báo"
                            hide-details></v-checkbox>
                        <v-checkbox v-model="selectedCheckboxes" color="primary" label="Tin tức" value="Tin tức"
                            hide-details></v-checkbox>
                        <v-checkbox v-model="selectedCheckboxes" color="primary" label="Tuyển sinh" value="Tuyển sinh"
                            hide-details></v-checkbox>
                        <v-checkbox v-model="selectedCheckboxes" color="primary" label="Chương trình học tập"
                            value="Chương trình học tập" hide-details></v-checkbox>

                    </p>
                    <v-btn @click="save" class="ma-5 card-display-btn">
                        <v-icon class="mr-2">mdi-check</v-icon>
                        Lưu lại
                    </v-btn>

                </div>

                <div>
                    <v-card-title>Sắp xếp hiển thị ưu tiên</v-card-title>
                    <ul class="text-content ml-15">
                        <li v-for="(item, index) in selectedItems" :key="item" class="my-2">
                            <span>{{ item }}</span>
                            <v-btn @click="moveItemUp(index)" v-if="index > 0" class="move">
                                <v-icon>mdi-arrow-up</v-icon>
                            </v-btn>
                            <v-btn @click="moveItemDown(index)" v-if="index < selectedItems.length - 1" class="move">
                                <v-icon>mdi-arrow-down</v-icon>
                            </v-btn>
                        </li>
                    </ul>
                </div>
            </v-col>
            <v-col class="padding-0">
                <v-card-title>Cập nhật thông báo</v-card-title>
                <div class="text-content">
                    <div class="form-group">
                        <div class="form-group has-success">
                            <label class="form-control-label mb-2 color-primary" for="inputSuccess1">Tiêu đề</label>
                            <input v-model="formData.Title" class="form-control is-valid content-info" id="inputValid"
                                type="text" placeholder="Nhập tiêu đề">
                        </div>
                        <div class="form-group">
                            <label class="color-primary">Nội dung</label>
                            <textarea v-model="formData.Content" class="form-control content-info mt-2"
                                id="exampleTextarea" rows="5" placeholder="Nhập nội dung"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="col-form-label color-primary" for="inputDefault">Ghi chú</label>
                            <input v-model="formData.Note" class="form-control content-info" id="inputDefault"
                                type="text" placeholder="Nhập ghi chú">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label color-primary" for="inputDefault">Ngày bắt đầu</label>
                            <input v-model="formData.DateStart" class="form-control demoDate content-info" type="text"
                                placeholder="Chọn ngày">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label color-primary" for="inputDefault">Ngày hết hạn</label>
                            <input v-model="formData.DateEnd" class="form-control demoDate content-info" type="text"
                                placeholder="Chọn ngày">
                        </div>
                        <div class="form-group">
                            <v-btn @click="submitForm" class="card-display-btn cus-btn">
                                <v-icon class="mr-2">mdi-check</v-icon>
                                Tải lên thông báo mới
                            </v-btn>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-card>

</template>

<style lang="css" scoped>
.card-display {
    margin-bottom: 30px;
}

.v-cart-title {
    font-size: 24px;
    line-height: 36px;
}

.text-content {
    text-align: justify;
    width: 100%;
    padding: 0 10px;
}

.card-display-btn {
    background-color: var(--primary);
    color: var(--white);
    box-shadow: #0006 0px 4px 8px 0px;
    text-transform: initial;
}

.cus-btn {
    margin: 10px 0;
    width: 250px;
}

.card-alert {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    padding-left: 10px;
}

.move.v-btn.v-btn--density-default {
    height: 20px !important;
    padding: 0 !important;
    min-width: 20px !important;
    margin-left: 4px;
}

/* right */
.form-group {
    display: flex;
    flex-direction: column
}

.col-form-label {
    margin: 10px 0;
}

.form-control.content-info.is-valid {
    box-shadow: 0 0 0 0.15rem var(--primary);
    border-radius: 4px;
    padding: 6px 20px;
    outline: none;
}

.form-control.content-info {
    box-shadow: 0 0 0 0.15rem #ced4da;
    border-radius: 4px;
    padding: 6px 20px;
    outline: none;
    margin-bottom: 20px;
}
</style>
