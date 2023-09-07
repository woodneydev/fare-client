const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    const strMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    return month + '/' + year + ' - ' + hours + ':' + strMinutes + ampm;
}

export default formatDate;