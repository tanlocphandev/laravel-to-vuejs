import queryKeys from "@/constants/queryKey.constant";
import mailboxService from "@/services/mailbox.service";
import { paramsToArrString } from "@/utils";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { isAxiosError } from "axios";
import { computed } from "vue";
import { toast } from "vue-sonner";

export const queryKeysGetAllMailbox = ({ page, limit = 10, ...others }) => {
    return [queryKeys.news.GET_ALL, page.value, limit, ...paramsToArrString(others)];
};

export const useGetMailbox = (params = {}) => {
    const { page, limit = 3, ...others } = params;

    const options = computed(() => {
        return {
            queryKey: queryKeysGetAllMailbox({ page, limit, ...others }),
            queryFn: () => mailboxService.get({ page, limit, ...others }),
            staleTime: 5 * 1000,
            keepPreviousData: true,
        };
    });

    const { isLoading, data } = useQuery(options);

    return { isLoading, data };
};

export const useMutationAddMailbox = () => {
    return useMutation({
        mutationFn: (data) => {
            return mailboxService.post(data);
        },
        onError: (error) => {
            console.log({ error });

            if (isAxiosError(error)) {
                if (error.response.data?.errors) {
                    console.log(error.response.data.errors);

                    Object.values(error.response.data.errors).forEach((err) => {
                        err?.forEach((e) => {
                            toast.error(e, {
                                position: "bottom-center",
                            });
                        });
                    });
                } else {
                    toast.error(error.message);
                }
            }
        },
    });
};
