import queryKeys from "@/constants/queryKey.constant";
import commentService from "@/services/comment.service";
import replyCommentService from "@/services/replyComment.service";
import { paramsToArrString, sortByCreatedAt } from "@/utils";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { toast } from "vue-sonner";

export const queryKeysGetAllComment = ({ page, limit = 10, ...others }) => {
    return [queryKeys.comment.GET_BY_NEWS, page.value, limit, ...paramsToArrString(others)];
};

export const useGetCommentByNews = (params = {}) => {
    const { page, limit = 3, ...others } = params;

    const options = computed(() => {
        return {
            queryKey: queryKeysGetAllComment({ page, limit, ...others }),
            queryFn: () => commentService.get({ page, limit, ...others }),
            staleTime: 5 * 1000,
            keepPreviousData: true,
            select: ({ metadata }) => {
                const results = metadata?.map((comment) => {
                    if (comment?.chitietbinhluan?.length > 0) {
                        return {
                            ...comment,
                            chitietbinhluan: sortByCreatedAt(comment.chitietbinhluan),
                        };
                    }

                    return comment;
                });

                return results;
            },
        };
    });

    const { isLoading, data } = useQuery(options);

    return { isLoading, data };
};

export const useMutationAddComment = () => {
    return useMutation({
        mutationFn: (data) => {
            return commentService.post(data);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export const useMutationReplyComment = () => {
    return useMutation({
        mutationFn: (data) => {
            return replyCommentService.post(data);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
