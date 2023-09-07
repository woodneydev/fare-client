function extractDate(dateTimeString) {
    const date = new Date(dateTimeString);
    
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');  
    const day = String(date.getUTCDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

const extractedDate = extractDate("2023-06-18T16:00:00.000Z");
console.log(extractedDate); 

export default extractDate;