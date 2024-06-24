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
