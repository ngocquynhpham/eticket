export const formatDate = (date: Date, separator: "/" | "-" = "/") => {
    let day: number = date.getDate();
    let month: number = date.getMonth() + 1;
    let year: number = date.getFullYear();
    let fullDate = [day, month, year].join(separator);
    return fullDate;
}
export const formatTime = (time: Date) => {
    let hour: number = time.getHours();
    let min: number = time.getMinutes() + 1;
    let fullTime = [hour,min].join(":");
    return fullTime;
}
export const formatFullTime = (time: Date) => {
    let hour: number = time.getHours();
    let min: number = time.getMinutes() + 1;
    let sec: number = time.getSeconds();
    let fullTime = [hour, min, sec].join(":");
    return fullTime;
}