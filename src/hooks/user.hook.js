import queryKeys from "@/constants/queryKey.constant";
import newsService from "@/services/news.service";
import userService from "@/services/user.service";
import { paramsToArrString } from "@/utils";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

export const queryKeysGetNewsDetails = (newId, params = {}) => {
    return [queryKeys.news.DETAILS, newId.value, ...paramsToArrString(params)];
};

export const queryKeysGetAllUsers = (params = {}) => {
    return [queryKeys.news.GET_ALL, ...paramsToArrString(params)];
};

export const useGetNewsDetails = (newId, params = {}) => {
    const options = computed(() => {
        return {
            queryKey: queryKeysGetNewsDetails(newId, params),
            queryFn: () => newsService.getById(newId, params),
        };
    });

    const { isLoading, data } = useQuery(options);

    return { isLoading, data };
};

export const useGetUsers = (params = {}) => {
    const options = computed(() => {
        return {
            queryKey: queryKeysGetAllUsers(params),
            queryFn: () => userService.get(params),
            staleTime: 5 * 1000,
            keepPreviousData: true,
        };
    });

    const { isLoading, data } = useQuery(options);

    return { isLoading, data };
};
