import queryKeys from "@/constants/queryKey.constant";
import newsService from "@/services/news.service";
import { paramsToArrString } from "@/utils";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

export const queryKeysGetNewsDetails = (newId, params = {}) => {
    return [queryKeys.news.DETAILS, newId.value, ...paramsToArrString(params)];
};

export const queryKeysGetAllNews = ({ page, limit = 10, ...others }) => {
    return [queryKeys.news.GET_ALL, page.value, limit, ...paramsToArrString(others)];
};

export const useGetNewsDetails = (newId, params = {}) => {
    const options = computed(() => {
        return {
            queryKey: queryKeysGetNewsDetails(newId, params),
            queryFn: () => newsService.getByIdQuery(newId, params),
        };
    });

    const { isLoading, data } = useQuery(options);

    return { isLoading, data };
};

export const useGetNews = (params = {}) => {
    const { page, limit = 3, ...others } = params;

    const options = computed(() => {
        return {
            queryKey: queryKeysGetAllNews({ page, limit, ...others }),
            queryFn: () => newsService.getQueryParams({ page, limit, ...others }),
            staleTime: 5 * 1000,
            keepPreviousData: true,
        };
    });

    const { isLoading, data, isPlaceholderData } = useQuery(options);

    return { isLoading, data, isPlaceholderData };
};
