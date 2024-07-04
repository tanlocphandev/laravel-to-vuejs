<script setup>
import { toast } from "vue-sonner";
import { ref } from "vue";

const props = defineProps({
    btnTextSubmit: String,
    rows: Number,
});

const emit = defineEmits(["submit"]);

const newComment = ref("");

const handleSubmitNewComment = () => {
    newComment.value = newComment.value.trim();

    if (!newComment.value) {
        toast.error("Vui lòng nhập binh luận!");
        return;
    }

    const callback = () => {
        newComment.value = "";
    };

    emit("submit", { comment: newComment.value, callback });
};
</script>

<template>
    <div class="pa-4">
        <v-textarea
            v-model="newComment"
            label="Viết bình luận..."
            auto-grow
            outlined
            :rows="rows || 3"
        ></v-textarea>

        <v-btn
            style="float: right"
            color="primary"
            size="small"
            @click="handleSubmitNewComment"
        >
            {{ btnTextSubmit }}
        </v-btn>
    </div>
</template>

<style lang="css" scoped></style>
