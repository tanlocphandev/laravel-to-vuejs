import BaseService from "@/services/base.service";

class NewsService extends BaseService {
    getQueryParams(params) {
        return this.http.get(this.endpoint, {
            params: {
                ...params,
                page: params?.page?.value || 1,
            },
        });
    }

    getByIdQuery(id, params) {
        return this.http.get(`${this.endpoint}/${id.value}`, { params });
    }
}

export default new NewsService("/news");
