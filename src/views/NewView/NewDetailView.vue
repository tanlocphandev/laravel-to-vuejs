<script setup>
import { useGetNewsDetails } from "@/hooks/news.hook";
import { fDate } from "@/utils";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const newsId = computed(() => route.params.id);

const { data, isLoading } = useGetNewsDetails(newsId, {
    include_user: "true",
    include_comment: "true",
});

const newComment = ref("");
const comments = ref([
    { id: 1, user: "Sinh Viên1", date: "2024-06-24 15:30:05", text: "Hello1", replies: 0 },
    {
        id: 2,
        user: "Sinh Viên1",
        date: "2024-06-24 15:30:05",
        text: "Tuyệt vời, sư phạm Huế",
        replies: 1,
    },
]);

const addComment = () => {
    if (newComment.value.trim() !== "") {
        comments.value.push({
            id: Date.now(),
            user: "Sinh Viên1",
            date: new Date().toLocaleString(),
            text: newComment.value,
            replies: 0,
        });
        newComment.value = "";
    }
};

const editComment = (comment) => {
    // Function to edit a comment
    newComment.value = comment.text;
    deleteComment(comment.id);
};

const deleteComment = (id) => {
    comments.value = comments.value.filter((comment) => comment.id !== id);
};
</script>

<template>
    <div class="news-detail" v-if="!isLoading">
        <div class="news-title mb-2 color-primary text-shadow">
            <h1>{{ data?.metadata?.tieude }}</h1>
        </div>

        <div class="news-info">
            <div class="mr-3 news-info-item">
                <v-icon class="color-primary mr-1">mdi-account</v-icon>
                {{ data?.metadata?.user?.viewname }}
            </div>
            <div class="mr-3 news-info-item">
                <v-icon class="color-primary mr-1">mdi-clock</v-icon>
                {{ fDate(data?.metadata?.created_at, "DD/MM/YYYY HH:mm:ss") }}
            </div>
            <div class="mr-3 news-info-item">
                <v-icon class="color-primary mr-1">mdi-tag-multiple</v-icon>
                <router-link to="/news" class="color-primary" style="text-decoration: none">
                    Tin tức
                </router-link>
            </div>

            <iframe
                src="https://www.facebook.com/plugins/share_button.php?href=http://127.0.0.1:8000/tintuc/11&amp;layout=button_count&amp;size=small&amp;mobile_iframe=true&amp;width=78&amp;height=20&amp;appId"
                width="78"
                height="20"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>

        <div class="news-content1">
            <strong>
                {{ data?.metadata?.mota }}
            </strong>
        </div>

        <div class="news-content2" v-html="data?.metadata?.noidung" />

        <div class="comment py-4">
            <v-card>
                <h2 class="pl-4 pt-4">{{ comments.length }} bình luận</h2>
                <div class="pa-4">
                    <v-textarea
                        v-model="newComment"
                        label="Viết bình luận..."
                        auto-grow
                        outlined
                    ></v-textarea>
                    <v-btn style="float: right" @click="addComment" class="mt-3" color="primary"
                        >Gửi bình luận</v-btn
                    >
                </div>

                <v-list class="my-5 comment-list">
                    <v-list-item v-for="comment in comments" :key="comment.id" class="comment-item">
                        <div class="d-flex align-center">
                            <v-avatar class="mr-4">
                                <v-img src="/assets/avatar.jpg"></v-img>
                            </v-avatar>
                            <div class="comment-content">
                                <div>
                                    <v-list-item-title>
                                        <strong>{{ comment.user }}</strong>
                                        <small class="ml-4">{{ comment.date }}</small>
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        <p>{{ comment.text }}</p>
                                        <v-icon small color="green">mdi-comment</v-icon>
                                        <span>{{ comment.replies }}</span>
                                    </v-list-item-subtitle>
                                </div>
                                <div>
                                    <v-btn
                                        class="action-icon-btn mr-2"
                                        color="primary"
                                        @click="editComment(comment)"
                                    >
                                        <v-icon class="mr-2">mdi-pencil-outline</v-icon>
                                        Sửa
                                    </v-btn>
                                    <v-btn
                                        class="action-icon-btn mr-2"
                                        @click="deleteComment(comment.id)"
                                    >
                                        <v-icon class="mr-2">mdi-delete-outline</v-icon>
                                        Xóa
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </v-list-item>
                </v-list>
            </v-card>
        </div>
    </div>

    <div v-else>
        <v-skeleton-loader type="article,article,article,article"></v-skeleton-loader>
    </div>
</template>

<style lang="css" scoped>
.news-detail {
    font-family: Lato;
    padding: 20px;
}

.news-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.news-info-item {
    display: flex;
    align-items: center;
}

.news-content1 {
    margin-bottom: 20px;
    text-align: justify;
    font-style: italic;
}

.v-toolbar {
    background-color: #f5f5f5;
}

.v-chip {
    margin: 2px;
}

/* comment */

.comment-list {
    width: 100%;
    padding: 20px;
}

.comment-item {
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--white);
    box-shadow: #0006 0px 4px 8px 0px;
}

.comment-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>
