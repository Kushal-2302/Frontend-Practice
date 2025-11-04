// Replace Spaces with Dashes
const replaceSpaces = str => {
    let result = "";
    for(let i = 0; i < str.length; i++){
        result +=  str[i] === " " ? "-" : str[i];
    }
    return result;
}
console.log(replaceSpaces("kushal kumar")); // Output: kushal-kumar