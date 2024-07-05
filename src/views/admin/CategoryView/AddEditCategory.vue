<script setup>
import MainTop from "@/components/shared/admin/MainTop/MainTop.vue";
import useGetCategory from "@/hooks/category.hook";
import {
    useGetNewsTypesById,
    useMutationAddNewsTypes,
    useMutationEditNewsTypes,
} from "@/hooks/newsTypes.hook";
import { computed, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const id = computed(() => route.params.id);
const { data: categories, isLoading } = useGetCategory({ all: 1 });
const mutationAdd = useMutationAddNewsTypes();
const mutationEdit = useMutationEditNewsTypes();
const getNewsTypes = useGetNewsTypesById(id, {
    id,
});

const form = ref(null);
const valid = ref(false);

const name = ref("");
const category = ref(null);

const rules = {
    required: (value) => !!value || "Trường này bắt buộc.",
};

watchEffect(() => {
    if (getNewsTypes.data.value && getNewsTypes.data.value?.metadata) {
        name.value = getNewsTypes.data.value?.metadata.tenloaitin;
        category.value = getNewsTypes.data.value?.metadata.id_theloai;
    }
});

const submit = async () => {
    const { valid } = await form.value.validate();

    if (!valid) return;

    const payload = {
        tenloaitin: name.value,
        id_theloai: category.value,
    };

    if (getNewsTypes.data.value && getNewsTypes.data.value?.metadata) {
        mutationEdit.mutate(
            { ...payload, id: getNewsTypes.data.value?.metadata.id },
            {
                onSuccess: () => {
                    reset();
                    router.push({ name: "category" });
                },
            }
        );
    } else {
        mutationAdd.mutate(payload, {
            onSuccess: () => {
                reset();
                router.push({ name: "category" });
            },
        });
    }
};

const reset = () => {
    form.value.reset();
};
</script>

<template>
    <MainTop
        title="Loại tin"
        sub="Quản lí danh mục loại tin"
        icon="mdi-pencil-box-outline"
        parent="Tin tức"
    />

    <v-card class="mx-30 pa-30 cate-card">
        <v-form v-model="valid">
            <v-container>
                <v-form @submit="submit" ref="form" v-model="valid">
                    <v-card>
                        <v-card-title>
                            <h3>{{ $route.meta.title }}</h3>
                        </v-card-title>

                        <v-card-text>
                            <v-text-field
                                v-model="name"
                                :rules="[rules.required]"
                                label="Tên loại tin"
                                placeholder="Nhập tên loại tin tức"
                                required
                            ></v-text-field>

                            <v-select
                                :loading="isLoading"
                                v-model="category"
                                :items="categories?.metadata"
                                item-title="tentheloai"
                                item-value="id"
                                label="Thuộc thể loại"
                                required
                            ></v-select>

                            <small class="text--secondary">
                                Loại tin mới không hợp lệ nếu đã tồn tại một
                                loại tin giống nó.
                            </small>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                color="primary"
                                variant="tonal"
                                :loading="
                                    mutationAdd.isPending.value ||
                                    mutationEdit.isPending.value
                                "
                                @click="submit"
                            >
                                {{ id ? "Lưu thay đổi" : "Thêm mới" }}
                            </v-btn>

                            <v-btn
                                :loading="
                                    mutationAdd.isPending.value ||
                                    mutationEdit.isPending.value
                                "
                                color="secondary"
                                variant="tonal"
                                @click="reset"
                            >
                                Nhập lại
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-container>
        </v-form>
    </v-card>
</template>

<style lang="css" scoped></style>
