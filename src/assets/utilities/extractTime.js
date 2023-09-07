function extractTime(dateTimeString) {
    const date = new Date(dateTimeString);
    
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    
    return `${hours}:${minutes}`;
}

const time = extractTime("2023-06-18T16:00:00.000Z");
console.log(time);

export default extractTime;