import queryKeys from "@/constants/queryKey.constant";
import newsTypesService from "@/services/newsTypes.service";
import { getQueryKeys } from "@/utils";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

export const useGetNewsTypes = (params = {}) => {
    const options = computed(() => {
        return {
            queryKey: getQueryKeys({ key: queryKeys.newsTypes.GET_ALL, ...params }),
            queryFn: () => newsTypesService.get(params),
            staleTime: 5 * 1000,
            keepPreviousData: true,
        };
    });

    const { isLoading, data } = useQuery(options);

    return { isLoading, data };
};
