<script setup>
import ShareFB from "@/components/shared/ShareFB.vue";
import {
    queryKeysGetAllComment,
    useGetCommentByNews,
    useMutationAddComment,
    useMutationReplyComment,
} from "@/hooks/comment.hook";
import { useGetNewsDetails } from "@/hooks/news.hook";
import { fDate } from "@/utils";
import CommentCard from "@/views/NewView/components/CommentCard.vue";
import FormComment from "@/views/NewView/components/FormComment.vue";
import { useQueryClient } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue-sonner";

const route = useRoute();

const newsId = computed(() => route.params.id);

const { data, isLoading } = useGetNewsDetails(newsId, {
    include_user: "true",
});

const options = computed(() => {
    return {
        page: 1,
        limit: 10,
        "id_tintuc[eq]": newsId,
        include_comment_detail: "true",
        include_user: "true",
    };
});

const { data: comments, isLoading: isLoadingComments } = useGetCommentByNews(
    options.value
);

const mutationAddComment = useMutationAddComment();
const mutationReplyComment = useMutationReplyComment();
const queryClient = useQueryClient();

const handleSubmitNewComment = ({ comment, callback }) => {
    const payload = {
        noidung: comment,
        id_user: 1,
        id_tintuc: newsId.value,
    };

    mutationAddComment.mutate(payload, {
        onSuccess: () => {
            toast.success("Bình luận thành công.");
            queryClient.invalidateQueries({
                queryKey: queryKeysGetAllComment(options.value),
                exact: true,
            });
            callback();
        },
    });
};

const handleSubmitReplyComment = ({ comment, value, callback }) => {
    const payload = {
        noidung: value,
        id_user: 1,
        id_binhluan: comment.id,
    };

    mutationReplyComment.mutate(payload, {
        onSuccess: () => {
            toast.success("Đã reply thành công");
            queryClient.invalidateQueries({
                queryKey: queryKeysGetAllComment(options.value),
                exact: true,
            });
            callback();
        },
    });
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
                <router-link
                    to="/news"
                    class="color-primary"
                    style="text-decoration: none"
                >
                    Tin tức
                </router-link>
            </div>

            <ShareFB />
        </div>

        <div class="news-content1">
            <strong>
                {{ data?.metadata?.mota }}
            </strong>
        </div>

        <div class="news-content2" v-html="data?.metadata?.noidung" />

        <div class="comment py-4">
            <v-card>
                <h2 class="pl-4 pt-4">{{ comments?.length }} bình luận</h2>

                <FormComment
                    :btnTextSubmit="'Gửi bình luận'"
                    @submit="handleSubmitNewComment"
                />

                <v-list class="my-5 w-100 px-4">
                    <CommentCard
                        v-for="comment in comments"
                        :key="comment.id"
                        :comment="comment"
                        @submitReply="handleSubmitReplyComment"
                    />
                </v-list>
            </v-card>
        </div>
    </div>

    <div v-else>
        <v-skeleton-loader
            type="article,article,article,article"
        ></v-skeleton-loader>
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
</style>
