import queryKeys from "@/constants/queryKey.constant";
import categoryService from "@/services/category.service";
import { paramsToArrString } from "@/utils";
import { useQuery } from "@tanstack/vue-query";

export const queryKeyCategory = ({ page = 1, limit = 10, params = {} }) => {
    return [queryKeys.category.GET_ALL, page, limit, ...paramsToArrString(params)];
};

const useCategory = (params = {}) => {
    const { page = 1, limit = 10, ...others } = params;

    const { data, isPending } = useQuery({
        queryKey: queryKeyCategory({ page, limit, params: others }),
        queryFn: () => categoryService.get({ page, limit, ...others }),
        keepPreviousData: true,
        // staleTime: 5 * 1000,
    });

    return { data, isPending };
};

export default useCategory;
