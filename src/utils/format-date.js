import moment from "moment";

export const dateFormat = (date) => {
    const day = moment(date).format('DD');
    const month = moment(date).format('MMM');
    const year = moment(date).year();
    return `Joined ${day} ${month} ${year}`
}

