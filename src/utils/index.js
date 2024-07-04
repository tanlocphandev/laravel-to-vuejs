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
    return Object.keys(params).map((key) => {
        return `${params[key]}`;
    });
};
