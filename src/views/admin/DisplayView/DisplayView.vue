<script setup>
import MainTop from "@/components/shared/admin/MainTop";
import useGetCategory, {
    queryKeyCategory,
    useMutationChangeDisplayCategory,
    useMutationSortPriority,
} from "@/hooks/category.hook";
import { getQueryKeys } from "@/utils";
import { useQueryClient } from "@tanstack/vue-query";
import { ref, onMounted, computed, watchEffect } from "vue";
import { toast } from "vue-sonner";

const options = computed(() => {
    return {
        page: 1,
        order: "asc",
        sort: "uutien",
    };
});

const { data, isLoading } = useGetCategory(options.value);
const queryClient = useQueryClient();
const { mutate, isPending } = useMutationSortPriority();
const { mutate: mutateChangeDisplay, isPending: isPendingChangeDisplay } =
    useMutationChangeDisplayCategory();

const selectedCheckboxes = ref([]);

watchEffect(() => {
    if (data.value?.metadata?.length > 0) {
        selectedCheckboxes.value = data.value?.metadata
            .filter((t) => t.hienthi)
            .map((item) => item.id);
    }
});

// Trạng thái của snackbar
const showSnackbar = ref(false);

// Hàm lưu và hiển thị thông báo
const save = () => {
    if (selectedCheckboxes.value.length === 0) {
        toast.error("Ít nhất 1 danh mục phải được hiển thị!");
        return;
    }

    const displayIds = selectedCheckboxes.value;
    const hiddenIds = data.value?.metadata
        ?.filter((item) => !displayIds.includes(item.id))
        ?.map((item) => item.id);

    const payload = {
        displayIds,
        hiddenIds,
    };

    // Đoạn này có thể gửi request API để lưu dữ liệu vào server
    mutateChangeDisplay(payload, {
        onSuccess: () => {
            toast.success("Đã cập nhật thành công");
            queryClient.invalidateQueries({
                queryKey: queryKeyCategory(options.value),
                exact: true,
            });
        },
    });

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
const moveItemUp = (index, id) => {
    if (index > 0) {
        const moveIndex = index - 1;

        const moveId = selectedItems.value[moveIndex];
        const currentId = selectedItems.value[index];

        const payload = {
            moveId,
            currentId,
        };

        mutate(payload, {
            onSuccess: () => {
                toast.success("Đã thay đổi thành công");
                queryClient.invalidateQueries({
                    queryKey: queryKeyCategory(options.value),
                    exact: true,
                });
            },
        });
    }
};

const moveItemDown = (index, id) => {
    if (index < selectedItems.value.length - 1) {
        const moveIndex = index + 1;

        const moveId = selectedItems.value[moveIndex];
        const currentId = selectedItems.value[index];

        const payload = {
            moveId,
            currentId,
        };

        mutate(payload, {
            onSuccess: () => {
                toast.success("Đã thay đổi thành công");
                queryClient.invalidateQueries({
                    queryKey: queryKeyCategory(options.value),
                    exact: true,
                });
            },
        });
    }
};

const formData = ref({
    Title: "",
    Content: "",
    Note: "",
    DateStart: "",
    DateEnd: "",
});

// Khôi phục dữ liệu từ localStorage khi tải trang
onMounted(() => {
    const savedData = localStorage.getItem("formData");

    if (savedData) {
        Object.assign(formData.value, JSON.parse(savedData));
    }
});

const submitForm = () => {
    // Lưu dữ liệu vào localStorage
    localStorage.setItem("formData", JSON.stringify(formData.value));

    // Thực hiện lưu dữ liệu (ví dụ: gửi request API)
    saveData(formData.value);

    // Hiển thị thông báo alert
    showSuccessAlert();
};

const saveData = (formData) => {
    // Đoạn này là nơi bạn có thể thực hiện lưu dữ liệu, ví dụ như gửi request API
    console.log("Saving data:", formData);
    // Đoạn này có thể gửi request API để lưu dữ liệu vào server
};

const showSuccessAlert = () => {
    alert("Thông báo đã được tải lên thành công!");
    // Hoặc sử dụng v-alert của Vuetify để hiển thị thông báo
    // Ví dụ: showSnackbar = true;
};

const getCategoryById = (id) => {
    const category = data.value?.metadata.find((item) => item.id === id);
    return category;
};
</script>

<template>
    <MainTop
        title="Hiển thị"
        sub="Quản lí trình bày - hiển thị nội dung trang chủ"
        icon="mdi-pencil-box-outline"
        parent="Trang chủ"
    />

    <v-card class="card-display mx-30 pa-30">
        <v-row class="padding-0">
            <v-col class="padding-0">
                <v-alert
                    variant="tonal"
                    v-model="showSnackbar"
                    color="success"
                    class="padding-0 ma-3"
                >
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
                    <v-skeleton-loader
                        v-if="isLoading || isPending || isPendingChangeDisplay"
                        type="list-item,list-item,list-item,list-item"
                    />
                    <p v-else class="text-content">
                        <v-checkbox
                            v-for="item in data?.metadata"
                            :key="item?.id"
                            v-model="selectedCheckboxes"
                            color="primary"
                            :label="item.tentheloai"
                            :value="item.id"
                            hide-details
                        ></v-checkbox>
                    </p>

                    <v-btn @click="save" class="ma-5 card-display-btn">
                        <v-icon class="mr-2">mdi-check</v-icon>
                        Lưu lại
                    </v-btn>
                </div>

                <div>
                    <v-card-title>Sắp xếp hiển thị ưu tiên</v-card-title>

                    <v-skeleton-loader
                        v-if="isLoading || isPending || isPendingChangeDisplay"
                        type="list-item,list-item,list-item,list-item"
                    />

                    <ul v-else class="text-content ml-15">
                        <li
                            v-for="(item, index) in selectedItems"
                            :key="item.id"
                            class="my-2"
                        >
                            <span>{{ getCategoryById(item)?.tentheloai }}</span>

                            <v-btn
                                @click="moveItemUp(index, item)"
                                v-if="index > 0"
                                class="move"
                            >
                                <v-icon>mdi-arrow-up</v-icon>
                            </v-btn>

                            <v-btn
                                @click="moveItemDown(index, item)"
                                v-if="index < selectedItems.length - 1"
                                class="move"
                            >
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
                            <label
                                class="form-control-label mb-2 color-primary"
                                for="inputSuccess1"
                                >Tiêu đề</label
                            >
                            <input
                                v-model="formData.Title"
                                class="form-control is-valid content-info"
                                id="inputValid"
                                type="text"
                                placeholder="Nhập tiêu đề"
                            />
                        </div>
                        <div class="form-group">
                            <label class="color-primary">Nội dung</label>
                            <textarea
                                v-model="formData.Content"
                                class="form-control content-info mt-2"
                                id="exampleTextarea"
                                rows="5"
                                placeholder="Nhập nội dung"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <label
                                class="col-form-label color-primary"
                                for="inputDefault"
                                >Ghi chú</label
                            >
                            <input
                                v-model="formData.Note"
                                class="form-control content-info"
                                id="inputDefault"
                                type="text"
                                placeholder="Nhập ghi chú"
                            />
                        </div>
                        <div class="form-group">
                            <label
                                class="col-form-label color-primary"
                                for="inputDefault"
                                >Ngày bắt đầu</label
                            >
                            <input
                                v-model="formData.DateStart"
                                class="form-control demoDate content-info"
                                type="text"
                                placeholder="Chọn ngày"
                            />
                        </div>
                        <div class="form-group">
                            <label
                                class="col-form-label color-primary"
                                for="inputDefault"
                                >Ngày hết hạn</label
                            >
                            <input
                                v-model="formData.DateEnd"
                                class="form-control demoDate content-info"
                                type="text"
                                placeholder="Chọn ngày"
                            />
                        </div>
                        <div class="form-group">
                            <v-btn
                                @click="submitForm"
                                class="card-display-btn cus-btn"
                            >
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
    flex-direction: column;
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
