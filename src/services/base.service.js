import http from "@/libs/http.lib";

class BaseService {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    get(params) {
        return http.get(this.endpoint, { params });
    }

    getById(id, params) {
        return http.get(`${this.endpoint}/${id}`, { params });
    }

    post(data) {
        return http.post(this.endpoint, data);
    }

    put(id, data) {
        return http.put(`${this.endpoint}/${id}`, data);
    }

    delete(id) {
        return http.delete(`${this.endpoint}/${id}`);
    }

    patch(id, data) {
        return http.patch(`${this.endpoint}/${id}`, data);
    }

    get http() {
        return http;
    }
}

export default BaseService;
