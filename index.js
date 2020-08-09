module.exports.addTimeToDate = (date = 'now', type = '', value = 0) => {
    const d = date === 'now' ? new Date() : new Date(date)
    switch (type) {

        case "years":
        case "year":
            return new Date(d.setFullYear(d.getFullYear() + value))

        case "months":
        case "month":
            return new Date(d.setMonth(d.getMonth() + value))

        case "days":
        case "day":
            return new Date(d.setDate(d.getDate() + value))

        case "hours":
        case "hour":
            return new Date(d.setHours(d.getHours() + value))

        case "minutes":
        case "minute":
            return new Date(d.setMinutes(d.getMinutes() + value))

        case "seconds":
        case "second":
            return new Date(d.setSeconds(d.getSeconds() + value))

        default:
            return new Date(d.setMilliseconds(d.getMilliseconds() + value))
    }
}