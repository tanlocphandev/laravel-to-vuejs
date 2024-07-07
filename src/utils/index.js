import { SERVER_URL } from "@/constants";
import { formatDistanceToNow } from "date-fns";
import vi from "date-fns/locale/vi";
import moment from "moment";

export function getCurrentTime() {
    const now = new Date();
    const options = {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    return now.toLocaleDateString("en-GB", options).replace(/,/g, " |");
}

export const fDate = (date, format = "DD MMMM YYYY") => {
    return moment(date).format(format);
};

export const paramsToArrString = (params = {}) => {
    return Object.entries(params).map(([key, value]) => {
        return mapParamsToValues(value);
    });
};

export const mapParamsToValues = (params) => {
    return typeof params === "object" ? params.value : params;
};

export const mapParamsToQuery = (params = {}) => {
    return Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = typeof value === "object" ? value.value : value;
        return acc;
    }, {});
};

export const urlImage = (path, folder = "") => {
    return `${SERVER_URL}/assets/user/images/${folder !== "" ? `${folder}/` : ""}${path}`;
};

export const fToNow = (date) => {
    return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: vi,
    });
};

export const sortByCreatedAt = (array = []) => {
    return array.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

export const getQueryKeys = (params = {}) => {
    return paramsToArrString(params);
};

export const filterValuesEmptyObject = (params = {}) => {
    Object.entries(params).forEach(([key, value]) => {
        if (value === "" || value === null || value === undefined) {
            delete params[key];
        }
    });

    return params;
};
