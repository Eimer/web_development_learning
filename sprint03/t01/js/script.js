function getFormatteDate(dateObject) {
    let res = "";
    let options = {
        weekday: 'long',
    }
    let my_date = {
        date: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear(),
        hours: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        weekday: dateObject.toLocaleString("en-US", options)
    };

    if (my_date.date < 10)
        my_date.date = '0' + my_date.date;
    if (my_date.month < 10)
        my_date.month = '0' + my_date.month;
    if (my_date.hours < 10)
        my_date.hours = '0' + my_date.hours;
    if (my_date.minutes < 10)
        my_date.minutes = '0' + my_date.minutes; 
    res += my_date.date + "." + my_date.month + "." + my_date.year +
        " " + my_date.hours + ":" + my_date.minutes + " " + my_date.weekday;
    return res;
}
