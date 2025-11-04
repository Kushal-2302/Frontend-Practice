// Repeat String N Times

const repeatStringNTimes = (str, n) => {
    let result = "";
    for(let i = 0; i < n; i++){
        result += str;
       // console.log(str); // we can also log each repetition if needed
    }           
    return result;
};
console.log(repeatStringNTimes("kushal ", 3)); // Output: kushal kushal kushal